import { TypeOrmModuleOptions } from '@nestjs/typeorm'
export const typeOrmconfig : TypeOrmModuleOptions ={
    type:'postgres',
    host: 'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'marvelDB',
    entities:[__dirname + '/../**/*.entity.{js,ts}'],
    synchronize:true,
}