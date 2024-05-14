import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  id: string;

  @Column({unique: true})
  email: string;

  @Column({ nullable: true })
  password: string;  

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}