import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: false })
    coordinator: string;

    @Prop({ required: false })
    location: string;

    @Prop({ required: true })
    startTime: string;

    @Prop({ required: true })
    endTime: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);