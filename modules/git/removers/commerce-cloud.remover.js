const a253_0x109a41=a253_0x1800;(function(_0x20600e,_0x758450){const _0x71594=a253_0x1800,_0x50c559=_0x20600e();while(!![]){try{const _0x543cc8=parseInt(_0x71594(0x1fe))/0x1*(parseInt(_0x71594(0x1f8))/0x2)+parseInt(_0x71594(0x1e8))/0x3*(parseInt(_0x71594(0x1f0))/0x4)+-parseInt(_0x71594(0x1f5))/0x5*(-parseInt(_0x71594(0x1ff))/0x6)+-parseInt(_0x71594(0x1e6))/0x7+-parseInt(_0x71594(0x1e4))/0x8*(-parseInt(_0x71594(0x1e5))/0x9)+parseInt(_0x71594(0x1eb))/0xa+-parseInt(_0x71594(0x1fc))/0xb*(parseInt(_0x71594(0x1f4))/0xc);if(_0x543cc8===_0x758450)break;else _0x50c559['push'](_0x50c559['shift']());}catch(_0xda1f9){_0x50c559['push'](_0x50c559['shift']());}}}(a253_0x30ec,0xdb008));const a253_0xce3c5e=(function(){let _0x575168=!![];return function(_0xb0c3f6,_0x4244dc){const _0x2201f5=_0x575168?function(){const _0x3510c8=a253_0x1800;if(_0x4244dc){const _0x54501f=_0x4244dc[_0x3510c8(0x1f7)](_0xb0c3f6,arguments);return _0x4244dc=null,_0x54501f;}}:function(){};return _0x575168=![],_0x2201f5;};}()),a253_0xd2a1e=a253_0xce3c5e(this,function(){const _0x1c99d5=a253_0x1800;return a253_0xd2a1e['toString']()[_0x1c99d5(0x1f3)](_0x1c99d5(0x1ec))['toString']()['constructor'](a253_0xd2a1e)[_0x1c99d5(0x1f3)](_0x1c99d5(0x1ec));});a253_0xd2a1e();'use strict';var __importDefault=this&&this[a253_0x109a41(0x1ea)]||function(_0x25b890){const _0x7d755f=a253_0x109a41;return _0x25b890&&_0x25b890[_0x7d755f(0x1fb)]?_0x25b890:{'default':_0x25b890};};function a253_0x30ec(){const _0x33d6ad=['2Jknjvy','3788178XoflDG','join','logger','execute','name','24600qEASlL','4023yfgnky','2535918iwVWBB','components','124629bmkVvb','default','__importDefault','9328390PQaxgn','(((.+)+)+)+$','log','length','CommerceCloudRemover','132lfBkoP','path','./base.remover','search','49664292kUCeiZ','10OvLosA','type','apply','456988IjAYSa','Can`t\x20remove\x20component\x20\x20%s\x20[%s]\x20-\x20the\x20file\x20does\x20not\x20exist.','fileName','__esModule','11gwMKjj','splice'];a253_0x30ec=function(){return _0x33d6ad;};return a253_0x30ec();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a253_0x109a41(0x1ef)]=void 0x0;function a253_0x1800(_0x189378,_0x43a276){const _0x476503=a253_0x30ec();return a253_0x1800=function(_0xd2a1e,_0xce3c5e){_0xd2a1e=_0xd2a1e-0x1e4;let _0x30ec74=_0x476503[_0xd2a1e];return _0x30ec74;},a253_0x1800(_0x189378,_0x43a276);}const base_remover_1=require(a253_0x109a41(0x1f2)),path_1=__importDefault(require(a253_0x109a41(0x1f1))),fs_internal_1=require('../internal/fs.internal');class CommerceCloudRemover extends base_remover_1['BaseRemover']{constructor({components:_0x3e8c19,sourceDir:_0x1880f5}){const _0x3c3220=a253_0x109a41;super({'sourceDir':_0x1880f5,'components':_0x3e8c19},CommerceCloudRemover[_0x3c3220(0x203)]),this['MAX_WRITES_PER_TICK']=0x64;}async[a253_0x109a41(0x202)](){const _0x3d2619=a253_0x109a41;while(this['components'][_0x3d2619(0x1ee)]){const _0x18d8a0=this[_0x3d2619(0x1e7)][_0x3d2619(0x1fd)](0x0,this['MAX_WRITES_PER_TICK']);for(const _0x2afc32 of _0x18d8a0){const _0x4dd57c=path_1[_0x3d2619(0x1e9)][_0x3d2619(0x200)](this['sourceDir'],_0x2afc32[_0x3d2619(0x1f1)]),_0x1a061e=await fs_internal_1['FS']['exists'](_0x4dd57c);if(!_0x1a061e){this[_0x3d2619(0x201)][_0x3d2619(0x1ed)](_0x3d2619(0x1f9),_0x2afc32[_0x3d2619(0x1fa)],_0x2afc32[_0x3d2619(0x1f6)]);continue;}await fs_internal_1['FS']['removeFile'](_0x4dd57c);}}}}exports[a253_0x109a41(0x1ef)]=CommerceCloudRemover;