const a303_0x2319f9=a303_0xd448;(function(_0x1920e5,_0x1df6b6){const _0x10fabf=a303_0xd448,_0x4900c4=_0x1920e5();while(!![]){try{const _0x25a168=parseInt(_0x10fabf(0x1fb))/0x1*(parseInt(_0x10fabf(0x1f1))/0x2)+-parseInt(_0x10fabf(0x215))/0x3*(parseInt(_0x10fabf(0x207))/0x4)+-parseInt(_0x10fabf(0x211))/0x5+parseInt(_0x10fabf(0x210))/0x6*(parseInt(_0x10fabf(0x209))/0x7)+parseInt(_0x10fabf(0x1f3))/0x8*(parseInt(_0x10fabf(0x1ee))/0x9)+-parseInt(_0x10fabf(0x224))/0xa+parseInt(_0x10fabf(0x1ff))/0xb;if(_0x25a168===_0x1df6b6)break;else _0x4900c4['push'](_0x4900c4['shift']());}catch(_0x245604){_0x4900c4['push'](_0x4900c4['shift']());}}}(a303_0x4d27,0xb4e28));const a303_0x4213a4=(function(){let _0x195d0c=!![];return function(_0x8c03a5,_0x44940d){const _0x3a1254=_0x195d0c?function(){if(_0x44940d){const _0x124c7d=_0x44940d['apply'](_0x8c03a5,arguments);return _0x44940d=null,_0x124c7d;}}:function(){};return _0x195d0c=![],_0x3a1254;};}()),a303_0x554d7a=a303_0x4213a4(this,function(){const _0x151028=a303_0xd448;return a303_0x554d7a[_0x151028(0x1f5)]()[_0x151028(0x21f)](_0x151028(0x205))[_0x151028(0x1f5)]()['constructor'](a303_0x554d7a)['search'](_0x151028(0x205));});a303_0x554d7a();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5757ca){const _0x537dcc=a303_0xd448;return _0x5757ca&&_0x5757ca[_0x537dcc(0x200)]?_0x5757ca:{'default':_0x5757ca};};Object[a303_0x2319f9(0x20d)](exports,a303_0x2319f9(0x200),{'value':!![]}),exports['MDApiWriter']=void 0x0;const path_1=__importDefault(require('path')),fs_internal_1=require('../internal/fs.internal'),invalid_xml_error_1=require(a303_0x2319f9(0x202)),xml_v2_1=require(a303_0x2319f9(0x1f6)),child_types_1=__importDefault(require('../parsers/data/child-types')),base_writer_1=require(a303_0x2319f9(0x214));function a303_0xd448(_0x34311b,_0x29ee95){const _0x5eca0f=a303_0x4d27();return a303_0xd448=function(_0x554d7a,_0x4213a4){_0x554d7a=_0x554d7a-0x1ee;let _0x4d27a9=_0x5eca0f[_0x554d7a];return _0x4d27a9;},a303_0xd448(_0x34311b,_0x29ee95);}class MDApiWriter extends base_writer_1[a303_0x2319f9(0x1f2)]{constructor({components:_0x187100,sourceDir:_0x1124e9,skipChildErrors:_0x3fe653}){const _0x22f2b3=a303_0x2319f9;super({'components':_0x187100,'sourceDir':_0x1124e9},MDApiWriter[_0x22f2b3(0x1f8)]),this[_0x22f2b3(0x1f4)]=0x64,this[_0x22f2b3(0x204)]={},this['skipChildErrors']=_0x3fe653;}async[a303_0x2319f9(0x219)](_0xa481ed){const _0x684c05=a303_0x2319f9;try{const _0x2f2f69=await this[_0x684c05(0x20c)](_0xa481ed[_0x684c05(0x1ef)],!![]);await Promise[_0x684c05(0x208)](_0x2f2f69[_0x684c05(0x21e)](({filename:_0x31db0f,body:_0x5dea09})=>fs_internal_1['FS'][_0x684c05(0x20e)](path_1[_0x684c05(0x201)]['join'](this[_0x684c05(0x220)],_0x31db0f),_0x5dea09)));}catch(_0x130f39){throw new Error('[WriteParent]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20'+_0xa481ed[_0x684c05(0x20b)]+'\x20['+_0xa481ed[_0x684c05(0x1fd)]+'].\x20Original\x20error:\x20'+_0x130f39);}}[a303_0x2319f9(0x1f7)](_0x2c0ba4,_0x22f19d){const _0x4c3834=a303_0x2319f9;throw new invalid_xml_error_1['InvalidXmlError'](_0x4c3834(0x221)+_0x22f19d[_0x4c3834(0x20b)]+'\x20['+_0x22f19d[_0x4c3834(0x1fd)]+_0x4c3834(0x1fa)+_0x2c0ba4);}async[a303_0x2319f9(0x20f)](_0x49b2a5){const _0x3ce39f=a303_0x2319f9,{filename:_0x557e4e,body:_0x4b276c}=(await this[_0x3ce39f(0x20c)](_0x49b2a5[_0x3ce39f(0x1ef)]))[0x0];try{if(!this[_0x3ce39f(0x204)][_0x557e4e]){const _0x24d2a3=path_1[_0x3ce39f(0x201)][_0x3ce39f(0x21c)](this['sourceDir'],_0x557e4e);if(await fs_internal_1['FS'][_0x3ce39f(0x212)](_0x24d2a3)){const _0x2ef9ef=await fs_internal_1['FS'][_0x3ce39f(0x21b)](_0x24d2a3);this[_0x3ce39f(0x204)][_0x557e4e]=await xml_v2_1[_0x3ce39f(0x21d)][_0x3ce39f(0x1fe)](_0x2ef9ef)['catch'](_0x13bdca=>this[_0x3ce39f(0x1f7)](_0x13bdca,_0x49b2a5));}else{this['parentComponents'][_0x557e4e]=await xml_v2_1['XmlV2'][_0x3ce39f(0x1fe)](_0x4b276c)[_0x3ce39f(0x218)](_0x542c7b=>this['handleXmlParsingError'](_0x542c7b,_0x49b2a5));return;}}const _0xde2c1f=this[_0x3ce39f(0x204)][_0x557e4e],_0x4df761=await xml_v2_1[_0x3ce39f(0x21d)][_0x3ce39f(0x1fe)](_0x4b276c)[_0x3ce39f(0x218)](_0x24657d=>this['handleXmlParsingError'](_0x24657d,_0x49b2a5));xml_v2_1[_0x3ce39f(0x21d)]['replaceOrAppend'](_0xde2c1f,_0x4df761);}catch(_0x5ab6d6){if(_0x5ab6d6 instanceof invalid_xml_error_1['InvalidXmlError']){if(this[_0x3ce39f(0x213)])return;else throw _0x5ab6d6;}throw new Error('[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20'+_0x49b2a5[_0x3ce39f(0x20b)]+'\x20['+_0x49b2a5[_0x3ce39f(0x1fd)]+'].\x20Original\x20error:\x20'+_0x5ab6d6);}}async['execute'](){const _0x57aa2a=a303_0x2319f9;!await fs_internal_1['FS']['exists'](this[_0x57aa2a(0x220)])&&await fs_internal_1['FS'][_0x57aa2a(0x20a)](this[_0x57aa2a(0x220)]);const _0x2fac36=[],_0x866692=[];for(const _0x36418f of this[_0x57aa2a(0x217)]){child_types_1[_0x57aa2a(0x201)][_0x57aa2a(0x1f9)](_0x36418f[_0x57aa2a(0x1fd)])?_0x866692[_0x57aa2a(0x206)](_0x36418f):_0x2fac36[_0x57aa2a(0x206)](_0x36418f);}for(const _0x4e38ab of _0x2fac36){await this['writeParent'](_0x4e38ab);}for(const _0x5d049e of _0x866692){await this[_0x57aa2a(0x20f)](_0x5d049e);}const _0x1ef2bd=Object['keys'](this['parentComponents']);this[_0x57aa2a(0x216)][_0x57aa2a(0x203)](_0x57aa2a(0x223),this[_0x57aa2a(0x217)][_0x57aa2a(0x1fc)]);while(_0x1ef2bd[_0x57aa2a(0x1fc)]){const _0x507e0e=_0x1ef2bd[_0x57aa2a(0x21a)](0x0,this[_0x57aa2a(0x1f4)]);for(const _0x25f31b of _0x507e0e){await fs_internal_1['FS'][_0x57aa2a(0x20e)](path_1['default']['join'](this[_0x57aa2a(0x220)],_0x25f31b),xml_v2_1[_0x57aa2a(0x21d)][_0x57aa2a(0x222)](this['parentComponents'][_0x25f31b]));}}this[_0x57aa2a(0x204)]={};}}exports[a303_0x2319f9(0x1f0)]=MDApiWriter;function a303_0x4d27(){const _0x2bfff5=['search','sourceDir','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','convertToString','Have\x20to\x20write\x20%d\x20files','6457680wPkTso','9xdAqCH','body','MDApiWriter','62092dqWNPo','BaseWriter','3277928maZtSn','MAX_WRITES_PER_TICK','toString','../parsers/utils/xml-v2','handleXmlParsingError','name','includes','].\x20Original\x20error:\x20','5miheUQ','length','fileType','parse','7134952slpGpu','__esModule','default','../parsers/errors/invalid-xml.error','log','parentComponents','(((.+)+)+)+$','push','508RILaHs','all','15463sfZFQn','makeDir','fileName','readZip','defineProperty','writeFile','writeChild','3744TZqDSl','820370txpNRi','exists','skipChildErrors','./base.writer','24597HwxDsY','logger','components','catch','writeParent','splice','readFile','join','XmlV2','map'];a303_0x4d27=function(){return _0x2bfff5;};return a303_0x4d27();}