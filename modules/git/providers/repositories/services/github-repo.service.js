const a208_0x4e4ed7=a208_0x1302;(function(_0x46dc26,_0x15d472){const _0x2d6ce4=a208_0x1302,_0x5ea305=_0x46dc26();while(!![]){try{const _0x127394=-parseInt(_0x2d6ce4(0x1d5))/0x1*(-parseInt(_0x2d6ce4(0x1ed))/0x2)+parseInt(_0x2d6ce4(0x1ba))/0x3+-parseInt(_0x2d6ce4(0x1b1))/0x4*(parseInt(_0x2d6ce4(0x1e6))/0x5)+-parseInt(_0x2d6ce4(0x1cb))/0x6*(parseInt(_0x2d6ce4(0x1ec))/0x7)+parseInt(_0x2d6ce4(0x1b5))/0x8*(parseInt(_0x2d6ce4(0x1e3))/0x9)+-parseInt(_0x2d6ce4(0x1dd))/0xa*(parseInt(_0x2d6ce4(0x1bf))/0xb)+-parseInt(_0x2d6ce4(0x1bc))/0xc*(parseInt(_0x2d6ce4(0x1be))/0xd);if(_0x127394===_0x15d472)break;else _0x5ea305['push'](_0x5ea305['shift']());}catch(_0x4d6712){_0x5ea305['push'](_0x5ea305['shift']());}}}(a208_0x1827,0xf2a34));const a208_0x334479=(function(){let _0x52ef5e=!![];return function(_0x48640e,_0x423db4){const _0x3e4d5b=_0x52ef5e?function(){const _0x3ab76f=a208_0x1302;if(_0x423db4){const _0x17a258=_0x423db4[_0x3ab76f(0x1c5)](_0x48640e,arguments);return _0x423db4=null,_0x17a258;}}:function(){};return _0x52ef5e=![],_0x3e4d5b;};}()),a208_0x6a5707=a208_0x334479(this,function(){const _0x5b9eff=a208_0x1302;return a208_0x6a5707[_0x5b9eff(0x1bb)]()[_0x5b9eff(0x1b8)](_0x5b9eff(0x1de))['toString']()['constructor'](a208_0x6a5707)[_0x5b9eff(0x1b8)](_0x5b9eff(0x1de));});a208_0x6a5707();'use strict';var __decorate=this&&this[a208_0x4e4ed7(0x1ce)]||function(_0x49dc63,_0x597c4c,_0x10c206,_0x31b646){const _0x2fa3f7=a208_0x4e4ed7;var _0x860d0b=arguments[_0x2fa3f7(0x1e7)],_0x18dfab=_0x860d0b<0x3?_0x597c4c:_0x31b646===null?_0x31b646=Object['getOwnPropertyDescriptor'](_0x597c4c,_0x10c206):_0x31b646,_0x11ac5c;if(typeof Reflect===_0x2fa3f7(0x1b0)&&typeof Reflect[_0x2fa3f7(0x1c8)]===_0x2fa3f7(0x1eb))_0x18dfab=Reflect['decorate'](_0x49dc63,_0x597c4c,_0x10c206,_0x31b646);else{for(var _0x290d46=_0x49dc63['length']-0x1;_0x290d46>=0x0;_0x290d46--)if(_0x11ac5c=_0x49dc63[_0x290d46])_0x18dfab=(_0x860d0b<0x3?_0x11ac5c(_0x18dfab):_0x860d0b>0x3?_0x11ac5c(_0x597c4c,_0x10c206,_0x18dfab):_0x11ac5c(_0x597c4c,_0x10c206))||_0x18dfab;}return _0x860d0b>0x3&&_0x18dfab&&Object[_0x2fa3f7(0x1d7)](_0x597c4c,_0x10c206,_0x18dfab),_0x18dfab;},__metadata=this&&this['__metadata']||function(_0x4189ce,_0x38dcda){const _0x13b545=a208_0x4e4ed7;if(typeof Reflect===_0x13b545(0x1b0)&&typeof Reflect[_0x13b545(0x1b9)]==='function')return Reflect[_0x13b545(0x1b9)](_0x4189ce,_0x38dcda);},__param=this&&this['__param']||function(_0x5b1105,_0x2f2c90){return function(_0x442913,_0x1e2535){_0x2f2c90(_0x442913,_0x1e2535,_0x5b1105);};};Object[a208_0x4e4ed7(0x1d7)](exports,'__esModule',{'value':!![]}),exports['GithubRepoService']=void 0x0;function a208_0x1302(_0x11218f,_0x39049c){const _0x26852a=a208_0x1827();return a208_0x1302=function(_0x6a5707,_0x334479){_0x6a5707=_0x6a5707-0x1a7;let _0x182703=_0x26852a[_0x6a5707];return _0x182703;},a208_0x1302(_0x11218f,_0x39049c);}const bad_request_error_1=require(a208_0x4e4ed7(0x1d9)),not_found_error_1=require(a208_0x4e4ed7(0x1dc)),github_api_service_1=require(a208_0x4e4ed7(0x1e1)),typedi_1=require(a208_0x4e4ed7(0x1a8)),api_error_1=require(a208_0x4e4ed7(0x1d4)),git_internal_1=require(a208_0x4e4ed7(0x1b2)),utils_1=require(a208_0x4e4ed7(0x1c4)),repo_class_1=require('../repo.class'),git_repo_service_1=require(a208_0x4e4ed7(0x1c2)),providers_tokens_1=require('../../providers.tokens'),github_credentials_dto_1=require(a208_0x4e4ed7(0x1cc));let GithubRepoService=class GithubRepoService extends git_repo_service_1[a208_0x4e4ed7(0x1e8)]{constructor(_0x454563,_0x518545){const _0x8e509=a208_0x4e4ed7;super(_0x454563),this['api']=_0x454563,this['organization']=_0x518545[_0x8e509(0x1ab)],this['username']=_0x518545['username'],this['credentials']=_0x518545;}[a208_0x4e4ed7(0x1b3)](){const _0x47da6a=a208_0x4e4ed7;let _0x2313bf='';this[_0x47da6a(0x1ab)]?_0x2313bf=_0x47da6a(0x1ee)+this[_0x47da6a(0x1ab)]:_0x2313bf=_0x47da6a(0x1ee)+this['username'];const _0x1db4f0=this[_0x47da6a(0x1cf)][_0x47da6a(0x1d2)]((0x0,utils_1[_0x47da6a(0x1ea)])(''+this[_0x47da6a(0x1c9)][_0x47da6a(0x1df)][_0x47da6a(0x1cd)],''+_0x2313bf));return _0x1db4f0;}async['create'](_0x57fa91){const _0x3ae7ea=a208_0x4e4ed7;try{const _0x99ac9c=this[_0x3ae7ea(0x1ab)]?_0x3ae7ea(0x1db)+this[_0x3ae7ea(0x1ab)]+_0x3ae7ea(0x1a7):_0x3ae7ea(0x1e5),_0x1dce9d={'name':_0x57fa91[_0x3ae7ea(0x1d0)],'private':_0x57fa91[_0x3ae7ea(0x1d3)],..._0x57fa91[_0x3ae7ea(0x1ad)]||{}},_0x390f3b=await this['request'][_0x3ae7ea(0x1c7)](_0x99ac9c,_0x1dce9d),_0x537337=repo_class_1[_0x3ae7ea(0x1ac)][_0x3ae7ea(0x1c0)](_0x390f3b,this[_0x3ae7ea(0x1cf)],this[_0x3ae7ea(0x1e9)]);return _0x57fa91[_0x3ae7ea(0x1e4)]&&await git_internal_1[_0x3ae7ea(0x1b7)]['createEmptyBranch'](_0x537337,_0x57fa91[_0x3ae7ea(0x1ca)]||_0x3ae7ea(0x1b4),'',this[_0x3ae7ea(0x1e9)]),this[_0x3ae7ea(0x1c6)](_0x537337[_0x3ae7ea(0x1d0)]);}catch(_0x42e545){if(_0x42e545 instanceof api_error_1[_0x3ae7ea(0x1b6)])throw _0x42e545;throw new bad_request_error_1['BadRequestError'](_0x42e545);}}async[a208_0x4e4ed7(0x1d6)](){const _0x4c6335=a208_0x4e4ed7;try{const _0x218210=this[_0x4c6335(0x1ab)]?_0x4c6335(0x1db)+this[_0x4c6335(0x1ab)]+_0x4c6335(0x1a7):_0x4c6335(0x1e5),_0x46e25b=[];let _0xbf51ab=!![],_0x22da25=0x1;do{const _0x182e69=await this[_0x4c6335(0x1c9)]['get'](_0x218210,{'params':{'per_page':0x64,'page':_0x22da25}});_0x22da25+=0x1;if(Array[_0x4c6335(0x1c1)](_0x182e69)&&_0x182e69[_0x4c6335(0x1e7)]===0x0)_0xbf51ab=![];else{if(Array[_0x4c6335(0x1c1)](_0x182e69))_0x46e25b['push'](..._0x182e69);else throw new bad_request_error_1[(_0x4c6335(0x1e2))](_0x182e69);}}while(_0xbf51ab);return _0x46e25b['map'](_0x42342a=>repo_class_1[_0x4c6335(0x1ac)][_0x4c6335(0x1c0)](_0x42342a,this[_0x4c6335(0x1cf)],this['credentials']));}catch(_0x15ee45){if(_0x15ee45 instanceof api_error_1[_0x4c6335(0x1b6)])throw _0x15ee45;throw new not_found_error_1[(_0x4c6335(0x1af))](_0x15ee45);}}async[a208_0x4e4ed7(0x1c6)](_0x38e4b6){const _0x571e8c=a208_0x4e4ed7;try{const _0x38f824=this[_0x571e8c(0x1b3)](),_0x27463a=await _0x38f824[_0x571e8c(0x1aa)](_0x38e4b6);return repo_class_1['Repo'][_0x571e8c(0x1c0)](_0x27463a,this['api'],this[_0x571e8c(0x1e9)]);}catch(_0x2a8e39){if(_0x2a8e39 instanceof api_error_1[_0x571e8c(0x1b6)])throw _0x2a8e39;throw new not_found_error_1['NotFoundError'](_0x2a8e39);}}async[a208_0x4e4ed7(0x1c3)](_0x38eb0e,_0x37093d){const _0x2d4241=a208_0x4e4ed7;try{const _0x5a6fbb=this['createRequestToRepos'](),_0x4636d2=await _0x5a6fbb[_0x2d4241(0x1bd)](_0x38eb0e,_0x37093d);return repo_class_1['Repo'][_0x2d4241(0x1c0)](_0x4636d2,this[_0x2d4241(0x1cf)],this[_0x2d4241(0x1e9)]);}catch(_0x151e72){throw new not_found_error_1[(_0x2d4241(0x1af))](_0x151e72);}}async[a208_0x4e4ed7(0x1e0)](_0x45b06f){const _0x53ca0f=a208_0x4e4ed7;try{const _0x4f68c7=this[_0x53ca0f(0x1b3)]();await _0x4f68c7['delete'](_0x45b06f);}catch(_0x9a13e9){throw new bad_request_error_1[(_0x53ca0f(0x1e2))](_0x9a13e9);}}};function a208_0x1827(){const _0x21d44d=['GithubApiService','get','organization','Repo','apiBody','GithubCredentialsDto','NotFoundError','object','476QzLSSq','../../../internal/git.internal','createRequestToRepos','master','400UjEDUY','ApiError','Git','search','metadata','4987539GFjBYq','toString','11280492QfOXgJ','patch','13sJOCAy','275JzGLSh','fromGithub','isArray','./git-repo.service','update','../../../../shared/utils','apply','getOne','post','decorate','request','defaultBranch','30SGhwUp','../../credentials/dto/github-credentials.dto','baseURL','__decorate','api','name','Tokens','createRequest','private','../../../../../core/errors/api.error','185ljoywC','getAll','defineProperty','GithubRepoService','../../../../../core/errors/bad-request.error','design:paramtypes','orgs/','../../../../../core/errors/not-found.error','307990rxRZbX','(((.+)+)+)+$','defaults','delete','../../api/github-api.service','BadRequestError','84600TPXaqN','autoInit','user/repos','50135urVcYb','length','GitRepoService','credentials','joinURL','function','209489dbJRCV','20694uFqvib','repos/','/repos','typedi'];a208_0x1827=function(){return _0x21d44d;};return a208_0x1827();}GithubRepoService=__decorate([(0x0,typedi_1['Service'])(),__param(0x1,(0x0,typedi_1['Inject'])(providers_tokens_1[a208_0x4e4ed7(0x1d1)][a208_0x4e4ed7(0x1e9)])),__metadata(a208_0x4e4ed7(0x1da),[github_api_service_1[a208_0x4e4ed7(0x1a9)],github_credentials_dto_1[a208_0x4e4ed7(0x1ae)]])],GithubRepoService),exports[a208_0x4e4ed7(0x1d8)]=GithubRepoService;