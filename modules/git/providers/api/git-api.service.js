const a111_0x105236=a111_0x36ad;function a111_0x45e2(){const _0x4409cd=['provider','2493922ZFaqkZ','getHeaders','request','162nsJkAs','498wpLDJb','numberOfRequestsInQueue','GitApiService','Agent','requestWrapper','https','14219909csZsZN','createRequest','6349063lszusF','2665464mxliZN','8boHIVa','__esModule','getBaseUrl','options','axios','create','constructor','default','search','toString','MAX_REQUEST_PER_HOUR','interceptors','1WgPZgi','env','(((.+)+)+)+$','HTTP_PROXY','https-proxy-agent/dist/agent','timers/promises','setTimeout','credentials','91870sVvpFH','24060AdrUOF','__importDefault','1759320IjzfYA'];a111_0x45e2=function(){return _0x4409cd;};return a111_0x45e2();}(function(_0x37a0ee,_0x517f19){const _0x4e539c=a111_0x36ad,_0x8e2854=_0x37a0ee();while(!![]){try{const _0x5da35d=parseInt(_0x4e539c(0x119))/0x1*(-parseInt(_0x4e539c(0xff))/0x2)+-parseInt(_0x4e539c(0x10c))/0x3+parseInt(_0x4e539c(0xfd))/0x4+-parseInt(_0x4e539c(0x122))/0x5*(-parseInt(_0x4e539c(0x103))/0x6)+parseInt(_0x4e539c(0x10b))/0x7*(parseInt(_0x4e539c(0x10d))/0x8)+-parseInt(_0x4e539c(0x102))/0x9*(parseInt(_0x4e539c(0x121))/0xa)+parseInt(_0x4e539c(0x109))/0xb;if(_0x5da35d===_0x517f19)break;else _0x8e2854['push'](_0x8e2854['shift']());}catch(_0x501c65){_0x8e2854['push'](_0x8e2854['shift']());}}}(a111_0x45e2,0xb435b));const a111_0x1ebe14=(function(){let _0x4a5e1d=!![];return function(_0x4c07f4,_0x4e5229){const _0x22b8a9=_0x4a5e1d?function(){if(_0x4e5229){const _0x45c20d=_0x4e5229['apply'](_0x4c07f4,arguments);return _0x4e5229=null,_0x45c20d;}}:function(){};return _0x4a5e1d=![],_0x22b8a9;};}()),a111_0x1877ee=a111_0x1ebe14(this,function(){const _0x169eb2=a111_0x36ad;return a111_0x1877ee[_0x169eb2(0x116)]()[_0x169eb2(0x115)](_0x169eb2(0x11b))[_0x169eb2(0x116)]()[_0x169eb2(0x113)](a111_0x1877ee)[_0x169eb2(0x115)](_0x169eb2(0x11b));});a111_0x1877ee();'use strict';var __importDefault=this&&this[a111_0x105236(0x123)]||function(_0x1485d8){const _0x3478c6=a111_0x105236;return _0x1485d8&&_0x1485d8[_0x3478c6(0x10e)]?_0x1485d8:{'default':_0x1485d8};};Object['defineProperty'](exports,a111_0x105236(0x10e),{'value':!![]}),exports[a111_0x105236(0x105)]=void 0x0;const axios_1=__importDefault(require(a111_0x105236(0x111))),https_1=__importDefault(require(a111_0x105236(0x108))),promises_1=require(a111_0x105236(0x11e)),request_1=require('../../../shared/utils/request'),agent_1=__importDefault(require(a111_0x105236(0x11d)));function a111_0x36ad(_0xc2e878,_0x2bdd0d){const _0x155732=a111_0x45e2();return a111_0x36ad=function(_0x1877ee,_0x1ebe14){_0x1877ee=_0x1877ee-0xfd;let _0x45e2ec=_0x155732[_0x1877ee];return _0x45e2ec;},a111_0x36ad(_0xc2e878,_0x2bdd0d);}class GitApiService{constructor(_0x4a2691,_0x39c83e){const _0x2656ad=a111_0x105236;this[_0x2656ad(0xfe)]=_0x4a2691,this[_0x2656ad(0x120)]=_0x39c83e,this[_0x2656ad(0x104)]=0x0,this[_0x2656ad(0x117)]=-0x1,this[_0x2656ad(0x101)]=this['createRequest']();}get['requestInterval'](){return 0x3c*0x3c*0x3e8/this['MAX_REQUEST_PER_HOUR'];}[a111_0x105236(0x10a)](_0x3a74fe){const _0x3e86fb=a111_0x105236;let _0x1a9e79=new https_1[(_0x3e86fb(0x114))][(_0x3e86fb(0x106))]({'rejectUnauthorized':![]});process['env'][_0x3e86fb(0x11c)]&&(_0x1a9e79=new agent_1['default'](process[_0x3e86fb(0x11a)]['HTTP_PROXY']),_0x1a9e79[_0x3e86fb(0x110)]['rejectUnauthorized']=![]);const _0x1d0ce5=axios_1['default'][_0x3e86fb(0x112)]({'baseURL':_0x3a74fe||this['credentials'][_0x3e86fb(0x10f)](),'headers':this[_0x3e86fb(0x100)](),'httpsAgent':_0x1a9e79});return _0x1d0ce5[_0x3e86fb(0x118)][_0x3e86fb(0x101)]['use'](async _0x4cb2bf=>{const _0xc976a0=_0x3e86fb,_0x4e3964=this[_0xc976a0(0x104)]++*this['requestInterval'];return await promises_1[_0xc976a0(0x11f)](_0x4e3964),this[_0xc976a0(0x104)]-=0x1,_0x4cb2bf;}),request_1[_0x3e86fb(0x107)](_0x1d0ce5);}}exports[a111_0x105236(0x105)]=GitApiService;