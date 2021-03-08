import { Client as MinioClient, ClientOptions as MinioClietOptions } from 'minio';
import SftpClient, { ConnectOptions } from 'ssh2-sftp-client';
import { AccessOptions, Client as FtpClient } from 'basic-ftp';
import { FileSystem } from './commons/file-system';
export declare const Greeter: (name: string) => string;
export interface Factory {
    client?: MinioClient | SftpClient | FtpClient;
    put(): any;
    get(): any;
    list(): any;
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
export declare class FileSystemConfig {
    private factory;
    client: FileSystem;
    constructor(clientOptions: SftpClientOptions | MinioClietOptions | FtpClientOptions, clientType?: 'minio' | 'aws' | 'sftp' | 'ftp' | 'locale');
}
