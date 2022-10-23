import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Adress } from "./Adress";
import { Clothes } from "./Clothes";
import { Exchange } from "./Exchange";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  points: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column()
  password: string;

  @OneToMany(() => Clothes, (clothes) => clothes.user)
  clothes: Clothes[];

  @ManyToMany(() => Exchange)
  @JoinTable()
  exchanges: Exchange[];

  @Column()
  adress: string;

  @Column()
  height: string;

  @Column()
  chest: string;

  @Column()
  leg: string;

  @Column()
  hip: string;

  @Column()
  size: string;

  @Column()
  quote: string;
}
