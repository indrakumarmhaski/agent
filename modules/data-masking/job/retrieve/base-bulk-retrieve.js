const a75_0x5c8433=a75_0x3eab;(function(_0x2cdfbe,_0xc5abfe){const _0xfdba7a=a75_0x3eab,_0xb5ee6a=_0x2cdfbe();while(!![]){try{const _0x1b5207=-parseInt(_0xfdba7a(0xc8))/0x1+parseInt(_0xfdba7a(0xd6))/0x2+-parseInt(_0xfdba7a(0xd1))/0x3+parseInt(_0xfdba7a(0xd4))/0x4+-parseInt(_0xfdba7a(0xc3))/0x5*(-parseInt(_0xfdba7a(0xa5))/0x6)+-parseInt(_0xfdba7a(0xe0))/0x7+parseInt(_0xfdba7a(0xe5))/0x8*(parseInt(_0xfdba7a(0x9c))/0x9);if(_0x1b5207===_0xc5abfe)break;else _0xb5ee6a['push'](_0xb5ee6a['shift']());}catch(_0x1b67bc){_0xb5ee6a['push'](_0xb5ee6a['shift']());}}}(a75_0x1746,0xa6f8a));const a75_0x5a2b65=(function(){let _0x4bd86e=!![];return function(_0x32c97c,_0x1d4868){const _0x1ccab6=_0x4bd86e?function(){if(_0x1d4868){const _0x1c59bf=_0x1d4868['apply'](_0x32c97c,arguments);return _0x1d4868=null,_0x1c59bf;}}:function(){};return _0x4bd86e=![],_0x1ccab6;};}()),a75_0x1301d0=a75_0x5a2b65(this,function(){const _0x3ac533=a75_0x3eab;return a75_0x1301d0[_0x3ac533(0xc7)]()[_0x3ac533(0xa9)](_0x3ac533(0xb1))[_0x3ac533(0xc7)]()[_0x3ac533(0xe2)](a75_0x1301d0)[_0x3ac533(0xa9)](_0x3ac533(0xb1));});a75_0x1301d0();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x562228){const _0x1fb533=a75_0x3eab;return _0x562228&&_0x562228[_0x1fb533(0xc4)]?_0x562228:{'default':_0x562228};};Object[a75_0x5c8433(0xcc)](exports,a75_0x5c8433(0xc4),{'value':!![]}),exports['BaseBulkRetrieve']=void 0x0;const base_retrieve_1=require(a75_0x5c8433(0xd9)),stream_1=require(a75_0x5c8433(0xb8)),path_1=__importDefault(require('path')),utils_1=require(a75_0x5c8433(0xb9)),promises_1=require('fs/promises'),fs_1=__importDefault(require('fs')),promises_2=require(a75_0x5c8433(0xa0)),crypto_1=require(a75_0x5c8433(0xb3)),csv_parse_1=require(a75_0x5c8433(0xbd)),salesforce_1=require(a75_0x5c8433(0xa7)),job_detail_1=require('../job-detail'),constants_1=require(a75_0x5c8433(0xd8));function a75_0x1746(){const _0x13968a=['randomUUID','createEncryptPipe','defineProperty','readEncryptionVector','readable','replace','CryptoUtils','322728YbZWqL','push','parse','3316240HCHIJg','datetime','1289692DNQfca','writeEncryptedTempFile','../../constants','./base-retrieve','end','pause','retrieve','join','describe','percent','7976619HqJDis','.000+0000','constructor','data','POLL_INTERVAL','1534056fILgIa','isPaused','bind','18tKVpZR','castCsvValue','catch','request','stream/promises','true','pipeline','csvParser','_read','174jfExSp','isExistsPath','@flosum/salesforce','reduce','search','createReadStream','pipelineCallback','createReader','createWriteStream','error','default','createDecryptPipe','(((.+)+)+)+$','currency','crypto','fields','_fieldsTypes','handleError','pull','stream','@flosum/utils','set','BaseBulkRetrieve','queryBuilder','csv-parse','FsUtils','read','SALESFORCE_API_VERSION','resume','get','176655zxoCNA','__esModule','execute','int','toString','951012zIVvQP','systemLogger'];a75_0x1746=function(){return _0x13968a;};return a75_0x1746();}function a75_0x3eab(_0x13454b,_0x3ee12e){const _0x46ad44=a75_0x1746();return a75_0x3eab=function(_0x1301d0,_0x5a2b65){_0x1301d0=_0x1301d0-0x9a;let _0x1746b1=_0x46ad44[_0x1301d0];return _0x1746b1;},a75_0x3eab(_0x13454b,_0x3ee12e);}class BaseBulkRetrieve extends base_retrieve_1['BaseRetrieve']{get['baseRetrievePayload'](){const _0x29c57e=a75_0x5c8433;return{'queryBuilder':this[_0x29c57e(0xbc)],'instance':this[_0x29c57e(0x9f)],'api':constants_1[_0x29c57e(0xc0)],'contentType':salesforce_1['BulkV1QueryContentType']['TEXT_CSV']};}async[a75_0x5c8433(0xb7)](){const _0xc6904f=a75_0x5c8433;var _0x13d93c,_0x58bc37;if(this[_0xc6904f(0xdc)]['getIsDone']()&&!((_0x13d93c=this[_0xc6904f(0xa3)])===null||_0x13d93c===void 0x0?void 0x0:_0x13d93c[_0xc6904f(0x9a)]())){this[_0xc6904f(0xd2)](null);return;}if((_0x58bc37=this['csvParser'])===null||_0x58bc37===void 0x0?void 0x0:_0x58bc37[_0xc6904f(0x9a)]()){this[_0xc6904f(0xa3)][_0xc6904f(0xc1)]();return;}const _0x40507a=await this[_0xc6904f(0xdc)][_0xc6904f(0xc5)]();if(!_0x40507a)return this[_0xc6904f(0xb7)]();await this[_0xc6904f(0xac)](_0x40507a);}async['createReader'](_0x42a61d){const _0x5d1a0e=a75_0x5c8433,_0x10bf0a=path_1['default'][_0x5d1a0e(0xdd)](job_detail_1['jobStorePath'],(0x0,crypto_1[_0x5d1a0e(0xca)])()),_0x56b215=(0x0,crypto_1[_0x5d1a0e(0xca)])(),_0x35e447=await this['writeEncryptedTempFile'](_0x42a61d,_0x10bf0a,_0x56b215)['then'](()=>this['readEncryptedTempFile'](_0x10bf0a,_0x56b215)),_0x36e3e0={'columns':!![],'cast':this[_0x5d1a0e(0x9d)][_0x5d1a0e(0x9b)](this)};this[_0x5d1a0e(0xa3)]=(0x0,stream_1[_0x5d1a0e(0xa2)])(_0x35e447,(0x0,csv_parse_1[_0x5d1a0e(0xd3)])(_0x36e3e0),this[_0x5d1a0e(0xab)][_0x5d1a0e(0x9b)](this,_0x10bf0a)),this[_0x5d1a0e(0xa3)]['on'](_0x5d1a0e(0xe3),_0x512fa5=>{const _0x5d06d5=_0x5d1a0e;this[_0x5d06d5(0xa3)][_0x5d06d5(0xdb)](),this[_0x5d06d5(0xd2)](_0x512fa5);}),this[_0x5d1a0e(0xa3)]['on'](_0x5d1a0e(0xda),async()=>{const _0x88857e=_0x5d1a0e;return await utils_1[_0x88857e(0xbe)][_0x88857e(0xa6)](_0x10bf0a)&&await(0x0,promises_1['rm'])(_0x10bf0a)[_0x88857e(0x9e)](this['handleError'][_0x88857e(0x9b)](this,null)),this[_0x88857e(0xa4)]();}),this['csvParser']['on'](_0x5d1a0e(0xae),this['pipelineCallback'][_0x5d1a0e(0x9b)](this,_0x10bf0a));}async[a75_0x5c8433(0xd7)](_0xa657a5,_0x237708,_0x7d6571){const _0x568033=a75_0x5c8433,_0x4bdb27=fs_1[_0x568033(0xaf)][_0x568033(0xad)](_0x237708);await(0x0,promises_2['pipeline'])(_0xa657a5,utils_1[_0x568033(0xd0)][_0x568033(0xcb)](_0x7d6571),_0x4bdb27);}async['readEncryptedTempFile'](_0x2a8460,_0x230e3b){const _0x2f451d=a75_0x5c8433,_0xbaa936=fs_1[_0x2f451d(0xaf)][_0x2f451d(0xaa)](_0x2a8460),_0x470273=await this[_0x2f451d(0xcd)](_0xbaa936),_0x5dc754=utils_1[_0x2f451d(0xd0)][_0x2f451d(0xb0)](_0x230e3b,_0x470273);return(0x0,stream_1[_0x2f451d(0xa2)])(_0xbaa936,_0x5dc754,this['pipelineCallback'][_0x2f451d(0x9b)](this,_0x2a8460));}async[a75_0x5c8433(0xab)](_0x4bbe99,_0x4ab3ba){_0x4ab3ba&&await this['handleError'](_0x4bbe99,_0x4ab3ba);}async[a75_0x5c8433(0xb6)](_0x1a0034,_0x1beeff){const _0xe9d7af=a75_0x5c8433;_0x1a0034&&await utils_1[_0xe9d7af(0xbe)]['isExistsPath'](_0x1a0034)&&await(0x0,promises_1['rm'])(_0x1a0034)[_0xe9d7af(0x9e)](_0x1341c3=>job_detail_1[_0xe9d7af(0xc9)]['error'](_0x1341c3)),this['destroy'](_0x1beeff);}async[a75_0x5c8433(0xcd)](_0x17145f){return new Promise((_0x2fe892,_0x21fb7c)=>{const _0x3d94bf=a75_0x3eab;_0x17145f['once'](_0x3d94bf(0xae),_0x21fb7c),_0x17145f['once'](_0x3d94bf(0xce),()=>{const _0x190b72=_0x3d94bf,_0x166a1a=_0x17145f[_0x190b72(0xbf)](0x10);_0x2fe892(_0x166a1a);});});}[a75_0x5c8433(0x9d)](_0x345c9b,{header:_0x34441,column:_0x207d6b}){const _0x552f45=a75_0x5c8433;!this[_0x552f45(0xb5)]&&(this['_fieldsTypes']=this[_0x552f45(0xde)][_0x552f45(0xb4)][_0x552f45(0xa8)]((_0x46b2f5,{name:_0x273649,type:_0x56f410})=>_0x46b2f5[_0x552f45(0xba)](_0x273649,_0x56f410),new Map()));if(_0x34441)return _0x345c9b;if(!_0x345c9b)return null;switch(this[_0x552f45(0xb5)][_0x552f45(0xc2)](_0x207d6b)){case _0x552f45(0xd5):return _0x345c9b[_0x552f45(0xcf)](/\.\d{3}Z$/,_0x552f45(0xe1));case'boolean':return _0x345c9b===_0x552f45(0xa1);case _0x552f45(0xb2):case'double':case _0x552f45(0xc6):case _0x552f45(0xdf):return+_0x345c9b;default:return _0x345c9b;}}}exports[a75_0x5c8433(0xbb)]=BaseBulkRetrieve,BaseBulkRetrieve[a75_0x5c8433(0xe4)]=0x1388;