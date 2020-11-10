import { PrimaryGeneratedColumn, Column } from "typeorm"

export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    
    username:string
    password:string
    role:string
    token?:string


}