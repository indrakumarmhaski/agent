function a271_0x4afd(){const _0xc584f5=['createDeleteRequest','isVlocityComponent','Component_History__c','../errors/salesforce.error','generateAsync','find','Component_Type__c','reference','createPatchRequest','Deletion_By_Agent__c','../../../../core','4385121lbtMwX','file','Zip','4206575LoTSPs','Source__c','Repository','componentId','files','369EyyrgU','FLOSUM_NAMESPACE','ParentId','get','type','Could\x20not\x20proceed\x20component\x20','Branch__c','__importDefault','FLOSUM_GIT_NAMESPACE','FLOSUM_COMMIT_MANIFEST','../../../../constants','createPostRequest','componentsToDelete','username','createZip','vlocityComponentName','CRC32__c','FLOSUM_COMPONENT_HISTORY','RecordTypeId','Vlocity_Component__c','extractFieldsFromRecord','.id}','marketingCloudKey','apply','2745248ukgNhc','componentType','Last_Updated_By__c','Body','SalesforceComponentsManager','base64','branchId','2rGHekH','5125152srmIQz','insert','body','Description','application/zip','gitSync','Version__c','File_Name__c','update','crc','version','Component_Name__c','(((.+)+)+)+$','prepareComponentHistoryRecord','prepareComponentAttachmentRecord','toISOString','typedi','Repository__c','../utils/flosum-naming.utils','prepareComponentRecord','repositoryId','proceededComponentsMeta','proceedComponentMeta','componentName','componentsToUpdate','map','Component__c','Name','5194707zBUyRT','Logger','Branch','toString','recordTypes','push','DEFLATE','../utils/composite.utils','160760jElLUT','__esModule','name','prepareCommitManifest','FLOSUM_COMPONENT','request','45817IRbFkh','SalesforceError','./salesforce-git-sync.service','Last_Modified_By__c','FLOSUM_ATTACHMENT'];a271_0x4afd=function(){return _0xc584f5;};return a271_0x4afd();}const a271_0x563fcc=a271_0x12da;function a271_0x12da(_0x405c4e,_0x486c78){const _0x42de64=a271_0x4afd();return a271_0x12da=function(_0xfc0ef3,_0x5c2efc){_0xfc0ef3=_0xfc0ef3-0x1b6;let _0x4afdcc=_0x42de64[_0xfc0ef3];return _0x4afdcc;},a271_0x12da(_0x405c4e,_0x486c78);}(function(_0x596f27,_0x4aa321){const _0x5833c4=a271_0x12da,_0x4b90c2=_0x596f27();while(!![]){try{const _0x4af8e6=parseInt(_0x5833c4(0x1e0))/0x1*(-parseInt(_0x5833c4(0x217))/0x2)+-parseInt(_0x5833c4(0x1f0))/0x3+parseInt(_0x5833c4(0x210))/0x4+parseInt(_0x5833c4(0x1f3))/0x5+parseInt(_0x5833c4(0x1b6))/0x6+parseInt(_0x5833c4(0x1d2))/0x7+parseInt(_0x5833c4(0x1da))/0x8*(-parseInt(_0x5833c4(0x1f8))/0x9);if(_0x4af8e6===_0x4aa321)break;else _0x4b90c2['push'](_0x4b90c2['shift']());}catch(_0x187cce){_0x4b90c2['push'](_0x4b90c2['shift']());}}}(a271_0x4afd,0xc17b5));const a271_0x5c2efc=(function(){let _0x12aba1=!![];return function(_0x592d7b,_0x53d0ad){const _0x48900b=_0x12aba1?function(){const _0x4ff338=a271_0x12da;if(_0x53d0ad){const _0x6310b5=_0x53d0ad[_0x4ff338(0x20f)](_0x592d7b,arguments);return _0x53d0ad=null,_0x6310b5;}}:function(){};return _0x12aba1=![],_0x48900b;};}()),a271_0xfc0ef3=a271_0x5c2efc(this,function(){const _0x3848b2=a271_0x12da;return a271_0xfc0ef3[_0x3848b2(0x1d5)]()['search'](_0x3848b2(0x1c2))[_0x3848b2(0x1d5)]()['constructor'](a271_0xfc0ef3)['search'](_0x3848b2(0x1c2));});a271_0xfc0ef3();'use strict';var __importDefault=this&&this[a271_0x563fcc(0x1ff)]||function(_0x505569){const _0x2619f1=a271_0x563fcc;return _0x505569&&_0x505569[_0x2619f1(0x1db)]?_0x505569:{'default':_0x505569};};Object['defineProperty'](exports,a271_0x563fcc(0x1db),{'value':!![]}),exports['SalesforceComponentsManager']=void 0x0;const constants_1=require(a271_0x563fcc(0x202)),core_1=require(a271_0x563fcc(0x1ef)),zip_1=require('../../parsers/utils/zip'),typedi_1=__importDefault(require(a271_0x563fcc(0x1c6))),salesforce_error_1=require(a271_0x563fcc(0x1e8)),composite_utils_1=require(a271_0x563fcc(0x1d9)),flosum_naming_utils_1=require(a271_0x563fcc(0x1c8)),salesforce_git_sync_service_1=require(a271_0x563fcc(0x1e2));class SalesforceComponentsManager{constructor(_0x5dd5b5,_0x33ccde,_0x400fec,_0x1328e3,_0x3e7a97){const _0x4337a7=a271_0x563fcc;this[_0x4337a7(0x1ca)]=_0x5dd5b5,this[_0x4337a7(0x216)]=_0x33ccde,this[_0x4337a7(0x205)]=_0x400fec,this[_0x4337a7(0x1d6)]=_0x1328e3,this[_0x4337a7(0x1cb)]=_0x3e7a97,this['logger']=new core_1[(_0x4337a7(0x1d3))](SalesforceComponentsManager['name']),this[_0x4337a7(0x1bb)]=typedi_1['default'][_0x4337a7(0x1fb)](salesforce_git_sync_service_1['SalesforceGitSyncService']);}['proceedComponentMeta'](_0x3ce335,_0x6b00db){const _0x34ea15=a271_0x563fcc,_0x392be1=(0x0,flosum_naming_utils_1[_0x34ea15(0x20c)])(_0x3ce335,[_0x34ea15(0x1eb),_0x34ea15(0x1c1),_0x34ea15(0x1bc)]);this[_0x34ea15(0x1cb)][_0x34ea15(0x1d7)]({'componentId':'','reference':_0x6b00db,'version':_0x392be1[_0x34ea15(0x1bc)],'componentName':_0x392be1[_0x34ea15(0x1c1)],'componentType':_0x392be1[_0x34ea15(0x1eb)]});}['prepareCommitManifest'](_0x46ca09,_0xdb9fc0){const _0x4de51d=a271_0x563fcc,{request:_0x4ace6d}=(0x0,composite_utils_1[_0x4de51d(0x203)])(constants_1[_0x4de51d(0x201)],{[constants_1[_0x4de51d(0x1f9)]+'Commit__c']:_0x46ca09,[constants_1[_0x4de51d(0x1f9)]+_0x4de51d(0x1e7)]:_0xdb9fc0});return _0x4ace6d;}async[a271_0x563fcc(0x1c4)](_0x455c2f,_0x3f56bd){const _0x5957e9=a271_0x563fcc,_0x2e3b39={},_0x469546=zip_1[_0x5957e9(0x1f2)][_0x5957e9(0x206)]();for(const _0x1944b2 of Object['keys'](_0x455c2f[_0x5957e9(0x1f7)])){_0x469546[_0x5957e9(0x1f1)](_0x1944b2,_0x455c2f['files'][_0x1944b2],{'createFolders':!![]});}return _0x2e3b39['ContentType']=_0x5957e9(0x1ba),_0x2e3b39[_0x5957e9(0x1d1)]=_0x455c2f[_0x5957e9(0x1fc)],_0x2e3b39[_0x5957e9(0x1b9)]=_0x455c2f[_0x5957e9(0x1fc)],_0x2e3b39[_0x5957e9(0x1fa)]=_0x3f56bd,_0x2e3b39[_0x5957e9(0x213)]=await _0x469546[_0x5957e9(0x1e9)]({'type':_0x5957e9(0x215),'compression':_0x5957e9(0x1d8),'compressionOptions':{'level':0x6}}),_0x2e3b39;}['prepareComponentHistoryRecord'](_0x2f936f,_0x209a7f,_0x53c13f){const _0x410332=a271_0x563fcc,_0x5a52d5=new Date()['toISOString'](),_0x56a881={};return _0x56a881[constants_1[_0x410332(0x1f9)]+_0x410332(0x1d0)]=_0x209a7f,_0x56a881[constants_1[_0x410332(0x1f9)]+_0x410332(0x208)]=_0x2f936f[_0x410332(0x1bf)],_0x56a881[constants_1[_0x410332(0x1f9)]+'Changed_On__c']=_0x5a52d5,_0x56a881[constants_1[_0x410332(0x1f9)]+'Changed_By__c']=this['username'],_0x56a881[constants_1[_0x410332(0x1f9)]+_0x410332(0x1bc)]=_0x53c13f?_0x53c13f+0x1:0x1,_0x56a881[constants_1[_0x410332(0x200)]+'Is_From_Agent__c']=!![],_0x56a881;}[a271_0x563fcc(0x1c9)](_0x506ac4,_0x593bb2){const _0x31bad9=a271_0x563fcc;var _0x548d15,_0x257311;const _0x5b74dd=new Date()[_0x31bad9(0x1c5)](),_0x141240={};return!_0x593bb2?(this['branchId']?(_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1fe)]=this[_0x31bad9(0x216)],_0x141240[constants_1[_0x31bad9(0x1f9)]+'Source__c']=_0x31bad9(0x1d4),_0x141240[_0x31bad9(0x20a)]=(_0x548d15=this['recordTypes'][_0x31bad9(0x1ea)](_0xbef969=>_0xbef969[_0x31bad9(0x1dc)]==='Branch'))===null||_0x548d15===void 0x0?void 0x0:_0x548d15['id']):(_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1c7)]=this[_0x31bad9(0x1ca)],_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1f4)]=_0x31bad9(0x1f5),_0x141240[_0x31bad9(0x20a)]=(_0x257311=this[_0x31bad9(0x1d6)][_0x31bad9(0x1ea)](_0x12a123=>_0x12a123['name']==='Repository'))===null||_0x257311===void 0x0?void 0x0:_0x257311['id']),_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1bc)]=0x1):_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1bc)]=_0x593bb2[_0x31bad9(0x1c0)]+0x1,_0x141240[constants_1['FLOSUM_NAMESPACE']+'Component_Type__c']=_0x506ac4[_0x31bad9(0x1fc)],_0x141240[constants_1[_0x31bad9(0x1f9)]+'Component_Name__c']=_0x506ac4[_0x31bad9(0x1dc)],_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x1bd)]=_0x506ac4['filePath'],_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x212)]=this[_0x31bad9(0x205)],_0x141240[constants_1['FLOSUM_NAMESPACE']+_0x31bad9(0x1e3)]=this[_0x31bad9(0x205)],_0x141240[constants_1[_0x31bad9(0x1f9)]+'Last_Modified_Date__c']=_0x5b74dd,_0x141240[constants_1[_0x31bad9(0x1f9)]+'Committed_On__c']=_0x5b74dd,_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x208)]=_0x506ac4[_0x31bad9(0x1bf)],_0x141240[constants_1['FLOSUM_NAMESPACE']+'Vlocity_Component_Name__c']=_0x506ac4[_0x31bad9(0x207)],_0x141240[constants_1[_0x31bad9(0x1f9)]+_0x31bad9(0x20b)]=_0x506ac4[_0x31bad9(0x1e6)],_0x141240[constants_1[_0x31bad9(0x1f9)]+'MC_Key__c']=_0x506ac4[_0x31bad9(0x20e)],_0x141240;}['getProceededComponentsMeta'](){const _0x587ee3=a271_0x563fcc;return this[_0x587ee3(0x1cb)];}async[a271_0x563fcc(0x1b7)](_0x23dab1,_0x2e1d47){const _0x10984a=a271_0x563fcc,_0xc7d72f=[];for(const _0x1bdfb4 of _0x23dab1){const _0xd53e5d=(0x0,composite_utils_1[_0x10984a(0x203)])(constants_1[_0x10984a(0x1de)],this[_0x10984a(0x1c9)](_0x1bdfb4)),_0x4477e0=(0x0,composite_utils_1[_0x10984a(0x203)])(constants_1[_0x10984a(0x209)],this['prepareComponentHistoryRecord'](_0x1bdfb4,'@{'+_0xd53e5d[_0x10984a(0x1ec)]+_0x10984a(0x20d))),_0x277ed8=(0x0,composite_utils_1[_0x10984a(0x203)])(constants_1[_0x10984a(0x1e4)],await this['prepareComponentAttachmentRecord'](_0x1bdfb4,'@{'+_0x4477e0['reference']+_0x10984a(0x20d)));this[_0x10984a(0x1cc)](_0xd53e5d[_0x10984a(0x1df)][_0x10984a(0x1b8)],_0xd53e5d['reference']),_0xc7d72f[_0x10984a(0x1d7)](_0xd53e5d[_0x10984a(0x1df)],_0x4477e0[_0x10984a(0x1df)],_0x277ed8[_0x10984a(0x1df)]),_0x2e1d47&&_0xc7d72f[_0x10984a(0x1d7)](this[_0x10984a(0x1dd)](_0x2e1d47,'@{'+_0x4477e0[_0x10984a(0x1ec)]+_0x10984a(0x20d)));}return _0xc7d72f;}async[a271_0x563fcc(0x1be)](_0x13313c,_0x6c92ae=''){const _0x2fc58a=a271_0x563fcc,_0x82760b=[];for(const {component:_0x384955,meta:_0x21451f}of _0x13313c){if(!_0x21451f['id']){const _0x3ec9a0=this[_0x2fc58a(0x1cb)][_0x2fc58a(0x1ea)](_0x1dd28a=>_0x1dd28a[_0x2fc58a(0x1cd)]===_0x384955['name']&&_0x1dd28a[_0x2fc58a(0x211)]===_0x384955['type']);if(!_0x3ec9a0)throw new salesforce_error_1[(_0x2fc58a(0x1e1))](new Error(_0x2fc58a(0x1fd)+_0x384955[_0x2fc58a(0x1dc)]+'\x20['+_0x384955[_0x2fc58a(0x1fc)]+']\x20-\x20meta\x20not\x20found'));_0x21451f['id']=_0x3ec9a0[_0x2fc58a(0x1f6)];}const _0x23a6f=(0x0,composite_utils_1[_0x2fc58a(0x1ed)])(constants_1[_0x2fc58a(0x1de)],_0x21451f['id'],this[_0x2fc58a(0x1c9)](_0x384955,_0x21451f)),_0x12e109=(0x0,composite_utils_1[_0x2fc58a(0x203)])(constants_1[_0x2fc58a(0x209)],this[_0x2fc58a(0x1c3)](_0x384955,_0x21451f['id'],_0x21451f['version'])),_0x13743b=(0x0,composite_utils_1[_0x2fc58a(0x203)])(constants_1[_0x2fc58a(0x1e4)],await this['prepareComponentAttachmentRecord'](_0x384955,'@{'+_0x12e109[_0x2fc58a(0x1ec)]+'.id}'));this[_0x2fc58a(0x1cc)](_0x23a6f[_0x2fc58a(0x1df)][_0x2fc58a(0x1b8)],_0x23a6f['reference']),_0x82760b[_0x2fc58a(0x1d7)](_0x23a6f[_0x2fc58a(0x1df)],_0x12e109[_0x2fc58a(0x1df)],_0x13743b[_0x2fc58a(0x1df)]),_0x6c92ae&&_0x82760b[_0x2fc58a(0x1d7)](this['prepareCommitManifest'](_0x6c92ae,'@{'+_0x12e109['reference']+_0x2fc58a(0x20d)));}return _0x82760b;}async['delete'](_0x57de49,_0x41a36b=![]){const _0xc80af2=a271_0x563fcc,_0x20ad24={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x346978=[];for(const _0x2efc52 of _0x57de49){if(_0x2efc52['id'])_0x346978[_0xc80af2(0x1d7)](_0x2efc52['id']);else{const _0x27dc3b=this[_0xc80af2(0x1cb)][_0xc80af2(0x1ea)](_0x2f95e0=>_0x2f95e0[_0xc80af2(0x1cd)]===_0x2efc52[_0xc80af2(0x1dc)]&&_0x2f95e0[_0xc80af2(0x211)]===_0x2efc52[_0xc80af2(0x1fc)]);if(!_0x27dc3b||!_0x27dc3b[_0xc80af2(0x1f6)])continue;_0x346978[_0xc80af2(0x1d7)](_0x27dc3b['componentId']);}}if(_0x41a36b){const _0x3e01cb=await this[_0xc80af2(0x1bb)]['fetchCommitManifestsByComponentIds'](_0x346978);_0x20ad24['manifests']=_0x3e01cb[_0xc80af2(0x1cf)](_0x5875d2=>(0x0,composite_utils_1[_0xc80af2(0x1e5)])(constants_1[_0xc80af2(0x201)],_0x5875d2)[_0xc80af2(0x1df)]);}return _0x20ad24[_0xc80af2(0x1ce)]=_0x346978[_0xc80af2(0x1cf)](_0x369ec2=>(0x0,composite_utils_1[_0xc80af2(0x1ed)])(constants_1[_0xc80af2(0x1de)],_0x369ec2,{[constants_1[_0xc80af2(0x200)]+_0xc80af2(0x1ee)]:!![]})[_0xc80af2(0x1df)]),_0x20ad24[_0xc80af2(0x204)]=_0x346978[_0xc80af2(0x1cf)](_0x1fd992=>(0x0,composite_utils_1[_0xc80af2(0x1e5)])(constants_1['FLOSUM_COMPONENT'],_0x1fd992)[_0xc80af2(0x1df)]),_0x20ad24;}}exports[a271_0x563fcc(0x214)]=SalesforceComponentsManager;