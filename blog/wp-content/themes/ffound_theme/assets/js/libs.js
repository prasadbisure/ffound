! function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function r() {
        var e, t, n, r, o, s, a;
        for (var l in v) {
            if (e = [], t = v[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? b[a[0]] = r : (!b[a[0]] || b[a[0]] instanceof Boolean || (b[a[0]] = new Boolean(b[a[0]])), b[a[0]][a[1]] = r), g.push((r ? "" : "no-") + a.join("-"))
        }
    }

    function o(e) {
        var t = S.className,
            n = b._config.classPrefix || "";
        if (b._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        b._config.enableClasses && (t += " " + n + e.join(" " + n), S.className = t)
    }

    function s() {
        var e = t.body;
        return e || (e = A("body"), e.fake = !0), e
    }

    function a(e, t, n, i) {
        var r, o, a, l, u = "modernizr",
            c = A("div"),
            f = s();
        if (parseInt(n, 10))
            for (; n--;) a = A("div"), a.id = i ? i[n] : u + (n + 1), c.appendChild(a);
        return r = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""), c.id = u, (f.fake ? f : c).innerHTML += r, f.appendChild(c), f.fake && (f.style.background = "", f.style.overflow = "hidden", l = S.style.overflow, S.style.overflow = "hidden", S.appendChild(f)), o = t(c, e), f.fake ? (f.parentNode.removeChild(f), S.style.overflow = l, S.offsetHeight) : c.parentNode.removeChild(c), !!o
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function f(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, "function") ? c(r, n || t) : r);
        return !1
    }

    function h(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(h(t[r]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; r--;) o.push("(" + h(t[r]) + ":" + i + ")");
            return o = o.join(" or "), a("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function d(e, t, r, o) {
        function s() {
            c && (delete E.style, delete E.modElem)
        }
        if (o = i(o, "undefined") ? !1 : o, !i(r, "undefined")) {
            var a = p(e, r);
            if (!i(a, "undefined")) return a
        }
        var c, f, h, d, m;
        for (E.style || (c = !0, E.modElem = A("modernizr"), E.style = E.modElem.style), h = e.length, f = 0; h > f; f++)
            if (d = e[f], m = E.style[d], l(d, "-") && (d = u(d)), E.style[d] !== n) {
                if (o || i(r, "undefined")) return s(), "pfx" == t ? d : !0;
                try {
                    E.style[d] = r
                } catch (T) {}
                if (E.style[d] != m) return s(), "pfx" == t ? d : !0
            }
        return s(), !1
    }

    function m(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + M.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? d(a, t, r, o) : (a = (e + " " + C.join(s + " ") + s).split(" "), f(a, t, n))
    }

    function T(e, t, i) {
        return m(e, n, n, t, i)
    }
    var g = [],
        v = [],
        y = {
            _version: "3.0.0-alpha.3",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                v.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                v.push({
                    name: null,
                    fn: e
                })
            }
        },
        b = function() {};
    b.prototype = y, b = new b;
    var S = t.documentElement,
        x = "CSS" in e && "supports" in e.CSS,
        P = "supportsCSS" in e;
    b.addTest("supports", x || P);
    var A = function() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : t.createElement.apply(t, arguments)
        },
        w = y.testStyles = a,
        _ = "Moz O ms Webkit",
        M = y._config.usePrefixes ? _.split(" ") : [];
    y._cssomPrefixes = M;
    var C = y._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    y._domPrefixes = C;
    var G = {
        elem: A("modernizr")
    };
    b._q.push(function() {
        delete G.elem
    });
    var E = {
        style: G.elem.style
    };
    b._q.unshift(function() {
        delete E.style
    }), y.testAllProps = m, y.testAllProps = T, b.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && T("transform", "scale(1)", !0)
    }), b.addTest("csstransforms3d", function() {
        var e = !!T("perspective", "1px", !0),
            t = b._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in S.style)) {
            var n;
            b.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", w(n, function(t) {
                e = 9 === t.offsetLeft && 5 === t.offsetHeight
            })
        }
        return e
    }), b.addTest("csstransitions", T("transition", "all", !0));
    var H = function(t) {
            var i, r = prefixes.length,
                o = e.CSSRule;
            if ("undefined" == typeof o) return n;
            if (!t) return !1;
            if (t = t.replace(/^@/, ""), i = t.replace(/-/g, "_").toUpperCase() + "_RULE", i in o) return "@" + t;
            for (var s = 0; r > s; s++) {
                var a = prefixes[s],
                    l = a.toUpperCase() + "_" + i;
                if (l in o) return "@-" + a.toLowerCase() + "-" + t
            }
            return !1
        },
        B = y.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? H(e) : (-1 != e.indexOf("-") && (e = u(e)), t ? m(e, t, n) : m(e, "pfx"))
        };
    y.prefixedCSS = function(e) {
        var t = B(e);
        return t && h(t)
    }, r(), o(g), delete y.addTest, delete y.addAsyncTest;
    for (var O = 0; O < b._q.length; O++) b._q[O]();
    e.Modernizr = b
}(window, document), ! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = J.type(e);
        return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (J.isFunction(t)) return J.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (at.test(t)) return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function(e) {
            return z.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = dt[e] = {};
        return J.each(e.match(pt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        $.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : yt.test(n) ? J.parseJSON(n) : n
                } catch (r) {}
                vt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return $.activeElement
        } catch (e) {}
    }

    function h(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function d(e) {
        var t = kt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++) gt.set(e[n], "globalEval", !t || gt.get(t[n], "globalEval"))
    }

    function T(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (gt.hasData(e) && (o = gt.access(e), s = gt.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) J.event.add(t, r, u[r][n])
            }
            vt.hasData(e) && (a = vt.access(e), l = J.extend({}, a), vt.set(t, l))
        }
    }

    function g(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }

    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && At.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function y(t, n) {
        var i, r = J(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
        return r.detach(), o
    }

    function b(e) {
        var t = $,
            n = Vt[e];
        return n || (n = y(e, t), "none" !== n && n || (Lt = (Lt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Lt[0].contentDocument, t.write(), t.close(), n = y(e, t), Lt.detach()), Vt[e] = n), n
    }

    function S(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || jt(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), Xt.test(s) && Ft.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function x(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Qt.length; r--;)
            if (t = Qt[r] + n, t in e) return t;
        return i
    }

    function A(e, t, n) {
        var i = qt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function w(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += J.css(e, n + xt[o], !0, r)), i ? ("content" === n && (s -= J.css(e, "padding" + xt[o], !0, r)), "margin" !== n && (s -= J.css(e, "border" + xt[o] + "Width", !0, r))) : (s += J.css(e, "padding" + xt[o], !0, r), "padding" !== n && (s += J.css(e, "border" + xt[o] + "Width", !0, r)));
        return s
    }

    function _(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = jt(e),
            s = "border-box" === J.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = S(e, t, o), (0 > r || null == r) && (r = e.style[t]), Xt.test(r)) return r;
            i = s && (Y.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + w(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function M(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = gt.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pt(i) && (o[s] = gt.access(i, "olddisplay", b(i.nodeName)))) : (r = Pt(i), "none" === n && r || gt.set(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function C(e, t, n, i, r) {
        return new C.prototype.init(e, t, n, i, r)
    }

    function G() {
        return setTimeout(function() {
            Yt = void 0
        }), Yt = J.now()
    }

    function E(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = xt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function H(e, t, n) {
        for (var i, r = (nn[t] || []).concat(nn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function B(e, t, n) {
        var i, r, o, s, a, l, u, c, f = this,
            h = {},
            p = e.style,
            d = e.nodeType && Pt(e),
            m = gt.get(e, "fxshow");
        n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, J.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = J.css(e, "display"), c = "none" === u ? gt.get(e, "olddisplay") || b(e.nodeName) : u, "inline" === c && "none" === J.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Zt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    d = !0
                }
                h[i] = m && m[i] || J.style(e, i)
            } else u = void 0;
        if (J.isEmptyObject(h)) "inline" === ("none" === u ? b(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = gt.access(e, "fxshow", {}), o && (m.hidden = !d), d ? J(e).show() : f.done(function() {
                J(e).hide()
            }), f.done(function() {
                var t;
                gt.remove(e, "fxshow");
                for (t in h) J.style(e, t, h[t])
            });
            for (i in h) s = H(d ? m[i] : 0, i, f), i in m || (m[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = J.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function D(e, t, n) {
        var i, r, o = 0,
            s = tn.length,
            a = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Yt || G(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Yt || G(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = J.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (O(c, u.opts.specialEasing); s > o; o++)
            if (i = tn[o].call(u, e, c, u.opts)) return i;
        return J.map(c, H, u), J.isFunction(u.opts.start) && u.opts.start.call(e, u), J.fx.timer(J.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(pt) || [];
            if (J.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function k(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, J.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === bn;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function N(e, t) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i), e
    }

    function R(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function L(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function V(e, t, n, i) {
        var r;
        if (J.isArray(t)) J.each(t, function(t, r) {
            n || wn.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (r in t) V(e + "[" + r + "]", t[r], n, i)
    }

    function F(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var X = [],
        j = X.slice,
        W = X.concat,
        q = X.push,
        z = X.indexOf,
        U = {},
        K = U.toString,
        Q = U.hasOwnProperty,
        Y = {},
        $ = e.document,
        Z = "2.1.4",
        J = function(e, t) {
            return new J.fn.init(e, t)
        },
        et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        it = function(e, t) {
            return t.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: Z,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return j.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : j.call(this)
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(j.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: q,
        sort: X.sort,
        splice: X.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, J.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[K.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = $.createElement("script"), t.text = e, $.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, it)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (a)
                for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : q.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return W.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = j.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(j.call(arguments)))
            }, r.guid = e.guid = e.guid || J.guid++, r) : void 0
        },
        now: Date.now,
        support: Y
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var rt = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, f, p, d, m;
            if ((t ? t.ownerDocument || t : V) !== B && H(t), t = t || B, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && D) {
                if (11 !== a && (r = vt.exec(e)))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = r[3]) && S.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (S.qsa && (!I || !I.test(e))) {
                    if (p = f = L, d = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = w(e), (f = t.getAttribute("id")) ? p = f.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                        d = yt.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, d.querySelectorAll(m)), n
                    } catch (T) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return M(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[L] = !0, e
        }

        function r(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = X++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, s) {
                var a, l, u = [F, o];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[L] || (t[L] = {}), (a = l[i]) && a[0] === F && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function d(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function T(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
            return s
        }

        function g(e, t, n, r, o, s) {
            return r && !r[L] && (r = g(r)), o && !o[L] && (o = g(o, s)), i(function(i, s, a, l) {
                var u, c, f, h = [],
                    p = [],
                    d = s.length,
                    g = i || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? g : T(g, h, e, a, l),
                    y = n ? o || (i ? e : d || r) ? [] : s : v;
                if (n && n(v, y, a, l), r)
                    for (u = T(y, p), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (y[p[c]] = !(v[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = y.length; c--;)(f = y[c]) && u.push(v[c] = f);
                            o(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (u = o ? et(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
                    }
                } else y = T(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, l) : Z.apply(s, y)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, s, !0), u = p(function(e) {
                    return et(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== C) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > a; a++)
                if (n = x.relative[e[a].type]) c = [p(d(c), n)];
                else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches), n[L]) {
                        for (i = ++a; r > i && !x.relative[e[i].type]; i++);
                        return g(a > 1 && d(c), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && v(e.slice(a, i)), r > i && v(e = e.slice(i)), r > i && h(e))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, f, h, p = 0,
                        d = "0",
                        m = i && [],
                        g = [],
                        v = C,
                        y = i || o && x.find.TAG("*", u),
                        b = F += null == v ? 1 : Math.random() || .1,
                        S = y.length;
                    for (u && (C = s !== B && s); d !== S && null != (c = y[d]); d++) {
                        if (o && c) {
                            for (f = 0; h = e[f++];)
                                if (h(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (F = b)
                        }
                        r && ((c = !h && c) && p--, i && m.push(c))
                    }
                    if (p += d, r && d !== p) {
                        for (f = 0; h = n[f++];) h(m, g, s, a);
                        if (i) {
                            if (p > 0)
                                for (; d--;) m[d] || g[d] || (g[d] = Y.call(l));
                            g = T(g)
                        }
                        Z.apply(l, g), u && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (F = b, C = v), m
                };
            return r ? i(s) : s
        }
        var b, S, x, P, A, w, _, M, C, G, E, H, B, O, D, I, k, N, R, L = "sizzle" + 1 * new Date,
            V = e.document,
            F = 0,
            X = 0,
            j = n(),
            W = n(),
            q = n(),
            z = function(e, t) {
                return e === t && (E = !0), 0
            },
            U = 1 << 31,
            K = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            $ = Q.push,
            Z = Q.push,
            J = Q.slice,
            et = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = it.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(st),
            pt = new RegExp("^" + rt + "$"),
            dt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            Tt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            St = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Pt = function() {
                H()
            };
        try {
            Z.apply(Q = J.call(V.childNodes), V.childNodes), Q[V.childNodes.length].nodeType
        } catch (At) {
            Z = {
                apply: Q.length ? function(e, t) {
                    $.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        S = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, H = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : V;
            return i !== B && 9 === i.nodeType && i.documentElement ? (B = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Pt, !1) : n.attachEvent && n.attachEvent("onunload", Pt)), D = !A(i), S.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), S.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), S.getElementsByClassName = gt.test(i.getElementsByClassName), S.getById = r(function(e) {
                return O.appendChild(e).id = L, !i.getElementsByName || !i.getElementsByName(L).length
            }), S.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(St, xt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(St, xt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = S.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : S.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = S.getElementsByClassName && function(e, t) {
                return D ? t.getElementsByClassName(e) : void 0
            }, k = [], I = [], (S.qsa = gt.test(i.querySelectorAll)) && (r(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + L + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || I.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (S.matchesSelector = gt.test(N = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                S.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), k.push("!=", st)
            }), I = I.length && new RegExp(I.join("|")), k = k.length && new RegExp(k.join("|")), t = gt.test(O.compareDocumentPosition), R = t || gt.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !S.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === V && R(V, e) ? -1 : t === i || t.ownerDocument === V && R(V, t) ? 1 : G ? et(G, e) - et(G, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : G ? et(G, e) - et(G, t) : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? s(l[r], u[r]) : l[r] === V ? -1 : u[r] === V ? 1 : 0
            }, i) : B
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== B && H(e), n = n.replace(ft, "='$1']"), !(!S.matchesSelector || !D || k && k.test(n) || I && I.test(n))) try {
                var i = N.call(e, n);
                if (i || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, B, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== B && H(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== B && H(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && K.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : S.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (E = !S.detectDuplicates, G = !S.sortStable && e.slice(0), e.sort(z), E) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return G = null, e
        }, P = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += P(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(St, xt), e[3] = (e[3] || e[4] || e[5] || "").replace(St, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ht.test(n) && (t = w(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(St, xt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = j[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && j(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, f, h, p, d, m = o !== s ? "nextSibling" : "previousSibling",
                            T = t.parentNode,
                            g = a && t.nodeName.toLowerCase(),
                            v = !l && !a;
                        if (T) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (a ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                    d = m = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? T.firstChild : T.lastChild], s && v) {
                                for (c = T[L] || (T[L] = {}), u = c[e] || [], p = u[0] === F && u[1], h = u[0] === F && u[2], f = p && T.childNodes[p]; f = ++p && f && f[m] || (h = p = 0) || d.pop();)
                                    if (1 === f.nodeType && ++h && f === t) {
                                        c[e] = [F, p, h];
                                        break
                                    }
                            } else if (v && (u = (t[L] || (t[L] = {}))[e]) && u[0] === F) h = u[1];
                            else
                                for (;
                                    (f = ++p && f && f[m] || (h = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++h || (v && ((f[L] || (f[L] = {}))[e] = [F, h]), f !== t)););
                            return h -= r, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[L] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = et(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = _(e.replace(lt, "$1"));
                    return r[L] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(St, xt),
                        function(t) {
                            return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(St, xt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return Tt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = l(b);
        return f.prototype = x.filters = x.pseudos, x.setFilters = new f, w = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = x.preFilter; a;) {
                (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, _ = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = q[e + " "];
            if (!o) {
                for (t || (t = w(e)), n = t.length; n--;) o = v(t[n]), o[L] ? i.push(o) : r.push(o);
                o = q(e, y(r, i)), o.selector = e
            }
            return o
        }, M = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                f = !i && w(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === t.nodeType && D && x.relative[o[1].type]) {
                    if (t = (x.find.ID(s.matches[0].replace(St, xt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = dt.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(St, xt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && h(o), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (u || _(e, f))(i, t, !D, n, yt.test(e) && c(t.parentNode) || t), n
        }, S.sortStable = L.split("").sort(z).join("") === L, S.detectDuplicates = !!E, H(), S.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(B.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), S.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    J.find = rt, J.expr = rt.selectors, J.expr[":"] = J.expr.pseudos, J.unique = rt.uniqueSort, J.text = rt.getText, J.isXMLDoc = rt.isXML, J.contains = rt.contains;
    var ot = J.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (J.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) J.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ot.test(e) ? J(e) : e || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = J.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ut.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : $, !0)), st.test(n[1]) && J.isPlainObject(t))
                        for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = $.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = $, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        };
    ct.prototype = J.fn, lt = J($);
    var ft = /^(?:parents|prev(?:Until|All))/,
        ht = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && J(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), J.fn.extend({
        has: function(e) {
            var t = J(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (J.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ot.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? z.call(J(e), this[0]) : z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var r = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (ht[e] || J.unique(r), ft.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var pt = /\S+/g,
        dt = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? dt[e] || o(e) : J.extend({}, e);
        var t, n, i, r, s, a, l = [],
            u = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && s > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function o(t) {
                            J.each(t, function(t, n) {
                                var i = J.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? s = l.length : t && (r = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(e, t) {
                        for (var n;
                            (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = u = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, J.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return J.Deferred(function(n) {
                            J.each(t, function(t, o) {
                                var s = J.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? J.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, J.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = j.call(arguments),
                s = o.length,
                a = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : J.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? j.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var mt;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (mt.resolveWith($, [J]), J.fn.triggerHandler && (J($).triggerHandler("ready"), J($).off("ready"))))
        }
    }), J.ready.promise = function(t) {
        return mt || (mt = J.Deferred(), "complete" === $.readyState ? setTimeout(J.ready) : ($.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), mt.promise(t)
    }, J.ready.promise();
    var Tt = J.access = function(e, t, n, i, r, o, s) {
        var a = 0,
            l = e.length,
            u = null == n;
        if ("object" === J.type(n)) {
            r = !0;
            for (a in n) J.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                return u.call(J(e), n)
            })), t))
            for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    };
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
                o = this.cache[r];
            if ("string" == typeof t) o[t] = n;
            else if (J.isEmptyObject(o)) J.extend(this.cache[r], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(pt) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var gt = new a,
        vt = new a,
        yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return vt.hasData(e) || gt.hasData(e)
        },
        data: function(e, t, n) {
            return vt.access(e, t, n)
        },
        removeData: function(e, t) {
            vt.remove(e, t)
        },
        _data: function(e, t, n) {
            return gt.access(e, t, n)
        },
        _removeData: function(e, t) {
            gt.remove(e, t)
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = vt.get(o), 1 === o.nodeType && !gt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
                    gt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                vt.set(this, e)
            }) : Tt(this, function(t) {
                var n, i = J.camelCase(e);
                if (o && void 0 === t) {
                    if (n = vt.get(o, e), void 0 !== n) return n;
                    if (n = vt.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = vt.get(this, i);
                    vt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && vt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                vt.remove(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = gt.get(e, t), n && (!i || J.isArray(n) ? i = gt.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = J._queueHooks(e, t),
                s = function() {
                    J.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return gt.get(e, n) || gt.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    gt.remove(e, [t + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = J.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = gt.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xt = ["Top", "Right", "Bottom", "Left"],
        Pt = function(e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        },
        At = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = $.createDocumentFragment(),
            t = e.appendChild($.createElement("div")),
            n = $.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var wt = "undefined";
    Y.focusinBubbles = "onfocusin" in e;
    var _t = /^key/,
        Mt = /^(?:mouse|pointer|contextmenu)|click/,
        Ct = /^(?:focusinfocus|focusoutblur)$/,
        Gt = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, p, d, m, T = gt.get(e);
            if (T)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = T.events) || (l = T.events = {}), (s = T.handle) || (s = T.handle = function(t) {
                        return typeof J !== wt && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pt) || [""], u = t.length; u--;) a = Gt.exec(t[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (f = J.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = J.event.special[p] || {}, c = J.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, d, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), J.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, p, d, m, T = gt.hasData(e) && gt.get(e);
            if (T && (l = T.events)) {
                for (t = (t || "").match(pt) || [""], u = t.length; u--;)
                    if (a = Gt.exec(t[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (f = J.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && f.teardown.call(e, d, T.handle) !== !1 || J.removeEvent(e, p, T.handle), delete l[p])
                    } else
                        for (p in l) J.event.remove(e, p + t[u], n, i, !0);
                J.isEmptyObject(l) && (delete T.handle, gt.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, f, h = [i || $],
                p = Q.call(t, "type") ? t.type : t,
                d = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || $, 3 !== i.nodeType && 8 !== i.nodeType && !Ct.test(p + J.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[J.expando] ? t : new J.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), f = J.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !J.isWindow(i)) {
                    for (l = f.delegateType || p, Ct.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (i.ownerDocument || $) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, c = (gt.get(s, "events") || {})[t.type] && gt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && J.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !J.acceptData(i) || u && J.isFunction(i[p]) && !J.isWindow(i) && (a = i[u], a && (i[u] = null), J.event.triggered = p, i[p](), J.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, r, o, s = [],
                a = j.call(arguments),
                l = (gt.get(this, "events") || {})[e.type] || [],
                u = J.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = J.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || $, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : _t.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = $), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Y.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = gt.access(i, t);
                r || i.addEventListener(e, n, !0), gt.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = gt.access(i, t) - 1;
                r ? gt.access(i, t, r) : (i.removeEventListener(e, n, !0), gt.remove(i, t))
            }
        }
    }), J.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(e) {
                return J().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ht = /<([\w:]+)/,
        Bt = /<|&#?\w+;/,
        Ot = /<(?:script|style|link)/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^$|\/(?:java|ecma)script/i,
        kt = /^true\/(.*)/,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Rt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td, J.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = J.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (s = g(a), o = g(e), i = 0, r = o.length; r > i; i++) v(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || g(e), s = s || g(a), i = 0, r = o.length; r > i; i++) T(o[i], s[i]);
                else T(e, a);
            return s = g(a, "script"), s.length > 0 && m(s, !l && g(e, "script")), a
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, u, c = t.createDocumentFragment(), f = [], h = 0, p = e.length; p > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === J.type(r)) J.merge(f, r.nodeType ? [r] : r);
                    else if (Bt.test(r)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Ht.exec(r) || ["", ""])[1].toLowerCase(), a = Rt[s] || Rt._default, o.innerHTML = a[1] + r.replace(Et, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                J.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(r));
            for (c.textContent = "", h = 0; r = f[h++];)
                if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = g(c.appendChild(r), "script"), l && m(o), n))
                    for (u = 0; r = o[u++];) It.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(e) {
            for (var t, n, i, r, o = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (J.acceptData(n) && (r = n[gt.expando], r && (t = gt.cache[r]))) {
                    if (t.events)
                        for (i in t.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    gt.cache[r] && delete gt.cache[r]
                }
                delete vt.cache[n[vt.expando]]
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return Tt(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(g(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return Tt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ot.test(e) && !Rt[(Ht.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Et, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, J.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = W.apply([], e);
            var n, i, r, o, s, a, l = 0,
                u = this.length,
                c = this,
                f = u - 1,
                h = e[0],
                m = J.isFunction(h);
            if (m || u > 1 && "string" == typeof h && !Y.checkClone && Dt.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                m && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = J.map(g(n, "script"), p), o = r.length; u > l; l++) s = n, l !== f && (s = J.clone(s, !0, !0), o && J.merge(r, g(s, "script"))), t.call(this[l], s, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, J.map(r, d), l = 0; o > l; l++) s = r[l], It.test(s.type || "") && !gt.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Nt, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, i = [], r = J(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), J(r[s])[t](n), q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Lt, Vt = {},
        Ft = /^margin/,
        Xt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        jt = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
        }
        var n, i, r = $.documentElement,
            o = $.createElement("div"),
            s = $.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && J.extend(Y, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild($.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), J.swap = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r
    };
    var Wt = /^(none|table(?!-c[ea]).+)/,
        qt = new RegExp("^(" + St + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + St + ")", "i"),
        Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qt = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = J.camelCase(t),
                    l = e.style;
                return t = J.cssProps[a] || (J.cssProps[a] = P(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = zt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || J.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = J.camelCase(t);
            return t = J.cssProps[a] || (J.cssProps[a] = P(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in Kt && (r = Kt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
        }
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Wt.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ut, function() {
                    return _(e, t, i)
                }) : _(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && jt(e);
                return A(e, n, i ? w(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), J.cssHooks.marginRight = x(Y.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, S, [e, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + xt[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ft.test(e) || (J.cssHooks[e + t].set = A)
    }), J.fn.extend({
        css: function(e, t) {
            return Tt(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (J.isArray(t)) {
                    for (i = jt(e), r = t.length; r > s; s++) o[t[s]] = J.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Pt(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = C, C.prototype = {
        constructor: C,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = C.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = C.prototype.init, J.fx.step = {};
    var Yt, $t, Zt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [B],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Jt.exec(t),
                    o = r && r[3] || (J.cssNumber[e] ? "" : "px"),
                    s = (J.cssNumber[e] || "px" !== o && +i) && Jt.exec(J.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +i || 1;
                    do a = a || ".5", s /= a, J.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    J.Animation = J.extend(D, {
            tweener: function(e, t) {
                J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), J.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? J.extend({}, e) : {
                complete: n || !n && t || J.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !J.isFunction(t) && t
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Pt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = J.isEmptyObject(e),
                    o = J.speed(t, n, i),
                    s = function() {
                        var t = D(this, J.extend({}, e), o);
                        (r || gt.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = J.timers,
                        s = gt.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && en.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && J.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = gt.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = J.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(e, t) {
            var n = J.fn[t];
            J.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, i, r)
            }
        }), J.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            J.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.timers = [], J.fx.tick = function() {
            var e, t = 0,
                n = J.timers;
            for (Yt = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || J.fx.stop(), Yt = void 0
        }, J.fx.timer = function(e) {
            J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            $t || ($t = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval($t), $t = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = $.createElement("input"),
                t = $.createElement("select"),
                n = t.appendChild($.createElement("option"));
            e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = $.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
        }();
    var rn, on, sn = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return Tt(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === wt ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? on : rn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(pt);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Y.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function(e, t, n) {
            return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = sn[t] || J.find.attr;
        sn[t] = function(e, t, i) {
            var r, o;
            return i || (o = sn[t], sn[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, sn[t] = o), r
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return Tt(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var ln = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a = "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pt) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = J.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pt) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = J(this), o = e.match(pt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === wt || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var un = /\r/g;
    J.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = J.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(un, "") : null == n ? "" : n)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = J.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, Y.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = J.now(),
        fn = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var hn = /#.*$/,
        pn = /([?&])_=[^&]*/,
        dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        gn = /^\/\//,
        vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yn = {},
        bn = {},
        Sn = "*/".concat("*"),
        xn = e.location.href,
        Pn = vn.exec(xn.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xn,
            type: "GET",
            isLocal: mn.test(Pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? N(N(e, J.ajaxSettings), t) : N(J.ajaxSettings, e)
        },
        ajaxPrefilter: I(yn),
        ajaxTransport: I(bn),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var l, c, g, v, b, x = t;
                2 !== y && (y = 2, a && clearTimeout(a), i = void 0, o = s || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (v = R(f, S, n)), v = L(f, v, S, l), l ? (f.ifModified && (b = S.getResponseHeader("Last-Modified"), b && (J.lastModified[r] = b), b = S.getResponseHeader("etag"), b && (J.etag[r] = b)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state, c = v.data, g = v.error, l = !g)) : (g = x, (e || !x) && (x = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (t || x) + "", l ? d.resolveWith(h, [c, x, S]) : d.rejectWith(h, [S, x, g]), S.statusCode(T), T = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [S, f, l ? c : g]), m.fireWith(h, [S, x]), u && (p.trigger("ajaxComplete", [S, f]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, s, a, l, u, c, f = J.ajaxSetup({}, t),
                h = f.context || f,
                p = f.context && (h.nodeType || h.jquery) ? J(h) : J.event,
                d = J.Deferred(),
                m = J.Callbacks("once memory"),
                T = f.statusCode || {},
                g = {},
                v = {},
                y = 0,
                b = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!s)
                                for (s = {}; t = dn.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = v[n] = v[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) T[t] = [T[t], e[t]];
                            else S.always(e[S.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (d.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, f.url = ((e || f.url || xn) + "").replace(hn, "").replace(gn, Pn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = J.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (l = vn.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === Pn[1] && l[2] === Pn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = J.param(f.data, f.traditional)), k(yn, f, t, S), 2 === y) return S;
            u = J.event && f.global, u && 0 === J.active++ && J.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Tn.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (fn.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(r) ? r.replace(pn, "$1_=" + cn++) : r + (fn.test(r) ? "&" : "?") + "_=" + cn++)), f.ifModified && (J.lastModified[r] && S.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && S.setRequestHeader("If-None-Match", J.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Sn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) S.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, S, f) === !1 || 2 === y)) return S.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[c](f[c]);
            if (i = k(bn, f, t, S)) {
                S.readyState = 1, u && p.trigger("ajaxSend", [S, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    S.abort("timeout")
                }, f.timeout));
                try {
                    y = 1, i.send(g, n)
                } catch (x) {
                    if (!(2 > y)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function(e, t) {
        J[t] = function(e, n, i, r) {
            return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(J.isFunction(e) ? function(t) {
                J(this).wrapInner(e.call(this, t))
            } : function() {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    };
    var An = /%20/g,
        wn = /\[\]$/,
        _n = /\r?\n/g,
        Mn = /^(?:submit|button|image|reset|file)$/i,
        Cn = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) V(n, e[n], t, r);
        return i.join("&").replace(An, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && Cn.test(this.nodeName) && !Mn.test(e) && (this.checked || !At.test(e))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_n, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_n, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Gn = 0,
        En = {},
        Hn = {
            0: 200,
            1223: 204
        },
        Bn = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in En) En[e]()
    }), Y.cors = !!Bn && "withCredentials" in Bn, Y.ajax = Bn = !!Bn, J.ajaxTransport(function(e) {
        var t;
        return Y.cors || Bn && !e.crossDomain ? {
            send: function(n, i) {
                var r, o = e.xhr(),
                    s = ++Gn;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function(e) {
                    return function() {
                        t && (delete En[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(Hn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = En[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), $.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var On = [],
        Dn = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || J.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (Dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Dn, "$1" + r) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || J.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, On.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || $;
        var i = st.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
    };
    var In = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && In) return In.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && J.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    };
    var kn = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u, c = J.css(e, "position"),
                f = J(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = J.css(e, "top"), l = J.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : f.css(h)
        }
    }, J.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== wt && (r = i.getBoundingClientRect()), n = F(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || kn; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || kn
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function(r) {
            return Tt(this, function(t, r, o) {
                var s = F(t);
                return void 0 === o ? s ? s[n] : t[r] : void(s ? s.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), J.each(["top", "left"], function(e, t) {
        J.cssHooks[t] = x(Y.pixelPosition, function(e, n) {
            return n ? (n = S(e, t), Xt.test(n) ? J(e).position()[t] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            J.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Tt(this, function(t, n, i) {
                    var r;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Nn = e.jQuery,
        Rn = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Rn), t && e.jQuery === J && (e.jQuery = Nn), J
    }, typeof t === wt && (e.jQuery = e.$ = J), J
}), ! function(e, t) {
    e(function() {
        "use strict";

        function e(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }

        function n(e) {
            for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"))
        }

        function i(e, t) {
            this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
        }
        var r = {};
        r.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo 3DS",
                Amoi: "Amoi",
                INQ: "INQ",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
                LenovoTablet: "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android.*\\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9",
                JXDTablet: "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                Hudl: "Hudl HT7S3",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                Tizen: "Tizen",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Puffin: "Puffin",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: "Firefox/[VER]",
                Fennec: "Fennec/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                "UC Browser": "UC Browser[VER]",
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, r.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var o, s = Object.prototype.hasOwnProperty;
        return r.FALLBACK_PHONE = "UnknownPhone", r.FALLBACK_TABLET = "UnknownTablet", r.FALLBACK_MOBILE = "UnknownMobile", o = "isArray" in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            function() {
                var e, t, i, a, l, u, c = r.mobileDetectRules;
                for (e in c.props)
                    if (s.call(c.props, e)) {
                        for (t = c.props[e], o(t) || (t = [t]), l = t.length, a = 0; l > a; ++a) i = t[a], u = i.indexOf("[VER]"), u >= 0 && (i = i.substring(0, u) + "([\\w._\\+]+)" + i.substring(u + 5)), t[a] = new RegExp(i, "i");
                        c.props[e] = t
                    }
                n(c.oss), n(c.phones), n(c.tablets), n(c.uas), n(c.utils), c.oss0 = {
                    WindowsPhoneOS: c.oss.WindowsPhoneOS,
                    WindowsMobileOS: c.oss.WindowsMobileOS
                }
            }(), r.findMatch = function(e, t) {
                for (var n in e)
                    if (s.call(e, n) && e[n].test(t)) return n;
                return null
            }, r.getVersionStr = function(e, t) {
                var n, i, o, a, l = r.mobileDetectRules.props;
                if (s.call(l, e))
                    for (n = l[e], o = n.length, i = 0; o > i; ++i)
                        if (a = n[i].exec(t), null !== a) return a[1];
                return null
            }, r.getVersion = function(e, t) {
                var n = r.getVersionStr(e, t);
                return n ? r.prepareVersionNo(n) : 0 / 0
            }, r.prepareVersionNo = function(e) {
                var t;
                return t = e.split(/[a-z._ \/\-]/i), 1 === t.length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
            }, r.isMobileFallback = function(e) {
                return r.detectMobileBrowsers.fullPattern.test(e) || r.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
            }, r.isTabletFallback = function(e) {
                return r.detectMobileBrowsers.tabletPattern.test(e)
            }, r.prepareDetectionCache = function(e, n, o) {
                if (e.mobile === t) {
                    var s, a, l;
                    return (a = r.findMatch(r.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = a, void(e.phone = null)) : (s = r.findMatch(r.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = s, void(e.tablet = null)) : void(r.isMobileFallback(n) ? (l = i.isPhoneSized(o), l === t ? (e.mobile = r.FALLBACK_MOBILE, e.tablet = e.phone = null) : l ? (e.mobile = e.phone = r.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = r.FALLBACK_TABLET, e.phone = null)) : r.isTabletFallback(n) ? (e.mobile = e.tablet = r.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
                }
            }, r.mobileGrade = function(e) {
                var t = null !== e.mobile();
                return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2, "C")
            }, r.detectOS = function(e) {
                return r.findMatch(r.mobileDetectRules.oss0, e) || r.findMatch(r.mobileDetectRules.oss, e)
            }, r.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, i.prototype = {
                constructor: i,
                mobile: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === t && (this._cache.userAgent = r.findMatch(r.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                os: function() {
                    return this._cache.os === t && (this._cache.os = r.detectOS(this.ua)), this._cache.os
                },
                version: function(e) {
                    return r.getVersion(e, this.ua)
                },
                versionStr: function(e) {
                    return r.getVersionStr(e, this.ua)
                },
                is: function(t) {
                    return e(t, this.userAgent()) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || e(t, r.findMatch(r.mobileDetectRules.utils, this.ua))
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return i.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === t && (this._cache.grade = r.mobileGrade(this)), this._cache.grade
                }
            }, i.isPhoneSized = "undefined" != typeof window && window.screen ? function(e) {
                return 0 > e ? t : r.getDeviceSmallerSide() <= e
            } : function() {}, i._impl = r, i
    })
}(function() {
    if ("undefined" != typeof module && module.exports) return function(e) {
        module.exports = e()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(e) {
        window.MobileDetect = e()
    };
    throw new Error("unknown environment")
}()), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s)) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / s) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (s || (s = .3 * r * 1.5), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / s) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }), jQuery.extend({
        bez: function(e) {
            var t = "bez_" + jQuery.makeArray(arguments).join("_").replace(/\./g, "p");
            if ("function" != typeof jQuery.easing[t]) {
                var n = function(e, t) {
                    var n = [null, null],
                        i = [null, null],
                        r = [null, null],
                        o = function(o, s) {
                            return r[s] = 3 * e[s], i[s] = 3 * (t[s] - e[s]) - r[s], n[s] = 1 - r[s] - i[s], o * (r[s] + o * (i[s] + o * n[s]))
                        },
                        s = function(e) {
                            return r[0] + e * (2 * i[0] + 3 * n[0] * e)
                        },
                        a = function(e) {
                            for (var t, n = e, i = 0; ++i < 14 && (t = o(n, 0) - e, !(Math.abs(t) < .001));) n -= t / s(n);
                            return n
                        };
                    return function(e) {
                        return o(a(e), 1)
                    }
                };
                jQuery.easing[t] = function(t, i, r, o, s) {
                    return o * n([e[0], e[1]], [e[2], e[3]])(i / s) + r
                }
            }
            return t
        }
    }), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function i(e) {
            return t(a.json ? JSON.stringify(e) : String(e))
        }

        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(s, " ")), a.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function o(t, n) {
            var i = a.raw ? t : r(t);
            return e.isFunction(n) ? n(i) : i
        }
        var s = /\+/g,
            a = e.cookie = function(r, s, l) {
                if (arguments.length > 1 && !e.isFunction(s)) {
                    if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var u = l.expires,
                            c = l.expires = new Date;
                        c.setTime(+c + 864e5 * u)
                    }
                    return document.cookie = [t(r), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var f = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, d = h.length; d > p; p++) {
                    var m = h[p].split("="),
                        T = n(m.shift()),
                        g = m.join("=");
                    if (r && r === T) {
                        f = o(g, s);
                        break
                    }
                    r || void 0 === (g = o(g)) || (f[T] = g)
                }
                return f
            };
        a.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !e.cookie(t))
        }
    }), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var s = t || window.event,
                a = l.call(arguments, 1),
                u = 0,
                f = 0,
                h = 0,
                p = 0,
                d = 0,
                m = 0;
            if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * h, h = 0), u = 0 === h ? f : h, "deltaY" in s && (h = -1 * s.deltaY, u = h), "deltaX" in s && (f = s.deltaX, 0 === h && (u = -1 * f)), 0 !== h || 0 !== f) {
                if (1 === s.deltaMode) {
                    var T = e.data(this, "mousewheel-line-height");
                    u *= T, h *= T, f *= T
                } else if (2 === s.deltaMode) {
                    var g = e.data(this, "mousewheel-page-height");
                    u *= g, h *= g, f *= g
                }
                if (p = Math.max(Math.abs(h), Math.abs(f)), (!o || o > p) && (o = p, i(s, p) && (o /= 40)), i(s, p) && (u /= 40, f /= 40, h /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var v = this.getBoundingClientRect();
                    d = t.clientX - v.left, m = t.clientY - v.top
                }
                return t.deltaX = f, t.deltaY = h, t.deltaFactor = o, t.offsetX = d, t.offsetY = m, t.deltaMode = 0, a.unshift(t, u, f, h), r && clearTimeout(r), r = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
            }
        }

        function n() {
            o = null
        }

        function i(e, t) {
            return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var u = s.length; u;) e.event.fixHooks[s[--u]] = e.event.mouseHooks;
        var c = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }),
    function(e, t) {
        "use strict";
        var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!n.TweenLite) {
            var i, r, o, s, a, l = function(e) {
                    var t, i = e.split("."),
                        r = n;
                    for (t = 0; i.length > t; t++) r[i[t]] = r = r[i[t]] || {};
                    return r
                },
                u = l("com.greensock"),
                c = 1e-10,
                f = function(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                },
                h = function() {},
                p = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(n) {
                        return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                    }
                }(),
                d = {},
                m = function(i, r, o, s) {
                    this.sc = d[i] ? d[i].sc : [], d[i] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(u) {
                        for (var c, f, h, p, T = r.length, g = T; --T > -1;)(c = d[r[T]] || new m(r[T], [])).gsClass ? (a[T] = c.gsClass, g--) : u && c.sc.push(this);
                        if (0 === g && o)
                            for (f = ("com.greensock." + i).split("."), h = f.pop(), p = l(f.join("."))[h] = this.gsClass = o.apply(o, a), s && (n[h] = p, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                                    return p
                                }) : i === t && "undefined" != typeof module && module.exports && (module.exports = p)), T = 0; this.sc.length > T; T++) this.sc[T].check()
                    }, this.check(!0)
                },
                T = e._gsDefine = function(e, t, n, i) {
                    return new m(e, t, n, i)
                },
                g = u._class = function(e, t, n) {
                    return t = t || function() {}, T(e, [], function() {
                        return t
                    }, n), t
                };
            T.globals = n;
            var v = [0, 0, 1, 1],
                y = [],
                b = g("easing.Ease", function(e, t, n, i) {
                    this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? v.concat(t) : v
                }, !0),
                S = b.map = {},
                x = b.register = function(e, t, n, i) {
                    for (var r, o, s, a, l = t.split(","), c = l.length, f = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (o = l[c], r = i ? g("easing." + o, null, !0) : u.easing[o] || {}, s = f.length; --s > -1;) a = f[s], S[o + "." + a] = S[a + o] = r[a] = e.getRatio ? e : e[a] || new e
                };
            for (o = b.prototype, o._calcEnd = !1, o.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        n = this._power,
                        i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = i.length; --r > -1;) o = i[r] + ",Power" + r, x(new b(null, null, 1, r), o, "easeOut", !0), x(new b(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), o, "easeInOut");
            S.linear = u.easing.Linear.easeIn, S.swing = u.easing.Quad.easeInOut;
            var P = g("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            o = P.prototype, o.addEventListener = function(e, t, n, i, r) {
                r = r || 0;
                var o, l, u = this._listeners[e],
                    c = 0;
                for (null == u && (this._listeners[e] = u = []), l = u.length; --l > -1;) o = u[l], o.c === t && o.s === n ? u.splice(l, 1) : 0 === c && r > o.pr && (c = l + 1);
                u.splice(c, 0, {
                    c: t,
                    s: n,
                    up: i,
                    pr: r
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(e, t) {
                var n, i = this._listeners[e];
                if (i)
                    for (n = i.length; --n > -1;)
                        if (i[n].c === t) return void i.splice(n, 1)
            }, o.dispatchEvent = function(e) {
                var t, n, i, r = this._listeners[e];
                if (r)
                    for (t = r.length, n = this._eventTarget; --t > -1;) i = r[t], i && (i.up ? i.c.call(i.s || n, {
                        type: e,
                        target: n
                    }) : i.c.call(i.s || n))
            };
            var A = e.requestAnimationFrame,
                w = e.cancelAnimationFrame,
                _ = Date.now || function() {
                    return (new Date).getTime()
                },
                M = _();
            for (i = ["ms", "moz", "webkit", "o"], r = i.length; --r > -1 && !A;) A = e[i[r] + "RequestAnimationFrame"], w = e[i[r] + "CancelAnimationFrame"] || e[i[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(e, t) {
                var n, i, r, o, l, u = this,
                    f = _(),
                    p = t !== !1 && A,
                    d = 500,
                    m = 33,
                    T = "tick",
                    g = function(e) {
                        var t, s, a = _() - M;
                        a > d && (f += a - m), M += a, u.time = (M - f) / 1e3, t = u.time - l, (!n || t > 0 || e === !0) && (u.frame++, l += t + (t >= o ? .004 : o - t), s = !0), e !== !0 && (r = i(g)), s && u.dispatchEvent(T)
                    };
                P.call(u), u.time = u.frame = 0, u.tick = function() {
                    g(!0)
                }, u.lagSmoothing = function(e, t) {
                    d = e || 1 / c, m = Math.min(t, d, 0)
                }, u.sleep = function() {
                    null != r && (p && w ? w(r) : clearTimeout(r), i = h, r = null, u === s && (a = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (M = _() - d + 5), i = 0 === n ? h : p && A ? A : function(e) {
                        return setTimeout(e, 0 | 1e3 * (l - u.time) + 1)
                    }, u === s && (a = !0), g(2)
                }, u.fps = function(e) {
                    return arguments.length ? (n = e, o = 1 / (n || 60), l = this.time + o, void u.wake()) : n
                }, u.useRAF = function(e) {
                    return arguments.length ? (u.sleep(), p = e, void u.fps(n)) : p
                }, u.fps(e), setTimeout(function() {
                    p && 5 > u.frame && u.useRAF(!1)
                }, 1500)
            }), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
            var C = g("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, j) {
                    a || s.wake();
                    var n = this.vars.useFrames ? X : j;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }
            });
            s = C.ticker = new u.Ticker, o = C.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var G = function() {
                a && _() - M > 2e3 && s.wake(), setTimeout(G, 2e3)
            };
            G(), o.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, o.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, o.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, o.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, o.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, o.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var e, t = this._timeline,
                    n = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
            }, o._enabled = function(e, t) {
                return a || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(e, t) {
                return this._kill(e, t), this
            }, o._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, o._swapSelfInParams = function(e) {
                for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                return n
            }, o._callback = function(e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || y)
            }, o.eventCallback = function(e, t, n, i) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, o.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, o.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, o.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, o.totalTime = function(e, t, n) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var i = this._totalDuration,
                            r = this._timeline;
                        if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), D.length && q())
                }
                return this
            }, o.progress = o.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, o.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, o.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        n = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = n - (n - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, o.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, n, i = this._timeline;
                return e != this._paused && i && (a || e || s.wake(), t = i.rawTime(), n = t - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, !0, !0)), this._gc && !e && this._enabled(!0, !1), this
            };
            var E = g("core.SimpleTimeline", function(e) {
                C.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = E.prototype = new C, o.constructor = E, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(e, t) {
                var n, i;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (i = e._startTime; n && n._startTime > i;) n = n._prev;
                return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
            }, o._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(e, t, n) {
                var i, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var H = g("TweenLite", function(t, n, i) {
                    if (C.call(this, n, i), this.render = H.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : H.selector(t) || t;
                    var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? F[H.defaultOverwrite] : "number" == typeof l ? l >> 0 : F[l], (a || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                        for (this._targets = s = f(t), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(f(o))) : (this._siblings[r] = z(o, this, !1), 1 === l && this._siblings[r].length > 1 && K(o, this, null, 1, this._siblings[r])) : (o = s[r--] = H.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = z(t, this, !1), 1 === l && this._siblings.length > 1 && K(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                B = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                O = function(e, t) {
                    var n, i = {};
                    for (n in e) V[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!N[n] || N[n] && N[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                    e.css = i
                };
            o = H.prototype = new C, o.constructor = H, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, H.version = "1.17.0", H.defaultEase = o._ease = new b(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = s, H.autoSleep = 120, H.lagSmoothing = function(e, t) {
                s.lagSmoothing(e, t)
            }, H.selector = e.$ || e.jQuery || function(t) {
                var n = e.$ || e.jQuery;
                return n ? (H.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var D = [],
                I = {},
                k = H._internals = {
                    isArray: p,
                    isSelector: B,
                    lazyTweens: D
                },
                N = H._plugins = {},
                R = k.tweenLookup = {},
                L = 0,
                V = k.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                F = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                X = C._rootFramesTimeline = new E,
                j = C._rootTimeline = new E,
                W = 30,
                q = k.lazyRender = function() {
                    var e, t = D.length;
                    for (I = {}; --t > -1;) e = D[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    D.length = 0
                };
            j._startTime = s.time, X._startTime = s.frame, j._active = X._active = !0, setTimeout(q, 1), C._updateRoot = H.render = function() {
                var e, t, n;
                if (D.length && q(), j.render((s.time - j._startTime) * j._timeScale, !1, !1), X.render((s.frame - X._startTime) * X._timeScale, !1, !1), D.length && q(), s.frame >= W) {
                    W = s.frame + (parseInt(H.autoSleep, 10) || 120);
                    for (n in R) {
                        for (t = R[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete R[n]
                    }
                    if (n = j._first, (!n || n._paused) && H.autoSleep && !X._first && 1 === s._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || s.sleep()
                    }
                }
            }, s.addEventListener("tick", C._updateRoot);
            var z = function(e, t, n) {
                    var i, r, o = e._gsTweenID;
                    if (R[o || (e._gsTweenID = o = "t" + L++)] || (R[o] = {
                            target: e,
                            tweens: []
                        }), t && (i = R[o].tweens, i[r = i.length] = t, n))
                        for (; --r > -1;) i[r] === t && i.splice(r, 1);
                    return R[o].tweens
                },
                U = function(e, t, n, i) {
                    var r, o, s = e.vars.onOverwrite;
                    return s && (r = s(e, t, n, i)), s = H.onOverwrite, s && (o = s(e, t, n, i)), r !== !1 && o !== !1
                },
                K = function(e, t, n, i, r) {
                    var o, s, a, l;
                    if (1 === i || i >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                            else if (5 === i) break;
                        return s
                    }
                    var u, f = t._startTime + c,
                        h = [],
                        p = 0,
                        d = 0 === t._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || Q(t, 0, d), 0 === Q(a, u, d) && (h[p++] = a)) : f >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > f && ((d || !a._initted) && 2e-10 >= f - a._startTime || (h[p++] = a)));
                    for (o = p; --o > -1;)
                        if (a = h[o], 2 === i && a._kill(n, e, t) && (s = !0), 2 !== i || !a._firstPT && a._initted) {
                            if (2 !== i && !U(a, t)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                Q = function(e, t, n) {
                    for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline;) {
                        if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                        i = i._timeline
                    }
                    return o /= r, o > t ? o - t : n && o === t || !e._initted && 2 * c > o - t ? c : (o += e.totalDuration() / e._timeScale / r) > t + c ? 0 : o - t - c
                };
            o._init = function() {
                var e, t, n, i, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    u = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (i in o.startAt) r[i] = o.startAt[i];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = H.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), n = {};
                        for (i in o) V[i] && "autoCSS" !== i || (n[i] = o[i]);
                        if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && o.lazy !== !1, n.immediateRender = l, this._startAt = H.to(this.target, 0, n), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, o.easeParams) : S[u] || H.defaultEase : H.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (t && H._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(t, n, i, r) {
                var o, s, a, l, u, c;
                if (null == t) return !1;
                I[t._gsTweenID] && q(), this.vars.css || t.style && t !== e && t.nodeType && N.css && this.vars.autoCSS !== !1 && O(this.vars, t);
                for (o in this.vars) {
                    if (c = this.vars[o], V[o]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (N[o] && (l = new N[o])._onInitTween(t, this.vars[o], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: l._priority
                            }, s = l._overwriteProps.length; --s > -1;) n[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = n[o] = u = {
                        _next: this._firstPT,
                        t: t,
                        p: o,
                        f: "function" == typeof t[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, t) ? this._initProps(t, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && K(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[t._gsTweenID] = !0), a)
            }, o.render = function(e, t, n) {
                var i, r, o, s, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > u || u === c && "isPause" !== this.data) && u !== e && (n = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = s = !t || e || u === e ? e : c);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !t || e || u === e ? e : c)), this._initted || (n = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var f = e / l,
                        h = this._easeType,
                        p = this._easePower;
                    (1 === h || 3 === h && f >= .5) && (f = 1 - f), 3 === h && (f *= 2), 1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f), this.ratio = 1 === h ? 1 - f : 2 === h ? f : .5 > e / l ? f / 2 : 1 - f / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || n) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, D.push(this), void(this._lazy = [e, t]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || (this._time !== a || i) && this._callback("onUpdate")), r && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0))
                }
            }, o._kill = function(e, t, n) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : H.selector(t) || t;
                var i, r, o, s, a, l, u, c, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                if ((p(t) || B(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = e || a, c = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), n && (H.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u) a[o] && (f || (f = []), f.push(o));
                            if ((f || !e) && !U(this, n, t, f)) return !1
                        }
                        for (o in u)(s = a[o]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, o._enabled = function(e, t) {
                if (a || s.wake(), e && this._gc) {
                    var n, i = this._targets;
                    if (i)
                        for (n = i.length; --n > -1;) this._siblings[n] = z(i[n], this, !0);
                    else this._siblings = z(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, H.to = function(e, t, n) {
                return new H(e, t, n)
            }, H.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new H(e, t, n)
            }, H.fromTo = function(e, t, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new H(e, t, i)
            }, H.delayedCall = function(e, t, n, i, r) {
                return new H(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, H.set = function(e, t) {
                return new H(e, 0, t)
            }, H.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : H.selector(e) || e;
                var n, i, r, o;
                if ((p(e) || B(e)) && "number" != typeof e[0]) {
                    for (n = e.length, i = []; --n > -1;) i = i.concat(H.getTweensOf(e[n], t));
                    for (n = i.length; --n > -1;)
                        for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
                } else
                    for (i = z(e).concat(), n = i.length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                return i
            }, H.killTweensOf = H.killDelayedCallsTo = function(e, t, n) {
                "object" == typeof t && (n = t, t = !1);
                for (var i = H.getTweensOf(e, t), r = i.length; --r > -1;) i[r]._kill(n, e)
            };
            var Y = g("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Y.prototype
            }, !0);
            if (o = Y.prototype, Y.version = "1.10.1", Y.API = 2, o._firstPT = null, o._addTween = function(e, t, n, i, r, o) {
                    var s, a;
                    return null != i && (s = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - Number(n) : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: n,
                        c: s,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: o
                    }, a._next && (a._next._prev = a), a) : void 0
                }, o.setRatio = function(e) {
                    for (var t, n = this._firstPT, i = 1e-6; n;) t = n.c * e + n.s, n.r ? t = Math.round(t) : i > t && t > -i && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
                }, o._kill = function(e) {
                    var t, n = this._overwriteProps,
                        i = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                    for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, o._roundProps = function(e, t) {
                    for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
                }, H._onPluginEvent = function(e, t) {
                    var n, i, r, o, s, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                            (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                        }
                        a = t._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), a = a._next;
                    return n
                }, Y.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === Y.API && (N[(new e[t])._propName] = e[t]);
                    return !0
                }, T.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, n = e.propName,
                        i = e.priority || 0,
                        r = e.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = g("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            Y.call(this, n, i), this._overwriteProps = r || []
                        }, e.global === !0),
                        a = s.prototype = new Y(n);
                    a.constructor = s, s.API = e.API;
                    for (t in o) "function" == typeof e[t] && (a[o[t]] = e[t]);
                    return s.version = e.version, Y.activate([s]), s
                }, i = e._gsQueue) {
                for (r = 0; i.length > r; r++) i[r]();
                for (o in d) d[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var n, i, r, o, s = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                },
                a = _gsScope._gsDefine.globals,
                l = {},
                u = s.prototype = new e("css");
            u.constructor = s, s.version = "1.17.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
                top: u,
                right: u,
                bottom: u,
                left: u,
                width: u,
                height: u,
                fontSize: u,
                padding: u,
                margin: u,
                perspective: u,
                lineHeight: ""
            };
            var c, f, h, p, d, m, T = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                S = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                P = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                w = /([A-Z])/g,
                _ = /-([a-z])/gi,
                M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                C = function(e, t) {
                    return t.toUpperCase()
                },
                G = /(?:Left|Right|Width)/i,
                E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                B = /,(?=[^\)]*(?:\(|$))/gi,
                O = Math.PI / 180,
                D = 180 / Math.PI,
                I = {},
                k = document,
                N = function(e) {
                    return k.createElementNS ? k.createElementNS("http://www.w3.org/1999/xhtml", e) : k.createElement(e)
                },
                R = N("div"),
                L = N("img"),
                V = s._internals = {
                    _specialProps: l
                },
                F = navigator.userAgent,
                X = function() {
                    var e = F.indexOf("Android"),
                        t = N("a");
                    return h = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), d = h && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (m = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
                }(),
                j = function(e) {
                    return S.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                W = function(e) {
                    window.console && console.log(e)
                },
                q = "",
                z = "",
                U = function(e, t) {
                    t = t || R;
                    var n, i, r = t.style;
                    if (void 0 !== r[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + e];);
                    return i >= 0 ? (z = 3 === i ? "ms" : n[i], q = "-" + z.toLowerCase() + "-", z + e) : null
                },
                K = k.defaultView ? k.defaultView.getComputedStyle : function() {},
                Q = s.getStyle = function(e, t, n, i, r) {
                    var o;
                    return X || "opacity" !== t ? (!i && e.style[t] ? o = e.style[t] : (n = n || K(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(w, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : j(e)
                },
                Y = V.convertToPixels = function(e, n, i, r, o) {
                    if ("px" === r || !r) return i;
                    if ("auto" === r || !i) return 0;
                    var a, l, u, c = G.test(n),
                        f = e,
                        h = R.style,
                        p = 0 > i;
                    if (p && (i = -i), "%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? e.clientWidth : e.clientHeight);
                    else {
                        if (h.cssText = "border:0 solid red;position:" + Q(e, "position") + ";line-height:0;", "%" !== r && f.appendChild) h[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                        else {
                            if (f = e.parentNode || k.body, l = f._gsCache, u = t.ticker.frame, l && c && l.time === u) return l.width * i / 100;
                            h[c ? "width" : "height"] = i + r
                        }
                        f.appendChild(R), a = parseFloat(R[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(R), c && "%" === r && s.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = u, l.width = 100 * (a / i)), 0 !== a || o || (a = Y(e, n, i, r, !0))
                    }
                    return p ? -a : a
                },
                $ = V.calculateOffset = function(e, t, n) {
                    if ("absolute" !== Q(e, "position", n)) return 0;
                    var i = "left" === t ? "Left" : "Top",
                        r = Q(e, "margin" + i, n);
                    return e["offset" + i] - (Y(e, t, parseFloat(r), r.replace(b, "")) || 0)
                },
                Z = function(e, t) {
                    var n, i, r, o = {};
                    if (t = t || K(e, null))
                        if (n = t.length)
                            for (; --n > -1;) r = t[n], (-1 === r.indexOf("-transform") || At === r) && (o[r.replace(_, C)] = t.getPropertyValue(r));
                        else
                            for (n in t)(-1 === n.indexOf("Transform") || Pt === n) && (o[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === o[n] && (o[n.replace(_, C)] = t[n]);
                    return X || (o.opacity = j(e)), i = kt(e, t, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, _t && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
                },
                J = function(e, t, n, i, r) {
                    var o, s, a, l = {},
                        u = e.style;
                    for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(y, "") ? o : 0 : $(e, s), void 0 !== u[s] && (a = new pt(u, s, u[s], a)));
                    if (i)
                        for (s in i) "className" !== s && (l[s] = i[s]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                et = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                tt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                nt = function(e, t, n) {
                    var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        r = et[t],
                        o = r.length;
                    for (n = n || K(e, null); --o > -1;) i -= parseFloat(Q(e, "padding" + r[o], n, !0)) || 0, i -= parseFloat(Q(e, "border" + r[o] + "Width", n, !0)) || 0;
                    return i
                },
                it = function(e, t) {
                    (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                    var n = e.split(" "),
                        i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                        r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                    return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + r + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(i.replace(y, "")), t.oy = parseFloat(r.replace(y, "")), t.v = e), t || e
                },
                rt = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                ot = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                },
                st = function(e, t, n, i) {
                    var r, o, s, a, l, u = 1e-6;
                    return null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), l = "=" === e.charAt(1), s = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : D) - (l ? 0 : t), o.length && (i && (i[n] = t + s), -1 !== e.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = t + s), u > a && a > -u && (a = 0), a
                },
                at = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                lt = function(e, t, n) {
                    return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
                },
                ut = s.parseColor = function(e) {
                    var t, n, i, r, o, s;
                    return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), at[e] ? at[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), i = e.charAt(3), e = "#" + t + t + n + n + i + i), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(T), r = Number(e[0]) % 360 / 360, o = Number(e[1]) / 100, s = Number(e[2]) / 100, n = .5 >= s ? s * (o + 1) : s + o - s * o, t = 2 * s - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = lt(r + 1 / 3, t, n), e[1] = lt(r, t, n), e[2] = lt(r - 1 / 3, t, n), e) : (e = e.match(T) || at.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : at.black
                },
                ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (u in at) ct += "|" + u + "\\b";
            ct = RegExp(ct + ")", "gi");
            var ft = function(e, t, n, i) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var r, o = t ? (e.match(ct) || [""])[0] : "",
                        s = e.split(o).join("").match(v) || [],
                        a = e.substr(0, e.indexOf(s[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        u = -1 !== e.indexOf(" ") ? " " : ",",
                        c = s.length,
                        f = c > 0 ? s[0].replace(T, "") : "";
                    return c ? r = t ? function(e) {
                        var t, h, p, d;
                        if ("number" == typeof e) e += f;
                        else if (i && B.test(e)) {
                            for (d = e.replace(B, "|").split("|"), p = 0; d.length > p; p++) d[p] = r(d[p]);
                            return d.join(",")
                        }
                        if (t = (e.match(ct) || [o])[0], h = e.split(t).join("").match(v) || [], p = h.length, c > p--)
                            for (; c > ++p;) h[p] = n ? h[0 | (p - 1) / 2] : s[p];
                        return a + h.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, o, h;
                        if ("number" == typeof e) e += f;
                        else if (i && B.test(e)) {
                            for (o = e.replace(B, "|").split("|"), h = 0; o.length > h; h++) o[h] = r(o[h]);
                            return o.join(",")
                        }
                        if (t = e.match(v) || [], h = t.length, c > h--)
                            for (; c > ++h;) t[h] = n ? t[0 | (h - 1) / 2] : s[h];
                        return a + t.join(u) + l
                    } : function(e) {
                        return e
                    }
                },
                ht = function(e) {
                    return e = e.split(","),
                        function(t, n, i, r, o, s, a) {
                            var l, u = (n + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(t, a, o, s)
                        }
                },
                pt = (V._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, n, i, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) t = s[a.v], a.r ? t = Math.round(t) : l > t && t > -l && (t = 0), a.t[a.p] = t, a = a._next;
                    if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === e)
                        for (a = o.firstMPT; a;) {
                            if (n = a.t, n.type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n.e = r
                                }
                            } else n.e = n.s + n.xs0;
                            a = a._next
                        }
                }, function(e, t, n, i, r) {
                    this.t = e, this.p = t, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                }),
                dt = (V._parseToProxy = function(e, t, n, i, r, o) {
                    var s, a, l, u, c, f = i,
                        h = {},
                        p = {},
                        d = n._transform,
                        m = I;
                    for (n._transform = null, I = t, i = c = n.parse(e, t, i, r), I = m, o && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
                        if (1 >= i.type && (a = i.p, p[a] = i.s + i.c, h[a] = i.s, o || (u = new pt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                            for (s = i.l; --s > 0;) l = "xn" + s, a = i.p + "_" + l, p[a] = i.data[l], h[a] = i[l], o || (u = new pt(i, l, a, u, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: u,
                        pt: c
                    }
                }, V.CSSPropTween = function(e, t, i, r, s, a, l, u, c, f, h) {
                    this.t = e, this.p = t, this.s = i, this.c = r, this.n = l || t, e instanceof dt || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === f ? i : f, this.e = void 0 === h ? i + r : h, s && (this._next = s, s._prev = this)
                }),
                mt = function(e, t, n, i, r, o) {
                    var s = new dt(e, t, n, i - n, r, -1, o);
                    return s.b = n, s.e = s.xs0 = i, s
                },
                Tt = s.parseComplex = function(e, t, n, i, r, o, s, a, l, u) {
                    n = n || o || "", s = new dt(e, t, 0, 0, s, u ? 2 : 1, null, !1, a, n, i), i += "";
                    var f, h, p, d, m, v, y, b, S, x, P, w, _ = n.split(", ").join(",").split(" "),
                        M = i.split(", ").join(",").split(" "),
                        C = _.length,
                        G = c !== !1;
                    for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (_ = _.join(" ").replace(B, ", ").split(" "), M = M.join(" ").replace(B, ", ").split(" "), C = _.length), C !== M.length && (_ = (o || "").split(" "), C = _.length), s.plugin = l, s.setRatio = u, f = 0; C > f; f++)
                        if (d = _[f], m = M[f], b = parseFloat(d), b || 0 === b) s.appendXtra("", b, rt(m, b), m.replace(g, ""), G && -1 !== m.indexOf("px"), !0);
                        else if (r && ("#" === d.charAt(0) || at[d] || A.test(d))) w = "," === m.charAt(m.length - 1) ? ")," : ")", d = ut(d), m = ut(m), S = d.length + m.length > 6, S && !X && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(M[f]).join("transparent")) : (X || (S = !1), s.appendXtra(S ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], S ? "," : w, !0), S && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, w, !1)));
                    else if (v = d.match(T)) {
                        if (y = m.match(g), !y || y.length !== v.length) return s;
                        for (p = 0, h = 0; v.length > h; h++) P = v[h], x = d.indexOf(P, p), s.appendXtra(d.substr(p, x - p), Number(P), rt(y[h], P), "", G && "px" === d.substr(x + P.length, 2), 0 === h), p = x + P.length;
                        s["xs" + s.l] += d.substr(p)
                    } else s["xs" + s.l] += s.l ? " " + d : d;
                    if (-1 !== i.indexOf("=") && s.data) {
                        for (w = s.xs0 + s.data.s, f = 1; s.l > f; f++) w += s["xs" + f] + s.data["xn" + f];
                        s.e = w + s["xs" + f]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                gt = 9;
            for (u = dt.prototype, u.l = u.pr = 0; --gt > 0;) u["xn" + gt] = 0, u["xs" + gt] = "";
            u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(e, t, n, i, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && a ? " " + e : e || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = t + n, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new dt(s, "xn" + a, t, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                    s: t + n
                }, s.rxp = {}, s.s = t, s.c = n, s.r = r, s)) : (s["xs" + a] += t + (i || ""), s)
            };
            var vt = function(e, t) {
                    t = t || {}, this.p = t.prefix ? U(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                yt = V._registerComplexSpecialProp = function(e, t, n) {
                    "object" != typeof t && (t = {
                        parser: n
                    });
                    var i, r, o = e.split(","),
                        s = t.defaultValue;
                    for (n = n || [s], i = 0; o.length > i; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || s, r = new vt(o[i], t)
                },
                bt = function(e) {
                    if (!l[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        yt(e, {
                            parser: function(e, n, i, r, o, s, u) {
                                var c = a.com.greensock.plugins[t];
                                return c ? (c._cssRegister(), l[i].parse(e, n, i, r, o, s, u)) : (W("Error: " + t + " js file not loaded."), o)
                            }
                        })
                    }
                };
            u = vt.prototype, u.parseComplex = function(e, t, n, i, r, o) {
                var s, a, l, u, c, f, h = this.keyword;
                if (this.multi && (B.test(n) || B.test(t) ? (a = t.replace(B, "|").split("|"), l = n.replace(B, "|").split("|")) : h && (a = [t], l = [n])), l) {
                    for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) t = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, h && (c = t.indexOf(h), f = n.indexOf(h), c !== f && (-1 === f ? a[s] = a[s].split(h).join("") : -1 === c && (a[s] += " " + h)));
                    t = a.join(", "), n = l.join(", ")
                }
                return Tt(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, o)
            }, u.parse = function(e, t, n, i, o, s) {
                return this.parseComplex(e.style, this.format(Q(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
            }, s.registerSpecialProp = function(e, t, n) {
                yt(e, {
                    parser: function(e, i, r, o, s, a) {
                        var l = new dt(e, r, 0, 0, s, 2, r, !1, n);
                        return l.plugin = a, l.setRatio = t(e, i, o._tween, r), l
                    },
                    priority: n
                })
            }, s.useSVGTransformAttr = h || p;
            var St, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Pt = U("transform"),
                At = q + "transform",
                wt = U("transformOrigin"),
                _t = null !== U("perspective"),
                Mt = V.Transform = function() {
                    this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = s.defaultForce3D !== !1 && _t ? s.defaultForce3D || "auto" : !1
                },
                Ct = window.SVGElement,
                Gt = function(e, t, n) {
                    var i, r = k.createElementNS("http://www.w3.org/2000/svg", e),
                        o = /([a-z])([A-Z])/g;
                    for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                    return t.appendChild(r), r
                },
                Et = k.documentElement,
                Ht = function() {
                    var e, t, n, i = m || /Android/i.test(F) && !window.chrome;
                    return k.createElementNS && !i && (e = Gt("svg", Et), t = Gt("rect", e, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), n = t.getBoundingClientRect().width, t.style[wt] = "50% 50%", t.style[Pt] = "scaleX(0.5)", i = n === t.getBoundingClientRect().width && !(p && _t), Et.removeChild(e)), i
                }(),
                Bt = function(e, t, n, i, r) {
                    var o, a, l, u, c, f, h, p, d, m, T, g, v, y, b = e._gsTransform,
                        S = It(e, !0);
                    b && (v = b.xOrigin, y = b.yOrigin), (!i || 2 > (o = i.split(" ")).length) && (h = e.getBBox(), t = it(t).split(" "), o = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), n.xOrigin = u = parseFloat(o[0]), n.yOrigin = c = parseFloat(o[1]), i && S !== Dt && (f = S[0], h = S[1], p = S[2], d = S[3], m = S[4], T = S[5], g = f * d - h * p, a = u * (d / g) + c * (-p / g) + (p * T - d * m) / g, l = u * (-h / g) + c * (f / g) - (f * T - h * m) / g, u = n.xOrigin = o[0] = a, c = n.yOrigin = o[1] = l), b && (r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (a = u - v, l = c - y, b.xOffset += a * S[0] + l * S[2] - a, b.yOffset += a * S[1] + l * S[3] - l) : b.xOffset = b.yOffset = 0), e.setAttribute("data-svg-origin", o.join(" "))
                },
                Ot = function(e) {
                    return !!(Ct && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                Dt = [1, 0, 0, 1, 0, 0],
                It = function(e, t) {
                    var n, i, r, o, s, a = e._gsTransform || new Mt,
                        l = 1e5;
                    if (Pt ? i = Q(e, At, null, !0) : e.currentStyle && (i = e.currentStyle.filter.match(E), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, (a.svg || e.getBBox && Ot(e)) && (n && -1 !== (e.style[Pt] + "").indexOf("matrix") && (i = e.style[Pt], n = 0), r = e.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Dt;
                    for (r = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], gt = r.length; --gt > -1;) o = Number(r[gt]), r[gt] = (s = o - (o |= 0)) ? (0 | s * l + (0 > s ? -.5 : .5)) / l + o : o;
                    return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                kt = V.getTransform = function(e, n, i, o) {
                    if (e._gsTransform && i && !o) return e._gsTransform;
                    var a, l, u, c, f, h, p = i ? e._gsTransform || new Mt : new Mt,
                        d = 0 > p.scaleX,
                        m = 2e-5,
                        T = 1e5,
                        g = _t ? parseFloat(Q(e, wt, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        v = parseFloat(s.defaultTransformPerspective) || 0;
                    if (p.svg = !(!e.getBBox || !Ot(e)), p.svg && (Bt(e, Q(e, wt, r, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")), St = s.useSVGTransformAttr || Ht), a = It(e), a !== Dt) {
                        if (16 === a.length) {
                            var y, b, S, x, P, A = a[0],
                                w = a[1],
                                _ = a[2],
                                M = a[3],
                                C = a[4],
                                G = a[5],
                                E = a[6],
                                H = a[7],
                                B = a[8],
                                O = a[9],
                                I = a[10],
                                k = a[12],
                                N = a[13],
                                R = a[14],
                                L = a[11],
                                V = Math.atan2(E, I);
                            p.zOrigin && (R = -p.zOrigin, k = B * R - a[12], N = O * R - a[13], R = I * R + p.zOrigin - a[14]), p.rotationX = V * D, V && (x = Math.cos(-V), P = Math.sin(-V), y = C * x + B * P, b = G * x + O * P, S = E * x + I * P, B = C * -P + B * x, O = G * -P + O * x, I = E * -P + I * x, L = H * -P + L * x, C = y, G = b, E = S), V = Math.atan2(B, I), p.rotationY = V * D, V && (x = Math.cos(-V), P = Math.sin(-V), y = A * x - B * P, b = w * x - O * P, S = _ * x - I * P, O = w * P + O * x, I = _ * P + I * x, L = M * P + L * x, A = y, w = b, _ = S), V = Math.atan2(w, A), p.rotation = V * D, V && (x = Math.cos(-V), P = Math.sin(-V), A = A * x + C * P, b = w * x + G * P, G = w * -P + G * x, E = _ * -P + E * x, w = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(A * A + w * w) * T + .5) / T, p.scaleY = (0 | Math.sqrt(G * G + O * O) * T + .5) / T, p.scaleZ = (0 | Math.sqrt(E * E + I * I) * T + .5) / T, p.skewX = 0, p.perspective = L ? 1 / (0 > L ? -L : L) : 0, p.x = k, p.y = N, p.z = R, p.svg && (p.x -= p.xOrigin - (p.xOrigin * A - p.yOrigin * C), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * G))
                        } else if (!(_t && !o && a.length && p.x === a[4] && p.y === a[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(e, "display", n))) {
                            var F = a.length >= 6,
                                X = F ? a[0] : 1,
                                j = a[1] || 0,
                                W = a[2] || 0,
                                q = F ? a[3] : 1;
                            p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(X * X + j * j), c = Math.sqrt(q * q + W * W), f = X || j ? Math.atan2(j, X) * D : p.rotation || 0, h = W || q ? Math.atan2(W, q) * D + f : p.skewX || 0, Math.abs(h) > 90 && 270 > Math.abs(h) && (d ? (u *= -1, h += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, h += 0 >= h ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = f, p.skewX = h, _t && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * X + p.yOrigin * W), p.y -= p.yOrigin - (p.xOrigin * j + p.yOrigin * q))
                        }
                        p.zOrigin = g;
                        for (l in p) m > p[l] && p[l] > -m && (p[l] = 0)
                    }
                    return i && (e._gsTransform = p, p.svg && (St && e.style[Pt] ? t.delayedCall(.001, function() {
                        Vt(e.style, Pt)
                    }) : !St && e.getAttribute("transform") && t.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), p
                },
                Nt = function(e) {
                    var t, n, i = this.data,
                        r = -i.rotation * O,
                        o = r + i.skewX * O,
                        s = 1e5,
                        a = (0 | Math.cos(r) * i.scaleX * s) / s,
                        l = (0 | Math.sin(r) * i.scaleX * s) / s,
                        u = (0 | Math.sin(o) * -i.scaleY * s) / s,
                        c = (0 | Math.cos(o) * i.scaleY * s) / s,
                        f = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        n = l, l = -u, u = -n, t = h.filter, f.filter = "";
                        var p, d, T = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== h.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                            x = i.x + T * i.xPercent / 100,
                            P = i.y + g * i.yPercent / 100;
                        if (null != i.ox && (p = (i.oxp ? .01 * T * i.ox : i.ox) - T / 2, d = (i.oyp ? .01 * g * i.oy : i.oy) - g / 2, x += p - (p * a + d * l), P += d - (p * u + d * c)), v ? (p = T / 2, d = g / 2, y += ", Dx=" + (p - (p * a + d * l) + x) + ", Dy=" + (d - (p * u + d * c) + P) + ")") : y += ", sizingMethod='auto expand')", f.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(H, y) : y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || S.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(" && t.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                            var A, w, _, M = 8 > m ? 1 : -1;
                            for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((T - ((0 > a ? -a : a) * T + (0 > l ? -l : l) * g)) / 2 + x), i.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > u ? -u : u) * T)) / 2 + P), gt = 0; 4 > gt; gt++) w = tt[gt], A = h[w], n = -1 !== A.indexOf("px") ? parseFloat(A) : Y(this.t, w, parseFloat(A), A.replace(b, "")) || 0, _ = n !== i[w] ? 2 > gt ? -i.ieOffsetX : -i.ieOffsetY : 2 > gt ? p - i.ieOffsetX : d - i.ieOffsetY, f[w] = (i[w] = Math.round(n - _ * (0 === gt || 2 === gt ? 1 : M))) + "px"
                        }
                    }
                },
                Rt = V.set3DTransformRatio = V.setTransformRatio = function(e) {
                    var t, n, i, r, o, s, a, l, u, c, f, h, d, m, T, g, v, y, b, S, x, P, A, w = this.data,
                        _ = this.t.style,
                        M = w.rotation,
                        C = w.rotationX,
                        G = w.rotationY,
                        E = w.scaleX,
                        H = w.scaleY,
                        B = w.scaleZ,
                        D = w.x,
                        I = w.y,
                        k = w.z,
                        N = w.svg,
                        R = w.perspective,
                        L = w.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || k || R || G || C) || St && N || !_t) return void(M || w.skewX || N ? (M *= O, P = w.skewX * O, A = 1e5, t = Math.cos(M) * E, r = Math.sin(M) * E, n = Math.sin(M - P) * -H, o = Math.cos(M - P) * H, P && "simple" === w.skewType && (v = Math.tan(P), v = Math.sqrt(1 + v * v), n *= v, o *= v, w.skewY && (t *= v, r *= v)), N && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * n) + w.xOffset, I += w.yOrigin - (w.xOrigin * r + w.yOrigin * o) + w.yOffset, St && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), D += .01 * w.xPercent * m.width, I += .01 * w.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > I && I > -m && (I = 0)), b = (0 | t * A) / A + "," + (0 | r * A) / A + "," + (0 | n * A) / A + "," + (0 | o * A) / A + "," + D + "," + I + ")", N && St ? this.t.setAttribute("transform", "matrix(" + b) : _[Pt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + b) : _[Pt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + H + "," + D + "," + I + ")");
                    if (p && (m = 1e-4, m > E && E > -m && (E = B = 2e-5), m > H && H > -m && (H = B = 2e-5), !R || w.z || w.rotationX || w.rotationY || (R = 0)), M || w.skewX) M *= O, T = t = Math.cos(M), g = r = Math.sin(M), w.skewX && (M -= w.skewX * O, T = Math.cos(M), g = Math.sin(M), "simple" === w.skewType && (v = Math.tan(w.skewX * O), v = Math.sqrt(1 + v * v), T *= v, g *= v, w.skewY && (t *= v, r *= v))), n = -g, o = T;
                    else {
                        if (!(G || C || 1 !== B || R || N)) return void(_[Pt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + k + "px)" + (1 !== E || 1 !== H ? " scale(" + E + "," + H + ")" : ""));
                        t = o = 1, n = r = 0
                    }
                    u = 1, i = s = a = l = c = f = 0, h = R ? -1 / R : 0, d = w.zOrigin, m = 1e-6, S = ",", x = "0", M = G * O, M && (T = Math.cos(M), g = Math.sin(M), a = -g, c = h * -g, i = t * g, s = r * g, u = T, h *= T, t *= T, r *= T), M = C * O, M && (T = Math.cos(M), g = Math.sin(M), v = n * T + i * g, y = o * T + s * g, l = u * g, f = h * g, i = n * -g + i * T, s = o * -g + s * T, u *= T, h *= T, n = v, o = y), 1 !== B && (i *= B, s *= B, u *= B, h *= B), 1 !== H && (n *= H, o *= H, l *= H, f *= H), 1 !== E && (t *= E, r *= E, a *= E, c *= E), (d || N) && (d && (D += i * -d, I += s * -d, k += u * -d + d), N && (D += w.xOrigin - (w.xOrigin * t + w.yOrigin * n) + w.xOffset, I += w.yOrigin - (w.xOrigin * r + w.yOrigin * o) + w.yOffset), m > D && D > -m && (D = x), m > I && I > -m && (I = x), m > k && k > -m && (k = 0)), b = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > t && t > -m ? x : t) + S + (m > r && r > -m ? x : r) + S + (m > a && a > -m ? x : a), b += S + (m > c && c > -m ? x : c) + S + (m > n && n > -m ? x : n) + S + (m > o && o > -m ? x : o), C || G ? (b += S + (m > l && l > -m ? x : l) + S + (m > f && f > -m ? x : f) + S + (m > i && i > -m ? x : i), b += S + (m > s && s > -m ? x : s) + S + (m > u && u > -m ? x : u) + S + (m > h && h > -m ? x : h) + S) : b += ",0,0,0,0,1,0,", b += D + S + I + S + k + S + (R ? 1 + -k / R : 1) + ")", _[Pt] = b
                };
            u = Mt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, n, i, o, a, l) {
                    if (i._lastParsedTransform === l) return o;
                    i._lastParsedTransform = l;
                    var u, c, f, h, p, d, m, T, g, v = e._gsTransform,
                        y = i._transform = kt(e, r, !0, l.parseTransform),
                        b = e.style,
                        S = 1e-6,
                        x = xt.length,
                        P = l,
                        A = {},
                        w = "transformOrigin";
                    if ("string" == typeof P.transform && Pt) f = R.style, f[Pt] = P.transform, f.display = "block", f.position = "absolute", k.body.appendChild(R), u = kt(R, null, !1), k.body.removeChild(R), null != P.xPercent && (u.xPercent = ot(P.xPercent, y.xPercent)), null != P.yPercent && (u.yPercent = ot(P.yPercent, y.yPercent));
                    else if ("object" == typeof P) {
                        if (u = {
                                scaleX: ot(null != P.scaleX ? P.scaleX : P.scale, y.scaleX),
                                scaleY: ot(null != P.scaleY ? P.scaleY : P.scale, y.scaleY),
                                scaleZ: ot(P.scaleZ, y.scaleZ),
                                x: ot(P.x, y.x),
                                y: ot(P.y, y.y),
                                z: ot(P.z, y.z),
                                xPercent: ot(P.xPercent, y.xPercent),
                                yPercent: ot(P.yPercent, y.yPercent),
                                perspective: ot(P.transformPerspective, y.perspective)
                            }, m = P.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (f in m) P[f] = m[f];
                            else P.rotation = m;
                            "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0, u.xPercent = ot(P.x, y.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0, u.yPercent = ot(P.y, y.yPercent)), u.rotation = st("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : y.rotation, y.rotation, "rotation", A), _t && (u.rotationX = st("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", A), u.rotationY = st("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", A)), u.skewX = null == P.skewX ? y.skewX : st(P.skewX, y.skewX), u.skewY = null == P.skewY ? y.skewY : st(P.skewY, y.skewY), (c = u.skewY - y.skewY) && (u.skewX += c, u.rotation += c)
                    }
                    for (_t && null != P.force3D && (y.force3D = P.force3D, d = !0), y.skewType = P.skewType || y.skewType || s.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == P.scale || (u.scaleZ = 1); --x > -1;) n = xt[x], h = u[n] - y[n], (h > S || -S > h || null != P[n] || null != I[n]) && (d = !0, o = new dt(y, n, y[n], h, o), n in A && (o.e = A[n]), o.xs0 = 0, o.plugin = a, i._overwriteProps.push(o.n));
                    return h = P.transformOrigin, y.svg && (h || P.svgOrigin) && (T = y.xOffset, g = y.yOffset, Bt(e, it(h), u, P.svgOrigin, P.smoothOrigin), o = mt(y, "xOrigin", (v ? y : u).xOrigin, u.xOrigin, o, w), o = mt(y, "yOrigin", (v ? y : u).yOrigin, u.yOrigin, o, w), (T !== y.xOffset || g !== y.yOffset) && (o = mt(y, "xOffset", v ? T : y.xOffset, y.xOffset, o, w), o = mt(y, "yOffset", v ? g : y.yOffset, y.yOffset, o, w)), h = St ? null : "0px 0px"), (h || _t && p && y.zOrigin) && (Pt ? (d = !0, n = wt, h = (h || Q(e, n, r, !1, "50% 50%")) + "", o = new dt(b, n, 0, 0, o, -1, w), o.b = b[n], o.plugin = a, _t ? (f = y.zOrigin, h = h.split(" "), y.zOrigin = (h.length > 2 && (0 === f || "0px" !== h[2]) ? parseFloat(h[2]) : f) || 0, o.xs0 = o.e = h[0] + " " + (h[1] || "50%") + " 0px", o = new dt(y, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = y.zOrigin) : o.xs0 = o.e = h) : it(h + "", y)), d && (i._transformType = y.svg && St || !p && 3 !== this._transformType ? 2 : 3), o
                },
                prefix: !0
            }), yt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), yt("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, n, o, s) {
                    t = this.format(t);
                    var a, l, u, c, f, h, p, d, m, T, g, v, y, b, S, x, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        A = e.style;
                    for (m = parseFloat(e.offsetWidth), T = parseFloat(e.offsetHeight), a = t.split(" "), l = 0; P.length > l; l++) this.p.indexOf("border") && (P[l] = U(P[l])), f = c = Q(e, P[l], r, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), h = u = a[l], p = parseFloat(f), v = f.substr((p + "").length), y = "=" === h.charAt(1), y ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = i[n] || v), g !== v && (b = Y(e, "borderLeft", p, v), S = Y(e, "borderTop", p, v), "%" === g ? (f = 100 * (b / m) + "%", c = 100 * (S / T) + "%") : "em" === g ? (x = Y(e, "borderLeft", 1, "em"), f = b / x + "em", c = S / x + "em") : (f = b + "px", c = S + "px"), y && (h = parseFloat(f) + d + g, u = parseFloat(c) + d + g)), s = Tt(A, P[l], f + " " + c, h + " " + u, !1, "0px", s);
                    return s
                },
                prefix: !0,
                formatter: ft("0px 0px 0px 0px", !1, !0)
            }), yt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, n, i, o, s) {
                    var a, l, u, c, f, h, p = "background-position",
                        d = r || K(e, null),
                        T = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(t);
                    if (-1 !== T.indexOf("%") != (-1 !== g.indexOf("%")) && (h = Q(e, "backgroundImage").replace(M, ""), h && "none" !== h)) {
                        for (a = T.split(" "), l = g.split(" "), L.setAttribute("src", h), u = 2; --u > -1;) T = a[u], c = -1 !== T.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (f = 0 === u ? e.offsetWidth - L.width : e.offsetHeight - L.height, a[u] = c ? parseFloat(T) / 100 * f + "px" : 100 * (parseFloat(T) / f) + "%");
                        T = a.join(" ")
                    }
                    return this.parseComplex(e.style, T, g, o, s)
                },
                formatter: it
            }), yt("backgroundSize", {
                defaultValue: "0 0",
                formatter: it
            }), yt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), yt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), yt("transformStyle", {
                prefix: !0
            }), yt("backfaceVisibility", {
                prefix: !0
            }), yt("userSelect", {
                prefix: !0
            }), yt("margin", {
                parser: ht("marginTop,marginRight,marginBottom,marginLeft")
            }), yt("padding", {
                parser: ht("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), yt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, n, i, o, s) {
                    var a, l, u;
                    return 9 > m ? (l = e.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (a = this.format(Q(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, o, s)
                }
            }), yt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), yt("autoRound,strictUnits", {
                parser: function(e, t, n, i, r) {
                    return r
                }
            }), yt("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, n, i, o, s) {
                    return this.parseComplex(e.style, this.format(Q(e, "borderTopWidth", r, !1, "0px") + " " + Q(e, "borderTopStyle", r, !1, "solid") + " " + Q(e, "borderTopColor", r, !1, "#000")), this.format(t), o, s)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(ct) || ["#000"])[0]
                }
            }), yt("borderWidth", {
                parser: ht("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), yt("float,cssFloat,styleFloat", {
                parser: function(e, t, n, i, r) {
                    var o = e.style,
                        s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new dt(o, s, 0, 0, r, -1, n, !1, 0, o[s], t)
                }
            });
            var Lt = function(e) {
                var t, n = this.t,
                    i = n.filter || Q(this.data, "filter") || "",
                    r = 0 | this.s + this.c * e;
                100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), t = !Q(this.data, "filter")) : (n.filter = i.replace(P, ""), t = !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(S, "opacity=" + r))
            };
            yt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, n, i, o, s) {
                    var a = parseFloat(Q(e, "opacity", r, !1, "1")),
                        l = e.style,
                        u = "autoAlpha" === n;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), u && 1 === a && "hidden" === Q(e, "visibility", r) && 0 !== t && (a = 0), X ? o = new dt(l, "opacity", a, t - a, o) : (o = new dt(l, "opacity", 100 * a, 100 * (t - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = s, o.setRatio = Lt), u && (o = new dt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
                }
            });
            var Vt = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(w, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Ft = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Vt(n, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            yt("className", {
                parser: function(e, t, i, o, s, a, l) {
                    var u, c, f, h, p, d = e.getAttribute("class") || "",
                        m = e.style.cssText;
                    if (s = o._classNamePT = new dt(e, i, 0, 0, s, 2), s.setRatio = Ft, s.pr = -11, n = !0, s.b = d, c = Z(e, r), f = e._gsClassPT) {
                        for (h = {}, p = f.data; p;) h[p.p] = 1, p = p._next;
                        f.setRatio(1)
                    }
                    return e._gsClassPT = s, s.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", s.e), u = J(e, c, Z(e), l, h), e.setAttribute("class", d), s.data = u.firstMPT, e.style.cssText = m, s = s.xfirst = o.parse(e, u.difs, s, a)
                }
            });
            var Xt = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, n, i, r, o, s = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) s.cssText = "", r = !0;
                    else
                        for (t = this.e.split(" ").join("").split(","), i = t.length; --i > -1;) n = t[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? wt : l[n].p), Vt(s, n);
                    r && (Vt(s, Pt), o = this.t._gsTransform, o && (o.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (yt("clearProps", {
                    parser: function(e, t, i, r, o) {
                        return o = new dt(e, i, 0, 0, o, 2), o.setRatio = Xt, o.e = t, o.pr = -10, o.data = r._tween, n = !0, o
                    }
                }), u = "bezier,throwProps,physicsProps,physics2D".split(","), gt = u.length; gt--;) bt(u[gt]);
            u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(e, t, a) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = a, this._vars = t, c = t.autoRound, n = !1, i = t.suffixMap || s.suffixMap, r = K(e, ""), o = this._overwriteProps;
                var u, p, m, T, g, v, y, b, S, P = e.style;
                if (f && "" === P.zIndex && (u = Q(e, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(P, "zIndex", 0)), "string" == typeof t && (T = P.cssText, u = Z(e, r), P.cssText = T + ";" + t, u = J(e, u, Z(e)).difs, !X && x.test(t) && (u.opacity = parseFloat(RegExp.$1)), t = u, P.cssText = T), this._firstPT = p = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null), this._transformType) {
                    for (S = 3 === this._transformType, Pt ? h && (f = !0, "" === P.zIndex && (y = Q(e, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(P, "zIndex", 0)), d && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : P.zoom = 1, m = p; m && m._next;) m = m._next;
                    b = new dt(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = Pt ? Rt : Nt, b.data = this._transform || kt(e, r, !0), b.tween = a, b.pr = -1, o.pop()
                }
                if (n) {
                    for (; p;) {
                        for (v = p._next, m = T; m && m.pr > p.pr;) m = m._next;
                        (p._prev = m ? m._prev : g) ? p._prev._next = p: T = p, (p._next = m) ? m._prev = p : g = p, p = v
                    }
                    this._firstPT = T
                }
                return !0
            }, u.parse = function(e, t, n, o) {
                var s, a, u, f, h, p, d, m, T, g, v = e.style;
                for (s in t) p = t[s], a = l[s], a ? n = a.parse(e, p, s, this, n, o, t) : (h = Q(e, s, r) + "", T = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || T && A.test(p) ? (T || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = Tt(v, s, h, p, !0, "transparent", n, 0, o)) : !T || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(h), d = u || 0 === u ? h.substr((u + "").length) : "", ("" === h || "auto" === h) && ("width" === s || "height" === s ? (u = nt(e, s, r), d = "px") : "left" === s || "top" === s ? (u = $(e, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), g = T && "=" === p.charAt(1), g ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), m = p.replace(b, "")) : (f = parseFloat(p), m = T ? p.replace(b, "") : ""), "" === m && (m = s in i ? i[s] : d), p = f || 0 === f ? (g ? f + u : f) + m : t[s], d !== m && "" !== m && (f || 0 === f) && u && (u = Y(e, s, u, d), "%" === m ? (u /= Y(e, s, 100, "%") / 100, t.strictUnits !== !0 && (h = u + "%")) : "em" === m ? u /= Y(e, s, 1, "em") : "px" !== m && (f = Y(e, s, f, m), m = "px"), g && (f || 0 === f) && (p = f + u + m)), g && (f += u), !u && 0 !== u || !f && 0 !== f ? void 0 !== v[s] && (p || "NaN" != p + "" && null != p) ? (n = new dt(v, s, f || u || 0, 0, n, -1, s, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : h) : W("invalid " + s + " tween value: " + t[s]) : (n = new dt(v, s, u, f - u, n, 0, s, c !== !1 && ("px" === m || "zIndex" === s), 0, h, p), n.xs0 = m)) : n = Tt(v, s, h, p, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
                return n
            }, u.setRatio = function(e) {
                var t, n, i, r = this._firstPT,
                    o = 1e-6;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r;) {
                            if (t = r.c * e + r.s, r.r ? t = Math.round(t) : o > t && t > -o && (t = 0), r.type)
                                if (1 === r.type)
                                    if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (n = r.xs0 + t + r.xs1, i = 1; r.l > i; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                r.t[r.p] = n
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                            else r.t[r.p] = t + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (t = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; r.l > i; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                            r.t[r.p] = n
                                        }
                                    } else r.t[r.p] = t + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(e);
                            r = r._next
                        }
            }, u._enableTransforms = function(e) {
                this._transform = this._transform || kt(this._target, r, !0), this._transformType = this._transform.svg && St || !e && 3 !== this._transformType ? 2 : 3
            };
            var jt = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            u._addLazySet = function(e, t, n) {
                var i = this._firstPT = new dt(e, t, 0, 0, this._firstPT, 2);
                i.e = n, i.setRatio = jt, i.data = this
            }, u._linkCSSP = function(e, t, n, i) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
            }, u._kill = function(t) {
                var n, i, r, o = t;
                if (t.autoAlpha || t.alpha) {
                    o = {};
                    for (i in t) o[i] = t[i];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                return t.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), e.prototype._kill.call(this, o)
            };
            var Wt = function(e, t, n) {
                var i, r, o, s;
                if (e.slice)
                    for (r = e.length; --r > -1;) Wt(e[r], t, n);
                else
                    for (i = e.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (t.push(Z(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Wt(o, t, n)
            };
            return s.cascadeTo = function(e, n, i) {
                var r, o, s, a, l = t.to(e, n, i),
                    u = [l],
                    c = [],
                    f = [],
                    h = [],
                    p = t._internals.reservedProps;
                for (e = l._targets || l.target, Wt(e, c, h), l.render(n, !0, !0), Wt(e, f), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1;)
                    if (o = J(h[r], c[r], f[r]), o.firstMPT) {
                        o = o.difs;
                        for (s in i) p[s] && (o[s] = i[s]);
                        a = {};
                        for (s in o) a[s] = c[r][s];
                        u.push(t.fromTo(h[r], n, a, o))
                    }
                return u
            }, e.activate([s]), s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("CSSPlugin"), ! function() {
        "use strict";

        function e(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
        }
        var t = 0,
            n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var i in n) t.push(n[i]);
            for (var r = 0, o = t.length; o > r; r++) t[r][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            i = {},
            r = window.Waypoint,
            o = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete i[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || r.isTouch) && (t.didScroll = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            r.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    r = i.newScroll > i.oldScroll,
                    o = r ? i.forward : i.backward;
                for (var s in this.waypoints[n]) {
                    var a = this.waypoints[n][s],
                        l = i.oldScroll < a.triggerPoint,
                        u = i.newScroll >= a.triggerPoint,
                        c = l && u,
                        f = !l && !u;
                    (c || f) && (a.queueTrigger(o), e[a.group.id] = a.group)
                }
            }
            for (var h in e) e[h].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, r = e.length; r > i; i++) e[i].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = this.adapter.offset(),
                i = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in e) {
                var o = e[r];
                for (var s in this.waypoints[r]) {
                    var a, l, u, c, f, h = this.waypoints[r][s],
                        p = h.options.offset,
                        d = h.triggerPoint,
                        m = 0,
                        T = null == d;
                    h.element !== h.element.window && (m = h.adapter.offset()[o.offsetProp]), "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p), h.options.offset.indexOf("%") > -1 && (p = Math.ceil(o.contextDimension * p / 100))), a = o.contextScroll - o.contextOffset, h.triggerPoint = m + a - p, l = d < o.oldScroll, u = h.triggerPoint >= o.oldScroll, c = l && u, f = !l && !u, !T && c ? (h.queueTrigger(o.backward), i[h.group.id] = h.group) : !T && f ? (h.queueTrigger(o.forward), i[h.group.id] = h.group) : T && o.oldScroll >= h.triggerPoint && (h.queueTrigger(o.forward), i[h.group.id] = h.group)
                }
            }
            for (var g in i) i[g].flushTriggers();
            return this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, t.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            o && o(), t.refreshAll()
        }, r.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, r.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
                vertical: {},
                horizontal: {}
            },
            r = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    r = "up" === n || "left" === n;
                i.sort(r ? t : e);
                for (var o = 0, s = i.length; s > o; o += 1) {
                    var a = i[o];
                    (a.options.continuous || o === i.length - 1) && a.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = r.Adapter.inArray(t, this.waypoints),
                i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = r.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = r.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return i[e.axis][e.name] || new n(e)
        }, r.Group = n
    }(),
    function() {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            n = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, n) {
            e.prototype[n] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
            e[i] = t[i]
        }), n.adapters.push({
            name: "jquery",
            Adapter: e
        }), n.Adapter = e
    }(),
    function() {
        "use strict";

        function e(e) {
            return function() {
                var n = [],
                    i = arguments[0];
                return e.isFunction(arguments[0]) && (i = e.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                    var r = e.extend({}, i, {
                        element: this
                    });
                    "string" == typeof r.context && (r.context = e(this).closest(r.context)[0]), n.push(new t(r))
                }), n
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(), ! function(e) {
        e.extend(e, {
            FlashSprite: function(t) {
                var n = this;
                this.EVENT_READY = "flashSpriteReady", this.EVENT_END = "flashSpriteEnd", this.EVENT_ENTER_FRAME = "flashSpriteEnterFrame", this.options = {
                    dataHeader: "application/json; charset=utf-8",
                    src: null,
                    fps: 30,
                    autoPlay: !0,
                    repeat: !0
                }, this.vars = {
                    frames: null,
                    meta: null,
                    image: null,
                    width: null,
                    height: null,
                    length: null,
                    interval: null
                }, this.node = t, this.index = 0, this.timer = null, this.init = function(e) {
                    e && this.config(e), this._load()
                }, this.config = function(t) {
                    e.extend(this.options, t), this.vars.interval = Math.floor(1e3 / this.options.fps)
                }, this._call = function(t, n) {
                    e.isFunction(this[t]) && this[t].apply(this, n)
                }, this._load = function() {
                    var t = this.options;
                    e.ajax({
                        url: t.src,
                        beforeSend: function(e) {
                            t.dataHeader && e.overrideMimeType(t.dataHeader)
                        }
                    }).done(function(t) {
                        var i = new Image;
                        e.extend(n.vars, {
                            meta: t.meta,
                            image: n.options.src.replace(/((\?|#).+|[^\/]+)?$/, "") + t.meta.image,
                            frames: t.frames,
                            length: t.frames.length,
                            width: t.frames[0].sourceSize.w,
                            height: t.frames[0].sourceSize.h
                        }), i.onload = e.proxy(n._initNode, n), i.src = n.vars.image
                    })
                }, this._initNode = function() {
                    this.node.width(this.vars.width).height(this.vars.height).css({
                        "background-repeat": "no-repeat",
                        "background-image": "url(" + this.vars.image + ")"
                    }), this.options.autoPlay && this.play(), this.node.trigger(this.EVENT_READY)
                }, this.play = function() {
                    this.stop(), this._forward()
                }, this.next = function() {
                    var e = (this.index + 1) % this.vars.length;
                    (this.options.repeat || e) && this._goto(e)
                }, this._forward = function() {
                    var e = n.index;
                    n.next(), e !== n.index ? n.timer = setTimeout(n._forward, n.vars.interval) : n.node.trigger(n.EVENT_END)
                }, this.reverse = function() {
                    this.stop(), this._backward()
                }, this.prev = function() {
                    var e = this.index - 1;
                    if (0 > e) {
                        if (!this.options.repeat) return;
                        e = this.vars.length - 1
                    }
                    this._goto(e)
                }, this._backward = function() {
                    var e = n.index;
                    n.prev(), e !== n.index ? n.timer = setTimeout(n._backward, n.vars.interval) : n.node.trigger(n.EVENT_END)
                }, this._goto = function(e) {
                    0 > e || e >= this.vars.length || (this.index = e, this.node.css("background-position", "-" + this.vars.frames[this.index].frame.x + "px -" + this.vars.frames[this.index].frame.y + "px").trigger(this.EVENT_ENTER_FRAME))
                }, this.stop = function() {
                    clearTimeout(n.timer), n.timer = null
                }, this.gotoAndStop = function(e) {
                    this.stop(), this._goto(e)
                }, this.gotoAndPlay = function(e) {
                    this._goto(e), this.play()
                }, this.rewind = function() {
                    this._goto(0)
                }
            }
        }), e.fn.extend({
            flashSprite: function() {
                var t, n;
                return t = Array.prototype.slice.call(arguments), n = "string" == typeof t[0] ? t.shift() : "init", this.each(function() {
                    var i = e(this);
                    i.data("flashSprite") || i.data("flashSprite", new e.FlashSprite(i)), i.data("flashSprite")._call(n, t)
                }), this
            }
        })
    }(jQuery), ! function(e) {
        e.Queue = function() {
            var t = function() {
                this.promise = e(this).promise()
            };
            return t.prototype.append = function() {
                    var t = arguments,
                        n = t[0];
                    if (!n || !jQuery.isFunction(n)) throw new TypeError("1st parameter should be a function");
                    var t = Array.prototype.slice.call(t, 1);
                    return this.promise = this.promise.pipe(function() {
                        return e.Deferred(function() {
                            return n.apply(this, t)
                        }).promise()
                    })
                },
                function() {
                    return new t
                }
        }()
    }(jQuery), ! function(e) {
        window.baqemono = window.bq = window.baqemono || {
            ui: {
                _autoload: {},
                init: function() {
                    for (var e in this._autoload) this._autoload[e] && this[e].call(this[e])
                },
                config: function(t, n) {
                    if (e.isPlainObject(t))
                        for (var i in t) e.extend(!0, this[i].defaults, t[i]);
                    else "string" == typeof t && t in this && e.extend(!0, this[t].defaults, n)
                },
                plugin: function(e, t, n) {
                    this[e] = t, this[e].defaults = void 0 === n ? {} : n
                },
                autoload: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(this._autoload, t);
                    else if (e.isArray(t)) {
                        var i = this;
                        e.each(t, function(e, t) {
                            i._autoload[t] = n
                        })
                    } else "string" == typeof t && (this._autoload[t] = n)
                }
            },
            util: {
                preloadImage: function() {
                    var t = {};
                    return function(n) {
                        if ("string" != typeof n || n in t) {
                            if ("object" == typeof n && n.length > 0) {
                                n = e.unique(n);
                                for (var i = n.length, r = 0; i > r; r++) bq.util.preloadImage(n[r])
                            }
                        } else {
                            var o = new Image;
                            o.src = n, t[n] = o
                        }
                    }
                }(),
                dc: function(e, t) {
                    return setTimeout(e, void 0 === t ? 0 : t)
                }
            }
        }, bq.ui.plugin("rollOver", function(t) {
            if (t = e.extend({}, this.defaults, t), t.offRegExp = new RegExp(t.off), t.onRegExp = new RegExp(t.on), e('a img[src*="' + t.on + '"],:image[src*="' + t.on + '"]').addClass(t.currentClass), e(document).on({
                    "mouseover.bq.rollOver": function() {
                        var n = e(this);
                        n.hasClass(t.currentClass) || n.attr("src").match(t.offRegExp) && n.attr("src", n.attr("src").replace(t.off, t.on))
                    },
                    "mouseout.bq.rollOver": function() {
                        var n = e(this);
                        n.hasClass(t.currentClass) || n.attr("src").match(t.onRegExp) && n.attr("src", n.attr("src").replace(t.on, t.off))
                    }
                }, ['a img[src*="' + t.off + '"]', 'a img[src*="' + t.on + '"]', ':image[src*="' + t.off + '"]', ':image[src*="' + t.on + '"]'].join(",")), t.preload) {
                var n = [];
                e('a img[src*="' + t.off + '"],:image[src*="' + t.off + '"]').each(function() {
                    e(this).attr("src").match(t.offRegExp) && (n[n.length] = e(this).attr("src").replace(t.off, t.on))
                }), bq.util.preloadImage(n)
            }
        }, {
            off: "_off.",
            on: "_on.",
            currentClass: "current",
            preload: !0
        }), bq.ui.plugin("fadeOver", function(t) {
            t = e.extend({}, this.defaults, t), e(document).on("mouseover.bq.fadeOver", t.target, function() {
                e(this).stop(!0, !1).fadeTo(0, t.from).fadeTo(t.time, 1, t.easing)
            })
        }, {
            target: '.fo, a > img[src*="_fo."]',
            from: 0,
            time: 500,
            easing: "easeOutExpo"
        }), bq.ui.plugin("fadeRollOver", function(t) {
            t = e.extend({}, this.defaults, t), e(document).on({
                "mouseover.bq.fadeRollOver": function() {
                    e(this).stop(!0, !1).fadeTo(t.over_time, t.from, t.easing)
                },
                "mouseout.bq.fadeRollOver": function() {
                    e(this).stop(!0, !1).fadeTo(t.out_time, t.to, t.easing)
                }
            }, t.target), e(t.target).fadeTo(0, t.to, t.easing)
        }, {
            target: '.fro, a > img[src*="_fro."]',
            from: .55,
            to: 1,
            over_time: 0,
            out_time: 500,
            easing: "easeOutQuart"
        }), bq.ui.plugin("externalLink", function(t) {
            t = e.extend({}, this.defaults, t);
            var n = "" !== document.domain ? [document.domain] : [];
            t.ignoreURLs.length && (n = n.concat(t.ignoreURLs));
            var i = "";
            if (n.length) {
                var r = ":not([href^='http://",
                    o = ":not([href^='https://",
                    s = "'])";
                i = r + n.join(s + r) + s, i += o + n.join(s + o) + s
            }
            e("a[href^='http']:not([class*='popup'])" + i).addClass(t.className), e("area[href^='http']:not([class*='popup'])" + i).addClass(t.className), e(document).on("click.bq.externalLink", "a." + t.className + ",area." + t.className, function() {
                return window.open(this.href, "_blank"), !1
            })
        }, {
            className: "external",
            ignoreURLs: []
        }), bq.ui.plugin("popup", function(t) {
            t = e.extend({}, this.defaults, t), e(document).on("click.bq.popup", "a[class*='popup']", function() {
                if (/(webkit)[ \/]([\w.]+)/i.test(navigator.userAgent) && !/(chrome)[ \/]([\w.]+)/i.test(navigator.userAgent)) return window.open(this.href, "_blank"), !1;
                var t = e(this).attr("class").match(/popup([0-9]{1,})x([0-9]{1,})/),
                    n = "yes",
                    i = [];
                return null !== t && (i = ["width=" + t[1], "height=" + t[2]], n = "no"), i = i.concat(["location=" + n, "toolbar=" + n, "directories=" + n, "status=yes", "menubar=no", "scrollbars=yes", "resizable=yes", "alwaysRaised=yes"]), window.name = document.domain + "_root", window.open(this.href, "popup" + (new Date).getTime().toString(), i.join(",")), !1
            }).on("click.bq.popup", "a." + t.openParentClass, function() {
                return window.open(this.href, document.domain + "_root"), !1
            })
        }, {
            openParentClass: "open_parent"
        }), bq.ui.plugin("smoothScroll", function(t) {
            function n(n) {
                if (n = e(n), n.size()) {
                    var i = Math.max(0, Math.min(n.offset().top - t.offset, e(document).height() - e(window).height()));
                    e(/(webkit)[ \/]([\w.]+)/i.test(navigator.userAgent) ? "body" : "html").animate({
                        scrollTop: i
                    }, {
                        duration: t.speed,
                        easing: t.easing
                    })
                }
            }
            t = e.extend({}, this.defaults, t), this.go = n, e(document).on("click.bq.smoothScroll", 'a[href^="#"]:not(.' + t.nonScrollClass + ")", function() {
                return n(this.hash), !1
            })
        }, {
            speed: 1e3,
            easing: "easeInOutQuint",
            offset: 30,
            nonScrollClass: "non_scroll"
        }), bq.ui.plugin("formUtils", function(t) {
            t = e.extend({}, this.defaults, t), e(document).on({
                "focus.bq.formUtils": function() {
                    e(this).addClass(t.focusClass)
                },
                "blur.bq.formUtils": function() {
                    e(this).removeClass(t.focusClass)
                },
                "mouseover.bq.formUtils": function() {
                    e(this).addClass(t.hoverClass)
                },
                "mouseout.bq.formUtils": function() {
                    e(this).removeClass(t.hoverClass)
                }
            }, t.target)
        }, {
            target: "input,textarea,select,button",
            focusClass: "focus",
            hoverClass: "hover"
        }), bq.ui.plugin("fadeLink", function(t) {
            t = e.extend({}, this.defaults, t);
            var n = e("<div></div>");
            n.attr("id", t.coverId).css(e.extend({
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                "z-index": 1e6,
                "background-color": t.color
            }, t.css)).fadeTo(0, 0), /(webkit)[ \/]([\w.]+)/i.test(navigator.userAgent) ? e(window).unload(function() {}).load(function() {
                n.remove()
            }) : /(mozilla)(?:.*? rv:([\w.]+)|)/.test(navigator.userAgent) && e(window).bind("pageshow", function() {
                n.remove()
            }), e(window).unload(function() {}), e(document).on("click.bq.fadeLink", 'a:not(.external,.popup,[href^="mailto:"],[href^="#"])', function() {
                var i = this;
                return e("body").append(n.fadeTo(0, 0)), "onStart" in t && !t.onStart.apply(i) ? (n.remove(), !1) : (n.fadeTo(t.time, 1, function() {
                    return "onComplete" in t && !t.onComplete.apply(i) ? (n.fadeTo(t.time, 0, function() {
                        n.remove()
                    }), !1) : void(window.location.href = i.href)
                }), !1)
            })
        }, {
            color: "#fff",
            time: 750,
            delay: 500,
            coverId: "contents_end_overlay",
            css: {}
        }), bq.ui.plugin("fadeCoverIn", function(t) {
            if (!window.navigator.userAgent.match(/MSIE\s[678]\.0/) || !window.navigator.userAgent.match(/Windows\sNT\s[345]\./)) {
                t = e.extend({}, this.defaults, t);
                var n = e('<div id="' + t.initCoverId + '"></div>');
                e(window), n.css(e.extend({
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    "z-index": 1e6,
                    "background-color": t.color
                }, t.css)), e("body").append(n), n.delay(t.delay).fadeTo(t.time, 0, function() {
                    n.remove()
                })
            }
        }, {
            color: "#fff",
            time: 750,
            delay: 500,
            coverId: "contents_init_overlay",
            css: {}
        }), bq.ui.autoload(["rollOver", "fadeOver", "fadeRollOver", "externalLink", "popup", "smoothScroll", "formUtils"], !0)
    }(jQuery), ! function() {
        "use strict";

        function e(t, n) {
            if ("function" == typeof t) return e("*", t);
            if ("function" == typeof n)
                for (var r = new i(t), o = 1, s = arguments.length; s > o; ++o) e.callbacks.push(r.middleware(arguments[o]));
            else "string" == typeof t ? e["string" == typeof n ? "redirect" : "show"](t, n) : e.start(t)
        }

        function t(t) {
            if (!t.handled) {
                var n;
                n = T ? m + h.hash.replace("#!", "") : h.pathname + h.search, n !== t.canonicalPath && (e.stop(), t.handled = !1, h.href = t.canonicalPath)
            }
        }

        function n(e, t) {
            "/" === e[0] && 0 !== e.indexOf(m) && (e = m + (T ? "#!" : "") + e);
            var n = e.indexOf("?");
            if (this.canonicalPath = e, this.path = e.replace(m, "") || "/", T && (this.path = this.path.replace("#!", "") || "/"), this.title = document.title, this.state = t || {}, this.state.path = e, this.querystring = ~n ? r(e.slice(n + 1)) : "", this.pathname = r(~n ? e.slice(0, n) : e), this.params = {}, this.hash = "", !T) {
                if (!~this.path.indexOf("#")) return;
                var i = this.path.split("#");
                this.path = i[0], this.hash = r(i[1]) || "", this.querystring = this.querystring.split("#")[0]
            }
        }

        function i(e, t) {
            t = t || {}, this.path = "*" === e ? "(.*)" : e, this.regexp = c(this.path, this.keys = [], t.sensitive, t.strict)
        }

        function r(e) {
            return "string" != typeof e ? e : d ? decodeURIComponent(e.replace(/\+/g, " ")) : e
        }

        function o(t) {
            if (1 === s(t) && !(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented)) {
                for (var n = t.target; n && "A" !== n.nodeName;) n = n.parentNode;
                if (n && "A" === n.nodeName && !n.hasAttribute("download") && "external" !== n.getAttribute("rel")) {
                    var i = n.getAttribute("href");
                    if ((T || n.pathname !== h.pathname || !n.hash && "#" !== i) && !(i && i.indexOf("mailto:") > -1) && !n.target && a(n.href)) {
                        var r = n.pathname + n.search + (n.hash || ""),
                            o = r;
                        0 === r.indexOf(m) && (r = r.substr(m.length)), T && (r = r.replace("#!", "")), m && o === r || (t.preventDefault(), e.show(o))
                    }
                }
            }
        }

        function s(e) {
            return e = e || window.event, null === e.which ? e.button : e.which
        }

        function a(e) {
            var t = h.protocol + "//" + h.hostname;
            return h.port && (t += ":" + h.port), e && 0 === e.indexOf(t)
        }
        var l, u, c = function() {
                function e(e) {
                    return e.replace(/([=!:$\/()])/g, "\\$1")
                }

                function t(e, t) {
                    return e.keys = t, e
                }

                function n(e) {
                    return e.sensitive ? "" : "i"
                }

                function i(e, n) {
                    var i = e.source.match(/\((?!\?)/g);
                    if (i)
                        for (var r = 0, o = i.length; o > r; r++) n.push({
                            name: r,
                            delimiter: null,
                            optional: !1,
                            repeat: !1
                        });
                    return t(e, n)
                }

                function r(e, i, r) {
                    for (var o = [], a = 0, l = e.length; l > a; a++) o.push(s(e[a], i, r).source);
                    var u = new RegExp("(?:" + o.join("|") + ")", n(r));
                    return t(u, i)
                }

                function o(t, n) {
                    function i(t, i, o, s, a, l, u, c) {
                        if (i) return i;
                        if (c) return "\\" + c;
                        var f = "+" === u || "*" === u,
                            h = "?" === u || "*" === u;
                        return n.push({
                            name: s || r++,
                            delimiter: o || "/",
                            optional: h,
                            repeat: f
                        }), o = o ? "\\" + o : "", a = e(a || l || "[^" + (o || "\\/") + "]+?"), f && (a = a + "(?:" + o + a + ")*"), h ? "(?:" + o + "(" + a + "))?" : o + "(" + a + ")"
                    }
                    var r = 0;
                    return t.replace(a, i)
                }

                function s(e, s, a) {
                    if (s = s || [], Array.isArray(s) ? a || (a = {}) : (a = s, s = []), e instanceof RegExp) return i(e, s, a);
                    if (Array.isArray(e)) return r(e, s, a);
                    var l = a.strict,
                        u = a.end !== !1,
                        c = o(e, s),
                        f = "/" === e.charAt(e.length - 1);
                    return l || (c = (f ? c.slice(0, -2) : c) + "(?:\\/(?=$))?"), c += u ? "$" : l && f ? "" : "(?=\\/|$)", t(new RegExp("^" + c, n(a)), s)
                }
                Array.isArray = Array.isArray || function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                };
                var a = new RegExp(["(\\\\.)", "([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?", "([.+*?=^!:${}()[\\]|\\/])"].join("|"), "g");
                return s
            }(),
            f = document.ontouchstart ? "touchstart" : "click",
            h = "undefined" != typeof window && (window.history.location || window.location),
            p = !0,
            d = !0,
            m = "",
            T = !1;
        e.callbacks = [], e.exits = [], e.current = "", e.len = 0, e.base = function(e) {
            return 0 === arguments.length ? m : void(m = e)
        }, e.start = function(t) {
            if (t = t || {}, !l && (l = !0, !1 === t.dispatch && (p = !1), !1 === t.decodeURLComponents && (d = !1), !1 !== t.popstate && window.addEventListener("popstate", g, !1), !1 !== t.click && window.addEventListener(f, o, !1), !0 === t.hashbang && (T = !0), p)) {
                var n = T && ~h.hash.indexOf("#!") ? h.hash.substr(2) + h.search : h.pathname + h.search + h.hash;
                e.replace(n, null, !0, p)
            }
        }, e.stop = function() {
            l && (e.current = "", e.len = 0, l = !1, window.removeEventListener(f, o, !1), window.removeEventListener("popstate", g, !1))
        }, e.show = function(t, i, r, o) {
            var s = new n(t, i);
            return e.current = s.path, !1 !== r && e.dispatch(s), !1 !== s.handled && !1 !== o && s.pushState(), s
        }, e.back = function(t, n) {
            e.len > 0 ? (history.back(), e.len--) : t ? setTimeout(function() {
                e.show(t, n)
            }, 0) : setTimeout(function() {
                e.show(m, n)
            }, 0)
        }, e.redirect = function(t, n) {
            "string" == typeof t && "string" == typeof n && e(t, function() {
                setTimeout(function() {
                    e.replace(n)
                }, 0)
            }), "string" == typeof t && "undefined" == typeof n && setTimeout(function() {
                e.replace(t)
            }, 0)
        }, e.replace = function(t, i, r, o) {
            var s = new n(t, i);
            return e.current = s.path, s.init = r, s.save(), !1 !== o && e.dispatch(s), s
        }, e.dispatch = function(n) {
            function i() {
                var t = e.exits[a++];
                return t ? void t(o, i, n) : r()
            }

            function r() {
                var i = e.callbacks[s++];
                return n.path !== e.current ? void(n.handled = !1) : i ? void i(n, r) : t(n)
            }
            var o = u,
                s = 0,
                a = 0;
            u = n, o ? i() : r()
        }, e.exit = function(t) {
            if ("function" == typeof t) return e.exit("*", t);
            for (var n = new i(t), r = 1, o = arguments.length; o > r; ++r) e.exits.push(n.middleware(arguments[r]))
        }, n.prototype.constructor = n, n.prototype.pushState = function() {
            e.len++, history.pushState(this.state, this.title, T && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, n.prototype.save = function() {
            history.replaceState(this.state, this.title, T && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, n.prototype.constructor = i, i.prototype.middleware = function(e) {
            var t = this;
            return function(n, i, r) {
                return t.match(n.path, n.params) ? e(n, i, r) : void i()
            }
        }, i.prototype.match = function(e, t) {
            var n = this.keys,
                i = e.indexOf("?"),
                o = ~i ? e.slice(0, i) : e,
                s = this.regexp.exec(decodeURIComponent(o));
            if (!s) return !1;
            for (var a = 1, l = s.length; l > a; ++a) {
                var u = n[a - 1],
                    c = r(s[a]);
                void 0 === c && hasOwnProperty.call(t, u.name) || (t[u.name] = c)
            }
            return !0
        };
        var g = function() {
            var t = !1;
            return window.addEventListener("load", function() {
                    setTimeout(function() {
                        t = !0
                    }, 0)
                }),
                function(n) {
                    if (t)
                        if (n.state) {
                            var i = n.state.path;
                            e.replace(i, n.state)
                        } else e.show(h.pathname + h.hash, void 0, void 0, !1)
                }
        }();
        e.sameOrigin = a, window.baqemono.page = e
    }();