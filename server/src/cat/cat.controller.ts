import { FilesType, UseFilesHandler } from '@hilma/fileshandler-server';
import { Controller, Get, Post, UploadedFiles } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): string {
    return 'cat';
  }

  @Post('/upload-image')
  @UseFilesHandler()
  async uploadFile(@UploadedFiles() file: FilesType) {
    return await this.catService.uploadFile(file);
  }
}
