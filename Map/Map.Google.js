﻿define([
  'Event',
  'Map/Map',
  'Util/Util'
], function(Event, Map, Util) {
  /**
   * Google Maps MarkerWithLabel
   */
  eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 m(a){2.3=a;2.8=V.1E("1u");2.8.4.C="I: 1m; J: 1g;";2.k=V.1E("1u");2.k.4.C=2.8.4.C}m.l=E 6.5.22();m.l.1Y=7(){n c=2;n h=t;n f=t;n j;n b;n d,K;n i;n g=7(e){p(e.1v){e.1v()}e.2b=u;p(e.1t){e.1t()}};2.1s().24.G(2.8);2.1s().20.G(2.k);2.11=[6.5.9.w(V,"1o",7(a){p(f){a.s=j;i=u;6.5.9.r(c.3,"1n",a)}h=t;6.5.9.r(c.3,"1o",a)}),6.5.9.o(c.3.1P(),"1N",7(a){p(h&&c.3.1M()){a.s=E 6.5.1J(a.s.U()-d,a.s.T()-K);j=a.s;p(f){6.5.9.r(c.3,"1i",a)}F{d=a.s.U()-c.3.Z().U();K=a.s.T()-c.3.Z().T();6.5.9.r(c.3,"1e",a)}}}),6.5.9.w(2.k,"1d",7(e){c.k.4.1c="2i";6.5.9.r(c.3,"1d",e)}),6.5.9.w(2.k,"1D",7(e){c.k.4.1c=c.3.2g();6.5.9.r(c.3,"1D",e)}),6.5.9.w(2.k,"1C",7(e){p(i){i=t}F{g(e);6.5.9.r(c.3,"1C",e)}}),6.5.9.w(2.k,"1A",7(e){g(e);6.5.9.r(c.3,"1A",e)}),6.5.9.w(2.k,"1z",7(e){h=u;f=t;d=0;K=0;g(e);6.5.9.r(c.3,"1z",e)}),6.5.9.o(2.3,"1e",7(a){f=u;b=c.3.1b()}),6.5.9.o(2.3,"1i",7(a){c.3.O(a.s);c.3.D(2a)}),6.5.9.o(2.3,"1n",7(a){f=t;c.3.D(b)}),6.5.9.o(2.3,"29",7(){c.O()}),6.5.9.o(2.3,"28",7(){c.D()}),6.5.9.o(2.3,"27",7(){c.N()}),6.5.9.o(2.3,"26",7(){c.N()}),6.5.9.o(2.3,"25",7(){c.16()}),6.5.9.o(2.3,"23",7(){c.15()}),6.5.9.o(2.3,"21",7(){c.13()}),6.5.9.o(2.3,"1Z",7(){c.L()}),6.5.9.o(2.3,"1X",7(){c.L()})]};m.l.1W=7(){n i;2.8.1r.1q(2.8);2.k.1r.1q(2.k);1p(i=0;i<2.11.1V;i++){6.5.9.1U(2.11[i])}};m.l.1T=7(){2.15();2.16();2.L()};m.l.15=7(){n a=2.3.z("Y");p(H a.1S==="P"){2.8.W=a;2.k.W=2.8.W}F{2.8.G(a);a=a.1R(u);2.k.G(a)}};m.l.16=7(){2.k.1Q=2.3.1O()||""};m.l.L=7(){n i,q;2.8.S=2.3.z("R");2.k.S=2.8.S;2.8.4.C="";2.k.4.C="";q=2.3.z("q");1p(i 1L q){p(q.1K(i)){2.8.4[i]=q[i];2.k.4[i]=q[i]}}2.1l()};m.l.1l=7(){2.8.4.I="1m";2.8.4.J="1g";p(H 2.8.4.B!=="P"){2.8.4.1k="1j(B="+(2.8.4.B*1I)+")"}2.k.4.I=2.8.4.I;2.k.4.J=2.8.4.J;2.k.4.B=0.1H;2.k.4.1k="1j(B=1)";2.13();2.O();2.N()};m.l.13=7(){n a=2.3.z("X");2.8.4.1h=-a.x+"v";2.8.4.1f=-a.y+"v";2.k.4.1h=-a.x+"v";2.k.4.1f=-a.y+"v"};m.l.O=7(){n a=2.1G().1F(2.3.Z());2.8.4.12=a.x+"v";2.8.4.M=a.y+"v";2.k.4.12=2.8.4.12;2.k.4.M=2.8.4.M;2.D()};m.l.D=7(){n a=(2.3.z("14")?-1:+1);p(H 2.3.1b()==="P"){2.8.4.A=2h(2.8.4.M,10)+a;2.k.4.A=2.8.4.A}F{2.8.4.A=2.3.1b()+a;2.k.4.A=2.8.4.A}};m.l.N=7(){p(2.3.z("1a")){2.8.4.Q=2.3.2f()?"2e":"1B"}F{2.8.4.Q="1B"}2.k.4.Q=2.8.4.Q};7 19(a){a=a||{};a.Y=a.Y||"";a.X=a.X||E 6.5.2d(0,0);a.R=a.R||"2c";a.q=a.q||{};a.14=a.14||t;p(H a.1a==="P"){a.1a=u}2.1y=E m(2);6.5.18.1x(2,1w)}19.l=E 6.5.18();19.l.17=7(a){6.5.18.l.17.1x(2,1w);2.1y.17(a)};',62,143,'||this|marker_|style|maps|google|function|labelDiv_|event|||||||||||eventDiv_|prototype|MarkerLabel_|var|addListener|if|labelStyle|trigger|latLng|false|true|px|addDomListener|||get|zIndex|opacity|cssText|setZIndex|new|else|appendChild|typeof|position|overflow|cLngOffset|setStyles|top|setVisible|setPosition|undefined|display|labelClass|className|lng|lat|document|innerHTML|labelAnchor|labelContent|getPosition||listeners_|left|setAnchor|labelInBackground|setContent|setTitle|setMap|Marker|MarkerWithLabel|labelVisible|getZIndex|cursor|mouseover|dragstart|marginTop|hidden|marginLeft|drag|alpha|filter|setMandatoryStyles|absolute|dragend|mouseup|for|removeChild|parentNode|getPanes|stopPropagation|div|preventDefault|arguments|apply|label|mousedown|dblclick|none|click|mouseout|createElement|fromLatLngToDivPixel|getProjection|01|100|LatLng|hasOwnProperty|in|getDraggable|mousemove|getTitle|getMap|title|cloneNode|nodeType|draw|removeListener|length|onRemove|labelstyle_changed|onAdd|labelclass_changed|overlayMouseTarget|labelanchor_changed|OverlayView|labelcontent_changed|overlayImage|title_changed|labelvisible_changed|visible_changed|zindex_changed|position_changed|1000000|cancelBubble|markerLabels|Point|block|getVisible|getCursor|parseInt|pointer'.split('|'),0,{}))
  /**
   * wax - 7.0.0dev13 - v6.0.4-142-ga157a2d
   */
  wax.g={};wax.g.bwdetect=function(a,c){c=c||{};var e=c.png||".png128",d=c.jpg||".jpg70";if(!a.mapTypes["mb-low"]){for(var b=a.mapTypes.mb,f={tiles:[],scheme:b.options.scheme,blankImage:b.options.blankImage,minzoom:b.minZoom,maxzoom:b.maxZoom,name:b.name,description:b.description},g=0;g<b.options.tiles.length;g++)f.tiles.push(b.options.tiles[g].replace(".png",e).replace(".jpg",d));m.mapTypes.set("mb-low",new wax.g.connector(f))}return wax.bwdetect(c,function(c){a.setMapTypeId(c?"mb":"mb-low")})};wax.g.interaction=function(){function a(){e=!0}var c,e=!1,d,b=null,f=null;return wax.interaction().attach(function(c){if(!arguments.length)return d;d=c;f=google.maps.event.addListener(d,"idle",a);b=google.maps.event.addListener(d,"tileloaded",a)}).detach(function(){b&&google.maps.event.removeListener(b);f&&google.maps.event.removeListener(f)}).parent(function(){return d.getDiv()}).grid(function(){if(e||!c){wax.u.offset(d.getDiv());var a=d.getZoom();c=[];var b=function(b){if(b.interactive)for(var d in b.cache)if(d.split("/")[0]==a){var e=wax.u.offset(b.cache[d]);c.push([e.top,e.left,b.cache[d]])}},f;for(f in d.mapTypes)b(d.mapTypes[f]);d.overlayMapTypes.forEach(b)}return c})};wax.g.connector=function(a){a=a||{};this.options={tiles:a.tiles,scheme:a.scheme||"xyz",blankImage:a.blankImage||"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="};this.minZoom=a.minzoom||0;this.maxZoom=a.maxzoom||22;this.name=a.name||"";this.description=a.description||"";this.interactive=!0;this.tileSize=new google.maps.Size(256,256);this.cache={}};wax.g.connector.prototype.getTile=function(a,c){var e=c+"/"+a.x+"/"+a.y;if(!this.cache[e]){var d=this.cache[e]=new Image(256,256);this.cache[e].src=this.getTileUrl(a,c);this.cache[e].setAttribute("gTileKey",e);this.cache[e].onerror=function(){d.style.display="none"}}return this.cache[e]};wax.g.connector.prototype.releaseTile=function(a){var c=a.getAttribute("gTileKey");this.cache[c]&&delete this.cache[c];a.parentNode&&a.parentNode.removeChild(a)};wax.g.connector.prototype.getTileUrl=function(a,c){var e=Math.pow(2,c),d="tms"===this.options.scheme?e-1-a.y:a.y,b=a.x%e,b=0>b?a.x%e+e:b;return 0>d?this.options.blankImage:this.options.tiles[parseInt(b+d,10)%this.options.tiles.length].replace(/\{z\}/g,c).replace(/\{x\}/g,b).replace(/\{y\}/g,d)};
  /**
   * CartoDb - v0.54
   */
  var CartoDB=CartoDB||{};if("undefined"===typeof google.maps.CartoDBLayer){var CartoDBLayer=function(a){this.extend(CartoDBLayer,google.maps.OverlayView);this.options={query:"SELECT * FROM {{table_name}}",opacity:1,auto_bound:!1,debug:!1,visible:!0,added:!1,loaded:null,loading:null,layer_order:"top",tiler_domain:"cartodb.com",tiler_port:"80",tiler_protocol:"http",sql_domain:"cartodb.com",sql_port:"80",sql_protocol:"http"};this.options=this._extend({},this.options,a);this.setOptions=function(b){google.maps.OverlayView.prototype.setOptions.call(this,{});this._setOptions(b)};if(!this.options.table_name||!this.options.map){if(this.options.debug)throw"cartodb-gmapsv3 needs at least a CartoDB table name and the gmapsv3 map object :(";}else this.initialize(),this.setMap(a.map)};CartoDBLayer.prototype.extend=function(a,b){return function(b){for(var a in b.prototype)this.prototype[a]=b.prototype[a];return this}.apply(a,[b])};CartoDBLayer.prototype.initialize=function(){this.options.auto_bound&&this.setBounds();this.options.map_style&&this._setMapStyle()};CartoDBLayer.prototype.draw=function(){};CartoDBLayer.prototype.onAdd=function(){this._addInteraction();this.options.added=!0;google.maps.event.trigger(this,"added")};CartoDBLayer.prototype.onRemove=function(){this._remove();this.loaded&&google.maps.event.removeListener(this.loaded);this.options.added=!1;google.maps.event.trigger(this,"removed")};CartoDBLayer.prototype.setOpacity=function(a){if(this.options.added)if(isNaN(a)||1<a||0>a){if(this.options.debug)throw a+" is not a valid value";}else this.options.opacity=a,this._update();else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.setQuery=function(a,b){if(this.options.added)if(isNaN(a))b&&this.setBounds(a),this.options.query=a,this._update();else{if(this.options.debug)throw a+" is not a valid query";}else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.setStyle=function(a){if(this.options.added)if(isNaN(a))this.options.tile_style=a,this._update();else{if(this.options.debug)throw a+" is not a valid style";}else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.setInteractivity=function(a){if(this.options.added)if(isNaN(a))this.options.interactivity=a,this._update();else{if(this.options.debug)throw a+" is not a valid setInteractivity value";}else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.setLayerOrder=function(a){if(this.options.added)if(isNaN(a)&&"top"!=a&&"bottom"!=a){if(this.options.debug)throw a+" is not a valid layer position";}else this.layer.gmaps_index&&delete this.layer.gmaps_index,this.options.layer_order=a,this._setLayerOrder();else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.setInteraction=function(a){if(this.options.added)if(!1!==a&&!0!==a){if(this.options.debug)throw a+" is not a valid setInteraction value";}else{if(this.interaction)if(a){var b=this;this.interaction.on("on",function(a){b._bindWaxOnEvents(b.options.map,a)});this.interaction.on("off",function(){b._bindWaxOffEvents()})}else this.interaction.off("on"),this.interaction.off("off")}else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype._setOptions=function(a){if(this.options.added)if("object"!=typeof a||a.length){if(this.options.debug)throw a+" options has to be an object";}else this.options=this._extend({},this.options,a),this._update();else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.hide=function(){if(this.options.added)if(this.options.visible)this.options.visible=!1,this.options.before=this.options.opacity,this.setOpacity(0),this.setInteraction(!1),google.maps.event.trigger(this,"hidden");else{if(this.options.debug)throw"the layer is already hidden";}else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.show=function(){if(this.options.added)if(this.options.visible){if(this.options.debug)throw"the layer is already shown";}else this.options.visible=!0,this.setOpacity(this.options.before),delete this.options.before,this.setInteraction(!0),google.maps.event.trigger(this,"shown");else if(this.options.debug)throw"the layer is not still added to the map";};CartoDBLayer.prototype.isVisible=function(){return this.options.visible};CartoDBLayer.prototype.isAdded=function(){return this.options.added};CartoDBLayer.prototype._remove=function(){this.setInteraction(!1);var a=this;this.options.map.overlayMapTypes.forEach(function(b,d){b==a.layer&&a.options.map.overlayMapTypes.removeAt(d)})};CartoDBLayer.prototype._update=function(){this._remove();this._addInteraction();google.maps.event.trigger(this,"updated")};CartoDBLayer.prototype.setBounds=function(a){var b=this;a||(a=this.options.query);reqwest({url:this._generateCoreUrl("sql")+"/api/v2/sql/?q="+escape("SELECT ST_XMin(ST_Extent(the_geom)) as minx,ST_YMin(ST_Extent(the_geom)) as miny,ST_XMax(ST_Extent(the_geom)) as maxx,ST_YMax(ST_Extent(the_geom)) as maxy from ("+a.replace(/\{\{table_name\}\}/g,this.options.table_name)+") as subq"),type:"jsonp",jsonpCallback:"callback",success:function(a){if(null!=a.rows[0].maxx){var c=a.rows[0],f=c.maxx,e=c.maxy;a=c.minx;c=c.miny;a=-179>a?-179:179<a?179:a;c=-85.0511>c?-85.0511:85.0511<c?85.0511:c;f=new google.maps.LatLng(-85.0511>e?-85.0511:85.0511<e?85.0511:e,-179>f?-179:179<f?179:f);a=new google.maps.LatLng(c,a);a=new google.maps.LatLngBounds(a,f);b.options.map.fitBounds(a)}},error:function(a,b){if(this.options.debug)throw"Error getting table bounds: "+b;}})};CartoDBLayer.prototype._setMapStyle=function(){var a=this;reqwest({url:this._generateCoreUrl("tiler")+"/tiles/"+this.options.table_name+"/map_metadata?callback=?",type:"jsonp",jsonpCallback:"callback",success:function(b){b=json_parse(b.map_metadata);!b||"roadmap"==b.google_maps_base_type?a.map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP}):"satellite"==b.google_maps_base_type?a.map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE}):"terrain"==b.google_maps_base_type?a.map.setOptions({mapTypeId:google.maps.MapTypeId.TERRAIN}):(b.google_maps_customization_style=[{stylers:[{saturation:-65},{gamma:1.52}]},{featureType:"administrative",stylers:[{saturation:-95},{gamma:2.26}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"simplified"},{saturation:-99},{gamma:2.22}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{saturation:-55}]}],a.map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP}));b||(b={google_maps_customization_style:[]});a.map.setOptions({styles:b.google_maps_customization_style})},error:function(a,d){if(params.debug)throw"Error getting map style: "+d;}})};CartoDBLayer.prototype._addInteraction=function(){var a=this;this.tilejson=this._generateTileJson();this.layer=new wax.g.connector(this.tilejson);this.loaded=google.maps.event.addListener(this.options.map,"tilesloaded",function(){google.maps.event.trigger(a,"loaded")});this._setLayerOrder();this._checkTiles();this.options.interactivity&&(this.interaction=wax.g.interaction().map(this.options.map).tilejson(this.tilejson).on("on",function(b){a._bindWaxOnEvents(a.options.map,b)}).on("off",function(){a._bindWaxOffEvents()}))};CartoDBLayer.prototype._bindWaxOnEvents=function(a,b){var d=this._findPos(a,b),c=this.getProjection().fromContainerPixelToLatLng(d);switch(b.e.type){case "mousemove":if(this.options.featureOver)return this.options.featureOver(b.e,c,d,b.data);if(this.options.debug)throw"featureOver function not defined";break;case "click":if(this.options.featureClick)this.options.featureClick(b.e,c,d,b.data);else if(this.options.debug)throw"featureClick function not defined";break;case "touchend":if(this.options.featureClick)this.options.featureClick(b.e,c,d,b.data);else if(this.options.debug)throw"featureClick function not defined";}};CartoDBLayer.prototype._bindWaxOffEvents=function(){if(this.options.featureOut)return this.options.featureOut&&this.options.featureOut();if(this.options.debug)throw"featureOut function not defined";};CartoDBLayer.prototype._generateTileJson=function(){var a=this._generateTileUrls();return{blankImage:"../img/blank_tile.png",tilejson:"1.0.0",scheme:"xyz",name:this.options.table_name,tiles:[a.tile_url],grids:[a.grid_url],tiles_base:a.tile_url,grids_base:a.grid_url,opacity:this.options.opacity,formatter:function(a,d){return d}}};CartoDBLayer.prototype._setLayerOrder=function(){var a=this;this.options.map.overlayMapTypes.forEach(function(b,c){b==a.layer&&a.options.map.overlayMapTypes.removeAt(c)});if(this.layer.gmaps_index)this.options.map.overlayMapTypes.insertAt(this.layer.gmaps_index,this.layer);else if("top"==this.options.layer_order)this.options.map.overlayMapTypes.push(this.layer);else if("bottom"==this.options.layer_order)this.options.map.overlayMapTypes.insertAt(0,this.layer);else{var b=this.options.map.overlayMapTypes.getLength();this.options.layer_order>=b?this.options.map.overlayMapTypes.push(this.layer):0>=this.options.layer_order?this.options.map.overlayMapTypes.insertAt(0,this.layer):this.options.map.overlayMapTypes.insertAt(this.options.layer_order,this.layer);this.options.map.overlayMapTypes.forEach(function(a,b){a.gmaps_index=b})}};CartoDBLayer.prototype._generateCoreUrl=function(a){return"sql"==a?this.options.sql_protocol+"://"+(this.options.user_name?this.options.user_name+".":"")+this.options.sql_domain+(""!=this.options.sql_port?":"+this.options.sql_port:""):this.options.tiler_protocol+"://"+(this.options.user_name?this.options.user_name+".":"")+this.options.tiler_domain+(""!=this.options.tiler_port?":"+this.options.tiler_port:"")};CartoDBLayer.prototype._generateTileUrls=function(){var a=this._generateCoreUrl("tiler"),b=a+"/tiles/"+this.options.table_name+"/{z}/{x}/{y}",d=b+".png",c=b+".grid.json";if(this.options.query)var f=encodeURIComponent(this.options.query.replace(/\{\{table_name\}\}/g,this.options.table_name)),f=f.replace(/%7Bx%7D/g,"{x}").replace(/%7By%7D/g,"{y}").replace(/%7Bz%7D/g,"{z}"),f="sql="+f,d=this._addUrlData(d,f),c=this._addUrlData(c,f);for(_param in this.options.extra_params)d=this._addUrlData(d,_param+"="+this.options.extra_params[_param]),c=this._addUrlData(c,_param+"="+this.options.extra_params[_param]);this.options.tile_style&&(f="style="+encodeURIComponent(this.options.tile_style.replace(/\{\{table_name\}\}/g,this.options.table_name)),d=this._addUrlData(d,f),c=this._addUrlData(c,f));this.options.interactivity&&(f="interactivity="+encodeURIComponent(this.options.interactivity.replace(/ /g,"")),d=this._addUrlData(d,f),c=this._addUrlData(c,f));return{core_url:a,base_url:b,tile_url:d,grid_url:c}};CartoDBLayer.prototype._parseUri=function(a){var b="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var d={},c=14;c--;)d[b[c]]=a[c]||"";d.queryKey={};d[b[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,c){b&&(d.queryKey[b]=c)});return d};CartoDBLayer.prototype._addUrlData=function(a,b){a+=this._parseUri(a).query?"&":"?";return a+b};CartoDBLayer.prototype._extend=function(a){for(var b=Array.prototype.slice.call(arguments,1),d=0,c=b.length,f;d<c;d++){f=b[d]||{};for(var e in f)f.hasOwnProperty(e)&&(a[e]=f[e])}return a};CartoDBLayer.prototype._findPos=function(a,b){var d=curtop=0,c=a.getDiv();do d+=c.offsetLeft,curtop+=c.offsetTop;while(c=c.offsetParent);return new google.maps.Point((b.e.clientX||b.e.changedTouches[0].clientX)-d,(b.e.clientY||b.e.changedTouches[0].clientY)-curtop)};CartoDBLayer.prototype._checkTiles=function(){var a=this;new Image;var b=this._generateTileUrls();b.tile_url=b.tile_url.replace(/\{z\}/g,4).replace(/\{x\}/g,6).replace(/\{y\}/g,6);b.grid_url=b.grid_url.replace(/\{z\}/g,4).replace(/\{x\}/g,6).replace(/\{y\}/g,6);reqwest({method:"get",url:b.grid_url,type:"jsonp",jsonpCallback:"callback",jsonpCallbackName:"grid",success:function(){clearTimeout(d)},error:function(b,d){a.interaction&&a.interaction.remove();if(a.options.debug)throw"There is an error in your query or your interaction parameter";google.maps.event.trigger(this,"layererror",d)}});var d=setTimeout(function(){clearTimeout(d);a.interaction&&a.interaction.remove();if(a.options.debug)throw"There is an error in your query or your interaction parameter";google.maps.event.trigger(this,"layererror","There is a problem in your SQL or interaction parameter")},2E3)}}var json_parse=function(){var a,b,d={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c,f=function(b){throw{name:"SyntaxError",message:b,at:a,text:c};},e=function(d){d&&d!==b&&f("Expected '"+d+"' instead of '"+b+"'");b=c.charAt(a);a+=1;return b},k=function(){var a;a="";"-"===b&&(a="-",e("-"));for(;"0"<=b&&"9">=b;)a+=b,e();if("."===b)for(a+=".";e()&&"0"<=b&&"9">=b;)a+=b;if("e"===b||"E"===b){a+=b;e();if("-"===b||"+"===b)a+=b,e();for(;"0"<=b&&"9">=b;)a+=b,e()}a=+a;if(isFinite(a))return a;f("Bad number")},l=function(){var a,c,h="",g;if('"'===b)for(;e();){if('"'===b)return e(),h;if("\\"===b)if(e(),"u"===b){for(c=g=0;4>c;c+=1){a=parseInt(e(),16);if(!isFinite(a))break;g=16*g+a}h+=String.fromCharCode(g)}else if("string"===typeof d[b])h+=d[b];else break;else h+=b}f("Bad string")},g=function(){for(;b&&" ">=b;)e()},m=function(){switch(b){case "t":return e("t"),e("r"),e("u"),e("e"),!0;case "f":return e("f"),e("a"),e("l"),e("s"),e("e"),!1;case "n":return e("n"),e("u"),e("l"),e("l"),null}f("Unexpected '"+b+"'")},j;j=function(){g();switch(b){case "{":var a;a:{var c={};if("{"===b){e("{");g();if("}"===b){e("}");a=c;break a}for(;b;){a=l();g();e(":");Object.hasOwnProperty.call(c,a)&&f('Duplicate key "'+a+'"');c[a]=j();g();if("}"===b){e("}");a=c;break a}e(",");g()}}f("Bad object");a=void 0}return a;case "[":a:{a=[];if("["===b){e("[");g();if("]"===b){e("]");break a}for(;b;){a.push(j());g();if("]"===b){e("]");break a}e(",");g()}}f("Bad array");a=void 0}return a;case '"':return l();case "-":return k();default:return"0"<=b&&"9">=b?k():m()}};return function(d,e){var h;c=d;a=0;b=" ";h=j();g();b&&f("Syntax error");return"function"===typeof e?function n(a,b){var c,d,f=a[b];if(f&&"object"===typeof f)for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(d=n(f,c),void 0!==d?f[c]=d:delete f[c]);return e.call(a,b,f)}({"":h},""):h}}();

  var
      // A map type that is used when no base layer is desired.
      blankMapType = new google.maps.ImageMapType({
        getTileUrl: function() {
          return NPMap.config.server + '/resources/img/blank-tile.png';
        },
        maxZoom: 19,
        minZoom: 0,
        name: 'BLANK',
        tileSize: new google.maps.Size(256, 256)
      }),
      // The current bounds of the map.
      bounds,
      // An array of the default base layers for the Google baseAPI.
      DEFAULT_BASE_LAYERS = {
        aerial: {
          cls: 'aerial',
          icon: 'aerial',
          mapTypeId: 'SATELLITE',
          name: 'Aerial View',
          type: 'Aerial',
          typeNpmap: 'Api'
        },
        blank: {
          cls: 'blank',
          icon: 'blank',
          mapTypeId: 'BLANK',
          name: 'Blank View',
          type: 'Blank',
          typeNpmap: 'Api'
        },
        hybrid: {
          cls: 'hybrid',
          icon: 'aerial',
          mapTypeId: 'HYBRID',
          name: 'Hybrid View',
          type: 'Hybrid',
          typeNpmap: 'Api'
        },
        streets: {
          cls: 'streets',
          icon: 'street',
          mapTypeId: 'ROADMAP',
          name: 'Street View',
          type: 'Streets',
          typeNpmap: 'Api'
        },
        terrain: {
          cls: 'terrain',
          icon: 'topo',
          mapTypeId: 'TERRAIN',
          name: 'Terrain View',
          type: 'Terrain',
          typeNpmap: 'Api'
        }
      },
      // Helps handle map single and double-click events.
      doubleClicked = false,
      // The initial bounds of the map.
      initialBounds,
      // The initial center latitude/longitude of the map.
      initialCenter,
      // The initial zoom level of the map.
      initialZoom,
      //
      interval,
      // The map object.
      map,
      // The map config object.
      mapConfig,
      // The initial mapTypeId of the map.
      mapTypeId,
      // The max zoom level for the map.
      max = 19,
      // The min zoom level for the map.
      min = 0,
      // The last zoom level.
      oldZoom,
      // An overlay object to use to convert points to latLngs and back.
      overlay = null;
  
  /**
   * Hides a layer.
   * @param {Object} layer
   * @return null
   */
  function _hideLayer(layer) {
    layer.setMap(null);
  }
  /**
   * Hooks up a google.maps.event click handler to a shape.
   * @param {Object} shape
   * @return null
   */
  function _hookUpShapeClickHandler(shape) {
    google.maps.event.addListener(shape, 'click', function(e) {
      e.shape = shape;
      Event.trigger('NPMap.Map', 'shapeclick', e);
    });
  }

  if (NPMap.config.baseLayers) {
    Map._matchBaseLayers(DEFAULT_BASE_LAYERS);

    for (var i = 0; i < NPMap.config.baseLayers.length; i++) {
      var baseLayer = NPMap.config.baseLayers[i];

      if (baseLayer.visible) {
        if (typeof baseLayer.typeNpmap !== 'undefined' && baseLayer.typeNpmap === 'Api') {
          mapTypeId = google.maps.MapTypeId[baseLayer.mapTypeId];
        } else {
          mapTypeId = 'BLANK';
        }

        break;
      }
    }
  } else if (typeof NPMap.config.baseLayers === 'undefined') {
    mapTypeId = google.maps.MapTypeId.TERRAIN;
    NPMap.config.baseLayers = [
      DEFAULT_BASE_LAYERS['streets']
    ];
    NPMap.config.baseLayers[0].visible = true;
  } else {
    mapTypeId = 'BLANK';
    NPMap.config.baseLayers = [
      DEFAULT_BASE_LAYERS['blank']
    ];
    NPMap.config.baseLayers[0].visible = true;
  }

  google.maps.visualRefresh = true;
  mapConfig = {
    disableDefaultUI: true,
    draggableCursor: 'url(http://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default',
    draggingCursor: 'url(http://maps.gstatic.com/mapfiles/closedhand_8_8.cur) 8 8, default',
    keyboardShortcuts: true,
    mapTypeControl: false,
    noClear: true,
    panControl: false,
    scaleControl: false,
    scrollWheel: true,
    streetViewControl: false,
    styles: [{
      elementType: 'labels',
      featureType: 'poi',
      stylers: [{
        visibility: 'off'
      }]
    }],
    zoomControl: false
  };

  mapConfig.center = initialCenter = (NPMap.config.center ? new google.maps.LatLng(NPMap.config.center.lat, NPMap.config.center.lng) : new google.maps.LatLng(39, -96));
  mapConfig.zoom = initialZoom = oldZoom = (NPMap.config.zoom ? NPMap.config.zoom : 4);
  map = new google.maps.Map(document.getElementById(NPMap.config._div), mapConfig);

  map.mapTypes.set('blank', blankMapType);

  if (mapTypeId === 'blank') {
    map.setMapTypeId('blank');
  } else {
    map.setMapTypeId(mapTypeId);
  }

  interval = setInterval(function() {
    bounds = map.getBounds();

    if (bounds) {
      var intervalAttribution,
          intervalOverlay;

      clearInterval(interval);

      if (!initialBounds) {
        initialBounds = bounds;
      }
      
      if (!initialCenter) {
        initialCenter = map.getCenter();
      }
      
      if (!initialZoom) {
        initialZoom = map.getZoom();
      }
      
      if (NPMap.config.restrictBounds) {
        google.maps.event.addListener(map, 'center_changed', function() {
          if (!bounds.contains(map.getCenter())) {
            var c = map.getCenter(),
                lat = c.lat(),
                lng = c.lng(),
                maxX = bounds.getNorthEast().lng(),
                maxY = bounds.getNorthEast().lat(),
                minX = bounds.getSouthWest().lng(),
                minY = bounds.getSouthWest().lat();
            
            if (lng < minX) {
              lng = minX;
            }
            
            if (lng > maxX) {
              lng = maxX;
            }
            
            if (lat < minY) {
              lat = minY;
            }
            
            if (lat > maxY) {
              lat = maxY;
            }
            
            map.setCenter(new google.maps.LatLng(centerLat, centerLng));
          }
        });
      }

      if (NPMap.config.zoomRange) {
        if (NPMap.config.zoomRange.max) {
          map.setOptions({
            maxZoom: NPMap.config.zoomRange.max === 'auto' ? initialZoom : NPMap.config.zoomRange.max
          });
        }
        
        if (NPMap.config.zoomRange.min) {
          map.setOptions({
            minZoom: NPMap.config.zoomRange.min === 'auto' ? initialZoom : NPMap.config.zoomRange.min
          });
        }
      }

      google.maps.event.addListener(map, 'bounds_changed', function() {
        if (NPMap.InfoBox.visible) {
          NPMap.InfoBox.reposition();
        }
      });
      google.maps.event.addListener(map, 'center_changed', function() {
        if (map.getZoom() === oldZoom) {
          Event.trigger('NPMap.Map', 'viewchanging');
          Event.trigger('NPMap.Map', 'panning');
        }

        if (NPMap.InfoBox.visible) {
          NPMap.InfoBox.reposition();
        }
      });
      google.maps.event.addListener(map, 'click', function(e) {
        doubleClicked = false;

        setTimeout(function() {
          if (!doubleClicked) {
            Event.trigger('NPMap.Map', 'click', e);
          }
        }, 350);
      });
      google.maps.event.addListener(map, 'dblclick', function(e) {
        doubleClicked = true;
        Event.trigger('NPMap.Map', 'dblclick', e);
      });
      google.maps.event.addListener(map, 'drag', function() {
        if (NPMap.InfoBox.visible) {
          NPMap.InfoBox.reposition();
        }

        Event.trigger('NPMap.Map', 'viewchange');
      });
      google.maps.event.addListener(map, 'dragend', function() {
        Event.trigger('NPMap.Map', 'panend');
      });
      google.maps.event.addListener(map, 'dragstart', function() {
        Event.trigger('NPMap.Map', 'panstart');
        Event.trigger('NPMap.Map', 'viewchangestart');
      });
      google.maps.event.addListener(map, 'idle', function() {
        Event.trigger('NPMap.Map', 'viewchangeend');
      });
      google.maps.event.addDomListener(document, 'keydown', function(e) {
        if (e.shiftKey) {
          map.setOptions({
            draggable: false
          });
        }
      });
      google.maps.event.addDomListener(document, 'keyup', function(e) {
        map.setOptions({
          draggable: true
        });
      });
      google.maps.event.addDomListener(map.getDiv(), 'mousedown', function(e) {
        Event.trigger('NPMap.Map', 'mousedown', e);
      });
      google.maps.event.addDomListener(map.getDiv(), 'mousemove', function(e) {
        Event.trigger('NPMap.Map', 'mousemove', e);
      });
      google.maps.event.addDomListener(map.getDiv(), 'mouseover', function(e) {
        Event.trigger('NPMap.Map', 'mouseover', e);
      });
      google.maps.event.addDomListener(map.getDiv(), 'mouseup', function(e) {
        Event.trigger('NPMap.Map', 'mouseup', e);
      });
      // TODO: You should probably add this as a DOM listener.
      google.maps.event.addListener(map, 'rightclick', function(e) {
        Event.trigger('NPMap.Map', 'rightclick', e);
      });
      google.maps.event.addListener(map, 'zoom_changed', function(e) {
        var zoom = map.getZoom();

        if (zoom !== oldZoom) {
          Event.trigger('NPMap.Map', 'viewchangestart');
          Event.trigger('NPMap.Map', 'zoomstart');
          Event.trigger('NPMap.Map', 'viewchanging');
          Event.trigger('NPMap.Map', 'zooming');
          Event.trigger('NPMap.Map', 'zoomend');
        }
        
        oldZoom = zoom;
      });

      intervalAttribution = setInterval(function() {
        var divLogo,
            links = document.getElementsByTagName('a');

        for (var i in links) {
          var link = links[i];

          if (typeof link.getAttribute !== 'undefined' && link.getAttribute('title') === 'Click to see this area on Google Maps') {
            divLogo = link;
          }
        }

        if (divLogo) {
          var attribution,
              divAttribution,
              divReport,
              intervalHtml;

          clearInterval(intervalAttribution);

          divAttribution = Util.getNextElement(divLogo.parentNode);
          divAttribution.style.display = 'none';
          divLogo.style.display = 'none';
          divReport = Util.getNextElement(Util.getNextElement(Util.getNextElement(divAttribution)));
          divReport.style.display = 'none';

          attribution = Util.stripHtmlFromString(divAttribution.innerHTML);
          intervalHtml = setInterval(function() {
            var a = Util.stripHtmlFromString(divAttribution.innerHTML).replace('Map DataMap data', 'Map data').replace(' - Terms of Use', '').replace('Terms of Use - ', '').replace('Terms of Use', '').replace('Map DataImagery', 'Map data');
                
            divReport.style.display = 'none';

            if (a !== attribution) {
              if (a === 'Map Data') {
                NPMap.Map.Google._attribution = null;
              } else {
                NPMap.Map.Google._attribution = [
                  a
                ];
              }

              attribution = a;

              Map._updateAttribution();
            }
          }, 250);
        }
      }, 250);
      intervalOverlay = setInterval(function() {
        if (!overlay) {
          try {
            overlay = new google.maps.OverlayView();
            overlay.draw = function() {};
            overlay.setMap(map);
          } catch(e) {
            
          }
        } else {
          clearInterval(intervalOverlay);
        }
      }, 250);

      NPMap.Map.Google._isReady = true;
    }
  }, 250);

  return NPMap.Map.Google = {
    //
    _attribution: null,
    // Is the map loaded and ready to be interacted with programatically?
    _isReady: false,
    /**
     * Adds a CartoDb layer to the map.
     * @param {Object} options
     * @return {Object}
     */
    _addCartoDbLayer: function(options) {
      var layer;

      options.layer_order = typeof options.zIndex === 'number' ? options.zIndex : 'top',
      options.map = map;

      return new CartoDBLayer(options);
    },
    /**
     * Adds a tile layer to the map.
     * @param {Object} options
     * @return {Object}
     */
    _addTileLayer: function(options) {
      var getSubdomain,
          tileLayer,
          uriConstructor;

      if (options.subdomains) {
        var currentSubdomain = 0;

        getSubdomain = function() {
          if (currentSubdomain + 1 === options.subdomains.length) {
            currentSubdomain = 0;
          } else {
            currentSubdomain++;
          }

          return options.subdomains[currentSubdomain];
        };
      }

      if (typeof options.constructor === 'string') {
        uriConstructor = function(coord, zoom) {
          return _.template(options.constructor)({
            s: typeof getSubdomain == 'function' ? getSubdomain() : null,
            x: coord.x,
            y: coord.y,
            z: zoom
          });
        };
      } else {
        uriConstructor = function(coord, zoom) {
          var subdomain = null;

          if (getSubdomain) {
            subdomain = getSubdomain();
          }

          return options.constructor(coord.x, coord.y, zoom, options.url ? options.url : null, subdomain);
        };
      }

      tileLayer = new google.maps.ImageMapType({
        getTileUrl: uriConstructor,
        tileSize: new google.maps.Size(256, 256),
        maxZoom: typeof options.maxZoom === 'number' ? options.maxZoom : 19,
        minZoom: typeof options.minZoom === 'number' ? options.minZoom : 0,
        name: options.name,
        opacity: typeof options.opacity === 'number' ? options.opacity : 1.0
      });

      if (options.zIndex === 0) {
        map.mapTypes.set(options.name, tileLayer);
        map.setMapTypeId(options.name);
      } else {
        map.overlayMapTypes.insertAt(options.zIndex - 1, tileLayer);
      }

      return tileLayer;
    },
    /**
     * Adds a TileStream layer to the map.
     * @param {Object} options
     * @return null
     */
    _addTileStreamLayer: function(options) {
      var layer = new wax.g.connector(options.tileJson);

      if (options.zIndex === 0) {
        map.mapTypes.set(options.tileJson.id, layer);
        map.setMapTypeId(options.tileJson.id);
      } else {
        map.overlayMapTypes.insertAt(options.zIndex - 1, layer);
      }

      return layer;
    },
    /**
     * Hides a CartoDb layer.
     * @param {Object} layer
     * @return null
     */
    _hideCartoDbLayer: function(layer) {
      _hideLayer(layer);
    },
    /**
     * Hides a tile layer.
     * @param {Object} layer
     * @return null
     */
    _hideTileLayer: function(layer) {
      this._removeTileLayer(layer);
    },
    /**
     * Hides a TileStream layer.
     * @param {Object} layer
     * @return null
     */
    _hideTileStreamLayer: function(layer) {
      this._removeTileStreamLayer(layer);
    },
    /**
     * Removes a CartoDb layer from the map..
     * @param {Object} layer
     * @return null
     */
    _removeCartoDbLayer: function(layer) {
      _hideLayer(layer);
      // TODO: Delete reference to layer?
    },
    /**
     * Removes a tile layer from the map. Do not use to remove a base layer. Use _setBaseLayer for that.
     * @param {Object} layer
     * @return null
     */
    _removeTileLayer: function(layer) {
      var overlayMapTypes = map.overlayMapTypes;

      overlayMapTypes.forEach(function(overlayMapType, i) {
        if (layer === overlayMapType) {
          overlayMapTypes.removeAt(i);
        }
      });
    },
    /**
     * Removes a TileStream layer from the map. Do not use to remove a base layer. Use _setBaseLayer for that.
     * @param {Object} layer
     * @return null
     */
    _removeTileStreamLayer: function(layer) {
      this._removeTileLayer(layer);
    },
    /**
     * Sets the base layer.
     * @param {Object} baseLayer
     * @return null
     */
    _setBaseLayer: function(baseLayer) {
      var activeBaseLayer,
          api,
          cls = baseLayer.cls,
          mapTypeId;

      for (var i = 0; i < NPMap.config.baseLayers.length; i++) {
        var bl = NPMap.config.baseLayers[i];

        if (bl.visible) {
          activeBaseLayer = bl;
        }

        bl.visible = false;
      }

      if (activeBaseLayer.typeNpmap !== 'Api') {
        NPMap.Layer[activeBaseLayer.type].remove(activeBaseLayer);
      }

      if (cls) {
        cls = cls.toLowerCase();
      }

      api = DEFAULT_BASE_LAYERS[cls];

      if (api) {
        if (api.mapTypeId) {
          mapTypeId = api.mapTypeId;
        } else {
          mapTypeId = 'BLANK';

          NPMap.Layer[baseLayer.type].create(baseLayer);
        }
      } else {
        NPMap.Layer[baseLayer.type].create(baseLayer);

        mapTypeId = 'BLANK';
      }

      map.setMapTypeId(google.maps.MapTypeId[baseLayer.mapTypeId]);

      baseLayer.visible = true;
    },
    /**
     * Sets tile layer options.
     * @param {Object} layer
     * @param {Object} options
     * Currently supported: .
     */
    _setTileLayerOptions: function(layer, options) {
    
    },
    /**
     * Shows a CartoDb layer.
     * @param {Object} layer
     * @return null
     */
    _showCartoDbLayer: function(layer) {
      layer.setMap(map);
    },
    /**
     * Shows a tile layer.
     * @param {Object} layer
     * @return null
     */
    _showTileLayer: function(layer) {
      map.overlayMapTypes.insertAt(NPMap.Layer.getLayerByName(layer.npmap.layerName).zIndex - 1, layer);
    },
    /**
     * Shows a TileStream layer.
     * @param {Object} layer
     * @return null
     */
    _showTileStreamLayer: function(layer) {
      this._showTileLayer(layer);

      //this._addTileStreamLayer(NPMap.Layer.getLayerByName(layer.npmap.layerName));
    },
    // The google.maps.Map object.
    map: map,

    /**
     * Adds a shape to the map.
     * @param {Object} shape The shape to add to the map. This can be a google.maps.Marker, Polyline, Polygon, Rectangle, or Circle object.
     * @return null
     */
    addShape: function(shape) {
      shape.setMap(map);
    },
    /**
     * Converts an API bounds to a NPMap bounds.
     * @param {Object} bounds
     * @return {Object}
     */
    boundsFromApi: function(bounds) {
      var ne = bounds.getNorthEast(),
          sw = bounds.getSouthWest();

      return {
        e: ne.lng(),
        n: ne.lat(),
        s: sw.lat(),
        w: sw.lng()
      };
    },
    /**
     * Converts a NPMap bounds to an API bounds.
     * @param {Object}
     * @return {Object}
     */
    boundsToApi: function(bounds) {
      return new google.maps.LatLngBounds(new google.maps.LatLng(bounds.s, bounds.w), new google.maps.LatLng(bounds.n, bounds.e));
    },
    /**
     * Centers the map.
     * @param {Object} latLng The latLng object to center the map on.
     * @return null
     */
    center: function(latLng) {
      map.setCenter(latLng);
    },
    /**
     * Zooms to the center and zoom provided. If zoom isn't provided, the map will zoom to level 17.
     * @param {google.maps.LatLng} latLng
     * @param {Number} zoom
     */
    centerAndZoom: function(latLng, zoom) {
      if (zoom) {
        this.zoom(zoom);
      } else {
        this.zoom(17);
      }
      
      this.center(latLng);
    },
    /**
     * Converts NPMap line options to Google Maps line options.
     * @param {Object} options
     * @return {Object}
     * Notes: Valid Google Maps options: clickable, editable, geodesic, icons, map, path, strokeColor, strokeOpacity, strokeWeight, visible, zIndex
     */
    convertLineOptions: function(options) {
      var o = {};

      if (options.editable) {
        o.editable = options.editable;
      }

      if (options.strokeColor) {
        o.strokeColor = options.strokeColor;
      }

      if (options.strokeOpacity) {
        o.strokeOpacity = Util.convertOpacity(options.strokeOpacity);
      }
      
      if (options.strokeWidth) {
        o.strokeWeight = options.strokeWidth;
      }
      
      return o;
    },
    /**
     * Converts NPMap marker options to Google Maps marker options.
     * @param {Object} options
     * @return {Object}
     * Notes: Valid Google Maps options: animation, clickable, cursor, draggable, flat, icon, map, optimized, position, raiseOnDrag, shadow, shape, title, visible, zIndex
     *        Supported options are: anchor, clickable, draggable, height, text, url, and width
     */
    convertMarkerOptions: function(options) {
      var o = {};

      if (options.anchor) {
        o.anchorPoint = new google.maps.Point(options.anchor.x, options.anchor.y);
      }

      if (options.clickable === false) {
        o.clickable = false;
      }

      if (options.draggable === true) {
        o.draggable = true;
      }

      if (options.text) {
        o.labelAnchor = new google.maps.Point(11, 32);
        o.labelContent = options.text;
        o.labelStyle = {
          color: 'white',
          zIndex: 50
        };
      }

      if (options.url) {
        var anchor = options.anchor,
            height = options.height,
            width = options.width;

        if (!anchor) {
          anchor = {
            x: width / 2,
            y: 0
          };
        }

        o.icon = new google.maps.MarkerImage(options.url, new google.maps.Size(width, height), null, new google.maps.Point(anchor.x, anchor.y));
      }

      return o;
    },
    /**
     * Converts NPMap polygon options to Google Maps polygon options.
     * @param {Object} options
     * @return {Object}
     * Notes: Valid Google Maps options: clickable, editable, fillColor, fillOpacity, geodesic, map, paths, strokeColor, strokeOpacity, strokeWeight, visible, zIndex
     */
    convertPolygonOptions: function(options) {
      var o = {};

      if (options.editable) {
        o.editable = options.editable;
      }

      if (options.fillColor) {
        o.fillColor = options.fillColor;
      }

      if (options.fillOpacity) {
        o.fillOpacity = Util.convertOpacity(options.fillOpacity);
      }

      if (options.strokeColor) {
        o.strokeColor = options.strokeColor;
      }

      if (options.strokeOpacity) {
        o.strokeOpacity = Util.convertOpacity(options.strokeOpacity);
      }
      
      if (options.strokeWidth) {
        o.strokeWeight = options.strokeWidth;
      }
      
      return o;
    },
    /**
     * Creates a google.maps.Polyline object.
     * @param {Array} latLngs An array of google.maps.LatLng objects.
     * @param {Object} options (Optional) Any additional options to apply to the polygon.
     * @return {Object}
     */
    createLine: function(latLngs, options) {
      var line;

      options = options || {};
      options.path = latLngs;
      line = new google.maps.Polyline(options);

      _hookUpShapeClickHandler(line);

      return line;
    },
    /**
     * Creates a google.maps.Marker object.
     * @param {Object} latLng Where to place the marker.
     * @param {Object} options (Optional) Any additional options to apply to the marker.
     * @return {Object}
     */
    createMarker: function(latLng, options) {
      var marker;

      options = options || {};
      options.clickable = typeof options.clickable === 'boolean' ? options.clickable : true;
      options.position = latLng;

      if (options.labelContent) {
        marker = new MarkerWithLabel(options);
      } else {
        marker = new google.maps.Marker(options);
      }

      _hookUpShapeClickHandler(marker);

      return marker;
    },
    /**
     * Creates a google.maps.Polygon object.
     * @param {Array} latLngs An array of google.maps.LatLng objects.
     * @param {Object} options Any additional options to apply to the polygon.
     * @return {Object}
     */
    createPolygon: function(latLngs, options) {
      var polygon;

      options = options || {};
      options.paths = latLngs;
      polygon = new google.maps.Polygon(options);

      _hookUpShapeClickHandler(polygon);

      return polygon;
    },
    /**
     * Gets a latLng from an event object.
     * @param {Object} e
     * @return {Object}
     */
    eventGetLatLng: function(e) {
      if (e.latLng) {
        return e.latLng;
      } else {
        var offset = Util.getOffset(document.getElementById('npmap-map')),
            x = e.pageX || e.clientX,
            y = e.pageY || e.clientY;

        return this.pixelToLatLng(new google.maps.Point(x - offset.left, y - offset.top));
      }
    },
    /**
     * Gets a shape from an event object.
     * @param {Object} e
     * @return {Object}
     */
    eventGetShape: function(e) {
      return e.shape;
    },
    /**
     * Gets a default base layer, per type, for this base API.
     * @param {Object} baseLayer
     * @return {Object}
     */
    getBaseLayer: function(baseLayer) {
      var obj = DEFAULT_BASE_LAYERS[baseLayer.type.toLowerCase()];

      if (obj) {
        _.extend(obj, baseLayer);

        return obj;
      } else {
        return null;
      }
    },
    /**
     * Gets the current bounds of the map.
     * @return {Object}
     */
    getBounds: function() {
      return map.getBounds();
    },
    /**
     * Gets the center {google.maps.LatLng} of the map.
     * @return {Object}
     */
    getCenter: function() {
      return map.getCenter();
    },
    /**
     * Gets the latLng (google.maps.LatLng) of the #npmap-clickdot div element.
     * @return {Object}
     */
    getClickDotLatLng: function() {
      return this.getLatLngFromPixel(this.getClickDotPixel());
    },
    /**
     * Returns the {google.maps.Point} for the #npmap-clickdot div.
     * @return {Object}
     */
    getClickDotPixel: function() {
      var offset = Util.getOffset(document.getElementById('npmap-map')),
          position = Util.getOffset(document.getElementById('npmap-clickdot'));

      return new google.maps.Point(position.left - offset.left, position.top - offset.top);
    },
    /**
     * Gets a {google.maps.LatLng} from a {google.maps.Point}.
     * @param {Object} point
     * @return {Object}
     */
    getLatLngFromPixel: function(point) {
      return overlay.getProjection().fromContainerPixelToLatLng(point);
    },
    /**
     * Gets the latLngs {google.maps.LatLng} of the line.
     * @param {Object} line The line to get the latLngs for.
     * @return {Array}
     */
    getLineLatLngs: function(line) {
      var latLngs = [];

      line.getPath().forEach(function(latLng) {
        latLngs.push(latLng);
      });

      return latLngs;
    },
    /**
     * Gets the map element.
     * @return {Object}
     */
    getMapElement: function() {
      return map.getDiv();
    },
    /**
     * Gets the anchor of a marker.
     * @param {Object} marker The Pushpin to get the anchor for.
     * @return {Object}
     */
    getMarkerAnchor: function(marker) {
      
    },
    /**
     * Gets the icon for a marker.
     * @param {Object} marker
     * @return {Object}
     */
    getMarkerIcon: function(marker) {
      
    },
    /**
     * Gets the latLng {google.maps.LatLng} of the marker.
     * @param {Object} marker The marker to get the latLngs for.
     * @return {Object}
     */
    getMarkerLatLng: function(marker) {
      return marker.getPosition();
    },
    /**
     * Gets the maximum zoom level for this map.
     * @return {Number}
     */
    getMaxZoom: function() {
      return max;
    },
    /**
     * Gets the minimum zoom level for this map.
     * @return {Number}
     */
    getMinZoom: function() {
      return min;
    },
    /**
     * Gets the latLngs {google.maps.LatLng} of the polygon.
     * @param {Object} polygon The polygon to get the latLngs for.
     * @return {Array}
     */
    getPolygonLatLngs: function(polygon) {
      var latLngs = [];

      polygon.getPath().forEach(function(latLng) {
        latLngs.push(latLng);
      });

      return latLngs;
    },
    /**
     * Gets the zoom level of the map.
     * @return {Number}
     */
    getZoom: function() {
      return map.getZoom();
    },
    /**
     * Handles any necessary sizing and positioning for the map when its div is resized.
     * @return null
     */
    handleResize: function() {
      google.maps.event.trigger(map, 'resize');
    },
    /**
     * Hides a shape.
     * @param {Object} shape
     * @return null
     */
    hideShape: function(shape) {
      shape.setVisible(false);
    },
    /**
     * Tests to see if a latLng is within the map's current bounds.
     * @param latLng {Object/String} {Required} The latitude/longitude, either a {google.maps.LatLng} object or a string in "latitude,longitude" format, to test.
     * @return {Boolean}
     */
    isLatLngWithinMapBounds: function(latLng) {
      return map.getBounds().contains(latLng);
    },
    /**
     * Tests the equivalency of two {google.maps.LatLng} objects.
     * @param latLng1 {Object} The first {google.maps.LatLng} object.
     * @param latLng2 {Object) The second {google.maps.LatLng} object.
     * @returns {Boolean}
     */
    latLngsAreEqual: function(latLng1, latLng2) {
      
    },
    /**
     * Converts an API latLng object to an NPMap latLng object.
     * @param latLng {Object} The object to convert.
     * @return {Object}
     */
    latLngFromApi: function(latLng) {
      return {
        lat: latLng.lat(),
        lng: latLng.lng()
      };
    },
    /**
     * Converts a latLng object ({x:lng,y:lat}) to an API latLng object.
     * @param {Object} latLng
     * @return {Object}
     */
    latLngToApi: function(latLng) {
      return new google.maps.LatLng(latLng.lat, latLng.lng);
    },
    /**
     * Returns a google.maps.Point object for a given latLng.
     * @param {Object} latLng
     * @return {Object}
     */
    latLngToPixel: function(latLng) {
      return overlay.getProjection().fromLatLngToContainerPixel(latLng);
    },
    /**
     * Pans the map horizontally and vertically based on the pixels passed in.
     * @param {Object} pixels
     * @param {Function} callback (Optional)
     * @return null
     */
    panByPixels: function(pixels, callback) {
      if (pixels.x !== 0) {
        pixels.x = -pixels.x;
      }
      
      if (pixels.y !== 0) {
        pixels.y = -pixels.y;
      }
      
      map.panBy(pixels.x, pixels.y);

      if (callback) {
        google.maps.event.addListenerOnce(map, 'idle', callback);
      }
    },
    /**
     * Turns an API pixel object to a NPMap pixel object.
     * @param {Object} pixel
     * @return {Object}
     */
    pixelFromApi: function(pixel) {
      return {
        x: pixel.x,
        y: pixel.y
      };
    },
    /**
     * Turns a NPMap pixel object to an API pixel object.
     * @param {Object} pixel
     * @return {Object}
     */
    pixelToApi: function(pixel) {
      return new google.maps.Point(pixel.x, pixel.y);
    },
    /**
     * Converts a {google.maps.Point} to a {google.maps.LatLng}.
     * @param {Object} pixel
     * @return {Object}
     */
    pixelToLatLng: function(pixel) {
      return overlay.getProjection().fromContainerPixelToLatLng(pixel);
    },
    /**
     * Positions the #npmap-clickdot div on top of the pushpin, lat/lng object, or lat/lng string that is passed in.
     * @param {google.maps.Marker} OR {google.maps.LatLng} OR {String} to The Pushpin, Location, or latitude/longitude string to position the div onto.
     * @return null
     */
    positionClickDot: function(to) {
      var divClickDot = document.getElementById('npmap-clickdot'),
          offset = NPMap.Util.getOffset(document.getElementById('npmap-map')),
          pixel = this.latLngToPixel((function() {
            var latLng = null;

            if (typeof(to) === 'string') {
              to = to.split(',');
              latLng = new google.maps.LatLng(parseFloat(to[0]), parseFloat(to[1]));
            } else {
              if (typeof to.lat === 'number') {
                latLng = new google.maps.LatLng(to.lat, to.lng);
              } else if (typeof to.lat === 'function') {
                latLng = to;
              } else {
                latLng = to.getPosition();
              }
            }
            
            return latLng;
          })());

      divClickDot.style.left = pixel.x + 'px';
      divClickDot.style.top = pixel.y + 'px';
    },
    /**
     * A {google.maps.MapCanvasProjection} object.
     */
    projection: null,
    /**
     * Removes a shape from the map.
     * @param {Object} shape The shape to remove from the map. This can be a {google.maps}.Marker, Polyline, Polygon, Rectangle, or Circle object.
     * @return null
     */
    removeShape: function(shape) {
      shape.setMap(null);
    },
    /**
     * Sets the map cursor.
     * @param {String} cursor
     * @return null
     */
    setCursor: function(cursor) {
      map.setOptions({
        draggableCursor: cursor
      });
    },
    /**
     * DEPRECATED: Sets the marker's icon.
     * @param {Object} marker
     * @param {String} The url of the marker icon.
     * @return null
     */
    setMarkerIcon: function(marker, url) {
      
    },
    /**
     * UNDOCUMENTED
     */
    showShape: function(shape) {
      shape.setVisible(true);
    },
    /**
     * Zooms the map to a bounding box.
     * @param {Object} bounds
     * @return null
     */
    toBounds: function(bounds) {
      map.fitBounds(bounds);
    },
    /**
     * Zooms and/or pans the map to its initial extent.
     * @return null
     */
    toInitialExtent: function() {
      NPMap.InfoBox.hide();
      this.centerAndZoom(initialCenter, initialZoom);
    },
    /**
     * Zooms the map to the extent of an array of lat/lng objects.
     * @param {Array} latLngs The array of lat/lng objects.
     * @return null
     */
    toLatLngs: function(latLngs) {
      var bounds = new google.maps.LatLngBounds();

      for (var i = 0; i < latLngs.length; i++) {
        var latLng = latLngs[i];

        bounds.extend(new google.maps.LatLng(latLng.lat(), latLng.lng()));
      }

      this.toBounds(bounds);
    },
    /**
     * Zooms the map to the extent of an array of {google.maps.Marker} objects.
     * @param {Array} markers The array of marker objects.
     * @return null
     */
    toMarkers: function(markers) {
      var latLngs = [],
          me = this;

      for (var i = 0; i < markers.length; i++) {
        latLngs.push(me.getMarkerLatLng(markers[i]));
      }

      this.toLatLngs(latLngs);
    },
    /**
     * Triggers an event.
     * @param {Object/String} target
     * @param {String} name
     * @param {Object} e
     * @return null
     */
    triggerEvent: function(target, name, e) {
      /*
      if (target === 'map') {
        e.targetType = 'map';
        target = map;
      }
      */

      if (target === 'map') {
        target = map;
      }

      google.maps.event.trigger(target, name, e);
    },
    /**
     * Zooms the map to a zoom level.
     * @param {Number} zoom
     * @return null
     */
    zoom: function(zoom) {
      map.setZoom(zoom);
    },
    /**
     * Zooms the map in by one zoom level.
     * @param {Boolean} toDot (Optional) If true, centerAndZoom will be called. Center is based on #npmap-clickdot location.
     * @return null
     */
    zoomIn: function(toDot) {
      if (toDot) {
        var position = Util.getOffset(document.getElementById('npmap-clickdot')),
            latLng = this.projection.fromContainerPixelToLatLng(new google.maps.Point(position.left, position.top));
        
        this.centerAndZoom(latLng.lat() + ',' + latLng.lng(), map.getZoom() + 1);
      } else {
        this.zoom(map.getZoom() + 1);
      }
    },
    /**
     * Zooms the map out by one zoom level.
     * @return null
     */
    zoomOut: function() {
      this.zoom(this.getZoom() - 1);
    }
  };
});