import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    private users:UserEntity[]=[
        {
            id:1,
            firstName:'test',
            lastName:'test',
            username:'test',
            password:'test',
            role:''

            
            
        },
        {
            id : 2,
            firstName : 'nisim',
            lastName : 'ben-shmuel',
            username : 'nisim@gmail.com',
            password : '123456',
            role:''

        }
    ]
    
    
    
    async getAllUsers():Promise<UserEntity[]>{
        
        
        return this.users;
    }
    async getUserById(id:number):Promise<UserEntity>{
        const index = this.users.findIndex(user=> user.id ===id)
        return this.users[index] ;
    }
    async createUser(userInfo:CreateUserDto):Promise<UserEntity>{
        const newUser:UserEntity=new UserEntity();
        newUser.id = 2;
        newUser.firstName = 'nisim';
        newUser.lastName = 'ben-shmuel';
        newUser.username = 'nisim@gmail.com';
        newUser.password = '123456';
        newUser.role = '';
        
        this.users.push(newUser)
        
        
       return newUser
   }


}
