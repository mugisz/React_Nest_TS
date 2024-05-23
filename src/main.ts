if(!process.env.IS_TS_NODE){
  require('module-alias/register')

}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  await app.listen(5000);
}
bootstrap();
