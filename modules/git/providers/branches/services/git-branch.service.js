const a171_0x3ede0d=a171_0x1766;(function(_0x3706fb,_0x29df64){const _0x1d6de1=a171_0x1766,_0x68df87=_0x3706fb();while(!![]){try{const _0x45a611=-parseInt(_0x1d6de1(0x1b4))/0x1+-parseInt(_0x1d6de1(0x1ce))/0x2+parseInt(_0x1d6de1(0x1cc))/0x3+-parseInt(_0x1d6de1(0x1c2))/0x4+-parseInt(_0x1d6de1(0x1ba))/0x5+parseInt(_0x1d6de1(0x1b2))/0x6*(-parseInt(_0x1d6de1(0x1b6))/0x7)+parseInt(_0x1d6de1(0x1bd))/0x8;if(_0x45a611===_0x29df64)break;else _0x68df87['push'](_0x68df87['shift']());}catch(_0x4a9570){_0x68df87['push'](_0x68df87['shift']());}}}(a171_0x4c57,0xc17fb));const a171_0x3d9006=(function(){let _0x43d075=!![];return function(_0x55fb24,_0x5a60b6){const _0x5b107e=_0x43d075?function(){const _0x88f6bb=a171_0x1766;if(_0x5a60b6){const _0x4de7b7=_0x5a60b6[_0x88f6bb(0x1bf)](_0x55fb24,arguments);return _0x5a60b6=null,_0x4de7b7;}}:function(){};return _0x43d075=![],_0x5b107e;};}()),a171_0x5c519d=a171_0x3d9006(this,function(){const _0x1f98ac=a171_0x1766;return a171_0x5c519d[_0x1f98ac(0x1bb)]()[_0x1f98ac(0x1b9)](_0x1f98ac(0x1c5))[_0x1f98ac(0x1bb)]()[_0x1f98ac(0x1bc)](a171_0x5c519d)[_0x1f98ac(0x1b9)]('(((.+)+)+)+$');});a171_0x5c519d();'use strict';function a171_0x4c57(){const _0x28a74a=['Branch\x20not\x20found','701525ULzcpg','NotFoundError','311297xNpqfg','repository','Git','search','5317985lOnTCR','toString','constructor','41008200ZzNogG','credentials','apply','defineProperty','find','4628652ZKwGWg','create','createEmptyBranch','(((.+)+)+)+$','../../../internal/git.internal','GitBranchService','../../../../../core/errors/bad-request.error','BadRequestError','../../../../../core/errors/not-found.error','getRepositoryBranches','2376732fmakxY','getOne','2805870wsfIqQ','108MaSEbF'];a171_0x4c57=function(){return _0x28a74a;};return a171_0x4c57();}Object[a171_0x3ede0d(0x1c0)](exports,'__esModule',{'value':!![]}),exports[a171_0x3ede0d(0x1c7)]=void 0x0;const bad_request_error_1=require(a171_0x3ede0d(0x1c8)),not_found_error_1=require(a171_0x3ede0d(0x1ca)),git_internal_1=require(a171_0x3ede0d(0x1c6));function a171_0x1766(_0x57696f,_0x270e7d){const _0x17bbf7=a171_0x4c57();return a171_0x1766=function(_0x5c519d,_0x3d9006){_0x5c519d=_0x5c519d-0x1b2;let _0x4c575f=_0x17bbf7[_0x5c519d];return _0x4c575f;},a171_0x1766(_0x57696f,_0x270e7d);}class GitBranchService{constructor(_0x4b3d50,_0x2ccf13){const _0x575f25=a171_0x3ede0d;this[_0x575f25(0x1b7)]=_0x4b3d50,this[_0x575f25(0x1be)]=_0x2ccf13;}async[a171_0x3ede0d(0x1c3)](_0x3ca581){const _0x3955d7=a171_0x3ede0d;try{return await git_internal_1[_0x3955d7(0x1b8)][_0x3955d7(0x1c4)](this[_0x3955d7(0x1b7)],_0x3ca581['name'],'init\x20branch',this['credentials']),this[_0x3955d7(0x1cd)](_0x3ca581['name']);}catch(_0xcec03){throw new bad_request_error_1[(_0x3955d7(0x1c9))](_0xcec03);}}async[a171_0x3ede0d(0x1cd)](_0xec33ab){const _0x2cf2fb=a171_0x3ede0d;try{const _0x9b57c4=await this['getAll'](),_0x3cf89f=_0x9b57c4[_0x2cf2fb(0x1c1)](_0x14fde7=>_0x14fde7['name']===_0xec33ab);if(!_0x3cf89f)throw new Error(_0x2cf2fb(0x1b3));return _0x3cf89f;}catch(_0x2606e1){throw new not_found_error_1[(_0x2cf2fb(0x1b5))](_0x2606e1);}}async['getAll'](){const _0x59b6c9=a171_0x3ede0d;try{const _0x18afa5=await git_internal_1['Git'][_0x59b6c9(0x1cb)](this['repository'],this[_0x59b6c9(0x1be)]);return _0x18afa5;}catch(_0x32fa00){throw new bad_request_error_1[(_0x59b6c9(0x1c9))](_0x32fa00);}}}exports['GitBranchService']=GitBranchService;