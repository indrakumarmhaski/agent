const a85_0x1a9a3f=a85_0x420c;(function(_0x35e067,_0x4ca3b3){const _0x200b87=a85_0x420c,_0x4e7ae5=_0x35e067();while(!![]){try{const _0x20f582=parseInt(_0x200b87(0x1a5))/0x1+parseInt(_0x200b87(0x192))/0x2+parseInt(_0x200b87(0x1c0))/0x3+parseInt(_0x200b87(0x1c3))/0x4+parseInt(_0x200b87(0x190))/0x5*(parseInt(_0x200b87(0x18f))/0x6)+parseInt(_0x200b87(0x199))/0x7*(parseInt(_0x200b87(0x1b1))/0x8)+parseInt(_0x200b87(0x18d))/0x9*(-parseInt(_0x200b87(0x1ac))/0xa);if(_0x20f582===_0x4ca3b3)break;else _0x4e7ae5['push'](_0x4e7ae5['shift']());}catch(_0x53ebda){_0x4e7ae5['push'](_0x4e7ae5['shift']());}}}(a85_0x326f,0x3a6ba));const a85_0x4b0482=(function(){let _0x10189e=!![];return function(_0x33588a,_0x4d3ebd){const _0x1408cf=_0x10189e?function(){const _0x194e59=a85_0x420c;if(_0x4d3ebd){const _0x55eba3=_0x4d3ebd[_0x194e59(0x1c1)](_0x33588a,arguments);return _0x4d3ebd=null,_0x55eba3;}}:function(){};return _0x10189e=![],_0x1408cf;};}()),a85_0xf00057=a85_0x4b0482(this,function(){const _0xc65238=a85_0x420c;return a85_0xf00057['toString']()[_0xc65238(0x18a)](_0xc65238(0x1bd))[_0xc65238(0x187)]()[_0xc65238(0x194)](a85_0xf00057)[_0xc65238(0x18a)](_0xc65238(0x1bd));});function a85_0x420c(_0x16d560,_0x5303b2){const _0x3ab838=a85_0x326f();return a85_0x420c=function(_0xf00057,_0x4b0482){_0xf00057=_0xf00057-0x186;let _0x326f02=_0x3ab838[_0xf00057];return _0x326f02;},a85_0x420c(_0x16d560,_0x5303b2);}a85_0xf00057();'use strict';var __importDefault=this&&this[a85_0x1a9a3f(0x1c5)]||function(_0x22e709){const _0x547c64=a85_0x1a9a3f;return _0x22e709&&_0x22e709[_0x547c64(0x1c2)]?_0x22e709:{'default':_0x22e709};};Object[a85_0x1a9a3f(0x1a4)](exports,a85_0x1a9a3f(0x1c2),{'value':!![]}),exports[a85_0x1a9a3f(0x195)]=void 0x0;const promises_1=require(a85_0x1a9a3f(0x18e)),sfdx_utils_1=require(a85_0x1a9a3f(0x1be)),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require(a85_0x1a9a3f(0x1ad)),path_1=__importDefault(require(a85_0x1a9a3f(0x1ae))),fs_internal_1=require('../../git/internal/fs.internal'),uuid_1=require('uuid'),adm_zip_1=__importDefault(require(a85_0x1a9a3f(0x1b3))),fetch_attachments_1=require('../../shared/utils/fetch-attachments'),DESTRUCTIVE_CHANGES_POST_NAME='destructiveChangesPost.xml',DEPLOY_ZIP_NAME=a85_0x1a9a3f(0x191);async function deployComponents({attachmentId:_0x91a62e,credentials:_0xd29946,postDestructiveAttachmentId:_0x19bb6f,deployOptions:_0x293658},_0x2ae349){const _0x280198=a85_0x1a9a3f,_0x24e5ea=(0x0,uuid_1['v4'])();try{const _0x109707=_0x91a62e['split'](','),_0x582349=new adm_zip_1[(_0x280198(0x1b6))]();for(const _0x25411f of _0x109707){await(0x0,fetch_attachments_1[_0x280198(0x19f)])(_0x2ae349,_0x25411f)[_0x280198(0x19e)](_0x5df20b=>{const _0xa9a85e=_0x280198;var _0x3e9425;const _0x61b032=new adm_zip_1[(_0xa9a85e(0x1b6))](_0x5df20b);for(const _0x1e48dc of _0x61b032[_0xa9a85e(0x1bb)]()){_0x582349['addFile'](_0x1e48dc[_0xa9a85e(0x1b8)],(_0x3e9425=_0x61b032[_0xa9a85e(0x196)](_0x1e48dc[_0xa9a85e(0x1b8)]))===null||_0x3e9425===void 0x0?void 0x0:_0x3e9425['getData']());}});}!await fs_internal_1['FS'][_0x280198(0x193)](_0x280198(0x1b9)+_0x24e5ea)&&await(0x0,promises_1[_0x280198(0x19b)])(_0x280198(0x1b9)+_0x24e5ea,{'recursive':!![]});await sfdx_utils_2[_0x280198(0x1a6)][_0x280198(0x1a2)](_0x91a62e,_0x24e5ea),await sfdx_utils_2[_0x280198(0x1a6)][_0x280198(0x1a7)](_0xd29946[_0x280198(0x1bc)],_0x91a62e,_0x24e5ea);if(_0x19bb6f){const _0x5b9d08=await(0x0,fetch_attachments_1[_0x280198(0x19f)])(_0x2ae349,_0x19bb6f);_0x582349[_0x280198(0x1ba)](DESTRUCTIVE_CHANGES_POST_NAME,_0x5b9d08),await(0x0,promises_1[_0x280198(0x1c4)])(process[_0x280198(0x18c)]()+_0x280198(0x197)+_0x24e5ea+'/'+DEPLOY_ZIP_NAME,_0x582349['toBuffer']());}else await(0x0,promises_1[_0x280198(0x1c4)])(process[_0x280198(0x18c)]()+_0x280198(0x197)+_0x24e5ea+'/'+DEPLOY_ZIP_NAME,_0x582349['toBuffer']());const _0x34b4a4=await deploy(_0xd29946,_0x293658,_0x24e5ea);return JSON['parse'](_0x34b4a4)['result']['id'];}catch(_0x2f2abc){throw _0x2f2abc;}finally{await(0x0,promises_1['rm'])(path_1['default'][_0x280198(0x1bf)](process[_0x280198(0x18c)](),_0x280198(0x19c),_0x24e5ea),{'recursive':!![]});}}function a85_0x326f(){const _0x5e55a6=['testLevel','entryName','.temp/','addFile','getEntries','instanceUrl','(((.+)+)+)+$','../../git/salesforce/utils/sfdx.utils','join','1364454JZOTHS','apply','__esModule','1084732Vzvcvq','writeFile','__importDefault','accessToken','toString','SFDX','refreshToken','search','\x20-l\x20','cwd','27PmaTOG','fs/promises','390QhvOvM','8755iMSclG','deploy.zip','76204YXVsrA','exists','constructor','deployComponents','getEntry','/.temp/','updateAccessToken','203YVutFo','clientId','mkdir','.temp','\x20-c','then','fetchAttachmentBody','-f\x20','\x20-g','createSFDXProject','runTests','defineProperty','413572mOeeuy','SFDXUtils','setInstanceUrl','force:mdapi:deploy\x20--json\x20','\x20-u\x20','clientSecret','catch','4915090ntXbdA','../utils/auth.utils','path','isAuthorizationError','AuthUtils','116504eDftPY','ignoreWarnings','adm-zip','\x20-r\x20','\x20-purgeondelete','default'];a85_0x326f=function(){return _0x5e55a6;};return a85_0x326f();}exports['deployComponents']=deployComponents;function deploy(_0x510337,_0x42e3b7,_0x38259c){const _0x57385d=a85_0x1a9a3f,_0x154095=path_1[_0x57385d(0x1b6)][_0x57385d(0x1bf)](process[_0x57385d(0x18c)](),'.temp',_0x38259c,DEPLOY_ZIP_NAME);let _0x1c4915=_0x57385d(0x1a0)+_0x154095+_0x57385d(0x1a9)+_0x510337['accessToken'];return _0x1c4915+=_0x42e3b7['checkOnly']?_0x57385d(0x19d):'',_0x1c4915+=_0x42e3b7[_0x57385d(0x1b7)]?_0x57385d(0x18b)+_0x42e3b7[_0x57385d(0x1b7)]:'',_0x1c4915+=_0x42e3b7[_0x57385d(0x1a3)]?_0x57385d(0x1b4)+_0x42e3b7[_0x57385d(0x1a3)]:'',_0x1c4915+=_0x42e3b7[_0x57385d(0x1b2)]?_0x57385d(0x1a1):'',_0x1c4915+=_0x42e3b7['purgeOnDelete']?_0x57385d(0x1b5):'',sfdx_utils_1[_0x57385d(0x188)]['spawn'](_0x57385d(0x1a8)+_0x1c4915)[_0x57385d(0x1ab)](async _0x1cee34=>{const _0x2ae716=_0x57385d;if(sfdx_utils_2[_0x2ae716(0x1a6)][_0x2ae716(0x1af)](_0x1cee34))return _0x510337[_0x2ae716(0x186)]=await auth_utils_1[_0x2ae716(0x1b0)][_0x2ae716(0x198)](_0x510337[_0x2ae716(0x1bc)],_0x510337[_0x2ae716(0x189)],_0x510337[_0x2ae716(0x19a)],_0x510337[_0x2ae716(0x1aa)]),deploy(_0x510337,_0x42e3b7,_0x38259c);throw _0x1cee34;});}