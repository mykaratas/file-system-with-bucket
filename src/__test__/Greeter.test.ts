import { FileSystemConfig, Greeter, SftpClientOptions } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
