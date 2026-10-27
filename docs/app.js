// Public synthetic fixtures only. No health API, analytics, storage or network calls.
'use strict';
const scenes = {
  clear: {title:'Room to breathe.',description:'Warm light, quiet space and an unbroken line.',minutes:480,deep:100,rem:120,awake:20,wakes:2,bed:500,mapping:'Longer duration and fewer interruptions inspire an open composition. Deep and REM inspire depth and tonal richness.'},
  steady: {title:'A quieter kind of flow.',description:'Soft light and a balanced, understated composition.',minutes:440,deep:80,rem:100,awake:40,wakes:3,bed:480,mapping:'A measured composition and softened light illustrate a more moderate fictional night.'},
  restless: {title:'Between the fragments.',description:'Muted light. A divided circle. A rhythm interrupted.',minutes:360,deep:55,rem:75,awake:90,wakes:7,bed:450,mapping:'More interruptions inspire a divided circle and a broken line. Shorter duration brings a more enclosed atmosphere.'},
  storm: {title:'Weather moving through.',description:'A shadowed halo. A tilted line. Tension in stillness.',minutes:290,deep:35,rem:55,awake:130,wakes:11,bed:420,mapping:'This deliberately contrasting fictional example uses a tilted horizon and a shadowed halo to explore fragmentation, without flashing effects or health conclusions.'},
  unknown: {title:'Some things stay unknown.',description:'A world held in mist, waiting for a clearer signal.',minutes:null,deep:null,rem:null,awake:null,wakes:null,bed:null,mapping:'Missing values remain unknown. No stages, efficiency, score or health interpretation is inferred.'}
};
function duration(value){return value === null ? 'Unknown' : `${Math.floor(value/60)}h ${String(value%60).padStart(2,'0')}m`;}
function selectScene(key){
 const s=scenes[key];const scene=document.querySelector('#scene');
 scene.className=`landscape scene ${key}`;
 scene.setAttribute('aria-label',`${key} synthetic night: ${s.description}`);
 document.querySelector('#scene-title').textContent=s.title;
 document.querySelector('#scene-description').textContent=s.description;
 const rows=[['Time asleep',duration(s.minutes)],['Deep / REM',`${duration(s.deep)} / ${duration(s.rem)}`],['Awake time',duration(s.awake)],['Awakenings',s.wakes ?? 'Unknown'],['Sleep efficiency',s.bed === null ? 'Unknown' : `${Math.round(s.minutes/s.bed*100)}%`]];
 document.querySelector('#metrics').replaceChildren(...rows.map(([label,value])=>{const row=document.createElement('div');const dt=document.createElement('dt');const dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;row.append(dt,dd);return row;}));
 document.querySelector('#mapping').textContent=s.mapping;
 document.querySelectorAll('[data-scene]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scene===key)));
}
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>selectScene(button.dataset.scene)));
selectScene('clear');
// Set only after the public repository and Discussions have been approved and verified.
const collaborationUrl = '';
if(collaborationUrl){const link=document.querySelector('#contact-link');link.href=collaborationUrl;link.hidden=false;document.querySelector('#contact-pending').hidden=true;}
