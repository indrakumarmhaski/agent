const a131_0x26422c=a131_0x3108;(function(_0x4cac13,_0x401378){const _0x25e830=a131_0x3108,_0x33e094=_0x4cac13();while(!![]){try{const _0x43a312=-parseInt(_0x25e830(0xb5))/0x1+parseInt(_0x25e830(0xb4))/0x2+parseInt(_0x25e830(0xb2))/0x3+parseInt(_0x25e830(0xbb))/0x4*(-parseInt(_0x25e830(0xac))/0x5)+-parseInt(_0x25e830(0xab))/0x6+-parseInt(_0x25e830(0xc6))/0x7*(-parseInt(_0x25e830(0xda))/0x8)+parseInt(_0x25e830(0xc8))/0x9*(parseInt(_0x25e830(0xd3))/0xa);if(_0x43a312===_0x401378)break;else _0x33e094['push'](_0x33e094['shift']());}catch(_0x5609af){_0x33e094['push'](_0x33e094['shift']());}}}(a131_0x18aa,0xe7d92));const a131_0x92dd8c=(function(){let _0x345f80=!![];return function(_0x6d643d,_0x44810b){const _0x4997e9=_0x345f80?function(){const _0x30a876=a131_0x3108;if(_0x44810b){const _0xb2fedc=_0x44810b[_0x30a876(0xce)](_0x6d643d,arguments);return _0x44810b=null,_0xb2fedc;}}:function(){};return _0x345f80=![],_0x4997e9;};}()),a131_0x259ee7=a131_0x92dd8c(this,function(){const _0x264192=a131_0x3108;return a131_0x259ee7['toString']()['search']('(((.+)+)+)+$')[_0x264192(0xcf)]()[_0x264192(0xcd)](a131_0x259ee7)['search'](_0x264192(0xba));});a131_0x259ee7();'use strict';function a131_0x18aa(){const _0x2b21ec=['SalesforceLogger2','10zpAXSO','SalesforceError','prefix','./salesforce-rest.service','request','../../../constants','./salesforce-auth.service','40pifufG','6161520KvgDom','70gyakbv','map','[message]\x20%s','delete','__importDefault','get','179442CnbNEd','../../../core','3329578myLkgX','376413esAZZH','Logger','length','removeLogger','log','(((.+)+)+)+$','24348mTchlY','IGNORE_FLOSUM_GIT_NAMESPACE','../utils/create-request.util','createLogger','/logger','/flosum_git','getPrefix','SalesforceRestService','default','services/apexrest','__esModule','145313LgeUyE','createSalesforceRequest','5488227IhCVqJ','messages','Log__c','SalesforceAuthService','send','constructor','apply','toString','../errors/salesforce.error','loggerId'];a131_0x18aa=function(){return _0x2b21ec;};return a131_0x18aa();}var __importDefault=this&&this[a131_0x26422c(0xb0)]||function(_0x447f58){const _0x38458c=a131_0x26422c;return _0x447f58&&_0x447f58[_0x38458c(0xc5)]?_0x447f58:{'default':_0x447f58};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['SalesforceLogger2']=void 0x0;function a131_0x3108(_0x5af936,_0x3888d3){const _0x296cde=a131_0x18aa();return a131_0x3108=function(_0x259ee7,_0x92dd8c){_0x259ee7=_0x259ee7-0xab;let _0x18aadc=_0x296cde[_0x259ee7];return _0x18aadc;},a131_0x3108(_0x5af936,_0x3888d3);}const typedi_1=__importDefault(require('typedi')),constants_1=require(a131_0x26422c(0xd8)),core_1=require(a131_0x26422c(0xb3)),salesforce_error_1=require(a131_0x26422c(0xd0)),create_request_util_1=require(a131_0x26422c(0xbd)),salesforce_auth_service_1=require(a131_0x26422c(0xd9)),salesforce_rest_service_1=require(a131_0x26422c(0xd6));class SalesforceLogger2{constructor(_0x37c794,_0x92e88c){const _0x1b0c63=a131_0x26422c;this[_0x1b0c63(0xd1)]=_0x37c794,this[_0x1b0c63(0xd5)]=_0x92e88c,this[_0x1b0c63(0xd7)]=create_request_util_1[_0x1b0c63(0xc7)](typedi_1['default'][_0x1b0c63(0xb1)](salesforce_auth_service_1[_0x1b0c63(0xcb)])),this['logger']=new core_1[(_0x1b0c63(0xb6))](SalesforceLogger2['name']),this[_0x1b0c63(0xc9)]=[];}['setLoggerId'](_0x5794bc){const _0x53b3c2=a131_0x26422c;this[_0x53b3c2(0xd1)]=_0x5794bc;}['getLoggerId'](){const _0x1b18e6=a131_0x26422c;return this[_0x1b18e6(0xd1)]||'';}[a131_0x26422c(0xc1)](){const _0x56bd31=a131_0x26422c;return this[_0x56bd31(0xd5)]||'';}async[a131_0x26422c(0xcc)](){const _0x41336b=a131_0x26422c;try{if(!this['loggerId'])return;const _0x2bc621=this[_0x41336b(0xc9)]['splice'](0x0)[_0x41336b(0xad)](_0x4d8e00=>''+(this[_0x41336b(0xd5)]||'')+_0x4d8e00);this[_0x41336b(0xd1)]&&_0x2bc621[_0x41336b(0xb7)]&&await this['request']['post'](_0x41336b(0xc4)+(constants_1[_0x41336b(0xbc)]?'':_0x41336b(0xc0))+_0x41336b(0xbf),{'messages':_0x2bc621,'loggerId':this['loggerId']});}catch(_0x17b9f3){throw new salesforce_error_1[(_0x41336b(0xd4))](_0x17b9f3);}}[a131_0x26422c(0xb9)](_0x3b2447){const _0xdfe03b=a131_0x26422c;return this['logger'][_0xdfe03b(0xb9)](_0xdfe03b(0xae),_0x3b2447),this[_0xdfe03b(0xc9)]['push'](_0x3b2447),this;}static async[a131_0x26422c(0xbe)](){const _0x430e65=a131_0x26422c;try{const _0x5117a9=typedi_1[_0x430e65(0xc3)][_0x430e65(0xb1)](salesforce_rest_service_1['SalesforceRestService']),_0x4e7592=await _0x5117a9['post'](constants_1['FLOSUM_GIT_NAMESPACE']+'Log__c',{});return new SalesforceLogger2(_0x4e7592);}catch(_0x462709){throw new salesforce_error_1[(_0x430e65(0xd4))](_0x462709);}}async[a131_0x26422c(0xb8)](){const _0x2675a8=a131_0x26422c;try{if(!this[_0x2675a8(0xd1)])return;const _0x2a2986=typedi_1['default'][_0x2675a8(0xb1)](salesforce_rest_service_1[_0x2675a8(0xc2)]);await _0x2a2986[_0x2675a8(0xaf)](constants_1['FLOSUM_GIT_NAMESPACE']+_0x2675a8(0xca),this[_0x2675a8(0xd1)]),this[_0x2675a8(0xd1)]='',this[_0x2675a8(0xc9)]=[];}catch(_0x4c8ba4){throw new salesforce_error_1[(_0x2675a8(0xd4))](_0x4c8ba4);}}}exports[a131_0x26422c(0xd2)]=SalesforceLogger2;