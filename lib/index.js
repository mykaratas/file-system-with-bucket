"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemConfig = exports.Greeter = void 0;
var file_system_1 = require("./commons/file-system");
var ftp_factory_1 = require("./commons/ftp-factory");
var locale_factory_1 = require("./commons/locale-factory");
var minio_factory_1 = require("./commons/minio-factory");
var sftp_factory_1 = require("./commons/sftp-factory");
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
var FileSystemConfig = /** @class */ (function () {
    function FileSystemConfig(clientOptions, clientType) {
        if (clientType === void 0) { clientType = 'locale'; }
        if (clientType === 'sftp') {
            this.factory = new sftp_factory_1.SftpFactory(clientOptions);
        }
        else if (clientType === 'minio') {
            this.factory = new minio_factory_1.MinioFactory(clientOptions);
        }
        else if (clientType === 'ftp') {
            this.factory = new ftp_factory_1.FtpFactory(clientOptions);
        }
        else {
            this.factory = new locale_factory_1.LocaleFactory();
        }
        this.client = new file_system_1.FileSystem(this.factory);
    }
    return FileSystemConfig;
}());
exports.FileSystemConfig = FileSystemConfig;
