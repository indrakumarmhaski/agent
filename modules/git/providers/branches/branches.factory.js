function a176_0x22e0(_0x1ba48f,_0x5d8106){const _0x20f8e1=a176_0x1985();return a176_0x22e0=function(_0x30c727,_0x511cb4){_0x30c727=_0x30c727-0x18c;let _0x1985c3=_0x20f8e1[_0x30c727];return _0x1985c3;},a176_0x22e0(_0x1ba48f,_0x5d8106);}const a176_0x261f7b=a176_0x22e0;(function(_0x436c8c,_0x2b6023){const _0x5122b7=a176_0x22e0,_0x1eee9d=_0x436c8c();while(!![]){try{const _0x438d6b=parseInt(_0x5122b7(0x1b0))/0x1*(-parseInt(_0x5122b7(0x1af))/0x2)+parseInt(_0x5122b7(0x19f))/0x3*(parseInt(_0x5122b7(0x1b3))/0x4)+-parseInt(_0x5122b7(0x1a7))/0x5*(parseInt(_0x5122b7(0x197))/0x6)+parseInt(_0x5122b7(0x18f))/0x7+-parseInt(_0x5122b7(0x19a))/0x8+-parseInt(_0x5122b7(0x18c))/0x9+-parseInt(_0x5122b7(0x1ab))/0xa*(-parseInt(_0x5122b7(0x1ae))/0xb);if(_0x438d6b===_0x2b6023)break;else _0x1eee9d['push'](_0x1eee9d['shift']());}catch(_0x5bff75){_0x1eee9d['push'](_0x1eee9d['shift']());}}}(a176_0x1985,0x59ab4));const a176_0x511cb4=(function(){let _0x4382a0=!![];return function(_0x2e63a5,_0x253b7b){const _0x468598=_0x4382a0?function(){const _0x3bc0fc=a176_0x22e0;if(_0x253b7b){const _0x175d89=_0x253b7b[_0x3bc0fc(0x1a8)](_0x2e63a5,arguments);return _0x253b7b=null,_0x175d89;}}:function(){};return _0x4382a0=![],_0x468598;};}()),a176_0x30c727=a176_0x511cb4(this,function(){const _0x1aa83e=a176_0x22e0;return a176_0x30c727[_0x1aa83e(0x1a4)]()[_0x1aa83e(0x1a3)]('(((.+)+)+)+$')[_0x1aa83e(0x1a4)]()[_0x1aa83e(0x1ac)](a176_0x30c727)[_0x1aa83e(0x1a3)](_0x1aa83e(0x1a1));});a176_0x30c727();'use strict';Object['defineProperty'](exports,a176_0x261f7b(0x193),{'value':!![]}),exports[a176_0x261f7b(0x19e)]=void 0x0;const git_provider_1=require(a176_0x261f7b(0x198)),azure_branch_service_1=require(a176_0x261f7b(0x18d)),bitbucket_branch_service_1=require('./services/bitbucket-branch.service'),bitbucket_server_branch_service_1=require(a176_0x261f7b(0x192)),github_branch_service_1=require(a176_0x261f7b(0x1ad)),gitlab_branch_service_1=require('./services/gitlab-branch.service'),providers_tokens_1=require(a176_0x261f7b(0x190)),PROVIDER_BRANCHES_MAP={[git_provider_1[a176_0x261f7b(0x1a0)][a176_0x261f7b(0x1a5)]]:azure_branch_service_1[a176_0x261f7b(0x196)],[git_provider_1['GitProvider'][a176_0x261f7b(0x1b2)]]:azure_branch_service_1[a176_0x261f7b(0x196)],[git_provider_1[a176_0x261f7b(0x1a0)][a176_0x261f7b(0x19c)]]:bitbucket_branch_service_1['BitbucketBranchService'],[git_provider_1['GitProvider'][a176_0x261f7b(0x199)]]:bitbucket_server_branch_service_1[a176_0x261f7b(0x1b1)],[git_provider_1['GitProvider'][a176_0x261f7b(0x1a6)]]:github_branch_service_1['GithubBranchService'],[git_provider_1[a176_0x261f7b(0x1a0)][a176_0x261f7b(0x1a2)]]:github_branch_service_1[a176_0x261f7b(0x18e)],[git_provider_1['GitProvider'][a176_0x261f7b(0x1a9)]]:gitlab_branch_service_1[a176_0x261f7b(0x1aa)],[git_provider_1[a176_0x261f7b(0x1a0)][a176_0x261f7b(0x19d)]]:gitlab_branch_service_1[a176_0x261f7b(0x1aa)]};function a176_0x1985(){const _0x3b1981=['91257nbKAol','GitProvider','(((.+)+)+)+$','GithubServer','search','toString','Azure','Github','50025BiSuqC','apply','Gitlab','GitlabBranchService','2590fdgqMy','constructor','./services/github-branch.service','21703qhmnIN','89678DcRBDI','4vCJyuB','BitbucketServerBranchService','AzureServer','4EhQLul','3364848XdxXVS','./services/azure-branch.service','GithubBranchService','3494043czOvVk','../providers.tokens','container','./services/bitbucket-server-branch.service','__esModule','get','provider','AzureBranchService','18FEaEaF','../types/git-provider','BitbucketServer','720384PAEkjz','createFromContext','Bitbucket','GitlabServer','BranchesFactory'];a176_0x1985=function(){return _0x3b1981;};return a176_0x1985();}class BranchesFactory{static async[a176_0x261f7b(0x19b)](_0xa21a9c){const _0x3f53f0=a176_0x261f7b;return _0xa21a9c[_0x3f53f0(0x191)][_0x3f53f0(0x194)](PROVIDER_BRANCHES_MAP[_0xa21a9c[_0x3f53f0(0x191)][_0x3f53f0(0x194)](providers_tokens_1['Tokens'][_0x3f53f0(0x195)])]);}}exports[a176_0x261f7b(0x19e)]=BranchesFactory;