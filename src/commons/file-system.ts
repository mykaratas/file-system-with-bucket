import { Factory } from '..';

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
