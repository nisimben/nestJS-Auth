import { Injectable, UseFilters } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserAuthDto } from '../dto/user.dto';
// import { sign } from 'jsonwebtoken';
import {  JwtService } from '@nestjs/jwt';





@Injectable()
export class AuthService {
    private newAuthUser: CreateUserAuthDto
    
    constructor(public userSrv:UserService,private jwtSrv:JwtService){
        
    }
    @UseFilters()
    async userAuth(username, password) {
        let res =  await this.userSrv.getAllUsers()
    
        for (let i of res) {
            let id = i.id
            let myusername = i.username
            if (i.password == password && myusername == username) {
                //Create Secret Token
               
                
                const secretToken = this.jwtSrv.sign({ id })
                console.log("new token: ",secretToken);
                
                this.newAuthUser = {
                    id: i.id,
                    username: myusername,
                    firstName: i.firstName,
                    lastName: i.lastName,
                    token: secretToken
                }
                console.log(this.newAuthUser);
                
                return this.newAuthUser
            }
                 
        }
    }
}
