import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { OrderStatus } from '../enum/orderStatus.enum';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({name: 'delivery_address', nullable: false })
  deliveryAddress: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING }) // Use o enum e defina o valor padrão
  status: OrderStatus;

  @Column({name:'observations', nullable: true })
  observations: string;

  @Column({name:'scheduled_date_time', nullable: true })
  scheduledDateTime: Date;

  @Column({name:'estimated_delivery_time', nullable: true })
  estimatedDeliveryTime: number; 

  @CreateDateColumn({name: 'createdAt',})
  createdAt: Date;

  @UpdateDateColumn({name: 'UpdateDateColumn',})
  updatedAt: Date;
}