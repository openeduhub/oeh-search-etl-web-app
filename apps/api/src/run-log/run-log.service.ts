import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export type State = 'running' | 'canceled' | 'finishedSuccessfully' | 'error';

export interface LogData {
    startTime: Date;
    state: State;
    log: string;
}

export class RunLogger {
    setState(state: State): void {
        throw new Error('not implemented');
    }

    appendLog(log: string): void {
        throw new Error('not implemented');
    }

    getData(): Observable<LogData> {
        throw new Error('not implemented');
    }
}

@Injectable()
export class RunLogService {
    startNewLogger(spider: string): RunLogger {
        return new RunLogger();
    }

    getRunLogs(spider: string): RunLogger[] {
        throw new Error('not implemented');
    }
}
