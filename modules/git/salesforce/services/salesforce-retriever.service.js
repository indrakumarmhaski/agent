const a242_0x1acf68=a242_0x39c2;function a242_0x39c2(_0x39431a,_0x4299fe){const _0x523cd4=a242_0x126f();return a242_0x39c2=function(_0x587fa8,_0x8e707){_0x587fa8=_0x587fa8-0x13a;let _0x126f6e=_0x523cd4[_0x587fa8];return _0x126f6e;},a242_0x39c2(_0x39431a,_0x4299fe);}function a242_0x126f(){const _0x5d8bd7=['1062292qkHhiJ','__importDefault','../dto/flosum-component-history.dto','../../../../core','FlosumComponentHistoryDto','COMPONENTS_PER_REQUEST','1338vazkfK','retrieveComponents','manually\x20retrieved\x20%d/%d\x20components','length','search','2451335EFDXSE','then','default','splice','4707216aQdzYL','typedi','find','790817SUAHew','retrieveComponentIdsFromHistoryIds','874352GzSCxI','fileName','defineProperty','./salesforce-query.service','retrieveAttachment','manually\x20retrieving\x20components\x20from\x20salesforce','retrieveLastComponents','replace','(((.+)+)+)+$','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','%ids%','Name','salesforceService','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','toString','push','filename','__esModule','logger','ids','get','10924DNkxbY','join','COMPONENTS_PER_QUERY','log','54oZLXWD','map','info','query','SalesforceQueryService','apply','run','fromSalesforce','name','ParentId','SalesforceRetrieverService','base64','3862752yUGvHy','GET_COMPONENT_HISTORIES_BY_IDS'];a242_0x126f=function(){return _0x5d8bd7;};return a242_0x126f();}(function(_0x12d4d2,_0x214b3a){const _0x1f761c=a242_0x39c2,_0x365edf=_0x12d4d2();while(!![]){try{const _0x39ed40=-parseInt(_0x1f761c(0x155))/0x1+parseInt(_0x1f761c(0x157))/0x2+-parseInt(_0x1f761c(0x149))/0x3*(-parseInt(_0x1f761c(0x16c))/0x4)+-parseInt(_0x1f761c(0x14e))/0x5+parseInt(_0x1f761c(0x170))/0x6*(parseInt(_0x1f761c(0x143))/0x7)+-parseInt(_0x1f761c(0x141))/0x8+-parseInt(_0x1f761c(0x152))/0x9;if(_0x39ed40===_0x214b3a)break;else _0x365edf['push'](_0x365edf['shift']());}catch(_0x5dfea8){_0x365edf['push'](_0x365edf['shift']());}}}(a242_0x126f,0xb3366));const a242_0x8e707=(function(){let _0x523bc3=!![];return function(_0xa89e96,_0x5aa698){const _0x319ac0=_0x523bc3?function(){const _0x2a7a92=a242_0x39c2;if(_0x5aa698){const _0x1c5c86=_0x5aa698[_0x2a7a92(0x13a)](_0xa89e96,arguments);return _0x5aa698=null,_0x1c5c86;}}:function(){};return _0x523bc3=![],_0x319ac0;};}()),a242_0x587fa8=a242_0x8e707(this,function(){const _0x5bf1ad=a242_0x39c2;return a242_0x587fa8[_0x5bf1ad(0x165)]()[_0x5bf1ad(0x14d)](_0x5bf1ad(0x15f))['toString']()['constructor'](a242_0x587fa8)[_0x5bf1ad(0x14d)](_0x5bf1ad(0x15f));});a242_0x587fa8();'use strict';var __importDefault=this&&this[a242_0x1acf68(0x144)]||function(_0xec6792){return _0xec6792&&_0xec6792['__esModule']?_0xec6792:{'default':_0xec6792};};Object[a242_0x1acf68(0x159)](exports,a242_0x1acf68(0x168),{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a242_0x1acf68(0x146)),typedi_1=__importDefault(require(a242_0x1acf68(0x153))),salesforce_query_service_1=require(a242_0x1acf68(0x15a)),queries_1=require('../queries'),flosum_component_history_dto_1=require(a242_0x1acf68(0x145));class SalesforceRetrieverService{constructor(_0x4804d0){const _0x90788d=a242_0x1acf68;this[_0x90788d(0x163)]=_0x4804d0,this[_0x90788d(0x169)]=new core_1['Logger'](SalesforceRetrieverService[_0x90788d(0x13d)]),this['COMPONENTS_PER_REQUEST']=0xbb8,this[_0x90788d(0x16e)]=0x1f4;}async[a242_0x1acf68(0x156)](_0x20b5b7){const _0x15aa9b=a242_0x1acf68;this[_0x15aa9b(0x169)][_0x15aa9b(0x172)](_0x15aa9b(0x164),_0x20b5b7['length']);const _0x2826f6=typedi_1[_0x15aa9b(0x150)][_0x15aa9b(0x16b)](salesforce_query_service_1[_0x15aa9b(0x174)]),_0x1773c3=_0x20b5b7['map'](_0x579dca=>'\x27'+_0x579dca+'\x27'),_0x81e270=[];while(_0x1773c3['length']){const _0x13b90f=_0x1773c3[_0x15aa9b(0x151)](0x0,this[_0x15aa9b(0x16e)]),_0xe50915=_0x2826f6[_0x15aa9b(0x173)](queries_1[_0x15aa9b(0x160)][_0x15aa9b(0x15e)]('%parent_ids%',_0x13b90f[_0x15aa9b(0x16d)]())),_0x19c1e0=_0x2826f6[_0x15aa9b(0x173)](queries_1[_0x15aa9b(0x142)][_0x15aa9b(0x15e)](_0x15aa9b(0x161),_0x13b90f[_0x15aa9b(0x16d)]()))[_0x15aa9b(0x14f)](_0x1e463f=>_0x1e463f[_0x15aa9b(0x171)](_0x2c6ad2=>flosum_component_history_dto_1[_0x15aa9b(0x147)][_0x15aa9b(0x13c)](_0x2c6ad2))),[_0x410700,_0x4ec064]=await Promise['all']([_0xe50915,_0x19c1e0]);for(const _0x42a377 of _0x4ec064){const _0x374696=_0x410700[_0x15aa9b(0x154)](_0x407bf4=>_0x407bf4[_0x15aa9b(0x13e)]===_0x42a377['id']);_0x374696&&_0x81e270[_0x15aa9b(0x166)]({'fileType':_0x374696[_0x15aa9b(0x162)],'fileName':_0x42a377[_0x15aa9b(0x167)],'attachmentId':_0x374696['Id']});}}return _0x81e270;}async[a242_0x1acf68(0x15d)](_0x5dfc7e){const _0x5afa82=a242_0x1acf68,_0x2760bd=await this[_0x5afa82(0x156)](_0x5dfc7e);this['logger'][_0x5afa82(0x172)](_0x5afa82(0x15c));const _0x4e29fe=[];for(const _0x59f21e of _0x2760bd){const _0x5dce44=await this[_0x5afa82(0x163)][_0x5afa82(0x15b)](_0x59f21e['attachmentId'],!![]);_0x4e29fe[_0x5afa82(0x166)]({'body':_0x5dce44[_0x5afa82(0x165)](_0x5afa82(0x140)),'fileName':_0x59f21e[_0x5afa82(0x158)],'fileType':_0x59f21e['fileType']}),this['logger'][_0x5afa82(0x172)](_0x5afa82(0x14b),_0x4e29fe[_0x5afa82(0x14c)],_0x5dfc7e[_0x5afa82(0x14c)]);}return _0x4e29fe;}async[a242_0x1acf68(0x13b)](_0x208432){const _0x2dd5b7=a242_0x1acf68,_0x393174=[..._0x208432],_0x38aac6=[],_0x58ec03=[];while(_0x393174[_0x2dd5b7(0x14c)]){const _0x11914a=_0x393174['splice'](0x0,this[_0x2dd5b7(0x148)]),_0x4f6034=await this[_0x2dd5b7(0x163)][_0x2dd5b7(0x14a)](_0x11914a);_0x11914a['length']!==_0x4f6034['ids']['length']?(_0x393174['push'](..._0x4f6034[_0x2dd5b7(0x16a)]),_0x38aac6[_0x2dd5b7(0x166)](..._0x4f6034['components'])):_0x58ec03[_0x2dd5b7(0x166)](..._0x11914a),this[_0x2dd5b7(0x169)][_0x2dd5b7(0x16f)]('retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest',_0x208432['length']-_0x393174[_0x2dd5b7(0x14c)],_0x208432['length']);}if(_0x58ec03[_0x2dd5b7(0x14c)]){const _0xee60e4=await this['retrieveLastComponents'](_0x58ec03);_0x38aac6[_0x2dd5b7(0x166)](..._0xee60e4);}return _0x38aac6;}}exports[a242_0x1acf68(0x13f)]=SalesforceRetrieverService;