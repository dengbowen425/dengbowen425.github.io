'use strict';
const projects=[
{id:'bein',name:'BEINSPACE',subtitle:'户外女装的日常表达',category:'digital',label:'电商视觉 / AI',role:'视觉负责人',scope:'小红书运营视觉、电商页面、AI 设计工作流',description:'围绕户外女装的产品与生活方式，建立小红书内容和电商视觉表达。将 AI 融入创意探索、视觉设定与素材制作，再通过设计完成统一的品牌呈现。',pages:[8,17],image:'cover-bein'},
{id:'bein-detail',name:'BEINSPACE · 电商详情页',subtitle:'从户外场景到服饰细节',category:'digital',label:'电商视觉 / 详情页',role:'视觉负责人',scope:'服饰电商详情页、产品信息与视觉编排',description:'围绕户外女装的产品特点，把场景形象、版型工艺、面料细节与尺码信息串成连续的阅读路径。',pages:[18],image:'cover-bein-detail'},
{id:'recore',name:'Recore 无限核子',subtitle:'健身空间的全新品牌识别',category:'brand',label:'品牌识别 / 空间',role:'主视觉设计负责人',scope:'Logo、VI、空间视觉方案',description:'为乐刻旗下高端健身空间探索新的品牌识别。通过符号、字体与色彩建立清晰的视觉语言，并延展到空间中的应用场景。本项目为设计方案呈现。',pages:[10],image:'cover-recore'},
{id:'campaign',name:'乐刻运动 · 无价之报',subtitle:'把运动放进轻松的日常',category:'brand',label:'品牌活动 / 跨界联名',role:'主视觉设计师',scope:'38 节「无价之报」、T3 出行联动、线上线下视觉',description:'把「无价之宝」变成一份复古的「无价之报」。以日常媒介、轻松对话与活动物料，降低运动的心理门槛，让女性节日的品牌表达进入真实生活。',pages:[6],image:'cover-campaign'},
{id:'festival',name:'乐刻运动嘉年华',subtitle:'把大型健身活动包装成一场超级派对',category:'brand',label:'品牌活动 / 空间视觉',role:'主视觉设计负责人 / 全案设计统筹',scope:'2023 嘉年华主视觉、线上传播、现场空间与物料落地',description:'让健身的泛娱乐化与电音节化成为一套鲜明的视觉语言。锐角字体、闪电、橙红色与流体线条贯穿屏幕、导视和现场，带出集体参与的节奏。',pages:[7],image:'cover-festival'},
{id:'retail',name:'乐刻健身门店',subtitle:'从视觉系统走进真实空间',category:'brand',label:'零售空间 / 视觉',role:'项目主设计师',scope:'门店视觉更新、空间物料、品牌应用',description:'结合门店空间与品牌使用场景，梳理视觉系统及物料的应用方式。以鲜明的品牌色与明确的信息层级，让门店中的视觉表达更一致。',pages:[11],image:'cover-retail'},
{id:'medal',name:'Enjoy running',subtitle:'把运动的记忆做成一枚奖牌',category:'product',label:'产品设计 / 奖牌',role:'奖牌项目主设计',scope:'户外跑奖牌、视觉延展、产品呈现',description:'围绕乐刻运动的户外跑项目，从概念草图、图形设计到产品表现，探索奖牌如何承载活动主题和参与者的运动记忆。',pages:[13,14],image:'cover-medal'},
{id:'leleorange',name:'leleorange',subtitle:'运动文化里的服饰与图形',category:'product',label:'服饰设计 / 产品',role:'服饰设计师',scope:'运动服饰图形、产品设计与延展',description:'围绕运动生活方式进行服饰与产品设计，让图形语言进入日常穿着。作品覆盖不同服装款式与周边载体，保持鲜明而连贯的品牌表达。',pages:[15],image:'cover-leleorange'},
{id:'morelife',name:'MORELIFE',subtitle:'自由的图形，真实的兴趣',category:'product',label:'个人创作 / 图形',role:'个人创作',scope:'图形实验、服饰与周边设计',description:'来自运动与街头文化的个人创作。以字体、符号和拼贴探索独立的视觉表达，并尝试将它们延展为服饰与生活中的物件。',pages:[20],image:'cover-morelife'},
{id:'ospreys',name:'杭州鱼鹰 Ospreys',subtitle:'属于球队的视觉与文化',category:'product',label:'球队图形 / 周边',role:'个人创作',scope:'球队视觉图形、服饰、周边与海报',description:'以杭州鱼鹰队的运动文化为主题，探索队徽、图形、海报与周边的统一表达。让视觉既能传递球队个性，也能成为队员与支持者的共同记忆。',pages:[21],image:'cover-ospreys'}
];
const boards={"6":{"parts":[{"src":"assets/case-hd-06-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-06-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-06-2.webp","width":3000,"height":1620}],"trimmedBottom":2,"width":3000,"height":7620},"7":{"parts":[{"src":"assets/case-hd-07-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-07-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-07-materials.webp","width":3000,"height":2228},{"src":"assets/case-hd-07-photos.webp","width":1921,"height":1407,"photo":true}],"trimmedBottom":3,"width":3000,"height":10069},"8":{"parts":[{"src":"assets/case-hd-08-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-08-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-08-2.webp","width":3000,"height":655}],"trimmedBottom":2,"width":3000,"height":6655},"10":{"parts":[{"src":"assets/case-hd-10-replacement-0.webp","width":1350,"height":1350},{"src":"assets/case-hd-10-replacement-1.webp","width":1350,"height":1350},{"src":"assets/case-hd-10-replacement-2.webp","width":1350,"height":1350},{"src":"assets/case-hd-10-replacement-3.webp","width":1350,"height":1127}],"trimmedBottom":0,"width":1350,"height":5177},"11":{"parts":[{"src":"assets/case-hd-11-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-3.webp","width":3000,"height":1701}],"trimmedBottom":2,"width":3000,"height":10701},"13":{"parts":[{"src":"assets/case-hd-13-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-4.webp","width":3000,"height":692}],"trimmedBottom":2,"width":3000,"height":12692},"14":{"parts":[{"src":"assets/case-hd-14-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-4.webp","width":3000,"height":461}],"trimmedBottom":2,"width":3000,"height":12461},"15":{"parts":[{"src":"assets/case-hd-15-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-4.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-5.webp","width":3000,"height":2640}],"trimmedBottom":2,"width":3000,"height":17640},"17":{"parts":[{"src":"assets/case-hd-17-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-3.webp","width":3000,"height":893}],"trimmedBottom":2,"width":3000,"height":9893},"18":{"parts":[{"src":"assets/case-hd-18-replacement-0.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-1.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-2.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-3.webp","width":1920,"height":1910}],"trimmedBottom":0,"width":1920,"height":7670},"20":{"parts":[{"src":"assets/case-hd-20-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-4.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-5.webp","width":3000,"height":233}],"trimmedBottom":3,"width":3000,"height":15233},"21":{"parts":[{"src":"assets/case-hd-21-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-4.webp","width":3000,"height":1277}],"trimmedBottom":3,"width":3000,"height":13277}};
const projectNotes={"bein":{"role":"视觉负责人","scope":"小红书运营、AI 设计流程与栏目模板","description":"负责 BEINSPACE 户外女装的小红书运营视觉与 AI 内容探索。从需求分析、创意发散到画面输出，将 AI 工作流与品牌模板库结合，服务不同风格、不同视角的服饰呈现。","notes":[{"heading":"从运营需求到视觉表达","text":"主要负责电商端与小红书运营设计，根据需求分析产出设计画面。围绕新品剧透、选择指南、户外指南等栏目，形成系列模板与固定素材库。"},{"heading":"将 AI 纳入设计流程","text":"搭建满足服饰需求的 AI 工作流，探索不同视角与风格，减少实拍所需的时间、人力与资金投入。流程从需求拆解和调研开始，经过创意发散、方向收拢、视觉与风格设定，再完成初稿修改、品质打磨和设计定稿。"}]},"recore":{"role":"主视觉设计负责人 / 软装视觉设计师","scope":"Logo 与 VI 方案、健身空间视觉方案","description":"为乐刻旗下高端健身空间 Recore 无限核子探索品牌识别与空间视觉。项目历时约半年，与场景空间部门协作，完成 Logo、VI 与场景视觉方案。","notes":[{"heading":"让品牌识别进入空间","text":"在项目中担任软装视觉设计师，匹配场景空间部门共同推进，完成项目 Logo、VI 设计方案和场景视觉方案。"},{"heading":"从概念到视觉系统","text":"展板呈现了关键词梳理、字体与符号推演、配色、品牌物料以及空间视觉应用。页面保留方案探索的完整过程。"}],"status":"设计方案呈现"},"campaign":{"role":"主视觉设计师 / 插画与第三方设计统筹","scope":"38 节「无价之报」、T3 出行联动、线上资源位与线下物料","description":"将「无价之宝」转成一份复古的「无价之报」，用闺蜜对话和生活碎片降低运动的心理门槛。","notes":[{"heading":"无价之报：从日常出发","text":"与 T3 出行联动时，设计需要避开身材焦虑和刻板的女性色彩表达。将「无价之宝」转成一份复古的「无价之报」，以轻松的闺蜜对话与生活碎片，降低运动的心理门槛。"},{"heading":"色彩、媒介与参与路径","text":"保留乐刻的橙色，结合牛皮纸质感与报纸的粗粝排版。菜篮子作为日常、低压力的核心道具，配合贴纸与领取提示，把线下参与延展到小红书和乐刻 APP 的打卡分享。负责主视觉、线上资源位、创意周边与线下海报，并统筹插画内容与第三方设计监督。"}]},"retail":{"role":"项目主设计师","scope":"乐刻铁馆改造升级、视觉软装与空间应用","description":"围绕乐刻健身铁馆的改造升级，把美式铁馆的粗犷气质转成与空间配合的视觉画面，制定整体视觉软装方案。","notes":[{"heading":"回应空间升级","text":"根据公司的发展方向与健身潮流，将部分乐刻普馆升级改造为乐刻铁馆。设计尝试融入美式铁馆元素，以粗犷的画面语言配合真实空间。"},{"heading":"建立整体视觉软装方案","text":"从品牌标识、门店信息与物料应用出发，制定整体视觉软装方案，让入口、训练区域与空间中的品牌表达保持连贯。"}]},"medal":{"role":"奖牌设计项目主设计","scope":"「此刻发芽」户外跑奖牌、乐刻 × 和平精英联名奖牌","description":"参与乐刻首次开启的户外跑奖牌系列。以「此刻发芽」为主题，把绿色、积极、健康与环保的活动方向转成可以被保存的运动纪念。","notes":[{"heading":"从主题与用户调研开始","text":"作为项目主设计，与品牌部、运营部和 3D 团队协作，参与用户数据调研、主题定调与创意脑暴。前期经历三轮创意讨论，围绕户外跑系列赛事确定绿色、积极、健康与环保的方向。"},{"heading":"此刻发芽：让概念成为产品","text":"品牌首个奖牌系列以「此刻发芽」为主题，设计执行中经过约 8—10 次团队修改与形象重塑，从图形概念推进到产品呈现。"},{"heading":"联名奖牌的延展","text":"展板同时收录乐刻运动与和平精英手游的联名奖牌，呈现奖牌图形、立体效果及相关产品视觉。"}]},"leleorange":{"role":"服饰设计师","scope":"leleorange 周边产品线、服饰图案与设计输出","description":"负责乐刻旗下 leleorange 周边产品线的设计。以穿着舒适度与运动生活为目标，将品牌图案、创意和产品表达连接起来。","notes":[{"heading":"让运动进入日常穿着","text":"围绕用户的穿着舒适度与运动生活，打造生活健身类目产品线。负责 leleorange 周边产品线的设计产出。"},{"heading":"从创意到设计输出","text":"服饰图案与创意由本人负责，推进设计、修改与最终输出。展板保留不同款式、图形方向和周边载体的完整呈现。"}]},"morelife":{"role":"个人创作","scope":"字体与图形实验、服饰和周边应用","description":"MORELIFE 的个人图形创作，包含字体、拼贴、服饰与周边载体。以完整原展板呈现不同实验之间的关系。","notes":[{"heading":"个人图形实验","text":"以 MORELIFE 字体与图形为核心，将拼贴、符号和文字延展到服饰与周边。不同载体之间保留共同的视觉性格，也呈现独立创作中的多种表达。"}]},"ospreys":{"role":"个人创作","scope":"杭州鱼鹰队图形、服饰与周边视觉","description":"围绕杭州鱼鹰 Ospreys 的球队视觉，展开队徽、字体、图形与服饰周边的应用。","notes":[{"heading":"让球队图形成为共同表达","text":"围绕杭州鱼鹰的队徽、字体与球队图形，将识别元素应用到服饰及周边。通过不同载体中的共同视觉语言，呈现球队的个性与运动文化。"}]},"festival":{"role":"主视觉设计负责人 / 全案设计统筹","scope":"2023 乐刻运动嘉年华、线上线下主视觉、空间与特殊介质","description":"将年度大型健身活动包装为一场令人想参与的超级派对。锐角字体、闪电符号、活力橙红与流体线条贯穿动态主视觉和现场空间。","notes":[{"heading":"嘉年华：让视觉带着节奏","text":"将年度大型健身活动包装为令人想参与的超级派对。视觉策略是健身的泛娱乐化与电音节化：统一锐角倾斜的字体、重构的闪电符号、活力橙红渐变和流体线条，共同构成动态主视觉，并适配线上线下场景。"},{"heading":"从设计到现场落地","text":"负责主视觉设计与全案统筹，组织跨部门协作，协调供应商完成不同物料工艺，关注巨幅喷绘、LED 透明屏等特殊介质中的呈现品质。"}]}};
projectNotes['bein-detail']={notes:[{heading:'把产品信息放进一条阅读路径',text:'原展板从户外穿着场景展开，结合产品版型、面料和细节图，呈现服饰的使用环境与产品特征。通过图像与信息层级，让场景表达与产品说明相互配合。'},{heading:'清晰呈现细节与尺码',text:'详情页继续组织工艺细节、穿着感受与尺码指南。保持品牌统一的色彩和编排，让购买前需要理解的信息能够被连续阅读。'}]};
let revealObserver=null;
function revealPortfolioItems(root=document){if(!revealObserver)return;root.querySelectorAll('.work-card,.work-heading,.work-toolbar,.about-image,.about-content,.tools-column,.experience-title,.experience-stop,.contact-section h2,.contact-row').forEach((el,i)=>{if(el.classList.contains('taste-arrived'))return;el.style.setProperty('--reveal-delay',`${Math.min(i%2,1)*90}ms`);el.classList.add('taste-reveal');revealObserver.observe(el);});}
projects.forEach(p=>{Object.assign(p,projectNotes[p.id]);if(['campaign','recore','medal'].includes(p.id))p.cover=`assets/cover-${p.id}.svg`;});
const grid=document.querySelector('#work-grid');
function renderProjects(filter='all'){
const selected=projects.filter(p=>filter==='all'||p.category===filter);grid.dataset.filter=filter;
grid.replaceChildren(...selected.map(p=>{
const button=document.createElement('button');button.className='work-card';button.dataset.id=p.id;button.dataset.project=p.id;button.setAttribute('aria-label',`查看 ${p.name} 项目详情`);
const preview=p.id==='recore'?'recore-logos':p.id;
button.innerHTML=`<div class="work-visual"><img src="assets/preview-${preview}-960.webp?v=20261006fast" srcset="assets/preview-${preview}-480.webp?v=20261006fast 480w, assets/preview-${preview}-960.webp?v=20261006fast 960w" sizes="(max-width:767px) 90vw, (min-width:1600px) 690px, 46vw" decoding="async" alt="${p.name}：${p.id==='recore'?'六组彩色 C 字标视觉实验':p.subtitle}" loading="lazy" width="1400" height="1029"><span class="open-chip" aria-hidden="true">＋</span></div><div class="work-caption"><span class="category-label">${p.label}</span><h3>${p.name}</h3><p>${p.subtitle}</p><p class="work-excerpt">${p.description}</p><span class="project-open">展开作品 <span aria-hidden="true">＋</span></span></div>`;return button;
}));document.querySelector('.work-count').textContent=`${selected.length} 个项目`;revealPortfolioItems(grid);
}
renderProjects();
const dialog=document.querySelector('#project-dialog');let currentProject='bein';let opener=null;
const projectMotionStops=[];
function stopProjectMotions(){projectMotionStops.splice(0).forEach(stop=>stop());}
function createFestivalMotion(){
const stage=document.createElement('div');stage.className='festival-inplace-motion';stage.setAttribute('aria-label','原展板字标动态效果');
stage.innerHTML='<div class="festival-motion-art"></div><button type="button" class="festival-motion-toggle" aria-label="暂停嘉年华标识动效" aria-pressed="false">暂停动效</button>';
let alive=true;
// This project-only asset is never requested by the homepage.
fetch('assets/festival-scatter.svg?v=20261006fast').then(response=>{if(!response.ok)throw new Error('Wordmark unavailable');return response.text();}).then(svg=>{
 if(!alive)return;const background=new Image();background.src='assets/festival-crowd-preview.webp?v=20261006fast';
 background.decode().then(()=>{if(!alive)return;stage.querySelector('.festival-motion-art').innerHTML=svg;stage.classList.add('is-ready');}).catch(()=>{});
}).catch(()=>{if(alive)stage.remove();});
const button=stage.querySelector('button');let paused=false,visible=false;
const sync=()=>stage.classList.toggle('is-playing',visible&&!paused&&!document.hidden);
const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();},{threshold:.15});observer.observe(stage);
button.addEventListener('click',()=>{paused=!paused;stage.classList.toggle('is-paused',paused);stage.parentElement?.querySelector('.festival-band-inplace')?.classList.toggle('is-paused',paused);button.textContent=paused?'播放动效':'暂停动效';button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'播放嘉年华标识动效':'暂停嘉年华标识动效');sync();});
document.addEventListener('visibilitychange',sync);
projectMotionStops.push(()=>{alive=false;observer.disconnect();document.removeEventListener('visibilitychange',sync);stage.classList.remove('is-playing');});
return stage;
}
// Animate the original orange strip in place; keep the PDF underneath as a fallback.
function createOriginalFestivalBand(){
 const stage=document.createElement('div');stage.className='festival-band-inplace';stage.setAttribute('aria-hidden','true');
 let alive=true,visible=false;
 const sync=()=>stage.classList.toggle('is-playing',visible&&!document.hidden);
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();});observer.observe(stage);
 document.addEventListener('visibilitychange',sync);
 fetch('assets/festival-original-band.svg').then(r=>{if(!r.ok)throw new Error('Band unavailable');return r.text();}).then(svg=>{if(alive){stage.innerHTML=svg;stage.classList.add('is-ready');}}).catch(()=>{});
 projectMotionStops.push(()=>{alive=false;observer.disconnect();document.removeEventListener('visibilitychange',sync);stage.classList.remove('is-playing');});
 return stage;
}
const boardPlaceholderCache=new Map();
function getBoardPlaceholders(page){
 if(!boardPlaceholderCache.has(page))boardPlaceholderCache.set(page,fetch(`assets/case-placeholders-${String(page).padStart(2,'0')}.json${page===10?'?v=20261011recore':page===18?'?v=20261009beindetail':page===7?'?v=20261008festivalphoto':''}`).then(r=>r.ok?r.json():{}).catch(()=>({})));
 return boardPlaceholderCache.get(page);
}
// Every project uses the same brief solid-color broadcast sweep.
let stopBroadcastTransition=()=>{};
function playBroadcastTransition(p){
 stopBroadcastTransition();
 const enabled=!matchMedia('(prefers-reduced-motion: reduce)').matches;dialog.dataset.transition=enabled?'broadcast':'standard';
 if(!enabled)return;
 const wipe=document.createElement('div');wipe.className='broadcast-wipe';wipe.setAttribute('aria-hidden','true');
 const shot=document.createElement('div');shot.className='broadcast-shot';
 wipe.append(shot);dialog.append(wipe);dialog.classList.add('broadcast-enter');
 let timer=0,finished=false;
 const cleanup=()=>{if(finished)return;finished=true;clearTimeout(timer);wipe.removeEventListener('animationend',end);wipe.remove();dialog.classList.remove('broadcast-enter');stopBroadcastTransition=()=>{};};
 const end=event=>{if(event.target===wipe)cleanup();};wipe.addEventListener('animationend',end);timer=setTimeout(cleanup,1100);stopBroadcastTransition=cleanup;
}
function openProject(id){
const p=projects.find(item=>item.id===id);if(!p)return;currentProject=id;if(!dialog.open)opener=document.activeElement;
stopProjectMotions();
document.querySelector('#dialog-brand').textContent=p.name;
document.querySelector('#project-title').textContent=p.name;
document.querySelector('#case-category').textContent=p.label+(p.status?' · '+p.status:'');
document.querySelector('#case-description').textContent=p.description;
document.querySelector('#case-role').textContent=p.role;
document.querySelector('#case-scope').textContent=p.scope;
document.querySelector('#notes-origin').textContent=['morelife','ospreys','bein-detail'].includes(p.id)?'根据原展板内容整理':'根据原作品集文字整理';
const noteGrid=document.querySelector('#case-notes');noteGrid.replaceChildren(...p.notes.map(note=>{const item=document.createElement('article');const heading=document.createElement('h3');heading.textContent=note.heading;const copy=document.createElement('p');copy.textContent=note.text;item.append(heading,copy);return item;}));
const art=document.querySelector('#case-art');art.dataset.project=p.id;art.replaceChildren();
// Load one opening board promptly, then request only the boards near the reader.
const pendingBoards=new Map();
const boardObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const load=pendingBoards.get(entry.target);if(load){load();pendingBoards.delete(entry.target);}boardObserver.unobserve(entry.target);});},{root:dialog,rootMargin:'450px 0px'});
projectMotionStops.push(()=>{boardObserver.disconnect();pendingBoards.clear();});
p.pages.forEach((page,pageIndex)=>{
 const board=document.createElement('div');board.className='original-board';const placeholders=getBoardPlaceholders(page);
 boards[page].parts.forEach((part,i)=>{
  const button=document.createElement('button');button.className='art-zoom'+(part.photo?' festival-photo-replacement':'');button.setAttribute('aria-label',part.photo?'乐刻运动嘉年华 现场实拍拼图，放大查看':`${p.name} 展板 ${pageIndex+1} 第 ${i+1} 部分，放大查看`);
  const picture=document.createElement('picture');picture.style.aspectRatio=`${part.width}/${part.height}`;const mobile=document.createElement('source');mobile.type='image/avif';mobile.media='(max-width:767px)';mobile.sizes='100vw';
  const desktop=document.createElement('source');desktop.type='image/avif';desktop.sizes='100vw';picture.append(mobile,desktop);
  const img=new Image();img.width=part.width;img.height=part.height;img.decoding='async';img.loading='eager';img.fetchPriority=pageIndex===0&&i===0?'high':'auto';img.dataset.fullsrc=part.src;
  img.alt=part.photo?'乐刻运动嘉年华：活动现场、物料周边与参与者实拍拼图':`${p.name} 原作品集展板 ${pageIndex+1}，第 ${i+1} 部分`;img.addEventListener('load',()=>button.classList.add('board-ready'),{once:true});picture.append(img);button.append(picture);placeholders.then(map=>{const thumb=map[part.src.split('/').pop()];if(thumb&&!button.classList.contains('board-ready'))button.style.backgroundImage=`url("${thumb}")`;});
  img.addEventListener('error',()=>{picture.querySelectorAll('source').forEach(source=>source.remove());img.src=part.src.replace('case-hd-','case-preview-')+'?v=20261006fast';},{once:true});
  const load=()=>{const stem=part.src.replace('case-hd-','case-view-').replace('.webp','');mobile.srcset=`${stem}-960.avif 960w, ${stem}-1280.avif 1280w`;desktop.srcset=mobile.srcset+`, ${stem}-1800.avif 1800w`;img.src=part.src.replace('case-hd-','case-preview-')+'?v=20261006fast';};
  button.addEventListener('click',()=>openImage(img));
  if(p.id==='festival'&&page===7&&i===0){const original=document.createElement('div');original.className='festival-original-segment';original.append(button,createFestivalMotion(),createOriginalFestivalBand());board.append(original);}else board.append(button);
  if(part.photo){const caption=document.createElement('p');caption.className='festival-photo-caption';caption.textContent='活动现场物料周边设计';board.append(caption);}
  if(pageIndex===0&&i===0)load();else{pendingBoards.set(button,load);boardObserver.observe(button);}
 });art.append(board);
});
playBroadcastTransition(p);
if(!dialog.open){dialog.showModal();document.body.classList.add('modal-open');}dialog.scrollTop=0;document.querySelector('#close-dialog').focus({preventScroll:true});
}
function closeProject(){dialog.close();}
document.addEventListener('click',event=>{const project=event.target.closest('[data-project]');if(project){openProject(project.dataset.project);return;}const filter=event.target.closest('[data-filter]');if(filter){document.querySelectorAll('[data-filter]').forEach(btn=>{const active=btn===filter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});renderProjects(filter.dataset.filter);}});
document.querySelector('#close-dialog').addEventListener('click',closeProject);
dialog.addEventListener('close',()=>{stopBroadcastTransition();stopProjectMotions();document.body.classList.remove('modal-open');if(opener&&opener.isConnected)opener.focus({preventScroll:true});});
document.querySelector('#next-project').addEventListener('click',()=>{const index=projects.findIndex(p=>p.id===currentProject);openProject(projects[(index+1)%projects.length].id);});
const imageDialog=document.querySelector('#image-dialog');const zoomImage=document.querySelector('#zoom-image');let imageOpener=null;
function openImage(img){imageOpener=document.activeElement;zoomImage.src=img.dataset.fullsrc||img.currentSrc||img.src;zoomImage.alt=img.alt;zoomImage.width=img.width;zoomImage.height=img.height;imageDialog.classList.remove('actual-size');document.querySelector('#image-caption').textContent=img.alt;document.querySelector('#image-scale').textContent='查看原尺寸';imageDialog.showModal();imageDialog.scrollTop=0;document.querySelector('#close-image').focus({preventScroll:true});}
document.querySelector('#close-image').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('close',()=>{if(imageOpener?.isConnected)imageOpener.focus({preventScroll:true});});
document.querySelector('#image-scale').addEventListener('click',event=>{const full=imageDialog.classList.toggle('actual-size');event.currentTarget.textContent=full?'适应屏幕':'查看原尺寸';});
const headerObserver=new IntersectionObserver(([entry])=>document.querySelector('.header').classList.toggle('scrolled',!entry.isIntersecting));headerObserver.observe(document.querySelector('.header-sentinel'));window.addEventListener('pagehide',()=>headerObserver.disconnect(),{once:true});

document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
const feedback=document.querySelector('.contact-feedback');
try{await navigator.clipboard.writeText(button.dataset.copy);feedback.textContent=`已复制 ${button.dataset.copy}`;button.classList.add('copied');}
catch{feedback.textContent='暂时无法自动复制，可以长按或选中上方信息复制。';}
}));

const warmedBoards=new Set();
function warmOpeningBoard(id){
 const project=projects.find(p=>p.id===id);if(!project)return;
 const stem=boards[project.pages[0]].parts[0].src.replace('case-hd-','case-view-').replace('.webp','');
 if(warmedBoards.has(stem))return;warmedBoards.add(stem);getBoardPlaceholders(project.pages[0]);
 const preload=document.createElement('link');preload.rel='preload';preload.as='image';preload.type='image/avif';preload.fetchPriority='low';preload.href=stem+'-1280.avif';
 preload.imageSrcset=`${stem}-960.avif 960w, ${stem}-1280.avif 1280w`+(innerWidth>767?`, ${stem}-1800.avif 1800w`:'');preload.imageSizes='100vw';document.head.append(preload);
}
let warmTimer=0;
document.addEventListener('pointerover',event=>{if(event.pointerType==='touch')return;const card=event.target.closest('[data-project]');if(!card||card.contains(event.relatedTarget))return;clearTimeout(warmTimer);warmTimer=setTimeout(()=>warmOpeningBoard(card.dataset.project),140);});
document.addEventListener('pointerout',event=>{const card=event.target.closest('[data-project]');if(card&&!card.contains(event.relatedTarget))clearTimeout(warmTimer);});
document.addEventListener('focusin',event=>{const card=event.target.closest('[data-project]');if(card)warmOpeningBoard(card.dataset.project);});
document.addEventListener('pointerdown',event=>{const card=event.target.closest('[data-project]');if(card)warmOpeningBoard(card.dataset.project);},{passive:true});
window.addEventListener('portfolio-open',event=>openProject(event.detail));
// A single demand-driven update for pointer feedback, including filtered cards.
(() => {
 const fine=matchMedia('(hover: hover) and (pointer: fine)');const reduced=matchMedia('(prefers-reduced-motion: reduce)');let pending=0,active=null,last=null;
 function reset(){if(active){active.style.removeProperty('--pointer-x');active.style.removeProperty('--pointer-y');active.style.removeProperty('--peek-x');active.style.removeProperty('--peek-y');active.classList.remove('pointer-active');}active=null;}
 document.addEventListener('pointermove',event=>{if(!fine.matches||reduced.matches||event.pointerType==='touch')return;const target=event.target.closest('.work-card,.intro-link,.header-contact');if(target!==active){reset();active=target;}if(!target)return;last={x:event.clientX,y:event.clientY};if(pending)return;pending=requestAnimationFrame(()=>{pending=0;if(!active||!last)return;const rect=active.getBoundingClientRect();active.style.setProperty('--pointer-x',`${((last.x-rect.left)/rect.width-.5)*8}px`);active.style.setProperty('--pointer-y',`${((last.y-rect.top)/rect.height-.5)*7}px`);if(active.matches('.work-card')){const visual=active.querySelector('.work-visual'),box=visual.getBoundingClientRect();let peek=visual.querySelector('.card-peek');if(!peek){peek=document.createElement('span');peek.className='card-peek';peek.textContent='查看 ↗';peek.setAttribute('aria-hidden','true');visual.append(peek);}const inside=last.y>=box.top&&last.y<=box.bottom;active.classList.toggle('pointer-active',inside);active.style.setProperty('--peek-x',`${Math.max(35,Math.min(box.width-35,last.x-box.left))}px`);active.style.setProperty('--peek-y',`${Math.max(35,Math.min(box.height-35,last.y-box.top))}px`);}});},{passive:true});
 document.addEventListener('pointerout',event=>{if(!event.relatedTarget)reset();});reduced.addEventListener('change',reset);
})();

// Observe cards again after filtering, and settle immediately for reduced motion.
(() => {
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const setup=()=>{if(reduce.matches){revealObserver?.disconnect();revealObserver=null;document.querySelectorAll('.taste-reveal').forEach(el=>el.classList.add('taste-arrived'));return;}
 if(!revealObserver)revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('taste-arrived');revealObserver.unobserve(entry.target);}}),{threshold:.08});revealPortfolioItems();};
 setup();reduce.addEventListener('change',setup);window.addEventListener('pagehide',()=>{revealObserver?.disconnect();reduce.removeEventListener('change',setup);},{once:true});
})();

window.addEventListener('pagehide',()=>stopBroadcastTransition(),{once:true});
