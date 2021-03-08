import { Factory, FtpClientOptions } from '..';
import { FtpPut, FtpGet, FtpList } from './file-system-methods';
import { Client as FtpClient } from 'basic-ftp';

export class FtpFactory implements Factory {
  client: FtpClient;
  constructor(ftpClientOptions: FtpClientOptions) {
    this.client = new FtpClient(ftpClientOptions.timeout);
  }
  put() {
    return new FtpPut();
  }
  get() {
    return new FtpGet();
  }
  list() {
    return new FtpList();
  }
}
