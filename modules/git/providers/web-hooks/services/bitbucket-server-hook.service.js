const a248_0xeb28ab=a248_0x4296;(function(_0x6fd399,_0x3fca02){const _0x561c42=a248_0x4296,_0x2adfaa=_0x6fd399();while(!![]){try{const _0x29c187=-parseInt(_0x561c42(0x1b4))/0x1+-parseInt(_0x561c42(0x194))/0x2+-parseInt(_0x561c42(0x1b0))/0x3*(parseInt(_0x561c42(0x1a9))/0x4)+parseInt(_0x561c42(0x199))/0x5+-parseInt(_0x561c42(0x1b3))/0x6*(-parseInt(_0x561c42(0x19b))/0x7)+parseInt(_0x561c42(0x1b6))/0x8*(parseInt(_0x561c42(0x1b9))/0x9)+-parseInt(_0x561c42(0x1ae))/0xa*(-parseInt(_0x561c42(0x1af))/0xb);if(_0x29c187===_0x3fca02)break;else _0x2adfaa['push'](_0x2adfaa['shift']());}catch(_0x40a6d9){_0x2adfaa['push'](_0x2adfaa['shift']());}}}(a248_0x3c7f,0x1cafe));const a248_0x1e82e4=(function(){let _0x291654=!![];return function(_0x4fda12,_0xf88234){const _0xc5c3b7=_0x291654?function(){if(_0xf88234){const _0x4dfd01=_0xf88234['apply'](_0x4fda12,arguments);return _0xf88234=null,_0x4dfd01;}}:function(){};return _0x291654=![],_0xc5c3b7;};}()),a248_0x2fe098=a248_0x1e82e4(this,function(){const _0x5111a4=a248_0x4296;return a248_0x2fe098[_0x5111a4(0x1b7)]()[_0x5111a4(0x1a3)](_0x5111a4(0x1a8))['toString']()[_0x5111a4(0x1b1)](a248_0x2fe098)[_0x5111a4(0x1a3)](_0x5111a4(0x1a8));});function a248_0x3c7f(){const _0xd51b1d=['api','../dto/hook.dto','create','fromBitbucketServer','HookDto','search','webhooks','values','apiUrl','repository','(((.+)+)+)+$','127712vBpPnj','BitbucketServerHookService','__esModule','../../../../../core/errors/not-found.error','get','60hpSzid','276991Ietblk','21YxKDKX','constructor','getAll','6pIFzLo','157808fPGmrD','getOne','23592vCfoiI','toString','webhooks/','441yAYZUf','GitHookService','request','217644OuQifu','map','createRequest','NotFoundError','delete','1152750wtytEm','put','570437ofRlIl','../../../../../core/errors/bad-request.error','defineProperty'];a248_0x3c7f=function(){return _0xd51b1d;};return a248_0x3c7f();}a248_0x2fe098();'use strict';Object[a248_0xeb28ab(0x19d)](exports,a248_0xeb28ab(0x1ab),{'value':!![]}),exports[a248_0xeb28ab(0x1aa)]=void 0x0;function a248_0x4296(_0x52d8ac,_0xd81346){const _0x5212e=a248_0x3c7f();return a248_0x4296=function(_0x2fe098,_0x1e82e4){_0x2fe098=_0x2fe098-0x192;let _0x3c7fa1=_0x5212e[_0x2fe098];return _0x3c7fa1;},a248_0x4296(_0x52d8ac,_0xd81346);}const bad_request_error_1=require(a248_0xeb28ab(0x19c)),not_found_error_1=require(a248_0xeb28ab(0x1ac)),hook_dto_1=require(a248_0xeb28ab(0x19f)),git_hook_service_1=require('./git-hook.service');class BitbucketServerHookService extends git_hook_service_1[a248_0xeb28ab(0x192)]{constructor(_0x33cf11,_0x106394){const _0x5025a9=a248_0xeb28ab;super(_0x33cf11),this[_0x5025a9(0x19e)]=_0x106394,this[_0x5025a9(0x193)]=this[_0x5025a9(0x196)]();}[a248_0xeb28ab(0x196)](){const _0x3ebb09=a248_0xeb28ab;return this[_0x3ebb09(0x19e)]['createRequest'](this[_0x3ebb09(0x1a7)][_0x3ebb09(0x1a6)]);}async[a248_0xeb28ab(0x1a0)](_0x2d828e){const _0x32421c=a248_0xeb28ab;try{const _0x2dc2fe=await this[_0x32421c(0x193)]['post']('webhooks',_0x2d828e);return hook_dto_1[_0x32421c(0x1a2)][_0x32421c(0x1a1)](_0x2dc2fe);}catch(_0xb870ee){throw new bad_request_error_1['BadRequestError'](_0xb870ee);}}async[a248_0xeb28ab(0x1b5)](_0x2efb33){const _0x2279fb=a248_0xeb28ab;try{const _0x2d30ed=await this[_0x2279fb(0x193)][_0x2279fb(0x1ad)](_0x2279fb(0x1b8)+_0x2efb33);return hook_dto_1[_0x2279fb(0x1a2)]['fromBitbucketServer'](_0x2d30ed);}catch(_0x142176){throw new not_found_error_1[(_0x2279fb(0x197))](_0x142176);}}async[a248_0xeb28ab(0x1b2)](){const _0x4d9f28=a248_0xeb28ab;try{const _0x2209fa=await this[_0x4d9f28(0x193)]['get'](_0x4d9f28(0x1a4));return _0x2209fa[_0x4d9f28(0x1a5)][_0x4d9f28(0x195)](_0x330a33=>hook_dto_1[_0x4d9f28(0x1a2)][_0x4d9f28(0x1a1)](_0x330a33));}catch(_0x3f89a0){throw new not_found_error_1['NotFoundError'](_0x3f89a0);}}async['update'](_0x2a746f,_0x392e90){const _0x3d1ac2=a248_0xeb28ab;try{const _0x1f610d=await this[_0x3d1ac2(0x193)][_0x3d1ac2(0x19a)](_0x3d1ac2(0x1b8)+_0x2a746f,_0x392e90);return hook_dto_1['HookDto'][_0x3d1ac2(0x1a1)](_0x1f610d);}catch(_0x12fe46){throw new not_found_error_1[(_0x3d1ac2(0x197))](_0x12fe46);}}async[a248_0xeb28ab(0x198)](_0x127b46){const _0x1a5807=a248_0xeb28ab;try{await this[_0x1a5807(0x193)][_0x1a5807(0x198)](_0x1a5807(0x1b8)+_0x127b46);}catch(_0x2f74ed){throw new not_found_error_1[(_0x1a5807(0x197))](_0x2f74ed);}}}exports[a248_0xeb28ab(0x1aa)]=BitbucketServerHookService;