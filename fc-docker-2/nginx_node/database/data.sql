CREATE TABLE test.`people` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;


SET session character_set_connection = utf8;
insert into `people` (`name`) values ('João');
insert into `people` (`name`) values ('Maria');
insert into `people` (`name`) values ('Argentina');
insert into `people` (`name`) values ('Weslei');
