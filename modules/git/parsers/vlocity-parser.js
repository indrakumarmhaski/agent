function a192_0x3244(_0x375307,_0x15f451){const _0x41994c=a192_0x5814();return a192_0x3244=function(_0x10bfdd,_0x449c44){_0x10bfdd=_0x10bfdd-0x15f;let _0x5814ac=_0x41994c[_0x10bfdd];return _0x5814ac;},a192_0x3244(_0x375307,_0x15f451);}const a192_0x409cc7=a192_0x3244;(function(_0x5aeb0d,_0x13b266){const _0x145d49=a192_0x3244,_0x59de30=_0x5aeb0d();while(!![]){try{const _0x552653=-parseInt(_0x145d49(0x185))/0x1+parseInt(_0x145d49(0x187))/0x2+-parseInt(_0x145d49(0x163))/0x3+-parseInt(_0x145d49(0x16e))/0x4*(-parseInt(_0x145d49(0x17b))/0x5)+-parseInt(_0x145d49(0x164))/0x6*(parseInt(_0x145d49(0x174))/0x7)+parseInt(_0x145d49(0x165))/0x8*(-parseInt(_0x145d49(0x16b))/0x9)+parseInt(_0x145d49(0x184))/0xa;if(_0x552653===_0x13b266)break;else _0x59de30['push'](_0x59de30['shift']());}catch(_0x5cc44b){_0x59de30['push'](_0x59de30['shift']());}}}(a192_0x5814,0xb8675));const a192_0x449c44=(function(){let _0x42a47c=!![];return function(_0x4bb58e,_0x4a2c87){const _0x3c56b4=_0x42a47c?function(){const _0x2e24d9=a192_0x3244;if(_0x4a2c87){const _0xceefdf=_0x4a2c87[_0x2e24d9(0x15f)](_0x4bb58e,arguments);return _0x4a2c87=null,_0xceefdf;}}:function(){};return _0x42a47c=![],_0x3c56b4;};}()),a192_0x10bfdd=a192_0x449c44(this,function(){const _0x18505f=a192_0x3244;return a192_0x10bfdd[_0x18505f(0x181)]()['search']('(((.+)+)+)+$')[_0x18505f(0x181)]()[_0x18505f(0x162)](a192_0x10bfdd)[_0x18505f(0x16d)]('(((.+)+)+)+$');});function a192_0x5814(){const _0x662b7d=['path','calculateCRC32','7xASFCK','readFile','Name','relative','log','entries','sourceDir','30XjhPwb','paths','error','__esModule','../internal/fs.internal','split','toString','crc','extractFileNameFromFiles','15502590PlJHiE','644704GVTlpV','./base.parser','1228096kvwuyJ','join','apply','parse','endsWith','constructor','4520556McWNEZ','875580zCcjPd','123608AZnkfI','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','Can\x20not\x20find\x20DataPack\x20file\x20in\x20Vlocity\x20component.','replace','VlocityParser','name','18xAPxrz','defineProperty','search','612932wvMSRp','_DataPack.json','logger','VLOCITY_DATA_PACK_EXTENSION'];a192_0x5814=function(){return _0x662b7d;};return a192_0x5814();}a192_0x10bfdd();'use strict';Object[a192_0x409cc7(0x16c)](exports,a192_0x409cc7(0x17e),{'value':!![]}),exports[a192_0x409cc7(0x169)]=void 0x0;const base_parser_1=require(a192_0x409cc7(0x186)),fs_internal_1=require(a192_0x409cc7(0x17f)),crc32_1=require('./utils/crc32'),path_1=require(a192_0x409cc7(0x172));class VlocityParser extends base_parser_1['BaseParser']{constructor({sourceDir:_0xf7148b,paths:_0x6004e6}){const _0x28197a=a192_0x409cc7;super({'sourceDir':_0xf7148b,'paths':_0x6004e6},VlocityParser[_0x28197a(0x16a)]),this[_0x28197a(0x171)]=_0x28197a(0x16f);}async['readComponent'](_0x154751){const _0x440086=a192_0x409cc7,_0x1ab93f=(0x0,path_1[_0x440086(0x188)])(this[_0x440086(0x17a)],_0x154751),_0x43096d=await fs_internal_1['FS']['readDir'](_0x1ab93f,!![]),_0x15f6b8={};for(const _0x4b0671 of _0x43096d){_0x15f6b8[(0x0,path_1[_0x440086(0x177)])(this['sourceDir'],_0x4b0671)[_0x440086(0x168)](/\\/g,'/')]=await fs_internal_1['FS'][_0x440086(0x175)](_0x4b0671,!![]);}return _0x15f6b8;}[a192_0x409cc7(0x183)]({files:_0x10516d}){const _0x476a98=a192_0x409cc7,_0x51dbd5=Object[_0x476a98(0x179)](_0x10516d)['find'](([_0x141e8b])=>_0x141e8b[_0x476a98(0x161)](this[_0x476a98(0x171)]));if(!_0x51dbd5)throw new Error(_0x476a98(0x167));const _0x31f4d9=JSON[_0x476a98(0x160)](_0x51dbd5[0x1][_0x476a98(0x181)]());return _0x31f4d9[_0x476a98(0x176)];}async['execute'](){const _0x4bb534=a192_0x409cc7,_0x123e7c=this[_0x4bb534(0x17c)][0x0],[_0x94a813,_0x50e42e]=_0x123e7c[_0x4bb534(0x180)](path_1['sep']);let _0x2fdb52,_0x2e095a=_0x50e42e;try{_0x2fdb52=await this['readComponent'](_0x123e7c);}catch(_0x104a94){return this[_0x4bb534(0x170)][_0x4bb534(0x17d)](_0x4bb534(0x166),_0x123e7c,_0x104a94),[];}try{_0x2e095a=this['extractFileNameFromFiles']({'files':_0x2fdb52});}catch(_0x34a1f0){this[_0x4bb534(0x170)][_0x4bb534(0x178)]('Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s\x20to\x20get\x20component\x20name.\x20Original\x20error:\x20',_0x123e7c,_0x34a1f0);}const _0x3f5ca7={'files':_0x2fdb52,'vlocityComponentName':_0x2e095a,'filePath':_0x123e7c,'type':_0x94a813,'name':_0x50e42e,'crc':'','isVlocityComponent':!![]},_0x54e2d6=(0x0,crc32_1[_0x4bb534(0x173)])(_0x3f5ca7);return _0x3f5ca7[_0x4bb534(0x182)]=_0x54e2d6,[_0x3f5ca7];}}exports[a192_0x409cc7(0x169)]=VlocityParser;