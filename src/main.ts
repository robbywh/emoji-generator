import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';
// import { LoggerMiddleware } from './common/logger/logger.middleware';
// import { AuthGuard } from './common/auth/auth.guard';
// import { BrowserInterceptor } from './common/browser/browser.interceptor';
// import { TransformResponseInterceptor } from './common/transform-response/transform-response.interceptor';
// import { AllExceptionsFilter } from './common/all-exceptions/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalInterceptors(new BrowserInterceptor());
  // app.useGlobalInterceptors(new TransformResponseInterceptor());
  // app.useGlobalFilters(new AllExceptionsFilter());
  // app.use(LoggerMiddleware);
  // app.useGlobalPipes(new EmojiValidationPipe());
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const host = `0.0.0.0`;
  await app.listen(port, host);
}
bootstrap();
