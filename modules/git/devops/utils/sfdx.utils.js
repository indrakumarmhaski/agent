const a123_0x8e309c=a123_0x997f;(function(_0x68b152,_0x19de24){const _0x51c941=a123_0x997f,_0x41305c=_0x68b152();while(!![]){try{const _0x9cb383=parseInt(_0x51c941(0x1b5))/0x1*(parseInt(_0x51c941(0x19e))/0x2)+parseInt(_0x51c941(0x1a2))/0x3+parseInt(_0x51c941(0x1b8))/0x4+-parseInt(_0x51c941(0x1b0))/0x5+parseInt(_0x51c941(0x1ab))/0x6+-parseInt(_0x51c941(0x19d))/0x7*(-parseInt(_0x51c941(0x1af))/0x8)+-parseInt(_0x51c941(0x19c))/0x9;if(_0x9cb383===_0x19de24)break;else _0x41305c['push'](_0x41305c['shift']());}catch(_0x4a9dd1){_0x41305c['push'](_0x41305c['shift']());}}}(a123_0x568b,0x9fea6));const a123_0x403548=(function(){let _0x155a0f=!![];return function(_0x265827,_0x405cb0){const _0x2572dd=_0x155a0f?function(){const _0x512807=a123_0x997f;if(_0x405cb0){const _0x4f5d33=_0x405cb0[_0x512807(0x1be)](_0x265827,arguments);return _0x405cb0=null,_0x4f5d33;}}:function(){};return _0x155a0f=![],_0x2572dd;};}()),a123_0x53737b=a123_0x403548(this,function(){const _0x4d5788=a123_0x997f;return a123_0x53737b['toString']()[_0x4d5788(0x19f)](_0x4d5788(0x1b1))[_0x4d5788(0x1a3)]()[_0x4d5788(0x1b7)](a123_0x53737b)['search'](_0x4d5788(0x1b1));});a123_0x53737b();'use strict';function a123_0x997f(_0x17277e,_0x51f9cc){const _0x3bbb69=a123_0x568b();return a123_0x997f=function(_0x53737b,_0x403548){_0x53737b=_0x53737b-0x198;let _0x568b37=_0x3bbb69[_0x53737b];return _0x568b37;},a123_0x997f(_0x17277e,_0x51f9cc);}var __importDefault=this&&this[a123_0x8e309c(0x1b2)]||function(_0x36fd26){const _0x2e21d7=a123_0x8e309c;return _0x36fd26&&_0x36fd26[_0x2e21d7(0x1c1)]?_0x36fd26:{'default':_0x36fd26};};Object[a123_0x8e309c(0x1ba)](exports,a123_0x8e309c(0x1c1),{'value':!![]}),exports[a123_0x8e309c(0x19a)]=void 0x0;const path_1=__importDefault(require(a123_0x8e309c(0x1bc))),fs_internal_1=require(a123_0x8e309c(0x1ad)),shell_internal_1=require(a123_0x8e309c(0x1ae)),sfdx_utils_1=require(a123_0x8e309c(0x1c2)),shortid_1=__importDefault(require('shortid')),sfdx_1=require(a123_0x8e309c(0x1a1));class SFDXUtils{constructor(){const _0x2430fe=a123_0x8e309c;this[_0x2430fe(0x1aa)]=path_1[_0x2430fe(0x1c3)][_0x2430fe(0x1a4)](process[_0x2430fe(0x1bd)](),'.temp',_0x2430fe(0x19b)),this[_0x2430fe(0x1bb)]=(0x0,shortid_1[_0x2430fe(0x1c3)])();}get['fullProjectName'](){const _0x4e4aa6=a123_0x8e309c;return''+this[_0x4e4aa6(0x1bb)];}get[a123_0x8e309c(0x1b9)](){const _0x103488=a123_0x8e309c;return path_1['default']['join'](this['PROJECTS_PATH'],this[_0x103488(0x1a0)]);}async[a123_0x8e309c(0x1bf)](_0x4344e2){const _0x2cf187=a123_0x8e309c;!await fs_internal_1['FS'][_0x2cf187(0x1a7)](this['PROJECTS_PATH'])&&await fs_internal_1['FS'][_0x2cf187(0x1a8)](this['PROJECTS_PATH']);await sfdx_utils_1[_0x2cf187(0x1a5)][_0x2cf187(0x1b3)](this[_0x2cf187(0x1aa)],this[_0x2cf187(0x1a0)]),await sfdx_utils_1['SFDX'][_0x2cf187(0x1c0)](_0x4344e2);try{await sfdx_utils_1['SFDX'][_0x2cf187(0x198)](_0x4344e2,this[_0x2cf187(0x1b9)]);}catch(_0x5a3dc3){if(!_0x5a3dc3[_0x2cf187(0x1ac)]['match'](sfdx_1[_0x2cf187(0x1a9)]))throw _0x5a3dc3;}}async['copyProjectTo'](_0x2e597e,_0x53965e=!![]){const _0x488d51=a123_0x8e309c;_0x53965e&&(!await fs_internal_1['FS'][_0x488d51(0x1a7)](_0x2e597e+_0x488d51(0x1b6))&&(_0x53965e=![])),_0x53965e?await shell_internal_1[_0x488d51(0x199)][_0x488d51(0x1b4)]('cp\x20-r\x20'+this[_0x488d51(0x1b9)]+'/force-app\x20'+_0x2e597e):await shell_internal_1[_0x488d51(0x199)][_0x488d51(0x1b4)]('cp\x20-r\x20'+this[_0x488d51(0x1b9)]+'/*\x20'+_0x2e597e);}async[a123_0x8e309c(0x1a6)](){const _0x4f0701=a123_0x8e309c;await fs_internal_1['FS'][_0x4f0701(0x1a6)](this[_0x4f0701(0x1b9)]);}}function a123_0x568b(){const _0xf126e1=['exists','makeDir','NO_RESULTS_TO_FORMAT','PROJECTS_PATH','2600034xbWslX','message','../../internal/fs.internal','../../internal/shell.internal','143504OoRBqH','4887520LBpwxO','(((.+)+)+)+$','__importDefault','createEmptyProject','exec','309137wnnodh','/sfdx-project.json','constructor','858400mIqmJF','dir','defineProperty','uniqueId','path','cwd','apply','createProjectFrom','createEmptyPackageXml','__esModule','../../salesforce/utils/sfdx.utils','default','mdapiToSource','Shell','SFDXUtils','sfdx','12129741LRyziY','483ZxzLJx','2bLCXHo','search','fullProjectName','../../../../constants/sfdx','2356407ybjpgs','toString','join','SFDX','removeDir'];a123_0x568b=function(){return _0xf126e1;};return a123_0x568b();}exports['SFDXUtils']=SFDXUtils;