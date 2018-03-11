window.heap=window.heap||[],heap.load=(e, t) => {
  window.heap.appid=e,window.heap.config=t=t||{};
  const r=t.forceSSL||"https:"===document.location.protocol;
  const a=document.createElement("script");
  a.type="text/javascript",a.async=!0,a.src=`${r?"https:":"http:"}//cdn.heapanalytics.com/js/heap-${e}.js`;const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(let o=e => function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}, p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"], c=0;c<p.length;c++)heap[p[c]]=o(p[c])
};
heap.load("374939951");
