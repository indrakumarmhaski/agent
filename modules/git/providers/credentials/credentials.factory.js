const a202_0x4e3cea=a202_0x4926;(function(_0x183922,_0x502753){const _0x3be879=a202_0x4926,_0x110952=_0x183922();while(!![]){try{const _0x837dea=parseInt(_0x3be879(0x185))/0x1+parseInt(_0x3be879(0x193))/0x2+-parseInt(_0x3be879(0x181))/0x3*(-parseInt(_0x3be879(0x1a5))/0x4)+-parseInt(_0x3be879(0x19a))/0x5*(-parseInt(_0x3be879(0x182))/0x6)+-parseInt(_0x3be879(0x18b))/0x7*(parseInt(_0x3be879(0x177))/0x8)+parseInt(_0x3be879(0x19c))/0x9+-parseInt(_0x3be879(0x17e))/0xa;if(_0x837dea===_0x502753)break;else _0x110952['push'](_0x110952['shift']());}catch(_0x40e553){_0x110952['push'](_0x110952['shift']());}}}(a202_0xcdf2,0x1d8d6));function a202_0xcdf2(){const _0x2aa3c9=['Bitbucket','BitbucketServer','Unknown\x20git\x20provider\x20\x27','./dto/gitlab-credentials.dto','GithubServerCredentialsDto','GithubServer','__esModule','UnprocessableEntityError','844IVkJeN','1744984TTBJXs','toString','(((.+)+)+)+$','validate','GitlabServerCredentialsDto','length','constructor','2927300yjOthU','../../../../core/errors/unprocessable-entity.error','./dto/gitlab-server-credentials.dto','1767UilmcN','48JYCQiJ','search','AzureServerCredentialsDto','137792SCAEWI','class-validator','./dto/bitbucket-credentials.dto','./dto/github-server-credentials.dto','envVariables','./dto/github-credentials.dto','7AcokvW','./dto/azure-server-credentials.dto','../types/git-provider','Github','BitbucketServerCredentialsDto','CredentialsFactory','gitProvider','Gitlab','29022ZnpESC','createFromConnection','AzureServer','GitProvider','defineProperty','GitlabCredentialsDto','BitbucketCredentialsDto','81015NVmmnT','GithubCredentialsDto','2031237gqpORq'];a202_0xcdf2=function(){return _0x2aa3c9;};return a202_0xcdf2();}function a202_0x4926(_0x1cf95f,_0x198aee){const _0x403f31=a202_0xcdf2();return a202_0x4926=function(_0x4a3724,_0x55029b){_0x4a3724=_0x4a3724-0x177;let _0xcdf29d=_0x403f31[_0x4a3724];return _0xcdf29d;},a202_0x4926(_0x1cf95f,_0x198aee);}const a202_0x55029b=(function(){let _0x5e075a=!![];return function(_0x348632,_0x2d876a){const _0x314288=_0x5e075a?function(){if(_0x2d876a){const _0x9ede58=_0x2d876a['apply'](_0x348632,arguments);return _0x2d876a=null,_0x9ede58;}}:function(){};return _0x5e075a=![],_0x314288;};}()),a202_0x4a3724=a202_0x55029b(this,function(){const _0x472af6=a202_0x4926;return a202_0x4a3724[_0x472af6(0x178)]()['search'](_0x472af6(0x179))[_0x472af6(0x178)]()[_0x472af6(0x17d)](a202_0x4a3724)[_0x472af6(0x183)](_0x472af6(0x179));});a202_0x4a3724();'use strict';Object[a202_0x4e3cea(0x197)](exports,a202_0x4e3cea(0x1a3),{'value':!![]}),exports[a202_0x4e3cea(0x190)]=void 0x0;const git_provider_1=require(a202_0x4e3cea(0x18d)),azure_credentials_dto_1=require('./dto/azure-credentials.dto'),azure_server_credentials_dto_1=require(a202_0x4e3cea(0x18c)),bitbucket_credentials_dto_1=require(a202_0x4e3cea(0x187)),bitbucket_server_credentials_dto_1=require('./dto/bitbucket-server-credentials.dto'),github_credentials_dto_1=require(a202_0x4e3cea(0x18a)),github_server_credentials_dto_1=require(a202_0x4e3cea(0x188)),gitlab_credentials_dto_1=require(a202_0x4e3cea(0x1a0)),gitlab_server_credentials_dto_1=require(a202_0x4e3cea(0x180)),class_validator_1=require(a202_0x4e3cea(0x186)),unprocessable_entity_error_1=require(a202_0x4e3cea(0x17f)),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a202_0x4e3cea(0x196)]['Azure']]:azure_credentials_dto_1['AzureCredentialsDto'],[git_provider_1['GitProvider'][a202_0x4e3cea(0x195)]]:azure_server_credentials_dto_1[a202_0x4e3cea(0x184)],[git_provider_1[a202_0x4e3cea(0x196)][a202_0x4e3cea(0x19d)]]:bitbucket_credentials_dto_1[a202_0x4e3cea(0x199)],[git_provider_1[a202_0x4e3cea(0x196)][a202_0x4e3cea(0x19e)]]:bitbucket_server_credentials_dto_1[a202_0x4e3cea(0x18f)],[git_provider_1['GitProvider'][a202_0x4e3cea(0x18e)]]:github_credentials_dto_1[a202_0x4e3cea(0x19b)],[git_provider_1[a202_0x4e3cea(0x196)][a202_0x4e3cea(0x1a2)]]:github_server_credentials_dto_1[a202_0x4e3cea(0x1a1)],[git_provider_1[a202_0x4e3cea(0x196)][a202_0x4e3cea(0x192)]]:gitlab_credentials_dto_1[a202_0x4e3cea(0x198)],[git_provider_1[a202_0x4e3cea(0x196)]['GitlabServer']]:gitlab_server_credentials_dto_1[a202_0x4e3cea(0x17b)]};class CredentialsFactory{static async[a202_0x4e3cea(0x194)](_0x6456ec){const _0x4c3fb1=a202_0x4e3cea;if(!(_0x6456ec['gitProvider']in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x4c3fb1(0x19f)+_0x6456ec[_0x4c3fb1(0x191)]+'\x27');const _0x281211=PROVIDER_CREDENTIALS_MAP[_0x6456ec['gitProvider']],_0x37c6fb=_0x281211['fromConnectionEnvVariables'](_0x6456ec[_0x4c3fb1(0x189)]),_0x5e2ae7=await(0x0,class_validator_1[_0x4c3fb1(0x17a)])(_0x37c6fb);if(_0x5e2ae7[_0x4c3fb1(0x17c)])throw new unprocessable_entity_error_1[(_0x4c3fb1(0x1a4))](_0x5e2ae7);return _0x37c6fb;}}exports[a202_0x4e3cea(0x190)]=CredentialsFactory;