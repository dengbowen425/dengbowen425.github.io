/* Original PDF grid and photo remain fixed. Only the isolated white ink glitches. */
function createFestivalGlitch(image,stops){
 const stage=document.createElement('div');stage.className='festival-signal';stage.setAttribute('aria-label','制躁标识电视故障动效');
 const canvas=document.createElement('canvas'),button=document.createElement('button');canvas.setAttribute('aria-hidden','true');button.type='button';button.className='festival-signal-toggle';button.textContent='暂停动效';button.setAttribute('aria-pressed','false');stage.append(canvas,button);
 const ctx=canvas.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let ink=null,background=null,alive=true,ready=false,visible=false,paused=false,frame=0,elapsed=0,last=0;
 const layer=document.createElement('canvas'),layerCtx=layer.getContext('2d');
 const noise=document.createElement('canvas');noise.width=140;noise.height=76;const nctx=noise.getContext('2d');
 function resize(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;canvas.width=Math.round(w*Math.min(devicePixelRatio,2));canvas.height=Math.round(h*Math.min(devicePixelRatio,2));layer.width=canvas.width;layer.height=canvas.height;draw(0);}
 function draw(power,time=0){
  if(!ready||!canvas.width)return;const W=canvas.width,H=canvas.height;
  // The same complete background bitmap is drawn every frame; no grid transform or noise.
  ctx.clearRect(0,0,W,H);ctx.drawImage(background,0,0,W,H);
  stage.dataset.signal=power>.02?'glitch':'clean';
  if(power<=.001){ctx.drawImage(ink,0,0,W,H);return;}
  const beat=Math.floor(time*11)%6;
  const jitterX=[0,-.024,.016,-.012,.029,0][beat]*W*power;
  const jitterY=[0,.009,-.013,.008,-.006,0][beat]*H*power;
  // Discrete rigid jumps and brief compression. Straight strokes stay straight.
  const sx=1+[0,-.11,.035,-.055,.025,0][beat]*power;
  const sy=1+[0,.025,-.045,.035,-.025,0][beat]*power;
  layerCtx.clearRect(0,0,W,H);layerCtx.save();
  layerCtx.translate(W/2+jitterX,H/2+jitterY);layerCtx.scale(sx,sy);
  layerCtx.drawImage(ink,-W/2,-H/2,W,H);layerCtx.restore();
  // Snow and scan-line dropout are clipped to the white ink's own alpha.
  const pixels=nctx.createImageData(noise.width,noise.height);let seed=Math.floor(time*18)+1;
  for(let i=0;i<pixels.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;const v=seed>>>24;pixels.data[i]=v;pixels.data[i+1]=v;pixels.data[i+2]=v;pixels.data[i+3]=255;}
  nctx.putImageData(pixels,0,0);layerCtx.globalCompositeOperation='source-atop';
  layerCtx.globalAlpha=.34*power;layerCtx.drawImage(noise,0,0,W,H);
  layerCtx.globalAlpha=.22*power;layerCtx.fillStyle='#090909';for(let y=0;y<H;y+=4)layerCtx.fillRect(0,y,W,1);
  layerCtx.globalCompositeOperation='source-over';layerCtx.globalAlpha=1;
  // A faint rigid afterimage, then a short local signal dropout; background is untouched.
  ctx.globalAlpha=.12*power;ctx.drawImage(layer,-W*.012*power,0);
  ctx.globalAlpha=beat===1?1-.72*power:beat===3?1-.30*power:1;
  ctx.drawImage(layer,0,0);ctx.globalAlpha=1;
 }
 function tick(now){frame=0;if(!alive||!visible||paused||document.hidden||reduced.matches||!ready){last=0;draw(0);return;}
  if(last)elapsed+=now-last;last=now;const t=elapsed/1000,phase=t%5.8;stage.dataset.phase=phase.toFixed(3);
  // Quiet opening / signal loss / smooth recovery / clean final hold.
  let p=0;if(phase>1.6&&phase<3.15){const q=(phase-1.6)/1.55;p=Math.sin(q*Math.PI)**.65*(.58+.42*Math.abs(Math.sin(q*15)));}
  draw(p,t);frame=requestAnimationFrame(tick);
 }
 function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(visible&&!paused&&!document.hidden&&!reduced.matches&&ready)frame=requestAnimationFrame(tick);else draw(0);stage.dataset.playing=String(Boolean(frame));}
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
