import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Evento } from './interface/Evento';
import { CreateEventoDto } from './dto/CreateEventoDto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventoService {

  // @ts-ignore
  constructor(@InjectModel('Evento') private readonly eventoModel: Model<Evento>) {}

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const createdEvento = new this.eventoModel(createEventoDto);
    return await createdEvento.save();
  }

  async findAll(): Promise<Evento[]> {
    return await this.eventoModel.find().exec();
  }

}
