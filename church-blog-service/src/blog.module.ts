import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Blog, BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/church-ms'),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }])
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
