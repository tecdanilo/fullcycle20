import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}