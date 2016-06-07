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
var len__7932__auto___9917 = arguments.length;
var i__7933__auto___9918 = (0);
while(true){
if((i__7933__auto___9918 < len__7932__auto___9917)){
args__7939__auto__.push((arguments[i__7933__auto___9918]));

var G__9919 = (i__7933__auto___9918 + (1));
i__7933__auto___9918 = G__9919;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq9916){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9916));
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
var len__7932__auto___9921 = arguments.length;
var i__7933__auto___9922 = (0);
while(true){
if((i__7933__auto___9922 < len__7932__auto___9921)){
args__7939__auto__.push((arguments[i__7933__auto___9922]));

var G__9923 = (i__7933__auto___9922 + (1));
i__7933__auto___9922 = G__9923;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq9920){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9920));
});

var g_QMARK__9924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_9925 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9924){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__9924))
,null));
var mkg_9926 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9924,g_9925){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__9924,g_9925))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__9924,g_9925,mkg_9926){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9924).call(null,x);
});})(g_QMARK__9924,g_9925,mkg_9926))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__9924,g_9925,mkg_9926){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_9926).call(null,gfn);
});})(g_QMARK__9924,g_9925,mkg_9926))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__9924,g_9925,mkg_9926){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_9925).call(null,generator);
});})(g_QMARK__9924,g_9925,mkg_9926))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8063__auto___9942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8063__auto___9942){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9943 = arguments.length;
var i__7933__auto___9944 = (0);
while(true){
if((i__7933__auto___9944 < len__7932__auto___9943)){
args__7939__auto__.push((arguments[i__7933__auto___9944]));

var G__9945 = (i__7933__auto___9944 + (1));
i__7933__auto___9944 = G__9945;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9942))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9942),args);
});})(g__8063__auto___9942))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8063__auto___9942){
return (function (seq9927){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9927));
});})(g__8063__auto___9942))
;


var g__8063__auto___9946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8063__auto___9946){
return (function cljs$spec$impl$gen$list(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9947 = arguments.length;
var i__7933__auto___9948 = (0);
while(true){
if((i__7933__auto___9948 < len__7932__auto___9947)){
args__7939__auto__.push((arguments[i__7933__auto___9948]));

var G__9949 = (i__7933__auto___9948 + (1));
i__7933__auto___9948 = G__9949;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9946))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9946),args);
});})(g__8063__auto___9946))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8063__auto___9946){
return (function (seq9928){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9928));
});})(g__8063__auto___9946))
;


var g__8063__auto___9950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8063__auto___9950){
return (function cljs$spec$impl$gen$map(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9951 = arguments.length;
var i__7933__auto___9952 = (0);
while(true){
if((i__7933__auto___9952 < len__7932__auto___9951)){
args__7939__auto__.push((arguments[i__7933__auto___9952]));

var G__9953 = (i__7933__auto___9952 + (1));
i__7933__auto___9952 = G__9953;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9950))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9950){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9950),args);
});})(g__8063__auto___9950))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8063__auto___9950){
return (function (seq9929){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9929));
});})(g__8063__auto___9950))
;


var g__8063__auto___9954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8063__auto___9954){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9955 = arguments.length;
var i__7933__auto___9956 = (0);
while(true){
if((i__7933__auto___9956 < len__7932__auto___9955)){
args__7939__auto__.push((arguments[i__7933__auto___9956]));

var G__9957 = (i__7933__auto___9956 + (1));
i__7933__auto___9956 = G__9957;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9954))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9954){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9954),args);
});})(g__8063__auto___9954))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8063__auto___9954){
return (function (seq9930){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9930));
});})(g__8063__auto___9954))
;


var g__8063__auto___9958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8063__auto___9958){
return (function cljs$spec$impl$gen$set(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9959 = arguments.length;
var i__7933__auto___9960 = (0);
while(true){
if((i__7933__auto___9960 < len__7932__auto___9959)){
args__7939__auto__.push((arguments[i__7933__auto___9960]));

var G__9961 = (i__7933__auto___9960 + (1));
i__7933__auto___9960 = G__9961;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9958))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9958){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9958),args);
});})(g__8063__auto___9958))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8063__auto___9958){
return (function (seq9931){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9931));
});})(g__8063__auto___9958))
;


var g__8063__auto___9962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8063__auto___9962){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9963 = arguments.length;
var i__7933__auto___9964 = (0);
while(true){
if((i__7933__auto___9964 < len__7932__auto___9963)){
args__7939__auto__.push((arguments[i__7933__auto___9964]));

var G__9965 = (i__7933__auto___9964 + (1));
i__7933__auto___9964 = G__9965;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9962))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9962){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9962),args);
});})(g__8063__auto___9962))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8063__auto___9962){
return (function (seq9932){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9932));
});})(g__8063__auto___9962))
;


var g__8063__auto___9966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8063__auto___9966){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9967 = arguments.length;
var i__7933__auto___9968 = (0);
while(true){
if((i__7933__auto___9968 < len__7932__auto___9967)){
args__7939__auto__.push((arguments[i__7933__auto___9968]));

var G__9969 = (i__7933__auto___9968 + (1));
i__7933__auto___9968 = G__9969;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9966))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9966){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9966),args);
});})(g__8063__auto___9966))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8063__auto___9966){
return (function (seq9933){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9933));
});})(g__8063__auto___9966))
;


var g__8063__auto___9970 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8063__auto___9970){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9971 = arguments.length;
var i__7933__auto___9972 = (0);
while(true){
if((i__7933__auto___9972 < len__7932__auto___9971)){
args__7939__auto__.push((arguments[i__7933__auto___9972]));

var G__9973 = (i__7933__auto___9972 + (1));
i__7933__auto___9972 = G__9973;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9970))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9970){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9970),args);
});})(g__8063__auto___9970))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8063__auto___9970){
return (function (seq9934){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9934));
});})(g__8063__auto___9970))
;


var g__8063__auto___9974 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8063__auto___9974){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9975 = arguments.length;
var i__7933__auto___9976 = (0);
while(true){
if((i__7933__auto___9976 < len__7932__auto___9975)){
args__7939__auto__.push((arguments[i__7933__auto___9976]));

var G__9977 = (i__7933__auto___9976 + (1));
i__7933__auto___9976 = G__9977;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9974))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9974){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9974),args);
});})(g__8063__auto___9974))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8063__auto___9974){
return (function (seq9935){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9935));
});})(g__8063__auto___9974))
;


var g__8063__auto___9978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8063__auto___9978){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9979 = arguments.length;
var i__7933__auto___9980 = (0);
while(true){
if((i__7933__auto___9980 < len__7932__auto___9979)){
args__7939__auto__.push((arguments[i__7933__auto___9980]));

var G__9981 = (i__7933__auto___9980 + (1));
i__7933__auto___9980 = G__9981;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9978))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9978){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9978),args);
});})(g__8063__auto___9978))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8063__auto___9978){
return (function (seq9936){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9936));
});})(g__8063__auto___9978))
;


var g__8063__auto___9982 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8063__auto___9982){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9983 = arguments.length;
var i__7933__auto___9984 = (0);
while(true){
if((i__7933__auto___9984 < len__7932__auto___9983)){
args__7939__auto__.push((arguments[i__7933__auto___9984]));

var G__9985 = (i__7933__auto___9984 + (1));
i__7933__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9982))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9982){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9982),args);
});})(g__8063__auto___9982))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8063__auto___9982){
return (function (seq9937){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9937));
});})(g__8063__auto___9982))
;


var g__8063__auto___9986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8063__auto___9986){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9987 = arguments.length;
var i__7933__auto___9988 = (0);
while(true){
if((i__7933__auto___9988 < len__7932__auto___9987)){
args__7939__auto__.push((arguments[i__7933__auto___9988]));

var G__9989 = (i__7933__auto___9988 + (1));
i__7933__auto___9988 = G__9989;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9986))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9986){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9986),args);
});})(g__8063__auto___9986))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8063__auto___9986){
return (function (seq9938){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9938));
});})(g__8063__auto___9986))
;


var g__8063__auto___9990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8063__auto___9990){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9991 = arguments.length;
var i__7933__auto___9992 = (0);
while(true){
if((i__7933__auto___9992 < len__7932__auto___9991)){
args__7939__auto__.push((arguments[i__7933__auto___9992]));

var G__9993 = (i__7933__auto___9992 + (1));
i__7933__auto___9992 = G__9993;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9990))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9990){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9990),args);
});})(g__8063__auto___9990))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8063__auto___9990){
return (function (seq9939){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9939));
});})(g__8063__auto___9990))
;


var g__8063__auto___9994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8063__auto___9994){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9995 = arguments.length;
var i__7933__auto___9996 = (0);
while(true){
if((i__7933__auto___9996 < len__7932__auto___9995)){
args__7939__auto__.push((arguments[i__7933__auto___9996]));

var G__9997 = (i__7933__auto___9996 + (1));
i__7933__auto___9996 = G__9997;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9994))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9994){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9994),args);
});})(g__8063__auto___9994))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8063__auto___9994){
return (function (seq9940){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9940));
});})(g__8063__auto___9994))
;


var g__8063__auto___9998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8063__auto___9998){
return (function cljs$spec$impl$gen$return(var_args){
var args__7939__auto__ = [];
var len__7932__auto___9999 = arguments.length;
var i__7933__auto___10000 = (0);
while(true){
if((i__7933__auto___10000 < len__7932__auto___9999)){
args__7939__auto__.push((arguments[i__7933__auto___10000]));

var G__10001 = (i__7933__auto___10000 + (1));
i__7933__auto___10000 = G__10001;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8063__auto___9998))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8063__auto___9998){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8063__auto___9998),args);
});})(g__8063__auto___9998))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8063__auto___9998){
return (function (seq9941){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9941));
});})(g__8063__auto___9998))
;

var g__8076__auto___10023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8076__auto___10023){
return (function cljs$spec$impl$gen$any(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10024 = arguments.length;
var i__7933__auto___10025 = (0);
while(true){
if((i__7933__auto___10025 < len__7932__auto___10024)){
args__7939__auto__.push((arguments[i__7933__auto___10025]));

var G__10026 = (i__7933__auto___10025 + (1));
i__7933__auto___10025 = G__10026;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10023))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10023){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10023);
});})(g__8076__auto___10023))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8076__auto___10023){
return (function (seq10002){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10002));
});})(g__8076__auto___10023))
;


var g__8076__auto___10027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8076__auto___10027){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10028 = arguments.length;
var i__7933__auto___10029 = (0);
while(true){
if((i__7933__auto___10029 < len__7932__auto___10028)){
args__7939__auto__.push((arguments[i__7933__auto___10029]));

var G__10030 = (i__7933__auto___10029 + (1));
i__7933__auto___10029 = G__10030;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10027))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10027){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10027);
});})(g__8076__auto___10027))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8076__auto___10027){
return (function (seq10003){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10003));
});})(g__8076__auto___10027))
;


var g__8076__auto___10031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8076__auto___10031){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10032 = arguments.length;
var i__7933__auto___10033 = (0);
while(true){
if((i__7933__auto___10033 < len__7932__auto___10032)){
args__7939__auto__.push((arguments[i__7933__auto___10033]));

var G__10034 = (i__7933__auto___10033 + (1));
i__7933__auto___10033 = G__10034;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10031))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10031){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10031);
});})(g__8076__auto___10031))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8076__auto___10031){
return (function (seq10004){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10004));
});})(g__8076__auto___10031))
;


var g__8076__auto___10035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8076__auto___10035){
return (function cljs$spec$impl$gen$char(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10036 = arguments.length;
var i__7933__auto___10037 = (0);
while(true){
if((i__7933__auto___10037 < len__7932__auto___10036)){
args__7939__auto__.push((arguments[i__7933__auto___10037]));

var G__10038 = (i__7933__auto___10037 + (1));
i__7933__auto___10037 = G__10038;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10035))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10035){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10035);
});})(g__8076__auto___10035))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8076__auto___10035){
return (function (seq10005){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10005));
});})(g__8076__auto___10035))
;


var g__8076__auto___10039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8076__auto___10039){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10040 = arguments.length;
var i__7933__auto___10041 = (0);
while(true){
if((i__7933__auto___10041 < len__7932__auto___10040)){
args__7939__auto__.push((arguments[i__7933__auto___10041]));

var G__10042 = (i__7933__auto___10041 + (1));
i__7933__auto___10041 = G__10042;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10039))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10039){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10039);
});})(g__8076__auto___10039))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8076__auto___10039){
return (function (seq10006){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10006));
});})(g__8076__auto___10039))
;


var g__8076__auto___10043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8076__auto___10043){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10044 = arguments.length;
var i__7933__auto___10045 = (0);
while(true){
if((i__7933__auto___10045 < len__7932__auto___10044)){
args__7939__auto__.push((arguments[i__7933__auto___10045]));

var G__10046 = (i__7933__auto___10045 + (1));
i__7933__auto___10045 = G__10046;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10043))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10043){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10043);
});})(g__8076__auto___10043))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8076__auto___10043){
return (function (seq10007){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10007));
});})(g__8076__auto___10043))
;


var g__8076__auto___10047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8076__auto___10047){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10048 = arguments.length;
var i__7933__auto___10049 = (0);
while(true){
if((i__7933__auto___10049 < len__7932__auto___10048)){
args__7939__auto__.push((arguments[i__7933__auto___10049]));

var G__10050 = (i__7933__auto___10049 + (1));
i__7933__auto___10049 = G__10050;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10047))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10047){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10047);
});})(g__8076__auto___10047))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8076__auto___10047){
return (function (seq10008){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10008));
});})(g__8076__auto___10047))
;


var g__8076__auto___10051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8076__auto___10051){
return (function cljs$spec$impl$gen$double(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10052 = arguments.length;
var i__7933__auto___10053 = (0);
while(true){
if((i__7933__auto___10053 < len__7932__auto___10052)){
args__7939__auto__.push((arguments[i__7933__auto___10053]));

var G__10054 = (i__7933__auto___10053 + (1));
i__7933__auto___10053 = G__10054;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10051))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10051){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10051);
});})(g__8076__auto___10051))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8076__auto___10051){
return (function (seq10009){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10009));
});})(g__8076__auto___10051))
;


var g__8076__auto___10055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8076__auto___10055){
return (function cljs$spec$impl$gen$int(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10056 = arguments.length;
var i__7933__auto___10057 = (0);
while(true){
if((i__7933__auto___10057 < len__7932__auto___10056)){
args__7939__auto__.push((arguments[i__7933__auto___10057]));

var G__10058 = (i__7933__auto___10057 + (1));
i__7933__auto___10057 = G__10058;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10055))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10055){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10055);
});})(g__8076__auto___10055))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8076__auto___10055){
return (function (seq10010){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10010));
});})(g__8076__auto___10055))
;


var g__8076__auto___10059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8076__auto___10059){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10060 = arguments.length;
var i__7933__auto___10061 = (0);
while(true){
if((i__7933__auto___10061 < len__7932__auto___10060)){
args__7939__auto__.push((arguments[i__7933__auto___10061]));

var G__10062 = (i__7933__auto___10061 + (1));
i__7933__auto___10061 = G__10062;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10059))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10059){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10059);
});})(g__8076__auto___10059))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8076__auto___10059){
return (function (seq10011){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10011));
});})(g__8076__auto___10059))
;


var g__8076__auto___10063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8076__auto___10063){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10064 = arguments.length;
var i__7933__auto___10065 = (0);
while(true){
if((i__7933__auto___10065 < len__7932__auto___10064)){
args__7939__auto__.push((arguments[i__7933__auto___10065]));

var G__10066 = (i__7933__auto___10065 + (1));
i__7933__auto___10065 = G__10066;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10063))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10063){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10063);
});})(g__8076__auto___10063))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8076__auto___10063){
return (function (seq10012){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10012));
});})(g__8076__auto___10063))
;


var g__8076__auto___10067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8076__auto___10067){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10068 = arguments.length;
var i__7933__auto___10069 = (0);
while(true){
if((i__7933__auto___10069 < len__7932__auto___10068)){
args__7939__auto__.push((arguments[i__7933__auto___10069]));

var G__10070 = (i__7933__auto___10069 + (1));
i__7933__auto___10069 = G__10070;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10067))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10067){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10067);
});})(g__8076__auto___10067))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8076__auto___10067){
return (function (seq10013){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10013));
});})(g__8076__auto___10067))
;


var g__8076__auto___10071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8076__auto___10071){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10072 = arguments.length;
var i__7933__auto___10073 = (0);
while(true){
if((i__7933__auto___10073 < len__7932__auto___10072)){
args__7939__auto__.push((arguments[i__7933__auto___10073]));

var G__10074 = (i__7933__auto___10073 + (1));
i__7933__auto___10073 = G__10074;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10071))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10071){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10071);
});})(g__8076__auto___10071))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8076__auto___10071){
return (function (seq10014){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10014));
});})(g__8076__auto___10071))
;


var g__8076__auto___10075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8076__auto___10075){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10076 = arguments.length;
var i__7933__auto___10077 = (0);
while(true){
if((i__7933__auto___10077 < len__7932__auto___10076)){
args__7939__auto__.push((arguments[i__7933__auto___10077]));

var G__10078 = (i__7933__auto___10077 + (1));
i__7933__auto___10077 = G__10078;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10075))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10075){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10075);
});})(g__8076__auto___10075))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8076__auto___10075){
return (function (seq10015){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10015));
});})(g__8076__auto___10075))
;


var g__8076__auto___10079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8076__auto___10079){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10080 = arguments.length;
var i__7933__auto___10081 = (0);
while(true){
if((i__7933__auto___10081 < len__7932__auto___10080)){
args__7939__auto__.push((arguments[i__7933__auto___10081]));

var G__10082 = (i__7933__auto___10081 + (1));
i__7933__auto___10081 = G__10082;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10079))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10079){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10079);
});})(g__8076__auto___10079))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8076__auto___10079){
return (function (seq10016){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10016));
});})(g__8076__auto___10079))
;


var g__8076__auto___10083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8076__auto___10083){
return (function cljs$spec$impl$gen$string(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10084 = arguments.length;
var i__7933__auto___10085 = (0);
while(true){
if((i__7933__auto___10085 < len__7932__auto___10084)){
args__7939__auto__.push((arguments[i__7933__auto___10085]));

var G__10086 = (i__7933__auto___10085 + (1));
i__7933__auto___10085 = G__10086;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10083))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10083){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10083);
});})(g__8076__auto___10083))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8076__auto___10083){
return (function (seq10017){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10017));
});})(g__8076__auto___10083))
;


var g__8076__auto___10087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8076__auto___10087){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10088 = arguments.length;
var i__7933__auto___10089 = (0);
while(true){
if((i__7933__auto___10089 < len__7932__auto___10088)){
args__7939__auto__.push((arguments[i__7933__auto___10089]));

var G__10090 = (i__7933__auto___10089 + (1));
i__7933__auto___10089 = G__10090;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10087))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10087){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10087);
});})(g__8076__auto___10087))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8076__auto___10087){
return (function (seq10018){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10018));
});})(g__8076__auto___10087))
;


var g__8076__auto___10091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8076__auto___10091){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10092 = arguments.length;
var i__7933__auto___10093 = (0);
while(true){
if((i__7933__auto___10093 < len__7932__auto___10092)){
args__7939__auto__.push((arguments[i__7933__auto___10093]));

var G__10094 = (i__7933__auto___10093 + (1));
i__7933__auto___10093 = G__10094;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10091))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10091){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10091);
});})(g__8076__auto___10091))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8076__auto___10091){
return (function (seq10019){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10019));
});})(g__8076__auto___10091))
;


var g__8076__auto___10095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8076__auto___10095){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10096 = arguments.length;
var i__7933__auto___10097 = (0);
while(true){
if((i__7933__auto___10097 < len__7932__auto___10096)){
args__7939__auto__.push((arguments[i__7933__auto___10097]));

var G__10098 = (i__7933__auto___10097 + (1));
i__7933__auto___10097 = G__10098;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10095))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10095){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10095);
});})(g__8076__auto___10095))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8076__auto___10095){
return (function (seq10020){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10020));
});})(g__8076__auto___10095))
;


var g__8076__auto___10099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8076__auto___10099){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10100 = arguments.length;
var i__7933__auto___10101 = (0);
while(true){
if((i__7933__auto___10101 < len__7932__auto___10100)){
args__7939__auto__.push((arguments[i__7933__auto___10101]));

var G__10102 = (i__7933__auto___10101 + (1));
i__7933__auto___10101 = G__10102;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10099))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10099){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10099);
});})(g__8076__auto___10099))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8076__auto___10099){
return (function (seq10021){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10021));
});})(g__8076__auto___10099))
;


var g__8076__auto___10103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8076__auto___10103){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10104 = arguments.length;
var i__7933__auto___10105 = (0);
while(true){
if((i__7933__auto___10105 < len__7932__auto___10104)){
args__7939__auto__.push((arguments[i__7933__auto___10105]));

var G__10106 = (i__7933__auto___10105 + (1));
i__7933__auto___10105 = G__10106;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});})(g__8076__auto___10103))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8076__auto___10103){
return (function (args){
return cljs.core.deref.call(null,g__8076__auto___10103);
});})(g__8076__auto___10103))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8076__auto___10103){
return (function (seq10022){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10022));
});})(g__8076__auto___10103))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7939__auto__ = [];
var len__7932__auto___10109 = arguments.length;
var i__7933__auto___10110 = (0);
while(true){
if((i__7933__auto___10110 < len__7932__auto___10109)){
args__7939__auto__.push((arguments[i__7933__auto___10110]));

var G__10111 = (i__7933__auto___10110 + (1));
i__7933__auto___10110 = G__10111;
continue;
} else {
}
break;
}

var argseq__7940__auto__ = ((((0) < args__7939__auto__.length))?(new cljs.core.IndexedSeq(args__7939__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7940__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10107_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10107_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10108){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10108));
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

//# sourceMappingURL=gen.js.map