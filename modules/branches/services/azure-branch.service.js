const a52_0x8e0bdb=a52_0x1d44;(function(_0x1eb47f,_0x58f8f9){const _0x58e8e6=a52_0x1d44,_0x301689=_0x1eb47f();while(!![]){try{const _0x2add13=-parseInt(_0x58e8e6(0x129))/0x1*(parseInt(_0x58e8e6(0x145))/0x2)+-parseInt(_0x58e8e6(0x139))/0x3+parseInt(_0x58e8e6(0x148))/0x4*(parseInt(_0x58e8e6(0x12f))/0x5)+-parseInt(_0x58e8e6(0x144))/0x6*(-parseInt(_0x58e8e6(0x13e))/0x7)+parseInt(_0x58e8e6(0x12d))/0x8*(parseInt(_0x58e8e6(0x140))/0x9)+parseInt(_0x58e8e6(0x13f))/0xa*(-parseInt(_0x58e8e6(0x13c))/0xb)+parseInt(_0x58e8e6(0x143))/0xc*(-parseInt(_0x58e8e6(0x132))/0xd);if(_0x2add13===_0x58f8f9)break;else _0x301689['push'](_0x301689['shift']());}catch(_0x3c5b56){_0x301689['push'](_0x301689['shift']());}}}(a52_0x3689,0x6c049));const a52_0x246767=(function(){let _0x242e17=!![];return function(_0x186393,_0x4e4311){const _0x2f130d=_0x242e17?function(){const _0x113879=a52_0x1d44;if(_0x4e4311){const _0x1caad3=_0x4e4311[_0x113879(0x134)](_0x186393,arguments);return _0x4e4311=null,_0x1caad3;}}:function(){};return _0x242e17=![],_0x2f130d;};}()),a52_0x34c675=a52_0x246767(this,function(){const _0x2b895e=a52_0x1d44;return a52_0x34c675[_0x2b895e(0x138)]()[_0x2b895e(0x131)]('(((.+)+)+)+$')[_0x2b895e(0x138)]()[_0x2b895e(0x12a)](a52_0x34c675)[_0x2b895e(0x131)]('(((.+)+)+)+$');});function a52_0x3689(){const _0x244eb6=['16GCDrvH','constructor','request','delete','16JjleWQ','BadRequestError','2315cdIrzR','defineProperty','search','143Vyxoas','getOne','apply','__importDefault','AzureApiService','apiUrl','toString','546636iEdVWU','__esModule','get','11GISEpa','createRequest','6004005ahgbWv','3098230IHpVJB','2032812RnkHLm','typedi','AzureBranchService','867552IkjYys','6yiDbTr','27506IvkpPt','repository','0000000000000000000000000000000000000000','5532nEVpAe','refs','../../git-api/services/azure-api.service'];a52_0x3689=function(){return _0x244eb6;};return a52_0x3689();}a52_0x34c675();'use strict';function a52_0x1d44(_0x4732c7,_0x3e134c){const _0x1218f5=a52_0x3689();return a52_0x1d44=function(_0x34c675,_0x246767){_0x34c675=_0x34c675-0x128;let _0x368959=_0x1218f5[_0x34c675];return _0x368959;},a52_0x1d44(_0x4732c7,_0x3e134c);}var __importDefault=this&&this[a52_0x8e0bdb(0x135)]||function(_0x568ac2){const _0x43450d=a52_0x8e0bdb;return _0x568ac2&&_0x568ac2[_0x43450d(0x13a)]?_0x568ac2:{'default':_0x568ac2};};Object[a52_0x8e0bdb(0x130)](exports,a52_0x8e0bdb(0x13a),{'value':!![]}),exports[a52_0x8e0bdb(0x142)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),azure_api_service_1=require(a52_0x8e0bdb(0x128)),typedi_1=__importDefault(require(a52_0x8e0bdb(0x141))),git_branch_service_1=require('./git-branch.service');class AzureBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x16f491){const _0x8e3caf=a52_0x8e0bdb;super(_0x16f491),this[_0x8e3caf(0x12b)]=this[_0x8e3caf(0x13d)]();}['createRequest'](){const _0x30c01a=a52_0x8e0bdb,_0x4cde66=typedi_1['default'][_0x30c01a(0x13b)](azure_api_service_1[_0x30c01a(0x136)]);return _0x4cde66['createRequest'](this[_0x30c01a(0x146)][_0x30c01a(0x137)]);}async[a52_0x8e0bdb(0x12c)](_0x1fb65e){const _0x4cd0df=a52_0x8e0bdb;try{await this[_0x4cd0df(0x133)](_0x1fb65e),await this[_0x4cd0df(0x12b)]['post'](_0x4cd0df(0x149),[{'name':'refs/heads/'+_0x1fb65e,'newObjectId':'0000000000000000000000000000000000000000','oldObjectId':_0x4cd0df(0x147)}]);}catch(_0xb833fd){throw new bad_request_error_1[(_0x4cd0df(0x12e))](_0xb833fd);}}}exports['AzureBranchService']=AzureBranchService;