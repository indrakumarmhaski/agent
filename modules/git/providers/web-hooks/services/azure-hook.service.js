const a215_0x497c70=a215_0x16a5;(function(_0x555632,_0x2ca97c){const _0x509b58=a215_0x16a5,_0x47aae3=_0x555632();while(!![]){try{const _0x13aab3=parseInt(_0x509b58(0x190))/0x1+parseInt(_0x509b58(0x17d))/0x2+-parseInt(_0x509b58(0x18c))/0x3*(parseInt(_0x509b58(0x189))/0x4)+parseInt(_0x509b58(0x19f))/0x5*(parseInt(_0x509b58(0x17f))/0x6)+parseInt(_0x509b58(0x1a4))/0x7+parseInt(_0x509b58(0x1a0))/0x8*(parseInt(_0x509b58(0x1a6))/0x9)+-parseInt(_0x509b58(0x181))/0xa;if(_0x13aab3===_0x2ca97c)break;else _0x47aae3['push'](_0x47aae3['shift']());}catch(_0x477baa){_0x47aae3['push'](_0x47aae3['shift']());}}}(a215_0x219c,0x2d80c));const a215_0x1fccb2=(function(){let _0x59a1cd=!![];return function(_0x3c767d,_0x4dea5c){const _0x31dc04=_0x59a1cd?function(){const _0x463bf3=a215_0x16a5;if(_0x4dea5c){const _0x5c1653=_0x4dea5c[_0x463bf3(0x186)](_0x3c767d,arguments);return _0x4dea5c=null,_0x5c1653;}}:function(){};return _0x59a1cd=![],_0x31dc04;};}()),a215_0x36ffd1=a215_0x1fccb2(this,function(){const _0x5e73ed=a215_0x16a5;return a215_0x36ffd1['toString']()[_0x5e73ed(0x195)](_0x5e73ed(0x1a5))[_0x5e73ed(0x184)]()[_0x5e73ed(0x1a3)](a215_0x36ffd1)[_0x5e73ed(0x195)]('(((.+)+)+)+$');});function a215_0x219c(){const _0x29f46a=['951CZKsIk','fromAzure','getProjectId','request','212611vAFuaS','organization','HookDto','post','AzureHookService','search','api','getOne','map','../../../../../core/errors/not-found.error','value','projectId','defineProperty','credentials','filter','8855TVrxni','56kKYdia','update','patch','constructor','2573130CQEExI','(((.+)+)+)+$','263430EFuIPS','./git-hook.service','/_apis/hooks/subscriptions/','54380RPbUeF','createRequest','246AAvoVb','BadRequestError','5555450xNPmri','delete','getAll','toString','publisherInputs','apply','__esModule','GitHookService','1804XgEqTX','create','get'];a215_0x219c=function(){return _0x29f46a;};return a215_0x219c();}a215_0x36ffd1();function a215_0x16a5(_0x3a9d6e,_0x52ff32){const _0x30787c=a215_0x219c();return a215_0x16a5=function(_0x36ffd1,_0x1fccb2){_0x36ffd1=_0x36ffd1-0x17b;let _0x219cce=_0x30787c[_0x36ffd1];return _0x219cce;},a215_0x16a5(_0x3a9d6e,_0x52ff32);}'use strict';Object[a215_0x497c70(0x19c)](exports,a215_0x497c70(0x187),{'value':!![]}),exports['AzureHookService']=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a215_0x497c70(0x199)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a215_0x497c70(0x17b));class AzureHookService extends git_hook_service_1[a215_0x497c70(0x188)]{constructor(_0x1c446c,_0x3c5807,_0x131daf,_0x4dc462){const _0xe7f03f=a215_0x497c70;super(_0x1c446c),this[_0xe7f03f(0x19b)]=_0x3c5807,this[_0xe7f03f(0x196)]=_0x131daf,this[_0xe7f03f(0x19d)]=_0x4dc462,this[_0xe7f03f(0x18f)]=this[_0xe7f03f(0x17e)]();}get[a215_0x497c70(0x191)](){const _0x6dfacd=a215_0x497c70;return this[_0x6dfacd(0x19d)][_0x6dfacd(0x191)];}[a215_0x497c70(0x17e)](){const _0x56cfd3=a215_0x497c70;return this[_0x56cfd3(0x196)][_0x56cfd3(0x17e)]();}[a215_0x497c70(0x18e)](){return this['projectId'];}async[a215_0x497c70(0x18a)](_0x2e04e0){const _0x2aeb07=a215_0x497c70;try{const _0x4d8f54=await this['request'][_0x2aeb07(0x193)](this[_0x2aeb07(0x191)]+'/_apis/hooks/subscriptions',_0x2e04e0);return hook_dto_1[_0x2aeb07(0x192)][_0x2aeb07(0x18d)](_0x4d8f54);}catch(_0x12932c){throw new bad_request_error_1[(_0x2aeb07(0x180))](_0x12932c);}}async[a215_0x497c70(0x197)](_0x436f0c){const _0x4965bb=a215_0x497c70;try{const _0x2a4d3d=await this[_0x4965bb(0x18f)][_0x4965bb(0x18b)](this[_0x4965bb(0x191)]+_0x4965bb(0x17c)+_0x436f0c);return hook_dto_1[_0x4965bb(0x192)][_0x4965bb(0x18d)](_0x2a4d3d);}catch(_0x587b99){throw new not_found_error_1['NotFoundError'](_0x587b99);}}async[a215_0x497c70(0x183)](){const _0x5bcad6=a215_0x497c70;try{const _0x29230c=await this[_0x5bcad6(0x18f)][_0x5bcad6(0x18b)](this[_0x5bcad6(0x191)]+'/_apis/hooks/subscriptions');return _0x29230c[_0x5bcad6(0x19a)][_0x5bcad6(0x19e)](_0x2879e0=>{const _0x3ee30e=_0x5bcad6;var _0x12b4ae;return((_0x12b4ae=_0x2879e0===null||_0x2879e0===void 0x0?void 0x0:_0x2879e0[_0x3ee30e(0x185)])===null||_0x12b4ae===void 0x0?void 0x0:_0x12b4ae[_0x3ee30e(0x19b)])===this['projectId'];})[_0x5bcad6(0x198)](_0x122035=>hook_dto_1[_0x5bcad6(0x192)][_0x5bcad6(0x18d)](_0x122035));}catch(_0x2f6bc0){throw new not_found_error_1['NotFoundError'](_0x2f6bc0);}}async[a215_0x497c70(0x1a1)](_0x1f770c,_0xae079d){const _0x48728e=a215_0x497c70;try{const _0x112745=await this[_0x48728e(0x18f)][_0x48728e(0x1a2)](this['organization']+'/_apis/hooks/subscriptions/'+_0x1f770c,_0xae079d);return hook_dto_1[_0x48728e(0x192)]['fromGithub'](_0x112745);}catch(_0x2d54ae){throw new bad_request_error_1[(_0x48728e(0x180))](_0x2d54ae);}}async[a215_0x497c70(0x182)](_0x510061){const _0x47fe1d=a215_0x497c70;try{await this[_0x47fe1d(0x18f)][_0x47fe1d(0x182)](this[_0x47fe1d(0x191)]+_0x47fe1d(0x17c)+_0x510061);}catch(_0x2ca181){throw new bad_request_error_1[(_0x47fe1d(0x180))](_0x2ca181);}}}exports[a215_0x497c70(0x194)]=AzureHookService;