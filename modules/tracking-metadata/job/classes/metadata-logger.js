function a330_0x297f(){const _0x341c12=['660107IdYwwq','COMPLETED','Completed_Date__c','error','update','84zzJOPq','2572qGsiNA','then','2622hWMYhd','18McWbPk','success','targetOrgId','Start_Date__c','Status__c','__esModule','IN_PROGRESS','4787396Ehckpz','Process_Type__c','LogStatus','../../constants','createMetadataLog','3591792CXxMpe','metadataLogId','_status','Init\x20metadata\x20log\x20error\x20\x0a','search','../../../../constants','defineProperty','init','MetadataLogger','metadataLog','getTime','Organisation__c','Metadata_Log__c','startDate','FLOSUM_NAMESPACE','5iFnHWN','5393883TovnAK','Update\x20metadata\x20log\x20error\x20\x0a','Job_Completed__c','(((.+)+)+)+$','trackingSettingId','54610uAxXuP','EXCEPTION','deployMetadataLog','toString','instance','status','10709490FFedlG'];a330_0x297f=function(){return _0x341c12;};return a330_0x297f();}const a330_0x23565d=a330_0x40b8;(function(_0x3cf61d,_0xa5f279){const _0x4909df=a330_0x40b8,_0x18b1cc=_0x3cf61d();while(!![]){try{const _0x39673a=parseInt(_0x4909df(0x1da))/0x1+-parseInt(_0x4909df(0x1e7))/0x2*(parseInt(_0x4909df(0x1e9))/0x3)+parseInt(_0x4909df(0x1c0))/0x4*(parseInt(_0x4909df(0x1d4))/0x5)+-parseInt(_0x4909df(0x1e6))/0x6*(-parseInt(_0x4909df(0x1e1))/0x7)+-parseInt(_0x4909df(0x1c5))/0x8*(-parseInt(_0x4909df(0x1ea))/0x9)+-parseInt(_0x4909df(0x1e0))/0xa+-parseInt(_0x4909df(0x1d5))/0xb;if(_0x39673a===_0xa5f279)break;else _0x18b1cc['push'](_0x18b1cc['shift']());}catch(_0x10d70d){_0x18b1cc['push'](_0x18b1cc['shift']());}}}(a330_0x297f,0xbf7e3));const a330_0x53902a=(function(){let _0x4a947b=!![];return function(_0x2895ce,_0x309ca2){const _0x3354c1=_0x4a947b?function(){if(_0x309ca2){const _0x83441b=_0x309ca2['apply'](_0x2895ce,arguments);return _0x309ca2=null,_0x83441b;}}:function(){};return _0x4a947b=![],_0x3354c1;};}()),a330_0x476dad=a330_0x53902a(this,function(){const _0x62d4c7=a330_0x40b8;return a330_0x476dad[_0x62d4c7(0x1dd)]()['search'](_0x62d4c7(0x1d8))[_0x62d4c7(0x1dd)]()['constructor'](a330_0x476dad)[_0x62d4c7(0x1c9)]('(((.+)+)+)+$');});a330_0x476dad();'use strict';Object[a330_0x23565d(0x1cb)](exports,a330_0x23565d(0x1ef),{'value':!![]}),exports[a330_0x23565d(0x1cd)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),constants_1=require(a330_0x23565d(0x1c3)),constants_2=require(a330_0x23565d(0x1ca)),METADATA_LOG_OBJECT_NAME=constants_2[a330_0x23565d(0x1d3)]+a330_0x23565d(0x1d1),PROCESS_TYPE_RETRIEVE_ORGANIZATION='Tracking\x20Organization\x20-\x20Retrieve';class MetadataLogger{constructor({apiVersion:_0x125b96,instance:_0x1f59a2,targetOrgId:_0x15d303,trackingSettingId:_0x2f1e8c,startDate:_0x3aa3d0}){const _0x3a9cec=a330_0x23565d;this['apiVersion']=_0x125b96,this[_0x3a9cec(0x1de)]=_0x1f59a2,this[_0x3a9cec(0x1ec)]=_0x15d303,this[_0x3a9cec(0x1d9)]=_0x2f1e8c,this[_0x3a9cec(0x1d2)]=_0x3aa3d0;}set[a330_0x23565d(0x1df)](_0x28509d){this['_status']=_0x28509d;}async[a330_0x23565d(0x1dc)](){const _0x47abc0=a330_0x23565d,_0x124372=new salesforce_1['RestSimpleDeployData']({'instance':this[_0x47abc0(0x1de)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'});return await _0x124372['execute']({'records':[this[_0x47abc0(0x1ce)]]});}[a330_0x23565d(0x1c4)](){const _0x5f0735=a330_0x23565d;this[_0x5f0735(0x1ce)]={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this['metadataLogId']||null,[constants_2['FLOSUM_NAMESPACE']+_0x5f0735(0x1ed)]:this['startDate'],[constants_2['FLOSUM_NAMESPACE']+_0x5f0735(0x1d0)]:this[_0x5f0735(0x1ec)],[constants_2[_0x5f0735(0x1d3)]+'Tracking_Setting__c']:this[_0x5f0735(0x1d9)],[constants_2[_0x5f0735(0x1d3)]+_0x5f0735(0x1c1)]:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2[_0x5f0735(0x1d3)]+_0x5f0735(0x1ee)]:this['_status'],[constants_2[_0x5f0735(0x1d3)]+'Succeed__c']:this[_0x5f0735(0x1c7)]===constants_1['LogStatus'][_0x5f0735(0x1e2)],[constants_2[_0x5f0735(0x1d3)]+_0x5f0735(0x1e3)]:this[_0x5f0735(0x1c7)]===constants_1[_0x5f0735(0x1c2)][_0x5f0735(0x1f0)]?null:new Date()[_0x5f0735(0x1cf)](),[constants_2[_0x5f0735(0x1d3)]+'Is_Error__c']:this[_0x5f0735(0x1c7)]===constants_1[_0x5f0735(0x1c2)][_0x5f0735(0x1db)],[constants_2[_0x5f0735(0x1d3)]+_0x5f0735(0x1d7)]:this[_0x5f0735(0x1c7)]!==constants_1['LogStatus'][_0x5f0735(0x1f0)]};}async[a330_0x23565d(0x1cc)](){const _0x591208=a330_0x23565d;this['createMetadataLog']();const _0x2b93d0=await this[_0x591208(0x1dc)](),_0x5819ec=_0x2b93d0['at'](0x0);if(_0x5819ec===null||_0x5819ec===void 0x0?void 0x0:_0x5819ec[_0x591208(0x1eb)])return this[_0x591208(0x1c6)]=_0x5819ec['id'],_0x5819ec['id'];else throw new Error(_0x591208(0x1c8)+(_0x5819ec===null||_0x5819ec===void 0x0?void 0x0:_0x5819ec[_0x591208(0x1e4)]));}async[a330_0x23565d(0x1e5)](){const _0x1c15b8=a330_0x23565d;this[_0x1c15b8(0x1c4)](),await this[_0x1c15b8(0x1dc)]()[_0x1c15b8(0x1e8)](_0x4d310d=>{const _0x2daecc=_0x1c15b8,_0x1a0c59=_0x4d310d['at'](0x0);if(_0x1a0c59===null||_0x1a0c59===void 0x0?void 0x0:_0x1a0c59[_0x2daecc(0x1e4)])throw new Error(_0x2daecc(0x1d6)+(_0x1a0c59===null||_0x1a0c59===void 0x0?void 0x0:_0x1a0c59[_0x2daecc(0x1e4)]));});}}function a330_0x40b8(_0x50237e,_0x5a2f41){const _0x5a99f8=a330_0x297f();return a330_0x40b8=function(_0x476dad,_0x53902a){_0x476dad=_0x476dad-0x1c0;let _0x297fc2=_0x5a99f8[_0x476dad];return _0x297fc2;},a330_0x40b8(_0x50237e,_0x5a2f41);}exports[a330_0x23565d(0x1cd)]=MetadataLogger;