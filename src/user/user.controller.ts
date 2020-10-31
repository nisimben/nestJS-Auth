import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userSrv:UserService){}

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
    
    

}
