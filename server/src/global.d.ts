/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly PORT?: number;
    }
}