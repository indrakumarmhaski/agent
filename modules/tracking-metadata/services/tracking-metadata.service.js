const a305_0xbeeb75=a305_0x7717;(function(_0x40ba1f,_0x11f372){const _0x52a8e1=a305_0x7717,_0x38f683=_0x40ba1f();while(!![]){try{const _0x32062f=parseInt(_0x52a8e1(0x106))/0x1*(-parseInt(_0x52a8e1(0xf2))/0x2)+-parseInt(_0x52a8e1(0x109))/0x3+parseInt(_0x52a8e1(0xf0))/0x4*(parseInt(_0x52a8e1(0xf4))/0x5)+parseInt(_0x52a8e1(0xfe))/0x6*(parseInt(_0x52a8e1(0xff))/0x7)+parseInt(_0x52a8e1(0xf9))/0x8*(-parseInt(_0x52a8e1(0xf7))/0x9)+parseInt(_0x52a8e1(0xf1))/0xa*(parseInt(_0x52a8e1(0x112))/0xb)+parseInt(_0x52a8e1(0x10b))/0xc;if(_0x32062f===_0x11f372)break;else _0x38f683['push'](_0x38f683['shift']());}catch(_0x1893c0){_0x38f683['push'](_0x38f683['shift']());}}}(a305_0xd65e,0x6f089));const a305_0x361006=(function(){let _0x902f14=!![];return function(_0x3bec74,_0x61c5f3){const _0x28ebc6=_0x902f14?function(){const _0x45e19c=a305_0x7717;if(_0x61c5f3){const _0x29ce1e=_0x61c5f3[_0x45e19c(0xf5)](_0x3bec74,arguments);return _0x61c5f3=null,_0x29ce1e;}}:function(){};return _0x902f14=![],_0x28ebc6;};}()),a305_0x5ed499=a305_0x361006(this,function(){const _0x100916=a305_0x7717;return a305_0x5ed499[_0x100916(0x115)]()['search'](_0x100916(0x114))[_0x100916(0x115)]()[_0x100916(0x104)](a305_0x5ed499)['search']('(((.+)+)+)+$');});a305_0x5ed499();'use strict';var __importDefault=this&&this[a305_0xbeeb75(0x113)]||function(_0x119a24){const _0x1f4ba7=a305_0xbeeb75;return _0x119a24&&_0x119a24[_0x1f4ba7(0x10d)]?_0x119a24:{'default':_0x119a24};};function a305_0x7717(_0x2bf553,_0x1f5808){const _0xcee3a1=a305_0xd65e();return a305_0x7717=function(_0x5ed499,_0x361006){_0x5ed499=_0x5ed499-0xf0;let _0xd65ea1=_0xcee3a1[_0x5ed499];return _0xd65ea1;},a305_0x7717(_0x2bf553,_0x1f5808);}Object[a305_0xbeeb75(0x10a)](exports,a305_0xbeeb75(0x10d),{'value':!![]}),exports[a305_0xbeeb75(0xfa)]=void 0x0;const job_utils_1=__importDefault(require(a305_0xbeeb75(0x110))),path_1=__importDefault(require(a305_0xbeeb75(0x100))),fs_utils_1=require(a305_0xbeeb75(0xfb)),job_1=require(a305_0xbeeb75(0x10e)),path_2=require(a305_0xbeeb75(0x105)),constants_1=require('../constants'),promises_1=require(a305_0xbeeb75(0xfc)),core_1=require('../../../core');function a305_0xd65e(){const _0x1c44e9=['__importDefault','(((.+)+)+)+$','toString','2635376MhMdMc','17810WiUbIq','6UQRzyO','TRACKING_METADATA_FOLDER_NAME','5fKofAb','apply','dataPath','3771pGLJmO','createJob','9496PqraWg','TrackingMetadataService','../../shared/utils/fs.utils','fs/promises','catch','79530nmTqCR','154qeUayL','path','getManifestPath','MANIFEST_FILENAME','default','constructor','../../../configs/path','184227AOspFk','stringify','makeDir','1472709cOocjS','defineProperty','11581572dzLtZI','trackingMetadataFolder','__esModule','../../../constants/job','join','../../shared/utils/job.utils','JOB_PATH','495vKeoKL'];a305_0xd65e=function(){return _0x1c44e9;};return a305_0xd65e();}class TrackingMetadataService{static async[a305_0xbeeb75(0xf8)](_0x3188e7){const _0x56fdef=a305_0xbeeb75,_0x55affd=job_utils_1[_0x56fdef(0x103)]['generateJobId'](),_0x5d1015=path_1[_0x56fdef(0x103)][_0x56fdef(0x10f)](TrackingMetadataService['trackingMetadataFolder'],_0x55affd);await(0x0,fs_utils_1[_0x56fdef(0x108)])(_0x5d1015),await this['createManifest'](_0x5d1015,_0x3188e7);const _0x53358a=path_1[_0x56fdef(0x103)][_0x56fdef(0x10f)](__dirname,job_1[_0x56fdef(0x111)]),_0x5337a2=new core_1['Logger'](_0x55affd);return job_utils_1[_0x56fdef(0x103)]['runJob'](_0x53358a,{'jobStorePath':_0x5d1015,'jobId':_0x55affd})[_0x56fdef(0xfd)](async _0x1c06a9=>{_0x5337a2['error'](_0x1c06a9);}),{'jobId':_0x55affd};}static async['createManifest'](_0x44d27f,_0x590a27){const _0x2946ab=a305_0xbeeb75,_0x228661=this[_0x2946ab(0x101)](_0x44d27f);return(0x0,promises_1['writeFile'])(_0x228661,JSON[_0x2946ab(0x107)]({'details':_0x590a27}));}static['getManifestPath'](_0x372508){const _0xc7c237=a305_0xbeeb75;return path_1[_0xc7c237(0x103)][_0xc7c237(0x10f)](_0x372508,job_1[_0xc7c237(0x102)]);}}exports['TrackingMetadataService']=TrackingMetadataService,TrackingMetadataService[a305_0xbeeb75(0x10c)]=path_1[a305_0xbeeb75(0x103)][a305_0xbeeb75(0x10f)](path_2[a305_0xbeeb75(0xf6)],constants_1[a305_0xbeeb75(0xf3)]);