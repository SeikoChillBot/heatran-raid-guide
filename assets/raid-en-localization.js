/* RAID ATLAS EN — canonical English Pokémon terminology.
   Mappings are generated from PokeAPI language IDs 5 (French) and 9 (English).
   Preserve the user-authored raid numbers and mechanics: only terminology and
   explicitly reviewed phrases should be translated.
*/
(function(global){
"use strict";
const official=global.RaidAtlasOfficialNames||{};
const exact=new Map(Object.entries(official));
const terms=[...exact.entries()].filter(([fr,en])=>fr!==en&&fr.length>=4).sort((a,b)=>b[0].length-a[0].length);
const reEscape=x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
function term(value){
 let s=String(value??"");
 const exactValue=exact.get(s.toLocaleLowerCase("fr"));
 if(exactValue)return exactValue;
 const saves=[];
 for(const [fr,en] of terms){
   const re=new RegExp("(^|[^\\p{L}])("+reEscape(fr)+")(?=$|[^\\p{L}])","giu");
   s=s.replace(re,(_,prefix)=>{const mark="§§RAIDTERM"+saves.length+"§§";saves.push(en);return prefix+mark;});
 }
 s=s.replace(/§§RAIDTERM(\\d+)§§/g,(_,n)=>saves[Number(n)]);
 return s;
}
const stats=[
 [/\\bPV\\b/g,"HP"],[/\\bAtt\\. Spé\\./g,"Sp. Atk"],[/\\bDéf\\. Spé\\./g,"Sp. Def"],
 [/\\bAtt\\./g,"Atk"],[/\\bDéf\\./g,"Def"],[/\\bVit\\./g,"Spe"],
 [/\\bAttaque Spéciale\\b/gi,"Special Attack"],[/\\bDéfense Spéciale\\b/gi,"Special Defense"],
 [/\\bDéfense\\b/gi,"Defense"],[/\\bVitesse\\b/gi,"Speed"],[/\\bAttaque\\b/gi,"Attack"]
];
function build(value){
 let s=term(value);
 for(const [pattern,to] of stats)s=s.replace(pattern,to);
 return s.replace(/Non (?:imposés|précisés|publiés)/gi,"Not specified in source")
 .replace(/Non imposée/gi,"Not required").replace(/Non précisé/gi,"Not specified")
 .replace(/À vérifier/gi,"Verify with source").replace(/À calculer/gi,"Calculate from mechanics");
}
function deep(value){
 if(Array.isArray(value))return value.map(deep);
 if(value&&typeof value==="object"){
  const result={};
  for(const [key,part] of Object.entries(value)){
   if(typeof part==="string"){
    if(["url","source","href","id","type","key","slot","page","mode"].includes(key))result[key]=part;
    else if(["n","name","item","talent","ability","nature","ev","iv","moves","attacks","attack","move","pokemon","species","locations"].includes(key))result[key]=build(part);
    else result[key]=term(part);
   }else result[key]=deep(part);
  }
  return result;
 }
 if(typeof value==="string")return term(value);
 return value;
}
global.RaidAtlasEN=Object.freeze({term,build,deep});
})(window);
