const a115_0x3126ba=a115_0x2605;(function(_0x283508,_0x12ebb3){const _0x1ce9b3=a115_0x2605,_0x4da2e6=_0x283508();while(!![]){try{const _0x2c97c3=-parseInt(_0x1ce9b3(0x111))/0x1+parseInt(_0x1ce9b3(0x110))/0x2+parseInt(_0x1ce9b3(0xfc))/0x3*(-parseInt(_0x1ce9b3(0xf9))/0x4)+-parseInt(_0x1ce9b3(0xff))/0x5*(parseInt(_0x1ce9b3(0x100))/0x6)+-parseInt(_0x1ce9b3(0x115))/0x7+-parseInt(_0x1ce9b3(0x10a))/0x8+parseInt(_0x1ce9b3(0x10b))/0x9*(parseInt(_0x1ce9b3(0x113))/0xa);if(_0x2c97c3===_0x12ebb3)break;else _0x4da2e6['push'](_0x4da2e6['shift']());}catch(_0x92f047){_0x4da2e6['push'](_0x4da2e6['shift']());}}}(a115_0x2142,0x7f5a8));const a115_0xc20f1f=(function(){let _0x3ae94a=!![];return function(_0x13a536,_0xc3db91){const _0x49ad14=_0x3ae94a?function(){const _0x41d104=a115_0x2605;if(_0xc3db91){const _0x46c6c0=_0xc3db91[_0x41d104(0x101)](_0x13a536,arguments);return _0xc3db91=null,_0x46c6c0;}}:function(){};return _0x3ae94a=![],_0x49ad14;};}()),a115_0x21ec9c=a115_0xc20f1f(this,function(){const _0x3ac766=a115_0x2605;return a115_0x21ec9c[_0x3ac766(0xf4)]()[_0x3ac766(0x10c)](_0x3ac766(0x106))[_0x3ac766(0xf4)]()['constructor'](a115_0x21ec9c)[_0x3ac766(0x10c)](_0x3ac766(0x106));});a115_0x21ec9c();function a115_0x2605(_0x251f5e,_0x1d6049){const _0x1daa52=a115_0x2142();return a115_0x2605=function(_0x21ec9c,_0xc20f1f){_0x21ec9c=_0x21ec9c-0xf1;let _0x2142e7=_0x1daa52[_0x21ec9c];return _0x2142e7;},a115_0x2605(_0x251f5e,_0x1d6049);}'use strict';Object[a115_0x3126ba(0xf6)](exports,a115_0x3126ba(0x102),{'value':!![]}),exports['BranchesFactory']=void 0x0;function a115_0x2142(){const _0x27542d=['AzureServer','Bitbucket','713632nhGktU','9ggRzSk','search','../types/git-provider','GitlabBranchService','./services/bitbucket-server-branch.service','101654GbpefV','364861hcfWOA','BitbucketServerBranchService','27905980rdYmbV','../providers.tokens','5793753ZLMnTX','GithubBranchService','provider','get','GithubServer','toString','BranchesFactory','defineProperty','AzureBranchService','GitProvider','20076NthrJU','Azure','./services/azure-branch.service','306LEhyTB','Github','BitbucketBranchService','10915IJsjZh','1446XMlibL','apply','__esModule','./services/github-branch.service','container','./services/bitbucket-branch.service','(((.+)+)+)+$','BitbucketServer'];a115_0x2142=function(){return _0x27542d;};return a115_0x2142();}const git_provider_1=require(a115_0x3126ba(0x10d)),azure_branch_service_1=require(a115_0x3126ba(0xfb)),bitbucket_branch_service_1=require(a115_0x3126ba(0x105)),bitbucket_server_branch_service_1=require(a115_0x3126ba(0x10f)),github_branch_service_1=require(a115_0x3126ba(0x103)),gitlab_branch_service_1=require('./services/gitlab-branch.service'),providers_tokens_1=require(a115_0x3126ba(0x114)),PROVIDER_BRANCHES_MAP={[git_provider_1['GitProvider'][a115_0x3126ba(0xfa)]]:azure_branch_service_1[a115_0x3126ba(0xf7)],[git_provider_1['GitProvider'][a115_0x3126ba(0x108)]]:azure_branch_service_1[a115_0x3126ba(0xf7)],[git_provider_1['GitProvider'][a115_0x3126ba(0x109)]]:bitbucket_branch_service_1[a115_0x3126ba(0xfe)],[git_provider_1[a115_0x3126ba(0xf8)][a115_0x3126ba(0x107)]]:bitbucket_server_branch_service_1[a115_0x3126ba(0x112)],[git_provider_1['GitProvider'][a115_0x3126ba(0xfd)]]:github_branch_service_1[a115_0x3126ba(0x116)],[git_provider_1[a115_0x3126ba(0xf8)][a115_0x3126ba(0xf3)]]:github_branch_service_1[a115_0x3126ba(0x116)],[git_provider_1[a115_0x3126ba(0xf8)]['Gitlab']]:gitlab_branch_service_1[a115_0x3126ba(0x10e)],[git_provider_1[a115_0x3126ba(0xf8)]['GitlabServer']]:gitlab_branch_service_1[a115_0x3126ba(0x10e)]};class BranchesFactory{static async['createFromContext'](_0x2cf73c){const _0x5ba887=a115_0x3126ba;return _0x2cf73c[_0x5ba887(0x104)]['get'](PROVIDER_BRANCHES_MAP[_0x2cf73c[_0x5ba887(0x104)][_0x5ba887(0xf2)](providers_tokens_1['Tokens'][_0x5ba887(0xf1)])]);}}exports[a115_0x3126ba(0xf5)]=BranchesFactory;