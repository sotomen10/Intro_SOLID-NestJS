import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MicrocreditModule } from './modules/microcredit/microcredit.module';

@Module({
  imports: [UserModule, MicrocreditModule],
})
export class AppModule {}