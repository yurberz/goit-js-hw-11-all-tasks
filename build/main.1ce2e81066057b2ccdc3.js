(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.querySelector("body"),startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')},r=null,i=function(){var t,e;a.body.style.backgroundColor=o[(t=0,e=o.length,Math.floor(Math.random()*(e-t+1)+t))]},c=function t(){r=setInterval(i,1e3),a.startBtn.removeEventListener("click",t)};a.startBtn.addEventListener("click",c),a.stopBtn.addEventListener("click",(function(){clearInterval(r),a.startBtn.addEventListener("click",c)}));var s;n("lmye"),n("D/wG"),n("wCa+"),n("JBxO"),n("FdtR");(s=1500,new Promise((function(t){setTimeout((function(){t(s)}),s)}))).then((function(t){return console.log("Resolved after "+t+" ms")}));var u,d;(u=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],d="Lux",new Promise((function(t){t(u.map((function(t){return t.name===d?Object.assign({},t,{active:!t.active}):t})))}))).then((function(t){return console.table(t)}));var l=function(t){var e,n,o=t.id,a=(e=200,n=500,Math.floor(Math.random()*(n-e+1)+e));return new Promise((function(t,e){setTimeout((function(){Math.random()>.3?t({id:o,time:a}):e(o)}),a)}))},h=function(t){var e=t.id,n=t.time;console.log("Transaction "+e+" processed in "+n+" ms")},m=function(t){console.warn("Error processing transaction "+t+". Please try again later.")};l({id:70,amount:150}).then(h).catch(m),l({id:71,amount:230}).then(h).catch(m),l({id:72,amount:75}).then(h).catch(m),l({id:73,amount:100}).then(h).catch(m);n("e+qc");var f=function(){function t(t){var e=t.selector,n=t.targetDate;this.selector=document.querySelector(""+e),this.targetDate=n,this.start()}var e=t.prototype;return e.start=function(){var t=this;this.setCountdownTimer(),setInterval((function(){t.setCountdownTimer()}),1e3)},e.clear=function(){var t=this.getCountdownTimer(0);this.updateCountdownTimer(t)},e.setCountdownTimer=function(){var t=Date.now(),e=this.targetDate-t,n=this.getCountdownTimer(e);this.updateCountdownTimer(n),e<0&&(clearInterval(),this.clear())},e.pad=function(t){return String(t).padStart(2,"0")},e.getCountdownTimer=function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}},e.updateCountdownTimer=function(t){var e=t.days,n=t.hours,o=t.mins,a=t.secs;this.selector.querySelector('[data-value="days"]').textContent=e,this.selector.querySelector('[data-value="hours"]').textContent=n,this.selector.querySelector('[data-value="mins"]').textContent=o,this.selector.querySelector('[data-value="secs"]').textContent=a},t}();new f({selector:"#timer-1",targetDate:new Date("Dec 28, 2020")}),new f({selector:"#timer-2",targetDate:new Date("Dec 8, 2020 3:50 PM")})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1ce2e81066057b2ccdc3.js.map