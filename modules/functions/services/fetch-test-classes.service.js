const a53_0x510f89=a53_0x4390;(function(_0x2455fe,_0x385569){const _0x196a57=a53_0x4390,_0x2dc9f4=_0x2455fe();while(!![]){try{const _0x4e46c1=-parseInt(_0x196a57(0x13c))/0x1*(-parseInt(_0x196a57(0x130))/0x2)+parseInt(_0x196a57(0x14c))/0x3*(-parseInt(_0x196a57(0x12f))/0x4)+parseInt(_0x196a57(0x13e))/0x5*(parseInt(_0x196a57(0x12b))/0x6)+-parseInt(_0x196a57(0x136))/0x7+-parseInt(_0x196a57(0x12d))/0x8+parseInt(_0x196a57(0x14d))/0x9*(-parseInt(_0x196a57(0x128))/0xa)+-parseInt(_0x196a57(0x138))/0xb*(-parseInt(_0x196a57(0x14b))/0xc);if(_0x4e46c1===_0x385569)break;else _0x2dc9f4['push'](_0x2dc9f4['shift']());}catch(_0x3dbbe8){_0x2dc9f4['push'](_0x2dc9f4['shift']());}}}(a53_0x3a57,0x4ba2e));function a53_0x4390(_0x1bce4c,_0x426198){const _0x172912=a53_0x3a57();return a53_0x4390=function(_0x1064ac,_0x4e34b4){_0x1064ac=_0x1064ac-0x122;let _0x3a57c3=_0x172912[_0x1064ac];return _0x3a57c3;},a53_0x4390(_0x1bce4c,_0x426198);}const a53_0x4e34b4=(function(){let _0x5b7152=!![];return function(_0x4b9394,_0x286921){const _0xf2965=_0x5b7152?function(){const _0x2bc020=a53_0x4390;if(_0x286921){const _0x23b82b=_0x286921[_0x2bc020(0x148)](_0x4b9394,arguments);return _0x286921=null,_0x23b82b;}}:function(){};return _0x5b7152=![],_0xf2965;};}()),a53_0x1064ac=a53_0x4e34b4(this,function(){const _0x22efc3=a53_0x4390;return a53_0x1064ac[_0x22efc3(0x122)]()[_0x22efc3(0x146)]('(((.+)+)+)+$')['toString']()['constructor'](a53_0x1064ac)['search'](_0x22efc3(0x13b));});a53_0x1064ac();'use strict';Object[a53_0x510f89(0x140)](exports,'__esModule',{'value':!![]}),exports['fetchTestClasses']=void 0x0;const constants_1=require('../../../constants'),zip_1=require(a53_0x510f89(0x126)),components_api_1=require(a53_0x510f89(0x149)),fetch_attachments_1=require(a53_0x510f89(0x13d)),BINARY_FIELDS=[a53_0x510f89(0x139)],ATTACHMENT_NAME='TEST\x20CLASSES',ATTACHMENT_DESCRIPTION=a53_0x510f89(0x13a);async function fetchTestClasses(_0x293b67,_0x464534){const _0x9e2d33=a53_0x510f89,_0x155c48=await(0x0,fetch_attachments_1[_0x9e2d33(0x12a)])(_0x464534,_0x293b67['attachmentsId']),_0x51385a=await components_api_1[_0x9e2d33(0x132)][_0x9e2d33(0x143)](_0x464534,_0x155c48['map'](({ParentId:_0x3801dd})=>_0x3801dd))[_0x9e2d33(0x135)](_0x38371f=>components_api_1['ComponentsApi']['removeNamespacePrefix'](_0x38371f)),_0x2dbead=await retrieveTestClasses(_0x464534,_0x155c48,_0x51385a),_0x7a03a9={'ParentId':_0x293b67[_0x9e2d33(0x127)],'Name':ATTACHMENT_NAME,'Description':ATTACHMENT_DESCRIPTION,'Body':Buffer[_0x9e2d33(0x144)](_0x2dbead[_0x9e2d33(0x129)]('\x0a'))['toString']('base64')};await _0x464534[_0x9e2d33(0x131)]('/services/data/'+constants_1[_0x9e2d33(0x142)]+'/sobjects/Attachment',_0x7a03a9);}exports['fetchTestClasses']=fetchTestClasses;async function retrieveTestClasses(_0x365273,_0x3d01c3,_0x1d95c8){const _0x579817=a53_0x510f89,_0x3a2fee=[],_0x541fa1=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0x3d01c3,_0x365273),_0x576445=_0x541fa1['map'](_0x4722ec=>_0x4722ec['id']);return await getTestClassesNames(_0x365273,_0x576445,_0x1d95c8,_0x3d01c3)[_0x579817(0x135)](_0x5abd99=>{const _0xffb55=_0x579817;_0x3a2fee[_0xffb55(0x12e)](..._0x5abd99);}),_0x3a2fee;}function a53_0x3a57(){const _0x435dd8=['348WigXJh','keys','713720fjiqVP','push','212iZQCIz','3202znJgiQ','post','ComponentsApi','@istest','No\x20component\x20by\x20attachment\x20id','then','647059EMsbhx','files','8806699qwykhL','Body','TEST\x20CLASSES','(((.+)+)+)+$','57Gkrhgl','../../shared/utils/fetch-attachments','44435DhmuAe','async','defineProperty','string','SALESFORCE_API_VERSION','fetchComponentsDetailsByComponentsHistory','from','test','search','dir','apply','../utils/components-api','find','12tQmfhn','24027xadfFI','4422393YAmtIk','unzip','toString','reduce','values','Component_Name__c','../../git/parsers/utils/zip','metadataLogId','10VnSqPZ','join','fetchAttachmentsDetailsById'];a53_0x3a57=function(){return _0x435dd8;};return a53_0x3a57();}async function getTestClassesNames(_0x346d01,_0x498015,_0x17823f,_0x719c69){const _0x2ab793=a53_0x510f89,_0x26cc2a=await(0x0,fetch_attachments_1['fetchAttachments'])(_0x346d01,BINARY_FIELDS,_0x498015),_0x518e6c=[],_0x41e012=_0x719c69[_0x2ab793(0x123)]((_0x18be1d,_0x4094f1)=>{const _0x3aa587=_0x2ab793;var _0x186fb8;const _0x494cde=(_0x186fb8=_0x17823f[_0x3aa587(0x14a)](_0x7f7379=>_0x7f7379['Id']===_0x4094f1['ParentId']))===null||_0x186fb8===void 0x0?void 0x0:_0x186fb8['Component__r'][_0x3aa587(0x125)];if(!_0x494cde)throw new Error(_0x3aa587(0x134));return{..._0x18be1d,[_0x4094f1['Id']]:_0x494cde};},{});for(const _0x2a8136 of _0x26cc2a){const _0x30f4e0=await zip_1['Zip'][_0x2ab793(0x14e)](_0x2a8136[_0x2ab793(0x124)][_0x2ab793(0x139)]);for(const _0x4f86eb of Object[_0x2ab793(0x12c)](_0x30f4e0[_0x2ab793(0x137)])){if(!_0x30f4e0[_0x2ab793(0x137)][_0x4f86eb][_0x2ab793(0x147)]){const _0xa66eff=await _0x30f4e0['files'][_0x4f86eb][_0x2ab793(0x13f)](_0x2ab793(0x141)),_0x2a5428=new RegExp(_0x2ab793(0x133),'i');if(_0x2a5428[_0x2ab793(0x145)](_0xa66eff)){const _0x5094ac=_0x41e012[_0x2a8136['id']];if(!_0x5094ac)throw new Error(_0x2ab793(0x134));_0x518e6c['push'](_0x5094ac);}}}}return _0x518e6c;}