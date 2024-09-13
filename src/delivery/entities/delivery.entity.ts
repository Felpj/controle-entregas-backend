import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DeliveryStatus } from '../enum/deliveryStatus.enum';
import { OrderEntity } from 'src/order/entities/order.entity';
import { VehiclesEntity } from 'src/vehicles/entities/vehicle.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Entity({ name: 'delivery' })
export class DeliveryEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'scheduled_date_time', nullable: false })
  dateScheduledTime: Date;

  @Column({ name: 'status', nullable: false })
  status: DeliveryStatus;

  @Column({ name: 'observations' })
  observations: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}
