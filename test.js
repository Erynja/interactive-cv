document.addEventListener("DOMContentLoaded",function(){let t=document.getElementById("spacepanda"),e=document.getElementById("scrollContainer"),l=document.getElementById("rocket"),o=document.querySelector(".sub-section.section-1-3"),s=document.querySelector(".flagpole"),n=document.querySelector(".flag"),a=document.querySelector(".bosnia"),i=document.querySelector(".bosnia__triangle"),r=document.querySelector(".bosnia__star__wrapper"),c=document.querySelector(".star"),y=!1;if(!s||!n){console.error("Flagpole or flag element not found!");return}if(!t){console.error("Panda element not found!");return}let d=0,f={},u=!1,p=null,g=null;function $(){if(u){console.warn("Rocket sequence active, skipping Panda controls.");return}f.a&&(d=Math.max(0,d-5),t.style.transform="scaleX(-1)"),f.d&&(d=Math.min(e.scrollWidth-window.innerWidth,d+5),t.style.transform="scaleX(1)"),e.style.transform=`translateX(${-d}px)`,y||(d>=370&&(function t(){let e=document.querySelector(".flagpole"),l=document.querySelector(".flag");if(!e||!l){console.error("Flagpole or flag element not found!");return}console.log("Triggering flag animation."),e.style.transition="height 2s ease-in-out",e.style.height="400px",setTimeout(()=>{console.log("Flagpole animation complete. Rolling out flag."),l.style.transition="width 2s ease-in-out",l.style.width="300px"},1e3)}(),y=!0),s.classList.add("visible"),n.classList.add("visible"),a.classList.add("visible"),i.classList.add("visible"),r.classList.add("visible"),c.classList.add("visible")),function t(e){let l=document.querySelector(".sun"),o=document.querySelector(".sun-beams");if(e>=0&&e<2*window.innerWidth){let s=e;l.style.transform=`translateX(${s}px)`,o.style.transform=`translateX(${s}px)`,l.style.display="block",o.style.display="block"}else l.style.display="visible",o.style.display="visible"}(d),function t(){let e=document.querySelectorAll(".daffodil-flower"),l=!1;!l&&d>=1700&&e.forEach((t,e)=>{t.style.bottom="20%",t.style.opacity="1",e%2==1&&t.classList.add("mirrored"),l=!0})}();let m=l.getBoundingClientRect(),_=t.getBoundingClientRect(),h=20>Math.abs(_.right-m.left);h&&!u&&(console.log("Panda is near the rocket. Triggering launch sequence."),function s(){if(u){console.warn("Rocket already launched. Ignoring further launch attempts.");return}console.log("Rocket Launch Initiated!"),u=!0,t?(t.style.transition="opacity 0.1s ease-out",t.style.opacity="0"):console.error("Panda element not found!"),l?(l.style.transition="transform 1s ease-in-out",l.style.transform="rotate(90deg)",setTimeout(()=>{l.style.transition="transform 5s ease-in-out",l.style.transform+=" translateY(-120vh)",setTimeout(()=>(function s(){let n=o.offsetLeft;!function s(){d<n-1?(d+=3,e.style.transform=`translateX(${-d}px)`,requestAnimationFrame(s)):(console.log("Moon section aligned with the screen."),d=n,e.style.transform=`translateX(${-d}px)`,function t(){if(console.log("Fading out moon and stars."),o){let e=o.querySelectorAll(".moon/*, .star-1, .star-2");e.forEach(t=>{t.style.transition="opacity 2s ease-out",t.style.opacity="0",t.style.visibility="hidden"})}else console.error("Section 1.3 element not found!")}(),function t(){let e=document.querySelector(".sub-section.section-1-3");if(!e){console.error("Section 1-3 not found.");return}let l=e.getBoundingClientRect();l.height;let o=[{left:"10%",top:"20%"},{left:"30%",top:"15%"},{left:"50%",top:"10%"},{left:"70%",top:"25%"},{left:"90%",top:"5%"}];["star-yellow","star-orange","star-magenta","star-blue","star-green"].forEach((t,l)=>{let s=document.createElement("div");s.classList.add(t),s.style.position="absolute",s.style.left=o[l].left,s.style.top=o[l].top,s.style.opacity="0",s.style.transition="opacity 2s ease-in-out",e.appendChild(s),setTimeout(()=>{s.style.opacity="1"},500)}),console.log("Stars placed and transitioning in Section 1-3.")}(),function t(){let e=["star-yellow","star-orange","star-magenta","star-blue","star-green"],l=document.querySelectorAll(`.${e.join(", .")}`);["yellow","orange","magenta","blue","green"].forEach(t=>{let e=document.querySelector(`.star-${t}`);if(e){let l=document.createElement("div");l.classList.add(`star-${t}-beams`),e.parentElement.appendChild(l);let o=e.getBoundingClientRect();l.style.position="absolute",l.style.left=`${e.offsetLeft-l.offsetWidth/2+o.width/2}px`,l.style.top=`${e.offsetTop-l.offsetHeight/2+o.height/2}px`,e.addEventListener("mouseover",()=>{l.style.opacity=1}),e.addEventListener("mouseout",()=>{l.style.opacity=0}),e.addEventListener("click",()=>{l.style.opacity=1,setTimeout(()=>{l.style.opacity=0},2e3)})}else console.warn(`Star element for color ${t} not found.`)}),l.forEach(t=>{let l=!1;t.addEventListener("click",()=>{if(l)return;l=!0;let o=Array.from(t.classList).find(t=>e.includes(t));o&&(console.log(`${o} star clicked!`),function t(e,l){let o=document.querySelector(".sub-section.section-1-3");if(!o)return;let s=e.offsetLeft+e.offsetWidth/2-10;for(let n=0;n<5;n++){let a=document.createElement("div");a.classList.add(`${l}-small`),a.style.position="absolute",a.style.left=`${s}px`,a.style.top=`${e.offsetTop+20}px`,a.style.width="20px",a.style.height="20px",a.style.background=getComputedStyle(e).background,a.style.borderRadius="50%",o.appendChild(a);let i=a.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(200px)",opacity:1}],{duration:2e3,easing:"ease-in",iterations:1,fill:"forwards"});i.onfinish=()=>{let t=(n-Math.floor(2.5))*35;a.animate([{transform:"translateY(200px) translateX(0px)",opacity:1},{transform:`translateY(200px) translateX(${t}px)`,opacity:1}],{duration:1500,easing:"ease-out",iterations:1,fill:"forwards"})}}}(t,o),function t(e,l){let o=document.querySelector(".sub-section.section-1-3");if(!o)return;let s=document.querySelector(`.${l}-image`);if(s)return;let n=document.createElement("img");n.src=`assets/${l}-image.png`,n.alt=`${l} star image`,n.classList.add(`${l}-image`),n.style.position="absolute",n.style.left=`${e.offsetLeft+50}px`,n.style.top=`${e.offsetTop+150}px`,n.style.width="50px",n.style.height="50px",n.style.transition="opacity 3s ease-in",o.appendChild(n),setTimeout(()=>n.style.opacity="1",0)}(t,o))})})}(),console.log("Changing background to gradient."),o.style.transition="background 2s ease-in-out",o.style.background="linear-gradient(to bottom, #020026 60%, grey 60%)",setTimeout(()=>{l&&(console.log("Landing the rocket."),l.style.transition="transform 1s ease-in-out, left 1s ease-in-out",l.style.transform="rotate(0deg)",l.style.position="absolute",l.style.left="+150px",l.style.top="50%",l.style.transform="translateY(-50%)"),setTimeout(()=>{if(t&&l&&o){console.log("Repositioning Panda next to Rocket.");let e=l.getBoundingClientRect(),s=o.getBoundingClientRect(),n=e.right-s.left-550,a=e.top-s.top-650;t.style.position="absolute",t.style.left=`${Math.max(n,0)}px`,t.style.top=`${a}px`,t.style.transition="opacity 1s ease-in",t.style.opacity="1",t.style.visibility="visible",console.log("Rocket bounds:",e),console.log("Moon section bounds:",s),console.log("Calculated Panda position (left):",n),console.log("Calculated Panda position (top):",a)}console.log("Re-enabling Panda controls."),function e(){for(let l in console.log("Resetting Panda controls."),f)f[l]=!1;g=null,t.style.transition="",t.style.transform="scaleX(1)",t.style.opacity="1",p&&(cancelAnimationFrame(p),p=null),p=requestAnimationFrame($)}(),u=!1,function t(){let e=document.querySelectorAll(".rock");e.forEach((t,e)=>{setTimeout(()=>{t.style.opacity="1",t.style.transform="scale(1)"},100*(e+1))})}()},200)},200))}()})(),2e3)},1e3)):(console.error("Rocket element not found!"),u=!1)}()),p=requestAnimationFrame($)}window.addEventListener("keydown",e=>{let l=e.key.toLowerCase();"a"!==l&&"d"!==l||(f[l]=!0,t.style.transform="a"===l?"scaleX(-1)":"scaleX(1)",p||(p=requestAnimationFrame($)))}),window.addEventListener("keyup",t=>{let e=t.key.toLowerCase();"a"!==e&&"d"!==e||(f[e]=!1,Object.values(f).includes(!0)||(cancelAnimationFrame(p),p=null))}),$()});