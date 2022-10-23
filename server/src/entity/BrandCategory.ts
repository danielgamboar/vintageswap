import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "./Brand";

@Entity()
export class BrandCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  points: number;

  @OneToMany(() => Brand, (brand) => brand.brandCategory)
  brands: Brand[];
}
