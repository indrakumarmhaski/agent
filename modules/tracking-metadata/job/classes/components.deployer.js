const a295_0x3ae521=a295_0xbf81;(function(_0x1c869c,_0x3636bb){const _0x42fcd3=a295_0xbf81,_0x5171c0=_0x1c869c();while(!![]){try{const _0x210779=parseInt(_0x42fcd3(0x113))/0x1*(parseInt(_0x42fcd3(0x151))/0x2)+parseInt(_0x42fcd3(0x136))/0x3+-parseInt(_0x42fcd3(0x124))/0x4*(-parseInt(_0x42fcd3(0x121))/0x5)+-parseInt(_0x42fcd3(0x128))/0x6*(-parseInt(_0x42fcd3(0x166))/0x7)+parseInt(_0x42fcd3(0x12a))/0x8*(parseInt(_0x42fcd3(0x137))/0x9)+parseInt(_0x42fcd3(0x130))/0xa+-parseInt(_0x42fcd3(0x112))/0xb*(parseInt(_0x42fcd3(0x134))/0xc);if(_0x210779===_0x3636bb)break;else _0x5171c0['push'](_0x5171c0['shift']());}catch(_0x34e0d1){_0x5171c0['push'](_0x5171c0['shift']());}}}(a295_0x2403,0x29a7d));const a295_0x4df526=(function(){let _0x7f5d6=!![];return function(_0x211236,_0x460ea8){const _0x2f8092=_0x7f5d6?function(){const _0x2e5ecb=a295_0xbf81;if(_0x460ea8){const _0x264986=_0x460ea8[_0x2e5ecb(0x162)](_0x211236,arguments);return _0x460ea8=null,_0x264986;}}:function(){};return _0x7f5d6=![],_0x2f8092;};}()),a295_0x226d02=a295_0x4df526(this,function(){const _0x288aa3=a295_0xbf81;return a295_0x226d02[_0x288aa3(0x12c)]()['search']('(((.+)+)+)+$')['toString']()['constructor'](a295_0x226d02)[_0x288aa3(0x133)](_0x288aa3(0x167));});a295_0x226d02();function a295_0x2403(){const _0x5c4378=['ORG_COMPONENT_OBJECT_NAME','CompositeConstants','_write','204uhvVsw','revisionCounter','1552ZMeZJY','default','toString','log','targetOrgId','BINARY_FIELD_NAME','1306270YgtUTy','records','deploy','search','12TpLTSs','error','11097TsdwXf','14841RmRTYK','Retrieved','Is_Retrieved__c','apiVersion','\x20components','execute','Name__c','isReachedMaxChunk','deployAttachments','attachmentId','populateAttachmentId','Source_Member_Id__c','Label__c','logger','Tracking_Setting__c','push','handleDeployResult','RestSimpleDeployData','OrganisationName__c','createZip','isNameObsolete','ATTACHMENT_OBJECT_NAME','binary','type','addOrgComponentToChunk','jszip','2562BRCShV','@flosum/salesforce','length','sourceMemberId','__importDefault','file','has','update','Is_Deleted__c','orgComponentsToDeployChunk','componentId','ComponentsDeployer','instance','Last_Updated_By__c','resetChunks','attachmentsToDeployChunk','../../../../constants','apply','successDeployedCounter','application/zip','then','43169pVwRfP','(((.+)+)+)+$','changedBy','fullName','Readable','Status__c','9847321BeuOgK','239pvIYwS','Revision_Counter__c','../../constants','binaryRecordsSizeChunk','addAttachmentToChunk','__esModule','nodebuffer','FLOSUM_NAMESPACE','Folder__c','Attachment_ID__c','generateAsync','Process\x20completed\x20for\x20','trackingSettingId','stream','1165jnoGxV','from','deployOrgComponents','1644iLBkWx'];a295_0x2403=function(){return _0x5c4378;};return a295_0x2403();}'use strict';var __importDefault=this&&this[a295_0x3ae521(0x155)]||function(_0x5eb44d){const _0x468250=a295_0x3ae521;return _0x5eb44d&&_0x5eb44d[_0x468250(0x118)]?_0x5eb44d:{'default':_0x5eb44d};};Object['defineProperty'](exports,a295_0x3ae521(0x118),{'value':!![]}),exports[a295_0x3ae521(0x15c)]=void 0x0;const salesforce_1=require(a295_0x3ae521(0x152)),constants_1=require(a295_0x3ae521(0x115)),stream_1=require(a295_0x3ae521(0x120)),jszip_1=__importDefault(require(a295_0x3ae521(0x150))),constants_2=require(a295_0x3ae521(0x161)),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2[a295_0x3ae521(0x11a)]+a295_0x3ae521(0x11c),CONTENT_TYPE=a295_0x3ae521(0x164);class ComponentsDeployer extends stream_1['Writable']{constructor({apiVersion:_0x34ce11,instance:_0x1530e2,logger:_0x1e09b6,targetOrgId:_0xc4f897,trackingSettingId:_0x467e97}){const _0x40c124=a295_0x3ae521;super({'objectMode':!![]}),this[_0x40c124(0x160)]={'records':[],'binary':[]},this['binaryRecordsSizeChunk']=0x0,this[_0x40c124(0x15a)]=[],this['successDeployedCounter']=0x0,this[_0x40c124(0x13a)]=_0x34ce11,this[_0x40c124(0x15d)]=_0x1530e2,this[_0x40c124(0x144)]=_0x1e09b6,this[_0x40c124(0x12e)]=_0xc4f897,this[_0x40c124(0x11f)]=_0x467e97;}async[a295_0x3ae521(0x132)](){const _0x1e727d=a295_0x3ae521;await this[_0x1e727d(0x13f)]()[_0x1e727d(0x165)](_0x489a56=>this[_0x1e727d(0x141)](_0x489a56))['then'](()=>this[_0x1e727d(0x123)]())[_0x1e727d(0x165)](_0x460b3d=>this[_0x1e727d(0x147)](_0x460b3d)),this[_0x1e727d(0x15f)]();}['deployAttachments'](){const _0x24a206=a295_0x3ae521,_0x564d99=new salesforce_1['CompositeBinaryDeployData']({'instance':this[_0x24a206(0x15d)],'objectName':constants_1['ATTACHMENT_OBJECT_NAME'],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x24a206(0x13a)]});return _0x564d99[_0x24a206(0x13c)](this[_0x24a206(0x160)]);}[a295_0x3ae521(0x123)](){const _0x1f4bc2=a295_0x3ae521,_0x664b9d=new salesforce_1[(_0x1f4bc2(0x148))]({'instance':this[_0x1f4bc2(0x15d)],'objectName':constants_1[_0x1f4bc2(0x125)],'api':this[_0x1f4bc2(0x13a)],'allOrNone':![],'externalIdField':'Id'});return _0x664b9d[_0x1f4bc2(0x13c)]({'records':this['orgComponentsToDeployChunk']});}async[a295_0x3ae521(0x147)](_0x1e3177){const _0x23fc97=a295_0x3ae521;for(const {success:_0x19096f,error:_0x34b47f}of _0x1e3177){if(_0x19096f){this['successDeployedCounter']++;continue;}_0x34b47f&&this[_0x23fc97(0x144)][_0x23fc97(0x135)](_0x34b47f);}}[a295_0x3ae521(0x13e)](_0x5ad81c){const _0xfba64c=a295_0x3ae521;return _0x5ad81c+this[_0xfba64c(0x116)]>=salesforce_1[_0xfba64c(0x126)]['MAX_BODY_SIZE']||this['attachmentsToDeployChunk'][_0xfba64c(0x131)][_0xfba64c(0x153)]===MAX_COMPOSITE_CHUNK_COUNT;}[a295_0x3ae521(0x15f)](){const _0x1a7660=a295_0x3ae521;this[_0x1a7660(0x116)]=0x0,this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x1a7660(0x15a)]=[];}['populateAttachmentId'](_0x3427cc){const _0x183736=a295_0x3ae521;for(const _0x4a85fc in _0x3427cc){this[_0x183736(0x15a)][_0x4a85fc][ATTACHMENT_FIELD_NAME]=_0x3427cc[_0x4a85fc]['id'];}}async['addAttachmentToChunk'](_0x45353a,_0x7f3a20){const _0x12d2d6=a295_0x3ae521,{listMetadataItem:_0x3880cd,sourceMemberRecord:_0x232983}=_0x45353a,_0x21a55a={'attributes':{'type':constants_1[_0x12d2d6(0x14c)],'binaryPartName':_0x3880cd[_0x12d2d6(0x169)],'binaryPartNameAlias':constants_1[_0x12d2d6(0x12f)]},'Id':_0x232983[_0x12d2d6(0x140)],'Name':_0x3880cd['fullName'],'Description':_0x3880cd['type'],'ContentType':CONTENT_TYPE,'ParentId':this[_0x12d2d6(0x12e)],'Body':_0x3880cd[_0x12d2d6(0x169)]},_0x56bf2d={'binaryFieldName':constants_1[_0x12d2d6(0x12f)],'name':_0x3880cd[_0x12d2d6(0x169)],'value':stream_1[_0x12d2d6(0x16a)][_0x12d2d6(0x122)](_0x7f3a20)};this[_0x12d2d6(0x160)]['records'][_0x12d2d6(0x146)](_0x21a55a),this[_0x12d2d6(0x160)][_0x12d2d6(0x14d)][_0x12d2d6(0x146)](_0x56bf2d);}[a295_0x3ae521(0x14a)](_0x11f21b){const _0x251ca3=a295_0x3ae521,_0x4394ce=new jszip_1[(_0x251ca3(0x12b))]();for(const _0x41e3f4 in _0x11f21b){_0x4394ce[_0x251ca3(0x156)](_0x41e3f4,_0x11f21b[_0x41e3f4]);}return _0x4394ce[_0x251ca3(0x11d)]({'type':_0x251ca3(0x119)});}[a295_0x3ae521(0x14f)](_0x2e0888,_0x1e64d0){const _0xb7abac=a295_0x3ae521,_0x50478e={'attributes':{'type':constants_1[_0xb7abac(0x125)]},'Id':_0x1e64d0[_0xb7abac(0x15b)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x159)]:_0x1e64d0[_0xb7abac(0x14b)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x114)]:_0x1e64d0[_0xb7abac(0x129)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x142)]:_0x1e64d0[_0xb7abac(0x154)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x15e)]:_0x1e64d0[_0xb7abac(0x168)],[constants_2['FLOSUM_NAMESPACE']+'API_Name__c']:_0x2e0888[_0xb7abac(0x169)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x13d)]:_0x2e0888['fullName'],[constants_2['FLOSUM_NAMESPACE']+'Component_Type__c']:_0x2e0888[_0xb7abac(0x14e)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x143)]:_0x2e0888['fileName'],[constants_2['FLOSUM_NAMESPACE']+_0xb7abac(0x11b)]:constants_1['METADATA_FOLDER_MAP'][_0xb7abac(0x157)](_0x2e0888[_0xb7abac(0x14e)])||null,[constants_2['FLOSUM_NAMESPACE']+_0xb7abac(0x139)]:!![],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x149)]:this[_0xb7abac(0x12e)],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x145)]:this['trackingSettingId'],[constants_2[_0xb7abac(0x11a)]+_0xb7abac(0x16b)]:_0xb7abac(0x138)};this[_0xb7abac(0x15a)][_0xb7abac(0x146)](_0x50478e);}async[a295_0x3ae521(0x127)](_0x4c20a6,_0x75cebe,_0x2e07f1){const _0x438cf5=a295_0x3ae521;try{const {listMetadataItem:_0x49d744,sourceMemberRecord:_0x3e5e8b,files:_0x5db63d}=_0x4c20a6,_0x2cab60=await this[_0x438cf5(0x14a)](_0x5db63d),_0x5e5446=Buffer['byteLength'](_0x2cab60);this[_0x438cf5(0x13e)](_0x5e5446)&&await this[_0x438cf5(0x132)](),this[_0x438cf5(0x116)]+=_0x5e5446,await this[_0x438cf5(0x117)](_0x4c20a6,_0x2cab60),this[_0x438cf5(0x14f)](_0x49d744,_0x3e5e8b),_0x2e07f1();}catch(_0x463935){_0x2e07f1(_0x463935);}}async['_final'](_0x186e87){const _0x45d9f3=a295_0x3ae521;try{this[_0x45d9f3(0x160)][_0x45d9f3(0x131)][_0x45d9f3(0x153)]&&this['orgComponentsToDeployChunk'][_0x45d9f3(0x153)]&&await this[_0x45d9f3(0x132)](),this['logger'][_0x45d9f3(0x12d)](_0x45d9f3(0x11e)+this[_0x45d9f3(0x163)]+_0x45d9f3(0x13b)),await this[_0x45d9f3(0x144)][_0x45d9f3(0x158)](),_0x186e87();}catch(_0x257a05){_0x186e87(_0x257a05);}}}function a295_0xbf81(_0x9e1fdf,_0x1c2003){const _0x515177=a295_0x2403();return a295_0xbf81=function(_0x226d02,_0x4df526){_0x226d02=_0x226d02-0x112;let _0x240380=_0x515177[_0x226d02];return _0x240380;},a295_0xbf81(_0x9e1fdf,_0x1c2003);}exports[a295_0x3ae521(0x15c)]=ComponentsDeployer;