function a335_0x7834(){const _0x2d0c4f=['push','toString','SUCCESS','_logger','reduce','createOutboundPackages','name__v','createExportOutboundPackages','Removing\x20components\x20from\x20outbound\x20packages.','1849794EeInoF','8354070DRpDhp','package_component__v','6436DcacEl','6PLvklJ','(((.+)+)+)+$','map','MAXIMUM_SIZE_OF_PACKAGE','arraybuffer','get','ENDPOINT_VQL','deleteVeevaObjectRecords','jszip','length','log','PackageExportService','../enums/status.enums','Creating\x20outbound\x20packages','Create\x20Export\x20outbound\x20packages.','content-type','ENDPOINT_EXPORT_IMPORT_PACKAGE','VeevaConstants','migration__sys','ENDPOINT_CREATE_RECORDS','executeVQL','search','143FtWSKm','getJobResult','default','18rXlqSg','getEndpointArtifactList','getPackageNames','_veevaService','Deleting\x20outbound\x20packages.','parse','join','outbound_package__v','11uqXXXu','3925GjFfhW','artifacts','rel','includes','Adding\x20components\x20to\x20outbound\x20package','314QQDuOc','createVeevaObjectRecords','Retrieve\x20Jobs\x20Status','export','loadAsync','post','fill','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20outbound_package__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20CONTAINS\x20(\x27','_connection','11302gFJuHK','VeevaResponseStatus','defineProperty','../classes/errors/veeva-error','38496pfhKtK','errors','values','\x27,\x27','filter','__esModule','retrieveVPKList','Getting\x20names\x20of\x20outbound\x20packages','all','responseStatus','ceil','application/x-www-form-urlencoded','href','deletePackageComponents','1387715UEDjzP','4123128sTIgFx','deleteOutboundPackages','packageName','links'];a335_0x7834=function(){return _0x2d0c4f;};return a335_0x7834();}const a335_0x45ab33=a335_0x3cd5;(function(_0x26b6cf,_0x15d3e2){const _0x5313bf=a335_0x3cd5,_0x33a9e6=_0x26b6cf();while(!![]){try{const _0x4f1719=parseInt(_0x5313bf(0x1a8))/0x1*(-parseInt(_0x5313bf(0x19f))/0x2)+-parseInt(_0x5313bf(0x1c8))/0x3+-parseInt(_0x5313bf(0x1cb))/0x4*(-parseInt(_0x5313bf(0x19a))/0x5)+-parseInt(_0x5313bf(0x1cc))/0x6*(-parseInt(_0x5313bf(0x1ba))/0x7)+parseInt(_0x5313bf(0x1bb))/0x8*(parseInt(_0x5313bf(0x191))/0x9)+-parseInt(_0x5313bf(0x1c9))/0xa*(-parseInt(_0x5313bf(0x199))/0xb)+-parseInt(_0x5313bf(0x1ac))/0xc*(-parseInt(_0x5313bf(0x18e))/0xd);if(_0x4f1719===_0x15d3e2)break;else _0x33a9e6['push'](_0x33a9e6['shift']());}catch(_0x5047c2){_0x33a9e6['push'](_0x33a9e6['shift']());}}}(a335_0x7834,0xed3ff));const a335_0x378df6=(function(){let _0xc40373=!![];return function(_0x30665d,_0x385661){const _0x115d06=_0xc40373?function(){if(_0x385661){const _0x5e3592=_0x385661['apply'](_0x30665d,arguments);return _0x385661=null,_0x5e3592;}}:function(){};return _0xc40373=![],_0x115d06;};}()),a335_0x55be4a=a335_0x378df6(this,function(){const _0x105b14=a335_0x3cd5;return a335_0x55be4a[_0x105b14(0x1c0)]()[_0x105b14(0x18d)](_0x105b14(0x1cd))[_0x105b14(0x1c0)]()['constructor'](a335_0x55be4a)[_0x105b14(0x18d)](_0x105b14(0x1cd));});a335_0x55be4a();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x50317b){return _0x50317b&&_0x50317b['__esModule']?_0x50317b:{'default':_0x50317b};};Object[a335_0x45ab33(0x1aa)](exports,a335_0x45ab33(0x1b1),{'value':!![]}),exports[a335_0x45ab33(0x183)]=void 0x0;const veeva_constants_1=require('../constants/veeva.constants'),jszip_1=__importDefault(require(a335_0x45ab33(0x180))),status_enums_1=require(a335_0x45ab33(0x184)),veeva_error_1=require(a335_0x45ab33(0x1ab));function a335_0x3cd5(_0x2c246f,_0x43f94a){const _0x576be7=a335_0x7834();return a335_0x3cd5=function(_0x55be4a,_0x378df6){_0x55be4a=_0x55be4a-0x17e;let _0x783475=_0x576be7[_0x55be4a];return _0x783475;},a335_0x3cd5(_0x2c246f,_0x43f94a);}class PackageExportService{constructor({veevaService:_0x1cdddf,connection:_0x5f1132,logger:_0x20d187}){const _0x5a3919=a335_0x45ab33;this[_0x5a3919(0x194)]=_0x1cdddf,this[_0x5a3919(0x1a7)]=_0x5f1132,this['_logger']=_0x20d187;}async[a335_0x45ab33(0x1c4)](_0x57d39f,_0x50c5d2){const _0x6b8e3b=a335_0x45ab33;this['_logger']['log'](_0x6b8e3b(0x185));const _0xe5bfab=veeva_constants_1[_0x6b8e3b(0x189)][_0x6b8e3b(0x18b)]+'outbound_package__v',_0x58ffec=new Array(_0x57d39f)[_0x6b8e3b(0x1a5)]({'summary__v':_0x50c5d2,'object_type__v.api__name__v':_0x6b8e3b(0x18a)});return await this['_veevaService'][_0x6b8e3b(0x1a0)](_0xe5bfab,_0x58ffec);}async['createPackageComponents'](_0x5727f2,_0x1c4db0){const _0x23b324=a335_0x45ab33;this['_logger'][_0x23b324(0x182)](_0x23b324(0x19e));const _0x8974e9=veeva_constants_1[_0x23b324(0x189)][_0x23b324(0x18b)]+_0x23b324(0x1ca),_0x3f4a9d=_0x5727f2['map']((_0x275f51,_0x3f0902)=>({'vault_component__v':_0x275f51['id'],'outbound_package__v':_0x1c4db0[Math[_0x23b324(0x1b6)]((_0x3f0902+0x1)/veeva_constants_1[_0x23b324(0x189)]['MAXIMUM_SIZE_OF_PACKAGE'])-0x1]}));return await this[_0x23b324(0x194)][_0x23b324(0x1a0)](_0x8974e9,_0x3f4a9d);}async['getPackageNames'](_0x4b0137){const _0x31ba82=a335_0x45ab33;this[_0x31ba82(0x1c2)][_0x31ba82(0x182)](_0x31ba82(0x1b3));const _0x55f0d7=_0x31ba82(0x1a6)+_0x4b0137[_0x31ba82(0x197)](_0x31ba82(0x1af))+'\x27)',_0x22e9a2=veeva_constants_1[_0x31ba82(0x189)][_0x31ba82(0x17e)]+_0x55f0d7,_0x5179b8=await this[_0x31ba82(0x194)][_0x31ba82(0x18c)](_0x22e9a2);return _0x5179b8[_0x31ba82(0x1c3)]((_0x29d237,_0x1938d4)=>_0x29d237['set'](_0x1938d4['id'],_0x1938d4[_0x31ba82(0x1c5)]),new Map());}async['createExportOutboundPackages'](_0x40fe4a){const _0x45fdf3=a335_0x45ab33;this[_0x45fdf3(0x1c2)][_0x45fdf3(0x182)](_0x45fdf3(0x186));const _0x12b05a=[],_0x141611=_0x40fe4a[_0x45fdf3(0x1ce)](_0x5be753=>{const _0x43fd96=_0x45fdf3;return this[_0x43fd96(0x1a7)][_0x43fd96(0x1a4)](veeva_constants_1[_0x43fd96(0x189)][_0x43fd96(0x188)],encodeURI(_0x43fd96(0x1bd))+'='+encodeURI(_0x5be753),{'headers':{'Content-Type':_0x43fd96(0x1b7)}});}),_0x528a82=await Promise[_0x45fdf3(0x1b4)](_0x141611);for(const {data:_0x40905a}of _0x528a82){if(_0x40905a[_0x45fdf3(0x1b5)]===status_enums_1[_0x45fdf3(0x1a9)][_0x45fdf3(0x1c1)]){const {url:_0x3515f6}=_0x40905a;_0x12b05a[_0x45fdf3(0x1bf)](_0x3515f6);}else throw new veeva_error_1['VeevaError'](_0x40905a['errors']);}return _0x12b05a;}async[a335_0x45ab33(0x192)](_0x3159b7){const _0x560302=a335_0x45ab33;this['_logger'][_0x560302(0x182)](_0x560302(0x1a1));const _0x5ecc55=[],_0x25f295=await this['_veevaService'][_0x560302(0x18f)](_0x3159b7);for(const _0x2bc0b9 of _0x25f295){const _0x15855e=_0x2bc0b9[_0x560302(0x1be)][_0x560302(0x1b0)](_0x149844=>_0x149844[_0x560302(0x19c)]===_0x560302(0x19b))[_0x560302(0x1ce)](_0xc7fc0a=>_0xc7fc0a[_0x560302(0x1b8)]);_0x5ecc55['push'](..._0x15855e);}return _0x5ecc55;}async['retrieveVPKList'](_0x403860){const _0x3e8775=a335_0x45ab33;var _0x1d904f;const _0x1b7860=[];this[_0x3e8775(0x1c2)][_0x3e8775(0x182)]('Retrieve\x20Outbound\x20Package\x20zip\x20list');for(const _0x3fcace of _0x403860){const {data:_0x220262,headers:_0x2d308a}=await this['_connection'][_0x3e8775(0x1d1)](_0x3fcace,{'responseType':_0x3e8775(0x1d0)}),_0x20fe4e=(_0x1d904f=_0x2d308a[_0x3e8775(0x187)])===null||_0x1d904f===void 0x0?void 0x0:_0x1d904f[_0x3e8775(0x19d)]('application/json');if(!_0x20fe4e){const _0x4c2a72=_0x220262,_0x410e84=new jszip_1[(_0x3e8775(0x190))]();await _0x410e84[_0x3e8775(0x1a3)](_0x4c2a72),_0x1b7860[_0x3e8775(0x1bf)](_0x410e84);}else{const _0x1e1b12=JSON[_0x3e8775(0x196)](_0x220262);throw new veeva_error_1['VeevaError'](_0x1e1b12[_0x3e8775(0x1ad)]);}}return _0x1b7860;}async[a335_0x45ab33(0x1b9)](_0x4c7655){const _0x2fa280=a335_0x45ab33;this[_0x2fa280(0x1c2)][_0x2fa280(0x182)](_0x2fa280(0x1c7));const _0x51bdb9=veeva_constants_1[_0x2fa280(0x189)]['ENDPOINT_CREATE_RECORDS']+_0x2fa280(0x1ca);await this[_0x2fa280(0x194)][_0x2fa280(0x17f)](_0x51bdb9,_0x4c7655);}async[a335_0x45ab33(0x1bc)](_0x586a5c){const _0x34015b=a335_0x45ab33;this['_logger']['log'](_0x34015b(0x195));const _0x5dc92c=veeva_constants_1[_0x34015b(0x189)][_0x34015b(0x18b)]+_0x34015b(0x198);await this[_0x34015b(0x194)][_0x34015b(0x17f)](_0x5dc92c,_0x586a5c);}async[a335_0x45ab33(0x1a2)](_0x93075e,_0x5442e1){const _0x556516=a335_0x45ab33,_0x2311c3=await this[_0x556516(0x1c4)](Math['ceil'](_0x93075e[_0x556516(0x181)]/veeva_constants_1[_0x556516(0x189)][_0x556516(0x1cf)]),_0x5442e1),_0x326b64=await this['createPackageComponents'](_0x93075e,_0x2311c3),_0x11720f=await this[_0x556516(0x193)](_0x2311c3),_0x1a7472=await this[_0x556516(0x1c6)](Array['from'](_0x11720f[_0x556516(0x1ae)]())),_0xca6d18=await this[_0x556516(0x192)](_0x1a7472),_0x123202=await this[_0x556516(0x1b2)](_0xca6d18);return await this[_0x556516(0x1b9)](_0x326b64),await this[_0x556516(0x1bc)](_0x2311c3),_0x123202;}}exports[a335_0x45ab33(0x183)]=PackageExportService;