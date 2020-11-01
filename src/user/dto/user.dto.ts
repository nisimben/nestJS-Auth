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
    userName:string
    passWord?:string
    firstName:string
    lastName:string
    token:string

    
}