import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { LoggerMiddleware } from 'src/middelware/logger.middleware';
import { CheckTokenMiddleware } from 'src/middelware/check-token.middleware';

import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/config/jwtConfig';

@Module({
  imports:[ConfigModule.forRoot(
    {load: [jwtConfig]}
  )],
  controllers: [UserController],
  providers: [UserService, AuthService]
})
export class UserModule {
  
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes({path:'users',method:RequestMethod.ALL})
    consumer.apply(CheckTokenMiddleware).forRoutes({path:'users',method:RequestMethod.GET})
  }

   
  
}
