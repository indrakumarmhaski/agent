const a56_0xa04099=a56_0x56e7;(function(_0x434262,_0x2abfc0){const _0x2b481e=a56_0x56e7,_0x41e282=_0x434262();while(!![]){try{const _0x247406=parseInt(_0x2b481e(0x185))/0x1*(-parseInt(_0x2b481e(0x17f))/0x2)+-parseInt(_0x2b481e(0x18b))/0x3+-parseInt(_0x2b481e(0x179))/0x4+parseInt(_0x2b481e(0x176))/0x5+parseInt(_0x2b481e(0x17b))/0x6+parseInt(_0x2b481e(0x17c))/0x7*(-parseInt(_0x2b481e(0x190))/0x8)+-parseInt(_0x2b481e(0x18c))/0x9*(-parseInt(_0x2b481e(0x180))/0xa);if(_0x247406===_0x2abfc0)break;else _0x41e282['push'](_0x41e282['shift']());}catch(_0x425d41){_0x41e282['push'](_0x41e282['shift']());}}}(a56_0x51ee,0x9756c));const a56_0x3f4562=(function(){let _0xdd1852=!![];return function(_0x3b6cb7,_0x3a7960){const _0x1f7f43=_0xdd1852?function(){const _0x292ab3=a56_0x56e7;if(_0x3a7960){const _0x15e6a1=_0x3a7960[_0x292ab3(0x188)](_0x3b6cb7,arguments);return _0x3a7960=null,_0x15e6a1;}}:function(){};return _0xdd1852=![],_0x1f7f43;};}()),a56_0x4bbeef=a56_0x3f4562(this,function(){const _0x585684=a56_0x56e7;return a56_0x4bbeef[_0x585684(0x17a)]()[_0x585684(0x182)](_0x585684(0x186))[_0x585684(0x17a)]()[_0x585684(0x177)](a56_0x4bbeef)[_0x585684(0x182)]('(((.+)+)+)+$');});a56_0x4bbeef();function a56_0x56e7(_0x5df1d7,_0x25ad12){const _0xfc1b83=a56_0x51ee();return a56_0x56e7=function(_0x4bbeef,_0x3f4562){_0x4bbeef=_0x4bbeef-0x174;let _0x51eecd=_0xfc1b83[_0x4bbeef];return _0x51eecd;},a56_0x56e7(_0x5df1d7,_0x25ad12);}'use strict';var __importDefault=this&&this[a56_0xa04099(0x175)]||function(_0x491a46){const _0x410391=a56_0xa04099;return _0x491a46&&_0x491a46[_0x410391(0x187)]?_0x491a46:{'default':_0x491a46};};function a56_0x51ee(){const _0x24fb59=['toString','3260628zRIvcx','2914583wxLWLl','request','apiUrl','14axWIcL','16536570JDyhtX','defineProperty','search','GithubBranchService','createRequest','117077FhwsWB','(((.+)+)+)+$','__esModule','apply','GitBranchService','get','583254TwYBNK','9IryjDW','./git-branch.service','GithubApiService','../../../core/errors/bad-request.error','8toQeAJ','typedi','__importDefault','4569270kOhEuE','constructor','default','4242956NtZnIk'];a56_0x51ee=function(){return _0x24fb59;};return a56_0x51ee();}Object[a56_0xa04099(0x181)](exports,a56_0xa04099(0x187),{'value':!![]}),exports['GithubBranchService']=void 0x0;const bad_request_error_1=require(a56_0xa04099(0x18f)),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a56_0xa04099(0x174))),git_branch_service_1=require(a56_0xa04099(0x18d));class GithubBranchService extends git_branch_service_1[a56_0xa04099(0x189)]{constructor(_0x289745){const _0x48e572=a56_0xa04099;super(_0x289745),this[_0x48e572(0x17d)]=this[_0x48e572(0x184)]();}[a56_0xa04099(0x184)](){const _0x39ed62=a56_0xa04099,_0x200713=typedi_1[_0x39ed62(0x178)][_0x39ed62(0x18a)](github_api_service_1[_0x39ed62(0x18e)]);return _0x200713['createRequest'](this['repository'][_0x39ed62(0x17e)]);}async['delete'](_0x3138cf){try{await this['request']['delete']('git/refs/heads/'+_0x3138cf);}catch(_0xfdfdc0){throw new bad_request_error_1['BadRequestError'](_0xfdfdc0);}}}exports[a56_0xa04099(0x183)]=GithubBranchService;