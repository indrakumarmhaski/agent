var a189_0x54dad8=a189_0x4350;function a189_0x4350(_0x5b4abc,_0x45c0cf){var _0x3cd8e9=a189_0x5a76();return a189_0x4350=function(_0x2efed1,_0x214960){_0x2efed1=_0x2efed1-0x9d;var _0x5a76d7=_0x3cd8e9[_0x2efed1];return _0x5a76d7;},a189_0x4350(_0x5b4abc,_0x45c0cf);}(function(_0x14979c,_0x2f940a){var _0x13e6aa=a189_0x4350,_0x4de236=_0x14979c();while(!![]){try{var _0x4d11cd=-parseInt(_0x13e6aa(0xba))/0x1*(parseInt(_0x13e6aa(0xaa))/0x2)+-parseInt(_0x13e6aa(0xbb))/0x3*(parseInt(_0x13e6aa(0xa3))/0x4)+parseInt(_0x13e6aa(0xb8))/0x5*(parseInt(_0x13e6aa(0xae))/0x6)+-parseInt(_0x13e6aa(0xa2))/0x7+-parseInt(_0x13e6aa(0xb3))/0x8+-parseInt(_0x13e6aa(0xb1))/0x9+parseInt(_0x13e6aa(0xb7))/0xa;if(_0x4d11cd===_0x2f940a)break;else _0x4de236['push'](_0x4de236['shift']());}catch(_0x49aa3f){_0x4de236['push'](_0x4de236['shift']());}}}(a189_0x5a76,0x968a2));var a189_0x214960=(function(){var _0xde1693=!![];return function(_0x43d56c,_0x4300fd){var _0x260777=_0xde1693?function(){var _0x4321eb=a189_0x4350;if(_0x4300fd){var _0x3eb56e=_0x4300fd[_0x4321eb(0xb4)](_0x43d56c,arguments);return _0x4300fd=null,_0x3eb56e;}}:function(){};return _0xde1693=![],_0x260777;};}()),a189_0x2efed1=a189_0x214960(this,function(){var _0x5645bf=a189_0x4350;return a189_0x2efed1[_0x5645bf(0xa1)]()['search'](_0x5645bf(0xa4))[_0x5645bf(0xa1)]()[_0x5645bf(0x9d)](a189_0x2efed1)['search'](_0x5645bf(0xa4));});a189_0x2efed1();'use strict';var __decorate=this&&this['__decorate']||function(_0x35cc73,_0x17e14d,_0x97d6e8,_0x5cc67e){var _0x24d0ec=a189_0x4350,_0x3bccfa=arguments['length'],_0x19c0c2=_0x3bccfa<0x3?_0x17e14d:_0x5cc67e===null?_0x5cc67e=Object['getOwnPropertyDescriptor'](_0x17e14d,_0x97d6e8):_0x5cc67e,_0x9815b1;if(typeof Reflect==='object'&&typeof Reflect[_0x24d0ec(0xa7)]===_0x24d0ec(0xa0))_0x19c0c2=Reflect['decorate'](_0x35cc73,_0x17e14d,_0x97d6e8,_0x5cc67e);else{for(var _0x21cd3a=_0x35cc73[_0x24d0ec(0x9f)]-0x1;_0x21cd3a>=0x0;_0x21cd3a--)if(_0x9815b1=_0x35cc73[_0x21cd3a])_0x19c0c2=(_0x3bccfa<0x3?_0x9815b1(_0x19c0c2):_0x3bccfa>0x3?_0x9815b1(_0x17e14d,_0x97d6e8,_0x19c0c2):_0x9815b1(_0x17e14d,_0x97d6e8))||_0x19c0c2;}return _0x3bccfa>0x3&&_0x19c0c2&&Object[_0x24d0ec(0xa6)](_0x17e14d,_0x97d6e8,_0x19c0c2),_0x19c0c2;},__metadata=this&&this['__metadata']||function(_0x332f28,_0x27e56b){var _0x4e00c0=a189_0x4350;if(typeof Reflect==='object'&&typeof Reflect[_0x4e00c0(0xb6)]===_0x4e00c0(0xa0))return Reflect[_0x4e00c0(0xb6)](_0x332f28,_0x27e56b);};function a189_0x5a76(){var _0x337d81=['decorate','prototype','azureProject','56qNCmrb','design:type','fromConnectionEnvVariables','AzureCredentialsDto','1771662dvgbUk','Basic\x20','token','4856400JEhYdB','organization','3927376lysAoH','apply','IsDefined','metadata','21891320zCNOrQ','5WnyKoj','encodeBase64','8791cDOCDk','1612767IQheKr','IsNotEmpty','getBaseUrl','azureOrganization','../../providers.constants','constructor','IsString','length','function','toString','374780YsyjdZ','4smFWZw','(((.+)+)+)+$','./base-credentials.dto','defineProperty'];a189_0x5a76=function(){return _0x337d81;};return a189_0x5a76();}Object[a189_0x54dad8(0xa6)](exports,'__esModule',{'value':!![]}),exports[a189_0x54dad8(0xad)]=void 0x0;const class_validator_1=require('class-validator'),base_credentials_dto_1=require(a189_0x54dad8(0xa5)),providers_constants_1=require(a189_0x54dad8(0xbf)),utils_1=require('../../../../shared/utils');class AzureCredentialsDto extends base_credentials_dto_1['BaseCredentialsDto']{[a189_0x54dad8(0xbd)](){return providers_constants_1['AZURE_API'];}['getAuthorizationHeader'](){var _0x158f5c=a189_0x54dad8;return _0x158f5c(0xaf)+(0x0,utils_1[_0x158f5c(0xb9)])(this[_0x158f5c(0xb2)]+':'+this[_0x158f5c(0xb0)]);}['getGitShellAuthorizationString'](){return''+encodeURIComponent(this['token']);}static[a189_0x54dad8(0xac)](_0x88bb2){var _0x9c6dae=a189_0x54dad8;return new AzureCredentialsDto({'organization':_0x88bb2[_0x9c6dae(0xbe)],'project':_0x88bb2[_0x9c6dae(0xa9)],'token':_0x88bb2['azureToken']});}}__decorate([(0x0,class_validator_1['IsDefined'])(),(0x0,class_validator_1[a189_0x54dad8(0x9e)])(),(0x0,class_validator_1[a189_0x54dad8(0xbc)])(),__metadata('design:type',String)],AzureCredentialsDto['prototype'],a189_0x54dad8(0xb2),void 0x0),__decorate([(0x0,class_validator_1[a189_0x54dad8(0xb5)])(),(0x0,class_validator_1[a189_0x54dad8(0x9e)])(),(0x0,class_validator_1[a189_0x54dad8(0xbc)])(),__metadata(a189_0x54dad8(0xab),String)],AzureCredentialsDto['prototype'],'project',void 0x0),__decorate([(0x0,class_validator_1[a189_0x54dad8(0xb5)])(),(0x0,class_validator_1['IsString'])(),(0x0,class_validator_1['IsNotEmpty'])(),__metadata(a189_0x54dad8(0xab),String)],AzureCredentialsDto[a189_0x54dad8(0xa8)],a189_0x54dad8(0xb0),void 0x0),exports[a189_0x54dad8(0xad)]=AzureCredentialsDto;