import { Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import * as uuid from 'uuid'
import { FilesService } from './files.service'
import * as process from 'node:process'

@Controller('files')
export class FilesController {

  constructor(
    private readonly fileService: FilesService,
  ) {
  }

  @Get('/:filename')
  getFiles(@Param('filename') filename: string) {
    return this.fileService.getImageByFileName(filename)
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './storage',
      filename: (req, file, cb) => {
        const ext = extname(file.originalname)
        cb(null, `${uuid.v4()}${ext}`)
      },
    }),
  }))

  // TODO #1: Переделать сохраниение ссылки на изображение товара (отвязать от пути и порта)
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // @ts-ignore
    return JSON.stringify(`${process.env.HOST}${process.env.PORT}/${file.filename}`)
  }

  @Delete('/:name')
  deleteFileFromStorage(@Param('name') name: string) {
    return this.fileService.deleteFileFromStorage(name)
  }
}
