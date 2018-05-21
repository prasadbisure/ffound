! function() {
    for (var e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = clearTimeout)
}(),
function(e) {
    if ("CSS" in window && "supports" in window.CSS) {
        var t = window.CSS.supports("mix-blend-mode", "multiply");
        t && e("html").addClass("cssmixblendmode")
    }
}(jQuery),
function(e) {
    bq.ui.plugin("navigation", function(t) {
        function n() {
            r = !1, a.removeClass(t.openClass), s.removeClass(t.openClass)
        }

        function o(e) {
            e = "/" == e.substr(-1) ? e : e + "/", e = e.replace(/^\/([a-zA-Z\-\_]*)\/.*$/, "/$1/"), l != e && (a.find(t.menu).removeClass(t.currentClass), a.find(t.menu + '[href="' + e + '"]').addClass(t.currentClass), l = e)
        }
        t = e.extend({}, this.defaults, t);
        var i = "ontouchstart" in window ? "touchstart.navigation" : "click.navigation",
            a = e(t.target),
            s = e("body"),
            r = !1;
        a.find(t.btn).on(i, function(e) {
            if (e.preventDefault(), e.stopPropagation(), r) n();
            else {
                r = !0;
                var o = "type" + (1 + Math.floor(7 * Math.random()));
                s.toggleClass(t.openClass), a.removeClass("type1 type2 type3 type4 type5 type6 type7").addClass(o).toggleClass(t.openClass)
            }
        }), a.find(t.menu).on(i, function() {
            if (r && n(), !e(this).hasClass("current")) {
                var t = e(this).attr("href");
                setTimeout(function() {
                    bq.page(t)
                }, 1e3)
            }
            return !1
        });
        var l = null;
        this.closeMenu = n, this.setCurrent = o, o(location.pathname)
    }, {
        target: ".nav",
        btn: ".nav-btn a",
        menu: ".nav-list a",
        openClass: "nav-open",
        currentClass: "current"
    }), bq.ui.autoload("navigation", !0), bq.env = {
        isMac: navigator.platform.toUpperCase().indexOf("MAC") >= 0,
        isMobile: function() {
            return null != new MobileDetect(window.navigator.userAgent).mobile()
        }()
    }, bq.support = {
        pointerEvents: function() {
            var e, t = document.createElement("div"),
                n = document.documentElement,
                o = window.getComputedStyle;
            return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = o && "auto" === o(t, "").pointerEvents, n.removeChild(t), !!e) : !1
        }(),
        pointer: window.navigator.pointerEnabled && window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 0,
        msPointer: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 0,
        touch: "ontouchstart" in document.documentElement || "ontouchstart" in window,
        transform3d: function() {
            var e = document.createElement("div"),
                t = !1;
            document.documentElement.appendChild(e);
            for (var n, o, i = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; n = i.shift();)
                if ("undefined" != typeof e.style[n] && (e.style.position = "absolute", o = e.getBoundingClientRect().left, e.style[n] = "translate3d(500px, 0px, 0px)", o = Math.abs(e.getBoundingClientRect().left - o), o > 100 && 900 > o)) {
                    document.documentElement.removeChild(e), t = n;
                    break
                }
            return t
        }(),
        transform2d: function() {
            var e = document.createElement("div"),
                t = !1;
            document.documentElement.appendChild(e);
            for (var n, o = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; n = o.shift();)
                if ("undefined" != typeof e.style[n]) {
                    t = n, document.documentElement.removeChild(e);
                    break
                }
            return t
        }(),
        transitionend: function(e) {
            if (!e) return !1;
            var t = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            return t[Modernizr.prefixed("transition")] ? t[Modernizr.prefixed("transition")] : !1
        }(Modernizr.csstransitions)
    }, bq.support.transitionend && (e.event.special[bq.support.transitionend] = {
        bindType: bq.support.transitionend,
        delegateType: bq.support.transitionend,
        handle: function(t) {
            return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
        }
    }), e.fn.embedMovie = function() {
        return this.each(function() {
            var t = e(this),
                n = null,
                o = t.data("movie-url");
            (m = o.match(/youtub?e?\.\w+\/(.*)/)) ? n = "https://www.youtube.com/embed/" + m[1] + "?autoplay=0&showinfo=0&playsinline=1&rel=0&controls=2": (m = o.match(/vimeo\.\w+\/(.*)$/)) && (n = "https://player.vimeo.com/video/" + m[1] + "?autoplay=0&portrait=0&badge=0&byline=0"), n && t.append('<iframe src="' + n + '" frameborder="0" allowfullscreen></iframe>')
        })
    }, bq.util.preloadImage(), e(function() {
        e("body");
        bq.env.isMobile && e("html").addClass("mobile"), bq.ui.autoload(["rollOver", "fadeOver", "fadeRollOver", "popup", "formUtils"], !1), e.easing.def = e.bez([.68, 0, .42, 1]), bq.ui.config({
            smoothScroll: {
                offset: 40,
                speed: 1e3,
                easing: e.easing.def
            }
        }), bq.ui.init()
    })
}(jQuery),
function(e) {
    function t(e) {
        this.useLoadng = e
    }

    function n(e) {
        this.numCache = e || 3, this.cache = {}, this.cacheIndex = []
    }

    function o(e) {
        var t = e.find(".photo");
        y.add(t.data("photo-src")), y.add(t.data("photo-prev-src")), x.add(t.data("photo-src")), x.add(t.data("photo-next-src"))
    }

    function i(t, n, i) {
        return function() {
            var t = e("body"),
                a = i.find("#" + n).addClass("overlay");
            o(a), t.append(a), setTimeout(function() {
                a.get(0).clientWidth, a.addClass("show"), t.addClass("no-header no-logo")
            }, 0), this.resolve()
        }
    }

    function a(t, n, i) {
        return function() {
            var a = this,
                s = e("body"),
                r = e("." + t, s),
                l = i.find("#" + n);
            o(l), l.addClass("overlay infront"), r.removeClass("infront"), s.append(l), setTimeout(function() {
                l.get(0).clientWidth, l.addClass("show")
            }, 0), setTimeout(function() {
                r.remove()
            }, bq.env.isMobile ? 500 : 350), a.resolve()
        }
    }

    function s(t, n, o) {
        return function() {
            var i = this,
                a = e("body"),
                s = e("#" + t, a),
                r = a.find("#contents");
            if (o) {
                var d = o.find("#contents");
                r.replaceWith(d);
                var c = d.find(".page-title");
                l(c.addClass("visible"), n), setTimeout(function() {
                    "portfolio" == n || "works" == n ? c.addClass("show fast") : c.removeClass("fast").addClass("show"), e("#contents > .content.alpha-covered").addClass("show fast")
                }, 0), setTimeout(function() {
                    e("#contents > .content.covered").addClass("show")
                }, 1e3)
            }
            s.removeClass("show"), setTimeout(function() {
                s.remove(), i.resolve(), a.removeClass("no-header").addClass("sub no-logo")
            }, 350), this.resolve()
        }
    }

    function r(t, n, o) {
        return function() {
            function i() {
                b = null, "portfolio" == n || "works" == n ? c.addClass("show fast") : c.removeClass("fast").addClass("show"), e("#contents > .content.alpha-covered").addClass("show fast"), setTimeout(function() {
                    e("#contents > .content.covered").addClass("show")
                }, 1e3), "portfolio" == n || "works" == n ? a.resolve() : setTimeout(function() {
                    a.resolve()
                }, 2e3)
            }
            var a = this,
                s = e("body"),
                r = e("#" + t, s),
                d = o.find("#" + n);
            if (0 == r.length) return e("#contents").append(d), this.resolve();
            var c = o.find(".page-title");
            l(c.addClass("visible"), n), r.remove(), e("#contents").append(d), e(".page-title").replaceWith(c), e(window).scrollTop(0), "top" == n ? s.removeClass("sub").addClass("index") : "portfolio" == n || "works" == n ? s.removeClass("index").addClass("sub no-logo") : s.removeClass("index no-logo").addClass("sub"), b ? b.end(n).done(i) : setTimeout(i, 0)
        }
    }

    function l(t, n) {
        var o = t.text();
        t.html(""), e.each(o.split(""), function(n, o) {
            var i = e('<span class="c' + (n + 1) + '"></span>');
            " " == o ? i.addClass("space") : i.text(o), t.append(i)
        }), t.addClass(n)
    }

    function d() {
        var n = e("#contents > .content").attr("id"),
            o = e(".page-title");
        o.length ? l(o.addClass("visible"), n) : (o = e('<h1 class="page-title"></h1>'), e("#contents").prepend(o)), "top" == n ? (b = new t(!0), b.start(!0), b.end(n).done(function() {
            e(".page-title").addClass("show"), e("#contents > .content").addClass("show"), e(window).trigger("enter.page.bq"), M = !0
        })) : (setTimeout(function() {
            e(".page-title").addClass("show")
        }), setTimeout(function() {
            e("#contents > .content").addClass("show")
        }, 1e3), setTimeout(function() {
            e(window).trigger("enter.page.bq"), M = !0
        }, 2e3))
    }

    function c(t, n) {
        return k = t, M ? t.cancelExit === !0 ? n() : (e(window).trigger("exit.page.bq"), void n()) : n()
    }

    function u(t) {
        return t.cancel !== !0 ? t.init ? (E = t, void e(function() {
            d()
        })) : void(M && (w({
            from: k,
            to: t
        }), q.append(p))) : void 0
    }

    function p() {
        var n = g();
        if (0 == n) return this.resolve();
        var o = e.Deferred();
        bq.ui.navigation.setCurrent(n.to.canonicalPath), e(document).on("scroll.page.bq mousewheel.page.bq", function() {
            return !1
        });
        var i = [];
        n.to.useLoadngCover !== !1 && (b = new t("/" == n.to.canonicalPath), b.start(), i.push(f(800))), n.to.usePageLoad !== !1 ? (i.unshift(e.get(n.to.path).promise()), e.when.apply(e, i).done(function(t) {
            e.isArray(t) && (t = t[0]), m(t, n).done(o.resolve), E = n.to
        }).fail(function(e) {
            m(e.responseText, n).done(o.resolve), E = n.to
        })) : e.when.apply(e, i).done(function() {
            var t, i;
            n.from.path.match(/\/portfolio\/detail/) ? (t = "portfolio-detail", i = "portfolio") : n.from.path.match(/\/works\/detail/) ? (t = "works-detail", i = "works") : t = i = "*", title = n.from.title.substr(n.from.title.indexOf("||") + 3), C.apply(t, i, null, n).done(function() {
                e("title").text(title), h(), o.resolve()
            }), E = n.to
        }), o.done(this.resolve)
    }

    function f(t) {
        var n = e.Deferred();
        return setTimeout(function() {
            n.resolve()
        }, t), n.promise()
    }

    function m(t, n) {
        var o, i, a = e.Deferred(),
            s = v(t),
            r = t.match(/<title>(.*)<\/title>/)[1];
        return o = n.from.path.match(/\/portfolio\/detail/) ? "portfolio-detail" : n.from.path.match(/\/works\/detail/) ? "works-detail" : e("#contents > .content").attr("id"), i = s.find("#contents > .content").attr("id"), C.apply(o, i, s, n).done(function() {
            e("title").text(r), h(), a.resolve()
        }), a.promise()
    }

    function h() {
        e(window).trigger("enter.page.bq"), e(document).off("scroll.page.bq mousewheel.page.bq")
    }

    function v(t) {
        var n = document.createElement("div");
        return n.innerHTML = t, e(n)
    }

    function g() {
        if (0 == T.length) return !1;
        var e = T[T.length - 1];
        return T = [], e
    }

    function w(e) {
        T[T.length] = e
    }
    t.prototype.start = function(t) {
        var n = this;
        this.$elem = e(['<div id="loading-cover">', function(e) {
            return e ? ['<div id="logo-loading">', '<span class="loading-h">H</span>', '<span class="loading-e">E</span>', '<span class="loading-g">G</span>', "</div>"].join("") : ""
        }(this.useLoadng), "</div>"].join("")), t === !0 && this.$elem.addClass("no-anim"), e("#contents").append(this.$elem), setTimeout(function() {
            n.$elem[0].clientWidth, n.$elem.addClass("show"), n.useLoadng && n.$elem.find("#logo-loading").addClass("show")
        }, 0)
    }, t.prototype.end = function(t) {
        var n, o = this;
        if (this.useLoadng) {
            var i = e.Deferred();
            return e(window).one("loaded.page.bq", function() {
                o.$elem.find("#logo-loading").removeClass("show"), "top" == t ? f(300).done(function() {
                    o.$elem.addClass("hide"), f(800).done(function() {
                        o.$elem.remove(), i.resolve()
                    })
                }) : f(500).done(function() {
                    o.$elem.removeClass("show"), o.$elem.remove(), i.resolve()
                })
            }), e.when(f(2700), i.promise()).promise()
        }
        return "top" == t ? (this.$elem.addClass("hide"), n = 800) : (this.$elem.removeClass("show"), n = 1), f(n).done(function() {
            o.$elem.remove()
        })
    }, n.prototype.add = function(e) {
        if (!(e in this.cache)) {
            var t = new Image;
            if (t.src = e, this.cacheIndex.length == this.numCache) {
                var n = this.cacheIndex.shift();
                delete this.cache[n]
            }
            this.cacheIndex.push(e), this.cache[e] = t
        }
    }, n.prototype.clear = function() {
        this.cache = {}, this.cacheIndex = []
    };
    var b, C = {
            apply: function(t, n, o, i) {
                var a = e.Deferred(),
                    s = t + " --> *",
                    r = t + " --> " + n,
                    l = "* --> " + n,
                    d = "* --> *",
                    c = e.Queue(),
                    u = this;
                return e.each([r, s, l, d], function(e, a) {
                    return a in u.fx ? (c.append(u.fx[a](t, n, o, i)), !1) : void 0
                }), c.promise.done(function() {
                    a.resolve()
                }), a.promise()
            },
            fx: {
                "* --> *": r,
                "portfolio --> portfolio-detail": i,
                "portfolio-detail --> portfolio-detail": a,
                "portfolio-detail --> portfolio": s,
                "works --> works-detail": i,
                "works-detail --> works-detail": a,
                "works-detail --> works": s
            }
        },
        y = new n,
        x = new n,
        q = e.Queue(),
        T = [],
        k = null,
        E = null,
        M = !1;
    // bq.page.exit(/^\/portfolio\/detail\/*/, function(e, t, n) {
    //     n.canonicalPath.match(/^\/portfolio\/?/) && (e.cancelExit = !0), t()
    // }), bq.page.exit(/^\/works\/detail\/*/, function(e, t, n) {
    //     n.canonicalPath.match(/^\/works\/?/) && (e.cancelExit = !0), t()
    // }), bq.page.exit("/portfolio", function(e, t, n) {
    //     n.canonicalPath.match(/^\/portfolio\/detail\//) && (e.cancelExit = !0), t()
    // }), bq.page.exit("/works", function(e, t, n) {
    //     n.canonicalPath.match(/^\/works\/detail\//) && (e.cancelExit = !0), t()
    // }), bq.page.exit("*", c), bq.page(/^\/portfolio\/detail\/*/, function(e, t) {
    //     return e.init ? t() : (e.useLoadngCover = !1, void t())
    // }), bq.page(/^\/works\/detail\/*/, function(e, t) {
    //     return e.init ? t() : (e.useLoadngCover = !1, void t())
    // }), bq.page("/portfolio", function(t, n) {
    //     return t.init ? n() : (k.path.match(/^\/portfolio\/detail\//) && (e("#portfolio").length ? (t.usePageLoad = !1, t.useLoadngCover = !1) : e("#contents").append(e("#portfolio-detail"))), void n())
    // }), bq.page("/works", function(t, n) {
    //     return t.init ? n() : (k.path.match(/^\/works\/detail\//) && (e("#works").length ? (t.usePageLoad = !1, t.useLoadngCover = !1) : e("#contents").append(e("#works-detail"))), void n())
    // }), bq.page("*", u), bq.page(), e(document).on
    
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
      var $this = $(this),
          label = $this.prev('label');
    
    	  if (e.type === 'keyup') {
    			if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
        	if( $this.val() === '' ) {
        		label.removeClass('active highlight'); 
    			} else {
    		    label.removeClass('highlight');   
    			}   
        } else if (e.type === 'focus') {
          
          if( $this.val() === '' ) {
        		label.removeClass('highlight'); 
    			} 
          else if( $this.val() !== '' ) {
    		    label.addClass('highlight');
    			}
        }
    
    });
    
    $('.tab a').on('click', function (e) {
      
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
        
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
      
    });
    
    $(".product-form").submit(function(event){
        
        event.preventDefault();
        var formData = new FormData($(this)[0]);
        var pid      = $(this).find('.pid').val();
        var price    = $(this).find('input[name=price]').val();
        var elem     = $(this).find('input[name=price]')[0];
        
        var flag = /^(?:[1-9]\d*|0)$/.test(price);
        if (!flag || price <=0 ) {
            $(this).find('input[name=price]').css('border-color', 'red');
            elem.setCustomValidity('The price must not start with zero.');
           
            return;
        } else {
            $(this).find('input[name=price]').css('border-color', '#d4b000');
            elem.setCustomValidity('');
        }
        
        $('.spinner').css('display', 'block');
        $('.modal-body').css('opacity', '0.4');
        $('.modal-footer').css('opacity', '0.4');
        $.ajax({
            url: "/updateproductinfo",
            type: 'POST',
            data:new FormData(this),
            success:function(data){
                $(this).prop("disabled", false);  
                $('.spinner').css('display', 'none');
                alert('Your product has been updated successfully!');
                $('#productEditModal-'+pid).modal('hide');
                location.reload();
                
            },
            error: function(jq,status,message) {
                alert('A jQuery error has occurred. Status: ' + status + ' - Message: ' + message);
            },
            cache: false,
            contentType: false,
            processData: false,
            // Custom XMLHttpRequest
            xhr: function() {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                            $('progress').attr({
                                value: e.loaded,
                                max: e.total,
                            });
                       }
                   } , false);
                }
                return myXhr;
            }
            //async:false
        });
       // return false;
    });
    
    $('#submit123').submit(function(e){
        e.preventDefault(); 
         $.ajax({
             url:'test1',
             type:"post",
             data:new FormData($(this)[0]),
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                  alert(data);
           }
         });
    });
    
    $('.related-img').on('click', function (e) {
      
        e.preventDefault();
        
        var vendorId = $(this).attr('data-vendor');
        var productId = $(this).attr('data-product');
        
        var url = '/ProductDetails';
        var form = $('<form action="' + url + '" method="post">' +
          '<input type="text" name="vendorId" value="' + vendorId + '" />' +
          '<input type="text" name="productId" value="' + productId + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
      
    });
    
    $('.more').on('click', function (e) {
      
        e.preventDefault();
        
        var vendorId = $(this).attr('data-vendor');
        
        var url = '/vendorInfo';
        var form = $('<form action="' + url + '" method="post">' +
          '<input type="text" name="vendorId" value="' + vendorId + '" />' +
          '</form>');
        $('body').append(form);
        form.submit();
      
    });
    
    $('.content-book-btn, .prd-book-img').on('click', function(e){
        
        var me = $(this);
        e.preventDefault();
        
        if ( me.data('requestRunning') ) {
            return;
        }
    
        me.data('requestRunning', true);
    
        var size       = "free size";
        if($('#p-size').length){
            size       = $('#p-size').val();
        }
        var vendorId   = $(this).attr('data-vendor');
        var productId  = $(this).attr('data-product');
        var userId     = $(this).attr('data-user');
        
        if(vendorId === userId){
            alert('To book your own products join us as customer.');
            return;
        }
        
        if(userId == 0){
            alert("To book the product you must login first!!!");
            window.location.href = "/login-register?vendor="+vendorId+"&product="+productId+"&referer=booking";
            return;
        }
        var values = {
            'size': size,
            'productId': productId,
            'vendorId' : vendorId,
            'userId'   : userId
        };
        
        $.ajax({
            url:'/site/booking',
            type:"post",
            data: values,
            success: function(data){
                
                if(data === "invalid_login"){
                    alert("To book product join us as a customer.");
                    return;
                }
                
                alert("You have successfully booked the product. We have sent confirmation on your registered email.");
                // if(data > 0){
                //     $('#productBooking').modal('show');
                // }
            },
            complete: function() {
                me.data('requestRunning', false);
            }
        });
    });
    
    $('#contact-us').submit(function(e){
        e.preventDefault(); 
        
        var formData = new FormData($(this)[0]);
        $.ajax({
            url:'/site/feedback',
            type:"post",
            data: $(this).serialize(),
            success: function(data){
                
                if(data){
                    $('#conact-us-modal').modal('show');
		    $('#contact-us input').val('');
                    $('#contact-us textarea').val('');	
                }
            }
        });
    });
    
    $('#sign-up').submit(function(e){
        e.preventDefault(); 
        
        $.ajax({
            url:'/site/addnewuser',
            type:"post",
            data: $(this).serialize(),
            success: function(data){
                
                if(data == 5){
                    $('.email-error').html("Email already exists.");
                    return;
                }
                
                if(data !== 5){
                    window.location.href = '/login-register?result='+data;
                }
                
                $("html").html(data);
            }
        });
    });
    
    $('#review-rating').submit(function(e){
        e.preventDefault();
    
        $.ajax({
            url:'/site/reviewrating',
            type:"post",
            data: $(this).serialize(),
            success: function(data){
                
                if(!data){
                    alert('To submit Rating & Review, login into your account.');
                }else{
                    //To clear previous revie & rating.
                    $("#star>li.active").removeClass("active");
                    $("#star>li").removeClass("secondary-active");
                    $( "textarea[name='review']").val('');
                    alert('Your Rating & Review is submitted successfully');
                }
            }
        });
    });
    
    $(".product-details").click(function() {
        $(this).closest("form").submit();
    });
    
    $( ".pimage, .designername" ).click(function() {
        $(this).closest("form").submit();
    });

    $('.to-know-more').click(function(){
         window.location.href = '/aboutus' 
    });
    
    //To show topup modal.
    $('.topup-modal').on('click', function(){
        $('#topup-modal').modal('show');    
    });
    
    $('.pslot').change(function(){
        var pval = $('option:selected', this).val();
        var pcot = pval * 500;
        $('#price').val(pcot);
        $('#price').prop('disabled', true);
    });
    
    
    $('.upgrade-btn').on('click', function(e){
        e.preventDefault(); 
        
        var subId = $(this).val();
        $.ajax({
            url:'/site/upgradesubscription',
            type:"post",
            data: "subid="+subId,
            success: function(data){
                $("html").html(data);
            }
        });
    });
    
    if($('#reminder-modal').length){
        $('#reminder-modal').modal('show');
    }
    
}(jQuery);
