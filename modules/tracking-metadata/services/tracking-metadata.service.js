function a321_0xcabd(){const _0x1ce1fc=['12unwUmw','(((.+)+)+)+$','createJob','../../shared/utils/job.utils','search','toString','writeFile','__esModule','createManifest','98680dlFDgq','getManifestPath','catch','trackingMetadataFolder','TrackingMetadataService','join','406445ccHTYv','makeDir','17641OTeyFH','5908nwpZND','constructor','dataPath','98254DgQfrS','fs/promises','MANIFEST_FILENAME','12wDMbBB','default','defineProperty','3gjbwXc','376xvNmVF','207NRoQdv','error','../../../constants/job','runJob','TRACKING_METADATA_FOLDER_NAME','../constants','../../../configs/path','2199879peOSHJ','path','53260ZDuaEr','../../../core','apply','__importDefault','Logger'];a321_0xcabd=function(){return _0x1ce1fc;};return a321_0xcabd();}const a321_0x2ba61f=a321_0x5928;(function(_0x221461,_0x51b290){const _0x404dfc=a321_0x5928,_0x3260ee=_0x221461();while(!![]){try{const _0x543e8a=-parseInt(_0x404dfc(0xa7))/0x1+parseInt(_0x404dfc(0xab))/0x2*(-parseInt(_0x404dfc(0xb1))/0x3)+-parseInt(_0x404dfc(0xbc))/0x4+-parseInt(_0x404dfc(0xa5))/0x5*(parseInt(_0x404dfc(0xae))/0x6)+-parseInt(_0x404dfc(0xa8))/0x7*(parseInt(_0x404dfc(0xb2))/0x8)+parseInt(_0x404dfc(0xb3))/0x9*(parseInt(_0x404dfc(0x9f))/0xa)+-parseInt(_0x404dfc(0xba))/0xb*(-parseInt(_0x404dfc(0x96))/0xc);if(_0x543e8a===_0x51b290)break;else _0x3260ee['push'](_0x3260ee['shift']());}catch(_0x307030){_0x3260ee['push'](_0x3260ee['shift']());}}}(a321_0xcabd,0x234f0));const a321_0x4f15ef=(function(){let _0x3b4309=!![];return function(_0xe54ee3,_0x22546d){const _0x3ad3c6=_0x3b4309?function(){const _0x34bce5=a321_0x5928;if(_0x22546d){const _0x33033b=_0x22546d[_0x34bce5(0x93)](_0xe54ee3,arguments);return _0x22546d=null,_0x33033b;}}:function(){};return _0x3b4309=![],_0x3ad3c6;};}()),a321_0x192814=a321_0x4f15ef(this,function(){const _0x382dca=a321_0x5928;return a321_0x192814[_0x382dca(0x9b)]()[_0x382dca(0x9a)](_0x382dca(0x97))[_0x382dca(0x9b)]()[_0x382dca(0xa9)](a321_0x192814)['search'](_0x382dca(0x97));});function a321_0x5928(_0x3f35de,_0x1b9809){const _0x371552=a321_0xcabd();return a321_0x5928=function(_0x192814,_0x4f15ef){_0x192814=_0x192814-0x93;let _0xcabd90=_0x371552[_0x192814];return _0xcabd90;},a321_0x5928(_0x3f35de,_0x1b9809);}a321_0x192814();'use strict';var __importDefault=this&&this[a321_0x2ba61f(0x94)]||function(_0x45b7ae){const _0x1d935d=a321_0x2ba61f;return _0x45b7ae&&_0x45b7ae[_0x1d935d(0x9d)]?_0x45b7ae:{'default':_0x45b7ae};};Object[a321_0x2ba61f(0xb0)](exports,a321_0x2ba61f(0x9d),{'value':!![]}),exports[a321_0x2ba61f(0xa3)]=void 0x0;const job_utils_1=__importDefault(require(a321_0x2ba61f(0x99))),path_1=__importDefault(require(a321_0x2ba61f(0xbb))),fs_utils_1=require('../../shared/utils/fs.utils'),job_1=require(a321_0x2ba61f(0xb5)),path_2=require(a321_0x2ba61f(0xb9)),constants_1=require(a321_0x2ba61f(0xb8)),promises_1=require(a321_0x2ba61f(0xac)),core_1=require(a321_0x2ba61f(0xbd));class TrackingMetadataService{static async[a321_0x2ba61f(0x98)](_0x406003){const _0x16fc71=a321_0x2ba61f,_0x25f0a6=job_utils_1[_0x16fc71(0xaf)]['generateJobId'](),_0x20d2f8=path_1[_0x16fc71(0xaf)][_0x16fc71(0xa4)](TrackingMetadataService['trackingMetadataFolder'],_0x25f0a6);await(0x0,fs_utils_1[_0x16fc71(0xa6)])(_0x20d2f8),await this[_0x16fc71(0x9e)](_0x20d2f8,_0x406003);const _0x3b4af1=path_1['default'][_0x16fc71(0xa4)](__dirname,job_1['JOB_PATH']),_0x355fea=new core_1[(_0x16fc71(0x95))](_0x25f0a6);return job_utils_1[_0x16fc71(0xaf)][_0x16fc71(0xb6)](_0x3b4af1,{'jobStorePath':_0x20d2f8,'jobId':_0x25f0a6})[_0x16fc71(0xa1)](async _0x36e3c4=>{const _0x2df84f=_0x16fc71;_0x355fea[_0x2df84f(0xb4)](_0x36e3c4);}),{'jobId':_0x25f0a6};}static async['createManifest'](_0x51510c,_0x78d6dc){const _0x5607e2=a321_0x2ba61f,_0xd857a0=this[_0x5607e2(0xa0)](_0x51510c);return(0x0,promises_1[_0x5607e2(0x9c)])(_0xd857a0,JSON['stringify']({'details':_0x78d6dc}));}static[a321_0x2ba61f(0xa0)](_0x5b9e11){const _0x4823fb=a321_0x2ba61f;return path_1['default']['join'](_0x5b9e11,job_1[_0x4823fb(0xad)]);}}exports['TrackingMetadataService']=TrackingMetadataService,TrackingMetadataService[a321_0x2ba61f(0xa2)]=path_1[a321_0x2ba61f(0xaf)][a321_0x2ba61f(0xa4)](path_2[a321_0x2ba61f(0xaa)],constants_1[a321_0x2ba61f(0xb7)]);