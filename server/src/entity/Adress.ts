import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

@Entity()
export class Adress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  floor: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
