import { Injectable, NestMiddleware, Body, UseFilters, HttpStatus, HttpException } from '@nestjs/common';
import { Request,Response, response } from 'express'
import { AuthService } from 'src/user/auth/auth.service';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';


@Injectable()
@UseFilters(new HttpExeptionFilter())
export class CheckTokenMiddleware implements NestMiddleware {
  constructor(private authSrv:AuthService){}
  use(req: Request, res: Response, next: Function) {
    
    if (req.headers["token"]=='My-Token') {
      
      console.log('Token is True');
    }
    else{
      
      throw new HttpException(response,305);
    }
    next();
  }
}
