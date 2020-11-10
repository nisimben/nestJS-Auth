import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { ConfigModule }from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmconfig } from './config/typeorm.config';



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmconfig),
    UserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
