const a338_0x565c2a=a338_0x523b;(function(_0x16d69f,_0x113180){const _0x1b64a9=a338_0x523b,_0x1a750a=_0x16d69f();while(!![]){try{const _0x24e773=parseInt(_0x1b64a9(0xd1))/0x1+parseInt(_0x1b64a9(0xdd))/0x2*(-parseInt(_0x1b64a9(0xce))/0x3)+parseInt(_0x1b64a9(0xe5))/0x4+-parseInt(_0x1b64a9(0xdc))/0x5+parseInt(_0x1b64a9(0xd5))/0x6*(parseInt(_0x1b64a9(0xe4))/0x7)+parseInt(_0x1b64a9(0xe7))/0x8+-parseInt(_0x1b64a9(0xde))/0x9;if(_0x24e773===_0x113180)break;else _0x1a750a['push'](_0x1a750a['shift']());}catch(_0x273123){_0x1a750a['push'](_0x1a750a['shift']());}}}(a338_0x1ff4,0x7e91e));const a338_0x4eaae3=(function(){let _0x1ffaa9=!![];return function(_0x456943,_0xcf3399){const _0x2e9516=_0x1ffaa9?function(){const _0x5871ae=a338_0x523b;if(_0xcf3399){const _0x3831bb=_0xcf3399[_0x5871ae(0xd8)](_0x456943,arguments);return _0xcf3399=null,_0x3831bb;}}:function(){};return _0x1ffaa9=![],_0x2e9516;};}()),a338_0x2ce900=a338_0x4eaae3(this,function(){const _0x150f4d=a338_0x523b;return a338_0x2ce900[_0x150f4d(0xe6)]()[_0x150f4d(0xd6)]('(((.+)+)+)+$')[_0x150f4d(0xe6)]()[_0x150f4d(0xe3)](a338_0x2ce900)[_0x150f4d(0xd6)]('(((.+)+)+)+$');});a338_0x2ce900();'use strict';Object['defineProperty'](exports,a338_0x565c2a(0xd2),{'value':!![]}),exports[a338_0x565c2a(0xe1)]=void 0x0;const utils_1=require(a338_0x565c2a(0xd0)),flosum_constants_1=require('../constants/flosum.constants');function a338_0x523b(_0x385810,_0x33dc19){const _0x1598ce=a338_0x1ff4();return a338_0x523b=function(_0x2ce900,_0x4eaae3){_0x2ce900=_0x2ce900-0xcb;let _0x1ff463=_0x1598ce[_0x2ce900];return _0x1ff463;},a338_0x523b(_0x385810,_0x33dc19);}function a338_0x1ff4(){const _0x45ff87=['5973606UxQatQ','get','ENDPOINT_QUERY','SalesforceService','_connection','constructor','7iIqCGc','3333496WMKysw','toString','1304352SEwSrb','FlosumConstants','chunkArray','map','15GYzWjK','ENDPOINT_INSERT_MULTIPLE_RECORDS','../../shared/utils','109048yBDnGb','__esModule','push','records','5013270ONgbmb','search','insertMultipleRecords','apply','done','data','retrieveRecords','2831010qgVGDZ','77058lPyzTJ'];a338_0x1ff4=function(){return _0x45ff87;};return a338_0x1ff4();}class SalesforceService{constructor({connection:_0x659b73}){const _0x3fdd9f=a338_0x565c2a;this[_0x3fdd9f(0xe2)]=_0x659b73;}async[a338_0x565c2a(0xd7)](_0xa11d95,_0x3628f1){const _0x3cc298=a338_0x565c2a,_0x47cdba=[],_0x5328ec=_0x3628f1[_0x3cc298(0xcd)](_0x26935f=>({'attributes':{'type':_0xa11d95},..._0x26935f})),_0x4871fd=(0x0,utils_1[_0x3cc298(0xcc)])(_0x5328ec,SalesforceService['INSERT_RECORDS_LIMIT']);for(const _0x21b728 of _0x4871fd){const {data:_0x3db1c7}=await this['_connection']['post'](flosum_constants_1[_0x3cc298(0xcb)][_0x3cc298(0xcf)],{'allOrNone':!![],'records':_0x21b728});_0x47cdba[_0x3cc298(0xd3)](..._0x3db1c7);}return _0x47cdba;}async[a338_0x565c2a(0xdb)](_0x4bafd3){const _0x305248=a338_0x565c2a,_0x9723fa=[];let _0x8ef3f6,_0x5de34e;do{let _0xdeef10;!_0x8ef3f6?_0xdeef10=await this[_0x305248(0xe2)][_0x305248(0xdf)](flosum_constants_1[_0x305248(0xcb)][_0x305248(0xe0)],{'params':{'q':_0x4bafd3}}):_0xdeef10=await this['_connection'][_0x305248(0xdf)](_0x8ef3f6),_0x9723fa[_0x305248(0xd3)](..._0xdeef10[_0x305248(0xda)][_0x305248(0xd4)]),_0x8ef3f6=_0xdeef10['data']['nextRecordsUrl'],_0x5de34e=_0xdeef10[_0x305248(0xda)][_0x305248(0xd9)];}while(!_0x5de34e);return _0x9723fa;}}exports['SalesforceService']=SalesforceService,SalesforceService['INSERT_RECORDS_LIMIT']=0xc8;