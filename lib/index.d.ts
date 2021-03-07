import { Client as MinioClient, ClientOptions as MinioClietOptions } from 'minio';
import SftpClient, { ConnectOptions } from 'ssh2-sftp-client';
import { AccessOptions, Client as FtpClient } from 'basic-ftp';
export declare const Greeter: (name: string) => string;
export interface Factory {
    client?: MinioClient | SftpClient | FtpClient;
    put(): any;
    get(): any;
    list(): any;
}
export declare class MinioFactory implements Factory {
    client: MinioClient;
    constructor(minioClientOptions: MinioClietOptions);
    put(): void;
    get(): void;
    list(): void;
}
export declare class FtpFactory implements Factory {
    client: FtpClient;
    constructor(ftpClientOptions: FtpClientOptions);
    put(): void;
    get(): void;
    list(): void;
}
export declare class LocaleFactory implements Factory {
    put(): void;
    get(): void;
    list(): void;
}
export declare class SftpFactory implements Factory {
    client: SftpClient;
    constructor(sftpClientOptions: SftpClientOptions);
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
export interface MinioClientOptions extends MinioClietOptions {
}
export interface SftpClientOptions extends ConnectOptions {
    host: string;
    username: string;
    password: string;
    port?: number;
}
export interface FtpClientOptions extends AccessOptions {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    timeout?: number;
}
export declare class FileSystem implements Factory {
    private factory;
    constructor(factory: Factory);
    put(): any;
    get(): any;
    list(): any;
}
export declare class FileSystemConfig {
    private factory;
    client: FileSystem;
    constructor(clientOptions: SftpClientOptions | MinioClietOptions | FtpClientOptions, clientType?: 'minio' | 'aws' | 'sftp' | 'ftp' | 'locale');
}
