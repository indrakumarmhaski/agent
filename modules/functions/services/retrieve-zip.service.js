const a88_0x4f893e=a88_0x21c6;(function(_0x3cb366,_0x499fe7){const _0x57093e=a88_0x21c6,_0x2c8799=_0x3cb366();while(!![]){try{const _0xfca9=-parseInt(_0x57093e(0x1cb))/0x1+-parseInt(_0x57093e(0x1f6))/0x2+-parseInt(_0x57093e(0x1f9))/0x3+-parseInt(_0x57093e(0x1e9))/0x4*(-parseInt(_0x57093e(0x1e5))/0x5)+parseInt(_0x57093e(0x1e6))/0x6+-parseInt(_0x57093e(0x1d7))/0x7*(-parseInt(_0x57093e(0x1cc))/0x8)+parseInt(_0x57093e(0x1e0))/0x9;if(_0xfca9===_0x499fe7)break;else _0x2c8799['push'](_0x2c8799['shift']());}catch(_0x56a782){_0x2c8799['push'](_0x2c8799['shift']());}}}(a88_0x17c4,0x830de));const a88_0x10105e=(function(){let _0x188917=!![];return function(_0x3110a4,_0x1d279e){const _0x340d91=_0x188917?function(){const _0x24e1bf=a88_0x21c6;if(_0x1d279e){const _0x1426b9=_0x1d279e[_0x24e1bf(0x1e7)](_0x3110a4,arguments);return _0x1d279e=null,_0x1426b9;}}:function(){};return _0x188917=![],_0x340d91;};}()),a88_0x47c9a2=a88_0x10105e(this,function(){const _0xe019b0=a88_0x21c6;return a88_0x47c9a2[_0xe019b0(0x1e2)]()['search'](_0xe019b0(0x1da))[_0xe019b0(0x1e2)]()['constructor'](a88_0x47c9a2)[_0xe019b0(0x1d2)]('(((.+)+)+)+$');});a88_0x47c9a2();'use strict';function a88_0x21c6(_0x48b993,_0x22b392){const _0x15c41b=a88_0x17c4();return a88_0x21c6=function(_0x47c9a2,_0x10105e){_0x47c9a2=_0x47c9a2-0x1bd;let _0x17c48a=_0x15c41b[_0x47c9a2];return _0x17c48a;},a88_0x21c6(_0x48b993,_0x22b392);}function a88_0x17c4(){const _0x253abb=['accessToken','__importDefault','AuthUtils','search','../../git/internal/fs.internal','default','__esModule','uuid','104657waHeTE','../utils/sfdx.utils','ComponentsApi','(((.+)+)+)+$','defineProperty','instanceUrl','.temp/','addFile','../utils/auth.utils','8566326dQcWeY','clientId','toString','SFDXUtils','MAX_ZIP_SIZE','5KQomBJ','308448cKYxdK','apply','../utils/components-api','154880NJrhIt','post','base64','path','fs/promises','--jobid\x20','force:mdapi:retrieve:report\x20','getEntry','splitZip','toBuffer','join','-r\x20.temp/','--json\x20','533796iGINcZ','exists','length','937209HwYbbK','/unpackaged.zip','clientSecret','getEntries','/sobjects/Attachment','refreshToken','getData','spawn','-u\x20','adm-zip','/services/data/v','retrieveZip','setInstanceUrl','updateAccessToken','readFile','583687nKZmyQ','352PkJkBV','isAuthorizationError','BACKUP\x20ZIP'];a88_0x17c4=function(){return _0x253abb;};return a88_0x17c4();}var __importDefault=this&&this[a88_0x4f893e(0x1d0)]||function(_0x46fad8){const _0xc4023b=a88_0x4f893e;return _0x46fad8&&_0x46fad8[_0xc4023b(0x1d5)]?_0x46fad8:{'default':_0x46fad8};};Object[a88_0x4f893e(0x1db)](exports,a88_0x4f893e(0x1d5),{'value':!![]}),exports[a88_0x4f893e(0x1c7)]=void 0x0;const promises_1=require(a88_0x4f893e(0x1ed)),sfdx_utils_1=require('../../git/salesforce/utils/sfdx.utils'),fs_internal_1=require(a88_0x4f893e(0x1d3)),sfdx_utils_2=require(a88_0x4f893e(0x1d8)),auth_utils_1=require(a88_0x4f893e(0x1df)),adm_zip_1=__importDefault(require(a88_0x4f893e(0x1c5))),uuid_1=require(a88_0x4f893e(0x1d6)),components_api_1=require(a88_0x4f893e(0x1e8)),path_1=require(a88_0x4f893e(0x1ec));async function retrieveZip({backupAsyncId:_0x5e3687,credentials:_0x403ca2,metadataLogId:_0x340afe,apiVersion:_0x4a04b1},_0x48cd1b){const _0x21aca1=a88_0x4f893e;var _0x3b1af4;const _0x3aa838=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS'][_0x21aca1(0x1f7)](_0x21aca1(0x1dd)+_0x3aa838)&&await(0x0,promises_1['mkdir'])(_0x21aca1(0x1dd)+_0x3aa838,{'recursive':!![]});await sfdx_utils_2[_0x21aca1(0x1e3)]['createSFDXProject'](_0x5e3687,_0x3aa838),await sfdx_utils_2[_0x21aca1(0x1e3)][_0x21aca1(0x1c8)](_0x403ca2[_0x21aca1(0x1dc)],_0x5e3687,_0x3aa838),await retrieveReport(_0x5e3687,_0x403ca2,_0x3aa838);const _0x37df1f=new adm_zip_1[(_0x21aca1(0x1d4))](await(0x0,promises_1[_0x21aca1(0x1ca)])('.temp/'+_0x3aa838+'/'+_0x5e3687+_0x21aca1(0x1bd))),_0x40f701=new adm_zip_1[(_0x21aca1(0x1d4))]();for(const {entryName:_0x2bf50b}of _0x37df1f[_0x21aca1(0x1bf)]()){const _0x5b90a9=(_0x3b1af4=_0x37df1f[_0x21aca1(0x1f0)](_0x2bf50b))===null||_0x3b1af4===void 0x0?void 0x0:_0x3b1af4[_0x21aca1(0x1c2)]();_0x40f701[_0x21aca1(0x1de)]((0x0,path_1[_0x21aca1(0x1f3)])('src',_0x2bf50b),_0x5b90a9);}const _0x46be20=_0x40f701[_0x21aca1(0x1f2)]()[_0x21aca1(0x1e2)](_0x21aca1(0x1eb))[_0x21aca1(0x1f8)];if(_0x46be20>=components_api_1[_0x21aca1(0x1e4)]){const [_0x7f200,_0x5894db]=await components_api_1[_0x21aca1(0x1d9)][_0x21aca1(0x1f1)](_0x40f701,_0x46be20),_0x35fee8={'ParentId':_0x340afe,'Name':'BACKUP\x20ZIP','Description':_0x21aca1(0x1ce),'Body':_0x7f200[_0x21aca1(0x1f2)]()[_0x21aca1(0x1e2)](_0x21aca1(0x1eb))};await _0x48cd1b[_0x21aca1(0x1ea)](_0x21aca1(0x1c6)+_0x4a04b1+_0x21aca1(0x1c0),_0x35fee8),_0x35fee8['Body']=_0x5894db[_0x21aca1(0x1f2)]()[_0x21aca1(0x1e2)]('base64'),await _0x48cd1b['post'](_0x21aca1(0x1c6)+_0x4a04b1+'/sobjects/Attachment',_0x35fee8);}else{const _0x951ed3={'ParentId':_0x340afe,'Name':_0x21aca1(0x1ce),'Description':_0x21aca1(0x1ce),'Body':_0x40f701[_0x21aca1(0x1f2)]()[_0x21aca1(0x1e2)]('base64')};await _0x48cd1b['post'](_0x21aca1(0x1c6)+_0x4a04b1+_0x21aca1(0x1c0),_0x951ed3);}}catch(_0x4c39f9){throw _0x4c39f9;}finally{await(0x0,promises_1['rm'])(_0x21aca1(0x1dd)+_0x3aa838+'/'+_0x5e3687,{'recursive':!![]});}}exports['retrieveZip']=retrieveZip;async function retrieveReport(_0x2a5f6,_0x14e341,_0x1d5d95){const _0x1d179c=a88_0x4f893e,_0x3cc0c9=_0x1d179c(0x1ef)+_0x1d179c(0x1f5)+(_0x1d179c(0x1ee)+_0x2a5f6+'\x20')+(_0x1d179c(0x1f4)+_0x1d5d95+'/'+_0x2a5f6+'\x20')+(_0x1d179c(0x1c4)+_0x14e341[_0x1d179c(0x1cf)]);await sfdx_utils_1['SFDX'][_0x1d179c(0x1c3)](_0x3cc0c9)['catch'](async _0x1d80e6=>{const _0x2b2f49=_0x1d179c;if(sfdx_utils_2[_0x2b2f49(0x1e3)][_0x2b2f49(0x1cd)](_0x1d80e6))return _0x14e341[_0x2b2f49(0x1cf)]=await auth_utils_1[_0x2b2f49(0x1d1)][_0x2b2f49(0x1c9)](_0x14e341[_0x2b2f49(0x1dc)],_0x14e341[_0x2b2f49(0x1c1)],_0x14e341[_0x2b2f49(0x1e1)],_0x14e341[_0x2b2f49(0x1be)]),retrieveReport(_0x2a5f6,_0x14e341,_0x1d5d95);throw _0x1d80e6;});}