import { FileSystemConfig, Greeter, SftpClientOptions } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('TT', () => {
  const test = new FileSystemConfig(
    {
      host: 'string',
      username: 'string',
      password: 'string',
      port: 11,
    } as SftpClientOptions,
    'sftp',
  );
});
