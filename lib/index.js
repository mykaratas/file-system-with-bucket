"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemConfig = exports.FileSystem = exports.LocaleGet = exports.SftpGet = exports.FtpGet = exports.MinioGet = exports.LocaleList = exports.SftpList = exports.FtpList = exports.MinioList = exports.LocalePut = exports.SftpPut = exports.FtpPut = exports.MinioPut = exports.SftpFactory = exports.FtpFactory = exports.LocaleFactory = exports.MinioFactory = exports.Greeter = void 0;
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
var MinioFactory = /** @class */ (function () {
    function MinioFactory() {
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
var FtpFactory = /** @class */ (function () {
    function FtpFactory() {
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
var SftpFactory = /** @class */ (function () {
    function SftpFactory() {
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
    function FileSystemConfig(client) {
    }
    return FileSystemConfig;
}());
exports.FileSystemConfig = FileSystemConfig;
