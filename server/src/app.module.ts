import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/modules/user.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    UserModule,
  ],
})
export class AppModule {}
