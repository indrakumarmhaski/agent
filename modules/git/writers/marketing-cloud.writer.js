const a302_0x46e942=a302_0x1ce3;function a302_0x3735(){const _0xc79085=['234781iYaUwO','path','__esModule','body','splice','MarketingCloudWriter','sourceDir','Have\x20to\x20write\x20%d\x20files','components','2755656QrTJev','execute','defineProperty','MAX_WRITES_PER_TICK','writeFile','join','length','makeDir','38358POigjg','__importDefault','search','1111188tmBvuX','map','log','./base.writer','constructor','1047753iuGxqA','288096KYuiVH','name','toString','apply','1639620yanGwF','4vlDwcg','2648iHqKMw','(((.+)+)+)+$'];a302_0x3735=function(){return _0xc79085;};return a302_0x3735();}(function(_0x2ad8f0,_0x2a0384){const _0x13c21c=a302_0x1ce3,_0xc239c3=_0x2ad8f0();while(!![]){try{const _0x8e2970=-parseInt(_0x13c21c(0xa9))/0x1*(parseInt(_0x13c21c(0xa6))/0x2)+parseInt(_0x13c21c(0xc3))/0x3+-parseInt(_0x13c21c(0xb2))/0x4+-parseInt(_0x13c21c(0xa5))/0x5+parseInt(_0x13c21c(0xbd))/0x6+parseInt(_0x13c21c(0xc2))/0x7+parseInt(_0x13c21c(0xa7))/0x8*(parseInt(_0x13c21c(0xba))/0x9);if(_0x8e2970===_0x2a0384)break;else _0xc239c3['push'](_0xc239c3['shift']());}catch(_0x3b142e){_0xc239c3['push'](_0xc239c3['shift']());}}}(a302_0x3735,0x56b9f));const a302_0x38c390=(function(){let _0x20110e=!![];return function(_0x27d91c,_0x2ea6a5){const _0x16a39e=_0x20110e?function(){const _0x158da1=a302_0x1ce3;if(_0x2ea6a5){const _0x8a9e91=_0x2ea6a5[_0x158da1(0xc6)](_0x27d91c,arguments);return _0x2ea6a5=null,_0x8a9e91;}}:function(){};return _0x20110e=![],_0x16a39e;};}()),a302_0x37963a=a302_0x38c390(this,function(){const _0x5c629a=a302_0x1ce3;return a302_0x37963a[_0x5c629a(0xc5)]()[_0x5c629a(0xbc)](_0x5c629a(0xa8))[_0x5c629a(0xc5)]()[_0x5c629a(0xc1)](a302_0x37963a)[_0x5c629a(0xbc)]('(((.+)+)+)+$');});a302_0x37963a();function a302_0x1ce3(_0x1c7d31,_0x16bef7){const _0x5a24cc=a302_0x3735();return a302_0x1ce3=function(_0x37963a,_0x38c390){_0x37963a=_0x37963a-0xa5;let _0x373573=_0x5a24cc[_0x37963a];return _0x373573;},a302_0x1ce3(_0x1c7d31,_0x16bef7);}'use strict';var __importDefault=this&&this[a302_0x46e942(0xbb)]||function(_0x406fbf){const _0x378589=a302_0x46e942;return _0x406fbf&&_0x406fbf[_0x378589(0xab)]?_0x406fbf:{'default':_0x406fbf};};Object[a302_0x46e942(0xb4)](exports,a302_0x46e942(0xab),{'value':!![]}),exports[a302_0x46e942(0xae)]=void 0x0;const path_1=__importDefault(require(a302_0x46e942(0xaa))),base_writer_1=require(a302_0x46e942(0xc0)),fs_internal_1=require('../internal/fs.internal');class MarketingCloudWriter extends base_writer_1['BaseWriter']{constructor({components:_0xa8240d,sourceDir:_0x464ea9}){const _0x58e231=a302_0x46e942;super({'components':_0xa8240d,'sourceDir':_0x464ea9},MarketingCloudWriter[_0x58e231(0xc4)]),this[_0x58e231(0xb5)]=0x64;}async[a302_0x46e942(0xb3)](){const _0x4f8e80=a302_0x46e942;!await fs_internal_1['FS']['exists'](this[_0x4f8e80(0xaf)])&&await fs_internal_1['FS'][_0x4f8e80(0xb9)](this[_0x4f8e80(0xaf)]);this['logger'][_0x4f8e80(0xbf)](_0x4f8e80(0xb0),this[_0x4f8e80(0xb1)][_0x4f8e80(0xb8)]);while(this[_0x4f8e80(0xb1)]['length']){const _0x1a621d=this['components'][_0x4f8e80(0xad)](0x0,this[_0x4f8e80(0xb5)]);for(const _0x579093 of _0x1a621d){const _0x4fe752=await this['readZip'](_0x579093[_0x4f8e80(0xac)],!![]),_0x2eb151=_0x4fe752[_0x4f8e80(0xbe)](async({filename:_0x40dbd6,body:_0x4d7eb2})=>{const _0x1090ce=_0x4f8e80;return fs_internal_1['FS'][_0x1090ce(0xb6)](path_1['default'][_0x1090ce(0xb7)](this['sourceDir'],_0x40dbd6),_0x4d7eb2);});await Promise['all'](_0x2eb151);}}}}exports['MarketingCloudWriter']=MarketingCloudWriter;