import { PersonalInformation } from 'src/common/entities/personal-information.entity';
import { SaleDetails } from 'src/sales/entities/sale-details.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class Client extends PersonalInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  address: string;

  // External relations
  @OneToMany(() => SaleDetails, (sales_detail) => sales_detail.client, {
    cascade: true,
  })
  sales_detail: SaleDetails[];
}
