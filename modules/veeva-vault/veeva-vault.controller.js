const a414_0x2aecf7=a414_0x5022;(function(_0x5964cd,_0xb52a48){const _0x258e0d=a414_0x5022,_0x109608=_0x5964cd();while(!![]){try{const _0x2ac76d=parseInt(_0x258e0d(0x1a2))/0x1+parseInt(_0x258e0d(0x187))/0x2+-parseInt(_0x258e0d(0x178))/0x3+parseInt(_0x258e0d(0x18f))/0x4+parseInt(_0x258e0d(0x1a1))/0x5+-parseInt(_0x258e0d(0x1a7))/0x6*(-parseInt(_0x258e0d(0x1a4))/0x7)+parseInt(_0x258e0d(0x1a9))/0x8*(-parseInt(_0x258e0d(0x160))/0x9);if(_0x2ac76d===_0xb52a48)break;else _0x109608['push'](_0x109608['shift']());}catch(_0x14d913){_0x109608['push'](_0x109608['shift']());}}}(a414_0x22d0,0x5cbb2));const a414_0x583901=(function(){let _0x28ec04=!![];return function(_0x2666a6,_0x234365){const _0x572046=_0x28ec04?function(){const _0x58da63=a414_0x5022;if(_0x234365){const _0x5d0248=_0x234365[_0x58da63(0x1ab)](_0x2666a6,arguments);return _0x234365=null,_0x5d0248;}}:function(){};return _0x28ec04=![],_0x572046;};}()),a414_0x2ba52c=a414_0x583901(this,function(){const _0x3462d6=a414_0x5022;return a414_0x2ba52c[_0x3462d6(0x17e)]()[_0x3462d6(0x198)](_0x3462d6(0x197))[_0x3462d6(0x17e)]()['constructor'](a414_0x2ba52c)['search'](_0x3462d6(0x197));});a414_0x2ba52c();'use strict';var __decorate=this&&this[a414_0x2aecf7(0x19d)]||function(_0x5d07bc,_0x169dd4,_0x4e9739,_0x168a46){const _0x2b8765=a414_0x2aecf7;var _0x2a9788=arguments[_0x2b8765(0x186)],_0x28fb7e=_0x2a9788<0x3?_0x169dd4:_0x168a46===null?_0x168a46=Object[_0x2b8765(0x171)](_0x169dd4,_0x4e9739):_0x168a46,_0x25c09e;if(typeof Reflect==='object'&&typeof Reflect[_0x2b8765(0x192)]==='function')_0x28fb7e=Reflect[_0x2b8765(0x192)](_0x5d07bc,_0x169dd4,_0x4e9739,_0x168a46);else{for(var _0x17cceb=_0x5d07bc['length']-0x1;_0x17cceb>=0x0;_0x17cceb--)if(_0x25c09e=_0x5d07bc[_0x17cceb])_0x28fb7e=(_0x2a9788<0x3?_0x25c09e(_0x28fb7e):_0x2a9788>0x3?_0x25c09e(_0x169dd4,_0x4e9739,_0x28fb7e):_0x25c09e(_0x169dd4,_0x4e9739))||_0x28fb7e;}return _0x2a9788>0x3&&_0x28fb7e&&Object[_0x2b8765(0x1aa)](_0x169dd4,_0x4e9739,_0x28fb7e),_0x28fb7e;},__metadata=this&&this[a414_0x2aecf7(0x168)]||function(_0x95599e,_0x182209){const _0x130497=a414_0x2aecf7;if(typeof Reflect===_0x130497(0x1a5)&&typeof Reflect[_0x130497(0x18c)]===_0x130497(0x19e))return Reflect[_0x130497(0x18c)](_0x95599e,_0x182209);},__param=this&&this[a414_0x2aecf7(0x180)]||function(_0x4bf65a,_0x19046d){return function(_0x232f57,_0x18e236){_0x19046d(_0x232f57,_0x18e236,_0x4bf65a);};},__importDefault=this&&this[a414_0x2aecf7(0x185)]||function(_0x57f0ae){const _0x37e5d5=a414_0x2aecf7;return _0x57f0ae&&_0x57f0ae[_0x37e5d5(0x174)]?_0x57f0ae:{'default':_0x57f0ae};};Object[a414_0x2aecf7(0x1aa)](exports,a414_0x2aecf7(0x174),{'value':!![]}),exports['VeevaVaultController']=void 0x0;function a414_0x5022(_0x31dfd9,_0x192aa0){const _0x26cf06=a414_0x22d0();return a414_0x5022=function(_0x2ba52c,_0x583901){_0x2ba52c=_0x2ba52c-0x160;let _0x22d0ef=_0x26cf06[_0x2ba52c];return _0x22d0ef;},a414_0x5022(_0x31dfd9,_0x192aa0);}const core_1=require(a414_0x2aecf7(0x161)),dependency_service_1=require(a414_0x2aecf7(0x16d)),snapshot_service_1=require(a414_0x2aecf7(0x195)),deploy_service_1=require(a414_0x2aecf7(0x172)),veeva_request_utils_1=require(a414_0x2aecf7(0x16f)),status_enums_1=require('./enums/status.enums'),shortid_1=__importDefault(require(a414_0x2aecf7(0x165))),fs_util_1=require(a414_0x2aecf7(0x175)),logger_1=require('./classes/loggers/logger'),promises_1=require(a414_0x2aecf7(0x181)),base_veeva_error_1=require(a414_0x2aecf7(0x166)),salesforce_request_utils_1=require(a414_0x2aecf7(0x193)),veeva_auth_1=require(a414_0x2aecf7(0x183)),salesforce_auth_1=require(a414_0x2aecf7(0x16c)),rollback_service_1=require(a414_0x2aecf7(0x16a)),JOB_UPDATE_TOKEN_ATTEMPTS=0x1;function a414_0x22d0(){const _0xdc1179=['veeva-vault','message','887095aBjXjj','139080ipvYGN','BaseVeevaError','3816484IrWbcu','object','body','6YDOHig','createSalesforceRequest','176xvGjez','defineProperty','apply','then','design:type','AppResponseStatus','296046MQnHDM','../../core','getMessages','Version','design:returntype','shortid','./classes/errors/base-veeva-error','Post','__metadata','createVeevaRequest','./services/rollback.service','snapshot','./classes/auth/salesforce-auth','./services/dependency.service','SalesforceAuth','./utils/veeva-request.utils','prototype','getOwnPropertyDescriptor','./services/deploy.service','default','__esModule','./utils/fs-util','design:paramtypes','deployFromBranch','1469433PZnSkQ','dependency','retrieveDependency','instanceUrl','temp/veeva/deploy_','doSnapshot','toString','temp/veeva/rollback_','__param','fs/promises','FAILURE','./classes/auth/veeva-auth','deploy','__importDefault','length','1452326KmZoyY','RollbackService','param','join','DeployService','metadata','Logger','finally','21724SEESYk','getAuthDetails','rollback','decorate','./utils/salesforce-request.utils','execute','./services/snapshot.service','DependencyService','(((.+)+)+)+$','search','v1.1','SUCCESS','VeevaAuth','VeevaVaultController','__decorate','function'];a414_0x22d0=function(){return _0xdc1179;};return a414_0x22d0();}let VeevaVaultController=class VeevaVaultController{async[a414_0x2aecf7(0x17d)](_0x40760e){const _0x3562d1=a414_0x2aecf7,{veevaAuth:_0x544d6a,timeZone:_0x5938a7,attachmentLogId:_0x1921a1}=_0x40760e;try{const _0x2a0037=(0x0,veeva_request_utils_1[_0x3562d1(0x169)])(new veeva_auth_1['VeevaAuth'](_0x544d6a,JOB_UPDATE_TOKEN_ATTEMPTS)),_0x1ff32a=await salesforce_auth_1[_0x3562d1(0x16e)]['getAuthDetails'](),_0x3998a1=(0x0,salesforce_request_utils_1[_0x3562d1(0x1a8)])(new salesforce_auth_1[(_0x3562d1(0x16e))](_0x1ff32a)),_0x5391d9=new logger_1[(_0x3562d1(0x18d))](_0x3998a1,_0x5938a7,_0x1921a1),_0x535085=new snapshot_service_1['SnapshotService'](_0x40760e,_0x3998a1,_0x2a0037,_0x5391d9);return _0x535085[_0x3562d1(0x194)]()[_0x3562d1(0x1ac)](),{'responseStatus':status_enums_1[_0x3562d1(0x1ae)][_0x3562d1(0x19a)]};}catch(_0x262300){return{'responseStatus':status_enums_1[_0x3562d1(0x1ae)][_0x3562d1(0x182)],'responseMessage':_0x262300['message']};}}async[a414_0x2aecf7(0x177)](_0x55ab46){const _0x47da9b=a414_0x2aecf7,{veevaAuth:_0x16953b,timeZone:_0x24a010,attachmentLogId:_0x21959c}=_0x55ab46;try{const _0x1efa7a=(0x0,veeva_request_utils_1[_0x47da9b(0x169)])(new veeva_auth_1[(_0x47da9b(0x19b))](_0x16953b,JOB_UPDATE_TOKEN_ATTEMPTS)),_0x3204be=await salesforce_auth_1[_0x47da9b(0x16e)][_0x47da9b(0x190)](),_0x59f31f=(0x0,salesforce_request_utils_1['createSalesforceRequest'])(new salesforce_auth_1[(_0x47da9b(0x16e))](_0x3204be)),_0x1654de=new logger_1[(_0x47da9b(0x18d))](_0x59f31f,_0x24a010,_0x21959c),_0x488c6a=_0x47da9b(0x17c)+(0x0,shortid_1[_0x47da9b(0x173)])();await(0x0,fs_util_1['makeDir'])(_0x488c6a);const _0x19bb23=new deploy_service_1[(_0x47da9b(0x18b))](_0x55ab46,_0x59f31f,_0x1efa7a,_0x1654de,_0x488c6a,_0x3204be[_0x47da9b(0x17b)]);return _0x19bb23['execute']()[_0x47da9b(0x18e)](()=>(0x0,promises_1['rm'])(_0x488c6a,{'recursive':!![],'force':!![]})),{'responseStatus':status_enums_1[_0x47da9b(0x1ae)]['SUCCESS']};}catch(_0x2bd2da){return{'responseStatus':status_enums_1[_0x47da9b(0x1ae)][_0x47da9b(0x182)],'responseMessage':_0x2bd2da[_0x47da9b(0x1a0)]};}}async[a414_0x2aecf7(0x17a)](_0x3d89b9){const _0x4073c2=a414_0x2aecf7,{veevaAuth:_0xd28f3b}=_0x3d89b9;try{const _0x3689fa=(0x0,veeva_request_utils_1[_0x4073c2(0x169)])(new veeva_auth_1[(_0x4073c2(0x19b))](_0xd28f3b)),_0x4b0e3b=await salesforce_auth_1[_0x4073c2(0x16e)][_0x4073c2(0x190)](),_0x42290c=(0x0,salesforce_request_utils_1[_0x4073c2(0x1a8)])(new salesforce_auth_1[(_0x4073c2(0x16e))](_0x4b0e3b)),_0x53ae93=new dependency_service_1[(_0x4073c2(0x196))](_0x3d89b9,_0x42290c,_0x3689fa);return await _0x53ae93[_0x4073c2(0x194)]();}catch(_0xc28857){const _0x466981=_0xc28857 instanceof base_veeva_error_1[_0x4073c2(0x1a3)]?_0xc28857[_0x4073c2(0x162)]()[_0x4073c2(0x18a)]('\x0a'):_0xc28857['message'];return{'responseStatus':status_enums_1[_0x4073c2(0x1ae)]['FAILURE'],'responseMessage':_0x466981};}}async[a414_0x2aecf7(0x191)](_0x29d08d){const _0x1b865b=a414_0x2aecf7,{veevaAuth:_0x1a1c28,timeZone:_0x388c4b,attachmentLogId:_0x4eee76}=_0x29d08d;try{const _0x53639f=(0x0,veeva_request_utils_1['createVeevaRequest'])(new veeva_auth_1[(_0x1b865b(0x19b))](_0x1a1c28,JOB_UPDATE_TOKEN_ATTEMPTS)),_0x46c3e3=await salesforce_auth_1[_0x1b865b(0x16e)][_0x1b865b(0x190)](),_0x28e57b=(0x0,salesforce_request_utils_1[_0x1b865b(0x1a8)])(new salesforce_auth_1['SalesforceAuth'](_0x46c3e3)),_0x1c6b54=new logger_1[(_0x1b865b(0x18d))](_0x28e57b,_0x388c4b,_0x4eee76),_0x39ac3c=_0x1b865b(0x17f)+(0x0,shortid_1[_0x1b865b(0x173)])();await(0x0,fs_util_1['makeDir'])(_0x39ac3c);const _0x25f74c=new rollback_service_1[(_0x1b865b(0x188))]({..._0x29d08d,'connectionVeeva':_0x53639f,'connectionSalesforce':_0x28e57b,'logger':_0x1c6b54,'tempFolder':_0x39ac3c,'instanceUrl':_0x46c3e3['instanceUrl']});return _0x25f74c[_0x1b865b(0x194)]()[_0x1b865b(0x18e)](()=>(0x0,promises_1['rm'])(_0x39ac3c,{'recursive':!![],'force':!![]})),{'responseStatus':status_enums_1[_0x1b865b(0x1ae)][_0x1b865b(0x19a)]};}catch(_0x34f253){return{'responseStatus':status_enums_1['AppResponseStatus'][_0x1b865b(0x182)],'responseMessage':_0x34f253[_0x1b865b(0x1a0)]};}}};__decorate([(0x0,core_1[a414_0x2aecf7(0x167)])(a414_0x2aecf7(0x16b)),__param(0x0,core_1[a414_0x2aecf7(0x189)][a414_0x2aecf7(0x1a6)]()),__metadata(a414_0x2aecf7(0x1ad),Function),__metadata(a414_0x2aecf7(0x176),[Object]),__metadata(a414_0x2aecf7(0x164),Promise)],VeevaVaultController[a414_0x2aecf7(0x170)],a414_0x2aecf7(0x17d),null),__decorate([(0x0,core_1[a414_0x2aecf7(0x167)])(a414_0x2aecf7(0x184)),__param(0x0,core_1[a414_0x2aecf7(0x189)][a414_0x2aecf7(0x1a6)]()),__metadata('design:type',Function),__metadata(a414_0x2aecf7(0x176),[Object]),__metadata(a414_0x2aecf7(0x164),Promise)],VeevaVaultController[a414_0x2aecf7(0x170)],a414_0x2aecf7(0x177),null),__decorate([(0x0,core_1['Post'])(a414_0x2aecf7(0x179)),__param(0x0,core_1['param']['body']()),__metadata('design:type',Function),__metadata(a414_0x2aecf7(0x176),[Object]),__metadata('design:returntype',Promise)],VeevaVaultController[a414_0x2aecf7(0x170)],'retrieveDependency',null),__decorate([(0x0,core_1[a414_0x2aecf7(0x167)])('rollback'),__param(0x0,core_1['param']['body']()),__metadata(a414_0x2aecf7(0x1ad),Function),__metadata('design:paramtypes',[Object]),__metadata(a414_0x2aecf7(0x164),Promise)],VeevaVaultController['prototype'],a414_0x2aecf7(0x191),null),VeevaVaultController=__decorate([(0x0,core_1['Controller'])(a414_0x2aecf7(0x19f)),(0x0,core_1[a414_0x2aecf7(0x163)])(a414_0x2aecf7(0x199))],VeevaVaultController),exports[a414_0x2aecf7(0x19c)]=VeevaVaultController;