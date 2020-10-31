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
            userName:'test',
            passWord:'test',
            token:'my-token'
            
        }
    ]
    
    
    
    async getAllUsers():Promise<UserEntity[]>{
        console.log(this.users);
        
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
        newUser.firstName = 'ben-shmuel';
        newUser.userName = 'nisim@gmail.com';
        newUser.passWord = '123456';
        this.users.push(newUser)
        console.log(newUser);
        
       return newUser
   }

}
