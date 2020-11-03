import { Injectable, NestMiddleware, Body, UseFilters, HttpStatus, HttpException } from '@nestjs/common';
import { Request,Response, response } from 'express'
import { AuthService } from 'src/user/auth/auth.service';
import { HttpExeptionFilter } from 'src/filters/http-exeption.filter';
import { verify  } from 'jsonwebtoken';


@Injectable()
@UseFilters(new HttpExeptionFilter())
export class CheckTokenMiddleware implements NestMiddleware {
  
  constructor(private authSrv:AuthService){}
  
  
  use(req: Request, res: Response, next: Function) {
    console.log(req.headers.authorization);
    
    let token = req.headers.authorization.split(' ')[1];

    
    let userId = verify(token,process.env.secret)
    if (userId) {
        
      next();
    }
    else{
      
      throw new HttpException(response,305);
    }
  }
}
