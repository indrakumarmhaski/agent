const a301_0x41ab11=a301_0x5ca9;(function(_0x5ef69f,_0x20c016){const _0x55912c=a301_0x5ca9,_0x8935ca=_0x5ef69f();while(!![]){try{const _0x574b92=parseInt(_0x55912c(0x1ea))/0x1+-parseInt(_0x55912c(0x1f4))/0x2*(parseInt(_0x55912c(0x1f1))/0x3)+-parseInt(_0x55912c(0x1eb))/0x4+parseInt(_0x55912c(0x1ef))/0x5*(parseInt(_0x55912c(0x1e5))/0x6)+parseInt(_0x55912c(0x1ed))/0x7*(parseInt(_0x55912c(0x1f6))/0x8)+-parseInt(_0x55912c(0x1e7))/0x9*(-parseInt(_0x55912c(0x1f0))/0xa)+-parseInt(_0x55912c(0x1f7))/0xb;if(_0x574b92===_0x20c016)break;else _0x8935ca['push'](_0x8935ca['shift']());}catch(_0x34146a){_0x8935ca['push'](_0x8935ca['shift']());}}}(a301_0x34a9,0xe65d0));const a301_0x218ca0=(function(){let _0x11bd4d=!![];return function(_0x25ec38,_0x1cf4f1){const _0x2c3a5e=_0x11bd4d?function(){if(_0x1cf4f1){const _0x48ab61=_0x1cf4f1['apply'](_0x25ec38,arguments);return _0x1cf4f1=null,_0x48ab61;}}:function(){};return _0x11bd4d=![],_0x2c3a5e;};}()),a301_0x1aae32=a301_0x218ca0(this,function(){const _0x742e4f=a301_0x5ca9;return a301_0x1aae32[_0x742e4f(0x1ec)]()[_0x742e4f(0x1f5)](_0x742e4f(0x1e1))[_0x742e4f(0x1ec)]()[_0x742e4f(0x1e3)](a301_0x1aae32)[_0x742e4f(0x1f5)](_0x742e4f(0x1e1));});a301_0x1aae32();'use strict';Object[a301_0x41ab11(0x1e8)](exports,a301_0x41ab11(0x1fb),{'value':!![]}),exports[a301_0x41ab11(0x1e9)]=void 0x0;const mdapi_writer_1=require(a301_0x41ab11(0x1f8)),marketing_cloud_writer_1=require(a301_0x41ab11(0x1f3)),constants_1=require(a301_0x41ab11(0x1e6)),messages_1=require('../devops/errors/messages'),commerce_cloud_writer_1=require(a301_0x41ab11(0x1fa));function a301_0x5ca9(_0x3c8c1e,_0x113b76){const _0x2aae62=a301_0x34a9();return a301_0x5ca9=function(_0x1aae32,_0x218ca0){_0x1aae32=_0x1aae32-0x1e1;let _0x34a965=_0x2aae62[_0x1aae32];return _0x34a965;},a301_0x5ca9(_0x3c8c1e,_0x113b76);}function a301_0x34a9(){const _0x252cee=['13300CmPZVk','1297749xJkGHi','COMMERCE_CLOUD','./marketing-cloud.writer','6jyjHuZ','search','24jKhVpk','17475326JkUSYO','./mdapi.writer','MarketingCloudWriter','./commerce-cloud.writer','__esModule','(((.+)+)+)+$','MARKETING_CLOUD','constructor','MDApiWriter','3618imMPgA','../devops/constants/constants','10575RSUtBx','defineProperty','FactoryWriter','1459052XzAPkW','5034952ijuGWq','toString','1775249sHafoI','RecordTypes','10830HTmIAt'];a301_0x34a9=function(){return _0x252cee;};return a301_0x34a9();}class FactoryWriter{static['create']({recordType:_0x48f0a0,components:_0x2f3c55,sourceDir:_0x5c84c8,skipChildErrors:_0x4db4a5}){const _0x57e772=a301_0x41ab11;switch(_0x48f0a0){case constants_1[_0x57e772(0x1ee)][_0x57e772(0x1f2)]:{return new commerce_cloud_writer_1['CommerceCloudWriter']({'components':_0x2f3c55,'sourceDir':_0x5c84c8});}case constants_1['RecordTypes'][_0x57e772(0x1e2)]:{return new marketing_cloud_writer_1[(_0x57e772(0x1f9))]({'components':_0x2f3c55,'sourceDir':_0x5c84c8});}case constants_1[_0x57e772(0x1ee)]['DEFAULT']:{return new mdapi_writer_1[(_0x57e772(0x1e4))]({'components':_0x2f3c55,'sourceDir':_0x5c84c8,'skipChildErrors':_0x4db4a5});}default:{throw new Error(messages_1['WRONG_RECORD_TYPE_ERROR_MESSAGE']+_0x48f0a0);}}}}exports['FactoryWriter']=FactoryWriter;