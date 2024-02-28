import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PostService } from './post/post.service';

@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService, PostService],
})
export class AppModule {}
