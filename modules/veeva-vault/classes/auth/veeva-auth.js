const a341_0x1cdaaf=a341_0x40e6;(function(_0x5200a3,_0x4ff71b){const _0x7a7afb=a341_0x40e6,_0x4f408b=_0x5200a3();while(!![]){try{const _0x179530=-parseInt(_0x7a7afb(0x12d))/0x1+-parseInt(_0x7a7afb(0x11f))/0x2*(parseInt(_0x7a7afb(0x133))/0x3)+-parseInt(_0x7a7afb(0x12e))/0x4*(-parseInt(_0x7a7afb(0x129))/0x5)+parseInt(_0x7a7afb(0x136))/0x6*(parseInt(_0x7a7afb(0x123))/0x7)+parseInt(_0x7a7afb(0x142))/0x8+parseInt(_0x7a7afb(0x126))/0x9+parseInt(_0x7a7afb(0x124))/0xa;if(_0x179530===_0x4ff71b)break;else _0x4f408b['push'](_0x4f408b['shift']());}catch(_0x1b6709){_0x4f408b['push'](_0x4f408b['shift']());}}}(a341_0x104d,0x5a375));const a341_0x5c7387=(function(){let _0x2fd2d8=!![];return function(_0x5996b4,_0x469491){const _0x1f0738=_0x2fd2d8?function(){const _0x45e589=a341_0x40e6;if(_0x469491){const _0x300506=_0x469491[_0x45e589(0x134)](_0x5996b4,arguments);return _0x469491=null,_0x300506;}}:function(){};return _0x2fd2d8=![],_0x1f0738;};}()),a341_0x2d0e1e=a341_0x5c7387(this,function(){const _0x20b970=a341_0x40e6;return a341_0x2d0e1e['toString']()['search'](_0x20b970(0x13e))['toString']()['constructor'](a341_0x2d0e1e)[_0x20b970(0x132)]('(((.+)+)+)+$');});function a341_0x104d(){const _0x180fd2=['3779426PncgfK','3116320lqGCrP','LOGIN_TIMEOUT','1082241cHiULR','sessionId','append','5IMmBex','some','getNewAccessToken','message','646294acgKRd','1536580GURpXV','type','BaseVeevaAuth','../../constants/app.constants','search','3vDrORQ','apply','VeevaConstants','6FNhSNj','axios','errors','AppConstants','UNDEFINED_ERROR','./base-veeva-auth','username','ENDPOINT_AUTH','(((.+)+)+)+$','API_LIMIT_EXCEEDED','attemptsOfUpdateToken','../../constants/veeva.constants','142288eKUZJB','application/x-www-form-urlencoded','auth','default','instanceUrl','VeevaAuth','responseStatus','715822IruiHi','__esModule','post','sleep'];a341_0x104d=function(){return _0x180fd2;};return a341_0x104d();}function a341_0x40e6(_0x221e6f,_0x764cd4){const _0x2c88a4=a341_0x104d();return a341_0x40e6=function(_0x2d0e1e,_0x5c7387){_0x2d0e1e=_0x2d0e1e-0x11a;let _0x104dc6=_0x2c88a4[_0x2d0e1e];return _0x104dc6;},a341_0x40e6(_0x221e6f,_0x764cd4);}a341_0x2d0e1e();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x9fe69d){return _0x9fe69d&&_0x9fe69d['__esModule']?_0x9fe69d:{'default':_0x9fe69d};};Object['defineProperty'](exports,a341_0x1cdaaf(0x120),{'value':!![]}),exports[a341_0x1cdaaf(0x11d)]=void 0x0;const veeva_constants_1=require(a341_0x1cdaaf(0x141)),axios_1=__importDefault(require(a341_0x1cdaaf(0x137))),status_enums_1=require('../../enums/status.enums'),utils_1=require('../../../shared/utils'),app_constants_1=require(a341_0x1cdaaf(0x131)),base_veeva_auth_1=require(a341_0x1cdaaf(0x13b));class VeevaAuth extends base_veeva_auth_1[a341_0x1cdaaf(0x130)]{constructor(_0x298cf9,_0x4b1794=0x0){const _0x489dd0=a341_0x1cdaaf;super(_0x298cf9),this[_0x489dd0(0x11a)]=_0x298cf9,this[_0x489dd0(0x140)]=_0x4b1794;}async[a341_0x1cdaaf(0x12b)](_0x512276=this['attemptsOfUpdateToken']){const _0x2d5da2=a341_0x1cdaaf;var _0x2415fc,_0x3cc45c;const _0x53898a=this['auth'][_0x2d5da2(0x11c)]+veeva_constants_1[_0x2d5da2(0x135)][_0x2d5da2(0x13d)],_0x215837=new URLSearchParams();_0x215837[_0x2d5da2(0x128)](_0x2d5da2(0x13c),this['auth'][_0x2d5da2(0x13c)]),_0x215837[_0x2d5da2(0x128)]('password',this['auth']['password']);const {data:_0x4442d9}=await axios_1[_0x2d5da2(0x11b)][_0x2d5da2(0x121)](_0x53898a,_0x215837,{'headers':{'Content-Type':_0x2d5da2(0x143)}});if(_0x4442d9[_0x2d5da2(0x11e)]===status_enums_1['VeevaResponseStatus']['SUCCESS'])return _0x4442d9[_0x2d5da2(0x127)];else{const _0xe7a349=(_0x2415fc=_0x4442d9[_0x2d5da2(0x138)])===null||_0x2415fc===void 0x0?void 0x0:_0x2415fc[_0x2d5da2(0x12a)](_0x55073f=>_0x55073f[_0x2d5da2(0x12f)]===veeva_constants_1[_0x2d5da2(0x135)][_0x2d5da2(0x13f)]);if(_0xe7a349&&_0x512276>0x0)return await(0x0,utils_1[_0x2d5da2(0x122)])(VeevaAuth[_0x2d5da2(0x125)]),await this[_0x2d5da2(0x12b)](_0x512276-0x1);else throw new Error(((_0x3cc45c=_0x4442d9[_0x2d5da2(0x138)][0x0])===null||_0x3cc45c===void 0x0?void 0x0:_0x3cc45c[_0x2d5da2(0x12c)])||app_constants_1[_0x2d5da2(0x139)][_0x2d5da2(0x13a)]);}}}exports['VeevaAuth']=VeevaAuth,VeevaAuth['LOGIN_TIMEOUT']=0x3e8*0x3c;