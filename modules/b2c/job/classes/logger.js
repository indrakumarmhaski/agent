const a60_0x29fb09=a60_0x4899;function a60_0x20f1(){const _0x317dd0=['default','appendToLog','7Oyzuhg','error','initMessage','path','constructor','../../../../constants/job','1bTfWnb','37024kvvElC','toString','29460zfDUOm','fs/promises','3900826uBdWRI','dataPath','logPath','1107MTtIIc','header','search','4359792JSTOVl','systemLogger','__importDefault','warning','defineProperty','8278179bZEyKm','44wQKNUg','getTime','6946860JNYjNa','log','388779bqzRVj','48MlRZGQ','stringify','__esModule','catch','4191vziJOp','(((.+)+)+)+$','../../constants'];a60_0x20f1=function(){return _0x317dd0;};return a60_0x20f1();}(function(_0xd02c4f,_0x1cedf1){const _0x25c696=a60_0x4899,_0x52d19d=_0xd02c4f();while(!![]){try{const _0x3b1081=parseInt(_0x25c696(0x99))/0x1*(-parseInt(_0x25c696(0x9e))/0x2)+-parseInt(_0x25c696(0xae))/0x3*(-parseInt(_0x25c696(0xaa))/0x4)+parseInt(_0x25c696(0xac))/0x5+parseInt(_0x25c696(0xa4))/0x6*(-parseInt(_0x25c696(0xb8))/0x7)+-parseInt(_0x25c696(0x9a))/0x8*(parseInt(_0x25c696(0xa1))/0x9)+-parseInt(_0x25c696(0x9c))/0xa*(parseInt(_0x25c696(0xb3))/0xb)+parseInt(_0x25c696(0xaf))/0xc*(parseInt(_0x25c696(0xa9))/0xd);if(_0x3b1081===_0x1cedf1)break;else _0x52d19d['push'](_0x52d19d['shift']());}catch(_0x2dd307){_0x52d19d['push'](_0x52d19d['shift']());}}}(a60_0x20f1,0xf2820));const a60_0x3ded97=(function(){let _0x171527=!![];return function(_0x372182,_0x576b75){const _0x24d8ea=_0x171527?function(){if(_0x576b75){const _0x556f96=_0x576b75['apply'](_0x372182,arguments);return _0x576b75=null,_0x556f96;}}:function(){};return _0x171527=![],_0x24d8ea;};}()),a60_0x33dc11=a60_0x3ded97(this,function(){const _0x45fba5=a60_0x4899;return a60_0x33dc11[_0x45fba5(0x9b)]()[_0x45fba5(0xa3)](_0x45fba5(0xb4))[_0x45fba5(0x9b)]()[_0x45fba5(0xbc)](a60_0x33dc11)[_0x45fba5(0xa3)](_0x45fba5(0xb4));});a60_0x33dc11();'use strict';var __importDefault=this&&this[a60_0x29fb09(0xa6)]||function(_0x58097c){const _0x5e0f35=a60_0x29fb09;return _0x58097c&&_0x58097c[_0x5e0f35(0xb1)]?_0x58097c:{'default':_0x58097c};};Object[a60_0x29fb09(0xa8)](exports,a60_0x29fb09(0xb1),{'value':!![]});function a60_0x4899(_0x20eae6,_0x2d675f){const _0x2f1a71=a60_0x20f1();return a60_0x4899=function(_0x33dc11,_0x3ded97){_0x33dc11=_0x33dc11-0x98;let _0x20f115=_0x2f1a71[_0x33dc11];return _0x20f115;},a60_0x4899(_0x20eae6,_0x2d675f);}const promises_1=require(a60_0x29fb09(0x9d)),job_1=require(a60_0x29fb09(0x98)),constants_1=require(a60_0x29fb09(0xb5)),path_1=require('../../../../configs/path'),path_2=__importDefault(require(a60_0x29fb09(0xbb))),csv_utils_1=__importDefault(require('../../../shared/utils/csv.utils'));class Logger{constructor(_0x39ee9f,_0x325a7f,_0x37e701){const _0x12af2d=a60_0x29fb09;this[_0x12af2d(0xa5)]=_0x325a7f,this[_0x12af2d(0xba)]=!![];if(_0x37e701){this[_0x12af2d(0xa0)]=_0x37e701;return;}this[_0x12af2d(0xa0)]=path_2[_0x12af2d(0xb6)]['join'](path_1[_0x12af2d(0x9f)],constants_1['B2C_FOLDER_NAME'],_0x39ee9f,job_1['JOB_LOG_DETAILS_FILENAME']);}async[a60_0x29fb09(0xb7)](_0xde2351){const _0x298e9a=a60_0x29fb09,_0x2cc64d={'header':![]};this[_0x298e9a(0xba)]&&(_0x2cc64d[_0x298e9a(0xa2)]=!![],this[_0x298e9a(0xba)]=![]);const _0x57f76c=await csv_utils_1[_0x298e9a(0xb6)][_0x298e9a(0xb0)]([_0xde2351],_0x2cc64d);await(0x0,promises_1['appendFile'])(this[_0x298e9a(0xa0)],_0x57f76c)[_0x298e9a(0xb2)](_0x3c369e=>this['systemLogger']['error'](_0x3c369e['message']));}async['log'](_0x312fd6){const _0x2b7e87=a60_0x29fb09;this[_0x2b7e87(0xa5)][_0x2b7e87(0xad)](_0x312fd6),await this[_0x2b7e87(0xb7)]({'date':new Date()[_0x2b7e87(0xab)](),'type':'INFO','message':_0x312fd6});}async[a60_0x29fb09(0xb9)](_0x1d9967){const _0x18dc57=a60_0x29fb09;this[_0x18dc57(0xa5)][_0x18dc57(0xb9)](_0x1d9967),await this[_0x18dc57(0xb7)]({'date':new Date()[_0x18dc57(0xab)](),'type':'ERROR','message':_0x1d9967});}async[a60_0x29fb09(0xa7)](_0x1834d4){const _0x4c47bf=a60_0x29fb09;this['systemLogger'][_0x4c47bf(0xad)](_0x1834d4),await this[_0x4c47bf(0xb7)]({'date':new Date()[_0x4c47bf(0xab)](),'type':'WARNING','message':_0x1834d4});}}exports[a60_0x29fb09(0xb6)]=Logger;