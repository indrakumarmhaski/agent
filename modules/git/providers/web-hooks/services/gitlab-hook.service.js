const a164_0xccb21=a164_0xcf60;(function(_0x31acf3,_0x80a7fd){const _0x20c8eb=a164_0xcf60,_0x17f0ee=_0x31acf3();while(!![]){try{const _0xc5a7ba=-parseInt(_0x20c8eb(0x10f))/0x1*(-parseInt(_0x20c8eb(0x100))/0x2)+parseInt(_0x20c8eb(0x10c))/0x3+-parseInt(_0x20c8eb(0x110))/0x4*(-parseInt(_0x20c8eb(0xf8))/0x5)+-parseInt(_0x20c8eb(0x10d))/0x6+-parseInt(_0x20c8eb(0x104))/0x7+parseInt(_0x20c8eb(0x119))/0x8*(-parseInt(_0x20c8eb(0x113))/0x9)+parseInt(_0x20c8eb(0x10a))/0xa*(parseInt(_0x20c8eb(0x11a))/0xb);if(_0xc5a7ba===_0x80a7fd)break;else _0x17f0ee['push'](_0x17f0ee['shift']());}catch(_0x4c98b0){_0x17f0ee['push'](_0x17f0ee['shift']());}}}(a164_0x5906,0xbad99));const a164_0x33756c=(function(){let _0x2106b3=!![];return function(_0x1226b9,_0xa2dd76){const _0x20ab64=_0x2106b3?function(){if(_0xa2dd76){const _0x5404c1=_0xa2dd76['apply'](_0x1226b9,arguments);return _0xa2dd76=null,_0x5404c1;}}:function(){};return _0x2106b3=![],_0x20ab64;};}()),a164_0x55bd84=a164_0x33756c(this,function(){const _0x1e2cf5=a164_0xcf60;return a164_0x55bd84[_0x1e2cf5(0x105)]()['search'](_0x1e2cf5(0x106))[_0x1e2cf5(0x105)]()[_0x1e2cf5(0x103)](a164_0x55bd84)[_0x1e2cf5(0x112)](_0x1e2cf5(0x106));});a164_0x55bd84();function a164_0xcf60(_0x437601,_0x473284){const _0x6fe5fe=a164_0x5906();return a164_0xcf60=function(_0x55bd84,_0x33756c){_0x55bd84=_0x55bd84-0xf6;let _0x5906ba=_0x6fe5fe[_0x55bd84];return _0x5906ba;},a164_0xcf60(_0x437601,_0x473284);}'use strict';Object['defineProperty'](exports,a164_0xccb21(0x107),{'value':!![]}),exports['GitlabHookService']=void 0x0;function a164_0x5906(){const _0x4b9340=['(((.+)+)+)+$','__esModule','../dto/hook.dto','getAll','1608490BfbMqw','hooks/','371400YwYRMl','3726360MKBiPB','../../../../../core/errors/not-found.error','599EZzsDm','4957924KZonvB','GitHookService','search','36EwRNHD','apiUrl','getOne','create','NotFoundError','HookDto','1849216FOtwbi','11ZWghoQ','BadRequestError','post','5aFsDMw','request','hooks','createRequest','update','get','fromGitlab','delete','4258IKhoGw','api','put','constructor','3418772FJGlZw','toString'];a164_0x5906=function(){return _0x4b9340;};return a164_0x5906();}const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a164_0xccb21(0x10e)),hook_dto_1=require(a164_0xccb21(0x108)),git_hook_service_1=require('./git-hook.service');class GitlabHookService extends git_hook_service_1[a164_0xccb21(0x111)]{constructor(_0x51b404,_0x546c6a){const _0x45ec55=a164_0xccb21;super(_0x51b404),this[_0x45ec55(0x101)]=_0x546c6a,this['request']=this['createRequest']();}[a164_0xccb21(0xfb)](){const _0x52fa30=a164_0xccb21;return this[_0x52fa30(0x101)][_0x52fa30(0xfb)](this['repository'][_0x52fa30(0x114)]);}async[a164_0xccb21(0x116)](_0x1a3f6f){const _0x56a88e=a164_0xccb21;try{const _0x3b7d7b=await this['request'][_0x56a88e(0xf7)](_0x56a88e(0xfa),_0x1a3f6f);return hook_dto_1[_0x56a88e(0x118)]['fromGitlab'](_0x3b7d7b);}catch(_0x531abd){throw new bad_request_error_1[(_0x56a88e(0xf6))](_0x531abd);}}async[a164_0xccb21(0x115)](_0x2e9fd3){const _0x173395=a164_0xccb21;try{const _0x48518d=await this['request'][_0x173395(0xfd)](_0x173395(0x10b)+_0x2e9fd3);return hook_dto_1[_0x173395(0x118)][_0x173395(0xfe)](_0x48518d);}catch(_0x284a41){throw new not_found_error_1[(_0x173395(0x117))](_0x284a41);}}async[a164_0xccb21(0x109)](){const _0x5e5d20=a164_0xccb21;try{const _0x33ed12=await this[_0x5e5d20(0xf9)][_0x5e5d20(0xfd)](_0x5e5d20(0xfa));return _0x33ed12['map'](_0xc85360=>hook_dto_1[_0x5e5d20(0x118)][_0x5e5d20(0xfe)](_0xc85360));}catch(_0x17d60e){throw new not_found_error_1['NotFoundError'](_0x17d60e);}}async[a164_0xccb21(0xfc)](_0x16e5a1,_0x1ba284){const _0x34ba1f=a164_0xccb21;try{const _0x17e56e=await this[_0x34ba1f(0xf9)][_0x34ba1f(0x102)](_0x34ba1f(0x10b)+_0x16e5a1,_0x1ba284);return hook_dto_1[_0x34ba1f(0x118)][_0x34ba1f(0xfe)](_0x17e56e);}catch(_0x103c69){throw new not_found_error_1[(_0x34ba1f(0x117))](_0x103c69);}}async[a164_0xccb21(0xff)](_0x321edf){const _0x3f15b0=a164_0xccb21;try{await this[_0x3f15b0(0xf9)][_0x3f15b0(0xff)](_0x3f15b0(0x10b)+_0x321edf);}catch(_0x4e6de8){throw new not_found_error_1[(_0x3f15b0(0x117))](_0x4e6de8);}}}exports['GitlabHookService']=GitlabHookService;