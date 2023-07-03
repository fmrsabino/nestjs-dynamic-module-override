import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ExampleModule } from './example.module';

describe('AppController', () => {
  it('TEST_TOKEN should have a value of test', async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideModule(ExampleModule)
      .useModule(ExampleModule.register('test'))
      .compile();

    const testToken = app.get<string>('TEST_TOKEN');

    expect(testToken).toBe('test');
  });
});
