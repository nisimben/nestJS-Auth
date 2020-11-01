import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserAuthDto } from '../dto/user.dto';



@Injectable()
export class AuthService {
    private newAuthUser: CreateUserAuthDto 
    constructor(private userSrv: UserService) { }
    userAuth( passWord, userName) {
       
        return this.userSrv.getAllUsers().then((res) => {
            for (let i of res) {
                if (i.passWord == passWord && i.userName == userName) {

                     this.newAuthUser ={
                         id:i.id,
                         userName: i.userName,
                         firstName: i.firstName,
                         lastName : i.lastName,
                         token : 'My-Token'
                        }  
                        return this.newAuthUser
                     
                    }
                }
            })
        }
}
