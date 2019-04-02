import * as mongoose from 'mongoose';

export const EventoSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  data: String,
  local: String,
  cidade: String,
  estado: String,
  horario: String,
});
