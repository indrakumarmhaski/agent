const a320_0x51b810=a320_0x1a32;(function(_0x5a03b6,_0x5a1ced){const _0x207d3e=a320_0x1a32,_0x2a87d5=_0x5a03b6();while(!![]){try{const _0x58f50c=-parseInt(_0x207d3e(0x194))/0x1+-parseInt(_0x207d3e(0x1a7))/0x2*(-parseInt(_0x207d3e(0x193))/0x3)+parseInt(_0x207d3e(0x1ac))/0x4*(parseInt(_0x207d3e(0x18c))/0x5)+-parseInt(_0x207d3e(0x1aa))/0x6+parseInt(_0x207d3e(0x197))/0x7+parseInt(_0x207d3e(0x1a1))/0x8+-parseInt(_0x207d3e(0x198))/0x9;if(_0x58f50c===_0x5a1ced)break;else _0x2a87d5['push'](_0x2a87d5['shift']());}catch(_0x4c1edd){_0x2a87d5['push'](_0x2a87d5['shift']());}}}(a320_0xa5c4,0xa7f2f));const a320_0x4b6e9f=(function(){let _0x3a960c=!![];return function(_0x31a7f1,_0x25ec66){const _0x31bc28=_0x3a960c?function(){const _0x2aba05=a320_0x1a32;if(_0x25ec66){const _0x9fea6=_0x25ec66[_0x2aba05(0x187)](_0x31a7f1,arguments);return _0x25ec66=null,_0x9fea6;}}:function(){};return _0x3a960c=![],_0x31bc28;};}()),a320_0xc2c088=a320_0x4b6e9f(this,function(){const _0x5e630b=a320_0x1a32;return a320_0xc2c088[_0x5e630b(0x192)]()[_0x5e630b(0x188)](_0x5e630b(0x1a0))['toString']()[_0x5e630b(0x18a)](a320_0xc2c088)[_0x5e630b(0x188)](_0x5e630b(0x1a0));});a320_0xc2c088();'use strict';function a320_0x1a32(_0x429278,_0x456a9f){const _0x3a00e5=a320_0xa5c4();return a320_0x1a32=function(_0xc2c088,_0x4b6e9f){_0xc2c088=_0xc2c088-0x187;let _0xa5c48e=_0x3a00e5[_0xc2c088];return _0xa5c48e;},a320_0x1a32(_0x429278,_0x456a9f);}Object[a320_0x51b810(0x18b)](exports,'__esModule',{'value':!![]});function a320_0xa5c4(){const _0x38bf76=['execute','\x0a{{ses:openTracker}}','error','toString','9jlCVBq','425126DSpVbU','sendMail','../../../configs/smtp.configs','8235703uVSxmB','13524795ShUMJx','createTransport','port','messageSubject','_emails','Sending\x20email\x20notifications\x20to:\x20','host','SMTPConfigs','(((.+)+)+)+$','4186296qoCwQb','Email\x20notifications\x20is\x20not\x20configured.','_logger','log','messageHTML','default','91378kUBgtT','message','../../../core','2345850XubVkY','catch','4sQHEzx','secure','authType','apply','search','authPassword','constructor','defineProperty','5849460SQIjxB','isConfigured','Send\x20Notification\x20Error:\x20'];a320_0xa5c4=function(){return _0x38bf76;};return a320_0xa5c4();}const nodemailer_1=require('nodemailer'),smtp_configs_1=require(a320_0x51b810(0x196)),core_1=require(a320_0x51b810(0x1a9));class BaseNotification{constructor({emails:_0x13d521,loggerName:_0xdb50e0}){const _0x3328cd=a320_0x51b810;this[_0x3328cd(0x1a3)]=new core_1['Logger'](_0xdb50e0),this[_0x3328cd(0x19c)]=_0x13d521;}get[a320_0x51b810(0x1a5)](){const _0x174f9f=a320_0x51b810;let _0x1f247f=this['messageBody'];return smtp_configs_1['SMTPConfigs']['isTrackOpenings']&&(_0x1f247f+=_0x174f9f(0x190)),_0x1f247f;}async[a320_0x51b810(0x18f)](){const _0x27e28c=a320_0x51b810;if(!smtp_configs_1[_0x27e28c(0x19f)][_0x27e28c(0x18d)]){this[_0x27e28c(0x1a3)][_0x27e28c(0x1a4)](_0x27e28c(0x1a2));return;}const _0x25ca12=(0x0,nodemailer_1[_0x27e28c(0x199)])({'host':smtp_configs_1[_0x27e28c(0x19f)][_0x27e28c(0x19e)],'port':smtp_configs_1['SMTPConfigs'][_0x27e28c(0x19a)],'secure':smtp_configs_1[_0x27e28c(0x19f)][_0x27e28c(0x1ad)],'auth':{'user':smtp_configs_1[_0x27e28c(0x19f)]['authUser'],'pass':smtp_configs_1[_0x27e28c(0x19f)][_0x27e28c(0x189)],'type':smtp_configs_1[_0x27e28c(0x19f)][_0x27e28c(0x1ae)]}}),_0x183a0b={'subject':this[_0x27e28c(0x19b)],'html':this[_0x27e28c(0x1a5)]};this['_logger'][_0x27e28c(0x1a4)](_0x27e28c(0x19d)+this[_0x27e28c(0x19c)]);for(const _0x1fe82f of this[_0x27e28c(0x19c)]){await _0x25ca12[_0x27e28c(0x195)]({'to':_0x1fe82f,'from':smtp_configs_1['SMTPConfigs']['from'],..._0x183a0b})[_0x27e28c(0x1ab)](_0x481684=>{const _0x59a854=_0x27e28c;this[_0x59a854(0x1a3)][_0x59a854(0x191)](_0x59a854(0x18e)+_0x481684[_0x59a854(0x1a8)]+'\x20'+_0x481684['stack']);});}}}exports[a320_0x51b810(0x1a6)]=BaseNotification;