const a68_0x5018a5=a68_0x4e95;(function(_0x4a0b89,_0x1aea94){const _0x45613f=a68_0x4e95,_0x206feb=_0x4a0b89();while(!![]){try{const _0xd58327=-parseInt(_0x45613f(0x1e1))/0x1+parseInt(_0x45613f(0x1c7))/0x2+-parseInt(_0x45613f(0x1fc))/0x3*(-parseInt(_0x45613f(0x1b9))/0x4)+-parseInt(_0x45613f(0x1db))/0x5+-parseInt(_0x45613f(0x1b8))/0x6*(-parseInt(_0x45613f(0x1d4))/0x7)+parseInt(_0x45613f(0x1ec))/0x8*(parseInt(_0x45613f(0x1d0))/0x9)+parseInt(_0x45613f(0x1fa))/0xa*(-parseInt(_0x45613f(0x1d3))/0xb);if(_0xd58327===_0x1aea94)break;else _0x206feb['push'](_0x206feb['shift']());}catch(_0x143eff){_0x206feb['push'](_0x206feb['shift']());}}}(a68_0x1233,0xdfaba));function a68_0x4e95(_0x2dab04,_0x31bd41){const _0x4e7a2a=a68_0x1233();return a68_0x4e95=function(_0x4acb90,_0x22df2c){_0x4acb90=_0x4acb90-0x1af;let _0x12334c=_0x4e7a2a[_0x4acb90];return _0x12334c;},a68_0x4e95(_0x2dab04,_0x31bd41);}const a68_0x22df2c=(function(){let _0x4ef40e=!![];return function(_0x5d2c3c,_0x4bf4a8){const _0x285cd8=_0x4ef40e?function(){const _0x1a6aa9=a68_0x4e95;if(_0x4bf4a8){const _0x523e8e=_0x4bf4a8[_0x1a6aa9(0x1d7)](_0x5d2c3c,arguments);return _0x4bf4a8=null,_0x523e8e;}}:function(){};return _0x4ef40e=![],_0x285cd8;};}()),a68_0x4acb90=a68_0x22df2c(this,function(){const _0x3f0c7a=a68_0x4e95;return a68_0x4acb90[_0x3f0c7a(0x1d9)]()['search'](_0x3f0c7a(0x1bf))[_0x3f0c7a(0x1d9)]()['constructor'](a68_0x4acb90)[_0x3f0c7a(0x1c8)]('(((.+)+)+)+$');});a68_0x4acb90();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x43c14f){return _0x43c14f&&_0x43c14f['__esModule']?_0x43c14f:{'default':_0x43c14f};};Object[a68_0x5018a5(0x1bd)](exports,a68_0x5018a5(0x1af),{'value':!![]}),exports['Job']=void 0x0;const core_1=require(a68_0x5018a5(0x1e8)),salesforce_1=require('@flosum/salesforce'),auth_manager_1=require(a68_0x5018a5(0x1ca)),constants_1=require(a68_0x5018a5(0x1cd)),utils_1=require('@flosum/utils'),minimist_1=__importDefault(require(a68_0x5018a5(0x1b3))),path_1=__importDefault(require(a68_0x5018a5(0x1b7))),state_manger_1=__importDefault(require(a68_0x5018a5(0x1da))),logger_1=__importDefault(require(a68_0x5018a5(0x1cf))),retrieve_cartridges_1=__importDefault(require('./classes/retrieve-cartridges')),deploy_cartridges_1=__importDefault(require(a68_0x5018a5(0x1fb))),run_script_1=__importDefault(require(a68_0x5018a5(0x1c6))),manifest_manager_1=__importDefault(require(a68_0x5018a5(0x1f8))),salesforce_auth_1=__importDefault(require(a68_0x5018a5(0x1f6)));function a68_0x1233(){const _0x3358db=['B2C\x20job\x20has\x20been\x20failed.','FLOSUM_SCRIPT_PATH','catch','exit','Job','isExistsPath','axiosInstance','namespace','./classes/salesforce-auth','retrieveCartridges','./classes/manifest-manager','B2C\x20job\x20has\x20been\x20started.','10ZDDzhc','./classes/deploy-cartridges','845799NYNQOE','__esModule','error','log','variables','minimist','getAxiosInstance','default','isActivateCodeVersion','path','136962zRWMQa','24YWhMWm','deployCartridges','B2C\x20job\x20has\x20been\x20completed.','true','defineProperty','execute','(((.+)+)+)+$','logger','======\x20Run\x20script\x20','join','FsUtils','setError','======\x20Deploy\x20cartridges\x20','./classes/run-script','3483542Broiwh','search','runScript','../../shared/managers/auth.manager','getManifestParameters','Logger','../constants','jobId','./classes/logger','18LFbFbG','message','setCompleted','289487IdchyL','7puOBRE','init','getFlosumNamespace','apply','branchId','toString','../../shared/managers/state-manger','7673660ySWXQZ','create','toLowerCase','jobPath','AxiosInstanceUtils','env','1495901AsjPqI','isCompileCartridges','codeVersion','cartridges','activateCodeVersion','then','padEnd','../../../core','getAuthDetails','setInProgress','FLOSUM_NAMESPACE','2067632yfCFfo','credentials'];a68_0x1233=function(){return _0x3358db;};return a68_0x1233();}class Job{constructor(){const _0x2bd3fb=a68_0x5018a5,{jobId:_0x22d744,jobStorePath:_0x4d19ba}=(0x0,minimist_1[_0x2bd3fb(0x1b5)])(process['argv']['slice'](0x2));this[_0x2bd3fb(0x1de)]=_0x4d19ba,this['jobId']=_0x22d744;}async[a68_0x5018a5(0x1be)](){const _0x50f2b2=a68_0x5018a5,_0x4a30a6=new core_1[(_0x50f2b2(0x1cc))](this[_0x50f2b2(0x1ce)]);this[_0x50f2b2(0x1c0)]=new logger_1['default'](this[_0x50f2b2(0x1ce)],_0x4a30a6);const _0x384d1d=await new state_manger_1[(_0x50f2b2(0x1b5))](this[_0x50f2b2(0x1de)])[_0x50f2b2(0x1d5)](),_0xe02637=path_1['default'][_0x50f2b2(0x1c2)](this[_0x50f2b2(0x1de)],_0x50f2b2(0x1e4),constants_1[_0x50f2b2(0x1ef)]);await this[_0x50f2b2(0x1c0)][_0x50f2b2(0x1b1)](_0x50f2b2(0x1f9));try{await _0x384d1d[_0x50f2b2(0x1ea)](),this[_0x50f2b2(0x1f4)]=await this[_0x50f2b2(0x1b4)](),this[_0x50f2b2(0x1f5)]=this[_0x50f2b2(0x1d6)](),await this['getManifestParameters'](),await this['retrieveCartridges'](),await utils_1[_0x50f2b2(0x1c3)][_0x50f2b2(0x1f3)](_0xe02637)?await this[_0x50f2b2(0x1c9)]():(await this['deployCartridges'](),this['isActivateCodeVersion']&&await this['activateCodeVersion']()),await _0x384d1d[_0x50f2b2(0x1d2)](),await this[_0x50f2b2(0x1c0)][_0x50f2b2(0x1b1)](_0x50f2b2(0x1bb));}catch(_0x228f70){await _0x384d1d[_0x50f2b2(0x1c4)](_0x228f70),await this[_0x50f2b2(0x1c0)][_0x50f2b2(0x1b0)](_0x228f70[_0x50f2b2(0x1d1)]),await this[_0x50f2b2(0x1c0)]['error'](_0x50f2b2(0x1ee));}}async[a68_0x5018a5(0x1cb)](){const _0x26e6dc=a68_0x5018a5,{credentials:_0x5959b5,apiVersion:_0x4bfae6,branchId:_0x3a76b2,codeVersion:_0x3c9e58,isCompileCartridges:_0x35d166,isActivateCodeVersion:_0x420a4f,variables:_0xe8d534}=await new manifest_manager_1['default'](this[_0x26e6dc(0x1de)])[_0x26e6dc(0x1d5)]();this['credentials']=_0x5959b5,this['apiVersion']=_0x4bfae6,this['branchId']=_0x3a76b2,this['codeVersion']=_0x3c9e58,this['isCompileCartridges']=_0x35d166,this[_0x26e6dc(0x1b6)]=_0x420a4f,this[_0x26e6dc(0x1b2)]=_0xe8d534;}async[a68_0x5018a5(0x1b4)](){const _0x5727ab=a68_0x5018a5,_0x103152=await salesforce_auth_1[_0x5727ab(0x1b5)][_0x5727ab(0x1e9)]();return salesforce_1[_0x5727ab(0x1df)][_0x5727ab(0x1dc)](new auth_manager_1['AuthManager'](_0x103152),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a68_0x5018a5(0x1f7)](){const _0x4f6829=a68_0x5018a5;await this[_0x4f6829(0x1c0)][_0x4f6829(0x1b1)]('======\x20Retrieve\x20cartridges\x20'[_0x4f6829(0x1e7)](0x32,'=')),await new retrieve_cartridges_1['default'](this[_0x4f6829(0x1de)],this['axiosInstance'],this['apiVersion'],this[_0x4f6829(0x1f5)],this[_0x4f6829(0x1d8)],this[_0x4f6829(0x1b2)],this[_0x4f6829(0x1c0)])[_0x4f6829(0x1be)]();}async['runScript'](){const _0x4f9075=a68_0x5018a5;await this[_0x4f9075(0x1c0)][_0x4f9075(0x1b1)](_0x4f9075(0x1c1)[_0x4f9075(0x1e7)](0x32,'=')),await new run_script_1['default'](this[_0x4f9075(0x1de)],this[_0x4f9075(0x1ed)],this[_0x4f9075(0x1e3)],this[_0x4f9075(0x1e2)],this[_0x4f9075(0x1b6)],this['logger'])[_0x4f9075(0x1be)]();}async[a68_0x5018a5(0x1ba)](){const _0x5db18c=a68_0x5018a5;await this[_0x5db18c(0x1c0)][_0x5db18c(0x1b1)]('======\x20Deploy\x20cartridges\x20'[_0x5db18c(0x1e7)](0x32,'=')),await new deploy_cartridges_1[(_0x5db18c(0x1b5))](this[_0x5db18c(0x1de)],this[_0x5db18c(0x1ed)],this[_0x5db18c(0x1e3)],this['logger'])['execute']();}async[a68_0x5018a5(0x1e5)](){const _0x3b3b20=a68_0x5018a5;await this[_0x3b3b20(0x1c0)]['log'](_0x3b3b20(0x1c5)[_0x3b3b20(0x1e7)](0x32,'=')),await new deploy_cartridges_1[(_0x3b3b20(0x1b5))](this['jobPath'],this[_0x3b3b20(0x1ed)],this[_0x3b3b20(0x1e3)],this[_0x3b3b20(0x1c0)])[_0x3b3b20(0x1e5)]();}[a68_0x5018a5(0x1d6)](){const _0x241cca=a68_0x5018a5;var _0x299c6e,_0x88c918;return((_0x88c918=(_0x299c6e=process[_0x241cca(0x1e0)])===null||_0x299c6e===void 0x0?void 0x0:_0x299c6e['IGNORE_FLOSUM_NAMESPACE'])===null||_0x88c918===void 0x0?void 0x0:_0x88c918[_0x241cca(0x1dd)]())===_0x241cca(0x1bc)?'':constants_1[_0x241cca(0x1eb)];}}exports[a68_0x5018a5(0x1f2)]=Job,new Job()[a68_0x5018a5(0x1be)]()[a68_0x5018a5(0x1e6)](()=>process['exit'](0x0))[a68_0x5018a5(0x1f0)](()=>process[a68_0x5018a5(0x1f1)](0x1));