(()=>{const{$,$$,E,R,RM,api,ready,observe,flutter,PAGES}=SH,B=document.body;
window.__introOK=true;const start=()=>B.classList.add('go');const intro=$('#intro');
if(document.documentElement.classList.contains('nointro')||RM){intro&&intro.remove();document.addEventListener('arrived',start,{once:true})}
else{const v=$('#iv'),pg=$('#pg');let fin=false;const finish=()=>{if(fin)return;fin=true;try{sessionStorage.setItem('introSeen','1')}catch(e){}intro.classList.add('done');setTimeout(start,1000);setTimeout(()=>intro.remove(),2500)};
 v.addEventListener('playing',()=>{intro.classList.add('play');setTimeout(finish,5000)});v.addEventListener('timeupdate',()=>pg.style.width=(v.currentTime/(v.duration||9.5)*100)+'%');v.addEventListener('error',finish);
 const p=v.play();p&&p.catch(()=>setTimeout(finish,800));setTimeout(()=>{if(!intro.classList.contains('play'))finish()},3500);setTimeout(finish,9000)}
// hero tilt
const st=$('#stage');if(!SH.TOUCH&&!RM)addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;st.style.transform=`rotateY(${x*8}deg) rotateX(${-y*6}deg)`},{passive:true});
flutter($('.hero'),4,['img/bf-pink.webp'],{min:34,max:70,op:.85});flutter($('.hero'),3,['img/deco/wing.webp'],{min:50,max:90,op:.9,mul:true});flutter($('#bk2'),4,['img/deco/bf-glow-pink.webp','img/deco/bf-glow-purple.webp'],{min:90,max:160,op:.9,screen:true});
ready.then(async C=>{if(C.hero_image)$('#cut').src=C.hero_image;
 const SV=await api('api/services');$('#mq').innerHTML=[0,1].map(()=>SV.map(s=>`<span>${E(s.name)}</span><b>✦</b>`).join('')).join('');
 const pick=n=>SV.find(s=>s.name.toLowerCase().includes(n))||SV[0];const L=[pick('butterfly'),pick('boho'),pick('goddess'),pick('island'),pick('fulani')];
 $('#ug').innerHTML=L.map((s,i)=>`<a class="u u${i+1}" href="services.html"><img loading="lazy" src="${E(s.image)}" alt="${E(s.name)}"><span>${E(s.name)}</span></a>`).join('')+`<div class="ut"><p>Fourteen signature looks, each one with its own personality. Pick a flavour and watch the whole page change colour around it.</p><a class="btn" href="services.html">Explore services</a></div>`;
 flutter($('#uni'),5,['img/bf-pink.webp'],{min:40,max:90,op:.8});
 const b=SV.find(s=>/butterfly/i.test(s.name));if(b){$('#promoBtn').href='book.html?service='+b.id;$('#promoImg').src=b.image;$('#promoBtn').textContent='Book '+b.name.toLowerCase()}
 const pi=$('.pi');['img/bf-pink.webp'].forEach(()=>{flutter(pi,4,['img/bf-pink.webp'],{min:50,max:110,op:.95})});
 $('#tiles').innerHTML=PAGES.slice(1).map((p,i)=>`<a class="tile" href="${p[1]}" style="--pc:${p[3]}"><span class="gn">${i+2}</span><h3>${p[2]}</h3><p>${p[4]}</p><em>Enter →</em></a>`).join('');
 $('#qs').innerHTML=C.testimonials.length?C.testimonials.map(t=>`<div class="q rv"><p>${E(t.text)}</p><b>${E(t.name)}</b></div>`).join(''):`<div class="empty rv">Be one of our first reviews.<br><a class="btn" style="margin-top:1.2rem" href="contact.html">Say hello</a></div>`;observe()})})();
