// Shared by the live headline and its exported motion preview.
function createPortfolioRenderer(makeCanvas) {
 const FONT=200,word='Portfolio',probe=makeCanvas(2,2).getContext('2d');probe.font=`900 ${FONT}px GothamPortfolio`;
 const cap=probe.measureText('P').actualBoundingBoxAscent;
 const widths=[...word].map(letter=>probe.measureText(letter).width);
 const mask=makeCanvas(1,1),ink=makeCanvas(1,1),noise=makeCanvas(512,512),nc=noise.getContext('2d'),data=nc.createImageData(512,512);
 let seed=6027,grain=null;
 function random(){seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return(seed>>>0)/4294967296;}
 for(let i=0;i<data.data.length;i+=4){const r=random(),white=r>.52;data.data[i]=white?255:0;data.data[i+1]=white?255:49;data.data[i+2]=white?255:136;data.data[i+3]=r>.2?(white?6+random()*72:20+random()*35):0;}nc.putImageData(data,0,0);
 const states=[-1,0,1,2],keys=[{t:0,s:0},{t:.45,s:0},{t:.87,s:1},{t:1.12,s:1},{t:1.54,s:2},{t:1.79,s:2},{t:2.21,s:3},{t:2.46,s:3},{t:2.98,s:0},{t:3.5,s:0}];
 const groups=[0,0,0,0,1,1,2,2,2];
 function poseAt(t){t=((t%3.5)+3.5)%3.5;let a=keys[0],b=keys[1];for(let i=1;i<keys.length;i++){if(t<=keys[i].t){a=keys[i-1];b=keys[i];break;}}const p=(t-a.t)/(b.t-a.t),e=p*p*(3-2*p);return groups.map(group=>{const ga=states[a.s],gb=states[b.s];const wa=ga<0?1:ga===group?1.95:.27,wb=gb<0?1:gb===group?1.95:.27;const ha=ga<0?.55:ga===group?.72:.144,hb=gb<0?.55:gb===group?.72:.144;return {width:wa+(wb-wa)*e,height:ha+(hb-ha)*e,skew:(ga===group?-.20:0)*(1-e)+(gb===group?-.20:0)*e};});}
 function letters(ctx,pose,w,h){const rows=[[0,1,2,3,4,5,6,7,8]];ctx.font=`900 ${FONT}px GothamPortfolio`;ctx.fillStyle='#000';ctx.textBaseline='alphabetic';
  rows.forEach((row,r)=>{const units=row.reduce((sum,i)=>sum+widths[i]*pose[i].width,0),leanReach=Math.max(...pose.map(p=>Math.max(0,-p.skew)*p.height*h)),available=w*.93-leanReach;let x=w*.035;const baseline=h*.84;
   row.forEach(i=>{const slot=widths[i]*pose[i].width/units*available;const height=pose[i].height*h;ctx.save();ctx.translate(x,baseline);ctx.transform(slot/widths[i]*.97,0,pose[i].skew*height/cap,height/cap,0,0);ctx.fillText(word[i],0,0);ctx.restore();x+=slot;});
  });
 }
 function line(ctx,t,w,h){const q=(t%3.5)/3.5,phase=Math.floor(q*3),p=q*3-phase;ctx.save();ctx.strokeStyle='#ef9be7';ctx.lineWidth=Math.max(1.5,w/600);ctx.lineCap='round';ctx.lineJoin='round';ctx.globalAlpha=.75;
  if(phase===0){ctx.translate(w*.5,h*.48);ctx.rotate(-.09);ctx.beginPath();ctx.ellipse(0,0,w*.43,h*.21,0,p*Math.PI*2-.5,p*Math.PI*2+1.55);ctx.stroke();}
  else if(phase===1){ctx.beginPath();let stop=w*(.10+p*.78);for(let x=w*.10;x<stop;x+=w/180){const y=h*.57+Math.sin(x/w*26-p*2)*h*.08+Math.sin(x/w*59)*h*.018;if(x===w*.1)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();}
  else {const reveal=Math.sin(Math.PI*p),cx=w*.76,cy=h*.53;for(let j=0;j<15;j++){const a=Math.PI*1.12+j/14*Math.PI*.77,inner=h*.16,outer=inner+reveal*h*(.1+(j%4)*.028);ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*inner,cy+Math.sin(a)*inner);ctx.lineTo(cx+Math.cos(a)*outer,cy+Math.sin(a)*outer);ctx.stroke();}}
  ctx.restore();
 }
 return function render(canvas,t){const w=canvas.width,h=canvas.height,ctx=canvas.getContext('2d');if(mask.width!==w||mask.height!==h){mask.width=ink.width=w;mask.height=ink.height=h;grain=ink.getContext('2d').createPattern(noise,'repeat');}const mc=mask.getContext('2d'),ic=ink.getContext('2d');mc.clearRect(0,0,w,h);letters(mc,poseAt(t),w,h);ic.globalCompositeOperation='source-over';ic.clearRect(0,0,w,h);const gradient=ic.createLinearGradient(0,0,0,h);gradient.addColorStop(0,'#0078ff');gradient.addColorStop(.52,'#20a7ff');gradient.addColorStop(1,'#006bff');ic.fillStyle=gradient;ic.fillRect(0,0,w,h);const shift=Math.floor(t*12)*17%512;ic.save();ic.translate(shift,-shift);ic.fillStyle=grain;ic.fillRect(-shift,shift,w,h);ic.restore();ic.globalCompositeOperation='destination-in';ic.drawImage(mask,0,0);ctx.clearRect(0,0,w,h);ctx.drawImage(ink,0,0);line(ctx,t,w,h);};
}
