const a148_0x22a338=a148_0x58a4;(function(_0x2ece73,_0x1bfedf){const _0x205bf9=a148_0x58a4,_0x871d45=_0x2ece73();while(!![]){try{const _0x4d14a3=-parseInt(_0x205bf9(0x119))/0x1+-parseInt(_0x205bf9(0x12f))/0x2+-parseInt(_0x205bf9(0x11e))/0x3+-parseInt(_0x205bf9(0x10a))/0x4+parseInt(_0x205bf9(0x129))/0x5+parseInt(_0x205bf9(0x10d))/0x6*(parseInt(_0x205bf9(0x13b))/0x7)+parseInt(_0x205bf9(0x10b))/0x8*(parseInt(_0x205bf9(0x11b))/0x9);if(_0x4d14a3===_0x1bfedf)break;else _0x871d45['push'](_0x871d45['shift']());}catch(_0x54e84a){_0x871d45['push'](_0x871d45['shift']());}}}(a148_0x5bf2,0xc34e6));const a148_0x257386=(function(){let _0x11d32d=!![];return function(_0xe94d50,_0x281bc9){const _0xa5bd71=_0x11d32d?function(){if(_0x281bc9){const _0x3709db=_0x281bc9['apply'](_0xe94d50,arguments);return _0x281bc9=null,_0x3709db;}}:function(){};return _0x11d32d=![],_0xa5bd71;};}()),a148_0x5da7e7=a148_0x257386(this,function(){const _0x148c10=a148_0x58a4;return a148_0x5da7e7[_0x148c10(0x12b)]()[_0x148c10(0x112)](_0x148c10(0xfd))[_0x148c10(0x12b)]()[_0x148c10(0x11d)](a148_0x5da7e7)[_0x148c10(0x112)]('(((.+)+)+)+$');});function a148_0x5bf2(){const _0x31fe23=['exists','../../internal/fs.internal','handleXmlParsingError','119nFOafx','replaceOrAppend','(((.+)+)+)+$','Logger','internalLogger','writeParent','../utils/zip','makeDir','MDApiWriter','skipChildErrors','catch','../../../../core','InvalidXmlError','body','log','2371520DurCME','260112UBdRto','files','410190YMNNjX','default','unzip','length','includes','search','map','splice','MAX_WRITES_PER_TICK','fileType','async','text','161487VfPyjn','parse','63zNmSJG','__esModule','constructor','750111hftIin','writeChild','../errors/invalid-xml.error','nodebuffer','XmlV2','fileName','__importDefault','[WriteParent]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','readZip','join','].\x20Original\x20error:\x20','2286610nZGTZp','readFile','toString','parentComponents','path','keys','85494leRtFr','components','dir','writeFile','../data/child-types','name','sourceDir','Zip','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20'];a148_0x5bf2=function(){return _0x31fe23;};return a148_0x5bf2();}a148_0x5da7e7();'use strict';var __importDefault=this&&this[a148_0x22a338(0x124)]||function(_0x4f0a9a){return _0x4f0a9a&&_0x4f0a9a['__esModule']?_0x4f0a9a:{'default':_0x4f0a9a};};function a148_0x58a4(_0x18a0d0,_0x5f4540){const _0x23fd95=a148_0x5bf2();return a148_0x58a4=function(_0x5da7e7,_0x257386){_0x5da7e7=_0x5da7e7-0xfd;let _0x5bf2f8=_0x23fd95[_0x5da7e7];return _0x5bf2f8;},a148_0x58a4(_0x18a0d0,_0x5f4540);}Object['defineProperty'](exports,a148_0x22a338(0x11c),{'value':!![]}),exports[a148_0x22a338(0x103)]=void 0x0;const path_1=__importDefault(require(a148_0x22a338(0x12d))),core_1=require(a148_0x22a338(0x106)),fs_internal_1=require(a148_0x22a338(0x139)),invalid_xml_error_1=require(a148_0x22a338(0x120)),xml_v2_1=require('../utils/xml-v2'),zip_1=require(a148_0x22a338(0x101)),child_types_1=__importDefault(require(a148_0x22a338(0x133)));class MDApiWriter{constructor({components:_0xa61852,sourceDir:_0x251451,skipChildErrors:_0x311a29}){const _0x573e9b=a148_0x22a338;this[_0x573e9b(0x115)]=0x64,this[_0x573e9b(0x12c)]={},this[_0x573e9b(0xff)]=new core_1[(_0x573e9b(0xfe))](MDApiWriter[_0x573e9b(0x134)]),this[_0x573e9b(0x130)]=_0xa61852,this[_0x573e9b(0x135)]=_0x251451,this[_0x573e9b(0x104)]=_0x311a29;}async['readZip'](_0x26af65,_0x58bfac=![]){const _0x267ffa=a148_0x22a338,_0x2464b9=await zip_1[_0x267ffa(0x136)][_0x267ffa(0x10f)](_0x26af65),_0x366b3b=[];for(const _0xba08e4 of Object[_0x267ffa(0x12e)](_0x2464b9[_0x267ffa(0x10c)])){!_0x2464b9[_0x267ffa(0x10c)][_0xba08e4][_0x267ffa(0x131)]&&_0x366b3b['push']({'filename':_0xba08e4,'body':await _0x2464b9['files'][_0xba08e4][_0x267ffa(0x117)](_0x58bfac?_0x267ffa(0x121):_0x267ffa(0x118))});}return _0x366b3b;}async[a148_0x22a338(0x100)](_0x397767){const _0x1edc98=a148_0x22a338;try{const _0x415562=await this['readZip'](_0x397767[_0x1edc98(0x108)],!![]);await Promise['all'](_0x415562[_0x1edc98(0x113)](({filename:_0x3ff53f,body:_0x7dc9a9})=>fs_internal_1['FS'][_0x1edc98(0x132)](path_1['default'][_0x1edc98(0x127)](this['sourceDir'],_0x3ff53f),_0x7dc9a9)));}catch(_0x5049d2){throw new Error(_0x1edc98(0x125)+_0x397767[_0x1edc98(0x123)]+'\x20['+_0x397767[_0x1edc98(0x116)]+_0x1edc98(0x128)+_0x5049d2);}}[a148_0x22a338(0x13a)](_0x28538c,_0x55a1d5){const _0x169c35=a148_0x22a338;throw new invalid_xml_error_1[(_0x169c35(0x107))]('[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20'+_0x55a1d5['fileName']+'\x20['+_0x55a1d5[_0x169c35(0x116)]+'].\x20Original\x20error:\x20'+_0x28538c);}async[a148_0x22a338(0x11f)](_0x57d171){const _0x318e2f=a148_0x22a338,{filename:_0x291a2,body:_0x5dabf7}=(await this[_0x318e2f(0x126)](_0x57d171[_0x318e2f(0x108)]))[0x0];try{if(!this[_0x318e2f(0x12c)][_0x291a2]){const _0x24d710=path_1['default'][_0x318e2f(0x127)](this[_0x318e2f(0x135)],_0x291a2);if(await fs_internal_1['FS'][_0x318e2f(0x138)](_0x24d710)){const _0x570f8a=await fs_internal_1['FS'][_0x318e2f(0x12a)](_0x24d710);this[_0x318e2f(0x12c)][_0x291a2]=await xml_v2_1[_0x318e2f(0x122)]['parse'](_0x570f8a)[_0x318e2f(0x105)](_0x3a7391=>this[_0x318e2f(0x13a)](_0x3a7391,_0x57d171));}else{this[_0x318e2f(0x12c)][_0x291a2]=await xml_v2_1[_0x318e2f(0x122)][_0x318e2f(0x11a)](_0x5dabf7)['catch'](_0x12b30e=>this[_0x318e2f(0x13a)](_0x12b30e,_0x57d171));return;}}const _0xe728f9=this[_0x318e2f(0x12c)][_0x291a2],_0x196725=await xml_v2_1['XmlV2'][_0x318e2f(0x11a)](_0x5dabf7)['catch'](_0xaad8d5=>this[_0x318e2f(0x13a)](_0xaad8d5,_0x57d171));xml_v2_1['XmlV2'][_0x318e2f(0x13c)](_0xe728f9,_0x196725);}catch(_0x468f0d){if(_0x468f0d instanceof invalid_xml_error_1['InvalidXmlError']){if(this['skipChildErrors'])return;else throw _0x468f0d;}throw new Error(_0x318e2f(0x137)+_0x57d171[_0x318e2f(0x123)]+'\x20['+_0x57d171[_0x318e2f(0x116)]+_0x318e2f(0x128)+_0x468f0d);}}async['start'](){const _0x3664a2=a148_0x22a338;!await fs_internal_1['FS']['exists'](this[_0x3664a2(0x135)])&&await fs_internal_1['FS'][_0x3664a2(0x102)](this[_0x3664a2(0x135)]);for(const _0x2ee9d1 of this['components']){!child_types_1[_0x3664a2(0x10e)][_0x3664a2(0x111)](_0x2ee9d1[_0x3664a2(0x116)])?await this['writeParent'](_0x2ee9d1):await this[_0x3664a2(0x11f)](_0x2ee9d1);}const _0x5bef0f=Object['keys'](this['parentComponents']);this[_0x3664a2(0xff)][_0x3664a2(0x109)]('have\x20to\x20write\x20%d\x20files',this[_0x3664a2(0x130)][_0x3664a2(0x110)]);while(_0x5bef0f[_0x3664a2(0x110)]){const _0x51273a=_0x5bef0f[_0x3664a2(0x114)](0x0,this['MAX_WRITES_PER_TICK']);for(const _0x59947e of _0x51273a){await fs_internal_1['FS']['writeFile'](path_1[_0x3664a2(0x10e)][_0x3664a2(0x127)](this[_0x3664a2(0x135)],_0x59947e),xml_v2_1['XmlV2']['convertToString'](this[_0x3664a2(0x12c)][_0x59947e]));}}this[_0x3664a2(0x12c)]={};}}exports[a148_0x22a338(0x103)]=MDApiWriter;