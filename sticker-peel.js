/* A cylinder bends the original sticker surface; no separate corner overlay. */
(()=>{
 const links=[...document.querySelectorAll('.discipline-sticker')];
 if(!links.length)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 const pad=24;
 const loadImage=src=>new Promise((resolve,reject)=>{
  const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=src;
 });
 const makeCanvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});
 const instances=[];
 class PaperSticker{
  constructor(link,image){
   this.link=link;this.image=image;this.progress=0;this.hover=false;this.focus=false;
   this.drag=null;this.tapPeek=false;this.ignoreClickUntil=0;
   this.canvas=makeCanvas(1,1);this.canvas.className='sticker-paper';
   this.canvas.setAttribute('aria-hidden','true');link.append(this.canvas);
   this.handle=document.createElement('span');this.handle.className='sticker-peel-handle';
   this.handle.setAttribute('aria-hidden','true');link.append(this.handle);
   this.ctx=this.canvas.getContext('2d');
   this.n=link.classList.contains('sticker-product')?{x:.79,y:.613}:{x:.70,y:.714};
   const length=Math.hypot(this.n.x,this.n.y);this.n.x/=length;this.n.y/=length;
   this.t={x:-this.n.y,y:this.n.x};
   this.resize();
   link.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'&&fine.matches&&!this.drag){this.hover=true;this.animate();}});
   link.addEventListener('pointerleave',()=>{this.hover=false;this.animate();});
   link.addEventListener('focus',()=>{this.focus=true;this.animate();});
   link.addEventListener('blur',()=>{this.focus=false;this.animate();});
   link.addEventListener('click',()=>{clearTimeout(this.peekTimer);this.tapPeek=false;this.hover=false;this.focus=false;this.animate();});
   // Corner gestures never activate the anchor; tapping the label still does.
   link.addEventListener('pointerdown',e=>{
    if(e.isPrimary&&!this.handle.contains(e.target))this.ignoreClickUntil=0;
   },true);
   link.addEventListener('click',e=>{
    if(e.detail>0&&performance.now()<this.ignoreClickUntil){e.preventDefault();e.stopImmediatePropagation();}
   },true);
   link.addEventListener('dragstart',e=>{if(this.drag)e.preventDefault();});
   this.handle.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();});
   this.handle.addEventListener('contextmenu',e=>e.preventDefault());
   this.handle.addEventListener('pointerdown',e=>this.startDrag(e));
   this.handle.addEventListener('pointermove',e=>this.moveDrag(e));
   this.handle.addEventListener('pointerup',e=>{if(this.drag?.id===e.pointerId)this.finishDrag(false);});
   this.handle.addEventListener('pointercancel',e=>{if(this.drag?.id===e.pointerId)this.finishDrag(true);});
   this.handle.addEventListener('lostpointercapture',e=>{if(this.drag?.id===e.pointerId)this.finishDrag(true);});
   new ResizeObserver(()=>this.resize()).observe(link);
   link.classList.add('peel-ready');
  }
  localPoint(e){
   const rect=this.link.getBoundingClientRect();
   const inverse=new DOMMatrixReadOnly(getComputedStyle(this.link).transform).inverse();
   const p=new DOMPoint(e.clientX-rect.left-rect.width/2,e.clientY-rect.top-rect.height/2).matrixTransform(inverse);
   return{x:p.x+this.w/2,y:p.y+this.h/2};
  }
  startDrag(e){
   if(reduced.matches||!e.isPrimary||e.button!==0||this.drag)return;
   e.preventDefault();clearTimeout(this.peekTimer);this.tapPeek=false;
   this.hover=false;this.focus=false;
   const base=Math.max(.16,this.progress);
   this.drag={id:e.pointerId,start:this.localPoint(e),base,amount:base,maxDistance:0};
   this.ignoreClickUntil=performance.now()+1000;
   this.link.classList.add('is-peeling');
   this.handle.setPointerCapture(e.pointerId);this.animate();
  }
  moveDrag(e){
   const drag=this.drag;if(!drag||drag.id!==e.pointerId)return;
   e.preventDefault();const p=this.localPoint(e);
   const dx=drag.start.x-p.x,dy=drag.start.y-p.y;
   drag.maxDistance=Math.max(drag.maxDistance,Math.hypot(dx,dy));
   const pull=dx*this.n.x+dy*this.n.y;
   drag.amount=Math.max(0,Math.min(1,drag.base+pull/(Math.min(this.w,this.h)*.37)));
   this.animate();
  }
  finishDrag(cancelled){
   const drag=this.drag;if(!drag)return;
   this.drag=null;this.hover=false;this.focus=false;
   this.ignoreClickUntil=performance.now()+450;
   this.link.classList.remove('is-peeling');
   if(this.handle.hasPointerCapture(drag.id))this.handle.releasePointerCapture(drag.id);
   // A small corner tap demonstrates the gesture without changing sections.
   if(!cancelled&&drag.maxDistance<8){
    this.tapPeek=true;clearTimeout(this.peekTimer);
    this.peekTimer=setTimeout(()=>{this.tapPeek=false;this.animate();},650);
   }
   this.animate();
  }
  reset(){
   clearTimeout(this.peekTimer);this.tapPeek=false;this.hover=false;this.focus=false;
   this.finishDrag(true);this.animate();
  }
  resize(){
   const w=this.link.clientWidth,h=this.link.clientHeight;
   if(!w||!h)return;
   const ratio=Math.min(devicePixelRatio||1,2);
   if(this.w===w&&this.h===h&&this.ratio===ratio)return;
   this.w=w;this.h=h;this.ratio=ratio;
   this.canvas.width=Math.ceil((w+pad*2)*ratio);this.canvas.height=Math.ceil((h+pad*2)*ratio);
   this.front=makeCanvas(Math.ceil(w*ratio),Math.ceil(h*ratio));
   const ctx=this.front.getContext('2d');ctx.scale(ratio,ratio);
   const fit=Math.min(w/this.image.width,h/this.image.height);
   const iw=this.image.width*fit,ih=this.image.height*fit;
   // Hit the printed paper corner, including in wider landscape layouts.
   this.handle.style.left=`${(w-iw)/2+iw-44}px`;
   this.handle.style.top=`${(h-ih)/2+ih-44}px`;
   this.handle.style.right='auto';this.handle.style.bottom='auto';
   ctx.drawImage(this.image,(w-iw)/2,(h-ih)/2,iw,ih);
   // Very fine print texture, restricted to the existing die-cut silhouette.
   const pixels=ctx.getImageData(0,0,this.front.width,this.front.height);
   const d=pixels.data;let support=0;
   for(let y=0;y<this.front.height;y++)for(let x=0;x<this.front.width;x++){
    const i=(y*this.front.width+x)*4;if(!d[i+3])continue;
    if(d[i+3]>127)support=Math.max(support,(x*this.n.x+y*this.n.y)/ratio);
    const noise=((x*1973+y*9277+(x*y*3))%29-14)*.34;
    d[i]=Math.max(0,Math.min(255,d[i]+noise));d[i+1]=Math.max(0,Math.min(255,d[i+1]+noise));d[i+2]=Math.max(0,Math.min(255,d[i+2]+noise));
   }
   ctx.putImageData(pixels,0,0);this.support=support;
   this.back=makeCanvas(this.front.width,this.front.height);
   const back=this.back.getContext('2d');back.drawImage(this.front,0,0);
   back.globalCompositeOperation='source-in';
   const paper=back.createLinearGradient(0,0,0,this.back.height);
   paper.addColorStop(0,'#fffaf0');paper.addColorStop(1,'#e9e2d4');
   back.fillStyle=paper;back.fillRect(0,0,this.back.width,this.back.height);
   const label=this.link.querySelector('.sticker-title'),style=getComputedStyle(label);
   const size=parseFloat(style.fontSize),lineHeight=parseFloat(style.lineHeight)||size*1.12;
   const lines=this.link.classList.contains('sticker-product')?[label.textContent.trim()]:[...label.textContent.trim().matchAll(/.{1,2}/gu)].map(m=>m[0]);
   ctx.save();ctx.globalCompositeOperation='source-atop';ctx.translate(w/2,h/2);
   ctx.rotate((this.link.classList.contains('sticker-product')?-12:this.link.classList.contains('sticker-commerce')?4:-5)*Math.PI/180);
   ctx.font=`${style.fontStyle} ${style.fontWeight} ${size}px ${style.fontFamily}`;
   if('letterSpacing'in ctx)ctx.letterSpacing=style.letterSpacing;
   ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=style.color;
   lines.forEach((line,i)=>ctx.fillText(line,0,(i-(lines.length-1)/2)*lineHeight));ctx.restore();
   this.layer=makeCanvas(this.canvas.width,this.canvas.height);
   this.draw();
  }
  point(s,v){return{x:this.n.x*s+this.t.x*v,y:this.n.y*s+this.t.y*v};}
  surface(u,crease,radius){
   const angle=Math.min(u/radius,Math.PI);
   const normal=u<=Math.PI*radius?radius*Math.sin(angle):-(u-Math.PI*radius);
   const z=radius*(1-Math.cos(angle));
   return{x:this.n.x*(crease+normal)-z*.16,y:this.n.y*(crease+normal)-z*.34,z,angle};
  }
  draw(){
   const {ctx,w,h,ratio,n,t}=this;
   if(!this.front)return;
   this.canvas.dataset.peelProgress=String(Math.round(this.progress*100));
   this.canvas.dataset.gesture=this.drag?'pulling':this.tapPeek?'peek':'idle';
   ctx.setTransform(ratio,0,0,ratio,pad*ratio,pad*ratio);
   ctx.clearRect(-pad,-pad,w+pad*2,h+pad*2);
   const depth=Math.min(w,h)*.37*this.progress;
   if(depth<.05){ctx.drawImage(this.front,0,0,w,h);this.canvas.dataset.peel='flat';return;}
   const crease=this.support-depth,radius=Math.min(w,h)*(.058+.028*this.progress);
   const span=Math.hypot(w,h)*2;
   // The attached sheet ends exactly where the cylindrical surface begins.
   ctx.save();ctx.beginPath();
   const attached=[this.point(-span,-span),this.point(crease,-span),this.point(crease,span),this.point(-span,span)];
   attached.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.clip();
   ctx.drawImage(this.front,0,0,w,h);ctx.restore();
   const layer=this.layer.getContext('2d');
   layer.setTransform(ratio,0,0,ratio,pad*ratio,pad*ratio);layer.clearRect(-pad,-pad,w+pad*2,h+pad*2);
   const steps=Math.max(18,Math.ceil(depth/.65));
   for(let i=0;i<steps;i++){
    const u0=depth*i/steps,u1=depth*(i+1)/steps;
    const a=this.surface(u0,crease,radius),b=this.surface(u1,crease,radius);
    const ax=(b.x-a.x)/(u1-u0),ay=(b.y-a.y)/(u1-u0);
    const m00=ax*n.x+t.x*t.x,m01=ax*n.y+t.x*t.y;
    const m10=ay*n.x+t.y*t.x,m11=ay*n.y+t.y*t.y;
    const tx=a.x-ax*(crease+u0),ty=a.y-ay*(crease+u0);
    const from={x:a.x,y:a.y},to={x:b.x,y:b.y};
    // Subpixel overlap avoids seams between successive paper strips.
    const delta=Math.hypot(b.x-a.x,b.y-a.y);
    if(delta<.001)continue;
    const ox=(b.x-a.x)/delta*.20,oy=(b.y-a.y)/delta*.20;
    const corners=[{x:from.x-ox+t.x*(-span),y:from.y-oy+t.y*(-span)},
     {x:to.x+ox+t.x*(-span),y:to.y+oy+t.y*(-span)},
     {x:to.x+ox+t.x*span,y:to.y+oy+t.y*span},
     {x:from.x-ox+t.x*span,y:from.y-oy+t.y*span}];
    layer.save();layer.beginPath();corners.forEach((p,j)=>j?layer.lineTo(p.x,p.y):layer.moveTo(p.x,p.y));layer.closePath();layer.clip();
    layer.transform(m00,m10,m01,m11,tx,ty);
    const angle=(a.angle+b.angle)/2;
    const texture=angle>Math.PI/2?this.back:this.front;
    layer.drawImage(texture,0,0,w,h);
    // Light grazes the curved face and darkens the underside at the hinge.
    const shade=angle>Math.PI/2?.06+.17*Math.sin(angle):.11*Math.sin(angle);
    layer.globalCompositeOperation='source-atop';layer.fillStyle=`rgba(64,49,28,${shade})`;layer.fillRect(0,0,w,h);
    layer.restore();
   }
   ctx.save();ctx.shadowColor=`rgba(27,23,15,${.16*this.progress})`;ctx.shadowBlur=5*this.progress;
   ctx.shadowOffsetX=2*this.progress;ctx.shadowOffsetY=4*this.progress;
   ctx.drawImage(this.layer,-pad,-pad,w+pad*2,h+pad*2);ctx.restore();
   this.canvas.dataset.peel=this.progress>.99?'curled':'moving';
  }
  animate(){
   this.target=reduced.matches?0:this.drag?this.drag.amount:(this.hover||this.focus||this.tapPeek)?1:0;
   if(this.frame)return;
   let last=performance.now();
   const tick=now=>{
    const delta=Math.min(40,now-last);last=now;
    if(this.drag)this.progress=this.target;
    else this.progress+=(this.target-this.progress)*(1-Math.exp(-delta/105));
    if(Math.abs(this.target-this.progress)<.001)this.progress=this.target;
    this.draw();
    if(this.progress!==this.target)this.frame=requestAnimationFrame(tick);else this.frame=0;
   };
   this.frame=requestAnimationFrame(tick);
  }
 }
 const start=async()=>{
  await document.fonts.ready;
  await Promise.all(links.map(async link=>{
   try{
    const src=getComputedStyle(link).getPropertyValue('--sticker-shape').trim().match(/url\(["']?(.*?)["']?\)/)?.[1];
    if(!src)return;const image=await loadImage(src);
    instances.push(new PaperSticker(link,image));
   }catch{/* Retain the accessible, static SVG sticker if canvas cannot initialize. */}
  }));
 };
 reduced.addEventListener('change',()=>instances.forEach(sticker=>sticker.reset()));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)instances.forEach(sticker=>sticker.reset());});
 window.addEventListener('blur',()=>instances.forEach(sticker=>sticker.reset()));
 start();
})();
