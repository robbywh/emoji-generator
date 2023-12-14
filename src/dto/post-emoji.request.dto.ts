import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
export class PostEmojiRequestDTO {
  @IsNumber()
  index: number;
}

export class PostEmojiParamsRequestDTO {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  indexParams: number;
}
