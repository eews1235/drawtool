(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(17),o=n.n(r),s=(n(27),n(3)),c=n(4),l=n(12),u=n(2),h=n(5),d=n(8),p=n(7),f=n(9),m=n(1),v=n(18),w=n(19),g=n(20),b=Object.freeze({x:0,y:0,untransformedX:0,untransformedY:0}),y=Object.freeze({canvasWidth:0,canvasHeight:0,left:0,top:0,right:0,bottom:0,viewMin:b,viewMax:b}),S=Object.freeze({a:1,b:0,c:0,d:1,e:0,f:0});var x=function(){function e(t){var n=this,a=t.scaleExtents,i=t.documentSize;Object(u.a)(this,e),this._canvas=null,this._view={scale:1,x:0,y:0},this._viewChangeListeners=new Set,this.setScale=function(e){n.setView({scale:e})},this.clampView=function(e){var t=e.scale,a=e.x,i=e.y,r=n.scaleExtents,o=r.min,s=r.max,c=n.documentSize,l=c.width,u=c.height,h=n.canvasRect||y,d=h.left,p=h.top,f=h.right-d,m=h.bottom-p,v=f/2,w=-(l*n._view.scale-f/2),g=m/2,b=-(u*n._view.scale-m/2);return{scale:Math.min(Math.max(t,o),s),x:Math.min(Math.max(a,w),v),y:Math.min(Math.max(i,b),g)}},this.resetView=function(){n.setView({scale:1,x:0,y:0})},this.setView=function(e){var t=n.clampView(Object(s.a)({},n._view,e||{})),a=n._view,i=a.scale,r=a.x,o=a.y;return t.scale===i&&t.x===r&&t.y===o||(n._view=t,n._viewChangeListeners.forEach(function(e){return e&&e(t)})),Object(s.a)({},n._view)},this.scaleAtClientPoint=function(e,t){var a=n.clientPointToViewPoint(t),i=n.clampView(Object(s.a)({},n._view,{scale:n._view.scale+e})),r=n.viewPointToClientPoint(a,i);return i.x=n._view.x-(r.clientX-t.clientX),i.y=n._view.y-(r.clientY-t.clientY),n.setView(i)},this.clientPointToViewPoint=function(e){var t=e.clientX,a=e.clientY,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._view,r=n.canvasRect||y,o=t-r.left,s=a-r.top;return{x:(o-i.x)/i.scale,y:(s-i.y)/i.scale,relativeClientX:o,relativeClientY:s}},this.viewPointToClientPoint=function(e){var t=e.x,a=e.y,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._view,r=n.canvasRect||y,o=r.left,s=r.top,c=t*i.scale+i.x,l=a*i.scale+i.y,u=c+o,h=l+s;return{clientX:u,clientY:h,relativeX:c,relativeY:l,x:u,y:h}},this.attachViewChangeListener=function(e){n._viewChangeListeners.add(e)},this._scaleExtents=a,this._documentSize=i}return Object(h.a)(e,[{key:"canvas",get:function(){return this._canvas},set:function(e){this._canvas=e,this.setView()}},{key:"scale",get:function(){return this._view.scale}},{key:"x",get:function(){return this._view.x},set:function(e){this.setView({x:e})}},{key:"y",get:function(){return this._view.y},set:function(e){this.setView({y:e})}},{key:"view",get:function(){return Object(s.a)({},this._view)}},{key:"scaleExtents",get:function(){return Object(s.a)({},this._scaleExtents)},set:function(e){var t=e.min,n=e.max;this._scaleExtents={min:t,max:n},this.setView()}},{key:"documentSize",get:function(){return Object(s.a)({},this._documentSize)},set:function(e){var t=e.width,n=e.height;this._documentSize={width:t,height:n},this.setView()}},{key:"transformMatrix",get:function(){return{a:this._view.scale,b:0,c:0,d:this._view.scale,e:this._view.x,f:this._view.y}}},{key:"canvasBounds",get:function(){if(this._canvas){var e=this._canvas.getBoundingClientRect(),t=e.left,n=e.top,a=e.right,i=e.bottom;return{viewMin:this.clientPointToViewPoint({clientX:t,clientY:n}),viewMax:this.clientPointToViewPoint({clientX:a,clientY:i}),left:t,top:n,right:a,bottom:i,canvasWidth:this._canvas.width,canvasHeight:this._canvas.height}}}},{key:"canvasRect",get:function(){return this.canvas?this.canvas.getBoundingClientRect():void 0}}]),e}();var O=function(e){e.preventDefault()},D=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=function(e,n){var a=n.props,i=a.disabled;a.enablePanAndZoom,a.mouseZoomFactor;return i?new C:t},this.handleDrawStart=function(e,t){return console.log(t.controlPan),t.props.disabled?new C:t.controlPan&&t.props.enablePanAndZoom?(new E).handleDrawStart(e,t):(new P).handleDrawStart(e,t)},this.handleDrawMove=function(e,n){if(n.props.disabled)return new C;var a=L(n.coordSystem,e),i=a.x,r=a.y;return n.lazy.update({x:i,y:r}),t},this.handleDrawEnd=function(e,n){return n.props.disabled?new C:t}},C=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=function(e,n){return n.props.disabled?t:(new D).handleMouseWheel(e,n)},this.handleDrawStart=function(e,n){return n.props.disabled?t:(new D).handleDrawStart(e,n)},this.handleDrawMove=function(e,n){return n.props.disabled?t:(new D).handleDrawMove(e,n)},this.handleDrawEnd=function(e,n){return n.props.disabled?t:(new D).handleDrawEnd(e,n)}},E=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(e,n){return e.preventDefault(),t.dragStart=k(e),t.panStart={x:n.coordSystem.x,y:n.coordSystem.y},t},this.handleDrawMove=function(e,n){e.preventDefault();var a=k(e),i=a.clientX,r=a.clientY,o=i-t.dragStart.clientX,s=r-t.dragStart.clientY;return n.coordSystem.setView({x:t.panStart.x+o,y:t.panStart.y+s}),t},this.handleDrawEnd=function(){return new D}},P=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(e,n){var a=n.props.enablePanAndZoom;return e.preventDefault(),e.touches&&e.touches.length&&a?a&&e.touches&&e.touches.length>=2?(new j).handleDrawStart(e,n):t.handleDrawMove(e,n):(new T).handleDrawStart(e,n)},this.handleDrawMove=function(e,n){if(e.preventDefault(),e.touches&&e.touches.length>=2)return(new j).handleDrawStart(e,n);var a=k(e);if((t.deferredPoints.push(a),(new Date).valueOf()-t.startTimestamp<250)&&(null===t.startClientPoint&&(t.startClientPoint=a),Math.abs(a.clientX-t.startClientPoint.clientX)+Math.abs(a.clientY-t.startClientPoint.clientY)<10))return t;return t.issueDeferredPoints(n)},this.handleDrawEnd=function(e,n){return t.issueDeferredPoints(n).handleDrawEnd(e,n)},this.issueDeferredPoints=function(e){for(var n=new T,a=0;a<t.deferredPoints.length;a++){var i=t.deferredPoints[a],r=new R(i);n=(0===a?n.handleDrawStart:n.handleDrawMove)(r,e)}return n},this.startClientPoint=null,this.startTimestamp=(new Date).valueOf(),this.deferredPoints=[]},j=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(e,n){return e.preventDefault(),!e.touches||e.touches.length<2?new D:(t.start=t.getTouchMetrics(e),t.panStart={x:n.coordSystem.x,y:n.coordSystem.y},t.scaleStart=n.coordSystem.scale,t)},this.handleDrawMove=function(e,n){if(e.preventDefault(),!e.touches||e.touches.length<2)return new D;var a=t.recentMetrics=t.getTouchMetrics(e),i=a.centroid,r=a.distance;if(Math.abs(r-t.start.distance)>=10)return new z(t).handleDrawMove(e,n);var o=i.clientX-t.start.centroid.clientX,s=i.clientY-t.start.centroid.clientY;return Math.abs(o)+Math.abs(s)>=10?new M(t).handleDrawMove(e,n):t},this.handleDrawEnd=function(){return new D},this.getTouchMetrics=function(e){var t=k(e.touches[0]),n=t.clientX,a=t.clientY,i=k(e.touches[1]),r=i.clientX,o=i.clientY,s=r-n,c=o-a;return{t1:{clientX:n,clientY:a},t2:{clientX:r,clientY:o},distance:Math.sqrt(s*s+c*c),centroid:{clientX:(n+r)/2,clientY:(a+o)/2}}}},M=function e(t){var n=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(){return n},this.handleDrawMove=function(e,t){if(e.preventDefault(),!e.touches||e.touches.length<2)return new D;var a=n.scaleOrPanState,i=a.recentMetrics=a.getTouchMetrics(e),r=i.centroid,o=(i.distance,r.clientX-a.start.centroid.clientX),s=r.clientY-a.start.centroid.clientY;return t.setView({x:a.panStart.x+o,y:a.panStart.y+s}),n},this.handleDrawEnd=function(){return new D},this.scaleOrPanState=t},z=function e(t){var n=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(){return n},this.handleDrawMove=function(e,t){if(e.preventDefault(),!e.touches||e.touches.length<2)return new D;var a=n.scaleOrPanState,i=a.recentMetrics=a.getTouchMetrics(e),r=i.centroid,o=i.distance,s=a.scaleStart*(o/a.start.distance)-t.coordSystem.scale;return t.coordSystem.scaleAtClientPoint(s,r),n},this.handleDrawEnd=function(){return new D},this.scaleOrPanState=t},T=function e(){var t=this;Object(u.a)(this,e),this.handleMouseWheel=O.bind(this),this.handleDrawStart=function(e,n){if(e.preventDefault(),e.touches&&e.touches.length){var a=L(n.coordSystem,e),i=a.x,r=a.y;n.lazy.update({x:i,y:r},{both:!0})}return t.handleDrawMove(e,n)},this.handleDrawMove=function(e,n){e.preventDefault();var a=L(n.coordSystem,e),i=a.x,r=a.y;n.lazy.update({x:i,y:r});var o=!n.lazy.isEnabled();return t.isDrawing&&!o||(n.points.push(n.clampPointToDocument(n.lazy.brush.toObject())),t.isDrawing=!0),n.points.push(n.clampPointToDocument(n.lazy.brush.toObject())),n.drawPoints({points:n.points,brushColor:n.props.brushColor,brushRadius:n.props.brushRadius}),t},this.handleDrawEnd=function(e,n){return e.preventDefault(),t.handleDrawMove(e,n),n.saveLine(),new D},this.isDrawing=!1},R=function e(t){var n=t.clientX,a=t.clientY;Object(u.a)(this,e),this.preventDefault=function(){},this.clientX=n,this.clientY=a,this.touches=[{clientX:n,clientY:a}]};function k(e){var t=e.clientX,n=e.clientY;return e.changedTouches&&e.changedTouches.length>0&&(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY),{clientX:t,clientY:n}}function L(e,t){return e.clientPointToViewPoint(k(t))}try{var I={get passive(){return!0,!1}};window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch(q){!1}function _(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function V(e,t){return{x:e.x+(t.x-e.x)/2,y:e.y+(t.y-e.y)/2}}var X={display:"block",position:"absolute"},Y=["grid","drawing","temp","interface"],A="brush",F=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).undo=function(){var e=[];n.lines.length?e=n.lines.slice(0,-1):n.erasedLines.length&&(e=n.erasedLines.pop()),n.clearExceptErasedLines(),n.simulateDrawingLines({lines:e,immediate:!0}),n.triggerOnChange()},n.eraseAll=function(){n.erasedLines.push(Object(l.a)(n.lines)),n.clearExceptErasedLines(),n.triggerOnChange()},n.clear=function(){n.erasedLines=[],n.clearExceptErasedLines(),n.resetView()},n.resetView=function(){return n.coordSystem.resetView()},n.setView=function(e){return n.coordSystem.setView(e)},n.getSaveData=function(){return JSON.stringify({lines:n.lines,width:n.props.canvasWidth,height:n.props.canvasHeight})},n.getDataURL=function(e,t,a){var i=n.canvas.drawing,r=i.getContext("2d"),o=i.width,s=i.height,c=r.getImageData(0,0,o,s),l=r.globalCompositeOperation;if(r.globalCompositeOperation="destination-over",t){if(!n.props.imgSrc)return"Background image source not set";n.drawImage()}else null!=a&&(r.fillStyle=a,r.fillRect(0,0,o,s));e||(e="png");var u=i.toDataURL("image/".concat(e));return r.clearRect(0,0,o,s),r.putImageData(c,0,0),r.globalCompositeOperation=l,u},n.loadSaveData=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.props.immediateLoading;if("string"!==typeof e)throw new Error("saveData needs to be of type string!");var a=JSON.parse(e),i=a.lines,r=a.width,o=a.height;if(!i||"function"!==typeof i.push)throw new Error("saveData.lines needs to be an array!");if(n.clear(),r===n.props.canvasWidth&&o===n.props.canvasHeight)n.simulateDrawingLines({lines:i,immediate:t});else{var c=n.props.canvasWidth/r,l=n.props.canvasHeight/o,u=(c+l)/2;n.simulateDrawingLines({lines:i.map(function(e){return Object(s.a)({},e,{points:e.points.map(function(e){return{x:e.x*c,y:e.y*l}}),brushRadius:e.brushRadius*u})}),immediate:t})}},n.componentWillUnmount=function(){n.canvasObserver.unobserve(n.canvasContainer)},n.CustomKeyDown=function(e){console.log("\ud0a4",e.key),"z"===e.key&&(console.log("undo"),n.undo()),"c"===e.key&&(console.log("erase"),A="erase"!=A?"erase":"brush"),"x"===e.key&&(A="shadow"!=A?"shadow":"brush")},n.handleWheel=function(e){n.interactionSM=n.interactionSM.handleMouseWheel(e,Object(m.a)(Object(m.a)(n)))},n.handleDrawStart=function(e){"all"!=n.props.allowOnlyPointerType&&e.pointerType!=n.props.allowOnlyPointerType||(n.interactionSM=n.interactionSM.handleDrawStart(e,Object(m.a)(Object(m.a)(n))),n.mouseHasMoved=!0)},n.handleDrawMove=function(e){"all"!=n.props.allowOnlyPointerType&&e.pointerType!=n.props.allowOnlyPointerType||(n.interactionSM=n.interactionSM.handleDrawMove(e,Object(m.a)(Object(m.a)(n))),n.mouseHasMoved=!0)},n.handleDrawEnd=function(e){"all"!=n.props.allowOnlyPointerType&&e.pointerType!=n.props.allowOnlyPointerType||(n.interactionSM=n.interactionSM.handleDrawEnd(e,Object(m.a)(Object(m.a)(n))),n.mouseHasMoved=!0)},n.applyView=function(){if(n.ctx.drawing&&(Y.map(function(e){return n.ctx[e]}).forEach(function(e){n.clearWindow(e);var t=n.coordSystem.transformMatrix;e.setTransform(t.a,t.b,t.c,t.d,t.e,t.f)}),!n.deferRedrawOnViewChange)){n.drawGrid(n.ctx.grid),n.redrawImage(),n.loop({once:!0});var e=n.lines;n.lines=[],n.simulateDrawingLines({lines:e,immediate:!0})}},n.handleCanvasResize=function(e){var t=n.getSaveData();n.deferRedrawOnViewChange=!0;try{var a,i=_(e);try{for(i.s();!(a=i.n()).done;){var r=a.value.contentRect,o=r.width,s=r.height;n.setCanvasSize(n.canvas.interface,o,s),n.setCanvasSize(n.canvas.drawing,o,s),n.setCanvasSize(n.canvas.temp,o,s),n.setCanvasSize(n.canvas.grid,o,s),n.coordSystem.documentSize={width:o,height:s},n.drawGrid(n.ctx.grid),n.drawImage(),n.loop({once:!0})}}catch(c){i.e(c)}finally{i.f()}n.loadSaveData(t,!0)}finally{n.deferRedrawOnViewChange=!1}},n.clampPointToDocument=function(e){return n.props.clampLinesToDocument?{x:Math.max(Math.min(e.x,n.props.canvasWidth),0),y:Math.max(Math.min(e.y,n.props.canvasHeight),0)}:e},n.redrawImage=function(){n.image&&n.image.complete&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ctx,n=e.img,a=e.x,i=e.y,r=e.w,o=e.h,s=e.offsetX,c=e.offsetY;"number"!==typeof a&&(a=0),"number"!==typeof i&&(i=0),"number"!==typeof r&&(r=t.canvas.width),"number"!==typeof o&&(o=t.canvas.height),"number"!==typeof s&&(s=.5),"number"!==typeof c&&(c=.5),s<0&&(s=0),c<0&&(c=0),s>1&&(s=1),c>1&&(c=1);var l,u,h,d,p=n.width,f=n.height,m=Math.min(r/p,o/f),v=p*m,w=f*m,g=1;v<r&&(g=r/v),Math.abs(g-1)<1e-14&&w<o&&(g=o/w),(l=(p-(h=p/((v*=g)/r)))*s)<0&&(l=0),(u=(f-(d=f/((w*=g)/o)))*c)<0&&(u=0),h>p&&(h=p),d>f&&(d=f),t.drawImage(n,l,u,h,d,a,i,r,o)}({ctx:n.ctx.grid,img:n.image})},n.simulateDrawingLines=function(e){var t=e.lines,a=e.immediate,i=0,r=a?0:n.props.loadTimeOffset;t.forEach(function(e){var t=e.points,o=e.brushColor,s=e.brushRadius;if(a)return n.drawPoints({points:t,brushColor:o,brushRadius:s}),n.points=t,void n.saveLine({brushColor:o,brushRadius:s});for(var c=function(e){i+=r,window.setTimeout(function(){n.drawPoints({points:t.slice(0,e+1),brushColor:o,brushRadius:s})},i)},l=1;l<t.length;l++)c(l);i+=r,window.setTimeout(function(){n.points=t,n.saveLine({brushColor:o,brushRadius:s})},i)})},n.setCanvasSize=function(e,t,n){e.width=t,e.height=n,e.style.width=t,e.style.height=n},n.drawPoints=function(e){var t=e.points,a=e.brushColor,i=e.brushRadius;n.ctx.temp.lineJoin="round",n.ctx.temp.lineCap="round",n.ctx.temp.strokeStyle="erase"===a?"#dbb7bb":a,n.ctx.drawing.globalCompositeOperation="erase"===a?"destination-out":"shadow"===a?"destination-over":"source-over",n.clearWindow(n.ctx.temp),n.ctx.temp.lineWidth=2*i;var r=t[0],o=t[1];n.ctx.temp.moveTo(o.x,o.y),n.ctx.temp.beginPath();for(var s=1,c=t.length;s<c;s++){var l=V(r,o);n.ctx.temp.quadraticCurveTo(r.x,r.y,l.x,l.y),r=t[s],o=t[s+1]}n.ctx.temp.lineTo(r.x,r.y),"shadow"==a?(n.ctx.temp.closePath(),n.ctx.temp.fillStyle="#DADADA",n.ctx.temp.fill()):n.ctx.temp.stroke()},n.saveLine=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.brushColor,a=e.brushRadius;n.points.length<2||(n.lines.push({points:Object(l.a)(n.points),brushColor:t||n.props.brushColor,brushRadius:a||n.props.brushRadius}),n.points.length=0,n.inClientSpace([n.ctx.drawing,n.ctx.temp],function(){n.ctx.drawing.drawImage(n.canvas.temp,0,0,n.canvas.drawing.width,n.canvas.drawing.height)}),n.clearWindow(n.ctx.temp),n.triggerOnChange())},n.triggerOnChange=function(){n.props.onChange&&n.props.onChange(Object(m.a)(Object(m.a)(n)))},n.clearWindow=function(e){n.inClientSpace([e],function(){return e.clearRect(0,0,e.canvas.width,e.canvas.height)})},n.clearExceptErasedLines=function(){n.lines=[],n.valuesChanged=!0,n.clearWindow(n.ctx.drawing),n.clearWindow(n.ctx.temp)},n.loop=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).once,t=void 0!==e&&e;if(n.mouseHasMoved||n.valuesChanged){var a=n.lazy.getPointerCoordinates(),i=n.lazy.getBrushCoordinates();n.drawInterface(n.ctx.interface,a,i),n.mouseHasMoved=!1,n.valuesChanged=!1}t||window.requestAnimationFrame(function(){n.loop()})},n.inClientSpace=function(e,t){e.forEach(function(e){e.save(),e.setTransform(S.a,S.b,S.c,S.d,S.e,S.f)});try{t()}finally{e.forEach(function(e){return e.restore()})}},n.drawImage=function(){n.props.imgSrc&&(n.image=new Image,n.image.crossOrigin="anonymous",n.image.onload=n.redrawImage,n.image.src=n.props.imgSrc)},n.drawGrid=function(e){if(!n.props.hideGrid){n.clearWindow(e);var t=n.coordSystem.canvasBounds,a=t.viewMin,i=t.viewMax,r=25*Math.floor(a.x/25-1),o=25*Math.floor(a.y/25-1),s=i.x+25,c=i.y+25;if(e.beginPath(),e.setLineDash([5,1]),e.setLineDash([]),e.strokeStyle=n.props.gridColor,e.lineWidth=n.props.gridLineWidth,!n.props.hideGridX){for(var l=r,u=n.props.gridSizeX;l<s;)l+=u,e.moveTo(l,o),e.lineTo(l,c);e.stroke()}if(!n.props.hideGridY){for(var h=o,d=n.props.gridSizeY;h<c;)h+=d,e.moveTo(r,h),e.lineTo(s,h);e.stroke()}}},n.drawInterface=function(e,t,a){n.props.hideInterface||(n.clearWindow(e),e.beginPath(),e.fillStyle=n.props.brushColor,e.arc(a.x,a.y,n.props.brushRadius,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.fillStyle=n.props.catenaryColor,e.arc(t.x,t.y,2,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.fillStyle=n.props.catenaryColor,e.arc(a.x,a.y,1,0,2*Math.PI,!0),e.fill())},n.controlPan=!1,n.state={controlPan2:!1,zoomscale:0},n.canvas={},n.ctx={},n.catenary=new w.Catenary,n.points=[],n.lines=[],n.erasedLines=[],n.mouseHasMoved=!0,n.valuesChanged=!0,n.isDrawing=!1,n.isPressing=!1,n.deferRedrawOnViewChange=!1,n.interactionSM=new D,n.coordSystem=new x({scaleExtents:e.zoomExtents,documentSize:{width:e.canvasWidth,height:e.canvasHeight}}),n.coordSystem.attachViewChangeListener(n.applyView.bind(Object(m.a)(Object(m.a)(n)))),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazy=new v.a({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:!0,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}}),this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.canvasObserver=new g.a(function(t,n){return e.handleCanvasResize(t,n)}),this.canvasObserver.observe(this.canvasContainer),this.drawImage(),this.loop(),window.setTimeout(function(){var t=window.innerWidth/2,n=window.innerHeight/2;e.lazy.update({x:t-e.chainLength/4,y:n},{both:!0}),e.lazy.update({x:t+e.chainLength/4,y:n},{both:!1}),e.mouseHasMoved=!0,e.valuesChanged=!0,e.clearExceptErasedLines(),e.props.saveData&&e.loadSaveData(e.props.saveData)},100)}},{key:"componentDidUpdate",value:function(e){e.lazyRadius!==this.props.lazyRadius&&(this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio)),e.saveData!==this.props.saveData&&this.loadSaveData(this.props.saveData),JSON.stringify(e)!==JSON.stringify(this.props)&&(this.valuesChanged=!0),e.imgSrc!==this.props.imgSrc&&this.drawImage(),this.coordSystem.scaleExtents=this.props.zoomExtents,this.props.enablePanAndZoom||this.coordSystem.resetView(),e.imgSrc,this.props.imgSrc}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:this.props.className,style:Object(s.a)({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function(t){t&&(e.canvasContainer=t)}},Y.map(function(t){var n="interface"===t,a=X;return a="temp"===t?Object(s.a)({},a,{width:e.props.canvasWidth,opacity:"erase"===e.props.brushColor?"70%":"100%",zIndex:"shadow"===e.props.brushColor?0:1}):Object(s.a)({},a,{zIndex:1}),i.a.createElement("canvas",{key:t,ref:function(a){a&&(e.canvas[t]=a,e.ctx[t]=a.getContext("2d"),n&&(e.coordSystem.canvas=a))},style:Object(s.a)({},a),onPointerDown:n?e.handleDrawStart:void 0,onPointerMove:n?e.handleDrawMove:void 0,onPointerUp:n?e.handleDrawEnd:void 0,onPointerOut:n?e.handleDrawEnd:void 0})})),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){e.controlPan=!e.controlPan,console.log(e.controlPan),e.setState({controlPan2:!e.state.controlPan2})}},this.state.controlPan2?"Pan on":"Pan off"),i.a.createElement("button",{onClick:function(){e.resetView()}},"reset"),i.a.createElement("button",{onClick:function(){e.setState({zoomscale:e.state.zoomscale-.1}),e.coordSystem.scaleAtClientPoint(.1,{clientX:600,clientY:300})}},"zoom+"),i.a.createElement("button",{onClick:function(){e.setState({zoomscale:e.state.zoomscale+.1}),e.coordSystem.scaleAtClientPoint(-.1,{clientX:600,clientY:300})}},"zoom-")))}}]),t}(a.PureComponent);F.defaultProps={onChange:null,loadTimeOffset:5,lazyRadius:12,allowOnlyPointerType:"pen",brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:!1,canvasWidth:400,canvasHeight:400,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1,hideInterface:!1,gridSizeX:25,gridSizeY:25,gridLineWidth:.5,hideGridX:!1,hideGridY:!1,enablePanAndZoom:!0,PanControl:!1,mouseZoomFactor:.01,zoomExtents:{min:.33,max:3},clampLinesToDocument:!1,refreshBackgroundImage:!1};var H=n(21),B=n(11),U=n.n(B),G=n(13),J="862685370563-4t7105h84itoh08cj5kbchvafjb3a7hi.apps.googleusercontent.com",N="https://www.googleapis.com/auth/drive";var Z=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=(t[0],t[1],Object(a.useState)(null)),r=Object(c.a)(n,2),o=r[0],l=r[1],u=Object(a.useRef)(),h=Object(a.useState)(!1),d=Object(c.a)(h,2),p=d[0],f=(d[1],Object(a.useState)(60)),m=Object(c.a)(f,2),v=m[0],w=(m[1],Object(a.useState)(3)),g=Object(c.a)(w,2),b=g[0],y=g[1],S=Object(a.useState)(0),x=Object(c.a)(S,2),O=(x[0],x[1],Object(a.useState)(0)),D=Object(c.a)(O,2),C=(D[0],D[1],Object(a.useRef)(v),Object(a.useRef)(null),Object(a.useState)({croquisTimeDB:60,brushRadius:.6,lazyRadius:1,eraseRadius:10,width:600,height:600})),E=Object(c.a)(C,2),P=E[0],j=E[1],M=Object(a.useState)(!1),z=Object(c.a)(M,2),T=(z[0],z[1],Object(a.useState)("#444")),R=Object(c.a)(T,2),k=R[0],L=R[1];Object(a.useEffect)(function(){var e=setTimeout(function(){I()},3e3);return function(){return clearTimeout(e)}},[]),Object(a.useEffect)(function(){G.a.load("client:auth2",function(){G.a.client.init({clientId:J,scope:N})})},[]),Object(a.useEffect)(function(){var e=localStorage.getItem("drsettings");e&&j(JSON.parse(e))},[]),Object(a.useEffect)(function(){localStorage.setItem("drsettings",JSON.stringify(P))},[P]);var I=function(){void 0==localStorage.getItem("parent_folder")&&fetch("https://www.googleapis.com/drive/v3/files?q=name%3D%27croquis%27%20and%20mimeType%3D%27application%2Fvnd.google-apps.folder%27&fields=files(id)",{headers:{Authorization:"Bearer "+window.gapi.auth.getToken().access_token,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){e.files[0]?(console.log("get drive folder"),localStorage.setItem("parent_folder",e.files[0].id)):(_(),console.log("create drive folder"))}).catch(function(e){return console.error(e)})},_=function(){fetch("https://www.googleapis.com/drive/v3/files",{method:"POST",headers:{Authorization:"Bearer "+window.gapi.auth.getToken().access_token,"Content-Type":"application/json"},body:JSON.stringify({name:"croquis",mimeType:"application/vnd.google-apps.folder"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("parent_folder",e.id)})},W=function(e){var t=e.replace(/=+$/,""),n="";if(t.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,i=0,r=0,o=0;a=t.charAt(o++);~a&&(r=i%4?64*r+a:a,i++%4)?n+=String.fromCharCode(255&r>>(-2*i&6)):0)a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return n},V=function(e,t){var n={name:t+".png",parents:[localStorage.getItem("parent_folder")]},a=new FormData;a.append("metadata",new Blob([JSON.stringify(n)],{type:"application/json"})),a.append("file",function(e){for(var t=W(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),i=new Uint8Array(a),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return new Blob([a],{type:n})}(e)),fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",headers:{Authorization:"Bearer "+window.gapi.auth.getToken().access_token},body:a}).then(function(e){return e.json()}).then(function(e){console.log(e)})},X=function(){var e=new Image;e.src=u.current.getDataURL(),e.onload=function(){var t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.width,t.height=e.height,n.drawImage(e,0,0);for(var a=n.getImageData(0,0,t.width,t.height),i=a.height,r=0,o=a.width,s=0,c=0;c<a.height;c++)for(var u=0;u<a.width;u++){var h=4*(c*a.width+u);a.data[h+3]>0&&(c<i&&(i=c),c>r&&(r=c),u<o&&(o=u),u>s&&(s=u))}var d=document.createElement("canvas"),p=d.getContext("2d"),f=s-o+1,m=r-i+1;d.width=f,d.height=m,p.drawImage(t,o,i,f,m,0,0,f,m),l(d.toDataURL());var v=new Date,w={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},g=v.toLocaleString(Intl.DateTimeFormat().resolvedOptions().locale,w);V(d.toDataURL(),g)}},Y=function(){u.current.undo()},A=function(){L("erase")},Z=function(){L("shadow")},q=function(){L("#444")},K=function(e){console.log(e)};return i.a.createElement("div",null,i.a.createElement(H.a,{keyName:"ctrl+z,c,x",onKeyDown:function(e,t,n){"ctrl+z"==e&&Y(),"c"==e&&("erase"!=k?A():"erase"==k&&q()),"x"==e&&("shadow"!=k?Z():"shadow"==k&&q())}}),i.a.createElement("div",null,"- "),i.a.createElement("div",{style:{float:"left"}},i.a.createElement("div",null,i.a.createElement("div",{style:{float:"right"}},i.a.createElement("button",{onClick:function(e){X(),u.current.clear()}},"Save&Clear"),i.a.createElement("button",{onClick:X},"Save"))),i.a.createElement("div",null,i.a.createElement("div",{style:{float:"right"}},i.a.createElement("label",null,"Lazy:"),i.a.createElement("input",{type:"number",min:"0",max:"100",style:{width:"30px"},value:P.lazyRadius,onChange:function(e){return j(function(t){return Object(s.a)({},t,{lazyRadius:e.target.value})})}})),i.a.createElement("div",{style:{float:"right"}},"erase"==k?i.a.createElement(i.a.Fragment,null,i.a.createElement("label",null,"Erase Size:"),i.a.createElement("input",{type:"number",min:"1",max:"100",style:{width:"35px"},value:P.eraseRadius,onChange:function(e){return j(function(t){return Object(s.a)({},t,{eraseRadius:e.target.value})})}})):i.a.createElement(i.a.Fragment,null,i.a.createElement("label",null,"Brush Size:"),i.a.createElement("input",{type:"number",min:"1",max:"100",style:{width:"35px"},value:P.brushRadius,onChange:function(e){return j(function(t){return Object(s.a)({},t,{brushRadius:e.target.value})})}}))),i.a.createElement("div",{style:{float:"right"}},i.a.createElement("button",{onClick:function(){window.confirm("wanna clear this?")&&u.current.clear()}},"Clear")),i.a.createElement("div",{style:{float:"left"}},p?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{style:{padding:"15px"},onClick:Y},"\u25c0")):i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:Y},"\u25c0"))),i.a.createElement("div",{style:{float:"left"}},"erase"==k?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:q},"brush")):i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:A},"erase"))),i.a.createElement("div",{style:{float:"left"}},"shadow"==k?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:q},"brush")):i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:Z},"shadow")),k)),i.a.createElement("div",{style:{float:"right"}},i.a.createElement(F,{canvasWidth:parseInt(P.width),canvasHeight:parseInt(P.height),brushRadius:"erase"==k?P.eraseRadius:P.brushRadius,lazyRadius:P.lazyRadius,ref:u,brushColor:k,allowOnlyPointerType:["all","mouse","touch","pen"][b]}))),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",onChange:function(e){e.target.checked?y(3):y(0)},defaultChecked:!0}),"Use pen"),i.a.createElement("div",null,i.a.createElement("label",null,"Canvas Size:"),i.a.createElement("input",{type:"number",min:"1",style:{width:"45px"},value:P.width,onChange:function(e){return j(function(t){return Object(s.a)({},t,{width:e.target.value})})}}),"x",i.a.createElement("input",{type:"number",min:"1",style:{width:"45px"},value:P.height,onChange:function(e){return j(function(t){return Object(s.a)({},t,{height:e.target.value})})}})),i.a.createElement("p",null,"ctrl+z : undo"),i.a.createElement("p",null,"x : shadow"),i.a.createElement("p",null," c : erase"),i.a.createElement(U.a,{clientId:J,buttonText:"Login",onSuccess:K,onFailure:K,isSignedIn:!0}),i.a.createElement(B.GoogleLogout,{clientId:J,buttonText:"Logout",onLogoutSuccess:function(e){console.log("SUCESS LOG OUT")},onFailure:function(e){console.log("Fail LOG OUT")}}),o&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Image:"),i.a.createElement("img",{src:o,alt:"Cropped"})))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.7eac1c68.chunk.js.map