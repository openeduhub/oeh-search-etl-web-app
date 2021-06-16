export interface Message {
    message: string;
}

export type State = 'running' | 'canceled' | 'complete' | 'error';

export interface SpiderRun {
    startTime: Date;
    state: State;
    id: string;
}

export interface Spider {
    name: string;
    lastRun: SpiderRun | null;
}
