import { SftpGet, SftpList, SftpPut } from './file-system-methods';
import SftpClient from 'ssh2-sftp-client';
import { Factory, SftpClientOptions } from '..';

export class SftpFactory implements Factory {
  client: SftpClient;
  constructor(sftpClientOptions: SftpClientOptions) {
    this.client = new SftpClient();
    this.client.connect(sftpClientOptions);
  }
  put() {
    return new SftpPut();
  }
  get() {
    return new SftpGet();
  }
  list() {
    return new SftpList();
  }
}
