import { Controller, Get, Param, Post, Body, UsePipes, ValidationPipe, ParseIntPipe, HttpStatus, UseGuards, SetMetadata, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { AuthService } from './auth/auth.service';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';
import { UpperCasePipe } from 'src/pipes/upperCase.pipe';
import { AuthGuard } from 'src/auth.guard';

@Controller('users')

export class UserController {

    constructor(private userSrv: UserService, private auth: AuthService) { }

    @Get()
    @UseGuards(AuthGuard)
    @SetMetadata('roles', ['admin'])
    getAll() {
        let val = this.userSrv.getAllUsers()
        return val
    }

    @Get('/:id')
    @UseGuards(AuthGuard)
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return this.userSrv.getUserById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)

    create(@Body() createuserdto: CreateUserDto) {
        return this.userSrv.createUser(createuserdto)
    }
    @Post('authenticate')
    // @UsePipes(new UpperCasePipe())
    getUserToken(@Body('username') username: string, @Body('password') password: string) {
        console.log("controller auth method");

        let found = this.auth.userAuth(username, password);

        if (!found) {
            throw new HttpExeptionFilter()
        }
        return found
    }

 
}
