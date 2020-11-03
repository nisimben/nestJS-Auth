import { Injectable, ForbiddenException, UseFilters } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserAuthDto } from '../dto/user.dto';
import { sign } from 'jsonwebtoken';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';




@Injectable()
export class AuthService {
    private newAuthUser: CreateUserAuthDto
    public secretToken;

    constructor(private userSrv: UserService) {

    }
    @UseFilters()
    async userAuth(username, password) {
        let res =  await this.userSrv.getAllUsers()
    
        for (let i of res) {
            if (i.password == password && i.username == username) {
                //Create Secret Token
                this.secretToken = sign({ userId: i.id }, process.env.secret)
                
                this.newAuthUser = {
                    id: i.id,
                    username: i.username,
                    firstName: i.firstName,
                    lastName: i.lastName,
                    token: this.secretToken
                }
                
                return this.newAuthUser
            }
                 
        }
    }
}
