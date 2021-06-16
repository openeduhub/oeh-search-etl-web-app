import { Injectable } from '@nestjs/common';
import { RunLogger, RunLogService } from '../run-log/run-log.service';

@Injectable()
export class ScrapyService {
    constructor(private readonly runLogService: RunLogService) {}

    getAvailableSpiders(): string[] {
        throw new Error('not implemented');
    }

    startSpider(spider: string): void {
        const logger = this.runLogService.startNewLogger(spider);
        throw new Error('not implemented');
    }

    cancelSpider(spider: string): void {
        throw new Error('not implemented');
    }
}
