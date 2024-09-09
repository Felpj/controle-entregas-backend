import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255) 
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
  
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price?: number;
  
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  stockQuantity?: number;
}
