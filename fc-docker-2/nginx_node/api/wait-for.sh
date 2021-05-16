#!/bin/sh

retry=0

max_retry=12

command=$1
app_name=$2
host=$3

wait_for_http() {
    while true; do
        status=$(curl -s -o /dev/null -w '%{http_code}' $host)
        echo "curl=$host  status=$status"
        if [ $retry -eq $max_retry ]; then
            exit 1
        fi
        if [ $status -eq 200 ]; then
            echo "App $app_name status OK"
            break
        else
            curl $host
            retry=$(expr $retry + 1)
            echo "Unable to connect app service $host.... retry " $retry
            sleep 6
        fi
    done
}

wait_for_tcp() {
    while true; do
        $(nc -z $host $port)
        status=$?
        echo "nc=$host $port  status=$status"
        if [ $retry -eq $max_retry ]; then
            exit 1
        fi
        if [ $status -eq 0 ]; then
            echo "App $app_name status OK"
            break
        else
            nc -z $host $port
            retry=$(expr $retry + 1)
            echo "Unable to connect app service $host $port.... retry " $retry
            sleep 6
        fi
    done
}

usage() {
    cat <<USAGE >&2
Usage:
    ./wait-for.sh [http|tcp] [app_name] [host] [port]

    Parameters:
    first: http|tcp             http: checks http response code=200
                                tcp: check tcp connection up
    second: app_name            App name
    third: host                 If first parameter = http [<hostname>:<port>/<uri> (http://127.0.0.1:6600/ping)]
                                If first parameter = tcp [<hostname> (127.0.0.1)]
    fourth: port                Only set if first parameter is tcp
USAGE
    exit 1
}

if [ "$command" = "http" ]; then
    wait_for_http
elif [ "$command" = "tcp" ]; then
    port=$4
    wait_for_tcp
else
    usage
fi
