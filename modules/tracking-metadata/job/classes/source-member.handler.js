const a316_0x41529b=a316_0x23be;(function(_0x48f39d,_0x23625e){const _0x8d09d1=a316_0x23be,_0x37e39f=_0x48f39d();while(!![]){try{const _0x390d46=parseInt(_0x8d09d1(0x1b2))/0x1+parseInt(_0x8d09d1(0x1af))/0x2*(-parseInt(_0x8d09d1(0x1ca))/0x3)+-parseInt(_0x8d09d1(0x1b5))/0x4+-parseInt(_0x8d09d1(0x1bd))/0x5+-parseInt(_0x8d09d1(0x19e))/0x6+-parseInt(_0x8d09d1(0x1aa))/0x7*(-parseInt(_0x8d09d1(0x1b4))/0x8)+parseInt(_0x8d09d1(0x1b9))/0x9*(parseInt(_0x8d09d1(0x1a2))/0xa);if(_0x390d46===_0x23625e)break;else _0x37e39f['push'](_0x37e39f['shift']());}catch(_0x446f7c){_0x37e39f['push'](_0x37e39f['shift']());}}}(a316_0x5b36,0x4fde7));const a316_0x79cb81=(function(){let _0x34f987=!![];return function(_0x595e4b,_0x37fcb1){const _0x3544e4=_0x34f987?function(){const _0x1c5c52=a316_0x23be;if(_0x37fcb1){const _0xacef=_0x37fcb1[_0x1c5c52(0x1be)](_0x595e4b,arguments);return _0x37fcb1=null,_0xacef;}}:function(){};return _0x34f987=![],_0x3544e4;};}()),a316_0x13538d=a316_0x79cb81(this,function(){const _0x490e78=a316_0x23be;return a316_0x13538d['toString']()['search'](_0x490e78(0x1a1))[_0x490e78(0x1b6)]()[_0x490e78(0x1a3)](a316_0x13538d)[_0x490e78(0x1ce)]('(((.+)+)+)+$');});function a316_0x5b36(){const _0x50d391=['FLOSUM_NAMESPACE','defineProperty','API_Name__c','CompositeRetrieveData','logger','MemberType','189PlUQKc','../../../../constants','Revision_Counter__c','../../constants','Changes\x20found\x20for\x20','2wuSHOg','handle','ORG_COMPONENT_OBJECT_NAME','393799aRAIvG','handledMembersCounter','34368sFbfzT','2118564AyidLC','toString','RevisionCounter','OrganisationName__c','9KKFHJn','get','andWhere','targetOrgId','494640dfZXkb','apply','Source_Member_Id__c','Name__c','api','where','Attachment_ID__c','stream','getComponentFromFlosum','update','log','sourceMemberRecords','\x20components','307803YesMnw','IsNameObsolete','_flush','from','search','push','ChangedBy','getIsDone','set','instance','SourceMemberHandler','\x20=\x20:targetOrgId','size','select','\x20IN\x20(:sourceMemberIds)','Folder__c','Component_Type__c','3870882hJLGFU','buildOrgComponentQuery','addToChunk','(((.+)+)+)+$','11936690zSEkaa','constructor'];a316_0x5b36=function(){return _0x50d391;};return a316_0x5b36();}a316_0x13538d();'use strict';function a316_0x23be(_0x522565,_0x47cb7a){const _0x3a81eb=a316_0x5b36();return a316_0x23be=function(_0x13538d,_0x79cb81){_0x13538d=_0x13538d-0x197;let _0x5b3660=_0x3a81eb[_0x13538d];return _0x5b3660;},a316_0x23be(_0x522565,_0x47cb7a);}Object[a316_0x41529b(0x1a5)](exports,'__esModule',{'value':!![]}),exports[a316_0x41529b(0x197)]=void 0x0;const stream_1=require(a316_0x41529b(0x1c4)),salesforce_1=require('@flosum/salesforce'),constants_1=require(a316_0x41529b(0x1ad)),constants_2=require(a316_0x41529b(0x1ab)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a316_0x41529b(0x1b7),IS_NAME_OBSOLETE=a316_0x41529b(0x1cb),MEMBER_ID_FIELD_NAME='MemberIdOrName',MEMBER_TYPE_FIELD_NAME=a316_0x41529b(0x1a9),CHANGED_BY_FIELD_NAME=a316_0x41529b(0x1d0),SOURCE_MEMBER_ID_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a316_0x41529b(0x1bf),ORGANIZATION_NAME_FIELD=constants_2['FLOSUM_NAMESPACE']+a316_0x41529b(0x1b8),REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a316_0x41529b(0x1a4)]+a316_0x41529b(0x1ac),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2['FLOSUM_NAMESPACE']+a316_0x41529b(0x1ac),constants_2[a316_0x41529b(0x1a4)]+a316_0x41529b(0x19d),constants_2['FLOSUM_NAMESPACE']+a316_0x41529b(0x1a6),constants_2[a316_0x41529b(0x1a4)]+a316_0x41529b(0x1c0),constants_2['FLOSUM_NAMESPACE']+'Source_Member_Id__c',constants_2[a316_0x41529b(0x1a4)]+a316_0x41529b(0x1b8),constants_2[a316_0x41529b(0x1a4)]+a316_0x41529b(0x1c3),constants_2['FLOSUM_NAMESPACE']+a316_0x41529b(0x19c)];class SourceMemberHandler extends stream_1['Transform']{constructor({apiVersion:_0x9f01de,instance:_0xce6a7c,targetOrgId:_0xee4a0e,logger:_0x38eae5}){const _0x40ab0c=a316_0x41529b;super({'objectMode':!![]}),this[_0x40ab0c(0x1c8)]=new Map(),this[_0x40ab0c(0x1b3)]=0x0,this[_0x40ab0c(0x1c1)]=_0x9f01de,this['instance']=_0xce6a7c,this[_0x40ab0c(0x1bc)]=_0xee4a0e,this[_0x40ab0c(0x1a8)]=_0x38eae5;}[a316_0x41529b(0x19f)](){const _0x22fdcf=a316_0x41529b;return new salesforce_1['QueryBuilder']()[_0x22fdcf(0x19a)](...ORG_COMPONENT_SELECT_FIELDS)[_0x22fdcf(0x1cd)](constants_1[_0x22fdcf(0x1b1)])[_0x22fdcf(0x1c2)](SOURCE_MEMBER_ID_FIELD_NAME+_0x22fdcf(0x19b),{'sourceMemberIds':[...this[_0x22fdcf(0x1c8)]['keys']()]})[_0x22fdcf(0x1bb)](ORGANIZATION_NAME_FIELD+_0x22fdcf(0x198),{'targetOrgId':this[_0x22fdcf(0x1bc)]});}async[a316_0x41529b(0x1c5)](){const _0x4791a3=a316_0x41529b,_0x5438b9=new salesforce_1[(_0x4791a3(0x1a7))]({'api':this['api'],'queryBuilder':this[_0x4791a3(0x19f)](),'instance':this[_0x4791a3(0x1d3)],'isTooling':![]}),_0x14e7fd=new Map();do{const {records:_0x40b3a1}=await _0x5438b9['execute']();for(const _0x33911b of _0x40b3a1){_0x14e7fd['set'](_0x33911b[SOURCE_MEMBER_ID_FIELD_NAME],_0x33911b);}}while(!_0x5438b9[_0x4791a3(0x1d1)]());return _0x14e7fd;}async[a316_0x41529b(0x1a0)](_0x3e8cdb){const _0x28aaa9=a316_0x41529b;this[_0x28aaa9(0x1c8)][_0x28aaa9(0x1d2)](_0x3e8cdb['Id'],_0x3e8cdb),this[_0x28aaa9(0x1c8)][_0x28aaa9(0x199)]===MAX_CHUNK_SIZE&&await this['handle']();}async['handle'](){const _0x4a6c72=a316_0x41529b,_0x19b774=await this[_0x4a6c72(0x1c5)]();for(const [_0x49f6f8,_0x5ea7f4]of this[_0x4a6c72(0x1c8)]){const _0x53a55e=_0x19b774[_0x4a6c72(0x1ba)](_0x49f6f8);if(_0x53a55e&&_0x5ea7f4[REVISION_COUNTER_FIELD_NAME]===_0x53a55e[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x2671f1={'sourceMemberId':_0x5ea7f4['Id'],'componentId':(_0x53a55e===null||_0x53a55e===void 0x0?void 0x0:_0x53a55e['Id'])||null,'attachmentId':(_0x53a55e===null||_0x53a55e===void 0x0?void 0x0:_0x53a55e[_0x4a6c72(0x1c3)])||null,'metadataId':_0x5ea7f4[MEMBER_ID_FIELD_NAME],'metadataType':_0x5ea7f4[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x5ea7f4[IS_NAME_OBSOLETE],'revisionCounter':_0x5ea7f4[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x5ea7f4[CHANGED_BY_FIELD_NAME]};this['handledMembersCounter']++,this[_0x4a6c72(0x1cf)](_0x2671f1);}this['sourceMemberRecords']=new Map();}async['_transform'](_0x4524c3,_0x4b68c4,_0x8a7cf6){try{await this['addToChunk'](_0x4524c3),_0x8a7cf6();}catch(_0x5a9593){_0x8a7cf6(_0x5a9593);}}async[a316_0x41529b(0x1cc)](_0x61362d){const _0x5b3b48=a316_0x41529b;try{this[_0x5b3b48(0x1c8)]['size']&&await this[_0x5b3b48(0x1b0)](),this[_0x5b3b48(0x1a8)][_0x5b3b48(0x1c7)](_0x5b3b48(0x1ae)+this[_0x5b3b48(0x1b3)]+_0x5b3b48(0x1c9)),await this[_0x5b3b48(0x1a8)][_0x5b3b48(0x1c6)](),_0x61362d();}catch(_0xbbabe7){_0x61362d(_0xbbabe7);}}}exports[a316_0x41529b(0x197)]=SourceMemberHandler;