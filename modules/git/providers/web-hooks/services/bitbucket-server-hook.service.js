const a160_0x63a4e=a160_0x2af0;(function(_0x48a6e6,_0x4b96f6){const _0x43dec9=a160_0x2af0,_0x45e134=_0x48a6e6();while(!![]){try{const _0x335bbb=-parseInt(_0x43dec9(0xdd))/0x1*(-parseInt(_0x43dec9(0xd5))/0x2)+parseInt(_0x43dec9(0xd1))/0x3+-parseInt(_0x43dec9(0xea))/0x4*(-parseInt(_0x43dec9(0xcf))/0x5)+-parseInt(_0x43dec9(0xd0))/0x6+-parseInt(_0x43dec9(0xd2))/0x7*(-parseInt(_0x43dec9(0xd8))/0x8)+parseInt(_0x43dec9(0xde))/0x9+parseInt(_0x43dec9(0xd7))/0xa*(-parseInt(_0x43dec9(0xe5))/0xb);if(_0x335bbb===_0x4b96f6)break;else _0x45e134['push'](_0x45e134['shift']());}catch(_0x40f5fe){_0x45e134['push'](_0x45e134['shift']());}}}(a160_0x5732,0xe5e47));const a160_0x424e0a=(function(){let _0x599651=!![];return function(_0x18e56e,_0x205e22){const _0x38ba1a=_0x599651?function(){if(_0x205e22){const _0x84df0c=_0x205e22['apply'](_0x18e56e,arguments);return _0x205e22=null,_0x84df0c;}}:function(){};return _0x599651=![],_0x38ba1a;};}()),a160_0x5daaef=a160_0x424e0a(this,function(){const _0x2acef8=a160_0x2af0;return a160_0x5daaef['toString']()[_0x2acef8(0xe6)](_0x2acef8(0xe0))[_0x2acef8(0xcd)]()[_0x2acef8(0xce)](a160_0x5daaef)[_0x2acef8(0xe6)](_0x2acef8(0xe0));});a160_0x5daaef();'use strict';Object['defineProperty'](exports,a160_0x63a4e(0xd4),{'value':!![]}),exports[a160_0x63a4e(0xda)]=void 0x0;const bad_request_error_1=require(a160_0x63a4e(0xec)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');function a160_0x2af0(_0x3d8340,_0x2fefc5){const _0x2d8781=a160_0x5732();return a160_0x2af0=function(_0x5daaef,_0x424e0a){_0x5daaef=_0x5daaef-0xc7;let _0x573218=_0x2d8781[_0x5daaef];return _0x573218;},a160_0x2af0(_0x3d8340,_0x2fefc5);}function a160_0x5732(){const _0x1ed99d=['GitHookService','put','toString','constructor','6492875mPbexn','936972cQKlZY','3515136LSmUaY','581SrIlKX','post','__esModule','1820510QExZDQ','get','30TcGbus','113656uFXgrQ','create','BitbucketServerHookService','webhooks/','BadRequestError','2PXjWXu','11299950ltAuEB','createRequest','(((.+)+)+)+$','repository','update','request','NotFoundError','20634999LCAbLh','search','map','delete','values','4oUHnZb','fromBitbucketServer','../../../../../core/errors/bad-request.error','api','HookDto','webhooks','getAll'];a160_0x5732=function(){return _0x1ed99d;};return a160_0x5732();}class BitbucketServerHookService extends git_hook_service_1[a160_0x63a4e(0xcb)]{constructor(_0x195994,_0x450566){const _0x200d22=a160_0x63a4e;super(_0x195994),this[_0x200d22(0xc7)]=_0x450566,this[_0x200d22(0xe3)]=this[_0x200d22(0xdf)]();}[a160_0x63a4e(0xdf)](){const _0x27ac0b=a160_0x63a4e;return this[_0x27ac0b(0xc7)][_0x27ac0b(0xdf)](this[_0x27ac0b(0xe1)]['apiUrl']);}async[a160_0x63a4e(0xd9)](_0x2a7ffc){const _0x30d12b=a160_0x63a4e;try{const _0x32563e=await this['request'][_0x30d12b(0xd3)](_0x30d12b(0xc9),_0x2a7ffc);return hook_dto_1[_0x30d12b(0xc8)][_0x30d12b(0xeb)](_0x32563e);}catch(_0x4085de){throw new bad_request_error_1[(_0x30d12b(0xdc))](_0x4085de);}}async['getOne'](_0x476199){const _0x42266d=a160_0x63a4e;try{const _0x3c758b=await this['request'][_0x42266d(0xd6)](_0x42266d(0xdb)+_0x476199);return hook_dto_1[_0x42266d(0xc8)][_0x42266d(0xeb)](_0x3c758b);}catch(_0x57c834){throw new not_found_error_1[(_0x42266d(0xe4))](_0x57c834);}}async[a160_0x63a4e(0xca)](){const _0x64d57d=a160_0x63a4e;try{const _0x37aa61=await this[_0x64d57d(0xe3)]['get']('webhooks');return _0x37aa61[_0x64d57d(0xe9)][_0x64d57d(0xe7)](_0x5b692b=>hook_dto_1[_0x64d57d(0xc8)][_0x64d57d(0xeb)](_0x5b692b));}catch(_0xb833b7){throw new not_found_error_1[(_0x64d57d(0xe4))](_0xb833b7);}}async[a160_0x63a4e(0xe2)](_0x97caaa,_0x54d22d){const _0x10803b=a160_0x63a4e;try{const _0x4e4d93=await this[_0x10803b(0xe3)][_0x10803b(0xcc)](_0x10803b(0xdb)+_0x97caaa,_0x54d22d);return hook_dto_1[_0x10803b(0xc8)][_0x10803b(0xeb)](_0x4e4d93);}catch(_0x34a36e){throw new not_found_error_1['NotFoundError'](_0x34a36e);}}async[a160_0x63a4e(0xe8)](_0x10ac36){const _0x3b7af4=a160_0x63a4e;try{await this['request']['delete'](_0x3b7af4(0xdb)+_0x10ac36);}catch(_0x261ab7){throw new not_found_error_1['NotFoundError'](_0x261ab7);}}}exports['BitbucketServerHookService']=BitbucketServerHookService;