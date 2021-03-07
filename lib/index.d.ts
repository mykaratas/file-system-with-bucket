import { Client as MinioClient, ClientOptions } from 'minio';
export declare const Greeter: (name: string) => string;
export interface Factory {
    client?: MinioClient;
    put(): any;
    get(): any;
    list(): any;
}
export declare class MinioFactory implements Factory {
    put(): void;
    get(): void;
    list(): void;
}
export declare class LocaleFactory implements Factory {
    put(): void;
    get(): void;
    list(): void;
}
export declare class FtpFactory implements Factory {
    put(): void;
    get(): void;
    list(): void;
}
export declare class SftpFactory implements Factory {
    put(): void;
    get(): void;
    list(): void;
}
export interface Put {
    put(): any;
}
export interface Get {
    get(): any;
}
export interface List {
    list(): any;
}
export declare class MinioPut implements Put {
    put(): void;
}
export declare class FtpPut implements Put {
    put(): void;
}
export declare class SftpPut implements Put {
    put(): void;
}
export declare class LocalePut implements Put {
    put(): void;
}
export declare class MinioList implements List {
    list(): void;
}
export declare class FtpList implements List {
    list(): void;
}
export declare class SftpList implements List {
    list(): void;
}
export declare class LocaleList implements List {
    list(): void;
}
export declare class MinioGet implements Get {
    get(): void;
}
export declare class FtpGet implements Get {
    get(): void;
}
export declare class SftpGet implements Get {
    get(): void;
}
export declare class LocaleGet implements Get {
    get(): void;
}
export declare class FileSystem implements Factory {
    private factory;
    constructor(factory: Factory);
    put(): any;
    get(): any;
    list(): any;
}
export interface Config extends ClientOptions {
}
export declare class FileSystemConfig {
    constructor(client: MinioClient);
}
