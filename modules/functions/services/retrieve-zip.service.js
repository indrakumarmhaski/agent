const a103_0x160541=a103_0x4154;(function(_0x3b9fa0,_0xc75522){const _0x476375=a103_0x4154,_0x31ceb4=_0x3b9fa0();while(!![]){try{const _0x73931a=parseInt(_0x476375(0x1df))/0x1*(-parseInt(_0x476375(0x1be))/0x2)+-parseInt(_0x476375(0x1c7))/0x3+-parseInt(_0x476375(0x1cd))/0x4*(-parseInt(_0x476375(0x1bd))/0x5)+parseInt(_0x476375(0x1d5))/0x6+parseInt(_0x476375(0x1c4))/0x7*(-parseInt(_0x476375(0x1e0))/0x8)+-parseInt(_0x476375(0x1c5))/0x9+parseInt(_0x476375(0x1db))/0xa;if(_0x73931a===_0xc75522)break;else _0x31ceb4['push'](_0x31ceb4['shift']());}catch(_0x1fb2b2){_0x31ceb4['push'](_0x31ceb4['shift']());}}}(a103_0x5eeb,0x80936));const a103_0x3ccd83=(function(){let _0x1c5f4a=!![];return function(_0x5ae6c,_0x330108){const _0x37fecf=_0x1c5f4a?function(){if(_0x330108){const _0x19c8b7=_0x330108['apply'](_0x5ae6c,arguments);return _0x330108=null,_0x19c8b7;}}:function(){};return _0x1c5f4a=![],_0x37fecf;};}()),a103_0x589218=a103_0x3ccd83(this,function(){const _0x472126=a103_0x4154;return a103_0x589218[_0x472126(0x1dd)]()['search'](_0x472126(0x1dc))[_0x472126(0x1dd)]()[_0x472126(0x1bc)](a103_0x589218)[_0x472126(0x1b8)](_0x472126(0x1dc));});a103_0x589218();function a103_0x4154(_0x313027,_0x34b706){const _0x185578=a103_0x5eeb();return a103_0x4154=function(_0x589218,_0x3ccd83){_0x589218=_0x589218-0x1b4;let _0x5eebad=_0x185578[_0x589218];return _0x5eebad;},a103_0x4154(_0x313027,_0x34b706);}function a103_0x5eeb(){const _0x485219=['catch','instanceUrl','constructor','380nyBWEt','8IftTmH','accessToken','addFile','--json\x20','SFDXUtils','../utils/components-api','3610306OMWYyT','2506887hsssBg','../../git/internal/fs.internal','2905767gLDfKD','/services/data/v','default','base64','BACKUP\x20ZIP','-r\x20.temp/','15652oNQSpu','readFile','mkdir','toBuffer','.temp/','__importDefault','--jobid\x20','ComponentsApi','5112720yegdCv','spawn','retrieveZip','force:mdapi:retrieve:report\x20','post','/unpackaged.zip','24835980lABiUk','(((.+)+)+)+$','toString','getEntry','206953FAmqqN','16GyVQDo','fs/promises','/sobjects/Attachment','clientId','../utils/auth.utils','createSFDXProject','join','../../git/salesforce/utils/sfdx.utils','uuid','../utils/sfdx.utils','refreshToken','getEntries','clientSecret','search','defineProperty'];a103_0x5eeb=function(){return _0x485219;};return a103_0x5eeb();}'use strict';var __importDefault=this&&this[a103_0x160541(0x1d2)]||function(_0x50cc73){return _0x50cc73&&_0x50cc73['__esModule']?_0x50cc73:{'default':_0x50cc73};};Object[a103_0x160541(0x1b9)](exports,'__esModule',{'value':!![]}),exports['retrieveZip']=void 0x0;const promises_1=require(a103_0x160541(0x1e1)),sfdx_utils_1=require(a103_0x160541(0x1e7)),fs_internal_1=require(a103_0x160541(0x1c6)),sfdx_utils_2=require(a103_0x160541(0x1b4)),auth_utils_1=require(a103_0x160541(0x1e4)),adm_zip_1=__importDefault(require('adm-zip')),uuid_1=require(a103_0x160541(0x1e8)),components_api_1=require(a103_0x160541(0x1c3)),path_1=require('path');async function retrieveZip({backupAsyncId:_0x45b40c,credentials:_0x464156,metadataLogId:_0x14f42a,apiVersion:_0x5ad1a7},_0x31b0c8){const _0x2046d9=a103_0x160541;var _0xcbc664;const _0x1c01f4=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS']['exists'](_0x2046d9(0x1d1)+_0x1c01f4)&&await(0x0,promises_1[_0x2046d9(0x1cf)])(_0x2046d9(0x1d1)+_0x1c01f4,{'recursive':!![]});await sfdx_utils_2[_0x2046d9(0x1c2)][_0x2046d9(0x1e5)](_0x45b40c,_0x1c01f4),await sfdx_utils_2[_0x2046d9(0x1c2)]['setInstanceUrl'](_0x464156[_0x2046d9(0x1bb)],_0x45b40c,_0x1c01f4),await retrieveReport(_0x45b40c,_0x464156,_0x1c01f4);const _0x43101e=new adm_zip_1[(_0x2046d9(0x1c9))](await(0x0,promises_1[_0x2046d9(0x1ce)])(_0x2046d9(0x1d1)+_0x1c01f4+'/'+_0x45b40c+_0x2046d9(0x1da))),_0x197719=new adm_zip_1[(_0x2046d9(0x1c9))]();for(const {entryName:_0x1e1cb3}of _0x43101e[_0x2046d9(0x1b6)]()){const _0x2543f7=(_0xcbc664=_0x43101e[_0x2046d9(0x1de)](_0x1e1cb3))===null||_0xcbc664===void 0x0?void 0x0:_0xcbc664['getData']();_0x197719[_0x2046d9(0x1c0)]((0x0,path_1[_0x2046d9(0x1e6)])('src',_0x1e1cb3),_0x2543f7);}const _0x49e31b=_0x197719[_0x2046d9(0x1d0)]()[_0x2046d9(0x1dd)]('base64')['length'];if(_0x49e31b>=components_api_1['MAX_ZIP_SIZE']){const [_0x14c01f,_0x4396dc]=await components_api_1[_0x2046d9(0x1d4)]['splitZip'](_0x197719,_0x49e31b),_0x2b4a03={'ParentId':_0x14f42a,'Name':'BACKUP\x20ZIP','Description':_0x2046d9(0x1cb),'Body':_0x14c01f['toBuffer']()['toString'](_0x2046d9(0x1ca))};await _0x31b0c8[_0x2046d9(0x1d9)](_0x2046d9(0x1c8)+_0x5ad1a7+_0x2046d9(0x1e2),_0x2b4a03),_0x2b4a03['Body']=_0x4396dc[_0x2046d9(0x1d0)]()[_0x2046d9(0x1dd)](_0x2046d9(0x1ca)),await _0x31b0c8[_0x2046d9(0x1d9)](_0x2046d9(0x1c8)+_0x5ad1a7+_0x2046d9(0x1e2),_0x2b4a03);}else{const _0x59adab={'ParentId':_0x14f42a,'Name':_0x2046d9(0x1cb),'Description':_0x2046d9(0x1cb),'Body':_0x197719[_0x2046d9(0x1d0)]()[_0x2046d9(0x1dd)]('base64')};await _0x31b0c8[_0x2046d9(0x1d9)]('/services/data/v'+_0x5ad1a7+_0x2046d9(0x1e2),_0x59adab);}}catch(_0x51e1fc){throw _0x51e1fc;}finally{await(0x0,promises_1['rm'])(_0x2046d9(0x1d1)+_0x1c01f4+'/'+_0x45b40c,{'recursive':!![]});}}exports[a103_0x160541(0x1d7)]=retrieveZip;async function retrieveReport(_0x31160e,_0x771663,_0x599e15){const _0x43b9f7=a103_0x160541,_0x5248cc=_0x43b9f7(0x1d8)+_0x43b9f7(0x1c1)+(_0x43b9f7(0x1d3)+_0x31160e+'\x20')+(_0x43b9f7(0x1cc)+_0x599e15+'/'+_0x31160e+'\x20')+('-u\x20'+_0x771663[_0x43b9f7(0x1bf)]);await sfdx_utils_1['SFDX'][_0x43b9f7(0x1d6)](_0x5248cc)[_0x43b9f7(0x1ba)](async _0x3fd766=>{const _0x48387f=_0x43b9f7;if(sfdx_utils_2['SFDXUtils']['isAuthorizationError'](_0x3fd766))return _0x771663[_0x48387f(0x1bf)]=await auth_utils_1['AuthUtils']['updateAccessToken'](_0x771663[_0x48387f(0x1bb)],_0x771663[_0x48387f(0x1b5)],_0x771663[_0x48387f(0x1e3)],_0x771663[_0x48387f(0x1b7)]),retrieveReport(_0x31160e,_0x771663,_0x599e15);throw _0x3fd766;});}