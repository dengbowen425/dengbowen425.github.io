/* Original PDF grid and photo remain fixed. Only the isolated white ink glitches. */
function createFestivalGlitch(image,stops){
 const stage=document.createElement('div');stage.className='festival-signal';stage.setAttribute('aria-label','制躁标识电视故障动效');
 const canvas=document.createElement('canvas'),button=document.createElement('button');canvas.setAttribute('aria-hidden','true');button.type='button';button.className='festival-signal-toggle';button.textContent='暂停动效';button.setAttribute('aria-pressed','false');stage.append(canvas,button);
 const ctx=canvas.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let ink=null,background=null,alive=true,ready=false,visible=false,paused=false,frame=0,elapsed=0,last=0;
 const layer=document.createElement('canvas'),layerCtx=layer.getContext('2d');
 const original=document.createElement('canvas'),originalCtx=original.getContext('2d');
 const noise=document.createElement('canvas');noise.width=140;noise.height=76;const nctx=noise.getContext('2d');
 // Authored signal frames: cuts affect only transparent white-ink fragments, never the grid.
 // Patch coordinates and destinations are fractions of the original artwork crop.
 const signalFrames=[
  {ms:130,x:-.035,y:.015,patches:[{rect:[.20,.36,.30,.17],x:-.105,y:-.045,sx:1.45,sy:.74}]},
  {ms:110,erase:[[.55,.49,.33,.34]],patches:[{rect:[.26,.12,.21,.19],x:.095,y:.035,sx:1.8,sy:1.1}]},
  {ms:90,alpha:.045},
  {ms:150,patches:[{rect:[.20,.30,.30,.23],x:.025,y:-.12,sx:1.2,sy:1.8}]},
  {ms:140,patches:[{rect:[.21,.65,.30,.24],x:-.14,y:-.025,sx:1.5,sy:.8}]},
  {ms:130,erase:[[.29,.34,.17,.52]],x:.032},
  {ms:160,patches:[{rect:[.58,.12,.28,.34],x:-.08,y:-.08,sx:1.22,sy:1.2}]},
  {ms:90,alpha:.08,erase:[[.19,.45,.35,.35]]},
  {ms:150,patches:[{rect:[.20,.44,.28,.12],x:.14,y:-.1,sx:1.65,sy:1.5}],erase:[[.58,.63,.27,.16]]},
  {ms:130,patches:[{rect:[.27,.58,.18,.27],x:.14,y:.12,sx:1.65,sy:.5}]},
  {ms:130,x:.045,y:-.015,sx:.82,sy:1.08,erase:[[.65,.2,.13,.41]]},
  {ms:150,echo:.19,patches:[{rect:[.20,.4,.33,.1],x:-.085,y:.05,sx:1.8,sy:1.6,copy:true}]},
  {ms:130,erase:[[.24,.29,.075,.56],[.40,.33,.065,.5]],x:-.028},
  {ms:150,patches:[{rect:[.57,.40,.26,.16],x:-.1,y:.12,sx:1.2,sy:.65}]},
  {ms:120,alpha:.25,x:.015},
  {ms:140,x:0,y:0,texture:.12}
 ];
 const burstDuration=signalFrames.reduce((sum,f)=>sum+f.ms,0)/1000;
 let rendered=null;
 function resize(){
  const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;
  canvas.width=Math.round(w*Math.min(devicePixelRatio,2));canvas.height=Math.round(h*Math.min(devicePixelRatio,2));
  layer.width=original.width=canvas.width;layer.height=original.height=canvas.height;
  if(ready){originalCtx.drawImage(ink,0,0,canvas.width,canvas.height);rendered=null;draw(-1);}
 }
 function draw(index=-1){
  if(!ready||!canvas.width||index===rendered)return;rendered=index;
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);ctx.drawImage(background,0,0,W,H);
  stage.dataset.signal=index<0?'clean':'glitch';stage.dataset.signalFrame=String(index);
  if(index<0){ctx.drawImage(original,0,0);return;}
  const f=signalFrames[index];layerCtx.clearRect(0,0,W,H);layerCtx.save();
  layerCtx.translate(W*(.5+(f.x||0)),H*(.5+(f.y||0)));layerCtx.scale(f.sx||1,f.sy||1);
  layerCtx.drawImage(original,-W/2,-H/2);layerCtx.restore();
  for(const r of f.erase||[])layerCtx.clearRect(r[0]*W,r[1]*H,r[2]*W,r[3]*H);
  for(const patch of f.patches||[]){
   const [x,y,w,h]=patch.rect;
   if(!patch.copy)layerCtx.clearRect(x*W,y*H,w*W,h*H);
   layerCtx.drawImage(original,x*W,y*H,w*W,h*H,(x+(patch.x||0))*W,(y+(patch.y||0))*H,w*W*(patch.sx||1),h*H*(patch.sy||1));
  }
  // Each authored frame has its own frozen snow, with no interpolation between frames.
  const pixels=nctx.createImageData(noise.width,noise.height);let seed=index*977+23;
  for(let i=0;i<pixels.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;const v=seed>>>24;pixels.data[i]=v;pixels.data[i+1]=v;pixels.data[i+2]=v;pixels.data[i+3]=255;}
  nctx.putImageData(pixels,0,0);layerCtx.globalCompositeOperation='source-atop';
  layerCtx.globalAlpha=f.texture??.5;layerCtx.drawImage(noise,0,0,W,H);
  layerCtx.globalAlpha=.30;layerCtx.fillStyle='#090909';for(let y=index%4;y<H;y+=4)layerCtx.fillRect(0,y,W,1);
  layerCtx.globalCompositeOperation='source-over';layerCtx.globalAlpha=1;
  if(f.echo){ctx.globalAlpha=f.echo;ctx.drawImage(layer,-W*.03,H*.02);}
  ctx.globalAlpha=f.alpha??1;ctx.drawImage(layer,0,0);ctx.globalAlpha=1;
 }
 function tick(now){
  frame=0;if(!alive||!visible||paused||document.hidden||reduced.matches||!ready){last=0;draw(-1);return;}
  if(last)elapsed+=now-last;last=now;const phase=elapsed/1000%6.4;stage.dataset.phase=phase.toFixed(3);
  // Original first frame, hard-cut signal frames, original final frame and quiet hold.
  let index=-1,remaining=(phase-1.3)*1000;
  if(phase>=1.3&&phase<1.3+burstDuration){
   for(let i=0;i<signalFrames.length;i++){if(remaining<signalFrames[i].ms){index=i;break;}remaining-=signalFrames[i].ms;}
  }
  draw(index);frame=requestAnimationFrame(tick);
 }
 function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(visible&&!paused&&!document.hidden&&!reduced.matches&&ready)frame=requestAnimationFrame(tick);else draw(-1);stage.dataset.playing=String(Boolean(frame));}
 const loadAsset=src=>{const bitmap=new Image();bitmap.src=src;return bitmap.decode().then(()=>bitmap);};
 Promise.all([loadAsset('assets/festival-signal-background.webp'),loadAsset('assets/festival-signal-ink.svg')]).then(([bg,fg])=>{
  if(!alive)return;background=bg;ink=fg;ready=true;stage.classList.add('is-ready');resize();sync();
 }).catch(()=>{if(alive)stage.remove();});

 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
 const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;sync();},{threshold:.1});observer.observe(stage);
 button.addEventListener('click',()=>{paused=!paused;button.textContent=paused?'播放动效':'暂停动效';button.setAttribute('aria-pressed',String(paused));sync();});
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
 stops.push(()=>{alive=false;cancelAnimationFrame(frame);observer.disconnect();resizeObserver.disconnect();document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);});
 return stage;
}
