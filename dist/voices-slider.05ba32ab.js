const e=new URL(import.meta.resolve("gyp6N")).href,t=new URL(import.meta.resolve("aC8wy")).href,a=new URL(import.meta.resolve("gTkNi")).href,o=new URL(import.meta.resolve("g2wPK")).href,s=new URL(import.meta.resolve("7aGyj")).href,r=[{text:"Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",id:1,logo:e,avatar:s,author:"Ethan Morgan",position:"Founder and CEO, Serene Living Products"},{text:"Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",id:2,logo:t,avatar:o,author:"Olivia Hayes",position:"Owner, Starlight Creations"},{text:"Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",id:3,logo:a,avatar:new URL(import.meta.resolve("5yvWg")).href,author:"Alexander Reed",position:"Co-Founder, Opulent Living Group"}];let n=0;const i=document.getElementById("sliderTrack"),l=[...r,...r.slice(0,3)];function d(){let e=320*n;i.style.transform=`translateX(-${e}px)`}document.querySelector(".next").addEventListener("click",()=>{++n>r.length?(n=1,i.style.transition="none",d(),setTimeout(()=>{i.style.transition="transform 0.4s ease",n++,d()},20)):d()}),document.querySelector(".prev").addEventListener("click",()=>{--n<0?(n=r.length-1,i.style.transition="none",d(),setTimeout(()=>{i.style.transition="transform 0.4s ease",n--,d()},20)):d()}),l.forEach(e=>{console.log(e);let t=function({text:e,logo:t,avatar:a,author:o,position:s}){let r=document.createElement("div");return r.classList.add("card"),r.innerHTML=`
		<div class="card__logo">
			<img src="${t}" alt="Company Logo" />
		</div>
		<p class="card__text">"${e}"</p>
		<div class="card__footer">
			<img class="card__avatar" src="${a}" alt="${o}" />
			<div class="card__author">
			<strong>${o}</strong><br />
			<span>${s}</span>
			</div>
		</div>
	`,r}(e);i.appendChild(t)}),d();
//# sourceMappingURL=voices-slider.05ba32ab.js.map
