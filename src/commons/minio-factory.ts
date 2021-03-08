import { Factory } from '..';
import { MinioPut, MinioGet, MinioList } from './file-system-methods';
import { Client as MinioClient, ClientOptions as MinioClietOptions } from 'minio';

export class MinioFactory implements Factory {
  client: MinioClient;
  constructor(minioClientOptions: MinioClietOptions) {
    this.client = new MinioClient(minioClientOptions);
  }
  put() {
    return new MinioPut();
  }
  get() {
    return new MinioGet();
  }
  list() {
    return new MinioList();
  }
}
