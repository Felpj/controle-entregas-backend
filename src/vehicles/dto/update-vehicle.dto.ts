import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { VehicleType } from '../enum/vehicleType.enum';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  plate?: string;

  @IsNotEmpty()
  @IsString()
  model?: string;

  @IsNotEmpty()
  @IsNumber()
  loadCapacity?: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(VehicleType)
  type?: VehicleType;
}
