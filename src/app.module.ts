import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  
  imports: [MongooseModule.forRoot('mongodb+srv://pranavbhujbal2001:pranavbhujbal2001@cluster0.eh7gy8i.mongodb.net/test-1?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}