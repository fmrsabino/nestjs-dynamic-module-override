import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class ExampleModule {
  static register(value: string): DynamicModule {
    return {
      module: ExampleModule,
      providers: [{ provide: 'TEST_TOKEN', useValue: value }],
    };
  }
}
