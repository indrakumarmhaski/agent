const a228_0x31cea4=a228_0xe011;(function(_0x45ef48,_0x378b77){const _0x2a4427=a228_0xe011,_0x2d7777=_0x45ef48();while(!![]){try{const _0x28c6f2=-parseInt(_0x2a4427(0x1e1))/0x1*(-parseInt(_0x2a4427(0x200))/0x2)+-parseInt(_0x2a4427(0x20b))/0x3+parseInt(_0x2a4427(0x217))/0x4*(parseInt(_0x2a4427(0x1e7))/0x5)+-parseInt(_0x2a4427(0x202))/0x6*(parseInt(_0x2a4427(0x205))/0x7)+-parseInt(_0x2a4427(0x1e8))/0x8*(-parseInt(_0x2a4427(0x1d7))/0x9)+parseInt(_0x2a4427(0x204))/0xa*(parseInt(_0x2a4427(0x1dd))/0xb)+-parseInt(_0x2a4427(0x207))/0xc*(parseInt(_0x2a4427(0x1fd))/0xd);if(_0x28c6f2===_0x378b77)break;else _0x2d7777['push'](_0x2d7777['shift']());}catch(_0x2042cf){_0x2d7777['push'](_0x2d7777['shift']());}}}(a228_0x3a55,0x44ee6));const a228_0x118891=(function(){let _0x4832b2=!![];return function(_0x4bffe2,_0x5a5400){const _0xb83a96=_0x4832b2?function(){const _0x6c84bf=a228_0xe011;if(_0x5a5400){const _0x3ba2c0=_0x5a5400[_0x6c84bf(0x1fa)](_0x4bffe2,arguments);return _0x5a5400=null,_0x3ba2c0;}}:function(){};return _0x4832b2=![],_0xb83a96;};}()),a228_0x37d62e=a228_0x118891(this,function(){const _0x3868e8=a228_0xe011;return a228_0x37d62e[_0x3868e8(0x210)]()[_0x3868e8(0x1d0)](_0x3868e8(0x20e))[_0x3868e8(0x210)]()[_0x3868e8(0x1ec)](a228_0x37d62e)['search']('(((.+)+)+)+$');});a228_0x37d62e();function a228_0xe011(_0x440dab,_0x118426){const _0x2ca740=a228_0x3a55();return a228_0xe011=function(_0x37d62e,_0x118891){_0x37d62e=_0x37d62e-0x1cf;let _0x3a55c3=_0x2ca740[_0x37d62e];return _0x3a55c3;},a228_0xe011(_0x440dab,_0x118426);}'use strict';var __importDefault=this&&this[a228_0x31cea4(0x1f0)]||function(_0x9cd873){const _0xbcf37=a228_0x31cea4;return _0x9cd873&&_0x9cd873[_0xbcf37(0x1e0)]?_0x9cd873:{'default':_0x9cd873};};Object[a228_0x31cea4(0x1f5)](exports,a228_0x31cea4(0x1e0),{'value':!![]}),exports[a228_0x31cea4(0x21e)]=void 0x0;function a228_0x3a55(){const _0x4712ce=['235Rwndea','208RdTbjd','find','update','\x20COMPONENTS_SIZE\x20=\x20','constructor','reduce','../../../../constants','proceedRequests','__importDefault','repositoryId','Logger','SALESFORCE_MAX_REQUEST_SIZE_BYTES','../utils/composite.utils','defineProperty','logger','SalesforceError','default','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','apply','error','extractComponentIdsFromGraphsResponse','42549AUWzSH','toJSON','SalesforceCompositeService','4LdQFIX','../errors/salesforce.error','12VOtTGu','executeGraphs','679010RawznF','807303EZKZto','proceedChunksToUpload','108rqLBIS','composite','get','map','423444lizNui','inserted','componentsToDelete','(((.+)+)+)+$','floor','toString','../../../shared/utils','COMPONENTS_PER_CHUNK','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)','delete','graph','name','16480PCvQXe','removed','splice','manifests','../../../../core','proceededComponentsMeta','modified','SalesforceCommitsManager','sfLogger','search','log','proceedCommits','SalesforceComponentsManager','componentId','Cannot\x20upload\x20components\x20due\x20to\x20size\x20-\x20MAX_SIZE\x20=\x20','options','71919TXThZc','recordTypes','proceedCommitsToBranch','push','proceedCommitsToRepository','typedi','11muIvfF','commitId','stringify','__esModule','107149NpMBFR','branchId','length','insert','author','componentsToUpdate'];a228_0x3a55=function(){return _0x4712ce;};return a228_0x3a55();}const core_1=require(a228_0x31cea4(0x21b)),typedi_1=__importDefault(require(a228_0x31cea4(0x1dc))),constants_1=require(a228_0x31cea4(0x1ee)),utils_1=require(a228_0x31cea4(0x211)),salesforce_error_1=require(a228_0x31cea4(0x201)),composite_utils_1=require(a228_0x31cea4(0x1f4)),salesforce_components_manager_service_1=require('./salesforce-components-manager.service'),salesforce_composite_service_1=require('./salesforce-composite.service');class SalesforceCommitsManager{constructor(_0x3fe912){const _0x1c5135=a228_0x31cea4;this[_0x1c5135(0x1d6)]=_0x3fe912,this[_0x1c5135(0x212)]=0x3,this[_0x1c5135(0x1f6)]=new core_1[(_0x1c5135(0x1f2))](SalesforceCommitsManager[_0x1c5135(0x216)]),this['sfLogger']=this[_0x1c5135(0x1d6)][_0x1c5135(0x1f6)],this[_0x1c5135(0x208)]=typedi_1[_0x1c5135(0x1f8)][_0x1c5135(0x209)](salesforce_composite_service_1[_0x1c5135(0x1ff)]),this['proceededComponentsMeta']=[];}async[a228_0x31cea4(0x206)](_0xaf513d,_0xe0440c=![]){const _0x3c762f=a228_0x31cea4,_0x5e53af=async _0x17e67d=>{const _0x4798d6=a228_0xe011;await this[_0x4798d6(0x1f6)][_0x4798d6(0x1d1)]('Sending\x20'+_0x17e67d[_0x4798d6(0x1ed)]((_0x4fda49,_0x463c96)=>_0x4fda49+_0x463c96[_0x4798d6(0x1e3)],0x0)+'\x20requests\x20to\x20composite\x20api.');const _0x4dfb59=_0x17e67d[_0x4798d6(0x20a)]((_0x44f311,_0x246608)=>({'graphId':_0x4798d6(0x215)+_0x246608,'compositeRequest':_0x44f311})),_0x38e763=await this['composite'][_0x4798d6(0x203)](_0x4dfb59);if(_0xe0440c){const _0x1e3762=(0x0,composite_utils_1[_0x4798d6(0x1fc)])(_0x38e763);for(const {id:_0x1e0fc3,ref:_0x5dde80}of _0x1e3762){const _0x38578b=this[_0x4798d6(0x21c)][_0x4798d6(0x1e9)](_0x2e231a=>_0x2e231a['reference']===_0x5dde80);_0x38578b&&(_0x38578b[_0x4798d6(0x1d4)]=_0x1e0fc3);}}},_0x3dfd9d=0x1e8480;let _0x59488e=0x0,_0xf0e0ec=[];for(const _0x1cf10b of _0xaf513d){const _0x3faca5=_0x1cf10b[_0x3c762f(0x1ed)]((_0x13328d,_0x8ec4b4)=>{const _0x463445=_0x3c762f,_0x25a6b2=JSON[_0x463445(0x1df)](_0x8ec4b4)['length']*0x2;return _0x13328d+_0x25a6b2;},0x0);if(_0x3faca5>constants_1[_0x3c762f(0x1f3)])throw new salesforce_error_1[(_0x3c762f(0x1f7))](_0x3c762f(0x1d5)+constants_1[_0x3c762f(0x1f3)]+_0x3c762f(0x1eb)+_0x3faca5);_0x59488e+_0x3faca5>constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES']-_0x3dfd9d&&(await _0x5e53af(_0xf0e0ec),_0xf0e0ec=[],_0x59488e=0x0),_0x59488e+=_0x3faca5,_0xf0e0ec['push'](_0x1cf10b);}_0xf0e0ec[_0x3c762f(0x1e3)]&&await _0x5e53af(_0xf0e0ec);}async[a228_0x31cea4(0x1ef)](_0x406319,_0x1dfbc4=![]){const _0x1c2c69=a228_0x31cea4,_0x216f41=(this[_0x1c2c69(0x212)]+ +_0x1dfbc4)*0x3,_0xfde8ab=(0x0,utils_1['chunkArray'])(_0x406319,_0x216f41);try{while(_0xfde8ab[_0x1c2c69(0x1e3)]){const _0x11f40c=_0xfde8ab[_0x1c2c69(0x219)](0x0,Math[_0x1c2c69(0x20f)](constants_1[_0x1c2c69(0x1f9)]/_0x216f41));await this[_0x1c2c69(0x206)](_0x11f40c,_0x1dfbc4);}}catch(_0x5ac1ae){this[_0x1c2c69(0x1f6)][_0x1c2c69(0x1fb)](_0x5ac1ae instanceof salesforce_error_1[_0x1c2c69(0x1f7)]?JSON[_0x1c2c69(0x1df)](_0x5ac1ae[_0x1c2c69(0x1fe)](),null,0x2):_0x5ac1ae),this[_0x1c2c69(0x1cf)][_0x1c2c69(0x1d1)](_0x5ac1ae instanceof salesforce_error_1[_0x1c2c69(0x1f7)]?JSON[_0x1c2c69(0x1df)](_0x5ac1ae[_0x1c2c69(0x1fe)](),null,0x2):_0x5ac1ae[_0x1c2c69(0x210)]());throw _0x5ac1ae;}}async['proceedCommitsToRepository'](_0x5cbd17){const _0x13c039=a228_0x31cea4;for(const _0x764556 of _0x5cbd17){if(!_0x764556[_0x13c039(0x20c)][_0x13c039(0x1e3)]&&!_0x764556[_0x13c039(0x21d)]['length']&&!_0x764556[_0x13c039(0x218)][_0x13c039(0x1e3)])continue;const _0x25a50a=[],_0x37853d=[],_0x4c63a2=new salesforce_components_manager_service_1[(_0x13c039(0x1d3))](this[_0x13c039(0x1d6)][_0x13c039(0x1f1)],this[_0x13c039(0x1d6)][_0x13c039(0x1e2)],_0x764556[_0x13c039(0x1e5)],this['options'][_0x13c039(0x1d8)],this[_0x13c039(0x21c)]);_0x25a50a[_0x13c039(0x1da)](...await _0x4c63a2[_0x13c039(0x1e4)](_0x764556[_0x13c039(0x20c)],this[_0x13c039(0x1d6)][_0x13c039(0x1de)])),_0x25a50a[_0x13c039(0x1da)](...await _0x4c63a2[_0x13c039(0x1ea)](_0x764556['modified'],this['options']['commitId'])),_0x37853d[_0x13c039(0x1da)](await _0x4c63a2[_0x13c039(0x214)](_0x764556['removed'],!![])),this[_0x13c039(0x21c)]=_0x4c63a2['getProceededComponentsMeta'](),await this[_0x13c039(0x1ef)](_0x25a50a,!![]);for(const _0x35e2c1 of _0x37853d){_0x35e2c1[_0x13c039(0x21a)][_0x13c039(0x1e3)]&&await this[_0x13c039(0x1ef)](_0x35e2c1[_0x13c039(0x21a)],!![]),_0x35e2c1[_0x13c039(0x1e6)][_0x13c039(0x1e3)]&&await this['proceedRequests'](_0x35e2c1[_0x13c039(0x1e6)],!![]),_0x35e2c1[_0x13c039(0x20d)][_0x13c039(0x1e3)]&&await this['proceedRequests'](_0x35e2c1['componentsToDelete'],!![]);}this['logger']['log'](_0x13c039(0x213),_0x25a50a[_0x13c039(0x1e3)]);}}async[a228_0x31cea4(0x1d9)](_0x4f3447){const _0x4eef31=a228_0x31cea4,_0x33f76f=[],_0x41bd9a=[];for(const _0x4797aa of _0x4f3447){if(!_0x4797aa[_0x4eef31(0x20c)][_0x4eef31(0x1e3)]&&!_0x4797aa[_0x4eef31(0x21d)][_0x4eef31(0x1e3)]&&!_0x4797aa[_0x4eef31(0x218)][_0x4eef31(0x1e3)])continue;const _0x820e6=new salesforce_components_manager_service_1[(_0x4eef31(0x1d3))](this['options'][_0x4eef31(0x1f1)],this[_0x4eef31(0x1d6)][_0x4eef31(0x1e2)],_0x4797aa[_0x4eef31(0x1e5)],this[_0x4eef31(0x1d6)][_0x4eef31(0x1d8)],[]);_0x33f76f[_0x4eef31(0x1da)](...await _0x820e6[_0x4eef31(0x1e4)](_0x4797aa[_0x4eef31(0x20c)])),_0x33f76f[_0x4eef31(0x1da)](...await _0x820e6[_0x4eef31(0x1ea)](_0x4797aa[_0x4eef31(0x21d)])),_0x41bd9a[_0x4eef31(0x1da)](await _0x820e6['delete'](_0x4797aa['removed']));}this[_0x4eef31(0x1f6)]['log']('have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)',_0x33f76f[_0x4eef31(0x1e3)]),await this[_0x4eef31(0x1ef)](_0x33f76f);const _0x15d84f=_0x41bd9a[_0x4eef31(0x1ed)]((_0x21d3e5,_0x2f6afb)=>({'manifests':[..._0x21d3e5[_0x4eef31(0x21a)],..._0x2f6afb['manifests']],'componentsToDelete':[..._0x21d3e5['componentsToDelete'],..._0x2f6afb['componentsToDelete']],'componentsToUpdate':[..._0x21d3e5[_0x4eef31(0x1e6)],..._0x2f6afb['componentsToUpdate']]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0x15d84f[_0x4eef31(0x21a)][_0x4eef31(0x1e3)]&&await this[_0x4eef31(0x1ef)](_0x15d84f['manifests'],!![]),_0x15d84f[_0x4eef31(0x1e6)][_0x4eef31(0x1e3)]&&await this[_0x4eef31(0x1ef)](_0x15d84f['componentsToUpdate'],!![]),_0x15d84f[_0x4eef31(0x20d)][_0x4eef31(0x1e3)]&&await this[_0x4eef31(0x1ef)](_0x15d84f[_0x4eef31(0x20d)],!![]);}async[a228_0x31cea4(0x1d2)](_0x729ea1){const _0x519b53=a228_0x31cea4;this['options'][_0x519b53(0x1e2)]?await this[_0x519b53(0x1d9)](_0x729ea1):await this[_0x519b53(0x1db)](_0x729ea1);}}exports[a228_0x31cea4(0x21e)]=SalesforceCommitsManager;