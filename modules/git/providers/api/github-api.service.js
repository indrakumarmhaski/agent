var a198_0x473f5d=a198_0x5c89;(function(_0x4edda5,_0x39d8f4){var _0x2fd0be=a198_0x5c89,_0x198397=_0x4edda5();while(!![]){try{var _0x5941c5=-parseInt(_0x2fd0be(0xad))/0x1+parseInt(_0x2fd0be(0x9b))/0x2+-parseInt(_0x2fd0be(0xa3))/0x3+parseInt(_0x2fd0be(0xaf))/0x4+parseInt(_0x2fd0be(0xc1))/0x5*(parseInt(_0x2fd0be(0xb2))/0x6)+parseInt(_0x2fd0be(0xbe))/0x7*(parseInt(_0x2fd0be(0xc2))/0x8)+parseInt(_0x2fd0be(0xbf))/0x9;if(_0x5941c5===_0x39d8f4)break;else _0x198397['push'](_0x198397['shift']());}catch(_0x102507){_0x198397['push'](_0x198397['shift']());}}}(a198_0x5772,0xca527));var a198_0x2f9426=(function(){var _0x2da635=!![];return function(_0x3d2f6c,_0x4ce96a){var _0x68e95b=_0x2da635?function(){var _0x4de8d9=a198_0x5c89;if(_0x4ce96a){var _0x547db3=_0x4ce96a[_0x4de8d9(0x9d)](_0x3d2f6c,arguments);return _0x4ce96a=null,_0x547db3;}}:function(){};return _0x2da635=![],_0x68e95b;};}()),a198_0x520030=a198_0x2f9426(this,function(){var _0x5f46c0=a198_0x5c89;return a198_0x520030[_0x5f46c0(0xa4)]()[_0x5f46c0(0xb5)](_0x5f46c0(0xbc))['toString']()[_0x5f46c0(0xb7)](a198_0x520030)[_0x5f46c0(0xb5)](_0x5f46c0(0xbc));});a198_0x520030();'use strict';var __decorate=this&&this['__decorate']||function(_0x47e4d4,_0x2e86f4,_0x582155,_0x2354d4){var _0x3fa29d=a198_0x5c89,_0xfafd33=arguments[_0x3fa29d(0x9c)],_0x2363b9=_0xfafd33<0x3?_0x2e86f4:_0x2354d4===null?_0x2354d4=Object[_0x3fa29d(0xa7)](_0x2e86f4,_0x582155):_0x2354d4,_0x5cb1aa;if(typeof Reflect===_0x3fa29d(0xa6)&&typeof Reflect[_0x3fa29d(0xba)]===_0x3fa29d(0xae))_0x2363b9=Reflect['decorate'](_0x47e4d4,_0x2e86f4,_0x582155,_0x2354d4);else{for(var _0x3d7b46=_0x47e4d4[_0x3fa29d(0x9c)]-0x1;_0x3d7b46>=0x0;_0x3d7b46--)if(_0x5cb1aa=_0x47e4d4[_0x3d7b46])_0x2363b9=(_0xfafd33<0x3?_0x5cb1aa(_0x2363b9):_0xfafd33>0x3?_0x5cb1aa(_0x2e86f4,_0x582155,_0x2363b9):_0x5cb1aa(_0x2e86f4,_0x582155))||_0x2363b9;}return _0xfafd33>0x3&&_0x2363b9&&Object[_0x3fa29d(0xb9)](_0x2e86f4,_0x582155,_0x2363b9),_0x2363b9;},__metadata=this&&this['__metadata']||function(_0x61b98c,_0x26395f){var _0x41bbf6=a198_0x5c89;if(typeof Reflect===_0x41bbf6(0xa6)&&typeof Reflect[_0x41bbf6(0xc0)]===_0x41bbf6(0xae))return Reflect[_0x41bbf6(0xc0)](_0x61b98c,_0x26395f);},__param=this&&this['__param']||function(_0x494148,_0x1e3681){return function(_0x57b4d0,_0x3189d5){_0x1e3681(_0x57b4d0,_0x3189d5,_0x494148);};};function a198_0x5c89(_0x5da309,_0x53331e){var _0x5a5d63=a198_0x5772();return a198_0x5c89=function(_0x520030,_0x2f9426){_0x520030=_0x520030-0x9b;var _0x5772a5=_0x5a5d63[_0x520030];return _0x5772a5;},a198_0x5c89(_0x5da309,_0x53331e);}Object['defineProperty'](exports,a198_0x473f5d(0xb0),{'value':!![]}),exports['GithubApiService']=void 0x0;const typedi_1=require(a198_0x473f5d(0xac)),git_api_service_1=require(a198_0x473f5d(0xa1)),providers_tokens_1=require(a198_0x473f5d(0xb3)),git_provider_1=require(a198_0x473f5d(0xb4));let GithubApiService=class GithubApiService extends git_api_service_1['GitApiService']{constructor(_0x14037d,_0x109be1){var _0x54c17c=a198_0x473f5d;super(_0x14037d,_0x109be1),this[_0x54c17c(0xa2)]=this[_0x54c17c(0xbb)]===git_provider_1['GitProvider'][_0x54c17c(0x9e)]?0x3a98:0x1388;}[a198_0x473f5d(0xab)](){var _0x239611=a198_0x473f5d;return{'Accept':'application/vnd.github.v3+json','Authorization':this[_0x239611(0xa0)]['getAuthorizationHeader']()};}['getCurrentUser'](){var _0xaaad2e=a198_0x473f5d;return this[_0xaaad2e(0xb1)][_0xaaad2e(0xb6)](_0xaaad2e(0xb8));}async[a198_0x473f5d(0xa8)](){return await this['getCurrentUser'](),!![];}};GithubApiService=__decorate([(0x0,typedi_1[a198_0x473f5d(0xaa)])(),__param(0x0,(0x0,typedi_1['Inject'])(providers_tokens_1['Tokens']['provider'])),__param(0x1,(0x0,typedi_1[a198_0x473f5d(0xbd)])(providers_tokens_1[a198_0x473f5d(0x9f)][a198_0x473f5d(0xa0)])),__metadata(a198_0x473f5d(0xa9),[String,Object])],GithubApiService),exports[a198_0x473f5d(0xa5)]=GithubApiService;function a198_0x5772(){var _0x3909e1=['../providers.tokens','../types/git-provider','search','get','constructor','user','defineProperty','decorate','provider','(((.+)+)+)+$','Inject','721lsrmyr','6570081qEkegu','metadata','360pmQSQy','60432LEgoFI','3310834IExwwA','length','apply','GithubServer','Tokens','credentials','./git-api.service','MAX_REQUEST_PER_HOUR','4512042VWSwQm','toString','GithubApiService','object','getOwnPropertyDescriptor','isLoggedIn','design:paramtypes','Service','getHeaders','typedi','1558465WauBST','function','985528IKzPOD','__esModule','request','40110KmIzqr'];a198_0x5772=function(){return _0x3909e1;};return a198_0x5772();}