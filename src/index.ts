/* tslint:disable:no-empty-interface */
import { Client as MinioClient, ClientOptions as MinioClietOptions } from 'minio';
import SftpClient, { ConnectOptions } from 'ssh2-sftp-client';
import { AccessOptions, Client as FtpClient } from 'basic-ftp';
import { FileSystem } from './commons/file-system';
import { FtpFactory } from './commons/ftp-factory';
import { LocaleFactory } from './commons/locale-factory';
import { MinioFactory } from './commons/minio-factory';
import { SftpFactory } from './commons/sftp-factory';
export const Greeter = (name: string) => `Hello ${name}`;

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

export interface MinioClientOptions extends MinioClietOptions {}

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

export class FileSystemConfig {
  private factory: Factory;
  public client: FileSystem;
  constructor(
    clientOptions: SftpClientOptions | MinioClietOptions | FtpClientOptions,
    clientType: 'minio' | 'aws' | 'sftp' | 'ftp' | 'locale' = 'locale',
  ) {
    if (clientType === 'sftp') {
      this.factory = new SftpFactory(clientOptions as SftpClientOptions);
    } else if (clientType === 'minio') {
      this.factory = new MinioFactory(clientOptions as MinioClientOptions);
    } else if (clientType === 'ftp') {
      this.factory = new FtpFactory(clientOptions as FtpClientOptions);
    } else {
      this.factory = new LocaleFactory();
    }
    this.client = new FileSystem(this.factory);
  }
}
