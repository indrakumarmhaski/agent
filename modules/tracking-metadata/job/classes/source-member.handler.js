const a316_0x182d40=a316_0x3016;(function(_0x2bbb24,_0x4c8bcb){const _0x28fc1a=a316_0x3016,_0x5da1c3=_0x2bbb24();while(!![]){try{const _0x1a73b4=-parseInt(_0x28fc1a(0x11a))/0x1*(parseInt(_0x28fc1a(0x133))/0x2)+-parseInt(_0x28fc1a(0x12c))/0x3+-parseInt(_0x28fc1a(0x109))/0x4+-parseInt(_0x28fc1a(0x125))/0x5+-parseInt(_0x28fc1a(0x103))/0x6*(-parseInt(_0x28fc1a(0x139))/0x7)+parseInt(_0x28fc1a(0x12e))/0x8*(-parseInt(_0x28fc1a(0x118))/0x9)+parseInt(_0x28fc1a(0x116))/0xa*(parseInt(_0x28fc1a(0x100))/0xb);if(_0x1a73b4===_0x4c8bcb)break;else _0x5da1c3['push'](_0x5da1c3['shift']());}catch(_0x119b06){_0x5da1c3['push'](_0x5da1c3['shift']());}}}(a316_0x4404,0xd59d8));function a316_0x3016(_0x4fb6cf,_0xeb44d4){const _0x867011=a316_0x4404();return a316_0x3016=function(_0x2e3273,_0x32e4f2){_0x2e3273=_0x2e3273-0x100;let _0x4404de=_0x867011[_0x2e3273];return _0x4404de;},a316_0x3016(_0x4fb6cf,_0xeb44d4);}function a316_0x4404(){const _0x1cdcc2=['QueryBuilder','Folder__c','MemberIdOrName','keys','handledMembersCounter','46416830WehlRQ','update','333rqOEpz','../../../../constants','283OftDqs','targetOrgId','api','Source_Member_Id__c','\x20components','\x20IN\x20(:sourceMemberIds)','execute','Attachment_ID__c','logger','addToChunk','\x20=\x20:targetOrgId','6461380ryJlVn','ChangedBy','FLOSUM_NAMESPACE','Transform','IsNameObsolete','set','CompositeRetrieveData','1112745wCidCZ','stream','343032VDXeQb','sourceMemberRecords','where','constructor','apply','6062wbMAsw','handle','getComponentFromFlosum','(((.+)+)+)+$','defineProperty','Changes\x20found\x20for\x20','8332681YFJVMk','11XvilvG','search','SourceMemberHandler','6ZqyEFB','from','RevisionCounter','size','../../constants','buildOrgComponentQuery','3398444GwJNcF','toString','log','_transform','Revision_Counter__c','getIsDone','instance','__esModule'];a316_0x4404=function(){return _0x1cdcc2;};return a316_0x4404();}const a316_0x32e4f2=(function(){let _0x467618=!![];return function(_0xeca45b,_0x2ba353){const _0x27887c=_0x467618?function(){const _0x2921a3=a316_0x3016;if(_0x2ba353){const _0x458f38=_0x2ba353[_0x2921a3(0x132)](_0xeca45b,arguments);return _0x2ba353=null,_0x458f38;}}:function(){};return _0x467618=![],_0x27887c;};}()),a316_0x2e3273=a316_0x32e4f2(this,function(){const _0x31f60c=a316_0x3016;return a316_0x2e3273[_0x31f60c(0x10a)]()[_0x31f60c(0x101)]('(((.+)+)+)+$')[_0x31f60c(0x10a)]()[_0x31f60c(0x131)](a316_0x2e3273)[_0x31f60c(0x101)](_0x31f60c(0x136));});a316_0x2e3273();'use strict';Object[a316_0x182d40(0x137)](exports,a316_0x182d40(0x110),{'value':!![]}),exports[a316_0x182d40(0x102)]=void 0x0;const stream_1=require(a316_0x182d40(0x12d)),salesforce_1=require('@flosum/salesforce'),constants_1=require(a316_0x182d40(0x107)),constants_2=require(a316_0x182d40(0x119)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a316_0x182d40(0x105),IS_NAME_OBSOLETE=a316_0x182d40(0x129),MEMBER_ID_FIELD_NAME=a316_0x182d40(0x113),MEMBER_TYPE_FIELD_NAME='MemberType',CHANGED_BY_FIELD_NAME=a316_0x182d40(0x126),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a316_0x182d40(0x127)]+a316_0x182d40(0x11d),ORGANIZATION_NAME_FIELD=constants_2[a316_0x182d40(0x127)]+'OrganisationName__c',REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a316_0x182d40(0x127)]+'Revision_Counter__c',ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a316_0x182d40(0x127)]+a316_0x182d40(0x10d),constants_2[a316_0x182d40(0x127)]+'Component_Type__c',constants_2[a316_0x182d40(0x127)]+'API_Name__c',constants_2[a316_0x182d40(0x127)]+'Name__c',constants_2['FLOSUM_NAMESPACE']+a316_0x182d40(0x11d),constants_2[a316_0x182d40(0x127)]+'OrganisationName__c',constants_2[a316_0x182d40(0x127)]+a316_0x182d40(0x121),constants_2[a316_0x182d40(0x127)]+a316_0x182d40(0x112)];class SourceMemberHandler extends stream_1[a316_0x182d40(0x128)]{constructor({apiVersion:_0x49669f,instance:_0x2088e3,targetOrgId:_0x2631f0,logger:_0x2dae6b}){const _0x4dbc80=a316_0x182d40;super({'objectMode':!![]}),this[_0x4dbc80(0x12f)]=new Map(),this[_0x4dbc80(0x115)]=0x0,this['api']=_0x49669f,this[_0x4dbc80(0x10f)]=_0x2088e3,this[_0x4dbc80(0x11b)]=_0x2631f0,this[_0x4dbc80(0x122)]=_0x2dae6b;}[a316_0x182d40(0x108)](){const _0x52c9a4=a316_0x182d40;return new salesforce_1[(_0x52c9a4(0x111))]()['select'](...ORG_COMPONENT_SELECT_FIELDS)[_0x52c9a4(0x104)](constants_1['ORG_COMPONENT_OBJECT_NAME'])[_0x52c9a4(0x130)](SOURCE_MEMBER_ID_FIELD_NAME+_0x52c9a4(0x11f),{'sourceMemberIds':[...this[_0x52c9a4(0x12f)][_0x52c9a4(0x114)]()]})['andWhere'](ORGANIZATION_NAME_FIELD+_0x52c9a4(0x124),{'targetOrgId':this[_0x52c9a4(0x11b)]});}async['getComponentFromFlosum'](){const _0x4afd70=a316_0x182d40,_0x96eeb2=new salesforce_1[(_0x4afd70(0x12b))]({'api':this[_0x4afd70(0x11c)],'queryBuilder':this[_0x4afd70(0x108)](),'instance':this[_0x4afd70(0x10f)],'isTooling':![]}),_0x44ee02=new Map();do{const {records:_0x3bf362}=await _0x96eeb2[_0x4afd70(0x120)]();for(const _0x23aaa2 of _0x3bf362){_0x44ee02[_0x4afd70(0x12a)](_0x23aaa2[SOURCE_MEMBER_ID_FIELD_NAME],_0x23aaa2);}}while(!_0x96eeb2[_0x4afd70(0x10e)]());return _0x44ee02;}async[a316_0x182d40(0x123)](_0x40c56d){const _0x40141d=a316_0x182d40;this[_0x40141d(0x12f)][_0x40141d(0x12a)](_0x40c56d['Id'],_0x40c56d),this[_0x40141d(0x12f)][_0x40141d(0x106)]===MAX_CHUNK_SIZE&&await this[_0x40141d(0x134)]();}async[a316_0x182d40(0x134)](){const _0x460e85=a316_0x182d40,_0x110221=await this[_0x460e85(0x135)]();for(const [_0x5b5b61,_0x14af47]of this[_0x460e85(0x12f)]){const _0x4047f7=_0x110221['get'](_0x5b5b61);if(_0x4047f7&&_0x14af47[REVISION_COUNTER_FIELD_NAME]===_0x4047f7[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x5bc06a={'sourceMemberId':_0x14af47['Id'],'componentId':(_0x4047f7===null||_0x4047f7===void 0x0?void 0x0:_0x4047f7['Id'])||null,'attachmentId':(_0x4047f7===null||_0x4047f7===void 0x0?void 0x0:_0x4047f7[_0x460e85(0x121)])||null,'metadataId':_0x14af47[MEMBER_ID_FIELD_NAME],'metadataType':_0x14af47[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x14af47[IS_NAME_OBSOLETE],'revisionCounter':_0x14af47[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x14af47[CHANGED_BY_FIELD_NAME]};this['handledMembersCounter']++,this['push'](_0x5bc06a);}this[_0x460e85(0x12f)]=new Map();}async[a316_0x182d40(0x10c)](_0x2b4d29,_0x5687bf,_0x3b65fb){const _0x16c95f=a316_0x182d40;try{await this[_0x16c95f(0x123)](_0x2b4d29),_0x3b65fb();}catch(_0x2e2c82){_0x3b65fb(_0x2e2c82);}}async['_flush'](_0x169e25){const _0x5f326b=a316_0x182d40;try{this['sourceMemberRecords'][_0x5f326b(0x106)]&&await this[_0x5f326b(0x134)](),this['logger'][_0x5f326b(0x10b)](_0x5f326b(0x138)+this[_0x5f326b(0x115)]+_0x5f326b(0x11e)),await this['logger'][_0x5f326b(0x117)](),_0x169e25();}catch(_0x59f9dc){_0x169e25(_0x59f9dc);}}}exports['SourceMemberHandler']=SourceMemberHandler;