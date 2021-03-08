import { Factory } from '..';
import { LocalePut, LocaleGet, LocaleList } from './file-system-methods';

export class LocaleFactory implements Factory {
  put() {
    return new LocalePut();
  }
  get() {
    return new LocaleGet();
  }
  list() {
    return new LocaleList();
  }
}
