declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            REACT_APP_API_KEY: string;
        }
    }
}

export {};
