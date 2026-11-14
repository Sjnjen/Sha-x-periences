(()=>{const{$,RM,api,ready,flutter}=SH,NS='http://www.w3.org/2000/svg',rnd=(a,b)=>a+Math.random()*(b-a);
const COL=[['#ff9db3','#ffc2d1'],['#ffffff','#ffe3ea'],['#e8607f','#ff9db3'],['#ffd1db','#fff']],LEAF=['#6fae80','#8bc79a','#58946a'];
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.append(e);return e}
function flower(svg,x,base,h,o){const g=el('g',{transform:`translate(${x},${base})`},svg),sw=el('g',{class:'sw'},g);sw.style.cssText=`--amp:${o.amp||2.5}deg;--dur:${rnd(3.2,5.5)}s;--del:${-rnd(0,4)}s`;
 const sd=rnd(.3,2.2),L=h*1.25;const st=el('path',{class:'stem',d:`M0 0C${rnd(-18,18)} ${-h*.35} ${rnd(-18,18)} ${-h*.7} 0 ${-h}`,stroke:'#5a9b6b','stroke-width':o.sw||4,fill:'none','stroke-linecap':'round'},sw);st.style.cssText=`--L:${L};--d:${sd}s`;
 [.3,.5,.68].forEach((p,i)=>{if(h<110&&i>1)return;const s=i%2?1:-1,l=el('ellipse',{class:'lf',cx:s*16,cy:-h*p,rx:16,ry:6,fill:LEAF[i%3],transform:`rotate(${s*-25} 0 ${-h*p})`},sw);l.style.cssText=`--d2:${sd+1+i*.25}s`});
 const b=el('g',{transform:`translate(0,${-h})`},sw),bl=el('g',{class:'bl'},b);bl.style.cssText=`--d2:${sd+1.7}s`;const r=o.r||rnd(22,38),n=o.n||Math.round(rnd(7,12)),c=COL[Math.floor(Math.random()*COL.length)],round=Math.random()>.5;
 for(let i=0;i<n;i++){const a=i*360/n;round?el('circle',{cx:0,cy:-r*.8,r:r*.42,fill:c[i%2],opacity:.96,transform:`rotate(${a})`},bl):el('ellipse',{cx:0,cy:-r*.78,rx:r*.3,ry:r*.8,fill:c[i%2],opacity:.96,transform:`rotate(${a})`},bl)}
 el('circle',{r:r*.3,fill:'#f5c86a'},bl);el('circle',{r:r*.14,fill:'#e08a2a'},bl)}
function garden(svg,spec,base){spec.forEach(s=>flower(svg,s[0],base,s[1],s[2]||{}))}
const W=1200;const big=[];for(let i=0;i<15;i++)big.push([40+i*(W-80)/14+rnd(-18,18),rnd(130,360),{r:rnd(24,42)}]);
garden($('#gd'),big,420);garden($('#hg'),[[40,70,{r:15,sw:2.5,amp:3}],[120,98,{r:19,sw:3,amp:3}],[210,60,{r:14,sw:2.5,amp:3.5}],[300,86,{r:17,sw:3}],[400,52,{r:13,sw:2.5}]],120);
// gust: pointer speed + scroll push flowers
let g=1,lx=0,ls=scrollY;const gd=$('#gd');function tick(){g+=(1-g)*.04;gd.style.setProperty('--g',g.toFixed(2));$('#hg').style.setProperty('--g',g.toFixed(2));requestAnimationFrame(tick)}
if(!RM){addEventListener('mousemove',e=>{g=Math.min(4,g+Math.abs(e.clientX-lx)*.02);lx=e.clientX},{passive:true});addEventListener('scroll',()=>{g=Math.min(4,g+Math.abs(scrollY-ls)*.02);ls=scrollY},{passive:true});tick()}
// butterfly visitor: flies in, rests on the mirror frame, leaves
const vf=$('#vf');function visit(){if(RM){vf.style.cssText+='left:62%;top:30%';return}const h=$('#ah').getBoundingClientRect(),m=$('.mir').getBoundingClientRect(),W=h.width,H=h.height,rx=m.right-h.left-30,ry=m.top-h.top+40;vf.classList.remove('rest');
 const k=[{t:'translate(-120px,'+H*.5+'px) rotate(15deg)',o:0},{t:`translate(${W*.3}px,${H*.2}px) rotate(-10deg)`,o:1},{t:`translate(${W*.55}px,${H*.35}px) rotate(12deg)`,o:1},{t:`translate(${rx}px,${ry}px) rotate(-8deg)`,o:1},{t:`translate(${rx}px,${ry}px) rotate(-8deg)`,o:1},{t:`translate(${W*.9}px,${H*.1}px) rotate(20deg)`,o:1},{t:`translate(${W+120}px,${-20}px) rotate(25deg)`,o:0}];
 const a=vf.animate(k.map((x,i)=>({transform:x.t,opacity:x.o,offset:[0,.12,.35,.55,.75,.9,1][i]})),{duration:16000,easing:'ease-in-out',fill:'forwards'});setTimeout(()=>vf.classList.add('rest'),8200);setTimeout(()=>vf.classList.remove('rest'),12200);a.onfinish=()=>setTimeout(visit,6000)}
document.addEventListener('arrived',()=>setTimeout(visit,2500),{once:true});flutter($('#qb'),6,['img/bf-pink.webp'],{min:40,max:90,op:.7});
ready.then(()=>api('api/services').then(s=>$('#sn').textContent=s.length));})();
