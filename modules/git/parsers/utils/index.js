const a152_0xc65a66=a152_0x1be6;(function(_0x36e1af,_0x106e66){const _0x15dca1=a152_0x1be6,_0x4ca6dc=_0x36e1af();while(!![]){try{const _0x1791a8=parseInt(_0x15dca1(0x20d))/0x1+parseInt(_0x15dca1(0x217))/0x2*(-parseInt(_0x15dca1(0x201))/0x3)+parseInt(_0x15dca1(0x1e0))/0x4*(parseInt(_0x15dca1(0x21f))/0x5)+parseInt(_0x15dca1(0x1df))/0x6*(-parseInt(_0x15dca1(0x1e7))/0x7)+-parseInt(_0x15dca1(0x1e1))/0x8+parseInt(_0x15dca1(0x222))/0x9+-parseInt(_0x15dca1(0x1da))/0xa*(parseInt(_0x15dca1(0x210))/0xb);if(_0x1791a8===_0x106e66)break;else _0x4ca6dc['push'](_0x4ca6dc['shift']());}catch(_0x553e2b){_0x4ca6dc['push'](_0x4ca6dc['shift']());}}}(a152_0x294d,0x88d44));const a152_0x169337=(function(){let _0x21674d=!![];return function(_0x24c96c,_0x2e412d){const _0x3a0028=_0x21674d?function(){const _0x370ce7=a152_0x1be6;if(_0x2e412d){const _0x1909fe=_0x2e412d[_0x370ce7(0x1fe)](_0x24c96c,arguments);return _0x2e412d=null,_0x1909fe;}}:function(){};return _0x21674d=![],_0x3a0028;};}()),a152_0x3746c0=a152_0x169337(this,function(){const _0x374735=a152_0x1be6;return a152_0x3746c0['toString']()['search']('(((.+)+)+)+$')[_0x374735(0x1fc)]()[_0x374735(0x1f7)](a152_0x3746c0)[_0x374735(0x204)](_0x374735(0x1eb));});a152_0x3746c0();'use strict';function a152_0x1be6(_0x350a95,_0x10bd28){const _0x46a580=a152_0x294d();return a152_0x1be6=function(_0x3746c0,_0x169337){_0x3746c0=_0x3746c0-0x1d5;let _0x294dc9=_0x46a580[_0x3746c0];return _0x294dc9;},a152_0x1be6(_0x350a95,_0x10bd28);}var __importDefault=this&&this[a152_0xc65a66(0x1e5)]||function(_0x13970b){return _0x13970b&&_0x13970b['__esModule']?_0x13970b:{'default':_0x13970b};};Object[a152_0xc65a66(0x200)](exports,a152_0xc65a66(0x205),{'value':!![]}),exports['readFilesByFilename']=exports[a152_0xc65a66(0x1fa)]=exports[a152_0xc65a66(0x202)]=exports[a152_0xc65a66(0x203)]=exports['calculateCRC32']=exports[a152_0xc65a66(0x1f9)]=exports[a152_0xc65a66(0x1f2)]=exports['extractFilenameFromPath']=exports['getChildComponentTypeByChildNodeName']=exports['filterParserPaths']=exports[a152_0xc65a66(0x1ee)]=void 0x0;const constants_1=require(a152_0xc65a66(0x221)),path_1=__importDefault(require('path')),child_types_map_1=__importDefault(require(a152_0xc65a66(0x206))),parent_xml_types_1=__importDefault(require(a152_0xc65a66(0x212))),xml_v2_1=require(a152_0xc65a66(0x1f5)),crc_32_1=__importDefault(require(a152_0xc65a66(0x1db))),parent_xml_types_map_1=__importDefault(require(a152_0xc65a66(0x209))),fs_internal_1=require(a152_0xc65a66(0x1ec));function convertToCleanPaths(_0x3c4156){const _0x34af44=a152_0xc65a66,_0x480a4=_0x3c4156[_0x34af44(0x1e3)](_0x341df2=>_0x341df2[_0x34af44(0x213)](constants_1[_0x34af44(0x1f8)])),_0x434ad4=_0x480a4['map'](_0x1eae0e=>_0x1eae0e[_0x34af44(0x1e8)](new RegExp(constants_1[_0x34af44(0x1f8)]+'$'),'')),_0x201fa6=_0x3c4156[_0x34af44(0x1e3)](_0x102352=>!_0x480a4[_0x34af44(0x1d6)](_0x102352));return[...new Set([..._0x201fa6,..._0x434ad4])];}exports[a152_0xc65a66(0x1ee)]=convertToCleanPaths;function filterParserPaths(_0x5afb59){const _0x4f6d35=a152_0xc65a66,_0x2f8fdb=[...new Set(_0x5afb59[_0x4f6d35(0x1e3)](_0x175072=>!_0x175072[_0x4f6d35(0x213)](constants_1['META_XML_EXTENSION'])))],_0x5522ae=_0x5afb59['filter'](_0x1f0421=>_0x1f0421[_0x4f6d35(0x213)](constants_1[_0x4f6d35(0x1f8)]))[_0x4f6d35(0x1e3)](_0x333113=>!_0x2f8fdb[_0x4f6d35(0x1d6)](_0x333113[_0x4f6d35(0x1e8)](constants_1[_0x4f6d35(0x1f8)],'')));return[..._0x5522ae,..._0x2f8fdb];}exports[a152_0xc65a66(0x1de)]=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x432d95){const _0x2acc83=a152_0xc65a66,_0xc50b5f=Object[_0x2acc83(0x1f4)](child_types_map_1[_0x2acc83(0x1dd)])[_0x2acc83(0x1e2)](([_0x1f59a5,_0x36fff6])=>_0x36fff6===_0x432d95);if(!_0xc50b5f)throw new Error('Unknown\x20child\x20type\x20for\x20'+_0x432d95);return _0xc50b5f[0x0];}exports[a152_0xc65a66(0x21b)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x2677c5){const _0x5bd572=a152_0xc65a66,_0x322c4b=_0x2677c5[_0x5bd572(0x1ef)](path_1[_0x5bd572(0x1dd)]['sep']),_0x473f0a=path_1[_0x5bd572(0x1dd)][_0x5bd572(0x1d8)](_0x2677c5[_0x5bd572(0x1e8)](constants_1[_0x5bd572(0x1f8)],''),path_1[_0x5bd572(0x1dd)][_0x5bd572(0x20a)](_0x2677c5));if(_0x322c4b[_0x5bd572(0x1d5)]>0x2)return _0x322c4b[_0x322c4b[_0x5bd572(0x1d5)]-0x2]+'/'+_0x473f0a;return _0x473f0a;}exports[a152_0xc65a66(0x20c)]=extractFilenameFromPath;function isParentComponent({type:_0x5c9094}){const _0x19c9b6=a152_0xc65a66;return parent_xml_types_1[_0x19c9b6(0x1dd)][_0x19c9b6(0x1d6)](_0x5c9094);}exports['isParentComponent']=isParentComponent;function a152_0x294d(){const _0x7986d2=['relative','calculateCRC32','59846WSlgOn','some','from','indexOf','getChildComponentTypeByChildNodeName','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','addChildNode','readDir','15yTROWj','nodeName','../../../../constants','8604756thTmHz','length','includes','CustomLabels','basename','fullName','10UhrOWD','crc-32','keys','default','filterParserPaths','30864ExXGLW','335948EhsCyp','7804632dwyofv','find','filter','dirname','__importDefault','round','49EWXQTz','replace','name','join','(((.+)+)+)+$','../../internal/fs.internal','XmlV2','convertToCleanPaths','split','dir',']\x20index\x20in\x20(','isParentComponent','type','entries','./xml-v2','sort','constructor','META_XML_EXTENSION','isParentComponentFile','extractComponentTypeFromFiles','str','toString','files','apply','utf-8','defineProperty','21fzSERS','extractFileNameFromFiles','createChildComponentsFromParent','search','__esModule','../data/child-types-map','convertToString','readFilesByFilename','../data/parent-xml-types-map','extname','createEmptyRootNodeFrom','extractFilenameFromPath','737797zZcAZA','[./-]{1}','parse','1807762iOOUme','nodeData','../data/parent-xml-types','endsWith','push'];a152_0x294d=function(){return _0x7986d2;};return a152_0x294d();}function isParentComponentFile(_0x26ff5d){const _0x1bdb7d=a152_0xc65a66,_0x32a877=path_1[_0x1bdb7d(0x1dd)][_0x1bdb7d(0x20f)](_0x26ff5d);return Object['values'](parent_xml_types_map_1[_0x1bdb7d(0x1dd)])[_0x1bdb7d(0x218)](_0x59320f=>_0x32a877[_0x1bdb7d(0x1f0)][_0x1bdb7d(0x213)](_0x59320f));}exports['isParentComponentFile']=isParentComponentFile;function calculateCRC32(_0x52f03f){const _0x196015=a152_0xc65a66,_0x116ebb=Object[_0x196015(0x1dc)](_0x52f03f[_0x196015(0x1fd)])[_0x196015(0x1f6)]();switch(_0x116ebb['length']){case 0x1:{const [_0x4d744b]=_0x116ebb,_0x5f3196=_0x52f03f[_0x196015(0x1fd)][_0x4d744b];return crc_32_1['default'][_0x196015(0x1fb)](_0x5f3196['toString'](_0x196015(0x1ff)),0x20)[_0x196015(0x1fc)]();}case 0x2:{const [_0x5554dc,_0x378ff9]=_0x116ebb,_0x573418=_0x52f03f[_0x196015(0x1fd)][_0x5554dc],_0x5201be=_0x52f03f[_0x196015(0x1fd)][_0x378ff9];return crc_32_1[_0x196015(0x1dd)][_0x196015(0x1fb)](_0x573418[_0x196015(0x1fc)](_0x196015(0x1ff)),0x20)[_0x196015(0x1fc)]()+'\x20'+crc_32_1[_0x196015(0x1dd)][_0x196015(0x1fb)](_0x5201be[_0x196015(0x1fc)](_0x196015(0x1ff)),0x20)[_0x196015(0x1fc)]();}default:{let _0x23c3a9=0x0;if(_0x116ebb[_0x196015(0x1d5)]>0x0)_0x23c3a9=crc_32_1[_0x196015(0x1dd)]['str'](_0x52f03f[_0x196015(0x1fd)][_0x116ebb[0x0]][_0x196015(0x1fc)](_0x196015(0x1ff)),0x20);for(let _0x245f66=0x1;_0x245f66<_0x116ebb[_0x196015(0x1d5)];_0x245f66++){const _0x5e01ab=crc_32_1[_0x196015(0x1dd)][_0x196015(0x1fb)](_0x52f03f[_0x196015(0x1fd)][_0x116ebb[_0x245f66]][_0x196015(0x1fc)](_0x196015(0x1ff)),0x20);_0x23c3a9=Math[_0x196015(0x1e6)]((_0x5e01ab+_0x23c3a9)/0x2);}return _0x23c3a9[_0x196015(0x1fc)]();}}}exports[a152_0xc65a66(0x216)]=calculateCRC32;function createChildComponentsFromParent(_0x33fcd5,_0x5a452f,_0x574775){const _0x50f47e=a152_0xc65a66,_0x4ae8f7=[];for(const _0x4e236c of _0x574775){const _0x35f3f3=xml_v2_1[_0x50f47e(0x1ed)][_0x50f47e(0x21d)](xml_v2_1[_0x50f47e(0x1ed)][_0x50f47e(0x20b)](_0x5a452f),_0x4e236c[_0x50f47e(0x220)],_0x4e236c[_0x50f47e(0x211)]),_0x1340d9={};_0x1340d9['filePath']=_0x33fcd5['filePath'],_0x1340d9[_0x50f47e(0x1f3)]=getChildComponentTypeByChildNodeName(_0x4e236c[_0x50f47e(0x220)]),_0x33fcd5[_0x50f47e(0x1f3)]===_0x50f47e(0x1d7)?_0x1340d9['name']=_0x4e236c[_0x50f47e(0x211)][_0x50f47e(0x1d9)]:_0x1340d9['name']=_0x33fcd5[_0x50f47e(0x1e9)]+'.'+_0x4e236c['nodeData']['fullName'],_0x1340d9['files']={[Object[_0x50f47e(0x1dc)](_0x33fcd5[_0x50f47e(0x1fd)])[0x0]]:Buffer[_0x50f47e(0x219)](xml_v2_1['XmlV2'][_0x50f47e(0x207)](_0x35f3f3,![]))},_0x1340d9['crc']=calculateCRC32(_0x1340d9),_0x4ae8f7[_0x50f47e(0x214)](_0x1340d9);}return _0x4ae8f7;}exports[a152_0xc65a66(0x203)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x436df8}){const _0x3f6be0=a152_0xc65a66;var _0x258521;const _0x4584ba=Object[_0x3f6be0(0x1dc)](_0x436df8);return((_0x258521=_0x4584ba[0x0])===null||_0x258521===void 0x0?void 0x0:_0x258521[_0x3f6be0(0x1e8)](constants_1[_0x3f6be0(0x1f8)],''))||'';}exports[a152_0xc65a66(0x202)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x5f4b5c}){const _0x445b75=a152_0xc65a66,_0x2ccb4c=Object[_0x445b75(0x1dc)](_0x5f4b5c),_0x48a1da=_0x2ccb4c[_0x445b75(0x1e2)](_0x5c5dc5=>_0x5c5dc5['endsWith'](constants_1[_0x445b75(0x1f8)]))||_0x2ccb4c[0x0];try{const _0x4a5350=await xml_v2_1['XmlV2'][_0x445b75(0x20f)](_0x5f4b5c[_0x48a1da][_0x445b75(0x1fc)](_0x445b75(0x1ff))),_0xe37031=Object[_0x445b75(0x1dc)](_0x4a5350)[0x0];if(!_0xe37031)throw new Error();return _0xe37031;}catch(_0x2bdfbc){throw new Error(_0x445b75(0x21c)+_0x2ccb4c[_0x445b75(0x21a)](_0x48a1da)+_0x445b75(0x1f1)+_0x2ccb4c[_0x445b75(0x1ea)](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;async function readFilesByFilename(_0x4ff2a5,_0x404e7f){const _0x394a45=a152_0xc65a66,_0x5ab291=path_1[_0x394a45(0x1dd)][_0x394a45(0x1e4)](_0x4ff2a5),_0x49774f=path_1[_0x394a45(0x1dd)][_0x394a45(0x1ea)](_0x404e7f,_0x5ab291),_0x1d93a8=await fs_internal_1['FS'][_0x394a45(0x21e)](_0x49774f,!![]),_0x16ba4a=_0x1d93a8['map'](_0x475684=>path_1['default'][_0x394a45(0x215)](_0x404e7f,_0x475684)),_0x3705d4=new RegExp('^'+_0x4ff2a5+_0x394a45(0x20e));return _0x16ba4a['filter'](_0x10a486=>_0x10a486['match'](_0x3705d4));}exports[a152_0xc65a66(0x208)]=readFilesByFilename;