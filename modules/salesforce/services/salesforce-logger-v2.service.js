function a131_0x271a(){const _0x16ea88=['typedi','3681391AexpPi','../../../core','SalesforceAuthService','toString','SalesforceError','removeLogger','logger','createSalesforceRequest','get','createLogger','constructor','../../../constants','prefix','log','defineProperty','loggerId','/logger','messages','services/apexrest','getLoggerId','/flosum_git','search','215wDDCYb','setLoggerId','send','default','107022iDqMDt','1022804QgDEKi','1kIJBdI','16126przTOK','SalesforceLogger2','FLOSUM_GIT_NAMESPACE','post','Log__c','24cHcOJk','./salesforce-rest.service','apply','2129049BRnPqj','request','2103135ybTQDr','__esModule','getPrefix','[message]\x20%s','splice','../utils/create-request.util','24630NTyMLP','1907342XtIFya','(((.+)+)+)+$'];a131_0x271a=function(){return _0x16ea88;};return a131_0x271a();}const a131_0x956043=a131_0x8ed5;function a131_0x8ed5(_0x5db6b9,_0x393461){const _0x2a9fff=a131_0x271a();return a131_0x8ed5=function(_0x236080,_0x45fa72){_0x236080=_0x236080-0x11a;let _0x271a3d=_0x2a9fff[_0x236080];return _0x271a3d;},a131_0x8ed5(_0x5db6b9,_0x393461);}(function(_0x3cb62e,_0x1dc76f){const _0x528ad9=a131_0x8ed5,_0x4ab5cb=_0x3cb62e();while(!![]){try{const _0x2d96d3=parseInt(_0x528ad9(0x126))/0x1*(parseInt(_0x528ad9(0x138))/0x2)+parseInt(_0x528ad9(0x131))/0x3+parseInt(_0x528ad9(0x125))/0x4+parseInt(_0x528ad9(0x120))/0x5*(parseInt(_0x528ad9(0x124))/0x6)+-parseInt(_0x528ad9(0x13b))/0x7*(-parseInt(_0x528ad9(0x12c))/0x8)+parseInt(_0x528ad9(0x12f))/0x9+parseInt(_0x528ad9(0x137))/0xa*(-parseInt(_0x528ad9(0x127))/0xb);if(_0x2d96d3===_0x1dc76f)break;else _0x4ab5cb['push'](_0x4ab5cb['shift']());}catch(_0x3ea019){_0x4ab5cb['push'](_0x4ab5cb['shift']());}}}(a131_0x271a,0xd7136));const a131_0x45fa72=(function(){let _0x21cb0e=!![];return function(_0x3607af,_0x4a5e3c){const _0x294e6c=_0x21cb0e?function(){const _0x3d938e=a131_0x8ed5;if(_0x4a5e3c){const _0x517209=_0x4a5e3c[_0x3d938e(0x12e)](_0x3607af,arguments);return _0x4a5e3c=null,_0x517209;}}:function(){};return _0x21cb0e=![],_0x294e6c;};}()),a131_0x236080=a131_0x45fa72(this,function(){const _0x38707b=a131_0x8ed5;return a131_0x236080[_0x38707b(0x13e)]()[_0x38707b(0x11f)]('(((.+)+)+)+$')[_0x38707b(0x13e)]()[_0x38707b(0x145)](a131_0x236080)[_0x38707b(0x11f)](_0x38707b(0x139));});a131_0x236080();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4f296a){const _0xdb3eae=a131_0x8ed5;return _0x4f296a&&_0x4f296a[_0xdb3eae(0x132)]?_0x4f296a:{'default':_0x4f296a};};Object[a131_0x956043(0x149)](exports,'__esModule',{'value':!![]}),exports['SalesforceLogger2']=void 0x0;const typedi_1=__importDefault(require(a131_0x956043(0x13a))),constants_1=require(a131_0x956043(0x146)),core_1=require(a131_0x956043(0x13c)),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require(a131_0x956043(0x136)),salesforce_auth_service_1=require('./salesforce-auth.service'),salesforce_rest_service_1=require(a131_0x956043(0x12d));class SalesforceLogger2{constructor(_0x425726,_0x44bbd7){const _0x127434=a131_0x956043;this['loggerId']=_0x425726,this[_0x127434(0x147)]=_0x44bbd7,this[_0x127434(0x130)]=create_request_util_1[_0x127434(0x142)](typedi_1[_0x127434(0x123)][_0x127434(0x143)](salesforce_auth_service_1[_0x127434(0x13d)])),this['logger']=new core_1['Logger'](SalesforceLogger2['name']),this[_0x127434(0x11b)]=[];}[a131_0x956043(0x121)](_0xa6f17){const _0x57ce37=a131_0x956043;this[_0x57ce37(0x14a)]=_0xa6f17;}[a131_0x956043(0x11d)](){const _0x52775e=a131_0x956043;return this[_0x52775e(0x14a)]||'';}[a131_0x956043(0x133)](){const _0x3297b1=a131_0x956043;return this[_0x3297b1(0x147)]||'';}async[a131_0x956043(0x122)](){const _0x5081cb=a131_0x956043;try{if(!this[_0x5081cb(0x14a)])return;const _0x548c78=this[_0x5081cb(0x11b)][_0x5081cb(0x135)](0x0)['map'](_0x4fe122=>''+(this[_0x5081cb(0x147)]||'')+_0x4fe122);this[_0x5081cb(0x14a)]&&_0x548c78['length']&&await this['request'][_0x5081cb(0x12a)](_0x5081cb(0x11c)+(constants_1['IGNORE_FLOSUM_GIT_NAMESPACE']?'':_0x5081cb(0x11e))+_0x5081cb(0x11a),{'messages':_0x548c78,'loggerId':this['loggerId']});}catch(_0x5989fe){throw new salesforce_error_1[(_0x5081cb(0x13f))](_0x5989fe);}}['log'](_0x470464){const _0x41c4c4=a131_0x956043;return this[_0x41c4c4(0x141)][_0x41c4c4(0x148)](_0x41c4c4(0x134),_0x470464),this[_0x41c4c4(0x11b)]['push'](_0x470464),this;}static async[a131_0x956043(0x144)](){const _0x2424bf=a131_0x956043;try{const _0x420c0b=typedi_1[_0x2424bf(0x123)][_0x2424bf(0x143)](salesforce_rest_service_1['SalesforceRestService']),_0x218cdf=await _0x420c0b[_0x2424bf(0x12a)](constants_1[_0x2424bf(0x129)]+_0x2424bf(0x12b),{});return new SalesforceLogger2(_0x218cdf);}catch(_0x4c285a){throw new salesforce_error_1['SalesforceError'](_0x4c285a);}}async[a131_0x956043(0x140)](){const _0x2b6ef8=a131_0x956043;try{if(!this[_0x2b6ef8(0x14a)])return;const _0x184656=typedi_1[_0x2b6ef8(0x123)]['get'](salesforce_rest_service_1['SalesforceRestService']);await _0x184656['delete'](constants_1[_0x2b6ef8(0x129)]+_0x2b6ef8(0x12b),this[_0x2b6ef8(0x14a)]),this[_0x2b6ef8(0x14a)]='',this['messages']=[];}catch(_0x9d1a6a){throw new salesforce_error_1[(_0x2b6ef8(0x13f))](_0x9d1a6a);}}}exports[a131_0x956043(0x128)]=SalesforceLogger2;