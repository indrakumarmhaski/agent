const a390_0x479dfb=a390_0x4a6e;(function(_0x4e27fb,_0x3939d5){const _0x4ea884=a390_0x4a6e,_0x50455c=_0x4e27fb();while(!![]){try{const _0x41f9ee=-parseInt(_0x4ea884(0x1ad))/0x1+-parseInt(_0x4ea884(0x1e6))/0x2+parseInt(_0x4ea884(0x1bf))/0x3+-parseInt(_0x4ea884(0x1be))/0x4+parseInt(_0x4ea884(0x1f1))/0x5*(parseInt(_0x4ea884(0x1e1))/0x6)+parseInt(_0x4ea884(0x1c9))/0x7*(-parseInt(_0x4ea884(0x203))/0x8)+-parseInt(_0x4ea884(0x1e7))/0x9*(-parseInt(_0x4ea884(0x1b1))/0xa);if(_0x41f9ee===_0x3939d5)break;else _0x50455c['push'](_0x50455c['shift']());}catch(_0x3797d5){_0x50455c['push'](_0x50455c['shift']());}}}(a390_0xb7d6,0x3e917));const a390_0x39dfba=(function(){let _0x5863c6=!![];return function(_0x494ee2,_0x509db0){const _0x4d9a51=_0x5863c6?function(){const _0xcab4ad=a390_0x4a6e;if(_0x509db0){const _0x5db74e=_0x509db0[_0xcab4ad(0x1d7)](_0x494ee2,arguments);return _0x509db0=null,_0x5db74e;}}:function(){};return _0x5863c6=![],_0x4d9a51;};}()),a390_0x269b85=a390_0x39dfba(this,function(){const _0x3c73fa=a390_0x4a6e;return a390_0x269b85[_0x3c73fa(0x1ed)]()[_0x3c73fa(0x189)](_0x3c73fa(0x1b6))['toString']()[_0x3c73fa(0x180)](a390_0x269b85)[_0x3c73fa(0x189)](_0x3c73fa(0x1b6));});a390_0x269b85();function a390_0xb7d6(){const _0x2d2eb5=['_systemLogger','createVpk','Form\x20Deployment\x20Results','Is_Error__c','saveDeploymentResults','_branchId','retrieve','Veeva\x20Deployment','7oGNiRB','fs/promises','Status__c','Component_Type__c','_componentIdList','_connectionVeeva','reduce','status','finishDeployWithError','insertMultipleRecords','post','Cannot\x20retrieve\x20all\x20components.','SalesforceService','_organisationId','apply','_attachmentLogId','../../../constants','Retrieving\x20components','Save\x20Deployment\x20Results','createZip','saveLog','Save\x20Backup\x20to\x20Salesforce','_instanceUrl','values','8802zmZXUz','PackageExportService','\x20has\x20been\x20created.','logError','/Attachment','996928COejAw','171edBMyS','MetadataLogStatus','text/plain','flat','base64','Success','toString','Log__c','Activity_Type__c','</a>','1635BkPhHe','_veevaService','shortid','Save\x20log','error','formFlosumDeploymentResults','generate','_vpkService','componentHistoryId','BranchComponentHistoryFlosumComponentRetriever','updateLog','FlosumComponentVeevaComponentRetriever','ZipCreatorDeploy','name','./package-import.service','execute','/vpk__','../constants/flosum.constants','3847808eEKAdr','../../shared/utils/fetch-attachments','Metadata_Log__c','map','successfully','Create\x20vpk\x20package','length','TargetId__c','_deploymentName','PackageImportService','__importDefault','get','packageComponentList','_metadataLogId','organisationId','getFlosumComponents','default','Date__c','FLOSUM_NAMESPACE','constructor','External_Deployment_Id__c','Activity_Item__c','stepName','Action__c','DeployService','FlosumConstants','timeZone','retrieveAttachments','search','createBackup','./salesforce.service','catch','.zip','./veeva.service','Cannot\x20Backup\x20more\x20than\x20200\x20components.','Retrieving\x20attachments','\x20of\x20branch\x20to\x20Organization\x20','ENDPOINT_UPSERT_RECORD','EXCEPTION','_connectionSalesforce','\x20</a>','Join\x20all\x20mdl\x20into\x20one\x20zip','Branch__c','../classes/deploy/zip-creator.deploy','Deployment\x20Result','DEPLOYED','toLowerCase','<a\x20href=','Job_Completed__c','_tempFolder','finishDeploy','Succeed__c','_packageExportService','organisationName','../classes/retrievers/veeva-components/flosum-component.veeva-component.retriever','success','writeFile','_salesforceService','branchId','packageId','generateAsync','Branch','type','_packageImportService','9841MKsRoW','validate','__esModule','log','658220pSZfeg','./package-export.service','VeevaService','Deployment_Result__c','\x20>\x20','(((.+)+)+)+$','_organisationName','import','Logger','saveBackup','_logger','\x20:\x20','SalesforceDmlError','2021516ucDOkk','61836xTkaaB','filter'];a390_0xb7d6=function(){return _0x2d2eb5;};return a390_0xb7d6();}'use strict';var __importDefault=this&&this[a390_0x479dfb(0x20d)]||function(_0x51c40f){const _0x21ab87=a390_0x479dfb;return _0x51c40f&&_0x51c40f[_0x21ab87(0x1af)]?_0x51c40f:{'default':_0x51c40f};};Object['defineProperty'](exports,a390_0x479dfb(0x1af),{'value':!![]}),exports[a390_0x479dfb(0x185)]=void 0x0;const jszip_1=__importDefault(require('jszip')),promises_1=require(a390_0x479dfb(0x1ca)),constants_1=require(a390_0x479dfb(0x1d9)),flosum_constants_1=require(a390_0x479dfb(0x202)),veeva_service_1=require(a390_0x479dfb(0x18e)),salesforce_service_1=require(a390_0x479dfb(0x18b)),core_1=require('../../../core'),status_enums_1=require('../enums/status.enums'),salesforce_dml_error_1=require('../classes/errors/salesforce-dml-error'),shortid_1=__importDefault(require(a390_0x479dfb(0x1f3))),fetch_attachments_1=require(a390_0x479dfb(0x204)),package_import_service_1=require(a390_0x479dfb(0x1ff)),branch_component_history_flosum_component_retriever_1=require('../classes/retrievers/flosum-components/branch-component-history.flosum-component.retriever'),flosum_component_veeva_component_retriever_1=require(a390_0x479dfb(0x1a3)),package_export_service_1=require(a390_0x479dfb(0x1b2)),vpk_service_1=require('./vpk.service'),zip_creator_deploy_1=require(a390_0x479dfb(0x198));class DeployService{constructor(_0xb4724c,_0x26c7b8,_0x71378c,_0x743e65,_0x33cc78,_0x43f057){const _0x3bb119=a390_0x479dfb;this[_0x3bb119(0x194)]=_0x26c7b8,this['_connectionVeeva']=_0x71378c,this['_logger']=_0x743e65,this[_0x3bb119(0x19e)]=_0x33cc78,this['_instanceUrl']=_0x43f057,this[_0x3bb119(0x1c6)]=_0xb4724c[_0x3bb119(0x1a7)],this['_metadataLogId']=_0xb4724c['metadataLogId'],this[_0x3bb119(0x1d8)]=_0xb4724c['attachmentLogId'],this[_0x3bb119(0x1d6)]=_0xb4724c[_0x3bb119(0x17b)],this['_timeZone']=_0xb4724c[_0x3bb119(0x187)],this['_organisationName']=_0xb4724c[_0x3bb119(0x1a2)],this['_componentIdList']=_0xb4724c['componentIdList'],this[_0x3bb119(0x20b)]=_0xb4724c['deploymentName'],this['_systemLogger']=new core_1[(_0x3bb119(0x1b9))]('veeva-deploy'),this[_0x3bb119(0x1f2)]=new veeva_service_1[(_0x3bb119(0x1b3))]({'connection':this[_0x3bb119(0x1ce)],'logger':this[_0x3bb119(0x1bb)]}),this[_0x3bb119(0x1a6)]=new salesforce_service_1[(_0x3bb119(0x1d5))]({'connection':this[_0x3bb119(0x194)]}),this[_0x3bb119(0x1ac)]=new package_import_service_1[(_0x3bb119(0x20c))]({'veevaService':this['_veevaService'],'connection':this[_0x3bb119(0x1ce)],'logger':this['_logger'],'saveLog':this[_0x3bb119(0x1dd)]['bind'](this)}),this[_0x3bb119(0x1a1)]=new package_export_service_1[(_0x3bb119(0x1e2))]({'veevaService':this[_0x3bb119(0x1f2)],'connection':this[_0x3bb119(0x1ce)],'logger':this[_0x3bb119(0x1bb)]}),this[_0x3bb119(0x1f8)]=new vpk_service_1['VpkService']({'connection':this[_0x3bb119(0x1ce)]});}async[a390_0x479dfb(0x200)](){const _0x473e0f=a390_0x479dfb;try{const _0x48f1e5=await this[_0x473e0f(0x17c)]();await this['_logger']['updateLog']();const _0x17ffe1=await this[_0x473e0f(0x18a)](_0x48f1e5);await this[_0x473e0f(0x1ba)](_0x17ffe1);const _0x2c30b6=await this[_0x473e0f(0x188)](_0x48f1e5),_0x242c48=await this[_0x473e0f(0x1dc)](_0x2c30b6),_0x2838c6=await this[_0x473e0f(0x1c2)](_0x242c48);await this['_logger'][_0x473e0f(0x1fb)]();const _0x39aeb7=await this[_0x473e0f(0x1ac)][_0x473e0f(0x1b8)](_0x2838c6);await this[_0x473e0f(0x1bb)]['updateLog']();const _0x6ce6ce=this[_0x473e0f(0x1f6)](_0x48f1e5,_0x39aeb7[_0x473e0f(0x20f)]);await this[_0x473e0f(0x1c5)](_0x6ce6ce),await this[_0x473e0f(0x19f)](_0x39aeb7['isDeployed'],![],_0x39aeb7[_0x473e0f(0x1a8)]);}catch(_0x511932){await this[_0x473e0f(0x1d1)](_0x511932)[_0x473e0f(0x18c)](_0x19661f=>this[_0x473e0f(0x1c1)][_0x473e0f(0x1f5)](_0x19661f));}}async[a390_0x479dfb(0x17c)](){const _0x4c8b15=a390_0x479dfb,_0x4de97f=new Set(this[_0x4c8b15(0x1cd)]);this[_0x4c8b15(0x1bb)][_0x4c8b15(0x1b0)](_0x4c8b15(0x1da));const _0x307966=await new branch_component_history_flosum_component_retriever_1[(_0x4c8b15(0x1fa))]({'value':this[_0x4c8b15(0x1c6)],'salesforceService':this['_salesforceService']})[_0x4c8b15(0x1c7)](),_0x2e70bf=_0x307966['filter'](_0x537244=>_0x4de97f['has'](_0x537244['id']));if(_0x2e70bf[_0x4c8b15(0x209)]!==this['_componentIdList'][_0x4c8b15(0x209)])throw new Error(_0x4c8b15(0x1d4));return _0x2e70bf;}async[a390_0x479dfb(0x18a)](_0x2ed377){const _0x5a87d1=a390_0x479dfb;var _0x11029d;this[_0x5a87d1(0x1bb)][_0x5a87d1(0x1b0)]('Create\x20Backup');const _0x22c8c8=await new flosum_component_veeva_component_retriever_1[(_0x5a87d1(0x1fc))]({'value':_0x2ed377,'veevaService':this[_0x5a87d1(0x1f2)],'logger':this[_0x5a87d1(0x1bb)]})[_0x5a87d1(0x1c7)](),_0x358478=await this[_0x5a87d1(0x1a1)]['export'](_0x22c8c8,'Backup');if(_0x358478[_0x5a87d1(0x209)]>0x1)throw new Error(_0x5a87d1(0x18f));return(_0x11029d=_0x358478[0x0])!==null&&_0x11029d!==void 0x0?_0x11029d:_0x358478[0x0]=new jszip_1['default'](),_0x358478[0x0][_0x5a87d1(0x1a9)]({'type':_0x5a87d1(0x1eb)});}async[a390_0x479dfb(0x1ba)](_0x4f84da){const _0x23c52b=a390_0x479dfb;this[_0x23c52b(0x1bb)][_0x23c52b(0x1b0)](_0x23c52b(0x1de));const _0x374337={'Body':_0x4f84da,'ContentType':'application/zip','ParentId':this[_0x23c52b(0x17a)],'Name':flosum_constants_1[_0x23c52b(0x186)]['BACKUP_ZIP_NAME']};await this[_0x23c52b(0x194)][_0x23c52b(0x1d3)](flosum_constants_1[_0x23c52b(0x186)][_0x23c52b(0x192)]+_0x23c52b(0x1e5),_0x374337);}async['retrieveAttachments'](_0x353c2c){const _0x26f64c=a390_0x479dfb;this['_logger'][_0x26f64c(0x1b0)](_0x26f64c(0x190));const _0x5326cd=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsByParentId'])(this['_connectionSalesforce'],_0x353c2c[_0x26f64c(0x206)](_0x254966=>_0x254966['componentHistoryId'])),_0x3303d2=await(0x0,fetch_attachments_1[_0x26f64c(0x188)])(_0x5326cd,this[_0x26f64c(0x194)]);if(_0x3303d2[_0x26f64c(0x209)]!==this[_0x26f64c(0x1cd)][_0x26f64c(0x209)])throw new Error('Cannot\x20retrievers\x20all\x20attachments');return _0x3303d2[_0x26f64c(0x206)](_0x2283fa=>_0x2283fa[_0x26f64c(0x1e0)]['Body']);}async['createZip'](_0x5e5f2f){const _0x320bb4=a390_0x479dfb;this[_0x320bb4(0x1bb)]['log'](_0x320bb4(0x196));const _0x4a6454=await new zip_creator_deploy_1[(_0x320bb4(0x1fd))]({'attachmentBodies':_0x5e5f2f,'deploymentName':this['_deploymentName']})[_0x320bb4(0x200)](),_0x4e3c10=this[_0x320bb4(0x19e)]+'/'+(0x0,shortid_1[_0x320bb4(0x17d)])()+_0x320bb4(0x18d);return await(0x0,promises_1[_0x320bb4(0x1a5)])(_0x4e3c10,_0x4a6454),_0x4e3c10;}async[a390_0x479dfb(0x1c2)](_0x2c03a1){const _0x146b7f=a390_0x479dfb;this[_0x146b7f(0x1bb)][_0x146b7f(0x1b0)](_0x146b7f(0x208));const _0x346c44=await this[_0x146b7f(0x1f8)][_0x146b7f(0x1f7)](_0x2c03a1),_0x15f20d=this['_tempFolder']+_0x146b7f(0x201)+_0x2c03a1['slice'](_0x2c03a1['lastIndexOf']('/')+0x1);return await(0x0,promises_1[_0x146b7f(0x1a5)])(_0x15f20d,_0x346c44),await this['_vpkService'][_0x146b7f(0x1ae)](_0x15f20d),_0x15f20d;}async[a390_0x479dfb(0x1dd)](_0x2a7ed1,_0x1119f5){const _0x449d88=a390_0x479dfb;this[_0x449d88(0x1bb)][_0x449d88(0x1b0)](_0x449d88(0x1f4));const _0x40f853={'Body':Buffer['from'](_0x2a7ed1)[_0x449d88(0x1ed)](_0x449d88(0x1eb)),'ContentType':_0x449d88(0x1e9),'ParentId':this[_0x449d88(0x17a)],'Name':_0x1119f5};await this[_0x449d88(0x194)][_0x449d88(0x1d3)](flosum_constants_1[_0x449d88(0x186)][_0x449d88(0x192)]+_0x449d88(0x1e5),_0x40f853);}['formFlosumDeploymentResults'](_0x1c019d,_0x54e273){const _0x3e3971=a390_0x479dfb;this[_0x3e3971(0x1bb)][_0x3e3971(0x1b0)](_0x3e3971(0x1c3));const _0x3fe073=_0x1c019d[_0x3e3971(0x1cf)]((_0x1788b7,_0x307a51)=>_0x1788b7['set']((_0x307a51['componentType']+'.'+_0x307a51['componentName'])[_0x3e3971(0x19b)](),_0x307a51),new Map());return _0x54e273[_0x3e3971(0x206)](_0x5332f9=>{const _0x1a1e9b=_0x3e3971;this[_0x1a1e9b(0x1bb)]['log'](_0x5332f9[_0x1a1e9b(0x1ab)]+'.'+_0x5332f9['name']+_0x1a1e9b(0x1bc)+_0x5332f9[_0x1a1e9b(0x1d0)]);const _0x5cb304=(_0x5332f9[_0x1a1e9b(0x1ab)]+'.'+_0x5332f9[_0x1a1e9b(0x1fe)])['toLowerCase'](),_0x46ca4d=_0x3fe073[_0x1a1e9b(0x20e)](_0x5cb304);return{[constants_1['FLOSUM_NAMESPACE']+'Type__c']:_0x1a1e9b(0x199),[constants_1[_0x1a1e9b(0x17f)]+'Status__c']:_0x5332f9[_0x1a1e9b(0x1d0)]===status_enums_1['PackageComponentStatus'][_0x1a1e9b(0x19a)]?_0x1a1e9b(0x1ec):'Failure',[constants_1['FLOSUM_NAMESPACE']+'Result__c']:_0x5332f9['deploymentAction'],[constants_1[_0x1a1e9b(0x17f)]+'Component_Name__c']:_0x5332f9[_0x1a1e9b(0x1fe)],[constants_1[_0x1a1e9b(0x17f)]+_0x1a1e9b(0x1cc)]:_0x5332f9[_0x1a1e9b(0x1ab)],[constants_1[_0x1a1e9b(0x17f)]+'Veeva_Step_Name__c']:_0x5332f9[_0x1a1e9b(0x183)],[constants_1[_0x1a1e9b(0x17f)]+'Org__c']:this[_0x1a1e9b(0x1d6)],[constants_1[_0x1a1e9b(0x17f)]+_0x1a1e9b(0x205)]:this[_0x1a1e9b(0x17a)],[constants_1['FLOSUM_NAMESPACE']+'Component_History__c']:_0x46ca4d[_0x1a1e9b(0x1f9)]};});}async[a390_0x479dfb(0x1c5)](_0x181389){const _0x39e631=a390_0x479dfb;this['_logger'][_0x39e631(0x1b0)](_0x39e631(0x1db));const _0x1af99d=await this[_0x39e631(0x1a6)][_0x39e631(0x1d2)](constants_1[_0x39e631(0x17f)]+_0x39e631(0x1b4),_0x181389),_0x20f2e0=_0x1af99d[_0x39e631(0x1c0)](_0x2c602e=>!_0x2c602e[_0x39e631(0x1a4)])[_0x39e631(0x206)](_0x22d7fe=>_0x22d7fe['errors'])[_0x39e631(0x1ea)]();if(_0x20f2e0[_0x39e631(0x209)])throw new salesforce_dml_error_1[(_0x39e631(0x1bd))](_0x20f2e0);}async[a390_0x479dfb(0x1d1)](_0x2ef96e){const _0x3f9281=a390_0x479dfb;this[_0x3f9281(0x1bb)][_0x3f9281(0x1e4)](_0x2ef96e),await this[_0x3f9281(0x1bb)][_0x3f9281(0x1fb)](),await this['finishDeploy'](![],!![],'');}async[a390_0x479dfb(0x19f)](_0x2feedc,_0x3ba0dc,_0x5e4847){const _0x4d45e1=a390_0x479dfb,_0x172e64='<a\x20href='+this[_0x4d45e1(0x1df)]+'/'+this[_0x4d45e1(0x17a)]+_0x4d45e1(0x1b5)+_0x4d45e1(0x1c8)+_0x4d45e1(0x195),_0x56e8ad=_0x4d45e1(0x19c)+this[_0x4d45e1(0x1df)]+'/'+this['_organisationId']+'\x20>'+this[_0x4d45e1(0x1b7)]+_0x4d45e1(0x1f0),_0x5cac31=_0x172e64+_0x4d45e1(0x191)+_0x56e8ad+_0x4d45e1(0x1e3),_0x4d7251={[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x184)]:_0x5cac31,[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x17e)]:new Date(),[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x197)]:this[_0x4d45e1(0x1c6)],[constants_1['FLOSUM_NAMESPACE']+_0x4d45e1(0x182)]:_0x4d45e1(0x1aa),[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x1ef)]:'Deployment',[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x20a)]:this[_0x4d45e1(0x1d6)]},_0x36e7c8={[constants_1['FLOSUM_NAMESPACE']+_0x4d45e1(0x1c4)]:!_0x2feedc,[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x1a0)]:_0x2feedc,[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x1cb)]:_0x3ba0dc?status_enums_1[_0x4d45e1(0x1e8)][_0x4d45e1(0x193)]:status_enums_1['MetadataLogStatus']['COMPLETED'],[constants_1['FLOSUM_NAMESPACE']+_0x4d45e1(0x19d)]:!![],[constants_1[_0x4d45e1(0x17f)]+_0x4d45e1(0x181)]:_0x5e4847};await this[_0x4d45e1(0x194)]['patch'](flosum_constants_1['FlosumConstants'][_0x4d45e1(0x192)]+'/'+constants_1[_0x4d45e1(0x17f)]+'Metadata_Log__c/'+this[_0x4d45e1(0x17a)],_0x36e7c8),await this['_connectionSalesforce']['post'](flosum_constants_1['FlosumConstants'][_0x4d45e1(0x192)]+'/'+constants_1['FLOSUM_NAMESPACE']+_0x4d45e1(0x1ee),_0x4d7251),this[_0x4d45e1(0x1bb)][_0x4d45e1(0x1b0)]('Deploy\x20completed\x20'+(_0x2feedc?_0x4d45e1(0x207):'with\x20error')+'.'),await this[_0x4d45e1(0x1bb)][_0x4d45e1(0x1fb)]();}}function a390_0x4a6e(_0x2c037a,_0xbee5c3){const _0x7c22a2=a390_0xb7d6();return a390_0x4a6e=function(_0x269b85,_0x39dfba){_0x269b85=_0x269b85-0x17a;let _0xb7d61e=_0x7c22a2[_0x269b85];return _0xb7d61e;},a390_0x4a6e(_0x2c037a,_0xbee5c3);}exports[a390_0x479dfb(0x185)]=DeployService;