import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { FilesHandlerModule } from '@hilma/fileshandler-server';

@Module({
  imports: [
    FilesHandlerModule.register({
      folder: '../../image-folder',
      autoAllow: true,
      pathPrefix: '/api',
    }),
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
