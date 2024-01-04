/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e = {
          630: function (e, t, n) {
              (window.$ = window.jQuery = n(755)),
                  (window.velocity = n(641)),
                  (window._ = n(486)),
                  n(297),
                  (window.loaded = !1),
                  (window.Index = function () {
                      class e {
                          constructor() {
                              var e;
                              (this.updateScroll = this.updateScroll.bind(this)),
                                  (this.updateResize = this.updateResize.bind(this)),
                                  (this.changeViewport = this.changeViewport.bind(this)),
                                  (this.noScroll = this.noScroll.bind(this)),
                                  (this.scroll = this.scroll.bind(this)),
                                  ((e = this).param = {}),
                                  e.updateResize(),
                                  $(window).resize(() => e.updateResize()),
                                  e.updateScroll(),
                                  $(window).scroll(() => e.updateScroll()),
                                  $("a.btn-menu").on("click", function (e) {
                                      return $(this).hasClass("active") ? ($(this).removeClass("active"), $(".menu").removeClass("show")) : ($(this).addClass("active"), $(".menu").addClass("show"));
                                  }),
                                  $(".lang").on("click", function (e) {
                                      return $(this).hasClass("show") ? $(this).removeClass("show") : $(this).addClass("show");
                                  }),
                                  $(".container").on("click", function (e) {
                                      return $("lang").removeClass("show");
                                  }),
                                  $(".menu .main a").on("click", function (e) {
                                      return $("a.btn-menu").removeClass("active"), $(".menu").removeClass("show");
                                  });
                          }
                          updateScroll() {
                              var e;
                              return (
                                  window.innerHeight || document.documentElement.clientHeight,
                                  window.innerWidth || document.documentElement.clientWidth,
                                  (e = $(window).scrollTop()),
                                  $(".container").hasClass("index")
                                      ? e > $(".kv").outerHeight()
                                          ? ($("header").addClass("scroll"), $(".btn-menu").addClass("scroll"), $(".lang").addClass("scroll"))
                                          : ($("header").removeClass("scroll"), $(".btn-menu").removeClass("scroll"), $(".lang").removeClass("scroll"))
                                      : ($("header").addClass("scroll"), $(".btn-menu").addClass("scroll"), $(".lang").addClass("scroll"))
                              );
                          }
                          updateResize() {
                              var e, t;
                              if (
                                  ((t = this.isSp),
                                  (e = !1),
                                  window.innerHeight || document.documentElement.clientHeight,
                                  window.innerWidth || document.documentElement.clientWidth,
                                  (e = !!window.matchMedia && !window.matchMedia("(min-width: 1024px)").matches),
                                  $("body").hasClass("ie") && (e = !1),
                                  null === t || t !== e)
                              )
                                  return (this.isSp = e), this.changeViewport();
                          }
                          changeViewport() {
                              return this;
                          }
                          noScroll() {
                              return (this.currentY = $(window).scrollTop()), $("body").addClass("noscroll"), $("body").css("top", -1 * this.currentY);
                          }
                          scroll() {
                              return $("body").css("top", "auto"), $("body").removeClass("noscroll"), $("html, body").prop({ scrollTop: this.currentY });
                          }
                      }
                      return (e.isSp = null), (e.animationFrame = null), e;
                  }.call(this)),
                  $(function () {
                      return (window.is_loaded = !0), (window.idx = new Index());
                  }),
                  $(window).on("load", function () {
                      return (window.loaded = !0);
                  });
          },
          755: function (e, t) {
              var n;
              !(function (t, n) {
                  "use strict";
                  "object" == typeof e.exports
                      ? (e.exports = t.document
                            ? n(t, !0)
                            : function (e) {
                                  if (!e.document) throw new Error("jQuery requires a window with a document");
                                  return n(e);
                              })
                      : n(t);
              })("undefined" != typeof window ? window : this, function (r, i) {
                  "use strict";
                  var o = [],
                      s = Object.getPrototypeOf,
                      a = o.slice,
                      l = o.flat
                          ? function (e) {
                                return o.flat.call(e);
                            }
                          : function (e) {
                                return o.concat.apply([], e);
                            },
                      u = o.push,
                      c = o.indexOf,
                      f = {},
                      p = f.toString,
                      d = f.hasOwnProperty,
                      h = d.toString,
                      g = h.call(Object),
                      v = {},
                      y = function (e) {
                          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                      },
                      m = function (e) {
                          return null != e && e === e.window;
                      },
                      b = r.document,
                      w = { type: !0, src: !0, nonce: !0, noModule: !0 };
                  function x(e, t, n) {
                      var r,
                          i,
                          o = (n = n || b).createElement("script");
                      if (((o.text = e), t)) for (r in w) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
                      n.head.appendChild(o).parentNode.removeChild(o);
                  }
                  function k(e) {
                      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
                  }
                  var S = "3.7.1",
                      T = /HTML$/i,
                      _ = function (e, t) {
                          return new _.fn.init(e, t);
                      };
                  function C(e) {
                      var t = !!e && "length" in e && e.length,
                          n = k(e);
                      return !y(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                  }
                  function A(e, t) {
                      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                  }
                  (_.fn = _.prototype = {
                      jquery: S,
                      constructor: _,
                      length: 0,
                      toArray: function () {
                          return a.call(this);
                      },
                      get: function (e) {
                          return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
                      },
                      pushStack: function (e) {
                          var t = _.merge(this.constructor(), e);
                          return (t.prevObject = this), t;
                      },
                      each: function (e) {
                          return _.each(this, e);
                      },
                      map: function (e) {
                          return this.pushStack(
                              _.map(this, function (t, n) {
                                  return e.call(t, n, t);
                              })
                          );
                      },
                      slice: function () {
                          return this.pushStack(a.apply(this, arguments));
                      },
                      first: function () {
                          return this.eq(0);
                      },
                      last: function () {
                          return this.eq(-1);
                      },
                      even: function () {
                          return this.pushStack(
                              _.grep(this, function (e, t) {
                                  return (t + 1) % 2;
                              })
                          );
                      },
                      odd: function () {
                          return this.pushStack(
                              _.grep(this, function (e, t) {
                                  return t % 2;
                              })
                          );
                      },
                      eq: function (e) {
                          var t = this.length,
                              n = +e + (e < 0 ? t : 0);
                          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                      },
                      end: function () {
                          return this.prevObject || this.constructor();
                      },
                      push: u,
                      sort: o.sort,
                      splice: o.splice,
                  }),
                      (_.extend = _.fn.extend = function () {
                          var e,
                              t,
                              n,
                              r,
                              i,
                              o,
                              s = arguments[0] || {},
                              a = 1,
                              l = arguments.length,
                              u = !1;
                          for ("boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++), "object" == typeof s || y(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                              if (null != (e = arguments[a]))
                                  for (t in e)
                                      (r = e[t]),
                                          "__proto__" !== t &&
                                              s !== r &&
                                              (u && r && (_.isPlainObject(r) || (i = Array.isArray(r)))
                                                  ? ((n = s[t]), (o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {}), (i = !1), (s[t] = _.extend(u, o, r)))
                                                  : void 0 !== r && (s[t] = r));
                          return s;
                      }),
                      _.extend({
                          expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
                          isReady: !0,
                          error: function (e) {
                              throw new Error(e);
                          },
                          noop: function () {},
                          isPlainObject: function (e) {
                              var t, n;
                              return !(!e || "[object Object]" !== p.call(e) || ((t = s(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== g)));
                          },
                          isEmptyObject: function (e) {
                              var t;
                              for (t in e) return !1;
                              return !0;
                          },
                          globalEval: function (e, t, n) {
                              x(e, { nonce: t && t.nonce }, n);
                          },
                          each: function (e, t) {
                              var n,
                                  r = 0;
                              if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                              return e;
                          },
                          text: function (e) {
                              var t,
                                  n = "",
                                  r = 0,
                                  i = e.nodeType;
                              if (!i) for (; (t = e[r++]); ) n += _.text(t);
                              return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
                          },
                          makeArray: function (e, t) {
                              var n = t || [];
                              return null != e && (C(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
                          },
                          inArray: function (e, t, n) {
                              return null == t ? -1 : c.call(t, e, n);
                          },
                          isXMLDoc: function (e) {
                              var t = e && e.namespaceURI,
                                  n = e && (e.ownerDocument || e).documentElement;
                              return !T.test(t || (n && n.nodeName) || "HTML");
                          },
                          merge: function (e, t) {
                              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                              return (e.length = i), e;
                          },
                          grep: function (e, t, n) {
                              for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                              return r;
                          },
                          map: function (e, t, n) {
                              var r,
                                  i,
                                  o = 0,
                                  s = [];
                              if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                              return l(s);
                          },
                          guid: 1,
                          support: v,
                      }),
                      "function" == typeof Symbol && (_.fn[Symbol.iterator] = o[Symbol.iterator]),
                      _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                          f["[object " + t + "]"] = t.toLowerCase();
                      });
                  var $ = o.pop,
                      E = o.sort,
                      j = o.splice,
                      P = "[\\x20\\t\\r\\n\\f]",
                      O = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g");
                  _.contains = function (e, t) {
                      var n = t && t.parentNode;
                      return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                  };
                  var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                  function H(e, t) {
                      return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                  }
                  _.escapeSelector = function (e) {
                      return (e + "").replace(L, H);
                  };
                  var D = b,
                      N = u;
                  !(function () {
                      var e,
                          t,
                          n,
                          i,
                          s,
                          l,
                          u,
                          f,
                          p,
                          h,
                          g = N,
                          y = _.expando,
                          m = 0,
                          b = 0,
                          w = ee(),
                          x = ee(),
                          k = ee(),
                          S = ee(),
                          T = function (e, t) {
                              return e === t && (s = !0), 0;
                          },
                          C = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                          L = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                          H = "\\[" + P + "*(" + L + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + P + "*\\]",
                          R = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                          q = new RegExp(P + "+", "g"),
                          z = new RegExp("^" + P + "*," + P + "*"),
                          M = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                          I = new RegExp(P + "|>"),
                          F = new RegExp(R),
                          V = new RegExp("^" + L + "$"),
                          W = {
                              ID: new RegExp("^#(" + L + ")"),
                              CLASS: new RegExp("^\\.(" + L + ")"),
                              TAG: new RegExp("^(" + L + "|[*])"),
                              ATTR: new RegExp("^" + H),
                              PSEUDO: new RegExp("^" + R),
                              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                              bool: new RegExp("^(?:" + C + ")$", "i"),
                              needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"),
                          },
                          B = /^(?:input|select|textarea|button)$/i,
                          U = /^h\d$/i,
                          X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                          Y = /[+~]/,
                          G = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                          Q = function (e, t) {
                              var n = "0x" + e.slice(1) - 65536;
                              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                          },
                          Z = function () {
                              le();
                          },
                          J = pe(
                              function (e) {
                                  return !0 === e.disabled && A(e, "fieldset");
                              },
                              { dir: "parentNode", next: "legend" }
                          );
                      try {
                          g.apply((o = a.call(D.childNodes)), D.childNodes), o[D.childNodes.length].nodeType;
                      } catch (e) {
                          g = {
                              apply: function (e, t) {
                                  N.apply(e, a.call(t));
                              },
                              call: function (e) {
                                  N.apply(e, a.call(arguments, 1));
                              },
                          };
                      }
                      function K(e, t, n, r) {
                          var i,
                              o,
                              s,
                              a,
                              u,
                              c,
                              d,
                              h = t && t.ownerDocument,
                              m = t ? t.nodeType : 9;
                          if (((n = n || []), "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))) return n;
                          if (!r && (le(t), (t = t || l), f)) {
                              if (11 !== m && (u = X.exec(e)))
                                  if ((i = u[1])) {
                                      if (9 === m) {
                                          if (!(s = t.getElementById(i))) return n;
                                          if (s.id === i) return g.call(n, s), n;
                                      } else if (h && (s = h.getElementById(i)) && K.contains(t, s) && s.id === i) return g.call(n, s), n;
                                  } else {
                                      if (u[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                                      if ((i = u[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(i)), n;
                                  }
                              if (!(S[e + " "] || (p && p.test(e)))) {
                                  if (((d = e), (h = t), 1 === m && (I.test(e) || M.test(e)))) {
                                      for (((h = (Y.test(e) && ae(t.parentNode)) || t) == t && v.scope) || ((a = t.getAttribute("id")) ? (a = _.escapeSelector(a)) : t.setAttribute("id", (a = y))), o = (c = ce(e)).length; o--; )
                                          c[o] = (a ? "#" + a : ":scope") + " " + fe(c[o]);
                                      d = c.join(",");
                                  }
                                  try {
                                      return g.apply(n, h.querySelectorAll(d)), n;
                                  } catch (t) {
                                      S(e, !0);
                                  } finally {
                                      a === y && t.removeAttribute("id");
                                  }
                              }
                          }
                          return me(e.replace(O, "$1"), t, n, r);
                      }
                      function ee() {
                          var e = [];
                          return function n(r, i) {
                              return e.push(r + " ") > t.cacheLength && delete n[e.shift()], (n[r + " "] = i);
                          };
                      }
                      function te(e) {
                          return (e[y] = !0), e;
                      }
                      function ne(e) {
                          var t = l.createElement("fieldset");
                          try {
                              return !!e(t);
                          } catch (e) {
                              return !1;
                          } finally {
                              t.parentNode && t.parentNode.removeChild(t), (t = null);
                          }
                      }
                      function re(e) {
                          return function (t) {
                              return A(t, "input") && t.type === e;
                          };
                      }
                      function ie(e) {
                          return function (t) {
                              return (A(t, "input") || A(t, "button")) && t.type === e;
                          };
                      }
                      function oe(e) {
                          return function (t) {
                              return "form" in t
                                  ? t.parentNode && !1 === t.disabled
                                      ? "label" in t
                                          ? "label" in t.parentNode
                                              ? t.parentNode.disabled === e
                                              : t.disabled === e
                                          : t.isDisabled === e || (t.isDisabled !== !e && J(t) === e)
                                      : t.disabled === e
                                  : "label" in t && t.disabled === e;
                          };
                      }
                      function se(e) {
                          return te(function (t) {
                              return (
                                  (t = +t),
                                  te(function (n, r) {
                                      for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                                  })
                              );
                          });
                      }
                      function ae(e) {
                          return e && void 0 !== e.getElementsByTagName && e;
                      }
                      function le(e) {
                          var n,
                              r = e ? e.ownerDocument || e : D;
                          return r != l && 9 === r.nodeType && r.documentElement
                              ? ((u = (l = r).documentElement),
                                (f = !_.isXMLDoc(l)),
                                (h = u.matches || u.webkitMatchesSelector || u.msMatchesSelector),
                                u.msMatchesSelector && D != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", Z),
                                (v.getById = ne(function (e) {
                                    return (u.appendChild(e).id = _.expando), !l.getElementsByName || !l.getElementsByName(_.expando).length;
                                })),
                                (v.disconnectedMatch = ne(function (e) {
                                    return h.call(e, "*");
                                })),
                                (v.scope = ne(function () {
                                    return l.querySelectorAll(":scope");
                                })),
                                (v.cssHas = ne(function () {
                                    try {
                                        return l.querySelector(":has(*,:jqfake)"), !1;
                                    } catch (e) {
                                        return !0;
                                    }
                                })),
                                v.getById
                                    ? ((t.filter.ID = function (e) {
                                          var t = e.replace(G, Q);
                                          return function (e) {
                                              return e.getAttribute("id") === t;
                                          };
                                      }),
                                      (t.find.ID = function (e, t) {
                                          if (void 0 !== t.getElementById && f) {
                                              var n = t.getElementById(e);
                                              return n ? [n] : [];
                                          }
                                      }))
                                    : ((t.filter.ID = function (e) {
                                          var t = e.replace(G, Q);
                                          return function (e) {
                                              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                              return n && n.value === t;
                                          };
                                      }),
                                      (t.find.ID = function (e, t) {
                                          if (void 0 !== t.getElementById && f) {
                                              var n,
                                                  r,
                                                  i,
                                                  o = t.getElementById(e);
                                              if (o) {
                                                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                  for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                              }
                                              return [];
                                          }
                                      })),
                                (t.find.TAG = function (e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                                }),
                                (t.find.CLASS = function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e);
                                }),
                                (p = []),
                                ne(function (e) {
                                    var t;
                                    (u.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                                        e.querySelectorAll("[selected]").length || p.push("\\[" + P + "*(?:value|" + C + ")"),
                                        e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="),
                                        e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"),
                                        e.querySelectorAll(":checked").length || p.push(":checked"),
                                        (t = l.createElement("input")).setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        (u.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                                        (t = l.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || p.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")");
                                }),
                                v.cssHas || p.push(":has"),
                                (p = p.length && new RegExp(p.join("|"))),
                                (T = function (e, t) {
                                    if (e === t) return (s = !0), 0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!v.sortDetached && t.compareDocumentPosition(e) === n)
                                            ? e === l || (e.ownerDocument == D && K.contains(D, e))
                                                ? -1
                                                : t === l || (t.ownerDocument == D && K.contains(D, t))
                                                ? 1
                                                : i
                                                ? c.call(i, e) - c.call(i, t)
                                                : 0
                                            : 4 & n
                                            ? -1
                                            : 1)
                                    );
                                }),
                                l)
                              : l;
                      }
                      for (e in ((K.matches = function (e, t) {
                          return K(e, null, null, t);
                      }),
                      (K.matchesSelector = function (e, t) {
                          if ((le(e), f && !S[t + " "] && (!p || !p.test(t))))
                              try {
                                  var n = h.call(e, t);
                                  if (n || v.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                              } catch (e) {
                                  S(t, !0);
                              }
                          return K(t, l, null, [e]).length > 0;
                      }),
                      (K.contains = function (e, t) {
                          return (e.ownerDocument || e) != l && le(e), _.contains(e, t);
                      }),
                      (K.attr = function (e, n) {
                          (e.ownerDocument || e) != l && le(e);
                          var r = t.attrHandle[n.toLowerCase()],
                              i = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                          return void 0 !== i ? i : e.getAttribute(n);
                      }),
                      (K.error = function (e) {
                          throw new Error("Syntax error, unrecognized expression: " + e);
                      }),
                      (_.uniqueSort = function (e) {
                          var t,
                              n = [],
                              r = 0,
                              o = 0;
                          if (((s = !v.sortStable), (i = !v.sortStable && a.call(e, 0)), E.call(e, T), s)) {
                              for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                              for (; r--; ) j.call(e, n[r], 1);
                          }
                          return (i = null), e;
                      }),
                      (_.fn.uniqueSort = function () {
                          return this.pushStack(_.uniqueSort(a.apply(this)));
                      }),
                      (t = _.expr = {
                          cacheLength: 50,
                          createPseudo: te,
                          match: W,
                          attrHandle: {},
                          find: {},
                          relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                          preFilter: {
                              ATTR: function (e) {
                                  return (e[1] = e[1].replace(G, Q)), (e[3] = (e[3] || e[4] || e[5] || "").replace(G, Q)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                              },
                              CHILD: function (e) {
                                  return (
                                      (e[1] = e[1].toLowerCase()),
                                      "nth" === e[1].slice(0, 3)
                                          ? (e[3] || K.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                          : e[3] && K.error(e[0]),
                                      e
                                  );
                              },
                              PSEUDO: function (e) {
                                  var t,
                                      n = !e[6] && e[2];
                                  return W.CHILD.test(e[0])
                                      ? null
                                      : (e[3] ? (e[2] = e[4] || e[5] || "") : n && F.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                              },
                          },
                          filter: {
                              TAG: function (e) {
                                  var t = e.replace(G, Q).toLowerCase();
                                  return "*" === e
                                      ? function () {
                                            return !0;
                                        }
                                      : function (e) {
                                            return A(e, t);
                                        };
                              },
                              CLASS: function (e) {
                                  var t = w[e + " "];
                                  return (
                                      t ||
                                      ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                                          w(e, function (e) {
                                              return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                          }))
                                  );
                              },
                              ATTR: function (e, t, n) {
                                  return function (r) {
                                      var i = K.attr(r, e);
                                      return null == i
                                          ? "!=" === t
                                          : !t ||
                                                ((i += ""),
                                                "=" === t
                                                    ? i === n
                                                    : "!=" === t
                                                    ? i !== n
                                                    : "^=" === t
                                                    ? n && 0 === i.indexOf(n)
                                                    : "*=" === t
                                                    ? n && i.indexOf(n) > -1
                                                    : "$=" === t
                                                    ? n && i.slice(-n.length) === n
                                                    : "~=" === t
                                                    ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1
                                                    : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                                  };
                              },
                              CHILD: function (e, t, n, r, i) {
                                  var o = "nth" !== e.slice(0, 3),
                                      s = "last" !== e.slice(-4),
                                      a = "of-type" === t;
                                  return 1 === r && 0 === i
                                      ? function (e) {
                                            return !!e.parentNode;
                                        }
                                      : function (t, n, l) {
                                            var u,
                                                c,
                                                f,
                                                p,
                                                d,
                                                h = o !== s ? "nextSibling" : "previousSibling",
                                                g = t.parentNode,
                                                v = a && t.nodeName.toLowerCase(),
                                                b = !l && !a,
                                                w = !1;
                                            if (g) {
                                                if (o) {
                                                    for (; h; ) {
                                                        for (f = t; (f = f[h]); ) if (a ? A(f, v) : 1 === f.nodeType) return !1;
                                                        d = h = "only" === e && !d && "nextSibling";
                                                    }
                                                    return !0;
                                                }
                                                if (((d = [s ? g.firstChild : g.lastChild]), s && b)) {
                                                    for (w = (p = (u = (c = g[y] || (g[y] = {}))[e] || [])[0] === m && u[1]) && u[2], f = p && g.childNodes[p]; (f = (++p && f && f[h]) || (w = p = 0) || d.pop()); )
                                                        if (1 === f.nodeType && ++w && f === t) {
                                                            c[e] = [m, p, w];
                                                            break;
                                                        }
                                                } else if ((b && (w = p = (u = (c = t[y] || (t[y] = {}))[e] || [])[0] === m && u[1]), !1 === w))
                                                    for (; (f = (++p && f && f[h]) || (w = p = 0) || d.pop()) && (!(a ? A(f, v) : 1 === f.nodeType) || !++w || (b && ((c = f[y] || (f[y] = {}))[e] = [m, w]), f !== t)); );
                                                return (w -= i) === r || (w % r == 0 && w / r >= 0);
                                            }
                                        };
                              },
                              PSEUDO: function (e, n) {
                                  var r,
                                      i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || K.error("unsupported pseudo: " + e);
                                  return i[y]
                                      ? i(n)
                                      : i.length > 1
                                      ? ((r = [e, e, "", n]),
                                        t.setFilters.hasOwnProperty(e.toLowerCase())
                                            ? te(function (e, t) {
                                                  for (var r, o = i(e, n), s = o.length; s--; ) e[(r = c.call(e, o[s]))] = !(t[r] = o[s]);
                                              })
                                            : function (e) {
                                                  return i(e, 0, r);
                                              })
                                      : i;
                              },
                          },
                          pseudos: {
                              not: te(function (e) {
                                  var t = [],
                                      n = [],
                                      r = ye(e.replace(O, "$1"));
                                  return r[y]
                                      ? te(function (e, t, n, i) {
                                            for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                                        })
                                      : function (e, i, o) {
                                            return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                                        };
                              }),
                              has: te(function (e) {
                                  return function (t) {
                                      return K(e, t).length > 0;
                                  };
                              }),
                              contains: te(function (e) {
                                  return (
                                      (e = e.replace(G, Q)),
                                      function (t) {
                                          return (t.textContent || _.text(t)).indexOf(e) > -1;
                                      }
                                  );
                              }),
                              lang: te(function (e) {
                                  return (
                                      V.test(e || "") || K.error("unsupported lang: " + e),
                                      (e = e.replace(G, Q).toLowerCase()),
                                      function (t) {
                                          var n;
                                          do {
                                              if ((n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                          } while ((t = t.parentNode) && 1 === t.nodeType);
                                          return !1;
                                      }
                                  );
                              }),
                              target: function (e) {
                                  var t = r.location && r.location.hash;
                                  return t && t.slice(1) === e.id;
                              },
                              root: function (e) {
                                  return e === u;
                              },
                              focus: function (e) {
                                  return (
                                      e ===
                                          (function () {
                                              try {
                                                  return l.activeElement;
                                              } catch (e) {}
                                          })() &&
                                      l.hasFocus() &&
                                      !!(e.type || e.href || ~e.tabIndex)
                                  );
                              },
                              enabled: oe(!1),
                              disabled: oe(!0),
                              checked: function (e) {
                                  return (A(e, "input") && !!e.checked) || (A(e, "option") && !!e.selected);
                              },
                              selected: function (e) {
                                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                              },
                              empty: function (e) {
                                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                  return !0;
                              },
                              parent: function (e) {
                                  return !t.pseudos.empty(e);
                              },
                              header: function (e) {
                                  return U.test(e.nodeName);
                              },
                              input: function (e) {
                                  return B.test(e.nodeName);
                              },
                              button: function (e) {
                                  return (A(e, "input") && "button" === e.type) || A(e, "button");
                              },
                              text: function (e) {
                                  var t;
                                  return A(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                              },
                              first: se(function () {
                                  return [0];
                              }),
                              last: se(function (e, t) {
                                  return [t - 1];
                              }),
                              eq: se(function (e, t, n) {
                                  return [n < 0 ? n + t : n];
                              }),
                              even: se(function (e, t) {
                                  for (var n = 0; n < t; n += 2) e.push(n);
                                  return e;
                              }),
                              odd: se(function (e, t) {
                                  for (var n = 1; n < t; n += 2) e.push(n);
                                  return e;
                              }),
                              lt: se(function (e, t, n) {
                                  var r;
                                  for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                  return e;
                              }),
                              gt: se(function (e, t, n) {
                                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                  return e;
                              }),
                          },
                      }),
                      (t.pseudos.nth = t.pseudos.eq),
                      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                          t.pseudos[e] = re(e);
                      for (e in { submit: !0, reset: !0 }) t.pseudos[e] = ie(e);
                      function ue() {}
                      function ce(e, n) {
                          var r,
                              i,
                              o,
                              s,
                              a,
                              l,
                              u,
                              c = x[e + " "];
                          if (c) return n ? 0 : c.slice(0);
                          for (a = e, l = [], u = t.preFilter; a; ) {
                              for (s in ((r && !(i = z.exec(a))) || (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                              (r = !1),
                              (i = M.exec(a)) && ((r = i.shift()), o.push({ value: r, type: i[0].replace(O, " ") }), (a = a.slice(r.length))),
                              t.filter))
                                  !(i = W[s].exec(a)) || (u[s] && !(i = u[s](i))) || ((r = i.shift()), o.push({ value: r, type: s, matches: i }), (a = a.slice(r.length)));
                              if (!r) break;
                          }
                          return n ? a.length : a ? K.error(e) : x(e, l).slice(0);
                      }
                      function fe(e) {
                          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                          return r;
                      }
                      function pe(e, t, n) {
                          var r = t.dir,
                              i = t.next,
                              o = i || r,
                              s = n && "parentNode" === o,
                              a = b++;
                          return t.first
                              ? function (t, n, i) {
                                    for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
                                    return !1;
                                }
                              : function (t, n, l) {
                                    var u,
                                        c,
                                        f = [m, a];
                                    if (l) {
                                        for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                                    } else
                                        for (; (t = t[r]); )
                                            if (1 === t.nodeType || s)
                                                if (((c = t[y] || (t[y] = {})), i && A(t, i))) t = t[r] || t;
                                                else {
                                                    if ((u = c[o]) && u[0] === m && u[1] === a) return (f[2] = u[2]);
                                                    if (((c[o] = f), (f[2] = e(t, n, l)))) return !0;
                                                }
                                    return !1;
                                };
                      }
                      function de(e) {
                          return e.length > 1
                              ? function (t, n, r) {
                                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                    return !0;
                                }
                              : e[0];
                      }
                      function he(e, t, n, r, i) {
                          for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
                          return s;
                      }
                      function ge(e, t, n, r, i, o) {
                          return (
                              r && !r[y] && (r = ge(r)),
                              i && !i[y] && (i = ge(i, o)),
                              te(function (o, s, a, l) {
                                  var u,
                                      f,
                                      p,
                                      d,
                                      h = [],
                                      v = [],
                                      y = s.length,
                                      m =
                                          o ||
                                          (function (e, t, n) {
                                              for (var r = 0, i = t.length; r < i; r++) K(e, t[r], n);
                                              return n;
                                          })(t || "*", a.nodeType ? [a] : a, []),
                                      b = !e || (!o && t) ? m : he(m, h, e, a, l);
                                  if ((n ? n(b, (d = i || (o ? e : y || r) ? [] : s), a, l) : (d = b), r)) for (u = he(d, v), r(u, [], a, l), f = u.length; f--; ) (p = u[f]) && (d[v[f]] = !(b[v[f]] = p));
                                  if (o) {
                                      if (i || e) {
                                          if (i) {
                                              for (u = [], f = d.length; f--; ) (p = d[f]) && u.push((b[f] = p));
                                              i(null, (d = []), u, l);
                                          }
                                          for (f = d.length; f--; ) (p = d[f]) && (u = i ? c.call(o, p) : h[f]) > -1 && (o[u] = !(s[u] = p));
                                      }
                                  } else (d = he(d === s ? d.splice(y, d.length) : d)), i ? i(null, s, d, l) : g.apply(s, d);
                              })
                          );
                      }
                      function ve(e) {
                          for (
                              var r,
                                  i,
                                  o,
                                  s = e.length,
                                  a = t.relative[e[0].type],
                                  l = a || t.relative[" "],
                                  u = a ? 1 : 0,
                                  f = pe(
                                      function (e) {
                                          return e === r;
                                      },
                                      l,
                                      !0
                                  ),
                                  p = pe(
                                      function (e) {
                                          return c.call(r, e) > -1;
                                      },
                                      l,
                                      !0
                                  ),
                                  d = [
                                      function (e, t, i) {
                                          var o = (!a && (i || t != n)) || ((r = t).nodeType ? f(e, t, i) : p(e, t, i));
                                          return (r = null), o;
                                      },
                                  ];
                              u < s;
                              u++
                          )
                              if ((i = t.relative[e[u].type])) d = [pe(de(d), i)];
                              else {
                                  if ((i = t.filter[e[u].type].apply(null, e[u].matches))[y]) {
                                      for (o = ++u; o < s && !t.relative[e[o].type]; o++);
                                      return ge(
                                          u > 1 && de(d),
                                          u > 1 && fe(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(O, "$1"),
                                          i,
                                          u < o && ve(e.slice(u, o)),
                                          o < s && ve((e = e.slice(o))),
                                          o < s && fe(e)
                                      );
                                  }
                                  d.push(i);
                              }
                          return de(d);
                      }
                      function ye(e, r) {
                          var i,
                              o = [],
                              s = [],
                              a = k[e + " "];
                          if (!a) {
                              for (r || (r = ce(e)), i = r.length; i--; ) (a = ve(r[i]))[y] ? o.push(a) : s.push(a);
                              (a = k(
                                  e,
                                  (function (e, r) {
                                      var i = r.length > 0,
                                          o = e.length > 0,
                                          s = function (s, a, u, c, p) {
                                              var d,
                                                  h,
                                                  v,
                                                  y = 0,
                                                  b = "0",
                                                  w = s && [],
                                                  x = [],
                                                  k = n,
                                                  S = s || (o && t.find.TAG("*", p)),
                                                  T = (m += null == k ? 1 : Math.random() || 0.1),
                                                  C = S.length;
                                              for (p && (n = a == l || a || p); b !== C && null != (d = S[b]); b++) {
                                                  if (o && d) {
                                                      for (h = 0, a || d.ownerDocument == l || (le(d), (u = !f)); (v = e[h++]); )
                                                          if (v(d, a || l, u)) {
                                                              g.call(c, d);
                                                              break;
                                                          }
                                                      p && (m = T);
                                                  }
                                                  i && ((d = !v && d) && y--, s && w.push(d));
                                              }
                                              if (((y += b), i && b !== y)) {
                                                  for (h = 0; (v = r[h++]); ) v(w, x, a, u);
                                                  if (s) {
                                                      if (y > 0) for (; b--; ) w[b] || x[b] || (x[b] = $.call(c));
                                                      x = he(x);
                                                  }
                                                  g.apply(c, x), p && !s && x.length > 0 && y + r.length > 1 && _.uniqueSort(c);
                                              }
                                              return p && ((m = T), (n = k)), w;
                                          };
                                      return i ? te(s) : s;
                                  })(s, o)
                              )),
                                  (a.selector = e);
                          }
                          return a;
                      }
                      function me(e, n, r, i) {
                          var o,
                              s,
                              a,
                              l,
                              u,
                              c = "function" == typeof e && e,
                              p = !i && ce((e = c.selector || e));
                          if (((r = r || []), 1 === p.length)) {
                              if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === n.nodeType && f && t.relative[s[1].type]) {
                                  if (!(n = (t.find.ID(a.matches[0].replace(G, Q), n) || [])[0])) return r;
                                  c && (n = n.parentNode), (e = e.slice(s.shift().value.length));
                              }
                              for (o = W.needsContext.test(e) ? 0 : s.length; o-- && ((a = s[o]), !t.relative[(l = a.type)]); )
                                  if ((u = t.find[l]) && (i = u(a.matches[0].replace(G, Q), (Y.test(s[0].type) && ae(n.parentNode)) || n))) {
                                      if ((s.splice(o, 1), !(e = i.length && fe(s)))) return g.apply(r, i), r;
                                      break;
                                  }
                          }
                          return (c || ye(e, p))(i, n, !f, r, !n || (Y.test(e) && ae(n.parentNode)) || n), r;
                      }
                      (ue.prototype = t.filters = t.pseudos),
                          (t.setFilters = new ue()),
                          (v.sortStable = y.split("").sort(T).join("") === y),
                          le(),
                          (v.sortDetached = ne(function (e) {
                              return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
                          })),
                          (_.find = K),
                          (_.expr[":"] = _.expr.pseudos),
                          (_.unique = _.uniqueSort),
                          (K.compile = ye),
                          (K.select = me),
                          (K.setDocument = le),
                          (K.tokenize = ce),
                          (K.escape = _.escapeSelector),
                          (K.getText = _.text),
                          (K.isXML = _.isXMLDoc),
                          (K.selectors = _.expr),
                          (K.support = _.support),
                          (K.uniqueSort = _.uniqueSort);
                  })();
                  var R = function (e, t, n) {
                          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                              if (1 === e.nodeType) {
                                  if (i && _(e).is(n)) break;
                                  r.push(e);
                              }
                          return r;
                      },
                      q = function (e, t) {
                          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                          return n;
                      },
                      z = _.expr.match.needsContext,
                      M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                  function I(e, t, n) {
                      return y(t)
                          ? _.grep(e, function (e, r) {
                                return !!t.call(e, r, e) !== n;
                            })
                          : t.nodeType
                          ? _.grep(e, function (e) {
                                return (e === t) !== n;
                            })
                          : "string" != typeof t
                          ? _.grep(e, function (e) {
                                return c.call(t, e) > -1 !== n;
                            })
                          : _.filter(t, e, n);
                  }
                  (_.filter = function (e, t, n) {
                      var r = t[0];
                      return (
                          n && (e = ":not(" + e + ")"),
                          1 === t.length && 1 === r.nodeType
                              ? _.find.matchesSelector(r, e)
                                  ? [r]
                                  : []
                              : _.find.matches(
                                    e,
                                    _.grep(t, function (e) {
                                        return 1 === e.nodeType;
                                    })
                                )
                      );
                  }),
                      _.fn.extend({
                          find: function (e) {
                              var t,
                                  n,
                                  r = this.length,
                                  i = this;
                              if ("string" != typeof e)
                                  return this.pushStack(
                                      _(e).filter(function () {
                                          for (t = 0; t < r; t++) if (_.contains(i[t], this)) return !0;
                                      })
                                  );
                              for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
                              return r > 1 ? _.uniqueSort(n) : n;
                          },
                          filter: function (e) {
                              return this.pushStack(I(this, e || [], !1));
                          },
                          not: function (e) {
                              return this.pushStack(I(this, e || [], !0));
                          },
                          is: function (e) {
                              return !!I(this, "string" == typeof e && z.test(e) ? _(e) : e || [], !1).length;
                          },
                      });
                  var F,
                      V = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                  ((_.fn.init = function (e, t, n) {
                      var r, i;
                      if (!e) return this;
                      if (((n = n || F), "string" == typeof e)) {
                          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : V.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                          if (r[1]) {
                              if (((t = t instanceof _ ? t[0] : t), _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), M.test(r[1]) && _.isPlainObject(t)))
                                  for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                              return this;
                          }
                          return (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
                      }
                      return e.nodeType ? ((this[0] = e), (this.length = 1), this) : y(e) ? (void 0 !== n.ready ? n.ready(e) : e(_)) : _.makeArray(e, this);
                  }).prototype = _.fn),
                      (F = _(b));
                  var W = /^(?:parents|prev(?:Until|All))/,
                      B = { children: !0, contents: !0, next: !0, prev: !0 };
                  function U(e, t) {
                      for (; (e = e[t]) && 1 !== e.nodeType; );
                      return e;
                  }
                  _.fn.extend({
                      has: function (e) {
                          var t = _(e, this),
                              n = t.length;
                          return this.filter(function () {
                              for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
                          });
                      },
                      closest: function (e, t) {
                          var n,
                              r = 0,
                              i = this.length,
                              o = [],
                              s = "string" != typeof e && _(e);
                          if (!z.test(e))
                              for (; r < i; r++)
                                  for (n = this[r]; n && n !== t; n = n.parentNode)
                                      if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                                          o.push(n);
                                          break;
                                      }
                          return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o);
                      },
                      index: function (e) {
                          return e ? ("string" == typeof e ? c.call(_(e), this[0]) : c.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                      },
                      add: function (e, t) {
                          return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
                      },
                      addBack: function (e) {
                          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                      },
                  }),
                      _.each(
                          {
                              parent: function (e) {
                                  var t = e.parentNode;
                                  return t && 11 !== t.nodeType ? t : null;
                              },
                              parents: function (e) {
                                  return R(e, "parentNode");
                              },
                              parentsUntil: function (e, t, n) {
                                  return R(e, "parentNode", n);
                              },
                              next: function (e) {
                                  return U(e, "nextSibling");
                              },
                              prev: function (e) {
                                  return U(e, "previousSibling");
                              },
                              nextAll: function (e) {
                                  return R(e, "nextSibling");
                              },
                              prevAll: function (e) {
                                  return R(e, "previousSibling");
                              },
                              nextUntil: function (e, t, n) {
                                  return R(e, "nextSibling", n);
                              },
                              prevUntil: function (e, t, n) {
                                  return R(e, "previousSibling", n);
                              },
                              siblings: function (e) {
                                  return q((e.parentNode || {}).firstChild, e);
                              },
                              children: function (e) {
                                  return q(e.firstChild);
                              },
                              contents: function (e) {
                                  return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
                              },
                          },
                          function (e, t) {
                              _.fn[e] = function (n, r) {
                                  var i = _.map(this, t, n);
                                  return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (B[e] || _.uniqueSort(i), W.test(e) && i.reverse()), this.pushStack(i);
                              };
                          }
                      );
                  var X = /[^\x20\t\r\n\f]+/g;
                  function Y(e) {
                      return e;
                  }
                  function G(e) {
                      throw e;
                  }
                  function Q(e, t, n, r) {
                      var i;
                      try {
                          e && y((i = e.promise)) ? i.call(e).done(t).fail(n) : e && y((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                      } catch (e) {
                          n.apply(void 0, [e]);
                      }
                  }
                  (_.Callbacks = function (e) {
                      e =
                          "string" == typeof e
                              ? (function (e) {
                                    var t = {};
                                    return (
                                        _.each(e.match(X) || [], function (e, n) {
                                            t[n] = !0;
                                        }),
                                        t
                                    );
                                })(e)
                              : _.extend({}, e);
                      var t,
                          n,
                          r,
                          i,
                          o = [],
                          s = [],
                          a = -1,
                          l = function () {
                              for (i = i || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
                          },
                          u = {
                              add: function () {
                                  return (
                                      o &&
                                          (n && !t && ((a = o.length - 1), s.push(n)),
                                          (function t(n) {
                                              _.each(n, function (n, r) {
                                                  y(r) ? (e.unique && u.has(r)) || o.push(r) : r && r.length && "string" !== k(r) && t(r);
                                              });
                                          })(arguments),
                                          n && !t && l()),
                                      this
                                  );
                              },
                              remove: function () {
                                  return (
                                      _.each(arguments, function (e, t) {
                                          for (var n; (n = _.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                                      }),
                                      this
                                  );
                              },
                              has: function (e) {
                                  return e ? _.inArray(e, o) > -1 : o.length > 0;
                              },
                              empty: function () {
                                  return o && (o = []), this;
                              },
                              disable: function () {
                                  return (i = s = []), (o = n = ""), this;
                              },
                              disabled: function () {
                                  return !o;
                              },
                              lock: function () {
                                  return (i = s = []), n || t || (o = n = ""), this;
                              },
                              locked: function () {
                                  return !!i;
                              },
                              fireWith: function (e, n) {
                                  return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                              },
                              fire: function () {
                                  return u.fireWith(this, arguments), this;
                              },
                              fired: function () {
                                  return !!r;
                              },
                          };
                      return u;
                  }),
                      _.extend({
                          Deferred: function (e) {
                              var t = [
                                      ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                                      ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                                      ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"],
                                  ],
                                  n = "pending",
                                  i = {
                                      state: function () {
                                          return n;
                                      },
                                      always: function () {
                                          return o.done(arguments).fail(arguments), this;
                                      },
                                      catch: function (e) {
                                          return i.then(null, e);
                                      },
                                      pipe: function () {
                                          var e = arguments;
                                          return _.Deferred(function (n) {
                                              _.each(t, function (t, r) {
                                                  var i = y(e[r[4]]) && e[r[4]];
                                                  o[r[1]](function () {
                                                      var e = i && i.apply(this, arguments);
                                                      e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                                                  });
                                              }),
                                                  (e = null);
                                          }).promise();
                                      },
                                      then: function (e, n, i) {
                                          var o = 0;
                                          function s(e, t, n, i) {
                                              return function () {
                                                  var a = this,
                                                      l = arguments,
                                                      u = function () {
                                                          var r, u;
                                                          if (!(e < o)) {
                                                              if ((r = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                              (u = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                                                  y(u)
                                                                      ? i
                                                                          ? u.call(r, s(o, t, Y, i), s(o, t, G, i))
                                                                          : (o++, u.call(r, s(o, t, Y, i), s(o, t, G, i), s(o, t, Y, t.notifyWith)))
                                                                      : (n !== Y && ((a = void 0), (l = [r])), (i || t.resolveWith)(a, l));
                                                          }
                                                      },
                                                      c = i
                                                          ? u
                                                          : function () {
                                                                try {
                                                                    u();
                                                                } catch (r) {
                                                                    _.Deferred.exceptionHook && _.Deferred.exceptionHook(r, c.error), e + 1 >= o && (n !== G && ((a = void 0), (l = [r])), t.rejectWith(a, l));
                                                                }
                                                            };
                                                  e ? c() : (_.Deferred.getErrorHook ? (c.error = _.Deferred.getErrorHook()) : _.Deferred.getStackHook && (c.error = _.Deferred.getStackHook()), r.setTimeout(c));
                                              };
                                          }
                                          return _.Deferred(function (r) {
                                              t[0][3].add(s(0, r, y(i) ? i : Y, r.notifyWith)), t[1][3].add(s(0, r, y(e) ? e : Y)), t[2][3].add(s(0, r, y(n) ? n : G));
                                          }).promise();
                                      },
                                      promise: function (e) {
                                          return null != e ? _.extend(e, i) : i;
                                      },
                                  },
                                  o = {};
                              return (
                                  _.each(t, function (e, r) {
                                      var s = r[2],
                                          a = r[5];
                                      (i[r[1]] = s.add),
                                          a &&
                                              s.add(
                                                  function () {
                                                      n = a;
                                                  },
                                                  t[3 - e][2].disable,
                                                  t[3 - e][3].disable,
                                                  t[0][2].lock,
                                                  t[0][3].lock
                                              ),
                                          s.add(r[3].fire),
                                          (o[r[0]] = function () {
                                              return o[r[0] + "With"](this === o ? void 0 : this, arguments), this;
                                          }),
                                          (o[r[0] + "With"] = s.fireWith);
                                  }),
                                  i.promise(o),
                                  e && e.call(o, o),
                                  o
                              );
                          },
                          when: function (e) {
                              var t = arguments.length,
                                  n = t,
                                  r = Array(n),
                                  i = a.call(arguments),
                                  o = _.Deferred(),
                                  s = function (e) {
                                      return function (n) {
                                          (r[e] = this), (i[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(r, i);
                                      };
                                  };
                              if (t <= 1 && (Q(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                              for (; n--; ) Q(i[n], s(n), o.reject);
                              return o.promise();
                          },
                      });
                  var Z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                  (_.Deferred.exceptionHook = function (e, t) {
                      r.console && r.console.warn && e && Z.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                  }),
                      (_.readyException = function (e) {
                          r.setTimeout(function () {
                              throw e;
                          });
                      });
                  var J = _.Deferred();
                  function K() {
                      b.removeEventListener("DOMContentLoaded", K), r.removeEventListener("load", K), _.ready();
                  }
                  (_.fn.ready = function (e) {
                      return (
                          J.then(e).catch(function (e) {
                              _.readyException(e);
                          }),
                          this
                      );
                  }),
                      _.extend({
                          isReady: !1,
                          readyWait: 1,
                          ready: function (e) {
                              (!0 === e ? --_.readyWait : _.isReady) || ((_.isReady = !0), (!0 !== e && --_.readyWait > 0) || J.resolveWith(b, [_]));
                          },
                      }),
                      (_.ready.then = J.then),
                      "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? r.setTimeout(_.ready) : (b.addEventListener("DOMContentLoaded", K), r.addEventListener("load", K));
                  var ee = function (e, t, n, r, i, o, s) {
                          var a = 0,
                              l = e.length,
                              u = null == n;
                          if ("object" === k(n)) for (a in ((i = !0), n)) ee(e, t, a, n[a], !0, o, s);
                          else if (
                              void 0 !== r &&
                              ((i = !0),
                              y(r) || (s = !0),
                              u &&
                                  (s
                                      ? (t.call(e, r), (t = null))
                                      : ((u = t),
                                        (t = function (e, t, n) {
                                            return u.call(_(e), n);
                                        }))),
                              t)
                          )
                              for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                          return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
                      },
                      te = /^-ms-/,
                      ne = /-([a-z])/g;
                  function re(e, t) {
                      return t.toUpperCase();
                  }
                  function ie(e) {
                      return e.replace(te, "ms-").replace(ne, re);
                  }
                  var oe = function (e) {
                      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                  };
                  function se() {
                      this.expando = _.expando + se.uid++;
                  }
                  (se.uid = 1),
                      (se.prototype = {
                          cache: function (e) {
                              var t = e[this.expando];
                              return t || ((t = {}), oe(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                          },
                          set: function (e, t, n) {
                              var r,
                                  i = this.cache(e);
                              if ("string" == typeof t) i[ie(t)] = n;
                              else for (r in t) i[ie(r)] = t[r];
                              return i;
                          },
                          get: function (e, t) {
                              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ie(t)];
                          },
                          access: function (e, t, n) {
                              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                          },
                          remove: function (e, t) {
                              var n,
                                  r = e[this.expando];
                              if (void 0 !== r) {
                                  if (void 0 !== t) {
                                      n = (t = Array.isArray(t) ? t.map(ie) : (t = ie(t)) in r ? [t] : t.match(X) || []).length;
                                      for (; n--; ) delete r[t[n]];
                                  }
                                  (void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                              }
                          },
                          hasData: function (e) {
                              var t = e[this.expando];
                              return void 0 !== t && !_.isEmptyObject(t);
                          },
                      });
                  var ae = new se(),
                      le = new se(),
                      ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                      ce = /[A-Z]/g;
                  function fe(e, t, n) {
                      var r;
                      if (void 0 === n && 1 === e.nodeType)
                          if (((r = "data-" + t.replace(ce, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                              try {
                                  n = (function (e) {
                                      return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ue.test(e) ? JSON.parse(e) : e));
                                  })(n);
                              } catch (e) {}
                              le.set(e, t, n);
                          } else n = void 0;
                      return n;
                  }
                  _.extend({
                      hasData: function (e) {
                          return le.hasData(e) || ae.hasData(e);
                      },
                      data: function (e, t, n) {
                          return le.access(e, t, n);
                      },
                      removeData: function (e, t) {
                          le.remove(e, t);
                      },
                      _data: function (e, t, n) {
                          return ae.access(e, t, n);
                      },
                      _removeData: function (e, t) {
                          ae.remove(e, t);
                      },
                  }),
                      _.fn.extend({
                          data: function (e, t) {
                              var n,
                                  r,
                                  i,
                                  o = this[0],
                                  s = o && o.attributes;
                              if (void 0 === e) {
                                  if (this.length && ((i = le.get(o)), 1 === o.nodeType && !ae.get(o, "hasDataAttrs"))) {
                                      for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && ((r = ie(r.slice(5))), fe(o, r, i[r]));
                                      ae.set(o, "hasDataAttrs", !0);
                                  }
                                  return i;
                              }
                              return "object" == typeof e
                                  ? this.each(function () {
                                        le.set(this, e);
                                    })
                                  : ee(
                                        this,
                                        function (t) {
                                            var n;
                                            if (o && void 0 === t) return void 0 !== (n = le.get(o, e)) || void 0 !== (n = fe(o, e)) ? n : void 0;
                                            this.each(function () {
                                                le.set(this, e, t);
                                            });
                                        },
                                        null,
                                        t,
                                        arguments.length > 1,
                                        null,
                                        !0
                                    );
                          },
                          removeData: function (e) {
                              return this.each(function () {
                                  le.remove(this, e);
                              });
                          },
                      }),
                      _.extend({
                          queue: function (e, t, n) {
                              var r;
                              if (e) return (t = (t || "fx") + "queue"), (r = ae.get(e, t)), n && (!r || Array.isArray(n) ? (r = ae.access(e, t, _.makeArray(n))) : r.push(n)), r || [];
                          },
                          dequeue: function (e, t) {
                              t = t || "fx";
                              var n = _.queue(e, t),
                                  r = n.length,
                                  i = n.shift(),
                                  o = _._queueHooks(e, t);
                              "inprogress" === i && ((i = n.shift()), r--),
                                  i &&
                                      ("fx" === t && n.unshift("inprogress"),
                                      delete o.stop,
                                      i.call(
                                          e,
                                          function () {
                                              _.dequeue(e, t);
                                          },
                                          o
                                      )),
                                  !r && o && o.empty.fire();
                          },
                          _queueHooks: function (e, t) {
                              var n = t + "queueHooks";
                              return (
                                  ae.get(e, n) ||
                                  ae.access(e, n, {
                                      empty: _.Callbacks("once memory").add(function () {
                                          ae.remove(e, [t + "queue", n]);
                                      }),
                                  })
                              );
                          },
                      }),
                      _.fn.extend({
                          queue: function (e, t) {
                              var n = 2;
                              return (
                                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                                  arguments.length < n
                                      ? _.queue(this[0], e)
                                      : void 0 === t
                                      ? this
                                      : this.each(function () {
                                            var n = _.queue(this, e, t);
                                            _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
                                        })
                              );
                          },
                          dequeue: function (e) {
                              return this.each(function () {
                                  _.dequeue(this, e);
                              });
                          },
                          clearQueue: function (e) {
                              return this.queue(e || "fx", []);
                          },
                          promise: function (e, t) {
                              var n,
                                  r = 1,
                                  i = _.Deferred(),
                                  o = this,
                                  s = this.length,
                                  a = function () {
                                      --r || i.resolveWith(o, [o]);
                                  };
                              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = ae.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                              return a(), i.promise(t);
                          },
                      });
                  var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                      de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
                      he = ["Top", "Right", "Bottom", "Left"],
                      ge = b.documentElement,
                      ve = function (e) {
                          return _.contains(e.ownerDocument, e);
                      },
                      ye = { composed: !0 };
                  ge.getRootNode &&
                      (ve = function (e) {
                          return _.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
                      });
                  var me = function (e, t) {
                      return "none" === (e = t || e).style.display || ("" === e.style.display && ve(e) && "none" === _.css(e, "display"));
                  };
                  function be(e, t, n, r) {
                      var i,
                          o,
                          s = 20,
                          a = r
                              ? function () {
                                    return r.cur();
                                }
                              : function () {
                                    return _.css(e, t, "");
                                },
                          l = a(),
                          u = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
                          c = e.nodeType && (_.cssNumber[t] || ("px" !== u && +l)) && de.exec(_.css(e, t));
                      if (c && c[3] !== u) {
                          for (l /= 2, u = u || c[3], c = +l || 1; s--; ) _.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
                          (c *= 2), _.style(e, t, c + u), (n = n || []);
                      }
                      return n && ((c = +c || +l || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = u), (r.start = c), (r.end = i))), i;
                  }
                  var we = {};
                  function xe(e) {
                      var t,
                          n = e.ownerDocument,
                          r = e.nodeName,
                          i = we[r];
                      return i || ((t = n.body.appendChild(n.createElement(r))), (i = _.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (we[r] = i), i);
                  }
                  function ke(e, t) {
                      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
                          (r = e[o]).style &&
                              ((n = r.style.display),
                              t ? ("none" === n && ((i[o] = ae.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && me(r) && (i[o] = xe(r))) : "none" !== n && ((i[o] = "none"), ae.set(r, "display", n)));
                      for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
                      return e;
                  }
                  _.fn.extend({
                      show: function () {
                          return ke(this, !0);
                      },
                      hide: function () {
                          return ke(this);
                      },
                      toggle: function (e) {
                          return "boolean" == typeof e
                              ? e
                                  ? this.show()
                                  : this.hide()
                              : this.each(function () {
                                    me(this) ? _(this).show() : _(this).hide();
                                });
                      },
                  });
                  var Se,
                      Te,
                      _e = /^(?:checkbox|radio)$/i,
                      Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                      Ae = /^$|^module$|\/(?:java|ecma)script/i;
                  (Se = b.createDocumentFragment().appendChild(b.createElement("div"))),
                      (Te = b.createElement("input")).setAttribute("type", "radio"),
                      Te.setAttribute("checked", "checked"),
                      Te.setAttribute("name", "t"),
                      Se.appendChild(Te),
                      (v.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked),
                      (Se.innerHTML = "<textarea>x</textarea>"),
                      (v.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue),
                      (Se.innerHTML = "<option></option>"),
                      (v.option = !!Se.lastChild);
                  var $e = {
                      thead: [1, "<table>", "</table>"],
                      col: [2, "<table><colgroup>", "</colgroup></table>"],
                      tr: [2, "<table><tbody>", "</tbody></table>"],
                      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                      _default: [0, "", ""],
                  };
                  function Ee(e, t) {
                      var n;
                      return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? _.merge([e], n) : n;
                  }
                  function je(e, t) {
                      for (var n = 0, r = e.length; n < r; n++) ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"));
                  }
                  ($e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead), ($e.th = $e.td), v.option || ($e.optgroup = $e.option = [1, "<select multiple='multiple'>", "</select>"]);
                  var Pe = /<|&#?\w+;/;
                  function Oe(e, t, n, r, i) {
                      for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                          if ((o = e[d]) || 0 === o)
                              if ("object" === k(o)) _.merge(p, o.nodeType ? [o] : o);
                              else if (Pe.test(o)) {
                                  for (s = s || f.appendChild(t.createElement("div")), a = (Ce.exec(o) || ["", ""])[1].toLowerCase(), l = $e[a] || $e._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], c = l[0]; c--; )
                                      s = s.lastChild;
                                  _.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
                              } else p.push(t.createTextNode(o));
                      for (f.textContent = "", d = 0; (o = p[d++]); )
                          if (r && _.inArray(o, r) > -1) i && i.push(o);
                          else if (((u = ve(o)), (s = Ee(f.appendChild(o), "script")), u && je(s), n)) for (c = 0; (o = s[c++]); ) Ae.test(o.type || "") && n.push(o);
                      return f;
                  }
                  var Le = /^([^.]*)(?:\.(.+)|)/;
                  function He() {
                      return !0;
                  }
                  function De() {
                      return !1;
                  }
                  function Ne(e, t, n, r, i, o) {
                      var s, a;
                      if ("object" == typeof t) {
                          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Ne(e, a, n, r, t[a], o);
                          return e;
                      }
                      if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = De;
                      else if (!i) return e;
                      return (
                          1 === o &&
                              ((s = i),
                              (i = function (e) {
                                  return _().off(e), s.apply(this, arguments);
                              }),
                              (i.guid = s.guid || (s.guid = _.guid++))),
                          e.each(function () {
                              _.event.add(this, t, i, r, n);
                          })
                      );
                  }
                  function Re(e, t, n) {
                      n
                          ? (ae.set(e, t, !1),
                            _.event.add(e, t, {
                                namespace: !1,
                                handler: function (e) {
                                    var n,
                                        r = ae.get(this, t);
                                    if (1 & e.isTrigger && this[t]) {
                                        if (r) (_.event.special[t] || {}).delegateType && e.stopPropagation();
                                        else if (((r = a.call(arguments)), ae.set(this, t, r), this[t](), (n = ae.get(this, t)), ae.set(this, t, !1), r !== n)) return e.stopImmediatePropagation(), e.preventDefault(), n;
                                    } else r && (ae.set(this, t, _.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), (e.isImmediatePropagationStopped = He));
                                },
                            }))
                          : void 0 === ae.get(e, t) && _.event.add(e, t, He);
                  }
                  (_.event = {
                      global: {},
                      add: function (e, t, n, r, i) {
                          var o,
                              s,
                              a,
                              l,
                              u,
                              c,
                              f,
                              p,
                              d,
                              h,
                              g,
                              v = ae.get(e);
                          if (oe(e))
                              for (
                                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                                      i && _.find.matchesSelector(ge, i),
                                      n.guid || (n.guid = _.guid++),
                                      (l = v.events) || (l = v.events = Object.create(null)),
                                      (s = v.handle) ||
                                          (s = v.handle = function (t) {
                                              return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
                                          }),
                                      u = (t = (t || "").match(X) || [""]).length;
                                  u--;

                              )
                                  (d = g = (a = Le.exec(t[u]) || [])[1]),
                                      (h = (a[2] || "").split(".").sort()),
                                      d &&
                                          ((f = _.event.special[d] || {}),
                                          (d = (i ? f.delegateType : f.bindType) || d),
                                          (f = _.event.special[d] || {}),
                                          (c = _.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && _.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                                          (p = l[d]) || (((p = l[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, s)) || (e.addEventListener && e.addEventListener(d, s))),
                                          f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                          i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                          (_.event.global[d] = !0));
                      },
                      remove: function (e, t, n, r, i) {
                          var o,
                              s,
                              a,
                              l,
                              u,
                              c,
                              f,
                              p,
                              d,
                              h,
                              g,
                              v = ae.hasData(e) && ae.get(e);
                          if (v && (l = v.events)) {
                              for (u = (t = (t || "").match(X) || [""]).length; u--; )
                                  if (((d = g = (a = Le.exec(t[u]) || [])[1]), (h = (a[2] || "").split(".").sort()), d)) {
                                      for (f = _.event.special[d] || {}, p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
                                          (c = p[o]),
                                              (!i && g !== c.origType) ||
                                                  (n && n.guid !== c.guid) ||
                                                  (a && !a.test(c.namespace)) ||
                                                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                      s && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || _.removeEvent(e, d, v.handle), delete l[d]);
                                  } else for (d in l) _.event.remove(e, d + t[u], n, r, !0);
                              _.isEmptyObject(l) && ae.remove(e, "handle events");
                          }
                      },
                      dispatch: function (e) {
                          var t,
                              n,
                              r,
                              i,
                              o,
                              s,
                              a = new Array(arguments.length),
                              l = _.event.fix(e),
                              u = (ae.get(this, "events") || Object.create(null))[l.type] || [],
                              c = _.event.special[l.type] || {};
                          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                          if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                              for (s = _.event.handlers.call(this, l, u), t = 0; (i = s[t++]) && !l.isPropagationStopped(); )
                                  for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                      (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                          ((l.handleObj = o),
                                          (l.data = o.data),
                                          void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                              return c.postDispatch && c.postDispatch.call(this, l), l.result;
                          }
                      },
                      handlers: function (e, t) {
                          var n,
                              r,
                              i,
                              o,
                              s,
                              a = [],
                              l = t.delegateCount,
                              u = e.target;
                          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                              for (; u !== this; u = u.parentNode || this)
                                  if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                      for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(i = (r = t[n]).selector + " ")] && (s[i] = r.needsContext ? _(i, this).index(u) > -1 : _.find(i, this, null, [u]).length), s[i] && o.push(r);
                                      o.length && a.push({ elem: u, handlers: o });
                                  }
                          return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
                      },
                      addProp: function (e, t) {
                          Object.defineProperty(_.Event.prototype, e, {
                              enumerable: !0,
                              configurable: !0,
                              get: y(t)
                                  ? function () {
                                        if (this.originalEvent) return t(this.originalEvent);
                                    }
                                  : function () {
                                        if (this.originalEvent) return this.originalEvent[e];
                                    },
                              set: function (t) {
                                  Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                              },
                          });
                      },
                      fix: function (e) {
                          return e[_.expando] ? e : new _.Event(e);
                      },
                      special: {
                          load: { noBubble: !0 },
                          click: {
                              setup: function (e) {
                                  var t = this || e;
                                  return _e.test(t.type) && t.click && A(t, "input") && Re(t, "click", !0), !1;
                              },
                              trigger: function (e) {
                                  var t = this || e;
                                  return _e.test(t.type) && t.click && A(t, "input") && Re(t, "click"), !0;
                              },
                              _default: function (e) {
                                  var t = e.target;
                                  return (_e.test(t.type) && t.click && A(t, "input") && ae.get(t, "click")) || A(t, "a");
                              },
                          },
                          beforeunload: {
                              postDispatch: function (e) {
                                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                              },
                          },
                      },
                  }),
                      (_.removeEvent = function (e, t, n) {
                          e.removeEventListener && e.removeEventListener(t, n);
                      }),
                      (_.Event = function (e, t) {
                          if (!(this instanceof _.Event)) return new _.Event(e, t);
                          e && e.type
                              ? ((this.originalEvent = e),
                                (this.type = e.type),
                                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? He : De),
                                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                (this.currentTarget = e.currentTarget),
                                (this.relatedTarget = e.relatedTarget))
                              : (this.type = e),
                              t && _.extend(this, t),
                              (this.timeStamp = (e && e.timeStamp) || Date.now()),
                              (this[_.expando] = !0);
                      }),
                      (_.Event.prototype = {
                          constructor: _.Event,
                          isDefaultPrevented: De,
                          isPropagationStopped: De,
                          isImmediatePropagationStopped: De,
                          isSimulated: !1,
                          preventDefault: function () {
                              var e = this.originalEvent;
                              (this.isDefaultPrevented = He), e && !this.isSimulated && e.preventDefault();
                          },
                          stopPropagation: function () {
                              var e = this.originalEvent;
                              (this.isPropagationStopped = He), e && !this.isSimulated && e.stopPropagation();
                          },
                          stopImmediatePropagation: function () {
                              var e = this.originalEvent;
                              (this.isImmediatePropagationStopped = He), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                          },
                      }),
                      _.each(
                          {
                              altKey: !0,
                              bubbles: !0,
                              cancelable: !0,
                              changedTouches: !0,
                              ctrlKey: !0,
                              detail: !0,
                              eventPhase: !0,
                              metaKey: !0,
                              pageX: !0,
                              pageY: !0,
                              shiftKey: !0,
                              view: !0,
                              char: !0,
                              code: !0,
                              charCode: !0,
                              key: !0,
                              keyCode: !0,
                              button: !0,
                              buttons: !0,
                              clientX: !0,
                              clientY: !0,
                              offsetX: !0,
                              offsetY: !0,
                              pointerId: !0,
                              pointerType: !0,
                              screenX: !0,
                              screenY: !0,
                              targetTouches: !0,
                              toElement: !0,
                              touches: !0,
                              which: !0,
                          },
                          _.event.addProp
                      ),
                      _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                          function n(e) {
                              if (b.documentMode) {
                                  var n = ae.get(this, "handle"),
                                      r = _.event.fix(e);
                                  (r.type = "focusin" === e.type ? "focus" : "blur"), (r.isSimulated = !0), n(e), r.target === r.currentTarget && n(r);
                              } else _.event.simulate(t, e.target, _.event.fix(e));
                          }
                          (_.event.special[e] = {
                              setup: function () {
                                  var r;
                                  if ((Re(this, e, !0), !b.documentMode)) return !1;
                                  (r = ae.get(this, t)) || this.addEventListener(t, n), ae.set(this, t, (r || 0) + 1);
                              },
                              trigger: function () {
                                  return Re(this, e), !0;
                              },
                              teardown: function () {
                                  var e;
                                  if (!b.documentMode) return !1;
                                  (e = ae.get(this, t) - 1) ? ae.set(this, t, e) : (this.removeEventListener(t, n), ae.remove(this, t));
                              },
                              _default: function (t) {
                                  return ae.get(t.target, e);
                              },
                              delegateType: t,
                          }),
                              (_.event.special[t] = {
                                  setup: function () {
                                      var r = this.ownerDocument || this.document || this,
                                          i = b.documentMode ? this : r,
                                          o = ae.get(i, t);
                                      o || (b.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), ae.set(i, t, (o || 0) + 1);
                                  },
                                  teardown: function () {
                                      var r = this.ownerDocument || this.document || this,
                                          i = b.documentMode ? this : r,
                                          o = ae.get(i, t) - 1;
                                      o ? ae.set(i, t, o) : (b.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), ae.remove(i, t));
                                  },
                              });
                      }),
                      _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                          _.event.special[e] = {
                              delegateType: t,
                              bindType: t,
                              handle: function (e) {
                                  var n,
                                      r = e.relatedTarget,
                                      i = e.handleObj;
                                  return (r && (r === this || _.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                              },
                          };
                      }),
                      _.fn.extend({
                          on: function (e, t, n, r) {
                              return Ne(this, e, t, n, r);
                          },
                          one: function (e, t, n, r) {
                              return Ne(this, e, t, n, r, 1);
                          },
                          off: function (e, t, n) {
                              var r, i;
                              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                              if ("object" == typeof e) {
                                  for (i in e) this.off(i, t, e[i]);
                                  return this;
                              }
                              return (
                                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                  !1 === n && (n = De),
                                  this.each(function () {
                                      _.event.remove(this, e, n, t);
                                  })
                              );
                          },
                      });
                  var qe = /<script|<style|<link/i,
                      ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
                      Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                  function Ie(e, t) {
                      return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0]) || e;
                  }
                  function Fe(e) {
                      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                  }
                  function Ve(e) {
                      return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                  }
                  function We(e, t) {
                      var n, r, i, o, s, a;
                      if (1 === t.nodeType) {
                          if (ae.hasData(e) && (a = ae.get(e).events)) for (i in (ae.remove(t, "handle events"), a)) for (n = 0, r = a[i].length; n < r; n++) _.event.add(t, i, a[i][n]);
                          le.hasData(e) && ((o = le.access(e)), (s = _.extend({}, o)), le.set(t, s));
                      }
                  }
                  function Be(e, t) {
                      var n = t.nodeName.toLowerCase();
                      "input" === n && _e.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                  }
                  function Ue(e, t, n, r) {
                      t = l(t);
                      var i,
                          o,
                          s,
                          a,
                          u,
                          c,
                          f = 0,
                          p = e.length,
                          d = p - 1,
                          h = t[0],
                          g = y(h);
                      if (g || (p > 1 && "string" == typeof h && !v.checkClone && ze.test(h)))
                          return e.each(function (i) {
                              var o = e.eq(i);
                              g && (t[0] = h.call(this, i, o.html())), Ue(o, t, n, r);
                          });
                      if (p && ((o = (i = Oe(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                          for (a = (s = _.map(Ee(i, "script"), Fe)).length; f < p; f++) (u = i), f !== d && ((u = _.clone(u, !0, !0)), a && _.merge(s, Ee(u, "script"))), n.call(e[f], u, f);
                          if (a)
                              for (c = s[s.length - 1].ownerDocument, _.map(s, Ve), f = 0; f < a; f++)
                                  (u = s[f]),
                                      Ae.test(u.type || "") &&
                                          !ae.access(u, "globalEval") &&
                                          _.contains(c, u) &&
                                          (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : x(u.textContent.replace(Me, ""), u, c));
                      }
                      return e;
                  }
                  function Xe(e, t, n) {
                      for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(Ee(r)), r.parentNode && (n && ve(r) && je(Ee(r, "script")), r.parentNode.removeChild(r));
                      return e;
                  }
                  _.extend({
                      htmlPrefilter: function (e) {
                          return e;
                      },
                      clone: function (e, t, n) {
                          var r,
                              i,
                              o,
                              s,
                              a = e.cloneNode(!0),
                              l = ve(e);
                          if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || _.isXMLDoc(e))) for (s = Ee(a), r = 0, i = (o = Ee(e)).length; r < i; r++) Be(o[r], s[r]);
                          if (t)
                              if (n) for (o = o || Ee(e), s = s || Ee(a), r = 0, i = o.length; r < i; r++) We(o[r], s[r]);
                              else We(e, a);
                          return (s = Ee(a, "script")).length > 0 && je(s, !l && Ee(e, "script")), a;
                      },
                      cleanData: function (e) {
                          for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                              if (oe(n)) {
                                  if ((t = n[ae.expando])) {
                                      if (t.events) for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                                      n[ae.expando] = void 0;
                                  }
                                  n[le.expando] && (n[le.expando] = void 0);
                              }
                      },
                  }),
                      _.fn.extend({
                          detach: function (e) {
                              return Xe(this, e, !0);
                          },
                          remove: function (e) {
                              return Xe(this, e);
                          },
                          text: function (e) {
                              return ee(
                                  this,
                                  function (e) {
                                      return void 0 === e
                                          ? _.text(this)
                                          : this.empty().each(function () {
                                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                            });
                                  },
                                  null,
                                  e,
                                  arguments.length
                              );
                          },
                          append: function () {
                              return Ue(this, arguments, function (e) {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ie(this, e).appendChild(e);
                              });
                          },
                          prepend: function () {
                              return Ue(this, arguments, function (e) {
                                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                      var t = Ie(this, e);
                                      t.insertBefore(e, t.firstChild);
                                  }
                              });
                          },
                          before: function () {
                              return Ue(this, arguments, function (e) {
                                  this.parentNode && this.parentNode.insertBefore(e, this);
                              });
                          },
                          after: function () {
                              return Ue(this, arguments, function (e) {
                                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                              });
                          },
                          empty: function () {
                              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(Ee(e, !1)), (e.textContent = ""));
                              return this;
                          },
                          clone: function (e, t) {
                              return (
                                  (e = null != e && e),
                                  (t = null == t ? e : t),
                                  this.map(function () {
                                      return _.clone(this, e, t);
                                  })
                              );
                          },
                          html: function (e) {
                              return ee(
                                  this,
                                  function (e) {
                                      var t = this[0] || {},
                                          n = 0,
                                          r = this.length;
                                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                      if ("string" == typeof e && !qe.test(e) && !$e[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                                          e = _.htmlPrefilter(e);
                                          try {
                                              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(Ee(t, !1)), (t.innerHTML = e));
                                              t = 0;
                                          } catch (e) {}
                                      }
                                      t && this.empty().append(e);
                                  },
                                  null,
                                  e,
                                  arguments.length
                              );
                          },
                          replaceWith: function () {
                              var e = [];
                              return Ue(
                                  this,
                                  arguments,
                                  function (t) {
                                      var n = this.parentNode;
                                      _.inArray(this, e) < 0 && (_.cleanData(Ee(this)), n && n.replaceChild(t, this));
                                  },
                                  e
                              );
                          },
                      }),
                      _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                          _.fn[e] = function (e) {
                              for (var n, r = [], i = _(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), _(i[s])[t](n), u.apply(r, n.get());
                              return this.pushStack(r);
                          };
                      });
                  var Ye = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
                      Ge = /^--/,
                      Qe = function (e) {
                          var t = e.ownerDocument.defaultView;
                          return (t && t.opener) || (t = r), t.getComputedStyle(e);
                      },
                      Ze = function (e, t, n) {
                          var r,
                              i,
                              o = {};
                          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                          return r;
                      },
                      Je = new RegExp(he.join("|"), "i");
                  function Ke(e, t, n) {
                      var r,
                          i,
                          o,
                          s,
                          a = Ge.test(t),
                          l = e.style;
                      return (
                          (n = n || Qe(e)) &&
                              ((s = n.getPropertyValue(t) || n[t]),
                              a && s && (s = s.replace(O, "$1") || void 0),
                              "" !== s || ve(e) || (s = _.style(e, t)),
                              !v.pixelBoxStyles() &&
                                  Ye.test(s) &&
                                  Je.test(t) &&
                                  ((r = l.width), (i = l.minWidth), (o = l.maxWidth), (l.minWidth = l.maxWidth = l.width = s), (s = n.width), (l.width = r), (l.minWidth = i), (l.maxWidth = o))),
                          void 0 !== s ? s + "" : s
                      );
                  }
                  function et(e, t) {
                      return {
                          get: function () {
                              if (!e()) return (this.get = t).apply(this, arguments);
                              delete this.get;
                          },
                      };
                  }
                  !(function () {
                      function e() {
                          if (c) {
                              (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                  (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                  ge.appendChild(u).appendChild(c);
                              var e = r.getComputedStyle(c);
                              (n = "1%" !== e.top),
                                  (l = 12 === t(e.marginLeft)),
                                  (c.style.right = "60%"),
                                  (s = 36 === t(e.right)),
                                  (i = 36 === t(e.width)),
                                  (c.style.position = "absolute"),
                                  (o = 12 === t(c.offsetWidth / 3)),
                                  ge.removeChild(u),
                                  (c = null);
                          }
                      }
                      function t(e) {
                          return Math.round(parseFloat(e));
                      }
                      var n,
                          i,
                          o,
                          s,
                          a,
                          l,
                          u = b.createElement("div"),
                          c = b.createElement("div");
                      c.style &&
                          ((c.style.backgroundClip = "content-box"),
                          (c.cloneNode(!0).style.backgroundClip = ""),
                          (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
                          _.extend(v, {
                              boxSizingReliable: function () {
                                  return e(), i;
                              },
                              pixelBoxStyles: function () {
                                  return e(), s;
                              },
                              pixelPosition: function () {
                                  return e(), n;
                              },
                              reliableMarginLeft: function () {
                                  return e(), l;
                              },
                              scrollboxSize: function () {
                                  return e(), o;
                              },
                              reliableTrDimensions: function () {
                                  var e, t, n, i;
                                  return (
                                      null == a &&
                                          ((e = b.createElement("table")),
                                          (t = b.createElement("tr")),
                                          (n = b.createElement("div")),
                                          (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                          (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                                          (t.style.height = "1px"),
                                          (n.style.height = "9px"),
                                          (n.style.display = "block"),
                                          ge.appendChild(e).appendChild(t).appendChild(n),
                                          (i = r.getComputedStyle(t)),
                                          (a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight),
                                          ge.removeChild(e)),
                                      a
                                  );
                              },
                          }));
                  })();
                  var tt = ["Webkit", "Moz", "ms"],
                      nt = b.createElement("div").style,
                      rt = {};
                  function it(e) {
                      return (
                          _.cssProps[e] ||
                          rt[e] ||
                          (e in nt
                              ? e
                              : (rt[e] =
                                    (function (e) {
                                        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                                    })(e) || e))
                      );
                  }
                  var ot = /^(none|table(?!-c[ea]).+)/,
                      st = { position: "absolute", visibility: "hidden", display: "block" },
                      at = { letterSpacing: "0", fontWeight: "400" };
                  function lt(e, t, n) {
                      var r = de.exec(t);
                      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                  }
                  function ut(e, t, n, r, i, o) {
                      var s = "width" === t ? 1 : 0,
                          a = 0,
                          l = 0,
                          u = 0;
                      if (n === (r ? "border" : "content")) return 0;
                      for (; s < 4; s += 2)
                          "margin" === n && (u += _.css(e, n + he[s], !0, i)),
                              r
                                  ? ("content" === n && (l -= _.css(e, "padding" + he[s], !0, i)), "margin" !== n && (l -= _.css(e, "border" + he[s] + "Width", !0, i)))
                                  : ((l += _.css(e, "padding" + he[s], !0, i)), "padding" !== n ? (l += _.css(e, "border" + he[s] + "Width", !0, i)) : (a += _.css(e, "border" + he[s] + "Width", !0, i)));
                      return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l + u;
                  }
                  function ct(e, t, n) {
                      var r = Qe(e),
                          i = (!v.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
                          o = i,
                          s = Ke(e, t, r),
                          a = "offset" + t[0].toUpperCase() + t.slice(1);
                      if (Ye.test(s)) {
                          if (!n) return s;
                          s = "auto";
                      }
                      return (
                          ((!v.boxSizingReliable() && i) || (!v.reliableTrDimensions() && A(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === _.css(e, "display", !1, r))) &&
                              e.getClientRects().length &&
                              ((i = "border-box" === _.css(e, "boxSizing", !1, r)), (o = a in e) && (s = e[a])),
                          (s = parseFloat(s) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
                      );
                  }
                  function ft(e, t, n, r, i) {
                      return new ft.prototype.init(e, t, n, r, i);
                  }
                  _.extend({
                      cssHooks: {
                          opacity: {
                              get: function (e, t) {
                                  if (t) {
                                      var n = Ke(e, "opacity");
                                      return "" === n ? "1" : n;
                                  }
                              },
                          },
                      },
                      cssNumber: {
                          animationIterationCount: !0,
                          aspectRatio: !0,
                          borderImageSlice: !0,
                          columnCount: !0,
                          flexGrow: !0,
                          flexShrink: !0,
                          fontWeight: !0,
                          gridArea: !0,
                          gridColumn: !0,
                          gridColumnEnd: !0,
                          gridColumnStart: !0,
                          gridRow: !0,
                          gridRowEnd: !0,
                          gridRowStart: !0,
                          lineHeight: !0,
                          opacity: !0,
                          order: !0,
                          orphans: !0,
                          scale: !0,
                          widows: !0,
                          zIndex: !0,
                          zoom: !0,
                          fillOpacity: !0,
                          floodOpacity: !0,
                          stopOpacity: !0,
                          strokeMiterlimit: !0,
                          strokeOpacity: !0,
                      },
                      cssProps: {},
                      style: function (e, t, n, r) {
                          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                              var i,
                                  o,
                                  s,
                                  a = ie(t),
                                  l = Ge.test(t),
                                  u = e.style;
                              if ((l || (t = it(a)), (s = _.cssHooks[t] || _.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                              "string" == (o = typeof n) && (i = de.exec(n)) && i[1] && ((n = be(e, t, i)), (o = "number")),
                                  null != n &&
                                      n == n &&
                                      ("number" !== o || l || (n += (i && i[3]) || (_.cssNumber[a] ? "" : "px")),
                                      v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                      (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (l ? u.setProperty(t, n) : (u[t] = n)));
                          }
                      },
                      css: function (e, t, n, r) {
                          var i,
                              o,
                              s,
                              a = ie(t);
                          return (
                              Ge.test(t) || (t = it(a)),
                              (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
                              void 0 === i && (i = Ke(e, t, r)),
                              "normal" === i && t in at && (i = at[t]),
                              "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                          );
                      },
                  }),
                      _.each(["height", "width"], function (e, t) {
                          _.cssHooks[t] = {
                              get: function (e, n, r) {
                                  if (n)
                                      return !ot.test(_.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                          ? ct(e, t, r)
                                          : Ze(e, st, function () {
                                                return ct(e, t, r);
                                            });
                              },
                              set: function (e, n, r) {
                                  var i,
                                      o = Qe(e),
                                      s = !v.scrollboxSize() && "absolute" === o.position,
                                      a = (s || r) && "border-box" === _.css(e, "boxSizing", !1, o),
                                      l = r ? ut(e, t, r, a, o) : 0;
                                  return (
                                      a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - ut(e, t, "border", !1, o) - 0.5)),
                                      l && (i = de.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = _.css(e, t))),
                                      lt(0, n, l)
                                  );
                              },
                          };
                      }),
                      (_.cssHooks.marginLeft = et(v.reliableMarginLeft, function (e, t) {
                          if (t)
                              return (
                                  (parseFloat(Ke(e, "marginLeft")) ||
                                      e.getBoundingClientRect().left -
                                          Ze(e, { marginLeft: 0 }, function () {
                                              return e.getBoundingClientRect().left;
                                          })) + "px"
                              );
                      })),
                      _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                          (_.cssHooks[e + t] = {
                              expand: function (n) {
                                  for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + he[r] + t] = o[r] || o[r - 2] || o[0];
                                  return i;
                              },
                          }),
                              "margin" !== e && (_.cssHooks[e + t].set = lt);
                      }),
                      _.fn.extend({
                          css: function (e, t) {
                              return ee(
                                  this,
                                  function (e, t, n) {
                                      var r,
                                          i,
                                          o = {},
                                          s = 0;
                                      if (Array.isArray(t)) {
                                          for (r = Qe(e), i = t.length; s < i; s++) o[t[s]] = _.css(e, t[s], !1, r);
                                          return o;
                                      }
                                      return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                                  },
                                  e,
                                  t,
                                  arguments.length > 1
                              );
                          },
                      }),
                      (_.Tween = ft),
                      (ft.prototype = {
                          constructor: ft,
                          init: function (e, t, n, r, i, o) {
                              (this.elem = e), (this.prop = n), (this.easing = i || _.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (_.cssNumber[n] ? "" : "px"));
                          },
                          cur: function () {
                              var e = ft.propHooks[this.prop];
                              return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
                          },
                          run: function (e) {
                              var t,
                                  n = ft.propHooks[this.prop];
                              return (
                                  this.options.duration ? (this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                  (this.now = (this.end - this.start) * t + this.start),
                                  this.options.step && this.options.step.call(this.elem, this.now, this),
                                  n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                                  this
                              );
                          },
                      }),
                      (ft.prototype.init.prototype = ft.prototype),
                      (ft.propHooks = {
                          _default: {
                              get: function (e) {
                                  var t;
                                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                              },
                              set: function (e) {
                                  _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!_.cssHooks[e.prop] && null == e.elem.style[it(e.prop)]) ? (e.elem[e.prop] = e.now) : _.style(e.elem, e.prop, e.now + e.unit);
                              },
                          },
                      }),
                      (ft.propHooks.scrollTop = ft.propHooks.scrollLeft = {
                          set: function (e) {
                              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                          },
                      }),
                      (_.easing = {
                          linear: function (e) {
                              return e;
                          },
                          swing: function (e) {
                              return 0.5 - Math.cos(e * Math.PI) / 2;
                          },
                          _default: "swing",
                      }),
                      (_.fx = ft.prototype.init),
                      (_.fx.step = {});
                  var pt,
                      dt,
                      ht = /^(?:toggle|show|hide)$/,
                      gt = /queueHooks$/;
                  function vt() {
                      dt && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(vt) : r.setTimeout(vt, _.fx.interval), _.fx.tick());
                  }
                  function yt() {
                      return (
                          r.setTimeout(function () {
                              pt = void 0;
                          }),
                          (pt = Date.now())
                      );
                  }
                  function mt(e, t) {
                      var n,
                          r = 0,
                          i = { height: e };
                      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = he[r])] = i["padding" + n] = e;
                      return t && (i.opacity = i.width = e), i;
                  }
                  function bt(e, t, n) {
                      for (var r, i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
                  }
                  function wt(e, t, n) {
                      var r,
                          i,
                          o = 0,
                          s = wt.prefilters.length,
                          a = _.Deferred().always(function () {
                              delete l.elem;
                          }),
                          l = function () {
                              if (i) return !1;
                              for (var t = pt || yt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(r);
                              return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
                          },
                          u = a.promise({
                              elem: e,
                              props: _.extend({}, t),
                              opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
                              originalProperties: t,
                              originalOptions: n,
                              startTime: pt || yt(),
                              duration: n.duration,
                              tweens: [],
                              createTween: function (t, n) {
                                  var r = _.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                  return u.tweens.push(r), r;
                              },
                              stop: function (t) {
                                  var n = 0,
                                      r = t ? u.tweens.length : 0;
                                  if (i) return this;
                                  for (i = !0; n < r; n++) u.tweens[n].run(1);
                                  return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
                              },
                          }),
                          c = u.props;
                      for (
                          (function (e, t) {
                              var n, r, i, o, s;
                              for (n in e)
                                  if (((i = t[(r = ie(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = _.cssHooks[r]) && ("expand" in s)))
                                      for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                                  else t[r] = i;
                          })(c, u.opts.specialEasing);
                          o < s;
                          o++
                      )
                          if ((r = wt.prefilters[o].call(u, e, c, u.opts))) return y(r.stop) && (_._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
                      return (
                          _.map(c, bt, u),
                          y(u.opts.start) && u.opts.start.call(e, u),
                          u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                          _.fx.timer(_.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
                          u
                      );
                  }
                  (_.Animation = _.extend(wt, {
                      tweeners: {
                          "*": [
                              function (e, t) {
                                  var n = this.createTween(e, t);
                                  return be(n.elem, e, de.exec(t), n), n;
                              },
                          ],
                      },
                      tweener: function (e, t) {
                          y(e) ? ((t = e), (e = ["*"])) : (e = e.match(X));
                          for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (wt.tweeners[n] = wt.tweeners[n] || []), wt.tweeners[n].unshift(t);
                      },
                      prefilters: [
                          function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  s,
                                  a,
                                  l,
                                  u,
                                  c,
                                  f = "width" in t || "height" in t,
                                  p = this,
                                  d = {},
                                  h = e.style,
                                  g = e.nodeType && me(e),
                                  v = ae.get(e, "fxshow");
                              for (r in (n.queue ||
                                  (null == (s = _._queueHooks(e, "fx")).unqueued &&
                                      ((s.unqueued = 0),
                                      (a = s.empty.fire),
                                      (s.empty.fire = function () {
                                          s.unqueued || a();
                                      })),
                                  s.unqueued++,
                                  p.always(function () {
                                      p.always(function () {
                                          s.unqueued--, _.queue(e, "fx").length || s.empty.fire();
                                      });
                                  })),
                              t))
                                  if (((i = t[r]), ht.test(i))) {
                                      if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                                          if ("show" !== i || !v || void 0 === v[r]) continue;
                                          g = !0;
                                      }
                                      d[r] = (v && v[r]) || _.style(e, r);
                                  }
                              if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(d))
                                  for (r in (f &&
                                      1 === e.nodeType &&
                                      ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                      null == (u = v && v.display) && (u = ae.get(e, "display")),
                                      "none" === (c = _.css(e, "display")) && (u ? (c = u) : (ke([e], !0), (u = e.style.display || u), (c = _.css(e, "display")), ke([e]))),
                                      ("inline" === c || ("inline-block" === c && null != u)) &&
                                          "none" === _.css(e, "float") &&
                                          (l ||
                                              (p.done(function () {
                                                  h.display = u;
                                              }),
                                              null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                                          (h.display = "inline-block"))),
                                  n.overflow &&
                                      ((h.overflow = "hidden"),
                                      p.always(function () {
                                          (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                      })),
                                  (l = !1),
                                  d))
                                      l ||
                                          (v ? "hidden" in v && (g = v.hidden) : (v = ae.access(e, "fxshow", { display: u })),
                                          o && (v.hidden = !g),
                                          g && ke([e], !0),
                                          p.done(function () {
                                              for (r in (g || ke([e]), ae.remove(e, "fxshow"), d)) _.style(e, r, d[r]);
                                          })),
                                          (l = bt(g ? v[r] : 0, r, p)),
                                          r in v || ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
                          },
                      ],
                      prefilter: function (e, t) {
                          t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
                      },
                  })),
                      (_.speed = function (e, t, n) {
                          var r = e && "object" == typeof e ? _.extend({}, e) : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
                          return (
                              _.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in _.fx.speeds ? (r.duration = _.fx.speeds[r.duration]) : (r.duration = _.fx.speeds._default)),
                              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                              (r.old = r.complete),
                              (r.complete = function () {
                                  y(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue);
                              }),
                              r
                          );
                      }),
                      _.fn.extend({
                          fadeTo: function (e, t, n, r) {
                              return this.filter(me).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                          },
                          animate: function (e, t, n, r) {
                              var i = _.isEmptyObject(e),
                                  o = _.speed(t, n, r),
                                  s = function () {
                                      var t = wt(this, _.extend({}, e), o);
                                      (i || ae.get(this, "finish")) && t.stop(!0);
                                  };
                              return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                          },
                          stop: function (e, t, n) {
                              var r = function (e) {
                                  var t = e.stop;
                                  delete e.stop, t(n);
                              };
                              return (
                                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                  t && this.queue(e || "fx", []),
                                  this.each(function () {
                                      var t = !0,
                                          i = null != e && e + "queueHooks",
                                          o = _.timers,
                                          s = ae.get(this);
                                      if (i) s[i] && s[i].stop && r(s[i]);
                                      else for (i in s) s[i] && s[i].stop && gt.test(i) && r(s[i]);
                                      for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                      (!t && n) || _.dequeue(this, e);
                                  })
                              );
                          },
                          finish: function (e) {
                              return (
                                  !1 !== e && (e = e || "fx"),
                                  this.each(function () {
                                      var t,
                                          n = ae.get(this),
                                          r = n[e + "queue"],
                                          i = n[e + "queueHooks"],
                                          o = _.timers,
                                          s = r ? r.length : 0;
                                      for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                      for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                      delete n.finish;
                                  })
                              );
                          },
                      }),
                      _.each(["toggle", "show", "hide"], function (e, t) {
                          var n = _.fn[t];
                          _.fn[t] = function (e, r, i) {
                              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, r, i);
                          };
                      }),
                      _.each({ slideDown: mt("show"), slideUp: mt("hide"), slideToggle: mt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                          _.fn[e] = function (e, n, r) {
                              return this.animate(t, e, n, r);
                          };
                      }),
                      (_.timers = []),
                      (_.fx.tick = function () {
                          var e,
                              t = 0,
                              n = _.timers;
                          for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                          n.length || _.fx.stop(), (pt = void 0);
                      }),
                      (_.fx.timer = function (e) {
                          _.timers.push(e), _.fx.start();
                      }),
                      (_.fx.interval = 13),
                      (_.fx.start = function () {
                          dt || ((dt = !0), vt());
                      }),
                      (_.fx.stop = function () {
                          dt = null;
                      }),
                      (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                      (_.fn.delay = function (e, t) {
                          return (
                              (e = (_.fx && _.fx.speeds[e]) || e),
                              (t = t || "fx"),
                              this.queue(t, function (t, n) {
                                  var i = r.setTimeout(t, e);
                                  n.stop = function () {
                                      r.clearTimeout(i);
                                  };
                              })
                          );
                      }),
                      (function () {
                          var e = b.createElement("input"),
                              t = b.createElement("select").appendChild(b.createElement("option"));
                          (e.type = "checkbox"), (v.checkOn = "" !== e.value), (v.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (v.radioValue = "t" === e.value);
                      })();
                  var xt,
                      kt = _.expr.attrHandle;
                  _.fn.extend({
                      attr: function (e, t) {
                          return ee(this, _.attr, e, t, arguments.length > 1);
                      },
                      removeAttr: function (e) {
                          return this.each(function () {
                              _.removeAttr(this, e);
                          });
                      },
                  }),
                      _.extend({
                          attr: function (e, t, n) {
                              var r,
                                  i,
                                  o = e.nodeType;
                              if (3 !== o && 8 !== o && 2 !== o)
                                  return void 0 === e.getAttribute
                                      ? _.prop(e, t, n)
                                      : ((1 === o && _.isXMLDoc(e)) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? xt : void 0)),
                                        void 0 !== n
                                            ? null === n
                                                ? void _.removeAttr(e, t)
                                                : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                ? r
                                                : (e.setAttribute(t, n + ""), n)
                                            : i && "get" in i && null !== (r = i.get(e, t))
                                            ? r
                                            : null == (r = _.find.attr(e, t))
                                            ? void 0
                                            : r);
                          },
                          attrHooks: {
                              type: {
                                  set: function (e, t) {
                                      if (!v.radioValue && "radio" === t && A(e, "input")) {
                                          var n = e.value;
                                          return e.setAttribute("type", t), n && (e.value = n), t;
                                      }
                                  },
                              },
                          },
                          removeAttr: function (e, t) {
                              var n,
                                  r = 0,
                                  i = t && t.match(X);
                              if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                          },
                      }),
                      (xt = {
                          set: function (e, t, n) {
                              return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
                          },
                      }),
                      _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
                          var n = kt[t] || _.find.attr;
                          kt[t] = function (e, t, r) {
                              var i,
                                  o,
                                  s = t.toLowerCase();
                              return r || ((o = kt[s]), (kt[s] = i), (i = null != n(e, t, r) ? s : null), (kt[s] = o)), i;
                          };
                      });
                  var St = /^(?:input|select|textarea|button)$/i,
                      Tt = /^(?:a|area)$/i;
                  function _t(e) {
                      return (e.match(X) || []).join(" ");
                  }
                  function Ct(e) {
                      return (e.getAttribute && e.getAttribute("class")) || "";
                  }
                  function At(e) {
                      return Array.isArray(e) ? e : ("string" == typeof e && e.match(X)) || [];
                  }
                  _.fn.extend({
                      prop: function (e, t) {
                          return ee(this, _.prop, e, t, arguments.length > 1);
                      },
                      removeProp: function (e) {
                          return this.each(function () {
                              delete this[_.propFix[e] || e];
                          });
                      },
                  }),
                      _.extend({
                          prop: function (e, t, n) {
                              var r,
                                  i,
                                  o = e.nodeType;
                              if (3 !== o && 8 !== o && 2 !== o)
                                  return (
                                      (1 === o && _.isXMLDoc(e)) || ((t = _.propFix[t] || t), (i = _.propHooks[t])),
                                      void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                  );
                          },
                          propHooks: {
                              tabIndex: {
                                  get: function (e) {
                                      var t = _.find.attr(e, "tabindex");
                                      return t ? parseInt(t, 10) : St.test(e.nodeName) || (Tt.test(e.nodeName) && e.href) ? 0 : -1;
                                  },
                              },
                          },
                          propFix: { for: "htmlFor", class: "className" },
                      }),
                      v.optSelected ||
                          (_.propHooks.selected = {
                              get: function (e) {
                                  var t = e.parentNode;
                                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                              },
                              set: function (e) {
                                  var t = e.parentNode;
                                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                              },
                          }),
                      _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                          _.propFix[this.toLowerCase()] = this;
                      }),
                      _.fn.extend({
                          addClass: function (e) {
                              var t, n, r, i, o, s;
                              return y(e)
                                  ? this.each(function (t) {
                                        _(this).addClass(e.call(this, t, Ct(this)));
                                    })
                                  : (t = At(e)).length
                                  ? this.each(function () {
                                        if (((r = Ct(this)), (n = 1 === this.nodeType && " " + _t(r) + " "))) {
                                            for (o = 0; o < t.length; o++) (i = t[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                            (s = _t(n)), r !== s && this.setAttribute("class", s);
                                        }
                                    })
                                  : this;
                          },
                          removeClass: function (e) {
                              var t, n, r, i, o, s;
                              return y(e)
                                  ? this.each(function (t) {
                                        _(this).removeClass(e.call(this, t, Ct(this)));
                                    })
                                  : arguments.length
                                  ? (t = At(e)).length
                                      ? this.each(function () {
                                            if (((r = Ct(this)), (n = 1 === this.nodeType && " " + _t(r) + " "))) {
                                                for (o = 0; o < t.length; o++) for (i = t[o]; n.indexOf(" " + i + " ") > -1; ) n = n.replace(" " + i + " ", " ");
                                                (s = _t(n)), r !== s && this.setAttribute("class", s);
                                            }
                                        })
                                      : this
                                  : this.attr("class", "");
                          },
                          toggleClass: function (e, t) {
                              var n,
                                  r,
                                  i,
                                  o,
                                  s = typeof e,
                                  a = "string" === s || Array.isArray(e);
                              return y(e)
                                  ? this.each(function (n) {
                                        _(this).toggleClass(e.call(this, n, Ct(this), t), t);
                                    })
                                  : "boolean" == typeof t && a
                                  ? t
                                      ? this.addClass(e)
                                      : this.removeClass(e)
                                  : ((n = At(e)),
                                    this.each(function () {
                                        if (a) for (o = _(this), i = 0; i < n.length; i++) (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                                        else
                                            (void 0 !== e && "boolean" !== s) ||
                                                ((r = Ct(this)) && ae.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ae.get(this, "__className__") || ""));
                                    }));
                          },
                          hasClass: function (e) {
                              var t,
                                  n,
                                  r = 0;
                              for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + _t(Ct(n)) + " ").indexOf(t) > -1) return !0;
                              return !1;
                          },
                      });
                  var $t = /\r/g;
                  _.fn.extend({
                      val: function (e) {
                          var t,
                              n,
                              r,
                              i = this[0];
                          return arguments.length
                              ? ((r = y(e)),
                                this.each(function (n) {
                                    var i;
                                    1 === this.nodeType &&
                                        (null == (i = r ? e.call(this, n, _(this).val()) : e)
                                            ? (i = "")
                                            : "number" == typeof i
                                            ? (i += "")
                                            : Array.isArray(i) &&
                                              (i = _.map(i, function (e) {
                                                  return null == e ? "" : e + "";
                                              })),
                                        ((t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                                }))
                              : i
                              ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                                  ? n
                                  : "string" == typeof (n = i.value)
                                  ? n.replace($t, "")
                                  : null == n
                                  ? ""
                                  : n
                              : void 0;
                      },
                  }),
                      _.extend({
                          valHooks: {
                              option: {
                                  get: function (e) {
                                      var t = _.find.attr(e, "value");
                                      return null != t ? t : _t(_.text(e));
                                  },
                              },
                              select: {
                                  get: function (e) {
                                      var t,
                                          n,
                                          r,
                                          i = e.options,
                                          o = e.selectedIndex,
                                          s = "select-one" === e.type,
                                          a = s ? null : [],
                                          l = s ? o + 1 : i.length;
                                      for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                                          if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                              if (((t = _(n).val()), s)) return t;
                                              a.push(t);
                                          }
                                      return a;
                                  },
                                  set: function (e, t) {
                                      for (var n, r, i = e.options, o = _.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                                      return n || (e.selectedIndex = -1), o;
                                  },
                              },
                          },
                      }),
                      _.each(["radio", "checkbox"], function () {
                          (_.valHooks[this] = {
                              set: function (e, t) {
                                  if (Array.isArray(t)) return (e.checked = _.inArray(_(e).val(), t) > -1);
                              },
                          }),
                              v.checkOn ||
                                  (_.valHooks[this].get = function (e) {
                                      return null === e.getAttribute("value") ? "on" : e.value;
                                  });
                      });
                  var Et = r.location,
                      jt = { guid: Date.now() },
                      Pt = /\?/;
                  _.parseXML = function (e) {
                      var t, n;
                      if (!e || "string" != typeof e) return null;
                      try {
                          t = new r.DOMParser().parseFromString(e, "text/xml");
                      } catch (e) {}
                      return (
                          (n = t && t.getElementsByTagName("parsererror")[0]),
                          (t && !n) ||
                              _.error(
                                  "Invalid XML: " +
                                      (n
                                          ? _.map(n.childNodes, function (e) {
                                                return e.textContent;
                                            }).join("\n")
                                          : e)
                              ),
                          t
                      );
                  };
                  var Ot = /^(?:focusinfocus|focusoutblur)$/,
                      Lt = function (e) {
                          e.stopPropagation();
                      };
                  _.extend(_.event, {
                      trigger: function (e, t, n, i) {
                          var o,
                              s,
                              a,
                              l,
                              u,
                              c,
                              f,
                              p,
                              h = [n || b],
                              g = d.call(e, "type") ? e.type : e,
                              v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                          if (
                              ((s = p = a = n = n || b),
                              3 !== n.nodeType &&
                                  8 !== n.nodeType &&
                                  !Ot.test(g + _.event.triggered) &&
                                  (g.indexOf(".") > -1 && ((v = g.split(".")), (g = v.shift()), v.sort()),
                                  (u = g.indexOf(":") < 0 && "on" + g),
                                  ((e = e[_.expando] ? e : new _.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                                  (e.namespace = v.join(".")),
                                  (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                  (e.result = void 0),
                                  e.target || (e.target = n),
                                  (t = null == t ? [e] : _.makeArray(t, [e])),
                                  (f = _.event.special[g] || {}),
                                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
                          ) {
                              if (!i && !f.noBubble && !m(n)) {
                                  for (l = f.delegateType || g, Ot.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
                                  a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || r);
                              }
                              for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                                  (p = s),
                                      (e.type = o > 1 ? l : f.bindType || g),
                                      (c = (ae.get(s, "events") || Object.create(null))[e.type] && ae.get(s, "handle")) && c.apply(s, t),
                                      (c = u && s[u]) && c.apply && oe(s) && ((e.result = c.apply(s, t)), !1 === e.result && e.preventDefault());
                              return (
                                  (e.type = g),
                                  i ||
                                      e.isDefaultPrevented() ||
                                      (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                                      !oe(n) ||
                                      (u &&
                                          y(n[g]) &&
                                          !m(n) &&
                                          ((a = n[u]) && (n[u] = null),
                                          (_.event.triggered = g),
                                          e.isPropagationStopped() && p.addEventListener(g, Lt),
                                          n[g](),
                                          e.isPropagationStopped() && p.removeEventListener(g, Lt),
                                          (_.event.triggered = void 0),
                                          a && (n[u] = a))),
                                  e.result
                              );
                          }
                      },
                      simulate: function (e, t, n) {
                          var r = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
                          _.event.trigger(r, null, t);
                      },
                  }),
                      _.fn.extend({
                          trigger: function (e, t) {
                              return this.each(function () {
                                  _.event.trigger(e, t, this);
                              });
                          },
                          triggerHandler: function (e, t) {
                              var n = this[0];
                              if (n) return _.event.trigger(e, t, n, !0);
                          },
                      });
                  var Ht = /\[\]$/,
                      Dt = /\r?\n/g,
                      Nt = /^(?:submit|button|image|reset|file)$/i,
                      Rt = /^(?:input|select|textarea|keygen)/i;
                  function qt(e, t, n, r) {
                      var i;
                      if (Array.isArray(t))
                          _.each(t, function (t, i) {
                              n || Ht.test(e) ? r(e, i) : qt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                          });
                      else if (n || "object" !== k(t)) r(e, t);
                      else for (i in t) qt(e + "[" + i + "]", t[i], n, r);
                  }
                  (_.param = function (e, t) {
                      var n,
                          r = [],
                          i = function (e, t) {
                              var n = y(t) ? t() : t;
                              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                          };
                      if (null == e) return "";
                      if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
                          _.each(e, function () {
                              i(this.name, this.value);
                          });
                      else for (n in e) qt(n, e[n], t, i);
                      return r.join("&");
                  }),
                      _.fn.extend({
                          serialize: function () {
                              return _.param(this.serializeArray());
                          },
                          serializeArray: function () {
                              return this.map(function () {
                                  var e = _.prop(this, "elements");
                                  return e ? _.makeArray(e) : this;
                              })
                                  .filter(function () {
                                      var e = this.type;
                                      return this.name && !_(this).is(":disabled") && Rt.test(this.nodeName) && !Nt.test(e) && (this.checked || !_e.test(e));
                                  })
                                  .map(function (e, t) {
                                      var n = _(this).val();
                                      return null == n
                                          ? null
                                          : Array.isArray(n)
                                          ? _.map(n, function (e) {
                                                return { name: t.name, value: e.replace(Dt, "\r\n") };
                                            })
                                          : { name: t.name, value: n.replace(Dt, "\r\n") };
                                  })
                                  .get();
                          },
                      });
                  var zt = /%20/g,
                      Mt = /#.*$/,
                      It = /([?&])_=[^&]*/,
                      Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                      Vt = /^(?:GET|HEAD)$/,
                      Wt = /^\/\//,
                      Bt = {},
                      Ut = {},
                      Xt = "*/".concat("*"),
                      Yt = b.createElement("a");
                  function Gt(e) {
                      return function (t, n) {
                          "string" != typeof t && ((n = t), (t = "*"));
                          var r,
                              i = 0,
                              o = t.toLowerCase().match(X) || [];
                          if (y(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                      };
                  }
                  function Qt(e, t, n, r) {
                      var i = {},
                          o = e === Ut;
                      function s(a) {
                          var l;
                          return (
                              (i[a] = !0),
                              _.each(e[a] || [], function (e, a) {
                                  var u = a(t, n, r);
                                  return "string" != typeof u || o || i[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), s(u), !1);
                              }),
                              l
                          );
                      }
                      return s(t.dataTypes[0]) || (!i["*"] && s("*"));
                  }
                  function Zt(e, t) {
                      var n,
                          r,
                          i = _.ajaxSettings.flatOptions || {};
                      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                      return r && _.extend(!0, e, r), e;
                  }
                  (Yt.href = Et.href),
                      _.extend({
                          active: 0,
                          lastModified: {},
                          etag: {},
                          ajaxSettings: {
                              url: Et.href,
                              type: "GET",
                              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                              global: !0,
                              processData: !0,
                              async: !0,
                              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                              accepts: { "*": Xt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                              converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML },
                              flatOptions: { url: !0, context: !0 },
                          },
                          ajaxSetup: function (e, t) {
                              return t ? Zt(Zt(e, _.ajaxSettings), t) : Zt(_.ajaxSettings, e);
                          },
                          ajaxPrefilter: Gt(Bt),
                          ajaxTransport: Gt(Ut),
                          ajax: function (e, t) {
                              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                              var n,
                                  i,
                                  o,
                                  s,
                                  a,
                                  l,
                                  u,
                                  c,
                                  f,
                                  p,
                                  d = _.ajaxSetup({}, t),
                                  h = d.context || d,
                                  g = d.context && (h.nodeType || h.jquery) ? _(h) : _.event,
                                  v = _.Deferred(),
                                  y = _.Callbacks("once memory"),
                                  m = d.statusCode || {},
                                  w = {},
                                  x = {},
                                  k = "canceled",
                                  S = {
                                      readyState: 0,
                                      getResponseHeader: function (e) {
                                          var t;
                                          if (u) {
                                              if (!s) for (s = {}; (t = Ft.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                              t = s[e.toLowerCase() + " "];
                                          }
                                          return null == t ? null : t.join(", ");
                                      },
                                      getAllResponseHeaders: function () {
                                          return u ? o : null;
                                      },
                                      setRequestHeader: function (e, t) {
                                          return null == u && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                                      },
                                      overrideMimeType: function (e) {
                                          return null == u && (d.mimeType = e), this;
                                      },
                                      statusCode: function (e) {
                                          var t;
                                          if (e)
                                              if (u) S.always(e[S.status]);
                                              else for (t in e) m[t] = [m[t], e[t]];
                                          return this;
                                      },
                                      abort: function (e) {
                                          var t = e || k;
                                          return n && n.abort(t), T(0, t), this;
                                      },
                                  };
                              if (
                                  (v.promise(S),
                                  (d.url = ((e || d.url || Et.href) + "").replace(Wt, Et.protocol + "//")),
                                  (d.type = t.method || t.type || d.method || d.type),
                                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [""]),
                                  null == d.crossDomain)
                              ) {
                                  l = b.createElement("a");
                                  try {
                                      (l.href = d.url), (l.href = l.href), (d.crossDomain = Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host);
                                  } catch (e) {
                                      d.crossDomain = !0;
                                  }
                              }
                              if ((d.data && d.processData && "string" != typeof d.data && (d.data = _.param(d.data, d.traditional)), Qt(Bt, d, t, S), u)) return S;
                              for (f in ((c = _.event && d.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                              (d.type = d.type.toUpperCase()),
                              (d.hasContent = !Vt.test(d.type)),
                              (i = d.url.replace(Mt, "")),
                              d.hasContent
                                  ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(zt, "+"))
                                  : ((p = d.url.slice(i.length)),
                                    d.data && (d.processData || "string" == typeof d.data) && ((i += (Pt.test(i) ? "&" : "?") + d.data), delete d.data),
                                    !1 === d.cache && ((i = i.replace(It, "$1")), (p = (Pt.test(i) ? "&" : "?") + "_=" + jt.guid++ + p)),
                                    (d.url = i + p)),
                              d.ifModified && (_.lastModified[i] && S.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && S.setRequestHeader("If-None-Match", _.etag[i])),
                              ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) && S.setRequestHeader("Content-Type", d.contentType),
                              S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]),
                              d.headers))
                                  S.setRequestHeader(f, d.headers[f]);
                              if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || u)) return S.abort();
                              if (((k = "abort"), y.add(d.complete), S.done(d.success), S.fail(d.error), (n = Qt(Ut, d, t, S)))) {
                                  if (((S.readyState = 1), c && g.trigger("ajaxSend", [S, d]), u)) return S;
                                  d.async &&
                                      d.timeout > 0 &&
                                      (a = r.setTimeout(function () {
                                          S.abort("timeout");
                                      }, d.timeout));
                                  try {
                                      (u = !1), n.send(w, T);
                                  } catch (e) {
                                      if (u) throw e;
                                      T(-1, e);
                                  }
                              } else T(-1, "No Transport");
                              function T(e, t, s, l) {
                                  var f,
                                      p,
                                      b,
                                      w,
                                      x,
                                      k = t;
                                  u ||
                                      ((u = !0),
                                      a && r.clearTimeout(a),
                                      (n = void 0),
                                      (o = l || ""),
                                      (S.readyState = e > 0 ? 4 : 0),
                                      (f = (e >= 200 && e < 300) || 304 === e),
                                      s &&
                                          (w = (function (e, t, n) {
                                              for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                              if (r)
                                                  for (i in a)
                                                      if (a[i] && a[i].test(r)) {
                                                          l.unshift(i);
                                                          break;
                                                      }
                                              if (l[0] in n) o = l[0];
                                              else {
                                                  for (i in n) {
                                                      if (!l[0] || e.converters[i + " " + l[0]]) {
                                                          o = i;
                                                          break;
                                                      }
                                                      s || (s = i);
                                                  }
                                                  o = o || s;
                                              }
                                              if (o) return o !== l[0] && l.unshift(o), n[o];
                                          })(d, S, s)),
                                      !f && _.inArray("script", d.dataTypes) > -1 && _.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () {}),
                                      (w = (function (e, t, n, r) {
                                          var i,
                                              o,
                                              s,
                                              a,
                                              l,
                                              u = {},
                                              c = e.dataTypes.slice();
                                          if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                                          for (o = c.shift(); o; )
                                              if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
                                                  if ("*" === o) o = l;
                                                  else if ("*" !== l && l !== o) {
                                                      if (!(s = u[l + " " + o] || u["* " + o]))
                                                          for (i in u)
                                                              if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                                  !0 === s ? (s = u[i]) : !0 !== u[i] && ((o = a[0]), c.unshift(a[1]));
                                                                  break;
                                                              }
                                                      if (!0 !== s)
                                                          if (s && e.throws) t = s(t);
                                                          else
                                                              try {
                                                                  t = s(t);
                                                              } catch (e) {
                                                                  return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                                                              }
                                                  }
                                          return { state: "success", data: t };
                                      })(d, w, S, f)),
                                      f
                                          ? (d.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (_.lastModified[i] = x), (x = S.getResponseHeader("etag")) && (_.etag[i] = x)),
                                            204 === e || "HEAD" === d.type ? (k = "nocontent") : 304 === e ? (k = "notmodified") : ((k = w.state), (p = w.data), (f = !(b = w.error))))
                                          : ((b = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                                      (S.status = e),
                                      (S.statusText = (t || k) + ""),
                                      f ? v.resolveWith(h, [p, k, S]) : v.rejectWith(h, [S, k, b]),
                                      S.statusCode(m),
                                      (m = void 0),
                                      c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, d, f ? p : b]),
                                      y.fireWith(h, [S, k]),
                                      c && (g.trigger("ajaxComplete", [S, d]), --_.active || _.event.trigger("ajaxStop")));
                              }
                              return S;
                          },
                          getJSON: function (e, t, n) {
                              return _.get(e, t, n, "json");
                          },
                          getScript: function (e, t) {
                              return _.get(e, void 0, t, "script");
                          },
                      }),
                      _.each(["get", "post"], function (e, t) {
                          _[t] = function (e, n, r, i) {
                              return y(n) && ((i = i || r), (r = n), (n = void 0)), _.ajax(_.extend({ url: e, type: t, dataType: i, data: n, success: r }, _.isPlainObject(e) && e));
                          };
                      }),
                      _.ajaxPrefilter(function (e) {
                          var t;
                          for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                      }),
                      (_._evalUrl = function (e, t, n) {
                          return _.ajax({
                              url: e,
                              type: "GET",
                              dataType: "script",
                              cache: !0,
                              async: !1,
                              global: !1,
                              converters: { "text script": function () {} },
                              dataFilter: function (e) {
                                  _.globalEval(e, t, n);
                              },
                          });
                      }),
                      _.fn.extend({
                          wrapAll: function (e) {
                              var t;
                              return (
                                  this[0] &&
                                      (y(e) && (e = e.call(this[0])),
                                      (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                                      this[0].parentNode && t.insertBefore(this[0]),
                                      t
                                          .map(function () {
                                              for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                              return e;
                                          })
                                          .append(this)),
                                  this
                              );
                          },
                          wrapInner: function (e) {
                              return y(e)
                                  ? this.each(function (t) {
                                        _(this).wrapInner(e.call(this, t));
                                    })
                                  : this.each(function () {
                                        var t = _(this),
                                            n = t.contents();
                                        n.length ? n.wrapAll(e) : t.append(e);
                                    });
                          },
                          wrap: function (e) {
                              var t = y(e);
                              return this.each(function (n) {
                                  _(this).wrapAll(t ? e.call(this, n) : e);
                              });
                          },
                          unwrap: function (e) {
                              return (
                                  this.parent(e)
                                      .not("body")
                                      .each(function () {
                                          _(this).replaceWith(this.childNodes);
                                      }),
                                  this
                              );
                          },
                      }),
                      (_.expr.pseudos.hidden = function (e) {
                          return !_.expr.pseudos.visible(e);
                      }),
                      (_.expr.pseudos.visible = function (e) {
                          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                      }),
                      (_.ajaxSettings.xhr = function () {
                          try {
                              return new r.XMLHttpRequest();
                          } catch (e) {}
                      });
                  var Jt = { 0: 200, 1223: 204 },
                      Kt = _.ajaxSettings.xhr();
                  (v.cors = !!Kt && "withCredentials" in Kt),
                      (v.ajax = Kt = !!Kt),
                      _.ajaxTransport(function (e) {
                          var t, n;
                          if (v.cors || (Kt && !e.crossDomain))
                              return {
                                  send: function (i, o) {
                                      var s,
                                          a = e.xhr();
                                      if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                      for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) a.setRequestHeader(s, i[s]);
                                      (t = function (e) {
                                          return function () {
                                              t &&
                                                  ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                                  "abort" === e
                                                      ? a.abort()
                                                      : "error" === e
                                                      ? "number" != typeof a.status
                                                          ? o(0, "error")
                                                          : o(a.status, a.statusText)
                                                      : o(
                                                            Jt[a.status] || a.status,
                                                            a.statusText,
                                                            "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                            a.getAllResponseHeaders()
                                                        ));
                                          };
                                      }),
                                          (a.onload = t()),
                                          (n = a.onerror = a.ontimeout = t("error")),
                                          void 0 !== a.onabort
                                              ? (a.onabort = n)
                                              : (a.onreadystatechange = function () {
                                                    4 === a.readyState &&
                                                        r.setTimeout(function () {
                                                            t && n();
                                                        });
                                                }),
                                          (t = t("abort"));
                                      try {
                                          a.send((e.hasContent && e.data) || null);
                                      } catch (e) {
                                          if (t) throw e;
                                      }
                                  },
                                  abort: function () {
                                      t && t();
                                  },
                              };
                      }),
                      _.ajaxPrefilter(function (e) {
                          e.crossDomain && (e.contents.script = !1);
                      }),
                      _.ajaxSetup({
                          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                          contents: { script: /\b(?:java|ecma)script\b/ },
                          converters: {
                              "text script": function (e) {
                                  return _.globalEval(e), e;
                              },
                          },
                      }),
                      _.ajaxPrefilter("script", function (e) {
                          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                      }),
                      _.ajaxTransport("script", function (e) {
                          var t, n;
                          if (e.crossDomain || e.scriptAttrs)
                              return {
                                  send: function (r, i) {
                                      (t = _("<script>")
                                          .attr(e.scriptAttrs || {})
                                          .prop({ charset: e.scriptCharset, src: e.url })
                                          .on(
                                              "load error",
                                              (n = function (e) {
                                                  t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                              })
                                          )),
                                          b.head.appendChild(t[0]);
                                  },
                                  abort: function () {
                                      n && n();
                                  },
                              };
                      });
                  var en,
                      tn = [],
                      nn = /(=)\?(?=&|$)|\?\?/;
                  _.ajaxSetup({
                      jsonp: "callback",
                      jsonpCallback: function () {
                          var e = tn.pop() || _.expando + "_" + jt.guid++;
                          return (this[e] = !0), e;
                      },
                  }),
                      _.ajaxPrefilter("json jsonp", function (e, t, n) {
                          var i,
                              o,
                              s,
                              a = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                          if (a || "jsonp" === e.dataTypes[0])
                              return (
                                  (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                  a ? (e[a] = e[a].replace(nn, "$1" + i)) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                  (e.converters["script json"] = function () {
                                      return s || _.error(i + " was not called"), s[0];
                                  }),
                                  (e.dataTypes[0] = "json"),
                                  (o = r[i]),
                                  (r[i] = function () {
                                      s = arguments;
                                  }),
                                  n.always(function () {
                                      void 0 === o ? _(r).removeProp(i) : (r[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)), s && y(o) && o(s[0]), (s = o = void 0);
                                  }),
                                  "script"
                              );
                      }),
                      (v.createHTMLDocument = (((en = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === en.childNodes.length)),
                      (_.parseHTML = function (e, t, n) {
                          return "string" != typeof e
                              ? []
                              : ("boolean" == typeof t && ((n = t), (t = !1)),
                                t || (v.createHTMLDocument ? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(r)) : (t = b)),
                                (o = !n && []),
                                (i = M.exec(e)) ? [t.createElement(i[1])] : ((i = Oe([e], t, o)), o && o.length && _(o).remove(), _.merge([], i.childNodes)));
                          var r, i, o;
                      }),
                      (_.fn.load = function (e, t, n) {
                          var r,
                              i,
                              o,
                              s = this,
                              a = e.indexOf(" ");
                          return (
                              a > -1 && ((r = _t(e.slice(a))), (e = e.slice(0, a))),
                              y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                              s.length > 0 &&
                                  _.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                      .done(function (e) {
                                          (o = arguments), s.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e);
                                      })
                                      .always(
                                          n &&
                                              function (e, t) {
                                                  s.each(function () {
                                                      n.apply(this, o || [e.responseText, t, e]);
                                                  });
                                              }
                                      ),
                              this
                          );
                      }),
                      (_.expr.pseudos.animated = function (e) {
                          return _.grep(_.timers, function (t) {
                              return e === t.elem;
                          }).length;
                      }),
                      (_.offset = {
                          setOffset: function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  s,
                                  a,
                                  l,
                                  u = _.css(e, "position"),
                                  c = _(e),
                                  f = {};
                              "static" === u && (e.style.position = "relative"),
                                  (a = c.offset()),
                                  (o = _.css(e, "top")),
                                  (l = _.css(e, "left")),
                                  ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? ((s = (r = c.position()).top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                                  y(t) && (t = t.call(e, n, _.extend({}, a))),
                                  null != t.top && (f.top = t.top - a.top + s),
                                  null != t.left && (f.left = t.left - a.left + i),
                                  "using" in t ? t.using.call(e, f) : c.css(f);
                          },
                      }),
                      _.fn.extend({
                          offset: function (e) {
                              if (arguments.length)
                                  return void 0 === e
                                      ? this
                                      : this.each(function (t) {
                                            _.offset.setOffset(this, e, t);
                                        });
                              var t,
                                  n,
                                  r = this[0];
                              return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                          },
                          position: function () {
                              if (this[0]) {
                                  var e,
                                      t,
                                      n,
                                      r = this[0],
                                      i = { top: 0, left: 0 };
                                  if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                                  else {
                                      for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position"); ) e = e.parentNode;
                                      e && e !== r && 1 === e.nodeType && (((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0)), (i.left += _.css(e, "borderLeftWidth", !0)));
                                  }
                                  return { top: t.top - i.top - _.css(r, "marginTop", !0), left: t.left - i.left - _.css(r, "marginLeft", !0) };
                              }
                          },
                          offsetParent: function () {
                              return this.map(function () {
                                  for (var e = this.offsetParent; e && "static" === _.css(e, "position"); ) e = e.offsetParent;
                                  return e || ge;
                              });
                          },
                      }),
                      _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                          var n = "pageYOffset" === t;
                          _.fn[e] = function (r) {
                              return ee(
                                  this,
                                  function (e, r, i) {
                                      var o;
                                      if ((m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                      o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                                  },
                                  e,
                                  r,
                                  arguments.length
                              );
                          };
                      }),
                      _.each(["top", "left"], function (e, t) {
                          _.cssHooks[t] = et(v.pixelPosition, function (e, n) {
                              if (n) return (n = Ke(e, t)), Ye.test(n) ? _(e).position()[t] + "px" : n;
                          });
                      }),
                      _.each({ Height: "height", Width: "width" }, function (e, t) {
                          _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                              _.fn[r] = function (i, o) {
                                  var s = arguments.length && (n || "boolean" != typeof i),
                                      a = n || (!0 === i || !0 === o ? "margin" : "border");
                                  return ee(
                                      this,
                                      function (t, n, i) {
                                          var o;
                                          return m(t)
                                              ? 0 === r.indexOf("outer")
                                                  ? t["inner" + e]
                                                  : t.document.documentElement["client" + e]
                                              : 9 === t.nodeType
                                              ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                              : void 0 === i
                                              ? _.css(t, n, a)
                                              : _.style(t, n, i, a);
                                      },
                                      t,
                                      s ? i : void 0,
                                      s
                                  );
                              };
                          });
                      }),
                      _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                          _.fn[t] = function (e) {
                              return this.on(t, e);
                          };
                      }),
                      _.fn.extend({
                          bind: function (e, t, n) {
                              return this.on(e, null, t, n);
                          },
                          unbind: function (e, t) {
                              return this.off(e, null, t);
                          },
                          delegate: function (e, t, n, r) {
                              return this.on(t, e, n, r);
                          },
                          undelegate: function (e, t, n) {
                              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                          },
                          hover: function (e, t) {
                              return this.on("mouseenter", e).on("mouseleave", t || e);
                          },
                      }),
                      _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                          e,
                          t
                      ) {
                          _.fn[t] = function (e, n) {
                              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                          };
                      });
                  var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                  (_.proxy = function (e, t) {
                      var n, r, i;
                      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
                          return (
                              (r = a.call(arguments, 2)),
                              (i = function () {
                                  return e.apply(t || this, r.concat(a.call(arguments)));
                              }),
                              (i.guid = e.guid = e.guid || _.guid++),
                              i
                          );
                  }),
                      (_.holdReady = function (e) {
                          e ? _.readyWait++ : _.ready(!0);
                      }),
                      (_.isArray = Array.isArray),
                      (_.parseJSON = JSON.parse),
                      (_.nodeName = A),
                      (_.isFunction = y),
                      (_.isWindow = m),
                      (_.camelCase = ie),
                      (_.type = k),
                      (_.now = Date.now),
                      (_.isNumeric = function (e) {
                          var t = _.type(e);
                          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                      }),
                      (_.trim = function (e) {
                          return null == e ? "" : (e + "").replace(rn, "$1");
                      }),
                      void 0 ===
                          (n = function () {
                              return _;
                          }.apply(t, [])) || (e.exports = n);
                  var on = r.jQuery,
                      sn = r.$;
                  return (
                      (_.noConflict = function (e) {
                          return r.$ === _ && (r.$ = sn), e && r.jQuery === _ && (r.jQuery = on), _;
                      }),
                      void 0 === i && (r.jQuery = r.$ = _),
                      _
                  );
              });
          },
          486: function (e, t, n) {
              var r;
              (e = n.nmd(e)),
                  function () {
                      var i,
                          o = "Expected a function",
                          s = "__lodash_hash_undefined__",
                          a = "__lodash_placeholder__",
                          l = 32,
                          u = 128,
                          c = 1 / 0,
                          f = 9007199254740991,
                          p = NaN,
                          d = 4294967295,
                          h = [
                              ["ary", u],
                              ["bind", 1],
                              ["bindKey", 2],
                              ["curry", 8],
                              ["curryRight", 16],
                              ["flip", 512],
                              ["partial", l],
                              ["partialRight", 64],
                              ["rearg", 256],
                          ],
                          g = "[object Arguments]",
                          v = "[object Array]",
                          y = "[object Boolean]",
                          m = "[object Date]",
                          b = "[object Error]",
                          w = "[object Function]",
                          x = "[object GeneratorFunction]",
                          k = "[object Map]",
                          S = "[object Number]",
                          T = "[object Object]",
                          _ = "[object Promise]",
                          C = "[object RegExp]",
                          A = "[object Set]",
                          $ = "[object String]",
                          E = "[object Symbol]",
                          j = "[object WeakMap]",
                          P = "[object ArrayBuffer]",
                          O = "[object DataView]",
                          L = "[object Float32Array]",
                          H = "[object Float64Array]",
                          D = "[object Int8Array]",
                          N = "[object Int16Array]",
                          R = "[object Int32Array]",
                          q = "[object Uint8Array]",
                          z = "[object Uint8ClampedArray]",
                          M = "[object Uint16Array]",
                          I = "[object Uint32Array]",
                          F = /\b__p \+= '';/g,
                          V = /\b(__p \+=) '' \+/g,
                          W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                          B = /&(?:amp|lt|gt|quot|#39);/g,
                          U = /[&<>"']/g,
                          X = RegExp(B.source),
                          Y = RegExp(U.source),
                          G = /<%-([\s\S]+?)%>/g,
                          Q = /<%([\s\S]+?)%>/g,
                          Z = /<%=([\s\S]+?)%>/g,
                          J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                          K = /^\w*$/,
                          ee = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                          te = /[\\^$.*+?()[\]{}|]/g,
                          ne = RegExp(te.source),
                          re = /^\s+/,
                          ie = /\s/,
                          oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                          se = /\{\n\/\* \[wrapped with (.+)\] \*/,
                          ae = /,? & /,
                          le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                          ue = /[()=,{}\[\]\/\s]/,
                          ce = /\\(\\)?/g,
                          fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                          pe = /\w*$/,
                          de = /^[-+]0x[0-9a-f]+$/i,
                          he = /^0b[01]+$/i,
                          ge = /^\[object .+?Constructor\]$/,
                          ve = /^0o[0-7]+$/i,
                          ye = /^(?:0|[1-9]\d*)$/,
                          me = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                          be = /($^)/,
                          we = /['\n\r\u2028\u2029\\]/g,
                          xe = "\\ud800-\\udfff",
                          ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                          Se = "\\u2700-\\u27bf",
                          Te = "a-z\\xdf-\\xf6\\xf8-\\xff",
                          _e = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                          Ce = "\\ufe0e\\ufe0f",
                          Ae =
                              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                          $e = "[" + xe + "]",
                          Ee = "[" + Ae + "]",
                          je = "[" + ke + "]",
                          Pe = "\\d+",
                          Oe = "[" + Se + "]",
                          Le = "[" + Te + "]",
                          He = "[^" + xe + Ae + Pe + Se + Te + _e + "]",
                          De = "\\ud83c[\\udffb-\\udfff]",
                          Ne = "[^" + xe + "]",
                          Re = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                          qe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                          ze = "[" + _e + "]",
                          Me = "\\u200d",
                          Ie = "(?:" + Le + "|" + He + ")",
                          Fe = "(?:" + ze + "|" + He + ")",
                          Ve = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                          We = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                          Be = "(?:" + je + "|" + De + ")?",
                          Ue = "[" + Ce + "]?",
                          Xe = Ue + Be + "(?:" + Me + "(?:" + [Ne, Re, qe].join("|") + ")" + Ue + Be + ")*",
                          Ye = "(?:" + [Oe, Re, qe].join("|") + ")" + Xe,
                          Ge = "(?:" + [Ne + je + "?", je, Re, qe, $e].join("|") + ")",
                          Qe = RegExp("['’]", "g"),
                          Ze = RegExp(je, "g"),
                          Je = RegExp(De + "(?=" + De + ")|" + Ge + Xe, "g"),
                          Ke = RegExp(
                              [
                                  ze + "?" + Le + "+" + Ve + "(?=" + [Ee, ze, "$"].join("|") + ")",
                                  Fe + "+" + We + "(?=" + [Ee, ze + Ie, "$"].join("|") + ")",
                                  ze + "?" + Ie + "+" + Ve,
                                  ze + "+" + We,
                                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                                  Pe,
                                  Ye,
                              ].join("|"),
                              "g"
                          ),
                          et = RegExp("[" + Me + xe + ke + Ce + "]"),
                          tt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                          nt = [
                              "Array",
                              "Buffer",
                              "DataView",
                              "Date",
                              "Error",
                              "Float32Array",
                              "Float64Array",
                              "Function",
                              "Int8Array",
                              "Int16Array",
                              "Int32Array",
                              "Map",
                              "Math",
                              "Object",
                              "Promise",
                              "RegExp",
                              "Set",
                              "String",
                              "Symbol",
                              "TypeError",
                              "Uint8Array",
                              "Uint8ClampedArray",
                              "Uint16Array",
                              "Uint32Array",
                              "WeakMap",
                              "_",
                              "clearTimeout",
                              "isFinite",
                              "parseInt",
                              "setTimeout",
                          ],
                          rt = -1,
                          it = {};
                      (it[L] = it[H] = it[D] = it[N] = it[R] = it[q] = it[z] = it[M] = it[I] = !0), (it[g] = it[v] = it[P] = it[y] = it[O] = it[m] = it[b] = it[w] = it[k] = it[S] = it[T] = it[C] = it[A] = it[$] = it[j] = !1);
                      var ot = {};
                      (ot[g] = ot[v] = ot[P] = ot[O] = ot[y] = ot[m] = ot[L] = ot[H] = ot[D] = ot[N] = ot[R] = ot[k] = ot[S] = ot[T] = ot[C] = ot[A] = ot[$] = ot[E] = ot[q] = ot[z] = ot[M] = ot[I] = !0), (ot[b] = ot[w] = ot[j] = !1);
                      var st = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
                          at = parseFloat,
                          lt = parseInt,
                          ut = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                          ct = "object" == typeof self && self && self.Object === Object && self,
                          ft = ut || ct || Function("return this")(),
                          pt = t && !t.nodeType && t,
                          dt = pt && e && !e.nodeType && e,
                          ht = dt && dt.exports === pt,
                          gt = ht && ut.process,
                          vt = (function () {
                              try {
                                  return (dt && dt.require && dt.require("util").types) || (gt && gt.binding && gt.binding("util"));
                              } catch (e) {}
                          })(),
                          yt = vt && vt.isArrayBuffer,
                          mt = vt && vt.isDate,
                          bt = vt && vt.isMap,
                          wt = vt && vt.isRegExp,
                          xt = vt && vt.isSet,
                          kt = vt && vt.isTypedArray;
                      function St(e, t, n) {
                          switch (n.length) {
                              case 0:
                                  return e.call(t);
                              case 1:
                                  return e.call(t, n[0]);
                              case 2:
                                  return e.call(t, n[0], n[1]);
                              case 3:
                                  return e.call(t, n[0], n[1], n[2]);
                          }
                          return e.apply(t, n);
                      }
                      function Tt(e, t, n, r) {
                          for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                              var s = e[i];
                              t(r, s, n(s), e);
                          }
                          return r;
                      }
                      function _t(e, t) {
                          for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); );
                          return e;
                      }
                      function Ct(e, t) {
                          for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
                          return e;
                      }
                      function At(e, t) {
                          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (!t(e[n], n, e)) return !1;
                          return !0;
                      }
                      function $t(e, t) {
                          for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                              var s = e[n];
                              t(s, n, e) && (o[i++] = s);
                          }
                          return o;
                      }
                      function Et(e, t) {
                          return !(null == e || !e.length) && zt(e, t, 0) > -1;
                      }
                      function jt(e, t, n) {
                          for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (n(t, e[r])) return !0;
                          return !1;
                      }
                      function Pt(e, t) {
                          for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
                          return i;
                      }
                      function Ot(e, t) {
                          for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
                          return e;
                      }
                      function Lt(e, t, n, r) {
                          var i = -1,
                              o = null == e ? 0 : e.length;
                          for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
                          return n;
                      }
                      function Ht(e, t, n, r) {
                          var i = null == e ? 0 : e.length;
                          for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
                          return n;
                      }
                      function Dt(e, t) {
                          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
                          return !1;
                      }
                      var Nt = Vt("length");
                      function Rt(e, t, n) {
                          var r;
                          return (
                              n(e, function (e, n, i) {
                                  if (t(e, n, i)) return (r = n), !1;
                              }),
                              r
                          );
                      }
                      function qt(e, t, n, r) {
                          for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
                          return -1;
                      }
                      function zt(e, t, n) {
                          return t == t
                              ? (function (e, t, n) {
                                    for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
                                    return -1;
                                })(e, t, n)
                              : qt(e, It, n);
                      }
                      function Mt(e, t, n, r) {
                          for (var i = n - 1, o = e.length; ++i < o; ) if (r(e[i], t)) return i;
                          return -1;
                      }
                      function It(e) {
                          return e != e;
                      }
                      function Ft(e, t) {
                          var n = null == e ? 0 : e.length;
                          return n ? Ut(e, t) / n : p;
                      }
                      function Vt(e) {
                          return function (t) {
                              return null == t ? i : t[e];
                          };
                      }
                      function Wt(e) {
                          return function (t) {
                              return null == e ? i : e[t];
                          };
                      }
                      function Bt(e, t, n, r, i) {
                          return (
                              i(e, function (e, i, o) {
                                  n = r ? ((r = !1), e) : t(n, e, i, o);
                              }),
                              n
                          );
                      }
                      function Ut(e, t) {
                          for (var n, r = -1, o = e.length; ++r < o; ) {
                              var s = t(e[r]);
                              s !== i && (n = n === i ? s : n + s);
                          }
                          return n;
                      }
                      function Xt(e, t) {
                          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                          return r;
                      }
                      function Yt(e) {
                          return e ? e.slice(0, pn(e) + 1).replace(re, "") : e;
                      }
                      function Gt(e) {
                          return function (t) {
                              return e(t);
                          };
                      }
                      function Qt(e, t) {
                          return Pt(t, function (t) {
                              return e[t];
                          });
                      }
                      function Zt(e, t) {
                          return e.has(t);
                      }
                      function Jt(e, t) {
                          for (var n = -1, r = e.length; ++n < r && zt(t, e[n], 0) > -1; );
                          return n;
                      }
                      function Kt(e, t) {
                          for (var n = e.length; n-- && zt(t, e[n], 0) > -1; );
                          return n;
                      }
                      var en = Wt({
                              À: "A",
                              Á: "A",
                              Â: "A",
                              Ã: "A",
                              Ä: "A",
                              Å: "A",
                              à: "a",
                              á: "a",
                              â: "a",
                              ã: "a",
                              ä: "a",
                              å: "a",
                              Ç: "C",
                              ç: "c",
                              Ð: "D",
                              ð: "d",
                              È: "E",
                              É: "E",
                              Ê: "E",
                              Ë: "E",
                              è: "e",
                              é: "e",
                              ê: "e",
                              ë: "e",
                              Ì: "I",
                              Í: "I",
                              Î: "I",
                              Ï: "I",
                              ì: "i",
                              í: "i",
                              î: "i",
                              ï: "i",
                              Ñ: "N",
                              ñ: "n",
                              Ò: "O",
                              Ó: "O",
                              Ô: "O",
                              Õ: "O",
                              Ö: "O",
                              Ø: "O",
                              ò: "o",
                              ó: "o",
                              ô: "o",
                              õ: "o",
                              ö: "o",
                              ø: "o",
                              Ù: "U",
                              Ú: "U",
                              Û: "U",
                              Ü: "U",
                              ù: "u",
                              ú: "u",
                              û: "u",
                              ü: "u",
                              Ý: "Y",
                              ý: "y",
                              ÿ: "y",
                              Æ: "Ae",
                              æ: "ae",
                              Þ: "Th",
                              þ: "th",
                              ß: "ss",
                              Ā: "A",
                              Ă: "A",
                              Ą: "A",
                              ā: "a",
                              ă: "a",
                              ą: "a",
                              Ć: "C",
                              Ĉ: "C",
                              Ċ: "C",
                              Č: "C",
                              ć: "c",
                              ĉ: "c",
                              ċ: "c",
                              č: "c",
                              Ď: "D",
                              Đ: "D",
                              ď: "d",
                              đ: "d",
                              Ē: "E",
                              Ĕ: "E",
                              Ė: "E",
                              Ę: "E",
                              Ě: "E",
                              ē: "e",
                              ĕ: "e",
                              ė: "e",
                              ę: "e",
                              ě: "e",
                              Ĝ: "G",
                              Ğ: "G",
                              Ġ: "G",
                              Ģ: "G",
                              ĝ: "g",
                              ğ: "g",
                              ġ: "g",
                              ģ: "g",
                              Ĥ: "H",
                              Ħ: "H",
                              ĥ: "h",
                              ħ: "h",
                              Ĩ: "I",
                              Ī: "I",
                              Ĭ: "I",
                              Į: "I",
                              İ: "I",
                              ĩ: "i",
                              ī: "i",
                              ĭ: "i",
                              į: "i",
                              ı: "i",
                              Ĵ: "J",
                              ĵ: "j",
                              Ķ: "K",
                              ķ: "k",
                              ĸ: "k",
                              Ĺ: "L",
                              Ļ: "L",
                              Ľ: "L",
                              Ŀ: "L",
                              Ł: "L",
                              ĺ: "l",
                              ļ: "l",
                              ľ: "l",
                              ŀ: "l",
                              ł: "l",
                              Ń: "N",
                              Ņ: "N",
                              Ň: "N",
                              Ŋ: "N",
                              ń: "n",
                              ņ: "n",
                              ň: "n",
                              ŋ: "n",
                              Ō: "O",
                              Ŏ: "O",
                              Ő: "O",
                              ō: "o",
                              ŏ: "o",
                              ő: "o",
                              Ŕ: "R",
                              Ŗ: "R",
                              Ř: "R",
                              ŕ: "r",
                              ŗ: "r",
                              ř: "r",
                              Ś: "S",
                              Ŝ: "S",
                              Ş: "S",
                              Š: "S",
                              ś: "s",
                              ŝ: "s",
                              ş: "s",
                              š: "s",
                              Ţ: "T",
                              Ť: "T",
                              Ŧ: "T",
                              ţ: "t",
                              ť: "t",
                              ŧ: "t",
                              Ũ: "U",
                              Ū: "U",
                              Ŭ: "U",
                              Ů: "U",
                              Ű: "U",
                              Ų: "U",
                              ũ: "u",
                              ū: "u",
                              ŭ: "u",
                              ů: "u",
                              ű: "u",
                              ų: "u",
                              Ŵ: "W",
                              ŵ: "w",
                              Ŷ: "Y",
                              ŷ: "y",
                              Ÿ: "Y",
                              Ź: "Z",
                              Ż: "Z",
                              Ž: "Z",
                              ź: "z",
                              ż: "z",
                              ž: "z",
                              Ĳ: "IJ",
                              ĳ: "ij",
                              Œ: "Oe",
                              œ: "oe",
                              ŉ: "'n",
                              ſ: "s",
                          }),
                          tn = Wt({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
                      function nn(e) {
                          return "\\" + st[e];
                      }
                      function rn(e) {
                          return et.test(e);
                      }
                      function on(e) {
                          var t = -1,
                              n = Array(e.size);
                          return (
                              e.forEach(function (e, r) {
                                  n[++t] = [r, e];
                              }),
                              n
                          );
                      }
                      function sn(e, t) {
                          return function (n) {
                              return e(t(n));
                          };
                      }
                      function an(e, t) {
                          for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                              var s = e[n];
                              (s !== t && s !== a) || ((e[n] = a), (o[i++] = n));
                          }
                          return o;
                      }
                      function ln(e) {
                          var t = -1,
                              n = Array(e.size);
                          return (
                              e.forEach(function (e) {
                                  n[++t] = e;
                              }),
                              n
                          );
                      }
                      function un(e) {
                          var t = -1,
                              n = Array(e.size);
                          return (
                              e.forEach(function (e) {
                                  n[++t] = [e, e];
                              }),
                              n
                          );
                      }
                      function cn(e) {
                          return rn(e)
                              ? (function (e) {
                                    for (var t = (Je.lastIndex = 0); Je.test(e); ) ++t;
                                    return t;
                                })(e)
                              : Nt(e);
                      }
                      function fn(e) {
                          return rn(e)
                              ? (function (e) {
                                    return e.match(Je) || [];
                                })(e)
                              : (function (e) {
                                    return e.split("");
                                })(e);
                      }
                      function pn(e) {
                          for (var t = e.length; t-- && ie.test(e.charAt(t)); );
                          return t;
                      }
                      var dn = Wt({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }),
                          hn = (function e(t) {
                              var n,
                                  r = (t = null == t ? ft : hn.defaults(ft.Object(), t, hn.pick(ft, nt))).Array,
                                  ie = t.Date,
                                  xe = t.Error,
                                  ke = t.Function,
                                  Se = t.Math,
                                  Te = t.Object,
                                  _e = t.RegExp,
                                  Ce = t.String,
                                  Ae = t.TypeError,
                                  $e = r.prototype,
                                  Ee = ke.prototype,
                                  je = Te.prototype,
                                  Pe = t["__core-js_shared__"],
                                  Oe = Ee.toString,
                                  Le = je.hasOwnProperty,
                                  He = 0,
                                  De = (n = /[^.]+$/.exec((Pe && Pe.keys && Pe.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + n : "",
                                  Ne = je.toString,
                                  Re = Oe.call(Te),
                                  qe = ft._,
                                  ze = _e(
                                      "^" +
                                          Oe.call(Le)
                                              .replace(te, "\\$&")
                                              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                                          "$"
                                  ),
                                  Me = ht ? t.Buffer : i,
                                  Ie = t.Symbol,
                                  Fe = t.Uint8Array,
                                  Ve = Me ? Me.allocUnsafe : i,
                                  We = sn(Te.getPrototypeOf, Te),
                                  Be = Te.create,
                                  Ue = je.propertyIsEnumerable,
                                  Xe = $e.splice,
                                  Ye = Ie ? Ie.isConcatSpreadable : i,
                                  Ge = Ie ? Ie.iterator : i,
                                  Je = Ie ? Ie.toStringTag : i,
                                  et = (function () {
                                      try {
                                          var e = lo(Te, "defineProperty");
                                          return e({}, "", {}), e;
                                      } catch (e) {}
                                  })(),
                                  st = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                                  ut = ie && ie.now !== ft.Date.now && ie.now,
                                  ct = t.setTimeout !== ft.setTimeout && t.setTimeout,
                                  pt = Se.ceil,
                                  dt = Se.floor,
                                  gt = Te.getOwnPropertySymbols,
                                  vt = Me ? Me.isBuffer : i,
                                  Nt = t.isFinite,
                                  Wt = $e.join,
                                  gn = sn(Te.keys, Te),
                                  vn = Se.max,
                                  yn = Se.min,
                                  mn = ie.now,
                                  bn = t.parseInt,
                                  wn = Se.random,
                                  xn = $e.reverse,
                                  kn = lo(t, "DataView"),
                                  Sn = lo(t, "Map"),
                                  Tn = lo(t, "Promise"),
                                  _n = lo(t, "Set"),
                                  Cn = lo(t, "WeakMap"),
                                  An = lo(Te, "create"),
                                  $n = Cn && new Cn(),
                                  En = {},
                                  jn = Ro(kn),
                                  Pn = Ro(Sn),
                                  On = Ro(Tn),
                                  Ln = Ro(_n),
                                  Hn = Ro(Cn),
                                  Dn = Ie ? Ie.prototype : i,
                                  Nn = Dn ? Dn.valueOf : i,
                                  Rn = Dn ? Dn.toString : i;
                              function qn(e) {
                                  if (ea(e) && !Vs(e) && !(e instanceof Fn)) {
                                      if (e instanceof In) return e;
                                      if (Le.call(e, "__wrapped__")) return qo(e);
                                  }
                                  return new In(e);
                              }
                              var zn = (function () {
                                  function e() {}
                                  return function (t) {
                                      if (!Ks(t)) return {};
                                      if (Be) return Be(t);
                                      e.prototype = t;
                                      var n = new e();
                                      return (e.prototype = i), n;
                                  };
                              })();
                              function Mn() {}
                              function In(e, t) {
                                  (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = i);
                              }
                              function Fn(e) {
                                  (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = d), (this.__views__ = []);
                              }
                              function Vn(e) {
                                  var t = -1,
                                      n = null == e ? 0 : e.length;
                                  for (this.clear(); ++t < n; ) {
                                      var r = e[t];
                                      this.set(r[0], r[1]);
                                  }
                              }
                              function Wn(e) {
                                  var t = -1,
                                      n = null == e ? 0 : e.length;
                                  for (this.clear(); ++t < n; ) {
                                      var r = e[t];
                                      this.set(r[0], r[1]);
                                  }
                              }
                              function Bn(e) {
                                  var t = -1,
                                      n = null == e ? 0 : e.length;
                                  for (this.clear(); ++t < n; ) {
                                      var r = e[t];
                                      this.set(r[0], r[1]);
                                  }
                              }
                              function Un(e) {
                                  var t = -1,
                                      n = null == e ? 0 : e.length;
                                  for (this.__data__ = new Bn(); ++t < n; ) this.add(e[t]);
                              }
                              function Xn(e) {
                                  var t = (this.__data__ = new Wn(e));
                                  this.size = t.size;
                              }
                              function Yn(e, t) {
                                  var n = Vs(e),
                                      r = !n && Fs(e),
                                      i = !n && !r && Xs(e),
                                      o = !n && !r && !i && la(e),
                                      s = n || r || i || o,
                                      a = s ? Xt(e.length, Ce) : [],
                                      l = a.length;
                                  for (var u in e) (!t && !Le.call(e, u)) || (s && ("length" == u || (i && ("offset" == u || "parent" == u)) || (o && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) || vo(u, l))) || a.push(u);
                                  return a;
                              }
                              function Gn(e) {
                                  var t = e.length;
                                  return t ? e[Br(0, t - 1)] : i;
                              }
                              function Qn(e, t) {
                                  return Oo(Ci(e), or(t, 0, e.length));
                              }
                              function Zn(e) {
                                  return Oo(Ci(e));
                              }
                              function Jn(e, t, n) {
                                  ((n !== i && !zs(e[t], n)) || (n === i && !(t in e))) && rr(e, t, n);
                              }
                              function Kn(e, t, n) {
                                  var r = e[t];
                                  (Le.call(e, t) && zs(r, n) && (n !== i || t in e)) || rr(e, t, n);
                              }
                              function er(e, t) {
                                  for (var n = e.length; n--; ) if (zs(e[n][0], t)) return n;
                                  return -1;
                              }
                              function tr(e, t, n, r) {
                                  return (
                                      cr(e, function (e, i, o) {
                                          t(r, e, n(e), o);
                                      }),
                                      r
                                  );
                              }
                              function nr(e, t) {
                                  return e && Ai(t, ja(t), e);
                              }
                              function rr(e, t, n) {
                                  "__proto__" == t && et ? et(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
                              }
                              function ir(e, t) {
                                  for (var n = -1, o = t.length, s = r(o), a = null == e; ++n < o; ) s[n] = a ? i : _a(e, t[n]);
                                  return s;
                              }
                              function or(e, t, n) {
                                  return e == e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
                              }
                              function sr(e, t, n, r, o, s) {
                                  var a,
                                      l = 1 & t,
                                      u = 2 & t,
                                      c = 4 & t;
                                  if ((n && (a = o ? n(e, r, o, s) : n(e)), a !== i)) return a;
                                  if (!Ks(e)) return e;
                                  var f = Vs(e);
                                  if (f) {
                                      if (
                                          ((a = (function (e) {
                                              var t = e.length,
                                                  n = new e.constructor(t);
                                              return t && "string" == typeof e[0] && Le.call(e, "index") && ((n.index = e.index), (n.input = e.input)), n;
                                          })(e)),
                                          !l)
                                      )
                                          return Ci(e, a);
                                  } else {
                                      var p = fo(e),
                                          d = p == w || p == x;
                                      if (Xs(e)) return wi(e, l);
                                      if (p == T || p == g || (d && !o)) {
                                          if (((a = u || d ? {} : ho(e)), !l))
                                              return u
                                                  ? (function (e, t) {
                                                        return Ai(e, co(e), t);
                                                    })(
                                                        e,
                                                        (function (e, t) {
                                                            return e && Ai(t, Pa(t), e);
                                                        })(a, e)
                                                    )
                                                  : (function (e, t) {
                                                        return Ai(e, uo(e), t);
                                                    })(e, nr(a, e));
                                      } else {
                                          if (!ot[p]) return o ? e : {};
                                          a = (function (e, t, n) {
                                              var r,
                                                  i = e.constructor;
                                              switch (t) {
                                                  case P:
                                                      return xi(e);
                                                  case y:
                                                  case m:
                                                      return new i(+e);
                                                  case O:
                                                      return (function (e, t) {
                                                          var n = t ? xi(e.buffer) : e.buffer;
                                                          return new e.constructor(n, e.byteOffset, e.byteLength);
                                                      })(e, n);
                                                  case L:
                                                  case H:
                                                  case D:
                                                  case N:
                                                  case R:
                                                  case q:
                                                  case z:
                                                  case M:
                                                  case I:
                                                      return ki(e, n);
                                                  case k:
                                                      return new i();
                                                  case S:
                                                  case $:
                                                      return new i(e);
                                                  case C:
                                                      return (function (e) {
                                                          var t = new e.constructor(e.source, pe.exec(e));
                                                          return (t.lastIndex = e.lastIndex), t;
                                                      })(e);
                                                  case A:
                                                      return new i();
                                                  case E:
                                                      return (r = e), Nn ? Te(Nn.call(r)) : {};
                                              }
                                          })(e, p, l);
                                      }
                                  }
                                  s || (s = new Xn());
                                  var h = s.get(e);
                                  if (h) return h;
                                  s.set(e, a),
                                      oa(e)
                                          ? e.forEach(function (r) {
                                                a.add(sr(r, t, n, r, e, s));
                                            })
                                          : ta(e) &&
                                            e.forEach(function (r, i) {
                                                a.set(i, sr(r, t, n, i, e, s));
                                            });
                                  var v = f ? i : (c ? (u ? to : eo) : u ? Pa : ja)(e);
                                  return (
                                      _t(v || e, function (r, i) {
                                          v && (r = e[(i = r)]), Kn(a, i, sr(r, t, n, i, e, s));
                                      }),
                                      a
                                  );
                              }
                              function ar(e, t, n) {
                                  var r = n.length;
                                  if (null == e) return !r;
                                  for (e = Te(e); r--; ) {
                                      var o = n[r],
                                          s = t[o],
                                          a = e[o];
                                      if ((a === i && !(o in e)) || !s(a)) return !1;
                                  }
                                  return !0;
                              }
                              function lr(e, t, n) {
                                  if ("function" != typeof e) throw new Ae(o);
                                  return $o(function () {
                                      e.apply(i, n);
                                  }, t);
                              }
                              function ur(e, t, n, r) {
                                  var i = -1,
                                      o = Et,
                                      s = !0,
                                      a = e.length,
                                      l = [],
                                      u = t.length;
                                  if (!a) return l;
                                  n && (t = Pt(t, Gt(n))), r ? ((o = jt), (s = !1)) : t.length >= 200 && ((o = Zt), (s = !1), (t = new Un(t)));
                                  e: for (; ++i < a; ) {
                                      var c = e[i],
                                          f = null == n ? c : n(c);
                                      if (((c = r || 0 !== c ? c : 0), s && f == f)) {
                                          for (var p = u; p--; ) if (t[p] === f) continue e;
                                          l.push(c);
                                      } else o(t, f, r) || l.push(c);
                                  }
                                  return l;
                              }
                              (qn.templateSettings = { escape: G, evaluate: Q, interpolate: Z, variable: "", imports: { _: qn } }),
                                  (qn.prototype = Mn.prototype),
                                  (qn.prototype.constructor = qn),
                                  (In.prototype = zn(Mn.prototype)),
                                  (In.prototype.constructor = In),
                                  (Fn.prototype = zn(Mn.prototype)),
                                  (Fn.prototype.constructor = Fn),
                                  (Vn.prototype.clear = function () {
                                      (this.__data__ = An ? An(null) : {}), (this.size = 0);
                                  }),
                                  (Vn.prototype.delete = function (e) {
                                      var t = this.has(e) && delete this.__data__[e];
                                      return (this.size -= t ? 1 : 0), t;
                                  }),
                                  (Vn.prototype.get = function (e) {
                                      var t = this.__data__;
                                      if (An) {
                                          var n = t[e];
                                          return n === s ? i : n;
                                      }
                                      return Le.call(t, e) ? t[e] : i;
                                  }),
                                  (Vn.prototype.has = function (e) {
                                      var t = this.__data__;
                                      return An ? t[e] !== i : Le.call(t, e);
                                  }),
                                  (Vn.prototype.set = function (e, t) {
                                      var n = this.__data__;
                                      return (this.size += this.has(e) ? 0 : 1), (n[e] = An && t === i ? s : t), this;
                                  }),
                                  (Wn.prototype.clear = function () {
                                      (this.__data__ = []), (this.size = 0);
                                  }),
                                  (Wn.prototype.delete = function (e) {
                                      var t = this.__data__,
                                          n = er(t, e);
                                      return !(n < 0 || (n == t.length - 1 ? t.pop() : Xe.call(t, n, 1), --this.size, 0));
                                  }),
                                  (Wn.prototype.get = function (e) {
                                      var t = this.__data__,
                                          n = er(t, e);
                                      return n < 0 ? i : t[n][1];
                                  }),
                                  (Wn.prototype.has = function (e) {
                                      return er(this.__data__, e) > -1;
                                  }),
                                  (Wn.prototype.set = function (e, t) {
                                      var n = this.__data__,
                                          r = er(n, e);
                                      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
                                  }),
                                  (Bn.prototype.clear = function () {
                                      (this.size = 0), (this.__data__ = { hash: new Vn(), map: new (Sn || Wn)(), string: new Vn() });
                                  }),
                                  (Bn.prototype.delete = function (e) {
                                      var t = so(this, e).delete(e);
                                      return (this.size -= t ? 1 : 0), t;
                                  }),
                                  (Bn.prototype.get = function (e) {
                                      return so(this, e).get(e);
                                  }),
                                  (Bn.prototype.has = function (e) {
                                      return so(this, e).has(e);
                                  }),
                                  (Bn.prototype.set = function (e, t) {
                                      var n = so(this, e),
                                          r = n.size;
                                      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
                                  }),
                                  (Un.prototype.add = Un.prototype.push = function (e) {
                                      return this.__data__.set(e, s), this;
                                  }),
                                  (Un.prototype.has = function (e) {
                                      return this.__data__.has(e);
                                  }),
                                  (Xn.prototype.clear = function () {
                                      (this.__data__ = new Wn()), (this.size = 0);
                                  }),
                                  (Xn.prototype.delete = function (e) {
                                      var t = this.__data__,
                                          n = t.delete(e);
                                      return (this.size = t.size), n;
                                  }),
                                  (Xn.prototype.get = function (e) {
                                      return this.__data__.get(e);
                                  }),
                                  (Xn.prototype.has = function (e) {
                                      return this.__data__.has(e);
                                  }),
                                  (Xn.prototype.set = function (e, t) {
                                      var n = this.__data__;
                                      if (n instanceof Wn) {
                                          var r = n.__data__;
                                          if (!Sn || r.length < 199) return r.push([e, t]), (this.size = ++n.size), this;
                                          n = this.__data__ = new Bn(r);
                                      }
                                      return n.set(e, t), (this.size = n.size), this;
                                  });
                              var cr = ji(mr),
                                  fr = ji(br, !0);
                              function pr(e, t) {
                                  var n = !0;
                                  return (
                                      cr(e, function (e, r, i) {
                                          return (n = !!t(e, r, i));
                                      }),
                                      n
                                  );
                              }
                              function dr(e, t, n) {
                                  for (var r = -1, o = e.length; ++r < o; ) {
                                      var s = e[r],
                                          a = t(s);
                                      if (null != a && (l === i ? a == a && !aa(a) : n(a, l)))
                                          var l = a,
                                              u = s;
                                  }
                                  return u;
                              }
                              function hr(e, t) {
                                  var n = [];
                                  return (
                                      cr(e, function (e, r, i) {
                                          t(e, r, i) && n.push(e);
                                      }),
                                      n
                                  );
                              }
                              function gr(e, t, n, r, i) {
                                  var o = -1,
                                      s = e.length;
                                  for (n || (n = go), i || (i = []); ++o < s; ) {
                                      var a = e[o];
                                      t > 0 && n(a) ? (t > 1 ? gr(a, t - 1, n, r, i) : Ot(i, a)) : r || (i[i.length] = a);
                                  }
                                  return i;
                              }
                              var vr = Pi(),
                                  yr = Pi(!0);
                              function mr(e, t) {
                                  return e && vr(e, t, ja);
                              }
                              function br(e, t) {
                                  return e && yr(e, t, ja);
                              }
                              function wr(e, t) {
                                  return $t(t, function (t) {
                                      return Qs(e[t]);
                                  });
                              }
                              function xr(e, t) {
                                  for (var n = 0, r = (t = vi(t, e)).length; null != e && n < r; ) e = e[No(t[n++])];
                                  return n && n == r ? e : i;
                              }
                              function kr(e, t, n) {
                                  var r = t(e);
                                  return Vs(e) ? r : Ot(r, n(e));
                              }
                              function Sr(e) {
                                  return null == e
                                      ? e === i
                                          ? "[object Undefined]"
                                          : "[object Null]"
                                      : Je && Je in Te(e)
                                      ? (function (e) {
                                            var t = Le.call(e, Je),
                                                n = e[Je];
                                            try {
                                                e[Je] = i;
                                                var r = !0;
                                            } catch (e) {}
                                            var o = Ne.call(e);
                                            return r && (t ? (e[Je] = n) : delete e[Je]), o;
                                        })(e)
                                      : (function (e) {
                                            return Ne.call(e);
                                        })(e);
                              }
                              function Tr(e, t) {
                                  return e > t;
                              }
                              function _r(e, t) {
                                  return null != e && Le.call(e, t);
                              }
                              function Cr(e, t) {
                                  return null != e && t in Te(e);
                              }
                              function Ar(e, t, n) {
                                  for (var o = n ? jt : Et, s = e[0].length, a = e.length, l = a, u = r(a), c = 1 / 0, f = []; l--; ) {
                                      var p = e[l];
                                      l && t && (p = Pt(p, Gt(t))), (c = yn(p.length, c)), (u[l] = !n && (t || (s >= 120 && p.length >= 120)) ? new Un(l && p) : i);
                                  }
                                  p = e[0];
                                  var d = -1,
                                      h = u[0];
                                  e: for (; ++d < s && f.length < c; ) {
                                      var g = p[d],
                                          v = t ? t(g) : g;
                                      if (((g = n || 0 !== g ? g : 0), !(h ? Zt(h, v) : o(f, v, n)))) {
                                          for (l = a; --l; ) {
                                              var y = u[l];
                                              if (!(y ? Zt(y, v) : o(e[l], v, n))) continue e;
                                          }
                                          h && h.push(v), f.push(g);
                                      }
                                  }
                                  return f;
                              }
                              function $r(e, t, n) {
                                  var r = null == (e = _o(e, (t = vi(t, e)))) ? e : e[No(Go(t))];
                                  return null == r ? i : St(r, e, n);
                              }
                              function Er(e) {
                                  return ea(e) && Sr(e) == g;
                              }
                              function jr(e, t, n, r, o) {
                                  return (
                                      e === t ||
                                      (null == e || null == t || (!ea(e) && !ea(t))
                                          ? e != e && t != t
                                          : (function (e, t, n, r, o, s) {
                                                var a = Vs(e),
                                                    l = Vs(t),
                                                    u = a ? v : fo(e),
                                                    c = l ? v : fo(t),
                                                    f = (u = u == g ? T : u) == T,
                                                    p = (c = c == g ? T : c) == T,
                                                    d = u == c;
                                                if (d && Xs(e)) {
                                                    if (!Xs(t)) return !1;
                                                    (a = !0), (f = !1);
                                                }
                                                if (d && !f)
                                                    return (
                                                        s || (s = new Xn()),
                                                        a || la(e)
                                                            ? Ji(e, t, n, r, o, s)
                                                            : (function (e, t, n, r, i, o, s) {
                                                                  switch (n) {
                                                                      case O:
                                                                          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                                          (e = e.buffer), (t = t.buffer);
                                                                      case P:
                                                                          return !(e.byteLength != t.byteLength || !o(new Fe(e), new Fe(t)));
                                                                      case y:
                                                                      case m:
                                                                      case S:
                                                                          return zs(+e, +t);
                                                                      case b:
                                                                          return e.name == t.name && e.message == t.message;
                                                                      case C:
                                                                      case $:
                                                                          return e == t + "";
                                                                      case k:
                                                                          var a = on;
                                                                      case A:
                                                                          var l = 1 & r;
                                                                          if ((a || (a = ln), e.size != t.size && !l)) return !1;
                                                                          var u = s.get(e);
                                                                          if (u) return u == t;
                                                                          (r |= 2), s.set(e, t);
                                                                          var c = Ji(a(e), a(t), r, i, o, s);
                                                                          return s.delete(e), c;
                                                                      case E:
                                                                          if (Nn) return Nn.call(e) == Nn.call(t);
                                                                  }
                                                                  return !1;
                                                              })(e, t, u, n, r, o, s)
                                                    );
                                                if (!(1 & n)) {
                                                    var h = f && Le.call(e, "__wrapped__"),
                                                        w = p && Le.call(t, "__wrapped__");
                                                    if (h || w) {
                                                        var x = h ? e.value() : e,
                                                            _ = w ? t.value() : t;
                                                        return s || (s = new Xn()), o(x, _, n, r, s);
                                                    }
                                                }
                                                return (
                                                    !!d &&
                                                    (s || (s = new Xn()),
                                                    (function (e, t, n, r, o, s) {
                                                        var a = 1 & n,
                                                            l = eo(e),
                                                            u = l.length;
                                                        if (u != eo(t).length && !a) return !1;
                                                        for (var c = u; c--; ) {
                                                            var f = l[c];
                                                            if (!(a ? f in t : Le.call(t, f))) return !1;
                                                        }
                                                        var p = s.get(e),
                                                            d = s.get(t);
                                                        if (p && d) return p == t && d == e;
                                                        var h = !0;
                                                        s.set(e, t), s.set(t, e);
                                                        for (var g = a; ++c < u; ) {
                                                            var v = e[(f = l[c])],
                                                                y = t[f];
                                                            if (r) var m = a ? r(y, v, f, t, e, s) : r(v, y, f, e, t, s);
                                                            if (!(m === i ? v === y || o(v, y, n, r, s) : m)) {
                                                                h = !1;
                                                                break;
                                                            }
                                                            g || (g = "constructor" == f);
                                                        }
                                                        if (h && !g) {
                                                            var b = e.constructor,
                                                                w = t.constructor;
                                                            b == w || !("constructor" in e) || !("constructor" in t) || ("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) || (h = !1);
                                                        }
                                                        return s.delete(e), s.delete(t), h;
                                                    })(e, t, n, r, o, s))
                                                );
                                            })(e, t, n, r, jr, o))
                                  );
                              }
                              function Pr(e, t, n, r) {
                                  var o = n.length,
                                      s = o,
                                      a = !r;
                                  if (null == e) return !s;
                                  for (e = Te(e); o--; ) {
                                      var l = n[o];
                                      if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
                                  }
                                  for (; ++o < s; ) {
                                      var u = (l = n[o])[0],
                                          c = e[u],
                                          f = l[1];
                                      if (a && l[2]) {
                                          if (c === i && !(u in e)) return !1;
                                      } else {
                                          var p = new Xn();
                                          if (r) var d = r(c, f, u, e, t, p);
                                          if (!(d === i ? jr(f, c, 3, r, p) : d)) return !1;
                                      }
                                  }
                                  return !0;
                              }
                              function Or(e) {
                                  return !(!Ks(e) || ((t = e), De && De in t)) && (Qs(e) ? ze : ge).test(Ro(e));
                                  var t;
                              }
                              function Lr(e) {
                                  return "function" == typeof e ? e : null == e ? nl : "object" == typeof e ? (Vs(e) ? qr(e[0], e[1]) : Rr(e)) : fl(e);
                              }
                              function Hr(e) {
                                  if (!xo(e)) return gn(e);
                                  var t = [];
                                  for (var n in Te(e)) Le.call(e, n) && "constructor" != n && t.push(n);
                                  return t;
                              }
                              function Dr(e, t) {
                                  return e < t;
                              }
                              function Nr(e, t) {
                                  var n = -1,
                                      i = Bs(e) ? r(e.length) : [];
                                  return (
                                      cr(e, function (e, r, o) {
                                          i[++n] = t(e, r, o);
                                      }),
                                      i
                                  );
                              }
                              function Rr(e) {
                                  var t = ao(e);
                                  return 1 == t.length && t[0][2]
                                      ? So(t[0][0], t[0][1])
                                      : function (n) {
                                            return n === e || Pr(n, e, t);
                                        };
                              }
                              function qr(e, t) {
                                  return mo(e) && ko(t)
                                      ? So(No(e), t)
                                      : function (n) {
                                            var r = _a(n, e);
                                            return r === i && r === t ? Ca(n, e) : jr(t, r, 3);
                                        };
                              }
                              function zr(e, t, n, r, o) {
                                  e !== t &&
                                      vr(
                                          t,
                                          function (s, a) {
                                              if ((o || (o = new Xn()), Ks(s)))
                                                  !(function (e, t, n, r, o, s, a) {
                                                      var l = Co(e, n),
                                                          u = Co(t, n),
                                                          c = a.get(u);
                                                      if (c) Jn(e, n, c);
                                                      else {
                                                          var f = s ? s(l, u, n + "", e, t, a) : i,
                                                              p = f === i;
                                                          if (p) {
                                                              var d = Vs(u),
                                                                  h = !d && Xs(u),
                                                                  g = !d && !h && la(u);
                                                              (f = u),
                                                                  d || h || g
                                                                      ? Vs(l)
                                                                          ? (f = l)
                                                                          : Us(l)
                                                                          ? (f = Ci(l))
                                                                          : h
                                                                          ? ((p = !1), (f = wi(u, !0)))
                                                                          : g
                                                                          ? ((p = !1), (f = ki(u, !0)))
                                                                          : (f = [])
                                                                      : ra(u) || Fs(u)
                                                                      ? ((f = l), Fs(l) ? (f = va(l)) : (Ks(l) && !Qs(l)) || (f = ho(u)))
                                                                      : (p = !1);
                                                          }
                                                          p && (a.set(u, f), o(f, u, r, s, a), a.delete(u)), Jn(e, n, f);
                                                      }
                                                  })(e, t, a, n, zr, r, o);
                                              else {
                                                  var l = r ? r(Co(e, a), s, a + "", e, t, o) : i;
                                                  l === i && (l = s), Jn(e, a, l);
                                              }
                                          },
                                          Pa
                                      );
                              }
                              function Mr(e, t) {
                                  var n = e.length;
                                  if (n) return vo((t += t < 0 ? n : 0), n) ? e[t] : i;
                              }
                              function Ir(e, t, n) {
                                  t = t.length
                                      ? Pt(t, function (e) {
                                            return Vs(e)
                                                ? function (t) {
                                                      return xr(t, 1 === e.length ? e[0] : e);
                                                  }
                                                : e;
                                        })
                                      : [nl];
                                  var r = -1;
                                  t = Pt(t, Gt(oo()));
                                  var i = Nr(e, function (e, n, i) {
                                      var o = Pt(t, function (t) {
                                          return t(e);
                                      });
                                      return { criteria: o, index: ++r, value: e };
                                  });
                                  return (function (e, t) {
                                      var r = e.length;
                                      for (
                                          e.sort(function (e, t) {
                                              return (function (e, t, n) {
                                                  for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, a = n.length; ++r < s; ) {
                                                      var l = Si(i[r], o[r]);
                                                      if (l) return r >= a ? l : l * ("desc" == n[r] ? -1 : 1);
                                                  }
                                                  return e.index - t.index;
                                              })(e, t, n);
                                          });
                                          r--;

                                      )
                                          e[r] = e[r].value;
                                      return e;
                                  })(i);
                              }
                              function Fr(e, t, n) {
                                  for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                                      var s = t[r],
                                          a = xr(e, s);
                                      n(a, s) && Qr(o, vi(s, e), a);
                                  }
                                  return o;
                              }
                              function Vr(e, t, n, r) {
                                  var i = r ? Mt : zt,
                                      o = -1,
                                      s = t.length,
                                      a = e;
                                  for (e === t && (t = Ci(t)), n && (a = Pt(e, Gt(n))); ++o < s; ) for (var l = 0, u = t[o], c = n ? n(u) : u; (l = i(a, c, l, r)) > -1; ) a !== e && Xe.call(a, l, 1), Xe.call(e, l, 1);
                                  return e;
                              }
                              function Wr(e, t) {
                                  for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                                      var i = t[n];
                                      if (n == r || i !== o) {
                                          var o = i;
                                          vo(i) ? Xe.call(e, i, 1) : li(e, i);
                                      }
                                  }
                                  return e;
                              }
                              function Br(e, t) {
                                  return e + dt(wn() * (t - e + 1));
                              }
                              function Ur(e, t) {
                                  var n = "";
                                  if (!e || t < 1 || t > f) return n;
                                  do {
                                      t % 2 && (n += e), (t = dt(t / 2)) && (e += e);
                                  } while (t);
                                  return n;
                              }
                              function Xr(e, t) {
                                  return Eo(To(e, t, nl), e + "");
                              }
                              function Yr(e) {
                                  return Gn(za(e));
                              }
                              function Gr(e, t) {
                                  var n = za(e);
                                  return Oo(n, or(t, 0, n.length));
                              }
                              function Qr(e, t, n, r) {
                                  if (!Ks(e)) return e;
                                  for (var o = -1, s = (t = vi(t, e)).length, a = s - 1, l = e; null != l && ++o < s; ) {
                                      var u = No(t[o]),
                                          c = n;
                                      if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
                                      if (o != a) {
                                          var f = l[u];
                                          (c = r ? r(f, u, l) : i) === i && (c = Ks(f) ? f : vo(t[o + 1]) ? [] : {});
                                      }
                                      Kn(l, u, c), (l = l[u]);
                                  }
                                  return e;
                              }
                              var Zr = $n
                                      ? function (e, t) {
                                            return $n.set(e, t), e;
                                        }
                                      : nl,
                                  Jr = et
                                      ? function (e, t) {
                                            return et(e, "toString", { configurable: !0, enumerable: !1, value: Ka(t), writable: !0 });
                                        }
                                      : nl;
                              function Kr(e) {
                                  return Oo(za(e));
                              }
                              function ei(e, t, n) {
                                  var i = -1,
                                      o = e.length;
                                  t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), (o = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
                                  for (var s = r(o); ++i < o; ) s[i] = e[i + t];
                                  return s;
                              }
                              function ti(e, t) {
                                  var n;
                                  return (
                                      cr(e, function (e, r, i) {
                                          return !(n = t(e, r, i));
                                      }),
                                      !!n
                                  );
                              }
                              function ni(e, t, n) {
                                  var r = 0,
                                      i = null == e ? r : e.length;
                                  if ("number" == typeof t && t == t && i <= 2147483647) {
                                      for (; r < i; ) {
                                          var o = (r + i) >>> 1,
                                              s = e[o];
                                          null !== s && !aa(s) && (n ? s <= t : s < t) ? (r = o + 1) : (i = o);
                                      }
                                      return i;
                                  }
                                  return ri(e, t, nl, n);
                              }
                              function ri(e, t, n, r) {
                                  var o = 0,
                                      s = null == e ? 0 : e.length;
                                  if (0 === s) return 0;
                                  for (var a = (t = n(t)) != t, l = null === t, u = aa(t), c = t === i; o < s; ) {
                                      var f = dt((o + s) / 2),
                                          p = n(e[f]),
                                          d = p !== i,
                                          h = null === p,
                                          g = p == p,
                                          v = aa(p);
                                      if (a) var y = r || g;
                                      else y = c ? g && (r || d) : l ? g && d && (r || !h) : u ? g && d && !h && (r || !v) : !h && !v && (r ? p <= t : p < t);
                                      y ? (o = f + 1) : (s = f);
                                  }
                                  return yn(s, 4294967294);
                              }
                              function ii(e, t) {
                                  for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                                      var s = e[n],
                                          a = t ? t(s) : s;
                                      if (!n || !zs(a, l)) {
                                          var l = a;
                                          o[i++] = 0 === s ? 0 : s;
                                      }
                                  }
                                  return o;
                              }
                              function oi(e) {
                                  return "number" == typeof e ? e : aa(e) ? p : +e;
                              }
                              function si(e) {
                                  if ("string" == typeof e) return e;
                                  if (Vs(e)) return Pt(e, si) + "";
                                  if (aa(e)) return Rn ? Rn.call(e) : "";
                                  var t = e + "";
                                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                              }
                              function ai(e, t, n) {
                                  var r = -1,
                                      i = Et,
                                      o = e.length,
                                      s = !0,
                                      a = [],
                                      l = a;
                                  if (n) (s = !1), (i = jt);
                                  else if (o >= 200) {
                                      var u = t ? null : Ui(e);
                                      if (u) return ln(u);
                                      (s = !1), (i = Zt), (l = new Un());
                                  } else l = t ? [] : a;
                                  e: for (; ++r < o; ) {
                                      var c = e[r],
                                          f = t ? t(c) : c;
                                      if (((c = n || 0 !== c ? c : 0), s && f == f)) {
                                          for (var p = l.length; p--; ) if (l[p] === f) continue e;
                                          t && l.push(f), a.push(c);
                                      } else i(l, f, n) || (l !== a && l.push(f), a.push(c));
                                  }
                                  return a;
                              }
                              function li(e, t) {
                                  return null == (e = _o(e, (t = vi(t, e)))) || delete e[No(Go(t))];
                              }
                              function ui(e, t, n, r) {
                                  return Qr(e, t, n(xr(e, t)), r);
                              }
                              function ci(e, t, n, r) {
                                  for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); );
                                  return n ? ei(e, r ? 0 : o, r ? o + 1 : i) : ei(e, r ? o + 1 : 0, r ? i : o);
                              }
                              function fi(e, t) {
                                  var n = e;
                                  return (
                                      n instanceof Fn && (n = n.value()),
                                      Lt(
                                          t,
                                          function (e, t) {
                                              return t.func.apply(t.thisArg, Ot([e], t.args));
                                          },
                                          n
                                      )
                                  );
                              }
                              function pi(e, t, n) {
                                  var i = e.length;
                                  if (i < 2) return i ? ai(e[0]) : [];
                                  for (var o = -1, s = r(i); ++o < i; ) for (var a = e[o], l = -1; ++l < i; ) l != o && (s[o] = ur(s[o] || a, e[l], t, n));
                                  return ai(gr(s, 1), t, n);
                              }
                              function di(e, t, n) {
                                  for (var r = -1, o = e.length, s = t.length, a = {}; ++r < o; ) {
                                      var l = r < s ? t[r] : i;
                                      n(a, e[r], l);
                                  }
                                  return a;
                              }
                              function hi(e) {
                                  return Us(e) ? e : [];
                              }
                              function gi(e) {
                                  return "function" == typeof e ? e : nl;
                              }
                              function vi(e, t) {
                                  return Vs(e) ? e : mo(e, t) ? [e] : Do(ya(e));
                              }
                              var yi = Xr;
                              function mi(e, t, n) {
                                  var r = e.length;
                                  return (n = n === i ? r : n), !t && n >= r ? e : ei(e, t, n);
                              }
                              var bi =
                                  st ||
                                  function (e) {
                                      return ft.clearTimeout(e);
                                  };
                              function wi(e, t) {
                                  if (t) return e.slice();
                                  var n = e.length,
                                      r = Ve ? Ve(n) : new e.constructor(n);
                                  return e.copy(r), r;
                              }
                              function xi(e) {
                                  var t = new e.constructor(e.byteLength);
                                  return new Fe(t).set(new Fe(e)), t;
                              }
                              function ki(e, t) {
                                  var n = t ? xi(e.buffer) : e.buffer;
                                  return new e.constructor(n, e.byteOffset, e.length);
                              }
                              function Si(e, t) {
                                  if (e !== t) {
                                      var n = e !== i,
                                          r = null === e,
                                          o = e == e,
                                          s = aa(e),
                                          a = t !== i,
                                          l = null === t,
                                          u = t == t,
                                          c = aa(t);
                                      if ((!l && !c && !s && e > t) || (s && a && u && !l && !c) || (r && a && u) || (!n && u) || !o) return 1;
                                      if ((!r && !s && !c && e < t) || (c && n && o && !r && !s) || (l && n && o) || (!a && o) || !u) return -1;
                                  }
                                  return 0;
                              }
                              function Ti(e, t, n, i) {
                                  for (var o = -1, s = e.length, a = n.length, l = -1, u = t.length, c = vn(s - a, 0), f = r(u + c), p = !i; ++l < u; ) f[l] = t[l];
                                  for (; ++o < a; ) (p || o < s) && (f[n[o]] = e[o]);
                                  for (; c--; ) f[l++] = e[o++];
                                  return f;
                              }
                              function _i(e, t, n, i) {
                                  for (var o = -1, s = e.length, a = -1, l = n.length, u = -1, c = t.length, f = vn(s - l, 0), p = r(f + c), d = !i; ++o < f; ) p[o] = e[o];
                                  for (var h = o; ++u < c; ) p[h + u] = t[u];
                                  for (; ++a < l; ) (d || o < s) && (p[h + n[a]] = e[o++]);
                                  return p;
                              }
                              function Ci(e, t) {
                                  var n = -1,
                                      i = e.length;
                                  for (t || (t = r(i)); ++n < i; ) t[n] = e[n];
                                  return t;
                              }
                              function Ai(e, t, n, r) {
                                  var o = !n;
                                  n || (n = {});
                                  for (var s = -1, a = t.length; ++s < a; ) {
                                      var l = t[s],
                                          u = r ? r(n[l], e[l], l, n, e) : i;
                                      u === i && (u = e[l]), o ? rr(n, l, u) : Kn(n, l, u);
                                  }
                                  return n;
                              }
                              function $i(e, t) {
                                  return function (n, r) {
                                      var i = Vs(n) ? Tt : tr,
                                          o = t ? t() : {};
                                      return i(n, e, oo(r, 2), o);
                                  };
                              }
                              function Ei(e) {
                                  return Xr(function (t, n) {
                                      var r = -1,
                                          o = n.length,
                                          s = o > 1 ? n[o - 1] : i,
                                          a = o > 2 ? n[2] : i;
                                      for (s = e.length > 3 && "function" == typeof s ? (o--, s) : i, a && yo(n[0], n[1], a) && ((s = o < 3 ? i : s), (o = 1)), t = Te(t); ++r < o; ) {
                                          var l = n[r];
                                          l && e(t, l, r, s);
                                      }
                                      return t;
                                  });
                              }
                              function ji(e, t) {
                                  return function (n, r) {
                                      if (null == n) return n;
                                      if (!Bs(n)) return e(n, r);
                                      for (var i = n.length, o = t ? i : -1, s = Te(n); (t ? o-- : ++o < i) && !1 !== r(s[o], o, s); );
                                      return n;
                                  };
                              }
                              function Pi(e) {
                                  return function (t, n, r) {
                                      for (var i = -1, o = Te(t), s = r(t), a = s.length; a--; ) {
                                          var l = s[e ? a : ++i];
                                          if (!1 === n(o[l], l, o)) break;
                                      }
                                      return t;
                                  };
                              }
                              function Oi(e) {
                                  return function (t) {
                                      var n = rn((t = ya(t))) ? fn(t) : i,
                                          r = n ? n[0] : t.charAt(0),
                                          o = n ? mi(n, 1).join("") : t.slice(1);
                                      return r[e]() + o;
                                  };
                              }
                              function Li(e) {
                                  return function (t) {
                                      return Lt(Qa(Fa(t).replace(Qe, "")), e, "");
                                  };
                              }
                              function Hi(e) {
                                  return function () {
                                      var t = arguments;
                                      switch (t.length) {
                                          case 0:
                                              return new e();
                                          case 1:
                                              return new e(t[0]);
                                          case 2:
                                              return new e(t[0], t[1]);
                                          case 3:
                                              return new e(t[0], t[1], t[2]);
                                          case 4:
                                              return new e(t[0], t[1], t[2], t[3]);
                                          case 5:
                                              return new e(t[0], t[1], t[2], t[3], t[4]);
                                          case 6:
                                              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                          case 7:
                                              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                                      }
                                      var n = zn(e.prototype),
                                          r = e.apply(n, t);
                                      return Ks(r) ? r : n;
                                  };
                              }
                              function Di(e) {
                                  return function (t, n, r) {
                                      var o = Te(t);
                                      if (!Bs(t)) {
                                          var s = oo(n, 3);
                                          (t = ja(t)),
                                              (n = function (e) {
                                                  return s(o[e], e, o);
                                              });
                                      }
                                      var a = e(t, n, r);
                                      return a > -1 ? o[s ? t[a] : a] : i;
                                  };
                              }
                              function Ni(e) {
                                  return Ki(function (t) {
                                      var n = t.length,
                                          r = n,
                                          s = In.prototype.thru;
                                      for (e && t.reverse(); r--; ) {
                                          var a = t[r];
                                          if ("function" != typeof a) throw new Ae(o);
                                          if (s && !l && "wrapper" == ro(a)) var l = new In([], !0);
                                      }
                                      for (r = l ? r : n; ++r < n; ) {
                                          var u = ro((a = t[r])),
                                              c = "wrapper" == u ? no(a) : i;
                                          l = c && bo(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9] ? l[ro(c[0])].apply(l, c[3]) : 1 == a.length && bo(a) ? l[u]() : l.thru(a);
                                      }
                                      return function () {
                                          var e = arguments,
                                              r = e[0];
                                          if (l && 1 == e.length && Vs(r)) return l.plant(r).value();
                                          for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; ) o = t[i].call(this, o);
                                          return o;
                                      };
                                  });
                              }
                              function Ri(e, t, n, o, s, a, l, c, f, p) {
                                  var d = t & u,
                                      h = 1 & t,
                                      g = 2 & t,
                                      v = 24 & t,
                                      y = 512 & t,
                                      m = g ? i : Hi(e);
                                  return function u() {
                                      for (var b = arguments.length, w = r(b), x = b; x--; ) w[x] = arguments[x];
                                      if (v)
                                          var k = io(u),
                                              S = (function (e, t) {
                                                  for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                                                  return r;
                                              })(w, k);
                                      if ((o && (w = Ti(w, o, s, v)), a && (w = _i(w, a, l, v)), (b -= S), v && b < p)) {
                                          var T = an(w, k);
                                          return Wi(e, t, Ri, u.placeholder, n, w, T, c, f, p - b);
                                      }
                                      var _ = h ? n : this,
                                          C = g ? _[e] : e;
                                      return (
                                          (b = w.length),
                                          c
                                              ? (w = (function (e, t) {
                                                    for (var n = e.length, r = yn(t.length, n), o = Ci(e); r--; ) {
                                                        var s = t[r];
                                                        e[r] = vo(s, n) ? o[s] : i;
                                                    }
                                                    return e;
                                                })(w, c))
                                              : y && b > 1 && w.reverse(),
                                          d && f < b && (w.length = f),
                                          this && this !== ft && this instanceof u && (C = m || Hi(C)),
                                          C.apply(_, w)
                                      );
                                  };
                              }
                              function qi(e, t) {
                                  return function (n, r) {
                                      return (function (e, t, n, r) {
                                          return (
                                              mr(e, function (e, i, o) {
                                                  t(r, n(e), i, o);
                                              }),
                                              r
                                          );
                                      })(n, e, t(r), {});
                                  };
                              }
                              function zi(e, t) {
                                  return function (n, r) {
                                      var o;
                                      if (n === i && r === i) return t;
                                      if ((n !== i && (o = n), r !== i)) {
                                          if (o === i) return r;
                                          "string" == typeof n || "string" == typeof r ? ((n = si(n)), (r = si(r))) : ((n = oi(n)), (r = oi(r))), (o = e(n, r));
                                      }
                                      return o;
                                  };
                              }
                              function Mi(e) {
                                  return Ki(function (t) {
                                      return (
                                          (t = Pt(t, Gt(oo()))),
                                          Xr(function (n) {
                                              var r = this;
                                              return e(t, function (e) {
                                                  return St(e, r, n);
                                              });
                                          })
                                      );
                                  });
                              }
                              function Ii(e, t) {
                                  var n = (t = t === i ? " " : si(t)).length;
                                  if (n < 2) return n ? Ur(t, e) : t;
                                  var r = Ur(t, pt(e / cn(t)));
                                  return rn(t) ? mi(fn(r), 0, e).join("") : r.slice(0, e);
                              }
                              function Fi(e) {
                                  return function (t, n, o) {
                                      return (
                                          o && "number" != typeof o && yo(t, n, o) && (n = o = i),
                                          (t = pa(t)),
                                          n === i ? ((n = t), (t = 0)) : (n = pa(n)),
                                          (function (e, t, n, i) {
                                              for (var o = -1, s = vn(pt((t - e) / (n || 1)), 0), a = r(s); s--; ) (a[i ? s : ++o] = e), (e += n);
                                              return a;
                                          })(t, n, (o = o === i ? (t < n ? 1 : -1) : pa(o)), e)
                                      );
                                  };
                              }
                              function Vi(e) {
                                  return function (t, n) {
                                      return ("string" == typeof t && "string" == typeof n) || ((t = ga(t)), (n = ga(n))), e(t, n);
                                  };
                              }
                              function Wi(e, t, n, r, o, s, a, u, c, f) {
                                  var p = 8 & t;
                                  (t |= p ? l : 64), 4 & (t &= ~(p ? 64 : l)) || (t &= -4);
                                  var d = [e, t, o, p ? s : i, p ? a : i, p ? i : s, p ? i : a, u, c, f],
                                      h = n.apply(i, d);
                                  return bo(e) && Ao(h, d), (h.placeholder = r), jo(h, e, t);
                              }
                              function Bi(e) {
                                  var t = Se[e];
                                  return function (e, n) {
                                      if (((e = ga(e)), (n = null == n ? 0 : yn(da(n), 292)) && Nt(e))) {
                                          var r = (ya(e) + "e").split("e");
                                          return +((r = (ya(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n));
                                      }
                                      return t(e);
                                  };
                              }
                              var Ui =
                                  _n && 1 / ln(new _n([, -0]))[1] == c
                                      ? function (e) {
                                            return new _n(e);
                                        }
                                      : al;
                              function Xi(e) {
                                  return function (t) {
                                      var n = fo(t);
                                      return n == k
                                          ? on(t)
                                          : n == A
                                          ? un(t)
                                          : (function (e, t) {
                                                return Pt(t, function (t) {
                                                    return [t, e[t]];
                                                });
                                            })(t, e(t));
                                  };
                              }
                              function Yi(e, t, n, s, c, f, p, d) {
                                  var h = 2 & t;
                                  if (!h && "function" != typeof e) throw new Ae(o);
                                  var g = s ? s.length : 0;
                                  if ((g || ((t &= -97), (s = c = i)), (p = p === i ? p : vn(da(p), 0)), (d = d === i ? d : da(d)), (g -= c ? c.length : 0), 64 & t)) {
                                      var v = s,
                                          y = c;
                                      s = c = i;
                                  }
                                  var m = h ? i : no(e),
                                      b = [e, t, n, s, c, v, y, f, p, d];
                                  if (
                                      (m &&
                                          (function (e, t) {
                                              var n = e[1],
                                                  r = t[1],
                                                  i = n | r,
                                                  o = i < 131,
                                                  s = (r == u && 8 == n) || (r == u && 256 == n && e[7].length <= t[8]) || (384 == r && t[7].length <= t[8] && 8 == n);
                                              if (!o && !s) return e;
                                              1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                                              var l = t[3];
                                              if (l) {
                                                  var c = e[3];
                                                  (e[3] = c ? Ti(c, l, t[4]) : l), (e[4] = c ? an(e[3], a) : t[4]);
                                              }
                                              (l = t[5]) && ((c = e[5]), (e[5] = c ? _i(c, l, t[6]) : l), (e[6] = c ? an(e[5], a) : t[6])),
                                                  (l = t[7]) && (e[7] = l),
                                                  r & u && (e[8] = null == e[8] ? t[8] : yn(e[8], t[8])),
                                                  null == e[9] && (e[9] = t[9]),
                                                  (e[0] = t[0]),
                                                  (e[1] = i);
                                          })(b, m),
                                      (e = b[0]),
                                      (t = b[1]),
                                      (n = b[2]),
                                      (s = b[3]),
                                      (c = b[4]),
                                      !(d = b[9] = b[9] === i ? (h ? 0 : e.length) : vn(b[9] - g, 0)) && 24 & t && (t &= -25),
                                      t && 1 != t)
                                  )
                                      w =
                                          8 == t || 16 == t
                                              ? (function (e, t, n) {
                                                    var o = Hi(e);
                                                    return function s() {
                                                        for (var a = arguments.length, l = r(a), u = a, c = io(s); u--; ) l[u] = arguments[u];
                                                        var f = a < 3 && l[0] !== c && l[a - 1] !== c ? [] : an(l, c);
                                                        return (a -= f.length) < n ? Wi(e, t, Ri, s.placeholder, i, l, f, i, i, n - a) : St(this && this !== ft && this instanceof s ? o : e, this, l);
                                                    };
                                                })(e, t, d)
                                              : (t != l && 33 != t) || c.length
                                              ? Ri.apply(i, b)
                                              : (function (e, t, n, i) {
                                                    var o = 1 & t,
                                                        s = Hi(e);
                                                    return function t() {
                                                        for (var a = -1, l = arguments.length, u = -1, c = i.length, f = r(c + l), p = this && this !== ft && this instanceof t ? s : e; ++u < c; ) f[u] = i[u];
                                                        for (; l--; ) f[u++] = arguments[++a];
                                                        return St(p, o ? n : this, f);
                                                    };
                                                })(e, t, n, s);
                                  else
                                      var w = (function (e, t, n) {
                                          var r = 1 & t,
                                              i = Hi(e);
                                          return function t() {
                                              return (this && this !== ft && this instanceof t ? i : e).apply(r ? n : this, arguments);
                                          };
                                      })(e, t, n);
                                  return jo((m ? Zr : Ao)(w, b), e, t);
                              }
                              function Gi(e, t, n, r) {
                                  return e === i || (zs(e, je[n]) && !Le.call(r, n)) ? t : e;
                              }
                              function Qi(e, t, n, r, o, s) {
                                  return Ks(e) && Ks(t) && (s.set(t, e), zr(e, t, i, Qi, s), s.delete(t)), e;
                              }
                              function Zi(e) {
                                  return ra(e) ? i : e;
                              }
                              function Ji(e, t, n, r, o, s) {
                                  var a = 1 & n,
                                      l = e.length,
                                      u = t.length;
                                  if (l != u && !(a && u > l)) return !1;
                                  var c = s.get(e),
                                      f = s.get(t);
                                  if (c && f) return c == t && f == e;
                                  var p = -1,
                                      d = !0,
                                      h = 2 & n ? new Un() : i;
                                  for (s.set(e, t), s.set(t, e); ++p < l; ) {
                                      var g = e[p],
                                          v = t[p];
                                      if (r) var y = a ? r(v, g, p, t, e, s) : r(g, v, p, e, t, s);
                                      if (y !== i) {
                                          if (y) continue;
                                          d = !1;
                                          break;
                                      }
                                      if (h) {
                                          if (
                                              !Dt(t, function (e, t) {
                                                  if (!Zt(h, t) && (g === e || o(g, e, n, r, s))) return h.push(t);
                                              })
                                          ) {
                                              d = !1;
                                              break;
                                          }
                                      } else if (g !== v && !o(g, v, n, r, s)) {
                                          d = !1;
                                          break;
                                      }
                                  }
                                  return s.delete(e), s.delete(t), d;
                              }
                              function Ki(e) {
                                  return Eo(To(e, i, Wo), e + "");
                              }
                              function eo(e) {
                                  return kr(e, ja, uo);
                              }
                              function to(e) {
                                  return kr(e, Pa, co);
                              }
                              var no = $n
                                  ? function (e) {
                                        return $n.get(e);
                                    }
                                  : al;
                              function ro(e) {
                                  for (var t = e.name + "", n = En[t], r = Le.call(En, t) ? n.length : 0; r--; ) {
                                      var i = n[r],
                                          o = i.func;
                                      if (null == o || o == e) return i.name;
                                  }
                                  return t;
                              }
                              function io(e) {
                                  return (Le.call(qn, "placeholder") ? qn : e).placeholder;
                              }
                              function oo() {
                                  var e = qn.iteratee || rl;
                                  return (e = e === rl ? Lr : e), arguments.length ? e(arguments[0], arguments[1]) : e;
                              }
                              function so(e, t) {
                                  var n,
                                      r,
                                      i = e.__data__;
                                  return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map;
                              }
                              function ao(e) {
                                  for (var t = ja(e), n = t.length; n--; ) {
                                      var r = t[n],
                                          i = e[r];
                                      t[n] = [r, i, ko(i)];
                                  }
                                  return t;
                              }
                              function lo(e, t) {
                                  var n = (function (e, t) {
                                      return null == e ? i : e[t];
                                  })(e, t);
                                  return Or(n) ? n : i;
                              }
                              var uo = gt
                                      ? function (e) {
                                            return null == e
                                                ? []
                                                : ((e = Te(e)),
                                                  $t(gt(e), function (t) {
                                                      return Ue.call(e, t);
                                                  }));
                                        }
                                      : hl,
                                  co = gt
                                      ? function (e) {
                                            for (var t = []; e; ) Ot(t, uo(e)), (e = We(e));
                                            return t;
                                        }
                                      : hl,
                                  fo = Sr;
                              function po(e, t, n) {
                                  for (var r = -1, i = (t = vi(t, e)).length, o = !1; ++r < i; ) {
                                      var s = No(t[r]);
                                      if (!(o = null != e && n(e, s))) break;
                                      e = e[s];
                                  }
                                  return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Js(i) && vo(s, i) && (Vs(e) || Fs(e));
                              }
                              function ho(e) {
                                  return "function" != typeof e.constructor || xo(e) ? {} : zn(We(e));
                              }
                              function go(e) {
                                  return Vs(e) || Fs(e) || !!(Ye && e && e[Ye]);
                              }
                              function vo(e, t) {
                                  var n = typeof e;
                                  return !!(t = null == t ? f : t) && ("number" == n || ("symbol" != n && ye.test(e))) && e > -1 && e % 1 == 0 && e < t;
                              }
                              function yo(e, t, n) {
                                  if (!Ks(n)) return !1;
                                  var r = typeof t;
                                  return !!("number" == r ? Bs(n) && vo(t, n.length) : "string" == r && t in n) && zs(n[t], e);
                              }
                              function mo(e, t) {
                                  if (Vs(e)) return !1;
                                  var n = typeof e;
                                  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !aa(e)) || K.test(e) || !J.test(e) || (null != t && e in Te(t));
                              }
                              function bo(e) {
                                  var t = ro(e),
                                      n = qn[t];
                                  if ("function" != typeof n || !(t in Fn.prototype)) return !1;
                                  if (e === n) return !0;
                                  var r = no(n);
                                  return !!r && e === r[0];
                              }
                              ((kn && fo(new kn(new ArrayBuffer(1))) != O) || (Sn && fo(new Sn()) != k) || (Tn && fo(Tn.resolve()) != _) || (_n && fo(new _n()) != A) || (Cn && fo(new Cn()) != j)) &&
                                  (fo = function (e) {
                                      var t = Sr(e),
                                          n = t == T ? e.constructor : i,
                                          r = n ? Ro(n) : "";
                                      if (r)
                                          switch (r) {
                                              case jn:
                                                  return O;
                                              case Pn:
                                                  return k;
                                              case On:
                                                  return _;
                                              case Ln:
                                                  return A;
                                              case Hn:
                                                  return j;
                                          }
                                      return t;
                                  });
                              var wo = Pe ? Qs : gl;
                              function xo(e) {
                                  var t = e && e.constructor;
                                  return e === (("function" == typeof t && t.prototype) || je);
                              }
                              function ko(e) {
                                  return e == e && !Ks(e);
                              }
                              function So(e, t) {
                                  return function (n) {
                                      return null != n && n[e] === t && (t !== i || e in Te(n));
                                  };
                              }
                              function To(e, t, n) {
                                  return (
                                      (t = vn(t === i ? e.length - 1 : t, 0)),
                                      function () {
                                          for (var i = arguments, o = -1, s = vn(i.length - t, 0), a = r(s); ++o < s; ) a[o] = i[t + o];
                                          o = -1;
                                          for (var l = r(t + 1); ++o < t; ) l[o] = i[o];
                                          return (l[t] = n(a)), St(e, this, l);
                                      }
                                  );
                              }
                              function _o(e, t) {
                                  return t.length < 2 ? e : xr(e, ei(t, 0, -1));
                              }
                              function Co(e, t) {
                                  if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
                              }
                              var Ao = Po(Zr),
                                  $o =
                                      ct ||
                                      function (e, t) {
                                          return ft.setTimeout(e, t);
                                      },
                                  Eo = Po(Jr);
                              function jo(e, t, n) {
                                  var r = t + "";
                                  return Eo(
                                      e,
                                      (function (e, t) {
                                          var n = t.length;
                                          if (!n) return e;
                                          var r = n - 1;
                                          return (t[r] = (n > 1 ? "& " : "") + t[r]), (t = t.join(n > 2 ? ", " : " ")), e.replace(oe, "{\n/* [wrapped with " + t + "] */\n");
                                      })(
                                          r,
                                          (function (e, t) {
                                              return (
                                                  _t(h, function (n) {
                                                      var r = "_." + n[0];
                                                      t & n[1] && !Et(e, r) && e.push(r);
                                                  }),
                                                  e.sort()
                                              );
                                          })(
                                              (function (e) {
                                                  var t = e.match(se);
                                                  return t ? t[1].split(ae) : [];
                                              })(r),
                                              n
                                          )
                                      )
                                  );
                              }
                              function Po(e) {
                                  var t = 0,
                                      n = 0;
                                  return function () {
                                      var r = mn(),
                                          o = 16 - (r - n);
                                      if (((n = r), o > 0)) {
                                          if (++t >= 800) return arguments[0];
                                      } else t = 0;
                                      return e.apply(i, arguments);
                                  };
                              }
                              function Oo(e, t) {
                                  var n = -1,
                                      r = e.length,
                                      o = r - 1;
                                  for (t = t === i ? r : t; ++n < t; ) {
                                      var s = Br(n, o),
                                          a = e[s];
                                      (e[s] = e[n]), (e[n] = a);
                                  }
                                  return (e.length = t), e;
                              }
                              var Lo,
                                  Ho,
                                  Do =
                                      ((Lo = Ls(
                                          function (e) {
                                              var t = [];
                                              return (
                                                  46 === e.charCodeAt(0) && t.push(""),
                                                  e.replace(ee, function (e, n, r, i) {
                                                      t.push(r ? i.replace(ce, "$1") : n || e);
                                                  }),
                                                  t
                                              );
                                          },
                                          function (e) {
                                              return 500 === Ho.size && Ho.clear(), e;
                                          }
                                      )),
                                      (Ho = Lo.cache),
                                      Lo);
                              function No(e) {
                                  if ("string" == typeof e || aa(e)) return e;
                                  var t = e + "";
                                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                              }
                              function Ro(e) {
                                  if (null != e) {
                                      try {
                                          return Oe.call(e);
                                      } catch (e) {}
                                      try {
                                          return e + "";
                                      } catch (e) {}
                                  }
                                  return "";
                              }
                              function qo(e) {
                                  if (e instanceof Fn) return e.clone();
                                  var t = new In(e.__wrapped__, e.__chain__);
                                  return (t.__actions__ = Ci(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
                              }
                              var zo = Xr(function (e, t) {
                                      return Us(e) ? ur(e, gr(t, 1, Us, !0)) : [];
                                  }),
                                  Mo = Xr(function (e, t) {
                                      var n = Go(t);
                                      return Us(n) && (n = i), Us(e) ? ur(e, gr(t, 1, Us, !0), oo(n, 2)) : [];
                                  }),
                                  Io = Xr(function (e, t) {
                                      var n = Go(t);
                                      return Us(n) && (n = i), Us(e) ? ur(e, gr(t, 1, Us, !0), i, n) : [];
                                  });
                              function Fo(e, t, n) {
                                  var r = null == e ? 0 : e.length;
                                  if (!r) return -1;
                                  var i = null == n ? 0 : da(n);
                                  return i < 0 && (i = vn(r + i, 0)), qt(e, oo(t, 3), i);
                              }
                              function Vo(e, t, n) {
                                  var r = null == e ? 0 : e.length;
                                  if (!r) return -1;
                                  var o = r - 1;
                                  return n !== i && ((o = da(n)), (o = n < 0 ? vn(r + o, 0) : yn(o, r - 1))), qt(e, oo(t, 3), o, !0);
                              }
                              function Wo(e) {
                                  return null != e && e.length ? gr(e, 1) : [];
                              }
                              function Bo(e) {
                                  return e && e.length ? e[0] : i;
                              }
                              var Uo = Xr(function (e) {
                                      var t = Pt(e, hi);
                                      return t.length && t[0] === e[0] ? Ar(t) : [];
                                  }),
                                  Xo = Xr(function (e) {
                                      var t = Go(e),
                                          n = Pt(e, hi);
                                      return t === Go(n) ? (t = i) : n.pop(), n.length && n[0] === e[0] ? Ar(n, oo(t, 2)) : [];
                                  }),
                                  Yo = Xr(function (e) {
                                      var t = Go(e),
                                          n = Pt(e, hi);
                                      return (t = "function" == typeof t ? t : i) && n.pop(), n.length && n[0] === e[0] ? Ar(n, i, t) : [];
                                  });
                              function Go(e) {
                                  var t = null == e ? 0 : e.length;
                                  return t ? e[t - 1] : i;
                              }
                              var Qo = Xr(Zo);
                              function Zo(e, t) {
                                  return e && e.length && t && t.length ? Vr(e, t) : e;
                              }
                              var Jo = Ki(function (e, t) {
                                  var n = null == e ? 0 : e.length,
                                      r = ir(e, t);
                                  return (
                                      Wr(
                                          e,
                                          Pt(t, function (e) {
                                              return vo(e, n) ? +e : e;
                                          }).sort(Si)
                                      ),
                                      r
                                  );
                              });
                              function Ko(e) {
                                  return null == e ? e : xn.call(e);
                              }
                              var es = Xr(function (e) {
                                      return ai(gr(e, 1, Us, !0));
                                  }),
                                  ts = Xr(function (e) {
                                      var t = Go(e);
                                      return Us(t) && (t = i), ai(gr(e, 1, Us, !0), oo(t, 2));
                                  }),
                                  ns = Xr(function (e) {
                                      var t = Go(e);
                                      return (t = "function" == typeof t ? t : i), ai(gr(e, 1, Us, !0), i, t);
                                  });
                              function rs(e) {
                                  if (!e || !e.length) return [];
                                  var t = 0;
                                  return (
                                      (e = $t(e, function (e) {
                                          if (Us(e)) return (t = vn(e.length, t)), !0;
                                      })),
                                      Xt(t, function (t) {
                                          return Pt(e, Vt(t));
                                      })
                                  );
                              }
                              function is(e, t) {
                                  if (!e || !e.length) return [];
                                  var n = rs(e);
                                  return null == t
                                      ? n
                                      : Pt(n, function (e) {
                                            return St(t, i, e);
                                        });
                              }
                              var os = Xr(function (e, t) {
                                      return Us(e) ? ur(e, t) : [];
                                  }),
                                  ss = Xr(function (e) {
                                      return pi($t(e, Us));
                                  }),
                                  as = Xr(function (e) {
                                      var t = Go(e);
                                      return Us(t) && (t = i), pi($t(e, Us), oo(t, 2));
                                  }),
                                  ls = Xr(function (e) {
                                      var t = Go(e);
                                      return (t = "function" == typeof t ? t : i), pi($t(e, Us), i, t);
                                  }),
                                  us = Xr(rs),
                                  cs = Xr(function (e) {
                                      var t = e.length,
                                          n = t > 1 ? e[t - 1] : i;
                                      return (n = "function" == typeof n ? (e.pop(), n) : i), is(e, n);
                                  });
                              function fs(e) {
                                  var t = qn(e);
                                  return (t.__chain__ = !0), t;
                              }
                              function ps(e, t) {
                                  return t(e);
                              }
                              var ds = Ki(function (e) {
                                      var t = e.length,
                                          n = t ? e[0] : 0,
                                          r = this.__wrapped__,
                                          o = function (t) {
                                              return ir(t, e);
                                          };
                                      return !(t > 1 || this.__actions__.length) && r instanceof Fn && vo(n)
                                          ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({ func: ps, args: [o], thisArg: i }),
                                            new In(r, this.__chain__).thru(function (e) {
                                                return t && !e.length && e.push(i), e;
                                            }))
                                          : this.thru(o);
                                  }),
                                  hs = $i(function (e, t, n) {
                                      Le.call(e, n) ? ++e[n] : rr(e, n, 1);
                                  }),
                                  gs = Di(Fo),
                                  vs = Di(Vo);
                              function ys(e, t) {
                                  return (Vs(e) ? _t : cr)(e, oo(t, 3));
                              }
                              function ms(e, t) {
                                  return (Vs(e) ? Ct : fr)(e, oo(t, 3));
                              }
                              var bs = $i(function (e, t, n) {
                                      Le.call(e, n) ? e[n].push(t) : rr(e, n, [t]);
                                  }),
                                  ws = Xr(function (e, t, n) {
                                      var i = -1,
                                          o = "function" == typeof t,
                                          s = Bs(e) ? r(e.length) : [];
                                      return (
                                          cr(e, function (e) {
                                              s[++i] = o ? St(t, e, n) : $r(e, t, n);
                                          }),
                                          s
                                      );
                                  }),
                                  xs = $i(function (e, t, n) {
                                      rr(e, n, t);
                                  });
                              function ks(e, t) {
                                  return (Vs(e) ? Pt : Nr)(e, oo(t, 3));
                              }
                              var Ss = $i(
                                      function (e, t, n) {
                                          e[n ? 0 : 1].push(t);
                                      },
                                      function () {
                                          return [[], []];
                                      }
                                  ),
                                  Ts = Xr(function (e, t) {
                                      if (null == e) return [];
                                      var n = t.length;
                                      return n > 1 && yo(e, t[0], t[1]) ? (t = []) : n > 2 && yo(t[0], t[1], t[2]) && (t = [t[0]]), Ir(e, gr(t, 1), []);
                                  }),
                                  _s =
                                      ut ||
                                      function () {
                                          return ft.Date.now();
                                      };
                              function Cs(e, t, n) {
                                  return (t = n ? i : t), (t = e && null == t ? e.length : t), Yi(e, u, i, i, i, i, t);
                              }
                              function As(e, t) {
                                  var n;
                                  if ("function" != typeof t) throw new Ae(o);
                                  return (
                                      (e = da(e)),
                                      function () {
                                          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
                                      }
                                  );
                              }
                              var $s = Xr(function (e, t, n) {
                                      var r = 1;
                                      if (n.length) {
                                          var i = an(n, io($s));
                                          r |= l;
                                      }
                                      return Yi(e, r, t, n, i);
                                  }),
                                  Es = Xr(function (e, t, n) {
                                      var r = 3;
                                      if (n.length) {
                                          var i = an(n, io(Es));
                                          r |= l;
                                      }
                                      return Yi(t, r, e, n, i);
                                  });
                              function js(e, t, n) {
                                  var r,
                                      s,
                                      a,
                                      l,
                                      u,
                                      c,
                                      f = 0,
                                      p = !1,
                                      d = !1,
                                      h = !0;
                                  if ("function" != typeof e) throw new Ae(o);
                                  function g(t) {
                                      var n = r,
                                          o = s;
                                      return (r = s = i), (f = t), (l = e.apply(o, n));
                                  }
                                  function v(e) {
                                      var n = e - c;
                                      return c === i || n >= t || n < 0 || (d && e - f >= a);
                                  }
                                  function y() {
                                      var e = _s();
                                      if (v(e)) return m(e);
                                      u = $o(
                                          y,
                                          (function (e) {
                                              var n = t - (e - c);
                                              return d ? yn(n, a - (e - f)) : n;
                                          })(e)
                                      );
                                  }
                                  function m(e) {
                                      return (u = i), h && r ? g(e) : ((r = s = i), l);
                                  }
                                  function b() {
                                      var e = _s(),
                                          n = v(e);
                                      if (((r = arguments), (s = this), (c = e), n)) {
                                          if (u === i)
                                              return (function (e) {
                                                  return (f = e), (u = $o(y, t)), p ? g(e) : l;
                                              })(c);
                                          if (d) return bi(u), (u = $o(y, t)), g(c);
                                      }
                                      return u === i && (u = $o(y, t)), l;
                                  }
                                  return (
                                      (t = ga(t) || 0),
                                      Ks(n) && ((p = !!n.leading), (a = (d = "maxWait" in n) ? vn(ga(n.maxWait) || 0, t) : a), (h = "trailing" in n ? !!n.trailing : h)),
                                      (b.cancel = function () {
                                          u !== i && bi(u), (f = 0), (r = c = s = u = i);
                                      }),
                                      (b.flush = function () {
                                          return u === i ? l : m(_s());
                                      }),
                                      b
                                  );
                              }
                              var Ps = Xr(function (e, t) {
                                      return lr(e, 1, t);
                                  }),
                                  Os = Xr(function (e, t, n) {
                                      return lr(e, ga(t) || 0, n);
                                  });
                              function Ls(e, t) {
                                  if ("function" != typeof e || (null != t && "function" != typeof t)) throw new Ae(o);
                                  var n = function () {
                                      var r = arguments,
                                          i = t ? t.apply(this, r) : r[0],
                                          o = n.cache;
                                      if (o.has(i)) return o.get(i);
                                      var s = e.apply(this, r);
                                      return (n.cache = o.set(i, s) || o), s;
                                  };
                                  return (n.cache = new (Ls.Cache || Bn)()), n;
                              }
                              function Hs(e) {
                                  if ("function" != typeof e) throw new Ae(o);
                                  return function () {
                                      var t = arguments;
                                      switch (t.length) {
                                          case 0:
                                              return !e.call(this);
                                          case 1:
                                              return !e.call(this, t[0]);
                                          case 2:
                                              return !e.call(this, t[0], t[1]);
                                          case 3:
                                              return !e.call(this, t[0], t[1], t[2]);
                                      }
                                      return !e.apply(this, t);
                                  };
                              }
                              Ls.Cache = Bn;
                              var Ds = yi(function (e, t) {
                                      var n = (t = 1 == t.length && Vs(t[0]) ? Pt(t[0], Gt(oo())) : Pt(gr(t, 1), Gt(oo()))).length;
                                      return Xr(function (r) {
                                          for (var i = -1, o = yn(r.length, n); ++i < o; ) r[i] = t[i].call(this, r[i]);
                                          return St(e, this, r);
                                      });
                                  }),
                                  Ns = Xr(function (e, t) {
                                      var n = an(t, io(Ns));
                                      return Yi(e, l, i, t, n);
                                  }),
                                  Rs = Xr(function (e, t) {
                                      var n = an(t, io(Rs));
                                      return Yi(e, 64, i, t, n);
                                  }),
                                  qs = Ki(function (e, t) {
                                      return Yi(e, 256, i, i, i, t);
                                  });
                              function zs(e, t) {
                                  return e === t || (e != e && t != t);
                              }
                              var Ms = Vi(Tr),
                                  Is = Vi(function (e, t) {
                                      return e >= t;
                                  }),
                                  Fs = Er(
                                      (function () {
                                          return arguments;
                                      })()
                                  )
                                      ? Er
                                      : function (e) {
                                            return ea(e) && Le.call(e, "callee") && !Ue.call(e, "callee");
                                        },
                                  Vs = r.isArray,
                                  Ws = yt
                                      ? Gt(yt)
                                      : function (e) {
                                            return ea(e) && Sr(e) == P;
                                        };
                              function Bs(e) {
                                  return null != e && Js(e.length) && !Qs(e);
                              }
                              function Us(e) {
                                  return ea(e) && Bs(e);
                              }
                              var Xs = vt || gl,
                                  Ys = mt
                                      ? Gt(mt)
                                      : function (e) {
                                            return ea(e) && Sr(e) == m;
                                        };
                              function Gs(e) {
                                  if (!ea(e)) return !1;
                                  var t = Sr(e);
                                  return t == b || "[object DOMException]" == t || ("string" == typeof e.message && "string" == typeof e.name && !ra(e));
                              }
                              function Qs(e) {
                                  if (!Ks(e)) return !1;
                                  var t = Sr(e);
                                  return t == w || t == x || "[object AsyncFunction]" == t || "[object Proxy]" == t;
                              }
                              function Zs(e) {
                                  return "number" == typeof e && e == da(e);
                              }
                              function Js(e) {
                                  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= f;
                              }
                              function Ks(e) {
                                  var t = typeof e;
                                  return null != e && ("object" == t || "function" == t);
                              }
                              function ea(e) {
                                  return null != e && "object" == typeof e;
                              }
                              var ta = bt
                                  ? Gt(bt)
                                  : function (e) {
                                        return ea(e) && fo(e) == k;
                                    };
                              function na(e) {
                                  return "number" == typeof e || (ea(e) && Sr(e) == S);
                              }
                              function ra(e) {
                                  if (!ea(e) || Sr(e) != T) return !1;
                                  var t = We(e);
                                  if (null === t) return !0;
                                  var n = Le.call(t, "constructor") && t.constructor;
                                  return "function" == typeof n && n instanceof n && Oe.call(n) == Re;
                              }
                              var ia = wt
                                      ? Gt(wt)
                                      : function (e) {
                                            return ea(e) && Sr(e) == C;
                                        },
                                  oa = xt
                                      ? Gt(xt)
                                      : function (e) {
                                            return ea(e) && fo(e) == A;
                                        };
                              function sa(e) {
                                  return "string" == typeof e || (!Vs(e) && ea(e) && Sr(e) == $);
                              }
                              function aa(e) {
                                  return "symbol" == typeof e || (ea(e) && Sr(e) == E);
                              }
                              var la = kt
                                      ? Gt(kt)
                                      : function (e) {
                                            return ea(e) && Js(e.length) && !!it[Sr(e)];
                                        },
                                  ua = Vi(Dr),
                                  ca = Vi(function (e, t) {
                                      return e <= t;
                                  });
                              function fa(e) {
                                  if (!e) return [];
                                  if (Bs(e)) return sa(e) ? fn(e) : Ci(e);
                                  if (Ge && e[Ge])
                                      return (function (e) {
                                          for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                                          return n;
                                      })(e[Ge]());
                                  var t = fo(e);
                                  return (t == k ? on : t == A ? ln : za)(e);
                              }
                              function pa(e) {
                                  return e ? ((e = ga(e)) === c || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0) : 0 === e ? e : 0;
                              }
                              function da(e) {
                                  var t = pa(e),
                                      n = t % 1;
                                  return t == t ? (n ? t - n : t) : 0;
                              }
                              function ha(e) {
                                  return e ? or(da(e), 0, d) : 0;
                              }
                              function ga(e) {
                                  if ("number" == typeof e) return e;
                                  if (aa(e)) return p;
                                  if (Ks(e)) {
                                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                      e = Ks(t) ? t + "" : t;
                                  }
                                  if ("string" != typeof e) return 0 === e ? e : +e;
                                  e = Yt(e);
                                  var n = he.test(e);
                                  return n || ve.test(e) ? lt(e.slice(2), n ? 2 : 8) : de.test(e) ? p : +e;
                              }
                              function va(e) {
                                  return Ai(e, Pa(e));
                              }
                              function ya(e) {
                                  return null == e ? "" : si(e);
                              }
                              var ma = Ei(function (e, t) {
                                      if (xo(t) || Bs(t)) Ai(t, ja(t), e);
                                      else for (var n in t) Le.call(t, n) && Kn(e, n, t[n]);
                                  }),
                                  ba = Ei(function (e, t) {
                                      Ai(t, Pa(t), e);
                                  }),
                                  wa = Ei(function (e, t, n, r) {
                                      Ai(t, Pa(t), e, r);
                                  }),
                                  xa = Ei(function (e, t, n, r) {
                                      Ai(t, ja(t), e, r);
                                  }),
                                  ka = Ki(ir),
                                  Sa = Xr(function (e, t) {
                                      e = Te(e);
                                      var n = -1,
                                          r = t.length,
                                          o = r > 2 ? t[2] : i;
                                      for (o && yo(t[0], t[1], o) && (r = 1); ++n < r; )
                                          for (var s = t[n], a = Pa(s), l = -1, u = a.length; ++l < u; ) {
                                              var c = a[l],
                                                  f = e[c];
                                              (f === i || (zs(f, je[c]) && !Le.call(e, c))) && (e[c] = s[c]);
                                          }
                                      return e;
                                  }),
                                  Ta = Xr(function (e) {
                                      return e.push(i, Qi), St(La, i, e);
                                  });
                              function _a(e, t, n) {
                                  var r = null == e ? i : xr(e, t);
                                  return r === i ? n : r;
                              }
                              function Ca(e, t) {
                                  return null != e && po(e, t, Cr);
                              }
                              var Aa = qi(function (e, t, n) {
                                      null != t && "function" != typeof t.toString && (t = Ne.call(t)), (e[t] = n);
                                  }, Ka(nl)),
                                  $a = qi(function (e, t, n) {
                                      null != t && "function" != typeof t.toString && (t = Ne.call(t)), Le.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                                  }, oo),
                                  Ea = Xr($r);
                              function ja(e) {
                                  return Bs(e) ? Yn(e) : Hr(e);
                              }
                              function Pa(e) {
                                  return Bs(e)
                                      ? Yn(e, !0)
                                      : (function (e) {
                                            if (!Ks(e))
                                                return (function (e) {
                                                    var t = [];
                                                    if (null != e) for (var n in Te(e)) t.push(n);
                                                    return t;
                                                })(e);
                                            var t = xo(e),
                                                n = [];
                                            for (var r in e) ("constructor" != r || (!t && Le.call(e, r))) && n.push(r);
                                            return n;
                                        })(e);
                              }
                              var Oa = Ei(function (e, t, n) {
                                      zr(e, t, n);
                                  }),
                                  La = Ei(function (e, t, n, r) {
                                      zr(e, t, n, r);
                                  }),
                                  Ha = Ki(function (e, t) {
                                      var n = {};
                                      if (null == e) return n;
                                      var r = !1;
                                      (t = Pt(t, function (t) {
                                          return (t = vi(t, e)), r || (r = t.length > 1), t;
                                      })),
                                          Ai(e, to(e), n),
                                          r && (n = sr(n, 7, Zi));
                                      for (var i = t.length; i--; ) li(n, t[i]);
                                      return n;
                                  }),
                                  Da = Ki(function (e, t) {
                                      return null == e
                                          ? {}
                                          : (function (e, t) {
                                                return Fr(e, t, function (t, n) {
                                                    return Ca(e, n);
                                                });
                                            })(e, t);
                                  });
                              function Na(e, t) {
                                  if (null == e) return {};
                                  var n = Pt(to(e), function (e) {
                                      return [e];
                                  });
                                  return (
                                      (t = oo(t)),
                                      Fr(e, n, function (e, n) {
                                          return t(e, n[0]);
                                      })
                                  );
                              }
                              var Ra = Xi(ja),
                                  qa = Xi(Pa);
                              function za(e) {
                                  return null == e ? [] : Qt(e, ja(e));
                              }
                              var Ma = Li(function (e, t, n) {
                                  return (t = t.toLowerCase()), e + (n ? Ia(t) : t);
                              });
                              function Ia(e) {
                                  return Ga(ya(e).toLowerCase());
                              }
                              function Fa(e) {
                                  return (e = ya(e)) && e.replace(me, en).replace(Ze, "");
                              }
                              var Va = Li(function (e, t, n) {
                                      return e + (n ? "-" : "") + t.toLowerCase();
                                  }),
                                  Wa = Li(function (e, t, n) {
                                      return e + (n ? " " : "") + t.toLowerCase();
                                  }),
                                  Ba = Oi("toLowerCase"),
                                  Ua = Li(function (e, t, n) {
                                      return e + (n ? "_" : "") + t.toLowerCase();
                                  }),
                                  Xa = Li(function (e, t, n) {
                                      return e + (n ? " " : "") + Ga(t);
                                  }),
                                  Ya = Li(function (e, t, n) {
                                      return e + (n ? " " : "") + t.toUpperCase();
                                  }),
                                  Ga = Oi("toUpperCase");
                              function Qa(e, t, n) {
                                  return (
                                      (e = ya(e)),
                                      (t = n ? i : t) === i
                                          ? (function (e) {
                                                return tt.test(e);
                                            })(e)
                                              ? (function (e) {
                                                    return e.match(Ke) || [];
                                                })(e)
                                              : (function (e) {
                                                    return e.match(le) || [];
                                                })(e)
                                          : e.match(t) || []
                                  );
                              }
                              var Za = Xr(function (e, t) {
                                      try {
                                          return St(e, i, t);
                                      } catch (e) {
                                          return Gs(e) ? e : new xe(e);
                                      }
                                  }),
                                  Ja = Ki(function (e, t) {
                                      return (
                                          _t(t, function (t) {
                                              (t = No(t)), rr(e, t, $s(e[t], e));
                                          }),
                                          e
                                      );
                                  });
                              function Ka(e) {
                                  return function () {
                                      return e;
                                  };
                              }
                              var el = Ni(),
                                  tl = Ni(!0);
                              function nl(e) {
                                  return e;
                              }
                              function rl(e) {
                                  return Lr("function" == typeof e ? e : sr(e, 1));
                              }
                              var il = Xr(function (e, t) {
                                      return function (n) {
                                          return $r(n, e, t);
                                      };
                                  }),
                                  ol = Xr(function (e, t) {
                                      return function (n) {
                                          return $r(e, n, t);
                                      };
                                  });
                              function sl(e, t, n) {
                                  var r = ja(t),
                                      i = wr(t, r);
                                  null != n || (Ks(t) && (i.length || !r.length)) || ((n = t), (t = e), (e = this), (i = wr(t, ja(t))));
                                  var o = !(Ks(n) && "chain" in n && !n.chain),
                                      s = Qs(e);
                                  return (
                                      _t(i, function (n) {
                                          var r = t[n];
                                          (e[n] = r),
                                              s &&
                                                  (e.prototype[n] = function () {
                                                      var t = this.__chain__;
                                                      if (o || t) {
                                                          var n = e(this.__wrapped__);
                                                          return (n.__actions__ = Ci(this.__actions__)).push({ func: r, args: arguments, thisArg: e }), (n.__chain__ = t), n;
                                                      }
                                                      return r.apply(e, Ot([this.value()], arguments));
                                                  });
                                      }),
                                      e
                                  );
                              }
                              function al() {}
                              var ll = Mi(Pt),
                                  ul = Mi(At),
                                  cl = Mi(Dt);
                              function fl(e) {
                                  return mo(e)
                                      ? Vt(No(e))
                                      : (function (e) {
                                            return function (t) {
                                                return xr(t, e);
                                            };
                                        })(e);
                              }
                              var pl = Fi(),
                                  dl = Fi(!0);
                              function hl() {
                                  return [];
                              }
                              function gl() {
                                  return !1;
                              }
                              var vl,
                                  yl = zi(function (e, t) {
                                      return e + t;
                                  }, 0),
                                  ml = Bi("ceil"),
                                  bl = zi(function (e, t) {
                                      return e / t;
                                  }, 1),
                                  wl = Bi("floor"),
                                  xl = zi(function (e, t) {
                                      return e * t;
                                  }, 1),
                                  kl = Bi("round"),
                                  Sl = zi(function (e, t) {
                                      return e - t;
                                  }, 0);
                              return (
                                  (qn.after = function (e, t) {
                                      if ("function" != typeof t) throw new Ae(o);
                                      return (
                                          (e = da(e)),
                                          function () {
                                              if (--e < 1) return t.apply(this, arguments);
                                          }
                                      );
                                  }),
                                  (qn.ary = Cs),
                                  (qn.assign = ma),
                                  (qn.assignIn = ba),
                                  (qn.assignInWith = wa),
                                  (qn.assignWith = xa),
                                  (qn.at = ka),
                                  (qn.before = As),
                                  (qn.bind = $s),
                                  (qn.bindAll = Ja),
                                  (qn.bindKey = Es),
                                  (qn.castArray = function () {
                                      if (!arguments.length) return [];
                                      var e = arguments[0];
                                      return Vs(e) ? e : [e];
                                  }),
                                  (qn.chain = fs),
                                  (qn.chunk = function (e, t, n) {
                                      t = (n ? yo(e, t, n) : t === i) ? 1 : vn(da(t), 0);
                                      var o = null == e ? 0 : e.length;
                                      if (!o || t < 1) return [];
                                      for (var s = 0, a = 0, l = r(pt(o / t)); s < o; ) l[a++] = ei(e, s, (s += t));
                                      return l;
                                  }),
                                  (qn.compact = function (e) {
                                      for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                                          var o = e[t];
                                          o && (i[r++] = o);
                                      }
                                      return i;
                                  }),
                                  (qn.concat = function () {
                                      var e = arguments.length;
                                      if (!e) return [];
                                      for (var t = r(e - 1), n = arguments[0], i = e; i--; ) t[i - 1] = arguments[i];
                                      return Ot(Vs(n) ? Ci(n) : [n], gr(t, 1));
                                  }),
                                  (qn.cond = function (e) {
                                      var t = null == e ? 0 : e.length,
                                          n = oo();
                                      return (
                                          (e = t
                                              ? Pt(e, function (e) {
                                                    if ("function" != typeof e[1]) throw new Ae(o);
                                                    return [n(e[0]), e[1]];
                                                })
                                              : []),
                                          Xr(function (n) {
                                              for (var r = -1; ++r < t; ) {
                                                  var i = e[r];
                                                  if (St(i[0], this, n)) return St(i[1], this, n);
                                              }
                                          })
                                      );
                                  }),
                                  (qn.conforms = function (e) {
                                      return (function (e) {
                                          var t = ja(e);
                                          return function (n) {
                                              return ar(n, e, t);
                                          };
                                      })(sr(e, 1));
                                  }),
                                  (qn.constant = Ka),
                                  (qn.countBy = hs),
                                  (qn.create = function (e, t) {
                                      var n = zn(e);
                                      return null == t ? n : nr(n, t);
                                  }),
                                  (qn.curry = function e(t, n, r) {
                                      var o = Yi(t, 8, i, i, i, i, i, (n = r ? i : n));
                                      return (o.placeholder = e.placeholder), o;
                                  }),
                                  (qn.curryRight = function e(t, n, r) {
                                      var o = Yi(t, 16, i, i, i, i, i, (n = r ? i : n));
                                      return (o.placeholder = e.placeholder), o;
                                  }),
                                  (qn.debounce = js),
                                  (qn.defaults = Sa),
                                  (qn.defaultsDeep = Ta),
                                  (qn.defer = Ps),
                                  (qn.delay = Os),
                                  (qn.difference = zo),
                                  (qn.differenceBy = Mo),
                                  (qn.differenceWith = Io),
                                  (qn.drop = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      return r ? ei(e, (t = n || t === i ? 1 : da(t)) < 0 ? 0 : t, r) : [];
                                  }),
                                  (qn.dropRight = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      return r ? ei(e, 0, (t = r - (t = n || t === i ? 1 : da(t))) < 0 ? 0 : t) : [];
                                  }),
                                  (qn.dropRightWhile = function (e, t) {
                                      return e && e.length ? ci(e, oo(t, 3), !0, !0) : [];
                                  }),
                                  (qn.dropWhile = function (e, t) {
                                      return e && e.length ? ci(e, oo(t, 3), !0) : [];
                                  }),
                                  (qn.fill = function (e, t, n, r) {
                                      var o = null == e ? 0 : e.length;
                                      return o
                                          ? (n && "number" != typeof n && yo(e, t, n) && ((n = 0), (r = o)),
                                            (function (e, t, n, r) {
                                                var o = e.length;
                                                for ((n = da(n)) < 0 && (n = -n > o ? 0 : o + n), (r = r === i || r > o ? o : da(r)) < 0 && (r += o), r = n > r ? 0 : ha(r); n < r; ) e[n++] = t;
                                                return e;
                                            })(e, t, n, r))
                                          : [];
                                  }),
                                  (qn.filter = function (e, t) {
                                      return (Vs(e) ? $t : hr)(e, oo(t, 3));
                                  }),
                                  (qn.flatMap = function (e, t) {
                                      return gr(ks(e, t), 1);
                                  }),
                                  (qn.flatMapDeep = function (e, t) {
                                      return gr(ks(e, t), c);
                                  }),
                                  (qn.flatMapDepth = function (e, t, n) {
                                      return (n = n === i ? 1 : da(n)), gr(ks(e, t), n);
                                  }),
                                  (qn.flatten = Wo),
                                  (qn.flattenDeep = function (e) {
                                      return null != e && e.length ? gr(e, c) : [];
                                  }),
                                  (qn.flattenDepth = function (e, t) {
                                      return null != e && e.length ? gr(e, (t = t === i ? 1 : da(t))) : [];
                                  }),
                                  (qn.flip = function (e) {
                                      return Yi(e, 512);
                                  }),
                                  (qn.flow = el),
                                  (qn.flowRight = tl),
                                  (qn.fromPairs = function (e) {
                                      for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                                          var i = e[t];
                                          r[i[0]] = i[1];
                                      }
                                      return r;
                                  }),
                                  (qn.functions = function (e) {
                                      return null == e ? [] : wr(e, ja(e));
                                  }),
                                  (qn.functionsIn = function (e) {
                                      return null == e ? [] : wr(e, Pa(e));
                                  }),
                                  (qn.groupBy = bs),
                                  (qn.initial = function (e) {
                                      return null != e && e.length ? ei(e, 0, -1) : [];
                                  }),
                                  (qn.intersection = Uo),
                                  (qn.intersectionBy = Xo),
                                  (qn.intersectionWith = Yo),
                                  (qn.invert = Aa),
                                  (qn.invertBy = $a),
                                  (qn.invokeMap = ws),
                                  (qn.iteratee = rl),
                                  (qn.keyBy = xs),
                                  (qn.keys = ja),
                                  (qn.keysIn = Pa),
                                  (qn.map = ks),
                                  (qn.mapKeys = function (e, t) {
                                      var n = {};
                                      return (
                                          (t = oo(t, 3)),
                                          mr(e, function (e, r, i) {
                                              rr(n, t(e, r, i), e);
                                          }),
                                          n
                                      );
                                  }),
                                  (qn.mapValues = function (e, t) {
                                      var n = {};
                                      return (
                                          (t = oo(t, 3)),
                                          mr(e, function (e, r, i) {
                                              rr(n, r, t(e, r, i));
                                          }),
                                          n
                                      );
                                  }),
                                  (qn.matches = function (e) {
                                      return Rr(sr(e, 1));
                                  }),
                                  (qn.matchesProperty = function (e, t) {
                                      return qr(e, sr(t, 1));
                                  }),
                                  (qn.memoize = Ls),
                                  (qn.merge = Oa),
                                  (qn.mergeWith = La),
                                  (qn.method = il),
                                  (qn.methodOf = ol),
                                  (qn.mixin = sl),
                                  (qn.negate = Hs),
                                  (qn.nthArg = function (e) {
                                      return (
                                          (e = da(e)),
                                          Xr(function (t) {
                                              return Mr(t, e);
                                          })
                                      );
                                  }),
                                  (qn.omit = Ha),
                                  (qn.omitBy = function (e, t) {
                                      return Na(e, Hs(oo(t)));
                                  }),
                                  (qn.once = function (e) {
                                      return As(2, e);
                                  }),
                                  (qn.orderBy = function (e, t, n, r) {
                                      return null == e ? [] : (Vs(t) || (t = null == t ? [] : [t]), Vs((n = r ? i : n)) || (n = null == n ? [] : [n]), Ir(e, t, n));
                                  }),
                                  (qn.over = ll),
                                  (qn.overArgs = Ds),
                                  (qn.overEvery = ul),
                                  (qn.overSome = cl),
                                  (qn.partial = Ns),
                                  (qn.partialRight = Rs),
                                  (qn.partition = Ss),
                                  (qn.pick = Da),
                                  (qn.pickBy = Na),
                                  (qn.property = fl),
                                  (qn.propertyOf = function (e) {
                                      return function (t) {
                                          return null == e ? i : xr(e, t);
                                      };
                                  }),
                                  (qn.pull = Qo),
                                  (qn.pullAll = Zo),
                                  (qn.pullAllBy = function (e, t, n) {
                                      return e && e.length && t && t.length ? Vr(e, t, oo(n, 2)) : e;
                                  }),
                                  (qn.pullAllWith = function (e, t, n) {
                                      return e && e.length && t && t.length ? Vr(e, t, i, n) : e;
                                  }),
                                  (qn.pullAt = Jo),
                                  (qn.range = pl),
                                  (qn.rangeRight = dl),
                                  (qn.rearg = qs),
                                  (qn.reject = function (e, t) {
                                      return (Vs(e) ? $t : hr)(e, Hs(oo(t, 3)));
                                  }),
                                  (qn.remove = function (e, t) {
                                      var n = [];
                                      if (!e || !e.length) return n;
                                      var r = -1,
                                          i = [],
                                          o = e.length;
                                      for (t = oo(t, 3); ++r < o; ) {
                                          var s = e[r];
                                          t(s, r, e) && (n.push(s), i.push(r));
                                      }
                                      return Wr(e, i), n;
                                  }),
                                  (qn.rest = function (e, t) {
                                      if ("function" != typeof e) throw new Ae(o);
                                      return Xr(e, (t = t === i ? t : da(t)));
                                  }),
                                  (qn.reverse = Ko),
                                  (qn.sampleSize = function (e, t, n) {
                                      return (t = (n ? yo(e, t, n) : t === i) ? 1 : da(t)), (Vs(e) ? Qn : Gr)(e, t);
                                  }),
                                  (qn.set = function (e, t, n) {
                                      return null == e ? e : Qr(e, t, n);
                                  }),
                                  (qn.setWith = function (e, t, n, r) {
                                      return (r = "function" == typeof r ? r : i), null == e ? e : Qr(e, t, n, r);
                                  }),
                                  (qn.shuffle = function (e) {
                                      return (Vs(e) ? Zn : Kr)(e);
                                  }),
                                  (qn.slice = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      return r ? (n && "number" != typeof n && yo(e, t, n) ? ((t = 0), (n = r)) : ((t = null == t ? 0 : da(t)), (n = n === i ? r : da(n))), ei(e, t, n)) : [];
                                  }),
                                  (qn.sortBy = Ts),
                                  (qn.sortedUniq = function (e) {
                                      return e && e.length ? ii(e) : [];
                                  }),
                                  (qn.sortedUniqBy = function (e, t) {
                                      return e && e.length ? ii(e, oo(t, 2)) : [];
                                  }),
                                  (qn.split = function (e, t, n) {
                                      return (
                                          n && "number" != typeof n && yo(e, t, n) && (t = n = i),
                                          (n = n === i ? d : n >>> 0) ? ((e = ya(e)) && ("string" == typeof t || (null != t && !ia(t))) && !(t = si(t)) && rn(e) ? mi(fn(e), 0, n) : e.split(t, n)) : []
                                      );
                                  }),
                                  (qn.spread = function (e, t) {
                                      if ("function" != typeof e) throw new Ae(o);
                                      return (
                                          (t = null == t ? 0 : vn(da(t), 0)),
                                          Xr(function (n) {
                                              var r = n[t],
                                                  i = mi(n, 0, t);
                                              return r && Ot(i, r), St(e, this, i);
                                          })
                                      );
                                  }),
                                  (qn.tail = function (e) {
                                      var t = null == e ? 0 : e.length;
                                      return t ? ei(e, 1, t) : [];
                                  }),
                                  (qn.take = function (e, t, n) {
                                      return e && e.length ? ei(e, 0, (t = n || t === i ? 1 : da(t)) < 0 ? 0 : t) : [];
                                  }),
                                  (qn.takeRight = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      return r ? ei(e, (t = r - (t = n || t === i ? 1 : da(t))) < 0 ? 0 : t, r) : [];
                                  }),
                                  (qn.takeRightWhile = function (e, t) {
                                      return e && e.length ? ci(e, oo(t, 3), !1, !0) : [];
                                  }),
                                  (qn.takeWhile = function (e, t) {
                                      return e && e.length ? ci(e, oo(t, 3)) : [];
                                  }),
                                  (qn.tap = function (e, t) {
                                      return t(e), e;
                                  }),
                                  (qn.throttle = function (e, t, n) {
                                      var r = !0,
                                          i = !0;
                                      if ("function" != typeof e) throw new Ae(o);
                                      return Ks(n) && ((r = "leading" in n ? !!n.leading : r), (i = "trailing" in n ? !!n.trailing : i)), js(e, t, { leading: r, maxWait: t, trailing: i });
                                  }),
                                  (qn.thru = ps),
                                  (qn.toArray = fa),
                                  (qn.toPairs = Ra),
                                  (qn.toPairsIn = qa),
                                  (qn.toPath = function (e) {
                                      return Vs(e) ? Pt(e, No) : aa(e) ? [e] : Ci(Do(ya(e)));
                                  }),
                                  (qn.toPlainObject = va),
                                  (qn.transform = function (e, t, n) {
                                      var r = Vs(e),
                                          i = r || Xs(e) || la(e);
                                      if (((t = oo(t, 4)), null == n)) {
                                          var o = e && e.constructor;
                                          n = i ? (r ? new o() : []) : Ks(e) && Qs(o) ? zn(We(e)) : {};
                                      }
                                      return (
                                          (i ? _t : mr)(e, function (e, r, i) {
                                              return t(n, e, r, i);
                                          }),
                                          n
                                      );
                                  }),
                                  (qn.unary = function (e) {
                                      return Cs(e, 1);
                                  }),
                                  (qn.union = es),
                                  (qn.unionBy = ts),
                                  (qn.unionWith = ns),
                                  (qn.uniq = function (e) {
                                      return e && e.length ? ai(e) : [];
                                  }),
                                  (qn.uniqBy = function (e, t) {
                                      return e && e.length ? ai(e, oo(t, 2)) : [];
                                  }),
                                  (qn.uniqWith = function (e, t) {
                                      return (t = "function" == typeof t ? t : i), e && e.length ? ai(e, i, t) : [];
                                  }),
                                  (qn.unset = function (e, t) {
                                      return null == e || li(e, t);
                                  }),
                                  (qn.unzip = rs),
                                  (qn.unzipWith = is),
                                  (qn.update = function (e, t, n) {
                                      return null == e ? e : ui(e, t, gi(n));
                                  }),
                                  (qn.updateWith = function (e, t, n, r) {
                                      return (r = "function" == typeof r ? r : i), null == e ? e : ui(e, t, gi(n), r);
                                  }),
                                  (qn.values = za),
                                  (qn.valuesIn = function (e) {
                                      return null == e ? [] : Qt(e, Pa(e));
                                  }),
                                  (qn.without = os),
                                  (qn.words = Qa),
                                  (qn.wrap = function (e, t) {
                                      return Ns(gi(t), e);
                                  }),
                                  (qn.xor = ss),
                                  (qn.xorBy = as),
                                  (qn.xorWith = ls),
                                  (qn.zip = us),
                                  (qn.zipObject = function (e, t) {
                                      return di(e || [], t || [], Kn);
                                  }),
                                  (qn.zipObjectDeep = function (e, t) {
                                      return di(e || [], t || [], Qr);
                                  }),
                                  (qn.zipWith = cs),
                                  (qn.entries = Ra),
                                  (qn.entriesIn = qa),
                                  (qn.extend = ba),
                                  (qn.extendWith = wa),
                                  sl(qn, qn),
                                  (qn.add = yl),
                                  (qn.attempt = Za),
                                  (qn.camelCase = Ma),
                                  (qn.capitalize = Ia),
                                  (qn.ceil = ml),
                                  (qn.clamp = function (e, t, n) {
                                      return n === i && ((n = t), (t = i)), n !== i && (n = (n = ga(n)) == n ? n : 0), t !== i && (t = (t = ga(t)) == t ? t : 0), or(ga(e), t, n);
                                  }),
                                  (qn.clone = function (e) {
                                      return sr(e, 4);
                                  }),
                                  (qn.cloneDeep = function (e) {
                                      return sr(e, 5);
                                  }),
                                  (qn.cloneDeepWith = function (e, t) {
                                      return sr(e, 5, (t = "function" == typeof t ? t : i));
                                  }),
                                  (qn.cloneWith = function (e, t) {
                                      return sr(e, 4, (t = "function" == typeof t ? t : i));
                                  }),
                                  (qn.conformsTo = function (e, t) {
                                      return null == t || ar(e, t, ja(t));
                                  }),
                                  (qn.deburr = Fa),
                                  (qn.defaultTo = function (e, t) {
                                      return null == e || e != e ? t : e;
                                  }),
                                  (qn.divide = bl),
                                  (qn.endsWith = function (e, t, n) {
                                      (e = ya(e)), (t = si(t));
                                      var r = e.length,
                                          o = (n = n === i ? r : or(da(n), 0, r));
                                      return (n -= t.length) >= 0 && e.slice(n, o) == t;
                                  }),
                                  (qn.eq = zs),
                                  (qn.escape = function (e) {
                                      return (e = ya(e)) && Y.test(e) ? e.replace(U, tn) : e;
                                  }),
                                  (qn.escapeRegExp = function (e) {
                                      return (e = ya(e)) && ne.test(e) ? e.replace(te, "\\$&") : e;
                                  }),
                                  (qn.every = function (e, t, n) {
                                      var r = Vs(e) ? At : pr;
                                      return n && yo(e, t, n) && (t = i), r(e, oo(t, 3));
                                  }),
                                  (qn.find = gs),
                                  (qn.findIndex = Fo),
                                  (qn.findKey = function (e, t) {
                                      return Rt(e, oo(t, 3), mr);
                                  }),
                                  (qn.findLast = vs),
                                  (qn.findLastIndex = Vo),
                                  (qn.findLastKey = function (e, t) {
                                      return Rt(e, oo(t, 3), br);
                                  }),
                                  (qn.floor = wl),
                                  (qn.forEach = ys),
                                  (qn.forEachRight = ms),
                                  (qn.forIn = function (e, t) {
                                      return null == e ? e : vr(e, oo(t, 3), Pa);
                                  }),
                                  (qn.forInRight = function (e, t) {
                                      return null == e ? e : yr(e, oo(t, 3), Pa);
                                  }),
                                  (qn.forOwn = function (e, t) {
                                      return e && mr(e, oo(t, 3));
                                  }),
                                  (qn.forOwnRight = function (e, t) {
                                      return e && br(e, oo(t, 3));
                                  }),
                                  (qn.get = _a),
                                  (qn.gt = Ms),
                                  (qn.gte = Is),
                                  (qn.has = function (e, t) {
                                      return null != e && po(e, t, _r);
                                  }),
                                  (qn.hasIn = Ca),
                                  (qn.head = Bo),
                                  (qn.identity = nl),
                                  (qn.includes = function (e, t, n, r) {
                                      (e = Bs(e) ? e : za(e)), (n = n && !r ? da(n) : 0);
                                      var i = e.length;
                                      return n < 0 && (n = vn(i + n, 0)), sa(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && zt(e, t, n) > -1;
                                  }),
                                  (qn.indexOf = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      if (!r) return -1;
                                      var i = null == n ? 0 : da(n);
                                      return i < 0 && (i = vn(r + i, 0)), zt(e, t, i);
                                  }),
                                  (qn.inRange = function (e, t, n) {
                                      return (
                                          (t = pa(t)),
                                          n === i ? ((n = t), (t = 0)) : (n = pa(n)),
                                          (function (e, t, n) {
                                              return e >= yn(t, n) && e < vn(t, n);
                                          })((e = ga(e)), t, n)
                                      );
                                  }),
                                  (qn.invoke = Ea),
                                  (qn.isArguments = Fs),
                                  (qn.isArray = Vs),
                                  (qn.isArrayBuffer = Ws),
                                  (qn.isArrayLike = Bs),
                                  (qn.isArrayLikeObject = Us),
                                  (qn.isBoolean = function (e) {
                                      return !0 === e || !1 === e || (ea(e) && Sr(e) == y);
                                  }),
                                  (qn.isBuffer = Xs),
                                  (qn.isDate = Ys),
                                  (qn.isElement = function (e) {
                                      return ea(e) && 1 === e.nodeType && !ra(e);
                                  }),
                                  (qn.isEmpty = function (e) {
                                      if (null == e) return !0;
                                      if (Bs(e) && (Vs(e) || "string" == typeof e || "function" == typeof e.splice || Xs(e) || la(e) || Fs(e))) return !e.length;
                                      var t = fo(e);
                                      if (t == k || t == A) return !e.size;
                                      if (xo(e)) return !Hr(e).length;
                                      for (var n in e) if (Le.call(e, n)) return !1;
                                      return !0;
                                  }),
                                  (qn.isEqual = function (e, t) {
                                      return jr(e, t);
                                  }),
                                  (qn.isEqualWith = function (e, t, n) {
                                      var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i;
                                      return r === i ? jr(e, t, i, n) : !!r;
                                  }),
                                  (qn.isError = Gs),
                                  (qn.isFinite = function (e) {
                                      return "number" == typeof e && Nt(e);
                                  }),
                                  (qn.isFunction = Qs),
                                  (qn.isInteger = Zs),
                                  (qn.isLength = Js),
                                  (qn.isMap = ta),
                                  (qn.isMatch = function (e, t) {
                                      return e === t || Pr(e, t, ao(t));
                                  }),
                                  (qn.isMatchWith = function (e, t, n) {
                                      return (n = "function" == typeof n ? n : i), Pr(e, t, ao(t), n);
                                  }),
                                  (qn.isNaN = function (e) {
                                      return na(e) && e != +e;
                                  }),
                                  (qn.isNative = function (e) {
                                      if (wo(e)) throw new xe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                      return Or(e);
                                  }),
                                  (qn.isNil = function (e) {
                                      return null == e;
                                  }),
                                  (qn.isNull = function (e) {
                                      return null === e;
                                  }),
                                  (qn.isNumber = na),
                                  (qn.isObject = Ks),
                                  (qn.isObjectLike = ea),
                                  (qn.isPlainObject = ra),
                                  (qn.isRegExp = ia),
                                  (qn.isSafeInteger = function (e) {
                                      return Zs(e) && e >= -9007199254740991 && e <= f;
                                  }),
                                  (qn.isSet = oa),
                                  (qn.isString = sa),
                                  (qn.isSymbol = aa),
                                  (qn.isTypedArray = la),
                                  (qn.isUndefined = function (e) {
                                      return e === i;
                                  }),
                                  (qn.isWeakMap = function (e) {
                                      return ea(e) && fo(e) == j;
                                  }),
                                  (qn.isWeakSet = function (e) {
                                      return ea(e) && "[object WeakSet]" == Sr(e);
                                  }),
                                  (qn.join = function (e, t) {
                                      return null == e ? "" : Wt.call(e, t);
                                  }),
                                  (qn.kebabCase = Va),
                                  (qn.last = Go),
                                  (qn.lastIndexOf = function (e, t, n) {
                                      var r = null == e ? 0 : e.length;
                                      if (!r) return -1;
                                      var o = r;
                                      return (
                                          n !== i && (o = (o = da(n)) < 0 ? vn(r + o, 0) : yn(o, r - 1)),
                                          t == t
                                              ? (function (e, t, n) {
                                                    for (var r = n + 1; r--; ) if (e[r] === t) return r;
                                                    return r;
                                                })(e, t, o)
                                              : qt(e, It, o, !0)
                                      );
                                  }),
                                  (qn.lowerCase = Wa),
                                  (qn.lowerFirst = Ba),
                                  (qn.lt = ua),
                                  (qn.lte = ca),
                                  (qn.max = function (e) {
                                      return e && e.length ? dr(e, nl, Tr) : i;
                                  }),
                                  (qn.maxBy = function (e, t) {
                                      return e && e.length ? dr(e, oo(t, 2), Tr) : i;
                                  }),
                                  (qn.mean = function (e) {
                                      return Ft(e, nl);
                                  }),
                                  (qn.meanBy = function (e, t) {
                                      return Ft(e, oo(t, 2));
                                  }),
                                  (qn.min = function (e) {
                                      return e && e.length ? dr(e, nl, Dr) : i;
                                  }),
                                  (qn.minBy = function (e, t) {
                                      return e && e.length ? dr(e, oo(t, 2), Dr) : i;
                                  }),
                                  (qn.stubArray = hl),
                                  (qn.stubFalse = gl),
                                  (qn.stubObject = function () {
                                      return {};
                                  }),
                                  (qn.stubString = function () {
                                      return "";
                                  }),
                                  (qn.stubTrue = function () {
                                      return !0;
                                  }),
                                  (qn.multiply = xl),
                                  (qn.nth = function (e, t) {
                                      return e && e.length ? Mr(e, da(t)) : i;
                                  }),
                                  (qn.noConflict = function () {
                                      return ft._ === this && (ft._ = qe), this;
                                  }),
                                  (qn.noop = al),
                                  (qn.now = _s),
                                  (qn.pad = function (e, t, n) {
                                      e = ya(e);
                                      var r = (t = da(t)) ? cn(e) : 0;
                                      if (!t || r >= t) return e;
                                      var i = (t - r) / 2;
                                      return Ii(dt(i), n) + e + Ii(pt(i), n);
                                  }),
                                  (qn.padEnd = function (e, t, n) {
                                      e = ya(e);
                                      var r = (t = da(t)) ? cn(e) : 0;
                                      return t && r < t ? e + Ii(t - r, n) : e;
                                  }),
                                  (qn.padStart = function (e, t, n) {
                                      e = ya(e);
                                      var r = (t = da(t)) ? cn(e) : 0;
                                      return t && r < t ? Ii(t - r, n) + e : e;
                                  }),
                                  (qn.parseInt = function (e, t, n) {
                                      return n || null == t ? (t = 0) : t && (t = +t), bn(ya(e).replace(re, ""), t || 0);
                                  }),
                                  (qn.random = function (e, t, n) {
                                      if (
                                          (n && "boolean" != typeof n && yo(e, t, n) && (t = n = i),
                                          n === i && ("boolean" == typeof t ? ((n = t), (t = i)) : "boolean" == typeof e && ((n = e), (e = i))),
                                          e === i && t === i ? ((e = 0), (t = 1)) : ((e = pa(e)), t === i ? ((t = e), (e = 0)) : (t = pa(t))),
                                          e > t)
                                      ) {
                                          var r = e;
                                          (e = t), (t = r);
                                      }
                                      if (n || e % 1 || t % 1) {
                                          var o = wn();
                                          return yn(e + o * (t - e + at("1e-" + ((o + "").length - 1))), t);
                                      }
                                      return Br(e, t);
                                  }),
                                  (qn.reduce = function (e, t, n) {
                                      var r = Vs(e) ? Lt : Bt,
                                          i = arguments.length < 3;
                                      return r(e, oo(t, 4), n, i, cr);
                                  }),
                                  (qn.reduceRight = function (e, t, n) {
                                      var r = Vs(e) ? Ht : Bt,
                                          i = arguments.length < 3;
                                      return r(e, oo(t, 4), n, i, fr);
                                  }),
                                  (qn.repeat = function (e, t, n) {
                                      return (t = (n ? yo(e, t, n) : t === i) ? 1 : da(t)), Ur(ya(e), t);
                                  }),
                                  (qn.replace = function () {
                                      var e = arguments,
                                          t = ya(e[0]);
                                      return e.length < 3 ? t : t.replace(e[1], e[2]);
                                  }),
                                  (qn.result = function (e, t, n) {
                                      var r = -1,
                                          o = (t = vi(t, e)).length;
                                      for (o || ((o = 1), (e = i)); ++r < o; ) {
                                          var s = null == e ? i : e[No(t[r])];
                                          s === i && ((r = o), (s = n)), (e = Qs(s) ? s.call(e) : s);
                                      }
                                      return e;
                                  }),
                                  (qn.round = kl),
                                  (qn.runInContext = e),
                                  (qn.sample = function (e) {
                                      return (Vs(e) ? Gn : Yr)(e);
                                  }),
                                  (qn.size = function (e) {
                                      if (null == e) return 0;
                                      if (Bs(e)) return sa(e) ? cn(e) : e.length;
                                      var t = fo(e);
                                      return t == k || t == A ? e.size : Hr(e).length;
                                  }),
                                  (qn.snakeCase = Ua),
                                  (qn.some = function (e, t, n) {
                                      var r = Vs(e) ? Dt : ti;
                                      return n && yo(e, t, n) && (t = i), r(e, oo(t, 3));
                                  }),
                                  (qn.sortedIndex = function (e, t) {
                                      return ni(e, t);
                                  }),
                                  (qn.sortedIndexBy = function (e, t, n) {
                                      return ri(e, t, oo(n, 2));
                                  }),
                                  (qn.sortedIndexOf = function (e, t) {
                                      var n = null == e ? 0 : e.length;
                                      if (n) {
                                          var r = ni(e, t);
                                          if (r < n && zs(e[r], t)) return r;
                                      }
                                      return -1;
                                  }),
                                  (qn.sortedLastIndex = function (e, t) {
                                      return ni(e, t, !0);
                                  }),
                                  (qn.sortedLastIndexBy = function (e, t, n) {
                                      return ri(e, t, oo(n, 2), !0);
                                  }),
                                  (qn.sortedLastIndexOf = function (e, t) {
                                      if (null != e && e.length) {
                                          var n = ni(e, t, !0) - 1;
                                          if (zs(e[n], t)) return n;
                                      }
                                      return -1;
                                  }),
                                  (qn.startCase = Xa),
                                  (qn.startsWith = function (e, t, n) {
                                      return (e = ya(e)), (n = null == n ? 0 : or(da(n), 0, e.length)), (t = si(t)), e.slice(n, n + t.length) == t;
                                  }),
                                  (qn.subtract = Sl),
                                  (qn.sum = function (e) {
                                      return e && e.length ? Ut(e, nl) : 0;
                                  }),
                                  (qn.sumBy = function (e, t) {
                                      return e && e.length ? Ut(e, oo(t, 2)) : 0;
                                  }),
                                  (qn.template = function (e, t, n) {
                                      var r = qn.templateSettings;
                                      n && yo(e, t, n) && (t = i), (e = ya(e)), (t = wa({}, t, r, Gi));
                                      var o,
                                          s,
                                          a = wa({}, t.imports, r.imports, Gi),
                                          l = ja(a),
                                          u = Qt(a, l),
                                          c = 0,
                                          f = t.interpolate || be,
                                          p = "__p += '",
                                          d = _e((t.escape || be).source + "|" + f.source + "|" + (f === Z ? fe : be).source + "|" + (t.evaluate || be).source + "|$", "g"),
                                          h = "//# sourceURL=" + (Le.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rt + "]") + "\n";
                                      e.replace(d, function (t, n, r, i, a, l) {
                                          return (
                                              r || (r = i),
                                              (p += e.slice(c, l).replace(we, nn)),
                                              n && ((o = !0), (p += "' +\n__e(" + n + ") +\n'")),
                                              a && ((s = !0), (p += "';\n" + a + ";\n__p += '")),
                                              r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                                              (c = l + t.length),
                                              t
                                          );
                                      }),
                                          (p += "';\n");
                                      var g = Le.call(t, "variable") && t.variable;
                                      if (g) {
                                          if (ue.test(g)) throw new xe("Invalid `variable` option passed into `_.template`");
                                      } else p = "with (obj) {\n" + p + "\n}\n";
                                      (p = (s ? p.replace(F, "") : p).replace(V, "$1").replace(W, "$1;")),
                                          (p =
                                              "function(" +
                                              (g || "obj") +
                                              ") {\n" +
                                              (g ? "" : "obj || (obj = {});\n") +
                                              "var __t, __p = ''" +
                                              (o ? ", __e = _.escape" : "") +
                                              (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") +
                                              p +
                                              "return __p\n}");
                                      var v = Za(function () {
                                          return ke(l, h + "return " + p).apply(i, u);
                                      });
                                      if (((v.source = p), Gs(v))) throw v;
                                      return v;
                                  }),
                                  (qn.times = function (e, t) {
                                      if ((e = da(e)) < 1 || e > f) return [];
                                      var n = d,
                                          r = yn(e, d);
                                      (t = oo(t)), (e -= d);
                                      for (var i = Xt(r, t); ++n < e; ) t(n);
                                      return i;
                                  }),
                                  (qn.toFinite = pa),
                                  (qn.toInteger = da),
                                  (qn.toLength = ha),
                                  (qn.toLower = function (e) {
                                      return ya(e).toLowerCase();
                                  }),
                                  (qn.toNumber = ga),
                                  (qn.toSafeInteger = function (e) {
                                      return e ? or(da(e), -9007199254740991, f) : 0 === e ? e : 0;
                                  }),
                                  (qn.toString = ya),
                                  (qn.toUpper = function (e) {
                                      return ya(e).toUpperCase();
                                  }),
                                  (qn.trim = function (e, t, n) {
                                      if ((e = ya(e)) && (n || t === i)) return Yt(e);
                                      if (!e || !(t = si(t))) return e;
                                      var r = fn(e),
                                          o = fn(t);
                                      return mi(r, Jt(r, o), Kt(r, o) + 1).join("");
                                  }),
                                  (qn.trimEnd = function (e, t, n) {
                                      if ((e = ya(e)) && (n || t === i)) return e.slice(0, pn(e) + 1);
                                      if (!e || !(t = si(t))) return e;
                                      var r = fn(e);
                                      return mi(r, 0, Kt(r, fn(t)) + 1).join("");
                                  }),
                                  (qn.trimStart = function (e, t, n) {
                                      if ((e = ya(e)) && (n || t === i)) return e.replace(re, "");
                                      if (!e || !(t = si(t))) return e;
                                      var r = fn(e);
                                      return mi(r, Jt(r, fn(t))).join("");
                                  }),
                                  (qn.truncate = function (e, t) {
                                      var n = 30,
                                          r = "...";
                                      if (Ks(t)) {
                                          var o = "separator" in t ? t.separator : o;
                                          (n = "length" in t ? da(t.length) : n), (r = "omission" in t ? si(t.omission) : r);
                                      }
                                      var s = (e = ya(e)).length;
                                      if (rn(e)) {
                                          var a = fn(e);
                                          s = a.length;
                                      }
                                      if (n >= s) return e;
                                      var l = n - cn(r);
                                      if (l < 1) return r;
                                      var u = a ? mi(a, 0, l).join("") : e.slice(0, l);
                                      if (o === i) return u + r;
                                      if ((a && (l += u.length - l), ia(o))) {
                                          if (e.slice(l).search(o)) {
                                              var c,
                                                  f = u;
                                              for (o.global || (o = _e(o.source, ya(pe.exec(o)) + "g")), o.lastIndex = 0; (c = o.exec(f)); ) var p = c.index;
                                              u = u.slice(0, p === i ? l : p);
                                          }
                                      } else if (e.indexOf(si(o), l) != l) {
                                          var d = u.lastIndexOf(o);
                                          d > -1 && (u = u.slice(0, d));
                                      }
                                      return u + r;
                                  }),
                                  (qn.unescape = function (e) {
                                      return (e = ya(e)) && X.test(e) ? e.replace(B, dn) : e;
                                  }),
                                  (qn.uniqueId = function (e) {
                                      var t = ++He;
                                      return ya(e) + t;
                                  }),
                                  (qn.upperCase = Ya),
                                  (qn.upperFirst = Ga),
                                  (qn.each = ys),
                                  (qn.eachRight = ms),
                                  (qn.first = Bo),
                                  sl(
                                      qn,
                                      ((vl = {}),
                                      mr(qn, function (e, t) {
                                          Le.call(qn.prototype, t) || (vl[t] = e);
                                      }),
                                      vl),
                                      { chain: !1 }
                                  ),
                                  (qn.VERSION = "4.17.21"),
                                  _t(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                                      qn[e].placeholder = qn;
                                  }),
                                  _t(["drop", "take"], function (e, t) {
                                      (Fn.prototype[e] = function (n) {
                                          n = n === i ? 1 : vn(da(n), 0);
                                          var r = this.__filtered__ && !t ? new Fn(this) : this.clone();
                                          return r.__filtered__ ? (r.__takeCount__ = yn(n, r.__takeCount__)) : r.__views__.push({ size: yn(n, d), type: e + (r.__dir__ < 0 ? "Right" : "") }), r;
                                      }),
                                          (Fn.prototype[e + "Right"] = function (t) {
                                              return this.reverse()[e](t).reverse();
                                          });
                                  }),
                                  _t(["filter", "map", "takeWhile"], function (e, t) {
                                      var n = t + 1,
                                          r = 1 == n || 3 == n;
                                      Fn.prototype[e] = function (e) {
                                          var t = this.clone();
                                          return t.__iteratees__.push({ iteratee: oo(e, 3), type: n }), (t.__filtered__ = t.__filtered__ || r), t;
                                      };
                                  }),
                                  _t(["head", "last"], function (e, t) {
                                      var n = "take" + (t ? "Right" : "");
                                      Fn.prototype[e] = function () {
                                          return this[n](1).value()[0];
                                      };
                                  }),
                                  _t(["initial", "tail"], function (e, t) {
                                      var n = "drop" + (t ? "" : "Right");
                                      Fn.prototype[e] = function () {
                                          return this.__filtered__ ? new Fn(this) : this[n](1);
                                      };
                                  }),
                                  (Fn.prototype.compact = function () {
                                      return this.filter(nl);
                                  }),
                                  (Fn.prototype.find = function (e) {
                                      return this.filter(e).head();
                                  }),
                                  (Fn.prototype.findLast = function (e) {
                                      return this.reverse().find(e);
                                  }),
                                  (Fn.prototype.invokeMap = Xr(function (e, t) {
                                      return "function" == typeof e
                                          ? new Fn(this)
                                          : this.map(function (n) {
                                                return $r(n, e, t);
                                            });
                                  })),
                                  (Fn.prototype.reject = function (e) {
                                      return this.filter(Hs(oo(e)));
                                  }),
                                  (Fn.prototype.slice = function (e, t) {
                                      e = da(e);
                                      var n = this;
                                      return n.__filtered__ && (e > 0 || t < 0) ? new Fn(n) : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)), t !== i && (n = (t = da(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n);
                                  }),
                                  (Fn.prototype.takeRightWhile = function (e) {
                                      return this.reverse().takeWhile(e).reverse();
                                  }),
                                  (Fn.prototype.toArray = function () {
                                      return this.take(d);
                                  }),
                                  mr(Fn.prototype, function (e, t) {
                                      var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                          r = /^(?:head|last)$/.test(t),
                                          o = qn[r ? "take" + ("last" == t ? "Right" : "") : t],
                                          s = r || /^find/.test(t);
                                      o &&
                                          (qn.prototype[t] = function () {
                                              var t = this.__wrapped__,
                                                  a = r ? [1] : arguments,
                                                  l = t instanceof Fn,
                                                  u = a[0],
                                                  c = l || Vs(t),
                                                  f = function (e) {
                                                      var t = o.apply(qn, Ot([e], a));
                                                      return r && p ? t[0] : t;
                                                  };
                                              c && n && "function" == typeof u && 1 != u.length && (l = c = !1);
                                              var p = this.__chain__,
                                                  d = !!this.__actions__.length,
                                                  h = s && !p,
                                                  g = l && !d;
                                              if (!s && c) {
                                                  t = g ? t : new Fn(this);
                                                  var v = e.apply(t, a);
                                                  return v.__actions__.push({ func: ps, args: [f], thisArg: i }), new In(v, p);
                                              }
                                              return h && g ? e.apply(this, a) : ((v = this.thru(f)), h ? (r ? v.value()[0] : v.value()) : v);
                                          });
                                  }),
                                  _t(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                                      var t = $e[e],
                                          n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                          r = /^(?:pop|shift)$/.test(e);
                                      qn.prototype[e] = function () {
                                          var e = arguments;
                                          if (r && !this.__chain__) {
                                              var i = this.value();
                                              return t.apply(Vs(i) ? i : [], e);
                                          }
                                          return this[n](function (n) {
                                              return t.apply(Vs(n) ? n : [], e);
                                          });
                                      };
                                  }),
                                  mr(Fn.prototype, function (e, t) {
                                      var n = qn[t];
                                      if (n) {
                                          var r = n.name + "";
                                          Le.call(En, r) || (En[r] = []), En[r].push({ name: t, func: n });
                                      }
                                  }),
                                  (En[Ri(i, 2).name] = [{ name: "wrapper", func: i }]),
                                  (Fn.prototype.clone = function () {
                                      var e = new Fn(this.__wrapped__);
                                      return (
                                          (e.__actions__ = Ci(this.__actions__)),
                                          (e.__dir__ = this.__dir__),
                                          (e.__filtered__ = this.__filtered__),
                                          (e.__iteratees__ = Ci(this.__iteratees__)),
                                          (e.__takeCount__ = this.__takeCount__),
                                          (e.__views__ = Ci(this.__views__)),
                                          e
                                      );
                                  }),
                                  (Fn.prototype.reverse = function () {
                                      if (this.__filtered__) {
                                          var e = new Fn(this);
                                          (e.__dir__ = -1), (e.__filtered__ = !0);
                                      } else (e = this.clone()).__dir__ *= -1;
                                      return e;
                                  }),
                                  (Fn.prototype.value = function () {
                                      var e = this.__wrapped__.value(),
                                          t = this.__dir__,
                                          n = Vs(e),
                                          r = t < 0,
                                          i = n ? e.length : 0,
                                          o = (function (e, t, n) {
                                              for (var r = -1, i = n.length; ++r < i; ) {
                                                  var o = n[r],
                                                      s = o.size;
                                                  switch (o.type) {
                                                      case "drop":
                                                          e += s;
                                                          break;
                                                      case "dropRight":
                                                          t -= s;
                                                          break;
                                                      case "take":
                                                          t = yn(t, e + s);
                                                          break;
                                                      case "takeRight":
                                                          e = vn(e, t - s);
                                                  }
                                              }
                                              return { start: e, end: t };
                                          })(0, i, this.__views__),
                                          s = o.start,
                                          a = o.end,
                                          l = a - s,
                                          u = r ? a : s - 1,
                                          c = this.__iteratees__,
                                          f = c.length,
                                          p = 0,
                                          d = yn(l, this.__takeCount__);
                                      if (!n || (!r && i == l && d == l)) return fi(e, this.__actions__);
                                      var h = [];
                                      e: for (; l-- && p < d; ) {
                                          for (var g = -1, v = e[(u += t)]; ++g < f; ) {
                                              var y = c[g],
                                                  m = y.iteratee,
                                                  b = y.type,
                                                  w = m(v);
                                              if (2 == b) v = w;
                                              else if (!w) {
                                                  if (1 == b) continue e;
                                                  break e;
                                              }
                                          }
                                          h[p++] = v;
                                      }
                                      return h;
                                  }),
                                  (qn.prototype.at = ds),
                                  (qn.prototype.chain = function () {
                                      return fs(this);
                                  }),
                                  (qn.prototype.commit = function () {
                                      return new In(this.value(), this.__chain__);
                                  }),
                                  (qn.prototype.next = function () {
                                      this.__values__ === i && (this.__values__ = fa(this.value()));
                                      var e = this.__index__ >= this.__values__.length;
                                      return { done: e, value: e ? i : this.__values__[this.__index__++] };
                                  }),
                                  (qn.prototype.plant = function (e) {
                                      for (var t, n = this; n instanceof Mn; ) {
                                          var r = qo(n);
                                          (r.__index__ = 0), (r.__values__ = i), t ? (o.__wrapped__ = r) : (t = r);
                                          var o = r;
                                          n = n.__wrapped__;
                                      }
                                      return (o.__wrapped__ = e), t;
                                  }),
                                  (qn.prototype.reverse = function () {
                                      var e = this.__wrapped__;
                                      if (e instanceof Fn) {
                                          var t = e;
                                          return this.__actions__.length && (t = new Fn(this)), (t = t.reverse()).__actions__.push({ func: ps, args: [Ko], thisArg: i }), new In(t, this.__chain__);
                                      }
                                      return this.thru(Ko);
                                  }),
                                  (qn.prototype.toJSON = qn.prototype.valueOf = qn.prototype.value = function () {
                                      return fi(this.__wrapped__, this.__actions__);
                                  }),
                                  (qn.prototype.first = qn.prototype.head),
                                  Ge &&
                                      (qn.prototype[Ge] = function () {
                                          return this;
                                      }),
                                  qn
                              );
                          })();
                      (ft._ = hn),
                          (r = function () {
                              return hn;
                          }.call(t, n, t, e)) === i || (e.exports = r);
                  }.call(this);
          },
          641: (e, t, n) => {
              var r, i;
              !(function (e) {
                  "use strict";
                  if (!e.jQuery) {
                      var t = function (e, n) {
                          return new t.fn.init(e, n);
                      };
                      (t.isWindow = function (e) {
                          return e && e === e.window;
                      }),
                          (t.type = function (e) {
                              return e ? ("object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e) : e + "";
                          }),
                          (t.isArray =
                              Array.isArray ||
                              function (e) {
                                  return "array" === t.type(e);
                              }),
                          (t.isPlainObject = function (e) {
                              var n;
                              if (!e || "object" !== t.type(e) || e.nodeType || t.isWindow(e)) return !1;
                              try {
                                  if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                              } catch (e) {
                                  return !1;
                              }
                              for (n in e);
                              return void 0 === n || i.call(e, n);
                          }),
                          (t.each = function (e, t, n) {
                              var r = 0,
                                  i = e.length,
                                  o = l(e);
                              if (n) {
                                  if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
                                  else for (r in e) if (e.hasOwnProperty(r) && !1 === t.apply(e[r], n)) break;
                              } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                              else for (r in e) if (e.hasOwnProperty(r) && !1 === t.call(e[r], r, e[r])) break;
                              return e;
                          }),
                          (t.data = function (e, r, i) {
                              if (void 0 === i) {
                                  var o = e[t.expando],
                                      s = o && n[o];
                                  if (void 0 === r) return s;
                                  if (s && r in s) return s[r];
                              } else if (void 0 !== r) {
                                  var a = e[t.expando] || (e[t.expando] = ++t.uuid);
                                  return (n[a] = n[a] || {}), (n[a][r] = i), i;
                              }
                          }),
                          (t.removeData = function (e, r) {
                              var i = e[t.expando],
                                  o = i && n[i];
                              o &&
                                  (r
                                      ? t.each(r, function (e, t) {
                                            delete o[t];
                                        })
                                      : delete n[i]);
                          }),
                          (t.extend = function () {
                              var e,
                                  n,
                                  r,
                                  i,
                                  o,
                                  s,
                                  a = arguments[0] || {},
                                  l = 1,
                                  u = arguments.length,
                                  c = !1;
                              for ("boolean" == typeof a && ((c = a), (a = arguments[l] || {}), l++), "object" != typeof a && "function" !== t.type(a) && (a = {}), l === u && ((a = this), l--); l < u; l++)
                                  if ((o = arguments[l]))
                                      for (i in o)
                                          o.hasOwnProperty(i) &&
                                              ((e = a[i]),
                                              a !== (r = o[i]) &&
                                                  (c && r && (t.isPlainObject(r) || (n = t.isArray(r)))
                                                      ? (n ? ((n = !1), (s = e && t.isArray(e) ? e : [])) : (s = e && t.isPlainObject(e) ? e : {}), (a[i] = t.extend(c, s, r)))
                                                      : void 0 !== r && (a[i] = r)));
                              return a;
                          }),
                          (t.queue = function (e, n, r) {
                              if (e) {
                                  n = (n || "fx") + "queue";
                                  var i,
                                      o,
                                      s = t.data(e, n);
                                  return r
                                      ? (!s || t.isArray(r)
                                            ? (s = t.data(
                                                  e,
                                                  n,
                                                  ((o = []),
                                                  (i = r) &&
                                                      (l(Object(i))
                                                          ? (function (e, t) {
                                                                for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
                                                                if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
                                                                e.length = i;
                                                            })(o, "string" == typeof i ? [i] : i)
                                                          : [].push.call(o, i)),
                                                  o)
                                              ))
                                            : s.push(r),
                                        s)
                                      : s || [];
                              }
                          }),
                          (t.dequeue = function (e, n) {
                              t.each(e.nodeType ? [e] : e, function (e, r) {
                                  n = n || "fx";
                                  var i = t.queue(r, n),
                                      o = i.shift();
                                  "inprogress" === o && (o = i.shift()),
                                      o &&
                                          ("fx" === n && i.unshift("inprogress"),
                                          o.call(r, function () {
                                              t.dequeue(r, n);
                                          }));
                              });
                          }),
                          (t.fn = t.prototype = {
                              init: function (e) {
                                  if (e.nodeType) return (this[0] = e), this;
                                  throw new Error("Not a DOM node.");
                              },
                              offset: function () {
                                  var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                                  return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
                              },
                              position: function () {
                                  var e = this[0],
                                      n = (function (e) {
                                          for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position.toLowerCase(); ) t = t.offsetParent;
                                          return t || document;
                                      })(e),
                                      r = this.offset(),
                                      i = /^(?:body|html)$/i.test(n.nodeName) ? { top: 0, left: 0 } : t(n).offset();
                                  return (
                                      (r.top -= parseFloat(e.style.marginTop) || 0),
                                      (r.left -= parseFloat(e.style.marginLeft) || 0),
                                      n.style && ((i.top += parseFloat(n.style.borderTopWidth) || 0), (i.left += parseFloat(n.style.borderLeftWidth) || 0)),
                                      { top: r.top - i.top, left: r.left - i.left }
                                  );
                              },
                          });
                      var n = {};
                      (t.expando = "velocity" + new Date().getTime()), (t.uuid = 0);
                      for (var r = {}, i = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), a = 0; a < s.length; a++) r["[object " + s[a] + "]"] = s[a].toLowerCase();
                      (t.fn.init.prototype = t.fn), (e.Velocity = { Utilities: t });
                  }
                  function l(e) {
                      var n = e.length,
                          r = t.type(e);
                      return "function" !== r && !t.isWindow(e) && (!(1 !== e.nodeType || !n) || "array" === r || 0 === n || ("number" == typeof n && n > 0 && n - 1 in e));
                  }
              })(window),
                  (function (o) {
                      "use strict";
                      "object" == typeof e.exports ? (e.exports = o()) : void 0 === (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) || (e.exports = i);
                  })(function () {
                      "use strict";
                      return (function (e, t, n, r) {
                          var i,
                              o = (function () {
                                  if (n.documentMode) return n.documentMode;
                                  for (var e = 7; e > 4; e--) {
                                      var t = n.createElement("div");
                                      if (((t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e"), t.getElementsByTagName("span").length)) return (t = null), e;
                                  }
                                  return r;
                              })(),
                              s =
                                  ((i = 0),
                                  t.webkitRequestAnimationFrame ||
                                      t.mozRequestAnimationFrame ||
                                      function (e) {
                                          var t,
                                              n = new Date().getTime();
                                          return (
                                              (t = Math.max(0, 16 - (n - i))),
                                              (i = n + t),
                                              setTimeout(function () {
                                                  e(n + t);
                                              }, t)
                                          );
                                      }),
                              a = (function () {
                                  var e = t.performance || {};
                                  if ("function" != typeof e.now) {
                                      var n = e.timing && e.timing.navigationStart ? e.timing.navigationStart : new Date().getTime();
                                      e.now = function () {
                                          return new Date().getTime() - n;
                                      };
                                  }
                                  return e;
                              })(),
                              l = (function () {
                                  var e = Array.prototype.slice;
                                  try {
                                      return e.call(n.documentElement), e;
                                  } catch (t) {
                                      return function (t, n) {
                                          var r = this.length;
                                          if (("number" != typeof t && (t = 0), "number" != typeof n && (n = r), this.slice)) return e.call(this, t, n);
                                          var i,
                                              o = [],
                                              s = t >= 0 ? t : Math.max(0, r + t),
                                              a = (n < 0 ? r + n : Math.min(n, r)) - s;
                                          if (a > 0)
                                              if (((o = new Array(a)), this.charAt)) for (i = 0; i < a; i++) o[i] = this.charAt(s + i);
                                              else for (i = 0; i < a; i++) o[i] = this[s + i];
                                          return o;
                                      };
                                  }
                              })(),
                              u = function () {
                                  return Array.prototype.includes
                                      ? function (e, t) {
                                            return e.includes(t);
                                        }
                                      : Array.prototype.indexOf
                                      ? function (e, t) {
                                            return e.indexOf(t) >= 0;
                                        }
                                      : function (e, t) {
                                            for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
                                            return !1;
                                        };
                              };
                          function c(e) {
                              return p.isWrapped(e) ? (e = l.call(e)) : p.isNode(e) && (e = [e]), e;
                          }
                          var f,
                              p = {
                                  isNumber: function (e) {
                                      return "number" == typeof e;
                                  },
                                  isString: function (e) {
                                      return "string" == typeof e;
                                  },
                                  isArray:
                                      Array.isArray ||
                                      function (e) {
                                          return "[object Array]" === Object.prototype.toString.call(e);
                                      },
                                  isFunction: function (e) {
                                      return "[object Function]" === Object.prototype.toString.call(e);
                                  },
                                  isNode: function (e) {
                                      return e && e.nodeType;
                                  },
                                  isWrapped: function (e) {
                                      return e && e !== t && p.isNumber(e.length) && !p.isString(e) && !p.isFunction(e) && !p.isNode(e) && (0 === e.length || p.isNode(e[0]));
                                  },
                                  isSVG: function (e) {
                                      return t.SVGElement && e instanceof t.SVGElement;
                                  },
                                  isEmptyObject: function (e) {
                                      for (var t in e) if (e.hasOwnProperty(t)) return !1;
                                      return !0;
                                  },
                              },
                              d = !1;
                          if ((e.fn && e.fn.jquery ? ((f = e), (d = !0)) : (f = t.Velocity.Utilities), o <= 8 && !d)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                          if (!(o <= 7)) {
                              var h = "swing",
                                  g = {
                                      State: {
                                          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
                                          isAndroid: /Android/i.test(t.navigator.userAgent),
                                          isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
                                          isChrome: t.chrome,
                                          isFirefox: /Firefox/i.test(t.navigator.userAgent),
                                          prefixElement: n.createElement("div"),
                                          prefixMatches: {},
                                          scrollAnchor: null,
                                          scrollPropertyLeft: null,
                                          scrollPropertyTop: null,
                                          isTicking: !1,
                                          calls: [],
                                          delayedElements: { count: 0 },
                                      },
                                      CSS: {},
                                      Utilities: f,
                                      Redirects: {},
                                      Easings: {},
                                      Promise: t.Promise,
                                      defaults: { queue: "", duration: 400, easing: h, begin: r, complete: r, progress: r, display: r, visibility: r, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0, promiseRejectEmpty: !0 },
                                      init: function (e) {
                                          f.data(e, "velocity", { isSVG: p.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                                      },
                                      hook: null,
                                      mock: !1,
                                      version: { major: 1, minor: 5, patch: 2 },
                                      debug: !1,
                                      timestamp: !0,
                                      pauseAll: function (e) {
                                          var t = new Date().getTime();
                                          f.each(g.State.calls, function (t, n) {
                                              if (n) {
                                                  if (e !== r && (n[2].queue !== e || !1 === n[2].queue)) return !0;
                                                  n[5] = { resume: !1 };
                                              }
                                          }),
                                              f.each(g.State.delayedElements, function (e, n) {
                                                  n && k(n, t);
                                              });
                                      },
                                      resumeAll: function (e) {
                                          new Date().getTime();
                                          f.each(g.State.calls, function (t, n) {
                                              if (n) {
                                                  if (e !== r && (n[2].queue !== e || !1 === n[2].queue)) return !0;
                                                  n[5] && (n[5].resume = !0);
                                              }
                                          }),
                                              f.each(g.State.delayedElements, function (e, t) {
                                                  t && S(t);
                                              });
                                      },
                                  };
                              t.pageYOffset !== r
                                  ? ((g.State.scrollAnchor = t), (g.State.scrollPropertyLeft = "pageXOffset"), (g.State.scrollPropertyTop = "pageYOffset"))
                                  : ((g.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body), (g.State.scrollPropertyLeft = "scrollLeft"), (g.State.scrollPropertyTop = "scrollTop"));
                              var v = (function () {
                                  function e(e) {
                                      return -e.tension * e.x - e.friction * e.v;
                                  }
                                  function t(t, n, r) {
                                      var i = { x: t.x + r.dx * n, v: t.v + r.dv * n, tension: t.tension, friction: t.friction };
                                      return { dx: i.v, dv: e(i) };
                                  }
                                  function n(n, r) {
                                      var i = { dx: n.v, dv: e(n) },
                                          o = t(n, 0.5 * r, i),
                                          s = t(n, 0.5 * r, o),
                                          a = t(n, r, s),
                                          l = (1 / 6) * (i.dx + 2 * (o.dx + s.dx) + a.dx),
                                          u = (1 / 6) * (i.dv + 2 * (o.dv + s.dv) + a.dv);
                                      return (n.x = n.x + l * r), (n.v = n.v + u * r), n;
                                  }
                                  return function e(t, r, i) {
                                      var o,
                                          s,
                                          a,
                                          l = { x: -1, v: 0, tension: null, friction: null },
                                          u = [0],
                                          c = 0,
                                          f = 1e-4;
                                      for (
                                          t = parseFloat(t) || 500, r = parseFloat(r) || 20, i = i || null, l.tension = t, l.friction = r, s = (o = null !== i) ? ((c = e(t, r)) / i) * 0.016 : 0.016;
                                          (a = n(a || l, s)), u.push(1 + a.x), (c += 16), Math.abs(a.x) > f && Math.abs(a.v) > f;

                                      );
                                      return o
                                          ? function (e) {
                                                return u[(e * (u.length - 1)) | 0];
                                            }
                                          : c;
                                  };
                              })();
                              (g.Easings = {
                                  linear: function (e) {
                                      return e;
                                  },
                                  swing: function (e) {
                                      return 0.5 - Math.cos(e * Math.PI) / 2;
                                  },
                                  spring: function (e) {
                                      return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
                                  },
                              }),
                                  f.each(
                                      [
                                          ["ease", [0.25, 0.1, 0.25, 1]],
                                          ["ease-in", [0.42, 0, 1, 1]],
                                          ["ease-out", [0, 0, 0.58, 1]],
                                          ["ease-in-out", [0.42, 0, 0.58, 1]],
                                          ["easeInSine", [0.47, 0, 0.745, 0.715]],
                                          ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                                          ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                                          ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                                          ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                                          ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                                          ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                                          ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                                          ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                                          ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                                          ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                                          ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                                          ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                                          ["easeOutQuint", [0.23, 1, 0.32, 1]],
                                          ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                                          ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                                          ["easeOutExpo", [0.19, 1, 0.22, 1]],
                                          ["easeInOutExpo", [1, 0, 0, 1]],
                                          ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                                          ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                                          ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                                      ],
                                      function (e, t) {
                                          g.Easings[t[0]] = _.apply(null, t[1]);
                                      }
                                  );
                              var y = (g.CSS = {
                                  RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
                                  Lists: {
                                      colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                                      transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                                      transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                                      units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                                      colorNames: {
                                          aliceblue: "240,248,255",
                                          antiquewhite: "250,235,215",
                                          aquamarine: "127,255,212",
                                          aqua: "0,255,255",
                                          azure: "240,255,255",
                                          beige: "245,245,220",
                                          bisque: "255,228,196",
                                          black: "0,0,0",
                                          blanchedalmond: "255,235,205",
                                          blueviolet: "138,43,226",
                                          blue: "0,0,255",
                                          brown: "165,42,42",
                                          burlywood: "222,184,135",
                                          cadetblue: "95,158,160",
                                          chartreuse: "127,255,0",
                                          chocolate: "210,105,30",
                                          coral: "255,127,80",
                                          cornflowerblue: "100,149,237",
                                          cornsilk: "255,248,220",
                                          crimson: "220,20,60",
                                          cyan: "0,255,255",
                                          darkblue: "0,0,139",
                                          darkcyan: "0,139,139",
                                          darkgoldenrod: "184,134,11",
                                          darkgray: "169,169,169",
                                          darkgrey: "169,169,169",
                                          darkgreen: "0,100,0",
                                          darkkhaki: "189,183,107",
                                          darkmagenta: "139,0,139",
                                          darkolivegreen: "85,107,47",
                                          darkorange: "255,140,0",
                                          darkorchid: "153,50,204",
                                          darkred: "139,0,0",
                                          darksalmon: "233,150,122",
                                          darkseagreen: "143,188,143",
                                          darkslateblue: "72,61,139",
                                          darkslategray: "47,79,79",
                                          darkturquoise: "0,206,209",
                                          darkviolet: "148,0,211",
                                          deeppink: "255,20,147",
                                          deepskyblue: "0,191,255",
                                          dimgray: "105,105,105",
                                          dimgrey: "105,105,105",
                                          dodgerblue: "30,144,255",
                                          firebrick: "178,34,34",
                                          floralwhite: "255,250,240",
                                          forestgreen: "34,139,34",
                                          fuchsia: "255,0,255",
                                          gainsboro: "220,220,220",
                                          ghostwhite: "248,248,255",
                                          gold: "255,215,0",
                                          goldenrod: "218,165,32",
                                          gray: "128,128,128",
                                          grey: "128,128,128",
                                          greenyellow: "173,255,47",
                                          green: "0,128,0",
                                          honeydew: "240,255,240",
                                          hotpink: "255,105,180",
                                          indianred: "205,92,92",
                                          indigo: "75,0,130",
                                          ivory: "255,255,240",
                                          khaki: "240,230,140",
                                          lavenderblush: "255,240,245",
                                          lavender: "230,230,250",
                                          lawngreen: "124,252,0",
                                          lemonchiffon: "255,250,205",
                                          lightblue: "173,216,230",
                                          lightcoral: "240,128,128",
                                          lightcyan: "224,255,255",
                                          lightgoldenrodyellow: "250,250,210",
                                          lightgray: "211,211,211",
                                          lightgrey: "211,211,211",
                                          lightgreen: "144,238,144",
                                          lightpink: "255,182,193",
                                          lightsalmon: "255,160,122",
                                          lightseagreen: "32,178,170",
                                          lightskyblue: "135,206,250",
                                          lightslategray: "119,136,153",
                                          lightsteelblue: "176,196,222",
                                          lightyellow: "255,255,224",
                                          limegreen: "50,205,50",
                                          lime: "0,255,0",
                                          linen: "250,240,230",
                                          magenta: "255,0,255",
                                          maroon: "128,0,0",
                                          mediumaquamarine: "102,205,170",
                                          mediumblue: "0,0,205",
                                          mediumorchid: "186,85,211",
                                          mediumpurple: "147,112,219",
                                          mediumseagreen: "60,179,113",
                                          mediumslateblue: "123,104,238",
                                          mediumspringgreen: "0,250,154",
                                          mediumturquoise: "72,209,204",
                                          mediumvioletred: "199,21,133",
                                          midnightblue: "25,25,112",
                                          mintcream: "245,255,250",
                                          mistyrose: "255,228,225",
                                          moccasin: "255,228,181",
                                          navajowhite: "255,222,173",
                                          navy: "0,0,128",
                                          oldlace: "253,245,230",
                                          olivedrab: "107,142,35",
                                          olive: "128,128,0",
                                          orangered: "255,69,0",
                                          orange: "255,165,0",
                                          orchid: "218,112,214",
                                          palegoldenrod: "238,232,170",
                                          palegreen: "152,251,152",
                                          paleturquoise: "175,238,238",
                                          palevioletred: "219,112,147",
                                          papayawhip: "255,239,213",
                                          peachpuff: "255,218,185",
                                          peru: "205,133,63",
                                          pink: "255,192,203",
                                          plum: "221,160,221",
                                          powderblue: "176,224,230",
                                          purple: "128,0,128",
                                          red: "255,0,0",
                                          rosybrown: "188,143,143",
                                          royalblue: "65,105,225",
                                          saddlebrown: "139,69,19",
                                          salmon: "250,128,114",
                                          sandybrown: "244,164,96",
                                          seagreen: "46,139,87",
                                          seashell: "255,245,238",
                                          sienna: "160,82,45",
                                          silver: "192,192,192",
                                          skyblue: "135,206,235",
                                          slateblue: "106,90,205",
                                          slategray: "112,128,144",
                                          snow: "255,250,250",
                                          springgreen: "0,255,127",
                                          steelblue: "70,130,180",
                                          tan: "210,180,140",
                                          teal: "0,128,128",
                                          thistle: "216,191,216",
                                          tomato: "255,99,71",
                                          turquoise: "64,224,208",
                                          violet: "238,130,238",
                                          wheat: "245,222,179",
                                          whitesmoke: "245,245,245",
                                          white: "255,255,255",
                                          yellowgreen: "154,205,50",
                                          yellow: "255,255,0",
                                      },
                                  },
                                  Hooks: {
                                      templates: {
                                          textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                          boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                          clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                          backgroundPosition: ["X Y", "0% 0%"],
                                          transformOrigin: ["X Y Z", "50% 50% 0px"],
                                          perspectiveOrigin: ["X Y", "50% 50%"],
                                      },
                                      registered: {},
                                      register: function () {
                                          for (var e = 0; e < y.Lists.colors.length; e++) {
                                              var t = "color" === y.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                              y.Hooks.templates[y.Lists.colors[e]] = ["Red Green Blue Alpha", t];
                                          }
                                          var n, r, i;
                                          if (o)
                                              for (n in y.Hooks.templates)
                                                  if (y.Hooks.templates.hasOwnProperty(n)) {
                                                      i = (r = y.Hooks.templates[n])[0].split(" ");
                                                      var s = r[1].match(y.RegEx.valueSplit);
                                                      "Color" === i[0] && (i.push(i.shift()), s.push(s.shift()), (y.Hooks.templates[n] = [i.join(" "), s.join(" ")]));
                                                  }
                                          for (n in y.Hooks.templates)
                                              if (y.Hooks.templates.hasOwnProperty(n))
                                                  for (var a in (i = (r = y.Hooks.templates[n])[0].split(" ")))
                                                      if (i.hasOwnProperty(a)) {
                                                          var l = n + i[a],
                                                              u = a;
                                                          y.Hooks.registered[l] = [n, u];
                                                      }
                                      },
                                      getRoot: function (e) {
                                          var t = y.Hooks.registered[e];
                                          return t ? t[0] : e;
                                      },
                                      getUnit: function (e, t) {
                                          var n = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                                          return n && u(y.Lists.units) ? n : "";
                                      },
                                      fixColors: function (e) {
                                          return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, n) {
                                              return y.Lists.colorNames.hasOwnProperty(n) ? (t || "rgba(") + y.Lists.colorNames[n] + (t ? "" : ",1)") : t + n;
                                          });
                                      },
                                      cleanRootPropertyValue: function (e, t) {
                                          return y.RegEx.valueUnwrap.test(t) && (t = t.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(t) && (t = y.Hooks.templates[e][1]), t;
                                      },
                                      extractValue: function (e, t) {
                                          var n = y.Hooks.registered[e];
                                          if (n) {
                                              var r = n[0],
                                                  i = n[1];
                                              return (t = y.Hooks.cleanRootPropertyValue(r, t)).toString().match(y.RegEx.valueSplit)[i];
                                          }
                                          return t;
                                      },
                                      injectValue: function (e, t, n) {
                                          var r = y.Hooks.registered[e];
                                          if (r) {
                                              var i,
                                                  o = r[0],
                                                  s = r[1];
                                              return ((i = (n = y.Hooks.cleanRootPropertyValue(o, n)).toString().match(y.RegEx.valueSplit))[s] = t), i.join(" ");
                                          }
                                          return n;
                                      },
                                  },
                                  Normalizations: {
                                      registered: {
                                          clip: function (e, t, n) {
                                              switch (e) {
                                                  case "name":
                                                      return "clip";
                                                  case "extract":
                                                      var r;
                                                      return y.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (r = n.toString().match(y.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : n;
                                                  case "inject":
                                                      return "rect(" + n + ")";
                                              }
                                          },
                                          blur: function (e, t, n) {
                                              switch (e) {
                                                  case "name":
                                                      return g.State.isFirefox ? "filter" : "-webkit-filter";
                                                  case "extract":
                                                      var r = parseFloat(n);
                                                      if (!r && 0 !== r) {
                                                          var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                          r = i ? i[1] : 0;
                                                      }
                                                      return r;
                                                  case "inject":
                                                      return parseFloat(n) ? "blur(" + n + ")" : "none";
                                              }
                                          },
                                          opacity: function (e, t, n) {
                                              if (o <= 8)
                                                  switch (e) {
                                                      case "name":
                                                          return "filter";
                                                      case "extract":
                                                          var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                                          return r ? r[1] / 100 : 1;
                                                      case "inject":
                                                          return (t.style.zoom = 1), parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")";
                                                  }
                                              else
                                                  switch (e) {
                                                      case "name":
                                                          return "opacity";
                                                      case "extract":
                                                      case "inject":
                                                          return n;
                                                  }
                                          },
                                      },
                                      register: function () {
                                          (o && !(o > 9)) || g.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
                                          for (var e = 0; e < y.Lists.transformsBase.length; e++)
                                              !(function () {
                                                  var t = y.Lists.transformsBase[e];
                                                  y.Normalizations.registered[t] = function (e, n, i) {
                                                      switch (e) {
                                                          case "name":
                                                              return "transform";
                                                          case "extract":
                                                              return x(n) === r || x(n).transformCache[t] === r ? (/^scale/i.test(t) ? 1 : 0) : x(n).transformCache[t].replace(/[()]/g, "");
                                                          case "inject":
                                                              var o = !1;
                                                              switch (t.substr(0, t.length - 1)) {
                                                                  case "translate":
                                                                      o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                                      break;
                                                                  case "scal":
                                                                  case "scale":
                                                                      g.State.isAndroid && x(n).transformCache[t] === r && i < 1 && (i = 1), (o = !/(\d)$/i.test(i));
                                                                      break;
                                                                  case "skew":
                                                                  case "rotate":
                                                                      o = !/(deg|\d)$/i.test(i);
                                                              }
                                                              return o || (x(n).transformCache[t] = "(" + i + ")"), x(n).transformCache[t];
                                                      }
                                                  };
                                              })();
                                          for (var t = 0; t < y.Lists.colors.length; t++)
                                              !(function () {
                                                  var e = y.Lists.colors[t];
                                                  y.Normalizations.registered[e] = function (t, n, i) {
                                                      switch (t) {
                                                          case "name":
                                                              return e;
                                                          case "extract":
                                                              var s;
                                                              if (y.RegEx.wrappedValueAlreadyExtracted.test(i)) s = i;
                                                              else {
                                                                  var a,
                                                                      l = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };
                                                                  /^[A-z]+$/i.test(i)
                                                                      ? (a = l[i] !== r ? l[i] : l.black)
                                                                      : y.RegEx.isHex.test(i)
                                                                      ? (a = "rgb(" + y.Values.hexToRgb(i).join(" ") + ")")
                                                                      : /^rgba?\(/i.test(i) || (a = l.black),
                                                                      (s = (a || i)
                                                                          .toString()
                                                                          .match(y.RegEx.valueUnwrap)[1]
                                                                          .replace(/,(\s+)?/g, " "));
                                                              }
                                                              return (!o || o > 8) && 3 === s.split(" ").length && (s += " 1"), s;
                                                          case "inject":
                                                              return /^rgb/.test(i)
                                                                  ? i
                                                                  : (o <= 8 ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"),
                                                                    (o <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")");
                                                      }
                                                  };
                                              })();
                                          function n(e, t, n) {
                                              if (("border-box" === y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) === (n || !1)) {
                                                  var r,
                                                      i,
                                                      o = 0,
                                                      s = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                                      a = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                                  for (r = 0; r < a.length; r++) (i = parseFloat(y.getPropertyValue(t, a[r]))), isNaN(i) || (o += i);
                                                  return n ? -o : o;
                                              }
                                              return 0;
                                          }
                                          function i(e, t) {
                                              return function (r, i, o) {
                                                  switch (r) {
                                                      case "name":
                                                          return e;
                                                      case "extract":
                                                          return parseFloat(o) + n(e, i, t);
                                                      case "inject":
                                                          return parseFloat(o) - n(e, i, t) + "px";
                                                  }
                                              };
                                          }
                                          (y.Normalizations.registered.innerWidth = i("width", !0)),
                                              (y.Normalizations.registered.innerHeight = i("height", !0)),
                                              (y.Normalizations.registered.outerWidth = i("width")),
                                              (y.Normalizations.registered.outerHeight = i("height"));
                                      },
                                  },
                                  Names: {
                                      camelCase: function (e) {
                                          return e.replace(/-(\w)/g, function (e, t) {
                                              return t.toUpperCase();
                                          });
                                      },
                                      SVGAttribute: function (e) {
                                          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                          return (o || (g.State.isAndroid && !g.State.isChrome)) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                                      },
                                      prefixCheck: function (e) {
                                          if (g.State.prefixMatches[e]) return [g.State.prefixMatches[e], !0];
                                          for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; n < r; n++) {
                                              var i;
                                              if (
                                                  ((i =
                                                      0 === n
                                                          ? e
                                                          : t[n] +
                                                            e.replace(/^\w/, function (e) {
                                                                return e.toUpperCase();
                                                            })),
                                                  p.isString(g.State.prefixElement.style[i]))
                                              )
                                                  return (g.State.prefixMatches[e] = i), [i, !0];
                                          }
                                          return [e, !1];
                                      },
                                  },
                                  Values: {
                                      hexToRgb: function (e) {
                                          var t;
                                          return (
                                              (e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
                                                  return t + t + n + n + r + r;
                                              })),
                                              (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                                          );
                                      },
                                      isCSSNullValue: function (e) {
                                          return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                                      },
                                      getUnitType: function (e) {
                                          return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                                      },
                                      getDisplayType: function (e) {
                                          var t = e && e.tagName.toString().toLowerCase();
                                          return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)
                                              ? "inline"
                                              : /^(li)$/i.test(t)
                                              ? "list-item"
                                              : /^(tr)$/i.test(t)
                                              ? "table-row"
                                              : /^(table)$/i.test(t)
                                              ? "table"
                                              : /^(tbody)$/i.test(t)
                                              ? "table-row-group"
                                              : "block";
                                      },
                                      addClass: function (e, t) {
                                          if (e)
                                              if (e.classList) e.classList.add(t);
                                              else if (p.isString(e.className)) e.className += (e.className.length ? " " : "") + t;
                                              else {
                                                  var n = e.getAttribute(o <= 7 ? "className" : "class") || "";
                                                  e.setAttribute("class", n + (n ? " " : "") + t);
                                              }
                                      },
                                      removeClass: function (e, t) {
                                          if (e)
                                              if (e.classList) e.classList.remove(t);
                                              else if (p.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                                              else {
                                                  var n = e.getAttribute(o <= 7 ? "className" : "class") || "";
                                                  e.setAttribute("class", n.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "));
                                              }
                                      },
                                  },
                                  getPropertyValue: function (e, n, i, s) {
                                      function a(e, n) {
                                          var i = 0;
                                          if (o <= 8) i = f.css(e, n);
                                          else {
                                              var l = !1;
                                              /^(width|height)$/.test(n) && 0 === y.getPropertyValue(e, "display") && ((l = !0), y.setPropertyValue(e, "display", y.Values.getDisplayType(e)));
                                              var u,
                                                  c = function () {
                                                      l && y.setPropertyValue(e, "display", "none");
                                                  };
                                              if (!s) {
                                                  if ("height" === n && "border-box" !== y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                      var p =
                                                          e.offsetHeight -
                                                          (parseFloat(y.getPropertyValue(e, "borderTopWidth")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "borderBottomWidth")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "paddingTop")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "paddingBottom")) || 0);
                                                      return c(), p;
                                                  }
                                                  if ("width" === n && "border-box" !== y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                      var d =
                                                          e.offsetWidth -
                                                          (parseFloat(y.getPropertyValue(e, "borderLeftWidth")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "borderRightWidth")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "paddingLeft")) || 0) -
                                                          (parseFloat(y.getPropertyValue(e, "paddingRight")) || 0);
                                                      return c(), d;
                                                  }
                                              }
                                              (u = x(e) === r ? t.getComputedStyle(e, null) : x(e).computedStyle ? x(e).computedStyle : (x(e).computedStyle = t.getComputedStyle(e, null))),
                                                  "borderColor" === n && (n = "borderTopColor"),
                                                  ("" !== (i = 9 === o && "filter" === n ? u.getPropertyValue(n) : u[n]) && null !== i) || (i = e.style[n]),
                                                  c();
                                          }
                                          if ("auto" === i && /^(top|right|bottom|left)$/i.test(n)) {
                                              var h = a(e, "position");
                                              ("fixed" === h || ("absolute" === h && /top|left/i.test(n))) && (i = f(e).position()[n] + "px");
                                          }
                                          return i;
                                      }
                                      var l;
                                      if (y.Hooks.registered[n]) {
                                          var u = n,
                                              c = y.Hooks.getRoot(u);
                                          i === r && (i = y.getPropertyValue(e, y.Names.prefixCheck(c)[0])), y.Normalizations.registered[c] && (i = y.Normalizations.registered[c]("extract", e, i)), (l = y.Hooks.extractValue(u, i));
                                      } else if (y.Normalizations.registered[n]) {
                                          var p, d;
                                          "transform" !== (p = y.Normalizations.registered[n]("name", e)) && ((d = a(e, y.Names.prefixCheck(p)[0])), y.Values.isCSSNullValue(d) && y.Hooks.templates[n] && (d = y.Hooks.templates[n][1])),
                                              (l = y.Normalizations.registered[n]("extract", e, d));
                                      }
                                      if (!/^[\d-]/.test(l)) {
                                          var h = x(e);
                                          if (h && h.isSVG && y.Names.SVGAttribute(n))
                                              if (/^(height|width)$/i.test(n))
                                                  try {
                                                      l = e.getBBox()[n];
                                                  } catch (e) {
                                                      l = 0;
                                                  }
                                              else l = e.getAttribute(n);
                                          else l = a(e, y.Names.prefixCheck(n)[0]);
                                      }
                                      return y.Values.isCSSNullValue(l) && (l = 0), g.debug >= 2 && console.log("Get " + n + ": " + l), l;
                                  },
                                  setPropertyValue: function (e, n, r, i, s) {
                                      var a = n;
                                      if ("scroll" === n) s.container ? (s.container["scroll" + s.direction] = r) : "Left" === s.direction ? t.scrollTo(r, s.alternateValue) : t.scrollTo(s.alternateValue, r);
                                      else if (y.Normalizations.registered[n] && "transform" === y.Normalizations.registered[n]("name", e)) y.Normalizations.registered[n]("inject", e, r), (a = "transform"), (r = x(e).transformCache[n]);
                                      else {
                                          if (y.Hooks.registered[n]) {
                                              var l = n,
                                                  u = y.Hooks.getRoot(n);
                                              (i = i || y.getPropertyValue(e, u)), (r = y.Hooks.injectValue(l, r, i)), (n = u);
                                          }
                                          if ((y.Normalizations.registered[n] && ((r = y.Normalizations.registered[n]("inject", e, r)), (n = y.Normalizations.registered[n]("name", e))), (a = y.Names.prefixCheck(n)[0]), o <= 8))
                                              try {
                                                  e.style[a] = r;
                                              } catch (e) {
                                                  g.debug && console.log("Browser does not support [" + r + "] for [" + a + "]");
                                              }
                                          else {
                                              var c = x(e);
                                              c && c.isSVG && y.Names.SVGAttribute(n) ? e.setAttribute(n, r) : (e.style[a] = r);
                                          }
                                          g.debug >= 2 && console.log("Set " + n + " (" + a + "): " + r);
                                      }
                                      return [a, r];
                                  },
                                  flushTransformCache: function (e) {
                                      var t = "",
                                          n = x(e);
                                      if ((o || (g.State.isAndroid && !g.State.isChrome)) && n && n.isSVG) {
                                          var r = function (t) {
                                                  return parseFloat(y.getPropertyValue(e, t));
                                              },
                                              i = {
                                                  translate: [r("translateX"), r("translateY")],
                                                  skewX: [r("skewX")],
                                                  skewY: [r("skewY")],
                                                  scale: 1 !== r("scale") ? [r("scale"), r("scale")] : [r("scaleX"), r("scaleY")],
                                                  rotate: [r("rotateZ"), 0, 0],
                                              };
                                          f.each(x(e).transformCache, function (e) {
                                              /^translate/i.test(e) ? (e = "translate") : /^scale/i.test(e) ? (e = "scale") : /^rotate/i.test(e) && (e = "rotate"), i[e] && ((t += e + "(" + i[e].join(" ") + ") "), delete i[e]);
                                          });
                                      } else {
                                          var s, a;
                                          f.each(x(e).transformCache, function (n) {
                                              if (((s = x(e).transformCache[n]), "transformPerspective" === n)) return (a = s), !0;
                                              9 === o && "rotateZ" === n && (n = "rotate"), (t += n + s + " ");
                                          }),
                                              a && (t = "perspective" + a + " " + t);
                                      }
                                      y.setPropertyValue(e, "transform", t);
                                  },
                              });
                              y.Hooks.register(),
                                  y.Normalizations.register(),
                                  (g.hook = function (e, t, n) {
                                      var i;
                                      return (
                                          (e = c(e)),
                                          f.each(e, function (e, o) {
                                              if ((x(o) === r && g.init(o), n === r)) i === r && (i = y.getPropertyValue(o, t));
                                              else {
                                                  var s = y.setPropertyValue(o, t, n);
                                                  "transform" === s[0] && g.CSS.flushTransformCache(o), (i = s);
                                              }
                                          }),
                                          i
                                      );
                                  });
                              var m = function () {
                                  var e;
                                  function i() {
                                      return o ? b.promise || null : s;
                                  }
                                  var o,
                                      s,
                                      a,
                                      l,
                                      d,
                                      h,
                                      v = arguments[0] && (arguments[0].p || (f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || p.isString(arguments[0].properties));
                                  p.isWrapped(this) ? ((o = !1), (a = 0), (l = this), (s = this)) : ((o = !0), (a = 1), (l = v ? arguments[0].elements || arguments[0].e : arguments[0]));
                                  var b = { promise: null, resolver: null, rejecter: null };
                                  if (
                                      (o &&
                                          g.Promise &&
                                          (b.promise = new g.Promise(function (e, t) {
                                              (b.resolver = e), (b.rejecter = t);
                                          })),
                                      v ? ((d = arguments[0].properties || arguments[0].p), (h = arguments[0].options || arguments[0].o)) : ((d = arguments[a]), (h = arguments[a + 1])),
                                      (l = c(l)))
                                  ) {
                                      var w,
                                          T = l.length,
                                          _ = 0;
                                      if (!/^(stop|finish|finishAll|pause|resume)$/i.test(d) && !f.isPlainObject(h)) {
                                          h = {};
                                          for (var E = a + 1; E < arguments.length; E++)
                                              p.isArray(arguments[E]) || (!/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]))
                                                  ? p.isString(arguments[E]) || p.isArray(arguments[E])
                                                      ? (h.easing = arguments[E])
                                                      : p.isFunction(arguments[E]) && (h.complete = arguments[E])
                                                  : (h.duration = arguments[E]);
                                      }
                                      switch (d) {
                                          case "scroll":
                                              w = "scroll";
                                              break;
                                          case "reverse":
                                              w = "reverse";
                                              break;
                                          case "pause":
                                              var j = new Date().getTime();
                                              return (
                                                  f.each(l, function (e, t) {
                                                      k(t, j);
                                                  }),
                                                  f.each(g.State.calls, function (e, t) {
                                                      var n = !1;
                                                      t &&
                                                          f.each(t[1], function (e, i) {
                                                              var o = h === r ? "" : h;
                                                              return (
                                                                  (!0 !== o && t[2].queue !== o && (h !== r || !1 !== t[2].queue)) ||
                                                                  (f.each(l, function (e, r) {
                                                                      if (r === i) return (t[5] = { resume: !1 }), (n = !0), !1;
                                                                  }),
                                                                  !n && void 0)
                                                              );
                                                          });
                                                  }),
                                                  i()
                                              );
                                          case "resume":
                                              return (
                                                  f.each(l, function (e, t) {
                                                      S(t);
                                                  }),
                                                  f.each(g.State.calls, function (e, t) {
                                                      var n = !1;
                                                      t &&
                                                          f.each(t[1], function (e, i) {
                                                              var o = h === r ? "" : h;
                                                              return (
                                                                  (!0 !== o && t[2].queue !== o && (h !== r || !1 !== t[2].queue)) ||
                                                                  !t[5] ||
                                                                  (f.each(l, function (e, r) {
                                                                      if (r === i) return (t[5].resume = !0), (n = !0), !1;
                                                                  }),
                                                                  !n && void 0)
                                                              );
                                                          });
                                                  }),
                                                  i()
                                              );
                                          case "finish":
                                          case "finishAll":
                                          case "stop":
                                              f.each(l, function (e, t) {
                                                  x(t) && x(t).delayTimer && (clearTimeout(x(t).delayTimer.setTimeout), x(t).delayTimer.next && x(t).delayTimer.next(), delete x(t).delayTimer),
                                                      "finishAll" !== d ||
                                                          (!0 !== h && !p.isString(h)) ||
                                                          (f.each(f.queue(t, p.isString(h) ? h : ""), function (e, t) {
                                                              p.isFunction(t) && t();
                                                          }),
                                                          f.queue(t, p.isString(h) ? h : "", []));
                                              });
                                              var P = [];
                                              return (
                                                  f.each(g.State.calls, function (e, t) {
                                                      t &&
                                                          f.each(t[1], function (n, i) {
                                                              var o = h === r ? "" : h;
                                                              if (!0 !== o && t[2].queue !== o && (h !== r || !1 !== t[2].queue)) return !0;
                                                              f.each(l, function (n, r) {
                                                                  if (r === i)
                                                                      if (
                                                                          ((!0 === h || p.isString(h)) &&
                                                                              (f.each(f.queue(r, p.isString(h) ? h : ""), function (e, t) {
                                                                                  p.isFunction(t) && t(null, !0);
                                                                              }),
                                                                              f.queue(r, p.isString(h) ? h : "", [])),
                                                                          "stop" === d)
                                                                      ) {
                                                                          var s = x(r);
                                                                          s &&
                                                                              s.tweensContainer &&
                                                                              (!0 === o || "" === o) &&
                                                                              f.each(s.tweensContainer, function (e, t) {
                                                                                  t.endValue = t.currentValue;
                                                                              }),
                                                                              P.push(e);
                                                                      } else ("finish" !== d && "finishAll" !== d) || (t[2].duration = 1);
                                                              });
                                                          });
                                                  }),
                                                  "stop" === d &&
                                                      (f.each(P, function (e, t) {
                                                          $(t, !0);
                                                      }),
                                                      b.promise && b.resolver(l)),
                                                  i()
                                              );
                                          default:
                                              if (!f.isPlainObject(d) || p.isEmptyObject(d)) {
                                                  if (p.isString(d) && g.Redirects[d]) {
                                                      var O = (e = f.extend({}, h)).duration,
                                                          L = e.delay || 0;
                                                      return (
                                                          !0 === e.backwards && (l = f.extend(!0, [], l).reverse()),
                                                          f.each(l, function (t, n) {
                                                              parseFloat(e.stagger) ? (e.delay = L + parseFloat(e.stagger) * t) : p.isFunction(e.stagger) && (e.delay = L + e.stagger.call(n, t, T)),
                                                                  e.drag &&
                                                                      ((e.duration = parseFloat(O) || (/^(callout|transition)/.test(d) ? 1e3 : 400)),
                                                                      (e.duration = Math.max(e.duration * (e.backwards ? 1 - t / T : (t + 1) / T), 0.75 * e.duration, 200))),
                                                                  g.Redirects[d].call(n, n, e || {}, t, T, l, b.promise ? b : r);
                                                          }),
                                                          i()
                                                      );
                                                  }
                                                  var H = "Velocity: First argument (" + d + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                                  return b.promise ? b.rejecter(new Error(H)) : t.console && console.log(H), i();
                                              }
                                              w = "start";
                                      }
                                      var D = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                                          N = [];
                                      f.each(l, function (e, i) {
                                          p.isNode(i) &&
                                              (function (e, i) {
                                                  var o,
                                                      s,
                                                      a = f.extend({}, g.defaults, h),
                                                      c = {};
                                                  switch (
                                                      (x(e) === r && g.init(e),
                                                      parseFloat(a.delay) &&
                                                          !1 !== a.queue &&
                                                          f.queue(e, a.queue, function (t, n) {
                                                              if (!0 === n) return !0;
                                                              g.velocityQueueEntryFlag = !0;
                                                              var r = g.State.delayedElements.count++;
                                                              g.State.delayedElements[r] = e;
                                                              var i,
                                                                  o =
                                                                      ((i = r),
                                                                      function () {
                                                                          (g.State.delayedElements[i] = !1), t();
                                                                      });
                                                              (x(e).delayBegin = new Date().getTime()), (x(e).delay = parseFloat(a.delay)), (x(e).delayTimer = { setTimeout: setTimeout(t, parseFloat(a.delay)), next: o });
                                                          }),
                                                      a.duration.toString().toLowerCase())
                                                  ) {
                                                      case "fast":
                                                          a.duration = 200;
                                                          break;
                                                      case "normal":
                                                          a.duration = 400;
                                                          break;
                                                      case "slow":
                                                          a.duration = 600;
                                                          break;
                                                      default:
                                                          a.duration = parseFloat(a.duration) || 1;
                                                  }
                                                  function v(s) {
                                                      var v, m;
                                                      if (a.begin && 0 === _)
                                                          try {
                                                              a.begin.call(l, l);
                                                          } catch (e) {
                                                              setTimeout(function () {
                                                                  throw e;
                                                              }, 1);
                                                          }
                                                      if ("scroll" === w) {
                                                          var k,
                                                              S,
                                                              $,
                                                              E = /^x$/i.test(a.axis) ? "Left" : "Top",
                                                              j = parseFloat(a.offset) || 0;
                                                          a.container
                                                              ? p.isWrapped(a.container) || p.isNode(a.container)
                                                                  ? ((a.container = a.container[0] || a.container), ($ = (k = a.container["scroll" + E]) + f(e).position()[E.toLowerCase()] + j))
                                                                  : (a.container = null)
                                                              : ((k = g.State.scrollAnchor[g.State["scrollProperty" + E]]),
                                                                (S = g.State.scrollAnchor[g.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]]),
                                                                ($ = f(e).offset()[E.toLowerCase()] + j)),
                                                              (c = {
                                                                  scroll: {
                                                                      rootPropertyValue: !1,
                                                                      startValue: k,
                                                                      currentValue: k,
                                                                      endValue: $,
                                                                      unitType: "",
                                                                      easing: a.easing,
                                                                      scrollData: { container: a.container, direction: E, alternateValue: S },
                                                                  },
                                                                  element: e,
                                                              }),
                                                              g.debug && console.log("tweensContainer (scroll): ", c.scroll, e);
                                                      } else if ("reverse" === w) {
                                                          if (!(v = x(e))) return;
                                                          if (!v.tweensContainer) return void f.dequeue(e, a.queue);
                                                          for (var P in ("none" === v.opts.display && (v.opts.display = "auto"),
                                                          "hidden" === v.opts.visibility && (v.opts.visibility = "visible"),
                                                          (v.opts.loop = !1),
                                                          (v.opts.begin = null),
                                                          (v.opts.complete = null),
                                                          h.easing || delete a.easing,
                                                          h.duration || delete a.duration,
                                                          (a = f.extend({}, v.opts, a)),
                                                          (m = f.extend(!0, {}, v ? v.tweensContainer : null))))
                                                              if (m.hasOwnProperty(P) && "element" !== P) {
                                                                  var O = m[P].startValue;
                                                                  (m[P].startValue = m[P].currentValue = m[P].endValue),
                                                                      (m[P].endValue = O),
                                                                      p.isEmptyObject(h) || (m[P].easing = a.easing),
                                                                      g.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(m[P]), e);
                                                              }
                                                          c = m;
                                                      } else if ("start" === w) {
                                                          (v = x(e)) && v.tweensContainer && !0 === v.isAnimating && (m = v.tweensContainer);
                                                          var L = function (t, n) {
                                                                  var r, o, s;
                                                                  return (
                                                                      p.isFunction(t) && (t = t.call(e, i, T)),
                                                                      p.isArray(t)
                                                                          ? ((r = t[0]),
                                                                            (!p.isArray(t[1]) && /^[\d-]/.test(t[1])) || p.isFunction(t[1]) || y.RegEx.isHex.test(t[1])
                                                                                ? (s = t[1])
                                                                                : (p.isString(t[1]) && !y.RegEx.isHex.test(t[1]) && g.Easings[t[1]]) || p.isArray(t[1])
                                                                                ? ((o = n ? t[1] : C(t[1], a.duration)), (s = t[2]))
                                                                                : (s = t[1] || t[2]))
                                                                          : (r = t),
                                                                      n || (o = o || a.easing),
                                                                      p.isFunction(r) && (r = r.call(e, i, T)),
                                                                      p.isFunction(s) && (s = s.call(e, i, T)),
                                                                      [r || 0, o, s]
                                                                  );
                                                              },
                                                              H = function (i, s) {
                                                                  var l,
                                                                      u = y.Hooks.getRoot(i),
                                                                      d = !1,
                                                                      h = s[0],
                                                                      b = s[1],
                                                                      w = s[2];
                                                                  if ((v && v.isSVG) || "tween" === u || !1 !== y.Names.prefixCheck(u)[1] || y.Normalizations.registered[u] !== r) {
                                                                      ((a.display !== r && null !== a.display && "none" !== a.display) || (a.visibility !== r && "hidden" !== a.visibility)) &&
                                                                          /opacity|filter/.test(i) &&
                                                                          !w &&
                                                                          0 !== h &&
                                                                          (w = 0),
                                                                          a._cacheValues && m && m[i]
                                                                              ? (w === r && (w = m[i].endValue + m[i].unitType), (d = v.rootPropertyValueCache[u]))
                                                                              : y.Hooks.registered[i]
                                                                              ? w === r
                                                                                  ? ((d = y.getPropertyValue(e, u)), (w = y.getPropertyValue(e, i, d)))
                                                                                  : (d = y.Hooks.templates[u][1])
                                                                              : w === r && (w = y.getPropertyValue(e, i));
                                                                      var x,
                                                                          k,
                                                                          S,
                                                                          T = !1,
                                                                          _ = function (e, t) {
                                                                              var n, r;
                                                                              return (
                                                                                  (r = (t || "0")
                                                                                      .toString()
                                                                                      .toLowerCase()
                                                                                      .replace(/[%A-z]+$/, function (e) {
                                                                                          return (n = e), "";
                                                                                      })),
                                                                                  n || (n = y.Values.getUnitType(e)),
                                                                                  [r, n]
                                                                              );
                                                                          };
                                                                      if (w !== h && p.isString(w) && p.isString(h)) {
                                                                          l = "";
                                                                          var C = 0,
                                                                              A = 0,
                                                                              $ = [],
                                                                              E = [],
                                                                              j = 0,
                                                                              P = 0,
                                                                              O = 0;
                                                                          for (w = y.Hooks.fixColors(w), h = y.Hooks.fixColors(h); C < w.length && A < h.length; ) {
                                                                              var L = w[C],
                                                                                  H = h[A];
                                                                              if (/[\d\.-]/.test(L) && /[\d\.-]/.test(H)) {
                                                                                  for (var N = L, R = H, q = ".", z = "."; ++C < w.length; ) {
                                                                                      if ((L = w[C]) === q) q = "..";
                                                                                      else if (!/\d/.test(L)) break;
                                                                                      N += L;
                                                                                  }
                                                                                  for (; ++A < h.length; ) {
                                                                                      if ((H = h[A]) === z) z = "..";
                                                                                      else if (!/\d/.test(H)) break;
                                                                                      R += H;
                                                                                  }
                                                                                  var M = y.Hooks.getUnit(w, C),
                                                                                      I = y.Hooks.getUnit(h, A);
                                                                                  if (((C += M.length), (A += I.length), M === I))
                                                                                      N === R ? (l += N + M) : ((l += "{" + $.length + (P ? "!" : "") + "}" + M), $.push(parseFloat(N)), E.push(parseFloat(R)));
                                                                                  else {
                                                                                      var F = parseFloat(N),
                                                                                          V = parseFloat(R);
                                                                                      (l +=
                                                                                          (j < 5 ? "calc" : "") +
                                                                                          "(" +
                                                                                          (F ? "{" + $.length + (P ? "!" : "") + "}" : "0") +
                                                                                          M +
                                                                                          " + " +
                                                                                          (V ? "{" + ($.length + (F ? 1 : 0)) + (P ? "!" : "") + "}" : "0") +
                                                                                          I +
                                                                                          ")"),
                                                                                          F && ($.push(F), E.push(0)),
                                                                                          V && ($.push(0), E.push(V));
                                                                                  }
                                                                              } else {
                                                                                  if (L !== H) {
                                                                                      j = 0;
                                                                                      break;
                                                                                  }
                                                                                  (l += L),
                                                                                      C++,
                                                                                      A++,
                                                                                      (0 === j && "c" === L) || (1 === j && "a" === L) || (2 === j && "l" === L) || (3 === j && "c" === L) || (j >= 4 && "(" === L)
                                                                                          ? j++
                                                                                          : ((j && j < 5) || (j >= 4 && ")" === L && --j < 5)) && (j = 0),
                                                                                      (0 === P && "r" === L) || (1 === P && "g" === L) || (2 === P && "b" === L) || (3 === P && "a" === L) || (P >= 3 && "(" === L)
                                                                                          ? (3 === P && "a" === L && (O = 1), P++)
                                                                                          : O && "," === L
                                                                                          ? ++O > 3 && (P = O = 0)
                                                                                          : ((O && P < (O ? 5 : 4)) || (P >= (O ? 4 : 3) && ")" === L && --P < (O ? 5 : 4))) && (P = O = 0);
                                                                              }
                                                                          }
                                                                          (C === w.length && A === h.length) || (g.debug && console.error('Trying to pattern match mis-matched strings ["' + h + '", "' + w + '"]'), (l = r)),
                                                                              l && ($.length ? (g.debug && console.log('Pattern found "' + l + '" -> ', $, E, "[" + w + "," + h + "]"), (w = $), (h = E), (k = S = "")) : (l = r));
                                                                      }
                                                                      if (
                                                                          (l ||
                                                                              ((w = (x = _(i, w))[0]),
                                                                              (S = x[1]),
                                                                              (h = (x = _(i, h))[0].replace(/^([+-\/*])=/, function (e, t) {
                                                                                  return (T = t), "";
                                                                              })),
                                                                              (k = x[1]),
                                                                              (w = parseFloat(w) || 0),
                                                                              (h = parseFloat(h) || 0),
                                                                              "%" === k &&
                                                                                  (/^(fontSize|lineHeight)$/.test(i)
                                                                                      ? ((h /= 100), (k = "em"))
                                                                                      : /^scale/.test(i)
                                                                                      ? ((h /= 100), (k = ""))
                                                                                      : /(Red|Green|Blue)$/i.test(i) && ((h = (h / 100) * 255), (k = "")))),
                                                                          /[\/*]/.test(T))
                                                                      )
                                                                          k = S;
                                                                      else if (S !== k && 0 !== w)
                                                                          if (0 === h) k = S;
                                                                          else {
                                                                              o =
                                                                                  o ||
                                                                                  (function () {
                                                                                      var r = { myParent: e.parentNode || n.body, position: y.getPropertyValue(e, "position"), fontSize: y.getPropertyValue(e, "fontSize") },
                                                                                          i = r.position === D.lastPosition && r.myParent === D.lastParent,
                                                                                          o = r.fontSize === D.lastFontSize;
                                                                                      (D.lastParent = r.myParent), (D.lastPosition = r.position), (D.lastFontSize = r.fontSize);
                                                                                      var s = 100,
                                                                                          a = {};
                                                                                      if (o && i) (a.emToPx = D.lastEmToPx), (a.percentToPxWidth = D.lastPercentToPxWidth), (a.percentToPxHeight = D.lastPercentToPxHeight);
                                                                                      else {
                                                                                          var l = v && v.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                                                          g.init(l),
                                                                                              r.myParent.appendChild(l),
                                                                                              f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                                                                                  g.CSS.setPropertyValue(l, t, "hidden");
                                                                                              }),
                                                                                              g.CSS.setPropertyValue(l, "position", r.position),
                                                                                              g.CSS.setPropertyValue(l, "fontSize", r.fontSize),
                                                                                              g.CSS.setPropertyValue(l, "boxSizing", "content-box"),
                                                                                              f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                                                                                  g.CSS.setPropertyValue(l, t, s + "%");
                                                                                              }),
                                                                                              g.CSS.setPropertyValue(l, "paddingLeft", s + "em"),
                                                                                              (a.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(l, "width", null, !0)) || 1) / s),
                                                                                              (a.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(l, "height", null, !0)) || 1) / s),
                                                                                              (a.emToPx = D.lastEmToPx = (parseFloat(y.getPropertyValue(l, "paddingLeft")) || 1) / s),
                                                                                              r.myParent.removeChild(l);
                                                                                      }
                                                                                      return (
                                                                                          null === D.remToPx && (D.remToPx = parseFloat(y.getPropertyValue(n.body, "fontSize")) || 16),
                                                                                          null === D.vwToPx && ((D.vwToPx = parseFloat(t.innerWidth) / 100), (D.vhToPx = parseFloat(t.innerHeight) / 100)),
                                                                                          (a.remToPx = D.remToPx),
                                                                                          (a.vwToPx = D.vwToPx),
                                                                                          (a.vhToPx = D.vhToPx),
                                                                                          g.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(a), e),
                                                                                          a
                                                                                      );
                                                                                  })();
                                                                              var W = /margin|padding|left|right|width|text|word|letter/i.test(i) || /X$/.test(i) || "x" === i ? "x" : "y";
                                                                              switch (S) {
                                                                                  case "%":
                                                                                      w *= "x" === W ? o.percentToPxWidth : o.percentToPxHeight;
                                                                                      break;
                                                                                  case "px":
                                                                                      break;
                                                                                  default:
                                                                                      w *= o[S + "ToPx"];
                                                                              }
                                                                              switch (k) {
                                                                                  case "%":
                                                                                      w *= 1 / ("x" === W ? o.percentToPxWidth : o.percentToPxHeight);
                                                                                      break;
                                                                                  case "px":
                                                                                      break;
                                                                                  default:
                                                                                      w *= 1 / o[k + "ToPx"];
                                                                              }
                                                                          }
                                                                      switch (T) {
                                                                          case "+":
                                                                              h = w + h;
                                                                              break;
                                                                          case "-":
                                                                              h = w - h;
                                                                              break;
                                                                          case "*":
                                                                              h *= w;
                                                                              break;
                                                                          case "/":
                                                                              h = w / h;
                                                                      }
                                                                      (c[i] = { rootPropertyValue: d, startValue: w, currentValue: w, endValue: h, unitType: k, easing: b }),
                                                                          l && (c[i].pattern = l),
                                                                          g.debug && console.log("tweensContainer (" + i + "): " + JSON.stringify(c[i]), e);
                                                                  } else g.debug && console.log("Skipping [" + u + "] due to a lack of browser support.");
                                                              };
                                                          for (var R in d)
                                                              if (d.hasOwnProperty(R)) {
                                                                  var q = y.Names.camelCase(R),
                                                                      z = L(d[R]);
                                                                  if (u(y.Lists.colors)) {
                                                                      var M = z[0],
                                                                          I = z[1],
                                                                          F = z[2];
                                                                      if (y.RegEx.isHex.test(M)) {
                                                                          for (var V = ["Red", "Green", "Blue"], W = y.Values.hexToRgb(M), B = F ? y.Values.hexToRgb(F) : r, U = 0; U < V.length; U++) {
                                                                              var X = [W[U]];
                                                                              I && X.push(I), B !== r && X.push(B[U]), H(q + V[U], X);
                                                                          }
                                                                          continue;
                                                                      }
                                                                  }
                                                                  H(q, z);
                                                              }
                                                          c.element = e;
                                                      }
                                                      c.element &&
                                                          (y.Values.addClass(e, "velocity-animating"),
                                                          N.push(c),
                                                          (v = x(e)) && ("" === a.queue && ((v.tweensContainer = c), (v.opts = a)), (v.isAnimating = !0)),
                                                          _ === T - 1 ? (g.State.calls.push([N, l, a, null, b.resolver, null, 0]), !1 === g.State.isTicking && ((g.State.isTicking = !0), A())) : _++);
                                                  }
                                                  if (
                                                      (!1 !== g.mock && (!0 === g.mock ? (a.duration = a.delay = 1) : ((a.duration *= parseFloat(g.mock) || 1), (a.delay *= parseFloat(g.mock) || 1))),
                                                      (a.easing = C(a.easing, a.duration)),
                                                      a.begin && !p.isFunction(a.begin) && (a.begin = null),
                                                      a.progress && !p.isFunction(a.progress) && (a.progress = null),
                                                      a.complete && !p.isFunction(a.complete) && (a.complete = null),
                                                      a.display !== r && null !== a.display && ((a.display = a.display.toString().toLowerCase()), "auto" === a.display && (a.display = g.CSS.Values.getDisplayType(e))),
                                                      a.visibility !== r && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()),
                                                      (a.mobileHA = a.mobileHA && g.State.isMobile && !g.State.isGingerbread),
                                                      !1 === a.queue)
                                                  )
                                                      if (a.delay) {
                                                          var m = g.State.delayedElements.count++;
                                                          g.State.delayedElements[m] = e;
                                                          var k =
                                                              ((s = m),
                                                              function () {
                                                                  (g.State.delayedElements[s] = !1), v();
                                                              });
                                                          (x(e).delayBegin = new Date().getTime()), (x(e).delay = parseFloat(a.delay)), (x(e).delayTimer = { setTimeout: setTimeout(v, parseFloat(a.delay)), next: k });
                                                      } else v();
                                                  else
                                                      f.queue(e, a.queue, function (e, t) {
                                                          if (!0 === t) return b.promise && b.resolver(l), !0;
                                                          (g.velocityQueueEntryFlag = !0), v();
                                                      });
                                                  ("" !== a.queue && "fx" !== a.queue) || "inprogress" === f.queue(e)[0] || f.dequeue(e);
                                              })(i, e);
                                      }),
                                          ((e = f.extend({}, g.defaults, h)).loop = parseInt(e.loop, 10));
                                      var R = 2 * e.loop - 1;
                                      if (e.loop)
                                          for (var q = 0; q < R; q++) {
                                              var z = { delay: e.delay, progress: e.progress };
                                              q === R - 1 && ((z.display = e.display), (z.visibility = e.visibility), (z.complete = e.complete)), m(l, "reverse", z);
                                          }
                                      return i();
                                  }
                                  b.promise && (d && h && !1 === h.promiseRejectEmpty ? b.resolver() : b.rejecter());
                              };
                              (g = f.extend(m, g)).animate = m;
                              var b = t.requestAnimationFrame || s;
                              if (!g.State.isMobile && n.hidden !== r) {
                                  var w = function () {
                                      n.hidden
                                          ? ((b = function (e) {
                                                return setTimeout(function () {
                                                    e(!0);
                                                }, 16);
                                            }),
                                            A())
                                          : (b = t.requestAnimationFrame || s);
                                  };
                                  w(), n.addEventListener("visibilitychange", w);
                              }
                              return (
                                  (e.Velocity = g),
                                  e !== t && ((e.fn.velocity = m), (e.fn.velocity.defaults = g.defaults)),
                                  f.each(["Down", "Up"], function (e, t) {
                                      g.Redirects["slide" + t] = function (e, n, i, o, s, a) {
                                          var l = f.extend({}, n),
                                              u = l.begin,
                                              c = l.complete,
                                              p = {},
                                              d = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" };
                                          l.display === r && (l.display = "Down" === t ? ("inline" === g.CSS.Values.getDisplayType(e) ? "inline-block" : "block") : "none"),
                                              (l.begin = function () {
                                                  for (var n in (0 === i && u && u.call(s, s), d))
                                                      if (d.hasOwnProperty(n)) {
                                                          p[n] = e.style[n];
                                                          var r = y.getPropertyValue(e, n);
                                                          d[n] = "Down" === t ? [r, 0] : [0, r];
                                                      }
                                                  (p.overflow = e.style.overflow), (e.style.overflow = "hidden");
                                              }),
                                              (l.complete = function () {
                                                  for (var t in p) p.hasOwnProperty(t) && (e.style[t] = p[t]);
                                                  i === o - 1 && (c && c.call(s, s), a && a.resolver(s));
                                              }),
                                              g(e, d, l);
                                      };
                                  }),
                                  f.each(["In", "Out"], function (e, t) {
                                      g.Redirects["fade" + t] = function (e, n, i, o, s, a) {
                                          var l = f.extend({}, n),
                                              u = l.complete,
                                              c = { opacity: "In" === t ? 1 : 0 };
                                          0 !== i && (l.begin = null),
                                              (l.complete =
                                                  i !== o - 1
                                                      ? null
                                                      : function () {
                                                            u && u.call(s, s), a && a.resolver(s);
                                                        }),
                                              l.display === r && (l.display = "In" === t ? "auto" : "none"),
                                              g(this, c, l);
                                      };
                                  }),
                                  g
                              );
                          }
                          function x(e) {
                              var t = f.data(e, "velocity");
                              return null === t ? r : t;
                          }
                          function k(e, t) {
                              var n = x(e);
                              n && n.delayTimer && !n.delayPaused && ((n.delayRemaining = n.delay - t + n.delayBegin), (n.delayPaused = !0), clearTimeout(n.delayTimer.setTimeout));
                          }
                          function S(e, t) {
                              var n = x(e);
                              n && n.delayTimer && n.delayPaused && ((n.delayPaused = !1), (n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining)));
                          }
                          function T(e) {
                              return function (t) {
                                  return Math.round(t * e) * (1 / e);
                              };
                          }
                          function _(e, n, r, i) {
                              var o = 0.1,
                                  s = "Float32Array" in t;
                              if (4 !== arguments.length) return !1;
                              for (var a = 0; a < 4; ++a) if ("number" != typeof arguments[a] || isNaN(arguments[a]) || !isFinite(arguments[a])) return !1;
                              (e = Math.min(e, 1)), (r = Math.min(r, 1)), (e = Math.max(e, 0)), (r = Math.max(r, 0));
                              var l = s ? new Float32Array(11) : new Array(11);
                              function u(e, t) {
                                  return 1 - 3 * t + 3 * e;
                              }
                              function c(e, t) {
                                  return 3 * t - 6 * e;
                              }
                              function f(e) {
                                  return 3 * e;
                              }
                              function p(e, t, n) {
                                  return ((u(t, n) * e + c(t, n)) * e + f(t)) * e;
                              }
                              function d(e, t, n) {
                                  return 3 * u(t, n) * e * e + 2 * c(t, n) * e + f(t);
                              }
                              var h = !1;
                              var g = function (t) {
                                  return (
                                      h ||
                                          ((h = !0),
                                          (e === n && r === i) ||
                                              (function () {
                                                  for (var t = 0; t < 11; ++t) l[t] = p(t * o, e, r);
                                              })()),
                                      e === n && r === i
                                          ? t
                                          : 0 === t
                                          ? 0
                                          : 1 === t
                                          ? 1
                                          : p(
                                                (function (t) {
                                                    for (var n = 0, i = 1; 10 !== i && l[i] <= t; ++i) n += o;
                                                    --i;
                                                    var s = n + ((t - l[i]) / (l[i + 1] - l[i])) * o,
                                                        a = d(s, e, r);
                                                    return a >= 0.001
                                                        ? (function (t, n) {
                                                              for (var i = 0; i < 4; ++i) {
                                                                  var o = d(n, e, r);
                                                                  if (0 === o) return n;
                                                                  n -= (p(n, e, r) - t) / o;
                                                              }
                                                              return n;
                                                          })(t, s)
                                                        : 0 === a
                                                        ? s
                                                        : (function (t, n, i) {
                                                              var o,
                                                                  s,
                                                                  a = 0;
                                                              do {
                                                                  (o = p((s = n + (i - n) / 2), e, r) - t) > 0 ? (i = s) : (n = s);
                                                              } while (Math.abs(o) > 1e-7 && ++a < 10);
                                                              return s;
                                                          })(t, n, n + o);
                                                })(t),
                                                n,
                                                i
                                            )
                                  );
                              };
                              g.getControlPoints = function () {
                                  return [
                                      { x: e, y: n },
                                      { x: r, y: i },
                                  ];
                              };
                              var v = "generateBezier(" + [e, n, r, i] + ")";
                              return (
                                  (g.toString = function () {
                                      return v;
                                  }),
                                  g
                              );
                          }
                          function C(e, t) {
                              var n = e;
                              return (
                                  p.isString(e)
                                      ? g.Easings[e] || (n = !1)
                                      : (n = p.isArray(e) && 1 === e.length ? T.apply(null, e) : p.isArray(e) && 2 === e.length ? v.apply(null, e.concat([t])) : !(!p.isArray(e) || 4 !== e.length) && _.apply(null, e)),
                                  !1 === n && (n = g.Easings[g.defaults.easing] ? g.defaults.easing : h),
                                  n
                              );
                          }
                          function A(e) {
                              if (e) {
                                  var t = g.timestamp && !0 !== e ? e : a.now(),
                                      n = g.State.calls.length;
                                  n > 1e4 &&
                                      ((g.State.calls = (function (e) {
                                          for (var t = -1, n = e ? e.length : 0, r = []; ++t < n; ) {
                                              var i = e[t];
                                              i && r.push(i);
                                          }
                                          return r;
                                      })(g.State.calls)),
                                      (n = g.State.calls.length));
                                  for (var i = 0; i < n; i++)
                                      if (g.State.calls[i]) {
                                          var s = g.State.calls[i],
                                              l = s[0],
                                              u = s[2],
                                              c = s[3],
                                              d = !c,
                                              h = null,
                                              v = s[5],
                                              m = s[6];
                                          if ((c || (c = g.State.calls[i][3] = t - 16), v)) {
                                              if (!0 !== v.resume) continue;
                                              (c = s[3] = Math.round(t - m - 16)), (s[5] = null);
                                          }
                                          m = s[6] = t - c;
                                          for (var w = Math.min(m / u.duration, 1), k = 0, S = l.length; k < S; k++) {
                                              var T = l[k],
                                                  _ = T.element;
                                              if (x(_)) {
                                                  var C = !1;
                                                  for (var E in (u.display !== r &&
                                                      null !== u.display &&
                                                      "none" !== u.display &&
                                                      ("flex" === u.display &&
                                                          f.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                                                              y.setPropertyValue(_, "display", t);
                                                          }),
                                                      y.setPropertyValue(_, "display", u.display)),
                                                  u.visibility !== r && "hidden" !== u.visibility && y.setPropertyValue(_, "visibility", u.visibility),
                                                  T))
                                                      if (T.hasOwnProperty(E) && "element" !== E) {
                                                          var j,
                                                              P = T[E],
                                                              O = p.isString(P.easing) ? g.Easings[P.easing] : P.easing;
                                                          if (p.isString(P.pattern)) {
                                                              var L =
                                                                  1 === w
                                                                      ? function (e, t, n) {
                                                                            var r = P.endValue[t];
                                                                            return n ? Math.round(r) : r;
                                                                        }
                                                                      : function (e, t, n) {
                                                                            var r = P.startValue[t],
                                                                                i = P.endValue[t] - r,
                                                                                o = r + i * O(w, u, i);
                                                                            return n ? Math.round(o) : o;
                                                                        };
                                                              j = P.pattern.replace(/{(\d+)(!)?}/g, L);
                                                          } else if (1 === w) j = P.endValue;
                                                          else {
                                                              var H = P.endValue - P.startValue;
                                                              j = P.startValue + H * O(w, u, H);
                                                          }
                                                          if (!d && j === P.currentValue) continue;
                                                          if (((P.currentValue = j), "tween" === E)) h = j;
                                                          else {
                                                              var D;
                                                              if (y.Hooks.registered[E]) {
                                                                  D = y.Hooks.getRoot(E);
                                                                  var N = x(_).rootPropertyValueCache[D];
                                                                  N && (P.rootPropertyValue = N);
                                                              }
                                                              var R = y.setPropertyValue(_, E, P.currentValue + (o < 9 && 0 === parseFloat(j) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                              y.Hooks.registered[E] &&
                                                                  (y.Normalizations.registered[D] ? (x(_).rootPropertyValueCache[D] = y.Normalizations.registered[D]("extract", null, R[1])) : (x(_).rootPropertyValueCache[D] = R[1])),
                                                                  "transform" === R[0] && (C = !0);
                                                          }
                                                      }
                                                  u.mobileHA && x(_).transformCache.translate3d === r && ((x(_).transformCache.translate3d = "(0px, 0px, 0px)"), (C = !0)), C && y.flushTransformCache(_);
                                              }
                                          }
                                          u.display !== r && "none" !== u.display && (g.State.calls[i][2].display = !1),
                                              u.visibility !== r && "hidden" !== u.visibility && (g.State.calls[i][2].visibility = !1),
                                              u.progress && u.progress.call(s[1], s[1], w, Math.max(0, c + u.duration - t), c, h),
                                              1 === w && $(i);
                                      }
                              }
                              g.State.isTicking && b(A);
                          }
                          function $(e, t) {
                              if (!g.State.calls[e]) return !1;
                              for (var n = g.State.calls[e][0], i = g.State.calls[e][1], o = g.State.calls[e][2], s = g.State.calls[e][4], a = !1, l = 0, u = n.length; l < u; l++) {
                                  var c = n[l].element;
                                  t || o.loop || ("none" === o.display && y.setPropertyValue(c, "display", o.display), "hidden" === o.visibility && y.setPropertyValue(c, "visibility", o.visibility));
                                  var p = x(c);
                                  if (!0 !== o.loop && (f.queue(c)[1] === r || !/\.velocityQueueEntryFlag/i.test(f.queue(c)[1])) && p) {
                                      (p.isAnimating = !1), (p.rootPropertyValueCache = {});
                                      var d = !1;
                                      f.each(y.Lists.transforms3D, function (e, t) {
                                          var n = /^scale/.test(t) ? 1 : 0,
                                              i = p.transformCache[t];
                                          p.transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && ((d = !0), delete p.transformCache[t]);
                                      }),
                                          o.mobileHA && ((d = !0), delete p.transformCache.translate3d),
                                          d && y.flushTransformCache(c),
                                          y.Values.removeClass(c, "velocity-animating");
                                  }
                                  if (!t && o.complete && !o.loop && l === u - 1)
                                      try {
                                          o.complete.call(i, i);
                                      } catch (e) {
                                          setTimeout(function () {
                                              throw e;
                                          }, 1);
                                      }
                                  s && !0 !== o.loop && s(i),
                                      p &&
                                          !0 === o.loop &&
                                          !t &&
                                          (f.each(p.tweensContainer, function (e, t) {
                                              if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                                                  var n = t.startValue;
                                                  (t.startValue = t.endValue), (t.endValue = n);
                                              }
                                              /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && ((t.endValue = 0), (t.startValue = 100));
                                          }),
                                          g(c, "reverse", { loop: !0, delay: o.delay })),
                                      !1 !== o.queue && f.dequeue(c, o.queue);
                              }
                              g.State.calls[e] = !1;
                              for (var h = 0, v = g.State.calls.length; h < v; h++)
                                  if (!1 !== g.State.calls[h]) {
                                      a = !0;
                                      break;
                                  }
                              !1 === a && ((g.State.isTicking = !1), delete g.State.calls, (g.State.calls = []));
                          }
                          jQuery.fn.velocity = jQuery.fn.animate;
                      })(window.jQuery || window.Zepto || window, window, window ? window.document : void 0);
                  });
          },
          297: (e, t, n) => {
              var r, i, o;
              !(function (s) {
                  "use strict";
                  (i = [n(755)]),
                      (r = function (e) {
                          var t,
                              n = window.Slick || {};
                          (((t = 0),
                          (n = function (n, r) {
                              var i,
                                  o = this;
                              (o.defaults = {
                                  accessibility: !0,
                                  adaptiveHeight: !0,
                                  appendArrows: e(n),
                                  appendDots: e(n),
                                  arrows: !0,
                                  asNavFor: null,
                                  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                                  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                                  autoplay: !1,
                                  autoplaySpeed: 3e3,
                                  centerMode: !1,
                                  centerPadding: "50px",
                                  cssEase: "ease",
                                  customPaging: function (t, n) {
                                      return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1);
                                  },
                                  dots: !1,
                                  dotsClass: "slick-dots",
                                  draggable: !0,
                                  easing: "linear",
                                  edgeFriction: 0.35,
                                  fade: !1,
                                  focusOnSelect: !1,
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
                                  zIndex: 1e3,
                              }),
                                  (o.initials = {
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
                                      slideCount: null,
                                      slideWidth: null,
                                      $slideTrack: null,
                                      $slides: null,
                                      sliding: !1,
                                      slideOffset: 0,
                                      swipeLeft: null,
                                      $list: null,
                                      touchObject: {},
                                      transformsEnabled: !1,
                                      unslicked: !1,
                                  }),
                                  e.extend(o, o.initials),
                                  (o.activeBreakpoint = null),
                                  (o.animType = null),
                                  (o.animProp = null),
                                  (o.breakpoints = []),
                                  (o.breakpointSettings = []),
                                  (o.cssTransitions = !1),
                                  (o.focussed = !1),
                                  (o.interrupted = !1),
                                  (o.hidden = "hidden"),
                                  (o.paused = !0),
                                  (o.positionProp = null),
                                  (o.respondTo = null),
                                  (o.rowCount = 1),
                                  (o.shouldClick = !0),
                                  (o.$slider = e(n)),
                                  (o.$slidesCache = null),
                                  (o.transformType = null),
                                  (o.transitionType = null),
                                  (o.visibilityChange = "visibilitychange"),
                                  (o.windowWidth = 0),
                                  (o.windowTimer = null),
                                  (i = e(n).data("slick") || {}),
                                  (o.options = e.extend({}, o.defaults, r, i)),
                                  (o.currentSlide = o.options.initialSlide),
                                  (o.originalSettings = o.options),
                                  void 0 !== document.mozHidden
                                      ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                                      : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                                  (o.autoPlay = e.proxy(o.autoPlay, o)),
                                  (o.autoPlayClear = e.proxy(o.autoPlayClear, o)),
                                  (o.autoPlayIterator = e.proxy(o.autoPlayIterator, o)),
                                  (o.changeSlide = e.proxy(o.changeSlide, o)),
                                  (o.clickHandler = e.proxy(o.clickHandler, o)),
                                  (o.selectHandler = e.proxy(o.selectHandler, o)),
                                  (o.setPosition = e.proxy(o.setPosition, o)),
                                  (o.swipeHandler = e.proxy(o.swipeHandler, o)),
                                  (o.dragHandler = e.proxy(o.dragHandler, o)),
                                  (o.keyHandler = e.proxy(o.keyHandler, o)),
                                  (o.instanceUid = t++),
                                  (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                                  o.registerBreakpoints(),
                                  o.init(!0);
                          })).prototype.activateADA = function () {
                              this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
                          }),
                              (n.prototype.addSlide = n.prototype.slickAdd = function (t, n, r) {
                                  var i = this;
                                  if ("boolean" == typeof n) (r = n), (n = null);
                                  else if (n < 0 || n >= i.slideCount) return !1;
                                  i.unload(),
                                      "number" == typeof n
                                          ? 0 === n && 0 === i.$slides.length
                                              ? e(t).appendTo(i.$slideTrack)
                                              : r
                                              ? e(t).insertBefore(i.$slides.eq(n))
                                              : e(t).insertAfter(i.$slides.eq(n))
                                          : !0 === r
                                          ? e(t).prependTo(i.$slideTrack)
                                          : e(t).appendTo(i.$slideTrack),
                                      (i.$slides = i.$slideTrack.children(this.options.slide)),
                                      i.$slideTrack.children(this.options.slide).detach(),
                                      i.$slideTrack.append(i.$slides),
                                      i.$slides.each(function (t, n) {
                                          e(n).attr("data-slick-index", t);
                                      }),
                                      (i.$slidesCache = i.$slides),
                                      i.reinit();
                              }),
                              (n.prototype.animateHeight = function () {
                                  var e = this;
                                  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                      e.$list.animate({ height: t }, e.options.speed);
                                  }
                              }),
                              (n.prototype.animateSlide = function (t, n) {
                                  var r = {},
                                      i = this;
                                  i.animateHeight(),
                                      !0 === i.options.rtl && !1 === i.options.vertical && (t = -t),
                                      !1 === i.transformsEnabled
                                          ? !1 === i.options.vertical
                                              ? i.$slideTrack.animate({ left: t }, i.options.speed, i.options.easing, n)
                                              : i.$slideTrack.animate({ top: t }, i.options.speed, i.options.easing, n)
                                          : !1 === i.cssTransitions
                                          ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                                            e({ animStart: i.currentLeft }).animate(
                                                { animStart: t },
                                                {
                                                    duration: i.options.speed,
                                                    easing: i.options.easing,
                                                    step: function (e) {
                                                        (e = Math.ceil(e)),
                                                            !1 === i.options.vertical ? ((r[i.animType] = "translate(" + e + "px, 0px)"), i.$slideTrack.css(r)) : ((r[i.animType] = "translate(0px," + e + "px)"), i.$slideTrack.css(r));
                                                    },
                                                    complete: function () {
                                                        n && n.call();
                                                    },
                                                }
                                            ))
                                          : (i.applyTransition(),
                                            (t = Math.ceil(t)),
                                            !1 === i.options.vertical ? (r[i.animType] = "translate3d(" + t + "px, 0px, 0px)") : (r[i.animType] = "translate3d(0px," + t + "px, 0px)"),
                                            i.$slideTrack.css(r),
                                            n &&
                                                setTimeout(function () {
                                                    i.disableTransition(), n.call();
                                                }, i.options.speed));
                              }),
                              (n.prototype.getNavTarget = function () {
                                  var t = this.options.asNavFor;
                                  return t && null !== t && (t = e(t).not(this.$slider)), t;
                              }),
                              (n.prototype.asNavFor = function (t) {
                                  var n = this.getNavTarget();
                                  null !== n &&
                                      "object" == typeof n &&
                                      n.each(function () {
                                          var n = e(this).slick("getSlick");
                                          n.unslicked || n.slideHandler(t, !0);
                                      });
                              }),
                              (n.prototype.applyTransition = function (e) {
                                  var t = this,
                                      n = {};
                                  !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                                      !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                              }),
                              (n.prototype.autoPlay = function () {
                                  var e = this;
                                  e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
                              }),
                              (n.prototype.autoPlayClear = function () {
                                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                              }),
                              (n.prototype.autoPlayIterator = function () {
                                  var e = this,
                                      t = e.currentSlide + e.options.slidesToScroll;
                                  e.paused ||
                                      e.interrupted ||
                                      e.focussed ||
                                      (!1 === e.options.infinite &&
                                          (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                                              ? (e.direction = 0)
                                              : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                                      e.slideHandler(t));
                              }),
                              (n.prototype.buildArrows = function () {
                                  var t = this;
                                  !0 === t.options.arrows &&
                                      ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
                                      (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
                                      t.slideCount > t.options.slidesToShow
                                          ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                            t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                                            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                                            !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                                          : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                              }),
                              (n.prototype.buildDots = function () {
                                  var t,
                                      n,
                                      r = this;
                                  if (!0 === r.options.dots && r.slideCount > r.options.slidesToShow) {
                                      for (r.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(r.options.dotsClass), t = 0; t <= r.getDotCount(); t += 1) n.append(e("<li />").append(r.options.customPaging.call(this, r, t)));
                                      (r.$dots = n.appendTo(r.options.appendDots)), r.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
                                  }
                              }),
                              (n.prototype.buildOut = function () {
                                  var t = this;
                                  (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                                      (t.slideCount = t.$slides.length),
                                      t.$slides.each(function (t, n) {
                                          e(n)
                                              .attr("data-slick-index", t)
                                              .data("originalStyling", e(n).attr("style") || "");
                                      }),
                                      t.$slider.addClass("slick-slider"),
                                      (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                                      (t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                                      t.$slideTrack.css("opacity", 0),
                                      (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                                      e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                                      t.setupInfinite(),
                                      t.buildArrows(),
                                      t.buildDots(),
                                      t.updateDots(),
                                      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                      !0 === t.options.draggable && t.$list.addClass("draggable");
                              }),
                              (n.prototype.buildRows = function () {
                                  var e,
                                      t,
                                      n,
                                      r,
                                      i,
                                      o,
                                      s,
                                      a = this;
                                  if (((r = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 1)) {
                                      for (s = a.options.slidesPerRow * a.options.rows, i = Math.ceil(o.length / s), e = 0; e < i; e++) {
                                          var l = document.createElement("div");
                                          for (t = 0; t < a.options.rows; t++) {
                                              var u = document.createElement("div");
                                              for (n = 0; n < a.options.slidesPerRow; n++) {
                                                  var c = e * s + (t * a.options.slidesPerRow + n);
                                                  o.get(c) && u.appendChild(o.get(c));
                                              }
                                              l.appendChild(u);
                                          }
                                          r.appendChild(l);
                                      }
                                      a.$slider.empty().append(r),
                                          a.$slider
                                              .children()
                                              .children()
                                              .children()
                                              .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                                  }
                              }),
                              (n.prototype.checkResponsive = function (t, n) {
                                  var r,
                                      i,
                                      o,
                                      s = this,
                                      a = !1,
                                      l = s.$slider.width(),
                                      u = window.innerWidth || e(window).width();
                                  if (
                                      ("window" === s.respondTo ? (o = u) : "slider" === s.respondTo ? (o = l) : "min" === s.respondTo && (o = Math.min(u, l)),
                                      s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
                                  ) {
                                      for (r in ((i = null), s.breakpoints))
                                          s.breakpoints.hasOwnProperty(r) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[r] && (i = s.breakpoints[r]) : o > s.breakpoints[r] && (i = s.breakpoints[r]));
                                      null !== i
                                          ? null !== s.activeBreakpoint
                                              ? (i !== s.activeBreakpoint || n) &&
                                                ((s.activeBreakpoint = i),
                                                "unslick" === s.breakpointSettings[i]
                                                    ? s.unslick(i)
                                                    : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[i])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                (a = i))
                                              : ((s.activeBreakpoint = i),
                                                "unslick" === s.breakpointSettings[i]
                                                    ? s.unslick(i)
                                                    : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[i])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                (a = i))
                                          : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = i)),
                                          t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                                  }
                              }),
                              (n.prototype.changeSlide = function (t, n) {
                                  var r,
                                      i,
                                      o = this,
                                      s = e(t.currentTarget);
                                  switch (
                                      (s.is("a") && t.preventDefault(),
                                      s.is("li") || (s = s.closest("li")),
                                      (r = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
                                      t.data.message)
                                  ) {
                                      case "previous":
                                          (i = 0 === r ? o.options.slidesToScroll : o.options.slidesToShow - r), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, n);
                                          break;
                                      case "next":
                                          (i = 0 === r ? o.options.slidesToScroll : r), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, n);
                                          break;
                                      case "index":
                                          var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
                                          o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
                                          break;
                                      default:
                                          return;
                                  }
                              }),
                              (n.prototype.checkNavigable = function (e) {
                                  var t, n;
                                  if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                                  else
                                      for (var r in t) {
                                          if (e < t[r]) {
                                              e = n;
                                              break;
                                          }
                                          n = t[r];
                                      }
                                  return e;
                              }),
                              (n.prototype.cleanUpEvents = function () {
                                  var t = this;
                                  t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                                      t.$slider.off("focus.slick blur.slick"),
                                      !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
                                      t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                                      t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                                      t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                                      t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                                      t.$list.off("click.slick", t.clickHandler),
                                      e(document).off(t.visibilityChange, t.visibility),
                                      t.cleanUpSlideEvents(),
                                      !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                                      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                                      e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                                      e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                                      e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                                      e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
                                      e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
                              }),
                              (n.prototype.cleanUpSlideEvents = function () {
                                  var t = this;
                                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                              }),
                              (n.prototype.cleanUpRows = function () {
                                  var e,
                                      t = this;
                                  t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
                              }),
                              (n.prototype.clickHandler = function (e) {
                                  !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
                              }),
                              (n.prototype.destroy = function (t) {
                                  var n = this;
                                  n.autoPlayClear(),
                                      (n.touchObject = {}),
                                      n.cleanUpEvents(),
                                      e(".slick-cloned", n.$slider).detach(),
                                      n.$dots && n.$dots.remove(),
                                      n.$prevArrow &&
                                          n.$prevArrow.length &&
                                          (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                          n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                                      n.$nextArrow &&
                                          n.$nextArrow.length &&
                                          (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                          n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                                      n.$slides &&
                                          (n.$slides
                                              .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                                              .removeAttr("aria-hidden")
                                              .removeAttr("data-slick-index")
                                              .each(function () {
                                                  e(this).attr("style", e(this).data("originalStyling"));
                                              }),
                                          n.$slideTrack.children(this.options.slide).detach(),
                                          n.$slideTrack.detach(),
                                          n.$list.detach(),
                                          n.$slider.append(n.$slides)),
                                      n.cleanUpRows(),
                                      n.$slider.removeClass("slick-slider"),
                                      n.$slider.removeClass("slick-initialized"),
                                      n.$slider.removeClass("slick-dotted"),
                                      (n.unslicked = !0),
                                      t || n.$slider.trigger("destroy", [n]);
                              }),
                              (n.prototype.disableTransition = function (e) {
                                  var t = this,
                                      n = {};
                                  (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                              }),
                              (n.prototype.fadeSlide = function (e, t) {
                                  var n = this;
                                  !1 === n.cssTransitions
                                      ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                                      : (n.applyTransition(e),
                                        n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                                        t &&
                                            setTimeout(function () {
                                                n.disableTransition(e), t.call();
                                            }, n.options.speed));
                              }),
                              (n.prototype.fadeSlideOut = function (e) {
                                  var t = this;
                                  !1 === t.cssTransitions
                                      ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
                                      : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                              }),
                              (n.prototype.filterSlides = n.prototype.slickFilter = function (e) {
                                  var t = this;
                                  null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
                              }),
                              (n.prototype.focusHandler = function () {
                                  var t = this;
                                  t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
                                      n.stopImmediatePropagation();
                                      var r = e(this);
                                      setTimeout(function () {
                                          t.options.pauseOnFocus && ((t.focussed = r.is(":focus")), t.autoPlay());
                                      }, 0);
                                  });
                              }),
                              (n.prototype.getCurrent = n.prototype.slickCurrentSlide = function () {
                                  return this.currentSlide;
                              }),
                              (n.prototype.getDotCount = function () {
                                  var e = this,
                                      t = 0,
                                      n = 0,
                                      r = 0;
                                  if (!0 === e.options.infinite)
                                      for (; t < e.slideCount; ) ++r, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                  else if (!0 === e.options.centerMode) r = e.slideCount;
                                  else if (e.options.asNavFor)
                                      for (; t < e.slideCount; ) ++r, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                  else r = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                                  return r - 1;
                              }),
                              (n.prototype.getLeft = function (e) {
                                  var t,
                                      n,
                                      r,
                                      i = this,
                                      o = 0;
                                  return (
                                      (i.slideOffset = 0),
                                      (n = i.$slides.first().outerHeight(!0)),
                                      !0 === i.options.infinite
                                          ? (i.slideCount > i.options.slidesToShow && ((i.slideOffset = i.slideWidth * i.options.slidesToShow * -1), (o = n * i.options.slidesToShow * -1)),
                                            i.slideCount % i.options.slidesToScroll != 0 &&
                                                e + i.options.slidesToScroll > i.slideCount &&
                                                i.slideCount > i.options.slidesToShow &&
                                                (e > i.slideCount
                                                    ? ((i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1), (o = (i.options.slidesToShow - (e - i.slideCount)) * n * -1))
                                                    : ((i.slideOffset = (i.slideCount % i.options.slidesToScroll) * i.slideWidth * -1), (o = (i.slideCount % i.options.slidesToScroll) * n * -1))))
                                          : e + i.options.slidesToShow > i.slideCount && ((i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth), (o = (e + i.options.slidesToShow - i.slideCount) * n)),
                                      i.slideCount <= i.options.slidesToShow && ((i.slideOffset = 0), (o = 0)),
                                      !0 === i.options.centerMode && !0 === i.options.infinite
                                          ? (i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth)
                                          : !0 === i.options.centerMode && ((i.slideOffset = 0), (i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2))),
                                      (t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * n * -1 + o),
                                      !0 === i.options.variableWidth &&
                                          ((r = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow)),
                                          (t = !0 === i.options.rtl ? (r[0] ? -1 * (i.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0) : r[0] ? -1 * r[0].offsetLeft : 0),
                                          !0 === i.options.centerMode &&
                                              ((r =
                                                  i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite
                                                      ? i.$slideTrack.children(".slick-slide").eq(e)
                                                      : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1)),
                                              (t = !0 === i.options.rtl ? (r[0] ? -1 * (i.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0) : r[0] ? -1 * r[0].offsetLeft : 0),
                                              (t += (i.$list.width() - r.outerWidth()) / 2))),
                                      t
                                  );
                              }),
                              (n.prototype.getOption = n.prototype.slickGetOption = function (e) {
                                  return this.options[e];
                              }),
                              (n.prototype.getNavigableIndexes = function () {
                                  var e,
                                      t = this,
                                      n = 0,
                                      r = 0,
                                      i = [];
                                  for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (r = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e; )
                                      i.push(n), (n = r + t.options.slidesToScroll), (r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                                  return i;
                              }),
                              (n.prototype.getSlick = function () {
                                  return this;
                              }),
                              (n.prototype.getSlideCount = function () {
                                  var t,
                                      n,
                                      r = this;
                                  return (
                                      (n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0),
                                      !0 === r.options.swipeToSlide
                                          ? (r.$slideTrack.find(".slick-slide").each(function (i, o) {
                                                if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * r.swipeLeft) return (t = o), !1;
                                            }),
                                            Math.abs(e(t).attr("data-slick-index") - r.currentSlide) || 1)
                                          : r.options.slidesToScroll
                                  );
                              }),
                              (n.prototype.goTo = n.prototype.slickGoTo = function (e, t) {
                                  this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
                              }),
                              (n.prototype.init = function (t) {
                                  var n = this;
                                  e(n.$slider).hasClass("slick-initialized") ||
                                      (e(n.$slider).addClass("slick-initialized"),
                                      n.buildRows(),
                                      n.buildOut(),
                                      n.setProps(),
                                      n.startLoad(),
                                      n.loadSlider(),
                                      n.initializeEvents(),
                                      n.updateArrows(),
                                      n.updateDots(),
                                      n.checkResponsive(!0),
                                      n.focusHandler()),
                                      t && n.$slider.trigger("init", [n]),
                                      !0 === n.options.accessibility && n.initADA(),
                                      n.options.autoplay && ((n.paused = !1), n.autoPlay());
                              }),
                              (n.prototype.initADA = function () {
                                  var t = this;
                                  t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                                      t.$slideTrack.attr("role", "listbox"),
                                      t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                                          e(this).attr({ role: "option", "aria-describedby": "slick-slide" + t.instanceUid + n });
                                      }),
                                      null !== t.$dots &&
                                          t.$dots
                                              .attr("role", "tablist")
                                              .find("li")
                                              .each(function (n) {
                                                  e(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + t.instanceUid + n, id: "slick-slide" + t.instanceUid + n });
                                              })
                                              .first()
                                              .attr("aria-selected", "true")
                                              .end()
                                              .find("button")
                                              .attr("role", "button")
                                              .end()
                                              .closest("div")
                                              .attr("role", "toolbar"),
                                      t.activateADA();
                              }),
                              (n.prototype.initArrowEvents = function () {
                                  var e = this;
                                  !0 === e.options.arrows &&
                                      e.slideCount > e.options.slidesToShow &&
                                      (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide));
                              }),
                              (n.prototype.initDotEvents = function () {
                                  var t = this;
                                  !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide),
                                      !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                              }),
                              (n.prototype.initSlideEvents = function () {
                                  var t = this;
                                  t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
                              }),
                              (n.prototype.initializeEvents = function () {
                                  var t = this;
                                  t.initArrowEvents(),
                                      t.initDotEvents(),
                                      t.initSlideEvents(),
                                      t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                                      t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                                      t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                                      t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                                      t.$list.on("click.slick", t.clickHandler),
                                      e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                                      !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                                      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                      e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                                      e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                                      e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                                      e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                                      e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
                              }),
                              (n.prototype.initUI = function () {
                                  var e = this;
                                  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
                              }),
                              (n.prototype.keyHandler = function (e) {
                                  var t = this;
                                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                                      (37 === e.keyCode && !0 === t.options.accessibility
                                          ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                                          : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
                              }),
                              (n.prototype.lazyLoad = function () {
                                  var t,
                                      n,
                                      r = this;
                                  function i(t) {
                                      e("img[data-lazy]", t).each(function () {
                                          var t = e(this),
                                              n = e(this).attr("data-lazy"),
                                              i = document.createElement("img");
                                          (i.onload = function () {
                                              t.animate({ opacity: 0 }, 100, function () {
                                                  t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                                                      t.removeAttr("data-lazy").removeClass("slick-loading");
                                                  }),
                                                      r.$slider.trigger("lazyLoaded", [r, t, n]);
                                              });
                                          }),
                                              (i.onerror = function () {
                                                  t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
                                              }),
                                              (i.src = n);
                                      });
                                  }
                                  !0 === r.options.centerMode
                                      ? !0 === r.options.infinite
                                          ? (n = (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
                                          : ((t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), (n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
                                      : ((t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide), (n = Math.ceil(t + r.options.slidesToShow)), !0 === r.options.fade && (t > 0 && t--, n <= r.slideCount && n++)),
                                      i(r.$slider.find(".slick-slide").slice(t, n)),
                                      r.slideCount <= r.options.slidesToShow
                                          ? i(r.$slider.find(".slick-slide"))
                                          : r.currentSlide >= r.slideCount - r.options.slidesToShow
                                          ? i(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
                                          : 0 === r.currentSlide && i(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
                              }),
                              (n.prototype.loadSlider = function () {
                                  var e = this;
                                  e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
                              }),
                              (n.prototype.next = n.prototype.slickNext = function () {
                                  this.changeSlide({ data: { message: "next" } });
                              }),
                              (n.prototype.orientationChange = function () {
                                  this.checkResponsive(), this.setPosition();
                              }),
                              (n.prototype.pause = n.prototype.slickPause = function () {
                                  this.autoPlayClear(), (this.paused = !0);
                              }),
                              (n.prototype.play = n.prototype.slickPlay = function () {
                                  var e = this;
                                  e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
                              }),
                              (n.prototype.postSlide = function (e) {
                                  var t = this;
                                  t.unslicked || (t.$slider.trigger("afterChange", [t, e]), (t.animating = !1), t.setPosition(), (t.swipeLeft = null), t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA());
                              }),
                              (n.prototype.prev = n.prototype.slickPrev = function () {
                                  this.changeSlide({ data: { message: "previous" } });
                              }),
                              (n.prototype.preventDefault = function (e) {
                                  e.preventDefault();
                              }),
                              (n.prototype.progressiveLazyLoad = function (t) {
                                  t = t || 1;
                                  var n,
                                      r,
                                      i,
                                      o = this,
                                      s = e("img[data-lazy]", o.$slider);
                                  s.length
                                      ? ((n = s.first()),
                                        (r = n.attr("data-lazy")),
                                        ((i = document.createElement("img")).onload = function () {
                                            n.attr("src", r).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, r]), o.progressiveLazyLoad();
                                        }),
                                        (i.onerror = function () {
                                            t < 3
                                                ? setTimeout(function () {
                                                      o.progressiveLazyLoad(t + 1);
                                                  }, 500)
                                                : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, r]), o.progressiveLazyLoad());
                                        }),
                                        (i.src = r))
                                      : o.$slider.trigger("allImagesLoaded", [o]);
                              }),
                              (n.prototype.refresh = function (t) {
                                  var n,
                                      r,
                                      i = this;
                                  (r = i.slideCount - i.options.slidesToShow),
                                      !i.options.infinite && i.currentSlide > r && (i.currentSlide = r),
                                      i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                                      (n = i.currentSlide),
                                      i.destroy(!0),
                                      e.extend(i, i.initials, { currentSlide: n }),
                                      i.init(),
                                      t || i.changeSlide({ data: { message: "index", index: n } }, !1);
                              }),
                              (n.prototype.registerBreakpoints = function () {
                                  var t,
                                      n,
                                      r,
                                      i = this,
                                      o = i.options.responsive || null;
                                  if ("array" === e.type(o) && o.length) {
                                      for (t in ((i.respondTo = i.options.respondTo || "window"), o))
                                          if (((r = i.breakpoints.length - 1), (n = o[t].breakpoint), o.hasOwnProperty(t))) {
                                              for (; r >= 0; ) i.breakpoints[r] && i.breakpoints[r] === n && i.breakpoints.splice(r, 1), r--;
                                              i.breakpoints.push(n), (i.breakpointSettings[n] = o[t].settings);
                                          }
                                      i.breakpoints.sort(function (e, t) {
                                          return i.options.mobileFirst ? e - t : t - e;
                                      });
                                  }
                              }),
                              (n.prototype.reinit = function () {
                                  var t = this;
                                  (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                                      (t.slideCount = t.$slides.length),
                                      t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                                      t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                                      t.registerBreakpoints(),
                                      t.setProps(),
                                      t.setupInfinite(),
                                      t.buildArrows(),
                                      t.updateArrows(),
                                      t.initArrowEvents(),
                                      t.buildDots(),
                                      t.updateDots(),
                                      t.initDotEvents(),
                                      t.cleanUpSlideEvents(),
                                      t.initSlideEvents(),
                                      t.checkResponsive(!1, !0),
                                      !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                      t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                      t.setPosition(),
                                      t.focusHandler(),
                                      (t.paused = !t.options.autoplay),
                                      t.autoPlay(),
                                      t.$slider.trigger("reInit", [t]);
                              }),
                              (n.prototype.resize = function () {
                                  var t = this;
                                  e(window).width() !== t.windowWidth &&
                                      (clearTimeout(t.windowDelay),
                                      (t.windowDelay = window.setTimeout(function () {
                                          (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                                      }, 50)));
                              }),
                              (n.prototype.removeSlide = n.prototype.slickRemove = function (e, t, n) {
                                  var r = this;
                                  if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : r.slideCount - 1) : !0 === t ? --e : e), r.slideCount < 1 || e < 0 || e > r.slideCount - 1)) return !1;
                                  r.unload(),
                                      !0 === n ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(),
                                      (r.$slides = r.$slideTrack.children(this.options.slide)),
                                      r.$slideTrack.children(this.options.slide).detach(),
                                      r.$slideTrack.append(r.$slides),
                                      (r.$slidesCache = r.$slides),
                                      r.reinit();
                              }),
                              (n.prototype.setCSS = function (e) {
                                  var t,
                                      n,
                                      r = this,
                                      i = {};
                                  !0 === r.options.rtl && (e = -e),
                                      (t = "left" == r.positionProp ? Math.ceil(e) + "px" : "0px"),
                                      (n = "top" == r.positionProp ? Math.ceil(e) + "px" : "0px"),
                                      (i[r.positionProp] = e),
                                      !1 === r.transformsEnabled
                                          ? r.$slideTrack.css(i)
                                          : ((i = {}),
                                            !1 === r.cssTransitions ? ((i[r.animType] = "translate(" + t + ", " + n + ")"), r.$slideTrack.css(i)) : ((i[r.animType] = "translate3d(" + t + ", " + n + ", 0px)"), r.$slideTrack.css(i)));
                              }),
                              (n.prototype.setDimensions = function () {
                                  var e = this;
                                  !1 === e.options.vertical
                                      ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                                      : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                                      (e.listWidth = e.$list.width()),
                                      (e.listHeight = e.$list.height()),
                                      !1 === e.options.vertical && !1 === e.options.variableWidth
                                          ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                                          : !0 === e.options.variableWidth
                                          ? e.$slideTrack.width(5e3 * e.slideCount)
                                          : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                                  var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                                  !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
                              }),
                              (n.prototype.setFade = function () {
                                  var t,
                                      n = this;
                                  n.$slides.each(function (r, i) {
                                      (t = n.slideWidth * r * -1),
                                          !0 === n.options.rtl
                                              ? e(i).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
                                              : e(i).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                                  }),
                                      n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                              }),
                              (n.prototype.setHeight = function () {
                                  var e = this;
                                  if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                      e.$list.css("height", t);
                                  }
                              }),
                              (n.prototype.setOption = n.prototype.slickSetOption = function () {
                                  var t,
                                      n,
                                      r,
                                      i,
                                      o,
                                      s = this,
                                      a = !1;
                                  if (
                                      ("object" === e.type(arguments[0])
                                          ? ((r = arguments[0]), (a = arguments[1]), (o = "multiple"))
                                          : "string" === e.type(arguments[0]) &&
                                            ((r = arguments[0]), (i = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                                      "single" === o)
                                  )
                                      s.options[r] = i;
                                  else if ("multiple" === o)
                                      e.each(r, function (e, t) {
                                          s.options[e] = t;
                                      });
                                  else if ("responsive" === o)
                                      for (n in i)
                                          if ("array" !== e.type(s.options.responsive)) s.options.responsive = [i[n]];
                                          else {
                                              for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === i[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                                              s.options.responsive.push(i[n]);
                                          }
                                  a && (s.unload(), s.reinit());
                              }),
                              (n.prototype.setPosition = function () {
                                  var e = this;
                                  e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
                              }),
                              (n.prototype.setProps = function () {
                                  var e = this,
                                      t = document.body.style;
                                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                                      "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                                      (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                                      e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                                      void 0 !== t.OTransform &&
                                          ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                      void 0 !== t.MozTransform &&
                                          ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                                      void 0 !== t.webkitTransform &&
                                          ((e.animType = "webkitTransform"),
                                          (e.transformType = "-webkit-transform"),
                                          (e.transitionType = "webkitTransition"),
                                          void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                      void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                                      void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                                      (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
                              }),
                              (n.prototype.setSlideClasses = function (e) {
                                  var t,
                                      n,
                                      r,
                                      i,
                                      o = this;
                                  (n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                                      o.$slides.eq(e).addClass("slick-current"),
                                      !0 === o.options.centerMode
                                          ? ((t = Math.floor(o.options.slidesToShow / 2)),
                                            !0 === o.options.infinite &&
                                                (e >= t && e <= o.slideCount - 1 - t
                                                    ? o.$slides
                                                          .slice(e - t, e + t + 1)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")
                                                    : ((r = o.options.slidesToShow + e),
                                                      n
                                                          .slice(r - t + 1, r + t + 2)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")),
                                                0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")),
                                            o.$slides.eq(e).addClass("slick-center"))
                                          : e >= 0 && e <= o.slideCount - o.options.slidesToShow
                                          ? o.$slides
                                                .slice(e, e + o.options.slidesToShow)
                                                .addClass("slick-active")
                                                .attr("aria-hidden", "false")
                                          : n.length <= o.options.slidesToShow
                                          ? n.addClass("slick-active").attr("aria-hidden", "false")
                                          : ((i = o.slideCount % o.options.slidesToShow),
                                            (r = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
                                            o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow
                                                ? n
                                                      .slice(r - (o.options.slidesToShow - i), r + i)
                                                      .addClass("slick-active")
                                                      .attr("aria-hidden", "false")
                                                : n
                                                      .slice(r, r + o.options.slidesToShow)
                                                      .addClass("slick-active")
                                                      .attr("aria-hidden", "false")),
                                      "ondemand" === o.options.lazyLoad && o.lazyLoad();
                              }),
                              (n.prototype.setupInfinite = function () {
                                  var t,
                                      n,
                                      r,
                                      i = this;
                                  if ((!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && ((n = null), i.slideCount > i.options.slidesToShow))) {
                                      for (r = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - r; t -= 1)
                                          (n = t - 1),
                                              e(i.$slides[n])
                                                  .clone(!0)
                                                  .attr("id", "")
                                                  .attr("data-slick-index", n - i.slideCount)
                                                  .prependTo(i.$slideTrack)
                                                  .addClass("slick-cloned");
                                      for (t = 0; t < r; t += 1)
                                          (n = t),
                                              e(i.$slides[n])
                                                  .clone(!0)
                                                  .attr("id", "")
                                                  .attr("data-slick-index", n + i.slideCount)
                                                  .appendTo(i.$slideTrack)
                                                  .addClass("slick-cloned");
                                      i.$slideTrack
                                          .find(".slick-cloned")
                                          .find("[id]")
                                          .each(function () {
                                              e(this).attr("id", "");
                                          });
                                  }
                              }),
                              (n.prototype.interrupt = function (e) {
                                  e || this.autoPlay(), (this.interrupted = e);
                              }),
                              (n.prototype.selectHandler = function (t) {
                                  var n = this,
                                      r = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                                      i = parseInt(r.attr("data-slick-index"));
                                  if ((i || (i = 0), n.slideCount <= n.options.slidesToShow)) return n.setSlideClasses(i), void n.asNavFor(i);
                                  n.slideHandler(i);
                              }),
                              (n.prototype.slideHandler = function (e, t, n) {
                                  var r,
                                      i,
                                      o,
                                      s,
                                      a,
                                      l = null,
                                      u = this;
                                  if (((t = t || !1), (!0 !== u.animating || !0 !== u.options.waitForAnimate) && !((!0 === u.options.fade && u.currentSlide === e) || u.slideCount <= u.options.slidesToShow)))
                                      if (
                                          (!1 === t && u.asNavFor(e),
                                          (r = e),
                                          (l = u.getLeft(r)),
                                          (s = u.getLeft(u.currentSlide)),
                                          (u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft),
                                          !1 === u.options.infinite && !1 === u.options.centerMode && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll))
                                      )
                                          !1 === u.options.fade &&
                                              ((r = u.currentSlide),
                                              !0 !== n
                                                  ? u.animateSlide(s, function () {
                                                        u.postSlide(r);
                                                    })
                                                  : u.postSlide(r));
                                      else if (!1 === u.options.infinite && !0 === u.options.centerMode && (e < 0 || e > u.slideCount - u.options.slidesToScroll))
                                          !1 === u.options.fade &&
                                              ((r = u.currentSlide),
                                              !0 !== n
                                                  ? u.animateSlide(s, function () {
                                                        u.postSlide(r);
                                                    })
                                                  : u.postSlide(r));
                                      else {
                                          if (
                                              (u.options.autoplay && clearInterval(u.autoPlayTimer),
                                              (i =
                                                  r < 0
                                                      ? u.slideCount % u.options.slidesToScroll != 0
                                                          ? u.slideCount - (u.slideCount % u.options.slidesToScroll)
                                                          : u.slideCount + r
                                                      : r >= u.slideCount
                                                      ? u.slideCount % u.options.slidesToScroll != 0
                                                          ? 0
                                                          : r - u.slideCount
                                                      : r),
                                              (u.animating = !0),
                                              u.$slider.trigger("beforeChange", [u, u.currentSlide, i]),
                                              (o = u.currentSlide),
                                              (u.currentSlide = i),
                                              u.setSlideClasses(u.currentSlide),
                                              u.options.asNavFor && (a = (a = u.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide),
                                              u.updateDots(),
                                              u.updateArrows(),
                                              !0 === u.options.fade)
                                          )
                                              return (
                                                  !0 !== n
                                                      ? (u.fadeSlideOut(o),
                                                        u.fadeSlide(i, function () {
                                                            u.postSlide(i);
                                                        }))
                                                      : u.postSlide(i),
                                                  void u.animateHeight()
                                              );
                                          !0 !== n
                                              ? u.animateSlide(l, function () {
                                                    u.postSlide(i);
                                                })
                                              : u.postSlide(i);
                                      }
                              }),
                              (n.prototype.startLoad = function () {
                                  var e = this;
                                  !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                                      !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                                      e.$slider.addClass("slick-loading");
                              }),
                              (n.prototype.swipeDirection = function () {
                                  var e,
                                      t,
                                      n,
                                      r,
                                      i = this;
                                  return (
                                      (e = i.touchObject.startX - i.touchObject.curX),
                                      (t = i.touchObject.startY - i.touchObject.curY),
                                      (n = Math.atan2(t, e)),
                                      (r = Math.round((180 * n) / Math.PI)) < 0 && (r = 360 - Math.abs(r)),
                                      (r <= 45 && r >= 0) || (r <= 360 && r >= 315)
                                          ? !1 === i.options.rtl
                                              ? "left"
                                              : "right"
                                          : r >= 135 && r <= 225
                                          ? !1 === i.options.rtl
                                              ? "right"
                                              : "left"
                                          : !0 === i.options.verticalSwiping
                                          ? r >= 35 && r <= 135
                                              ? "down"
                                              : "up"
                                          : "vertical"
                                  );
                              }),
                              (n.prototype.swipeEnd = function (e) {
                                  var t,
                                      n,
                                      r = this;
                                  if (((r.dragging = !1), (r.interrupted = !1), (r.shouldClick = !(r.touchObject.swipeLength > 10)), void 0 === r.touchObject.curX)) return !1;
                                  if ((!0 === r.touchObject.edgeHit && r.$slider.trigger("edge", [r, r.swipeDirection()]), r.touchObject.swipeLength >= r.touchObject.minSwipe)) {
                                      switch ((n = r.swipeDirection())) {
                                          case "left":
                                          case "down":
                                              (t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide + r.getSlideCount()) : r.currentSlide + r.getSlideCount()), (r.currentDirection = 0);
                                              break;
                                          case "right":
                                          case "up":
                                              (t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide - r.getSlideCount()) : r.currentSlide - r.getSlideCount()), (r.currentDirection = 1);
                                      }
                                      "vertical" != n && (r.slideHandler(t), (r.touchObject = {}), r.$slider.trigger("swipe", [r, n]));
                                  } else r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide), (r.touchObject = {}));
                              }),
                              (n.prototype.swipeHandler = function (e) {
                                  var t = this;
                                  if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                                      switch (
                                          ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                                          (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                                          !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                                          e.data.action)
                                      ) {
                                          case "start":
                                              t.swipeStart(e);
                                              break;
                                          case "move":
                                              t.swipeMove(e);
                                              break;
                                          case "end":
                                              t.swipeEnd(e);
                                      }
                              }),
                              (n.prototype.swipeMove = function (e) {
                                  var t,
                                      n,
                                      r,
                                      i,
                                      o,
                                      s = this;
                                  return (
                                      (o = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                                      !(!s.dragging || (o && 1 !== o.length)) &&
                                          ((t = s.getLeft(s.currentSlide)),
                                          (s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
                                          (s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
                                          (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2)))),
                                          !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
                                          "vertical" !== (n = s.swipeDirection())
                                              ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(),
                                                (i = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                                                !0 === s.options.verticalSwiping && (i = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                                                (r = s.touchObject.swipeLength),
                                                (s.touchObject.edgeHit = !1),
                                                !1 === s.options.infinite &&
                                                    ((0 === s.currentSlide && "right" === n) || (s.currentSlide >= s.getDotCount() && "left" === n)) &&
                                                    ((r = s.touchObject.swipeLength * s.options.edgeFriction), (s.touchObject.edgeHit = !0)),
                                                !1 === s.options.vertical ? (s.swipeLeft = t + r * i) : (s.swipeLeft = t + r * (s.$list.height() / s.listWidth) * i),
                                                !0 === s.options.verticalSwiping && (s.swipeLeft = t + r * i),
                                                !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? ((s.swipeLeft = null), !1) : void s.setCSS(s.swipeLeft)))
                                              : void 0)
                                  );
                              }),
                              (n.prototype.swipeStart = function (e) {
                                  var t,
                                      n = this;
                                  if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                                  void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                                      (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                                      (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                                      (n.dragging = !0);
                              }),
                              (n.prototype.unfilterSlides = n.prototype.slickUnfilter = function () {
                                  var e = this;
                                  null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
                              }),
                              (n.prototype.unload = function () {
                                  var t = this;
                                  e(".slick-cloned", t.$slider).remove(),
                                      t.$dots && t.$dots.remove(),
                                      t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                                      t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                                      t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                              }),
                              (n.prototype.unslick = function (e) {
                                  var t = this;
                                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                              }),
                              (n.prototype.updateArrows = function () {
                                  var e = this;
                                  Math.floor(e.options.slidesToShow / 2),
                                      !0 === e.options.arrows &&
                                          e.slideCount > e.options.slidesToShow &&
                                          !e.options.infinite &&
                                          (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                          e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                          0 === e.currentSlide
                                              ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode) || (e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode)) &&
                                                (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                              }),
                              (n.prototype.updateDots = function () {
                                  var e = this;
                                  null !== e.$dots &&
                                      (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                                      e.$dots
                                          .find("li")
                                          .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                                          .addClass("slick-active")
                                          .attr("aria-hidden", "false"));
                              }),
                              (n.prototype.visibility = function () {
                                  var e = this;
                                  e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
                              }),
                              (e.fn.slick = function () {
                                  var e,
                                      t,
                                      r = this,
                                      i = arguments[0],
                                      o = Array.prototype.slice.call(arguments, 1),
                                      s = r.length;
                                  for (e = 0; e < s; e++) if (("object" == typeof i || void 0 === i ? (r[e].slick = new n(r[e], i)) : (t = r[e].slick[i].apply(r[e].slick, o)), void 0 !== t)) return t;
                                  return r;
                              });
                      }),
                      void 0 === (o = r.apply(t, i)) || (e.exports = o);
              })();
          },
      },
      t = {};
  function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { id: r, loaded: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
          return this || new Function("return this")();
      } catch (e) {
          if ("object" == typeof window) return window;
      }
  })()),
      (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
      n(630);
})();
