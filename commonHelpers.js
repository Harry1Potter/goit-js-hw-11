import{i as d,S as p}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="44415395-401c6f4260d8ec1c7de985af5",u="https://pixabay.com/api/";function m(i){const o=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${u}?${o}`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}const l=document.getElementById("gallery");function g(i){if(l.innerHTML="",i.length===0){d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const o=i.map(t=>`
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${t.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${t.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${t.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${t.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");l.innerHTML=o}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",c=document.getElementById("search-form"),h=document.getElementById("search-input"),n=document.getElementById("loader");n.classList.add("loader");n.style.display="none";c.addEventListener("submit",function(i){i.preventDefault();const o=h.value.trim();if(o===""){d.error({title:"Error",message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:A,theme:"dark"});return}n.style.display="inline-block",setTimeout(()=>{n.style.display="none"},5e3),m(o).then(t=>{setTimeout(()=>{n.style.display="none"},2e3),setTimeout(()=>{g(t.hits),y()},3e3)}).catch(t=>{n.style.display="none"}),c.reset()});function y(){new p(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
