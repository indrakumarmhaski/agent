function a406_0x178b(_0x3a9f96,_0x5048ef){const _0x57d859=a406_0x916c();return a406_0x178b=function(_0x499058,_0x42b1b0){_0x499058=_0x499058-0xa5;let _0x916c16=_0x57d859[_0x499058];return _0x916c16;},a406_0x178b(_0x3a9f96,_0x5048ef);}const a406_0x104eec=a406_0x178b;(function(_0x307714,_0x452571){const _0x19b537=a406_0x178b,_0xe3c880=_0x307714();while(!![]){try{const _0x22e34f=parseInt(_0x19b537(0xba))/0x1+parseInt(_0x19b537(0xb7))/0x2*(-parseInt(_0x19b537(0xe9))/0x3)+parseInt(_0x19b537(0x10d))/0x4+parseInt(_0x19b537(0xc1))/0x5*(-parseInt(_0x19b537(0xd6))/0x6)+-parseInt(_0x19b537(0xcd))/0x7*(-parseInt(_0x19b537(0xea))/0x8)+parseInt(_0x19b537(0xf9))/0x9*(parseInt(_0x19b537(0xa6))/0xa)+-parseInt(_0x19b537(0xb8))/0xb*(parseInt(_0x19b537(0xd8))/0xc);if(_0x22e34f===_0x452571)break;else _0xe3c880['push'](_0xe3c880['shift']());}catch(_0x49643b){_0xe3c880['push'](_0xe3c880['shift']());}}}(a406_0x916c,0x9c4be));const a406_0x42b1b0=(function(){let _0x513f30=!![];return function(_0x119ceb,_0x1ee768){const _0x532f20=_0x513f30?function(){if(_0x1ee768){const _0xea61fd=_0x1ee768['apply'](_0x119ceb,arguments);return _0x1ee768=null,_0xea61fd;}}:function(){};return _0x513f30=![],_0x532f20;};}()),a406_0x499058=a406_0x42b1b0(this,function(){const _0x141ae0=a406_0x178b;return a406_0x499058['toString']()[_0x141ae0(0xd2)](_0x141ae0(0xc2))[_0x141ae0(0xc9)]()[_0x141ae0(0xeb)](a406_0x499058)['search'](_0x141ae0(0xc2));});a406_0x499058();'use strict';var __importDefault=this&&this[a406_0x104eec(0xc5)]||function(_0x5afd3d){const _0x37d277=a406_0x104eec;return _0x5afd3d&&_0x5afd3d[_0x37d277(0xaa)]?_0x5afd3d:{'default':_0x5afd3d};};Object[a406_0x104eec(0xdd)](exports,'__esModule',{'value':!![]}),exports[a406_0x104eec(0xb2)]=void 0x0;const jszip_1=__importDefault(require('jszip')),flosum_constants_1=require(a406_0x104eec(0xdf)),veeva_service_1=require('./veeva.service'),metadata_item_dto_1=require('../dtos/metadata-item.dto'),constants_1=require('../../../constants'),salesforce_service_1=require(a406_0x104eec(0xcc)),status_enums_1=require(a406_0x104eec(0xdc)),salesforce_dml_error_1=require(a406_0x104eec(0xc7)),package_export_service_1=require(a406_0x104eec(0xff)),type_and_name_veeva_component_retriever_1=require('../classes/retrievers/veeva-components/type-and-name.veeva-component.retriever'),type_veeva_component_retriever_1=require(a406_0x104eec(0x113)),sync_1=require('csv-parse/sync'),sync_2=require(a406_0x104eec(0xbd)),veeva_constants_1=require(a406_0x104eec(0xa7)),path_1=__importDefault(require(a406_0x104eec(0xc3)));class SnapshotService{constructor({snapshotId:_0x3fb114,metadataLogId:_0x5d05f5,selectedMetaTypes:_0x4ed09f,selectedComponentMap:_0x2d402b,whereClause:_0x44e860},_0x22bc6b,_0x22fbae,_0x3ca85e){const _0x23a42c=a406_0x104eec;this[_0x23a42c(0xa5)]=_0x22bc6b,this[_0x23a42c(0xdb)]=_0x22fbae,this[_0x23a42c(0xe4)]=_0x3ca85e,this['_snapshotId']=_0x3fb114,this[_0x23a42c(0xb9)]=_0x5d05f5,this[_0x23a42c(0xc4)]=_0x4ed09f,this[_0x23a42c(0xa8)]=_0x2d402b,this[_0x23a42c(0xbf)]=_0x44e860,this[_0x23a42c(0xd9)]=new veeva_service_1[(_0x23a42c(0xe0))]({'connection':this[_0x23a42c(0xdb)],'logger':this[_0x23a42c(0xe4)]}),this[_0x23a42c(0xd3)]=new salesforce_service_1[(_0x23a42c(0xd7))]({'connection':this[_0x23a42c(0xa5)]}),this['_packageExportService']=new package_export_service_1['PackageExportService']({'veevaService':this[_0x23a42c(0xd9)],'connection':this[_0x23a42c(0xdb)],'logger':this[_0x23a42c(0xe4)]});}async['execute'](){const _0x23467a=a406_0x104eec;try{this[_0x23467a(0xe4)][_0x23467a(0x105)](_0x23467a(0x10c));const _0x2ab19=await this['retrieveVeevaComponents']();await this[_0x23467a(0xe4)][_0x23467a(0x10f)]();const _0x4f6eaa=await this['_packageExportService']['export'](_0x2ab19,SnapshotService[_0x23467a(0xec)]);await this[_0x23467a(0xe4)]['updateLog']();const _0x54b8af=await this['createMetadataItemListWithBody'](_0x2ab19,_0x4f6eaa);await this[_0x23467a(0xb4)](_0x54b8af),await this[_0x23467a(0xe4)][_0x23467a(0x10f)](),await this[_0x23467a(0x116)](!![]);}catch(_0x38a2e7){this[_0x23467a(0xe4)][_0x23467a(0xf8)](_0x38a2e7),await this[_0x23467a(0x116)](![])[_0x23467a(0x106)](_0x52954d=>this['_systemLogger'][_0x23467a(0xf6)](_0x52954d));}}async['retrieveVeevaComponents'](){const _0x428f25=a406_0x104eec,_0x3ab476={'veevaService':this[_0x428f25(0xd9)],'logger':this[_0x428f25(0xe4)]},_0xbaa338=Array[_0x428f25(0x11f)](Object[_0x428f25(0x10a)](this[_0x428f25(0xa8)]))[_0x428f25(0x111)]?new type_and_name_veeva_component_retriever_1[(_0x428f25(0xd4))]({'value':this[_0x428f25(0xa8)],..._0x3ab476}):new type_veeva_component_retriever_1[(_0x428f25(0xd0))]({'value':this['_selectedMetaTypes'],'whereClause':this[_0x428f25(0xbf)],..._0x3ab476});return _0xbaa338[_0x428f25(0x118)]();}async['createMetadataItemListWithBody'](_0x3fa1a6,_0x45eeab){const _0x30468e=a406_0x104eec;var _0x5e6fd5,_0x321f5f;this[_0x30468e(0xe4)][_0x30468e(0x105)](_0x30468e(0x102));const _0x2fcc1d=this['formMetadataItemDtoList'](_0x3fa1a6),_0x3046fd=_0x2fcc1d[_0x30468e(0xb0)]((_0x3ec931,_0x296805)=>_0x3ec931['set'](_0x296805[_0x30468e(0xcf)],_0x296805),new Map());for(const _0xd437de of _0x45eeab){for(const _0x4fa4f2 in _0xd437de['files']){const {base:_0x407902,name:_0x5a2e56,dir:_0xf759dc}=path_1[_0x30468e(0x117)]['parse'](_0x4fa4f2),_0x5d18a6=_0x5a2e56+veeva_constants_1['VeevaConstants'][_0x30468e(0xf3)];if(_0x3046fd[_0x30468e(0xe7)](_0x407902)){const _0x4b25d9=await((_0x5e6fd5=_0xd437de[_0x30468e(0x10b)]([_0xf759dc,_0x407902][_0x30468e(0xbb)](path_1[_0x30468e(0x117)]['posix'][_0x30468e(0xc8)])))===null||_0x5e6fd5===void 0x0?void 0x0:_0x5e6fd5[_0x30468e(0xe2)](_0x30468e(0x108))),_0x315de3=await((_0x321f5f=_0xd437de[_0x30468e(0x10b)]([_0xf759dc,_0x5d18a6][_0x30468e(0xbb)](path_1[_0x30468e(0x117)]['posix'][_0x30468e(0xc8)])))===null||_0x321f5f===void 0x0?void 0x0:_0x321f5f['async'](_0x30468e(0x108)));if(_0x4b25d9){const _0xfe5ca6=new jszip_1[(_0x30468e(0x117))]();_0xfe5ca6[_0x30468e(0x10b)](_0x407902,_0x4b25d9),_0x315de3&&_0xfe5ca6[_0x30468e(0x10b)](_0x5d18a6,this[_0x30468e(0xe8)](_0x315de3)),_0x3046fd[_0x30468e(0xad)](_0x407902)[_0x30468e(0xf1)]=await _0xfe5ca6[_0x30468e(0x112)]({'type':_0x30468e(0xe5)});}}}}return _0x2fcc1d[_0x30468e(0xde)](_0xed7e48=>!_0xed7e48['body'])[_0x30468e(0xb6)](_0x5d73e7=>{const _0x58a7b3=_0x30468e;this[_0x58a7b3(0xe4)][_0x58a7b3(0x105)](_0x58a7b3(0xed)+_0x5d73e7[_0x58a7b3(0xb5)]+'.'+_0x5d73e7[_0x58a7b3(0x11e)]+_0x58a7b3(0xf5));}),_0x2fcc1d['filter'](_0x149eaa=>_0x149eaa[_0x30468e(0xf1)]);}[a406_0x104eec(0xe8)](_0x2c6e78){const _0x5cca70=a406_0x104eec,_0x42a91f=(0x0,sync_1['parse'])(_0x2c6e78,{'columns':!![],'skip_empty_lines':!![]}),_0x3eb78d=_0x42a91f[_0x5cca70(0x107)](({'In\x20Package':_0x253a10,..._0x890779})=>_0x890779);return(0x0,sync_2['stringify'])(_0x3eb78d,{'header':!![]});}[a406_0x104eec(0xaf)](_0x2301e0){const _0x33a20b=a406_0x104eec;return _0x2301e0[_0x33a20b(0x107)](_0x28711b=>{const _0x47d475=_0x33a20b,_0x124ca5=new metadata_item_dto_1['MetadataItemDto']();return _0x124ca5[_0x47d475(0x11e)]=_0x28711b['name'],_0x124ca5[_0x47d475(0xf7)]=_0x28711b[_0x47d475(0x11e)],_0x124ca5['snapshotId']=this[_0x47d475(0x114)],_0x124ca5[_0x47d475(0xcf)]=_0x28711b[_0x47d475(0x11a)]+'.'+_0x28711b['name']+veeva_constants_1[_0x47d475(0x10e)][_0x47d475(0xd5)],_0x124ca5[_0x47d475(0xb5)]=_0x28711b[_0x47d475(0x11a)],_0x124ca5['lastModifiedDate']=_0x28711b[_0x47d475(0x119)],_0x124ca5[_0x47d475(0xca)]=![],_0x124ca5;});}async[a406_0x104eec(0xb4)](_0xcd6c60){const _0x51e0e3=a406_0x104eec;this[_0x51e0e3(0xe4)][_0x51e0e3(0x105)](_0x51e0e3(0xcb)),await this['saveAttachments'](_0xcd6c60),this['_logger'][_0x51e0e3(0x105)]('Saving\x20'+_0xcd6c60[_0x51e0e3(0x111)]+_0x51e0e3(0x104));const _0x27d404=_0xcd6c60['map'](_0x1c3480=>{const _0x5bd96d=_0x51e0e3;return{[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0xd1)]:_0x1c3480['name'],[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0x100)]:_0x1c3480[_0x5bd96d(0xf7)],[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0xbe)]:_0x1c3480[_0x5bd96d(0x11b)],[constants_1['FLOSUM_NAMESPACE']+_0x5bd96d(0xc0)]:_0x1c3480[_0x5bd96d(0xcf)],[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0xac)]:_0x1c3480['isRetrieved'],[constants_1['FLOSUM_NAMESPACE']+_0x5bd96d(0x115)]:_0x1c3480[_0x5bd96d(0xb5)],[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0xae)]:_0x1c3480[_0x5bd96d(0xa9)],[constants_1[_0x5bd96d(0xee)]+_0x5bd96d(0xfe)]:_0x1c3480['lastModifiedDate']};}),_0x5eafbe=await this[_0x51e0e3(0xd3)]['insertMultipleRecords'](constants_1[_0x51e0e3(0xee)]+_0x51e0e3(0x101),_0x27d404);let _0x263463=!![];_0x5eafbe[_0x51e0e3(0xb6)]((_0x317c86,_0xbce40e)=>{const _0x309ec6=_0x51e0e3;this[_0x309ec6(0xe4)][_0x309ec6(0x105)](_0x309ec6(0xc6)+_0xcd6c60[_0xbce40e]['veevaComponentType']+'.'+_0xcd6c60[_0xbce40e]['name']);if(!_0x317c86[_0x309ec6(0xe3)]){_0x263463=![];const _0xc667e6=new salesforce_dml_error_1[(_0x309ec6(0xfb))](_0x317c86[_0x309ec6(0x103)]);this[_0x309ec6(0xe4)]['logError'](_0xc667e6);}});if(!_0x263463)throw new Error(_0x51e0e3(0xb3));}async['saveAttachments'](_0x16634a){const _0x5ee720=a406_0x104eec,_0x4b0c6c=this[_0x5ee720(0xab)](_0x16634a),_0x585c58=await this['_salesforceService']['insertMultipleRecords'](SnapshotService[_0x5ee720(0xef)],_0x4b0c6c),_0x465de3=[];_0x585c58[_0x5ee720(0xb6)]((_0x224995,_0xc70e2)=>{const _0x1fef29=_0x5ee720;_0x224995[_0x1fef29(0xe3)]?(_0x16634a[_0xc70e2][_0x1fef29(0xa9)]=_0x224995['id'],_0x16634a[_0xc70e2][_0x1fef29(0xca)]=!![]):_0x465de3[_0x1fef29(0x11c)](..._0x224995['errors']);});if(_0x465de3['length'])throw new salesforce_dml_error_1[(_0x5ee720(0xfb))](_0x465de3);}[a406_0x104eec(0xab)](_0x1b2be8){const _0x1e3425=a406_0x104eec;return _0x1b2be8[_0x1e3425(0x107)](_0xa24ea5=>({'ParentId':this[_0x1e3425(0x114)],'Name':_0xa24ea5[_0x1e3425(0xb5)],'ContentType':_0x1e3425(0xfd),'Body':_0xa24ea5[_0x1e3425(0xf1)],'Description':_0xa24ea5[_0x1e3425(0xb5)]}));}async[a406_0x104eec(0x116)](_0x1128bf){const _0x269258=a406_0x104eec,_0x20c947={[constants_1[_0x269258(0xee)]+_0x269258(0xbc)]:!![],[constants_1[_0x269258(0xee)]+_0x269258(0xf4)]:!_0x1128bf},_0x3a9cea={[constants_1[_0x269258(0xee)]+_0x269258(0xf4)]:!_0x1128bf,[constants_1[_0x269258(0xee)]+_0x269258(0xce)]:_0x1128bf,[constants_1[_0x269258(0xee)]+'Status__c']:_0x1128bf?status_enums_1['MetadataLogStatus']['COMPLETED']:status_enums_1[_0x269258(0x109)][_0x269258(0x11d)],[constants_1[_0x269258(0xee)]+_0x269258(0xfa)]:!![]};await this[_0x269258(0xa5)][_0x269258(0xe1)](flosum_constants_1[_0x269258(0xe6)]['ENDPOINT_UPSERT_RECORD']+'/'+constants_1[_0x269258(0xee)]+_0x269258(0xf0)+this['_snapshotId'],_0x20c947),await this[_0x269258(0xa5)]['patch'](flosum_constants_1[_0x269258(0xe6)][_0x269258(0xb1)]+'/'+constants_1[_0x269258(0xee)]+_0x269258(0xfc)+this[_0x269258(0xb9)],_0x3a9cea),this[_0x269258(0xe4)][_0x269258(0x105)]('Snapshot\x20completed\x20'+(_0x1128bf?_0x269258(0xda):_0x269258(0x110))+'.'),await this[_0x269258(0xe4)][_0x269258(0x10f)]();}}exports[a406_0x104eec(0xb2)]=SnapshotService,SnapshotService[a406_0x104eec(0xec)]='Snapshot',SnapshotService[a406_0x104eec(0xef)]=a406_0x104eec(0xf2);function a406_0x916c(){const _0xfd2bed=['Is_Error__c','\x20from\x20outbound\x20package','error','apiName','logError','2439impjuX','Job_Completed__c','SalesforceDmlError','Metadata_Log__c/','application/zip','Last_Modified_Date__c','./package-export.service','API_Name__c','Metadata_Item__c','Unpack\x20zip\x20and\x20create\x20metadata\x20items.','errors','\x20Metadata\x20Items','log','catch','map','string','MetadataLogStatus','values','file','Snapshot\x20started.','3950108zUmCXe','VeevaConstants','updateLog','with\x20error','length','generateAsync','../classes/retrievers/veeva-components/type.veeva-component.retriever','_snapshotId','Veeva_Component_Type__c','finishSnapshot','default','retrieve','lastModifiedDate','type','snapshotId','push','EXCEPTION','name','from','_connectionSalesforce','18790IHwddf','../constants/veeva.constants','_selectedComponentMap','attachmentId','__esModule','formAttachments','Is_Retrieved__c','get','Attachment_ID__c','formMetadataItemDtoList','reduce','ENDPOINT_UPSERT_RECORD','SnapshotService','Cannot\x20Save\x20Metadata\x20Items','saveComponentsInSalesforce','veevaComponentType','forEach','22bLlGbl','1152371PhPpoZ','_metadataLogId','549647iFVZsI','join','Is_Completed__c','csv-stringify/sync','Snapshot__c','_whereClause','Label__c','5kfKSHV','(((.+)+)+)+$','path','_selectedMetaTypes','__importDefault','Saving\x20','../classes/errors/salesforce-dml-error','sep','toString','isRetrieved','Saving\x20Attachments.','./salesforce.service','35ygoIQt','Succeed__c','label','TypeVeevaComponentRetriever','Name__c','search','_salesforceService','TypeAndNameVeevaComponentRetriever','MDL_EXTENSION','1185618ChuYCg','SalesforceService','144YEiGzf','_veevaService','successfully','_connectionVeeva','../enums/status.enums','defineProperty','filter','../constants/flosum.constants','VeevaService','patch','async','success','_logger','base64','FlosumConstants','has','transformDependencyFile','217479buUieX','1353544bWVtkG','constructor','OUTBOUND_PACKAGE_NAME','Cannot\x20retrieve\x20','FLOSUM_NAMESPACE','ATTACHMENT','Snapshot__c/','body','Attachment','DEPENDENCY_EXTENSION'];a406_0x916c=function(){return _0xfd2bed;};return a406_0x916c();}