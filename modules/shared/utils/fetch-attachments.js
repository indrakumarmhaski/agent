const a319_0x1589bc=a319_0x5155;(function(_0x147009,_0x1c7bcb){const _0x5b237f=a319_0x5155,_0x361606=_0x147009();while(!![]){try{const _0x20ee20=parseInt(_0x5b237f(0x1c5))/0x1+-parseInt(_0x5b237f(0x1c1))/0x2*(parseInt(_0x5b237f(0x1b3))/0x3)+-parseInt(_0x5b237f(0x1b6))/0x4+-parseInt(_0x5b237f(0x1bb))/0x5+-parseInt(_0x5b237f(0x1b4))/0x6*(-parseInt(_0x5b237f(0x1b9))/0x7)+-parseInt(_0x5b237f(0x1ab))/0x8+parseInt(_0x5b237f(0x1c2))/0x9;if(_0x20ee20===_0x1c7bcb)break;else _0x361606['push'](_0x361606['shift']());}catch(_0x500674){_0x361606['push'](_0x361606['shift']());}}}(a319_0x539e,0x57adf));const a319_0x2ec137=(function(){let _0x2bc5aa=!![];return function(_0x567ecb,_0x10d6b4){const _0x287796=_0x2bc5aa?function(){const _0x26090e=a319_0x5155;if(_0x10d6b4){const _0x5d97ba=_0x10d6b4[_0x26090e(0x1b2)](_0x567ecb,arguments);return _0x10d6b4=null,_0x5d97ba;}}:function(){};return _0x2bc5aa=![],_0x287796;};}()),a319_0x12c3d9=a319_0x2ec137(this,function(){const _0x63761=a319_0x5155;return a319_0x12c3d9[_0x63761(0x1ae)]()[_0x63761(0x1c4)]('(((.+)+)+)+$')[_0x63761(0x1ae)]()['constructor'](a319_0x12c3d9)['search'](_0x63761(0x1aa));});function a319_0x539e(){const _0xec34e=['retrieveAttachments','length','\x27,\x27','../../functions/utils/salesforce-request','fetchAttachmentBody','16722ezxSRL','11876427EWbZFM','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20','search','165998WrWQdA','/services/data/','push','chunkArray','ParentId','fetchAttachments','namespace','get','records','fetchAttachmentsDetailsByParentId','SALESFORCE_API_VERSION','./index','post','(((.+)+)+)+$','4668648tFsSxz','join','/query/','toString','__esModule','../../../constants','fetchAttachmentsDetailsById','apply','51ViGCEX','4037730xsqkTf','Body','2558960ZqgDuw','arraybuffer','/sobjects/Attachment/','7BITIZj','BodyLength','2169815gIyKBo'];a319_0x539e=function(){return _0xec34e;};return a319_0x539e();}a319_0x12c3d9();'use strict';Object['defineProperty'](exports,a319_0x1589bc(0x1af),{'value':!![]}),exports[a319_0x1589bc(0x1ca)]=exports[a319_0x1589bc(0x1c0)]=exports['fetchAttachmentsDetailsByParentId']=exports['fetchAttachmentsDetailsById']=exports['retrieveAttachments']=void 0x0;const index_1=require(a319_0x1589bc(0x1a8)),constants_1=require(a319_0x1589bc(0x1b0)),salesforce_request_1=require(a319_0x1589bc(0x1bf)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a319_0x1589bc(0x1b5)],FIELD_PARENT_ID=a319_0x1589bc(0x1c9),FIELD_ID='Id';async function retrieveAttachments(_0x1b333d,_0x25991c){const _0x15dc64=a319_0x1589bc;let _0x4aa992=0x0,_0x5a5551=0x0,_0xd41b0f=[];const _0x1eaa45=[];for(const _0xa6d0df of _0x1b333d){if(_0xa6d0df[_0x15dc64(0x1ba)]>REST_ATTACHMENT_MAX_SIZE){const _0x42b59c=await fetchAttachmentBody(_0x25991c,_0xa6d0df['Id']);_0x1eaa45[_0x15dc64(0x1c7)]({'id':_0xa6d0df['Id'],'values':{'Body':_0x42b59c['toString']('base64')}});continue;}if(_0xa6d0df['BodyLength']+_0x4aa992>REST_ATTACHMENT_MAX_SIZE||_0x5a5551+0x1>=REST_ATTACHMENT_COUNT){const _0x5bb7e5=await fetchAttachments(_0x25991c,BINARY_FIELDS,_0xd41b0f);_0x1eaa45[_0x15dc64(0x1c7)](..._0x5bb7e5),_0xd41b0f=[],_0x4aa992=0x0,_0x5a5551=0x0;}_0xd41b0f[_0x15dc64(0x1c7)](_0xa6d0df['Id']),_0x4aa992+=_0xa6d0df[_0x15dc64(0x1ba)],_0x5a5551++;}if(_0xd41b0f[_0x15dc64(0x1bd)]){const _0x3c7d2f=await fetchAttachments(_0x25991c,BINARY_FIELDS,_0xd41b0f);_0x1eaa45[_0x15dc64(0x1c7)](..._0x3c7d2f);}return _0x1eaa45;}exports[a319_0x1589bc(0x1bc)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x189aea,_0x34fe27){return fetchAttachmentsDetails(_0x189aea,FIELD_ID,_0x34fe27);}exports[a319_0x1589bc(0x1b1)]=fetchAttachmentsDetailsById;function a319_0x5155(_0x253ecc,_0x3819d1){const _0x300d39=a319_0x539e();return a319_0x5155=function(_0x12c3d9,_0x2ec137){_0x12c3d9=_0x12c3d9-0x1a3;let _0x539e65=_0x300d39[_0x12c3d9];return _0x539e65;},a319_0x5155(_0x253ecc,_0x3819d1);}function fetchAttachmentsDetailsByParentId(_0x57b48d,_0x23cc8f){return fetchAttachmentsDetails(_0x57b48d,FIELD_PARENT_ID,_0x23cc8f);}exports[a319_0x1589bc(0x1a6)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x556ed8,_0x2371ed,_0x5312cf){const _0x16e424=a319_0x1589bc,_0x245d08=[],_0x576de7=(0x0,index_1[_0x16e424(0x1c8)])(_0x5312cf,CHUNK_QUERY_SIZE);for(const _0x109a5d of _0x576de7){const _0xde7fbd=_0x16e424(0x1c3)+_0x2371ed+'\x20IN\x20('+('\x27'+_0x109a5d[_0x16e424(0x1ac)](_0x16e424(0x1be))+'\x27')+')',{data:_0x2f0c61}=await _0x556ed8[_0x16e424(0x1a4)](_0x16e424(0x1c6)+constants_1[_0x16e424(0x1a7)]+_0x16e424(0x1ad),{'params':{'q':_0xde7fbd}});_0x245d08[_0x16e424(0x1c7)](..._0x2f0c61[_0x16e424(0x1a5)]);}return _0x245d08;}async function fetchAttachmentBody(_0x336ca0,_0x1510f2){const _0x5754c7=a319_0x1589bc,{data:_0x25285c}=await _0x336ca0[_0x5754c7(0x1a4)]('/services/data/'+constants_1[_0x5754c7(0x1a7)]+_0x5754c7(0x1b8)+_0x1510f2+'/body',{'responseType':_0x5754c7(0x1b7)});return _0x25285c;}exports[a319_0x1589bc(0x1c0)]=fetchAttachmentBody;async function fetchAttachments(_0x32d215,_0x3a0c6e,_0x5a4993){const _0x4219ac=a319_0x1589bc,{data:_0x13e92f}=await _0x32d215[_0x4219ac(0x1a9)]('/services/apexrest'+salesforce_request_1[_0x4219ac(0x1a3)]+'/retrieveAttachments/',{'objectName':'Attachment','binaryFields':_0x3a0c6e,'recordIds':_0x5a4993});return _0x13e92f;}exports[a319_0x1589bc(0x1ca)]=fetchAttachments;