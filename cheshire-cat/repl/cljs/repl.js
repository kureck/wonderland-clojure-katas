// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13480){
var map__13505 = p__13480;
var map__13505__$1 = ((((!((map__13505 == null)))?((((map__13505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13505):map__13505);
var m = map__13505__$1;
var n = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13507_13529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13508_13530 = null;
var count__13509_13531 = (0);
var i__13510_13532 = (0);
while(true){
if((i__13510_13532 < count__13509_13531)){
var f_13533 = cljs.core._nth.call(null,chunk__13508_13530,i__13510_13532);
cljs.core.println.call(null,"  ",f_13533);

var G__13534 = seq__13507_13529;
var G__13535 = chunk__13508_13530;
var G__13536 = count__13509_13531;
var G__13537 = (i__13510_13532 + (1));
seq__13507_13529 = G__13534;
chunk__13508_13530 = G__13535;
count__13509_13531 = G__13536;
i__13510_13532 = G__13537;
continue;
} else {
var temp__4425__auto___13538 = cljs.core.seq.call(null,seq__13507_13529);
if(temp__4425__auto___13538){
var seq__13507_13539__$1 = temp__4425__auto___13538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13507_13539__$1)){
var c__7668__auto___13540 = cljs.core.chunk_first.call(null,seq__13507_13539__$1);
var G__13541 = cljs.core.chunk_rest.call(null,seq__13507_13539__$1);
var G__13542 = c__7668__auto___13540;
var G__13543 = cljs.core.count.call(null,c__7668__auto___13540);
var G__13544 = (0);
seq__13507_13529 = G__13541;
chunk__13508_13530 = G__13542;
count__13509_13531 = G__13543;
i__13510_13532 = G__13544;
continue;
} else {
var f_13545 = cljs.core.first.call(null,seq__13507_13539__$1);
cljs.core.println.call(null,"  ",f_13545);

var G__13546 = cljs.core.next.call(null,seq__13507_13539__$1);
var G__13547 = null;
var G__13548 = (0);
var G__13549 = (0);
seq__13507_13529 = G__13546;
chunk__13508_13530 = G__13547;
count__13509_13531 = G__13548;
i__13510_13532 = G__13549;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13550 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6857__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6857__auto__)){
return or__6857__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13550);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13550)))?cljs.core.second.call(null,arglists_13550):arglists_13550));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13511_13551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13512_13552 = null;
var count__13513_13553 = (0);
var i__13514_13554 = (0);
while(true){
if((i__13514_13554 < count__13513_13553)){
var vec__13515_13555 = cljs.core._nth.call(null,chunk__13512_13552,i__13514_13554);
var name_13556 = cljs.core.nth.call(null,vec__13515_13555,(0),null);
var map__13518_13557 = cljs.core.nth.call(null,vec__13515_13555,(1),null);
var map__13518_13558__$1 = ((((!((map__13518_13557 == null)))?((((map__13518_13557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13518_13557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13518_13557):map__13518_13557);
var doc_13559 = cljs.core.get.call(null,map__13518_13558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13560 = cljs.core.get.call(null,map__13518_13558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13556);

cljs.core.println.call(null," ",arglists_13560);

if(cljs.core.truth_(doc_13559)){
cljs.core.println.call(null," ",doc_13559);
} else {
}

var G__13561 = seq__13511_13551;
var G__13562 = chunk__13512_13552;
var G__13563 = count__13513_13553;
var G__13564 = (i__13514_13554 + (1));
seq__13511_13551 = G__13561;
chunk__13512_13552 = G__13562;
count__13513_13553 = G__13563;
i__13514_13554 = G__13564;
continue;
} else {
var temp__4425__auto___13565 = cljs.core.seq.call(null,seq__13511_13551);
if(temp__4425__auto___13565){
var seq__13511_13566__$1 = temp__4425__auto___13565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13511_13566__$1)){
var c__7668__auto___13567 = cljs.core.chunk_first.call(null,seq__13511_13566__$1);
var G__13568 = cljs.core.chunk_rest.call(null,seq__13511_13566__$1);
var G__13569 = c__7668__auto___13567;
var G__13570 = cljs.core.count.call(null,c__7668__auto___13567);
var G__13571 = (0);
seq__13511_13551 = G__13568;
chunk__13512_13552 = G__13569;
count__13513_13553 = G__13570;
i__13514_13554 = G__13571;
continue;
} else {
var vec__13520_13572 = cljs.core.first.call(null,seq__13511_13566__$1);
var name_13573 = cljs.core.nth.call(null,vec__13520_13572,(0),null);
var map__13523_13574 = cljs.core.nth.call(null,vec__13520_13572,(1),null);
var map__13523_13575__$1 = ((((!((map__13523_13574 == null)))?((((map__13523_13574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13523_13574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13523_13574):map__13523_13574);
var doc_13576 = cljs.core.get.call(null,map__13523_13575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13577 = cljs.core.get.call(null,map__13523_13575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13573);

cljs.core.println.call(null," ",arglists_13577);

if(cljs.core.truth_(doc_13576)){
cljs.core.println.call(null," ",doc_13576);
} else {
}

var G__13578 = cljs.core.next.call(null,seq__13511_13566__$1);
var G__13579 = null;
var G__13580 = (0);
var G__13581 = (0);
seq__13511_13551 = G__13578;
chunk__13512_13552 = G__13579;
count__13513_13553 = G__13580;
i__13514_13554 = G__13581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__13505,map__13505__$1,m,n,nm){
return (function (p__13525){
var vec__13526 = p__13525;
var role = cljs.core.nth.call(null,vec__13526,(0),null);
var spec = cljs.core.nth.call(null,vec__13526,(1),null);
if(cljs.core.truth_((function (){var and__6845__auto__ = spec;
if(cljs.core.truth_(and__6845__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__6845__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__13505,map__13505__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});
