const a169_0x470e2f=a169_0x2910;function a169_0x15c4(){const _0x51b37d=['8375424DBUklp','toString','RecordTypes','isVlocityComponent','constructor','MarketingCloudParser','search','(((.+)+)+)+$','MARKETING_CLOUD','__esModule','./commerce-cloud.parser','DEFAULT','create','WRONG_RECORD_TYPE_ERROR_MESSAGE','7036169asklmB','CommerceCloudParser','19670445NMVlix','MDApiParserV2','defineProperty','5603832fTYcDV','8CTzoBf','./marketing-cloud.parser','347sqANEt','apply','../devops/constants/constants','VlocityParser','10990hwQlTX','FactoryParser','4763730XLZKLd','4476295RiKEgR'];a169_0x15c4=function(){return _0x51b37d;};return a169_0x15c4();}(function(_0x23f8f4,_0x5bbbe8){const _0x59f075=a169_0x2910,_0x55ece7=_0x23f8f4();while(!![]){try{const _0x327e46=parseInt(_0x59f075(0x1d4))/0x1*(-parseInt(_0x59f075(0x1d8))/0x2)+parseInt(_0x59f075(0x1da))/0x3+-parseInt(_0x59f075(0x1d1))/0x4+parseInt(_0x59f075(0x1db))/0x5+-parseInt(_0x59f075(0x1dc))/0x6+parseInt(_0x59f075(0x1ea))/0x7*(parseInt(_0x59f075(0x1d2))/0x8)+parseInt(_0x59f075(0x1ec))/0x9;if(_0x327e46===_0x5bbbe8)break;else _0x55ece7['push'](_0x55ece7['shift']());}catch(_0x1b3eed){_0x55ece7['push'](_0x55ece7['shift']());}}}(a169_0x15c4,0xece4a));function a169_0x2910(_0x42f44e,_0x5cd6d1){const _0x3ddfd9=a169_0x15c4();return a169_0x2910=function(_0x43df9d,_0x26cbfc){_0x43df9d=_0x43df9d-0x1d0;let _0x15c466=_0x3ddfd9[_0x43df9d];return _0x15c466;},a169_0x2910(_0x42f44e,_0x5cd6d1);}const a169_0x26cbfc=(function(){let _0x30b574=!![];return function(_0x30af2f,_0x5d9f81){const _0x1ed1b6=_0x30b574?function(){const _0x401efa=a169_0x2910;if(_0x5d9f81){const _0x2c0fb5=_0x5d9f81[_0x401efa(0x1d5)](_0x30af2f,arguments);return _0x5d9f81=null,_0x2c0fb5;}}:function(){};return _0x30b574=![],_0x1ed1b6;};}()),a169_0x43df9d=a169_0x26cbfc(this,function(){const _0x27a0e2=a169_0x2910;return a169_0x43df9d[_0x27a0e2(0x1dd)]()[_0x27a0e2(0x1e2)]('(((.+)+)+)+$')[_0x27a0e2(0x1dd)]()[_0x27a0e2(0x1e0)](a169_0x43df9d)['search'](_0x27a0e2(0x1e3));});a169_0x43df9d();'use strict';Object[a169_0x470e2f(0x1d0)](exports,a169_0x470e2f(0x1e5),{'value':!![]}),exports[a169_0x470e2f(0x1d9)]=void 0x0;const mdapi_parser_v2_1=require('./mdapi-parser-v2'),vlocity_parser_1=require('./vlocity-parser'),marketing_cloud_parser_1=require(a169_0x470e2f(0x1d3)),vlocity_1=require('./utils/vlocity'),constants_1=require(a169_0x470e2f(0x1d6)),messages_1=require('../devops/errors/messages'),commerce_cloud_parser_1=require(a169_0x470e2f(0x1e6));class FactoryParser{static[a169_0x470e2f(0x1e8)]({recordType:_0x515a26,sourceDir:_0x315a64,paths:_0x4623c0}){const _0x22fb55=a169_0x470e2f;switch(_0x515a26){case constants_1[_0x22fb55(0x1de)]['COMMERCE_CLOUD']:{return new commerce_cloud_parser_1[(_0x22fb55(0x1eb))]({'sourceDir':_0x315a64,'paths':_0x4623c0});}case constants_1[_0x22fb55(0x1de)][_0x22fb55(0x1e4)]:{return new marketing_cloud_parser_1[(_0x22fb55(0x1e1))]({'sourceDir':_0x315a64,'paths':_0x4623c0});}case constants_1[_0x22fb55(0x1de)][_0x22fb55(0x1e7)]:{if((0x0,vlocity_1[_0x22fb55(0x1df)])(_0x4623c0[0x0]))return new vlocity_parser_1[(_0x22fb55(0x1d7))]({'sourceDir':_0x315a64,'paths':_0x4623c0});return new mdapi_parser_v2_1[(_0x22fb55(0x1ed))]({'sourceDir':_0x315a64,'paths':_0x4623c0});}default:{throw new Error(messages_1[_0x22fb55(0x1e9)]+_0x515a26);}}}}exports[a169_0x470e2f(0x1d9)]=FactoryParser;