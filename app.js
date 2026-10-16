'use strict';
const projects=[
{id:'bein',name:'BEINSPACE',subtitle:'户外女装的日常表达',category:'digital',label:'电商视觉 / 内容运营',role:'视觉负责人',scope:'小红书运营视觉、电商页面与栏目模板',description:'围绕户外女装的产品与生活方式，建立小红书内容和电商视觉表达。通过统一的栏目与图文编排呈现品牌风格。',pages:[8],image:'cover-bein'},
{id:'bein-detail',name:'BEINSPACE · 电商详情页',subtitle:'从户外场景到服饰细节',category:'digital',label:'电商视觉 / 详情页',role:'视觉负责人',scope:'服饰电商详情页、产品信息与视觉编排',description:'围绕户外女装的产品特点，把场景形象、版型工艺、面料细节与尺码信息串成连续的阅读路径。',pages:[18],image:'cover-bein-detail'},
{id:'aigc',name:'AIGC 电商应用与落地',subtitle:'从工作流到商品视觉的落地应用',category:'digital',label:'AIGC / 电商视觉',role:'视觉负责人',scope:'AI 设计工作流、商品场景与电商内容',description:'将需求拆解、视觉设定与 AI 图像生成串联，探索服饰、商品场景与电商内容的实际应用。',pages:[22],image:'cover-aigc'},
{id:'recore',name:'Recore 无限核子',subtitle:'健身空间的全新品牌识别',category:'brand',label:'品牌识别 / 空间',role:'主视觉设计负责人',scope:'Logo、VI、空间视觉方案',description:'为乐刻旗下高端健身空间探索新的品牌识别。通过符号、字体与色彩建立清晰的视觉语言，并延展到空间中的应用场景。本项目为设计方案呈现。',pages:[10],image:'cover-recore'},
{id:'campaign',name:'乐刻运动 · 无价之报',subtitle:'把运动放进轻松的日常',category:'brand',label:'品牌活动 / 跨界联名',role:'主视觉设计师',scope:'38 节「无价之报」、T3 出行联动、线上线下视觉',description:'把「无价之宝」变成一份复古的「无价之报」。以日常媒介、轻松对话与活动物料，降低运动的心理门槛，让女性节日的品牌表达进入真实生活。',pages:[6],image:'cover-campaign'},
{id:'festival',name:'乐刻运动嘉年华',subtitle:'把大型健身活动包装成一场超级派对',category:'brand',label:'品牌活动 / 空间视觉',role:'主视觉设计负责人 / 全案设计统筹',scope:'2023 嘉年华主视觉、线上传播、现场空间与物料落地',description:'让健身的泛娱乐化与电音节化成为一套鲜明的视觉语言。锐角字体、闪电、橙红色与流体线条贯穿屏幕、导视和现场，带出集体参与的节奏。',pages:[7],image:'cover-festival'},
{id:'retail',name:'乐刻健身门店',subtitle:'从视觉系统走进真实空间',category:'brand',label:'零售空间 / 视觉',role:'项目主设计师',scope:'门店视觉更新、空间物料、品牌应用',description:'结合门店空间与品牌使用场景，梳理视觉系统及物料的应用方式。以鲜明的品牌色与明确的信息层级，让门店中的视觉表达更一致。',pages:[11],image:'cover-retail'},
{id:'medal',name:'Enjoy running',subtitle:'把运动的记忆做成一枚奖牌',category:'product',label:'产品设计 / 奖牌',role:'奖牌项目主设计',scope:'户外跑奖牌、视觉延展、产品呈现',description:'围绕乐刻运动的户外跑项目，从概念草图、图形设计到产品表现，探索奖牌如何承载活动主题和参与者的运动记忆。',pages:[13,14],image:'cover-medal'},
{id:'leleorange',name:'leleorange',subtitle:'运动文化里的服饰与图形',category:'product',label:'服饰设计 / 产品',role:'服饰设计师',scope:'运动服饰图形、产品设计与延展',description:'围绕运动生活方式进行服饰与产品设计，让图形语言进入日常穿着。作品覆盖不同服装款式与周边载体，保持鲜明而连贯的品牌表达。',pages:[15],image:'cover-leleorange'},
{id:'morelife',name:'MORELIFE',subtitle:'自由的图形，真实的兴趣',category:'product',label:'个人创作 / 图形',role:'个人创作',scope:'图形实验、服饰与周边设计',description:'来自运动与街头文化的个人创作。以字体、符号和拼贴探索独立的视觉表达，并尝试将它们延展为服饰与生活中的物件。',pages:[20],image:'cover-morelife'},
{id:'ospreys',name:'杭州鱼鹰 Ospreys',subtitle:'属于球队的视觉与文化',category:'product',label:'球队图形 / 周边',role:'个人创作',scope:'球队视觉图形、服饰、周边与海报',description:'以杭州鱼鹰队的运动文化为主题，探索队徽、图形、海报与周边的统一表达。让视觉既能传递球队个性，也能成为队员与支持者的共同记忆。',pages:[21],image:'cover-ospreys'}
];
const boards={"6":{"parts":[{"src":"assets/case-hd-06-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-06-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-06-2.webp","width":3000,"height":1620}],"trimmedBottom":2,"width":3000,"height":7620},"7":{"parts":[{"src":"assets/case-hd-07-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-07-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-07-materials.webp","width":3000,"height":2228},{"src":"assets/case-hd-07-photos.webp","width":1921,"height":1407,"photo":true}],"trimmedBottom":3,"width":3000,"height":10069},"8":{"parts":[{"src":"assets/case-hd-08-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-08-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-08-2.webp","width":3000,"height":655}],"trimmedBottom":2,"width":3000,"height":6655},"10":{"parts":[{"src":"assets/case-hd-10-replacement-20261015black-0.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-1.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-2.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-3.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-4.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-5.webp","width":1500,"height":1500},{"src":"assets/case-hd-10-replacement-20261015black-6.webp","width":1500,"height":100}],"trimmedBottom":0,"width":1500,"height":9100},"11":{"parts":[{"src":"assets/case-hd-11-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-11-3.webp","width":3000,"height":1701}],"trimmedBottom":2,"width":3000,"height":10701},"13":{"parts":[{"src":"assets/case-hd-13-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-13-4.webp","width":3000,"height":692}],"trimmedBottom":2,"width":3000,"height":12692},"14":{"parts":[{"src":"assets/case-hd-14-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-14-4.webp","width":3000,"height":461}],"trimmedBottom":2,"width":3000,"height":12461},"15":{"parts":[{"src":"assets/case-hd-15-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-4.webp","width":3000,"height":3000},{"src":"assets/case-hd-15-5.webp","width":3000,"height":2640}],"trimmedBottom":2,"width":3000,"height":17640},"17":{"parts":[{"src":"assets/case-hd-17-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-17-3.webp","width":3000,"height":893}],"trimmedBottom":2,"width":3000,"height":9893},"18":{"parts":[{"src":"assets/case-hd-18-replacement-0.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-1.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-2.webp","width":1920,"height":1920},{"src":"assets/case-hd-18-replacement-3.webp","width":1920,"height":1910}],"trimmedBottom":0,"width":1920,"height":7670},"20":{"parts":[{"src":"assets/case-hd-20-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-4.webp","width":3000,"height":3000},{"src":"assets/case-hd-20-5.webp","width":3000,"height":233}],"trimmedBottom":3,"width":3000,"height":15233},"21":{"parts":[{"src":"assets/case-hd-21-0.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-1.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-2.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-3.webp","width":3000,"height":3000},{"src":"assets/case-hd-21-4.webp","width":3000,"height":1277}],"trimmedBottom":3,"width":3000,"height":13277},"22":{"parts":[{"src":"assets/case-hd-22-replacement-20261016aigc-0.webp","width":2667,"height":2667},{"src":"assets/case-hd-22-replacement-20261016aigc-1.webp","width":2667,"height":2667},{"src":"assets/case-hd-22-replacement-20261016aigc-2.webp","width":2667,"height":2667},{"src":"assets/case-hd-22-replacement-20261016aigc-3.webp","width":2667,"height":1000}],"trimmedBottom":0,"width":2667,"height":9001}};
const projectNotes={"bein":{"role":"视觉负责人","scope":"小红书运营视觉与栏目模板","description":"将户外女装的产品特点与生活方式，整理成可持续更新的电商与内容视觉。","notes":[{"heading":"需求诉求","text":"新品与日常运营需要稳定的视觉风格，同时覆盖不同服饰、季节和内容栏目。"},{"heading":"设计过程","text":"围绕产品特点和户外生活方式，梳理色彩、图文层级与内容栏目，统一品牌视觉表达。"},{"heading":"交付产出","text":"形成新品剧透、选择指南、户外指南等系列内容与可复用的栏目模板。"}]},"recore":{"role":"主视觉设计负责人 / 软装视觉设计师","scope":"品牌标识与 VI、空间视觉、周边及会员传播物料","description":"以“回归核心”为线索，为 Recore 建立独立的品牌识别与空间视觉方案。","notes":[{"heading":"需求诉求","text":"在延续乐刻体系的同时，表达更专业的训练体验，让独立识别可以延展至不同门店。"},{"heading":"设计过程","text":"围绕 CORE 推演圆形与同心结构，将错位、切分与叠合凝练为 C 字符号，搭配原子蓝与品牌字标。"},{"heading":"交付产出","text":"形成 Logo 与 VI、海报、空间标识、运动周边及会员传播物料的系列设计方案。"}],"status":"设计方案呈现"},"campaign":{"role":"主视觉设计师 / 插画与第三方设计统筹","scope":"38 节「无价之报」、T3 出行联动、线上资源位与线下物料","description":"把“无价之宝”变成一份“无价之报”，让女性节日的运动表达更贴近日常。","notes":[{"heading":"需求诉求","text":"联合 T3 出行展开节日传播，在避开身材焦虑和刻板表达的同时，连接线下参与与线上分享。"},{"heading":"设计过程","text":"以复古报纸、菜篮子和轻松对话作为创意线索，结合乐刻橙与纸张质感，统筹插画及联名视觉。"},{"heading":"交付产出","text":"完成主视觉、活动报纸、海报、贴纸、创意周边，以及 APP 与社交平台传播资源位。"}]},"retail":{"role":"项目主设计师","scope":"乐刻铁馆改造升级、视觉软装与空间应用","description":"让美式铁馆的力量感，进入乐刻门店的视觉软装与空间应用。","notes":[{"heading":"需求诉求","text":"门店升级需要呼应力量训练氛围，同时保持乐刻品牌识别和空间信息的清晰度。"},{"heading":"设计过程","text":"结合空间结构梳理标识、海报和物料位置，以粗粝图形与有力字体组织整体视觉方案。"},{"heading":"交付产出","text":"形成铁馆升级的主视觉、视觉软装、门店物料与空间应用方案。"}]},"medal":{"role":"奖牌设计项目主设计","scope":"「此刻发芽」户外跑奖牌、乐刻 × 和平精英联名奖牌","description":"以“此刻发芽”为主题，把户外跑的积极感受变成可以收藏的奖牌。","notes":[{"heading":"需求诉求","text":"奖牌需要承载赛事主题和运动记忆，同时让概念能够被转化为立体产品。"},{"heading":"设计过程","text":"参与用户调研与主题讨论，与品牌、运营和 3D 团队协作，反复推敲图形、层次与产品形象。"},{"heading":"交付产出","text":"完成“此刻发芽”奖牌、乐刻 × 和平精英联名奖牌及对应立体效果和产品视觉。"}]},"leleorange":{"role":"服饰设计师","scope":"leleorange 周边产品线、服饰图案与设计输出","description":"将乐刻的运动文化，延展到 leleorange 的日常服饰与周边图形。","notes":[{"heading":"需求诉求","text":"产品线需要兼顾运动生活的舒适需求，并在不同款式与载体中保持品牌个性。"},{"heading":"设计过程","text":"围绕穿着场景推演字体与图案，按服装款式调整图形尺度，推进设计修改与最终输出。"},{"heading":"交付产出","text":"完成系列服饰图案与周边设计，呈现图形在不同款式和产品上的应用。"}]},"morelife":{"role":"个人创作","scope":"字体与图形实验、服饰和周边应用","description":"从运动与街头文化出发，探索 MORELIFE 的个人图形表达。","notes":[{"heading":"创作诉求","text":"将个人兴趣转成可辨识的视觉语言，并尝试从平面表达延展到服饰与日常物件。"},{"heading":"设计过程","text":"通过字形、符号、拼贴与色彩实验组合画面，继续探索不同材质与载体上的应用。"},{"heading":"交付产出","text":"形成个人字体与图形作品，以及服饰、周边和海报的应用探索。"}]},"ospreys":{"role":"个人创作","scope":"杭州鱼鹰队图形、服饰与周边视觉","description":"把杭州鱼鹰的球队性格，转成队徽、服饰与周边中的共同表达。","notes":[{"heading":"创作诉求","text":"创作希望传递球队的运动气质，让队名、图形和不同载体之间形成连贯识别。"},{"heading":"设计过程","text":"围绕鱼鹰形象与队名字体梳理识别元素，结合球队配色，推演服饰与周边的图形组合。"},{"heading":"交付产出","text":"呈现球队图形、字标、服饰、周边及海报的系列视觉应用。"}]},"festival":{"role":"主视觉设计负责人 / 全案设计统筹","scope":"2023 乐刻运动嘉年华、线上线下主视觉、空间与特殊介质","description":"用派对与电音节的视觉语言，把年度健身活动串成统一的现场体验。","notes":[{"heading":"需求诉求","text":"大型活动需要鲜明的主题识别，并兼顾线上传播、现场导视、舞台屏幕与实体物料。"},{"heading":"设计过程","text":"以锐角字形、闪电和橙红渐变建立主视觉，按不同场景延展，并协同供应商推进工艺落地。"},{"heading":"交付产出","text":"完成动态主视觉、线上 Banner、会员指南、现场导视及活动周边等系列设计。"}]},"bein-detail":{"description":"把户外场景、服饰卖点与选购信息，连成一条清晰的详情页阅读路径。","notes":[{"heading":"需求诉求","text":"让消费者既能理解穿着场景，也能快速找到版型、面料、工艺和尺码信息。"},{"heading":"设计过程","text":"从户外实拍切入，逐层组织卖点、细节与尺码，并统一详情页、Banner 和商品图的视觉节奏。"},{"heading":"交付产出","text":"完成服饰详情页、尺码说明、产品细节编排及配套电商资源位设计。"}]},"aigc":{"description":"把 AI 工作流接入电商设计，从商品素材出发，完成场景探索、图像生成和运营内容的落地。","notes":[{"heading":"需求诉求","text":"在保留商品特征与品牌风格的前提下，探索更丰富的场景素材和电商内容表达。"},{"heading":"设计过程","text":"拆解需求并设定视觉方向，通过文字与图像模型协同生成，筛选画面后再进行设计编排与细节调整。"},{"heading":"交付产出","text":"呈现 AI 设计 SOP、工作流节点，以及服饰场景、小红书内容、商品陈列和行李箱应用案例。"}]}};
let revealObserver=null;
function revealPortfolioItems(root=document){if(!revealObserver)return;root.querySelectorAll('.work-card,.work-heading,.work-toolbar,.about-image,.about-content,.tools-column,.experience-title,.experience-stop,.contact-section h2,.contact-row').forEach((el,i)=>{if(el.classList.contains('taste-arrived'))return;el.style.setProperty('--reveal-delay',`${Math.min(i%2,1)*90}ms`);el.classList.add('taste-reveal');revealObserver.observe(el);});}
projects.forEach(p=>{Object.assign(p,projectNotes[p.id]);if(['campaign','recore','medal'].includes(p.id))p.cover=`assets/cover-${p.id}.svg`;});
const grid=document.querySelector('#work-grid');
function renderProjects(filter='all'){
const selected=projects.filter(p=>filter==='all'||p.category===filter);grid.dataset.filter=filter;
grid.replaceChildren(...selected.map(p=>{
const button=document.createElement('button');button.className='work-card';button.dataset.id=p.id;button.dataset.project=p.id;button.setAttribute('aria-label',`查看 ${p.name} 项目详情`);
const preview=p.id;
const coverRevision=p.id==='aigc'?'20261016aigc':p.id==='recore'?'20261015blackcover':'20261011covers4';
button.innerHTML=`<div class="work-visual"><img src="assets/gallery-${preview}-960.webp?v=${coverRevision}" srcset="assets/gallery-${preview}-480.webp?v=${coverRevision} 480w, assets/gallery-${preview}-960.webp?v=${coverRevision} 960w, assets/gallery-${preview}-1600.webp?v=${coverRevision} 1600w" sizes="(max-width:767px) 90vw, (min-width:1600px) 690px, 46vw" decoding="async" alt="${p.name}：${p.id==='recore'?'品牌海报与空间视觉':p.subtitle}" loading="lazy" width="1600" height="1067"><span class="open-chip" aria-hidden="true">＋</span></div><div class="work-caption"><span class="category-label">${p.label}</span><h3>${p.name}</h3><p>${p.subtitle}</p><p class="work-excerpt">${p.description}</p><span class="project-open">展开作品 <span aria-hidden="true">＋</span></span></div>`;return button;
}));document.querySelector('.work-count').textContent=`${selected.length} 个项目`;revealPortfolioItems(grid);
}
renderProjects();
const dialog=document.querySelector('#project-dialog');let currentProject='bein';let opener=null;
const projectMotionStops=[];
function stopProjectMotions(){projectMotionStops.splice(0).forEach(stop=>stop());}
function createFestivalMotion(image){return createFestivalGlitch(image,projectMotionStops);}
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
 if(!boardPlaceholderCache.has(page))boardPlaceholderCache.set(page,fetch(`assets/case-placeholders-${String(page).padStart(2,'0')}.json${page===10?'?v=20261015black':page===18?'?v=20261009beindetail':page===7?'?v=20261008festivalphoto':''}`).then(r=>r.ok?r.json():{}).catch(()=>({})));
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
document.querySelector('#notes-origin').textContent='需求 / 过程 / 产出';
const noteGrid=document.querySelector('#case-notes');noteGrid.replaceChildren(...p.notes.map(note=>{const item=document.createElement('article');const heading=document.createElement('h3');heading.textContent=note.heading;const copy=document.createElement('p');copy.textContent=note.text;item.append(heading,copy);return item;}));
const art=document.querySelector('#case-art');art.dataset.project=p.id;art.replaceChildren();
// Load one opening board promptly, then request only the boards near the reader.
const pendingBoards=new Map();
const boardObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const load=pendingBoards.get(entry.target);if(load){load();pendingBoards.delete(entry.target);}boardObserver.unobserve(entry.target);});},{root:dialog,rootMargin:'450px 0px'});
projectMotionStops.push(()=>{boardObserver.disconnect();pendingBoards.clear();});
const boardSizes=caseReadingSizes(p);
p.pages.forEach((page,pageIndex)=>{
 const board=document.createElement('div');board.className='original-board';const placeholders=getBoardPlaceholders(page);
 boards[page].parts.forEach((part,i)=>{
  const button=document.createElement('button');button.className='art-zoom'+(part.photo?' festival-photo-replacement':'');button.setAttribute('aria-label',part.photo?'乐刻运动嘉年华 现场实拍拼图，放大查看':`${p.name} 展板 ${pageIndex+1} 第 ${i+1} 部分，放大查看`);
  const picture=document.createElement('picture');picture.style.aspectRatio=`${part.width}/${part.height}`;const mobile=document.createElement('source');mobile.type='image/avif';mobile.media='(max-width:767px)';mobile.sizes=boardSizes;
  const desktop=document.createElement('source');desktop.type='image/avif';desktop.sizes=boardSizes;picture.append(mobile,desktop);
  const img=new Image();img.width=part.width;img.height=part.height;img.decoding='async';img.loading='eager';img.fetchPriority=pageIndex===0&&i===0?'high':'auto';img.dataset.fullsrc=part.src;
  img.alt=part.photo?'乐刻运动嘉年华：活动现场、物料周边与参与者实拍拼图':`${p.name} 原作品集展板 ${pageIndex+1}，第 ${i+1} 部分`;img.addEventListener('load',()=>button.classList.add('board-ready'),{once:true});picture.append(img);button.append(picture);placeholders.then(map=>{const thumb=map[part.src.split('/').pop()];if(thumb&&!button.classList.contains('board-ready'))button.style.backgroundImage=`url("${thumb}")`;});
  img.addEventListener('error',()=>{picture.querySelectorAll('source').forEach(source=>source.remove());img.src=part.src.replace('case-hd-','case-preview-')+'?v=20261006fast';},{once:true});
  const load=()=>{const sources=caseImageSources(part);mobile.srcset=sources.mobile;desktop.srcset=sources.desktop;img.src=part.src.replace('case-hd-','case-preview-')+'?v=20261006fast';};
  button.addEventListener('click',()=>openImage(img));
  if(p.id==='festival'&&page===7&&i===0){const original=document.createElement('div');original.className='festival-original-segment';original.append(button,createFestivalMotion(img),createOriginalFestivalBand());board.append(original);}else board.append(button);
  if(part.photo){const caption=document.createElement('p');caption.className='festival-photo-caption';caption.textContent='活动现场物料周边设计';board.append(caption);}
  if(pageIndex===0&&i===0)load();else{pendingBoards.set(button,load);boardObserver.observe(button);}
 });art.append(board);
});
playBroadcastTransition(p);
if(!dialog.open){dialog.showModal();document.body.classList.add('modal-open');}dialog.scrollTop=0;document.querySelector('#close-dialog').focus({preventScroll:true});
}
function closeProject(){dialog.close();}
document.addEventListener('click',event=>{const project=event.target.closest('.work-card[data-project]');if(project){openProject(project.dataset.project);return;}const filter=event.target.closest('[data-filter]');if(filter){document.querySelectorAll('[data-filter]').forEach(btn=>{const active=btn===filter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});renderProjects(filter.dataset.filter);}});
document.querySelector('#close-dialog').addEventListener('click',closeProject);
dialog.addEventListener('close',()=>{stopBroadcastTransition();stopProjectMotions();document.body.classList.remove('modal-open');if(opener&&opener.isConnected)opener.focus({preventScroll:true});});
document.querySelector('#next-project').addEventListener('click',()=>{const index=projects.findIndex(p=>p.id===currentProject);openProject(projects[(index+1)%projects.length].id);});
const imageDialog=document.querySelector('#image-dialog');const zoomImage=document.querySelector('#zoom-image');let imageOpener=null;
function openImage(img){
 imageOpener=document.activeElement;
 const nativeWidth=Number(img.getAttribute('width'))||img.naturalWidth;
 const nativeHeight=Number(img.getAttribute('height'))||img.naturalHeight;
 zoomImage.src=img.dataset.fullsrc||img.currentSrc||img.src;zoomImage.alt=img.alt;
 zoomImage.width=nativeWidth;zoomImage.height=nativeHeight;
 imageDialog.style.setProperty('--original-image-width',`${nativeWidth}px`);
 imageDialog.classList.remove('actual-size');document.querySelector('#image-caption').textContent=img.alt;
 document.querySelector('#image-scale').textContent='查看原尺寸';imageDialog.showModal();imageDialog.scrollTop=0;
 document.querySelector('#close-image').focus({preventScroll:true});
}
zoomImage.addEventListener('load',()=>imageDialog.style.setProperty('--original-image-width',`${zoomImage.naturalWidth}px`));

document.querySelector('#close-image').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('close',()=>{if(imageOpener?.isConnected)imageOpener.focus({preventScroll:true});});
document.querySelector('#image-scale').addEventListener('click',event=>{const full=imageDialog.classList.toggle('actual-size');event.currentTarget.textContent=full?'适应屏幕':'查看原尺寸';});
const headerObserver=new IntersectionObserver(([entry])=>document.querySelector('.header').classList.toggle('scrolled',!entry.isIntersecting));headerObserver.observe(document.querySelector('.header-sentinel'));window.addEventListener('pagehide',()=>headerObserver.disconnect(),{once:true});

document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
const feedback=document.querySelector('.contact-feedback');
try{await navigator.clipboard.writeText(button.dataset.copy);feedback.textContent=`已复制 ${button.dataset.copy}`;button.classList.add('copied');}
catch{feedback.textContent='暂时无法自动复制，可以长按或选中上方信息复制。';}
}));

function caseImageSources(part){
 const stem=part.src.replace('case-hd-','case-view-').replace('.webp',''),readStem=stem.replace('case-view-','case-read-'),revision='?v=20261015quality';
 const mobile=new Map([960,1280].map(width=>[width,`${readStem}-${width}.avif${revision} ${width}w`]));
 const desktop=new Map(mobile);
 for(const width of new Set([Math.min(1600,part.width),Math.min(2400,part.width)]))desktop.set(width,`${stem}-${width}.avif${revision} ${width}w`);
 return {mobile:[...mobile.values()].join(', '),desktop:[...desktop].sort((a,b)=>a[0]-b[0]).map(entry=>entry[1]).join(', '),fallback:readStem+'-1280.avif'+revision};
}
function caseReadingSizes(project){
 const cap=project.id==='recore'?1040:1200;
 return `(max-width:767px) calc(100vw - 16px), (max-width:${cap+48}px) calc(100vw - 48px), ${cap}px`;
}
const warmedBoards=new Set();
function warmOpeningBoard(id){
 const project=projects.find(p=>p.id===id);if(!project)return;
 const openingPart=boards[project.pages[0]].parts[0];
 const stem=openingPart.src.replace('case-hd-','case-view-').replace('.webp','');
 if(warmedBoards.has(stem))return;warmedBoards.add(stem);getBoardPlaceholders(project.pages[0]);
 const sources=caseImageSources(openingPart);const preload=document.createElement('link');preload.rel='preload';preload.as='image';preload.type='image/avif';preload.fetchPriority='low';preload.href=sources.fallback;
 preload.imageSrcset=innerWidth>767?sources.desktop:sources.mobile;preload.imageSizes=caseReadingSizes(project);document.head.append(preload);
}
let warmTimer=0;
document.addEventListener('pointerover',event=>{if(event.pointerType==='touch')return;const card=event.target.closest('.work-card[data-project]');if(!card||card.contains(event.relatedTarget))return;clearTimeout(warmTimer);warmTimer=setTimeout(()=>warmOpeningBoard(card.dataset.project),140);});
document.addEventListener('pointerout',event=>{const card=event.target.closest('.work-card[data-project]');if(card&&!card.contains(event.relatedTarget))clearTimeout(warmTimer);});
document.addEventListener('focusin',event=>{const card=event.target.closest('.work-card[data-project]');if(card)warmOpeningBoard(card.dataset.project);});
document.addEventListener('pointerdown',event=>{const card=event.target.closest('.work-card[data-project]');if(card)warmOpeningBoard(card.dataset.project);},{passive:true});
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
