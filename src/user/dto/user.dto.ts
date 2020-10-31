import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    name:string

    @IsOptional()
    token:string
}