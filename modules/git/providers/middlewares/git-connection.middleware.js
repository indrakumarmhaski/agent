const a215_0x1473b0=a215_0x5326;(function(_0x4dbb38,_0x4ca7b1){const _0xcd0843=a215_0x5326,_0x519a63=_0x4dbb38();while(!![]){try{const _0x4c0359=-parseInt(_0xcd0843(0x118))/0x1+parseInt(_0xcd0843(0x123))/0x2*(-parseInt(_0xcd0843(0x107))/0x3)+-parseInt(_0xcd0843(0x11e))/0x4*(-parseInt(_0xcd0843(0x130))/0x5)+-parseInt(_0xcd0843(0x111))/0x6*(parseInt(_0xcd0843(0x11b))/0x7)+parseInt(_0xcd0843(0x101))/0x8*(parseInt(_0xcd0843(0x121))/0x9)+parseInt(_0xcd0843(0x105))/0xa*(-parseInt(_0xcd0843(0x108))/0xb)+parseInt(_0xcd0843(0x120))/0xc;if(_0x4c0359===_0x4ca7b1)break;else _0x519a63['push'](_0x519a63['shift']());}catch(_0x21d9ca){_0x519a63['push'](_0x519a63['shift']());}}}(a215_0x2bb7,0x6284b));const a215_0x305e6e=(function(){let _0x3c6c73=!![];return function(_0x1744b2,_0x1f6828){const _0x1ff286=_0x3c6c73?function(){if(_0x1f6828){const _0xff7081=_0x1f6828['apply'](_0x1744b2,arguments);return _0x1f6828=null,_0xff7081;}}:function(){};return _0x3c6c73=![],_0x1ff286;};}()),a215_0x1fe867=a215_0x305e6e(this,function(){const _0x5b4c7f=a215_0x5326;return a215_0x1fe867['toString']()[_0x5b4c7f(0x12b)]('(((.+)+)+)+$')[_0x5b4c7f(0x11a)]()[_0x5b4c7f(0x104)](a215_0x1fe867)[_0x5b4c7f(0x12b)](_0x5b4c7f(0x11f));});a215_0x1fe867();'use strict';var __decorate=this&&this['__decorate']||function(_0x47e8f1,_0x16788d,_0xf2fb3c,_0x155468){const _0x2c46a3=a215_0x5326;var _0x118a8f=arguments[_0x2c46a3(0x113)],_0x4b3e1a=_0x118a8f<0x3?_0x16788d:_0x155468===null?_0x155468=Object[_0x2c46a3(0x102)](_0x16788d,_0xf2fb3c):_0x155468,_0x134581;if(typeof Reflect===_0x2c46a3(0x103)&&typeof Reflect[_0x2c46a3(0x116)]===_0x2c46a3(0x106))_0x4b3e1a=Reflect[_0x2c46a3(0x116)](_0x47e8f1,_0x16788d,_0xf2fb3c,_0x155468);else{for(var _0x2d1b4c=_0x47e8f1[_0x2c46a3(0x113)]-0x1;_0x2d1b4c>=0x0;_0x2d1b4c--)if(_0x134581=_0x47e8f1[_0x2d1b4c])_0x4b3e1a=(_0x118a8f<0x3?_0x134581(_0x4b3e1a):_0x118a8f>0x3?_0x134581(_0x16788d,_0xf2fb3c,_0x4b3e1a):_0x134581(_0x16788d,_0xf2fb3c))||_0x4b3e1a;}return _0x118a8f>0x3&&_0x4b3e1a&&Object[_0x2c46a3(0x10b)](_0x16788d,_0xf2fb3c,_0x4b3e1a),_0x4b3e1a;},__metadata=this&&this[a215_0x1473b0(0x117)]||function(_0x546bed,_0x1494df){const _0x134d33=a215_0x1473b0;if(typeof Reflect===_0x134d33(0x103)&&typeof Reflect['metadata']===_0x134d33(0x106))return Reflect['metadata'](_0x546bed,_0x1494df);};Object[a215_0x1473b0(0x10b)](exports,a215_0x1473b0(0x112),{'value':!![]}),exports[a215_0x1473b0(0x10c)]=void 0x0;function a215_0x5326(_0x824f39,_0x25af47){const _0x352405=a215_0x2bb7();return a215_0x5326=function(_0x1fe867,_0x305e6e){_0x1fe867=_0x1fe867-0x100;let _0x2bb75a=_0x352405[_0x1fe867];return _0x2bb75a;},a215_0x5326(_0x824f39,_0x25af47);}const core_1=require(a215_0x1473b0(0x12c)),salesforce_service_1=require(a215_0x1473b0(0x125)),providers_tokens_1=require(a215_0x1473b0(0x11c)),credentials_factory_1=require(a215_0x1473b0(0x100)),git_api_factory_1=require(a215_0x1473b0(0x12e)),errors_1=require(a215_0x1473b0(0x10f));let GitConnectionMiddleware=class GitConnectionMiddleware{constructor(_0x3282be){const _0x3e4095=a215_0x1473b0;this[_0x3e4095(0x115)]=_0x3282be;}async[a215_0x1473b0(0x122)](_0x352e7a,_0x1d5a88){const _0x44edf8=a215_0x1473b0,_0x4038f9=_0x352e7a[_0x44edf8(0x10d)]['x-connection-id']||null;if(!_0x4038f9||!_0x352e7a[_0x44edf8(0x129)][_0x44edf8(0x10e)])throw new Error(errors_1[_0x44edf8(0x12f)]);const _0x1068a0=await this[_0x44edf8(0x115)][_0x44edf8(0x124)](_0x4038f9);if(!_0x1068a0)throw new Error(errors_1['ERR_UNKNOWN_GIT_SERVICE']);const _0x2af292=await credentials_factory_1[_0x44edf8(0x127)][_0x44edf8(0x10a)](_0x1068a0),_0x1bdd6c=_0x352e7a[_0x44edf8(0x129)][_0x44edf8(0x10e)];_0x1bdd6c[_0x44edf8(0x109)](providers_tokens_1[_0x44edf8(0x110)][_0x44edf8(0x12a)],_0x1068a0[_0x44edf8(0x12d)]),_0x1bdd6c[_0x44edf8(0x109)](providers_tokens_1[_0x44edf8(0x110)][_0x44edf8(0x119)],_0x2af292),_0x352e7a['context'][_0x44edf8(0x12a)]=git_api_factory_1[_0x44edf8(0x126)][_0x44edf8(0x114)](_0x1bdd6c,_0x1068a0[_0x44edf8(0x12d)]);}};GitConnectionMiddleware=__decorate([(0x0,core_1[a215_0x1473b0(0x11d)])('before'),__metadata('design:paramtypes',[salesforce_service_1[a215_0x1473b0(0x128)]])],GitConnectionMiddleware),exports[a215_0x1473b0(0x10c)]=GitConnectionMiddleware;function a215_0x2bb7(){const _0x30c5a8=['CredentialsFactory','SalesforceService','context','provider','search','../../../../core','gitProvider','../api/git-api.factory','ERR_UNKNOWN_GIT_SERVICE','1262555ExyAFW','../credentials/credentials.factory','568VWqiNt','getOwnPropertyDescriptor','object','constructor','10ePdgHf','function','2118822cehiDG','283481MCpbHp','set','createFromConnection','defineProperty','GitConnectionMiddleware','headers','container','../../../../constants/errors','Tokens','132432EjjPpy','__esModule','length','createFromProvider','salesforceService','decorate','__metadata','604119IjXEah','credentials','toString','35fNKeqW','../providers.tokens','Middleware','8beGrvz','(((.+)+)+)+$','14104116IMQwJw','21510vuDQtp','handle','2vAiqdM','fetchConnection','../../salesforce/services/salesforce.service','ServicesFactory'];a215_0x2bb7=function(){return _0x30c5a8;};return a215_0x2bb7();}