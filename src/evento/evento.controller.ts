import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/CreateEventoDto';
import { Evento } from './interface/Evento';

@Controller('evento')
export class EventoController {

  constructor(private readonly  eventoService: EventoService) {}
  @Post()
  createEvento(@Body() createEventoDto: CreateEventoDto): Promise<Evento> {
    return this.eventoService.create(createEventoDto);
}
@Get()
  find(): Promise<Evento[]> {
    return this.eventoService.findAll();
}
}
