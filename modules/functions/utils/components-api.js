const a90_0x246957=a90_0x4195;(function(_0x1af334,_0x193e17){const _0x1b7ccb=a90_0x4195,_0x5b0428=_0x1af334();while(!![]){try{const _0x5148f0=-parseInt(_0x1b7ccb(0x13d))/0x1+parseInt(_0x1b7ccb(0x132))/0x2+parseInt(_0x1b7ccb(0x148))/0x3*(-parseInt(_0x1b7ccb(0x13c))/0x4)+-parseInt(_0x1b7ccb(0x122))/0x5+parseInt(_0x1b7ccb(0x142))/0x6+-parseInt(_0x1b7ccb(0x11e))/0x7+parseInt(_0x1b7ccb(0x130))/0x8;if(_0x5148f0===_0x193e17)break;else _0x5b0428['push'](_0x5b0428['shift']());}catch(_0x23ca55){_0x5b0428['push'](_0x5b0428['shift']());}}}(a90_0x14b9,0xcc5b1));const a90_0x43a016=(function(){let _0x5d6246=!![];return function(_0x3d82e6,_0xe35fa5){const _0xa614b7=_0x5d6246?function(){const _0x519383=a90_0x4195;if(_0xe35fa5){const _0x318e47=_0xe35fa5[_0x519383(0x131)](_0x3d82e6,arguments);return _0xe35fa5=null,_0x318e47;}}:function(){};return _0x5d6246=![],_0xa614b7;};}()),a90_0x3fab3d=a90_0x43a016(this,function(){const _0x5253d5=a90_0x4195;return a90_0x3fab3d[_0x5253d5(0x147)]()[_0x5253d5(0x12c)]('(((.+)+)+)+$')[_0x5253d5(0x147)]()[_0x5253d5(0x135)](a90_0x3fab3d)[_0x5253d5(0x12c)](_0x5253d5(0x145));});a90_0x3fab3d();'use strict';var __importDefault=this&&this[a90_0x246957(0x12b)]||function(_0x5c6148){const _0xf4f1c=a90_0x246957;return _0x5c6148&&_0x5c6148[_0xf4f1c(0x149)]?_0x5c6148:{'default':_0x5c6148};};Object[a90_0x246957(0x12e)](exports,'__esModule',{'value':!![]}),exports['ComponentsApi']=exports[a90_0x246957(0x136)]=void 0x0;const utils_1=require(a90_0x246957(0x126)),constants_1=require(a90_0x246957(0x13e)),flosum_naming_utils_1=require('../../git/salesforce/utils/flosum-naming.utils'),adm_zip_1=__importDefault(require('adm-zip')),CHUNK_QUERY_SIZE=0x1f4;function a90_0x4195(_0x2a12a6,_0x3042e0){const _0x3e6f15=a90_0x14b9();return a90_0x4195=function(_0x3fab3d,_0x43a016){_0x3fab3d=_0x3fab3d-0x11e;let _0x14b906=_0x3e6f15[_0x3fab3d];return _0x14b906;},a90_0x4195(_0x2a12a6,_0x3042e0);}exports[a90_0x246957(0x136)]=0x2100000;class ComponentsApi{static async['fetchComponentsDetailsByComponentsHistory'](_0x5f01ea,_0x3d9dc7){const _0x5552f8=a90_0x246957,_0x4c9155=[],_0x500964=(0x0,utils_1[_0x5552f8(0x12f)])(_0x3d9dc7,CHUNK_QUERY_SIZE);for(const _0x4f580d of _0x500964){const _0x469084=_0x5552f8(0x123)+constants_1[_0x5552f8(0x125)]+_0x5552f8(0x129)+constants_1[_0x5552f8(0x125)]+_0x5552f8(0x143)+constants_1[_0x5552f8(0x125)]+_0x5552f8(0x129)+constants_1['FLOSUM_NAMESPACE']+'Component_Type__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20'+constants_1['FLOSUM_NAMESPACE']+_0x5552f8(0x134)+('\x27'+_0x4f580d[_0x5552f8(0x133)](_0x5552f8(0x120))+'\x27')+')',{data:_0x15487d}=await _0x5f01ea[_0x5552f8(0x124)]('/services/data/'+constants_1['SALESFORCE_API_VERSION']+'/query/',{'params':{'q':_0x469084}});_0x4c9155[_0x5552f8(0x139)](..._0x15487d[_0x5552f8(0x138)]);}return _0x4c9155;}static['removeNamespacePrefix'](_0xbd666e){const _0x55238e=a90_0x246957,_0x2c1038=_0xbd666e[_0x55238e(0x13b)](_0x2fcc51=>{const _0x3b5900=_0x55238e,_0x4c977f=(0x0,flosum_naming_utils_1[_0x3b5900(0x13a)])(_0x2fcc51,['Id','Component__r']);return _0x4c977f[_0x3b5900(0x144)]=(0x0,flosum_naming_utils_1[_0x3b5900(0x13a)])(_0x4c977f[_0x3b5900(0x144)],[_0x3b5900(0x127),_0x3b5900(0x11f)]),_0x4c977f;});return _0x2c1038;}static async[a90_0x246957(0x137)](_0x1ef815,_0x8f82c3){const _0x5cd5c7=a90_0x246957;var _0x46d760;const _0x4db1d4=_0x1ef815[_0x5cd5c7(0x140)]()['filter'](_0x513c9a=>!_0x513c9a['isDirectory'])[_0x5cd5c7(0x128)]((_0x32b452,_0x195915)=>_0x32b452[_0x5cd5c7(0x141)]()['length']>_0x195915['getData']()[_0x5cd5c7(0x12d)]?-0x1:0x1),_0x2e23bb=new adm_zip_1['default']();for(const {entryName:_0x390c54}of _0x4db1d4){const _0x3b6bb2=(_0x46d760=_0x1ef815['getEntry'](_0x390c54))===null||_0x46d760===void 0x0?void 0x0:_0x46d760[_0x5cd5c7(0x141)]();_0x2e23bb[_0x5cd5c7(0x12a)](_0x390c54,_0x3b6bb2),_0x1ef815[_0x5cd5c7(0x121)](_0x390c54);if(_0x8f82c3-_0x2e23bb[_0x5cd5c7(0x146)]()[_0x5cd5c7(0x147)](_0x5cd5c7(0x13f))[_0x5cd5c7(0x12d)]<exports[_0x5cd5c7(0x136)])break;}return[_0x1ef815,_0x2e23bb];}}exports['ComponentsApi']=ComponentsApi;function a90_0x14b9(){const _0x3a1ddb=['Component_Type__c','\x27,\x27','deleteFile','6215935fLCZjE','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20','get','FLOSUM_NAMESPACE','../../shared/utils','Component_Name__c','sort','Component__r.','addFile','__importDefault','search','length','defineProperty','chunkArray','26033464TMXyXB','apply','1462034NtpVHq','join','Component_History__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20IN\x20(','constructor','MAX_ZIP_SIZE','splitZip','records','push','extractFieldsFromRecord','map','4380968wjwmWb','1370528ViYaDz','../../../constants','base64','getEntries','getData','6391338caltHz','Component_Name__c,\x20','Component__r','(((.+)+)+)+$','toBuffer','toString','3TMWaXS','__esModule','3530975bumlcw'];a90_0x14b9=function(){return _0x3a1ddb;};return a90_0x14b9();}