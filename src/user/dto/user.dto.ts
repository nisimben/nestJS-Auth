import { IsNotEmpty, IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CreateUserDto{
    @IsNotEmpty()
    name:string

    @IsOptional()
    token:string
}
export interface CreateUserAuthDto{ 
    id:number
    username:string
    password?:string
    firstName:string
    lastName:string
    token:string

    
}