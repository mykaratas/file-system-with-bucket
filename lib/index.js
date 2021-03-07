"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemConfig = exports.FileSystem = exports.LocaleGet = exports.SftpGet = exports.FtpGet = exports.MinioGet = exports.LocaleList = exports.SftpList = exports.FtpList = exports.MinioList = exports.LocalePut = exports.SftpPut = exports.FtpPut = exports.MinioPut = exports.SftpFactory = exports.LocaleFactory = exports.FtpFactory = exports.MinioFactory = exports.Greeter = void 0;
var minio_1 = require("minio");
var ssh2_sftp_client_1 = __importDefault(require("ssh2-sftp-client"));
var basic_ftp_1 = require("basic-ftp");
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
var MinioFactory = /** @class */ (function () {
    function MinioFactory(minioClientOptions) {
        this.client = new minio_1.Client(minioClientOptions);
    }
    MinioFactory.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    MinioFactory.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    MinioFactory.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return MinioFactory;
}());
exports.MinioFactory = MinioFactory;
var FtpFactory = /** @class */ (function () {
    function FtpFactory(ftpClientOptions) {
        this.client = new basic_ftp_1.Client(ftpClientOptions.timeout);
    }
    FtpFactory.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    FtpFactory.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    FtpFactory.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return FtpFactory;
}());
exports.FtpFactory = FtpFactory;
var LocaleFactory = /** @class */ (function () {
    function LocaleFactory() {
    }
    LocaleFactory.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    LocaleFactory.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    LocaleFactory.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return LocaleFactory;
}());
exports.LocaleFactory = LocaleFactory;
var SftpFactory = /** @class */ (function () {
    function SftpFactory(sftpClientOptions) {
        this.client = new ssh2_sftp_client_1.default();
        this.client.connect(sftpClientOptions);
    }
    SftpFactory.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    SftpFactory.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    SftpFactory.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return SftpFactory;
}());
exports.SftpFactory = SftpFactory;
var MinioPut = /** @class */ (function () {
    function MinioPut() {
    }
    MinioPut.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    return MinioPut;
}());
exports.MinioPut = MinioPut;
var FtpPut = /** @class */ (function () {
    function FtpPut() {
    }
    FtpPut.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    return FtpPut;
}());
exports.FtpPut = FtpPut;
var SftpPut = /** @class */ (function () {
    function SftpPut() {
    }
    SftpPut.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    return SftpPut;
}());
exports.SftpPut = SftpPut;
var LocalePut = /** @class */ (function () {
    function LocalePut() {
    }
    LocalePut.prototype.put = function () {
        throw new Error('Method not implemented.');
    };
    return LocalePut;
}());
exports.LocalePut = LocalePut;
var MinioList = /** @class */ (function () {
    function MinioList() {
    }
    MinioList.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return MinioList;
}());
exports.MinioList = MinioList;
var FtpList = /** @class */ (function () {
    function FtpList() {
    }
    FtpList.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return FtpList;
}());
exports.FtpList = FtpList;
var SftpList = /** @class */ (function () {
    function SftpList() {
    }
    SftpList.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return SftpList;
}());
exports.SftpList = SftpList;
var LocaleList = /** @class */ (function () {
    function LocaleList() {
    }
    LocaleList.prototype.list = function () {
        throw new Error('Method not implemented.');
    };
    return LocaleList;
}());
exports.LocaleList = LocaleList;
var MinioGet = /** @class */ (function () {
    function MinioGet() {
    }
    MinioGet.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    return MinioGet;
}());
exports.MinioGet = MinioGet;
var FtpGet = /** @class */ (function () {
    function FtpGet() {
    }
    FtpGet.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    return FtpGet;
}());
exports.FtpGet = FtpGet;
var SftpGet = /** @class */ (function () {
    function SftpGet() {
    }
    SftpGet.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    return SftpGet;
}());
exports.SftpGet = SftpGet;
var LocaleGet = /** @class */ (function () {
    function LocaleGet() {
    }
    LocaleGet.prototype.get = function () {
        throw new Error('Method not implemented.');
    };
    return LocaleGet;
}());
exports.LocaleGet = LocaleGet;
var FileSystem = /** @class */ (function () {
    function FileSystem(factory) {
        this.factory = factory;
    }
    FileSystem.prototype.put = function () {
        return this.factory.get();
    };
    FileSystem.prototype.get = function () {
        return this.factory.get();
    };
    FileSystem.prototype.list = function () {
        return this.factory.list();
    };
    return FileSystem;
}());
exports.FileSystem = FileSystem;
var FileSystemConfig = /** @class */ (function () {
    function FileSystemConfig(clientOptions, clientType) {
        if (clientType === void 0) { clientType = 'locale'; }
        if (clientType === 'sftp') {
            this.factory = new SftpFactory(clientOptions);
        }
        else if (clientType === 'minio') {
            this.factory = new MinioFactory(clientOptions);
        }
        else if (clientType === 'ftp') {
            this.factory = new FtpFactory(clientOptions);
        }
        else {
            this.factory = new LocaleFactory();
        }
        this.client = new FileSystem(this.factory);
    }
    return FileSystemConfig;
}());
exports.FileSystemConfig = FileSystemConfig;
