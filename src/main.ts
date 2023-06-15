import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = NestFactory.create<NestFastifyApplication>(AppModule);

  (await app).listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
  });
}

bootstrap();
