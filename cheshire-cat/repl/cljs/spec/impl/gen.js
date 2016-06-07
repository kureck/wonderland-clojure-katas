// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7463__auto__,writer__7464__auto__,opt__7465__auto__){
return cljs.core._write.call(null,writer__7464__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12267 = arguments.length;
var i__7933__auto___12268 = (0);
while(true){
if((i__7933__auto___12268 < len__7932__auto___12267)){
args__7939__auto__.push((arguments[i__7933__auto___12268]));

var G__12269 = (i__7933__auto___12268 + (1));
i__7933__auto___12268 = G__12269;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12266){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12266));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12271 = arguments.length;
var i__7933__auto___12272 = (0);
while(true){
if((i__7933__auto___12272 < len__7932__auto___12271)){
args__7939__auto__.push((arguments[i__7933__auto___12272]));

var G__12273 = (i__7933__auto___12272 + (1));
i__7933__auto___12272 = G__12273;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12270){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12270));
});

var g_QMARK__12274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12275 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12274){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12274))
,null));
var mkg_12276 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12274,g_12275){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12274,g_12275))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12274,g_12275,mkg_12276){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12274).call(null,x);
});})(g_QMARK__12274,g_12275,mkg_12276))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12274,g_12275,mkg_12276){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12276).call(null,gfn);
});})(g_QMARK__12274,g_12275,mkg_12276))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12274,g_12275,mkg_12276){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12275).call(null,generator);
});})(g_QMARK__12274,g_12275,mkg_12276))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12238__auto___12292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12238__auto___12292){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12293 = arguments.length;
var i__7933__auto___12294 = (0);
while(true){
if((i__7933__auto___12294 < len__7932__auto___12293)){
args__7939__auto__.push((arguments[i__7933__auto___12294]));

var G__12295 = (i__7933__auto___12294 + (1));
i__7933__auto___12294 = G__12295;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12292))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12292),args);
});})(g__12238__auto___12292))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12238__auto___12292){
return (function (seq12277){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12277));
});})(g__12238__auto___12292))
;


var g__12238__auto___12296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12238__auto___12296){
return (function cljs$spec$impl$gen$list(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12297 = arguments.length;
var i__7933__auto___12298 = (0);
while(true){
if((i__7933__auto___12298 < len__7932__auto___12297)){
args__7939__auto__.push((arguments[i__7933__auto___12298]));

var G__12299 = (i__7933__auto___12298 + (1));
i__7933__auto___12298 = G__12299;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12296))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12296),args);
});})(g__12238__auto___12296))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12238__auto___12296){
return (function (seq12278){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12278));
});})(g__12238__auto___12296))
;


var g__12238__auto___12300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12238__auto___12300){
return (function cljs$spec$impl$gen$map(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12301 = arguments.length;
var i__7933__auto___12302 = (0);
while(true){
if((i__7933__auto___12302 < len__7932__auto___12301)){
args__7939__auto__.push((arguments[i__7933__auto___12302]));

var G__12303 = (i__7933__auto___12302 + (1));
i__7933__auto___12302 = G__12303;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12300))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12300),args);
});})(g__12238__auto___12300))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12238__auto___12300){
return (function (seq12279){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12279));
});})(g__12238__auto___12300))
;


var g__12238__auto___12304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12238__auto___12304){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12305 = arguments.length;
var i__7933__auto___12306 = (0);
while(true){
if((i__7933__auto___12306 < len__7932__auto___12305)){
args__7939__auto__.push((arguments[i__7933__auto___12306]));

var G__12307 = (i__7933__auto___12306 + (1));
i__7933__auto___12306 = G__12307;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12304))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12304),args);
});})(g__12238__auto___12304))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12238__auto___12304){
return (function (seq12280){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12280));
});})(g__12238__auto___12304))
;


var g__12238__auto___12308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12238__auto___12308){
return (function cljs$spec$impl$gen$set(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12309 = arguments.length;
var i__7933__auto___12310 = (0);
while(true){
if((i__7933__auto___12310 < len__7932__auto___12309)){
args__7939__auto__.push((arguments[i__7933__auto___12310]));

var G__12311 = (i__7933__auto___12310 + (1));
i__7933__auto___12310 = G__12311;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12308))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12308),args);
});})(g__12238__auto___12308))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12238__auto___12308){
return (function (seq12281){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12281));
});})(g__12238__auto___12308))
;


var g__12238__auto___12312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12238__auto___12312){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12313 = arguments.length;
var i__7933__auto___12314 = (0);
while(true){
if((i__7933__auto___12314 < len__7932__auto___12313)){
args__7939__auto__.push((arguments[i__7933__auto___12314]));

var G__12315 = (i__7933__auto___12314 + (1));
i__7933__auto___12314 = G__12315;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12312))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12312),args);
});})(g__12238__auto___12312))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12238__auto___12312){
return (function (seq12282){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12282));
});})(g__12238__auto___12312))
;


var g__12238__auto___12316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12238__auto___12316){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12317 = arguments.length;
var i__7933__auto___12318 = (0);
while(true){
if((i__7933__auto___12318 < len__7932__auto___12317)){
args__7939__auto__.push((arguments[i__7933__auto___12318]));

var G__12319 = (i__7933__auto___12318 + (1));
i__7933__auto___12318 = G__12319;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12316))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12316),args);
});})(g__12238__auto___12316))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12238__auto___12316){
return (function (seq12283){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12283));
});})(g__12238__auto___12316))
;


var g__12238__auto___12320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12238__auto___12320){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12321 = arguments.length;
var i__7933__auto___12322 = (0);
while(true){
if((i__7933__auto___12322 < len__7932__auto___12321)){
args__7939__auto__.push((arguments[i__7933__auto___12322]));

var G__12323 = (i__7933__auto___12322 + (1));
i__7933__auto___12322 = G__12323;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12320))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12320){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12320),args);
});})(g__12238__auto___12320))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12238__auto___12320){
return (function (seq12284){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12284));
});})(g__12238__auto___12320))
;


var g__12238__auto___12324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12238__auto___12324){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12325 = arguments.length;
var i__7933__auto___12326 = (0);
while(true){
if((i__7933__auto___12326 < len__7932__auto___12325)){
args__7939__auto__.push((arguments[i__7933__auto___12326]));

var G__12327 = (i__7933__auto___12326 + (1));
i__7933__auto___12326 = G__12327;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12324))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12324){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12324),args);
});})(g__12238__auto___12324))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12238__auto___12324){
return (function (seq12285){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12285));
});})(g__12238__auto___12324))
;


var g__12238__auto___12328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12238__auto___12328){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12329 = arguments.length;
var i__7933__auto___12330 = (0);
while(true){
if((i__7933__auto___12330 < len__7932__auto___12329)){
args__7939__auto__.push((arguments[i__7933__auto___12330]));

var G__12331 = (i__7933__auto___12330 + (1));
i__7933__auto___12330 = G__12331;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12328))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12328),args);
});})(g__12238__auto___12328))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12238__auto___12328){
return (function (seq12286){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12286));
});})(g__12238__auto___12328))
;


var g__12238__auto___12332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12238__auto___12332){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12333 = arguments.length;
var i__7933__auto___12334 = (0);
while(true){
if((i__7933__auto___12334 < len__7932__auto___12333)){
args__7939__auto__.push((arguments[i__7933__auto___12334]));

var G__12335 = (i__7933__auto___12334 + (1));
i__7933__auto___12334 = G__12335;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12332))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12332),args);
});})(g__12238__auto___12332))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12238__auto___12332){
return (function (seq12287){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12287));
});})(g__12238__auto___12332))
;


var g__12238__auto___12336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12238__auto___12336){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12337 = arguments.length;
var i__7933__auto___12338 = (0);
while(true){
if((i__7933__auto___12338 < len__7932__auto___12337)){
args__7939__auto__.push((arguments[i__7933__auto___12338]));

var G__12339 = (i__7933__auto___12338 + (1));
i__7933__auto___12338 = G__12339;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12336))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12336),args);
});})(g__12238__auto___12336))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12238__auto___12336){
return (function (seq12288){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12288));
});})(g__12238__auto___12336))
;


var g__12238__auto___12340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12238__auto___12340){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12341 = arguments.length;
var i__7933__auto___12342 = (0);
while(true){
if((i__7933__auto___12342 < len__7932__auto___12341)){
args__7939__auto__.push((arguments[i__7933__auto___12342]));

var G__12343 = (i__7933__auto___12342 + (1));
i__7933__auto___12342 = G__12343;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12340))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12340),args);
});})(g__12238__auto___12340))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12238__auto___12340){
return (function (seq12289){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12289));
});})(g__12238__auto___12340))
;


var g__12238__auto___12344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12238__auto___12344){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12345 = arguments.length;
var i__7933__auto___12346 = (0);
while(true){
if((i__7933__auto___12346 < len__7932__auto___12345)){
args__7939__auto__.push((arguments[i__7933__auto___12346]));

var G__12347 = (i__7933__auto___12346 + (1));
i__7933__auto___12346 = G__12347;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12344))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12344),args);
});})(g__12238__auto___12344))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12238__auto___12344){
return (function (seq12290){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12290));
});})(g__12238__auto___12344))
;


var g__12238__auto___12348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12238__auto___12348){
return (function cljs$spec$impl$gen$return(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12349 = arguments.length;
var i__7933__auto___12350 = (0);
while(true){
if((i__7933__auto___12350 < len__7932__auto___12349)){
args__7939__auto__.push((arguments[i__7933__auto___12350]));

var G__12351 = (i__7933__auto___12350 + (1));
i__7933__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12238__auto___12348))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12238__auto___12348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12238__auto___12348),args);
});})(g__12238__auto___12348))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12238__auto___12348){
return (function (seq12291){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12291));
});})(g__12238__auto___12348))
;

var g__12251__auto___12373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12251__auto___12373){
return (function cljs$spec$impl$gen$any(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12374 = arguments.length;
var i__7933__auto___12375 = (0);
while(true){
if((i__7933__auto___12375 < len__7932__auto___12374)){
args__7939__auto__.push((arguments[i__7933__auto___12375]));

var G__12376 = (i__7933__auto___12375 + (1));
i__7933__auto___12375 = G__12376;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12373))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12373){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12373);
});})(g__12251__auto___12373))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12251__auto___12373){
return (function (seq12352){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12352));
});})(g__12251__auto___12373))
;


var g__12251__auto___12377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12251__auto___12377){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12378 = arguments.length;
var i__7933__auto___12379 = (0);
while(true){
if((i__7933__auto___12379 < len__7932__auto___12378)){
args__7939__auto__.push((arguments[i__7933__auto___12379]));

var G__12380 = (i__7933__auto___12379 + (1));
i__7933__auto___12379 = G__12380;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12377))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12377){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12377);
});})(g__12251__auto___12377))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12251__auto___12377){
return (function (seq12353){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12353));
});})(g__12251__auto___12377))
;


var g__12251__auto___12381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12251__auto___12381){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12382 = arguments.length;
var i__7933__auto___12383 = (0);
while(true){
if((i__7933__auto___12383 < len__7932__auto___12382)){
args__7939__auto__.push((arguments[i__7933__auto___12383]));

var G__12384 = (i__7933__auto___12383 + (1));
i__7933__auto___12383 = G__12384;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12381))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12381){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12381);
});})(g__12251__auto___12381))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12251__auto___12381){
return (function (seq12354){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12354));
});})(g__12251__auto___12381))
;


var g__12251__auto___12385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12251__auto___12385){
return (function cljs$spec$impl$gen$char(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12386 = arguments.length;
var i__7933__auto___12387 = (0);
while(true){
if((i__7933__auto___12387 < len__7932__auto___12386)){
args__7939__auto__.push((arguments[i__7933__auto___12387]));

var G__12388 = (i__7933__auto___12387 + (1));
i__7933__auto___12387 = G__12388;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12385))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12385){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12385);
});})(g__12251__auto___12385))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12251__auto___12385){
return (function (seq12355){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12355));
});})(g__12251__auto___12385))
;


var g__12251__auto___12389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12251__auto___12389){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12390 = arguments.length;
var i__7933__auto___12391 = (0);
while(true){
if((i__7933__auto___12391 < len__7932__auto___12390)){
args__7939__auto__.push((arguments[i__7933__auto___12391]));

var G__12392 = (i__7933__auto___12391 + (1));
i__7933__auto___12391 = G__12392;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12389))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12389){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12389);
});})(g__12251__auto___12389))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12251__auto___12389){
return (function (seq12356){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12356));
});})(g__12251__auto___12389))
;


var g__12251__auto___12393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12251__auto___12393){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12394 = arguments.length;
var i__7933__auto___12395 = (0);
while(true){
if((i__7933__auto___12395 < len__7932__auto___12394)){
args__7939__auto__.push((arguments[i__7933__auto___12395]));

var G__12396 = (i__7933__auto___12395 + (1));
i__7933__auto___12395 = G__12396;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12393))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12393){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12393);
});})(g__12251__auto___12393))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12251__auto___12393){
return (function (seq12357){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12357));
});})(g__12251__auto___12393))
;


var g__12251__auto___12397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12251__auto___12397){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12398 = arguments.length;
var i__7933__auto___12399 = (0);
while(true){
if((i__7933__auto___12399 < len__7932__auto___12398)){
args__7939__auto__.push((arguments[i__7933__auto___12399]));

var G__12400 = (i__7933__auto___12399 + (1));
i__7933__auto___12399 = G__12400;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12397))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12397){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12397);
});})(g__12251__auto___12397))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12251__auto___12397){
return (function (seq12358){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12358));
});})(g__12251__auto___12397))
;


var g__12251__auto___12401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12251__auto___12401){
return (function cljs$spec$impl$gen$double(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12402 = arguments.length;
var i__7933__auto___12403 = (0);
while(true){
if((i__7933__auto___12403 < len__7932__auto___12402)){
args__7939__auto__.push((arguments[i__7933__auto___12403]));

var G__12404 = (i__7933__auto___12403 + (1));
i__7933__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12401))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12401){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12401);
});})(g__12251__auto___12401))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12251__auto___12401){
return (function (seq12359){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12359));
});})(g__12251__auto___12401))
;


var g__12251__auto___12405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12251__auto___12405){
return (function cljs$spec$impl$gen$int(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12406 = arguments.length;
var i__7933__auto___12407 = (0);
while(true){
if((i__7933__auto___12407 < len__7932__auto___12406)){
args__7939__auto__.push((arguments[i__7933__auto___12407]));

var G__12408 = (i__7933__auto___12407 + (1));
i__7933__auto___12407 = G__12408;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12405))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12405){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12405);
});})(g__12251__auto___12405))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12251__auto___12405){
return (function (seq12360){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12360));
});})(g__12251__auto___12405))
;


var g__12251__auto___12409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12251__auto___12409){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12410 = arguments.length;
var i__7933__auto___12411 = (0);
while(true){
if((i__7933__auto___12411 < len__7932__auto___12410)){
args__7939__auto__.push((arguments[i__7933__auto___12411]));

var G__12412 = (i__7933__auto___12411 + (1));
i__7933__auto___12411 = G__12412;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12409))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12409){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12409);
});})(g__12251__auto___12409))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12251__auto___12409){
return (function (seq12361){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12361));
});})(g__12251__auto___12409))
;


var g__12251__auto___12413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12251__auto___12413){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12414 = arguments.length;
var i__7933__auto___12415 = (0);
while(true){
if((i__7933__auto___12415 < len__7932__auto___12414)){
args__7939__auto__.push((arguments[i__7933__auto___12415]));

var G__12416 = (i__7933__auto___12415 + (1));
i__7933__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12413))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12413){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12413);
});})(g__12251__auto___12413))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12251__auto___12413){
return (function (seq12362){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12362));
});})(g__12251__auto___12413))
;


var g__12251__auto___12417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12251__auto___12417){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12418 = arguments.length;
var i__7933__auto___12419 = (0);
while(true){
if((i__7933__auto___12419 < len__7932__auto___12418)){
args__7939__auto__.push((arguments[i__7933__auto___12419]));

var G__12420 = (i__7933__auto___12419 + (1));
i__7933__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12417))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12417){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12417);
});})(g__12251__auto___12417))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12251__auto___12417){
return (function (seq12363){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12363));
});})(g__12251__auto___12417))
;


var g__12251__auto___12421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12251__auto___12421){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12422 = arguments.length;
var i__7933__auto___12423 = (0);
while(true){
if((i__7933__auto___12423 < len__7932__auto___12422)){
args__7939__auto__.push((arguments[i__7933__auto___12423]));

var G__12424 = (i__7933__auto___12423 + (1));
i__7933__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12421))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12421){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12421);
});})(g__12251__auto___12421))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12251__auto___12421){
return (function (seq12364){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12364));
});})(g__12251__auto___12421))
;


var g__12251__auto___12425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12251__auto___12425){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12426 = arguments.length;
var i__7933__auto___12427 = (0);
while(true){
if((i__7933__auto___12427 < len__7932__auto___12426)){
args__7939__auto__.push((arguments[i__7933__auto___12427]));

var G__12428 = (i__7933__auto___12427 + (1));
i__7933__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12425))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12425){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12425);
});})(g__12251__auto___12425))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12251__auto___12425){
return (function (seq12365){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12365));
});})(g__12251__auto___12425))
;


var g__12251__auto___12429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12251__auto___12429){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12430 = arguments.length;
var i__7933__auto___12431 = (0);
while(true){
if((i__7933__auto___12431 < len__7932__auto___12430)){
args__7939__auto__.push((arguments[i__7933__auto___12431]));

var G__12432 = (i__7933__auto___12431 + (1));
i__7933__auto___12431 = G__12432;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12429))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12429){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12429);
});})(g__12251__auto___12429))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12251__auto___12429){
return (function (seq12366){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12366));
});})(g__12251__auto___12429))
;


var g__12251__auto___12433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12251__auto___12433){
return (function cljs$spec$impl$gen$string(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12434 = arguments.length;
var i__7933__auto___12435 = (0);
while(true){
if((i__7933__auto___12435 < len__7932__auto___12434)){
args__7939__auto__.push((arguments[i__7933__auto___12435]));

var G__12436 = (i__7933__auto___12435 + (1));
i__7933__auto___12435 = G__12436;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12433))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12433){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12433);
});})(g__12251__auto___12433))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12251__auto___12433){
return (function (seq12367){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12367));
});})(g__12251__auto___12433))
;


var g__12251__auto___12437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12251__auto___12437){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12438 = arguments.length;
var i__7933__auto___12439 = (0);
while(true){
if((i__7933__auto___12439 < len__7932__auto___12438)){
args__7939__auto__.push((arguments[i__7933__auto___12439]));

var G__12440 = (i__7933__auto___12439 + (1));
i__7933__auto___12439 = G__12440;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12437))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12437){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12437);
});})(g__12251__auto___12437))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12251__auto___12437){
return (function (seq12368){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12368));
});})(g__12251__auto___12437))
;


var g__12251__auto___12441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12251__auto___12441){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12442 = arguments.length;
var i__7933__auto___12443 = (0);
while(true){
if((i__7933__auto___12443 < len__7932__auto___12442)){
args__7939__auto__.push((arguments[i__7933__auto___12443]));

var G__12444 = (i__7933__auto___12443 + (1));
i__7933__auto___12443 = G__12444;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12441))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12441){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12441);
});})(g__12251__auto___12441))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12251__auto___12441){
return (function (seq12369){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12369));
});})(g__12251__auto___12441))
;


var g__12251__auto___12445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12251__auto___12445){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12446 = arguments.length;
var i__7933__auto___12447 = (0);
while(true){
if((i__7933__auto___12447 < len__7932__auto___12446)){
args__7939__auto__.push((arguments[i__7933__auto___12447]));

var G__12448 = (i__7933__auto___12447 + (1));
i__7933__auto___12447 = G__12448;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12445))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12445){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12445);
});})(g__12251__auto___12445))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12251__auto___12445){
return (function (seq12370){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12370));
});})(g__12251__auto___12445))
;


var g__12251__auto___12449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12251__auto___12449){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12450 = arguments.length;
var i__7933__auto___12451 = (0);
while(true){
if((i__7933__auto___12451 < len__7932__auto___12450)){
args__7939__auto__.push((arguments[i__7933__auto___12451]));

var G__12452 = (i__7933__auto___12451 + (1));
i__7933__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12449))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12449){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12449);
});})(g__12251__auto___12449))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12251__auto___12449){
return (function (seq12371){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12371));
});})(g__12251__auto___12449))
;


var g__12251__auto___12453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12251__auto___12453){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12454 = arguments.length;
var i__7933__auto___12455 = (0);
while(true){
if((i__7933__auto___12455 < len__7932__auto___12454)){
args__7939__auto__.push((arguments[i__7933__auto___12455]));

var G__12456 = (i__7933__auto___12455 + (1));
i__7933__auto___12455 = G__12456;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__12251__auto___12453))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12251__auto___12453){
return (function (args){
return cljs.core.deref.call(null,g__12251__auto___12453);
});})(g__12251__auto___12453))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12251__auto___12453){
return (function (seq12372){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12372));
});})(g__12251__auto___12453))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7939__auto__ = [];
var len__7932__auto___12459 = arguments.length;
var i__7933__auto___12460 = (0);
while(true){
if((i__7933__auto___12460 < len__7932__auto___12459)){
args__7939__auto__.push((arguments[i__7933__auto___12460]));

var G__12461 = (i__7933__auto___12460 + (1));
i__7933__auto___12460 = G__12461;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12457_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12457_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12458){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12458));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
