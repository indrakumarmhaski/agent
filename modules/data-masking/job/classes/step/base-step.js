const a59_0x584e6d=a59_0x1f19;function a59_0x1f19(_0x2927b3,_0x295b01){const _0x378370=a59_0x45f9();return a59_0x1f19=function(_0x441901,_0xa257d5){_0x441901=_0x441901-0xb6;let _0x45f9ea=_0x378370[_0x441901];return _0x45f9ea;},a59_0x1f19(_0x2927b3,_0x295b01);}function a59_0x45f9(){const _0x18b51f=['5982PGLhAf','log','399959JAlLsZ','QueryService','125505mKhKBn','objectName','systemLogger','_whereClause','1857350nkIuIN','loggerDetails','select','constructor','160XRJtPY','objectDescribe','SALESFORCE_API_VERSION','execute','_objectRuleType','message','2680ovCVrg','error','BaseStep','totalSize','2476GWySEq','whereClause','search','apply','761510EhRGcs','../../retrieve/retrieve-factory','fields','2093910zukVyF','loggerJobState','(((.+)+)+)+$','COUNT()','@flosum/salesforce','request','recordsCount','toString','DeployFactory','1640113FcJtKl','create','getRecordsCount','exception','type','RetrieveFactory'];a59_0x45f9=function(){return _0x18b51f;};return a59_0x45f9();}(function(_0x21f1f4,_0x1d80d3){const _0xc389e4=a59_0x1f19,_0x5ae69c=_0x21f1f4();while(!![]){try{const _0x1d80df=-parseInt(_0xc389e4(0xbb))/0x1+-parseInt(_0xc389e4(0xdb))/0x2+-parseInt(_0xc389e4(0xc1))/0x3*(parseInt(_0xc389e4(0xd7))/0x4)+-parseInt(_0xc389e4(0xc9))/0x5+-parseInt(_0xc389e4(0xde))/0x6+-parseInt(_0xc389e4(0xc3))/0x7*(-parseInt(_0xc389e4(0xcd))/0x8)+-parseInt(_0xc389e4(0xc5))/0x9*(-parseInt(_0xc389e4(0xd3))/0xa);if(_0x1d80df===_0x1d80d3)break;else _0x5ae69c['push'](_0x5ae69c['shift']());}catch(_0x227ed0){_0x5ae69c['push'](_0x5ae69c['shift']());}}}(a59_0x45f9,0xdccc7));const a59_0xa257d5=(function(){let _0x434f1c=!![];return function(_0x3013cd,_0x230248){const _0x85a426=_0x434f1c?function(){const _0x686d86=a59_0x1f19;if(_0x230248){const _0x415737=_0x230248[_0x686d86(0xda)](_0x3013cd,arguments);return _0x230248=null,_0x415737;}}:function(){};return _0x434f1c=![],_0x85a426;};}()),a59_0x441901=a59_0xa257d5(this,function(){const _0x157694=a59_0x1f19;return a59_0x441901[_0x157694(0xb9)]()[_0x157694(0xd9)](_0x157694(0xe0))['toString']()[_0x157694(0xcc)](a59_0x441901)[_0x157694(0xd9)](_0x157694(0xe0));});a59_0x441901();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a59_0x584e6d(0xd5)]=void 0x0;const salesforce_1=require(a59_0x584e6d(0xb6)),retrieve_factory_1=require(a59_0x584e6d(0xdc)),constants_1=require('../../../constants'),deploy_factory_1=require('../../deploy/deploy-factory'),job_detail_1=require('../../job-detail'),FIELD_ID='Id';class BaseStep{constructor({loggerDetails:_0x5a439d,loggerJobState:_0x17abe4,objectName:_0x890457,request:_0x5aee3e,objectRule:_0x545eea,objectDescribe:_0x4b9f03}){const _0x10edf2=a59_0x584e6d;this[_0x10edf2(0xdd)]=[],this[_0x10edf2(0xca)]=_0x5a439d,this['loggerJobState']=_0x17abe4,this[_0x10edf2(0xc6)]=_0x890457,this[_0x10edf2(0xb7)]=_0x5aee3e,this[_0x10edf2(0xc8)]=_0x545eea[_0x10edf2(0xd8)],this['_objectRuleType']=_0x545eea[_0x10edf2(0xbf)],this[_0x10edf2(0xce)]=_0x4b9f03;}async[a59_0x584e6d(0xbd)](){const _0x5ca689=a59_0x584e6d;try{const _0xf0a8b0=new salesforce_1['QueryBuilder']()[_0x5ca689(0xcb)](_0x5ca689(0xe1))['from'](this[_0x5ca689(0xc6)]);this['_whereClause']&&_0xf0a8b0['where'](this[_0x5ca689(0xc8)]);const _0x4211bb=await salesforce_1[_0x5ca689(0xc4)][_0x5ca689(0xd0)](this[_0x5ca689(0xb7)],{},_0xf0a8b0['build'](),![],constants_1[_0x5ca689(0xcf)]);return _0x4211bb[_0x5ca689(0xd6)];}catch(_0x18e7e9){return job_detail_1['systemLogger'][_0x5ca689(0xd4)](_0x18e7e9),-0x1;}}['getRetrieveStream'](){const _0x5aa8b7=a59_0x584e6d,_0x181259={'request':this['request'],'fields':this[_0x5aa8b7(0xdd)],'whereClause':this[_0x5aa8b7(0xc8)],'objectName':this['objectName'],'describe':this[_0x5aa8b7(0xce)]};return retrieve_factory_1[_0x5aa8b7(0xc0)][_0x5aa8b7(0xbc)](_0x181259,this[_0x5aa8b7(0xb8)]);}['getDeployStream'](){const _0x44d160=a59_0x584e6d,_0x559034={'request':this[_0x44d160(0xb7)],'objectName':this[_0x44d160(0xc6)],'externalIdField':FIELD_ID,'loggerDetails':this[_0x44d160(0xca)],'loggerJobState':this[_0x44d160(0xdf)]};return deploy_factory_1[_0x44d160(0xba)][_0x44d160(0xbc)](_0x559034,this[_0x44d160(0xd1)]);}[a59_0x584e6d(0xc2)](_0x172235){const _0x563ab4=a59_0x584e6d;job_detail_1['systemLogger'][_0x563ab4(0xc2)](_0x172235,this['objectName']),this['loggerDetails']['log'](_0x172235,this['objectName']);}[a59_0x584e6d(0xd4)](_0x3a3183){const _0x3bb4fe=a59_0x584e6d;job_detail_1[_0x3bb4fe(0xc7)][_0x3bb4fe(0xd4)](_0x3a3183,this[_0x3bb4fe(0xc6)]),this['loggerDetails'][_0x3bb4fe(0xbe)](_0x3a3183[_0x3bb4fe(0xd2)],this[_0x3bb4fe(0xc6)]);}}exports[a59_0x584e6d(0xd5)]=BaseStep;