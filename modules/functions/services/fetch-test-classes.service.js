const a85_0x566d39=a85_0x294f;(function(_0x14282c,_0x4965a4){const _0x2256aa=a85_0x294f,_0x2669ba=_0x14282c();while(!![]){try{const _0x4a0595=-parseInt(_0x2256aa(0x1c6))/0x1*(parseInt(_0x2256aa(0x1c7))/0x2)+parseInt(_0x2256aa(0x1b7))/0x3*(parseInt(_0x2256aa(0x1ce))/0x4)+parseInt(_0x2256aa(0x1cb))/0x5+parseInt(_0x2256aa(0x1af))/0x6+parseInt(_0x2256aa(0x1bc))/0x7+-parseInt(_0x2256aa(0x1aa))/0x8*(-parseInt(_0x2256aa(0x1b6))/0x9)+-parseInt(_0x2256aa(0x1b5))/0xa*(parseInt(_0x2256aa(0x19d))/0xb);if(_0x4a0595===_0x4965a4)break;else _0x2669ba['push'](_0x2669ba['shift']());}catch(_0x46964f){_0x2669ba['push'](_0x2669ba['shift']());}}}(a85_0x4451,0x83efe));const a85_0x1695ff=(function(){let _0x2c512c=!![];return function(_0x1b4ca4,_0x59ac5f){const _0x527362=_0x2c512c?function(){const _0x38af71=a85_0x294f;if(_0x59ac5f){const _0x2a6b7e=_0x59ac5f[_0x38af71(0x1a5)](_0x1b4ca4,arguments);return _0x59ac5f=null,_0x2a6b7e;}}:function(){};return _0x2c512c=![],_0x527362;};}()),a85_0x20bbac=a85_0x1695ff(this,function(){const _0x6eb215=a85_0x294f;return a85_0x20bbac[_0x6eb215(0x1b1)]()[_0x6eb215(0x1c3)]('(((.+)+)+)+$')[_0x6eb215(0x1b1)]()['constructor'](a85_0x20bbac)[_0x6eb215(0x1c3)](_0x6eb215(0x1a0));});a85_0x20bbac();function a85_0x4451(){const _0x343dd5=['Zip','push','1854968RZXmLr','22tCOonJ','removeNamespacePrefix','/sobjects/Attachment','(((.+)+)+)+$','reduce','post','map','from','apply','../utils/components-api','async','metadataLogId','/services/data/','104xadPjp','defineProperty','Component__r','No\x20component\x20by\x20attachment\x20id','../../git/parsers/utils/zip','4787958iYrYye','keys','toString','files','../../shared/utils/fetch-attachments','unzip','4532950EeBmUW','73512EzSnmm','6fUJhud','@istest','Body','values','join','751541yfHNra','fetchComponentsDetailsByComponentsHistory','Component_Name__c','TEST\x20CLASSES','string','__esModule','find','search','ComponentsApi','dir','168gnCtLG','6124TVvpJF','fetchTestClasses','base64','ParentId','111980dHoyxt'];a85_0x4451=function(){return _0x343dd5;};return a85_0x4451();}'use strict';Object[a85_0x566d39(0x1ab)](exports,a85_0x566d39(0x1c1),{'value':!![]}),exports[a85_0x566d39(0x1c8)]=void 0x0;const constants_1=require('../../../constants'),zip_1=require(a85_0x566d39(0x1ae)),components_api_1=require(a85_0x566d39(0x1a6)),fetch_attachments_1=require(a85_0x566d39(0x1b3)),BINARY_FIELDS=['Body'],ATTACHMENT_NAME=a85_0x566d39(0x1bf),ATTACHMENT_DESCRIPTION='TEST\x20CLASSES';async function fetchTestClasses(_0x5c8795,_0x3a18e9){const _0x4b724a=a85_0x566d39,_0x514749=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsById'])(_0x3a18e9,_0x5c8795['attachmentsId']),_0x72f7bb=await components_api_1[_0x4b724a(0x1c4)][_0x4b724a(0x1bd)](_0x3a18e9,_0x514749[_0x4b724a(0x1a3)](({ParentId:_0x11a261})=>_0x11a261))['then'](_0x30c475=>components_api_1[_0x4b724a(0x1c4)][_0x4b724a(0x19e)](_0x30c475)),_0x4cac5c=await retrieveTestClasses(_0x3a18e9,_0x514749,_0x72f7bb),_0x1d2796={'ParentId':_0x5c8795[_0x4b724a(0x1a8)],'Name':ATTACHMENT_NAME,'Description':ATTACHMENT_DESCRIPTION,'Body':Buffer[_0x4b724a(0x1a4)](_0x4cac5c[_0x4b724a(0x1bb)]('\x0a'))[_0x4b724a(0x1b1)](_0x4b724a(0x1c9))};await _0x3a18e9[_0x4b724a(0x1a2)](_0x4b724a(0x1a9)+constants_1['SALESFORCE_API_VERSION']+_0x4b724a(0x19f),_0x1d2796);}exports['fetchTestClasses']=fetchTestClasses;async function retrieveTestClasses(_0x3cbdb7,_0x1a1b91,_0x52f624){const _0x4c3cdd=[],_0x25be30=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0x1a1b91,_0x3cbdb7),_0x862b41=_0x25be30['map'](_0xb2d129=>_0xb2d129['id']);return await getTestClassesNames(_0x3cbdb7,_0x862b41,_0x52f624,_0x1a1b91)['then'](_0x325a4d=>{const _0x9caa6a=a85_0x294f;_0x4c3cdd[_0x9caa6a(0x1cd)](..._0x325a4d);}),_0x4c3cdd;}function a85_0x294f(_0x7d9948,_0x3650ae){const _0x3957e2=a85_0x4451();return a85_0x294f=function(_0x20bbac,_0x1695ff){_0x20bbac=_0x20bbac-0x19d;let _0x445100=_0x3957e2[_0x20bbac];return _0x445100;},a85_0x294f(_0x7d9948,_0x3650ae);}async function getTestClassesNames(_0x2d182b,_0x37e056,_0x59ae63,_0xe2b91e){const _0x5afb9a=a85_0x566d39,_0x301a87=await(0x0,fetch_attachments_1['fetchAttachments'])(_0x2d182b,BINARY_FIELDS,_0x37e056),_0x3fe537=[],_0xe1d84f=_0xe2b91e[_0x5afb9a(0x1a1)]((_0x5ad604,_0x3cfd86)=>{const _0x419dd7=_0x5afb9a;var _0x45edb6;const _0x2c14e1=(_0x45edb6=_0x59ae63[_0x419dd7(0x1c2)](_0xabda8e=>_0xabda8e['Id']===_0x3cfd86[_0x419dd7(0x1ca)]))===null||_0x45edb6===void 0x0?void 0x0:_0x45edb6[_0x419dd7(0x1ac)][_0x419dd7(0x1be)];if(!_0x2c14e1)throw new Error(_0x419dd7(0x1ad));return{..._0x5ad604,[_0x3cfd86['Id']]:_0x2c14e1};},{});for(const _0x4f22e3 of _0x301a87){const _0x30200c=await zip_1[_0x5afb9a(0x1cc)][_0x5afb9a(0x1b4)](_0x4f22e3[_0x5afb9a(0x1ba)][_0x5afb9a(0x1b9)]);for(const _0x5e7f46 of Object[_0x5afb9a(0x1b0)](_0x30200c[_0x5afb9a(0x1b2)])){if(!_0x30200c[_0x5afb9a(0x1b2)][_0x5e7f46][_0x5afb9a(0x1c5)]){const _0x38c7de=await _0x30200c[_0x5afb9a(0x1b2)][_0x5e7f46][_0x5afb9a(0x1a7)](_0x5afb9a(0x1c0)),_0x6edad5=new RegExp(_0x5afb9a(0x1b8),'i');if(_0x6edad5['test'](_0x38c7de)){const _0xb6e1fc=_0xe1d84f[_0x4f22e3['id']];if(!_0xb6e1fc)throw new Error('No\x20component\x20by\x20attachment\x20id');_0x3fe537[_0x5afb9a(0x1cd)](_0xb6e1fc);}}}}return _0x3fe537;}