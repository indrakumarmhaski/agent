const a386_0x209af7=a386_0x4e48;(function(_0x399df5,_0xa4a82c){const _0x2df6d5=a386_0x4e48,_0x320db6=_0x399df5();while(!![]){try{const _0x42ac60=parseInt(_0x2df6d5(0x1bc))/0x1+-parseInt(_0x2df6d5(0x1c4))/0x2*(-parseInt(_0x2df6d5(0x1b0))/0x3)+-parseInt(_0x2df6d5(0x1a1))/0x4*(parseInt(_0x2df6d5(0x1ab))/0x5)+-parseInt(_0x2df6d5(0x1c0))/0x6*(parseInt(_0x2df6d5(0x1a0))/0x7)+-parseInt(_0x2df6d5(0x1b3))/0x8+parseInt(_0x2df6d5(0x1c2))/0x9*(-parseInt(_0x2df6d5(0x196))/0xa)+-parseInt(_0x2df6d5(0x1b1))/0xb*(-parseInt(_0x2df6d5(0x1be))/0xc);if(_0x42ac60===_0xa4a82c)break;else _0x320db6['push'](_0x320db6['shift']());}catch(_0x1ee05c){_0x320db6['push'](_0x320db6['shift']());}}}(a386_0x13f7,0x9fc7e));const a386_0x551138=(function(){let _0x4e7de7=!![];return function(_0x341135,_0x56122e){const _0x47bf90=_0x4e7de7?function(){const _0x220f9a=a386_0x4e48;if(_0x56122e){const _0x35eab1=_0x56122e[_0x220f9a(0x1ba)](_0x341135,arguments);return _0x56122e=null,_0x35eab1;}}:function(){};return _0x4e7de7=![],_0x47bf90;};}()),a386_0x21949b=a386_0x551138(this,function(){const _0x26b3d3=a386_0x4e48;return a386_0x21949b[_0x26b3d3(0x1c6)]()[_0x26b3d3(0x1c1)]('(((.+)+)+)+$')[_0x26b3d3(0x1c6)]()[_0x26b3d3(0x1bf)](a386_0x21949b)[_0x26b3d3(0x1c1)](_0x26b3d3(0x1ac));});function a386_0x13f7(){const _0x4d2a1d=['default','740370ZgoNAJ','INVALID_SESSION_ID','message','defineProperty','accessToken','every','type','__esModule','config','../enums/status.enums','1067038IAdIDo','8ZbhJCF','authorization','multipart/form-data','application/json','Content-Type','response','headers','errors','interceptors','../classes/errors/veeva-request-error','2312410nmZKLF','(((.+)+)+)+$','responseStatus','startsWith','parse','6MJzzEA','11OcMtBU','VeevaConstants','7518920hStSxE','updateAccessToken','accept','content-type','data','instanceUrl','__importDefault','apply','includes','857453HbynJb','text','13486164oqWhEK','constructor','6inLIRg','search','27xsOegY','VeevaRequestError','912536XRGMIT','VeevaResponseStatus','toString','maxBodyLength','responseType'];a386_0x13f7=function(){return _0x4d2a1d;};return a386_0x13f7();}a386_0x21949b();'use strict';var __importDefault=this&&this[a386_0x209af7(0x1b9)]||function(_0x41e9fc){const _0x3c5fb0=a386_0x209af7;return _0x41e9fc&&_0x41e9fc[_0x3c5fb0(0x19d)]?_0x41e9fc:{'default':_0x41e9fc};};Object[a386_0x209af7(0x199)](exports,a386_0x209af7(0x19d),{'value':!![]}),exports['createVeevaRequest']=void 0x0;const axios_1=__importDefault(require('axios')),axios_retry_1=__importDefault(require('axios-retry')),veeva_constants_1=require('../constants/veeva.constants'),status_enums_1=require(a386_0x209af7(0x19f)),veeva_request_error_1=require(a386_0x209af7(0x1aa)),DELAY=0x9c4,MAX_BODY_LENGTH=0x6400000,MAX_CONTENT_LENGTH=0x6400000,VALID_RESPONSE_TYPES_TO_PARSE=['arraybuffer',a386_0x209af7(0x1bd)];function createVeevaRequest(_0x592656){const _0x147c1f=a386_0x209af7,{auth:_0x2ef2ec}=_0x592656,_0xe1d0cb=axios_1[_0x147c1f(0x195)]['create']();return(0x0,axios_retry_1[_0x147c1f(0x195)])(_0xe1d0cb,{'retries':0x3,'retryDelay'(_0x26a03e){return _0x26a03e*DELAY;}}),_0xe1d0cb[_0x147c1f(0x1a9)]['request']['use'](_0xf1ab33=>{const _0x158479=_0x147c1f;var _0xeccd8b;return(_0xeccd8b=_0xf1ab33['headers'])[_0x158479(0x1b5)]||(_0xeccd8b[_0x158479(0x1b5)]='application/json'),_0xf1ab33['headers'][_0x158479(0x1a2)]=''+_0x2ef2ec[_0x158479(0x19a)],_0xf1ab33['baseURL']=_0x2ef2ec[_0x158479(0x1b8)],_0xf1ab33[_0x158479(0x193)]=MAX_BODY_LENGTH,_0xf1ab33['maxContentLength']=MAX_CONTENT_LENGTH,_0xf1ab33;}),_0xe1d0cb[_0x147c1f(0x1a9)][_0x147c1f(0x1a6)]['use'](async _0x3fa358=>{const _0x4e2ecd=_0x147c1f;var _0x221deb,_0x48ad32;const _0x5f1d7e=(_0x221deb=_0x3fa358[_0x4e2ecd(0x1a7)][_0x4e2ecd(0x1b6)])===null||_0x221deb===void 0x0?void 0x0:_0x221deb[_0x4e2ecd(0x1bb)](_0x4e2ecd(0x1a4));if(!_0x5f1d7e)return _0x3fa358;const _0x2de469=VALID_RESPONSE_TYPES_TO_PARSE[_0x4e2ecd(0x1bb)](_0x3fa358[_0x4e2ecd(0x19e)][_0x4e2ecd(0x194)]),_0x69b7c=_0x2de469?JSON[_0x4e2ecd(0x1af)](_0x3fa358[_0x4e2ecd(0x1b7)]):_0x3fa358['data'];if(_0x69b7c[_0x4e2ecd(0x1ad)]===status_enums_1[_0x4e2ecd(0x1c5)]['SUCCESS'])return _0x3fa358;const _0x51b8a5=_0x69b7c[_0x4e2ecd(0x1a8)][_0x4e2ecd(0x19b)](_0x1c57bf=>_0x1c57bf[_0x4e2ecd(0x19c)]!==veeva_constants_1['VeevaConstants'][_0x4e2ecd(0x197)]),_0x187fa8=(((_0x48ad32=_0x3fa358[_0x4e2ecd(0x19e)]['headers'])===null||_0x48ad32===void 0x0?void 0x0:_0x48ad32[_0x4e2ecd(0x1a5)])+'')[_0x4e2ecd(0x1ae)](_0x4e2ecd(0x1a3));if(_0x51b8a5||_0x187fa8)return _0x3fa358;return await _0x592656[_0x4e2ecd(0x1b4)](),_0xe1d0cb(_0x3fa358[_0x4e2ecd(0x19e)]);},async _0x1cbf8d=>{const _0x4fa173=_0x147c1f;var _0x36226a;const _0x5292f6=((_0x36226a=_0x1cbf8d===null||_0x1cbf8d===void 0x0?void 0x0:_0x1cbf8d[_0x4fa173(0x1a6)])===null||_0x36226a===void 0x0?void 0x0:_0x36226a[_0x4fa173(0x1b7)])||_0x1cbf8d[_0x4fa173(0x198)]||veeva_constants_1[_0x4fa173(0x1b2)]['VEEVA_UNDEFINED_ERROR'];throw new veeva_request_error_1[(_0x4fa173(0x1c3))](_0x5292f6[_0x4fa173(0x1a8)]||_0x5292f6);}),_0xe1d0cb;}function a386_0x4e48(_0x5253c9,_0x5d96ea){const _0x589f79=a386_0x13f7();return a386_0x4e48=function(_0x21949b,_0x551138){_0x21949b=_0x21949b-0x193;let _0x13f717=_0x589f79[_0x21949b];return _0x13f717;},a386_0x4e48(_0x5253c9,_0x5d96ea);}exports['createVeevaRequest']=createVeevaRequest;