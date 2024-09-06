import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeliveryStatus } from "../enum/deliveryStatus.enum";

@Entity({ name: 'delivery'})
export class DeliveryEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;
    @Column({name: 'scheduled_date_time', nullable: false})
    dateScheduledTime: Date;
    @Column({name: 'status', nullable: false})
    status: DeliveryStatus;
    @Column({name: 'observations'})
    observations: string;
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
}