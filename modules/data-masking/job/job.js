const a73_0x162489=a73_0x4bb8;(function(_0x39641b,_0x32229a){const _0xbefb77=a73_0x4bb8,_0x212e7d=_0x39641b();while(!![]){try{const _0x7c487e=-parseInt(_0xbefb77(0x110))/0x1+-parseInt(_0xbefb77(0x129))/0x2*(parseInt(_0xbefb77(0x12d))/0x3)+parseInt(_0xbefb77(0x13a))/0x4+parseInt(_0xbefb77(0x149))/0x5+parseInt(_0xbefb77(0x143))/0x6+-parseInt(_0xbefb77(0x10c))/0x7*(-parseInt(_0xbefb77(0x132))/0x8)+-parseInt(_0xbefb77(0x11c))/0x9;if(_0x7c487e===_0x32229a)break;else _0x212e7d['push'](_0x212e7d['shift']());}catch(_0x3b51da){_0x212e7d['push'](_0x212e7d['shift']());}}}(a73_0x344e,0xb35ed));const a73_0x44affe=(function(){let _0x5d6ae2=!![];return function(_0x17d374,_0x475688){const _0x469465=_0x5d6ae2?function(){const _0x54f5c6=a73_0x4bb8;if(_0x475688){const _0x3ccc07=_0x475688[_0x54f5c6(0x12b)](_0x17d374,arguments);return _0x475688=null,_0x3ccc07;}}:function(){};return _0x5d6ae2=![],_0x469465;};}()),a73_0x324131=a73_0x44affe(this,function(){const _0x432b71=a73_0x4bb8;return a73_0x324131[_0x432b71(0x14f)]()[_0x432b71(0x10e)]('(((.+)+)+)+$')['toString']()[_0x432b71(0x121)](a73_0x324131)[_0x432b71(0x10e)](_0x432b71(0x15a));});a73_0x324131();function a73_0x344e(){const _0x2d1410=['enableAutomationProcess','MANIFEST_FILENAME','./enums/logger.enums','defineProperty','initAutomationProcess','452PVGBZL','setJobStatus','apply','catch','12153WRkdCn','writeFile','message','fs/promises','@flosum/salesforce','2344lyTAuw','IN_PROGRESS','exception','disable','COMPLETED','getManagerAutomationProcessOptions','AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME','_maskingManifest','3693640KHRAXL','_isEnableAutomationProcessError','_loggerDetails','LoggerJobState','disableAutomation','enable','getManifest','Finish\x20Masking\x20Process','AuthManager','6939714pMxkxt','__importDefault','base64','StepsCreator','exit','./classes/logger/logger-details','4046380QtiRwS','./job-detail','create','from','utf-8','masking','toString','__esModule','../../../constants/job','_steps','../constants','execute','gzip','ManagerAutomationProcess','FAILED','Disable\x20automation\x20process','join','(((.+)+)+)+$','jobStorePath','systemLogger','LoggerDetails','./classes/step/steps-creator','_request','26131LakrsB','_managerAutomationProcess','search','JobStatus','227760cNudvX','AxiosInstanceUtils','init','Enable\x20automation\x20process','jobId','default','setJobError','details','error','kill','then','Start\x20Masking\x20Process','18945783KHUfHI','saveSourceAutomationProcessesBackup','push','_loggerJobState','log','constructor','disableAutomationProcess','MaskingJob'];a73_0x344e=function(){return _0x2d1410;};return a73_0x344e();}'use strict';var __importDefault=this&&this[a73_0x162489(0x144)]||function(_0x597325){const _0x53fdef=a73_0x162489;return _0x597325&&_0x597325[_0x53fdef(0x150)]?_0x597325:{'default':_0x597325};};Object[a73_0x162489(0x127)](exports,'__esModule',{'value':!![]}),exports[a73_0x162489(0x123)]=void 0x0;const promises_1=require(a73_0x162489(0x130)),salesforce_1=require(a73_0x162489(0x131)),steps_creator_1=require(a73_0x162489(0x10a)),logger_enums_1=require(a73_0x162489(0x126)),logger_details_1=require(a73_0x162489(0x148)),logger_job_state_1=require('./classes/logger/logger-job-state'),job_1=require(a73_0x162489(0x151)),path_1=__importDefault(require('path')),auth_manager_1=require('../../shared/managers/auth.manager'),constants_1=require(a73_0x162489(0x153)),job_detail_1=require(a73_0x162489(0x14a));class MaskingJob{constructor(){const _0x3e78d4=a73_0x162489;this[_0x3e78d4(0x13b)]=![];}async[a73_0x162489(0x128)](){const _0x2d8731=a73_0x162489,{objectRules:_0xf8b8e8}=this['_maskingManifest'];this['_managerAutomationProcess']=new salesforce_1[(_0x2d8731(0x156))](this['getManagerAutomationProcessOptions'](_0xf8b8e8));}async[a73_0x162489(0x14e)](){const _0x144bfe=a73_0x162489;job_detail_1[_0x144bfe(0x15c)][_0x144bfe(0x120)]('Start\x20Masking\x20Process'),this[_0x144bfe(0x13c)][_0x144bfe(0x120)](_0x144bfe(0x11b));const {objectRules:_0xe229bb,libraries:_0x288e84}=this['_maskingManifest'];this[_0x144bfe(0x152)]=await new steps_creator_1[(_0x144bfe(0x146))]({'loggerDetails':this[_0x144bfe(0x13c)],'loggerJobState':this[_0x144bfe(0x11f)],'libraries':_0x288e84,'objectRules':_0xe229bb,'request':this['_request']})['create']();for(const _0x592166 of this[_0x144bfe(0x152)]){await _0x592166['execute']();}}[a73_0x162489(0x137)](_0x357a60){const _0x1f3c71=a73_0x162489,_0x21b922=[],_0x19340a=[],_0x471ac4=[],_0xceaa90=[];for(const _0x48003f in _0x357a60){const {isDisableProcessBuilder:_0x13128a,isDisableTrigger:_0x4a7146,isDisableValidationRule:_0x28bd08,isDisableWorkflow:_0x23bfb0}=_0x357a60[_0x48003f][_0x1f3c71(0x13e)];_0x13128a&&_0x471ac4[_0x1f3c71(0x11e)](_0x48003f),_0x4a7146&&_0x21b922[_0x1f3c71(0x11e)](_0x48003f),_0x28bd08&&_0xceaa90[_0x1f3c71(0x11e)](_0x48003f),_0x23bfb0&&_0x19340a[_0x1f3c71(0x11e)](_0x48003f);}return{'instance':this[_0x1f3c71(0x10b)],'saveSourceMetadataBackup':this[_0x1f3c71(0x11d)],'triggersObjects':_0x21b922,'workflowsObjects':_0x19340a,'processBuilderObjects':_0x471ac4,'validationRulesObjects':_0xceaa90};}async[a73_0x162489(0x122)](){const _0x2d18f5=a73_0x162489;job_detail_1[_0x2d18f5(0x15c)][_0x2d18f5(0x120)](_0x2d18f5(0x158)),this['_loggerDetails'][_0x2d18f5(0x120)](_0x2d18f5(0x158)),await this[_0x2d18f5(0x10d)][_0x2d18f5(0x135)]();}async[a73_0x162489(0x124)](){const _0x513cba=a73_0x162489;!this[_0x513cba(0x13b)]&&(job_detail_1['systemLogger']['log'](_0x513cba(0x113)),this['_loggerDetails'][_0x513cba(0x120)](_0x513cba(0x113)),await this[_0x513cba(0x10d)][_0x513cba(0x13f)]()[_0x513cba(0x12c)](_0x422e5e=>{this['_isEnableAutomationProcessError']=!![];throw _0x422e5e;}));}async[a73_0x162489(0x140)](){const _0x3f541d=a73_0x162489,_0x473c00=await(0x0,promises_1['readFile'])(path_1[_0x3f541d(0x115)][_0x3f541d(0x159)](job_detail_1[_0x3f541d(0x15b)],job_1[_0x3f541d(0x125)]),{'encoding':_0x3f541d(0x14d)});return await(0x0,promises_1['rm'])(path_1[_0x3f541d(0x115)][_0x3f541d(0x159)](job_detail_1['jobStorePath'],job_1[_0x3f541d(0x125)]),{'recursive':!![],'force':!![]}),JSON['parse'](_0x473c00)[_0x3f541d(0x117)];}['saveSourceAutomationProcessesBackup'](_0x1b1334){const _0x56f5b5=a73_0x162489;return(0x0,promises_1[_0x56f5b5(0x12e)])(path_1['default'][_0x56f5b5(0x159)](job_detail_1['jobStorePath'],constants_1[_0x56f5b5(0x138)]),Buffer[_0x56f5b5(0x14c)](_0x1b1334,_0x56f5b5(0x145)));}async[a73_0x162489(0x154)](){const _0x2f6667=a73_0x162489;this[_0x2f6667(0x139)]=await this[_0x2f6667(0x140)]();const {objectRules:_0x20bce1,credentials:_0x5c01a5}=this['_maskingManifest'];this[_0x2f6667(0x13c)]=await new logger_details_1[(_0x2f6667(0x109))](job_detail_1[_0x2f6667(0x15b)],job_detail_1['jobId'])[_0x2f6667(0x112)](),this['_loggerJobState']=await new logger_job_state_1[(_0x2f6667(0x13d))](job_detail_1[_0x2f6667(0x15b)],job_detail_1[_0x2f6667(0x114)])[_0x2f6667(0x112)](Object['keys'](_0x20bce1));try{this[_0x2f6667(0x11f)][_0x2f6667(0x12a)](logger_enums_1[_0x2f6667(0x10f)][_0x2f6667(0x133)]),this[_0x2f6667(0x10b)]=await salesforce_1[_0x2f6667(0x111)][_0x2f6667(0x14b)](new auth_manager_1[(_0x2f6667(0x142))](_0x5c01a5),[],{'headers':{'Accept-Encoding':_0x2f6667(0x155)}}),await this['initAutomationProcess'](),await this[_0x2f6667(0x122)](),await this[_0x2f6667(0x14e)](),await this['enableAutomationProcess'](),this[_0x2f6667(0x11f)][_0x2f6667(0x12a)](logger_enums_1[_0x2f6667(0x10f)][_0x2f6667(0x136)]);}catch(_0x15138c){await this[_0x2f6667(0x124)]()[_0x2f6667(0x12c)](_0x4e51ca=>{const _0x3b535d=_0x2f6667;job_detail_1[_0x3b535d(0x15c)][_0x3b535d(0x118)](_0x4e51ca[_0x3b535d(0x12f)]);}),this[_0x2f6667(0x13c)][_0x2f6667(0x134)](_0x15138c[_0x2f6667(0x12f)]),this[_0x2f6667(0x11f)][_0x2f6667(0x12a)](logger_enums_1[_0x2f6667(0x10f)][_0x2f6667(0x157)]),this[_0x2f6667(0x11f)][_0x2f6667(0x116)](_0x15138c['message']),job_detail_1[_0x2f6667(0x15c)][_0x2f6667(0x118)](_0x15138c['message']);}finally{this[_0x2f6667(0x13c)]['log'](_0x2f6667(0x141)),job_detail_1[_0x2f6667(0x15c)]['log']('Finish\x20Masking\x20Process'),await this[_0x2f6667(0x11f)][_0x2f6667(0x119)](),await this[_0x2f6667(0x13c)][_0x2f6667(0x119)]();}}}function a73_0x4bb8(_0x388ab2,_0x11c1cf){const _0x3158ef=a73_0x344e();return a73_0x4bb8=function(_0x324131,_0x44affe){_0x324131=_0x324131-0x109;let _0x344e65=_0x3158ef[_0x324131];return _0x344e65;},a73_0x4bb8(_0x388ab2,_0x11c1cf);}exports[a73_0x162489(0x123)]=MaskingJob,new MaskingJob()[a73_0x162489(0x154)]()[a73_0x162489(0x11a)](()=>process[a73_0x162489(0x147)](0x0))[a73_0x162489(0x12c)](()=>process[a73_0x162489(0x147)](0x1));