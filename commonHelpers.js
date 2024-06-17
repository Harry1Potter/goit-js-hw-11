import{i as l,S as f}from"./assets/vendor-3fe00192.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="44415395-401c6f4260d8ec1c7de985af5",g="https://pixabay.com/api/";function m(i){const r=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${g}?${r}`;return fetch(t).then(s=>{if(!s.ok)throw new Error("Failed to fetch images");return s.json()}).catch(s=>{throw console.error("Error fetching images:",s),s})}const u=document.getElementById("gallery");function h(i){if(i.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const r=i.map(t=>`
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
    `).join("");u.innerHTML=r}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",d=document.getElementById("search-form"),A=document.getElementById("search-input"),a=document.getElementById("loader"),y=document.getElementById("gallery");a.classList.add("loader");a.style.display="none";const v=new f(".gallery a",{captionsData:"alt",captionsDelay:250});d.addEventListener("submit",function(i){i.preventDefault(),y.innerHTML="";const r=A.value.trim();if(r===""){l.error({title:"Error",message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:c,theme:"dark"});return}a.style.display="inline-block",m(r).then(t=>{a.style.display="none",h(t.hits),v.refresh()}).catch(t=>{a.style.display="none",l.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:c,theme:"dark"})}),d.reset()});
//# sourceMappingURL=commonHelpers.js.map
