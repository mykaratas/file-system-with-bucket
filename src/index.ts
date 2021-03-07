import { Client as MinioClient, ClientOptions as MinioClietOptions } from 'minio';
import SftpClient, { ConnectOptions } from 'ssh2-sftp-client';
import { AccessOptions, Client as FtpClient } from 'basic-ftp';
export const Greeter = (name: string) => `Hello ${name}`;

export interface Factory {
  client?: MinioClient | SftpClient | FtpClient;
  put(): any;
  get(): any;
  list(): any;
}

export class MinioFactory implements Factory {
  client: MinioClient;
  constructor(minioClientOptions: MinioClietOptions) {
    this.client = new MinioClient(minioClientOptions);
  }
  put() {
    throw new Error('Method not implemented.');
  }
  get() {
    throw new Error('Method not implemented.');
  }
  list() {
    throw new Error('Method not implemented.');
  }
}

export class FtpFactory implements Factory {
  client: FtpClient;
  constructor(ftpClientOptions: FtpClientOptions) {
    this.client = new FtpClient(ftpClientOptions.timeout);
  }
  put() {
    throw new Error('Method not implemented.');
  }
  get() {
    throw new Error('Method not implemented.');
  }
  list() {
    throw new Error('Method not implemented.');
  }
}
export class LocaleFactory implements Factory {
  put() {
    throw new Error('Method not implemented.');
  }
  get() {
    throw new Error('Method not implemented.');
  }
  list() {
    throw new Error('Method not implemented.');
  }
}
export class SftpFactory implements Factory {
  client: SftpClient;
  constructor(sftpClientOptions: SftpClientOptions) {
    this.client = new SftpClient();
    this.client.connect(sftpClientOptions);
  }

  put() {
    throw new Error('Method not implemented.');
  }
  get() {
    throw new Error('Method not implemented.');
  }
  list() {
    throw new Error('Method not implemented.');
  }
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

export class MinioPut implements Put {
  put() {
    throw new Error('Method not implemented.');
  }
}

export class FtpPut implements Put {
  put() {
    throw new Error('Method not implemented.');
  }
}

export class SftpPut implements Put {
  put() {
    throw new Error('Method not implemented.');
  }
}

export class LocalePut implements Put {
  put() {
    throw new Error('Method not implemented.');
  }
}

export class MinioList implements List {
  list() {
    throw new Error('Method not implemented.');
  }
}

export class FtpList implements List {
  list() {
    throw new Error('Method not implemented.');
  }
}

export class SftpList implements List {
  list() {
    throw new Error('Method not implemented.');
  }
}

export class LocaleList implements List {
  list() {
    throw new Error('Method not implemented.');
  }
}

export class MinioGet implements Get {
  get() {
    throw new Error('Method not implemented.');
  }
}

export class FtpGet implements Get {
  get() {
    throw new Error('Method not implemented.');
  }
}

export class SftpGet implements Get {
  get() {
    throw new Error('Method not implemented.');
  }
}

export class LocaleGet implements Get {
  get() {
    throw new Error('Method not implemented.');
  }
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

export class FileSystem implements Factory {
  constructor(private factory: Factory) {}
  put() {
    return this.factory.get();
  }
  get() {
    return this.factory.get();
  }
  list() {
    return this.factory.list();
  }
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
