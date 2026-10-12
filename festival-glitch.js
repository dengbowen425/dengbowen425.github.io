/* TV signal loss confined to the original 制躁 artwork, with identical resting frames. */
function createFestivalGlitch(image,stops){
 const stage=document.createElement('div');stage.className='festival-signal';stage.setAttribute('aria-label','制躁标识电视故障动效');
 const canvas=document.createElement('canvas'),button=document.createElement('button');canvas.setAttribute('aria-hidden','true');button.type='button';button.className='festival-signal-toggle';button.textContent='暂停动效';button.setAttribute('aria-pressed','false');stage.append(canvas,button);
 const ctx=canvas.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const crop={x:.59,y:.425,w:.245,h:.133};let art=null,alive=true,ready=false,visible=false,paused=false,frame=0,elapsed=0,last=0;
 const source=document.createElement('canvas');
 const noise=document.createElement('canvas');noise.width=160;noise.height=90;const nctx=noise.getContext('2d');
 function resize(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;canvas.width=Math.round(w*Math.min(devicePixelRatio,2));canvas.height=Math.round(h*Math.min(devicePixelRatio,2));draw(0);}
 function base(){const w=art.naturalWidth,h=art.naturalHeight;ctx.drawImage(art,w*crop.x,h*crop.y,w*crop.w,h*crop.h,0,0,canvas.width,canvas.height);}
 function draw(power,time=0){
  if(!ready||!canvas.width)return;const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);base();stage.dataset.signal=power>.02?'glitch':'clean';
  if(power<=.001)return;
  // Horizontal strips pull in opposite directions; vertical roll resembles lost CRT sync.
  if(source.width!==W||source.height!==H){source.width=W;source.height=H;}source.getContext('2d').drawImage(canvas,0,0);
  ctx.fillStyle='#060707';ctx.fillRect(0,0,W,H);
  const strip=Math.max(2,Math.round(H/36)),roll=Math.sin(time*5)*H*.12*power;
  for(let y=0;y<H;y+=strip){
   const shift=(Math.sin(y*.075+time*34)*.055+Math.sin(time*13+y*.014)*.13)*W*power;
   const stretch=1+Math.sin(time*11+y*.031)*.27*power;
   const dy=(y+roll+H)%H;
   ctx.drawImage(source,0,y,W,Math.min(strip,H-y),(W-W*stretch)/2+shift,dy,W*stretch,strip+1);
  }
  // A moving compressed band and momentary chromatic ghosts.
  const band=((time*.48)%1)*H,bh=H*.055;
  ctx.globalAlpha=.65*power;ctx.drawImage(source,0,Math.max(0,Math.min(H-bh,band)),W,bh,W*.13*power,band,W*.84,bh*.42);
  ctx.globalCompositeOperation='screen';ctx.globalAlpha=.18*power;ctx.drawImage(source,-W*.025*power,0);ctx.globalCompositeOperation='source-over';
  const pixels=nctx.createImageData(noise.width,noise.height);
  let seed=Math.floor(time*24)+1;for(let i=0;i<pixels.data.length;i+=4){seed=(seed*1664525+1013904223)>>>0;const v=seed>>>24;pixels.data[i]=v;pixels.data[i+1]=v;pixels.data[i+2]=v;pixels.data[i+3]=255;}
  nctx.putImageData(pixels,0,0);ctx.globalAlpha=.27*power;ctx.drawImage(noise,0,0,W,H);
  ctx.globalAlpha=.16*power;ctx.fillStyle='#020606';for(let y=0;y<H;y+=4)ctx.fillRect(0,y,W,1);
  // One low-contrast local luminance pulse, never a full-page flash.
  ctx.globalAlpha=.08*power;ctx.fillStyle='#c6d9da';ctx.fillRect(0,0,W,H);ctx.globalAlpha=1;
 }
 function tick(now){frame=0;if(!alive||!visible||paused||document.hidden||reduced.matches||!ready){last=0;draw(0);return;}
  if(last)elapsed+=now-last;last=now;const t=elapsed/1000,phase=t%5.8;stage.dataset.phase=phase.toFixed(3);
  // Quiet opening / signal loss / smooth recovery / clean final hold.
  let p=0;if(phase>1.6&&phase<3.15){const q=(phase-1.6)/1.55;p=Math.sin(q*Math.PI)**.65*(.58+.42*Math.abs(Math.sin(q*15)));}
  draw(p,t);frame=requestAnimationFrame(tick);
 }
 function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(visible&&!paused&&!document.hidden&&!reduced.matches&&ready)frame=requestAnimationFrame(tick);else draw(0);stage.dataset.playing=String(Boolean(frame));}
 function loaded(){
  if(!alive||!image.complete||!image.naturalWidth)return;
  // Srcset density-corrects HTML naturalWidth. A cached bitmap keeps native crop coordinates.
  const bitmap=new Image(),src=image.currentSrc||image.src;bitmap.src=src;
  bitmap.decode().then(()=>{if(!alive||src!==(image.currentSrc||image.src))return;art=bitmap;ready=true;stage.classList.add('is-ready');resize();sync();}).catch(()=>{});
 }
 image.addEventListener('load',loaded);if(image.complete)loaded();
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
 const observer=new IntersectionObserver(([e])=>{visible=e.isIntersecting;sync();},{threshold:.1});observer.observe(stage);
 button.addEventListener('click',()=>{paused=!paused;button.textContent=paused?'播放动效':'暂停动效';button.setAttribute('aria-pressed',String(paused));sync();});
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
 stops.push(()=>{alive=false;cancelAnimationFrame(frame);observer.disconnect();resizeObserver.disconnect();image.removeEventListener('load',loaded);document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);});
 return stage;
}
