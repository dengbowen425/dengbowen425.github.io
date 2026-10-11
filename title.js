(() => {
 const heading=document.querySelector('.hero h1');if(!heading)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');const canvas=document.createElement('canvas');canvas.className='portfolio-canvas';canvas.setAttribute('aria-hidden','true');heading.append(canvas);
 const pause=document.querySelector('#title-motion');let render,ready=false,visible=true,paused=false,elapsed=0,last=0,lastPaint=0,raf=0;
 const makeCanvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
 function resize(){if(!ready)return;const box=heading.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.max(1,Math.round(box.width*dpr));canvas.height=Math.max(1,Math.round(box.height*dpr));render(canvas,elapsed);}
 function tick(ms){raf=0;if(!ready||paused||reduced.matches||!visible||document.hidden||document.body.classList.contains('modal-open'))return;elapsed+=last?Math.min((ms-last)/1000,.08):0;last=ms;if(ms-lastPaint>=1000/30){render(canvas,elapsed);lastPaint=ms;}raf=requestAnimationFrame(tick);}
 function resume(){cancelAnimationFrame(raf);raf=0;last=lastPaint=0;if(ready&&!paused&&!reduced.matches&&visible&&!document.hidden&&!document.body.classList.contains('modal-open'))raf=requestAnimationFrame(tick);}
 pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'播放动效':'暂停动效';pause.setAttribute('aria-pressed',String(paused));resume();});
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume();});observer.observe(heading);const sizing=new ResizeObserver(resize);sizing.observe(heading);const modal=new MutationObserver(resume);modal.observe(document.body,{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',resume);reduced.addEventListener('change',resume);
 document.fonts.load('900 200px GothamPortfolio').then(()=>{render=createPortfolioRenderer(makeCanvas);ready=true;heading.classList.add('kinetic-ready');resize();resume();}).catch(()=>{canvas.remove();heading.classList.remove('kinetic-ready');});
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);observer.disconnect();sizing.disconnect();modal.disconnect();document.removeEventListener('visibilitychange',resume);reduced.removeEventListener('change',resume);},{once:true});
})();
