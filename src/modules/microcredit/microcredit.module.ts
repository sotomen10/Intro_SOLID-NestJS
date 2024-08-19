import { Module } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { MicrocreditRegistryService } from './microcredit-registry.service';
import { MicrocreditRepository } from './microcredit.repository';
import { UserModule } from '../user/user.module'; // Ajusta la ruta si es necesario

@Module({
  imports: [UserModule], // Importa módulos necesarios
  providers: [
    MicrocreditService,
    MicrocreditRegistryService,
    MicrocreditRepository, // Asegúrate de que MicrocreditRepository esté en providers
  ],
  exports: [MicrocreditService, MicrocreditRegistryService],
})
export class MicrocreditModule {}