const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(f=>f.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  cards.forEach(card=>{card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none';});
}));

const email='sreenaveenssl@gmail.com';
const copyBtn=document.getElementById('copyEmail');
const toast=document.getElementById('toast');
copyBtn.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(email);toast.textContent='Email copied to clipboard';}
  catch(e){toast.textContent='Email: '+email;}
  toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);
});

const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll('.hero-copy,.hero-visual,.section').forEach(el=>{el.classList.add('reveal');observer.observe(el);});

// Lightweight decorative particle field; no external AI service or API key required.
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');
let dots=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);dots=Array.from({length:Math.min(65,Math.floor(innerWidth/18))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.4}));}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);dots.forEach((d,i)=>{d.x+=d.vx;d.y+=d.vy;if(d.x<0||d.x>innerWidth)d.vx*=-1;if(d.y<0||d.y>innerHeight)d.vy*=-1;ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fillStyle='rgba(111,190,245,.55)';ctx.fill();for(let j=i+1;j<dots.length;j++){let b=dots[j],dx=d.x-b.x,dy=d.y-b.y,dist=Math.hypot(dx,dy);if(dist<115){ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(91,143,210,${.12*(1-dist/115)})`;ctx.stroke();}}});requestAnimationFrame(draw);}
addEventListener('resize',resize);resize();draw();
