const a90_0x9d975d=a90_0x141d;(function(_0x3a03a8,_0x413e01){const _0x32e8a6=a90_0x141d,_0x204ff4=_0x3a03a8();while(!![]){try{const _0x44bb6c=parseInt(_0x32e8a6(0x159))/0x1+-parseInt(_0x32e8a6(0x15b))/0x2+-parseInt(_0x32e8a6(0x18e))/0x3+-parseInt(_0x32e8a6(0x198))/0x4*(-parseInt(_0x32e8a6(0x157))/0x5)+parseInt(_0x32e8a6(0x174))/0x6*(parseInt(_0x32e8a6(0x17d))/0x7)+-parseInt(_0x32e8a6(0x15a))/0x8*(parseInt(_0x32e8a6(0x193))/0x9)+parseInt(_0x32e8a6(0x188))/0xa*(parseInt(_0x32e8a6(0x155))/0xb);if(_0x44bb6c===_0x413e01)break;else _0x204ff4['push'](_0x204ff4['shift']());}catch(_0x59fa4b){_0x204ff4['push'](_0x204ff4['shift']());}}}(a90_0xa35a,0x9c0a5));const a90_0x49464d=(function(){let _0x460436=!![];return function(_0x37e341,_0x53a5a5){const _0x5a9eba=_0x460436?function(){if(_0x53a5a5){const _0xc91c73=_0x53a5a5['apply'](_0x37e341,arguments);return _0x53a5a5=null,_0xc91c73;}}:function(){};return _0x460436=![],_0x5a9eba;};}()),a90_0xb63f4=a90_0x49464d(this,function(){const _0x94dd9b=a90_0x141d;return a90_0xb63f4[_0x94dd9b(0x17e)]()[_0x94dd9b(0x160)](_0x94dd9b(0x183))['toString']()[_0x94dd9b(0x15c)](a90_0xb63f4)[_0x94dd9b(0x160)](_0x94dd9b(0x183));});a90_0xb63f4();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3943dc){return _0x3943dc&&_0x3943dc['__esModule']?_0x3943dc:{'default':_0x3943dc};};Object[a90_0x9d975d(0x14e)](exports,a90_0x9d975d(0x172),{'value':!![]}),exports[a90_0x9d975d(0x192)]=void 0x0;const base_retrieve_1=require(a90_0x9d975d(0x18d)),stream_1=require('stream'),path_1=__importDefault(require(a90_0x9d975d(0x191))),utils_1=require(a90_0x9d975d(0x156)),promises_1=require(a90_0x9d975d(0x148)),fs_1=__importDefault(require('fs')),promises_2=require(a90_0x9d975d(0x175)),crypto_1=require(a90_0x9d975d(0x14c)),csv_parse_1=require(a90_0x9d975d(0x178)),salesforce_1=require(a90_0x9d975d(0x184)),job_detail_1=require(a90_0x9d975d(0x165)),constants_1=require(a90_0x9d975d(0x16b));class BaseBulkRetrieve extends base_retrieve_1[a90_0x9d975d(0x195)]{get['baseRetrievePayload'](){const _0x9b3454=a90_0x9d975d;return{'queryBuilder':this[_0x9b3454(0x164)],'instance':this[_0x9b3454(0x161)],'api':constants_1[_0x9b3454(0x15f)],'contentType':salesforce_1[_0x9b3454(0x158)][_0x9b3454(0x150)]};}async[a90_0x9d975d(0x163)](){const _0xf9d26a=a90_0x9d975d;var _0x2ef191,_0x3a46dc;if(this[_0xf9d26a(0x14b)]['getIsDone']()&&!((_0x2ef191=this[_0xf9d26a(0x182)])===null||_0x2ef191===void 0x0?void 0x0:_0x2ef191[_0xf9d26a(0x16e)]())){this['push'](null);return;}if((_0x3a46dc=this[_0xf9d26a(0x182)])===null||_0x3a46dc===void 0x0?void 0x0:_0x3a46dc['isPaused']()){this[_0xf9d26a(0x182)][_0xf9d26a(0x16c)]();return;}const _0x1640b0=await this[_0xf9d26a(0x14b)][_0xf9d26a(0x15e)]();if(!_0x1640b0)return this[_0xf9d26a(0x163)]();await this[_0xf9d26a(0x153)](_0x1640b0);}async[a90_0x9d975d(0x153)](_0x4cc6b4){const _0x56e264=a90_0x9d975d,_0x3f325e=path_1[_0x56e264(0x146)][_0x56e264(0x169)](job_detail_1[_0x56e264(0x166)],(0x0,crypto_1[_0x56e264(0x167)])()),_0x608ec=(0x0,crypto_1[_0x56e264(0x167)])(),_0x4b37b4=await this[_0x56e264(0x177)](_0x4cc6b4,_0x3f325e,_0x608ec)[_0x56e264(0x18f)](()=>this[_0x56e264(0x179)](_0x3f325e,_0x608ec)),_0x68dfee={'columns':!![],'cast':this['castCsvValue']['bind'](this)};this[_0x56e264(0x182)]=(0x0,stream_1[_0x56e264(0x187)])(_0x4b37b4,(0x0,csv_parse_1[_0x56e264(0x168)])(_0x68dfee),this[_0x56e264(0x170)]['bind'](this,_0x3f325e)),this[_0x56e264(0x182)]['on']('data',_0x2da6bb=>{const _0xa24ba6=_0x56e264;this['csvParser']['pause'](),this[_0xa24ba6(0x162)](_0x2da6bb);}),this[_0x56e264(0x182)]['on']('end',async()=>{const _0x493e38=_0x56e264;return await utils_1['FsUtils'][_0x493e38(0x186)](_0x3f325e)&&await(0x0,promises_1['rm'])(_0x3f325e)['catch'](this[_0x493e38(0x197)]['bind'](this,null)),this[_0x493e38(0x171)]();}),this[_0x56e264(0x182)]['on']('error',this[_0x56e264(0x170)][_0x56e264(0x18a)](this,_0x3f325e));}async[a90_0x9d975d(0x177)](_0x589896,_0x33fbcd,_0x34d765){const _0x18112f=a90_0x9d975d,_0x12c10b=fs_1[_0x18112f(0x146)][_0x18112f(0x176)](_0x33fbcd);await(0x0,promises_2[_0x18112f(0x187)])(_0x589896,utils_1[_0x18112f(0x16f)][_0x18112f(0x152)](_0x34d765),_0x12c10b);}async['readEncryptedTempFile'](_0x3f0447,_0x23778a){const _0x5de6a7=a90_0x9d975d,_0x393dcd=fs_1[_0x5de6a7(0x146)][_0x5de6a7(0x189)](_0x3f0447),_0x561707=await this[_0x5de6a7(0x16d)](_0x393dcd),_0x499b59=utils_1[_0x5de6a7(0x16f)][_0x5de6a7(0x181)](_0x23778a,_0x561707);return(0x0,stream_1[_0x5de6a7(0x187)])(_0x393dcd,_0x499b59,this[_0x5de6a7(0x170)]['bind'](this,_0x3f0447));}async[a90_0x9d975d(0x170)](_0x52300e,_0x4fba09){const _0x16f9b2=a90_0x9d975d;_0x4fba09&&await this[_0x16f9b2(0x197)](_0x52300e,_0x4fba09);}async[a90_0x9d975d(0x197)](_0xc9436f,_0xe7b83f){const _0x5314c2=a90_0x9d975d;_0xc9436f&&await utils_1['FsUtils'][_0x5314c2(0x186)](_0xc9436f)&&await(0x0,promises_1['rm'])(_0xc9436f)[_0x5314c2(0x15d)](_0x1c510e=>job_detail_1[_0x5314c2(0x196)][_0x5314c2(0x190)](_0x1c510e)),this['destroy'](_0xe7b83f);}async[a90_0x9d975d(0x16d)](_0x420847){return new Promise((_0x3fe94a,_0x16b740)=>{const _0x259500=a90_0x141d;_0x420847[_0x259500(0x180)](_0x259500(0x190),_0x16b740),_0x420847['once'](_0x259500(0x16a),()=>{const _0x5e79c9=_0x259500,_0x179b95=_0x420847[_0x5e79c9(0x199)](0x10);_0x3fe94a(_0x179b95);});});}[a90_0x9d975d(0x18c)](_0x53cc4c,{header:_0x11f911,column:_0x3ade1f}){const _0xdf241e=a90_0x9d975d;!this['_fieldsTypes']&&(this[_0xdf241e(0x149)]=this[_0xdf241e(0x151)][_0xdf241e(0x17a)][_0xdf241e(0x147)]((_0x4d2112,{name:_0x572c3a,type:_0x4c5fde})=>_0x4d2112[_0xdf241e(0x17c)](_0x572c3a,_0x4c5fde),new Map()));if(_0x11f911)return _0x53cc4c;if(!_0x53cc4c)return null;switch(this[_0xdf241e(0x149)][_0xdf241e(0x17f)](_0x3ade1f)){case _0xdf241e(0x154):return _0x53cc4c[_0xdf241e(0x14d)](/\.\d{3}Z$/,'.000+0000');case _0xdf241e(0x14a):return _0x53cc4c===_0xdf241e(0x14f);case _0xdf241e(0x17b):case _0xdf241e(0x18b):case _0xdf241e(0x194):case _0xdf241e(0x173):return+_0x53cc4c;default:return _0x53cc4c;}}}function a90_0x141d(_0x2dcadc,_0x3a3c37){const _0x4f99fd=a90_0xa35a();return a90_0x141d=function(_0xb63f4,_0x49464d){_0xb63f4=_0xb63f4-0x146;let _0xa35ad0=_0x4f99fd[_0xb63f4];return _0xa35ad0;},a90_0x141d(_0x2dcadc,_0x3a3c37);}function a90_0xa35a(){const _0xb09f08=['catch','execute','SALESFORCE_API_VERSION','search','request','push','pull','queryBuilder','../job-detail','jobStorePath','randomUUID','parse','join','readable','../../constants','resume','readEncryptionVector','isPaused','CryptoUtils','pipelineCallback','_read','__esModule','percent','2408268WzQHlu','stream/promises','createWriteStream','writeEncryptedTempFile','csv-parse','readEncryptedTempFile','fields','currency','set','7SboetF','toString','get','once','createDecryptPipe','csvParser','(((.+)+)+)+$','@flosum/salesforce','POLL_INTERVAL','isExistsPath','pipeline','54430CMuFDW','createReadStream','bind','double','castCsvValue','./base-retrieve','2131119UkOMvj','then','error','path','BaseBulkRetrieve','3132477byAWfy','int','BaseRetrieve','systemLogger','handleError','836WNXjfO','read','default','reduce','fs/promises','_fieldsTypes','boolean','retrieve','crypto','replace','defineProperty','true','TEXT_CSV','describe','createEncryptPipe','createReader','datetime','2695YZttpQ','@flosum/utils','5870qtDERX','BulkV1QueryContentType','808615UIrxYt','8BLdKQJ','2182654zflUpR','constructor'];a90_0xa35a=function(){return _0xb09f08;};return a90_0xa35a();}exports[a90_0x9d975d(0x192)]=BaseBulkRetrieve,BaseBulkRetrieve[a90_0x9d975d(0x185)]=0x1388;