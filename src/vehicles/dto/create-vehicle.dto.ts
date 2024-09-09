import { IsNotEmpty, IsString, IsNumber, IsEnum, MaxLength } from 'class-validator';
import { VehicleType } from '../enum/vehicleType.enum';


export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10) 
  plate: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  loadCapacity: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(VehicleType) 
  type: VehicleType;
}