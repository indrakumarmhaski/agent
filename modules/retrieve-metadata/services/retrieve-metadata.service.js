const a274_0x49be51=a274_0x2af9;(function(_0x1930cf,_0x450a7a){const _0x437886=a274_0x2af9,_0x7c309a=_0x1930cf();while(!![]){try{const _0x5764d7=parseInt(_0x437886(0x189))/0x1*(-parseInt(_0x437886(0x167))/0x2)+-parseInt(_0x437886(0x17d))/0x3+-parseInt(_0x437886(0x17b))/0x4+-parseInt(_0x437886(0x181))/0x5+-parseInt(_0x437886(0x170))/0x6+-parseInt(_0x437886(0x166))/0x7+parseInt(_0x437886(0x176))/0x8;if(_0x5764d7===_0x450a7a)break;else _0x7c309a['push'](_0x7c309a['shift']());}catch(_0x5ed1fe){_0x7c309a['push'](_0x7c309a['shift']());}}}(a274_0x281b,0x2fca5));const a274_0x2ae263=(function(){let _0x5f4849=!![];return function(_0x2795f3,_0x5c60f2){const _0x54d532=_0x5f4849?function(){const _0x4b19e5=a274_0x2af9;if(_0x5c60f2){const _0x17b6cb=_0x5c60f2[_0x4b19e5(0x17e)](_0x2795f3,arguments);return _0x5c60f2=null,_0x17b6cb;}}:function(){};return _0x5f4849=![],_0x54d532;};}()),a274_0x44a984=a274_0x2ae263(this,function(){const _0x4f3e35=a274_0x2af9;return a274_0x44a984[_0x4f3e35(0x19d)]()[_0x4f3e35(0x17a)](_0x4f3e35(0x169))[_0x4f3e35(0x19d)]()[_0x4f3e35(0x173)](a274_0x44a984)[_0x4f3e35(0x17a)](_0x4f3e35(0x169));});a274_0x44a984();function a274_0x2af9(_0x37c45d,_0x40a579){const _0x4b828f=a274_0x281b();return a274_0x2af9=function(_0x44a984,_0x2ae263){_0x44a984=_0x44a984-0x166;let _0x281be9=_0x4b828f[_0x44a984];return _0x281be9;},a274_0x2af9(_0x37c45d,_0x40a579);}'use strict';var __importDefault=this&&this[a274_0x49be51(0x18e)]||function(_0x34a3aa){return _0x34a3aa&&_0x34a3aa['__esModule']?_0x34a3aa:{'default':_0x34a3aa};};Object[a274_0x49be51(0x16f)](exports,'__esModule',{'value':!![]});function a274_0x281b(){const _0x374f7f=['../../../constants/job','constructor','FsUtils','IN_PROGRESS','11108480gbamDr','Result\x20not\x20found.','JobStatus','dataPath','search','175508fxYACN','readFile','856287SrbanU','apply','RETRIEVE_RESULT_FOLDER_NAME','default','1037770JQwoTV','slice','@flosum/utils','generateJobId','then','Chunk\x20not\x20found.','../../shared/utils/fs.utils','RETRIEVE_METADATA_FOLDER_NAME','644vdscvB','retrieveMetadataFolder','isExistsPath','../job/classes/state-manger','Job\x20not\x20completed.','__importDefault','getJobState','../../shared/utils/job.utils','create','RETRIEVE_RESULTS_IDS_FILENAME','getJobs','Job\x20log\x20not\x20found.','getJobStatus','path','data','getResult','utf-8','NotFoundError','getJobsIds','../constants','toString','.json','JOB_LOG_DETAILS_FILENAME','../../../core/errors/not-found.error','2423442lHMEjL','766EjZbYm','../job/classes/manifest-manger','(((.+)+)+)+$','join','push','../job/enums/logger.enums','fs/promises','parse','defineProperty','378558eZWSlY','BadRequestError'];a274_0x281b=function(){return _0x374f7f;};return a274_0x281b();}const job_utils_1=__importDefault(require(a274_0x49be51(0x190))),path_1=__importDefault(require(a274_0x49be51(0x196))),manifest_manger_1=__importDefault(require(a274_0x49be51(0x168))),state_manger_1=__importDefault(require(a274_0x49be51(0x18c))),promises_1=require(a274_0x49be51(0x16d)),utils_1=require(a274_0x49be51(0x183)),csv_utils_1=__importDefault(require('../../shared/utils/csv.utils')),not_found_error_1=require(a274_0x49be51(0x1a0)),logger_enums_1=require(a274_0x49be51(0x16c)),bad_request_error_1=require('../../../core/errors/bad-request.error'),job_1=require(a274_0x49be51(0x172)),fs_utils_1=require(a274_0x49be51(0x187)),constants_1=require(a274_0x49be51(0x19c)),path_2=require('../../../configs/path');class RetrieveMetadataService{static async[a274_0x49be51(0x193)](_0x289ed9,_0x37e2f0){const _0x1e03df=a274_0x49be51,_0x3b6ec6=await job_utils_1['default'][_0x1e03df(0x19b)](RetrieveMetadataService[_0x1e03df(0x18a)]),_0x14b440=await job_utils_1[_0x1e03df(0x180)]['sortJobsIds'](RetrieveMetadataService[_0x1e03df(0x18a)],_0x3b6ec6),_0x2381ef=_0x14b440[_0x1e03df(0x182)](_0x37e2f0,_0x37e2f0+_0x289ed9),_0x4e5166=[];for(const _0x32d532 of _0x2381ef){const _0x243110=await state_manger_1['default'][_0x1e03df(0x18f)](path_1[_0x1e03df(0x180)][_0x1e03df(0x16a)](RetrieveMetadataService[_0x1e03df(0x18a)],_0x32d532));_0x4e5166[_0x1e03df(0x16b)](_0x243110);}return _0x4e5166;}static async['createRetrieveJob'](_0x34d5b3){const _0x40da7b=a274_0x49be51,_0x3f93e0=job_utils_1['default'][_0x40da7b(0x184)](),_0x9f1456=path_1['default']['join'](RetrieveMetadataService[_0x40da7b(0x18a)],_0x3f93e0);await(0x0,fs_utils_1['makeDir'])(_0x9f1456),await manifest_manger_1[_0x40da7b(0x180)][_0x40da7b(0x191)](_0x9f1456,_0x34d5b3),await state_manger_1['default']['create'](_0x9f1456,_0x3f93e0);const _0x134e2c=path_1[_0x40da7b(0x180)]['join'](__dirname,job_1['JOB_PATH']);return job_utils_1[_0x40da7b(0x180)]['runJob'](_0x134e2c,{'jobStorePath':_0x9f1456,'jobId':_0x3f93e0})['catch'](async _0x411b21=>{const _0x54d24c=new state_manger_1['default'](_0x9f1456);await _0x54d24c['init'](),await _0x54d24c['setError'](_0x411b21);}),{'jobId':_0x3f93e0};}static async[a274_0x49be51(0x198)](_0x363b67){const _0x231e09=a274_0x49be51,{status:_0x48d577}=await RetrieveMetadataService[_0x231e09(0x195)](_0x363b67);if(_0x48d577===logger_enums_1['JobStatus'][_0x231e09(0x175)])throw new bad_request_error_1['BadRequestError'](_0x231e09(0x18d));const _0x434352=path_1[_0x231e09(0x180)]['join'](RetrieveMetadataService['retrieveMetadataFolder'],_0x363b67,constants_1[_0x231e09(0x192)]);if(await utils_1[_0x231e09(0x174)][_0x231e09(0x18b)](_0x434352))return(0x0,promises_1[_0x231e09(0x17c)])(_0x434352,_0x231e09(0x199))['then'](JSON['parse']);else throw new not_found_error_1['NotFoundError'](_0x231e09(0x177));}static async['getResultChunk'](_0x5c595d,_0x2e16a7){const _0x5e8a6d=a274_0x49be51,{status:_0x1c3c67}=await RetrieveMetadataService['getJobStatus'](_0x5c595d);if(_0x1c3c67===logger_enums_1[_0x5e8a6d(0x178)][_0x5e8a6d(0x175)])throw new bad_request_error_1[(_0x5e8a6d(0x171))](_0x5e8a6d(0x18d));const _0x3956c9=path_1[_0x5e8a6d(0x180)][_0x5e8a6d(0x16a)](RetrieveMetadataService[_0x5e8a6d(0x18a)],_0x5c595d,constants_1[_0x5e8a6d(0x17f)]),_0x1869be={'data':[]};if(await utils_1[_0x5e8a6d(0x174)][_0x5e8a6d(0x18b)](path_1['default'][_0x5e8a6d(0x16a)](_0x3956c9,_0x2e16a7+'.json')))_0x1869be[_0x5e8a6d(0x197)]=await(0x0,promises_1[_0x5e8a6d(0x17c)])(path_1[_0x5e8a6d(0x180)][_0x5e8a6d(0x16a)](_0x3956c9,_0x2e16a7+_0x5e8a6d(0x19e)),_0x5e8a6d(0x199))[_0x5e8a6d(0x185)](JSON[_0x5e8a6d(0x16e)]);else throw new not_found_error_1['NotFoundError'](_0x5e8a6d(0x186));return _0x1869be;}static async[a274_0x49be51(0x195)](_0x171185){const _0x39983e=a274_0x49be51;try{return await state_manger_1[_0x39983e(0x180)][_0x39983e(0x18f)](path_1['default']['join'](RetrieveMetadataService[_0x39983e(0x18a)],_0x171185));}catch(_0x417a09){throw new not_found_error_1[(_0x39983e(0x19a))](_0x417a09);}}static async['getJobLogs'](_0x562142){const _0x49096c=a274_0x49be51,_0x106703=path_1['default'][_0x49096c(0x16a)](RetrieveMetadataService['retrieveMetadataFolder'],_0x562142,job_1[_0x49096c(0x19f)]);if(await utils_1[_0x49096c(0x174)][_0x49096c(0x18b)](_0x106703))return(0x0,promises_1['readFile'])(_0x106703,_0x49096c(0x199))[_0x49096c(0x185)](_0x2b448d=>csv_utils_1[_0x49096c(0x180)]['parse'](_0x2b448d,{'columns':!![]}));throw new not_found_error_1[(_0x49096c(0x19a))](_0x49096c(0x194));}}exports['default']=RetrieveMetadataService,RetrieveMetadataService[a274_0x49be51(0x18a)]=path_1[a274_0x49be51(0x180)]['join'](path_2[a274_0x49be51(0x179)],constants_1[a274_0x49be51(0x188)]);