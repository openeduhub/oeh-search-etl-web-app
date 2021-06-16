import { Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from '@oeh-search-etl-web-app/api-interfaces';
import { ScrapyService } from '../scrapy/scrapy.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly scrapyService: ScrapyService
    ) {}

    @Get('hello')
    getData(): Message {
        return this.appService.getData();
    }

    @Get('availableSpiders')
    getAvailableSpiders(): string[] {
        return this.scrapyService.getAvailableSpiders();
    }

    @Post('startSpider/:spider')
    startSpider(@Param('spider') spider: string): void {
        this.scrapyService.startSpider(spider);
    }

    @Post('cancelSpider/:spider')
    cancelSpider(@Param('spider') spider: string): void {
        this.scrapyService.cancelSpider(spider);
    }
}
