const a392_0xdb6e65=a392_0x1be0;(function(_0x539370,_0x649e24){const _0x508f27=a392_0x1be0,_0x11e015=_0x539370();while(!![]){try{const _0x6d1a54=parseInt(_0x508f27(0x168))/0x1*(-parseInt(_0x508f27(0x166))/0x2)+parseInt(_0x508f27(0x190))/0x3*(-parseInt(_0x508f27(0x13e))/0x4)+-parseInt(_0x508f27(0x16f))/0x5*(parseInt(_0x508f27(0x15c))/0x6)+-parseInt(_0x508f27(0x17d))/0x7+parseInt(_0x508f27(0x141))/0x8+-parseInt(_0x508f27(0x183))/0x9+parseInt(_0x508f27(0x180))/0xa*(parseInt(_0x508f27(0x174))/0xb);if(_0x6d1a54===_0x649e24)break;else _0x11e015['push'](_0x11e015['shift']());}catch(_0x4f07ac){_0x11e015['push'](_0x11e015['shift']());}}}(a392_0x48ba,0xdf2dc));const a392_0x246dbf=(function(){let _0x1470b6=!![];return function(_0x4d95ef,_0x22fd6a){const _0x28e109=_0x1470b6?function(){const _0x468005=a392_0x1be0;if(_0x22fd6a){const _0x1faa55=_0x22fd6a[_0x468005(0x147)](_0x4d95ef,arguments);return _0x22fd6a=null,_0x1faa55;}}:function(){};return _0x1470b6=![],_0x28e109;};}()),a392_0x3fd7b5=a392_0x246dbf(this,function(){const _0x36c606=a392_0x1be0;return a392_0x3fd7b5[_0x36c606(0x151)]()[_0x36c606(0x157)](_0x36c606(0x13a))[_0x36c606(0x151)]()[_0x36c606(0x149)](a392_0x3fd7b5)[_0x36c606(0x157)]('(((.+)+)+)+$');});a392_0x3fd7b5();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x50f883){return _0x50f883&&_0x50f883['__esModule']?_0x50f883:{'default':_0x50f883};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a392_0xdb6e65(0x14c)]=void 0x0;function a392_0x48ba(){const _0x18460c=['83110lptbMc','PackageComponentStatus','links','15726231BubyKl','status','VERIFIED','responseStatus','uniqueName','convertDeploymentAction','VeevaResponseStatus','../dtos/package-component.dto','Cannot\x20find\x20deployment\x20results','vaultPackage','createReadStream','Import\x20package','_connection','108321sjtGRa','post','_logger','errors','(((.+)+)+)+$','DEPLOYED_WITH_WARNINGS','deployPackage','url','76XToJrx','Validation.log','importVpk','10175296ZtSOBj','formPackageComponentList','Get\x20deploy\x20result','VeevaError','put','reduce','apply','get','constructor','ENDPOINT_VALIDATE_PACKAGE','map','PackageImportService','../dtos/package-details.dto','log','{package_id}','groupToMap','toString','artifacts','DEPLOYED','Validation\x20Log','filename','getDeployDetailsAndSaveLog','search','Package\x20not\x20verified','SUCCESS','isDeployed','Wait\x20Executing\x20job','20070wSMHxM','multipart/form-data','file','responseDetails','VeevaConstants','getLogResultText','import','length','PackageComponentDto','../enums/status.enums','2wAdcHm','replace','1356259pGKHxT','find','VeevaPackageStatus','packageComponentList','filter','ArrayUtils','../utils/array.utils','565HnQUhK','getValidationDetailsAndSaveLog','fillPackageDeploymentAction','form-data','package_components','5434NGzZaa','default','data','_veevaService','endsWith','Get\x20validation\x20details.','../classes/errors/veeva-error','packageId','getJobDetailUrl','2070390sHOejv','_saveLog','includes'];a392_0x48ba=function(){return _0x18460c;};return a392_0x48ba();}const veeva_constants_1=require('../constants/veeva.constants'),status_enums_1=require(a392_0xdb6e65(0x165)),veeva_error_1=require(a392_0xdb6e65(0x17a)),form_data_1=__importDefault(require(a392_0xdb6e65(0x172))),fs_1=require('fs'),veeva_auth_utils_1=require('../utils/veeva-auth.utils'),package_details_dto_1=require(a392_0xdb6e65(0x14d)),package_component_dto_1=require(a392_0xdb6e65(0x18a)),array_utils_1=require(a392_0xdb6e65(0x16e));function a392_0x1be0(_0x1ba8a9,_0x1dfed4){const _0x257cb5=a392_0x48ba();return a392_0x1be0=function(_0x3fd7b5,_0x246dbf){_0x3fd7b5=_0x3fd7b5-0x137;let _0x48bac1=_0x257cb5[_0x3fd7b5];return _0x48bac1;},a392_0x1be0(_0x1ba8a9,_0x1dfed4);}class PackageImportService{constructor({veevaService:_0x242cb8,connection:_0x10aaf5,logger:_0x5093cc,saveLog:_0x26b2ea}){const _0x29ff7f=a392_0xdb6e65;this['_veevaService']=_0x242cb8,this[_0x29ff7f(0x18f)]=_0x10aaf5,this[_0x29ff7f(0x138)]=_0x5093cc,this[_0x29ff7f(0x17e)]=_0x26b2ea;}async['importVpk'](_0x28cb62,_0x32d723=0x1){const _0x481d21=a392_0xdb6e65;this[_0x481d21(0x138)][_0x481d21(0x14e)](_0x481d21(0x18e));const _0x285739=new form_data_1[(_0x481d21(0x175))]();_0x285739['append'](_0x481d21(0x15e),(0x0,fs_1[_0x481d21(0x18d)])(_0x28cb62));const _0x519bfe=await this['_connection'][_0x481d21(0x145)](veeva_constants_1['VeevaConstants']['ENDPOINT_EXPORT_IMPORT_PACKAGE'],_0x285739,{'headers':{'Content-Type':_0x481d21(0x15d)}}),_0x2319f8=_0x519bfe['data'];if(_0x2319f8[_0x481d21(0x186)]===status_enums_1[_0x481d21(0x189)][_0x481d21(0x159)])return _0x2319f8[_0x481d21(0x13d)];else{if(_0x32d723>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this[_0x481d21(0x18f)]),await this['importVpk'](_0x28cb62,_0x32d723-0x1);throw new veeva_error_1[(_0x481d21(0x144))](_0x2319f8[_0x481d21(0x139)]);}}async[a392_0xdb6e65(0x13c)](_0x4321b6){const _0x3355d6=a392_0xdb6e65;this[_0x3355d6(0x138)][_0x3355d6(0x14e)]('Deploy\x20package');const _0x35010a=await this[_0x3355d6(0x18f)][_0x3355d6(0x137)](veeva_constants_1[_0x3355d6(0x160)]['ENDPOINT_DEPLOY_PACKAGE'][_0x3355d6(0x167)](_0x3355d6(0x14f),_0x4321b6)),_0x136330=await _0x35010a[_0x3355d6(0x176)];if(_0x136330[_0x3355d6(0x186)]===status_enums_1[_0x3355d6(0x189)][_0x3355d6(0x159)])return _0x136330[_0x3355d6(0x13d)];else throw new veeva_error_1[(_0x3355d6(0x144))](_0x136330[_0x3355d6(0x139)]);}async[a392_0xdb6e65(0x17c)](_0x28d4e9){const _0x2a62c2=a392_0xdb6e65;this[_0x2a62c2(0x138)][_0x2a62c2(0x14e)](_0x2a62c2(0x15b));const [_0x15d912]=await this[_0x2a62c2(0x177)]['getJobResult']([_0x28d4e9]);return _0x15d912[_0x2a62c2(0x182)][_0x2a62c2(0x169)](_0x529c9e=>_0x529c9e['rel']===_0x2a62c2(0x152))['href'];}async['getValidationDetailsAndSaveLog'](_0x32b6d2){const _0x3f9dd9=a392_0xdb6e65;this[_0x3f9dd9(0x138)][_0x3f9dd9(0x14e)](_0x3f9dd9(0x179));const {data:_0x12f2a2}=await this['_connection'][_0x3f9dd9(0x148)](_0x32b6d2);if(_0x12f2a2[_0x3f9dd9(0x186)]===status_enums_1['VeevaResponseStatus'][_0x3f9dd9(0x159)]){const _0x275c8d=new package_details_dto_1['PackageDetailsDto'](),{log:_0x1dd393,id:_0x23344c,package_status:_0x5575e7,package_steps:_0xc97941}=_0x12f2a2[_0x3f9dd9(0x18c)],_0x3b5518=_0x1dd393[_0x3f9dd9(0x16c)](_0x204846=>_0x204846[_0x3f9dd9(0x155)][_0x3f9dd9(0x178)](_0x3f9dd9(0x13f))),_0x536941=await this[_0x3f9dd9(0x161)](_0x3b5518[0x0][_0x3f9dd9(0x13d)]);await this[_0x3f9dd9(0x17e)](_0x536941,_0x3f9dd9(0x154)),_0x275c8d['packageId']=_0x23344c,_0x275c8d['packageComponentList']=this['formPackageComponentList'](_0xc97941),await this[_0x3f9dd9(0x171)](_0x275c8d);if(_0x5575e7!==status_enums_1['VeevaPackageStatus'][_0x3f9dd9(0x185)])throw new Error(_0x3f9dd9(0x158));return _0x275c8d;}else throw new veeva_error_1[(_0x3f9dd9(0x144))](_0x12f2a2['errors']);}async[a392_0xdb6e65(0x156)](_0x3eaefb,_0x1aa25e){const _0x2ea115=a392_0xdb6e65;var _0x26ef81;this[_0x2ea115(0x138)][_0x2ea115(0x14e)](_0x2ea115(0x143));const {data:_0x51b3ba}=await this['_connection'][_0x2ea115(0x148)](_0x3eaefb);if(_0x51b3ba[_0x2ea115(0x186)]===status_enums_1[_0x2ea115(0x189)][_0x2ea115(0x159)]){const {responseDetails:{deployment_log:_0x204745,package_status__v:_0x4f99eb},package_steps:_0x492169}=_0x51b3ba,_0xaaf6e6=_0x204745[_0x2ea115(0x16c)](_0x3db2c3=>_0x3db2c3['filename'][_0x2ea115(0x178)]('Deployment.log')),_0x3e915c=await this[_0x2ea115(0x161)](_0xaaf6e6[0x0][_0x2ea115(0x13d)]);await this[_0x2ea115(0x17e)](_0x3e915c,'Deploy\x20Log'),_0x1aa25e[_0x2ea115(0x15a)]=[status_enums_1[_0x2ea115(0x16a)][_0x2ea115(0x153)],status_enums_1[_0x2ea115(0x16a)][_0x2ea115(0x13b)]][_0x2ea115(0x17f)](_0x4f99eb);const _0x425b17=array_utils_1[_0x2ea115(0x16d)]['groupUniqueToMap'](this['formPackageComponentList'](_0x492169),({uniqueName:_0x589f60})=>_0x589f60);for(const _0xdf8dc of _0x1aa25e[_0x2ea115(0x16b)]){const _0x525639=(_0x26ef81=_0x425b17[_0x2ea115(0x148)](_0xdf8dc[_0x2ea115(0x187)]))===null||_0x26ef81===void 0x0?void 0x0:_0x26ef81[_0x2ea115(0x184)];_0x525639&&(_0xdf8dc[_0x2ea115(0x184)]=_0x525639);}_0x1aa25e['packageComponentList']=_0x1aa25e[_0x2ea115(0x16b)][_0x2ea115(0x16c)](_0xb14ff9=>_0xb14ff9[_0x2ea115(0x184)]!==status_enums_1[_0x2ea115(0x181)][_0x2ea115(0x185)]);if(!_0x1aa25e[_0x2ea115(0x16b)][_0x2ea115(0x163)])throw new Error(_0x2ea115(0x18b));return _0x1aa25e;}else throw new veeva_error_1[(_0x2ea115(0x144))](_0x51b3ba['errors']);}async[a392_0xdb6e65(0x161)](_0x546b7a){const {data:_0x3c79e4}=await this['_connection']['get'](_0x546b7a,{'responseType':'text'});return _0x3c79e4;}[a392_0xdb6e65(0x142)](_0x225a04){const _0x4927a5=a392_0xdb6e65;return _0x225a04[_0x4927a5(0x146)]((_0x20fc25,_0x22f910)=>{const _0x21beb8=_0x4927a5,_0x8bba16=_0x22f910[_0x21beb8(0x173)][_0x21beb8(0x14b)](_0x4f75ff=>new package_component_dto_1['PackageComponentDto']({'status':_0x22f910['deployment_status__v'],'stepName':_0x22f910['name__v'],'component':_0x4f75ff}));return[..._0x20fc25,..._0x8bba16];},[]);}async[a392_0xdb6e65(0x171)](_0x3514f5){const _0x5d5444=a392_0xdb6e65,{data:_0x21c87b}=await this[_0x5d5444(0x18f)][_0x5d5444(0x137)](veeva_constants_1[_0x5d5444(0x160)][_0x5d5444(0x14a)][_0x5d5444(0x167)](_0x5d5444(0x14f),_0x3514f5[_0x5d5444(0x17b)]));if(_0x21c87b[_0x5d5444(0x186)]===status_enums_1['VeevaResponseStatus'][_0x5d5444(0x159)]){const {package_steps:_0x3c635e}=_0x21c87b[_0x5d5444(0x15f)],_0x311183=array_utils_1[_0x5d5444(0x16d)][_0x5d5444(0x150)](_0x3514f5[_0x5d5444(0x16b)],({stepName:_0x339e65})=>_0x339e65);for(const {name__v:_0x3ad251,deployment_action:_0x556e48}of _0x3c635e){for(const _0x12cde5 of _0x311183[_0x5d5444(0x148)](_0x3ad251)||[]){_0x12cde5['deploymentAction']=package_component_dto_1[_0x5d5444(0x164)][_0x5d5444(0x188)](_0x556e48);}}}else throw new veeva_error_1[(_0x5d5444(0x144))](_0x21c87b['errors']);}async[a392_0xdb6e65(0x162)](_0x49190a){const _0x31795c=a392_0xdb6e65,_0x2fbd74=await this[_0x31795c(0x140)](_0x49190a),_0x1dc04f=await this['getJobDetailUrl'](_0x2fbd74),_0x2b3af4=await this[_0x31795c(0x170)](_0x1dc04f),_0x48881e=await this[_0x31795c(0x13c)](_0x2b3af4[_0x31795c(0x17b)]),_0xa2cccd=await this[_0x31795c(0x17c)](_0x48881e);return this['getDeployDetailsAndSaveLog'](_0xa2cccd,_0x2b3af4);}}exports['PackageImportService']=PackageImportService;