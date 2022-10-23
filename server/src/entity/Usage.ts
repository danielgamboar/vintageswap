import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clothes } from "./Clothes";

@Entity()
export class Usage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  points: number;

  @OneToMany(() => Clothes, (clothes) => clothes.usage)
  clothes: Clothes[];
}
