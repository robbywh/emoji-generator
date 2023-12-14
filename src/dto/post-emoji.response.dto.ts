import { Exclude } from 'class-transformer';
class Payload {
  index: number;
}

class Params {
  indexParams: number;
}

export class PostEmojiResponseDTO {
  payload: Payload;
  @Exclude()
  params: Params;

  constructor(partial: Partial<PostEmojiResponseDTO>) {
    Object.assign(this, partial);
  }
}
