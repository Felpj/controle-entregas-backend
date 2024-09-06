import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { DeliveryStatus } from '../enum/deliveryStatus.enum';

export class CreateDeliveryDto {
    @IsDateString()
    dateScheduledTime: Date;

    @IsEnum(DeliveryStatus)
    status: DeliveryStatus;

    @IsOptional()
    @IsString()
    observations: string;
}
