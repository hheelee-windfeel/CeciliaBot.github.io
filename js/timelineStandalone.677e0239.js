(function(){var e={1930:function(e,t,n){"use strict";var i,o,s,a,r;n.d(t,{SB:function(){return i}});function c(e,t){a&&(a.style.display="",e.insertBefore(a,t))}function l(){a&&(a.style.display="none")}function h(){a&&(a.remove(),a=null)}function d(){o.insertBefore(i.node,s),i.node.classList.remove("is-dragging"),i.node.style=i.originalStyle,document.body.classList.remove("holding-drag")}function u(){i&&(h(),i=null)}function g(e){var t=e;!i.touch&&e.clientX||(t=e.touches[0]||e.changedTouches[0]);var n=t.clientX,o=t.clientY;return Math.abs(i.freezeX-n)<=4&&Math.abs(i.freezeY-o)<=4&&(r<700&&(f(i.node,"dragclick",{node:i.node,clientX:n,clientY:o}),!0))}function f(e,t,n){if(!e||!t)return;const i=new CustomEvent(t,{detail:n||{}});e.dispatchEvent(i)}function m(e){if(!i)return;var t=e;!i.touch&&e.clientX||(t=e.touches[0]||e.changedTouches[0]);var n=t.clientX,o=t.clientY;let s=i.node.getBoundingClientRect();i.node.style.top=o-s.height/2+"px",i.vertical?n=i.freezeX:i.node.style.left=n-s.width/2+"px";const a=i.drop,r=document.elementsFromPoint(n,o);for(var h in r){let e=r[h].attributes["data-drop"];if(e&&a.includes(e.value)){if(i.targetNode!==r[h]&&(f(r[h],"dragenter",{node:i.node}),f(i.targetNode,"dragleave",{node:i.node})),i.targetNode=r[h],h>0)for(var d=0;d<h;d++){let e=r[d].attributes["data-item-index"];if("item-placeholder"===r[d].id){null===i.targetIndex&&(i.targetIndex=i.index);break}if(e&&i.node.classList.contains(r[d].classList[0])){const t=r[d].getBoundingClientRect();let s=e.value,a=i.vertical?t.top+t.height/2<o:t.left+t.width/2<n;a?(s++,c(r[d].parentNode,r[d].nextSibling)):c(r[d].parentNode,r[d]),i.targetIndex=Math.max(0,s);break}}else c(r[h],r[h].children[r[h].children.length]),i.targetIndex=r[h].children.length;break}h>r.length-2&&(f(i.targetNode,"dragleave",{node:i.node}),l(),i.targetNode=null,i.targetIndex=null)}}function p(e){if(i){if(r=r.stop(),d(),i.targetNode){if(i.touch&&g(e))return u();f(i.targetNode,"drop",{item:i.item,list:i.from,oldIndex:i.index,index:i.targetIndex,node:i.node,clientX:e.clientX||(e.touches[0]||e.changedTouches[0]).clientX,clientY:e.clientY||(e.touches[0]||e.changedTouches[0]).clientY})}else i.touch?g(e):f(i.node,"dragfail",{node:i.node,list:i.from,oldIndex:i.index});return u()}u()}function v(e){e.touches.length||p(e)}document.body.addEventListener("mousemove",m,!0),document.body.addEventListener("mouseup",p,!0),document.body.addEventListener("touchmove",m,!0),document.body.addEventListener("touchend",v,!0)},2229:function(e,t,n){"use strict";n(7658);var i=[];function o(e){e.target.style.opacity="";const t=e.target.previousSibling;t&&"IMG"===t.tagName&&t.getAttribute("data-lazy-fader")&&(t.style.opacity=0),e.target.onload=null,i.push(e.target.src.valueOf()+"")}const s=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){var t=e.target;const n=t.getAttribute("data-src");return n&&(t.onload=o,t.setAttribute("src",n),t.removeAttribute("data-src")),void s.unobserve(t)}}))}),{rootMargin:"0px",threshold:0});function a(e){const t=e.getAttribute("data-src");if(t)if(i.includes(t)){const n=e.previousSibling;n&&"IMG"===n.tagName&&n.getAttribute("data-lazy-fader")&&(n.style.opacity=0),e.style.opacity="",e.setAttribute("src",t),e.removeAttribute("data-src"),s.unobserve(e)}else e.getAttribute("src")||(e.style.opacity=0),s.observe(e)}t["ZP"]={mounted:function(e){a(e)},updated:function(e){a(e)},beforeUnmount:function(e){e.onload=null,s.unobserve(e)}}},8439:function(e,t,n){"use strict";n.d(t,{cK:function(){return i}});const i="https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/"},6615:function(e,t,n){"use strict";var i=n(9963),o=n(6252),s=n(3577);const a={class:"container"},r=(0,o._)("img",{style:{height:"100px"},src:"https://cdn.glitch.com/6c14ca82-3bcb-4fd6-afa7-815b95e04a14%2Fras-run-slow.gif?v=1632241290215"},null,-1);function c(e,t,n,c,l,h){const d=(0,o.up)("MainComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o.Wm)(d,{standalone:!0})]),(0,o.wy)((0,o._)("div",{id:"loading",class:"noselect loading-container animatefade",onContextmenu:t[0]||(t[0]=e=>e.preventDefault())},[r,(0,o.Wm)(i.uT,{name:"slide-fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("div",{key:h.loadingText,style:{"font-size":"32px",color:"white","text-shadow":"0px 0px 3px grey, 0 0 10px black, 0 0 10px black","line-height":"30px","padding-top":"12px","margin-left":"20px"}},(0,s.zw)(h.loadingText),1))])),_:1})],544),[[i.F8,h.loading]])],64)}n(7658);var l={name:"ChangelogComponent",props:["path"],data:function(){return{changelog:[],normalizedPath:this.path,changelogLang:"",changelogFetching:!1,changelogFailed:!1,isVisible:!1,observer:null}},created:function(){while("."===this.normalizedPath.charAt(0)||"/"===this.normalizedPath.charAt(0))this.normalizedPath=this.normalizedPath.substring(1);this.observer=new IntersectionObserver(this.onElementObserved,{root:this.$el,threshold:0})},beforeUnmount(){this.observer.disconnect()},mounted:function(){this.observer.observe(this.$refs.changelog)},computed:{lang:function(){return this.$i18n.locale}},watch:{lang:function(){this.changelog=[],!this.changelogFetching&&this.visible&&this.getChangelog()}},methods:{onElementObserved(e){e.forEach((({isIntersecting:e})=>{e?(this.visible=!0,this.changelogFetching||this.changelogFailed||this.changelog.length&&this.changelogLang===this.$i18n.locale||this.getChangelog()):this.visible=!1}))},getChangelog:function(){return this.changelogFailed=!1,this.changelogFetching=!0,Promise.all([n(8080)(`./${this.normalizedPath}changelog/${this.$i18n.locale}.json`).catch((async()=>await n(7630)(`./${this.normalizedPath}changelog/en.json`)))]).then((([e])=>{var t=e.default||[];return this.changelog=t,Promise.resolve(e)})).catch((e=>(this.changelogFailed=e,Promise.resolve(!1)))).then((()=>{this.changelogLang=this.$i18n.locale,this.changelogFetching=!1}))}},render:function(){return(0,o.h)("div",{ref:"changelog",class:"changelog-wrapper"},[(0,o.h)("h2",{class:"title"},[this.$t("strings.changelog"),":"]),this.changelog.length?this.changelog.map((e=>(0,o.h)("section",{class:"changelog-section"},[(0,o.h)("header",{class:"changelog-sec-header"},[(0,o.h)("span",{class:"changelog-badge version"},e[0].toFixed(2)),(0,o.h)("h2",{class:"changelog-header-title"},e[1])]),e[2].map((e=>(0,o.h)("ul",{},[(0,o.h)("li",{},[(0,o.h)("div",{class:"changelog-badge "+e[0]},e[0]),(0,o.h)("div",{class:"changelog-description flex-fill",innerHTML:e[1]})])])))]))):(0,o.h)("div",{style:"text-align: center"},[this.changelogFetching?(0,o.h)("div",{class:"fa fa-circle-notch fa-spin"}):this.changelogFailed?(0,o.h)("div",{},this.changelogFailed):this.changelog&&this.changelog.length?null:(0,o.h)("div",{},"Changelog is empty")])])}};const h=l;var d=h,u=n(5089),g=n(2229),f={name:"shop-overlay",props:["events","vertical","timelinelength","timelinedates","daysize","direction"],data:function(){return{initialRender:!1,timelineItems:[],isOpen:!1}},created:function(){},computed:{rdte:function(){return[0,1].filter((e=>e!==this.direction))[0]}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},checkRender:function(){},dateDiff:function(e,t){if(!e||!t)return 1;let n=e,i=t;if(n>i){var o=n;n=i,i=o}return(new Date(i).getTime()-new Date(n).getTime())/864e5},getEvents:function(){}},render:function(){return(0,o.h)("section",{},[(0,o.h)("div",{class:"tshop-overlay-label noselect",onClick:()=>this.isOpen?this.close():this.open()},[(0,o.h)("div",{style:"font-size: 20px;line-height: 40px;"+(this.vertical?"height:"+this.$store.state.screenHeight+"px;":"width:"+this.$store.state.screenWidth+"px")},this.isOpen?[(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]}),(0,o.h)("span","Hide shop rotations"),(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-right":"fa-angle-double-down"]})]:[(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]}),(0,o.h)("span","View shop rotations"),(0,o.h)("i",{class:["fas",this.vertical?"fa-angle-double-left":"fa-angle-double-up"]})])]),(0,o.h)("div",{class:["glass-container shop-timeline",{open:this.isOpen}],style:{[this.vertical?"height":"width"]:"100%"}},[this.events.map(((e,t)=>(0,o.h)("div",{class:"shop-row"},[e.map((e=>e.dt[1]?(0,o.h)("div",{class:"shop-rotation",style:{[this.vertical?"height":"width"]:this.dateDiff(e.dt[this.direction],e.dt[this.rdte],this.direction)*this.daysize+"px",[this.vertical?"top":"left"]:this.dateDiff(e.dt[this.direction],this.timelinedates[1!==this.direction?this.timelinedates.length-1:0])*this.daysize+"px"}},(e.a||e.c).map((e=>(0,o.wy)((0,o.h)("img",{src:0===t?"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_art0000.png":"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png","data-src":0===t?this.$store.getters.getArtifactIcon(e.id):this.$store.getters.getHeroIcon(e.id),crossorigin:"anonymous",SameSite:"Lax"}),[[g.ZP],[u.Z,()=>0===t?this.$store.getters.getArtifactName(e.id):this.$store.getters.getHeroName(e.id)]])))):null))])))])])}},m=n(3744);const p=(0,m.Z)(f,[["__scopeId","data-v-25dd5ae8"]]);var v=p,y=n(2536);function b(e,t){var n=null;return function(){clearTimeout(n);var i=arguments,o=this;n=setTimeout((function(){e.apply(o,i)}),t)}}var w={name:"ctrlf-component",props:{events:{type:Array,required:!1,default:()=>[]},renderBox:{type:Boolean,required:!1,default:!0},searchFunction:{type:Function,required:!0},toDisplay:{type:Function,required:!0}},data:function(){return{render:!1,localRenderBox:!1,current:0,results:[],hideResultsBox:!1}},watch:{renderBox:{immediate:!0,handler:function(e){this.localRenderBox=e}}},computed:{mobile:function(){return!0}},created:function(){document.addEventListener("keydown",this.openCtrl,!0)},beforeUnmount:function(){document.removeEventListener("keydown",this.openCtrl,!0)},mounted:function(){},methods:{openCtrl:function(e){e.ctrlKey&&"f"===e.key&&(e.preventDefault(),this.render=!0,this.openSearchBar())},openSearchBar:function(){this.render=!0,this.focusInput(),this.selectInputContent()},focus:function(){this.focusInput(),this.selectInputContent()},focusInput:function(){this.$nextTick((()=>{this.$refs["input-search-box"].focus()}))},selectInputContent:function(){this.$nextTick((()=>{this.$refs["input-search-box"].select()}))},searchEvent:b((function(e){this.results=this.searchFunction(e.target.value),this.current=0,this.clickEvent(this.results[this.current])}),400),goToSearchEvent:function(e){this.results.length&&(this.current=e,this.current<0&&(this.current=this.results.length-1),this.current>this.results.length-1&&(this.current=0),this.clickEvent(this.results[this.current]))},clickEvent:function(e){this.$emit("event",e)},closeSearchBar:function(){this.render=!1}},render:function(){return(0,o.h)("div",{class:"search-box-pos",style:{display:this.render?"":"none"}},[(0,o.h)("div",{class:"ch-search-box"},[(0,o.h)("input",{ref:"input-search-box",onInput:e=>this.searchEvent(e),onKeydown:e=>{("enter"===e.key||13===e.keyCode)&&this.goToSearchEvent(this.current+1)},autocomplete:"off"}),(0,o.h)("div",{},Math.min(this.current+1,this.results.length)+"/"+this.results.length),(0,o.h)("span",{class:["fas fa-angle-up",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current+1)}),(0,o.h)("span",{class:["fas fa-angle-down",{disabled:0===this.results.length}],onClick:()=>this.goToSearchEvent(this.current-1)}),(0,o.h)("span",{class:"fas fa-bars",onClick:()=>this.localRenderBox=!this.localRenderBox}),(0,o.h)("span",{class:"fas fa-times",onClick:()=>this.closeSearchBar()})]),this.localRenderBox?(0,o.h)("div",{class:["search-results-box",{hidebox:this.hideResultsBox}]},this.results.map(((e,t)=>(0,o.h)("div",{class:["item",{active:t===this.current}],onClick:()=>this.goToSearchEvent(t)},this.toDisplay(e))))):null])}};const x=w;var S,k=x,T=n(2784);function j(e,t){var n=new Date(new Date(e).toISOString().substr(0,10));t||(t=(new Date).toISOString().substr(0,10));var i=new Date(t);if(n>i){var o=n;n=i,i=o}var s=n.getFullYear(),a=s%4===0&&s%100!==0||s%400===0?29:28,r=[31,a,31,30,31,30,31,31,30,31,30,31],c=i.getFullYear()-s,l=i.getMonth()-n.getMonth();l<0&&(c--,l+=12);var h=i.getDate()-n.getDate();return h<0&&(l>0?l--:(c--,l=11),h+=r[n.getMonth()]),c+"Y "+l+"M "+h+"D"}var C={name:"timeline-main",components:{},props:["standalone"],data:function(){return{VERSION:1.15,events:[],timelineItems:[],vertical:!1,daySize:20,direction:0,today:"",openBanner:!1,openChangelog:!1,covenantShop:[],galaxyShop:[],powderShop:[],balance:[]}},beforeCreate:function(){},created:function(){this.toggleLoading(!0,"downloading"),Promise.all([(0,T.Z)("./data/timeline/covenant.json").catch((()=>"[]")),(0,T.Z)("./data/timeline/mystic.json").catch((()=>"[]")),this.$store.dispatch("GET_HERO_DB"),this.$store.dispatch("GET_ARTIFACT_DB")]).then((e=>{this.events=this.compatibilityModeDates([].concat(JSON.parse(e[0]),JSON.parse(e[1]))),this.today=(new Date).toISOString().substr(0,10),this.$nextTick((()=>{this.toggleLoading(!1)})),Promise.all([(0,T.Z)("./data/timeline/powder-shop.json").catch((()=>"[]")),(0,T.Z)("./data/timeline/galaxy-coin-shop.json").catch((()=>"[]")),(0,T.Z)("./data/timeline/covenant-coin-shop.json").catch((()=>"[]"))]).then((e=>{this.powderShop=this.compatibilityModeDates(JSON.parse(e[0])),this.galaxyShop=this.compatibilityModeDates(JSON.parse(e[1])),this.covenantShop=this.compatibilityModeDates(JSON.parse(e[2]))}))}))},beforeMount:function(){},mounted:function(){S=this.$refs.TIMELINE_CONTAINER,S.addEventListener("wheel",this.horizionatlScroll)},beforeUnmount:function(){S.removeEventListener("wheel",this.horizionatlScroll),S=null},watch:{timelineDates:function(){this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))},direction:function(){this.loading().then((()=>{this.timelineItems=this.buildRenderArray(),this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}))},vertical:function(e){this.direction=e?1:0,this.$nextTick((()=>{this.$refs[this.today].scrollIntoView({behavior:"auto",block:"center",inline:"center"})}))}},computed:{mobile:function(){return this.$store.state.isMobile},timelineDates:function(){for(var e=[this.today],t=0;t<this.events.length;t++){let i=this.events[t].dt;if(i)for(var n=0;n<i.length;n++)e.includes(i[n])||e.push(i[n])}return e.sort(((e,t)=>e<t?1:e===t?0:-1)),e},timelinePixelLength:function(){return this.dateDiff(this.timelineDates[0],this.timelineDates[this.timelineDates.length-1])}},methods:{compatibilityModeDates(e){var t=e=>e<10?"0"+e:e;return e.forEach((e=>{e.dt=(e.dt||[]).map((e=>{var n=new Date(e);return n.getUTCFullYear()+"-"+t(n.getUTCMonth()+1)+"-"+t(n.getUTCDate())}))})),e},home:function(){this.$store.commit("toggleMainMenu")},toggleLoading:function(e,t){this.$store.commit("loading",e,t)},loading:function(e){return this.toggleLoading(!0,e),new Promise((e=>{setTimeout((()=>{e(),this.$nextTick((()=>{this.$store.commit("loading",!1)}))}),0)}))},getHero:function(e){return this.$store.getters.getHero(e)},getHeroName:function(e){return this.$store.getters.getHeroName(e)},getHeroIcon:function(e){return this.$store.getters.getHeroIcon(e)},getArtifact:function(e){return this.$store.getters.getArtifact(e)},getArtifactName:function(e){return this.$store.getters.getArtifactName(e)||""},getArtifactIcon:function(e){return this.$store.getters.getArtifactIcon(e)},showSearchBar:function(){this.$refs.ctrlf.openSearchBar()},searchFunction:function(e){const t=this.events;if(!t.length||!e)return[];const n=new RegExp("(\\b|-)"+e,"i");var i=[["Banner",this.events],["Powder Shop",this.powderShop],["Galaxy Coin",this.galaxyShop],["Covenant Coin",this.covenantShop]].map((e=>e[1].filter((e=>!(!e.name||!n.test(e.name))||(!(!e.c||!e.c.some((e=>n.test(this.getHeroName(e.id)))))||(!!(e.a&&e.a.length&&e.a.some((e=>n.test(this.getArtifactName(e.id)))))||void 0)))).map((t=>("Banner"===e[0]?(t.handler=()=>this.$refs["shop-timeline"].close(),t.resultName=t.c?t.c.map((e=>this.getHeroName(e.id))).join(", "):e[0]):(t.handler=()=>this.$refs["shop-timeline"].open(),t.resultName=e[0]),t))))).flat().sort(((e,t)=>e.dt[0]<t.dt[0]?1:e.dt[0]===t.dt[0]?0:-1));return i},searchToDisplay:function(e){return e.dt[0]+" - "+e.resultName},goToSearchResult:function(e){if(e){e.handler&&e.handler();var t=this.dateDiff(e.dt[this.direction],this.timelineDates[1!==this.direction?this.timelineDates.length-1:0]),n={top:0,left:0,behavior:"smooth"};this.vertical?n.top=t*this.daySize:n.left=t*this.daySize+100-window.innerWidth/2,S.scrollTo(n)}},goToDate:function(e){this.$refs[e].scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},horizionatlScroll:function(e){const t=S;if(this.vertical)return;const n=e.deltaY<0&&t.scrollLeft>0,i=e.deltaY>0&&t.scrollLeft<t.scrollWidth-t.clientWidth;(n||i)&&(t.scrollLeft+=e.deltaY)},onContextMenu:function(e){this.$contextmenu(e,[{name:"Direction",children:[{class:0===this.direction?"fa fa-check":"",name:"Normal",handler:()=>this.direction=0},{class:1===this.direction?"fa fa-check":"",name:"Reverse",handler:()=>this.direction=1}]},{name:"Orientation",children:[{class:this.vertical?"":"fa fa-check",name:"Horizontal",handler:()=>this.vertical=!1},{class:this.vertical?"fa fa-check":"",name:"Vertical",handler:()=>this.vertical=!0}]},{name:"Change Day Size",children:[15,20,30,40,50].map((e=>({class:this.daySize===e?"fa fa-check":"",name:e,handler:()=>this.setDaySize(e)})))},{class:"fas fa-map-marker-alt",name:this.$t("strings.scroll_to_today"),handler:()=>this.goToDate(this.today)},{class:"fa fa-search",name:this.$t("strings.search"),handler:()=>this.showSearchBar()}])},dateDiff:function(e,t){if(!e||!t)return 1;let n=e,i=t;if(n>i){var o=n;n=i,i=o}return(new Date(i).getTime()-new Date(n).getTime())/864e5},formatDate:function(e,t){if(!e)return"";var n=e.split(/-/g),i=n[2],o=["January","February","March","April","May","June","July","August","September","October","November","December"][Number(n[1])-1],s=n[0];return Number(i)+" "+o.slice(0,3)+" "+s+(t?" - "+t:"")},dayGraphSize:function(e,t){return this.daySize*this.dateDiff(e,t)},setDaySize:function(e){this.loading().then((()=>{this.daySize=e,this.timelineItems=this.buildRenderArray()}))},buildRenderArray:function(){const e=[0,1][this.direction||0],t=[0,1].filter((t=>t!==e))[0],n=(e,t)=>({date:e,size:1===this.direction?this.dayGraphSize(t,e):this.dayGraphSize(e,t),m:[],n:[],e:[]});var i=this.events,o=this.timelineDates.slice().reverse(),s=[];1===this.direction&&(o=o.reverse());for(var a=0;a<o.length;a++){s[a]||(s[a]=n(o[a],o[a+1]));for(var r=0;r<i.length;r++){var c=-1,l=i[r].dt[e]||i[r].dt[t],h="event"===i[r].type?"e":"mystic"===i[r].type?"m":"n";if(o[a]===l){i[r].dt[1]<this.today?i[r].bTooltip='Ended: <span style="color: #ff1919">'+j(i[r].dt[1],this.today)+"</span> ago":i[r].dt[0]>this.today?i[r].bTooltip='Starts: <span style="color: green">'+j(i[r].dt[0],this.today)+"</span>":i[r].bTooltip='Started: <span style="color: green">'+j(i[r].dt[0],this.today)+'</span> ago<br>Ends: <span style="color: #ff1919">'+j(i[r].dt[1],this.today)+"</span>",i[r].duration=this.dateDiff(i[r].dt[0],i[r].dt[1]),i[r].bannerClass="","limited"===i[r].type?i[r].bannerClass="limited":"mystic"===i[r].type?i[r].bannerClass="mystic":i[r].c&&i[r].c[0]&&(i[r].bannerClass=this.getHero(i[r].c[0].id).attribute),i[r].bannerSize=s[a].size-10;for(var d=0;d<s[a][h].length;d++)if(!s[a][h][d]){s[a][h][d]=i[r],c=d;break}-1===c&&(s[a][h].push(i[r]),c=s[a][h].length-1);var u=o.indexOf(i[r].dt[t])||1;for(d=a;d<u;d++)s[d]||(s[d]=n(o[d],o[d+1])),d!=a&&(i[r].bannerSize+=s[d].size),s[d][h][c]=i[r]}}}return s}},render:function(){return(0,o.h)("div",{style:"height: inherit",onContextmenu:this.onContextMenu},[this.openChangelog?(0,o.h)("div",{class:"center-modal",style:"position: absolute; z-index: 10;",onClick:e=>e.target===e.currentTarget?this.openChangelog=!this.openChangelog:null},[(0,o.h)("div",{class:"flat-modal glass-container-2",style:"padding: 10px; color: var(--font-color); overflow: auto;"},[(0,o.h)(d,{path:"/views/timeline/",style:"height: auto;"})])]):null,(0,o.h)(y.Z,{mobile:this.mobile,options:[{title:this.$t("strings.search"),class:"fa fa-search",click:"search"},{title:this.$t("strings.scroll_to_today"),class:"fas fa-map-marker-alt",click:"goToday"},{title:this.$t("strings.vertical_toggle"),class:"fa fa-mobile "+(this.vertical?"fa-rotate-90":""),click:"vertical"},{title:this.$t("strings.changelog"),class:"fa fa-history",click:"changelog"},this.standalone?{}:{title:this.$t("strings.home"),class:"fa fa-home",click:"home"}],onSearch:()=>this.showSearchBar(),onGoToday:()=>this.goToDate(this.today),onHome:()=>this.home(),onVertical:()=>this.loading().then((()=>this.vertical=!this.vertical)),onChangelog:()=>this.openChangelog=!this.openChangelog,onLanguage:this.$localePicker}),(0,o.h)(k,{ref:"ctrlf",key:"ctrlf-timeline",mobile:this.mobile,events:this.events,toDisplay:this.searchToDisplay,searchFunction:this.searchFunction,onEvent:this.goToSearchResult}),(0,o.h)("div",{ref:"TIMELINE_CONTAINER",style:"height: inherit; width: inherit; overflow: auto;"},[(0,o.h)("ul",{class:this.vertical?"vtimeline":"timeline"},[(0,o.h)(v,{ref:"shop-timeline",events:[this.powderShop,this.galaxyShop,this.covenantShop],vertical:this.vertical,timelinedates:this.timelineDates,daysize:this.daySize,timelinelength:this.timelinePixelLength*this.daySize,direction:this.direction}),this.timelineItems.map(((e,t)=>(0,o.h)("li",{ref:e.date,key:e.date,class:{today:this.today===e.date},index:t,"data-date":this.$d(e.date,"short"),id:e.date,style:{[this.vertical?"height":"width"]:e.size+"px"}},[["m","n"].map((t=>(0,o.h)("section",{class:"wrapper-"+t,key:"wrapper-key-"+e.date+t},[e[t].map((t=>t.dt[this.direction||0]===e.date?(0,o.wy)((0,o.h)("div",{ref:t.id+"-"+e.date,key:t.id,class:"banner "+t.bannerClass,tabindex:0,"data-hero":t.c?t.c[0].id:"null",style:{[this.vertical?"height":"width"]:t.bannerSize+"px"}},[t.c?(0,o.h)("div",{class:"icon_container"},t.c.map((e=>(0,o.h)("div",{class:{isnew:e.new}},[(0,o.wy)((0,o.h)("img",{"data-src":this.getHeroIcon(this.getHero(e.id).id),src:"https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/c0000_s.png",crossorigin:"anonymous",SameSite:"Lax"}),[[g.ZP]])])))):null,t.name?(0,o.h)("span",{class:"banner-description"},t.name):null]),[[u.Z,{value:t.bTooltip}]]):(0,o.h)("div",{class:"banner dummy"})))])))])))])])])},renderError:function(){}};const $=(0,m.Z)(C,[["__scopeId","data-v-4c2277e2"]]);var E=$,D=n(4640),I=n(849);function O(){var e,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.height||document.body.clientHeight;e=t<=600,D.Z&&(D.Z.commit("updateIsMobile",e),D.Z.commit("updateWindowSize",t),D.Z.commit("updateWindowHeight",n))}window.onresize=O;var z={components:{MainComponent:E},data:function(){return{VERSION:"1.0",memed:!1}},methods:{setLoading:function(e,t){this.$store.commit("loading",[e,t])},installPWA:function(){this.PWAButton.prompt(),this.PWAButton.userChoice.then((e=>{"dismissed"==e.outcome?console.log("Permission refused"):this.$set(this.$store.state,"installPWAButton",null)}))}},computed:{loading:function(){return this.$store.state.loading[0]},loadingText:function(){return this.$store.state.loading[1]}},created:async function(){if(console.log("%cCeciliaBot","font-size: 30px"),console.log(`%cVersion: ${this.VERSION}`,"color: red"),this.$store.commit("updateIsMobile",I.Z.any()),O(),console.log("Mobile:",this.$store.state.isMobile),Math.floor(100*Math.random())+1<5)return this.memed=!0;document.addEventListener("keydown",(e=>{"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName&&"true"!=e.target.contentEditable&&("Escape"!==e.key&&"m"!==e.key||this.openHome())}))}};const N=(0,m.Z)(z,[["render",c]]);var M=N,A=n(9234),P=n(1830),_=n(895),L=n(3685),B=n(5348),F=n(7482),Z=n(4841);window.i18n=A.ZP;let R=(0,i.ri)(M);R.config.unwrapInjectedRef=!0,R.use(D.Z).use(A.ZP).use(L.Z).use(B.Z).use(F.Z).use(_.Z).directive("tooltip",u.Z).directive("lazyloader",g.ZP).directive("ripple-effect",P.Z).component("HeroIcon",Z.Z).component("MobileFloatingMenu",y.Z).mount("#app")},8080:function(e,t,n){var i={"./views/camping-simulator/changelog/en.json":[5502,402],"./views/tierlist-maker/changelog/en.json":[419,57],"./views/timeline/changelog/en.json":[7467,483],"./views/timeline2/changelog/en.json":[8370,393]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(i)},o.id=8080,e.exports=o},7630:function(e,t,n){var i={"./views/camping-simulator/changelog/en.json":[5502,402],"./views/tierlist-maker/changelog/en.json":[419,57],"./views/timeline/changelog/en.json":[7467,483],"./views/timeline2/changelog/en.json":[8370,393]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,19)}))}o.keys=function(){return Object.keys(i)},o.id=7630,e.exports=o}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var a=1/0;for(h=0;h<e.length;h++){i=e[h][0],o=e[h][1],s=e[h][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(r=!1,s<a&&(a=s));if(r){e.splice(h--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var s=Object.create(null);n.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){a[e]=function(){return i[e]}}));return a["default"]=function(){return i},n.d(s,a),s}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{28:"locales/zh-TW-artifacts-json",57:"changelog/views-tierlist-maker-changelog-en-json",78:"locales/en-strings-json",91:"locales/ko-heroes-json",233:"locales/ja-heroes-json",251:"locales/th-heroes-json",348:"locales/pt-heroes-json",359:"locales/th-artifacts-json",378:"locales/pt-strings-json",393:"changelog/views-timeline2-changelog-en-json",402:"changelog/views-camping-simulator-changelog-en-json",483:"changelog/views-timeline-changelog-en-json",516:"locales/th-strings-json",534:"locales/ja-artifacts-json",635:"locales/es-heroes-json",708:"locales/zh-CN-artifacts-json",719:"locales/zh-CN-heroes-json",726:"locales/it-strings-json",737:"locales/es-strings-json",770:"locales/zh-CN-strings-json",787:"locales/ko-artifacts-json",813:"locales/zh-TW-strings-json",856:"locales/ko-strings-json",913:"locales/zh-TW-heroes-json",921:"locales/es-artifacts-json",950:"locales/pt-artifacts-json",977:"locales/ja-strings-json"}[e]+"."+{28:"903cfedf",57:"199f96e4",78:"1d939542",91:"4c09d31e",233:"039a63e7",251:"3a130e45",348:"469b627b",359:"f36f74b3",378:"c457d078",393:"aa6223bf",402:"24c131e8",483:"851cac36",516:"133e9e60",534:"830aaaba",635:"2c036904",708:"7f49a732",719:"4973339a",726:"65e89da9",737:"d39d9e5f",770:"cefe95aa",787:"39a2f506",813:"1b5f18e6",856:"52e08f5f",913:"cdefeda7",921:"06e4658a",950:"69f1ef51",977:"e26aaa9e"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="v3:";n.l=function(i,o,s,a){if(e[i])e[i].push(o);else{var r,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var d=l[h];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+s){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+s),r.src=i),e[i]=[o];var u=function(t,n){r.onerror=r.onload=null,clearTimeout(g);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.j=741}(),function(){n.p=""}(),function(){var e={741:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var s=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=s);var a=n.p+n.u(t),r=new Error,c=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,o[1](r)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,a=i[0],r=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var h=c(n)}for(t&&t(i);l<a.length;l++)s=a[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(h)},i=self["webpackChunkv3"]=self["webpackChunkv3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998,64],(function(){return n(6615)}));i=n.O(i)})();