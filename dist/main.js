(()=>{"use strict";class t{constructor({id:t,title:e,urlToImage:o,tags:s,...i}){this.id=t,this.title=e,this.urlToImage=o,this.tags=s}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags)&&(t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}class e{constructor(t){this.classes=t,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-icon"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}createDomNode(t,e,...o){return(t=document.createElement(e)).classList.add(...o),t}setContent(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(t){let e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-icon"))&&document.querySelector(".overlay").remove()}}class o extends e{constructor(t,{id:e,title:o,urlToImage:s,tags:i,content:a,date:n}){super(t),this.id=e,this.title=o,this.urlToImage=s,this.tags=i,this.content=a,this.date=n}generateContent(){let t="",e=document.createElement("div");return e.className="article-modal__content",this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags||this.content||this.date)&&(t+='<div class="strategy__content">',this.date&&(t+=`<p class="strategy__date">${this.date}</p>`),this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.content&&(t+=`<p class="strategy__text">${this.content}</p>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}renderModal(){let t=this.generateContent();console.log(t),super.buildModal(t)}}const s=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Art","Culture","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",urlToImage:"./src/img/strategies/4.jpg",tags:["Art","Culture","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:5,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/5.jpg",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:6,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:7,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"},{id:8,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Art","Culture","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2022"}];window.onload=function(){console.log("Hello Rolling Scopes!"),s&&d(),i(),g()};const i=()=>{document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){let e=t.target;a(),n(e),"All"===e.innerText?r():l(e.innerText)}}))},a=()=>{document.querySelectorAll(".strategies__tags .tag").forEach((t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},n=t=>{t.classList.remove("tag_bordered"),t.classList.add("tag_selected")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.remove("strategy_hidden")}))},l=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.add("strategy_hidden"),console.log(e),e.querySelectorAll(".tag").forEach((o=>{o.innerText===t&&e.classList.remove("strategy_hidden")}))}))},d=()=>{let t=c();h(s).forEach((e=>{t.append(e.generateArticle())})),m()},c=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t},h=e=>{let o=[];return e.forEach((e=>{o.push(new t(e))})),o},g=()=>{document.querySelector(".tools__button .button").addEventListener("click",(()=>{u()}))},u=()=>{y("Test content for Tools Modal")},y=t=>{new e("tools-modal").buildModal(t)},m=()=>{document.querySelector(".strategy-wrapper").addEventListener("click",(t=>{if(t.target.closest(".strategy")){let e=t.target.closest(".strategy").getAttribute("data-id"),o=f(e);p(o)}}))},f=t=>s.find((e=>e.id==t)),p=t=>{new o("article-modal",t).renderModal()}})();