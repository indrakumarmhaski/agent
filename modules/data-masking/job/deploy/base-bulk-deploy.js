const a63_0x199732=a63_0x414b;(function(_0x2daf05,_0x318422){const _0x131299=a63_0x414b,_0x9986ca=_0x2daf05();while(!![]){try{const _0x3611c1=parseInt(_0x131299(0x74))/0x1*(parseInt(_0x131299(0x6b))/0x2)+parseInt(_0x131299(0x7b))/0x3+parseInt(_0x131299(0x8e))/0x4+parseInt(_0x131299(0x8c))/0x5*(-parseInt(_0x131299(0x7e))/0x6)+parseInt(_0x131299(0x79))/0x7*(parseInt(_0x131299(0x86))/0x8)+-parseInt(_0x131299(0x75))/0x9+-parseInt(_0x131299(0x83))/0xa;if(_0x3611c1===_0x318422)break;else _0x9986ca['push'](_0x9986ca['shift']());}catch(_0x304c64){_0x9986ca['push'](_0x9986ca['shift']());}}}(a63_0x4a28,0xf0694));const a63_0x1f2737=(function(){let _0x26a3a9=!![];return function(_0x2edae9,_0x4c3880){const _0x34d17c=_0x26a3a9?function(){const _0x2ef23f=a63_0x414b;if(_0x4c3880){const _0x22ec6b=_0x4c3880[_0x2ef23f(0x88)](_0x2edae9,arguments);return _0x4c3880=null,_0x22ec6b;}}:function(){};return _0x26a3a9=![],_0x34d17c;};}()),a63_0x20ed5e=a63_0x1f2737(this,function(){const _0x471e9f=a63_0x414b;return a63_0x20ed5e[_0x471e9f(0x8d)]()[_0x471e9f(0x7f)](_0x471e9f(0x72))[_0x471e9f(0x8d)]()['constructor'](a63_0x20ed5e)[_0x471e9f(0x7f)](_0x471e9f(0x72));});a63_0x20ed5e();function a63_0x414b(_0x50648a,_0x39990e){const _0x231d33=a63_0x4a28();return a63_0x414b=function(_0x20ed5e,_0x1f2737){_0x20ed5e=_0x20ed5e-0x68;let _0x4a2873=_0x231d33[_0x20ed5e];return _0x4a2873;},a63_0x414b(_0x50648a,_0x39990e);}'use strict';var _a;Object[a63_0x199732(0x7c)](exports,a63_0x199732(0x8a),{'value':!![]}),exports[a63_0x199732(0x84)]=void 0x0;function a63_0x4a28(){const _0x18498f=['headerCsvSize','6CDMnEs','search','recordsCsvSize','executeDeploy','close','20068020sPSMAQ','BaseBulkDeploy','CONCURRENT_DEPLOYMENT_COUNT','1482328YPMiTt','handleDeployResults','apply','calculateHeaderSize','__esModule','deployRecords','1754545EDeahP','toString','2463400GwJgjW','MAX_RECORDS_CHUNK_COUNT','MAX_CSV_RECORDS_CHUNK_SIZE','isExceedCSVSizeLimit','147106XKuqaO','finish','flat','deployments','@flosum/utils','calculateRecordSize','CsvUtils','(((.+)+)+)+$','./base-deploy','17uhkRpV','2361321OqIroW','records','push','length','49OjptGN','deployer','1324548LjGNvR','defineProperty'];a63_0x4a28=function(){return _0x18498f;};return a63_0x4a28();}const base_deploy_1=require(a63_0x199732(0x73)),utils_1=require(a63_0x199732(0x6f)),BATCH_DEPLOY_PARALLEL_COUNT=(_a=process['env']['DATA_MASKING_BATCH_DEPLOY_PARALLEL_COUNT'])!==null&&_a!==void 0x0?_a:'';class BaseBulkDeploy extends base_deploy_1['BaseDeploy']{constructor(){const _0xc53cac=a63_0x199732;super(...arguments),this[_0xc53cac(0x80)]=0x0,this[_0xc53cac(0x6e)]=[];}async[a63_0x199732(0x6c)](_0x3bb0e1){const _0x14dd88=a63_0x199732;this[_0x14dd88(0x76)][_0x14dd88(0x78)]&&await this['executeDeploy']();if(this['deployments']['length']){const _0x50f6a0=(await Promise['all'](this['deployments']))[_0x14dd88(0x6d)]();this[_0x14dd88(0x6e)]=[],await this[_0x14dd88(0x87)](_0x50f6a0);}await this[_0x14dd88(0x7a)][_0x14dd88(0x82)](),_0x3bb0e1();}async[a63_0x199732(0x81)](){const _0x57df5d=a63_0x199732,_0x227e51=this[_0x57df5d(0x8b)](this['records']);this[_0x57df5d(0x6e)][_0x57df5d(0x77)](_0x227e51),this[_0x57df5d(0x76)]=[],this[_0x57df5d(0x80)]=0x0;if(this[_0x57df5d(0x6e)][_0x57df5d(0x78)]>=BaseBulkDeploy['CONCURRENT_DEPLOYMENT_COUNT']){const _0x57e7e5=(await Promise['all'](this[_0x57df5d(0x6e)]))['flat']();this[_0x57df5d(0x6e)]=[],await this[_0x57df5d(0x87)](_0x57e7e5);}}[a63_0x199732(0x6a)](_0x6a8d1b){const _0x3b0e94=a63_0x199732,_0x33387f=utils_1[_0x3b0e94(0x71)][_0x3b0e94(0x70)](_0x6a8d1b);return!this[_0x3b0e94(0x7d)]&&(this['headerCsvSize']=utils_1[_0x3b0e94(0x71)][_0x3b0e94(0x89)](Object['keys'](_0x6a8d1b))),_0x33387f+this[_0x3b0e94(0x7d)]+this[_0x3b0e94(0x80)]>=BaseBulkDeploy[_0x3b0e94(0x69)];}}exports[a63_0x199732(0x84)]=BaseBulkDeploy,BaseBulkDeploy[a63_0x199732(0x85)]=+BATCH_DEPLOY_PARALLEL_COUNT||0x14,BaseBulkDeploy[a63_0x199732(0x68)]=0x2710,BaseBulkDeploy[a63_0x199732(0x69)]=0x989680;