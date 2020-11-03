import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    if(req.method == 'GET'){
      console.log("heders",req.headers);
      console.log("params",req.url.slice(1));
      }
      else if (req.method == 'POST'){
        console.log("body",req.body);
      }
      next();
    }
}
