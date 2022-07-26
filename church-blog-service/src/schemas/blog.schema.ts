import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

export enum BlogStatus {
    Published = 'published',
    Draft = 'draft',
    Archived = 'archived'
}

@Schema()
export class Blog {
    @Prop({ required: true })
    title: string;

    @Prop({ required: false })
    subtitle: string;

    @Prop({ required: false })
    author: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    status: BlogStatus;

    @Prop({ required: false })
    tags: string[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);