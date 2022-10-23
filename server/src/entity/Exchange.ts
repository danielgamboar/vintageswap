import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clothes } from "./Clothes";
import { User } from "./User";

@Entity()
export class Exchange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  status: string;

  @ManyToMany(() => User, (user) => user.exchanges)
  @JoinTable()
  users: User[];

  @ManyToMany(() => Clothes, (clothes) => clothes.exchanges)
  @JoinTable()
  clothes: Clothes[];
}
