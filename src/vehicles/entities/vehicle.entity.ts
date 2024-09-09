import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { VehicleType } from '../enum/vehicleType.enum';

@Entity('vehicles') // Nome da tabela no banco de dados
export class VehiclesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'plate', unique: true, nullable: false })
  plate: string;

  @Column({name: 'model', nullable: false })
  model: string;

  @Column({ name: 'loadCapacity', nullable: false })
  loadCapacity: number;

  @Column({type: 'enum', enum: VehicleType, nullable: false })
  type: VehicleType;

  @CreateDateColumn({name: 'createdAt',})
  createdAt: Date;

  @UpdateDateColumn({name: 'UpdateDateColumn',})
  updatedAt: Date;
}