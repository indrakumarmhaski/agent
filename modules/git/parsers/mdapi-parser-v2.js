const a181_0xd8362d=a181_0x5d7c;(function(_0x4bfb63,_0xaac767){const _0x204f8e=a181_0x5d7c,_0x3f0496=_0x4bfb63();while(!![]){try{const _0x464bce=parseInt(_0x204f8e(0x16e))/0x1+parseInt(_0x204f8e(0x166))/0x2+parseInt(_0x204f8e(0x190))/0x3+-parseInt(_0x204f8e(0x175))/0x4*(-parseInt(_0x204f8e(0x151))/0x5)+-parseInt(_0x204f8e(0x189))/0x6*(parseInt(_0x204f8e(0x182))/0x7)+parseInt(_0x204f8e(0x17f))/0x8*(-parseInt(_0x204f8e(0x185))/0x9)+parseInt(_0x204f8e(0x154))/0xa*(-parseInt(_0x204f8e(0x193))/0xb);if(_0x464bce===_0xaac767)break;else _0x3f0496['push'](_0x3f0496['shift']());}catch(_0x139fc5){_0x3f0496['push'](_0x3f0496['shift']());}}}(a181_0x5b5b,0xdb390));const a181_0x1d2b53=(function(){let _0x28af76=!![];return function(_0x36d79f,_0x4deb17){const _0x1f99e2=_0x28af76?function(){if(_0x4deb17){const _0x386f80=_0x4deb17['apply'](_0x36d79f,arguments);return _0x4deb17=null,_0x386f80;}}:function(){};return _0x28af76=![],_0x1f99e2;};}()),a181_0x3e88f3=a181_0x1d2b53(this,function(){const _0x157f13=a181_0x5d7c;return a181_0x3e88f3[_0x157f13(0x16f)]()['search'](_0x157f13(0x165))[_0x157f13(0x16f)]()[_0x157f13(0x16c)](a181_0x3e88f3)[_0x157f13(0x16b)](_0x157f13(0x165));});a181_0x3e88f3();'use strict';var __importDefault=this&&this[a181_0xd8362d(0x173)]||function(_0x2dbc3c){const _0x1d8e6a=a181_0xd8362d;return _0x2dbc3c&&_0x2dbc3c[_0x1d8e6a(0x158)]?_0x2dbc3c:{'default':_0x2dbc3c};};Object[a181_0xd8362d(0x17e)](exports,a181_0xd8362d(0x158),{'value':!![]}),exports[a181_0xd8362d(0x170)]=void 0x0;const fs_internal_1=require(a181_0xd8362d(0x183)),utils_1=require(a181_0xd8362d(0x194)),path_1=require(a181_0xd8362d(0x150)),xml_v2_1=require(a181_0xd8362d(0x171)),child_types_map_1=__importDefault(require('./data/child-types-map')),constants_1=require(a181_0xd8362d(0x152)),crc32_1=require(a181_0xd8362d(0x191)),folder_types_1=__importDefault(require(a181_0xd8362d(0x172))),settings_types_list_1=__importDefault(require(a181_0xd8362d(0x164))),base_parser_1=require(a181_0xd8362d(0x188)),CHILD_XML_KEYS=Object[a181_0xd8362d(0x17c)](child_types_map_1[a181_0xd8362d(0x192)]);class MDApiParserV2 extends base_parser_1[a181_0xd8362d(0x17a)]{constructor({sourceDir:_0xf5cd23,paths:_0x324978}){const _0x232029=a181_0xd8362d;super({'sourceDir':_0xf5cd23,'paths':_0x324978},MDApiParserV2['name']),this[_0x232029(0x15f)]='-meta.xml',this['META_EXPERIENCES_EXTENSION']=_0x232029(0x18a);}async[a181_0xd8362d(0x187)](_0x59b4af){const _0x2d786e=a181_0xd8362d;try{const _0x3d46a5=await xml_v2_1[_0x2d786e(0x184)][_0x2d786e(0x197)](Object[_0x2d786e(0x17c)](_0x59b4af['files'])[0x0][_0x2d786e(0x16f)]('utf-8')),_0x4d44c9=CHILD_XML_KEYS[_0x2d786e(0x18e)](_0x49fc15=>xml_v2_1[_0x2d786e(0x184)]['hasChildNodes'](_0x3d46a5,_0x49fc15))[_0x2d786e(0x163)]((_0x4548cd,_0x2c4ef7)=>[..._0x4548cd,...xml_v2_1[_0x2d786e(0x184)][_0x2d786e(0x186)](_0x3d46a5,_0x2c4ef7)],[]);return(0x0,utils_1['createChildComponentsFromParent'])(_0x59b4af,_0x3d46a5,_0x4d44c9);}catch(_0xf53cb5){throw new Error(_0x2d786e(0x15d)+_0x59b4af[_0x2d786e(0x177)]+'\x20['+_0x59b4af[_0x2d786e(0x15a)]+']');}}async['readBundledComponent'](_0x2af0e2){const _0x4ba8ff=a181_0xd8362d,_0x2a1602=(0x0,path_1[_0x4ba8ff(0x153)])(this[_0x4ba8ff(0x157)],_0x2af0e2),_0x1f0bb7=_0x2af0e2+(_0x2af0e2[_0x4ba8ff(0x176)]('experiences')?this[_0x4ba8ff(0x18d)]:this[_0x4ba8ff(0x15f)]),_0x27f0e5=await fs_internal_1['FS'][_0x4ba8ff(0x174)](_0x2a1602,!![]),_0x56c9a9=await fs_internal_1['FS']['readFile']((0x0,path_1[_0x4ba8ff(0x153)])(this[_0x4ba8ff(0x157)],_0x1f0bb7),!![])['catch'](()=>null),_0x505202={};for(const _0xe0835b of _0x27f0e5){_0x505202[(0x0,path_1['relative'])(this['sourceDir'],_0xe0835b)[_0x4ba8ff(0x196)](/\\/g,'/')]=await fs_internal_1['FS'][_0x4ba8ff(0x178)](_0xe0835b,!![]);}return _0x56c9a9&&(_0x505202[(0x0,path_1[_0x4ba8ff(0x181)])(this[_0x4ba8ff(0x157)],_0x1f0bb7)['replace'](/\\/g,'/')]=_0x56c9a9),_0x505202;}async[a181_0xd8362d(0x15c)](_0x2b78c7){const _0x21e392=a181_0xd8362d,_0x1b9ac5=_0x2b78c7+this[_0x21e392(0x15f)];if(constants_1[_0x21e392(0x18f)][_0x21e392(0x15b)](_0x2b78c7))return this[_0x21e392(0x155)](_0x2b78c7);if(await fs_internal_1['FS'][_0x21e392(0x18c)]((0x0,path_1['join'])(this[_0x21e392(0x157)],_0x1b9ac5))){const _0xe98424=await fs_internal_1['FS'][_0x21e392(0x178)]((0x0,path_1['join'])(this[_0x21e392(0x157)],_0x1b9ac5),!![]),_0x4c5045=await(0x0,utils_1[_0x21e392(0x16d)])({'files':{[_0x1b9ac5]:_0xe98424}})[_0x21e392(0x169)](()=>null);if(_0x4c5045&&folder_types_1[_0x21e392(0x192)][_0x21e392(0x195)](_0x4c5045))return{[_0x1b9ac5]:_0xe98424};return{[_0x1b9ac5]:_0xe98424,[_0x2b78c7]:await fs_internal_1['FS'][_0x21e392(0x178)]((0x0,path_1['join'])(this[_0x21e392(0x157)],_0x2b78c7),!![])};}return{[_0x2b78c7]:await fs_internal_1['FS'][_0x21e392(0x178)]((0x0,path_1[_0x21e392(0x153)])(this['sourceDir'],_0x2b78c7),!![])};}[a181_0xd8362d(0x18b)](){const _0x81dd21=a181_0xd8362d;this[_0x81dd21(0x161)]=this[_0x81dd21(0x161)]['map'](_0x52399d=>constants_1['BUNDLED_FOLDERS_REGEXP'][_0x81dd21(0x15b)](_0x52399d)?_0x52399d['split']('/')['slice'](0x0,0x2)[_0x81dd21(0x153)]('/'):_0x52399d),this['paths']=[...new Set(this[_0x81dd21(0x161)])];}async['execute'](){const _0x9445e4=a181_0xd8362d,_0x96a3fb=[];this[_0x9445e4(0x18b)]();for(const _0x2c1f5c of this[_0x9445e4(0x161)]){if(_0x2c1f5c[_0x9445e4(0x15e)](_0x9445e4(0x160)))continue;const _0x517994={};try{_0x517994[_0x9445e4(0x159)]=await this['readComponent'](_0x2c1f5c),_0x517994['filePath']=constants_1[_0x9445e4(0x18f)][_0x9445e4(0x15b)](_0x2c1f5c)?_0x2c1f5c:(0x0,utils_1['extractFileNameFromFiles'])({'files':_0x517994[_0x9445e4(0x159)]}),_0x2c1f5c[_0x9445e4(0x176)](_0x9445e4(0x16a))?_0x517994[_0x9445e4(0x15a)]='WaveTemplateBundle':_0x517994[_0x9445e4(0x15a)]=await(0x0,utils_1[_0x9445e4(0x16d)])({'files':_0x517994[_0x9445e4(0x159)]});}catch(_0x48280d){this[_0x9445e4(0x17b)][_0x9445e4(0x156)]('Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20',_0x2c1f5c,_0x48280d);continue;}_0x517994[_0x9445e4(0x177)]=(0x0,utils_1[_0x9445e4(0x162)])(_0x2c1f5c),_0x517994[_0x9445e4(0x180)]=(0x0,crc32_1[_0x9445e4(0x168)])(_0x517994);if((0x0,utils_1[_0x9445e4(0x179)])(_0x517994)){const _0x531f0d=await this['readChildComponents'](_0x517994);_0x96a3fb[_0x9445e4(0x17d)](..._0x531f0d);}if(_0x517994[_0x9445e4(0x15a)]===_0x9445e4(0x167))continue;settings_types_list_1[_0x9445e4(0x192)]['includes'](_0x517994[_0x9445e4(0x15a)])&&(_0x517994[_0x9445e4(0x15a)]='Settings'),_0x96a3fb[_0x9445e4(0x17d)](_0x517994);}return _0x96a3fb;}}function a181_0x5b5b(){const _0x1d88e1=['startsWith','name','readFile','isParentComponent','BaseParser','logger','values','push','defineProperty','8216RNqlJt','crc','relative','7sTTpYt','../internal/fs.internal','XmlV2','819QVBLNX','getChildsByName','readChildComponents','./base.parser','7463796PBtNGs','.site-meta.xml','foldBundledComponentsPaths','exists','META_EXPERIENCES_EXTENSION','filter','BUNDLED_FOLDERS_REGEXP','4963281maJsdm','./utils/crc32','default','9867tYgTpu','./utils','includes','replace','parse','path','5WZmziv','../../../constants','join','11750oLFadB','readBundledComponent','error','sourceDir','__esModule','files','type','test','readComponent','Cannot\x20parse\x20children\x20in\x20','endsWith','META_EXTENSION','package.xml','paths','extractFilenameFromPath','reduce','./data/settings-types-list','(((.+)+)+)+$','1203858koHDfe','CustomLabels','calculateCRC32','catch','waveTemplates','search','constructor','extractComponentTypeFromFiles','10409cnXHip','toString','MDApiParserV2','./utils/xml-v2','./data/folder-types','__importDefault','readDir','4090276NLMryK'];a181_0x5b5b=function(){return _0x1d88e1;};return a181_0x5b5b();}function a181_0x5d7c(_0x5ebbc5,_0x5f1d37){const _0x2f2756=a181_0x5b5b();return a181_0x5d7c=function(_0x3e88f3,_0x1d2b53){_0x3e88f3=_0x3e88f3-0x150;let _0x5b5bae=_0x2f2756[_0x3e88f3];return _0x5b5bae;},a181_0x5d7c(_0x5ebbc5,_0x5f1d37);}exports[a181_0xd8362d(0x170)]=MDApiParserV2;