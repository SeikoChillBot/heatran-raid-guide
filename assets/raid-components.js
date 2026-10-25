/* RAID ATLAS FR — canonical modules for Heatran and Cresselia.
 * Les moteurs gardent exclusivement leur stratégie et les données Pokémon.
 * Use these functions for all new raids instead of duplicating markup.
 */
(function(global){
"use strict";
const doc=document;
const el=(tag,cls,txt)=>{const x=doc.createElement(tag);if(cls)x.className=cls;if(txt!=null)x.textContent=String(txt);return x;};
function checkbox(label,checked,change){
 const row=el("label","view-option");const input=el("input");
 input.type="checkbox";input.checked=!!checked;input.addEventListener("change",()=>change(input.checked));
 row.append(input,doc.createTextNode(label));return row;
}
function battleIntro(boss){
 const section=el("div","battle-intro"),inner=el("div");
 inner.append(el("h2",null,"Battle strategy"),el("p",null,"Follow the turn-by-turn plan to defeat "+boss+". Each turn shows the actions of all four players."));
 section.append(inner);return section;
}
function phaseSelect({labels,current,onChange}){
 const box=el("div","phase-control");const lab=el("label",null,"BATTLE PHASE"),sel=el("select");
 lab.htmlFor="phase";sel.id="phase";sel.setAttribute("aria-label","Select raid turn");
 labels.forEach((label,i)=>{const option=el("option",null,(i+1)+" / "+labels.length+" · "+label);
 option.value=String(i);option.selected=i===current;sel.append(option);});
 sel.addEventListener("change",()=>onChange(Number(sel.value)));box.append(lab,sel);return box;
}
/* Métadonnées exactes pour les aperçus V12 (sans inventer de builds).
   Data conservées of la carte utilisée par le moteur et accessibles aux
   futures fiches via action.build ou pokemon du composant buildCard. */
function decoratePreview(node,p){
 if(!p||!node)return node;
 const detail={
   name:p.name||p.n||"",
   item:p.item||"",
   nature:p.nature||"",
   ability:p.ability||p.talent||"",
   ev:p.ev||"",
   iv:p.iv||"",
   moves:Array.isArray(p.moves)?p.moves:(p.attacks||p.moves||"").split(/\s*[\/·]\s*/).filter(Boolean),
   source:p.source||"",
   note:p.note||""
 };
 node.dataset.raidBuild=JSON.stringify(detail);
 return node;
}
function actionGrid(actions,selected){
 const grid=el("div","battle-grid");
 actions.forEach((a,i)=>{
  const card=el("div","card"+(i===selected?" selected":""));
  if(a.build)decoratePreview(card,a.build);
  card.append(el("small",null,"P"+(i+1)+(i===selected?" · VOTRE ACTION":"")));
  const line=el("div","poke-row"),info=el("div","poke-text"),name=el("div","poke-name",a.name),move=el("div","move",a.move);
  info.append(name,move);
  if(a.note)info.append(el("small","raid-when",a.note));
  let sprite=a.sprite;
  if(!sprite&&a.spriteUrl){sprite=el("img","sprite");sprite.src=a.spriteUrl;sprite.alt="";sprite.loading="lazy";}
  if(sprite){
   // Shared EN and FR raid artwork treatment: use transparent official artwork
   // instead of leaving an opaque sprite tile behind each Pokémon.
   if(sprite.tagName==="IMG"||sprite.tagName==="img"){
     const url=sprite.getAttribute("src")||"";
     const found=url.match(/\/pokemon\/(\d+)\.png(?:\?.*)?$/);
     if(found){
       sprite.dataset.raidOriginalSprite=url;
       sprite.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+found[1]+".png";
     }
     sprite.classList.add("raid-action-art");
     for(const prop of ["background","background-color","background-image","box-shadow","border","outline"]){
       sprite.style.setProperty(prop,prop==="background"||prop==="background-color"?"transparent":"none","important");
     }
     sprite.style.setProperty("mix-blend-mode","normal","important");
   }
   line.append(sprite);
  }
  line.classList.add("raid-action-art-row");
  line.style.setProperty("background","transparent","important");
  info.classList.add("raid-action-art-details");
  line.append(info);card.append(line);grid.append(card);
 });
 return grid;
}
function copyButton(label,copyText,copy){
 const button=el("button","copy-turn-action",label||"Copy this turn");button.type="button";
 button.addEventListener("click",()=>copy(button,copyText));return button;
}
function battleTurn({target,index,total,title,actions,selected,preflight,banner,notes,advice,onPokemon,onTurnChange,copyText,copy}){
 const panel=target||el("section","turn-section");
 panel.classList.add("turn-panel");panel.append(el("div","section-kicker","Turn "+(index+1)+" of "+total));
 panel.append(el("h2",null,title));
 if(preflight)panel.append(preflight);
 if(banner)panel.append(el("p","raid-conditional-banner",banner));
 const copyEl=copyButton("Copy this turn",copyText,copy);
 panel.append(copyEl,actionGrid(actions,selected));
 // Shared raid rule: turn controls replace the redundant "View 6 Pokémon"
 // button, which is already available in the permanent Pokémon tab.
 // Place them immediately after the actions, not at the end of the guide.
 if(typeof onTurnChange==="function"){
  const nav=phaseNav({current:index,total,onChange:onTurnChange});
  nav.classList.add("raid-inline-turn-nav");
  nav.setAttribute("aria-label","Go to previous or next turn");
  panel.append(nav);
 }
 if(notes)panel.append(notes);
 if(advice)panel.append(advice);
 return panel;
}
function phaseNav({current,total,onChange}){
 const row=el("div","phase-nav raid-inline-turn-nav"),back=el("button",null,"← Previous turn"),next=el("button",null,"Next turn →");
 back.type=next.type="button";
 back.disabled=current<=0;next.disabled=current>=total-1;
 back.onclick=()=>onChange(current-1);next.onclick=()=>onChange(current+1);
 row.append(back,next);return row;
}
function feature({player,boss,artwork}){
 const section=el("section","pokemon-feature-banner"),copy=el("div");
 copy.append(el("span","eyebrow","POKÉMON BUILDS"),el("h2",null,"Prepare your team"),
 el("p",null,"Held items, abilities, EVs, priority IVs and moves for player "+(player+1)+". Expand a card to view the complete build."));
 section.append(copy);
 if(artwork){const img=el("img","feature-octillery");img.alt="";img.loading="lazy";img.src=artwork;section.append(img);}
 return section;
}
function buildCard({pokemon,index=0,expanded=false,onToggle,copy}){
 const p=pokemon,card=el("details","card");
 decoratePreview(card,p);
 card.open=expanded;
 if(onToggle)card.addEventListener("toggle",()=>onToggle(card));
 const summary=el("summary"),row=el("span","poke-row"),info=el("span","poke-text");
 let img=p.sprite;
 if(!img){img=el("img","sprite");img.alt="";img.loading="lazy";img.src=p.spriteUrl||"";}
 row.append(img);
 info.append(el("div","poke-name",(index+1)+". "+p.name),
 el("div","muted",p.item+" · "+(p.moves?.[0]||"")));
 row.append(info);summary.append(row);card.append(summary);
 const table=el("table");
 const values=[["Held item",p.item],["Nature",p.nature],["Ability",p.ability],["EV",p.ev],
 ["Priority IVs",p.iv],["Moves",(p.moves||[]).join(" / ")],["Alternatives",p.variant||"Not specified"]];
 values.forEach(([key,value])=>{const tr=table.insertRow();tr.insertCell().textContent=key;tr.insertCell().textContent=value||"Not specified";});
 if(p.note)card.append(el("p","muted",p.note));
 const overview=el("div","build-showcase"),specs=el("section","build-specs"),head=el("h3",null,"Pokémon build");
 specs.append(head);
 const layout=el("div","build-summary"),portrait=el("div","build-portrait");
 let artwork=el("img","sprite large");artwork.alt="";artwork.loading="lazy";
 artwork.src=p.artworkUrl||p.spriteUrl||"";artwork.style.imageRendering="auto";
 portrait.append(artwork);layout.append(portrait);
 const facts=el("div","build-facts");
 [["Item",p.item],["Nature",p.nature],["Ability",p.ability],["EV",p.ev],["Priority IVs",p.iv]].forEach(([key,val])=>{
  const f=el("div","build-fact");f.append(el("small",null,key),el("strong",null,val||"Not specified"));facts.append(f);
 });
 layout.append(facts);specs.append(layout);
 const attacks=el("section","build-moves");
 attacks.append(el("h3",null,"Moves"));
 (p.moves||[]).forEach((move,j)=>{
  const cell=el("div","move-pill"),symbol=el("span","move-symbol move-symbol-"+(j%4),["◆","✦","✧","⬡"][j%4]);
  cell.append(symbol,el("span",null,move));attacks.append(cell);
 });
 overview.append(specs,attacks);
 card.append(overview,table);
 const b=el("button",null,"Copy build");b.type="button";
 b.onclick=()=>copy(b,p);
 card.append(b);return card;
}
function prepCard({name,item,sprite,spriteUrl,checks,build}){
 const card=el("div","prep-card"),row=el("div","poke-row");
 if(build)decoratePreview(card,build);
 let img=sprite;
 if(!img&&spriteUrl){img=el("img","sprite");img.src=spriteUrl;img.loading="lazy";img.alt="";}
 if(img)row.append(img);
 row.append(el("div","poke-text",name+(item?" · "+item:"")));
 card.append(row);
 (checks||[]).forEach(c=>{
  const label=el("label","prep-check"),box=el("input");
  box.type="checkbox";box.checked=!!c.checked;
  box.addEventListener("change",()=>c.onChange(box.checked));
  label.append(box,doc.createTextNode(c.label));card.append(label);
 });
 return card;
}
function progressCard(id,title){
 const node=el("div","progress-card"),head=el("div","progress-head"),label=el("span",null,title||"PREPARATION"),percent=el("strong");
 percent.id=id+"-pct";percent.textContent="0%";head.append(label,percent);
 const track=el("div","progress-track"),fill=el("div");fill.id=id+"-fill";track.append(fill);
 node.append(head,track);return node;
}
function pokemonIntroNote(text){return el("p","build-source-note",text);}
global.RaidAtlasComponents=Object.freeze({
 checkbox,battleIntro,phaseSelect,actionGrid,battleTurn,phaseNav,feature,buildCard,prepCard,progressCard,pokemonIntroNote,decoratePreview
});
})(window);