import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class MailTransporter {
  constructor(
    /**
     * Inject MailerService
     */

    private readonly configService: ConfigService,
  ) {}

  public async createTransporter(): Promise<Transporter> {
    return createTransport({
      host: this.configService.get('appConfig.mailHost'),
      port: this.configService.get('appConfig.mailPort'),
      secure: this.configService.get('appConfig.secure'),
      auth: {
        user: this.configService.get('appConfig.smtpUserName'),
        pass: this.configService.get('appConfig.smtpPassword'),
      },
    });
  }
  // public async sendMail(options: SendMailOptions) {
  //   return this.transporter.sendMail(options);
  // }
}
