const a91_0x2ad527=a91_0x19b3;function a91_0x21bd(){const _0x213cb1=['55zuuxQk','apply','6dqTUOT','3960810KCaxZR','Transform','3001313aAFJLt','3438928VEPoLM','reduce','_fieldRules','@flosum/data-masking','toString','maskRecord','search','1016451UgrODn','defineProperty','20lmtAsA','keys','379864XPtMwY','4281101vUSWCq','2AvEBSI','get','stream','(((.+)+)+)+$','Cannot\x20find\x20Describe\x20Field\x20for\x20\x27','MaskingFactory','_describeFieldMap','35344DOIrDC'];a91_0x21bd=function(){return _0x213cb1;};return a91_0x21bd();}(function(_0x5e2440,_0x3cd1ed){const _0x25a962=a91_0x19b3,_0x19534a=_0x5e2440();while(!![]){try{const _0x13614d=parseInt(_0x25a962(0x15e))/0x1+parseInt(_0x25a962(0x160))/0x2*(parseInt(_0x25a962(0x15a))/0x3)+-parseInt(_0x25a962(0x167))/0x4*(parseInt(_0x25a962(0x168))/0x5)+-parseInt(_0x25a962(0x16a))/0x6*(-parseInt(_0x25a962(0x152))/0x7)+parseInt(_0x25a962(0x153))/0x8+-parseInt(_0x25a962(0x16b))/0x9+-parseInt(_0x25a962(0x15c))/0xa*(parseInt(_0x25a962(0x15f))/0xb);if(_0x13614d===_0x3cd1ed)break;else _0x19534a['push'](_0x19534a['shift']());}catch(_0x2aadb5){_0x19534a['push'](_0x19534a['shift']());}}}(a91_0x21bd,0x3fe06));function a91_0x19b3(_0x5d74a9,_0x242ad0){const _0x294ead=a91_0x21bd();return a91_0x19b3=function(_0x3e1b53,_0x5dd1f4){_0x3e1b53=_0x3e1b53-0x152;let _0x21bdad=_0x294ead[_0x3e1b53];return _0x21bdad;},a91_0x19b3(_0x5d74a9,_0x242ad0);}const a91_0x5dd1f4=(function(){let _0xa9cfd8=!![];return function(_0xf2e9a6,_0x2b22f4){const _0x52da6f=_0xa9cfd8?function(){const _0x163b3d=a91_0x19b3;if(_0x2b22f4){const _0x203d6b=_0x2b22f4[_0x163b3d(0x169)](_0xf2e9a6,arguments);return _0x2b22f4=null,_0x203d6b;}}:function(){};return _0xa9cfd8=![],_0x52da6f;};}()),a91_0x3e1b53=a91_0x5dd1f4(this,function(){const _0x4eacfc=a91_0x19b3;return a91_0x3e1b53[_0x4eacfc(0x157)]()[_0x4eacfc(0x159)](_0x4eacfc(0x163))['toString']()['constructor'](a91_0x3e1b53)['search'](_0x4eacfc(0x163));});a91_0x3e1b53();'use strict';Object[a91_0x2ad527(0x15b)](exports,'__esModule',{'value':!![]}),exports['StandardMasking']=void 0x0;const stream_1=require(a91_0x2ad527(0x162)),data_masking_1=require(a91_0x2ad527(0x156));class StandardMasking extends stream_1[a91_0x2ad527(0x16c)]{constructor({fieldRules:_0x46ad8f,objectName:_0x412ff0,describeFieldMap:_0x539344,libraries:_0x55676c}){const _0x332370=a91_0x2ad527;super({'objectMode':!![]}),this[_0x332370(0x155)]=_0x46ad8f,this['_objectName']=_0x412ff0,this[_0x332370(0x166)]=_0x539344,this['_libraries']=_0x55676c;}['_transform'](_0x27acc3,_0xde7320,_0x1cedca){const _0x17784a=a91_0x2ad527;try{if(!_0x27acc3){_0x1cedca(null,null);return;}const _0x20d145=this[_0x17784a(0x158)](_0x27acc3);_0x20d145['Id']=_0x27acc3['Id'],_0x1cedca(null,_0x20d145);}catch(_0x5cfde8){_0x1cedca(_0x5cfde8,null);}}[a91_0x2ad527(0x158)](_0x15f163){const _0x39154b=a91_0x2ad527;return Object[_0x39154b(0x15d)](this[_0x39154b(0x155)])[_0x39154b(0x154)]((_0x4d1083,_0x413d2e)=>{const _0x5b114e=_0x39154b,_0xe6b8d2=_0x15f163[_0x413d2e],_0x45c149=this[_0x5b114e(0x166)][_0x5b114e(0x161)](_0x413d2e);if(!_0x45c149)throw new Error(_0x5b114e(0x164)+_0x413d2e+'\x27\x20field');return _0x4d1083[_0x413d2e]=data_masking_1[_0x5b114e(0x165)]['create']({...this[_0x5b114e(0x155)][_0x413d2e],'library':this['_libraries'],'describeField':_0x45c149})['execute'](_0xe6b8d2),_0x4d1083;},{});}}exports['StandardMasking']=StandardMasking;