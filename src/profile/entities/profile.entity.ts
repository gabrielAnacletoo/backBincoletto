import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Profile {
  @Prop({ required: true })
  nome: string;

  @Prop()
  telefone: string;

  @Prop({unique: true})
  email: string;

  @Prop()
  renda: string 

  @Prop()
  pretencao: string 

  @Prop()
  experiencia: boolean

  @Prop()
  banco: string


  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: null })
  deletedAt: Date;
}

export type ProfileDocument = Profile & Document;

export const ProfilelSchema = SchemaFactory.createForClass(Profile);