import { Module } from '@nestjs/common';
import { RunLogService } from '../run-log/run-log.service';
import { ScrapyService } from '../scrapy/scrapy.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, ScrapyService, RunLogService],
})
export class AppModule {}
