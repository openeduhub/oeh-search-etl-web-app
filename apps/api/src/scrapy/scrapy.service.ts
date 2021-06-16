import { Injectable } from '@nestjs/common';
import { RunLogger, RunLogService } from '../run-log/run-log.service';

@Injectable()
export class ScrapyService {
    constructor(private readonly runLogService: RunLogService) {}

    getAvailableSpiders(): string[] {
        console.log('getAvailableSpiders!!!');
        throw new Error('not implemented');
    }

    startSpider(spider: string): void {
        const logger = this.runLogService.startNewLogger(spider);
        console.log('startSpider!!!');
        throw new Error('not implemented');
    }

    cancelSpider(spider: string): void {
        console.log('cancelSpider!!!');

        throw new Error('not implemented');
    }
}
