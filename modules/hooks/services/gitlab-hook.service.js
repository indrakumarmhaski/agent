const a83_0x58aa6c=a83_0x27ec;function a83_0x27ec(_0x4d8c0b,_0x2aacad){const _0x455f71=a83_0x5c43();return a83_0x27ec=function(_0x2e0959,_0x3b7a1f){_0x2e0959=_0x2e0959-0x7d;let _0x5c43de=_0x455f71[_0x2e0959];return _0x5c43de;},a83_0x27ec(_0x4d8c0b,_0x2aacad);}(function(_0x3ac032,_0x28408f){const _0x5556b4=a83_0x27ec,_0x509088=_0x3ac032();while(!![]){try{const _0x551209=-parseInt(_0x5556b4(0x9f))/0x1+parseInt(_0x5556b4(0xa2))/0x2+parseInt(_0x5556b4(0xa4))/0x3*(-parseInt(_0x5556b4(0xa3))/0x4)+-parseInt(_0x5556b4(0x8b))/0x5*(-parseInt(_0x5556b4(0x80))/0x6)+parseInt(_0x5556b4(0x81))/0x7+-parseInt(_0x5556b4(0x97))/0x8+parseInt(_0x5556b4(0x92))/0x9*(parseInt(_0x5556b4(0x9c))/0xa);if(_0x551209===_0x28408f)break;else _0x509088['push'](_0x509088['shift']());}catch(_0x2c4eaf){_0x509088['push'](_0x509088['shift']());}}}(a83_0x5c43,0x4d281));const a83_0x3b7a1f=(function(){let _0x4bbe43=!![];return function(_0x239a22,_0x1494f9){const _0x98608b=_0x4bbe43?function(){const _0x27c8a9=a83_0x27ec;if(_0x1494f9){const _0xd34e16=_0x1494f9[_0x27c8a9(0x88)](_0x239a22,arguments);return _0x1494f9=null,_0xd34e16;}}:function(){};return _0x4bbe43=![],_0x98608b;};}()),a83_0x2e0959=a83_0x3b7a1f(this,function(){const _0x5057ce=a83_0x27ec;return a83_0x2e0959[_0x5057ce(0x8c)]()[_0x5057ce(0x8d)](_0x5057ce(0x7e))[_0x5057ce(0x8c)]()['constructor'](a83_0x2e0959)[_0x5057ce(0x8d)]('(((.+)+)+)+$');});a83_0x2e0959();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x54240b){const _0x5b5059=a83_0x27ec;return _0x54240b&&_0x54240b[_0x5b5059(0x89)]?_0x54240b:{'default':_0x54240b};};Object['defineProperty'](exports,a83_0x58aa6c(0x89),{'value':!![]}),exports[a83_0x58aa6c(0x8f)]=void 0x0;function a83_0x5c43(){const _0x4a8ba6=['map','apiUrl','../dto/hook.dto','4800WSzuUD','delete','../../../core/errors/bad-request.error','233269ccwlmU','create','GitHookService','931144uaFQET','67604OkJuKR','75NbFClw','post','./git-hook.service','(((.+)+)+)+$','BadRequestError','174678srzkpc','411033whJykc','repository','getAll','typedi','request','hooks/','createRequest','apply','__esModule','getOne','35MENIah','toString','search','hooks','GitlabHookService','default','GitlabApiService','14814YocXGe','get','HookDto','put','NotFoundError','4370680iAKiEo','fromGitlab'];a83_0x5c43=function(){return _0x4a8ba6;};return a83_0x5c43();}const bad_request_error_1=require(a83_0x58aa6c(0x9e)),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=__importDefault(require(a83_0x58aa6c(0x84))),hook_dto_1=require(a83_0x58aa6c(0x9b)),git_hook_service_1=require(a83_0x58aa6c(0x7d));class GitlabHookService extends git_hook_service_1[a83_0x58aa6c(0xa1)]{constructor(_0x80921){super(_0x80921),this['request']=this['createRequest']();}[a83_0x58aa6c(0x87)](){const _0x2a9ea7=a83_0x58aa6c,_0xd5d5d1=typedi_1[_0x2a9ea7(0x90)][_0x2a9ea7(0x93)](gitlab_api_service_1[_0x2a9ea7(0x91)]);return _0xd5d5d1[_0x2a9ea7(0x87)](this[_0x2a9ea7(0x82)][_0x2a9ea7(0x9a)]);}async[a83_0x58aa6c(0xa0)](_0x3662b9){const _0x4d34de=a83_0x58aa6c;try{const _0x1bb983=await this['request'][_0x4d34de(0xa5)]('hooks',_0x3662b9);return hook_dto_1[_0x4d34de(0x94)][_0x4d34de(0x98)](_0x1bb983);}catch(_0x1b84fd){throw new bad_request_error_1[(_0x4d34de(0x7f))](_0x1b84fd);}}async[a83_0x58aa6c(0x8a)](_0x5c83ee){const _0x412a70=a83_0x58aa6c;try{const _0x179d9a=await this[_0x412a70(0x85)][_0x412a70(0x93)](_0x412a70(0x86)+_0x5c83ee);return hook_dto_1['HookDto']['fromGitlab'](_0x179d9a);}catch(_0x2a621b){throw new not_found_error_1[(_0x412a70(0x96))](_0x2a621b);}}async[a83_0x58aa6c(0x83)](){const _0x92d024=a83_0x58aa6c;try{const _0x1202ba=await this['request'][_0x92d024(0x93)](_0x92d024(0x8e));return _0x1202ba[_0x92d024(0x99)](_0x326cc8=>hook_dto_1['HookDto']['fromGitlab'](_0x326cc8));}catch(_0x57ba05){throw new not_found_error_1[(_0x92d024(0x96))](_0x57ba05);}}async['update'](_0x405aaf,_0x396d4d){const _0x4029ad=a83_0x58aa6c;try{const _0x267003=await this['request'][_0x4029ad(0x95)](_0x4029ad(0x86)+_0x405aaf,_0x396d4d);return hook_dto_1[_0x4029ad(0x94)][_0x4029ad(0x98)](_0x267003);}catch(_0x5af4d2){throw new not_found_error_1[(_0x4029ad(0x96))](_0x5af4d2);}}async[a83_0x58aa6c(0x9d)](_0x1906f8){const _0xd4e0ef=a83_0x58aa6c;try{await this[_0xd4e0ef(0x85)][_0xd4e0ef(0x9d)]('hooks/'+_0x1906f8);}catch(_0x4b7711){throw new not_found_error_1[(_0xd4e0ef(0x96))](_0x4b7711);}}}exports[a83_0x58aa6c(0x8f)]=GitlabHookService;