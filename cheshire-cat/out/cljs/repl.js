// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9074){
var map__9099 = p__9074;
var map__9099__$1 = ((((!((map__9099 == null)))?((((map__9099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9099):map__9099);
var m = map__9099__$1;
var n = cljs.core.get.call(null,map__9099__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__9101_9123 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9102_9124 = null;
var count__9103_9125 = (0);
var i__9104_9126 = (0);
while(true){
if((i__9104_9126 < count__9103_9125)){
var f_9127 = cljs.core._nth.call(null,chunk__9102_9124,i__9104_9126);
cljs.core.println.call(null,"  ",f_9127);

var G__9128 = seq__9101_9123;
var G__9129 = chunk__9102_9124;
var G__9130 = count__9103_9125;
var G__9131 = (i__9104_9126 + (1));
seq__9101_9123 = G__9128;
chunk__9102_9124 = G__9129;
count__9103_9125 = G__9130;
i__9104_9126 = G__9131;
continue;
} else {
var temp__4425__auto___9132 = cljs.core.seq.call(null,seq__9101_9123);
if(temp__4425__auto___9132){
var seq__9101_9133__$1 = temp__4425__auto___9132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9101_9133__$1)){
var c__7668__auto___9134 = cljs.core.chunk_first.call(null,seq__9101_9133__$1);
var G__9135 = cljs.core.chunk_rest.call(null,seq__9101_9133__$1);
var G__9136 = c__7668__auto___9134;
var G__9137 = cljs.core.count.call(null,c__7668__auto___9134);
var G__9138 = (0);
seq__9101_9123 = G__9135;
chunk__9102_9124 = G__9136;
count__9103_9125 = G__9137;
i__9104_9126 = G__9138;
continue;
} else {
var f_9139 = cljs.core.first.call(null,seq__9101_9133__$1);
cljs.core.println.call(null,"  ",f_9139);

var G__9140 = cljs.core.next.call(null,seq__9101_9133__$1);
var G__9141 = null;
var G__9142 = (0);
var G__9143 = (0);
seq__9101_9123 = G__9140;
chunk__9102_9124 = G__9141;
count__9103_9125 = G__9142;
i__9104_9126 = G__9143;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9144 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6857__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6857__auto__)){
return or__6857__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9144);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9144)))?cljs.core.second.call(null,arglists_9144):arglists_9144));
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
var seq__9105_9145 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9106_9146 = null;
var count__9107_9147 = (0);
var i__9108_9148 = (0);
while(true){
if((i__9108_9148 < count__9107_9147)){
var vec__9109_9149 = cljs.core._nth.call(null,chunk__9106_9146,i__9108_9148);
var name_9150 = cljs.core.nth.call(null,vec__9109_9149,(0),null);
var map__9112_9151 = cljs.core.nth.call(null,vec__9109_9149,(1),null);
var map__9112_9152__$1 = ((((!((map__9112_9151 == null)))?((((map__9112_9151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9112_9151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9112_9151):map__9112_9151);
var doc_9153 = cljs.core.get.call(null,map__9112_9152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9154 = cljs.core.get.call(null,map__9112_9152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9150);

cljs.core.println.call(null," ",arglists_9154);

if(cljs.core.truth_(doc_9153)){
cljs.core.println.call(null," ",doc_9153);
} else {
}

var G__9155 = seq__9105_9145;
var G__9156 = chunk__9106_9146;
var G__9157 = count__9107_9147;
var G__9158 = (i__9108_9148 + (1));
seq__9105_9145 = G__9155;
chunk__9106_9146 = G__9156;
count__9107_9147 = G__9157;
i__9108_9148 = G__9158;
continue;
} else {
var temp__4425__auto___9159 = cljs.core.seq.call(null,seq__9105_9145);
if(temp__4425__auto___9159){
var seq__9105_9160__$1 = temp__4425__auto___9159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9105_9160__$1)){
var c__7668__auto___9161 = cljs.core.chunk_first.call(null,seq__9105_9160__$1);
var G__9162 = cljs.core.chunk_rest.call(null,seq__9105_9160__$1);
var G__9163 = c__7668__auto___9161;
var G__9164 = cljs.core.count.call(null,c__7668__auto___9161);
var G__9165 = (0);
seq__9105_9145 = G__9162;
chunk__9106_9146 = G__9163;
count__9107_9147 = G__9164;
i__9108_9148 = G__9165;
continue;
} else {
var vec__9114_9166 = cljs.core.first.call(null,seq__9105_9160__$1);
var name_9167 = cljs.core.nth.call(null,vec__9114_9166,(0),null);
var map__9117_9168 = cljs.core.nth.call(null,vec__9114_9166,(1),null);
var map__9117_9169__$1 = ((((!((map__9117_9168 == null)))?((((map__9117_9168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9117_9168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9117_9168):map__9117_9168);
var doc_9170 = cljs.core.get.call(null,map__9117_9169__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9171 = cljs.core.get.call(null,map__9117_9169__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9167);

cljs.core.println.call(null," ",arglists_9171);

if(cljs.core.truth_(doc_9170)){
cljs.core.println.call(null," ",doc_9170);
} else {
}

var G__9172 = cljs.core.next.call(null,seq__9105_9160__$1);
var G__9173 = null;
var G__9174 = (0);
var G__9175 = (0);
seq__9105_9145 = G__9172;
chunk__9106_9146 = G__9173;
count__9107_9147 = G__9174;
i__9108_9148 = G__9175;
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

return cljs.core.run_BANG_.call(null,((function (specs,map__9099,map__9099__$1,m,n,nm){
return (function (p__9119){
var vec__9120 = p__9119;
var role = cljs.core.nth.call(null,vec__9120,(0),null);
var spec = cljs.core.nth.call(null,vec__9120,(1),null);
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
});})(specs,map__9099,map__9099__$1,m,n,nm))
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