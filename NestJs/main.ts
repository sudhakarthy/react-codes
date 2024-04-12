/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  //
  /* app.enableCors();
  app.useLogger(new ServiceLogger('NatHazCalcLogger'));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector))); */
  //
  /* Swagger setup

  const config = new DocumentBuilder()
    .setTitle('Title of the API Swagger')
    .setDescription(
      'API to calculate addition of two numbers'
    )
    .setVersion('1.0')
    .setContact(
      'MathExperts',
      'URLPath',
      'MathExperts@academy.com'
    )
    .addBearerAuth()
    .addTag('Addition')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (process.env.CREATE_SWAGGER_SPEC == '1') {
    fs.writeFileSync(
      './location_swagger_jsonfile.json',
      JSON.stringify(document, null, 2)
    );
  }

  SwaggerModule.setup('api', app, document);

  */
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
