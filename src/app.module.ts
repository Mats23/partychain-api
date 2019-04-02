import { Module } from '@nestjs/common';
import { EventoModule } from './evento/evento.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [DatabaseModule, EventoModule],

})
export class AppModule {}
