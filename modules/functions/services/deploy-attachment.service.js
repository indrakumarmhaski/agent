const a84_0x2977e8=a84_0x3a0c;(function(_0x41e752,_0x31af3e){const _0x3b58a3=a84_0x3a0c,_0x3b6edf=_0x41e752();while(!![]){try{const _0x3f1299=parseInt(_0x3b58a3(0xae))/0x1+-parseInt(_0x3b58a3(0x86))/0x2*(parseInt(_0x3b58a3(0x80))/0x3)+parseInt(_0x3b58a3(0xb3))/0x4*(-parseInt(_0x3b58a3(0x9e))/0x5)+parseInt(_0x3b58a3(0xab))/0x6*(-parseInt(_0x3b58a3(0xb1))/0x7)+parseInt(_0x3b58a3(0xb0))/0x8+parseInt(_0x3b58a3(0x9b))/0x9+parseInt(_0x3b58a3(0xa3))/0xa*(parseInt(_0x3b58a3(0x97))/0xb);if(_0x3f1299===_0x31af3e)break;else _0x3b6edf['push'](_0x3b6edf['shift']());}catch(_0x1b7f06){_0x3b6edf['push'](_0x3b6edf['shift']());}}}(a84_0x4f7a,0xc05ad));const a84_0x5e0ba7=(function(){let _0xf63330=!![];return function(_0x55130b,_0x54b2e5){const _0x5cc43b=_0xf63330?function(){const _0x380165=a84_0x3a0c;if(_0x54b2e5){const _0x3cec53=_0x54b2e5[_0x380165(0x98)](_0x55130b,arguments);return _0x54b2e5=null,_0x3cec53;}}:function(){};return _0xf63330=![],_0x5cc43b;};}()),a84_0x4a2d57=a84_0x5e0ba7(this,function(){const _0x5d97c5=a84_0x3a0c;return a84_0x4a2d57[_0x5d97c5(0x8f)]()['search'](_0x5d97c5(0xbd))[_0x5d97c5(0x8f)]()['constructor'](a84_0x4a2d57)[_0x5d97c5(0xa9)](_0x5d97c5(0xbd));});a84_0x4a2d57();'use strict';var __importDefault=this&&this[a84_0x2977e8(0xba)]||function(_0x313cf2){const _0x1ec369=a84_0x2977e8;return _0x313cf2&&_0x313cf2[_0x1ec369(0x9c)]?_0x313cf2:{'default':_0x313cf2};};Object[a84_0x2977e8(0x95)](exports,'__esModule',{'value':!![]}),exports[a84_0x2977e8(0x8c)]=void 0x0;const promises_1=require(a84_0x2977e8(0x94)),sfdx_utils_1=require('../../git/salesforce/utils/sfdx.utils'),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require('../utils/auth.utils'),path_1=__importDefault(require('path')),fs_internal_1=require(a84_0x2977e8(0xa7)),uuid_1=require(a84_0x2977e8(0xb5)),adm_zip_1=__importDefault(require(a84_0x2977e8(0x91))),fetch_attachments_1=require(a84_0x2977e8(0xaa)),DESTRUCTIVE_CHANGES_POST_NAME=a84_0x2977e8(0xbc),DEPLOY_ZIP_NAME=a84_0x2977e8(0x82);function a84_0x4f7a(){const _0x1ca939=['-f\x20','default','deployComponents','clientSecret','isAuthorizationError','toString','exists','adm-zip','\x20-r\x20','accessToken','fs/promises','defineProperty','.temp','1480567mwNGei','apply','\x20-g','force:mdapi:deploy\x20--json\x20','12327381IsdaGb','__esModule','instanceUrl','1575bcrnYQ','join','.temp/','getData','writeFile','20sLnYjK','fetchAttachmentBody','createSFDXProject','addFile','../../git/internal/fs.internal','getEntries','search','../../shared/utils/fetch-attachments','3181926vJGbxQ','entryName','cwd','332389RJrmly','runTests','12011632XZqMra','14Oqmrzt','toBuffer','3108THinzh','SFDX','uuid','\x20-u\x20','result','then','clientId','__importDefault','mkdir','destructiveChangesPost.xml','(((.+)+)+)+$','getEntry','spawnPromise','517299hpJJyx','checkOnly','deploy.zip','catch','testLevel','split','16lMPUkZ','\x20-c','SFDXUtils','/.temp/'];a84_0x4f7a=function(){return _0x1ca939;};return a84_0x4f7a();}async function deployComponents({attachmentId:_0x5ee930,credentials:_0x299f21,postDestructiveAttachmentId:_0x245c27,deployOptions:_0x3c083d},_0x40696e){const _0x3acd58=a84_0x2977e8,_0x468db2=(0x0,uuid_1['v4'])();try{const _0x5ee7dc=_0x5ee930[_0x3acd58(0x85)](','),_0x33c4cb=new adm_zip_1['default']();for(const _0x3d4f30 of _0x5ee7dc){await(0x0,fetch_attachments_1[_0x3acd58(0xa4)])(_0x40696e,_0x3d4f30)[_0x3acd58(0xb8)](_0x4f33f5=>{const _0x15e09d=_0x3acd58;var _0x599af5;const _0x3dd11d=new adm_zip_1[(_0x15e09d(0x8b))](_0x4f33f5);for(const _0xf1f270 of _0x3dd11d[_0x15e09d(0xa8)]()){_0x33c4cb[_0x15e09d(0xa6)](_0xf1f270[_0x15e09d(0xac)],(_0x599af5=_0x3dd11d[_0x15e09d(0x7e)](_0xf1f270[_0x15e09d(0xac)]))===null||_0x599af5===void 0x0?void 0x0:_0x599af5[_0x15e09d(0xa1)]());}});}!await fs_internal_1['FS'][_0x3acd58(0x90)](_0x3acd58(0xa0)+_0x468db2)&&await(0x0,promises_1[_0x3acd58(0xbb)])(_0x3acd58(0xa0)+_0x468db2,{'recursive':!![]});await sfdx_utils_2[_0x3acd58(0x88)][_0x3acd58(0xa5)](_0x5ee930,_0x468db2),await sfdx_utils_2[_0x3acd58(0x88)]['setInstanceUrl'](_0x299f21['instanceUrl'],_0x5ee930,_0x468db2);if(_0x245c27){const _0x519c27=await(0x0,fetch_attachments_1['fetchAttachmentBody'])(_0x40696e,_0x245c27);_0x33c4cb[_0x3acd58(0xa6)](DESTRUCTIVE_CHANGES_POST_NAME,_0x519c27),await(0x0,promises_1[_0x3acd58(0xa2)])(process[_0x3acd58(0xad)]()+_0x3acd58(0x89)+_0x468db2+'/'+DEPLOY_ZIP_NAME,_0x33c4cb[_0x3acd58(0xb2)]());}else await(0x0,promises_1[_0x3acd58(0xa2)])(process[_0x3acd58(0xad)]()+_0x3acd58(0x89)+_0x468db2+'/'+DEPLOY_ZIP_NAME,_0x33c4cb[_0x3acd58(0xb2)]());const _0x19e74e=await deploy(_0x299f21,_0x3c083d,_0x468db2);return JSON['parse'](_0x19e74e)[_0x3acd58(0xb7)]['id'];}catch(_0x3e6376){throw _0x3e6376;}finally{await(0x0,promises_1['rm'])(path_1[_0x3acd58(0x8b)][_0x3acd58(0x9f)](process[_0x3acd58(0xad)](),_0x3acd58(0x96),_0x468db2),{'recursive':!![]});}}exports[a84_0x2977e8(0x8c)]=deployComponents;function a84_0x3a0c(_0x1ba690,_0x1edfd7){const _0x27a197=a84_0x4f7a();return a84_0x3a0c=function(_0x4a2d57,_0x5e0ba7){_0x4a2d57=_0x4a2d57-0x7e;let _0x4f7a24=_0x27a197[_0x4a2d57];return _0x4f7a24;},a84_0x3a0c(_0x1ba690,_0x1edfd7);}function deploy(_0x2f0b92,_0x2dc5a2,_0x10790b){const _0x2c5838=a84_0x2977e8,_0xef3a69=path_1['default'][_0x2c5838(0x9f)](process[_0x2c5838(0xad)](),_0x2c5838(0x96),_0x10790b,DEPLOY_ZIP_NAME);let _0x1109e1=_0x2c5838(0x8a)+_0xef3a69+_0x2c5838(0xb6)+_0x2f0b92[_0x2c5838(0x93)];return _0x1109e1+=_0x2dc5a2[_0x2c5838(0x81)]?_0x2c5838(0x87):'',_0x1109e1+=_0x2dc5a2[_0x2c5838(0x84)]?'\x20-l\x20'+_0x2dc5a2[_0x2c5838(0x84)]:'',_0x1109e1+=_0x2dc5a2[_0x2c5838(0xaf)]?_0x2c5838(0x92)+_0x2dc5a2[_0x2c5838(0xaf)]:'',_0x1109e1+=_0x2dc5a2['ignoreWarnings']?_0x2c5838(0x99):'',_0x1109e1+=_0x2dc5a2['purgeOnDelete']?'\x20-purgeondelete':'',sfdx_utils_1[_0x2c5838(0xb4)][_0x2c5838(0x7f)]('sfdx',_0x2c5838(0x9a)+_0x1109e1)[_0x2c5838(0x83)](async _0x181ce6=>{const _0x13a2b0=_0x2c5838;if(sfdx_utils_2[_0x13a2b0(0x88)][_0x13a2b0(0x8e)](_0x181ce6))return _0x2f0b92[_0x13a2b0(0x93)]=await auth_utils_1['AuthUtils']['updateAccessToken'](_0x2f0b92[_0x13a2b0(0x9d)],_0x2f0b92['refreshToken'],_0x2f0b92[_0x13a2b0(0xb9)],_0x2f0b92[_0x13a2b0(0x8d)]),deploy(_0x2f0b92,_0x2dc5a2,_0x10790b);throw _0x181ce6;});}