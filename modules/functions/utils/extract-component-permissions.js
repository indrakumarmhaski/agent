'use strict';const a91_0x506f31=a91_0x28bf;(function(_0xaae42d,_0x1d20e4){const _0x1d6194=a91_0x28bf,_0x206eeb=_0xaae42d();while(!![]){try{const _0x5c1655=parseInt(_0x1d6194(0x133))/0x1*(parseInt(_0x1d6194(0x13a))/0x2)+parseInt(_0x1d6194(0x15b))/0x3*(parseInt(_0x1d6194(0x149))/0x4)+parseInt(_0x1d6194(0x136))/0x5+parseInt(_0x1d6194(0x157))/0x6*(-parseInt(_0x1d6194(0x127))/0x7)+parseInt(_0x1d6194(0x153))/0x8*(-parseInt(_0x1d6194(0x148))/0x9)+parseInt(_0x1d6194(0x14a))/0xa*(-parseInt(_0x1d6194(0x159))/0xb)+parseInt(_0x1d6194(0x155))/0xc*(parseInt(_0x1d6194(0x140))/0xd);if(_0x5c1655===_0x1d20e4)break;else _0x206eeb['push'](_0x206eeb['shift']());}catch(_0xf1783){_0x206eeb['push'](_0x206eeb['shift']());}}}(a91_0x483a,0x82701));Object[a91_0x506f31(0x139)](exports,a91_0x506f31(0x12e),{'value':!![]}),exports[a91_0x506f31(0x146)]=void 0x0;const xml_1=require('../../git/parsers/utils/xml'),PERMISSIONS_MAP=new Map([[a91_0x506f31(0x134),'apexClass'],[a91_0x506f31(0x156),a91_0x506f31(0x13c)],[a91_0x506f31(0x142),a91_0x506f31(0x143)],['tabVisibilities','tab'],['profileActionOverrides','content'],[a91_0x506f31(0x137),a91_0x506f31(0x14c)],[a91_0x506f31(0x124),a91_0x506f31(0x147)],['customMetadataTypeAccesses','name'],[a91_0x506f31(0x141),a91_0x506f31(0x158)],[a91_0x506f31(0x151),a91_0x506f31(0x14f)],['externalDataSourceAccesses',a91_0x506f31(0x132)],[a91_0x506f31(0x13f),a91_0x506f31(0x158)],['flowAccesses',a91_0x506f31(0x13e)],[a91_0x506f31(0x14d),a91_0x506f31(0x12f)],['recordTypeVisibilities',a91_0x506f31(0x12b)],[a91_0x506f31(0x123),a91_0x506f31(0x13d)]]);var UNREMOVE_PERMISSION;(function(_0x566380){const _0x358a37=a91_0x506f31,_0xe0d15a=(function(){let _0x162acb=!![];return function(_0x1497aa,_0x4fb3cf){const _0x53f675=_0x162acb?function(){const _0xa5ae77=a91_0x28bf;if(_0x4fb3cf){const _0x2c4320=_0x4fb3cf[_0xa5ae77(0x13b)](_0x1497aa,arguments);return _0x4fb3cf=null,_0x2c4320;}}:function(){};return _0x162acb=![],_0x53f675;};}()),_0x2f6825=_0xe0d15a(this,function(){const _0x133568=a91_0x28bf;return _0x2f6825[_0x133568(0x145)]()[_0x133568(0x138)](_0x133568(0x135))['toString']()[_0x133568(0x122)](_0x2f6825)[_0x133568(0x138)](_0x133568(0x135));});_0x2f6825(),_0x566380[_0x358a37(0x154)]='hasActivationRequired',_0x566380[_0x358a37(0x152)]='label',_0x566380['custom']=_0x358a37(0x131),_0x566380[_0x358a37(0x14e)]=_0x358a37(0x14e);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));function a91_0x28bf(_0x1232bf,_0x3a97cb){const _0x420195=a91_0x483a();return a91_0x28bf=function(_0x48bfc2,_0x46637a){_0x48bfc2=_0x48bfc2-0x122;let _0x483a04=_0x420195[_0x48bfc2];return _0x483a04;},a91_0x28bf(_0x1232bf,_0x3a97cb);}const prepareDeleteComponent={'Profile':_0x5ac6ab=>{const _0x5e80e3=a91_0x506f31;var _0x50f300,_0x365ad5;return(_0x50f300=_0x5ac6ab[_0x5e80e3(0x15a)])===null||_0x50f300===void 0x0?!![]:delete _0x50f300[_0x5e80e3(0x128)],(_0x365ad5=_0x5ac6ab[_0x5e80e3(0x15a)])===null||_0x365ad5===void 0x0?!![]:delete _0x365ad5[_0x5e80e3(0x150)],_0x5ac6ab;},'PermissionSet':_0x53852a=>{var _0xa8707a,_0x39cab4;return(_0xa8707a=_0x53852a['PermissionSet'])===null||_0xa8707a===void 0x0?!![]:delete _0xa8707a['userPermissions'],(_0x39cab4=_0x53852a['PermissionSet'])===null||_0x39cab4===void 0x0?!![]:delete _0x39cab4['loginIpRanges'],_0x53852a;}};async function extractComponentPermissions(_0xbd0204,_0x29cb70,_0x381582){const _0x482d63=a91_0x506f31,_0x2e7cec=await getReadyComponent(_0xbd0204,_0x381582),_0x301681=_0x2e7cec[_0x381582];if(!_0x301681)return _0x2e7cec;for(const _0x47d86b in _0x301681){if(UNREMOVE_PERMISSION[_0x47d86b])continue;const _0xa065c4=_0x301681[_0x47d86b],_0x2a4f6f=getValidPermission(_0xa065c4,_0x47d86b,_0x29cb70);_0x2a4f6f['length']?_0x301681[_0x47d86b]=_0x2a4f6f:delete _0x301681[_0x47d86b];}return _0x2e7cec[_0x381582]['$']={'xmlns':_0x482d63(0x130)},_0x2e7cec;}exports['extractComponentPermissions']=extractComponentPermissions;function getValidPermission(_0x5e4be8,_0x136452,_0x402d18){const _0x452365=a91_0x506f31;let _0x305e62=[];if(_0x136452==='layoutAssignments')_0x305e62=getValidLayout(_0x5e4be8,_0x136452,_0x402d18);else{const _0x3bde34=Array['isArray'](_0x5e4be8)?_0x5e4be8:[_0x5e4be8];for(const _0xa623c5 of _0x3bde34){isValidPermission(_0xa623c5,_0x136452,_0x402d18)&&_0x305e62[_0x452365(0x12d)](_0xa623c5);}}return _0x305e62;}function isValidPermission(_0x3a6372,_0x3e8b02,_0x3463ff){const _0x21b535=a91_0x506f31,_0x2607a0=PERMISSIONS_MAP[_0x21b535(0x12a)](_0x3e8b02);return _0x3a6372[_0x2607a0]&&_0x3463ff[_0x21b535(0x14b)](_0x3fd163=>_0x3fd163[_0x21b535(0x125)][_0x21b535(0x129)][_0x21b535(0x15c)](_0x3a6372[_0x2607a0]));}function getValidLayout(_0x4e6724,_0x29a485,_0x14dceb){const _0x276bb4=a91_0x506f31,_0x598168=[],_0x4f8648=Array[_0x276bb4(0x12c)](_0x4e6724)?_0x4e6724:[_0x4e6724];for(const _0x125f13 in _0x4f8648){isValidPermission(_0x4f8648[_0x125f13],_0x29a485,_0x14dceb)&&(!_0x4f8648[_0x125f13]['recordType']&&_0x598168[_0x276bb4(0x12d)](_0x4f8648[_0x125f13]),isValidPermission(_0x4f8648[_0x125f13],_0x276bb4(0x144),_0x14dceb)&&_0x598168[_0x276bb4(0x12d)](_0x4f8648[_0x125f13]));}return _0x598168;}async function getReadyComponent(_0x36998b,_0xc48ec6){const _0x42835d=a91_0x506f31,_0x1cc9cb=await xml_1['Xml'][_0x42835d(0x126)](_0x36998b);return prepareDeleteComponent[_0xc48ec6](_0x1cc9cb);}function a91_0x483a(){const _0x2190fd=['isArray','push','__esModule','layout','http://soap.sforce.com/2006/04/metadata','custom','externalDataSource','41xxHKyI','classAccesses','(((.+)+)+)+$','4068585uGCvCt','categoryGroupVisibilities','search','defineProperty','7148NQFFXJ','apply','apexPage','field','flow','customPermissions','7789353qxZaZo','customSettingAccesses','tabSettings','tab','recordTypeVisibilities','toString','extractComponentPermissions','object','5662269QcNWrD','4118120BhbAay','21880mIZToP','some','dataCategoryGroup','layoutAssignments','description','application','loginIpRanges','applicationVisibilities','label','8FcvfVX','hasActivationRequired','12CfJQPH','pageAccesses','17370mCHSsC','name','5071tiepkE','Profile','3AyqjYS','includes','constructor','fieldPermissions','objectPermissions','Component__r','parse','1008jYbYRx','userPermissions','Component_Name__c','get','recordType'];a91_0x483a=function(){return _0x2190fd;};return a91_0x483a();}