const a127_0x128fe2=a127_0x53c5;(function(_0x17f5a3,_0x37d94f){const _0x425889=a127_0x53c5,_0x5d2e1a=_0x17f5a3();while(!![]){try{const _0x50fc82=parseInt(_0x425889(0x145))/0x1*(parseInt(_0x425889(0x153))/0x2)+-parseInt(_0x425889(0x156))/0x3+parseInt(_0x425889(0x15b))/0x4*(parseInt(_0x425889(0x14f))/0x5)+parseInt(_0x425889(0x14e))/0x6*(-parseInt(_0x425889(0x13b))/0x7)+-parseInt(_0x425889(0x154))/0x8*(parseInt(_0x425889(0x14d))/0x9)+-parseInt(_0x425889(0x13f))/0xa+-parseInt(_0x425889(0x147))/0xb*(-parseInt(_0x425889(0x14b))/0xc);if(_0x50fc82===_0x37d94f)break;else _0x5d2e1a['push'](_0x5d2e1a['shift']());}catch(_0x2b4484){_0x5d2e1a['push'](_0x5d2e1a['shift']());}}}(a127_0x49fb,0x81bde));const a127_0x536873=(function(){let _0x3f0b73=!![];return function(_0x7b123,_0x5119e1){const _0x162a97=_0x3f0b73?function(){const _0x36be3a=a127_0x53c5;if(_0x5119e1){const _0x1c1208=_0x5119e1[_0x36be3a(0x13d)](_0x7b123,arguments);return _0x5119e1=null,_0x1c1208;}}:function(){};return _0x3f0b73=![],_0x162a97;};}()),a127_0x50ce14=a127_0x536873(this,function(){const _0x4f6e79=a127_0x53c5;return a127_0x50ce14[_0x4f6e79(0x148)]()[_0x4f6e79(0x150)]('(((.+)+)+)+$')[_0x4f6e79(0x148)]()[_0x4f6e79(0x14c)](a127_0x50ce14)[_0x4f6e79(0x150)]('(((.+)+)+)+$');});function a127_0x53c5(_0xf6e7fd,_0x1447da){const _0x59f441=a127_0x49fb();return a127_0x53c5=function(_0x50ce14,_0x536873){_0x50ce14=_0x50ce14-0x13b;let _0x49fb9d=_0x59f441[_0x50ce14];return _0x49fb9d;},a127_0x53c5(_0xf6e7fd,_0x1447da);}a127_0x50ce14();function a127_0x49fb(){const _0x4b9f55=['extractMessageFromCommitDescribe','extractAuthorFromCommitDescribe','2XrNcQu','defineProperty','134860oVljES','toString','map','removed','1956XkjfAQ','constructor','20511ivSGaG','10482CaSWfo','5pOtIyo','search','pull\x20request','Warning!','242152ZKebnk','184Wnahzw','warning:','2134293JKJjfS','extractEmailFromCommitDescribe','merge','extractChangesFromCommitDescribe','added','1754028FGTOYk','modified','__esModule','3773HTpZyh','filter','apply','parseGitError','4421360jsZYtg','match','includes','push'];a127_0x49fb=function(){return _0x4b9f55;};return a127_0x49fb();}'use strict';Object[a127_0x128fe2(0x146)](exports,a127_0x128fe2(0x15d),{'value':!![]}),exports['parseGitError']=exports[a127_0x128fe2(0x159)]=exports[a127_0x128fe2(0x143)]=exports['extractEmailFromCommitDescribe']=exports[a127_0x128fe2(0x144)]=void 0x0;const internal_server_error_1=require('../../../core/errors/internal-server.error'),GIT_AUTHOR_REGEXP=/Author\:\s(.+)$/m,GIT_EMAIL_REGEXP=/Email\:\s(.+)$/m,GIT_MESSAGE_REGEXP=/Message\:\s(.+)$/m,GIT_CHANGE_REGEXP=/^(D|M|A)\s+([^\n]+)/;function extractAuthorFromCommitDescribe(_0xbf562d){const _0x3f6a95=a127_0x128fe2,_0x289f4a=_0xbf562d[_0x3f6a95(0x140)](GIT_AUTHOR_REGEXP);if(!_0x289f4a)return'';return _0x289f4a[0x1];}exports['extractAuthorFromCommitDescribe']=extractAuthorFromCommitDescribe;function extractEmailFromCommitDescribe(_0x593dd1){const _0x4dfb27=a127_0x128fe2,_0x2b6905=_0x593dd1[_0x4dfb27(0x140)](GIT_EMAIL_REGEXP);if(!_0x2b6905)return'';return _0x2b6905[0x1];}exports[a127_0x128fe2(0x157)]=extractEmailFromCommitDescribe;function extractMessageFromCommitDescribe(_0x2d6454){const _0x5c135c=a127_0x128fe2,_0x244ebb=_0x2d6454[_0x5c135c(0x140)](GIT_MESSAGE_REGEXP);if(!_0x244ebb)return'';return _0x244ebb[0x1];}exports['extractMessageFromCommitDescribe']=extractMessageFromCommitDescribe;function extractChangesFromCommitDescribe(_0xde86b3){const _0x249719=a127_0x128fe2,_0x33ac7c={'added':[],'modified':[],'removed':[]};return _0xde86b3['split']('\x0a')[_0x249719(0x149)](_0x4c1fb0=>_0x4c1fb0[_0x249719(0x140)](GIT_CHANGE_REGEXP))[_0x249719(0x13c)](_0x2a4b84=>!!_0x2a4b84)['forEach'](([,_0x233d7a,_0x102511])=>{const _0x489568=_0x249719;switch(_0x233d7a){case'A':_0x33ac7c[_0x489568(0x15a)][_0x489568(0x142)](_0x102511);break;case'M':_0x33ac7c[_0x489568(0x15c)]['push'](_0x102511);break;case'D':_0x33ac7c[_0x489568(0x14a)]['push'](_0x102511);break;}}),_0x33ac7c;}exports['extractChangesFromCommitDescribe']=extractChangesFromCommitDescribe;function parseGitError(_0x48d22e){const _0x31ff72=a127_0x128fe2,_0x214a58=_0x48d22e['message']||_0x48d22e;if(_0x214a58[_0x31ff72(0x141)](_0x31ff72(0x158))||_0x214a58['includes'](_0x31ff72(0x151))||_0x214a58['includes'](_0x31ff72(0x152))||_0x214a58[_0x31ff72(0x141)](_0x31ff72(0x155))||_0x214a58[_0x31ff72(0x141)]('Switched'))return _0x214a58;throw new internal_server_error_1['InternalServerError'](_0x48d22e);}exports[a127_0x128fe2(0x13e)]=parseGitError;