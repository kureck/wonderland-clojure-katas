// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11549){
var map__11574 = p__11549;
var map__11574__$1 = ((((!((map__11574 == null)))?((((map__11574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11574):map__11574);
var m = map__11574__$1;
var n = cljs.core.get.call(null,map__11574__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11576_11598 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11577_11599 = null;
var count__11578_11600 = (0);
var i__11579_11601 = (0);
while(true){
if((i__11579_11601 < count__11578_11600)){
var f_11602 = cljs.core._nth.call(null,chunk__11577_11599,i__11579_11601);
cljs.core.println.call(null,"  ",f_11602);

var G__11603 = seq__11576_11598;
var G__11604 = chunk__11577_11599;
var G__11605 = count__11578_11600;
var G__11606 = (i__11579_11601 + (1));
seq__11576_11598 = G__11603;
chunk__11577_11599 = G__11604;
count__11578_11600 = G__11605;
i__11579_11601 = G__11606;
continue;
} else {
var temp__4425__auto___11607 = cljs.core.seq.call(null,seq__11576_11598);
if(temp__4425__auto___11607){
var seq__11576_11608__$1 = temp__4425__auto___11607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11576_11608__$1)){
var c__7571__auto___11609 = cljs.core.chunk_first.call(null,seq__11576_11608__$1);
var G__11610 = cljs.core.chunk_rest.call(null,seq__11576_11608__$1);
var G__11611 = c__7571__auto___11609;
var G__11612 = cljs.core.count.call(null,c__7571__auto___11609);
var G__11613 = (0);
seq__11576_11598 = G__11610;
chunk__11577_11599 = G__11611;
count__11578_11600 = G__11612;
i__11579_11601 = G__11613;
continue;
} else {
var f_11614 = cljs.core.first.call(null,seq__11576_11608__$1);
cljs.core.println.call(null,"  ",f_11614);

var G__11615 = cljs.core.next.call(null,seq__11576_11608__$1);
var G__11616 = null;
var G__11617 = (0);
var G__11618 = (0);
seq__11576_11598 = G__11615;
chunk__11577_11599 = G__11616;
count__11578_11600 = G__11617;
i__11579_11601 = G__11618;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11619 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6760__auto__)){
return or__6760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11619);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11619)))?cljs.core.second.call(null,arglists_11619):arglists_11619));
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
var seq__11580_11620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11581_11621 = null;
var count__11582_11622 = (0);
var i__11583_11623 = (0);
while(true){
if((i__11583_11623 < count__11582_11622)){
var vec__11584_11624 = cljs.core._nth.call(null,chunk__11581_11621,i__11583_11623);
var name_11625 = cljs.core.nth.call(null,vec__11584_11624,(0),null);
var map__11587_11626 = cljs.core.nth.call(null,vec__11584_11624,(1),null);
var map__11587_11627__$1 = ((((!((map__11587_11626 == null)))?((((map__11587_11626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11587_11626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11587_11626):map__11587_11626);
var doc_11628 = cljs.core.get.call(null,map__11587_11627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11629 = cljs.core.get.call(null,map__11587_11627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11625);

cljs.core.println.call(null," ",arglists_11629);

if(cljs.core.truth_(doc_11628)){
cljs.core.println.call(null," ",doc_11628);
} else {
}

var G__11630 = seq__11580_11620;
var G__11631 = chunk__11581_11621;
var G__11632 = count__11582_11622;
var G__11633 = (i__11583_11623 + (1));
seq__11580_11620 = G__11630;
chunk__11581_11621 = G__11631;
count__11582_11622 = G__11632;
i__11583_11623 = G__11633;
continue;
} else {
var temp__4425__auto___11634 = cljs.core.seq.call(null,seq__11580_11620);
if(temp__4425__auto___11634){
var seq__11580_11635__$1 = temp__4425__auto___11634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11580_11635__$1)){
var c__7571__auto___11636 = cljs.core.chunk_first.call(null,seq__11580_11635__$1);
var G__11637 = cljs.core.chunk_rest.call(null,seq__11580_11635__$1);
var G__11638 = c__7571__auto___11636;
var G__11639 = cljs.core.count.call(null,c__7571__auto___11636);
var G__11640 = (0);
seq__11580_11620 = G__11637;
chunk__11581_11621 = G__11638;
count__11582_11622 = G__11639;
i__11583_11623 = G__11640;
continue;
} else {
var vec__11589_11641 = cljs.core.first.call(null,seq__11580_11635__$1);
var name_11642 = cljs.core.nth.call(null,vec__11589_11641,(0),null);
var map__11592_11643 = cljs.core.nth.call(null,vec__11589_11641,(1),null);
var map__11592_11644__$1 = ((((!((map__11592_11643 == null)))?((((map__11592_11643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11592_11643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11592_11643):map__11592_11643);
var doc_11645 = cljs.core.get.call(null,map__11592_11644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11646 = cljs.core.get.call(null,map__11592_11644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11642);

cljs.core.println.call(null," ",arglists_11646);

if(cljs.core.truth_(doc_11645)){
cljs.core.println.call(null," ",doc_11645);
} else {
}

var G__11647 = cljs.core.next.call(null,seq__11580_11635__$1);
var G__11648 = null;
var G__11649 = (0);
var G__11650 = (0);
seq__11580_11620 = G__11647;
chunk__11581_11621 = G__11648;
count__11582_11622 = G__11649;
i__11583_11623 = G__11650;
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

return cljs.core.run_BANG_.call(null,((function (specs,map__11574,map__11574__$1,m,n,nm){
return (function (p__11594){
var vec__11595 = p__11594;
var role = cljs.core.nth.call(null,vec__11595,(0),null);
var spec = cljs.core.nth.call(null,vec__11595,(1),null);
if(cljs.core.truth_((function (){var and__6748__auto__ = spec;
if(cljs.core.truth_(and__6748__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__6748__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__11574,map__11574__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map