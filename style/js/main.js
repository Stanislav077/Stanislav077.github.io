function func1() {
    60 <= parseInt($(window).scrollTop()) ? ($(".header-fix").addClass("active"), $(".header-main__logo a").appendTo(".header-fix-cont-logo"), $(".header-main__cont--bottom").appendTo(".header-fix-cont-list")) : ($(".header-fix").removeClass("active"), $(".header-fix-cont-logo a").appendTo(".header-main__logo"), $(".header-fix-cont-list .header-main__cont--bottom").appendTo(".header-main__cont"))
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    var t = [],
        C = T.document,
        d = t.slice,
        g = t.concat,
        a = t.push,
        o = t.indexOf,
        i = {},
        n = i.toString,
        h = i.hasOwnProperty,
        m = {},
        s = "2.2.4",
        S = function(e, t) {
            return new S.fn.init(e, t)
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi,
        u = function(e, t) {
            return t.toUpperCase()
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            i = S.type(e);
        return "function" !== i && !S.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: s,
        constructor: S,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : d.call(this)
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || S.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = r[t], r !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (o = S.isArray(n))) ? (o ? (o = !1, s = i && S.isArray(i) ? i : []) : s = i && S.isPlainObject(i) ? i : {}, r[t] = S.extend(c, s, n)) : void 0 !== n && (r[t] = n));
        return r
    }, S.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === S.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !S.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== S.type(e) || e.nodeType || S.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[n.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            (e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = C.createElement("script")).text = e, C.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(c, u)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (p(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(r, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (p(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : o.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, s = 0,
                r = [];
            if (p(e))
                for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && r.push(o);
            else
                for (s in e) null != (o = t(e[s], s, i)) && r.push(o);
            return g.apply([], r)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            if ("string" == typeof t && (i = e[t], t = e, e = i), S.isFunction(e)) return n = d.call(arguments, 2), (o = function() {
                return e.apply(t || this, n.concat(d.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, o
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function(i) {
        var e, h, w, s, o, g, u, m, x, l, c, k, T, r, C, v, a, d, y, S = "sizzle" + 1 * new Date,
            b = i.document,
            $ = 0,
            n = 0,
            p = se(),
            f = se(),
            A = se(),
            E = function(e, t) {
                return e === t && (c = !0), 0
            },
            O = 1 << 31,
            D = {}.hasOwnProperty,
            t = [],
            N = t.pop,
            j = t.push,
            L = t.push,
            I = t.slice,
            _ = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            q = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            R = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            z = new RegExp("^" + P + "*," + P + "*"),
            B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            U = new RegExp(F),
            V = new RegExp("^" + M + "$"),
            G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ie = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ne = function() {
                k()
            };
        try {
            L.apply(t = I.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    j.apply(e, I.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function oe(e, t, i, n) {
            var o, s, r, a, l, c, d, u, p = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((t ? t.ownerDocument || t : b) !== T && k(t), t = t || T, C)) {
                if (11 !== f && (c = J.exec(e)))
                    if (o = c[1]) {
                        if (9 === f) {
                            if (!(r = t.getElementById(o))) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (p && (r = p.getElementById(o)) && y(t, r) && r.id === o) return i.push(r), i
                    } else {
                        if (c[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = c[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                    }
                if (h.qsa && !A[e + " "] && (!v || !v.test(e))) {
                    if (1 !== f) p = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ee, "\\$&") : t.setAttribute("id", a = S), s = (d = g(e)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; s--;) d[s] = l + " " + ge(d[s]);
                        u = d.join(","), p = Z.test(e) && fe(t.parentNode) || t
                    }
                    if (u) try {
                        return L.apply(i, p.querySelectorAll(u)), i
                    } catch (e) {} finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(R, "$1"), t, i, n)
        }

        function se() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function re(e) {
            return e[S] = !0, e
        }

        function ae(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function ce(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ue(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function pe(r) {
            return re(function(s) {
                return s = +s, re(function(e, t) {
                    for (var i, n = r([], e.length, s), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, k = oe.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : b;
            return n !== T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !o(T), (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), h.attributes = ae(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), h.getElementsByTagName = ae(function(e) {
                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = K.test(T.getElementsByClassName), h.getById = ae(function(e) {
                return r.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length
            }), h.getById ? (w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(te, ie);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var i = e.replace(te, ie);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }), w.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, w.find.CLASS = h.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, a = [], v = [], (h.qsa = K.test(T.querySelectorAll)) && (ae(function(e) {
                r.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
            }), ae(function(e) {
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (h.matchesSelector = K.test(d = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function(e) {
                h.disconnectedMatch = d.call(e, "div"), d.call(e, "[s!='']:x"), a.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(r.compareDocumentPosition), y = t || K.test(r.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, E = t ? function(e, t) {
                if (e === t) return c = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === b && y(b, e) ? -1 : t === T || t.ownerDocument === b && y(b, t) ? 1 : l ? _(l, e) - _(l, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return c = !0, 0;
                var i, n = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    r = [e],
                    a = [t];
                if (!o || !s) return e === T ? -1 : t === T ? 1 : o ? -1 : s ? 1 : l ? _(l, e) - _(l, t) : 0;
                if (o === s) return ce(e, t);
                for (i = e; i = i.parentNode;) r.unshift(i);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (; r[n] === a[n];) n++;
                return n ? ce(r[n], a[n]) : r[n] === b ? -1 : a[n] === b ? 1 : 0
            }), T
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T && k(e), t = t.replace(X, "='$1']"), h.matchesSelector && C && !A[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                var i = d.call(e, t);
                if (i || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return 0 < oe(t, T, null, [e]).length
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== T && k(e), y(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== T && k(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && D.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0;
            return void 0 !== n ? n : h.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(E), c) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return l = null, e
        }, s = oe.getText = function(e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += s(t);
            return i
        }, (w = oe.selectors = {
            cacheLength: 50,
            createPseudo: re,
            match: G,
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
                    return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = g(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ie).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(i, n, o) {
                    return function(e) {
                        var t = oe.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, i) {
                        var n, o, s, r, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                            d = e.parentNode,
                            u = b && e.nodeName.toLowerCase(),
                            p = !i && !b,
                            f = !1;
                        if (d) {
                            if (v) {
                                for (; c;) {
                                    for (r = e; r = r[c];)
                                        if (b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? d.firstChild : d.lastChild], y && p) {
                                for (f = (a = (n = (o = (s = (r = d)[S] || (r[S] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && n[1]) && n[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (f = a = 0) || l.pop();)
                                    if (1 === r.nodeType && ++f && r === e) {
                                        o[h] = [$, a, f];
                                        break
                                    }
                            } else if (p && (f = a = (n = (o = (s = (r = e)[S] || (r[S] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && n[1]), !1 === f)
                                for (;
                                    (r = ++a && r && r[c] || (f = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++f || (p && ((o = (s = r[S] || (r[S] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] = [$, f]), r !== e)););
                            return (f -= m) === g || f % g == 0 && 0 <= f / g
                        }
                    }
                },
                PSEUDO: function(e, s) {
                    var t, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[S] ? r(s) : 1 < r.length ? (t = [e, e, "", s], w.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                        for (var i, n = r(e, s), o = n.length; o--;) e[i = _(e, n[o])] = !(t[i] = n[o])
                    }) : function(e) {
                        return r(e, 0, t)
                    }) : r
                }
            },
            pseudos: {
                not: re(function(e) {
                    var n = [],
                        o = [],
                        a = u(e.replace(R, "$1"));
                    return a[S] ? re(function(e, t, i, n) {
                        for (var o, s = a(e, null, n, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
                    }) : function(e, t, i) {
                        return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                    }
                }),
                has: re(function(t) {
                    return function(e) {
                        return 0 < oe(t, e).length
                    }
                }),
                contains: re(function(t) {
                    return t = t.replace(te, ie),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                        }
                }),
                lang: re(function(i) {
                    return V.test(i || "") || oe.error("unsupported lang: " + i), i = i.replace(te, ie).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: pe(function(e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }),
                lt: pe(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                    return e
                }),
                gt: pe(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        }) w.pseudos[e] = ue(e);

        function he() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function me(a, e, t) {
            var l = e.dir,
                c = t && "parentNode" === l,
                d = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return a(e, t, i)
            } : function(e, t, i) {
                var n, o, s, r = [$, d];
                if (i) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && a(e, t, i)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) {
                            if ((n = (o = (s = e[S] || (e[S] = {}))[e.uniqueID] || (s[e.uniqueID] = {}))[l]) && n[0] === $ && n[1] === d) return r[2] = n[2];
                            if ((o[l] = r)[2] = a(e, t, i)) return !0
                        }
            }
        }

        function ve(o) {
            return 1 < o.length ? function(e, t, i) {
                for (var n = o.length; n--;)
                    if (!o[n](e, t, i)) return !1;
                return !0
            } : o[0]
        }

        function ye(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), c && t.push(a)));
            return r
        }

        function be(f, h, g, m, v, e) {
            return m && !m[S] && (m = be(m)), v && !v[S] && (v = be(v, e)), re(function(e, t, i, n) {
                var o, s, r, a = [],
                    l = [],
                    c = t.length,
                    d = e || function(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) oe(e, t[n], i);
                        return i
                    }(h || "*", i.nodeType ? [i] : i, []),
                    u = !f || !e && h ? d : ye(d, a, f, i, n),
                    p = g ? v || (e ? f : c || m) ? [] : t : u;
                if (g && g(u, p, i, n), m)
                    for (o = ye(p, l), m(o, [], i, n), s = o.length; s--;)(r = o[s]) && (p[l[s]] = !(u[l[s]] = r));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (o = [], s = p.length; s--;)(r = p[s]) && o.push(u[s] = r);
                            v(null, p = [], o, n)
                        }
                        for (s = p.length; s--;)(r = p[s]) && -1 < (o = v ? _(e, r) : a[s]) && (e[o] = !(t[o] = r))
                    }
                } else p = ye(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, n) : L.apply(t, p)
            })
        }

        function we(e) {
            for (var o, t, i, n = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = me(function(e) {
                return e === o
            }, r, !0), c = me(function(e) {
                return -1 < _(o, e)
            }, r, !0), d = [function(e, t, i) {
                var n = !s && (i || t !== x) || ((o = t).nodeType ? l(e, t, i) : c(e, t, i));
                return o = null, n
            }]; a < n; a++)
                if (t = w.relative[e[a].type]) d = [me(ve(d), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (i = ++a; i < n && !w.relative[e[i].type]; i++);
                        return be(1 < a && ve(d), 1 < a && ge(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(R, "$1"), t, a < i && we(e.slice(a, i)), i < n && we(e = e.slice(i)), i < n && ge(e))
                    }
                    d.push(t)
                }
            return ve(d)
        }
        return he.prototype = w.filters = w.pseudos, w.setFilters = new he, g = oe.tokenize = function(e, t) {
            var i, n, o, s, r, a, l, c = f[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (r = e, a = [], l = w.preFilter; r;) {
                for (s in i && !(n = z.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = B.exec(r)) && (i = n.shift(), o.push({
                    value: i,
                    type: n[0].replace(R, " ")
                }), r = r.slice(i.length)), w.filter) !(n = G[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: s,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return t ? r.length : r ? oe.error(e) : f(e, a).slice(0)
        }, u = oe.compile = function(e, t) {
            var i, m, v, y, b, n, o = [],
                s = [],
                r = A[e + " "];
            if (!r) {
                for (t || (t = g(e)), i = t.length; i--;)(r = we(t[i]))[S] ? o.push(r) : s.push(r);
                (r = A(e, (m = s, y = 0 < (v = o).length, b = 0 < m.length, n = function(e, t, i, n, o) {
                    var s, r, a, l = 0,
                        c = "0",
                        d = e && [],
                        u = [],
                        p = x,
                        f = e || b && w.find.TAG("*", o),
                        h = $ += null == p ? 1 : Math.random() || .1,
                        g = f.length;
                    for (o && (x = t === T || t || o); c !== g && null != (s = f[c]); c++) {
                        if (b && s) {
                            for (r = 0, t || s.ownerDocument === T || (k(s), i = !C); a = m[r++];)
                                if (a(s, t || T, i)) {
                                    n.push(s);
                                    break
                                }
                            o && ($ = h)
                        }
                        y && ((s = !a && s) && l--, e && d.push(s))
                    }
                    if (l += c, y && c !== l) {
                        for (r = 0; a = v[r++];) a(d, u, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = N.call(n));
                            u = ye(u)
                        }
                        L.apply(n, u), o && !e && 0 < u.length && 1 < l + v.length && oe.uniqueSort(n)
                    }
                    return o && ($ = h, x = p), d
                }, y ? re(n) : n))).selector = e
            }
            return r
        }, m = oe.select = function(e, t, i, n) {
            var o, s, r, a, l, c = "function" == typeof e && e,
                d = !n && g(e = c.selector || e);
            if (i = i || [], 1 === d.length) {
                if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (r = s[0]).type && h.getById && 9 === t.nodeType && C && w.relative[s[1].type]) {
                    if (!(t = (w.find.ID(r.matches[0].replace(te, ie), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                    if ((l = w.find[a]) && (n = l(r.matches[0].replace(te, ie), Z.test(s[0].type) && fe(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = n.length && ge(s))) return L.apply(i, n), i;
                        break
                    }
            }
            return (c || u(e, d))(n, t, !C, i, !t || Z.test(e) && fe(t.parentNode) || t), i
        }, h.sortStable = S.split("").sort(E).join("") === S, h.detectDuplicates = !!c, k(), h.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(H, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), oe
    }(T);
    S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = f.uniqueSort, S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains;
    var v = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && S(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        y = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        b = S.expr.match.needsContext,
        w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        x = /^.[^:#\[\.,]*$/;

    function k(e, i, n) {
        if (S.isFunction(i)) return S.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        });
        if (i.nodeType) return S.grep(e, function(e) {
            return e === i !== n
        });
        if ("string" == typeof i) {
            if (x.test(i)) return S.filter(i, e, n);
            i = S.filter(i, e)
        }
        return S.grep(e, function(e) {
            return -1 < o.call(i, e) !== n
        })
    }
    S.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (S.contains(o[t], this)) return !0
            }));
            for (t = 0; t < i; t++) S.find(e, o[t], n);
            return (n = this.pushStack(1 < i ? S.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this, e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && b.test(e) ? S(e) : e || [], !1).length
        }
    });
    var $, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (S.fn.init = function(e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || $, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(n[1]) && S.isPlainObject(t))
                    for (n in t) S.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (o = C.getElementById(n[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = C, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this))
    }).prototype = S.fn, $ = S(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, s = [], r = b.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(1 < s.length ? S.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return v(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return v(e, "parentNode", i)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return v(e, "nextSibling")
        },
        prevAll: function(e) {
            return v(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return v(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return v(e, "previousSibling", i)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || S.merge([], e.childNodes)
        }
    }, function(n, o) {
        S.fn[n] = function(e, t) {
            var i = S.map(this, o, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && (O[n] || S.uniqueSort(i), E.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var N, j = /\S+/g;

    function L() {
        C.removeEventListener("DOMContentLoaded", L), T.removeEventListener("load", L), S.ready()
    }
    S.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, S.each(e.match(j) || [], function(e, t) {
            i[t] = !0
        }), i) : S.extend({}, n);
        var o, t, s, r, a = [],
            l = [],
            c = -1,
            d = function() {
                for (r = n.once, s = o = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && n.stopOnFalse && (c = a.length, t = !1);
                n.memory || (t = !1), o = !1, r && (a = t ? [] : "")
            },
            u = {
                add: function() {
                    return a && (t && !o && (c = a.length - 1, l.push(t)), function i(e) {
                        S.each(e, function(e, t) {
                            S.isFunction(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== S.type(t) && i(t)
                        })
                    }(arguments), t && !o && d()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = S.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], t || (a = t = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return u
    }, S.extend({
        Deferred: function(e) {
            var s = [
                    ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", S.Callbacks("memory")]
                ],
                o = "pending",
                r = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return S.Deferred(function(n) {
                            S.each(s, function(e, t) {
                                var i = S.isFunction(o[e]) && o[e];
                                a[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && S.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this === r ? n.promise() : this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, r) : r
                    }
                },
                a = {};
            return r.pipe = r.then, S.each(s, function(e, t) {
                var i = t[2],
                    n = t[3];
                r[t[1]] = i.add, n && i.add(function() {
                    o = n
                }, s[1 ^ e][2].disable, s[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? r : this, arguments), this
                }, a[t[0] + "With"] = i.fireWith
            }), r.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var o, t, i, n = 0,
                s = d.call(arguments),
                r = s.length,
                a = 1 !== r || e && S.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : S.Deferred(),
                c = function(t, i, n) {
                    return function(e) {
                        i[t] = this, n[t] = 1 < arguments.length ? d.call(arguments) : e, n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (1 < r)
                for (o = new Array(r), t = new Array(r), i = new Array(r); n < r; n++) s[n] && S.isFunction(s[n].promise) ? s[n].promise().progress(c(n, t, o)).done(c(n, i, s)).fail(l.reject) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    }), S.fn.ready = function(e) {
        return S.ready.promise().done(e), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? S.readyWait++ : S.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || (N.resolveWith(C, [S]), S.fn.triggerHandler && (S(C).triggerHandler("ready"), S(C).off("ready")))
        }
    }), S.ready.promise = function(e) {
        return N || (N = S.Deferred(), "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", L), T.addEventListener("load", L))), N.promise(e)
    }, S.ready.promise();
    var I = function(e, t, i, n, o, s, r) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === S.type(i))
                for (a in o = !0, i) I(e, t, a, i[a], !0, s, r);
            else if (void 0 !== n && (o = !0, S.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(S(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
        },
        _ = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function H() {
        this.expando = S.expando + H.uid++
    }
    H.uid = 1, H.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!_(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, _(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[t] = i;
            else
                for (n in t) o[n] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, S.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, o, s = e[this.expando];
            if (void 0 !== s) {
                if (void 0 === t) this.register(e);
                else {
                    S.isArray(t) ? n = t.concat(t.map(S.camelCase)) : (o = S.camelCase(t), n = t in s ? [t, o] : (n = o) in s ? [n] : n.match(j) || []), i = n.length;
                    for (; i--;) delete s[n[i]]
                }(void 0 === t || S.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var P = new H,
        M = new H,
        q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        F = /[A-Z]/g;

    function W(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(F, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : q.test(i) ? S.parseJSON(i) : i)
                } catch (e) {}
                M.set(e, t, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function(e) {
            return M.hasData(e) || P.hasData(e)
        },
        data: function(e, t, i) {
            return M.access(e, t, i)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, i) {
            return P.access(e, t, i)
        },
        _removeData: function(e, t) {
            P.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === n) {
                if (this.length && (o = M.get(s), 1 === s.nodeType && !P.get(s, "hasDataAttrs"))) {
                    for (t = r.length; t--;) r[t] && 0 === (i = r[t].name).indexOf("data-") && (i = S.camelCase(i.slice(5)), W(s, i, o[i]));
                    P.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof n ? this.each(function() {
                M.set(this, n)
            }) : I(this, function(t) {
                var e, i;
                if (s && void 0 === t) return void 0 !== (e = M.get(s, n) || M.get(s, n.replace(F, "-$&").toLowerCase())) ? e : (i = S.camelCase(n), void 0 !== (e = M.get(s, i)) ? e : void 0 !== (e = W(s, i, void 0)) ? e : void 0);
                i = S.camelCase(n), this.each(function() {
                    var e = M.get(this, i);
                    M.set(this, i, t), -1 < n.indexOf("-") && void 0 !== e && M.set(this, n, t)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = P.get(e, t), i && (!n || S.isArray(i) ? n = P.access(e, t, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = S.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = S._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function() {
                S.dequeue(e, t)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return P.get(e, i) || P.access(e, i, {
                empty: S.Callbacks("once memory").add(function() {
                    P.remove(e, [t + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = S.queue(this, t, i);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = S.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = P.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
        B = ["Top", "Right", "Bottom", "Left"],
        X = function(e, t) {
            return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
        };

    function U(e, t, i, n) {
        var o, s = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (S.cssNumber[t] ? "" : "px"),
            d = (S.cssNumber[t] || "px" !== c && +l) && z.exec(S.css(e, t));
        if (d && d[3] !== c)
            for (c = c || d[3], i = i || [], d = +l || 1; d /= s = s || ".5", S.style(e, t, d + c), s !== (s = a() / l) && 1 !== s && --r;);
        return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
    }
    var V = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        Y = /^$|\/(?:java|ecma)script/i,
        Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function K(e, t) {
        var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], i) : i
    }

    function J(e, t) {
        for (var i = 0, n = e.length; i < n; i++) P.set(e[i], "globalEval", !t || P.get(t[i], "globalEval"))
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ie(e, t, i, n, o) {
        for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((s = e[f]) || 0 === s)
                if ("object" === S.type(s)) S.merge(p, s.nodeType ? [s] : s);
                else if (te.test(s)) {
                    for (r = r || u.appendChild(t.createElement("div")), a = (G.exec(s) || ["", ""])[1].toLowerCase(), l = Q[a] || Q._default, r.innerHTML = l[1] + S.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
                    S.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
                } else p.push(t.createTextNode(s));
        for (u.textContent = "", f = 0; s = p[f++];)
            if (n && -1 < S.inArray(s, n)) o && o.push(s);
            else if (c = S.contains(s.ownerDocument, s), r = K(u.appendChild(s), "script"), c && J(r), i)
                for (d = 0; s = r[d++];) Y.test(s.type || "") && i.push(s);
        return u
    }
    Z = C.createDocumentFragment().appendChild(C.createElement("div")), (ee = C.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), m.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var ne = /^key/,
        oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        se = /^([^.]*)(?:\.(.+)|)/;

    function re() {
        return !0
    }

    function ae() {
        return !1
    }

    function le() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function ce(e, t, i, n, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) ce(e, a, i, n, t[a], s);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = ae;
        else if (!o) return e;
        return 1 === s && (r = o, (o = function(e) {
            return S().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, o, n, i)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = P.get(t);
            if (m)
                for (i.handler && (i = (s = i).handler, o = s.selector), i.guid || (i.guid = S.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(j) || [""]).length; c--;) f = g = (a = se.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = S.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = S.event.special[f] || {}, d = S.extend({
                    type: f,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && S.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, r) || t.addEventListener && t.addEventListener(f, r)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), S.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = P.hasData(e) && P.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--;)
                    if (f = g = (a = se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = S.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) d = p[s], !o && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || S.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) S.event.remove(e, f + t[c], i, n, !0);
                S.isEmptyObject(l) && P.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = S.event.fix(e);
            var t, i, n, o, s, r, a = d.call(arguments),
                l = (P.get(this, "events") || {})[e.type] || [],
                c = S.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (r = S.event.handlers.call(this, e, l), t = 0;
                     (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                         (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (n = ((S.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (n = [], i = 0; i < a; i++) void 0 === n[o = (s = t[i]).selector + " "] && (n[o] = s.needsContext ? -1 < S(o, this).index(l) : S.find(o, this, null, [l]).length), n[o] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
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
                var i, n, o, s = t.button;
                return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || C).documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[S.expando]) return e;
            var t, i, n, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = oe.test(o) ? this.mouseHooks : ne.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new S.Event(s), t = n.length; t--;) e[i = n[t]] = s[i];
            return e.target || (e.target = C), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== le() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === le() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return S.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : ae) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        S.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, i = e.relatedTarget,
                    n = e.handleObj;
                return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, i, n) {
            return ce(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return ce(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ae), this.each(function() {
                S.event.remove(this, e, i, t)
            })
        }
    });
    var de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ue = /<script|<style|<link/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var i, n, o, s, r, a, l, c;
        if (1 === t.nodeType) {
            if (P.hasData(e) && (s = P.access(e), r = P.set(t, s), c = s.events))
                for (o in delete r.handle, r.events = {}, c)
                    for (i = 0, n = c[o].length; i < n; i++) S.event.add(t, o, c[o][i]);
            M.hasData(e) && (a = M.access(e), l = S.extend({}, a), M.set(t, l))
        }
    }

    function be(i, n, o, s) {
        n = g.apply([], n);
        var e, t, r, a, l, c, d = 0,
            u = i.length,
            p = u - 1,
            f = n[0],
            h = S.isFunction(f);
        if (h || 1 < u && "string" == typeof f && !m.checkClone && pe.test(f)) return i.each(function(e) {
            var t = i.eq(e);
            h && (n[0] = f.call(this, e, t.html())), be(t, n, o, s)
        });
        if (u && (t = (e = ie(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (r = S.map(K(e, "script"), me)).length; d < u; d++) l = e, d !== p && (l = S.clone(l, !0, !0), a && S.merge(r, K(l, "script"))), o.call(i[d], l, d);
            if (a)
                for (c = r[r.length - 1].ownerDocument, S.map(r, ve), d = 0; d < a; d++) l = r[d], Y.test(l.type || "") && !P.access(l, "globalEval") && S.contains(c, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : S.globalEval(l.textContent.replace(he, "")))
        }
        return i
    }

    function we(e, t, i) {
        for (var n, o = t ? S.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || S.cleanData(K(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && J(K(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(de, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, s, r, a, l, c, d = e.cloneNode(!0),
                u = S.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (r = K(d), n = 0, o = (s = K(e)).length; n < o; n++) a = s[n], l = r[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (s = s || K(e), r = r || K(d), n = 0, o = s.length; n < o; n++) ye(s[n], r[n]);
                else ye(e, d);
            return 0 < (r = K(d, "script")).length && J(r, !u && K(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, i, n, o = S.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (_(i)) {
                    if (t = i[P.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                        i[P.expando] = void 0
                    }
                    i[M.expando] && (i[M.expando] = void 0)
                }
        }
    }), S.fn.extend({
        domManip: be,
        detach: function(e) {
            return we(this, e, !0)
        },
        remove: function(e) {
            return we(this, e)
        },
        text: function(e) {
            return I(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(K(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return I(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ue.test(e) && !Q[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(K(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return be(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(K(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, r) {
        S.fn[e] = function(e) {
            for (var t, i = [], n = S(e), o = n.length - 1, s = 0; s <= o; s++) t = s === o ? this : this.clone(!0), S(n[s])[r](t), a.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var xe, ke = {
        HTML: "block",
        BODY: "block"
    };

    function Te(e, t) {
        var i = S(t.createElement(e)).appendTo(t.body),
            n = S.css(i[0], "display");
        return i.detach(), n
    }

    function Ce(e) {
        var t = C,
            i = ke[e];
        return i || ("none" !== (i = Te(e, t)) && i || ((t = (xe = (xe || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = Te(e, t), xe.detach()), ke[e] = i), i
    }
    var Se = /^margin/,
        $e = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
        Ae = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        Ee = function(e, t, i, n) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
            return o
        },
        Oe = C.documentElement;

    function De(e, t, i) {
        var n, o, s, r, a = e.style;
        return "" !== (r = (i = i || Ae(e)) ? i.getPropertyValue(t) || i[t] : void 0) && void 0 !== r || S.contains(e.ownerDocument, e) || (r = S.style(e, t)), i && !m.pixelMarginRight() && $e.test(r) && Se.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
    }

    function Ne(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        var t, i, n, o, s = C.createElement("div"),
            r = C.createElement("div");

        function e() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Oe.appendChild(s);
            var e = T.getComputedStyle(r);
            t = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, r.style.marginRight = "50%", n = "4px" === e.marginRight, Oe.removeChild(s)
        }
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === r.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(r), S.extend(m, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            pixelMarginRight: function() {
                return null == i && e(), n
            },
            reliableMarginLeft: function() {
                return null == i && e(), o
            },
            reliableMarginRight: function() {
                var e, t = r.appendChild(C.createElement("div"));
                return t.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", r.style.width = "1px", Oe.appendChild(s), e = !parseFloat(T.getComputedStyle(t).marginRight), Oe.removeChild(s), r.removeChild(t), e
            }
        }))
    }();
    var je = /^(none|table(?!-c[ea]).+)/,
        Le = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ie = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"],
        He = C.createElement("div").style;

    function Pe(e) {
        if (e in He) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = _e.length; i--;)
            if ((e = _e[i] + t) in He) return e
    }

    function Me(e, t, i) {
        var n = z.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function qe(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += S.css(e, i + B[s], !0, o)), n ? ("content" === i && (r -= S.css(e, "padding" + B[s], !0, o)), "margin" !== i && (r -= S.css(e, "border" + B[s] + "Width", !0, o))) : (r += S.css(e, "padding" + B[s], !0, o), "padding" !== i && (r += S.css(e, "border" + B[s] + "Width", !0, o)));
        return r
    }

    function Fe(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ae(e),
            r = "border-box" === S.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if (((o = De(e, t, s)) < 0 || null == o) && (o = e.style[t]), $e.test(o)) return o;
            n = r && (m.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + qe(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function We(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (s[r] = P.get(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && X(n) && (s[r] = P.access(n, "olddisplay", Ce(n.nodeName)))) : (o = X(n), "none" === i && o || P.set(n, "olddisplay", o ? i : S.css(n, "display"))));
        for (r = 0; r < a; r++)(n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function Re(e, t, i, n, o) {
        return new Re.prototype.init(e, t, i, n, o)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = De(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = S.camelCase(t),
                    l = e.style;
                if (t = S.cssProps[a] || (S.cssProps[a] = Pe(a) || a), r = S.cssHooks[t] || S.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t];
                "string" === (s = typeof i) && (o = z.exec(i)) && o[1] && (i = U(e, t, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (S.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var o, s, r, a = S.camelCase(t);
            return t = S.cssProps[a] || (S.cssProps[a] = Pe(a) || a), (r = S.cssHooks[t] || S.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = De(e, t, n)), "normal" === o && t in Ie && (o = Ie[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
        }
    }), S.each(["height", "width"], function(e, r) {
        S.cssHooks[r] = {
            get: function(e, t, i) {
                if (t) return je.test(S.css(e, "display")) && 0 === e.offsetWidth ? Ee(e, Le, function() {
                    return Fe(e, r, i)
                }) : Fe(e, r, i)
            },
            set: function(e, t, i) {
                var n, o = i && Ae(e),
                    s = i && qe(e, r, i, "border-box" === S.css(e, "boxSizing", !1, o), o);
                return s && (n = z.exec(t)) && "px" !== (n[3] || "px") && (e.style[r] = t, t = S.css(e, r)), Me(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Ne(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - Ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.cssHooks.marginRight = Ne(m.reliableMarginRight, function(e, t) {
        if (t) return Ee(e, {
            display: "inline-block"
        }, De, [e, "marginRight"])
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, s) {
        S.cssHooks[o + s] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + B[t] + s] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, Se.test(o) || (S.cssHooks[o + s].set = Me)
    }), S.fn.extend({
        css: function(e, t) {
            return I(this, function(e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (S.isArray(t)) {
                    for (n = Ae(e), o = t.length; r < o; r++) s[t[r]] = S.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return We(this, !0)
        },
        hide: function() {
            return We(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                X(this) ? S(this).show() : S(this).hide()
            })
        }
    }), ((S.Tween = Re).prototype = {
        constructor: Re,
        init: function(e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Re.propHooks[this.prop];
            return e && e.get ? e.get(this) : Re.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Re.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Re.propHooks._default.set(this), this
        }
    }).init.prototype = Re.prototype, (Re.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Re.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Re.prototype.init, S.fx.step = {};
    var ze, Be, Xe, Ue, Ve, Ge = /^(?:toggle|show|hide)$/,
        Ye = /queueHooks$/;

    function Qe() {
        return T.setTimeout(function() {
            ze = void 0
        }), ze = S.now()
    }

    function Ke(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = B[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Je(e, t, i) {
        for (var n, o = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function Ze(s, e, t) {
        var i, r, n = 0,
            o = Ze.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = ze || Qe(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
                return a.notifyWith(s, [c, i, t]), i < 1 && o ? t : (a.resolveWith(s, [c]), !1)
            },
            c = a.promise({
                elem: s,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ze || Qe(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var i = S.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var t = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < i; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e])) : a.rejectWith(s, [c, e]), this
                }
            }),
            d = c.props;
        for (! function(e, t) {
            var i, n, o, s, r;
            for (i in e)
                if (o = t[n = S.camelCase(i)], s = e[i], S.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = S.cssHooks[n]) && "expand" in r)
                    for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
                else t[n] = o
        }(d, c.opts.specialEasing); n < o; n++)
            if (i = Ze.prefilters[n].call(c, s, d, c.opts)) return S.isFunction(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = S.proxy(i.stop, i)), i;
        return S.map(d, Je, c), S.isFunction(c.opts.start) && c.opts.start.call(s, c), S.fx.timer(S.extend(l, {
            elem: s,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    S.Animation = S.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return U(i.elem, e, z.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            S.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(j);
            for (var i, n = 0, o = e.length; n < o; n++) i = e[n], Ze.tweeners[i] = Ze.tweeners[i] || [], Ze.tweeners[i].unshift(t)
        },
        prefilters: [function(t, e, i) {
            var n, o, s, r, a, l, c, d = this,
                u = {},
                p = t.style,
                f = t.nodeType && X(t),
                h = P.get(t, "fxshow");
            for (n in i.queue || (null == (a = S._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, S.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = S.css(t, "display")) ? P.get(t, "olddisplay") || Ce(t.nodeName) : c) && "none" === S.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            })), e)
                if (o = e[n], Ge.exec(o)) {
                    if (delete e[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !h || void 0 === h[n]) continue;
                        f = !0
                    }
                    u[n] = h && h[n] || S.style(t, n)
                } else c = void 0;
            if (S.isEmptyObject(u)) "inline" === ("none" === c ? Ce(t.nodeName) : c) && (p.display = c);
            else
                for (n in h ? "hidden" in h && (f = h.hidden) : h = P.access(t, "fxshow", {}), s && (h.hidden = !f), f ? S(t).show() : d.done(function() {
                    S(t).hide()
                }), d.done(function() {
                    var e;
                    for (e in P.remove(t, "fxshow"), u) S.style(t, e, u[e])
                }), u) r = Je(f ? h[n] : 0, n, d), n in h || (h[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }), S.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? S.extend({}, e) : {
            complete: i || !i && t || S.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !S.isFunction(t) && t
        };
        return n.duration = S.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in S.fx.speeds ? S.fx.speeds[n.duration] : S.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            S.isFunction(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            var o = S.isEmptyObject(t),
                s = S.speed(e, i, n),
                r = function() {
                    var e = Ze(this, S.extend({}, t), s);
                    (o || P.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(o, e, s) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(s)
            };
            return "string" != typeof o && (s = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    i = S.timers,
                    n = P.get(this);
                if (t) n[t] && n[t].stop && r(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && Ye.test(t) && r(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(s), e = !1, i.splice(t, 1));
                !e && s || S.dequeue(this, o)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var e, t = P.get(this),
                    i = t[r + "queue"],
                    n = t[r + "queueHooks"],
                    o = S.timers,
                    s = i ? i.length : 0;
                for (t.finish = !0, S.queue(this, r, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, n) {
        var o = S.fn[n];
        S.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Ke(n, !0), e, t, i)
        }
    }), S.each({
        slideDown: Ke("show"),
        slideUp: Ke("hide"),
        slideToggle: Ke("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        S.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            i = S.timers;
        for (ze = S.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || S.fx.stop(), ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function() {
        Be || (Be = T.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function() {
        T.clearInterval(Be), Be = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(n, e) {
        return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Xe = C.createElement("input"), Ue = C.createElement("select"), Ve = Ue.appendChild(C.createElement("option")), Xe.type = "checkbox", m.checkOn = "" !== Xe.value, m.optSelected = Ve.selected, Ue.disabled = !0, m.optDisabled = !Ve.disabled, (Xe = C.createElement("input")).value = "t", Xe.type = "radio", m.radioValue = "t" === Xe.value;
    var et, tt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return I(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === s && S.isXMLDoc(e) || (t = t.toLowerCase(), o = S.attrHooks[t] || (S.expr.match.bool.test(t) ? et : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                s = t && t.match(j);
            if (s && 1 === e.nodeType)
                for (; i = s[o++];) n = S.propFix[i] || i, S.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        }
    }), et = {
        set: function(e, t, i) {
            return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = tt[t] || S.find.attr;
        tt[t] = function(e, t, i) {
            var n, o;
            return i || (o = tt[t], tt[t] = n, n = null != s(e, t, i) ? t.toLowerCase() : null, tt[t] = o), n
        }
    });
    var it = /^(?:input|select|textarea|button)$/i,
        nt = /^(?:a|area)$/i;
    S.fn.extend({
        prop: function(e, t) {
            return I(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : it.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;

    function st(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    S.fn.extend({
        addClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, st(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; i = this[l++];)
                    if (o = st(i), n = 1 === i.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o !== (a = S.trim(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (S.isFunction(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, st(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(j) || []; i = this[l++];)
                    if (o = st(i), n = 1 === i.nodeType && (" " + o + " ").replace(ot, " ")) {
                        for (r = 0; s = e[r++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        o !== (a = S.trim(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var s = typeof o;
            return "boolean" == typeof t && "string" === s ? t ? this.addClass(o) : this.removeClass(o) : S.isFunction(o) ? this.each(function(e) {
                S(this).toggleClass(o.call(this, e, st(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if ("string" === s)
                    for (t = 0, i = S(this), n = o.match(j) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== o && "boolean" !== s || ((e = st(this)) && P.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : P.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + st(i) + " ").replace(ot, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var rt = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    S.fn.extend({
        val: function(i) {
            var n, e, o, t = this[0];
            return arguments.length ? (o = S.isFunction(i), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(rt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : S.trim(S.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                        if (((i = n[l]).selected || l === o) && (m.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !S.nodeName(i.parentNode, "optgroup"))) {
                            if (t = S(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = S.makeArray(t), r = o.length; r--;)((n = o[r]).selected = -1 < S.inArray(S.valHooks.option.get(n), s)) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (S.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, m.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(e, t, i, n) {
            var o, s, r, a, l, c, d, u = [i || C],
                p = h.call(e, "type") ? e.type : e,
                f = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = r = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), d = S.event.special[p] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                if (!n && !d.noBubble && !S.isWindow(i)) {
                    for (a = d.delegateType || p, lt.test(a + p) || (s = s.parentNode); s; s = s.parentNode) u.push(s), r = s;
                    r === (i.ownerDocument || C) && u.push(r.defaultView || r.parentWindow || T)
                }
                for (o = 0;
                     (s = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : d.bindType || p, (c = (P.get(s, "events") || {})[e.type] && P.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && _(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), t) || !_(i) || l && S.isFunction(i[p]) && !S.isWindow(i) && ((r = i[l]) && (i[l] = null), i[S.event.triggered = p](), S.event.triggered = void 0, r && (i[l] = r)), e.result
            }
        },
        simulate: function(e, t, i) {
            var n = S.extend(new S.Event, i, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return S.event.trigger(e, t, i, !0)
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, i) {
        S.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), m.focusin = "onfocusin" in T, m.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var o = function(e) {
            S.event.simulate(n, e.target, S.event.fix(e))
        };
        S.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, n);
                t || e.addEventListener(i, o, !0), P.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = P.access(e, n) - 1;
                t ? P.access(e, n, t) : (e.removeEventListener(i, o, !0), P.remove(e, n))
            }
        }
    });
    var ct = T.location,
        dt = S.now(),
        ut = /\?/;
    S.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/,
        ft = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        vt = {},
        yt = {},
        bt = "*/".concat("*"),
        wt = C.createElement("a");

    function xt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0,
                o = e.toLowerCase().match(j) || [];
            if (S.isFunction(t))
                for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(t)) : (s[i] = s[i] || []).push(t)
        }
    }

    function kt(t, o, s, r) {
        var a = {},
            l = t === yt;

        function c(e) {
            var n;
            return a[e] = !0, S.each(t[e] || [], function(e, t) {
                var i = t(o, s, r);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Tt(e, t) {
        var i, n, o = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && S.extend(!0, e, n), e
    }
    wt.href = ct.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Tt(Tt(e, S.ajaxSettings), t) : Tt(S.ajaxSettings, e)
        },
        ajaxPrefilter: xt(vt),
        ajaxTransport: xt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var d, u, p, i, f, n, h, o, g = S.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                y = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = g.statusCode || {},
                s = {},
                r = {},
                x = 0,
                a = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!i)
                                for (i = {}; t = ht.exec(p);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return x || (e = r[i] = r[i] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return d && d.abort(t), l(0, t), this
                    }
                };
            if (y.promise(k).complete = b.add, k.success = k.done, k.error = k.fail, g.url = ((e || g.url || ct.href) + "").replace(pt, "").replace(mt, ct.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = S.trim(g.dataType || "*").toLowerCase().match(j) || [""], null == g.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = wt.protocol + "//" + wt.host != n.protocol + "//" + n.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), kt(vt, g, t, k), 2 === x) return k;
            for (o in (h = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (ut.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = ft.test(u) ? u.replace(ft, "$1_=" + dt++) : u + (ut.test(u) ? "&" : "?") + "_=" + dt++)), g.ifModified && (S.lastModified[u] && k.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && k.setRequestHeader("If-None-Match", S.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : g.accepts["*"]), g.headers) k.setRequestHeader(o, g.headers[o]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, k, g) || 2 === x)) return k.abort();
            for (o in a = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) k[o](g[o]);
            if (d = kt(yt, g, t, k)) {
                if (k.readyState = 1, h && v.trigger("ajaxSend", [k, g]), 2 === x) return k;
                g.async && 0 < g.timeout && (f = T.setTimeout(function() {
                    k.abort("timeout")
                }, g.timeout));
                try {
                    x = 1, d.send(s, l)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, i, n) {
                var o, s, r, a, l, c = t;
                2 !== x && (x = 2, f && T.clearTimeout(f), d = void 0, p = n || "", k.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                    for (var n, o, s, r, a = e.contents, l = e.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, k, i)), a = function(e, t, i, n) {
                    var o, s, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(r = c[l + " " + s] || c["* " + s]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== r)
                                    if (r && e.throws) t = r(t);
                                    else try {
                                        t = r(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: r ? e : "No conversion from " + l + " to " + s
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, k, o), o ? (g.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (S.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (S.etag[u] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, !e && c || (c = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || c) + "", o ? y.resolveWith(m, [s, c, k]) : y.rejectWith(m, [k, c, r]), k.statusCode(w), w = void 0, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [k, g, o ? s : r]), b.fireWith(m, [k, c]), h && (v.trigger("ajaxComplete", [k, g]), --S.active || S.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, i) {
            return S.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, o) {
        S[o] = function(e, t, i, n) {
            return S.isFunction(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: i
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(t) {
            var e;
            return S.isFunction(t) ? this.each(function(e) {
                S(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(i) {
            return S.isFunction(i) ? this.each(function(e) {
                S(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = S.isFunction(t);
            return this.each(function(e) {
                S(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function(e) {
        return !S.expr.filters.visible(e)
    }, S.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Ct = /%20/g,
        St = /\[\]$/,
        $t = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;

    function Ot(i, e, n, o) {
        var t;
        if (S.isArray(e)) S.each(e, function(e, t) {
            n || St.test(i) ? o(i, t) : Ot(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
        });
        else if (n || "object" !== S.type(e)) o(i, e);
        else
            for (t in e) Ot(i + "[" + t + "]", e[t], n, o)
    }
    S.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = S.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) Ot(i, e[i], t, o);
        return n.join("&").replace(Ct, "+")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Et.test(this.nodeName) && !At.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var i = S(this).val();
                return null == i ? null : S.isArray(i) ? S.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace($t, "\r\n")
                }
            }).get()
        }
    }), S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Dt = {
            0: 200,
            1223: 204
        },
        Nt = S.ajaxSettings.xhr();
    m.cors = !!Nt && "withCredentials" in Nt, m.ajax = Nt = !!Nt, S.ajaxTransport(function(o) {
        var s, r;
        if (m.cors || Nt && !o.crossDomain) return {
            send: function(e, t) {
                var i, n = o.xhr();
                if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (i in o.xhrFields) n[i] = o.xhrFields[i];
                for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                s = function(e) {
                    return function() {
                        s && (s = r = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Dt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), r = n.onerror = s("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        s && r()
                    })
                }, s = s("abort");
                try {
                    n.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        }
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(i) {
        var n, o;
        if (i.crossDomain) return {
            send: function(e, t) {
                n = S("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", o = function(e) {
                    n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(n[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var jt = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || S.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, o, s, r = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Lt, "$1" + n) : !1 !== e.jsonp && (e.url += (ut.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return s || S.error(n + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = T[n], T[n] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? S(T).removeProp(n) : T[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, jt.push(n)), s && S.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), S.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || C;
        var n = w.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = ie([e], t, o), o && o.length && S(o).remove(), S.merge([], n.childNodes))
    };
    var It = S.fn.load;

    function _t(e) {
        return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    S.fn.load = function(e, t, i) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return -1 < a && (n = S.trim(e.slice(a)), e = e.slice(0, a)), S.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && S.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.filters.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a, l, c = S.css(e, "position"),
                d = S(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (n = d.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, i, S.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            return s ? (e = s.documentElement, S.contains(e, n) ? (o = n.getBoundingClientRect(), i = _t(s), {
                top: o.top + i.pageYOffset - e.clientTop,
                left: o.left + i.pageXOffset - e.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (n = e.offset()), n.top += S.css(e[0], "borderTopWidth", !0), n.left += S.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - S.css(i, "marginTop", !0),
                    left: t.left - n.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || Oe
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var s = "pageYOffset" === o;
        S.fn[t] = function(e) {
            return I(this, function(e, t, i) {
                var n = _t(e);
                if (void 0 === i) return n ? n[o] : e[t];
                n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, i) {
        S.cssHooks[i] = Ne(m.pixelPosition, function(e, t) {
            if (t) return t = De(e, i), $e.test(t) ? S(e).position()[i] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(s, r) {
        S.each({
            padding: "inner" + s,
            content: r,
            "": "outer" + s
        }, function(n, e) {
            S.fn[e] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    o = n || (!0 === e || !0 === t ? "margin" : "border");
                return I(this, function(e, t, i) {
                    var n;
                    return S.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? S.css(e, t, o) : S.style(e, t, i, o)
                }, r, i ? e : void 0, i, null)
            }
        })
    }), S.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        size: function() {
            return this.length
        }
    }), S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Ht = T.jQuery,
        Pt = T.$;
    return S.noConflict = function(e) {
        return T.$ === S && (T.$ = Pt), e && T.jQuery === S && (T.jQuery = Ht), S
    }, e || (T.jQuery = T.$ = S), S
}),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(c) {
        "use strict";
        var o, r = window.Slick || {};
        o = 0, (r = function(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return c('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
            var n = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= n.slideCount) return !1;
            n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, r.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, r.prototype.animateSlide = function(e, t) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
                n.disableTransition(), t.call()
            }, n.options.speed))
        }, r.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = c(e).not(this.$slider)), e
        }, r.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = c(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, r.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, r.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, r.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, r.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, r.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, r.prototype.buildDots = function() {
            var e, t, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, r.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, r.prototype.buildRows = function() {
            var e, t, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), 0 < a.options.rows) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var d = e * r + (t * a.options.slidesPerRow + i);
                            s.get(d) && c.appendChild(s.get(d))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, r.prototype.checkResponsive = function(e, t) {
            var i, n, o, s = this,
                r = !1,
                a = s.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
                null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = n), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
            }
        }, r.prototype.changeSlide = function(e, t) {
            var i, n, o = this,
                s = c(e.currentTarget);
            switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
                    break;
                case "next":
                    n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, r.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, r.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, r.prototype.cleanUpRows = function() {
            var e;
            0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, r.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, r.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, r.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, r.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, r.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, r.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var t = c(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, r.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, r.prototype.getLeft = function(e) {
            var t, i, n, o, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
        }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, r.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, r.prototype.getSlick = function() {
            return this
        }, r.prototype.getSlideCount = function() {
            var i, n, o = this;
            return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
            }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, r.prototype.init = function(e) {
            var t = this;
            c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, r.prototype.initADA = function() {
            var n = this,
                i = Math.ceil(n.slideCount / n.options.slidesToShow),
                o = n.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < n.slideCount
                });
            n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
                var t = o.indexOf(e);
                if (c(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + n.instanceUid + e,
                        tabindex: -1
                    }), -1 !== t) {
                    var i = "slick-slide-control" + n.instanceUid + t;
                    c("#" + i).length && c(this).attr({
                        "aria-describedby": i
                    })
                }
            }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
                var t = o[e];
                c(this).attr({
                    role: "presentation"
                }), c(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + n.instanceUid + e,
                    "aria-controls": "slick-slide" + n.instanceUid + t,
                    "aria-label": e + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(n.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.options.focusOnChange ? n.$slides.eq(e).attr({
                tabindex: "0"
            }) : n.$slides.eq(e).removeAttr("tabindex");
            n.activateADA()
        }, r.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, r.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, r.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
        }, r.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
        }, r.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, r.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, r.prototype.lazyLoad = function() {
            var e, t, i, s = this;

            function n(e) {
                c("img[data-lazy]", e).each(function() {
                    var e = c(this),
                        t = c(this).attr("data-lazy"),
                        i = c(this).attr("data-srcset"),
                        n = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, t])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                    }, o.src = t
                })
            }
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? i = (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (t = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), i = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (t = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, i = Math.ceil(t + s.options.slidesToShow), !0 === s.options.fade && (0 < t && t--, i <= s.slideCount && i++)), e = s.$slider.find(".slick-slide").slice(t, i), "anticipated" === s.options.lazyLoad)
                for (var o = t - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) o < 0 && (o = s.slideCount - 1), e = (e = e.add(a.eq(o))).add(a.eq(r)), o--, r++;
            n(e), s.slideCount <= s.options.slidesToShow ? n(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? n(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && n(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, r.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, r.prototype.next = r.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, r.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, r.prototype.pause = r.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, r.prototype.play = r.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, r.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, r.prototype.prev = r.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, r.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, r.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, n, o, s, r = this,
                a = c("img[data-lazy]", r.$slider);
            a.length ? (t = a.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
            }, s.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
            }, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
        }, r.prototype.refresh = function(e) {
            var t, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, r.prototype.registerBreakpoints = function() {
            var e, t, i, n = this,
                o = n.options.responsive || null;
            if ("array" === c.type(o) && o.length) {
                for (e in n.respondTo = n.options.respondTo || "window", o)
                    if (i = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (t = o[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
                    }
                n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, r.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, r.prototype.resize = function() {
            var e = this;
            c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, r.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (o = {}, !1 === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
        }, r.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, r.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(e, t) {
                i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : c(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, r.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, r.prototype.setOption = r.prototype.slickSetOption = function() {
            var e, t, i, n, o, s = this,
                r = !1;
            if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
            else if ("multiple" === o) c.each(i, function(e, t) {
                s.options[e] = t
            });
            else if ("responsive" === o)
                for (t in n)
                    if ("array" !== c.type(s.options.responsive)) s.options.responsive = [n[t]];
                    else {
                        for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(n[t])
                    }
            r && (s.unload(), s.reinit())
        }, r.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, r.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, r.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
        }, r.prototype.setupInfinite = function() {
            var e, t, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i + n.slideCount; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, r.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, r.prototype.selectHandler = function(e) {
            var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                i = parseInt(t.attr("data-slick-index"));
            i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
        }, r.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a, l, c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), n = e, a = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
                else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o), void c.animateHeight();
                    !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function() {
                        c.postSlide(o)
                    }) : c.postSlide(o)
                }
        }, r.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, r.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, r.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
            if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, r.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, r.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r, a = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, r.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, r.prototype.unload = function() {
            var e = this;
            c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, r.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, r.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, r.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, r.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            var e, t, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof n || void 0 === n ? i[e].slick = new r(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
            return i
        }
    }),
    function(t, i) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return i(t, e)
        }) : "object" == typeof exports ? i(t, require("jquery")) : i(t, t.jQuery || t.Zepto)
    }(this, function(e, r) {
        "use strict";
        var t, n, i, s = "remodal",
            o = e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.NAMESPACE || s,
            a = r.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(e) {
                return e + "." + o
            }).join(" "),
            l = r.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(e) {
                return e + "." + o
            }).join(" "),
            c = r.extend({
                hashTracking: !0,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                closeOnEscape: !0,
                closeOnOutsideClick: !0,
                modifier: "",
                appendTo: null
            }, e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.DEFAULTS),
            d = {
                CLOSING: "closing",
                CLOSED: "closed",
                OPENING: "opening",
                OPENED: "opened"
            },
            u = {
                CONFIRMATION: "confirmation",
                CANCELLATION: "cancellation"
            },
            p = void 0 !== (t = document.createElement("div").style).animationName || void 0 !== t.WebkitAnimationName || void 0 !== t.MozAnimationName || void 0 !== t.msAnimationName || void 0 !== t.OAnimationName,
            f = /iPad|iPhone|iPod/.test(navigator.platform);

        function h(e) {
            if (p && "none" === e.css("animation-name") && "none" === e.css("-webkit-animation-name") && "none" === e.css("-moz-animation-name") && "none" === e.css("-o-animation-name") && "none" === e.css("-ms-animation-name")) return 0;
            var t, i, n, o, s = e.css("animation-duration") || e.css("-webkit-animation-duration") || e.css("-moz-animation-duration") || e.css("-o-animation-duration") || e.css("-ms-animation-duration") || "0s",
                r = e.css("animation-delay") || e.css("-webkit-animation-delay") || e.css("-moz-animation-delay") || e.css("-o-animation-delay") || e.css("-ms-animation-delay") || "0s",
                a = e.css("animation-iteration-count") || e.css("-webkit-animation-iteration-count") || e.css("-moz-animation-iteration-count") || e.css("-o-animation-iteration-count") || e.css("-ms-animation-iteration-count") || "1";
            for (s = s.split(", "), r = r.split(", "), a = a.split(", "), o = 0, i = s.length, t = Number.NEGATIVE_INFINITY; o < i; o++) t < (n = parseFloat(s[o]) * parseInt(a[o], 10) + parseFloat(r[o])) && (t = n);
            return t
        }

        function g() {
            if (r(document).height() <= r(window).height()) return 0;
            var e, t, i = document.createElement("div"),
                n = document.createElement("div");
            return i.style.visibility = "hidden", i.style.width = "100px", document.body.appendChild(i), e = i.offsetWidth, i.style.overflow = "scroll", n.style.width = "100%", i.appendChild(n), t = n.offsetWidth, i.parentNode.removeChild(i), e - t
        }

        function m() {
            if (!f) {
                var e, t, i = r("html"),
                    n = w("is-locked");
                i.hasClass(n) && (t = r(document.body), e = parseInt(t.css("padding-right"), 10) - g(), t.css("padding-right", e + "px"), i.removeClass(n))
            }
        }

        function v(e, t, i, n) {
            var o = w("is", t),
                s = [w("is", d.CLOSING), w("is", d.OPENING), w("is", d.CLOSED), w("is", d.OPENED)].join(" ");
            e.$bg.removeClass(s).addClass(o), e.$overlay.removeClass(s).addClass(o), e.$wrapper.removeClass(s).addClass(o), e.$modal.removeClass(s).addClass(o), e.state = t, !i && e.$modal.trigger({
                type: t,
                reason: n
            }, [{
                reason: n
            }])
        }

        function y(e, t, i) {
            var n = 0,
                o = function(e) {
                    e.target === this && n++
                },
                s = function(e) {
                    e.target === this && 0 == --n && (r.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
                        i[t].off(a + " " + l)
                    }), t())
                };
            r.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
                i[t].on(a, o).on(l, s)
            }), e(), 0 === h(i.$bg) && 0 === h(i.$overlay) && 0 === h(i.$wrapper) && 0 === h(i.$modal) && (r.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
                i[t].off(a + " " + l)
            }), t())
        }

        function b(i) {
            i.state !== d.CLOSED && (r.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
                i[t].off(a + " " + l)
            }), i.$bg.removeClass(i.settings.modifier), i.$overlay.removeClass(i.settings.modifier).hide(), i.$wrapper.hide(), m(), v(i, d.CLOSED, !0))
        }

        function w() {
            for (var e = o, t = 0; t < arguments.length; ++t) e += "-" + arguments[t];
            return e
        }

        function x() {
            var e, t, i = location.hash.replace("#", "");
            if (i) {
                try {
                    t = r("[data-" + s + '-id="' + i + '"]')
                } catch (e) {}
                t && t.length && (e = r[s].lookup[t.data(s)]) && e.settings.hashTracking && e.open()
            } else n && n.state === d.OPENED && n.settings.hashTracking && n.close()
        }

        function k(e, t) {
            var i = r(document.body),
                n = this;
            n.settings = r.extend({}, c, t), n.index = r[s].lookup.push(n) - 1, n.state = d.CLOSED, n.$overlay = r("." + w("overlay")), null !== n.settings.appendTo && n.settings.appendTo.length && (i = r(n.settings.appendTo)), n.$overlay.length || (n.$overlay = r("<div>").addClass(w("overlay") + " " + w("is", d.CLOSED)).hide(), i.append(n.$overlay)), n.$bg = r("." + w("bg")).addClass(w("is", d.CLOSED)), n.$modal = e.addClass(o + " " + w("is-initialized") + " " + n.settings.modifier + " " + w("is", d.CLOSED)).attr("tabindex", "-1"), n.$wrapper = r("<div>").addClass(w("wrapper") + " " + n.settings.modifier + " " + w("is", d.CLOSED)).hide().append(n.$modal), i.append(n.$wrapper), n.$wrapper.on("click." + o, "[data-" + s + '-action="close"]', function(e) {
                e.preventDefault(), n.close()
            }), n.$wrapper.on("click." + o, "[data-" + s + '-action="cancel"]', function(e) {
                e.preventDefault(), n.$modal.trigger(u.CANCELLATION), n.settings.closeOnCancel && n.close(u.CANCELLATION)
            }), n.$wrapper.on("click." + o, "[data-" + s + '-action="confirm"]', function(e) {
                e.preventDefault(), n.$modal.trigger(u.CONFIRMATION), n.settings.closeOnConfirm && n.close(u.CONFIRMATION)
            }), n.$wrapper.on("click." + o, function(e) {
                r(e.target).hasClass(w("wrapper")) && n.settings.closeOnOutsideClick && n.close()
            })
        }
        k.prototype.open = function() {
            var e, t = this;
            t.state !== d.OPENING && t.state !== d.CLOSING && ((e = t.$modal.attr("data-" + s + "-id")) && t.settings.hashTracking && (i = r(window).scrollTop(), location.hash = e), n && n !== t && b(n), n = t, function() {
                if (!f) {
                    var e, t, i = r("html"),
                        n = w("is-locked");
                    i.hasClass(n) || (t = r(document.body), e = parseInt(t.css("padding-right"), 10) + g(), t.css("padding-right", e + "px"), i.addClass(n))
                }
            }(), t.$bg.addClass(t.settings.modifier), t.$overlay.addClass(t.settings.modifier).show(), t.$wrapper.show().scrollTop(0), t.$modal.focus(), y(function() {
                v(t, d.OPENING)
            }, function() {
                v(t, d.OPENED)
            }, t))
        }, k.prototype.close = function(e) {
            var t = this;
            t.state !== d.OPENING && t.state !== d.CLOSING && t.state !== d.CLOSED && (t.settings.hashTracking && t.$modal.attr("data-" + s + "-id") === location.hash.substr(1) && (location.hash = "", r(window).scrollTop(i)), y(function() {
                v(t, d.CLOSING, !1, e)
            }, function() {
                t.$bg.removeClass(t.settings.modifier), t.$overlay.removeClass(t.settings.modifier).hide(), t.$wrapper.hide(), m(), v(t, d.CLOSED, !1, e)
            }, t))
        }, k.prototype.getState = function() {
            return this.state
        }, k.prototype.destroy = function() {
            var e = r[s].lookup;
            b(this), this.$wrapper.remove(), delete e[this.index], 0 === r.grep(e, function(e) {
                return !!e
            }).length && (this.$overlay.remove(), this.$bg.removeClass(w("is", d.CLOSING) + " " + w("is", d.OPENING) + " " + w("is", d.CLOSED) + " " + w("is", d.OPENED)))
        }, r[s] = {
            lookup: []
        }, r.fn[s] = function(i) {
            var n, o;
            return this.each(function(e, t) {
                null == (o = r(t)).data(s) ? (n = new k(o, i), o.data(s, n.index), n.settings.hashTracking && o.attr("data-" + s + "-id") === location.hash.substr(1) && n.open()) : n = r[s].lookup[o.data(s)]
            }), n
        }, r(document).ready(function() {
            r(document).on("click", "[data-" + s + "-target]", function(e) {
                e.preventDefault();
                var t = e.currentTarget.getAttribute("data-" + s + "-target"),
                    i = r("[data-" + s + '-id="' + t + '"]');
                r[s].lookup[i.data(s)].open()
            }), r(document).find("." + o).each(function(e, t) {
                var i = r(t),
                    n = i.data(s + "-options");
                n ? ("string" == typeof n || n instanceof String) && (n = function(e) {
                    var t, i, n, o, s = {};
                    for (o = 0, i = (t = (e = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",")).split(",")).length; o < i; o++) t[o] = t[o].split(":"), ("string" == typeof(n = t[o][1]) || n instanceof String) && (n = "true" === n || "false" !== n && n), ("string" == typeof n || n instanceof String) && (n = isNaN(n) ? n : +n), s[t[o][0]] = n;
                    return s
                }(n)) : n = {}, i[s](n)
            }), r(document).on("keydown." + o, function(e) {
                n && n.settings.closeOnEscape && n.state === d.OPENED && 27 === e.keyCode && n.close()
            }), r(window).on("hashchange." + o, x)
        })
    }),
    function(a) {
        "use strict";
        var l = {
            init: function(e) {
                return this.each(function() {
                    this.self = a(this), l.destroy.call(this.self), this.opt = a.extend(!0, {}, a.fn.raty.defaults, e), l._adjustCallback.call(this), l._adjustNumber.call(this), l._adjustHints.call(this), this.opt.score = l._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && l._adjustStarType.call(this), l._adjustPath.call(this), l._createStars.call(this), this.opt.cancel && l._createCancel.call(this), this.opt.precision && l._adjustPrecision.call(this), l._createScore.call(this), l._apply.call(this, this.opt.score), l._setTitle.call(this, this.opt.score), l._target.call(this, this.opt.score), this.opt.readOnly ? l._lock.call(this) : (this.style.cursor = "pointer", l._binds.call(this))
                })
            },
            _adjustCallback: function() {
                for (var e = ["number", "readOnly", "score", "scoreName", "target"], t = 0; t < e.length; t++) "function" == typeof this.opt[e[t]] && (this.opt[e[t]] = this.opt[e[t]].call(this))
            },
            _adjustedScore: function(e) {
                return e ? l._between(e, 0, this.opt.number) : e
            },
            _adjustHints: function() {
                if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half)
                    for (var e = this.opt.precision ? 10 : 2, t = 0; t < this.opt.number; t++) {
                        var i = this.opt.hints[t];
                        "[object Array]" !== Object.prototype.toString.call(i) && (i = [i]), this.opt.hints[t] = [];
                        for (var n = 0; n < e; n++) {
                            var o = i[n],
                                s = i[i.length - 1];
                            void 0 === s && (s = null), this.opt.hints[t][n] = void 0 === o ? s : o
                        }
                    }
            },
            _adjustNumber: function() {
                this.opt.number = l._between(this.opt.number, 1, this.opt.numberMax)
            },
            _adjustPath: function() {
                this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/")
            },
            _adjustPrecision: function() {
                this.opt.half = !0
            },
            _adjustStarType: function() {
                var e = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
                this.opt.path = "";
                for (var t = 0; t < e.length; t++) this.opt[e[t]] = this.opt[e[t]].replace(".", "-")
            },
            _apply: function(e) {
                l._fill.call(this, e), e && (0 < e && this.score.val(e), l._roundStars.call(this, e))
            },
            _between: function(e, t, i) {
                return Math.min(Math.max(parseFloat(e), t), i)
            },
            _binds: function() {
                this.cancel && (l._bindOverCancel.call(this), l._bindClickCancel.call(this), l._bindOutCancel.call(this)), l._bindOver.call(this), l._bindClick.call(this), l._bindOut.call(this)
            },
            _bindClick: function() {
                var n = this;
                n.stars.on("click.raty", function(e) {
                    var t = !0,
                        i = n.opt.half || n.opt.precision ? n.self.data("score") : this.alt || a(this).data("alt");
                    n.opt.click && (t = n.opt.click.call(n, +i, e)), (t || void 0 === t) && (n.opt.half && !n.opt.precision && (i = l._roundHalfScore.call(n, i)), l._apply.call(n, i))
                })
            },
            _bindClickCancel: function() {
                var t = this;
                t.cancel.on("click.raty", function(e) {
                    t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
                })
            },
            _bindOut: function() {
                var i = this;
                i.self.on("mouseleave.raty", function(e) {
                    var t = +i.score.val() || void 0;
                    l._apply.call(i, t), l._target.call(i, t, e), l._resetTitle.call(i), i.opt.mouseout && i.opt.mouseout.call(i, t, e)
                })
            },
            _bindOutCancel: function() {
                var n = this;
                n.cancel.on("mouseleave.raty", function(e) {
                    var t = n.opt.cancelOff;
                    if ("img" !== n.opt.starType && (t = n.opt.cancelClass + " " + t), l._setIcon.call(n, this, t), n.opt.mouseout) {
                        var i = +n.score.val() || void 0;
                        n.opt.mouseout.call(n, i, e)
                    }
                })
            },
            _bindOver: function() {
                var i = this,
                    e = i.opt.half ? "mousemove.raty" : "mouseover.raty";
                i.stars.on(e, function(e) {
                    var t = l._getScoreByPosition.call(i, e, this);
                    l._fill.call(i, t), i.opt.half && (l._roundStars.call(i, t, e), l._setTitle.call(i, t, e), i.self.data("score", t)), l._target.call(i, t, e), i.opt.mouseover && i.opt.mouseover.call(i, t, e)
                })
            },
            _bindOverCancel: function() {
                var n = this;
                n.cancel.on("mouseover.raty", function(e) {
                    var t = n.opt.path + n.opt.starOff,
                        i = n.opt.cancelOn;
                    "img" === n.opt.starType ? n.stars.attr("src", t) : (i = n.opt.cancelClass + " " + i, n.stars.attr("class", t)), l._setIcon.call(n, this, i), l._target.call(n, null, e), n.opt.mouseover && n.opt.mouseover.call(n, null)
                })
            },
            _buildScoreField: function() {
                return a("<input />", {
                    name: this.opt.scoreName,
                    type: "hidden"
                }).appendTo(this)
            },
            _createCancel: function() {
                var e = this.opt.path + this.opt.cancelOff,
                    t = a("<" + this.opt.starType + " />", {
                        title: this.opt.cancelHint,
                        class: this.opt.cancelClass
                    });
                "img" === this.opt.starType ? t.attr({
                    src: e,
                    alt: "x"
                }) : t.attr("data-alt", "x").addClass(e), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(t) : this.self.append("&#160;").append(t), this.cancel = t
            },
            _createScore: function() {
                var e = a(this.opt.targetScore);
                this.score = e.length ? e : l._buildScoreField.call(this)
            },
            _createStars: function() {
                for (var e = 1; e <= this.opt.number; e++) {
                    var t = l._nameForIndex.call(this, e),
                        i = {
                            alt: e,
                            src: this.opt.path + this.opt[t]
                        };
                    "img" !== this.opt.starType && (i = {
                        "data-alt": e,
                        class: i.src
                    }), i.title = l._getHint.call(this, e), a("<" + this.opt.starType + " />", i).appendTo(this), this.opt.space && this.self.append(e < this.opt.number ? "&#160;" : "")
                }
                this.stars = this.self.children(this.opt.starType)
            },
            _error: function(e) {
                a(this).text(e), a.error(e)
            },
            _fill: function(e) {
                for (var t = 0, i = 1; i <= this.stars.length; i++) {
                    var n, o = this.stars[i - 1],
                        s = l._turnOn.call(this, i, e);
                    if (this.opt.iconRange && this.opt.iconRange.length > t) {
                        var r = this.opt.iconRange[t];
                        n = l._getRangeIcon.call(this, r, s), i <= r.range && l._setIcon.call(this, o, n), i === r.range && t++
                    } else n = this.opt[s ? "starOn" : "starOff"], l._setIcon.call(this, o, n)
                }
            },
            _getFirstDecimal: function(e) {
                var t = e.toString().split(".")[1],
                    i = 0;
                return t && (i = parseInt(t.charAt(0), 10), "9999" === t.slice(1, 5) && i++), i
            },
            _getRangeIcon: function(e, t) {
                return t ? e.on || this.opt.starOn : e.off || this.opt.starOff
            },
            _getScoreByPosition: function(e, t) {
                var i = parseInt(t.alt || t.getAttribute("data-alt"), 10);
                if (this.opt.half) {
                    var n = l._getWidth.call(this);
                    i = i - 1 + parseFloat((e.pageX - a(t).offset().left) / n)
                }
                return i
            },
            _getHint: function(e, t) {
                if (0 !== e && !e) return this.opt.noRatedMsg;
                var i = l._getFirstDecimal.call(this, e),
                    n = Math.ceil(e),
                    o = this.opt.hints[(n || 1) - 1],
                    s = o,
                    r = !t || this.move;
                return this.opt.precision ? (r && (i = 0 === i ? 9 : i - 1), s = o[i]) : (this.opt.halfShow || this.opt.half) && (s = o[i = r && 0 === i ? 1 : 5 < i ? 1 : 0]), "" === s ? "" : s || e
            },
            _getWidth: function() {
                var e = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
                return e || l._error.call(this, "Could not get the icon width!"), e
            },
            _lock: function() {
                var e = l._getHint.call(this, this.score.val());
                this.style.cursor = "", this.title = e, this.score.prop("readonly", !0), this.stars.prop("title", e), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
            },
            _nameForIndex: function(e) {
                return this.opt.score && this.opt.score >= e ? "starOn" : "starOff"
            },
            _resetTitle: function(e) {
                for (var t = 0; t < this.opt.number; t++) this.stars[t].title = l._getHint.call(this, t + 1)
            },
            _roundHalfScore: function(e) {
                var t = parseInt(e, 10),
                    i = l._getFirstDecimal.call(this, e);
                return 0 !== i && (i = 5 < i ? 1 : .5), t + i
            },
            _roundStars: function(e, t) {
                var i, n = (e % 1).toFixed(2);
                if (t || this.move ? i = .5 < n ? "starOn" : "starHalf" : n > this.opt.round.down && (i = "starOn", this.opt.halfShow && n < this.opt.round.up ? i = "starHalf" : n < this.opt.round.full && (i = "starOff")), i) {
                    var o = this.opt[i],
                        s = this.stars[Math.ceil(e) - 1];
                    l._setIcon.call(this, s, o)
                }
            },
            _setIcon: function(e, t) {
                e["img" === this.opt.starType ? "src" : "className"] = this.opt.path + t
            },
            _setTarget: function(e, t) {
                t && (t = this.opt.targetFormat.toString().replace("{score}", t)), e.is(":input") ? e.val(t) : e.html(t)
            },
            _setTitle: function(e, t) {
                if (e) {
                    var i = parseInt(Math.ceil(e), 10);
                    this.stars[i - 1].title = l._getHint.call(this, e, t)
                }
            },
            _target: function(e, t) {
                if (this.opt.target) {
                    var i = a(this.opt.target);
                    i.length || l._error.call(this, "Target selector invalid or missing!");
                    var n = t && "mouseover" === t.type;
                    if (void 0 === e) e = this.opt.targetText;
                    else if (null === e) e = n ? this.opt.cancelHint : this.opt.targetText;
                    else {
                        "hint" === this.opt.targetType ? e = l._getHint.call(this, e, t) : this.opt.precision && (e = parseFloat(e).toFixed(1));
                        var o = t && "mousemove" === t.type;
                        n || o || this.opt.targetKeep || (e = this.opt.targetText)
                    }
                    l._setTarget.call(this, i, e)
                }
            },
            _turnOn: function(e, t) {
                return this.opt.single ? e === t : e <= t
            },
            _unlock: function() {
                this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
                for (var e = 0; e < this.opt.number; e++) this.stars[e].title = l._getHint.call(this, e + 1);
                this.cancel && this.cancel.css("display", "")
            },
            cancel: function(t) {
                return this.each(function() {
                    var e = a(this);
                    !0 !== e.data("readonly") && (l[t ? "click" : "score"].call(e, null), this.score.removeAttr("value"))
                })
            },
            click: function(e) {
                return this.each(function() {
                    !0 !== a(this).data("readonly") && (e = l._adjustedScore.call(this, e), l._apply.call(this, e), this.opt.click && this.opt.click.call(this, e, a.Event("click")), l._target.call(this, e))
                })
            },
            destroy: function() {
                return this.each(function() {
                    var e = a(this),
                        t = e.data("raw");
                    t ? e.off(".raty").empty().css({
                        cursor: t.style.cursor
                    }).removeData("readonly") : e.data("raw", e.clone()[0])
                })
            },
            getScore: function() {
                var e, t = [];
                return this.each(function() {
                    e = this.score.val(), t.push(e ? +e : void 0)
                }), 1 < t.length ? t : t[0]
            },
            move: function(r) {
                return this.each(function() {
                    var e = parseInt(r, 10),
                        t = l._getFirstDecimal.call(this, r);
                    e >= this.opt.number && (e = this.opt.number - 1, t = 10);
                    var i = l._getWidth.call(this) / 10,
                        n = a(this.stars[e]),
                        o = n.offset().left + i * t,
                        s = a.Event("mousemove", {
                            pageX: o
                        });
                    this.move = !0, n.trigger(s), this.move = !1
                })
            },
            readOnly: function(t) {
                return this.each(function() {
                    var e = a(this);
                    e.data("readonly") !== t && (t ? (e.off(".raty").children("img").off(".raty"), l._lock.call(this)) : (l._binds.call(this), l._unlock.call(this)), e.data("readonly", t))
                })
            },
            reload: function() {
                return l.set.call(this, {})
            },
            score: function() {
                var e = a(this);
                return arguments.length ? l.setScore.apply(e, arguments) : l.getScore.call(e)
            },
            set: function(e) {
                return this.each(function() {
                    a(this).raty(a.extend({}, this.opt, e))
                })
            },
            setScore: function(e) {
                return this.each(function() {
                    !0 !== a(this).data("readonly") && (e = l._adjustedScore.call(this, e), l._apply.call(this, e), l._target.call(this, e))
                })
            }
        };
        a.fn.raty = function(e) {
            return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void a.error("Method " + e + " does not exist!") : l.init.apply(this, arguments)
        }, a.fn.raty.defaults = {
            cancel: !1,
            cancelClass: "raty-cancel",
            cancelHint: "Cancel this rating!",
            cancelOff: "cancel-off.png",
            cancelOn: "cancel-on.png",
            cancelPlace: "left",
            click: void 0,
            half: !1,
            halfShow: !0,
            hints: ["bad", "poor", "regular", "good", "gorgeous"],
            iconRange: void 0,
            mouseout: void 0,
            mouseover: void 0,
            noRatedMsg: "Not rated yet!",
            number: 5,
            numberMax: 20,
            path: void 0,
            precision: !1,
            readOnly: !1,
            round: {
                down: .25,
                full: .6,
                up: .76
            },
            score: void 0,
            scoreName: "score",
            single: !1,
            space: !0,
            starHalf: "star-half.png",
            starOff: "star-off.png",
            starOn: "star-on.png",
            starType: "img",
            target: void 0,
            targetFormat: "{score}",
            targetKeep: !1,
            targetScore: void 0,
            targetText: "",
            targetType: "hint"
        }
    }(jQuery),
    function(i) {
        "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
            return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), i(t), t
        } : i(jQuery)
    }(function(u) {
        "use strict";
        var t = u(document),
            l = u(window),
            i = ["a", "e", "i", "o", "u", "n", "c", "y"],
            n = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
            o = function(e, t) {
                var i = this;
                i.element = e, i.$element = u(e), i.state = {
                    multiple: !!i.$element.attr("multiple"),
                    enabled: !1,
                    opened: !1,
                    currValue: -1,
                    selectedIdx: -1,
                    highlightedIdx: -1
                }, i.eventTriggers = {
                    open: i.open,
                    close: i.close,
                    destroy: i.destroy,
                    refresh: i.refresh,
                    init: i.init
                }, i.init(t)
            };
        o.prototype = {
            utils: {
                isMobile: function() {
                    return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
                },
                escapeRegExp: function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                },
                replaceDiacritics: function(e) {
                    for (var t = n.length; t--;) e = e.toLowerCase().replace(n[t], i[t]);
                    return e
                },
                format: function(e) {
                    var n = arguments;
                    return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function(e, t, i) {
                        return i && n[1] ? n[1][i] : n[t]
                    })
                },
                nextEnabledItem: function(e, t) {
                    for (; e[t = (t + 1) % e.length].disabled;);
                    return t
                },
                previousEnabledItem: function(e, t) {
                    for (; e[t = (0 < t ? t : e.length) - 1].disabled;);
                    return t
                },
                toDash: function(e) {
                    return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
                },
                triggerCallback: function(e, t) {
                    var i = t.element,
                        n = t.options["on" + e],
                        o = [i].concat([].slice.call(arguments).slice(1));
                    u.isFunction(n) && n.apply(i, o), u(i).trigger("selectric-" + this.toDash(e), o)
                },
                arrayToClassname: function(e) {
                    var t = u.grep(e, function(e) {
                        return !!e
                    });
                    return u.trim(t.join(" "))
                }
            },
            init: function(e) {
                var t = this;
                if (t.options = u.extend(!0, {}, u.fn.selectric.defaults, t.options, e), t.utils.triggerCallback("BeforeInit", t), t.destroy(!0), t.options.disableOnMobile && t.utils.isMobile()) t.disableOnMobile = !0;
                else {
                    t.classes = t.getClassNames();
                    var i = u("<input/>", {
                            class: t.classes.input,
                            readonly: t.utils.isMobile()
                        }),
                        n = u("<div/>", {
                            class: t.classes.items,
                            tabindex: -1
                        }),
                        o = u("<div/>", {
                            class: t.classes.scroll
                        }),
                        s = u("<div/>", {
                            class: t.classes.prefix,
                            html: t.options.arrowButtonMarkup
                        }),
                        r = u("<span/>", {
                            class: "label"
                        }),
                        a = t.$element.wrap("<div/>").parent().append(s.prepend(r), n, i),
                        l = u("<div/>", {
                            class: t.classes.hideselect
                        });
                    t.elements = {
                        input: i,
                        items: n,
                        itemsScroll: o,
                        wrapper: s,
                        label: r,
                        outerWrapper: a
                    }, t.options.nativeOnMobile && t.utils.isMobile() && (t.elements.input = void 0, l.addClass(t.classes.prefix + "-is-native"), t.$element.on("change", function() {
                        t.refresh()
                    })), t.$element.on(t.eventTriggers).wrap(l), t.originalTabindex = t.$element.prop("tabindex"), t.$element.prop("tabindex", -1), t.populate(), t.activate(), t.utils.triggerCallback("Init", t)
                }
            },
            activate: function() {
                var e = this,
                    t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                    i = e.$element.width();
                t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && 0 < i && e.elements.outerWrapper.width(i), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
            },
            getClassNames: function() {
                var n = this,
                    o = n.options.customClass,
                    s = {};
                return u.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), function(e, t) {
                    var i = o.prefix + t;
                    s[t.toLowerCase()] = o.camelCase ? i : n.utils.toDash(i)
                }), s.prefix = o.prefix, s
            },
            setLabel: function() {
                var i = this,
                    t = i.options.labelBuilder;
                if (i.state.multiple) {
                    var e = u.isArray(i.state.currValue) ? i.state.currValue : [i.state.currValue];
                    e = 0 === e.length ? [0] : e;
                    var n = u.map(e, function(t) {
                        return u.grep(i.lookupItems, function(e) {
                            return e.index === t
                        })[0]
                    });
                    n = u.grep(n, function(e) {
                        return 1 < n.length || 0 === n.length ? "" !== u.trim(e.value) : e
                    }), n = u.map(n, function(e) {
                        return u.isFunction(t) ? t(e) : i.utils.format(t, e)
                    }), i.options.multiple.maxLabelEntries && (n.length >= i.options.multiple.maxLabelEntries + 1 ? (n = n.slice(0, i.options.multiple.maxLabelEntries)).push(u.isFunction(t) ? t({
                        text: "..."
                    }) : i.utils.format(t, {
                        text: "..."
                    })) : n.slice(n.length - 1)), i.elements.label.html(n.join(i.options.multiple.separator))
                } else {
                    var o = i.lookupItems[i.state.currValue];
                    i.elements.label.html(u.isFunction(t) ? t(o) : i.utils.format(t, o))
                }
            },
            populate: function() {
                var n = this,
                    e = n.$element.children(),
                    t = n.$element.find("option"),
                    i = t.filter(":selected"),
                    o = t.index(i),
                    s = 0,
                    r = n.state.multiple ? [] : 0;
                1 < i.length && n.state.multiple && (o = [], i.each(function() {
                    o.push(u(this).index())
                })), n.state.currValue = ~o ? o : r, n.state.selectedIdx = n.state.currValue, n.state.highlightedIdx = n.state.currValue, n.items = [], n.lookupItems = [], e.length && (e.each(function(e) {
                    var t = u(this);
                    if (t.is("optgroup")) {
                        var i = {
                            element: t,
                            label: t.prop("label"),
                            groupDisabled: t.prop("disabled"),
                            items: []
                        };
                        t.children().each(function(e) {
                            var t = u(this);
                            i.items[e] = n.getItemData(s, t, i.groupDisabled || t.prop("disabled")), n.lookupItems[s] = i.items[e], s++
                        }), n.items[e] = i
                    } else n.items[e] = n.getItemData(s, t, t.prop("disabled")), n.lookupItems[s] = n.items[e], s++
                }), n.setLabel(), n.elements.items.append(n.elements.itemsScroll.html(n.getItemsMarkup(n.items))))
            },
            getItemData: function(e, t, i) {
                return {
                    index: e,
                    element: t,
                    value: t.val(),
                    className: t.prop("class"),
                    text: t.html(),
                    slug: u.trim(this.utils.replaceDiacritics(t.html())),
                    selected: t.prop("selected"),
                    disabled: i
                }
            },
            getItemsMarkup: function(e) {
                var i = this,
                    n = "<ul>";
                return u.isFunction(i.options.listBuilder) && i.options.listBuilder && (e = i.options.listBuilder(e)), u.each(e, function(e, t) {
                    void 0 !== t.label ? (n += i.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', i.utils.arrayToClassname([i.classes.group, t.groupDisabled ? "disabled" : "", t.element.prop("class")]), i.classes.grouplabel, t.element.prop("label")), u.each(t.items, function(e, t) {
                        n += i.getItemMarkup(t.index, t)
                    }), n += "</ul>") : n += i.getItemMarkup(t.index, t)
                }), n + "</ul>"
            },
            getItemMarkup: function(e, t) {
                var i = this,
                    n = i.options.optionsItemBuilder,
                    o = {
                        value: t.value,
                        text: t.text,
                        slug: t.slug,
                        index: t.index
                    };
                return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', e, i.utils.arrayToClassname([t.className, e === i.items.length - 1 ? "last" : "", t.disabled ? "disabled" : "", t.selected ? "selected" : ""]), u.isFunction(n) ? i.utils.format(n(t, this.$element, e), t) : i.utils.format(n, o))
            },
            unbindEvents: function() {
                this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(".sl")
            },
            bindEvents: function() {
                var n = this;
                n.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function(e) {
                    u(this).toggleClass(n.classes.hover, "mouseenter" === e.type), n.options.openOnHover && (clearTimeout(n.closeTimer), "mouseleave" === e.type ? n.closeTimer = setTimeout(u.proxy(n.close, n), n.options.hoverIntentTimeout) : n.open())
                }), n.elements.wrapper.on("click.sl", function(e) {
                    n.state.opened ? n.close() : n.open(e)
                }), n.options.nativeOnMobile && n.utils.isMobile() || (n.$element.on("focus.sl", function() {
                    n.elements.input.focus()
                }), n.elements.input.prop({
                    tabindex: n.originalTabindex,
                    disabled: !1
                }).on("keydown.sl", u.proxy(n.handleKeys, n)).on("focusin.sl", function(e) {
                    n.elements.outerWrapper.addClass(n.classes.focus), n.elements.input.one("blur", function() {
                        n.elements.input.blur()
                    }), n.options.openOnFocus && !n.state.opened && n.open(e)
                }).on("focusout.sl", function() {
                    n.elements.outerWrapper.removeClass(n.classes.focus)
                }).on("input propertychange", function() {
                    var e = n.elements.input.val(),
                        i = new RegExp("^" + n.utils.escapeRegExp(e), "i");
                    clearTimeout(n.resetStr), n.resetStr = setTimeout(function() {
                        n.elements.input.val("")
                    }, n.options.keySearchTimeout), e.length && u.each(n.items, function(e, t) {
                        (!t.disabled && i.test(t.text) || i.test(t.slug)) && n.highlight(e)
                    })
                })), n.$li.on({
                    mousedown: function(e) {
                        e.preventDefault(), e.stopPropagation()
                    },
                    click: function() {
                        return n.select(u(this).data("index")), !1
                    }
                })
            },
            handleKeys: function(e) {
                var t = this,
                    i = e.which,
                    n = t.options.keys,
                    o = -1 < u.inArray(i, n.previous),
                    s = -1 < u.inArray(i, n.next),
                    r = -1 < u.inArray(i, n.select),
                    a = -1 < u.inArray(i, n.open),
                    l = t.state.highlightedIdx,
                    c = o && 0 === l || s && l + 1 === t.items.length,
                    d = 0;
                if (13 !== i && 32 !== i || e.preventDefault(), o || s) {
                    if (!t.options.allowWrap && c) return;
                    o && (d = t.utils.previousEnabledItem(t.lookupItems, l)), s && (d = t.utils.nextEnabledItem(t.lookupItems, l)), t.highlight(d)
                }
                if (r && t.state.opened) return t.select(l), void(t.state.multiple && t.options.multiple.keepMenuOpen || t.close());
                a && !t.state.opened && t.open()
            },
            refresh: function() {
                this.populate(), this.activate(), this.utils.triggerCallback("Refresh", this)
            },
            setOptionsDimensions: function() {
                var e = this,
                    t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                    i = e.options.maxHeight,
                    n = e.elements.items.outerWidth(),
                    o = e.elements.wrapper.outerWidth() - (n - e.elements.items.width());
                !e.options.expandToItemText || n < o ? e.finalWidth = o : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > i && e.elements.items.height(i), t.removeClass(e.classes.tempshow)
            },
            isInViewport: function() {
                var e = this;
                if (!0 === e.options.forceRenderAbove) e.elements.outerWrapper.addClass(e.classes.above);
                else if (!0 === e.options.forceRenderBelow) e.elements.outerWrapper.addClass(e.classes.below);
                else {
                    var t = l.scrollTop(),
                        i = l.height(),
                        n = e.elements.outerWrapper.offset().top,
                        o = n + e.elements.outerWrapper.outerHeight() + e.itemsHeight <= t + i,
                        s = n - e.itemsHeight > t,
                        r = !o && s,
                        a = !r;
                    e.elements.outerWrapper.toggleClass(e.classes.above, r), e.elements.outerWrapper.toggleClass(e.classes.below, a)
                }
            },
            detectItemVisibility: function(e) {
                var t = this,
                    i = t.$li.filter("[data-index]");
                t.state.multiple && (e = u.isArray(e) && 0 === e.length ? 0 : e, e = u.isArray(e) ? Math.min.apply(Math, e) : e);
                var n = i.eq(e).outerHeight(),
                    o = i[e].offsetTop,
                    s = t.elements.itemsScroll.scrollTop(),
                    r = o + 2 * n;
                t.elements.itemsScroll.scrollTop(r > s + t.itemsHeight ? r - t.itemsHeight : o - n < s ? o - n : s)
            },
            open: function(e) {
                var o = this;
                if (o.options.nativeOnMobile && o.utils.isMobile()) return !1;
                o.utils.triggerCallback("BeforeOpen", o), e && (e.preventDefault(), o.options.stopPropagation && e.stopPropagation()), o.state.enabled && (o.setOptionsDimensions(), u("." + o.classes.hideselect, "." + o.classes.open).children().selectric("close"), o.state.opened = !0, o.itemsHeight = o.elements.items.outerHeight(), o.itemsInnerHeight = o.elements.items.height(), o.elements.outerWrapper.addClass(o.classes.open), o.elements.input.val(""), e && "focusin" !== e.type && o.elements.input.focus(), setTimeout(function() {
                    t.on("click.sl", u.proxy(o.close, o)).on("scroll.sl", u.proxy(o.isInViewport, o))
                }, 1), o.isInViewport(), o.options.preventWindowScroll && t.on("mousewheel.sl DOMMouseScroll.sl", "." + o.classes.scroll, function(e) {
                    var t = e.originalEvent,
                        i = u(this).scrollTop(),
                        n = 0;
                    "detail" in t && (n = -1 * t.detail), "wheelDelta" in t && (n = t.wheelDelta), "wheelDeltaY" in t && (n = t.wheelDeltaY), "deltaY" in t && (n = -1 * t.deltaY), (i === this.scrollHeight - o.itemsInnerHeight && n < 0 || 0 === i && 0 < n) && e.preventDefault()
                }), o.detectItemVisibility(o.state.selectedIdx), o.highlight(o.state.multiple ? -1 : o.state.selectedIdx), o.utils.triggerCallback("Open", o))
            },
            close: function() {
                var e = this;
                e.utils.triggerCallback("BeforeClose", e), t.off(".sl"), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
            },
            change: function() {
                var i = this;
                i.utils.triggerCallback("BeforeChange", i), i.state.multiple ? (u.each(i.lookupItems, function(e) {
                    i.lookupItems[e].selected = !1, i.$element.find("option").prop("selected", !1)
                }), u.each(i.state.selectedIdx, function(e, t) {
                    i.lookupItems[t].selected = !0, i.$element.find("option").eq(t).prop("selected", !0)
                }), i.state.currValue = i.state.selectedIdx, i.setLabel(), i.utils.triggerCallback("Change", i)) : i.state.currValue !== i.state.selectedIdx && (i.$element.prop("selectedIndex", i.state.currValue = i.state.selectedIdx).data("value", i.lookupItems[i.state.selectedIdx].text), i.setLabel(), i.utils.triggerCallback("Change", i))
            },
            highlight: function(e) {
                var t = this,
                    i = t.$li.filter("[data-index]").removeClass("highlighted");
                t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (i.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t))
            },
            select: function(e) {
                var t = this,
                    i = t.$li.filter("[data-index]");
                if (t.utils.triggerCallback("BeforeSelect", t, e), void 0 !== e && -1 !== e && !t.lookupItems[e].disabled) {
                    if (t.state.multiple) {
                        t.state.selectedIdx = u.isArray(t.state.selectedIdx) ? t.state.selectedIdx : [t.state.selectedIdx];
                        var n = u.inArray(e, t.state.selectedIdx); - 1 !== n ? t.state.selectedIdx.splice(n, 1) : t.state.selectedIdx.push(e), i.removeClass("selected").filter(function(e) {
                            return -1 !== u.inArray(e, t.state.selectedIdx)
                        }).addClass("selected")
                    } else i.removeClass("selected").eq(t.state.selectedIdx = e).addClass("selected");
                    t.state.multiple && t.options.multiple.keepMenuOpen || t.close(), t.change(), t.utils.triggerCallback("Select", t, e)
                }
            },
            destroy: function(e) {
                var t = this;
                t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData("selectric").removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(".sl").off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
            }
        }, u.fn.selectric = function(t) {
            return this.each(function() {
                var e = u.data(this, "selectric");
                e && !e.disableOnMobile ? "string" == typeof t && e[t] ? e[t]() : e.init(t) : u.data(this, "selectric", new o(this, t))
            })
        }, u.fn.selectric.defaults = {
            onChange: function(e) {
                u(e).change()
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !1,
            nativeOnMobile: !0,
            openOnFocus: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            forceRenderAbove: !1,
            forceRenderBelow: !1,
            stopPropagation: !0,
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}",
            listBuilder: !1,
            keys: {
                previous: [37, 38],
                next: [39, 40],
                select: [9, 13, 27],
                open: [13, 32, 37, 38, 39, 40],
                close: [9, 27]
            },
            customClass: {
                prefix: "selectric",
                camelCase: !1
            },
            multiple: {
                separator: ", ",
                keepMenuOpen: !0,
                maxLabelEntries: !1
            }
        }
    }), $(".slider-rec").slick({
    infinite: !1,
    arrows: !0,
    prevArrow: '<button type="button" class="slider-rec-arrow-left"><img src="style/img/icon/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slider-rec-arrow-right"><img src="style/img/icon/arrow-right.png"></button>'
}), $(".main-sale__slider").slick({
    infinite: !0,
    arrows: !0,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="main-sale-left"></button>',
    nextArrow: '<button type="button" class="main-sale-right"></button>',
    responsive: [{
        breakpoint: 1600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: !0
        }
    }, {
        breakpoint: 350,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        }
    }]
}), $(".index__slider__main").slick({
    infinite: !1,
    dots: !0,
    cssEase: "linear",
    speed: 1e3,
    fade: !0,
    prevArrow: '<button type="button" class="index-slider-left">PREV</button>',
    nextArrow: '<button type="button" class="index-slider-right">NEXT</button>'
}), $(".slider-rec-close").click(function() {
    $(".header-top-line").hide()
}), func1(), $(document).on("scroll", func1), $(window).width() < 1201 && ($(".foot-cont-2__cap").appendTo(".foot-cont-1"), $(".foot-cont-2__cap-img").appendTo(".foot-cont-1"), $(".header-main__logo a").appendTo(".mob-menu__logo"), $(".search-fix").appendTo(".mob-menu__item"), $(".mob-bas").appendTo(".mob-menu__item"), $(".header-main .header-main__cont--top--profile").appendTo(".prof-mob"), $(".header-main__cont--bottom").appendTo(".prof-mob__item1"), $(".card-item__blog-image").prependTo(".card-item__subheading"), $(".main__aboutus .aqua__heading").addClass("aqua__heading2")), $(".lup-fix img").click(function() {
    $(".search-fix-input").addClass("active")
}), $(".mob-menu__burger").click(function() {
    $(".mob-menu__burger-menu1").addClass("active")
}), $(".mob-menu-exit").click(function(e) {
    e.stopPropagation(), $(".mob-menu__burger-menu1").removeClass("active")
}), $(".top-category__cont--item").hover(function() {
    $(this).children(".top-category__cont--item--cap").toggleClass("active"), $(this).children(".top-category__cont--item--button").toggleClass("active")
}), $(".sale-main-val-heart").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active")
}), $(".raitig_rev").raty({
    number: 5,
    starOff: "img/star.png",
    starOn: "img/full__star.png"
}), $(".estore__sidebar--cat--cap").click(function() {
    $(this).toggleClass("active"), $(this).siblings().toggleClass("active")
}), $(".estore__sidebar--cat--cap a.active").click(function(e) {
    e.preventDefault()
}), $("select").selectric(), $(".card-slider").slick({
    prevArrow: $(".card-slider-pointer.arrow-left"),
    nextArrow: $(".card-slider-pointer.arrow-right")
});