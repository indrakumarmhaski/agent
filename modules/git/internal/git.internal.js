const a82_0x4476ec=a82_0x2141;(function(_0x3cc01d,_0x3dbd61){const _0x7723cb=a82_0x2141,_0x2d499e=_0x3cc01d();while(!![]){try{const _0x294c5b=parseInt(_0x7723cb(0xe1))/0x1*(-parseInt(_0x7723cb(0x121))/0x2)+parseInt(_0x7723cb(0x12b))/0x3+parseInt(_0x7723cb(0x119))/0x4+-parseInt(_0x7723cb(0x110))/0x5*(parseInt(_0x7723cb(0x10f))/0x6)+-parseInt(_0x7723cb(0x11b))/0x7+-parseInt(_0x7723cb(0x11f))/0x8+parseInt(_0x7723cb(0x10a))/0x9;if(_0x294c5b===_0x3dbd61)break;else _0x2d499e['push'](_0x2d499e['shift']());}catch(_0x3562d3){_0x2d499e['push'](_0x2d499e['shift']());}}}(a82_0x2f0a,0x84415));const a82_0x342882=(function(){let _0x5affc6=!![];return function(_0x52dbc0,_0xa005ba){const _0x36d0a8=_0x5affc6?function(){const _0x29181f=a82_0x2141;if(_0xa005ba){const _0x99260c=_0xa005ba[_0x29181f(0x107)](_0x52dbc0,arguments);return _0xa005ba=null,_0x99260c;}}:function(){};return _0x5affc6=![],_0x36d0a8;};}()),a82_0x51f14e=a82_0x342882(this,function(){const _0x502f4c=a82_0x2141;return a82_0x51f14e[_0x502f4c(0x10c)]()['search'](_0x502f4c(0x127))[_0x502f4c(0x10c)]()[_0x502f4c(0x104)](a82_0x51f14e)[_0x502f4c(0xff)](_0x502f4c(0x127));});a82_0x51f14e();'use strict';var __importDefault=this&&this[a82_0x4476ec(0xea)]||function(_0x522fd7){const _0x47c559=a82_0x4476ec;return _0x522fd7&&_0x522fd7[_0x47c559(0xef)]?_0x522fd7:{'default':_0x522fd7};};Object[a82_0x4476ec(0x117)](exports,a82_0x4476ec(0xef),{'value':!![]}),exports[a82_0x4476ec(0xe8)]=void 0x0;const constants_1=require(a82_0x4476ec(0x113)),core_1=require('../../../core'),path_1=__importDefault(require(a82_0x4476ec(0x12a))),branch_dto_1=require('../providers/branches/dto/branch.dto'),utils_1=require('../../shared/utils'),fs_internal_1=require('./fs.internal'),internal_utils_1=require(a82_0x4476ec(0xf1)),shell_internal_1=require(a82_0x4476ec(0xee));class Git{constructor(_0x1f8340){const _0x5a7fc1=a82_0x4476ec;this[_0x5a7fc1(0x130)]=_0x1f8340;}get[a82_0x4476ec(0x100)](){const _0x165f32=a82_0x4476ec;return this[_0x165f32(0x130)];}async[a82_0x4476ec(0xf6)](_0x2a58c4,_0x100d0b){const _0x2cf17b=a82_0x4476ec;await shell_internal_1['Shell'][_0x2cf17b(0xe4)](_0x2cf17b(0x118)+this[_0x2cf17b(0x130)]+_0x2cf17b(0xe6)+_0x2a58c4+_0x2cf17b(0xfa)+_0x100d0b+'\x22');}async['add'](..._0x225645){const _0x39cc80=a82_0x4476ec;await shell_internal_1[_0x39cc80(0xdb)][_0x39cc80(0xe4)](_0x39cc80(0x118)+this[_0x39cc80(0x130)]+_0x39cc80(0xf4)+_0x225645[_0x39cc80(0xdd)]('\x20'));}async['status'](){const _0x3218b7=a82_0x4476ec;return shell_internal_1[_0x3218b7(0xdb)][_0x3218b7(0xe4)](_0x3218b7(0x118)+this[_0x3218b7(0x130)]+_0x3218b7(0x125));}async[a82_0x4476ec(0xec)](_0x545c0b){const _0x1f5452=a82_0x4476ec;Git[_0x1f5452(0xf3)][_0x1f5452(0xe7)]('commit\x20message\x20\x22%s\x22',_0x545c0b),await shell_internal_1[_0x1f5452(0xdb)][_0x1f5452(0xe4)](_0x1f5452(0x118)+this[_0x1f5452(0x130)]+_0x1f5452(0xde)+_0x545c0b+'\x22');}async[a82_0x4476ec(0xfc)](_0x133f02){const _0x5ca89a=a82_0x4476ec;Git[_0x5ca89a(0xf3)]['log'](_0x5ca89a(0xdc),_0x133f02),await shell_internal_1[_0x5ca89a(0xdb)]['exec']('cd\x20'+this[_0x5ca89a(0x130)]+_0x5ca89a(0xe3)+_0x133f02+_0x5ca89a(0x106));}async['checkout'](_0x4c0dd){const _0xdfc8d7=a82_0x4476ec;Git[_0xdfc8d7(0xf3)][_0xdfc8d7(0xe7)](_0xdfc8d7(0x122),_0x4c0dd),await shell_internal_1['Shell'][_0xdfc8d7(0xe4)](_0xdfc8d7(0x118)+this[_0xdfc8d7(0x130)]+_0xdfc8d7(0x11a)+_0x4c0dd);}async[a82_0x4476ec(0xfd)](){const _0x4bb2fa=a82_0x4476ec,_0x2bf163=await shell_internal_1[_0x4bb2fa(0xdb)]['exec'](_0x4bb2fa(0x118)+this[_0x4bb2fa(0x130)]+'\x20&&\x20git\x20rev-parse\x20HEAD');return _0x2bf163[_0x4bb2fa(0xe5)]('\x0a','');}async[a82_0x4476ec(0xed)](_0x10b248){const _0xceba20=a82_0x4476ec;Git[_0xceba20(0xf3)][_0xceba20(0xe7)]('describe\x20commit\x20%s',_0x10b248);const _0x31d97f=await shell_internal_1[_0xceba20(0xdb)][_0xceba20(0xe4)]('cd\x20'+this['_repoPath']+_0xceba20(0x124)+_0x10b248);return{'author':internal_utils_1[_0xceba20(0xfe)](_0x31d97f),'email':internal_utils_1[_0xceba20(0x12e)](_0x31d97f),'message':internal_utils_1[_0xceba20(0x11c)](_0x31d97f),'changes':internal_utils_1[_0xceba20(0x129)](_0x31d97f)};}static async['getRemoteHash'](_0x411d80,_0x5d6f67){const _0x48511e=a82_0x4476ec,[_0x33386e]=await shell_internal_1[_0x48511e(0xdb)]['exec'](_0x48511e(0x102)+_0x411d80+'\x20'+_0x5d6f67+_0x48511e(0x105))[_0x48511e(0x12d)](_0x144565=>_0x144565[_0x48511e(0xe5)](/\s/g,'\x20')[_0x48511e(0x116)]('\x20'));return _0x33386e;}static async[a82_0x4476ec(0xfb)](_0x34d66f,_0x5b4c01,_0x1d2c63){const _0x508546=a82_0x4476ec,_0x52f204=path_1[_0x508546(0xf5)][_0x508546(0xdd)](this[_0x508546(0x111)],_0x5b4c01),_0x3d102a=new Git(_0x52f204);return Git[_0x508546(0xf3)][_0x508546(0xe7)](_0x508546(0x123),_0x1d2c63,_0x34d66f,_0x52f204),await fs_internal_1['FS'][_0x508546(0x108)](_0x52f204),await shell_internal_1['Shell'][_0x508546(0xe4)](_0x508546(0x10d)+_0x1d2c63+_0x508546(0xe2)+_0x34d66f+'\x20'+_0x52f204),_0x3d102a;}static async[a82_0x4476ec(0x11e)](_0x5a0211,_0x447721){const _0x339020=a82_0x4476ec,_0x89e90b=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x13bb40=_0x5a0211[_0x339020(0xe9)][_0x339020(0xe5)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x339020(0x12f)](_0x5a0211['gitUrl'])+_0x339020(0x114)+_0x447721['getGitShellAuthorizationString']()+'@'),_0x2543f7=await shell_internal_1[_0x339020(0xdb)][_0x339020(0xe4)](_0x339020(0x102)+_0x13bb40),_0x7a9e25=_0x2543f7[_0x339020(0x116)]('\x0a')['filter'](_0x1a54ed=>_0x89e90b[_0x339020(0x12c)](_0x1a54ed))[_0x339020(0xf0)](_0x310cd5=>{const _0x4020bf=_0x339020,[,_0x517a4d,_0x2c0ebf]=_0x310cd5[_0x4020bf(0x115)](_0x89e90b),_0x1cdc53=new branch_dto_1[(_0x4020bf(0xf8))]();return _0x1cdc53[_0x4020bf(0xeb)]=_0x517a4d,_0x1cdc53[_0x4020bf(0x109)]=_0x2c0ebf['replace'](_0x4020bf(0x10e),''),_0x1cdc53;});return _0x7a9e25;}static async[a82_0x4476ec(0x120)](_0x57869d,_0x16fb6a,_0xe3b154,_0x2f4d66){const _0x5f512c=a82_0x4476ec,_0x24bb3b=_0x57869d['gitUrl'][_0x5f512c(0xe5)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x5f512c(0x12f)](_0x57869d['gitUrl'])+_0x5f512c(0x114)+_0x2f4d66[_0x5f512c(0xf2)]()+'@'),_0x246dec=path_1['default']['join'](this['DEFAULT_CLONE_PATH'],_0x57869d['name']);Git[_0x5f512c(0xf3)][_0x5f512c(0xe7)]('create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]\x20%s',_0x57869d[_0x5f512c(0x109)],_0x16fb6a,_0x246dec,_0x24bb3b),await fs_internal_1['FS'][_0x5f512c(0x108)](_0x246dec),await fs_internal_1['FS'][_0x5f512c(0x112)](_0x246dec);const _0x3349cb=new Git(_0x246dec);await shell_internal_1[_0x5f512c(0xdb)][_0x5f512c(0xe4)](_0x5f512c(0x118)+_0x3349cb[_0x5f512c(0x100)]+_0x5f512c(0x126)),await shell_internal_1['Shell'][_0x5f512c(0xe4)](_0x5f512c(0x118)+_0x3349cb['baseDir']+_0x5f512c(0x128)+_0x24bb3b),await _0x3349cb[_0x5f512c(0xf6)](constants_1[_0x5f512c(0xf9)],constants_1[_0x5f512c(0x11d)]),await shell_internal_1[_0x5f512c(0xdb)][_0x5f512c(0xe4)](_0x5f512c(0x118)+_0x3349cb[_0x5f512c(0x100)]+_0x5f512c(0xdf)+_0x16fb6a),await shell_internal_1[_0x5f512c(0xdb)][_0x5f512c(0xe4)](_0x5f512c(0x118)+_0x3349cb[_0x5f512c(0x100)]+_0x5f512c(0xde)+(_0xe3b154||constants_1[_0x5f512c(0x101)])+_0x5f512c(0xe0)),await _0x3349cb[_0x5f512c(0xfc)](_0x16fb6a),Git[_0x5f512c(0xf3)][_0x5f512c(0xe7)](_0x5f512c(0x131)),await fs_internal_1['FS'][_0x5f512c(0x108)](_0x3349cb['baseDir']);}}exports['Git']=Git,Git[a82_0x4476ec(0x111)]=path_1[a82_0x4476ec(0xf5)][a82_0x4476ec(0xdd)](process[a82_0x4476ec(0xf7)](),a82_0x4476ec(0x103),'git'),Git['logger']=new core_1[(a82_0x4476ec(0x10b))](Git[a82_0x4476ec(0x109)]);function a82_0x2141(_0x33f9fd,_0x45e016){const _0x8421be=a82_0x2f0a();return a82_0x2141=function(_0x51f14e,_0x342882){_0x51f14e=_0x51f14e-0xdb;let _0x2f0a67=_0x8421be[_0x51f14e];return _0x2f0a67;},a82_0x2141(_0x33f9fd,_0x45e016);}function a82_0x2f0a(){const _0x214d3d=['\x20&&\x20git\x20push\x20origin\x20','exec','replace','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','log','Git','gitUrl','__importDefault','sha','commit','describeCommit','./shell.internal','__esModule','map','./internal.utils','getGitShellAuthorizationString','logger','\x20&&\x20git\x20add\x20','default','setCredentials','cwd','BranchDto','DEFAULT_GIT_USER_NAME','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','clone','push','getCurrentHash','extractAuthorFromCommitDescribe','search','baseDir','INITIAL_COMMIT','git\x20ls-remote\x20','.temp','constructor','\x20--refs','\x20--quiet','apply','removeDir','name','29391984kKCQnR','Logger','toString','git\x20clone\x20-b\x20','refs/heads/','12606syJAsV','1985THRncU','DEFAULT_CLONE_PATH','makeDir','../../../constants','://','match','split','defineProperty','cd\x20','1691820vlejvZ','\x20&&\x20git\x20checkout\x20','2135469EKvlve','extractMessageFromCommitDescribe','DEFAULT_GIT_USER_EMAIL','getRepositoryBranches','7958704nfKhHE','createEmptyBranch','530092XAErrU','checkout\x20to\x20%s','clone\x20repository\x20branch\x20%s\x20from\x20%s\x20to\x20%s','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','\x20&&\x20git\x20status','\x20&&\x20git\x20init','(((.+)+)+)+$','\x20&&\x20git\x20remote\x20add\x20origin\x20','extractChangesFromCommitDescribe','path','141516MEFKrk','test','then','extractEmailFromCommitDescribe','getProtocol','_repoPath','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','Shell','push\x20changes\x20to\x20%s','join','\x20&&\x20git\x20commit\x20-m\x20\x22','\x20&&\x20git\x20checkout\x20--orphan\x20','\x22\x20--allow-empty','4ZNGNtv','\x20--single-branch\x20'];a82_0x2f0a=function(){return _0x214d3d;};return a82_0x2f0a();}