const a199_0x2612b6=a199_0xe395;(function(_0x330105,_0x5a2225){const _0x1e3079=a199_0xe395,_0x5a6073=_0x330105();while(!![]){try{const _0x35a231=parseInt(_0x1e3079(0x19d))/0x1*(parseInt(_0x1e3079(0x177))/0x2)+-parseInt(_0x1e3079(0x181))/0x3*(-parseInt(_0x1e3079(0x188))/0x4)+parseInt(_0x1e3079(0x190))/0x5+-parseInt(_0x1e3079(0x18d))/0x6*(parseInt(_0x1e3079(0x18e))/0x7)+parseInt(_0x1e3079(0x198))/0x8+-parseInt(_0x1e3079(0x19b))/0x9+-parseInt(_0x1e3079(0x17e))/0xa;if(_0x35a231===_0x5a2225)break;else _0x5a6073['push'](_0x5a6073['shift']());}catch(_0x9144f){_0x5a6073['push'](_0x5a6073['shift']());}}}(a199_0x266e,0x8cf8b));const a199_0xb518f5=(function(){let _0x1569db=!![];return function(_0x47f8ee,_0x3c18bc){const _0x46aa55=_0x1569db?function(){const _0x5f5aba=a199_0xe395;if(_0x3c18bc){const _0x4c368e=_0x3c18bc[_0x5f5aba(0x192)](_0x47f8ee,arguments);return _0x3c18bc=null,_0x4c368e;}}:function(){};return _0x1569db=![],_0x46aa55;};}()),a199_0x2d8cd1=a199_0xb518f5(this,function(){const _0x323bfd=a199_0xe395;return a199_0x2d8cd1[_0x323bfd(0x191)]()['search'](_0x323bfd(0x18c))[_0x323bfd(0x191)]()['constructor'](a199_0x2d8cd1)[_0x323bfd(0x199)](_0x323bfd(0x18c));});a199_0x2d8cd1();'use strict';var __importDefault=this&&this[a199_0x2612b6(0x197)]||function(_0x4f9e1f){const _0x4bcaff=a199_0x2612b6;return _0x4f9e1f&&_0x4f9e1f[_0x4bcaff(0x19c)]?_0x4f9e1f:{'default':_0x4f9e1f};};Object[a199_0x2612b6(0x19f)](exports,a199_0x2612b6(0x19c),{'value':!![]}),exports['SFDXUtils']=void 0x0;function a199_0x266e(){const _0x2bb769=['../../internal/fs.internal','shortid','createProjectFrom','uniqueId','__importDefault','2712680HTTELG','search','exists','1209186jrTeqh','__esModule','887251hfWpLL','../../salesforce/utils/sfdx.utils','defineProperty','Shell','2scIjXZ','PROJECTS_PATH','createEmptyPackageXml','removeDir','cwd','../../internal/shell.internal','fullProjectName','16370780FOHiIv','projectName','SFDXUtils','127101AAkYAs','default','.temp','branchName','dir','join','copyProjectTo','28EoJCwU','/force-app\x20','mdapiToSource','sfdx','(((.+)+)+)+$','66840MwVjmw','14SpgDeG','SFDX','4241130gMVJQZ','toString','apply'];a199_0x266e=function(){return _0x2bb769;};return a199_0x266e();}const path_1=__importDefault(require('path')),fs_internal_1=require(a199_0x2612b6(0x193)),shell_internal_1=require(a199_0x2612b6(0x17c)),sfdx_utils_1=require(a199_0x2612b6(0x19e)),shortid_1=__importDefault(require(a199_0x2612b6(0x194)));function a199_0xe395(_0x3ecdf3,_0x49c1fb){const _0x4510ea=a199_0x266e();return a199_0xe395=function(_0x2d8cd1,_0xb518f5){_0x2d8cd1=_0x2d8cd1-0x176;let _0x266e21=_0x4510ea[_0x2d8cd1];return _0x266e21;},a199_0xe395(_0x3ecdf3,_0x49c1fb);}class SFDXUtils{constructor(_0x3be112,_0x49c119){const _0x374af9=a199_0x2612b6;this[_0x374af9(0x17f)]=_0x3be112,this[_0x374af9(0x184)]=_0x49c119,this[_0x374af9(0x178)]=path_1[_0x374af9(0x182)]['join'](process[_0x374af9(0x17b)](),_0x374af9(0x183),_0x374af9(0x18b)),this[_0x374af9(0x196)]=shortid_1[_0x374af9(0x182)]();}get['fullProjectName'](){const _0x3ffde0=a199_0x2612b6;return''+this[_0x3ffde0(0x196)];}get[a199_0x2612b6(0x185)](){const _0x3e69d8=a199_0x2612b6;return path_1['default'][_0x3e69d8(0x186)](this['PROJECTS_PATH'],this[_0x3e69d8(0x17d)]);}async[a199_0x2612b6(0x195)](_0x46f330){const _0x351447=a199_0x2612b6;!await fs_internal_1['FS'][_0x351447(0x19a)](this['PROJECTS_PATH'])&&await fs_internal_1['FS']['makeDir'](this[_0x351447(0x178)]),await sfdx_utils_1['SFDX']['createEmptyProject'](this[_0x351447(0x178)],this[_0x351447(0x17d)]),await sfdx_utils_1[_0x351447(0x18f)][_0x351447(0x179)](_0x46f330),await sfdx_utils_1[_0x351447(0x18f)][_0x351447(0x18a)](_0x46f330,this['dir']);}async[a199_0x2612b6(0x187)](_0x6605d2){const _0x1a6517=a199_0x2612b6;await shell_internal_1[_0x1a6517(0x176)]['exec']('cp\x20-r\x20'+this['dir']+_0x1a6517(0x189)+_0x6605d2);}async['removeDir'](){const _0x3d4ebf=a199_0x2612b6;await fs_internal_1['FS'][_0x3d4ebf(0x17a)](this[_0x3d4ebf(0x185)]);}}exports[a199_0x2612b6(0x180)]=SFDXUtils;