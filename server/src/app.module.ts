import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/modules/user.module';
import { TicketModule } from './api/modules/ticket.module';

@Module({
  imports: [UserModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
