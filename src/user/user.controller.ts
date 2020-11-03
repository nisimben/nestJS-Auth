import { Controller, Get, Param, Post, Body, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { AuthService } from './auth/auth.service';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';

@Controller('users')

export class UserController {
    
    constructor(private userSrv:UserService,private auth:AuthService){}
    
    @Get()
    getAll()
    {
        return this.userSrv.getAllUsers()
    }
    
    @Get(':id')
    findOne(@Param('id')id:number)
    {
        return this.userSrv.getUserById(id)
    }
    
    @Post()
    create(@Body()createuserdto:CreateUserDto)
    {
        return this.userSrv.createUser(createuserdto)
    }
    @Post('authenticate')
     getUserToken(@Body('username')username:string,@Body('password')password:string)
    { 
        let found =  this.auth.userAuth(username, password  );
        
        if(!found){
            throw new HttpExeptionFilter()
        }
        return found
    }
    

}
