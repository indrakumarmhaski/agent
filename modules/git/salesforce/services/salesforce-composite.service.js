const a230_0x525782=a230_0x5995;(function(_0x334e7d,_0x1464ba){const _0x46a5b4=a230_0x5995,_0x59827b=_0x334e7d();while(!![]){try{const _0x358f28=-parseInt(_0x46a5b4(0x188))/0x1+-parseInt(_0x46a5b4(0x190))/0x2*(-parseInt(_0x46a5b4(0x194))/0x3)+parseInt(_0x46a5b4(0x191))/0x4*(-parseInt(_0x46a5b4(0x196))/0x5)+parseInt(_0x46a5b4(0x199))/0x6+-parseInt(_0x46a5b4(0x17f))/0x7+parseInt(_0x46a5b4(0x19f))/0x8*(-parseInt(_0x46a5b4(0x18e))/0x9)+parseInt(_0x46a5b4(0x19c))/0xa;if(_0x358f28===_0x1464ba)break;else _0x59827b['push'](_0x59827b['shift']());}catch(_0x5689cc){_0x59827b['push'](_0x59827b['shift']());}}}(a230_0xedce,0xc49ef));const a230_0x4c2e7a=(function(){let _0xfa88da=!![];return function(_0xb834e8,_0x50ff83){const _0x2dee2d=_0xfa88da?function(){if(_0x50ff83){const _0x2ce600=_0x50ff83['apply'](_0xb834e8,arguments);return _0x50ff83=null,_0x2ce600;}}:function(){};return _0xfa88da=![],_0x2dee2d;};}()),a230_0x143c8e=a230_0x4c2e7a(this,function(){const _0x4cb4a2=a230_0x5995;return a230_0x143c8e['toString']()['search'](_0x4cb4a2(0x182))[_0x4cb4a2(0x19e)]()['constructor'](a230_0x143c8e)[_0x4cb4a2(0x180)](_0x4cb4a2(0x182));});a230_0x143c8e();'use strict';var __decorate=this&&this[a230_0x525782(0x198)]||function(_0x5d6d48,_0xf157f9,_0x3530e9,_0xa3f027){const _0x22d7e3=a230_0x525782;var _0x17be1e=arguments[_0x22d7e3(0x1a0)],_0x9f6578=_0x17be1e<0x3?_0xf157f9:_0xa3f027===null?_0xa3f027=Object[_0x22d7e3(0x18f)](_0xf157f9,_0x3530e9):_0xa3f027,_0x4cc129;if(typeof Reflect===_0x22d7e3(0x193)&&typeof Reflect[_0x22d7e3(0x1a4)]===_0x22d7e3(0x183))_0x9f6578=Reflect['decorate'](_0x5d6d48,_0xf157f9,_0x3530e9,_0xa3f027);else{for(var _0x586672=_0x5d6d48['length']-0x1;_0x586672>=0x0;_0x586672--)if(_0x4cc129=_0x5d6d48[_0x586672])_0x9f6578=(_0x17be1e<0x3?_0x4cc129(_0x9f6578):_0x17be1e>0x3?_0x4cc129(_0xf157f9,_0x3530e9,_0x9f6578):_0x4cc129(_0xf157f9,_0x3530e9))||_0x9f6578;}return _0x17be1e>0x3&&_0x9f6578&&Object[_0x22d7e3(0x192)](_0xf157f9,_0x3530e9,_0x9f6578),_0x9f6578;},__metadata=this&&this[a230_0x525782(0x19a)]||function(_0x3b958a,_0x269be3){const _0x53acf9=a230_0x525782;if(typeof Reflect===_0x53acf9(0x193)&&typeof Reflect[_0x53acf9(0x197)]==='function')return Reflect['metadata'](_0x3b958a,_0x269be3);};Object[a230_0x525782(0x192)](exports,'__esModule',{'value':!![]}),exports[a230_0x525782(0x1a3)]=void 0x0;const constants_1=require('../../../../constants'),typedi_1=require(a230_0x525782(0x184)),composite_graph_error_1=require('../errors/composite-graph.error'),salesforce_error_1=require(a230_0x525782(0x18b)),create_request_util_1=require(a230_0x525782(0x189)),salesforce_auth_service_1=require(a230_0x525782(0x1a1));let SalesforceCompositeService=class SalesforceCompositeService{constructor(_0x17c328){this['request']=(0x0,create_request_util_1['createSalesforceRequest'])(_0x17c328);}async[a230_0x525782(0x187)](_0x570400){const _0x44b348=a230_0x525782;try{const {data:_0xd35c32}=await this['request'][_0x44b348(0x18c)](_0x44b348(0x19d)+constants_1['SALESFORCE_API_VERSION']+_0x44b348(0x18a),{'graphs':_0x570400},{'maxBodyLength':constants_1[_0x44b348(0x181)]});if(!_0xd35c32[_0x44b348(0x186)][_0x44b348(0x185)](_0x48ed94=>_0x48ed94[_0x44b348(0x18d)]))throw new composite_graph_error_1['CompositeGraphError'](_0x44b348(0x1a2),_0x570400,_0xd35c32);return _0xd35c32;}catch(_0x3a9a42){if(_0x3a9a42 instanceof salesforce_error_1['SalesforceError'])throw _0x3a9a42;throw new salesforce_error_1[(_0x44b348(0x19b))](_0x3a9a42);}}};function a230_0x5995(_0xcd0a7c,_0x5098ca){const _0x301849=a230_0xedce();return a230_0x5995=function(_0x143c8e,_0x4c2e7a){_0x143c8e=_0x143c8e-0x17f;let _0xedce7d=_0x301849[_0x143c8e];return _0xedce7d;},a230_0x5995(_0xcd0a7c,_0x5098ca);}function a230_0xedce(){const _0x1bac9f=['executeGraphs','1167145RQGLuQ','../utils/create-request.util','/composite/graph','../errors/salesforce.error','post','isSuccessful','1359HnHrws','getOwnPropertyDescriptor','158hvHpSH','17740lcezcg','defineProperty','object','56562pDMRNN','design:paramtypes','1205HfhXqd','metadata','__decorate','4399194OxrXGF','__metadata','SalesforceError','29789020nLYxhw','/services/data/','toString','48304iNMvnc','length','./salesforce-auth.service','Unsuccessful\x20composite\x20request','SalesforceCompositeService','decorate','8739430oXuDVS','search','SALESFORCE_MAX_REQUEST_SIZE_BYTES','(((.+)+)+)+$','function','typedi','every','graphs'];a230_0xedce=function(){return _0x1bac9f;};return a230_0xedce();}SalesforceCompositeService=__decorate([(0x0,typedi_1['Service'])(),__metadata(a230_0x525782(0x195),[salesforce_auth_service_1['SalesforceAuthService']])],SalesforceCompositeService),exports[a230_0x525782(0x1a3)]=SalesforceCompositeService;