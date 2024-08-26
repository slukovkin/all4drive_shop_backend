import { Body, Controller, Get, Post, Res, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import e, { Response } from 'express'
import { Error } from 'sequelize'
import * as path from 'node:path'

interface FileParams {
  filename: string
}

@Controller()
export class UploadController {

  @Get('/image')
  getImage(@Res() res: Response, @Body() file: FileParams) {
    res.sendFile(path.join(__dirname, '../../storage/' + file.filename))
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './storage',
      filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
        callback(null, `${file.originalname}`)
      },
    }),
  }))
  async upload() {
    return 'success'
  }
}
