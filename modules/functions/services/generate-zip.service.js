const a102_0x44335c=a102_0x30f3;(function(_0x491e70,_0x302a5b){const _0x5e0659=a102_0x30f3,_0x3091e0=_0x491e70();while(!![]){try{const _0xe5597f=parseInt(_0x5e0659(0x113))/0x1+-parseInt(_0x5e0659(0x111))/0x2+-parseInt(_0x5e0659(0x10a))/0x3*(-parseInt(_0x5e0659(0xdc))/0x4)+parseInt(_0x5e0659(0xf5))/0x5*(parseInt(_0x5e0659(0xf9))/0x6)+parseInt(_0x5e0659(0x106))/0x7*(parseInt(_0x5e0659(0x105))/0x8)+parseInt(_0x5e0659(0xc1))/0x9*(-parseInt(_0x5e0659(0xfb))/0xa)+parseInt(_0x5e0659(0x116))/0xb;if(_0xe5597f===_0x302a5b)break;else _0x3091e0['push'](_0x3091e0['shift']());}catch(_0x32ad6c){_0x3091e0['push'](_0x3091e0['shift']());}}}(a102_0x30df,0xce681));const a102_0x47d4ed=(function(){let _0x522a9d=!![];return function(_0xc85a8c,_0x15765d){const _0x58e0e6=_0x522a9d?function(){if(_0x15765d){const _0xbae2f8=_0x15765d['apply'](_0xc85a8c,arguments);return _0x15765d=null,_0xbae2f8;}}:function(){};return _0x522a9d=![],_0x58e0e6;};}()),a102_0x582a39=a102_0x47d4ed(this,function(){const _0x45f758=a102_0x30f3;return a102_0x582a39[_0x45f758(0xe5)]()['search'](_0x45f758(0xfc))['toString']()[_0x45f758(0xec)](a102_0x582a39)[_0x45f758(0x119)](_0x45f758(0xfc));});a102_0x582a39();'use strict';var __importDefault=this&&this[a102_0x44335c(0xc0)]||function(_0x32e3c5){return _0x32e3c5&&_0x32e3c5['__esModule']?_0x32e3c5:{'default':_0x32e3c5};};Object[a102_0x44335c(0x102)](exports,'__esModule',{'value':!![]}),exports[a102_0x44335c(0x112)]=void 0x0;const path_1=__importDefault(require(a102_0x44335c(0x10e))),extract_component_permissions_1=require(a102_0x44335c(0xff)),logger_1=require(a102_0x44335c(0xcc)),xml2js_1=require(a102_0x44335c(0x107)),zip_1=require(a102_0x44335c(0xf3)),mdapi_writer_1=require(a102_0x44335c(0xda)),fs_internal_1=require(a102_0x44335c(0xca)),promises_1=require(a102_0x44335c(0xd4)),components_api_1=require(a102_0x44335c(0x101)),adm_zip_1=__importDefault(require(a102_0x44335c(0xed))),uuid_1=require('uuid'),fetch_attachments_1=require(a102_0x44335c(0xd1)),salesforce_1=require(a102_0x44335c(0x103)),DESTRUCTIVE_CHANGES_PER_NAME=a102_0x44335c(0xd5),DESTRUCTIVE_CHANGES_POST_NAME='destructiveChangesPost.xml',DEPLOY_DIR_NAME='DEPLOYZIP',PERMISSION_SET_FOLDER_NAME='permissionsets';async function generateAndDeployZip({attachmentsId:_0x15099d,isExtractComponentsPermissionSets:_0x5f273e,isExtractComponentsProfiles:_0x4c04d9,preDestructiveAttachmentId:_0x4d0d37,postDestructiveAttachmentId:_0x478e90,branchId:_0x4e72d5,credentials:_0x4c63c7,metadataLogId:_0x176d75,environments:_0x1d9c9f,metaTypes:_0x5b96cb,apiVersion:_0x5648f4},_0x4a6754,_0x591941){const _0x21c01f=a102_0x44335c;var _0x92f55d;const _0x159d6d=(0x0,uuid_1['v4'])();try{const _0x5c750f=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsById'])(_0x4a6754,_0x15099d),_0x2c300e=_0x5c750f[_0x21c01f(0x118)]((_0x4f29b9,_0x5e3a61)=>({..._0x4f29b9,[_0x5e3a61['Id']]:_0x5e3a61[_0x21c01f(0x11b)]}),{}),_0x55d779=await getComponents(_0x5c750f,_0x4a6754,_0x2c300e),_0x2c4f67=await components_api_1['ComponentsApi'][_0x21c01f(0x114)](_0x4a6754,_0x5c750f['map'](({ParentId:_0x4bbd30})=>_0x4bbd30),_0x5648f4)[_0x21c01f(0x108)](_0x2ee46f=>components_api_1[_0x21c01f(0xc6)][_0x21c01f(0xcf)](_0x2ee46f));if(_0x4c04d9){const _0x4a6e0f=_0x55d779[_0x21c01f(0xf6)](({fileType:_0x5afa96})=>_0x5afa96===_0x21c01f(0xbe));await removePermission(_0x4a6e0f,_0x2c4f67);}const _0x5028d1=_0x55d779['filter'](({fileType:_0x4ffbd5})=>_0x4ffbd5===_0x21c01f(0xc7));if(_0x5028d1[_0x21c01f(0xf0)]&&_0x5f273e){await removePermission(_0x5028d1,_0x2c4f67);const {items:_0x5734ec}=await retrieveTargetPermissionSets(_0x5028d1,_0x5648f4,_0x591941);await mergePermissionSets(_0x5028d1,((_0x92f55d=_0x5734ec[_0x21c01f(0xc7)])===null||_0x92f55d===void 0x0?void 0x0:_0x92f55d[_0x21c01f(0xe7)])||[]);}await replaceEnvironments(_0x5b96cb,_0x1d9c9f,_0x55d779),await writeZip(_0x55d779,_0x159d6d),await generateAndWritePackageXML(_0x5c750f,_0x2c4f67,_0x159d6d,_0x5648f4);_0x4d0d37&&await saveDestructiveChanges(_0x4a6754,_0x4d0d37,DESTRUCTIVE_CHANGES_PER_NAME,_0x159d6d);_0x478e90&&await saveDestructiveChanges(_0x4a6754,_0x478e90,DESTRUCTIVE_CHANGES_POST_NAME,_0x159d6d);const _0x4a4ca4=(await createDeployZip(_0x159d6d)[_0x21c01f(0x108)](_0x2951a1=>{return _0x2951a1;}))[_0x21c01f(0x10d)]()['toString'](_0x21c01f(0xe2)),_0x4f094d=_0x4a4ca4[_0x21c01f(0xf0)];if(_0x4f094d>=components_api_1['MAX_ZIP_SIZE']){const _0x9c17e8=await createDeployZip(_0x159d6d),[_0x4a9960,_0x2873b8]=await components_api_1['ComponentsApi'][_0x21c01f(0x104)](_0x9c17e8,_0x4f094d),_0xee3139=await insertZip(_0x4a6754,_0x4e72d5,_0x4c63c7['orgId'],_0x176d75,_0x4a9960['toBuffer']()['toString']('base64'),_0x5648f4),_0x55a58f=await insertZip(_0x4a6754,_0x4e72d5,_0x4c63c7[_0x21c01f(0xe6)],_0x176d75,_0x2873b8['toBuffer']()['toString'](_0x21c01f(0xe2)),_0x5648f4);return _0xee3139+','+_0x55a58f;}else return await insertZip(_0x4a6754,_0x4e72d5,_0x4c63c7[_0x21c01f(0xe6)],_0x176d75,_0x4a4ca4,_0x5648f4);}catch(_0x3206c1){throw _0x3206c1;}finally{if(await fs_internal_1['FS'][_0x21c01f(0xbd)](path_1[_0x21c01f(0xd6)][_0x21c01f(0xd2)](process[_0x21c01f(0xd8)](),_0x21c01f(0xd9),_0x159d6d)))await(0x0,promises_1['rm'])(path_1[_0x21c01f(0xd6)]['join'](process[_0x21c01f(0xd8)](),'.temp',_0x159d6d),{'recursive':!![]});}}exports[a102_0x44335c(0x112)]=generateAndDeployZip;async function getComponents(_0xb01fde,_0x4fb7b5,_0x37624d){const _0x3c852e=a102_0x44335c,_0x47ff0f=[],_0x3e6c0d=await(0x0,fetch_attachments_1[_0x3c852e(0xd7)])(_0xb01fde,_0x4fb7b5);return await getComponentFromZip(_0x3e6c0d,_0x37624d)[_0x3c852e(0x108)](_0x232ce8=>{_0x47ff0f['push'](..._0x232ce8);}),_0x47ff0f;}async function getComponentFromZip(_0xdb4af4,_0x51561f){const _0x5cd891=a102_0x44335c,_0x4f14b0=[];for(const _0x3784f6 of _0xdb4af4){const _0x343ab0=await zip_1[_0x5cd891(0x117)][_0x5cd891(0x110)](_0x3784f6[_0x5cd891(0xc5)][_0x5cd891(0x115)]);for(const _0x1be6d5 in _0x343ab0[_0x5cd891(0xbf)]){!_0x343ab0[_0x5cd891(0xbf)][_0x1be6d5]['dir']&&_0x4f14b0['push']({'fileName':_0x1be6d5[_0x5cd891(0xf8)](_0x1be6d5['indexOf']('/')+0x1),'fileType':_0x51561f[_0x3784f6['id']],'body':_0x3784f6['values'][_0x5cd891(0x115)]});}}return _0x4f14b0;}function a102_0x30df(){const _0x567719=['(((.+)+)+)+$','Builder','replace','../utils/extract-component-permissions','buildObject','../utils/components-api','defineProperty','@flosum/salesforce','splitZip','8MJnHBd','5541599kGaDur','xml2js','then','text','84090zGxPsg','PartialRetrieve','BUILD','toBuffer','path','DEFLATE','unzip','2158950JzEtdD','generateAndDeployZip','277334psOjri','fetchComponentsDetailsByComponentsHistory','Body','14072047KuQwPu','Zip','reduce','search','mergeComponentPermissions','Name','/services/data/v','fetchAttachmentBody','writeFile','MetadataConstants','keys','exists','Profile','files','__importDefault','1543869xypfpZ','FOLDER_TO_METADATA_TYPE_MAP','package.xml','fileName','values','ComponentsApi','PermissionSet','extractComponentPermissions','Component__r','../../git/internal/fs.internal','createZip','../classes/logger','/sobjects/Attachment','types','removeNamespacePrefix','type','../../shared/utils/fetch-attachments','join','DeclarativeFilterOptions','fs/promises','destructiveChangesPre.xml','default','retrieveAttachments','cwd','.temp','../../git/writers/mdapi.writer','PERMISSION_SET','4zJPCiT','execute','fileType','addLocalFolder','find','every','base64','MetadataType','async','toString','orgId','components','1.0','body','Logger','map','constructor','adm-zip','http://soap.sforce.com/2006/04/metadata','file','length','push','post','../../git/parsers/utils/zip','Package','5DkCrtA','filter','generateAsync','substring','4496430ZmPGlp','src','70WzZVvI'];a102_0x30df=function(){return _0x567719;};return a102_0x30df();}async function removePermission(_0x335dbb,_0x274310){const _0x4edc37=a102_0x44335c;for(const _0x597e5b of _0x335dbb){const _0x1c6dd7=await zip_1[_0x4edc37(0x117)]['unzip'](_0x597e5b[_0x4edc37(0xe9)]),_0x5649ac=[];for(const _0x2fbd88 in _0x1c6dd7['files']){!_0x1c6dd7[_0x4edc37(0xbf)][_0x2fbd88]['dir']&&_0x5649ac['push']({'fileName':_0x2fbd88,'body':await _0x1c6dd7[_0x4edc37(0xbf)][_0x2fbd88][_0x4edc37(0xe4)](_0x4edc37(0x109))});}const _0x393287=await(0x0,extract_component_permissions_1[_0x4edc37(0xc8)])(_0x5649ac[0x0][_0x4edc37(0xe9)][_0x4edc37(0xe5)](),_0x274310,_0x597e5b[_0x4edc37(0xde)]),_0x3080e2=new xml2js_1['Builder']({'xmldec':{'version':_0x4edc37(0xe8),'encoding':'UTF-8'}}),_0x184f77=_0x3080e2[_0x4edc37(0x100)](_0x393287),_0x54ba21=zip_1[_0x4edc37(0x117)][_0x4edc37(0xcb)]();_0x54ba21['file'](_0x5649ac[0x0]['fileName'],_0x184f77),_0x597e5b[_0x4edc37(0xe9)]=await _0x54ba21['generateAsync']({'type':_0x4edc37(0xe2),'compression':_0x4edc37(0x10f),'compressionOptions':{'level':0x6}});}}function a102_0x30f3(_0xfba659,_0x2c8ae9){const _0x32b8c0=a102_0x30df();return a102_0x30f3=function(_0x582a39,_0x47d4ed){_0x582a39=_0x582a39-0xb8;let _0x30df6e=_0x32b8c0[_0x582a39];return _0x30df6e;},a102_0x30f3(_0xfba659,_0x2c8ae9);}async function retrieveTargetPermissionSets(_0x4e85d7,_0x1e22e5,_0x20992d){const _0x9594b0=a102_0x44335c,_0x41ea2a=_0x4e85d7['map'](_0x2158da=>PERMISSION_SET_FOLDER_NAME+'/'+_0x2158da[_0x9594b0(0xc4)])['join'](';'),_0x480bc8=[{'field':_0x9594b0(0xc4),'option':salesforce_1[_0x9594b0(0xd3)]['IN'],'value':_0x41ea2a}],_0x563055=new logger_1[(_0x9594b0(0xea))]();return new salesforce_1[(_0x9594b0(0x10b))](_0x1e22e5,_0x20992d,_0x563055,_0x480bc8,null,[salesforce_1[_0x9594b0(0xe3)][_0x9594b0(0xdb)]])[_0x9594b0(0xdd)]();}async function mergePermissionSets(_0x15613a,_0x3eff18){const _0x56599f=a102_0x44335c,_0x169ad6=_0x3eff18[_0x56599f(0x118)]((_0x58aaba,_0xdc8b35)=>_0x58aaba['set'](_0xdc8b35['listMetadataItem']['fileName'],_0xdc8b35),new Map());for(const _0x31c6ae of _0x15613a){const _0x428dd0=PERMISSION_SET_FOLDER_NAME+'/'+_0x31c6ae[_0x56599f(0xc4)],_0x37f8d4=_0x169ad6['get'](_0x428dd0);if(!_0x37f8d4)continue;const _0x5a2501=await zip_1[_0x56599f(0x117)][_0x56599f(0x110)](_0x31c6ae[_0x56599f(0xe9)]),_0x4bb9ba=await _0x5a2501['files'][_0x428dd0]['async'](_0x56599f(0x109)),_0x954f72=_0x37f8d4[_0x56599f(0xbf)][_0x428dd0][_0x56599f(0xe5)](),_0x30a0a4=await(0x0,extract_component_permissions_1[_0x56599f(0x11a)])(_0x4bb9ba,_0x954f72,_0x31c6ae[_0x56599f(0xde)]),_0x5acd39=zip_1[_0x56599f(0x117)][_0x56599f(0xcb)]();_0x5acd39[_0x56599f(0xef)](_0x428dd0,_0x30a0a4),_0x31c6ae[_0x56599f(0xe9)]=await _0x5acd39['generateAsync']({'type':'base64','compression':_0x56599f(0x10f),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x4cae86,_0x3bebfd,_0x219bcd){const _0x375b99=a102_0x44335c;for(const _0x4b6939 of _0x219bcd){if(_0x4cae86[_0x375b99(0xe1)](_0x3941b9=>_0x3941b9!==_0x4b6939[_0x375b99(0xde)]))continue;const _0x40a0f8=await zip_1[_0x375b99(0x117)]['unzip'](_0x4b6939[_0x375b99(0xe9)]);for(const _0x16d7dd in _0x40a0f8[_0x375b99(0xbf)]){if(!_0x40a0f8[_0x375b99(0xbf)][_0x16d7dd]['dir']){let _0x186418=await _0x40a0f8[_0x375b99(0xbf)][_0x16d7dd][_0x375b99(0xe4)](_0x375b99(0x109));for(const _0x369c03 of Object[_0x375b99(0xbc)](_0x3bebfd)){const _0x328913=new RegExp('%%'+_0x369c03+'%%','g');_0x186418=_0x186418[_0x375b99(0xfe)](_0x328913,_0x3bebfd[_0x369c03]);}_0x40a0f8[_0x375b99(0xef)](_0x16d7dd,_0x186418);}}_0x4b6939[_0x375b99(0xe9)]=await _0x40a0f8[_0x375b99(0xf7)]({'type':'base64','compression':_0x375b99(0x10f),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x9cc2da,_0x2c59cb){const _0x5f0b64=a102_0x44335c,_0x4cb9ca=new mdapi_writer_1['MDApiWriter']({'components':_0x9cc2da,'sourceDir':path_1[_0x5f0b64(0xd6)][_0x5f0b64(0xd2)](process[_0x5f0b64(0xd8)](),'.temp',_0x2c59cb,DEPLOY_DIR_NAME,_0x5f0b64(0xfa)),'skipChildErrors':![]});await _0x4cb9ca[_0x5f0b64(0xdd)]();}async function generateAndWritePackageXML(_0x463080,_0x314f8c,_0x598736,_0x2fcfbd){const _0x5f0a82=a102_0x44335c,_0x4270b7=getComponentsTypeAndName(_0x463080,_0x314f8c),_0x181ee1=[...new Set(_0x4270b7['map'](_0x3c9a87=>_0x3c9a87[_0x5f0a82(0xd0)]))],_0x1ddd9e={'Package':{'$':{'xmlns':_0x5f0a82(0xee)},'types':[],'version':''+_0x2fcfbd}};for(const _0x5c3e54 of _0x181ee1){const _0x4c0c75=_0x4270b7['filter'](_0x1f8169=>_0x1f8169[_0x5f0a82(0xd0)]===_0x5c3e54)[_0x5f0a82(0xeb)](_0x24a02b=>_0x24a02b['name']),_0x207ffa={'members':_0x4c0c75,'name':_0x5c3e54};_0x1ddd9e[_0x5f0a82(0xf4)][_0x5f0a82(0xce)][_0x5f0a82(0xf1)](_0x207ffa);}const _0x215b62=new xml2js_1[(_0x5f0a82(0xfd))]({'xmldec':{'version':_0x5f0a82(0xe8),'encoding':'UTF-8'}}),_0x3ab237=_0x215b62['buildObject'](_0x1ddd9e);await fs_internal_1['FS'][_0x5f0a82(0xba)](path_1[_0x5f0a82(0xd6)][_0x5f0a82(0xd2)](process[_0x5f0a82(0xd8)](),'.temp',_0x598736,DEPLOY_DIR_NAME,_0x5f0a82(0xfa),_0x5f0a82(0xc3)),_0x3ab237);}function getComponentsTypeAndName(_0x18551d,_0x354820){const _0xc32adc=a102_0x44335c;return _0x18551d[_0xc32adc(0x118)]((_0x5294c7,_0x588cb7)=>{const _0x5c3c3e=_0xc32adc,_0x27969a=_0x354820[_0x5c3c3e(0xe0)](_0x40b413=>_0x40b413['Id']===_0x588cb7['ParentId']);return _0x27969a&&_0x5294c7['push']({'name':_0x27969a[_0x5c3c3e(0xc9)]['Component_Name__c'],'type':salesforce_1[_0x5c3c3e(0xbb)][_0x5c3c3e(0xc2)][_0x588cb7[_0x5c3c3e(0x11b)]]||_0x588cb7['Name']}),_0x5294c7;},[]);}async function saveDestructiveChanges(_0x5f4654,_0x27cbd2,_0x4b1740,_0x39b09b){const _0x4ff1c8=a102_0x44335c,_0x964669=(await(0x0,fetch_attachments_1[_0x4ff1c8(0xb9)])(_0x5f4654,_0x27cbd2))[_0x4ff1c8(0xe5)]();await fs_internal_1['FS'][_0x4ff1c8(0xba)](path_1[_0x4ff1c8(0xd6)][_0x4ff1c8(0xd2)](process['cwd'](),'.temp',_0x39b09b,DEPLOY_DIR_NAME,_0x4ff1c8(0xfa),_0x4b1740),_0x964669);}async function createDeployZip(_0x599177){const _0x5f3302=a102_0x44335c,_0x3a02e5=new adm_zip_1[(_0x5f3302(0xd6))]();return await _0x3a02e5[_0x5f3302(0xdf)](path_1['default'][_0x5f3302(0xd2)](process[_0x5f3302(0xd8)](),_0x5f3302(0xd9),_0x599177,DEPLOY_DIR_NAME)),_0x3a02e5;}async function insertZip(_0x474d31,_0x355851,_0x213375,_0x787094,_0x507955,_0x10df44){const _0x323dda=a102_0x44335c,_0x25d93a={'ParentId':_0x355851,'Name':_0x323dda(0x10c)+_0x213375,'Description':_0x323dda(0x10c)+_0x787094,'Body':_0x507955},{data:_0x4649c5}=await _0x474d31[_0x323dda(0xf2)](_0x323dda(0xb8)+_0x10df44+_0x323dda(0xcd),_0x25d93a);return _0x4649c5['id'];}