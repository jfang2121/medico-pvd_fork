$(window).on("load",(function(){const e=[];let a=new SpeechSynthesisUtterance;var t={},\
    o="https://docs.google.com/spreadsheets/d/1px_LBy1QLAls6401x3ow9GcZQjg5PET_ubZ79ndtWJ4/edit#gid=0",\
    r="AIzaSyAaP5pZnEgogxlg2rEseiXcG9oTcOFq448";function n(e){return t[constants[e]]}function s(e,a){return(e=n(e))&&""!==e.trim()?e:a}function p(r,p){var l;!function(e){for(var a in e){var i=e[a];t[i.Setting]=i.Customize}}(r),document.title=n("_mapTitle"),$("#header")\
    .append("<h1>"+(n("_mapTitle")||"")+"</h1>"),$("#header")\
    .append("<h2>"+(n("_mapSubtitle")||"")+"</h2>"),n("_mapLogo")?($("#logo")\
    .append('<img src="'+n("_mapLogo")+'" />'),\
    $("#top").css("height","150px")):($("#logo").css("display","none"),$("#header").css("padding-top","25px")),\
    l=s("_tileProvider","Stamen.TonerLite"),L.tileLayer.provider(l,{maxZoom:18}).addTo(map),\
    "off"!==n("_zoomControls")&&L.control.zoom({position:n("_zoomControls")}).addTo(map);var c,d,g,h,f,u,v,m=[],\
    y=function(e){for(var a=0;a<m.length;a++)m[a]&&m[a]._icon&&(m[a]._icon.className=m[a]._icon.className.replace(" marker-active",""),\
    a==e&&(m[e]._icon.className+=" marker-active"))},\
    b=[],k=0;for(i in p){var C=p[i];if(console.log(p),isNaN(parseFloat(C.Latitude))||isNaN(parseFloat(C.Longitude)))m.push(null);else{var w=parseFloat(C.Latitude),x=parseFloat(C.Longitude);k+=1,m.push(L.marker([w,x],{icon:L.ExtraMarkers.icon({icon:"fa-number",number:"Numbered"===C.Marker?k:"Plain"===C.Marker?"":C.Marker,markerColor:C["Marker Color"]||"blue"}),opacity:"Hidden"===C.Marker?0:.9,interactive:"Hidden"!==C.Marker}))}var M,\
    _,S=$("<div></div>",{id:"container"+i,class:"chapter-container"}),O=null,T=null;_=C["Media Credit Link"]?$("<a>",\
    {text:C["Media Credit"],href:C["Media Credit Link"],target:"_blank",class:"source"}):$("<div>",{text:C["Media Credit"],class:"source"}),C["Media Link"]&&C["Media Link"].indexOf("youtube.com/")>-1&&(O=$("<iframe></iframe>",\
    {src:C["Media Link"],width:"100%",height:"100%",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"allowfullscreen"}),T=$("<div></div>",{class:"img-container"})\
    .append(O).after(_)),(M={jpg:"img",jpeg:"img",png:"img",tiff:"img",gif:"img",mp3:"audio",ogg:"audio",wav:"audio"}[C["Services Media Link"]?C["Services Media Link"]\
    .split(".").pop().toLowerCase():""]||"img")&&(O=$("<"+M+">",{src:C["Services Media Link"],controls:"audio"===M?"controls":"",alt:C.Chapter}),\
    "yes"===n("_enableLightbox")&&"img"===M&&(O=$("<a></a>",{"data-lightbox":C["Services Media Link"],href:C["Services Media Link"],"data-title":C.Chapter,"data-alt":C.Chapter})\
    .append(O)),T=$("<div></div",{class:M+"-container"})\
    .append(O).after(_)),(M={jpg:"img",jpeg:"img",png:"img",tiff:"img",gif:"img",mp3:"audio",ogg:"audio",wav:"audio"}[C["Media Link"]?C["Media Link"]\
    .split(".").pop().toLowerCase():""]||"img")&&(O=$("<"+M+">",{src:C["Media Link"],controls:"audio"===M?"controls":"",alt:C.Chapter}),"yes"===n("_enableLightbox")&&\
    "img"===M&&(O=$("<a></a>",{"data-lightbox":C["Media Link"],href:C["Media Link"],"data-title":C.Chapter,"data-alt":C.Chapter})\
    .append(O)),T=$("<div></div",{class:M+"-container"})\
    .append(O).after(_),(M={jpg:"img",jpeg:"img",png:"img",tiff:"img",gif:"img",mp3:"audio",ogg:"audio",wav:"audio"}[C["Services Media Link"]?C["Services Media Link"]\
    .split(".").pop().toLowerCase():""]||"img")&&(O=$("<"+M+">",{src:C["Services Media Link"],controls:"audio"===M?"controls":"",alt:C.Chapter}),"yes"===n("_enableLightbox")&&\
    "img"===M&&(O=$("<a></a>",{"data-lightbox":C["Services Media Link"],href:C["Services Media Link"],"data-title":C.Chapter,"data-alt":C.Chapter})\
    .append(O)),T=$("<div></div",{class:M+"-container"})\
    .append(O).after(_))),e.push(C.Descripcion),S\
    .append('<p class="chapter-header">'+C.Resource+"</p>")\
    .append('<p class="chapter-address">'+C.Address+"</p>")\
    .append('<p class="chapter-phone">'+C.PhoneNumber+"</p>")\
    .append(O&&C["Media Link"]?T:"")\
    .append(O?_:"")\
    .append(O&&C["Services Media Link"]?T:"")\
    .append(O?_:"")\
    .append('<h2 class="translate-title"> Descripción </h2>')\
    .append(`<button class='listen listen-${i} ' ><span>Escucha</span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/></svg></button>`)\
    .append(`<button class='stop stop-${i}' >Parar Escuchando</button>`)\
    .append('<p class="description">'+C.Descripcion+"</p>")\
    .append('<h2 class="translate-title">English Translation</h2>')\
    .append('<p class="description">'+C.Description+"</p>"),$("#contents")\
    .append(S)}for(e.forEach(((e,i)=>{$(`.stop-${i}`).hide(),$(`.listen-${i}`)\
    .on("click",(function(){a.text=e,a.lang="es",console.log(i,a.text),speechSynthesis.speak(a),$(`.stop-${i}`)\
    .show()})),$(`.stop-${i}`).on("click",(function(){$(`.stop-${i}`)\
    .hide(),speechSynthesis.cancel()}))})),void 0,f=void 0,void 0,v=void 0,h=$(".leaflet-control-attribution")[0]\
    .innerHTML,f='View <a href="'+(o||"./csv/Chapters.csv")+'" target="_blank">data</a>',u=n("_authorName"),v=n("_authorURL"),u&&v?(v.indexOf("@")>0&&(v="mailto:"+v),f+=' by <a href="'+v+'">'+u+"</a> | "):f+=u?" by "+u+" | ":" | ",f+='View <a href="'+n("_githubRepo")+'">code</a>',n("_codeCredit")&&(f+=" by "+n("_codeCredit")),f+=" with ",$(".leaflet-control-attribution")[0]\
    .innerHTML=f+h,imgContainerHeight=parseInt(n("_imgContainerHeight")),imgContainerHeight>0&&$(".img-container")\
    .css({height:imgContainerHeight+"px","max-height":imgContainerHeight+"px"}),b[0]=-100,i=1;i<p.length;i++)b[i]=b[i-1]+$("div#container"+(i-1)).height()+70;\
    b.push(Number.MAX_VALUE),$("div#contents").scroll((function(){var e=$(this).scrollTop();e<200&&$("#title").css("opacity",1-Math.min(1,e/100));for(var a=0;a<b.length-1;a++)if(e>=b[a]&&e<b[a+1]-140&&c!=a){location.hash=a+1,$(".chapter-container")\
    .removeClass("in-focus").addClass("out-focus"),$("div#container"+a).addClass("in-focus")\
    .removeClass("out-focus"),y(c=a),map.hasLayer(d)&&map.removeLayer(d),map.hasLayer(g)&&map\
    .removeLayer(g);var i=p[a];if(i.Overlay){var t=parseFloat(i["Overlay Transparency"])||1,o=i.Overlay;"geojson"===o.split(".")\
    .pop()?$.getJSON(o,(function(e){d=L.geoJson(e,{style:function(e){return{fillColor:e.properties.fillColor||"#ffffff",weight:e.properties.weight||1,opacity:e.properties.opacity||t,color:e.properties.color||"#cccccc",fillOpacity:e.properties.fillOpacity||.5}}})\
    .addTo(map)})):d=L.tileLayer(i.Overlay,{opacity:t}).addTo(map)}if(i["GeoJSON Overlay"]&&$\
    .getJSON(i["GeoJSON Overlay"],(function(e){var a={};if(i["GeoJSON Feature Properties"]){var t=i["GeoJSON Feature Properties"]\
    .split(";");for(var o in a={},t)2===t[o].split(":").length&&(a[t[o].split(":")[0].trim()]=t[o]\
    .split(":")[1].trim())}g=L.geoJson(e,{style:function(e){return{fillColor:e.properties.fillColor||a.fillColor||"#ffffff",weight:e.properties.weight||a.weight||1,opacity:e.properties.opacity||a.opacity||.5,color:e.properties.color||a.color||"#cccccc",fillOpacity:e.properties.fillOpacity||a.fillOpacity||.5}}})\
    .addTo(map)})),i.Latitude&&i.Longitude){var r=i.Zoom?i.Zoom:15;map.flyTo([i.Latitude,i.Longitude],r,{animate:!0,duration:2})}break}})),$("#contents")\
    .append("       <div id='space-at-the-bottom'>         <a href='#top'>            <i class='fa fa-chevron-up'></i></br>           <small>Top</small>          </a>       </div>     "),$("<style>")\
    .prop("type","text/css").html("      #narration, #title {        background-color: "+s("_narrativeBackground","white")+";         color: "+s("_narrativeText","black")+";       }      a, a:visited, a:hover {        color: "+s("_narrativeLink","blue")+"       }      .in-focus {        background-color: "+s("_narrativeActive","#f0f0f0")+"       }")\
    .appendTo("head"),endPixels=parseInt(n("_pixelsAfterFinalChapter")),endPixels>100&&$("#space-at-the-bottom")\
    .css({height:endPixels/2+"px","padding-top":endPixels/2+"px"});var N=[];for(i in m)m[i]&&(m[i].addTo(map),m[i]._pixelsAbove=b[i],m[i]\
    .on("click",(function(){var e=parseInt($(this)[0]._pixelsAbove)+5;$("div#contents")\
    .animate({scrollTop:e+"px"})})),N.push(m[i].getLatLng()));if(map.fitBounds(N),$("#map, #narration, #title").css("visibility","visible"),$("div.loader").css("visibility","hidden"),$("div#container0")\
    .addClass("in-focus"),$("div#contents").animate({scrollTop:"1px"}),parseInt(location.hash.substr(1))){var P=parseInt(location.hash.substr(1))-1;$("#contents").animate({scrollTop:$("#container"+P)\
    .offset().top},2e3)}var j=n("_googleAnalytics");if(j&&j.length>=10){var A=document.createElement("script");function J(){dataLayer.push(arguments)}A.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+j),document.head\
    .appendChild(A),window.dataLayer=window.dataLayer||[],J("js",new Date),J("config",j)}}$.get("csv/Options.csv",(function(e){$.get("csv/Chapters.csv",(function(a){p($.csv.toObjects(e),$.csv.toObjects(a))}))\
    .fail((function(e){alert("Found Options.csv, but could not read Chapters.csv")}))}))\
    .fail((function(e){var a=function(e){return Papa.parse(Papa.unparse(e[0].values),{header:!0}).data};if(o)if(r){var i="https://sheets.googleapis.com/v4/spreadsheets/",\
    t=o.split("/d/")[1].split("/")[0];$.when($.getJSON(i+t+"/values/Options?key="+r),$.getJSON(i+t+"/values/Chapters?key="+r)).then((function(e,i){p(a(e),a(i))}))}else alert("You load data from a Google Sheet, you need to add a free Google API key");else alert("You need to specify a valid Google Sheet (googleDocURL)")}))}));