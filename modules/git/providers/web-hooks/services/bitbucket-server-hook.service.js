const a248_0x6ea628=a248_0xbe93;(function(_0x210b9b,_0x282179){const _0x25566f=a248_0xbe93,_0x249fac=_0x210b9b();while(!![]){try{const _0x43babe=-parseInt(_0x25566f(0x11d))/0x1+parseInt(_0x25566f(0x11c))/0x2*(parseInt(_0x25566f(0x10c))/0x3)+-parseInt(_0x25566f(0x11a))/0x4*(-parseInt(_0x25566f(0x10f))/0x5)+-parseInt(_0x25566f(0x11e))/0x6+parseInt(_0x25566f(0x10e))/0x7+parseInt(_0x25566f(0x117))/0x8*(-parseInt(_0x25566f(0x100))/0x9)+parseInt(_0x25566f(0xfc))/0xa;if(_0x43babe===_0x282179)break;else _0x249fac['push'](_0x249fac['shift']());}catch(_0x10a315){_0x249fac['push'](_0x249fac['shift']());}}}(a248_0x5d5d,0x2bf6c));const a248_0x5338b3=(function(){let _0x3576fc=!![];return function(_0x3199b2,_0x4bf83a){const _0x14aeb6=_0x3576fc?function(){const _0x18e802=a248_0xbe93;if(_0x4bf83a){const _0xba2f1f=_0x4bf83a[_0x18e802(0x102)](_0x3199b2,arguments);return _0x4bf83a=null,_0xba2f1f;}}:function(){};return _0x3576fc=![],_0x14aeb6;};}()),a248_0x19a11e=a248_0x5338b3(this,function(){const _0x41032e=a248_0xbe93;return a248_0x19a11e[_0x41032e(0x107)]()[_0x41032e(0xfe)]('(((.+)+)+)+$')[_0x41032e(0x107)]()[_0x41032e(0x105)](a248_0x19a11e)[_0x41032e(0xfe)](_0x41032e(0xf7));});a248_0x19a11e();'use strict';function a248_0xbe93(_0x1899fe,_0x40d6e0){const _0x22ebd9=a248_0x5d5d();return a248_0xbe93=function(_0x19a11e,_0x5338b3){_0x19a11e=_0x19a11e-0xf6;let _0x5d5d84=_0x22ebd9[_0x19a11e];return _0x5d5d84;},a248_0xbe93(_0x1899fe,_0x40d6e0);}Object[a248_0x6ea628(0x119)](exports,a248_0x6ea628(0x103),{'value':!![]}),exports[a248_0x6ea628(0x114)]=void 0x0;const bad_request_error_1=require(a248_0x6ea628(0x10b)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require(a248_0x6ea628(0x104)),git_hook_service_1=require(a248_0x6ea628(0x101));function a248_0x5d5d(){const _0x499d7c=['126285vRZLem','getOne','create','webhooks/','fromBitbucketServer','BitbucketServerHookService','BadRequestError','delete','3368qMMJZU','values','defineProperty','20jhxqAf','get','2vcQZPp','185855FsToZI','491316XwazJz','request','(((.+)+)+)+$','repository','createRequest','getAll','apiUrl','1899350qZaiAI','post','search','NotFoundError','4851JszBLl','./git-hook.service','apply','__esModule','../dto/hook.dto','constructor','api','toString','HookDto','webhooks','update','../../../../../core/errors/bad-request.error','607101MTBFZc','GitHookService','1093043HOutCQ'];a248_0x5d5d=function(){return _0x499d7c;};return a248_0x5d5d();}class BitbucketServerHookService extends git_hook_service_1[a248_0x6ea628(0x10d)]{constructor(_0x3c5250,_0x296ece){const _0x4272a2=a248_0x6ea628;super(_0x3c5250),this[_0x4272a2(0x106)]=_0x296ece,this[_0x4272a2(0xf6)]=this[_0x4272a2(0xf9)]();}[a248_0x6ea628(0xf9)](){const _0x326c0d=a248_0x6ea628;return this[_0x326c0d(0x106)]['createRequest'](this[_0x326c0d(0xf8)][_0x326c0d(0xfb)]);}async[a248_0x6ea628(0x111)](_0x378bdb){const _0x27dc75=a248_0x6ea628;try{const _0x263c7b=await this[_0x27dc75(0xf6)][_0x27dc75(0xfd)](_0x27dc75(0x109),_0x378bdb);return hook_dto_1[_0x27dc75(0x108)]['fromBitbucketServer'](_0x263c7b);}catch(_0x494ca5){throw new bad_request_error_1[(_0x27dc75(0x115))](_0x494ca5);}}async[a248_0x6ea628(0x110)](_0x3fd1fd){const _0x49aa2d=a248_0x6ea628;try{const _0x24dc74=await this[_0x49aa2d(0xf6)][_0x49aa2d(0x11b)](_0x49aa2d(0x112)+_0x3fd1fd);return hook_dto_1[_0x49aa2d(0x108)][_0x49aa2d(0x113)](_0x24dc74);}catch(_0x2453de){throw new not_found_error_1[(_0x49aa2d(0xff))](_0x2453de);}}async[a248_0x6ea628(0xfa)](){const _0xea4f93=a248_0x6ea628;try{const _0x118fd8=await this[_0xea4f93(0xf6)][_0xea4f93(0x11b)]('webhooks');return _0x118fd8[_0xea4f93(0x118)]['map'](_0x49698e=>hook_dto_1[_0xea4f93(0x108)][_0xea4f93(0x113)](_0x49698e));}catch(_0x5e3dc6){throw new not_found_error_1[(_0xea4f93(0xff))](_0x5e3dc6);}}async[a248_0x6ea628(0x10a)](_0x2dc9ba,_0x413961){const _0xb4a8a1=a248_0x6ea628;try{const _0x34068e=await this[_0xb4a8a1(0xf6)]['put'](_0xb4a8a1(0x112)+_0x2dc9ba,_0x413961);return hook_dto_1['HookDto'][_0xb4a8a1(0x113)](_0x34068e);}catch(_0x1d646d){throw new not_found_error_1[(_0xb4a8a1(0xff))](_0x1d646d);}}async['delete'](_0x4a8ce8){const _0x3378fd=a248_0x6ea628;try{await this[_0x3378fd(0xf6)][_0x3378fd(0x116)]('webhooks/'+_0x4a8ce8);}catch(_0x3306a8){throw new not_found_error_1[(_0x3378fd(0xff))](_0x3306a8);}}}exports[a248_0x6ea628(0x114)]=BitbucketServerHookService;