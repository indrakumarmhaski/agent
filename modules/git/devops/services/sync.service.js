const a110_0x1908ff=a110_0x268e;(function(_0x2210fe,_0x5741bf){const _0x44d749=a110_0x268e,_0x157b23=_0x2210fe();while(!![]){try{const _0x1c0857=parseInt(_0x44d749(0x175))/0x1*(parseInt(_0x44d749(0x18d))/0x2)+-parseInt(_0x44d749(0x188))/0x3+parseInt(_0x44d749(0x13c))/0x4+-parseInt(_0x44d749(0x181))/0x5*(-parseInt(_0x44d749(0x143))/0x6)+parseInt(_0x44d749(0x150))/0x7+parseInt(_0x44d749(0x168))/0x8+-parseInt(_0x44d749(0x15a))/0x9;if(_0x1c0857===_0x5741bf)break;else _0x157b23['push'](_0x157b23['shift']());}catch(_0x18245f){_0x157b23['push'](_0x157b23['shift']());}}}(a110_0x4bb5,0x70061));const a110_0x5eb2f7=(function(){let _0x451a09=!![];return function(_0x21ab59,_0x1d8cd7){const _0x1d7f51=_0x451a09?function(){if(_0x1d8cd7){const _0x43d98c=_0x1d8cd7['apply'](_0x21ab59,arguments);return _0x1d8cd7=null,_0x43d98c;}}:function(){};return _0x451a09=![],_0x1d7f51;};}()),a110_0x5c732e=a110_0x5eb2f7(this,function(){const _0x34b7fd=a110_0x268e;return a110_0x5c732e[_0x34b7fd(0x184)]()[_0x34b7fd(0x13f)]('(((.+)+)+)+$')[_0x34b7fd(0x184)]()[_0x34b7fd(0x179)](a110_0x5c732e)['search'](_0x34b7fd(0x1aa));});a110_0x5c732e();'use strict';var __decorate=this&&this[a110_0x1908ff(0x189)]||function(_0x1e8e80,_0xbe8178,_0x3d8602,_0x403267){const _0x3549cf=a110_0x1908ff;var _0x21a713=arguments[_0x3549cf(0x144)],_0x57f7bf=_0x21a713<0x3?_0xbe8178:_0x403267===null?_0x403267=Object[_0x3549cf(0x155)](_0xbe8178,_0x3d8602):_0x403267,_0xb862aa;if(typeof Reflect===_0x3549cf(0x161)&&typeof Reflect[_0x3549cf(0x17d)]===_0x3549cf(0x199))_0x57f7bf=Reflect['decorate'](_0x1e8e80,_0xbe8178,_0x3d8602,_0x403267);else{for(var _0xd90273=_0x1e8e80['length']-0x1;_0xd90273>=0x0;_0xd90273--)if(_0xb862aa=_0x1e8e80[_0xd90273])_0x57f7bf=(_0x21a713<0x3?_0xb862aa(_0x57f7bf):_0x21a713>0x3?_0xb862aa(_0xbe8178,_0x3d8602,_0x57f7bf):_0xb862aa(_0xbe8178,_0x3d8602))||_0x57f7bf;}return _0x21a713>0x3&&_0x57f7bf&&Object['defineProperty'](_0xbe8178,_0x3d8602,_0x57f7bf),_0x57f7bf;},__metadata=this&&this[a110_0x1908ff(0x164)]||function(_0x453be0,_0x12444a){const _0x18f11f=a110_0x1908ff;if(typeof Reflect===_0x18f11f(0x161)&&typeof Reflect[_0x18f11f(0x18a)]===_0x18f11f(0x199))return Reflect[_0x18f11f(0x18a)](_0x453be0,_0x12444a);},SyncService_1;Object[a110_0x1908ff(0x178)](exports,a110_0x1908ff(0x147),{'value':!![]}),exports[a110_0x1908ff(0x15e)]=void 0x0;const constants_1=require(a110_0x1908ff(0x1b4)),core_1=require(a110_0x1908ff(0x16a)),too_many_requests_error_1=require(a110_0x1908ff(0x1a3)),flosum_repository_sync_dto_1=require(a110_0x1908ff(0x146)),salesforce_error_1=require(a110_0x1908ff(0x1ac)),salesforce_sync_service_1=require('../../salesforce/services/salesforce-sync.service'),salesforce_service_1=require(a110_0x1908ff(0x18e)),utils_1=require(a110_0x1908ff(0x191)),typedi_1=require(a110_0x1908ff(0x169)),hooks_utils_1=require(a110_0x1908ff(0x1a2)),git_branch_not_found_error_1=require(a110_0x1908ff(0x16f)),flosum_sync_job_1=require(a110_0x1908ff(0x198)),git_sync_job_1=require('../jobs/git-sync.job'),providers_tokens_1=require('../../providers/providers.tokens'),bad_request_error_1=require('../../../../core/errors/bad-request.error');let SyncService=SyncService_1=class SyncService{constructor(_0x542cf4,_0x5f11f2){const _0x1d5897=a110_0x1908ff;this[_0x1d5897(0x15f)]=_0x542cf4,this[_0x1d5897(0x166)]=_0x5f11f2,this[_0x1d5897(0x1a4)]=new core_1[(_0x1d5897(0x162))](SyncService_1[_0x1d5897(0x19e)]),this[_0x1d5897(0x137)]={},this[_0x1d5897(0x151)]=[];}async[a110_0x1908ff(0x1b3)](_0x255879,_0x160093){const _0xd7f349=a110_0x1908ff;if(_0x160093 instanceof git_branch_not_found_error_1[_0xd7f349(0x14f)]){await this[_0xd7f349(0x166)][_0xd7f349(0x1b1)](_0x255879,_0xd7f349(0x18b));return;}if(_0x160093 instanceof too_many_requests_error_1[_0xd7f349(0x19a)]){await this[_0xd7f349(0x166)][_0xd7f349(0x1b1)](_0x255879,_0xd7f349(0x158));throw _0x160093;}try{await this[_0xd7f349(0x13b)][_0xd7f349(0x19d)](this[_0xd7f349(0x16e)]+_0xd7f349(0x193)+_0x255879[_0xd7f349(0x197)]+'\x27\x20['+_0x255879[_0xd7f349(0x154)]+_0xd7f349(0x149)+_0x160093+'.')[_0xd7f349(0x17b)](),await this['salesforceSync'][_0xd7f349(0x1b6)](_0x255879,{}),await this[_0xd7f349(0x166)][_0xd7f349(0x1b1)](_0x255879,_0xd7f349(0x17a));}catch(_0x592788){if(_0x592788 instanceof salesforce_error_1[_0xd7f349(0x157)])throw _0x592788;}}async[a110_0x1908ff(0x152)](_0x2f4258){const _0x146689=a110_0x1908ff;if(_0x2f4258[_0x146689(0x148)]){const _0x3628f7=_0x2f4258[_0x146689(0x197)][_0x146689(0x1a9)](),_0x5ce55a=this[_0x146689(0x137)][_0x3628f7];if(!_0x5ce55a)this[_0x146689(0x137)][_0x3628f7]=_0x2f4258[_0x146689(0x197)];else{if(_0x5ce55a&&_0x5ce55a!==_0x2f4258[_0x146689(0x197)])return await this['handleRecordSyncError'](_0x2f4258,new Error(_0x146689(0x1b2)+_0x2f4258[_0x146689(0x197)]+_0x146689(0x13d)+_0x3628f7+_0x146689(0x173)+_0x5ce55a+'\x27')),!![];}}return![];}async['checkValidNaming'](_0x2e2646){const _0x3183a0=a110_0x1908ff;if(!constants_1[_0x3183a0(0x145)][_0x3183a0(0x1a6)](_0x2e2646['repositoryName']))return await this['handleRecordSyncError'](_0x2e2646,new Error(_0x3183a0(0x1b2)+_0x2e2646['repositoryName']+_0x3183a0(0x153))),![];if(!constants_1[_0x3183a0(0x15d)]['test'](_0x2e2646[_0x3183a0(0x154)]))return await this['handleRecordSyncError'](_0x2e2646,new Error(_0x3183a0(0x1af)+_0x2e2646[_0x3183a0(0x154)]+_0x3183a0(0x186)+_0x2e2646[_0x3183a0(0x197)]+_0x3183a0(0x190))),![];return!![];}async[a110_0x1908ff(0x19f)](_0x39d9c4,_0x512eb7){const _0x4213d2=a110_0x1908ff;let _0x19502d=this[_0x4213d2(0x151)][_0x4213d2(0x182)](_0x558598=>_0x39d9c4[_0x4213d2(0x197)]===_0x558598[_0x4213d2(0x19e)]);!_0x19502d&&(this[_0x4213d2(0x13b)][_0x4213d2(0x17c)](this[_0x4213d2(0x16e)]+_0x4213d2(0x139)+_0x39d9c4[_0x4213d2(0x197)]+_0x4213d2(0x19c)),_0x19502d=await this[_0x4213d2(0x159)][_0x4213d2(0x170)]({'name':_0x39d9c4[_0x4213d2(0x197)],'autoInit':!![],'defaultBranch':_0x39d9c4[_0x4213d2(0x154)],'private':!![],'createHook':typedi_1[_0x4213d2(0x141)][_0x4213d2(0x16b)](providers_tokens_1[_0x4213d2(0x196)][_0x4213d2(0x185)])[_0x4213d2(0x180)]}));if(this[_0x4213d2(0x185)][_0x4213d2(0x180)]){const _0x4e3da8=await _0x19502d['hooks'][_0x4213d2(0x14c)]();!_0x4e3da8[_0x4213d2(0x182)](_0x1c7f22=>_0x1c7f22[_0x4213d2(0x194)]===hooks_utils_1['HooksUtils'][_0x4213d2(0x192)](this[_0x4213d2(0x185)][_0x4213d2(0x172)],this[_0x4213d2(0x185)][_0x4213d2(0x1a5)],_0x512eb7))&&(this[_0x4213d2(0x13b)]['log'](this['prefix']+'\x20Repository\x20\x22'+_0x39d9c4[_0x4213d2(0x197)]+_0x4213d2(0x19b)),await _0x19502d['hooks'][_0x4213d2(0x170)](hooks_utils_1[_0x4213d2(0x176)][_0x4213d2(0x14d)](this[_0x4213d2(0x185)][_0x4213d2(0x172)],_0x19502d[_0x4213d2(0x183)],this[_0x4213d2(0x185)]['applicationUrl'],_0x512eb7)));}return this['repoList'][_0x4213d2(0x165)](_0x19502d),_0x19502d;}async[a110_0x1908ff(0x13e)](){const _0x57ff2f=a110_0x1908ff;this[_0x57ff2f(0x195)]=typedi_1[_0x57ff2f(0x141)][_0x57ff2f(0x16b)](providers_tokens_1[_0x57ff2f(0x196)][_0x57ff2f(0x195)]),this['repoService']=typedi_1['Container']['get'](providers_tokens_1[_0x57ff2f(0x196)][_0x57ff2f(0x18f)]),this['config']=typedi_1[_0x57ff2f(0x141)][_0x57ff2f(0x16b)](providers_tokens_1[_0x57ff2f(0x196)][_0x57ff2f(0x185)]),this[_0x57ff2f(0x13b)]=typedi_1[_0x57ff2f(0x141)][_0x57ff2f(0x16b)](providers_tokens_1[_0x57ff2f(0x196)]['logger']),this[_0x57ff2f(0x16e)]='['+SyncService_1[_0x57ff2f(0x19e)]+_0x57ff2f(0x142)+this['config'][_0x57ff2f(0x172)][_0x57ff2f(0x18c)]()+']',this['salesforceService'][_0x57ff2f(0x1b0)](this[_0x57ff2f(0x13b)][_0x57ff2f(0x1a0)]());try{this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x15b)),await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x1a7))['send']();const _0x2bcc45=await this[_0x57ff2f(0x166)][_0x57ff2f(0x17f)](typedi_1[_0x57ff2f(0x141)][_0x57ff2f(0x16b)](providers_tokens_1[_0x57ff2f(0x196)]['connectionId']));if(!_0x2bcc45[_0x57ff2f(0x144)])throw new bad_request_error_1[(_0x57ff2f(0x1b5))](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x177));await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this['prefix']+'\x20Getting\x20branch\x20records.')[_0x57ff2f(0x17b)]();const _0x5f3ba9=await this[_0x57ff2f(0x166)]['getBranchRecords'](_0x2bcc45['map'](_0xf14049=>'\x27'+_0xf14049[_0x57ff2f(0x148)]+'\x27')[_0x57ff2f(0x163)](','));await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x160))[_0x57ff2f(0x17b)](),this[_0x57ff2f(0x151)]=await this[_0x57ff2f(0x159)][_0x57ff2f(0x14c)]();const _0x452b5b=[..._0x2bcc45,..._0x5f3ba9];this[_0x57ff2f(0x13b)]['log'](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x16c)+_0x452b5b[_0x57ff2f(0x144)]+'\x20branches.');for(const _0x12124b of _0x452b5b){this[_0x57ff2f(0x1a4)][_0x57ff2f(0x17c)]('Syncing\x20'+_0x12124b[_0x57ff2f(0x197)]+'['+_0x12124b[_0x57ff2f(0x148)]+_0x57ff2f(0x14e)+_0x12124b[_0x57ff2f(0x154)]+'['+_0x12124b[_0x57ff2f(0x14b)]+']\x20branch.'),this[_0x57ff2f(0x13b)]['log'](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x15c)+_0x12124b[_0x57ff2f(0x197)]+'\x22\x20branch:\x20\x22'+_0x12124b[_0x57ff2f(0x154)]+'\x22.'),this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+'\x20Checking\x20valid\x20name.');const _0x14904f=await this[_0x57ff2f(0x156)](_0x12124b);if(!_0x14904f)continue;this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x14a));const _0x48189f=await this[_0x57ff2f(0x152)](_0x12124b);if(_0x48189f)continue;await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17b)]();let _0x43f640;try{await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+'\x20Getting\x20Flosum\x20repository')[_0x57ff2f(0x17b)](),_0x43f640=await this[_0x57ff2f(0x19f)](_0x12124b,typedi_1['Container'][_0x57ff2f(0x16b)](providers_tokens_1[_0x57ff2f(0x196)][_0x57ff2f(0x13a)]));}catch(_0xffa77d){await this[_0x57ff2f(0x1b3)](_0x12124b,_0xffa77d instanceof too_many_requests_error_1[_0x57ff2f(0x19a)]?_0xffa77d:new Error('[ERROR]\x20Could\x20not\x20find/create\x20repository.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Possible\x20error\x20reasons:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.\x20Git\x20service\x20is\x20unavailable\x20for\x20the\x20moment.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202.\x20Repository\x20with\x20this\x20name\x20already\x20created\x20in\x20git,\x20but\x20with\x20another\x20lettercase\x20(repository\x20names\x20are\x20case-sensitive\x20and\x20should\x20be\x20identical).\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.\x20The\x20agent\x20could\x20not\x20recieve\x20all\x20repositories\x20from\x20git\x20service\x20due\x20permissions\x20that\x20you\x20provided.\x20(See\x20guide\x20how\x20to\x20setup\x20environment\x20variables\x20for\x20this\x20service).\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Original\x20error:\x20'+_0xffa77d));continue;}await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x1ab))[_0x57ff2f(0x17b)]();if(_0x12124b[_0x57ff2f(0x171)]===flosum_repository_sync_dto_1['SyncDirection'][_0x57ff2f(0x1a8)]){const _0x5e2564=typedi_1[_0x57ff2f(0x141)]['get'](flosum_sync_job_1['FlosumSyncJob']);await _0x5e2564['run']({'repository':_0x43f640,'convertToSFDX':this[_0x57ff2f(0x185)][_0x57ff2f(0x16d)],'syncRecord':_0x12124b,'provider':this[_0x57ff2f(0x185)][_0x57ff2f(0x172)]})[_0x57ff2f(0x187)](_0x3e746d=>this[_0x57ff2f(0x1b3)](_0x12124b,_0x3e746d));}else{const _0x8afcb5=typedi_1[_0x57ff2f(0x141)][_0x57ff2f(0x16b)](git_sync_job_1['GitSyncJob']);await _0x8afcb5[_0x57ff2f(0x13e)]({'repository':_0x43f640,'branch':_0x12124b[_0x57ff2f(0x154)],'provider':this[_0x57ff2f(0x185)][_0x57ff2f(0x172)],'repositoryGit':_0x43f640['gitUrl'],'syncRecord':_0x12124b})[_0x57ff2f(0x187)](_0x46e334=>this[_0x57ff2f(0x1b3)](_0x12124b,_0x46e334));}}}catch(_0x4ab085){this[_0x57ff2f(0x1a4)][_0x57ff2f(0x19d)](_0x4ab085);_0x4ab085 instanceof too_many_requests_error_1[_0x57ff2f(0x19a)]?(await this[_0x57ff2f(0x13b)]['log'](this[_0x57ff2f(0x16e)]+'\x20[PAUSE]\x20Pause\x20sync\x20job\x20due\x20error\x20-\x20Rate\x20limit\x20quota\x20for\x20git\x20service\x20exceeded.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Paused\x20for\x201h\x20to\x20refill\x20limit\x20quota\x20continue.\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20This\x20kind\x20of\x20error\x20is\x20not\x20critical\x20just\x20need\x20to\x20wait\x20until\x20we\x20can\x20continue\x20work\x20with\x20git\x20service.')[_0x57ff2f(0x17b)](),await(0x0,utils_1[_0x57ff2f(0x174)])(0x3c*0x3c*0x3e8),this[_0x57ff2f(0x13e)]()):await this['sfLogger'][_0x57ff2f(0x19d)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x138)+_0x4ab085)['send']();return;}await this[_0x57ff2f(0x13b)][_0x57ff2f(0x17c)](this[_0x57ff2f(0x16e)]+_0x57ff2f(0x140))[_0x57ff2f(0x17b)](),await this[_0x57ff2f(0x166)][_0x57ff2f(0x1a1)](typedi_1[_0x57ff2f(0x141)]['get'](providers_tokens_1[_0x57ff2f(0x196)][_0x57ff2f(0x13a)]))[_0x57ff2f(0x187)](()=>null);}};function a110_0x268e(_0x2389f4,_0x170d32){const _0x2d2787=a110_0x4bb5();return a110_0x268e=function(_0x5c732e,_0x5eb2f7){_0x5c732e=_0x5c732e-0x137;let _0x4bb56d=_0x2d2787[_0x5c732e];return _0x4bb56d;},a110_0x268e(_0x2389f4,_0x170d32);}SyncService=SyncService_1=__decorate([(0x0,typedi_1[a110_0x1908ff(0x167)])({'transient':!![]}),__metadata(a110_0x1908ff(0x1ad),[salesforce_service_1[a110_0x1908ff(0x17e)],salesforce_sync_service_1[a110_0x1908ff(0x1ae)]])],SyncService),exports[a110_0x1908ff(0x15e)]=SyncService;function a110_0x4bb5(){const _0x672bd6=['../../../../core/errors/too-many-requests.error','logger','applicationUrl','test','\x20Getting\x20repository\x20records.','FlosumToGit','toLowerCase','(((.+)+)+)+$','\x20Completed\x20prepare\x20to\x20syncing.','../../salesforce/errors/salesforce.error','design:paramtypes','SalesforceSyncService','Unable\x20to\x20synchronize\x20branch\x20\x27','setLoggerId','setStatus','Unable\x20to\x20synchronize\x20repository\x20\x27','handleRecordSyncError','../../../../constants','BadRequestError','updateRemoteState','repositoriesIntersections','\x20Stop\x20sync\x20job\x20due\x20error\x20-\x20','\x20Repository\x20\x22','connectionId','sfLogger','2869136NBYlpX','\x27\x20due\x20it\x20intersects\x20with\x20another\x20repository\x20by\x20repository\x20key\x20\x27','run','search','\x20Sync\x20job\x20done.','Container',']\x20[','6FBQYBI','length','REPOSITORY_NAME_REGEXP','../../salesforce/dto/flosum-repository-sync.dto','__esModule','repositoryId',']\x20due\x20error\x20-\x20','\x20Checking\x20intersects.','branchId','getAll','createHookPayload',']\x20repository\x20','GitBranchNotFoundError','251524RFvuAl','repoList','isIntersects','\x27\x20due\x20repository\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.','branchName','getOwnPropertyDescriptor','checkValidNaming','SalesforceError','Waiting','repoService','10679346kMixKD','\x20Start\x20sync\x20job.','\x20Syncing\x20repository:\x20\x22','BRANCH_NAME_REGEXP','SyncService','salesforceService','\x20Getting\x20repositories\x20from\x20git\x20service.','object','Logger','join','__metadata','push','salesforceSync','Service','916408iILHas','typedi','../../../../core','get','\x20Have\x20to\x20synchronize\x20','isConvertToSfdx','prefix','../errors/git-branch-not-found.error','create','direction','gitProvider','\x27\x20-\x20\x27','sleep','1LaKDpG','HooksUtils','\x20No\x20repositories\x20to\x20sync.','defineProperty','constructor','Error','send','log','decorate','SalesforceService','getRepositoryRecords','isBidirectionalSynchronization','1821535NYEYzB','find','hooks','toString','config','\x27\x20in\x20repository\x20\x27','catch','963462ALTfhY','__decorate','metadata','Not\x20Synchronized','toUpperCase','1469046GnCcjI','../../salesforce/services/salesforce.service','gitRepoService','\x27\x20due\x20branch\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.','../../../shared/utils','getHookLinkFor','\x20Stop\x20sync\x20job\x20for\x20\x27','url','gitApiService','Tokens','repositoryName','../jobs/flosum-sync.job','function','TooManyRequests','\x22\x20does\x27t\x20has\x20the\x20agent\x20webhook.\x20Agent\x20will\x20create\x20new\x20repository\x20webhook\x20to\x20enable\x20back\x20sync.','\x22\x20does\x20not\x20exists.\x20Creating\x20it\x20on\x20git\x20service.','error','name','getOrCreateRepo','getLoggerId','disableSync','../../providers/web-hooks/hooks.utils'];a110_0x4bb5=function(){return _0x672bd6;};return a110_0x4bb5();}