import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserEntity } from '../user.entity';

@Injectable()
export class AuthService {
    private authUser:UserEntity
    constructor(){}
    
}
