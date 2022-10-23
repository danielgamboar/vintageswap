import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exchange {
  @PrimaryGeneratedColumn()
  id: number;
}
