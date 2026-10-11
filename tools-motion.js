'use strict';
(() => {
 const arena=document.querySelector('.tools-arena');if(!arena)return;
 const buttons=[...arena.querySelectorAll('.tool-icon')],reset=document.querySelector('.tools-reset');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let bodies=[],width=0,height=0,frame=0,lastTime=0,visible=false,started=false,steps=0,settled=0,drag=null,accumulator=0,repeat=0;
 const dt=1/120,gravity=1150;
 function paint(){bodies.forEach(b=>b.el.style.transform=`translate3d(${b.x-b.r}px,${b.y-b.r}px,0) rotate(${b.angle}rad)`);}
 function measure(){width=arena.clientWidth;height=arena.clientHeight;const size=Math.min(82,Math.max(62,width/3.5));buttons.forEach(el=>{el.style.width=el.style.height=`${size}px`;});return size;}
 function drop(){if(reduced.matches||drag)return;clearTimeout(repeat);repeat=0;const size=measure();arena.classList.add('physics-ready');started=true;steps=settled=0;drag=null;arena.dataset.motionState='falling';arena.dataset.dropCycle=String(Number(arena.dataset.dropCycle||0)+1);
 bodies=buttons.map((el,i)=>({el,r:size/2,x:size/2+(width-size)*((i%3+.5)/3),y:-size*(1+Math.floor(i/3)*1.4)-i*24,vx:(i%2?1:-1)*(45+i*10),vy:0,angle:(i-2)*.16,spin:(i%2?1:-1)*.65}));paint();wake();armRepeat();}
 function allowed(){return visible&&!document.hidden&&!document.body.classList.contains('modal-open')&&!reduced.matches;}
 function armRepeat(){clearTimeout(repeat);repeat=0;if(allowed()&&!drag&&(settled>=45||steps>=480)){arena.dataset.motionState='resting';repeat=setTimeout(()=>{repeat=0;if(allowed()&&!drag)drop();},5000);}}
 function wake(){if(!allowed()||frame)return;lastTime=0;accumulator=0;frame=requestAnimationFrame(tick);}
 function stop(){clearTimeout(repeat);repeat=0;cancelAnimationFrame(frame);frame=0;lastTime=0;accumulator=0;}
 function integrate(){
  bodies.forEach(b=>{if(drag?.body===b)return;b.vy+=gravity*dt;b.vx*=.997;b.spin*=.990;b.spin-=b.angle*3.5*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.angle=Math.max(-.6,Math.min(.6,b.angle+b.spin*dt));
   if(b.x<b.r){b.x=b.r;b.vx=Math.abs(b.vx)*.65;b.spin+=.1;}if(b.x>width-b.r){b.x=width-b.r;b.vx=-Math.abs(b.vx)*.65;b.spin-=.1;}
   if(b.y>height-b.r){b.y=height-b.r;b.vy=Math.abs(b.vy)<48?0:-Math.abs(b.vy)*.47;b.vx*=.92;b.spin*=.93;}
  });
  for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
   const a=bodies[i],b=bodies[j],dx=b.x-a.x,dy=b.y-a.y,dist=Math.hypot(dx,dy)||.001,min=a.r+b.r+3;if(dist>=min)continue;
   const nx=dx/dist,ny=dy/dist,overlap=min-dist,ad=drag?.body===a,bd=drag?.body===b;
   if(!ad){a.x-=nx*overlap*(bd?1:.5);a.y-=ny*overlap*(bd?1:.5);}if(!bd){b.x+=nx*overlap*(ad?1:.5);b.y+=ny*overlap*(ad?1:.5);}
   const closing=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(closing<0){const impulse=-closing*.7;if(!ad){a.vx-=impulse*nx;a.vy-=impulse*ny;a.spin-=nx*Math.min(2,Math.abs(closing)*.007);}if(!bd){b.vx+=impulse*nx;b.vy+=impulse*ny;b.spin+=nx*Math.min(2,Math.abs(closing)*.007);}}
  }
  bodies.forEach(b=>{if(drag?.body===b)return;b.x=Math.max(b.r,Math.min(width-b.r,b.x));if(b.y>height-b.r){b.y=height-b.r;b.vy=0;}});
 }
 function tick(time){frame=0;if(!allowed())return;const elapsed=lastTime?Math.min((time-lastTime)/1000,.045):1/60;lastTime=time;accumulator+=elapsed;
  bodies.forEach(b=>{b.px=b.x;b.py=b.y;b.pa=b.angle;});
  while(accumulator>=dt){integrate();accumulator-=dt;steps++;}paint();
  const calm=bodies.every(b=>Math.abs(b.x-b.px)<.35&&Math.abs(b.y-b.py)<.35&&Math.abs(b.angle-b.pa)<.004);settled=calm?settled+1:0;
  if(drag||settled<45&&steps<480)frame=requestAnimationFrame(tick);else armRepeat();
 }
 function launch(b){b.vy=-480;b.vx=(b.x<width/2?1:-1)*140;b.spin=(b.x<width/2?1:-1)*2.2;steps=settled=0;wake();armRepeat();}
 buttons.forEach(el=>{
  el.addEventListener('pointerdown',event=>{if(reduced.matches||!started||event.button!==0)return;clearTimeout(repeat);repeat=0;const body=bodies.find(b=>b.el===el);const box=arena.getBoundingClientRect();drag={body,id:event.pointerId,ox:body.x-(event.clientX-box.left),oy:body.y-(event.clientY-box.top),x:event.clientX,y:event.clientY,travel:0,time:event.timeStamp};body.vx=body.vy=0;el.classList.add('is-dragging');el.setPointerCapture(event.pointerId);steps=settled=0;wake();});
  el.addEventListener('pointermove',event=>{if(!drag||drag.body.el!==el||drag.id!==event.pointerId)return;const box=arena.getBoundingClientRect(),b=drag.body,delta=Math.max(8,event.timeStamp-drag.time)/1000;drag.travel+=Math.hypot(event.clientX-drag.x,event.clientY-drag.y);b.vx=Math.max(-900,Math.min(900,(event.clientX-drag.x)/delta));b.vy=Math.max(-900,Math.min(900,(event.clientY-drag.y)/delta));b.x=Math.max(b.r,Math.min(width-b.r,event.clientX-box.left+drag.ox));b.y=Math.max(b.r,Math.min(height-b.r,event.clientY-box.top+drag.oy));drag.x=event.clientX;drag.y=event.clientY;drag.time=event.timeStamp;paint();});
  const release=event=>{if(!drag||drag.body.el!==el||drag.id!==event.pointerId)return;const {body,travel}=drag;drag=null;el.classList.remove('is-dragging');if(el.hasPointerCapture(event.pointerId))el.releasePointerCapture(event.pointerId);if(travel<8&&event.type==='pointerup')launch(body);else{steps=settled=0;wake();armRepeat();}};
  el.addEventListener('pointerup',release);el.addEventListener('pointercancel',release);el.addEventListener('lostpointercapture',release);
  el.addEventListener('click',event=>{if(event.detail===0&&!reduced.matches&&started)launch(bodies.find(b=>b.el===el));});
 });
 reset.addEventListener('click',drop);
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(!visible)stop();else if(!started)drop();else{wake();armRepeat();}},{threshold:.2});observer.observe(arena);
 const resize=new ResizeObserver(()=>{const previous=width;const size=measure();if(!started||reduced.matches)return;stop();bodies.forEach(b=>{b.x=previous?b.x*width/previous:b.x;b.r=size/2;b.x=Math.max(b.r,Math.min(width-b.r,b.x));b.y=Math.min(height-b.r,b.y);});steps=settled=0;paint();wake();armRepeat();});resize.observe(arena);
 const sync=()=>{if(allowed()){wake();if(!repeat)armRepeat();}else stop();};document.addEventListener('visibilitychange',sync);const modal=new MutationObserver(sync);modal.observe(document.body,{attributes:true,attributeFilter:['class']});
 const preference=()=>{stop();if(reduced.matches){arena.classList.remove('physics-ready');buttons.forEach(el=>{el.style.removeProperty('transform');el.style.removeProperty('width');el.style.removeProperty('height');el.classList.remove('is-dragging');});started=false;drag=null;}else if(visible)drop();};reduced.addEventListener('change',preference);
 window.addEventListener('pagehide',()=>{stop();observer.disconnect();resize.disconnect();modal.disconnect();document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',preference);},{once:true});
})();
