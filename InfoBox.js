// TODO: underscore.js is a requirement. Make sure it is loaded properly.
// TODO: Auto-pan is working properly except for when parent === 'page' and you've scrolled horizontally/vertically and at least one side of the InfoBox falls off of the page.
define([
  'Util/Util'
], function(Util) {
  var
      // The InfoBox config object from the NPMap.config object.
      config = NPMap.config.infobox || {},
      // The number of actions currently being displayed in the InfoBox.
      actions = 0,
      // Where to position the InfoBox anchor. Currently, the only valid value is 'right'.
      anchorPosition = 'right',
      // The design to use for the InfoBox.
      design = config.design || 'basic',
      // The infobox div.
      infobox = document.createElement('div'),
      // The map div.
      mapDiv = document.getElementById(NPMap.config.div),
      // The height of the map div.
      mapHeight = mapDiv.offsetHeight,
      // The position of the map on the page in pixels.
      mapPosition = {
        east: 0,
        north: 0,
        south: 0,
        west: 0
      },
      // The width of the map div.
      mapWidth = mapDiv.offsetWidth,
      // This variable holds the user-defined maxHeight for the #npmapinfobox div.
      maxHeight = null,
      // This variable holds the user-defined maxWidth for the #npmapinfobox div.
      maxWidth = null,
      // The offset of the map div element (NPMap.config.div).
      offset = NPMap.Util.getMapDivOffset(),
      // The left offset of the map div element, in pixels.
      offsetLeft = offset.left,
      // The top offset of the map div element, in pixels.
      offsetTop = offset.top,
      // The amount of padding, in pixels, to preserve between the edge of the InfoBox and the edge of the map.
      padding = config.padding || 20,
      //
      paddingSetting = padding,
      // The pan configuration.
      pan = config.pan || 'map',
      // The parent config.
      parent = config.parent || 'map',
      // Should the boundsCheck be skipped?
      skipBoundsCheck = false,
      // An object with CSS key-value pairs.
      styles = config.styles || {},
      // The height of the browser window, in pixels.
      windowHeight = $(window).height(),
      // The width of the browser window, in pixels.
      windowWidth = $(window).width(),
      // Should the map pan when an InfoBox is shown or resized?
      panActivated = (function() {
        if (parent === 'map' && (pan === 'center' || pan === 'map')) {
          return true;
        } else if (parent === 'page' && (pan === 'center' || pan === 'map' || pan === 'page')) {
          return true;
        } else {
          return false;
        }
      })();
  /**
   * Checks to see if the InfoBox is overlapping beyond the edges of the InfoBox's parent element.
   * @param {Function} callback
   */
  function checkBounds(callback) {
    if (NPMap.InfoBox && NPMap.InfoBox.visible) {
      var $me = $('#npmap-infobox'),
          clickDotPixel = NPMap.Map[NPMap.config.api].pixelFromApi(NPMap.Map[NPMap.config.api].getClickDotPixel()),
          p = {
            left: clickDotPixel.x - $me.outerWidth() + 69, // TODO: Take into account width - hook.
            top: clickDotPixel.y - $me.outerHeight() - $('#npmap-infobox-bottom').outerHeight()
          },
          paddingHalved = (padding / 2),
          r = {
            h: 0,
            v: 0
          };

      if (parent === 'page') {
        var scrollPosition = Util.getScrollPosition();
        p.left = p.left + (mapPosition.west - scrollPosition.x);
        p.top = p.top + (mapPosition.north - scrollPosition.y);
      }

      if (pan === 'center') {
        var h = (mapHeight - $me.outerHeight()) / 2,
            o = NPMap.Util.getMapDivOffset(),
            w = (mapWidth - $me.outerWidth()) / 2;

        if (parent === 'map') {
          o.left = 0;
          o.top = 0;

          if (p.top < 0) {
            r.v = -p.top + h + o.top;
          } else {
            r.v = h - p.top + o.top;
          }
        } else {
          r.v = (mapHeight / 2) - clickDotPixel.y + $('#npmap-infobox-bottom').outerHeight() + $me.outerHeight() / 2;
        }

        if (p.left < 0) {
          if (parent === 'map') {
            r.h = -p.left + w + o.left;
          } else {
            // TODO: Hook this up for parent === 'page'
            r.h = -p.left + (mapWidth / 2) - (($me.outerWidth() * 2) / 2);
          }
        } else {
          r.h = w - p.left + o.left;
        }
      } else {
        $.each(mapPosition, function(i, v) {
          switch (i) {
            case 'east':
              if (parent === 'map' && pan === 'map') {
                var o = p.left + $me.outerWidth() - mapWidth;

                if (o > 0) {
                  r.h = -o - paddingHalved;
                } else if (Math.abs(o) < paddingHalved) {
                  r.h = -paddingHalved - o;
                }
              } else {
                if (pan === 'map') {
                  if ((p.left + $me.outerWidth()) > mapPosition.east) {
                    r.h = mapPosition.east - (p.left + $me.outerWidth()) - paddingHalved;
                  } else if (p.left + $me.outerWidth() > mapPosition.east - paddingHalved) {
                    r.h = mapPosition.east - paddingHalved - (p.left + $me.outerWidth());
                  }
                } else if (pan === 'page') {
                  var n = (p.left + $me.outerWidth()) - windowWidth;

                  if (n > 0) {
                    r.h = -n - paddingHalved;
                  }
                }
              }
  
              break;
            case 'north':
              if (parent === 'map' && pan === 'map') {
                if (p.top < paddingHalved) {
                  if (p.top < 0) {
                    r.v = Math.abs(p.top) + paddingHalved;
                  } else {
                    r.v = paddingHalved - p.top;
                  }
                }
              } else {
                if (pan === 'map') {
                  if (p.top < mapPosition.north) {
                    r.v = mapPosition.north - p.top + paddingHalved;
                  } else if (p.top < mapPosition.north + paddingHalved) {
                    r.v = mapPosition.north - (p.top - paddingHalved);
                  }
                } else if (pan === 'page') {
                  if (p.top < 0) {
                    r.v = Math.abs(p.top) + paddingHalved;
                  }
                }
              }
              
              break;
            case 'south':
              // TODO: Implement when you have an InfoBox design that needs it.
              break;
            case 'west':
              if (parent === 'map' && pan === 'map') {
                if (p.left < 0) {
                  r.h = Math.abs(p.left) + paddingHalved;
                } else if (p.left < paddingHalved) {
                  r.h = paddingHalved -p.left;
                }
              } else {
                if (pan === 'map') {
                  if (p.left < mapPosition.west) {
                    r.h = mapPosition.west - p.left + paddingHalved;
                  } else if (p.left < mapPosition.west + paddingHalved) {
                    r.h = paddingHalved - (p.left - mapPosition.west);
                  }
                } else if (pan === 'page') {
                  if (p.left < 0) {
                    r.h = Math.abs(p.left) + paddingHalved;
                  }
                }
              }
              
              break;
          }
        });
      }

      // TODO: MAYBE??? Get the height and width of the InfoBox, and verify that there is enough space to reposition it. If there isn't, don't reposition it.
      if ((r.h !== 0 && r.h < mapWidth) || (r.v !== 0 && r.v < mapHeight)) {
        NPMap.Map.panByPixels({
          x: r.h,
          y: r.v
        }, function() {
          if (callback) {
            callback();
          }
        });
      } else if (callback) {
        callback();
      }
    }
  }
  /**
   * Positions the InfoBox.
   * @param {Function} callback (Optional)
   */
  function position(callback) {
    var bottom,
        clickDotPosition = $('#npmap-clickdot').position(),
        clickDotLeft = clickDotPosition.left,
        clickDotTop = clickDotPosition.top,
        divInfoBox = document.getElementById('npmap-infobox'),
        right;

    if (parent === 'map') {
      bottom = mapHeight - clickDotTop;
      right = mapWidth - clickDotLeft;

      if (design === 'basic') {
        bottom = bottom + 30;
        right = right - 69;
      } else if (design === 'nps' || design === 'pyv') {
        bottom = bottom + 24;
        right = right - ($('#npmap-infobox').outerWidth() / 2) - 8;
      }
    } else if (parent === 'page') {
      if (design === 'basic') {
        bottom = (windowHeight - (clickDotTop + offsetTop)) + 30;
        right = (windowWidth - clickDotLeft - offsetLeft - 69);
      } else if (design === 'nps' || design === 'pyv') {
        // TODO: You need to test this. You'll have to adjust it.
        bottom = (windowHeight - (clickDotTop + offsetTop)) + 30;
        right = (windowWidth - clickDotLeft - offsetLeft - 69);
      }
    }

    divInfoBox.style.bottom = bottom + 'px';
    divInfoBox.style.right = right + 'px';

    if (callback) {
      callback();
    }
    
    refreshOffsetsAndWidth();
  }
  /**
   * Refreshes the dimensions of the map.
   */
  function refreshDimensions() {
    var divMap = document.getElementById('npmap-map'),
        offset = Util.getMapDivOffset(),
        left = offset.left,
        top = offset.top;
    
    mapPosition.east = left + divMap.offsetWidth;
    mapPosition.north = top;
    mapPosition.south = top + divMap.offsetHeight;
    mapPosition.west = left;
  }
  /**
   * Updates the mapPosition object, sets the max-height/width dimensions of the InfoBox, and checks the bounds of the InfoBox.
   */
  function refreshDimensionsAndHeightWidth() {
    refreshDimensions();
    
    if (!maxHeight) {
      setMaxHeight();
    }
    
    if (!maxWidth) {
      setMaxWidth();
    }
    
    /*
    if (NPMap.InfoBox && NPMap.InfoBox.visible) {
      checkBounds();
    }
    */
  }
  /**
   * Refreshes the map div offsets and width.
   */
  function refreshOffsetsAndWidth() {
    // TODO: You should move this into NPMap.Map.
    mapHeight = mapDiv.offsetHeight;
    mapWidth = mapDiv.offsetWidth;
    offset = NPMap.Util.getMapDivOffset();
    offsetLeft = offset.left;
    offsetTop = offset.top;
    windowHeight = $(window).height();
    windowWidth = $(window).width();
  }
  /**
   * Resizes an image to fit into the current InfoBox content size.
   * @param {Object} img The image or "object" to work with.
   * @param {Number} mH The max-height.
   * @param {Number} mW The max-width.
   */
  function resizeImageForContent(img, mH, mW) {
    var $img = $(img);
    
    if ($img.height() > mH) {
      $img.css({
        height: mH
      });
    }
    
    if ($img.width() > mW) {
      $img.css({
        width: mW
      });
    }
    
    if ($img.height() > $('#npmap-infobox-content-wrapper').outerHeight()) {
      $('#npmap-infobox-content-wrapper').css({
        height: $img.height()
      });
    }
    
    if ($img.width() > $('#npmap-infobox-content-wrapper').outerWidth()) {
      $('#npmap-infobox-content-wrapper').css({
        width: $img.width()
      });
    }
  }
  /**
   * Sets the maxHeight of the InfoBox based on the height of the map div.
   */
  function setMaxHeight() {
    // TODO: If parent is set to 'page', you need to set maxHeight based on available height. This should probably update when the page is scrolled vertically?

    var valid = mapHeight - (padding * 2);

    if (maxHeight && (maxHeight <= valid)) {
      // Leave it.
    } else {
      maxHeight = valid;
      
      // TODO: Animate.
      $('#npmap-infobox').css('max-height', maxHeight + 'px');
    }
  }
  /**
   * Sets the maxWidth of the InfoBox based on the height of the map div.
   */
  function setMaxWidth() {
    // TODO: If parent is set to 'page', you need to set maxWidth based on available width. This should probably update when the page is scrolled horizontally?
    
    var valid = mapWidth - (padding * 2);

    if (maxWidth && (maxWidth <= valid)) {
      // Leave it.
    } else {
      maxWidth = valid;
      
      // TODO: Animate.
      $('#npmap-infobox').css('max-width', maxWidth + 'px');
    }
  }
  function setupInfoBox() {
    $.each(styles, function(i, v) {
      if (i === 'max-height' || i === 'maxHeight') {
        if (typeof(v) === 'string') {
          v = v.replace('px', '');
        }
        
        maxHeight = parseFloat(v);
        $('#npmap-infobox').css(i, v + 'px !important');
      } else if (i === 'max-width' || i === 'maxWidth') {
        if (typeof(v) === 'string') {
          v = v.replace('px', '');
        }
        
        maxWidth = parseFloat(v);
        $('#npmap-infobox').css(i, v + 'px !important');
      } else {
        $('#npmap-infobox').css(i, v + ' !important');
      }
    });
    
    if (!maxHeight) {
      setMaxHeight();
    }
    
    if (!maxWidth) {
      setMaxWidth();
    }
    
    $('#npmap-infobox').bind('contextmenu', function(e) {
      e.stopPropagation();
    }).bind('click', function(e) {
      e.stopPropagation();
    }).bind('dblclick', function(e) {
      e.stopPropagation();
    }).bind('mousedown', function(e) {
      e.stopPropagation();
    }).bind('mouseover', function(e) {
      e.stopPropagation();
    }).bind('mousewheel', function(e) {
      e.stopPropagation();
    });
    
    // TODO: Change cursor to default.
    
    if (panActivated) {
      $(mapDiv).resize(refreshDimensionsAndHeightWidth);
    } else {
      $(mapDiv).resize(refreshDimensions);
    }
    
    // TODO: Test this.
    if (parent === 'page') {
      $(window).resize(function() {
        refreshOffsetsAndWidth();

        if (NPMap.InfoBox && NPMap.InfoBox.visible) {
          NPMap.InfoBox.reposition();
        }
      
        refreshDimensions();
      });
    }
    
    refreshDimensions();
    refreshOffsetsAndWidth();
  }

  // Setup underscorejs to do mustache.js style templating.
  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };
  
  if (design === 'basic') {
    NPMap.Util.injectCss(NPMap.config.server + '/resources/css/classes/infobox/basic.css');
    
    infobox.innerHTML = '<div id="npmap-infobox-close" onclick="NPMap.InfoBox.hide();return false;"></div><div id="npmap-infobox-title"></div><div id="npmap-infobox-content-wrapper"><div id="npmap-infobox-content"></div></div><div id="npmap-infobox-footer"></div><div id="npmap-infobox-bottom"><img src="' + NPMap.config.server + '/resources/img/classes/infobox/hook' + (Modernizr.boxshadow ? '-shadow' : '') + '.png" style="right:23px;position:absolute;" /></div>';
  } else if (design === 'nps' || design === 'pyv') {
    NPMap.Util.injectCss(NPMap.config.server + '/resources/css/classes/infobox/nps.css');
    
    // TODO: Add support for non-shadowed "hook".
    infobox.innerHTML = '<div id="npmap-infobox-close" class="close" onclick="NPMap.InfoBox.hide();return false;"></div><div id="npmap-infobox-title"></div><div id="npmap-infobox-content-wrapper"><div id="npmap-infobox-content"></div></div><div id="npmap-infobox-footer"></div><div id="npmap-infobox-bottom"><div style="height:25px;margin:auto;width:18px;"><img src="' + NPMap.config.server + '/resources/img/classes/infobox/hook-nps.png" /></div>';
  }
  
  infobox.className = 'shadow';
  infobox.id = 'npmap-infobox';
  infobox.style.display = 'none';
  infobox.style.position = 'absolute';
  
  if (parent === 'map') {
    infobox.style.zIndex = 1;

    NPMap.Util.safeLoad('NPMap.Map', function() {
      NPMap.Map.addElementToMapDiv(infobox);
      setupInfoBox();
    });
  } else {
    infobox.style.zIndex = 999999;
    
    document.body.appendChild(infobox);
    setupInfoBox();
  }
  
  return NPMap.InfoBox = {
    // An array of event handler objects that have been added to this class.
    _events: [],
    /**
     * Builds a HTML string for the InfoBox.
     * @param {Object} config The layer config object.
     * @param {Object} attributes A set of key-value pair attributes.
     * @param {String} element The identify element to build the HTML string for.
     * @return {String}
     */
    _build: function(config, attributes, element) {
      var html = null,
          template;

      if (!config) {
        if (typeof NPMap.config.identify !== 'undefined' && typeof NPMap.config.identify[element] !== 'undefined') {
          if (typeof NPMap.config.identify[element] === 'function') {
            html = NPMap.config.identify[element](attributes);
          } else {
            template = _.template(NPMap.config.identify[element]);
            html = template(attributes);
          }
        }
      } else {
        if (typeof config.identify !== 'undefined' && typeof config.identify[element] !== 'undefined') {
          if (typeof config.identify[element] === 'function') {
            html = config.identify[element](attributes);
          } else {
            template = _.template(config.identify[element]);
            html = template(attributes);
          }
        }
      }
      
      if (!html) {
        if (element === 'content') {
          html = 'There is no description available for this location.';
        } else if (element === 'title') {
          html = 'No Title';
        }
      }

      return html;
    },
    // An array of action objects associated with the current identify operation. This is null if the InfoBox is hidden.
    actions: [],
    // An array of result objects for the current identify operation. This is null if the InfoBox is hidden.
    results: [],
    // The current latitude/longitude, in "latitude,longitude" format, of the InfoBox (or is it the InfoBox's anchor?). If the InfoBox is hidden, this will be null.
    latLng: null,
    // The current marker, if a marker is present. This is null if the InfoBox is displaying without a marker or if the InfoBox is hidden.
    marker: null,
    // Is the InfoBox currently visible?
    visible: false,
    /**
     * Hides the InfoBox.
     */
    hide: function() {
      if (this.visible) {
        $('#npmap-infobox').hide();
        
        if (this.marker && this.marker.oldIconUrl) {
          NPMap.Map[NPMap.config.api].setMarkerIcon(this.marker, this.marker.oldIconUrl);
          delete this.marker.oldIconUrl;
        }

        $('#npmap-infobox').css({
          width: 'auto'
        });
        $('#npmap-infobox-content-wrapper').css({
          height: 'auto',
          width: '250px'
        });
        $('#npmap-infobox-footer').hide();

        this.actions = [];
        this.visible = false;
        this.latLng = null;
        this.marker = null;
        
        NPMap.Event.trigger('InfoBox', 'hide');
      }
    },
    /**
     * Removes an action HTML element (<a>) from the InfoBox.
     */
    removeAction: function(el) {
      $(el).remove();
      
      actions--;
      skipBoundsCheck = true;

      if (actions === 0) {
        $('#npmap-infobox-footer').hide();
      }
    },
    /**
     * Repositions the npmap-clickdot div then repositions the InfoBox. If the marker or npmap-clickdot is not in the current map bounds, it is hidden.
     */
    reposition: function() {
      var to = this.marker || this.latLng;

      NPMap.Map[NPMap.config.api].positionClickDot(to);
      
      if (NPMap.Map[NPMap.config.api].isLatLngWithinMapBounds(NPMap.Map[NPMap.config.api].getClickDotLatLng()) === true) {
        position();
      } else {
        // TODO: This should only hide if 'parent' is 'page'. Right now, however, the baseApi code doesn't support negative positioning of #npmap-clickdot.
        this.hide();
      }
    },
    /**
     * Shows the InfoBox.
     * @param {String} content The content string (HTML allowed) to set the InfoBox's content div to.
     * @param {String} title The title string (HTML allowed) to set the InfoBox's title div to.
     * @param {String} footer (Optional) The footer string (HTML allowed) to set the InfoBox's footer div to.
     * @param {Array} actions (Optional) An array of action objects and template strings (like 'zoombable').
     * @param {Object} styles (Optional) An object w/nested objects to override individual styles for the content, title, and/or footer divs. Example: {content: {maxHeight: '500px'}}.
     * @param {String} or {Object} target (Optional) Either a latitude,longitude string or a marker object to position the InfoBox too.
     */
    show: function(content, title, footer, actions, styles, target) {
      var bottomHeight,
          footerHeight,
          hasFooterContent = false,
          me = this,
          mH;
      
      if (target) {
        NPMap.Map[NPMap.config.api].positionClickDot(target);

        if (typeof target === 'string' || (typeof target === 'object' && typeof target.lat === 'number')) {
          NPMap.InfoBox.latLng = target;
        } else {
          NPMap.InfoBox.latLng = NPMap.Map.getMarkerLatLng(target);
          NPMap.InfoBox.marker = target;
        }
      }

      NPMap.Map.hideTip();
      $('#npmap-infobox-content-wrapper').css({
        height: 'auto',
        width: design === 'basic' ? '250px' : '381px'
      });
      $('#npmap-infobox-footer').hide();
      $('#npmap-infobox-title').html(title);
      
      actions = actions || [];
      
      me.actions = [];
      
      if (config.skipActions) {
        actions = [];
      } else {
        if (actions.length > 0) {
          var add = [],
              remove = [];
          
          $.each(actions, function(i, v) {
            if (typeof v === 'string') {
              switch (v) {
                case 'zoomable':
                  if (NPMap.config.api != 'modestmaps') {
                    var max = NPMap.Map[NPMap.config.api].getMaxZoom();
  
                    if (NPMap.Map[NPMap.config.api].getZoom() < max) {
                      add.push({
                        handler: function() {
                          //NPMap.InfoBox.removeAction(this);
                          NPMap.Map.centerAndZoom(me.latLng, max);
                        },
                        text: 'Zoom to this location'
                      });
                    }
                  }

                  remove.push(i);
  
                  break;
              }
            }
          });
          $.each(remove, function(i, v) {
            actions.remove(v);
          });
          $.each(add, function(i, v) {
            actions.push(v);
          });
        }
        
        if (NPMap.config.modules) {
          $.each(NPMap.config.modules, function(i, v) {
            switch (v.name) {
              case 'route':
                var address = null,
                  config = v,
                  latLngSplit = me.latLng.split(','),
                  lat = parseFloat(latLngSplit[0]).toFixed(5),
                  lng = parseFloat(latLngSplit[1]).toFixed(5),
                  titleNoHtml = ($.trim(NPMap.Util.stripHtmlFromString(title))).replace(/'/g, '{singlequote}');
                
              if (this.marker && this.marker.data) {
                if (this.marker.data['address']) {
                  address = this.marker.data['address'];
                } else if (this.marker.data['Address']) {
                  address = this.marker.data['Address'];
                } else if (config.addressAttribute && this.marker.data[config.addressAttribute]) {
                  address = this.marker.data[config.addressAttribute];
                }
              }
              
              address = address || null;
              
              if (config.mode === 'multi') {
                actions.push({
                  handler: function() {
                    NPMap.Route.addDestinationToItinerary(address, lat, lng, titleNoHtml);
                  },
                  text: 'Add destination to itinerary'
                });
              } else {
                actions.push({
                  group: 'Route',
                  handler: function() {
                    NPMap.Route.addDestinationFrom(address, lat, lng, titleNoHtml);
                  },
                  text: 'Directions from here'
                });
                actions.push({
                  group: 'Route',
                  handler: function() {
                    NPMap.Route.addDestinationTo(address, lat, lng, titleNoHtml);
                  },
                  text: 'Directions to here'
                });
              }
                
              break;
            }
          });
        }
        
        actions.sort(function(a, b) {
          // TODO: Figure out how to work with groups and take into account here.
          return a.text > b.text;
        });
        
        me.actions = actions;
  
        actions = (function() {
          var a = [];
  
          $.each(actions, function(i, v) {
            var h = '<a href="javascript:void(0)"';

            if (v.text.indexOf('Back') === 0) {
              h += ' class="back"';
            }
  
            h += ' onclick="NPMap.InfoBox.actions[' + i + '].handler();return false;">' + v.text + '</a>';
  
            a.push(h);
          });
          
          return a;
        })();
      }

      if (content) {
        content = content.replace(/\'/g, '&#39;');
      }
      
      if (footer) {
        footer = footer.replace(/\'/g, '&#39;');
      }
      
      if (title) {
        title = title.replace(/\'/g, '&#39;');
      }
      
      if (this.marker) {
        this.latLng = NPMap.Map.getMarkerLatLng(this.marker);
        
        if (this.marker.highlightIconUrl) {
          this.marker.oldIconUrl = NPMap.Map[NPMap.config.api].getMarkerIcon(this.marker);
          NPMap.Map[NPMap.config.api].setMarkerIcon(this.marker, this.marker.highlightIconUrl);
        }
      } else if (!this.latLng) {
        this.latLng = NPMap.Map[NPMap.config.api].latLngFromApi(NPMap.Map[NPMap.config.api].getClickDotLatLng());
      }
      
      if (footer) {
        if (actions.length > 0) {
          $.each(actions, function(i, v) {
            footer += v + '<br>';
          });
          
          footer = footer.slice(0, footer.length - 4);
        }
        
        $('#npmap-infobox-footer').html('<div style="text-align:left;">' + footer + '</div>').show();
        hasFooterContent = true;
      } else {
        if (actions.length > 0) {
          var h = '';

          $.each(actions, function(i, v) {
            h += v + '<br>';
          });

          h = h.slice(0, h.length - 4);
          
          $('#npmap-infobox-footer').html('<div style="text-align:left;">' + h + '</div>').show();
          hasFooterContent = true;
        } else {
          $('#npmap-infobox-footer').hide();
          hasFooterContent = true;
        }
      }
      
      bottomHeight = $('#npmap-infobox-bottom').outerHeight();
      footerHeight = (function() {
        if (hasFooterContent) {
          return $('#npmap-infobox-footer').outerHeight();
        } else {
          return 0;
        }
      })();
      mH = maxHeight - $('#npmap-infobox-title').outerHeight() - bottomHeight;

      if (padding < (bottomHeight + footerHeight)) {
        padding = bottomHeight + footerHeight;
      }
      
      mH = mH - padding;
      
      // TODO: Animate the height and width resize of the InfoBox, if it is visible.
      $('#npmap-infobox-content-wrapper').css({
        maxHeight: mH + 'px',
        maxWidth: maxWidth + 'px'
      });
      $('#npmap-infobox-content').html(content);
      
      try {
        // TODO: You should only scroll to top if "more info". This is more complicated than you might think, though, because you'll need to preserve the scrollTop of the "clustered" contents and then restore it on "back".
        $('#npmap-infobox-content-wrapper').scrollLeft(0).scrollTop(0);
      } catch(e) {
      
      }

      $('#npmap-infobox img').each(function(i, v) {
        resizeImageForContent(v, mH, maxWidth);
      });
      $('#npmap-infobox object').each(function(i, v) {
        resizeImageForContent(v, mH, maxWidth);
      });

      if (this.visible) {
        position(function() {
          if (panActivated && !skipBoundsCheck) {
            checkBounds();
          }
        });
      } else {
        this.visible = true;

        position(function() {
          if (panActivated && !skipBoundsCheck) {
            checkBounds(function() {
              $('#npmap-infobox').show();
              NPMap.Event.trigger('InfoBox', 'show');
            });
          }
        });
      }
    }
  };
});