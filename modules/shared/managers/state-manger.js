const a315_0x5e4666=a315_0xb900;(function(_0x4302c3,_0x6cff3a){const _0x180761=a315_0xb900,_0x247e1f=_0x4302c3();while(!![]){try{const _0x1dbed6=-parseInt(_0x180761(0x191))/0x1+-parseInt(_0x180761(0x199))/0x2*(parseInt(_0x180761(0x195))/0x3)+parseInt(_0x180761(0x16d))/0x4*(-parseInt(_0x180761(0x192))/0x5)+parseInt(_0x180761(0x178))/0x6+parseInt(_0x180761(0x175))/0x7+-parseInt(_0x180761(0x181))/0x8*(-parseInt(_0x180761(0x17a))/0x9)+-parseInt(_0x180761(0x19f))/0xa*(-parseInt(_0x180761(0x185))/0xb);if(_0x1dbed6===_0x6cff3a)break;else _0x247e1f['push'](_0x247e1f['shift']());}catch(_0x3bad35){_0x247e1f['push'](_0x247e1f['shift']());}}}(a315_0xb62a,0xcbce0));function a315_0xb900(_0x26aea3,_0x14ba3d){const _0x34984a=a315_0xb62a();return a315_0xb900=function(_0x5e5e0b,_0x2a71f7){_0x5e5e0b=_0x5e5e0b-0x16d;let _0xb62aff=_0x34984a[_0x5e5e0b];return _0xb62aff;},a315_0xb900(_0x26aea3,_0x14ba3d);}const a315_0x2a71f7=(function(){let _0x4e7a3a=!![];return function(_0x38bd6a,_0x186873){const _0x520b7b=_0x4e7a3a?function(){const _0x4887c6=a315_0xb900;if(_0x186873){const _0x4e138a=_0x186873[_0x4887c6(0x17b)](_0x38bd6a,arguments);return _0x186873=null,_0x4e138a;}}:function(){};return _0x4e7a3a=![],_0x520b7b;};}()),a315_0x5e5e0b=a315_0x2a71f7(this,function(){const _0x1119fb=a315_0xb900;return a315_0x5e5e0b[_0x1119fb(0x17e)]()[_0x1119fb(0x19d)](_0x1119fb(0x172))['toString']()[_0x1119fb(0x193)](a315_0x5e5e0b)[_0x1119fb(0x19d)](_0x1119fb(0x172));});a315_0x5e5e0b();'use strict';var __importDefault=this&&this[a315_0x5e4666(0x18c)]||function(_0xd4a28d){const _0x16cddc=a315_0x5e4666;return _0xd4a28d&&_0xd4a28d[_0x16cddc(0x19a)]?_0xd4a28d:{'default':_0xd4a28d};};function a315_0xb62a(){const _0x274616=['parse','(((.+)+)+)+$','../../../constants/job','../enums/logger.enums','3926335VINfHy','utf-8','completedDate','9660984BfCSfI','JOB_LOG_STATE_FILENAME','2522187Ejzkek','apply','setCompleted','isExistsPath','toString','getTime','@flosum/utils','8CFhGnr','writeFile','COMPLETED','status','11DdAbxO','fs/promises','update','warnings','jobState','error','default','__importDefault','getJobStatePath','stringify','defineProperty','then','1494524azbNIK','5hjqYvJ','constructor','create','3334911BbzMyf','addWarning','JobStatus','FAILED','2IhLgPc','__esModule','Job\x20not\x20found.','init','search','statePath','20603320Fnzyvq','setError','join','4282796FMGNXS','readFile','QUEUED','FsUtils'];a315_0xb62a=function(){return _0x274616;};return a315_0xb62a();}Object[a315_0x5e4666(0x18f)](exports,a315_0x5e4666(0x19a),{'value':!![]});const logger_enums_1=require(a315_0x5e4666(0x174)),path_1=__importDefault(require('path')),promises_1=require(a315_0x5e4666(0x186)),utils_1=require(a315_0x5e4666(0x180)),job_1=require(a315_0x5e4666(0x173));class StateManager{constructor(_0x58f7d3){const _0x393f41=a315_0x5e4666;this[_0x393f41(0x19e)]=StateManager[_0x393f41(0x18d)](_0x58f7d3);}static[a315_0x5e4666(0x18d)](_0x204105){const _0x4a245b=a315_0x5e4666;return path_1['default'][_0x4a245b(0x1a1)](_0x204105,job_1[_0x4a245b(0x179)]);}static async[a315_0x5e4666(0x194)](_0x37eab9,_0x116eb6){const _0x12ecad=a315_0x5e4666,_0x51a6bf=StateManager[_0x12ecad(0x18d)](_0x37eab9),_0x54c92e={'id':_0x116eb6,'status':logger_enums_1[_0x12ecad(0x197)][_0x12ecad(0x16f)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x12ecad(0x182)])(_0x51a6bf,JSON['stringify'](_0x54c92e));}static async['getJobState'](_0x1e0422){const _0x38cfd4=a315_0x5e4666,_0x111a87=StateManager[_0x38cfd4(0x18d)](_0x1e0422);if(await utils_1[_0x38cfd4(0x170)][_0x38cfd4(0x17d)](_0x111a87))return(0x0,promises_1[_0x38cfd4(0x16e)])(_0x111a87,_0x38cfd4(0x176))[_0x38cfd4(0x190)](JSON[_0x38cfd4(0x171)]);throw new Error(_0x38cfd4(0x19b));}async[a315_0x5e4666(0x187)](){const _0x3c1c7d=a315_0x5e4666;await(0x0,promises_1[_0x3c1c7d(0x182)])(this['statePath'],JSON[_0x3c1c7d(0x18e)](this[_0x3c1c7d(0x189)]));}async[a315_0x5e4666(0x19c)](){const _0x1eba6c=a315_0x5e4666;return this[_0x1eba6c(0x189)]=await(0x0,promises_1['readFile'])(this['statePath'],_0x1eba6c(0x176))[_0x1eba6c(0x190)](JSON[_0x1eba6c(0x171)]),this;}async['setInProgress'](){const _0x24b08c=a315_0x5e4666;this[_0x24b08c(0x189)][_0x24b08c(0x184)]=logger_enums_1[_0x24b08c(0x197)]['IN_PROGRESS'],this['jobState']['createdDate']=new Date()[_0x24b08c(0x17f)](),await this[_0x24b08c(0x187)]();}async[a315_0x5e4666(0x17c)](){const _0x4d19e4=a315_0x5e4666;this[_0x4d19e4(0x189)][_0x4d19e4(0x184)]=logger_enums_1['JobStatus'][_0x4d19e4(0x183)],this[_0x4d19e4(0x189)][_0x4d19e4(0x177)]=new Date()['getTime'](),await this[_0x4d19e4(0x187)]();}async[a315_0x5e4666(0x1a0)]({message:_0x2cc4c8}){const _0x5ded36=a315_0x5e4666;this[_0x5ded36(0x189)]['status']=logger_enums_1[_0x5ded36(0x197)][_0x5ded36(0x198)],this[_0x5ded36(0x189)][_0x5ded36(0x177)]=new Date()[_0x5ded36(0x17f)](),this[_0x5ded36(0x189)][_0x5ded36(0x18a)]=_0x2cc4c8,await this['update']();}[a315_0x5e4666(0x196)](_0x3619c3){const _0x21d4fb=a315_0x5e4666;return this['jobState'][_0x21d4fb(0x188)]['push'](_0x3619c3),this[_0x21d4fb(0x187)]();}}exports[a315_0x5e4666(0x18b)]=StateManager;