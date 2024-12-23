import { FilesType, ImageService } from '@hilma/fileshandler-server';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  constructor(private readonly imageService: ImageService) {}

  async uploadFile(file: FilesType) {
    const imagePath = await this.imageService.saveSingleFile(file);
    return imagePath;
  }
}
