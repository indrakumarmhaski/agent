function a320_0x1c68(){const _0x53199c=['FLOSUM_NAMESPACE','toString','fs/promises','LogStatus','default','MetadataLogger','flosumOrgCredentials','../../../core','utf-8','./classes/source-member.retriever','update','9844000nfACWq','startDate','SourceMemberRetriever','Last_Start_Retrieval__c','__esModule','logger','getSourceMemberRetriever','init','catch','initManifest','initLogger','getMetadataRetriever','Is_Processed__c','3289050cwHdaq','getSourceMemberHandler','Job','constructor','search','targetOrgCredentials','347430YvQZFu','message','Job\x20Error:\x20','./classes/metadata.retriever','460sxUpXS','(((.+)+)+)+$','apiVersion','updateTrackingSetting','create','AxiosInstanceUtils','Tracking\x20components\x20job\x20has\x20been\x20failed','./classes/source-member.handler','1392811sFHeou','Tracking\x20setting\x20updated','flosumInstance','@flosum/salesforce','timeZone','log','metadataTypes','../../../constants','targetInstance','path','jobStorePath','./classes/logger/logger','targetOrgId','AuthManager','pipeline','2629368LPczTR','stream/promises','./classes/metadata-logger','execute','argv','parse','MetadataRetriever','success','7785FVOkaG','COMPLETED','4695060iirqZl','metadataLogger','../../../constants/job','initInstances','__importDefault','../constants','then','trackingSettingId','Logger','apply','status','Tracking\x20components\x20job\x20has\x20been\x20started\x20with\x20id:\x20','getComponentsDeployer','minimist','exit','./classes/components.deployer','join','lastRetrieveDate','metadataLogId','jobId','error','initMetadataLogger','defineProperty','createTrackingSettingRecord','Tracking_Setting__c'];a320_0x1c68=function(){return _0x53199c;};return a320_0x1c68();}const a320_0x4cd086=a320_0x31ee;(function(_0x4844bf,_0x5b227e){const _0x2bee03=a320_0x31ee,_0x2ebf9b=_0x4844bf();while(!![]){try{const _0x705d8b=-parseInt(_0x2bee03(0x225))/0x1+parseInt(_0x2bee03(0x229))/0x2*(parseInt(_0x2bee03(0x248))/0x3)+parseInt(_0x2bee03(0x240))/0x4+-parseInt(_0x2bee03(0x21f))/0x5+-parseInt(_0x2bee03(0x1ee))/0x6+-parseInt(_0x2bee03(0x231))/0x7+parseInt(_0x2bee03(0x212))/0x8;if(_0x705d8b===_0x5b227e)break;else _0x2ebf9b['push'](_0x2ebf9b['shift']());}catch(_0x22f5ee){_0x2ebf9b['push'](_0x2ebf9b['shift']());}}}(a320_0x1c68,0x79931));const a320_0x2e49c1=(function(){let _0x39acb1=!![];return function(_0x4886b3,_0xb5d0c0){const _0x1c3901=_0x39acb1?function(){const _0x7ccd5c=a320_0x31ee;if(_0xb5d0c0){const _0xb05268=_0xb5d0c0[_0x7ccd5c(0x1f7)](_0x4886b3,arguments);return _0xb5d0c0=null,_0xb05268;}}:function(){};return _0x39acb1=![],_0x1c3901;};}()),a320_0x28d2ed=a320_0x2e49c1(this,function(){const _0x3da6b0=a320_0x31ee;return a320_0x28d2ed[_0x3da6b0(0x208)]()[_0x3da6b0(0x223)](_0x3da6b0(0x22a))[_0x3da6b0(0x208)]()[_0x3da6b0(0x222)](a320_0x28d2ed)[_0x3da6b0(0x223)](_0x3da6b0(0x22a));});a320_0x28d2ed();'use strict';var __importDefault=this&&this[a320_0x4cd086(0x1f2)]||function(_0x204a97){const _0x4e4b5c=a320_0x4cd086;return _0x204a97&&_0x204a97[_0x4e4b5c(0x216)]?_0x204a97:{'default':_0x204a97};};Object[a320_0x4cd086(0x204)](exports,a320_0x4cd086(0x216),{'value':!![]}),exports[a320_0x4cd086(0x221)]=void 0x0;const minimist_1=__importDefault(require(a320_0x4cd086(0x1fb))),core_1=require(a320_0x4cd086(0x20e)),salesforce_1=require(a320_0x4cd086(0x234)),auth_manager_1=require('../../shared/managers/auth.manager'),logger_1=require(a320_0x4cd086(0x23c)),promises_1=require(a320_0x4cd086(0x241)),promises_2=require(a320_0x4cd086(0x209)),path_1=__importDefault(require(a320_0x4cd086(0x23a))),metadata_retriever_1=require(a320_0x4cd086(0x228)),components_deployer_1=require(a320_0x4cd086(0x1fd)),source_member_retriever_1=require(a320_0x4cd086(0x210)),source_member_handler_1=require(a320_0x4cd086(0x230)),metadata_logger_1=require(a320_0x4cd086(0x242)),job_1=require(a320_0x4cd086(0x1f0)),constants_1=require(a320_0x4cd086(0x238)),constants_2=require(a320_0x4cd086(0x1f3)),{jobId,jobStorePath}=(0x0,minimist_1[a320_0x4cd086(0x20b)])(process[a320_0x4cd086(0x244)]['slice'](0x2)),systemLogger=new core_1[(a320_0x4cd086(0x1f6))](jobId);function a320_0x31ee(_0x56834a,_0x5b0036){const _0x5aad87=a320_0x1c68();return a320_0x31ee=function(_0x28d2ed,_0x2e49c1){_0x28d2ed=_0x28d2ed-0x1ee;let _0x1c6835=_0x5aad87[_0x28d2ed];return _0x1c6835;},a320_0x31ee(_0x56834a,_0x5b0036);}class Job{constructor(){const _0x1a41ee=a320_0x4cd086;this[_0x1a41ee(0x23b)]=jobStorePath,this[_0x1a41ee(0x201)]=jobId;}async['initManifest'](){const _0x5ae61c=a320_0x4cd086,_0x102cf7=path_1[_0x5ae61c(0x20b)][_0x5ae61c(0x1fe)](this[_0x5ae61c(0x23b)],job_1['MANIFEST_FILENAME']),_0x4e496a=await(0x0,promises_2['readFile'])(_0x102cf7,{'encoding':_0x5ae61c(0x20f)})[_0x5ae61c(0x1f4)](JSON[_0x5ae61c(0x245)])[_0x5ae61c(0x1f4)](({details:_0x708f55})=>_0x708f55);await(0x0,promises_2['rm'])(_0x102cf7,{'recursive':!![],'force':!![]}),this['apiVersion']=_0x4e496a[_0x5ae61c(0x22b)],this[_0x5ae61c(0x20d)]=_0x4e496a[_0x5ae61c(0x20d)],this['targetOrgCredentials']=_0x4e496a[_0x5ae61c(0x224)],this[_0x5ae61c(0x23d)]=_0x4e496a[_0x5ae61c(0x23d)],this[_0x5ae61c(0x1f5)]=_0x4e496a[_0x5ae61c(0x1f5)],this[_0x5ae61c(0x1ff)]=_0x4e496a['lastRetrieveDate'],this[_0x5ae61c(0x237)]=_0x4e496a[_0x5ae61c(0x237)],this['timeZone']=_0x4e496a[_0x5ae61c(0x235)];}async[a320_0x4cd086(0x1f1)](){const _0x11a74b=a320_0x4cd086;this[_0x11a74b(0x233)]=await salesforce_1['AxiosInstanceUtils'][_0x11a74b(0x22d)](new auth_manager_1[(_0x11a74b(0x23e))](this[_0x11a74b(0x20d)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),this['targetInstance']=await salesforce_1[_0x11a74b(0x22e)][_0x11a74b(0x22d)](new auth_manager_1[(_0x11a74b(0x23e))](this[_0x11a74b(0x224)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a320_0x4cd086(0x203)](){const _0x455af6=a320_0x4cd086;this[_0x455af6(0x1ef)]=new metadata_logger_1[(_0x455af6(0x20c))]({'apiVersion':this[_0x455af6(0x22b)],'instance':this[_0x455af6(0x233)],'targetOrgId':this['targetOrgId'],'trackingSettingId':this[_0x455af6(0x1f5)],'startDate':this[_0x455af6(0x213)]}),this[_0x455af6(0x200)]=await this[_0x455af6(0x1ef)][_0x455af6(0x219)]();}[a320_0x4cd086(0x21c)](){const _0x4d8898=a320_0x4cd086;this[_0x4d8898(0x217)]=new logger_1[(_0x4d8898(0x1f6))]({'systemLogger':systemLogger,'apiVersion':this[_0x4d8898(0x22b)],'instance':this[_0x4d8898(0x233)],'metadataLogId':this[_0x4d8898(0x200)],'timeZone':this[_0x4d8898(0x235)]});}[a320_0x4cd086(0x218)](){const _0x36fa03=a320_0x4cd086;return new source_member_retriever_1[(_0x36fa03(0x214))]({'apiVersion':this['apiVersion'],'instance':this[_0x36fa03(0x239)],'logger':this[_0x36fa03(0x217)],'lastRetrieveDate':this[_0x36fa03(0x1ff)],'currentRetrieveDate':this['startDate'],'metadataTypes':this['metadataTypes']});}['getSourceMemberHandler'](){const _0x1bb655=a320_0x4cd086;return new source_member_handler_1['SourceMemberHandler']({'instance':this[_0x1bb655(0x233)],'apiVersion':this[_0x1bb655(0x22b)],'logger':this[_0x1bb655(0x217)],'targetOrgId':this[_0x1bb655(0x23d)]});}[a320_0x4cd086(0x21d)](){const _0x13344c=a320_0x4cd086;return new metadata_retriever_1[(_0x13344c(0x246))]({'instance':this[_0x13344c(0x239)],'apiVersion':this[_0x13344c(0x22b)],'logger':this['logger'],'metadataTypes':this[_0x13344c(0x237)]});}['getComponentsDeployer'](){const _0x4deed5=a320_0x4cd086;return new components_deployer_1['ComponentsDeployer']({'instance':this[_0x4deed5(0x233)],'logger':this[_0x4deed5(0x217)],'apiVersion':this[_0x4deed5(0x22b)],'targetOrgId':this[_0x4deed5(0x23d)],'trackingSettingId':this[_0x4deed5(0x1f5)]});}[a320_0x4cd086(0x205)](){const _0x2f242e=a320_0x4cd086;return{'attributes':{'type':constants_1[_0x2f242e(0x207)]+_0x2f242e(0x206)},'Id':this[_0x2f242e(0x1f5)],[constants_1[_0x2f242e(0x207)]+_0x2f242e(0x21e)]:![],[constants_1[_0x2f242e(0x207)]+_0x2f242e(0x215)]:this['startDate']};}async[a320_0x4cd086(0x22c)](){const _0x19f3e8=a320_0x4cd086,_0x8e4f47=this[_0x19f3e8(0x205)](),_0x7dfd0c=new salesforce_1['RestSimpleDeployData']({'instance':this[_0x19f3e8(0x233)],'objectName':constants_1[_0x19f3e8(0x207)]+_0x19f3e8(0x206),'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'}),_0x556f0e=await _0x7dfd0c[_0x19f3e8(0x243)]({'records':[_0x8e4f47]}),_0x2e0ce5=_0x556f0e['at'](0x0);(_0x2e0ce5===null||_0x2e0ce5===void 0x0?void 0x0:_0x2e0ce5[_0x19f3e8(0x247)])?this[_0x19f3e8(0x217)][_0x19f3e8(0x236)](_0x19f3e8(0x232)):this[_0x19f3e8(0x217)][_0x19f3e8(0x236)]('Tracking\x20setting\x20not\x20updated\x20\x0a\x20'+(_0x2e0ce5===null||_0x2e0ce5===void 0x0?void 0x0:_0x2e0ce5[_0x19f3e8(0x202)]));}async['execute'](){const _0x1915d7=a320_0x4cd086;await this[_0x1915d7(0x21b)](),this['startDate']=new Date()['getTime']();try{await this[_0x1915d7(0x1f1)](),await this['initMetadataLogger'](),this[_0x1915d7(0x21c)](),this[_0x1915d7(0x217)]['log'](_0x1915d7(0x1f9)+this['jobId']),this[_0x1915d7(0x1ef)][_0x1915d7(0x1f8)]=constants_2['LogStatus']['IN_PROGRESS'],await this[_0x1915d7(0x1ef)]['update'](),await this[_0x1915d7(0x217)][_0x1915d7(0x211)]();const _0x21cf37=this[_0x1915d7(0x218)](),_0x2830ed=this[_0x1915d7(0x220)](),_0x244cb2=this[_0x1915d7(0x21d)](),_0x4da1aa=this[_0x1915d7(0x1fa)]();await(0x0,promises_1[_0x1915d7(0x23f)])(_0x21cf37,_0x2830ed,_0x244cb2,_0x4da1aa),this['logger'][_0x1915d7(0x236)]('Tracking\x20components\x20job\x20has\x20been\x20completed'),this[_0x1915d7(0x1ef)][_0x1915d7(0x1f8)]=constants_2[_0x1915d7(0x20a)][_0x1915d7(0x249)];}catch(_0x1ec8cd){this[_0x1915d7(0x217)][_0x1915d7(0x202)](_0x1915d7(0x22f)),this['logger'][_0x1915d7(0x202)](_0x1ec8cd['message']),this[_0x1915d7(0x1ef)][_0x1915d7(0x1f8)]=constants_2[_0x1915d7(0x20a)]['EXCEPTION'];}finally{await this['updateTrackingSetting'](),await this[_0x1915d7(0x217)]['update'](),await this[_0x1915d7(0x1ef)][_0x1915d7(0x211)]();}}}exports[a320_0x4cd086(0x221)]=Job,new Job()['execute']()[a320_0x4cd086(0x1f4)](()=>process[a320_0x4cd086(0x1fc)](0x0))[a320_0x4cd086(0x21a)](_0xe6169d=>{const _0x39b0d3=a320_0x4cd086;systemLogger[_0x39b0d3(0x202)](_0x39b0d3(0x227)+_0xe6169d[_0x39b0d3(0x226)]),process[_0x39b0d3(0x1fc)](0x1);});