const a86_0x34550c=a86_0x6e9e;(function(_0x91c907,_0x18e91f){const _0x4208d8=a86_0x6e9e,_0x1516fa=_0x91c907();while(!![]){try{const _0xf78942=-parseInt(_0x4208d8(0x197))/0x1+parseInt(_0x4208d8(0x16b))/0x2+parseInt(_0x4208d8(0x14d))/0x3*(-parseInt(_0x4208d8(0x163))/0x4)+-parseInt(_0x4208d8(0x165))/0x5*(-parseInt(_0x4208d8(0x188))/0x6)+-parseInt(_0x4208d8(0x19e))/0x7*(-parseInt(_0x4208d8(0x151))/0x8)+-parseInt(_0x4208d8(0x159))/0x9*(parseInt(_0x4208d8(0x19c))/0xa)+parseInt(_0x4208d8(0x1a4))/0xb;if(_0xf78942===_0x18e91f)break;else _0x1516fa['push'](_0x1516fa['shift']());}catch(_0x1c6d7f){_0x1516fa['push'](_0x1516fa['shift']());}}}(a86_0x3598,0xcb4ba));const a86_0x372942=(function(){let _0x4c9b8c=!![];return function(_0x10a1f6,_0x56cc3a){const _0xdd05f9=_0x4c9b8c?function(){const _0xe636d=a86_0x6e9e;if(_0x56cc3a){const _0x5f3819=_0x56cc3a[_0xe636d(0x171)](_0x10a1f6,arguments);return _0x56cc3a=null,_0x5f3819;}}:function(){};return _0x4c9b8c=![],_0xdd05f9;};}()),a86_0x365493=a86_0x372942(this,function(){const _0x42c0b2=a86_0x6e9e;return a86_0x365493[_0x42c0b2(0x1a5)]()['search']('(((.+)+)+)+$')['toString']()[_0x42c0b2(0x17a)](a86_0x365493)[_0x42c0b2(0x15f)](_0x42c0b2(0x161));});a86_0x365493();'use strict';var __importDefault=this&&this[a86_0x34550c(0x17b)]||function(_0x3a59a6){const _0x3d414c=a86_0x34550c;return _0x3a59a6&&_0x3a59a6[_0x3d414c(0x158)]?_0x3a59a6:{'default':_0x3a59a6};};function a86_0x3598(){const _0x4826e=['2198932yVitZk','/services/data/','reduce','fs/promises','writeFile','destructiveChangesPost.xml','apply','file','body','DEFLATE','type','after\x20create\x20zip','../../../constants','join','length','constructor','__importDefault','xml2js','addLocalFolder','fetchAttachmentBody','Package','indexOf','unzip','post','text','map','name','1.0','files','6UPnNyl','fileType','buildObject','Zip','Builder','../utils/extract-component-permissions','fileName','src','dir','toBuffer','fetchAttachmentsDetailsById','uuid','generateAsync','BUILD','.temp','1474058UPpcKL','retrieveAttachments','orgId','filter','DEPLOYZIP','9603340foTgrL','http://soap.sforce.com/2006/04/metadata','18781chmWWX','default','extractComponentPermissions','base64','values','ComponentsApi','20961127NvErEh','toString','cwd','log','push','../../git/parsers/utils/zip','3488946QYlGlo','async','../../shared/utils/fetch-attachments','Name','3208PlfdzU','/sobjects/Attachment','then','UTF-8','Body','MAX_ZIP_SIZE','destructiveChangesPre.xml','__esModule','9ylALGp','splitZip','ParentId','adm-zip','createZip','find','search','replace','(((.+)+)+)+$','PermissionSet','4HfmZfe','removeNamespacePrefix','1745830nqoaru','substring','MDApiWriter','start','../../git/internal/fs.internal','../../git/parsers/mdapi'];a86_0x3598=function(){return _0x4826e;};return a86_0x3598();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['generateAndDeployZip']=void 0x0;const constants_1=require(a86_0x34550c(0x177)),path_1=__importDefault(require('path')),extract_component_permissions_1=require(a86_0x34550c(0x18d)),xml2js_1=require(a86_0x34550c(0x17c)),zip_1=require(a86_0x34550c(0x14c)),mdapi_1=require(a86_0x34550c(0x16a)),fs_internal_1=require(a86_0x34550c(0x169)),promises_1=require(a86_0x34550c(0x16e)),components_api_1=require('../utils/components-api'),adm_zip_1=__importDefault(require(a86_0x34550c(0x15c))),uuid_1=require(a86_0x34550c(0x193)),fetch_attachments_1=require(a86_0x34550c(0x14f)),DESTRUCTIVE_CHANGES_PER_NAME=a86_0x34550c(0x157),DESTRUCTIVE_CHANGES_POST_NAME=a86_0x34550c(0x170),DEPLOY_DIR_NAME=a86_0x34550c(0x19b);async function generateAndDeployZip({attachmentsId:_0x42da89,isExtractComponentsPermissions:_0x1c30ac,preDestructiveAttachmentId:_0x5c796c,postDestructiveAttachmentId:_0x463379,branchId:_0x4f8f92,credentials:_0x5b544,metadataLogId:_0x43e86a,environments:_0x147681,metaTypes:_0x1bd222},_0x5df4e6){const _0x11364d=a86_0x34550c,_0x24174f=(0x0,uuid_1['v4'])();try{const _0x1762f6=await(0x0,fetch_attachments_1[_0x11364d(0x192)])(_0x5df4e6,_0x42da89),_0x57e81e=_0x1762f6[_0x11364d(0x16d)]((_0x43ffec,_0x606f05)=>({..._0x43ffec,[_0x606f05['Id']]:_0x606f05[_0x11364d(0x150)]}),{}),_0x246dc1=await getComponents(_0x1762f6,_0x5df4e6,_0x57e81e),_0x4f51f7=await components_api_1[_0x11364d(0x1a3)]['fetchComponentsDetailsByComponentsHistory'](_0x5df4e6,_0x1762f6['map'](({ParentId:_0x10db18})=>_0x10db18))[_0x11364d(0x153)](_0x2bbdd8=>components_api_1[_0x11364d(0x1a3)][_0x11364d(0x164)](_0x2bbdd8));if(_0x1c30ac){const _0x24d70e=_0x246dc1[_0x11364d(0x19a)](({fileType:_0x30fc65})=>_0x30fc65==='Profile'||_0x30fc65===_0x11364d(0x162));await removePermission(_0x24d70e,_0x4f51f7);}await replaceEnvironments(_0x1bd222,_0x147681,_0x246dc1),await writeZip(_0x246dc1,_0x24174f),await generateAndWritePackageXML(_0x1762f6,_0x4f51f7,_0x24174f);_0x5c796c&&await saveDestructiveChanges(_0x5df4e6,_0x5c796c,DESTRUCTIVE_CHANGES_PER_NAME,_0x24174f);_0x463379&&await saveDestructiveChanges(_0x5df4e6,_0x463379,DESTRUCTIVE_CHANGES_POST_NAME,_0x24174f);const _0x47bf25=(await createDeployZip(_0x24174f)[_0x11364d(0x153)](_0x460da3=>{return _0x460da3;}))[_0x11364d(0x191)]()[_0x11364d(0x1a5)]('base64');console[_0x11364d(0x14a)](_0x11364d(0x176));const _0x263adf=_0x47bf25[_0x11364d(0x179)];if(_0x263adf>=components_api_1[_0x11364d(0x156)]){const _0x5ce1e1=await createDeployZip(_0x24174f);console[_0x11364d(0x14a)]('after\x20create\x20second\x20zip');const [_0x22ec82,_0xf70468]=await components_api_1[_0x11364d(0x1a3)][_0x11364d(0x15a)](_0x5ce1e1,_0x263adf),_0x4d256f=await insertZip(_0x5df4e6,_0x4f8f92,_0x5b544[_0x11364d(0x199)],_0x43e86a,_0x22ec82[_0x11364d(0x191)]()[_0x11364d(0x1a5)](_0x11364d(0x1a1))),_0x11c3a7=await insertZip(_0x5df4e6,_0x4f8f92,_0x5b544['orgId'],_0x43e86a,_0xf70468[_0x11364d(0x191)]()[_0x11364d(0x1a5)](_0x11364d(0x1a1)));return _0x4d256f+','+_0x11c3a7;}else return await insertZip(_0x5df4e6,_0x4f8f92,_0x5b544[_0x11364d(0x199)],_0x43e86a,_0x47bf25);}catch(_0x3cce99){throw _0x3cce99;}finally{if(await fs_internal_1['FS']['exists'](path_1[_0x11364d(0x19f)][_0x11364d(0x178)](process[_0x11364d(0x149)](),_0x11364d(0x196),_0x24174f)))await(0x0,promises_1['rm'])(path_1[_0x11364d(0x19f)][_0x11364d(0x178)](process['cwd'](),'.temp',_0x24174f),{'recursive':!![]});}}exports['generateAndDeployZip']=generateAndDeployZip;function a86_0x6e9e(_0x283a46,_0x3acb55){const _0x2266b6=a86_0x3598();return a86_0x6e9e=function(_0x365493,_0x372942){_0x365493=_0x365493-0x149;let _0x359832=_0x2266b6[_0x365493];return _0x359832;},a86_0x6e9e(_0x283a46,_0x3acb55);}async function getComponents(_0x29568e,_0x414135,_0x3c99aa){const _0x3b86c2=a86_0x34550c,_0x577e6a=[],_0x5b52ed=await(0x0,fetch_attachments_1[_0x3b86c2(0x198)])(_0x29568e,_0x414135);return await getComponentFromZip(_0x5b52ed,_0x3c99aa)['then'](_0x6a1488=>{_0x577e6a['push'](..._0x6a1488);}),_0x577e6a;}async function getComponentFromZip(_0x3e5220,_0x272e1c){const _0x5b0d6a=a86_0x34550c,_0x24eab8=[];for(const _0x3cc6cd of _0x3e5220){const _0x1b4ed3=await zip_1[_0x5b0d6a(0x18b)][_0x5b0d6a(0x181)](_0x3cc6cd[_0x5b0d6a(0x1a2)]['Body']);for(const _0x2c9139 in _0x1b4ed3[_0x5b0d6a(0x187)]){!_0x1b4ed3[_0x5b0d6a(0x187)][_0x2c9139][_0x5b0d6a(0x190)]&&_0x24eab8[_0x5b0d6a(0x14b)]({'fileName':_0x2c9139['substring'](_0x2c9139[_0x5b0d6a(0x180)]('/')+0x1),'fileType':_0x272e1c[_0x3cc6cd['id']],'body':_0x3cc6cd[_0x5b0d6a(0x1a2)][_0x5b0d6a(0x155)]});}}return _0x24eab8;}async function removePermission(_0x37d660,_0x376119){const _0x56b35f=a86_0x34550c;for(const _0x17e7ab of _0x37d660){const _0x153bc0=await zip_1[_0x56b35f(0x18b)][_0x56b35f(0x181)](_0x17e7ab[_0x56b35f(0x173)]),_0x4d8935=[];for(const _0x168214 in _0x153bc0[_0x56b35f(0x187)]){!_0x153bc0[_0x56b35f(0x187)][_0x168214]['dir']&&_0x4d8935[_0x56b35f(0x14b)]({'fileName':_0x168214,'body':await _0x153bc0['files'][_0x168214]['async'](_0x56b35f(0x183))});}const _0x1d507b=await(0x0,extract_component_permissions_1[_0x56b35f(0x1a0)])(_0x4d8935[0x0][_0x56b35f(0x173)][_0x56b35f(0x1a5)](),_0x376119,_0x17e7ab[_0x56b35f(0x189)]),_0x18adae=new xml2js_1[(_0x56b35f(0x18c))]({'xmldec':{'version':'1.0','encoding':'UTF-8'}}),_0xec6c15=_0x18adae['buildObject'](_0x1d507b),_0x3c22d9=zip_1['Zip'][_0x56b35f(0x15d)]();_0x3c22d9[_0x56b35f(0x172)](_0x4d8935[0x0][_0x56b35f(0x18e)],_0xec6c15),_0x17e7ab[_0x56b35f(0x173)]=await _0x3c22d9[_0x56b35f(0x194)]({'type':_0x56b35f(0x1a1),'compression':_0x56b35f(0x174),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x459b6d,_0x52ac72,_0x3a9fc7){const _0xfad7ea=a86_0x34550c;for(const _0x23f1db of _0x3a9fc7){if(_0x459b6d['every'](_0x3d1883=>_0x3d1883!==_0x23f1db[_0xfad7ea(0x189)]))continue;const _0x2169e6=await zip_1[_0xfad7ea(0x18b)]['unzip'](_0x23f1db[_0xfad7ea(0x173)]);for(const _0x203dd2 in _0x2169e6[_0xfad7ea(0x187)]){if(!_0x2169e6[_0xfad7ea(0x187)][_0x203dd2]['dir']){let _0x24e4ed=await _0x2169e6[_0xfad7ea(0x187)][_0x203dd2][_0xfad7ea(0x14e)](_0xfad7ea(0x183));for(const _0x5c5d3b of Object['keys'](_0x52ac72)){const _0x30879c=new RegExp('%%'+_0x5c5d3b+'%%','g');_0x24e4ed=_0x24e4ed[_0xfad7ea(0x160)](_0x30879c,_0x52ac72[_0x5c5d3b]);}_0x2169e6[_0xfad7ea(0x172)](_0x203dd2,_0x24e4ed);}}_0x23f1db[_0xfad7ea(0x173)]=await _0x2169e6['generateAsync']({'type':_0xfad7ea(0x1a1),'compression':_0xfad7ea(0x174),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x25215d,_0x336efa){const _0x44b104=a86_0x34550c,_0x448237=new mdapi_1[(_0x44b104(0x167))]({'components':_0x25215d,'sourceDir':path_1['default']['join'](process[_0x44b104(0x149)](),_0x44b104(0x196),_0x336efa,DEPLOY_DIR_NAME,'src'),'skipChildErrors':![]});await _0x448237[_0x44b104(0x168)]();}async function generateAndWritePackageXML(_0x308372,_0x327703,_0x1dab87){const _0x207151=a86_0x34550c,_0x51f2b5=getComponentsTypeAndName(_0x308372,_0x327703),_0x4df58b=[...new Set(_0x51f2b5[_0x207151(0x184)](_0x3f40cd=>_0x3f40cd['type']))],_0x266f26={'Package':{'$':{'xmlns':_0x207151(0x19d)},'types':[],'version':''+constants_1['SALESFORCE_API_VERSION'][_0x207151(0x166)](0x1)}};for(const _0x146d3b of _0x4df58b){const _0x5e36dd=_0x51f2b5[_0x207151(0x19a)](_0x33c709=>_0x33c709[_0x207151(0x175)]===_0x146d3b)['map'](_0x28bc8b=>_0x28bc8b[_0x207151(0x185)]),_0x5a8a44={'members':_0x5e36dd,'name':_0x146d3b};_0x266f26[_0x207151(0x17f)]['types'][_0x207151(0x14b)](_0x5a8a44);}const _0x212bc4=new xml2js_1[(_0x207151(0x18c))]({'xmldec':{'version':_0x207151(0x186),'encoding':_0x207151(0x154)}}),_0x486414=_0x212bc4[_0x207151(0x18a)](_0x266f26);await fs_internal_1['FS'][_0x207151(0x16f)](path_1[_0x207151(0x19f)][_0x207151(0x178)](process[_0x207151(0x149)](),_0x207151(0x196),_0x1dab87,DEPLOY_DIR_NAME,'src','package.xml'),_0x486414);}function getComponentsTypeAndName(_0x1676fb,_0xb0f6cb){const _0x26c9b3=a86_0x34550c;return _0x1676fb[_0x26c9b3(0x16d)]((_0x17d88a,_0x22b45a)=>{const _0x5dca32=_0x26c9b3,_0x26e3bb=_0xb0f6cb[_0x5dca32(0x15e)](_0x628d70=>_0x628d70['Id']===_0x22b45a[_0x5dca32(0x15b)]);return _0x26e3bb&&_0x17d88a['push']({'name':_0x26e3bb['Component__r']['Component_Name__c'],'type':_0x22b45a['Name']}),_0x17d88a;},[]);}async function saveDestructiveChanges(_0x9c7d28,_0x4f4e9b,_0x1cfe07,_0x1edd40){const _0x12d76f=a86_0x34550c,_0x1a28a5=(await(0x0,fetch_attachments_1[_0x12d76f(0x17e)])(_0x9c7d28,_0x4f4e9b))['toString']();await fs_internal_1['FS'][_0x12d76f(0x16f)](path_1[_0x12d76f(0x19f)]['join'](process['cwd'](),_0x12d76f(0x196),_0x1edd40,DEPLOY_DIR_NAME,_0x12d76f(0x18f),_0x1cfe07),_0x1a28a5);}async function createDeployZip(_0x3596a5){const _0x3e5562=a86_0x34550c,_0x3e87cb=new adm_zip_1[(_0x3e5562(0x19f))]();return await _0x3e87cb[_0x3e5562(0x17d)](path_1[_0x3e5562(0x19f)][_0x3e5562(0x178)](process[_0x3e5562(0x149)](),_0x3e5562(0x196),_0x3596a5,DEPLOY_DIR_NAME)),_0x3e87cb;}async function insertZip(_0x3c9159,_0x59a40f,_0x196bc5,_0x4486fa,_0x250132){const _0x1420ed=a86_0x34550c,_0x47f159={'ParentId':_0x59a40f,'Name':_0x1420ed(0x195)+_0x196bc5,'Description':_0x1420ed(0x195)+_0x4486fa,'Body':_0x250132},{data:_0x48eac3}=await _0x3c9159[_0x1420ed(0x182)](_0x1420ed(0x16c)+constants_1['SALESFORCE_API_VERSION']+_0x1420ed(0x152),_0x47f159);return _0x48eac3['id'];}