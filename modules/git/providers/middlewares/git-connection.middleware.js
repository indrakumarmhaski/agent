const a188_0x3815a3=a188_0x4ba8;(function(_0x516ebf,_0x1374f0){const _0x82d6a0=a188_0x4ba8,_0x5c9167=_0x516ebf();while(!![]){try{const _0x5291fe=-parseInt(_0x82d6a0(0x1ab))/0x1*(parseInt(_0x82d6a0(0x1a2))/0x2)+parseInt(_0x82d6a0(0x19e))/0x3*(parseInt(_0x82d6a0(0x1b1))/0x4)+-parseInt(_0x82d6a0(0x199))/0x5+-parseInt(_0x82d6a0(0x1a7))/0x6*(parseInt(_0x82d6a0(0x1b5))/0x7)+-parseInt(_0x82d6a0(0x1ba))/0x8*(parseInt(_0x82d6a0(0x194))/0x9)+-parseInt(_0x82d6a0(0x1af))/0xa+parseInt(_0x82d6a0(0x1a5))/0xb;if(_0x5291fe===_0x1374f0)break;else _0x5c9167['push'](_0x5c9167['shift']());}catch(_0x80d89e){_0x5c9167['push'](_0x5c9167['shift']());}}}(a188_0x1cfd,0x43a5d));const a188_0x48a41a=(function(){let _0x37857d=!![];return function(_0x5ea572,_0x277d4a){const _0x5f051a=_0x37857d?function(){if(_0x277d4a){const _0x59515c=_0x277d4a['apply'](_0x5ea572,arguments);return _0x277d4a=null,_0x59515c;}}:function(){};return _0x37857d=![],_0x5f051a;};}()),a188_0xb99205=a188_0x48a41a(this,function(){const _0x413bbe=a188_0x4ba8;return a188_0xb99205['toString']()[_0x413bbe(0x1ae)](_0x413bbe(0x1ad))[_0x413bbe(0x1ac)]()[_0x413bbe(0x198)](a188_0xb99205)['search']('(((.+)+)+)+$');});a188_0xb99205();'use strict';var __decorate=this&&this[a188_0x3815a3(0x1a3)]||function(_0x233528,_0x1a43ef,_0x43a78b,_0x3efdde){const _0x13142f=a188_0x3815a3;var _0x2b3403=arguments['length'],_0x28b143=_0x2b3403<0x3?_0x1a43ef:_0x3efdde===null?_0x3efdde=Object[_0x13142f(0x1b9)](_0x1a43ef,_0x43a78b):_0x3efdde,_0x2f227a;if(typeof Reflect===_0x13142f(0x195)&&typeof Reflect['decorate']===_0x13142f(0x19b))_0x28b143=Reflect[_0x13142f(0x1a4)](_0x233528,_0x1a43ef,_0x43a78b,_0x3efdde);else{for(var _0x217ce8=_0x233528[_0x13142f(0x197)]-0x1;_0x217ce8>=0x0;_0x217ce8--)if(_0x2f227a=_0x233528[_0x217ce8])_0x28b143=(_0x2b3403<0x3?_0x2f227a(_0x28b143):_0x2b3403>0x3?_0x2f227a(_0x1a43ef,_0x43a78b,_0x28b143):_0x2f227a(_0x1a43ef,_0x43a78b))||_0x28b143;}return _0x2b3403>0x3&&_0x28b143&&Object['defineProperty'](_0x1a43ef,_0x43a78b,_0x28b143),_0x28b143;},__metadata=this&&this[a188_0x3815a3(0x1a9)]||function(_0x3d0df0,_0x15cd85){const _0x1a59db=a188_0x3815a3;if(typeof Reflect===_0x1a59db(0x195)&&typeof Reflect[_0x1a59db(0x1b6)]===_0x1a59db(0x19b))return Reflect[_0x1a59db(0x1b6)](_0x3d0df0,_0x15cd85);};Object['defineProperty'](exports,a188_0x3815a3(0x19a),{'value':!![]}),exports[a188_0x3815a3(0x1b3)]=void 0x0;const core_1=require('../../../../core'),salesforce_service_1=require(a188_0x3815a3(0x1bc)),providers_tokens_1=require(a188_0x3815a3(0x1a6)),credentials_factory_1=require(a188_0x3815a3(0x1a0)),git_api_factory_1=require(a188_0x3815a3(0x18e)),errors_1=require(a188_0x3815a3(0x192));function a188_0x4ba8(_0x3043dc,_0x167cb3){const _0x1324ed=a188_0x1cfd();return a188_0x4ba8=function(_0xb99205,_0x48a41a){_0xb99205=_0xb99205-0x18e;let _0x1cfde5=_0x1324ed[_0xb99205];return _0x1cfde5;},a188_0x4ba8(_0x3043dc,_0x167cb3);}let GitConnectionMiddleware=class GitConnectionMiddleware{constructor(_0x580bde){this['salesforceService']=_0x580bde;}async[a188_0x3815a3(0x190)](_0x1476df,_0x2ae7b3){const _0x43a8b8=a188_0x3815a3,_0x2c0648=_0x1476df['headers'][_0x43a8b8(0x193)]||null;if(!_0x2c0648||!_0x1476df['context'][_0x43a8b8(0x196)])throw new Error(errors_1[_0x43a8b8(0x1b4)]);const _0x2e04cf=await this['salesforceService'][_0x43a8b8(0x1bd)](_0x2c0648);if(!_0x2e04cf)throw new Error(errors_1[_0x43a8b8(0x1b4)]);const _0x48d9ce=await credentials_factory_1['CredentialsFactory'][_0x43a8b8(0x1a1)](_0x2e04cf),_0x2b3849=_0x1476df['context']['container'];_0x2b3849[_0x43a8b8(0x1b2)](providers_tokens_1[_0x43a8b8(0x1b7)]['provider'],_0x2e04cf['gitProvider']),_0x2b3849[_0x43a8b8(0x1b2)](providers_tokens_1[_0x43a8b8(0x1b7)][_0x43a8b8(0x1aa)],_0x48d9ce),_0x1476df[_0x43a8b8(0x18f)][_0x43a8b8(0x1b0)]=git_api_factory_1[_0x43a8b8(0x1a8)][_0x43a8b8(0x19c)](_0x2b3849,_0x2e04cf[_0x43a8b8(0x191)]);}};function a188_0x1cfd(){const _0x159239=['__decorate','decorate','17830054QkmGCz','../providers.tokens','750VGyUdv','ServicesFactory','__metadata','credentials','45817VxGfPS','toString','(((.+)+)+)+$','search','4989240CbqSsR','provider','39428sSAlwe','set','GitConnectionMiddleware','ERR_UNKNOWN_GIT_SERVICE','2555XLvffv','metadata','Tokens','SalesforceService','getOwnPropertyDescriptor','1468200ZoMnoQ','Middleware','../../salesforce/services/salesforce.service','fetchConnection','../api/git-api.factory','context','handle','gitProvider','../../../../constants/errors','x-connection-id','9fkElHp','object','container','length','constructor','2507430kOMpDf','__esModule','function','createFromProvider','before','21GuEfTE','design:paramtypes','../credentials/credentials.factory','createFromConnection','8jKwnKc'];a188_0x1cfd=function(){return _0x159239;};return a188_0x1cfd();}GitConnectionMiddleware=__decorate([(0x0,core_1[a188_0x3815a3(0x1bb)])(a188_0x3815a3(0x19d)),__metadata(a188_0x3815a3(0x19f),[salesforce_service_1[a188_0x3815a3(0x1b8)]])],GitConnectionMiddleware),exports[a188_0x3815a3(0x1b3)]=GitConnectionMiddleware;