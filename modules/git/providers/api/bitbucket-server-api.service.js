function a109_0x5477(){var _0x28906d=['149065SAFKhV','getUsers','toString','45440JFCcLa','Inject','getAuthorizationHeader','credentials','__param','search','4560684KDqlDg','function','132WOPfTo','1kIcGNu','length','users','getHeaders','Service','189850CTmpII','Tokens','1596357YfPHDh','./git-api.service','8MObtNB','16lNcxZC','987894wVJttg','decorate','__metadata','MAX_REQUEST_PER_HOUR','../types/git-provider','isLoggedIn','defineProperty','getOwnPropertyDescriptor','BitbucketServerApiService','metadata','request','6cevYaQ','design:paramtypes','799486LbHkCr','typedi','object','get','BitbucketServerCredentialsDto','provider','(((.+)+)+)+$'];a109_0x5477=function(){return _0x28906d;};return a109_0x5477();}var a109_0xe48de7=a109_0x3947;(function(_0x3a272e,_0x43709b){var _0x5a8548=a109_0x3947,_0x4ea18e=_0x3a272e();while(!![]){try{var _0x32a9bb=-parseInt(_0x5a8548(0x8a))/0x1*(-parseInt(_0x5a8548(0xa2))/0x2)+-parseInt(_0x5a8548(0x95))/0x3+parseInt(_0x5a8548(0x93))/0x4*(parseInt(_0x5a8548(0x8f))/0x5)+-parseInt(_0x5a8548(0xa0))/0x6*(parseInt(_0x5a8548(0xa9))/0x7)+parseInt(_0x5a8548(0x94))/0x8*(-parseInt(_0x5a8548(0x91))/0x9)+-parseInt(_0x5a8548(0xac))/0xa*(-parseInt(_0x5a8548(0x89))/0xb)+parseInt(_0x5a8548(0xb2))/0xc;if(_0x32a9bb===_0x43709b)break;else _0x4ea18e['push'](_0x4ea18e['shift']());}catch(_0x3f2885){_0x4ea18e['push'](_0x4ea18e['shift']());}}}(a109_0x5477,0x32081));var a109_0x32b221=(function(){var _0x20ef1b=!![];return function(_0x702800,_0x2bd679){var _0x335f69=_0x20ef1b?function(){if(_0x2bd679){var _0xd44729=_0x2bd679['apply'](_0x702800,arguments);return _0x2bd679=null,_0xd44729;}}:function(){};return _0x20ef1b=![],_0x335f69;};}()),a109_0x233db0=a109_0x32b221(this,function(){var _0xde889f=a109_0x3947;return a109_0x233db0[_0xde889f(0xab)]()[_0xde889f(0xb1)](_0xde889f(0xa8))['toString']()['constructor'](a109_0x233db0)[_0xde889f(0xb1)]('(((.+)+)+)+$');});function a109_0x3947(_0x2239bf,_0x114f7c){var _0x2cf3e0=a109_0x5477();return a109_0x3947=function(_0x233db0,_0x32b221){_0x233db0=_0x233db0-0x88;var _0x547731=_0x2cf3e0[_0x233db0];return _0x547731;},a109_0x3947(_0x2239bf,_0x114f7c);}a109_0x233db0();'use strict';var __decorate=this&&this['__decorate']||function(_0x30009b,_0x1f616f,_0x19ed87,_0x376d9f){var _0xc27582=a109_0x3947,_0x2b73af=arguments[_0xc27582(0x8b)],_0x31e991=_0x2b73af<0x3?_0x1f616f:_0x376d9f===null?_0x376d9f=Object[_0xc27582(0x9c)](_0x1f616f,_0x19ed87):_0x376d9f,_0x6a51ab;if(typeof Reflect===_0xc27582(0xa4)&&typeof Reflect[_0xc27582(0x96)]===_0xc27582(0x88))_0x31e991=Reflect[_0xc27582(0x96)](_0x30009b,_0x1f616f,_0x19ed87,_0x376d9f);else{for(var _0x3f766b=_0x30009b[_0xc27582(0x8b)]-0x1;_0x3f766b>=0x0;_0x3f766b--)if(_0x6a51ab=_0x30009b[_0x3f766b])_0x31e991=(_0x2b73af<0x3?_0x6a51ab(_0x31e991):_0x2b73af>0x3?_0x6a51ab(_0x1f616f,_0x19ed87,_0x31e991):_0x6a51ab(_0x1f616f,_0x19ed87))||_0x31e991;}return _0x2b73af>0x3&&_0x31e991&&Object[_0xc27582(0x9b)](_0x1f616f,_0x19ed87,_0x31e991),_0x31e991;},__metadata=this&&this[a109_0xe48de7(0x97)]||function(_0x43368d,_0x5e355b){var _0x21d0ff=a109_0xe48de7;if(typeof Reflect===_0x21d0ff(0xa4)&&typeof Reflect[_0x21d0ff(0x9e)]===_0x21d0ff(0x88))return Reflect[_0x21d0ff(0x9e)](_0x43368d,_0x5e355b);},__param=this&&this[a109_0xe48de7(0xb0)]||function(_0x4b41fa,_0xe03084){return function(_0x322aac,_0x223e48){_0xe03084(_0x322aac,_0x223e48,_0x4b41fa);};};Object[a109_0xe48de7(0x9b)](exports,'__esModule',{'value':!![]}),exports[a109_0xe48de7(0x9d)]=void 0x0;const typedi_1=require(a109_0xe48de7(0xa3)),git_api_service_1=require(a109_0xe48de7(0x92)),bitbucket_server_credentials_dto_1=require('../credentials/dto/bitbucket-server-credentials.dto'),providers_tokens_1=require('../providers.tokens'),git_provider_1=require(a109_0xe48de7(0x99));let BitbucketServerApiService=class BitbucketServerApiService extends git_api_service_1['GitApiService']{constructor(_0x1df118,_0x3bb3be){var _0x510608=a109_0xe48de7;super(_0x1df118,_0x3bb3be),this[_0x510608(0x98)]=0x2710;}[a109_0xe48de7(0x8d)](){var _0x928867=a109_0xe48de7;return{'Authorization':this[_0x928867(0xaf)][_0x928867(0xae)]()};}[a109_0xe48de7(0xaa)](){var _0x5a217e=a109_0xe48de7;return this[_0x5a217e(0x9f)][_0x5a217e(0xa5)](_0x5a217e(0x8c));}async[a109_0xe48de7(0x9a)](){var _0x1a9b71=a109_0xe48de7;return await this[_0x1a9b71(0xaa)](),!![];}};BitbucketServerApiService=__decorate([typedi_1[a109_0xe48de7(0x8e)](),__param(0x0,typedi_1[a109_0xe48de7(0xad)](providers_tokens_1[a109_0xe48de7(0x90)][a109_0xe48de7(0xa7)])),__param(0x1,typedi_1[a109_0xe48de7(0xad)](providers_tokens_1['Tokens'][a109_0xe48de7(0xaf)])),__metadata(a109_0xe48de7(0xa1),[String,bitbucket_server_credentials_dto_1[a109_0xe48de7(0xa6)]])],BitbucketServerApiService),exports[a109_0xe48de7(0x9d)]=BitbucketServerApiService;