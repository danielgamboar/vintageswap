import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BrandCategory } from "./BrandCategory";
import { Clothes } from "./Clothes";
@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BrandCategory, (brandCategory) => brandCategory.brands)
  brandCategory: BrandCategory;

  @OneToMany(() => Clothes, (clothes) => clothes.brand)
  clothes: Clothes[];
}
