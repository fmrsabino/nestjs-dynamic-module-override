import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example.module';

@Module({
  imports: [ExampleModule.register('production')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
