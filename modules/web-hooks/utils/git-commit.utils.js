const a196_0x2f7c85=a196_0x2529;(function(_0x7c5581,_0x3d4269){const _0x11e973=a196_0x2529,_0x575aac=_0x7c5581();while(!![]){try{const _0x71da3b=-parseInt(_0x11e973(0xc5))/0x1+parseInt(_0x11e973(0xb8))/0x2+parseInt(_0x11e973(0xb5))/0x3*(-parseInt(_0x11e973(0xad))/0x4)+-parseInt(_0x11e973(0xd3))/0x5*(parseInt(_0x11e973(0xb3))/0x6)+parseInt(_0x11e973(0xb9))/0x7+parseInt(_0x11e973(0xd5))/0x8+-parseInt(_0x11e973(0xa9))/0x9*(parseInt(_0x11e973(0xae))/0xa);if(_0x71da3b===_0x3d4269)break;else _0x575aac['push'](_0x575aac['shift']());}catch(_0x4fce45){_0x575aac['push'](_0x575aac['shift']());}}}(a196_0x4ef1,0x3dc61));const a196_0x1df8c4=(function(){let _0x5d31f1=!![];return function(_0x48bb5a,_0x2c8590){const _0xd61058=_0x5d31f1?function(){const _0x3c7111=a196_0x2529;if(_0x2c8590){const _0x4231f7=_0x2c8590[_0x3c7111(0xbf)](_0x48bb5a,arguments);return _0x2c8590=null,_0x4231f7;}}:function(){};return _0x5d31f1=![],_0xd61058;};}()),a196_0x16ad91=a196_0x1df8c4(this,function(){const _0x3491cb=a196_0x2529;return a196_0x16ad91['toString']()['search'](_0x3491cb(0xca))[_0x3491cb(0xb4)]()[_0x3491cb(0xc2)](a196_0x16ad91)[_0x3491cb(0xc8)](_0x3491cb(0xca));});a196_0x16ad91();'use strict';var __importDefault=this&&this[a196_0x2f7c85(0xcd)]||function(_0x53fbc8){return _0x53fbc8&&_0x53fbc8['__esModule']?_0x53fbc8:{'default':_0x53fbc8};};Object[a196_0x2f7c85(0xc3)](exports,a196_0x2f7c85(0xaf),{'value':!![]}),exports[a196_0x2f7c85(0xaa)]=exports[a196_0x2f7c85(0xac)]=exports['extractGitCommitDtoFromContext']=void 0x0;const constants_1=require(a196_0x2f7c85(0xd4)),errors_1=require(a196_0x2f7c85(0xa6)),bad_request_error_1=require(a196_0x2f7c85(0xa5)),git_commit_dto_1=require(a196_0x2f7c85(0xc6)),path_1=__importDefault(require('path'));function a196_0x4ef1(){const _0x41f479=['replace','114mBjsdZ','toString','3PowqGx','BadRequestError','GitCommitDto','876528xYluAE','2788247LKXDOf','extractGitCommitDtoFromContext','provider','github','default','map','apply','sep','extname','constructor','defineProperty','bitbucket','152286OxNhWk','../dto/git-commit.dto','fromBitbucket','search','azure','(((.+)+)+)+$','fromGitlab','gitlab','__importDefault','join','bitbucket-server','BUNDLED_FOLDERS_REGEXP','split','FORCE_APP_DEFAULT_DIR','42115Vyzoxz','../../../constants','2725512yUlGDE','gitlab-server','../../../core/errors/bad-request.error','../../../constants/errors','fromBitbucketServer','ERR_UNKNOWN_GIT_SERVICE','1467GchKjc','prepareGitChangedPaths','azure-server','isPathsEquals','9876GYosqU','37390qkGbov','__esModule','startsWith','substr'];a196_0x4ef1=function(){return _0x41f479;};return a196_0x4ef1();}function a196_0x2529(_0x3889c6,_0x398ac2){const _0x407692=a196_0x4ef1();return a196_0x2529=function(_0x16ad91,_0x1df8c4){_0x16ad91=_0x16ad91-0xa4;let _0x4ef1dd=_0x407692[_0x16ad91];return _0x4ef1dd;},a196_0x2529(_0x3889c6,_0x398ac2);}function extractGitCommitDtoFromContext(_0x459ec6,_0x5e0347){const _0x6a279c=a196_0x2f7c85;let _0x42205a;switch(_0x5e0347){case _0x6a279c(0xbc):case'github-server':_0x42205a=git_commit_dto_1[_0x6a279c(0xb7)]['fromGithub'](_0x459ec6);break;case _0x6a279c(0xc9):case _0x6a279c(0xab):_0x42205a=git_commit_dto_1[_0x6a279c(0xb7)]['fromAzure'](_0x459ec6);break;case _0x6a279c(0xc4):_0x42205a=git_commit_dto_1[_0x6a279c(0xb7)][_0x6a279c(0xc7)](_0x459ec6);break;case _0x6a279c(0xcf):_0x42205a=git_commit_dto_1[_0x6a279c(0xb7)][_0x6a279c(0xa7)](_0x459ec6);break;case _0x6a279c(0xcc):case _0x6a279c(0xa4):_0x42205a=git_commit_dto_1[_0x6a279c(0xb7)][_0x6a279c(0xcb)](_0x459ec6);break;default:throw new bad_request_error_1[(_0x6a279c(0xb6))](errors_1[_0x6a279c(0xa8)]);}return _0x42205a[_0x6a279c(0xbb)]=_0x5e0347,_0x42205a;}exports[a196_0x2f7c85(0xba)]=extractGitCommitDtoFromContext;function isPathsEquals(_0x5f3db4,_0x4affc3){const _0x55114d=a196_0x2f7c85;return _0x5f3db4['replace'](path_1[_0x55114d(0xbd)]['extname'](_0x5f3db4),'')===_0x4affc3[_0x55114d(0xb2)](path_1[_0x55114d(0xbd)][_0x55114d(0xc1)](_0x4affc3),'');}exports['isPathsEquals']=isPathsEquals;function prepareGitChangedPaths(_0x3e9f9c){const _0x5d3a02=a196_0x2f7c85;return[...new Set(_0x3e9f9c[_0x5d3a02(0xbe)](_0x267db2=>{const _0x7d2fd8=_0x5d3a02;if(_0x267db2[_0x7d2fd8(0xb0)](constants_1[_0x7d2fd8(0xd2)])){const _0x5d83c1=_0x267db2[_0x7d2fd8(0xb2)](constants_1['FORCE_APP_DEFAULT_DIR'],'')[_0x7d2fd8(0xb1)](0x1),[_0x3b6c45,_0x230cbd]=_0x5d83c1[_0x7d2fd8(0xd1)]('/');let _0x21379c=_0x230cbd;return path_1[_0x7d2fd8(0xbd)][_0x7d2fd8(0xc1)](_0x21379c)&&(_0x21379c=_0x21379c[_0x7d2fd8(0xb2)](path_1[_0x7d2fd8(0xbd)]['extname'](_0x21379c),'')),path_1[_0x7d2fd8(0xbd)][_0x7d2fd8(0xce)](_0x3b6c45,_0x21379c);}const _0x4c4575=path_1[_0x7d2fd8(0xbd)]['relative']('.',_0x267db2);if(constants_1[_0x7d2fd8(0xd0)]['test'](_0x4c4575)){const [_0x4c69b0,_0xabea02]=_0x4c4575[_0x7d2fd8(0xd1)](path_1['default'][_0x7d2fd8(0xc0)]),_0x209294=path_1['default'][_0x7d2fd8(0xce)](_0x4c69b0,_0xabea02);return _0x209294;}return _0x4c4575;}))][_0x5d3a02(0xbe)](_0x41349b=>_0x41349b[_0x5d3a02(0xd1)](path_1[_0x5d3a02(0xbd)][_0x5d3a02(0xc0)])[_0x5d3a02(0xce)](path_1[_0x5d3a02(0xbd)]['posix'][_0x5d3a02(0xc0)]));}exports[a196_0x2f7c85(0xaa)]=prepareGitChangedPaths;