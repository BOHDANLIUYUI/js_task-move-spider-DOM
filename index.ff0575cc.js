document.addEventListener("click",function(t){var e=document.querySelector(".wall");if("wall"===t.target.className){var c=document.querySelector(".spider"),i=e.clientWidth-c.clientWidth,l=e.clientHeight-c.clientHeight,n=t.offsetY-c.clientHeight/2,a=t.offsetX-c.clientWidth/2;c.style.top="".concat(Math.max(Math.min(n,l),0),"px"),c.style.left="".concat(Math.max(Math.min(a,i),0),"px")}});
//# sourceMappingURL=index.ff0575cc.js.map
