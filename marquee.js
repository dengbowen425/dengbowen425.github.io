'use strict';
(() => {
 const strip=document.querySelector('.discipline-strip'),track=strip?.querySelector('.discipline-strip-track');if(!track)return;
 const artwork=track.querySelector('.discipline-strip-tile').cloneNode(true);
 const first=document.createElement('div'),second=document.createElement('div');first.className=second.className='discipline-strip-group';first.append(artwork);track.replaceChildren(first,second);
 let count=0;
 function fill(){const tileWidth=artwork.getBoundingClientRect().width;if(!tileWidth)return;const required=Math.max(1,Math.ceil((strip.clientWidth+1)/tileWidth));if(required!==count){count=required;first.replaceChildren(artwork,...Array.from({length:required-1},()=>artwork.cloneNode(true)));second.replaceChildren(...[...first.children].map(tile=>tile.cloneNode(true)));}
 const distance=first.getBoundingClientRect().width;track.style.setProperty('--strip-distance',`${distance}px`);track.style.setProperty('--strip-duration',`${distance/70}s`);
 }
 const resize=new ResizeObserver(fill);resize.observe(strip);resize.observe(artwork);fill();
 window.addEventListener('pagehide',()=>resize.disconnect(),{once:true});
})();
