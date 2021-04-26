import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('course_modules')
export class CourseModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
}