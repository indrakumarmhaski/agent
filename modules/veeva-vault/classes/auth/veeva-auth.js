const a288_0x38c7c7=a288_0x1ee0;(function(_0x3c7515,_0x419445){const _0x5cbb5=a288_0x1ee0,_0x5bc7f6=_0x3c7515();while(!![]){try{const _0x359266=-parseInt(_0x5cbb5(0x154))/0x1*(parseInt(_0x5cbb5(0x143))/0x2)+parseInt(_0x5cbb5(0x136))/0x3+parseInt(_0x5cbb5(0x150))/0x4+-parseInt(_0x5cbb5(0x14c))/0x5+-parseInt(_0x5cbb5(0x140))/0x6*(-parseInt(_0x5cbb5(0x15c))/0x7)+-parseInt(_0x5cbb5(0x141))/0x8*(parseInt(_0x5cbb5(0x142))/0x9)+-parseInt(_0x5cbb5(0x138))/0xa*(-parseInt(_0x5cbb5(0x14b))/0xb);if(_0x359266===_0x419445)break;else _0x5bc7f6['push'](_0x5bc7f6['shift']());}catch(_0x59d272){_0x5bc7f6['push'](_0x5bc7f6['shift']());}}}(a288_0x1062,0xed068));function a288_0x1ee0(_0x4a8cda,_0x530faa){const _0x4eeb4a=a288_0x1062();return a288_0x1ee0=function(_0x2c2d0d,_0x59704d){_0x2c2d0d=_0x2c2d0d-0x133;let _0x1062ca=_0x4eeb4a[_0x2c2d0d];return _0x1062ca;},a288_0x1ee0(_0x4a8cda,_0x530faa);}const a288_0x59704d=(function(){let _0x25e9f6=!![];return function(_0xcb27b0,_0x43adde){const _0x2d52c0=_0x25e9f6?function(){const _0x56d439=a288_0x1ee0;if(_0x43adde){const _0x30c6c4=_0x43adde[_0x56d439(0x153)](_0xcb27b0,arguments);return _0x43adde=null,_0x30c6c4;}}:function(){};return _0x25e9f6=![],_0x2d52c0;};}()),a288_0x2c2d0d=a288_0x59704d(this,function(){const _0x47da77=a288_0x1ee0;return a288_0x2c2d0d['toString']()[_0x47da77(0x13b)]('(((.+)+)+)+$')[_0x47da77(0x15a)]()[_0x47da77(0x13c)](a288_0x2c2d0d)[_0x47da77(0x13b)](_0x47da77(0x15e));});function a288_0x1062(){const _0x450024=['constructor','defineProperty','LOGIN_TIMEOUT','../../constants/veeva.constants','33306YLFfmn','592zsNLtm','135891OhGdHH','31474xVlGJT','application/x-www-form-urlencoded','VeevaAuth','type','./base-veeva-auth','SUCCESS','auth','message','2920258LjnABQ','8674680VdgcfK','__importDefault','VeevaResponseStatus','post','5172976MXFXdD','getNewAccessToken','__esModule','apply','97KuidYm','sleep','BaseVeevaAuth','../../../shared/utils','attemptsOfUpdateToken','VeevaConstants','toString','ENDPOINT_AUTH','1638YsXLai','API_LIMIT_EXCEEDED','(((.+)+)+)+$','append','some','errors','307947jvAPss','password','100cAlEOB','axios','sessionId','search'];a288_0x1062=function(){return _0x450024;};return a288_0x1062();}a288_0x2c2d0d();'use strict';var __importDefault=this&&this[a288_0x38c7c7(0x14d)]||function(_0x37228f){const _0x5253a2=a288_0x38c7c7;return _0x37228f&&_0x37228f[_0x5253a2(0x152)]?_0x37228f:{'default':_0x37228f};};Object[a288_0x38c7c7(0x13d)](exports,'__esModule',{'value':!![]}),exports[a288_0x38c7c7(0x145)]=void 0x0;const veeva_constants_1=require(a288_0x38c7c7(0x13f)),axios_1=__importDefault(require(a288_0x38c7c7(0x139))),status_enums_1=require('../../enums/status.enums'),utils_1=require(a288_0x38c7c7(0x157)),app_constants_1=require('../../constants/app.constants'),base_veeva_auth_1=require(a288_0x38c7c7(0x147));class VeevaAuth extends base_veeva_auth_1[a288_0x38c7c7(0x156)]{constructor(_0x1488b8,_0x2df57e=0x0){const _0x596644=a288_0x38c7c7;super(_0x1488b8),this[_0x596644(0x149)]=_0x1488b8,this['attemptsOfUpdateToken']=_0x2df57e;}async['getNewAccessToken'](_0x4c8e8a=this[a288_0x38c7c7(0x158)]){const _0x1795a2=a288_0x38c7c7;var _0x4bd65d,_0x57cb0a;const _0x3b0fa4=this[_0x1795a2(0x149)]['instanceUrl']+veeva_constants_1[_0x1795a2(0x159)][_0x1795a2(0x15b)],_0x4b579f=new URLSearchParams();_0x4b579f[_0x1795a2(0x133)]('username',this[_0x1795a2(0x149)]['username']),_0x4b579f[_0x1795a2(0x133)]('password',this[_0x1795a2(0x149)][_0x1795a2(0x137)]);const {data:_0x39f525}=await axios_1['default'][_0x1795a2(0x14f)](_0x3b0fa4,_0x4b579f,{'headers':{'Content-Type':_0x1795a2(0x144)}});if(_0x39f525['responseStatus']===status_enums_1[_0x1795a2(0x14e)][_0x1795a2(0x148)])return _0x39f525[_0x1795a2(0x13a)];else{const _0x3d7bda=(_0x4bd65d=_0x39f525[_0x1795a2(0x135)])===null||_0x4bd65d===void 0x0?void 0x0:_0x4bd65d[_0x1795a2(0x134)](_0x56fe67=>_0x56fe67[_0x1795a2(0x146)]===veeva_constants_1[_0x1795a2(0x159)][_0x1795a2(0x15d)]);if(_0x3d7bda&&_0x4c8e8a>0x0)return await(0x0,utils_1[_0x1795a2(0x155)])(VeevaAuth[_0x1795a2(0x13e)]),await this[_0x1795a2(0x151)](_0x4c8e8a-0x1);else throw new Error(((_0x57cb0a=_0x39f525[_0x1795a2(0x135)][0x0])===null||_0x57cb0a===void 0x0?void 0x0:_0x57cb0a[_0x1795a2(0x14a)])||app_constants_1['AppConstants']['UNDEFINED_ERROR']);}}}exports[a288_0x38c7c7(0x145)]=VeevaAuth,VeevaAuth[a288_0x38c7c7(0x13e)]=0x3e8*0x3c;