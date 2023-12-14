import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';
import {
  PostEmojiParamsRequestDTO,
  PostEmojiRequestDTO,
} from './dto/post-emoji.request.dto';
import { PostEmojiResponseDTO } from './dto/post-emoji.response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmoji(
    @Req() request: Request,
    @Query('index', EmojiValidationPipe) index?: number,
  ) {
    console.log('Controller');
    return {
      browser: request.headers.browser,
      emoji: this.appService.getEmoji(index),
    };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post(':indexParams')
  postEmoji(
    @Body() payload: PostEmojiRequestDTO,
    @Param() params: PostEmojiParamsRequestDTO,
  ): PostEmojiResponseDTO {
    console.log('Controller');
    console.log('PAYLOAD', payload);
    return new PostEmojiResponseDTO({
      payload,
      params,
    });
  }
}
