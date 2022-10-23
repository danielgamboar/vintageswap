import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";
import { Exchange } from "./Exchange";
import { File } from "./File";

import { Type } from "./Type";
import { Usage } from "./Usage";
import { User } from "./User";

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  size: string;

  @Column()
  status: string;

  @Column()
  points: string;

  @Column()
  description: string;

  @ManyToOne(() => Brand, (brand) => brand.clothes, { eager: true })
  brand: Brand;

  @ManyToOne(() => Usage, (usage) => usage.clothes, { eager: true })
  usage: Usage;

  @ManyToOne(() => Type, (type) => type.clothes, { eager: true })
  type: Type;

  @ManyToMany(() => File)
  @JoinTable()
  images: File[];

  @ManyToOne(() => User, (user) => user.clothes)
  user: User;

  @ManyToMany(() => Exchange)
  exchanges: Exchange[];
}
