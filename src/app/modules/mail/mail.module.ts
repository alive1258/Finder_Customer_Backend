import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { OTP } from './entities/otp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailTransporter } from './providers/mailTransporter.provider';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([OTP])],
  providers: [MailService, MailTransporter],
  exports: [MailService],
})
export class MailModule {}
