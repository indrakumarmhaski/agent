const a159_0x24794b=a159_0xad45;function a159_0xad45(_0x5cf694,_0x3a2290){const _0x27fec2=a159_0x3cdb();return a159_0xad45=function(_0x279460,_0x5c6797){_0x279460=_0x279460-0x153;let _0x3cdbd4=_0x27fec2[_0x279460];return _0x3cdbd4;},a159_0xad45(_0x5cf694,_0x3a2290);}(function(_0x19a46,_0x57db87){const _0x56fbfc=a159_0xad45,_0x14eca3=_0x19a46();while(!![]){try{const _0x17c28c=-parseInt(_0x56fbfc(0x171))/0x1+parseInt(_0x56fbfc(0x16d))/0x2+parseInt(_0x56fbfc(0x164))/0x3+-parseInt(_0x56fbfc(0x17c))/0x4*(parseInt(_0x56fbfc(0x16f))/0x5)+-parseInt(_0x56fbfc(0x158))/0x6+parseInt(_0x56fbfc(0x167))/0x7+parseInt(_0x56fbfc(0x17a))/0x8*(parseInt(_0x56fbfc(0x16c))/0x9);if(_0x17c28c===_0x57db87)break;else _0x14eca3['push'](_0x14eca3['shift']());}catch(_0x143ea6){_0x14eca3['push'](_0x14eca3['shift']());}}}(a159_0x3cdb,0xb477a));const a159_0x5c6797=(function(){let _0x2d50d5=!![];return function(_0x563c78,_0x1cbb5f){const _0x5e499a=_0x2d50d5?function(){const _0xbdb516=a159_0xad45;if(_0x1cbb5f){const _0x559c49=_0x1cbb5f[_0xbdb516(0x17b)](_0x563c78,arguments);return _0x1cbb5f=null,_0x559c49;}}:function(){};return _0x2d50d5=![],_0x5e499a;};}()),a159_0x279460=a159_0x5c6797(this,function(){const _0x4fd63a=a159_0xad45;return a159_0x279460[_0x4fd63a(0x173)]()['search'](_0x4fd63a(0x177))[_0x4fd63a(0x173)]()[_0x4fd63a(0x166)](a159_0x279460)['search'](_0x4fd63a(0x177));});a159_0x279460();'use strict';Object['defineProperty'](exports,a159_0x24794b(0x15d),{'value':!![]}),exports[a159_0x24794b(0x15b)]=void 0x0;const bad_request_error_1=require(a159_0x24794b(0x16a)),not_found_error_1=require(a159_0x24794b(0x17e)),hook_dto_1=require(a159_0x24794b(0x174)),git_hook_service_1=require(a159_0x24794b(0x168));function a159_0x3cdb(){const _0x37ec4a=['./git-hook.service','update','../../../../../core/errors/bad-request.error','projectId','18nhKadI','587486LRSLkt','request','10FPPWme','NotFoundError','448868JDVliH','getAll','toString','../dto/hook.dto','getOne','/_apis/hooks/subscriptions','(((.+)+)+)+$','get','fromAzure','5790648ftqNXM','apply','2318784yFXhvS','post','../../../../../core/errors/not-found.error','publisherInputs','createRequest','/_apis/hooks/subscriptions/','HookDto','fromGithub','4164216UPvdxk','patch','GitHookService','AzureHookService','BadRequestError','__esModule','delete','api','organization','create','map','filter','3438921vWQPja','credentials','constructor','1076446vYpSRZ'];a159_0x3cdb=function(){return _0x37ec4a;};return a159_0x3cdb();}class AzureHookService extends git_hook_service_1[a159_0x24794b(0x15a)]{constructor(_0x3b3f12,_0xe77ed4,_0x3e8540,_0x4f2e79){const _0x43d1ff=a159_0x24794b;super(_0x3b3f12),this[_0x43d1ff(0x16b)]=_0xe77ed4,this[_0x43d1ff(0x15f)]=_0x3e8540,this[_0x43d1ff(0x165)]=_0x4f2e79,this[_0x43d1ff(0x16e)]=this[_0x43d1ff(0x154)]();}get['organization'](){const _0xd4580d=a159_0x24794b;return this[_0xd4580d(0x165)]['organization'];}[a159_0x24794b(0x154)](){const _0x43dd5e=a159_0x24794b;return this[_0x43dd5e(0x15f)]['createRequest']();}['getProjectId'](){const _0x2102cb=a159_0x24794b;return this[_0x2102cb(0x16b)];}async[a159_0x24794b(0x161)](_0x2fc4bb){const _0x363994=a159_0x24794b;try{const _0x2ca008=await this[_0x363994(0x16e)][_0x363994(0x17d)](this[_0x363994(0x160)]+_0x363994(0x176),_0x2fc4bb);return hook_dto_1[_0x363994(0x156)][_0x363994(0x179)](_0x2ca008);}catch(_0x305d03){throw new bad_request_error_1['BadRequestError'](_0x305d03);}}async[a159_0x24794b(0x175)](_0x444fbd){const _0x5a9119=a159_0x24794b;try{const _0x206da7=await this['request'][_0x5a9119(0x178)](this[_0x5a9119(0x160)]+'/_apis/hooks/subscriptions/'+_0x444fbd);return hook_dto_1[_0x5a9119(0x156)]['fromAzure'](_0x206da7);}catch(_0x1b132b){throw new not_found_error_1['NotFoundError'](_0x1b132b);}}async[a159_0x24794b(0x172)](){const _0x2b7c8a=a159_0x24794b;try{const _0x46b984=await this[_0x2b7c8a(0x16e)][_0x2b7c8a(0x178)](this['organization']+_0x2b7c8a(0x176));return _0x46b984['value'][_0x2b7c8a(0x163)](_0x3cc0bd=>{const _0x315ed2=_0x2b7c8a;var _0x405f03;return((_0x405f03=_0x3cc0bd===null||_0x3cc0bd===void 0x0?void 0x0:_0x3cc0bd[_0x315ed2(0x153)])===null||_0x405f03===void 0x0?void 0x0:_0x405f03['projectId'])===this[_0x315ed2(0x16b)];})[_0x2b7c8a(0x162)](_0x2d81f0=>hook_dto_1['HookDto']['fromAzure'](_0x2d81f0));}catch(_0x1b7f6d){throw new not_found_error_1[(_0x2b7c8a(0x170))](_0x1b7f6d);}}async[a159_0x24794b(0x169)](_0x3c9de5,_0x3d3d36){const _0x1d4379=a159_0x24794b;try{const _0x193cff=await this[_0x1d4379(0x16e)][_0x1d4379(0x159)](this[_0x1d4379(0x160)]+_0x1d4379(0x155)+_0x3c9de5,_0x3d3d36);return hook_dto_1[_0x1d4379(0x156)][_0x1d4379(0x157)](_0x193cff);}catch(_0x1418c8){throw new bad_request_error_1[(_0x1d4379(0x15c))](_0x1418c8);}}async[a159_0x24794b(0x15e)](_0x4f339b){const _0x14097b=a159_0x24794b;try{await this[_0x14097b(0x16e)][_0x14097b(0x15e)](this[_0x14097b(0x160)]+'/_apis/hooks/subscriptions/'+_0x4f339b);}catch(_0x512288){throw new bad_request_error_1[(_0x14097b(0x15c))](_0x512288);}}}exports[a159_0x24794b(0x15b)]=AzureHookService;