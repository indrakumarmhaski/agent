function a73_0x56a7(){const _0x236210=['AxiosInstanceUtils','Enable\x20automation\x20process','@flosum/salesforce','getManagerAutomationProcessOptions','6738790OUYcsX','../../../constants/job','8878208dKhEbH','execute','(((.+)+)+)+$','saveSourceAutomationProcessesBackup','message','./enums/logger.enums','_loggerDetails','MaskingJob','gzip','kill','__importDefault','create','details','defineProperty','readFile','_managerAutomationProcess','4ZlpvuP','Finish\x20Masking\x20Process','parse','toString','_maskingManifest','6147204HNYukp','24244929KzCLLu','_isEnableAutomationProcessError','jobId','disable','FAILED','JobStatus','exit','join','LoggerDetails','IN_PROGRESS','path','fs/promises','./classes/logger/logger-details','enable','then','AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME','_steps','utf-8','__esModule','../constants','Disable\x20automation\x20process','keys','default','setJobError','masking','getManifest','setJobStatus','5839099kulwZU','StepsCreator','apply','search','277524KNjGIZ','constructor','2smAlna','catch','disableAutomationProcess','push','AuthManager','exception','log','init','ManagerAutomationProcess','systemLogger','3330483hipNZR','Start\x20Masking\x20Process','from','jobStorePath','_loggerJobState','LoggerJobState','_request','MANIFEST_FILENAME','error','enableAutomationProcess','initAutomationProcess'];a73_0x56a7=function(){return _0x236210;};return a73_0x56a7();}const a73_0x25caa7=a73_0x3701;(function(_0x2461e7,_0x2ae567){const _0x58330d=a73_0x3701,_0x42aa7b=_0x2461e7();while(!![]){try{const _0x111dbd=-parseInt(_0x58330d(0x17a))/0x1+parseInt(_0x58330d(0x17c))/0x2*(-parseInt(_0x58330d(0x134))/0x3)+parseInt(_0x58330d(0x155))/0x4*(-parseInt(_0x58330d(0x143))/0x5)+parseInt(_0x58330d(0x15a))/0x6+parseInt(_0x58330d(0x176))/0x7+-parseInt(_0x58330d(0x145))/0x8+parseInt(_0x58330d(0x15b))/0x9;if(_0x111dbd===_0x2ae567)break;else _0x42aa7b['push'](_0x42aa7b['shift']());}catch(_0x5081ad){_0x42aa7b['push'](_0x42aa7b['shift']());}}}(a73_0x56a7,0xacb19));const a73_0x588f33=(function(){let _0x267281=!![];return function(_0x62840e,_0xb3b652){const _0x1ef54d=_0x267281?function(){const _0x5af900=a73_0x3701;if(_0xb3b652){const _0x9d750d=_0xb3b652[_0x5af900(0x178)](_0x62840e,arguments);return _0xb3b652=null,_0x9d750d;}}:function(){};return _0x267281=![],_0x1ef54d;};}()),a73_0x5ec09e=a73_0x588f33(this,function(){const _0x539623=a73_0x3701;return a73_0x5ec09e[_0x539623(0x158)]()['search']('(((.+)+)+)+$')[_0x539623(0x158)]()[_0x539623(0x17b)](a73_0x5ec09e)[_0x539623(0x179)](_0x539623(0x147));});a73_0x5ec09e();'use strict';function a73_0x3701(_0x44b3e1,_0x58c8b8){const _0x1a5bd8=a73_0x56a7();return a73_0x3701=function(_0x5ec09e,_0x588f33){_0x5ec09e=_0x5ec09e-0x12c;let _0x56a74b=_0x1a5bd8[_0x5ec09e];return _0x56a74b;},a73_0x3701(_0x44b3e1,_0x58c8b8);}var __importDefault=this&&this[a73_0x25caa7(0x14f)]||function(_0x34cc47){const _0xcacb0a=a73_0x25caa7;return _0x34cc47&&_0x34cc47[_0xcacb0a(0x16d)]?_0x34cc47:{'default':_0x34cc47};};Object[a73_0x25caa7(0x152)](exports,a73_0x25caa7(0x16d),{'value':!![]}),exports[a73_0x25caa7(0x14c)]=void 0x0;const promises_1=require(a73_0x25caa7(0x166)),salesforce_1=require(a73_0x25caa7(0x141)),steps_creator_1=require('./classes/step/steps-creator'),logger_enums_1=require(a73_0x25caa7(0x14a)),logger_details_1=require(a73_0x25caa7(0x167)),logger_job_state_1=require('./classes/logger/logger-job-state'),job_1=require(a73_0x25caa7(0x144)),path_1=__importDefault(require(a73_0x25caa7(0x165))),auth_manager_1=require('../../shared/managers/auth.manager'),constants_1=require(a73_0x25caa7(0x16e)),job_detail_1=require('./job-detail');class MaskingJob{constructor(){const _0x182b45=a73_0x25caa7;this[_0x182b45(0x15c)]=![];}async[a73_0x25caa7(0x13e)](){const _0x2ac939=a73_0x25caa7,{objectRules:_0x5b6b18}=this[_0x2ac939(0x159)];this['_managerAutomationProcess']=new salesforce_1[(_0x2ac939(0x132))](this[_0x2ac939(0x142)](_0x5b6b18));}async['masking'](){const _0x4a5d35=a73_0x25caa7;job_detail_1[_0x4a5d35(0x133)]['log'](_0x4a5d35(0x135)),this[_0x4a5d35(0x14b)][_0x4a5d35(0x130)](_0x4a5d35(0x135));const {objectRules:_0x5b95ad,libraries:_0x20246a}=this[_0x4a5d35(0x159)];this[_0x4a5d35(0x16b)]=await new steps_creator_1[(_0x4a5d35(0x177))]({'loggerDetails':this['_loggerDetails'],'loggerJobState':this[_0x4a5d35(0x138)],'libraries':_0x20246a,'objectRules':_0x5b95ad,'request':this[_0x4a5d35(0x13a)]})['create']();for(const _0x50da9c of this[_0x4a5d35(0x16b)]){await _0x50da9c[_0x4a5d35(0x146)]();}}[a73_0x25caa7(0x142)](_0x49d396){const _0x5c5ba5=a73_0x25caa7,_0x1f202b=[],_0xc8bd10=[],_0x15cf80=[],_0x481d62=[];for(const _0x34d099 in _0x49d396){const {isDisableProcessBuilder:_0x1f5f2a,isDisableTrigger:_0x47a8ee,isDisableValidationRule:_0x195395,isDisableWorkflow:_0x36626a}=_0x49d396[_0x34d099]['disableAutomation'];_0x1f5f2a&&_0x15cf80['push'](_0x34d099),_0x47a8ee&&_0x1f202b['push'](_0x34d099),_0x195395&&_0x481d62[_0x5c5ba5(0x12d)](_0x34d099),_0x36626a&&_0xc8bd10['push'](_0x34d099);}return{'instance':this[_0x5c5ba5(0x13a)],'saveSourceMetadataBackup':this[_0x5c5ba5(0x148)],'triggersObjects':_0x1f202b,'workflowsObjects':_0xc8bd10,'processBuilderObjects':_0x15cf80,'validationRulesObjects':_0x481d62};}async[a73_0x25caa7(0x12c)](){const _0x59350f=a73_0x25caa7;job_detail_1[_0x59350f(0x133)][_0x59350f(0x130)](_0x59350f(0x16f)),this[_0x59350f(0x14b)][_0x59350f(0x130)](_0x59350f(0x16f)),await this[_0x59350f(0x154)][_0x59350f(0x15e)]();}async[a73_0x25caa7(0x13d)](){const _0x5c5a5b=a73_0x25caa7;!this[_0x5c5a5b(0x15c)]&&(job_detail_1[_0x5c5a5b(0x133)][_0x5c5a5b(0x130)](_0x5c5a5b(0x140)),this[_0x5c5a5b(0x14b)]['log']('Enable\x20automation\x20process'),await this[_0x5c5a5b(0x154)][_0x5c5a5b(0x168)]()[_0x5c5a5b(0x17d)](_0x2e70c7=>{this['_isEnableAutomationProcessError']=!![];throw _0x2e70c7;}));}async[a73_0x25caa7(0x174)](){const _0x53c691=a73_0x25caa7,_0x98940b=await(0x0,promises_1[_0x53c691(0x153)])(path_1[_0x53c691(0x171)]['join'](job_detail_1[_0x53c691(0x137)],job_1[_0x53c691(0x13b)]),{'encoding':_0x53c691(0x16c)});return await(0x0,promises_1['rm'])(path_1[_0x53c691(0x171)]['join'](job_detail_1['jobStorePath'],job_1[_0x53c691(0x13b)]),{'recursive':!![],'force':!![]}),JSON[_0x53c691(0x157)](_0x98940b)[_0x53c691(0x151)];}['saveSourceAutomationProcessesBackup'](_0x36519d){const _0x34b143=a73_0x25caa7;return(0x0,promises_1['writeFile'])(path_1[_0x34b143(0x171)][_0x34b143(0x162)](job_detail_1[_0x34b143(0x137)],constants_1[_0x34b143(0x16a)]),Buffer[_0x34b143(0x136)](_0x36519d,'base64'));}async[a73_0x25caa7(0x146)](){const _0x1b2cfb=a73_0x25caa7;this[_0x1b2cfb(0x159)]=await this[_0x1b2cfb(0x174)]();const {objectRules:_0x26269e,credentials:_0x379d52}=this['_maskingManifest'];this[_0x1b2cfb(0x14b)]=await new logger_details_1[(_0x1b2cfb(0x163))](job_detail_1['jobStorePath'],job_detail_1['jobId'])[_0x1b2cfb(0x131)](),this[_0x1b2cfb(0x138)]=await new logger_job_state_1[(_0x1b2cfb(0x139))](job_detail_1[_0x1b2cfb(0x137)],job_detail_1[_0x1b2cfb(0x15d)])['init'](Object[_0x1b2cfb(0x170)](_0x26269e));try{this[_0x1b2cfb(0x138)][_0x1b2cfb(0x175)](logger_enums_1[_0x1b2cfb(0x160)][_0x1b2cfb(0x164)]),this['_request']=await salesforce_1[_0x1b2cfb(0x13f)][_0x1b2cfb(0x150)](new auth_manager_1[(_0x1b2cfb(0x12e))](_0x379d52),[],{'headers':{'Accept-Encoding':_0x1b2cfb(0x14d)}}),await this[_0x1b2cfb(0x13e)](),await this[_0x1b2cfb(0x12c)](),await this[_0x1b2cfb(0x173)](),await this[_0x1b2cfb(0x13d)](),this['_loggerJobState'][_0x1b2cfb(0x175)](logger_enums_1[_0x1b2cfb(0x160)]['COMPLETED']);}catch(_0x390bb1){await this[_0x1b2cfb(0x13d)]()[_0x1b2cfb(0x17d)](_0x5d0637=>{const _0x2eb3b0=_0x1b2cfb;job_detail_1[_0x2eb3b0(0x133)]['error'](_0x5d0637[_0x2eb3b0(0x149)]);}),this[_0x1b2cfb(0x14b)][_0x1b2cfb(0x12f)](_0x390bb1['message']),this[_0x1b2cfb(0x138)][_0x1b2cfb(0x175)](logger_enums_1['JobStatus'][_0x1b2cfb(0x15f)]),this['_loggerJobState'][_0x1b2cfb(0x172)](_0x390bb1[_0x1b2cfb(0x149)]),job_detail_1[_0x1b2cfb(0x133)][_0x1b2cfb(0x13c)](_0x390bb1[_0x1b2cfb(0x149)]);}finally{this[_0x1b2cfb(0x14b)][_0x1b2cfb(0x130)]('Finish\x20Masking\x20Process'),job_detail_1[_0x1b2cfb(0x133)][_0x1b2cfb(0x130)](_0x1b2cfb(0x156)),await this['_loggerJobState']['kill'](),await this[_0x1b2cfb(0x14b)][_0x1b2cfb(0x14e)]();}}}exports[a73_0x25caa7(0x14c)]=MaskingJob,new MaskingJob()[a73_0x25caa7(0x146)]()[a73_0x25caa7(0x169)](()=>process[a73_0x25caa7(0x161)](0x0))[a73_0x25caa7(0x17d)](()=>process['exit'](0x1));