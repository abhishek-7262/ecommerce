import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    price: number;

    @IsNumber()
    @IsOptional()
    stock?: number;

    @IsString()
    @IsOptional()
    category?: string;
}
