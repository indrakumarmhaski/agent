const a156_0x2bf5c4=a156_0x1a98;function a156_0x1a98(_0x17a3e6,_0x445e5c){const _0x44fdbb=a156_0x15f0();return a156_0x1a98=function(_0x438ea3,_0x29cbed){_0x438ea3=_0x438ea3-0x77;let _0x15f0ef=_0x44fdbb[_0x438ea3];return _0x15f0ef;},a156_0x1a98(_0x17a3e6,_0x445e5c);}(function(_0x417fc4,_0x51fb49){const _0x3d4894=a156_0x1a98,_0x40d7ba=_0x417fc4();while(!![]){try{const _0x3fd3a8=-parseInt(_0x3d4894(0x8e))/0x1*(parseInt(_0x3d4894(0x97))/0x2)+parseInt(_0x3d4894(0x84))/0x3*(-parseInt(_0x3d4894(0x8f))/0x4)+-parseInt(_0x3d4894(0x89))/0x5+-parseInt(_0x3d4894(0x7f))/0x6*(-parseInt(_0x3d4894(0x94))/0x7)+parseInt(_0x3d4894(0x8d))/0x8*(-parseInt(_0x3d4894(0x78))/0x9)+-parseInt(_0x3d4894(0x8b))/0xa+parseInt(_0x3d4894(0x9f))/0xb;if(_0x3fd3a8===_0x51fb49)break;else _0x40d7ba['push'](_0x40d7ba['shift']());}catch(_0x4a1eae){_0x40d7ba['push'](_0x40d7ba['shift']());}}}(a156_0x15f0,0xa7e02));const a156_0x29cbed=(function(){let _0x186b82=!![];return function(_0x1c3353,_0x4010be){const _0x18376a=_0x186b82?function(){const _0x26f3dd=a156_0x1a98;if(_0x4010be){const _0x54c068=_0x4010be[_0x26f3dd(0x87)](_0x1c3353,arguments);return _0x4010be=null,_0x54c068;}}:function(){};return _0x186b82=![],_0x18376a;};}()),a156_0x438ea3=a156_0x29cbed(this,function(){const _0x55e664=a156_0x1a98;return a156_0x438ea3['toString']()[_0x55e664(0xa1)](_0x55e664(0x96))[_0x55e664(0x9d)]()[_0x55e664(0x7d)](a156_0x438ea3)[_0x55e664(0xa1)](_0x55e664(0x96));});a156_0x438ea3();'use strict';var __importDefault=this&&this[a156_0x2bf5c4(0x92)]||function(_0xc702d8){return _0xc702d8&&_0xc702d8['__esModule']?_0xc702d8:{'default':_0xc702d8};};Object[a156_0x2bf5c4(0x8c)](exports,a156_0x2bf5c4(0x9c),{'value':!![]}),exports['calculateCRC32']=void 0x0;const crc_32_1=__importDefault(require(a156_0x2bf5c4(0x9a))),vlocity_types_1=require('../data/vlocity-types'),componentTypeProcessFunctionMap={'AuraDefinitionBundle':bundleTypesProcessor,'LightningComponentBundle':bundleTypesProcessor,'ExperienceBundle':bundleTypesProcessor,'WaveTemplateBundle':bundleTypesProcessor},BINARY_COMPONENTS=['StaticResource',a156_0x2bf5c4(0x86)];function bundleTypesProcessor(_0x4f93e0){const _0x1a274c=a156_0x2bf5c4,_0xe85dc2=[],_0x2c0005=new Set();Object[_0x1a274c(0x99)](_0x4f93e0[_0x1a274c(0x93)])['sort']()[_0x1a274c(0x88)](_0x372757=>{const _0x10a244=_0x1a274c,_0x14c941=getAuraName(_0x372757);if(_0x14c941&&_0x14c941===_0x4f93e0['filePath']){const _0x2cd220=_0x4f93e0[_0x10a244(0x93)][_0x372757],_0x400a02=getCrcWithData(_0x2cd220);_0x400a02&&_0xe85dc2[_0x10a244(0x91)](_0x400a02);}else _0x2c0005[_0x10a244(0x77)](_0x372757);});const _0x611e2d=calculateResultCRC32(_0xe85dc2);return''+_0x611e2d;}function calculateCRC32ForEachFile(_0x14877e){const _0x20f49c=a156_0x2bf5c4,_0xa17a89=[],_0x1b3918=BINARY_COMPONENTS[_0x20f49c(0x81)](_0x14877e[_0x20f49c(0x9b)]);return Object['keys'](_0x14877e[_0x20f49c(0x93)])[_0x20f49c(0x9e)]()['forEach'](_0x6d1c46=>{const _0x4498b6=_0x20f49c,_0x4f5573=_0x14877e[_0x4498b6(0x93)][_0x6d1c46],_0x3aa9a0=getCrcWithData(_0x4f5573,_0x1b3918);_0x3aa9a0&&_0xa17a89[_0x4498b6(0x91)](_0x3aa9a0);}),_0xa17a89;}function calculateResultCRC32(_0x4520d5){const _0x2b9821=a156_0x2bf5c4;let _0x244841=0x0;_0x4520d5[_0x2b9821(0x98)]&&(_0x244841=_0x4520d5[0x0]);if(_0x4520d5['length']<0x1a)for(let _0x3fced1=0x1;_0x3fced1<_0x4520d5['length'];_0x3fced1++){_0x244841=Math[_0x2b9821(0x83)]((_0x4520d5[_0x3fced1]+_0x244841)/0x2);}else{for(let _0x5584df=0x1;_0x5584df<_0x4520d5['length'];_0x5584df++){_0x244841=Math[_0x2b9821(0x83)](_0x4520d5[_0x5584df]+_0x244841);}_0x244841=Math[_0x2b9821(0x83)](_0x244841/_0x4520d5['length']);}return _0x244841;}function otherComponentsProcessor(_0x4f6423){const _0x4c6efa=a156_0x2bf5c4;return calculateCRC32ForEachFile(_0x4f6423)[_0x4c6efa(0x7c)]('\x20');}function vlocityComponentsProcessor(_0x5d008b){const _0x4209e0=calculateCRC32ForEachFile(_0x5d008b),_0x2c655f=calculateResultCRC32(_0x4209e0);return''+_0x2c655f;}function getPosition(_0x32e43b,_0x3d0699,_0x326a35){const _0x404673=a156_0x2bf5c4;return _0x32e43b[_0x404673(0x90)](_0x3d0699,_0x326a35)[_0x404673(0x7c)](_0x3d0699)[_0x404673(0x98)];}function getAuraName(_0x18aaa3){const _0x57133f=a156_0x2bf5c4;if(!_0x18aaa3)return null;if(!_0x18aaa3[_0x57133f(0xa2)](_0x57133f(0x79))&&!_0x18aaa3['startsWith']('lwc/')&&!_0x18aaa3[_0x57133f(0xa2)](_0x57133f(0x95))&&!_0x18aaa3[_0x57133f(0xa2)](_0x57133f(0x7a)))return null;if(_0x18aaa3[_0x57133f(0x82)]('/')>0x5&&_0x18aaa3[_0x57133f(0x82)]('/')!==_0x18aaa3['length']-0x1){let _0x2a68e9=_0x18aaa3[_0x57133f(0x85)](0x0,getPosition(_0x18aaa3,'/',0x2));if(_0x18aaa3[_0x57133f(0xa2)](_0x57133f(0x95))||_0x18aaa3['startsWith'](_0x57133f(0x7a)))return _0x2a68e9[_0x57133f(0x82)]('/')!==-0x1&&(_0x2a68e9=_0x2a68e9['slice'](0x0,_0x2a68e9[_0x57133f(0x82)]('/'))),_0x2a68e9;return _0x2a68e9;}return null;}function getCrcWithData(_0x404f74,_0x2acbe3=![]){const _0x293f5b=a156_0x2bf5c4;if(_0x2acbe3)return crc_32_1['default'][_0x293f5b(0x7b)](_0x404f74,0x20);return crc_32_1[_0x293f5b(0x7e)][_0x293f5b(0x8a)](_0x404f74[_0x293f5b(0x9d)](),0x20);}function calculateCRC32(_0x3ffed8){const _0x1ebe17=a156_0x2bf5c4;if(componentTypeProcessFunctionMap[_0x3ffed8[_0x1ebe17(0x9b)]])return componentTypeProcessFunctionMap[_0x3ffed8['type']](_0x3ffed8);if(vlocity_types_1[_0x1ebe17(0x80)][_0x1ebe17(0x81)](_0x3ffed8[_0x1ebe17(0x9b)]))return vlocityComponentsProcessor(_0x3ffed8);return otherComponentsProcessor(_0x3ffed8);}exports[a156_0x2bf5c4(0xa0)]=calculateCRC32;function a156_0x15f0(){const _0x1440fa=['str','10149820sCnDGj','defineProperty','7365736DVIaQx','11277jhrXJi','170188etmUQW','split','push','__importDefault','files','7yqixGm','experiences/','(((.+)+)+)+$','110uFQmKf','length','keys','crc-32','type','__esModule','toString','sort','56859462uLgHfM','calculateCRC32','search','startsWith','add','9fOVqhp','aura/','waveTemplates/','buf','join','constructor','default','1189038WDidkj','VLOCITY_COMPONENT_TYPES','includes','lastIndexOf','round','66ZcmJtd','slice','ContentAsset','apply','forEach','5938145dIgUSM'];a156_0x15f0=function(){return _0x1440fa;};return a156_0x15f0();}