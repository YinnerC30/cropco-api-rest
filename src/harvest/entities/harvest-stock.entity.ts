import { Crop } from 'src/crops/entities/crop.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('harvests_stock')
export class HarvestStock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Crop, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cropId' })
  crop: Crop;

  @Column({
    type: 'int4',
  })
  total: number;
}
