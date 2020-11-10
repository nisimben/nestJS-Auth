import { Injectable, NestMiddleware, Body, UseFilters, HttpException } from '@nestjs/common';
import { Request,Response, response } from 'express'
import { AuthService } from 'src/user/auth/auth.service';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';
// import { verify  } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt'


@Injectable()
@UseFilters(new HttpExeptionFilter())
export class CheckTokenMiddleware implements NestMiddleware {
  
  constructor(private jwtSrv:JwtService){}
  
  
  use(req: Request, res: Response, next: Function) {
    let token = req.headers.authorization.split(' ')[1];
    let userId = this.jwtSrv.verify(token)
    console.log("userID: ", userId);
    
    if (userId) {
        
      next();
    }
    else{
      
      throw new HttpException(response,305);
    }
  }
}
