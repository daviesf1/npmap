/**
   * CartoDb - v0.54
   */
var CartoDB = CartoDB || {};

if (typeof google.maps.CartoDBLayer === 'undefined') {
  var CartoDBLayer = function(a) {
    this.extend(CartoDBLayer, google.maps.OverlayView);
    
    this.options = {
      query: "SELECT * FROM {{table_name}}",
      opacity: 1,
      auto_bound: false,
      debug: false,
      visible: true,
      added: false,
      loaded: null,
      loading: null,
      layer_order: "top",
      tiler_domain: "cartodb.com",
      tiler_port: "80",
      tiler_protocol: "http",
      sql_domain: "cartodb.com",
      sql_port: "80",
      sql_protocol: "http"
    };
    this.options = this._extend({}, this.options, a);
    this.setOptions = function(b) {
      google.maps.OverlayView.prototype.setOptions.call(this, {});
      this._setOptions(b);
    };
    
    if (!this.options.table_name || !this.options.map) {
      if (this.options.debug) {
        throw "cartodb-gmapsv3 needs at least a CartoDB table name and the gmapsv3 map object :(";
      }
    } else {
      this.initialize(), this.setMap(a.map);
    }
  };
  CartoDBLayer.prototype.extend = function(a, b) {
    return function(b) {
      for (var a in b.prototype) {
        this.prototype[a] = b.prototype[a];
      }

      return this;
    }.apply(a, [b]);
  };
  CartoDBLayer.prototype.initialize = function() {
    this.options.auto_bound && this.setBounds();
    this.options.map_style && this._setMapStyle();
  };
  CartoDBLayer.prototype.draw = function() {
  
  };
  CartoDBLayer.prototype.onAdd = function() {
    this._addInteraction();
    this.options.added = !0;
    google.maps.event.trigger(this, "added");
  };
  CartoDBLayer.prototype.onRemove = function() {
    this._remove();
    this.loaded && google.maps.event.removeListener(this.loaded);
    this.options.added = !1;
    google.maps.event.trigger(this, "removed");
  };
  CartoDBLayer.prototype.setOpacity = function(a) {
    if (this.options.added) {
      if (isNaN(a) || 1 < a || 0 > a) {
        if (this.options.debug) {
          throw a + " is not a valid value";
        }
      } else {
        this.options.opacity = a, this._update();
      }
    } else {
      if (this.options.debug) {
        throw "the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.setQuery = function(a, b) {
    if (this.options.added) {
      if (isNaN(a)) {
        b && this.setBounds(a), this.options.query = a, this._update();
      } else {
        if (this.options.debug) {
          throw a + " is not a valid query";
        }
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.setStyle = function(a) {
    if(this.options.added) {
      if(isNaN(a)) {
        this.options.tile_style = a, this._update()
      }else {
        if(this.options.debug) {
          throw a + " is not a valid style";
        }
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.setInteractivity = function(a) {
    if (this.options.added) {
      if (isNaN(a)) {
        this.options.interactivity = a, this._update();
      } else {
        if (this.options.debug) {
          throw a + " is not a valid setInteractivity value";
        }
      }
    } else {
      if (this.options.debug) {
        throw "the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.setLayerOrder = function(a) {
    if(this.options.added) {
      if(isNaN(a) && "top" != a && "bottom" != a) {
        if(this.options.debug) {
          throw a + " is not a valid layer position";
        }
      }else {
        this.layer.gmaps_index && delete this.layer.gmaps_index, this.options.layer_order = a, this._setLayerOrder()
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.setInteraction = function(a) {
    if (this.options.added) {
      if (!1 !== a && !0 !== a) {
        if (this.options.debug) {
          throw a + " is not a valid setInteraction value";
        }
      } else {
        if (this.interaction) {
          if (a) {
            var me = this;
            
            this.interaction.on("on", function(a) {
              me._bindWaxOnEvents(me.options.map, a);
            });
            this.interaction.on("off", function() {
              me._bindWaxOffEvents();
            });
          } else {
            this.interaction.off("on"), this.interaction.off("off");
          }
        }
      }
    } else {
      if (this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype._setOptions = function(a) {
    if(this.options.added) {
      if("object" != typeof a || a.length) {
        if(this.options.debug) {
          throw a + " options has to be an object";
        }
      }else {
        this.options = this._extend({}, this.options, a), this._update();
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.hide = function() {
    if (this.options.added) {
      if (this.options.visible) {
        this.options.visible = !1, this.options.before = this.options.opacity, this.setOpacity(0), this.setInteraction(!1), google.maps.event.trigger(this, "hidden");
      } else {
        if (this.options.debug) {
          throw "the layer is already hidden";
        }
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.show = function() {
    if(this.options.added) {
      if(this.options.visible) {
        if(this.options.debug) {
          throw"the layer is already shown";
        }
      }else {
        this.options.visible = !0, this.setOpacity(this.options.before), delete this.options.before, this.setInteraction(!0), google.maps.event.trigger(this, "shown")
      }
    }else {
      if(this.options.debug) {
        throw"the layer is not still added to the map";
      }
    }
  };
  CartoDBLayer.prototype.isVisible = function() {
    return this.options.visible
  };
  CartoDBLayer.prototype.isAdded = function() {
    return this.options.added
  };
  CartoDBLayer.prototype._remove = function() {
    this.setInteraction(!1);
    var a = this;
    this.options.map.overlayMapTypes.forEach(function(b, d) {
      b == a.layer && a.options.map.overlayMapTypes.removeAt(d)
    })
  };
  CartoDBLayer.prototype._update = function() {
    this._remove();
    this._addInteraction();
    google.maps.event.trigger(this, "updated")
  };
  CartoDBLayer.prototype.setBounds = function(a) {
    var b = this;
    
    a || (a = this.options.query);
    
    reqwest({
      url: this._generateCoreUrl("sql") + "/api/v2/sql/?q=" + escape("SELECT ST_XMin(ST_Extent(the_geom)) as minx,ST_YMin(ST_Extent(the_geom)) as miny,ST_XMax(ST_Extent(the_geom)) as maxx,ST_YMax(ST_Extent(the_geom)) as maxy from (" + a.replace(/\{\{table_name\}\}/g, this.options.table_name) + ") as subq"),
      type: "jsonp",
      jsonpCallback: "callback",
      success: function(a) {
        if (null !== a.rows[0].maxx) {
          var c = a.rows[0], f = c.maxx, e = c.maxy;
          a = c.minx;
          c = c.miny;
          a = -179 > a ? -179 : 179 < a ? 179 : a;
          c = -85.0511 > c ? -85.0511 : 85.0511 < c ? 85.0511 : c;
          f = new google.maps.LatLng(-85.0511 > e ? -85.0511 : 85.0511 < e ? 85.0511 : e, -179 > f ? -179 : 179 < f ? 179 : f);
          a = new google.maps.LatLng(c, a);
          a = new google.maps.LatLngBounds(a, f);
          b.options.map.fitBounds(a);
        }
      },
      error:function(a, b) {
        if(this.options.debug) {
          throw"Error getting table bounds: " + b;
        }
      }
    });
  };
  CartoDBLayer.prototype._setMapStyle = function() {
    var a = this;
    reqwest({url:this._generateCoreUrl("tiler") + "/tiles/" + this.options.table_name + "/map_metadata?callback=?", type:"jsonp", jsonpCallback:"callback", success:function(b) {
      b = json_parse(b.map_metadata);
      !b || "roadmap" == b.google_maps_base_type ? a.map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP}) : "satellite" == b.google_maps_base_type ? a.map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE}) : "terrain" == b.google_maps_base_type ? a.map.setOptions({mapTypeId:google.maps.MapTypeId.TERRAIN}) : (b.google_maps_customization_style = [{stylers:[{saturation:-65}, {gamma:1.52}]}, {featureType:"administrative", stylers:[{saturation:-95}, {gamma:2.26}]}, {featureType:"water", elementType:"labels", 
      stylers:[{visibility:"off"}]}, {featureType:"administrative.locality", stylers:[{visibility:"off"}]}, {featureType:"road", stylers:[{visibility:"simplified"}, {saturation:-99}, {gamma:2.22}]}, {featureType:"poi", elementType:"labels", stylers:[{visibility:"off"}]}, {featureType:"road.arterial", stylers:[{visibility:"off"}]}, {featureType:"road.local", elementType:"labels", stylers:[{visibility:"off"}]}, {featureType:"transit", stylers:[{visibility:"off"}]}, {featureType:"road", elementType:"labels", 
      stylers:[{visibility:"off"}]}, {featureType:"poi", stylers:[{saturation:-55}]}], a.map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP}));
      b || (b = {google_maps_customization_style:[]});
      a.map.setOptions({styles:b.google_maps_customization_style})
    }, error:function(a, d) {
      if(params.debug) {
        throw"Error getting map style: " + d;
      }
    }})
  };
  CartoDBLayer.prototype._addInteraction = function() {
    var a = this;
    this.tilejson = this._generateTileJson();
    this.layer = new wax.g.connector(this.tilejson);
    this.loaded = google.maps.event.addListener(this.options.map, "tilesloaded", function() {
      google.maps.event.trigger(a, "loaded")
    });
    this._setLayerOrder();
    this._checkTiles();
    this.options.interactivity && (this.interaction = wax.g.interaction().map(this.options.map).tilejson(this.tilejson).on("on", function(b) {
      a._bindWaxOnEvents(a.options.map, b)
    }).on("off", function() {
      a._bindWaxOffEvents()
    }))
  };
  CartoDBLayer.prototype._bindWaxOnEvents = function(a, b) {
    var d = this._findPos(a, b), c = this.getProjection().fromContainerPixelToLatLng(d);
    switch(b.e.type) {
      case "mousemove":
        if(this.options.featureOver) {
          return this.options.featureOver(b.e, c, d, b.data)
        }
        if(this.options.debug) {
          throw"featureOver function not defined";
        }
        break;
      case "click":
        if(this.options.featureClick) {
          this.options.featureClick(b.e, c, d, b.data)
        }else {
          if(this.options.debug) {
            throw"featureClick function not defined";
          }
        }
        break;
      case "touchend":
        if(this.options.featureClick) {
          this.options.featureClick(b.e, c, d, b.data)
        }else {
          if(this.options.debug) {
            throw"featureClick function not defined";
          }
        }
    }
  };
  CartoDBLayer.prototype._bindWaxOffEvents = function() {
    if(this.options.featureOut) {
      return this.options.featureOut && this.options.featureOut()
    }
    if(this.options.debug) {
      throw"featureOut function not defined";
    }
  };
  CartoDBLayer.prototype._generateTileJson = function() {
    var a = this._generateTileUrls();
    return{blankImage:"../img/blank_tile.png", tilejson:"1.0.0", scheme:"xyz", name:this.options.table_name, tiles:[a.tile_url], grids:[a.grid_url], tiles_base:a.tile_url, grids_base:a.grid_url, opacity:this.options.opacity, formatter:function(a, d) {
      return d
    }}
  };
  CartoDBLayer.prototype._setLayerOrder = function() {
    var a = this;
    this.options.map.overlayMapTypes.forEach(function(b, c) {
      b == a.layer && a.options.map.overlayMapTypes.removeAt(c)
    });
    if(this.layer.gmaps_index) {
      this.options.map.overlayMapTypes.insertAt(this.layer.gmaps_index, this.layer)
    }else {
      if("top" == this.options.layer_order) {
        this.options.map.overlayMapTypes.push(this.layer)
      }else {
        if("bottom" == this.options.layer_order) {
          this.options.map.overlayMapTypes.insertAt(0, this.layer)
        }else {
          var b = this.options.map.overlayMapTypes.getLength();
          this.options.layer_order >= b ? this.options.map.overlayMapTypes.push(this.layer) : 0 >= this.options.layer_order ? this.options.map.overlayMapTypes.insertAt(0, this.layer) : this.options.map.overlayMapTypes.insertAt(this.options.layer_order, this.layer);
          this.options.map.overlayMapTypes.forEach(function(a, b) {
            a.gmaps_index = b
          })
        }
      }
    }
  };
  CartoDBLayer.prototype._generateCoreUrl = function(a) {
    return"sql" == a ? this.options.sql_protocol + "://" + (this.options.user_name ? this.options.user_name + "." : "") + this.options.sql_domain + ("" != this.options.sql_port ? ":" + this.options.sql_port : "") : this.options.tiler_protocol + "://" + (this.options.user_name ? this.options.user_name + "." : "") + this.options.tiler_domain + ("" != this.options.tiler_port ? ":" + this.options.tiler_port : "")
  };
  CartoDBLayer.prototype._generateTileUrls = function() {
    var a = this._generateCoreUrl("tiler"), b = a + "/tiles/" + this.options.table_name + "/{z}/{x}/{y}", d = b + ".png", c = b + ".grid.json";
    if(this.options.query) {
      var f = encodeURIComponent(this.options.query.replace(/\{\{table_name\}\}/g, this.options.table_name)), f = f.replace(/%7Bx%7D/g, "{x}").replace(/%7By%7D/g, "{y}").replace(/%7Bz%7D/g, "{z}"), f = "sql=" + f, d = this._addUrlData(d, f), c = this._addUrlData(c, f)
    }
    for(_param in this.options.extra_params) {
      d = this._addUrlData(d, _param + "=" + this.options.extra_params[_param]), c = this._addUrlData(c, _param + "=" + this.options.extra_params[_param])
    }
    this.options.tile_style && (f = "style=" + encodeURIComponent(this.options.tile_style.replace(/\{\{table_name\}\}/g, this.options.table_name)), d = this._addUrlData(d, f), c = this._addUrlData(c, f));
    this.options.interactivity && (f = "interactivity=" + encodeURIComponent(this.options.interactivity.replace(/ /g, "")), d = this._addUrlData(d, f), c = this._addUrlData(c, f));
    return{core_url:a, base_url:b, tile_url:d, grid_url:c}
  };
  CartoDBLayer.prototype._parseUri = function(a) {
    var b = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
    a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);
    for(var d = {}, c = 14;c--;) {
      d[b[c]] = a[c] || ""
    }
    d.queryKey = {};
    d[b[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(a, b, c) {
      b && (d.queryKey[b] = c)
    });
    return d
  };
  CartoDBLayer.prototype._addUrlData = function(a, b) {
    a += this._parseUri(a).query ? "&" : "?";
    return a + b
  };
  CartoDBLayer.prototype._extend = function(a) {
    for(var b = Array.prototype.slice.call(arguments, 1), d = 0, c = b.length, f;d < c;d++) {
      f = b[d] || {};
      for(var e in f) {
        f.hasOwnProperty(e) && (a[e] = f[e])
      }
    }
    return a
  };
  CartoDBLayer.prototype._findPos = function(a, b) {
    var d = curtop = 0, c = a.getDiv();
    do {
      d += c.offsetLeft, curtop += c.offsetTop
    }while(c = c.offsetParent);
    return new google.maps.Point((b.e.clientX || b.e.changedTouches[0].clientX) - d, (b.e.clientY || b.e.changedTouches[0].clientY) - curtop)
  };
  CartoDBLayer.prototype._checkTiles = function() {
    var a = this;
    new Image;
    var b = this._generateTileUrls();
    b.tile_url = b.tile_url.replace(/\{z\}/g, 4).replace(/\{x\}/g, 6).replace(/\{y\}/g, 6);
    b.grid_url = b.grid_url.replace(/\{z\}/g, 4).replace(/\{x\}/g, 6).replace(/\{y\}/g, 6);
    reqwest({method:"get", url:b.grid_url, type:"jsonp", jsonpCallback:"callback", jsonpCallbackName:"grid", success:function() {
      clearTimeout(d)
    }, error:function(b, d) {
      a.interaction && a.interaction.remove();
      if(a.options.debug) {
        throw"There is an error in your query or your interaction parameter";
      }
      google.maps.event.trigger(this, "layererror", d)
    }});
    var d = setTimeout(function() {
      clearTimeout(d);
      a.interaction && a.interaction.remove();
      if(a.options.debug) {
        throw"There is an error in your query or your interaction parameter";
      }
      google.maps.event.trigger(this, "layererror", "There is a problem in your SQL or interaction parameter")
    }, 2E3)
  }
}
var json_parse = function() {
  var a, b, d = {'"':'"', "\\":"\\", "/":"/", b:"\b", f:"\f", n:"\n", r:"\r", t:"\t"}, c, f = function(b) {
    throw{name:"SyntaxError", message:b, at:a, text:c};
  }, e = function(d) {
    d && d !== b && f("Expected '" + d + "' instead of '" + b + "'");
    b = c.charAt(a);
    a += 1;
    return b
  }, k = function() {
    var a;
    a = "";
    "-" === b && (a = "-", e("-"));
    for(;"0" <= b && "9" >= b;) {
      a += b, e()
    }
    if("." === b) {
      for(a += ".";e() && "0" <= b && "9" >= b;) {
        a += b
      }
    }
    if("e" === b || "E" === b) {
      a += b;
      e();
      if("-" === b || "+" === b) {
        a += b, e()
      }
      for(;"0" <= b && "9" >= b;) {
        a += b, e()
      }
    }
    a = +a;
    if(isFinite(a)) {
      return a
    }
    f("Bad number")
  }, l = function() {
    var a, c, h = "", g;
    if('"' === b) {
      for(;e();) {
        if('"' === b) {
          return e(), h
        }
        if("\\" === b) {
          if(e(), "u" === b) {
            for(c = g = 0;4 > c;c += 1) {
              a = parseInt(e(), 16);
              if(!isFinite(a)) {
                break
              }
              g = 16 * g + a
            }
            h += String.fromCharCode(g)
          }else {
            if("string" === typeof d[b]) {
              h += d[b]
            }else {
              break
            }
          }
        }else {
          h += b
        }
      }
    }
    f("Bad string")
  }, g = function() {
    for(;b && " " >= b;) {
      e()
    }
  }, m = function() {
    switch(b) {
      case "t":
        return e("t"), e("r"), e("u"), e("e"), !0;
      case "f":
        return e("f"), e("a"), e("l"), e("s"), e("e"), !1;
      case "n":
        return e("n"), e("u"), e("l"), e("l"), null
    }
    f("Unexpected '" + b + "'")
  }, j;
  j = function() {
    g();
    switch(b) {
      case "{":
        var a;
        a: {
          var c = {};
          if("{" === b) {
            e("{");
            g();
            if("}" === b) {
              e("}");
              a = c;
              break a
            }
            for(;b;) {
              a = l();
              g();
              e(":");
              Object.hasOwnProperty.call(c, a) && f('Duplicate key "' + a + '"');
              c[a] = j();
              g();
              if("}" === b) {
                e("}");
                a = c;
                break a
              }
              e(",");
              g()
            }
          }
          f("Bad object");
          a = void 0
        }
        return a;
      case "[":
        a: {
          a = [];
          if("[" === b) {
            e("[");
            g();
            if("]" === b) {
              e("]");
              break a
            }
            for(;b;) {
              a.push(j());
              g();
              if("]" === b) {
                e("]");
                break a
              }
              e(",");
              g()
            }
          }
          f("Bad array");
          a = void 0
        }
        return a;
      case '"':
        return l();
      case "-":
        return k();
      default:
        return"0" <= b && "9" >= b ? k() : m()
    }
  };
  return function(d, e) {
    var h;
    c = d;
    a = 0;
    b = " ";
    h = j();
    g();
    b && f("Syntax error");
    return"function" === typeof e ? function n(a, b) {
      var c, d, f = a[b];
      if(f && "object" === typeof f) {
        for(c in f) {
          Object.prototype.hasOwnProperty.call(f, c) && (d = n(f, c), void 0 !== d ? f[c] = d : delete f[c])
        }
      }
      return e.call(a, b, f)
    }({"":h}, "") : h
  }
}();