const a72_0x3995f7=a72_0x4bce;(function(_0x10fab2,_0x500419){const _0x28c1f5=a72_0x4bce,_0x326f4a=_0x10fab2();while(!![]){try{const _0x2f2fd1=parseInt(_0x28c1f5(0x1c0))/0x1*(-parseInt(_0x28c1f5(0x18a))/0x2)+-parseInt(_0x28c1f5(0x186))/0x3*(-parseInt(_0x28c1f5(0x19c))/0x4)+-parseInt(_0x28c1f5(0x18c))/0x5+-parseInt(_0x28c1f5(0x1c6))/0x6*(-parseInt(_0x28c1f5(0x1d4))/0x7)+-parseInt(_0x28c1f5(0x1b5))/0x8*(-parseInt(_0x28c1f5(0x18f))/0x9)+parseInt(_0x28c1f5(0x19e))/0xa*(-parseInt(_0x28c1f5(0x1d2))/0xb)+-parseInt(_0x28c1f5(0x1b4))/0xc;if(_0x2f2fd1===_0x500419)break;else _0x326f4a['push'](_0x326f4a['shift']());}catch(_0x2500e6){_0x326f4a['push'](_0x326f4a['shift']());}}}(a72_0x6d9f,0x667f7));function a72_0x6d9f(){const _0xfc7784=['apply','2754348yfcGPx','8XerisS','readFile','Enable\x20automation\x20process','_managerAutomationProcess','jobId','./job-detail','writeFile','push','search','toString','kill','5483CiZduY','create','saveSourceAutomationProcessesBackup','_isEnableAutomationProcessError','keys','catch','30iWoDOo','getManifest','__esModule','MaskingJob','default','parse','message','initAutomationProcess','Finish\x20Masking\x20Process','./classes/step/steps-creator','disable','Disable\x20automation\x20process','2016564VvYHiW','utf-8','567679yQOebo','./classes/logger/logger-job-state','path','17007wPqaNX','systemLogger','jobStorePath','masking','80TFyUiP','_loggerDetails','4080935nfdRxR','exit','base64','5868351QogBaa','init','enable','COMPLETED','execute','ManagerAutomationProcess','@flosum/salesforce','./enums/logger.enums','__importDefault','LoggerJobState','fs/promises','join','disableAutomation','572uCMsjs','_maskingManifest','10EWEazn','JobStatus','MANIFEST_FILENAME','../../../constants/job','Start\x20Masking\x20Process','FAILED','setJobStatus','error','_request','gzip','enableAutomationProcess','_loggerJobState','exception','constructor','AUTOMATION_PROCESS_METADATA_BACKUP_FILENAME','AuthManager','../../shared/managers/auth.manager','log','_steps','./classes/logger/logger-details','(((.+)+)+)+$'];a72_0x6d9f=function(){return _0xfc7784;};return a72_0x6d9f();}function a72_0x4bce(_0x5be64d,_0x1dece7){const _0x1bcab1=a72_0x6d9f();return a72_0x4bce=function(_0x42725d,_0x41541c){_0x42725d=_0x42725d-0x185;let _0x6d9f36=_0x1bcab1[_0x42725d];return _0x6d9f36;},a72_0x4bce(_0x5be64d,_0x1dece7);}const a72_0x41541c=(function(){let _0x5e3b65=!![];return function(_0x47134a,_0x4e340f){const _0x33d960=_0x5e3b65?function(){const _0x10643a=a72_0x4bce;if(_0x4e340f){const _0x19bb9d=_0x4e340f[_0x10643a(0x1b3)](_0x47134a,arguments);return _0x4e340f=null,_0x19bb9d;}}:function(){};return _0x5e3b65=![],_0x33d960;};}()),a72_0x42725d=a72_0x41541c(this,function(){const _0x1a30ca=a72_0x4bce;return a72_0x42725d[_0x1a30ca(0x1be)]()[_0x1a30ca(0x1bd)](_0x1a30ca(0x1b2))[_0x1a30ca(0x1be)]()[_0x1a30ca(0x1ab)](a72_0x42725d)[_0x1a30ca(0x1bd)](_0x1a30ca(0x1b2));});a72_0x42725d();'use strict';var __importDefault=this&&this[a72_0x3995f7(0x197)]||function(_0x192ccf){const _0x1049f3=a72_0x3995f7;return _0x192ccf&&_0x192ccf[_0x1049f3(0x1c8)]?_0x192ccf:{'default':_0x192ccf};};Object['defineProperty'](exports,a72_0x3995f7(0x1c8),{'value':!![]}),exports[a72_0x3995f7(0x1c9)]=void 0x0;const promises_1=require(a72_0x3995f7(0x199)),salesforce_1=require(a72_0x3995f7(0x195)),steps_creator_1=require(a72_0x3995f7(0x1cf)),logger_enums_1=require(a72_0x3995f7(0x196)),logger_details_1=require(a72_0x3995f7(0x1b1)),logger_job_state_1=require(a72_0x3995f7(0x1d5)),job_1=require(a72_0x3995f7(0x1a1)),path_1=__importDefault(require(a72_0x3995f7(0x185))),auth_manager_1=require(a72_0x3995f7(0x1ae)),constants_1=require('../constants'),job_detail_1=require(a72_0x3995f7(0x1ba));class MaskingJob{constructor(){const _0x5ae477=a72_0x3995f7;this[_0x5ae477(0x1c3)]=![];}async[a72_0x3995f7(0x1cd)](){const _0x5b0d8c=a72_0x3995f7,{objectRules:_0xe2127}=this['_maskingManifest'];this[_0x5b0d8c(0x1b8)]=new salesforce_1[(_0x5b0d8c(0x194))](this['getManagerAutomationProcessOptions'](_0xe2127));}async['masking'](){const _0x43ae59=a72_0x3995f7;job_detail_1['systemLogger']['log'](_0x43ae59(0x1a2)),this['_loggerDetails']['log'](_0x43ae59(0x1a2));const {objectRules:_0x239aaf,libraries:_0x1bc2b5}=this[_0x43ae59(0x19d)];this['_steps']=await new steps_creator_1['StepsCreator']({'loggerDetails':this[_0x43ae59(0x18b)],'loggerJobState':this[_0x43ae59(0x1a9)],'libraries':_0x1bc2b5,'objectRules':_0x239aaf,'request':this[_0x43ae59(0x1a6)]})[_0x43ae59(0x1c1)]();for(const _0x2fab5a of this[_0x43ae59(0x1b0)]){await _0x2fab5a[_0x43ae59(0x193)]();}}['getManagerAutomationProcessOptions'](_0x31b42f){const _0x23e423=a72_0x3995f7,_0x50f01b=[],_0x986c0a=[],_0x3c6dd=[],_0x564f97=[];for(const _0x4d9ae8 in _0x31b42f){const {isDisableProcessBuilder:_0x5629bb,isDisableTrigger:_0xfaebd8,isDisableValidationRule:_0x6cbc5f,isDisableWorkflow:_0x410874}=_0x31b42f[_0x4d9ae8][_0x23e423(0x19b)];_0x5629bb&&_0x3c6dd[_0x23e423(0x1bc)](_0x4d9ae8),_0xfaebd8&&_0x50f01b['push'](_0x4d9ae8),_0x6cbc5f&&_0x564f97['push'](_0x4d9ae8),_0x410874&&_0x986c0a[_0x23e423(0x1bc)](_0x4d9ae8);}return{'instance':this[_0x23e423(0x1a6)],'saveSourceMetadataBackup':this[_0x23e423(0x1c2)],'triggersObjects':_0x50f01b,'workflowsObjects':_0x986c0a,'processBuilderObjects':_0x3c6dd,'validationRulesObjects':_0x564f97};}async['disableAutomationProcess'](){const _0x4cffb7=a72_0x3995f7;job_detail_1['systemLogger']['log']('Disable\x20automation\x20process'),this[_0x4cffb7(0x18b)]['log'](_0x4cffb7(0x1d1)),await this[_0x4cffb7(0x1b8)][_0x4cffb7(0x1d0)]();}async['enableAutomationProcess'](){const _0x41c244=a72_0x3995f7;!this[_0x41c244(0x1c3)]&&(job_detail_1['systemLogger'][_0x41c244(0x1af)](_0x41c244(0x1b7)),this[_0x41c244(0x18b)]['log'](_0x41c244(0x1b7)),await this[_0x41c244(0x1b8)][_0x41c244(0x191)]()[_0x41c244(0x1c5)](_0x5ef4ee=>{const _0x51f299=_0x41c244;this[_0x51f299(0x1c3)]=!![];throw _0x5ef4ee;}));}async['getManifest'](){const _0x4307fa=a72_0x3995f7,_0x5b21c6=await(0x0,promises_1[_0x4307fa(0x1b6)])(path_1[_0x4307fa(0x1ca)][_0x4307fa(0x19a)](job_detail_1[_0x4307fa(0x188)],job_1[_0x4307fa(0x1a0)]),{'encoding':_0x4307fa(0x1d3)});return await(0x0,promises_1['rm'])(path_1[_0x4307fa(0x1ca)][_0x4307fa(0x19a)](job_detail_1[_0x4307fa(0x188)],job_1[_0x4307fa(0x1a0)]),{'recursive':!![],'force':!![]}),JSON[_0x4307fa(0x1cb)](_0x5b21c6)['details'];}[a72_0x3995f7(0x1c2)](_0x1975b5){const _0x2c0c68=a72_0x3995f7;return(0x0,promises_1[_0x2c0c68(0x1bb)])(path_1['default']['join'](job_detail_1[_0x2c0c68(0x188)],constants_1[_0x2c0c68(0x1ac)]),Buffer['from'](_0x1975b5,_0x2c0c68(0x18e)));}async['execute'](){const _0x4b6976=a72_0x3995f7;this['_maskingManifest']=await this[_0x4b6976(0x1c7)]();const {objectRules:_0x2051b4,credentials:_0x362596}=this[_0x4b6976(0x19d)];this[_0x4b6976(0x18b)]=await new logger_details_1['LoggerDetails'](job_detail_1['jobStorePath'],job_detail_1[_0x4b6976(0x1b9)])[_0x4b6976(0x190)](),this[_0x4b6976(0x1a9)]=await new logger_job_state_1[(_0x4b6976(0x198))](job_detail_1['jobStorePath'],job_detail_1[_0x4b6976(0x1b9)])['init'](Object[_0x4b6976(0x1c4)](_0x2051b4));try{this['_loggerJobState'][_0x4b6976(0x1a4)](logger_enums_1[_0x4b6976(0x19f)]['IN_PROGRESS']),this['_request']=await salesforce_1['AxiosInstanceUtils']['create'](new auth_manager_1[(_0x4b6976(0x1ad))](_0x362596),[],{'headers':{'Accept-Encoding':_0x4b6976(0x1a7)}}),await this[_0x4b6976(0x1cd)](),await this['disableAutomationProcess'](),await this[_0x4b6976(0x189)](),await this[_0x4b6976(0x1a8)](),this['_loggerJobState'][_0x4b6976(0x1a4)](logger_enums_1[_0x4b6976(0x19f)][_0x4b6976(0x192)]);}catch(_0x1cc8d6){await this[_0x4b6976(0x1a8)]()[_0x4b6976(0x1c5)](_0x4a6540=>{const _0x5ed78f=_0x4b6976;job_detail_1[_0x5ed78f(0x187)][_0x5ed78f(0x1a5)](_0x4a6540[_0x5ed78f(0x1cc)]);}),this[_0x4b6976(0x18b)][_0x4b6976(0x1aa)](_0x1cc8d6[_0x4b6976(0x1cc)]),this['_loggerJobState']['setJobStatus'](logger_enums_1[_0x4b6976(0x19f)][_0x4b6976(0x1a3)]),this[_0x4b6976(0x1a9)]['setJobError'](_0x1cc8d6[_0x4b6976(0x1cc)]),job_detail_1[_0x4b6976(0x187)][_0x4b6976(0x1a5)](_0x1cc8d6[_0x4b6976(0x1cc)]);}finally{this[_0x4b6976(0x18b)]['log'](_0x4b6976(0x1ce)),job_detail_1['systemLogger'][_0x4b6976(0x1af)](_0x4b6976(0x1ce)),await this[_0x4b6976(0x1a9)][_0x4b6976(0x1bf)](),await this[_0x4b6976(0x18b)][_0x4b6976(0x1bf)]();}}}exports[a72_0x3995f7(0x1c9)]=MaskingJob,new MaskingJob()[a72_0x3995f7(0x193)]()['then'](()=>process[a72_0x3995f7(0x18d)](0x0))[a72_0x3995f7(0x1c5)](()=>process[a72_0x3995f7(0x18d)](0x1));