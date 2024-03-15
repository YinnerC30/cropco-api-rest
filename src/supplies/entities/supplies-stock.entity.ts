import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Supply } from './supply.entity';

@Entity({ name: 'supplies_stock' })
export class SuppliesStock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Supply, { eager: true })
  @JoinColumn()
  supply: Supply;

  @Column({ type: 'int4' })
  amount: number;
}
