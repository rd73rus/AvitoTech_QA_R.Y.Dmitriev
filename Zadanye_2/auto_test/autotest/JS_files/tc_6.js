"use strict";
(self["webpackChunk_avito_eco_impact"] = self["webpackChunk_avito_eco_impact"] || []).push([[482], {
    24860: function(e, t, n) {
        n.d(t, {
            $0: function() {
                return m
            },
            pd: function() {
                return d
            },
            R9: function() {
                return h
            },
            uH: function() {
                return g
            },
            kQ: function() {
                return f
            },
            f6: function() {
                return v
            },
            sM: function() {
                return b
            },
            zI: function() {
                return E
            }
        });
        var a = n(46095)
          , i = {
            abort: function() {}
        }
          , r = n(3688)
          , o = "Ошибка загрузки данных"
          , l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
            (0,
            r.iB)({
                error: e
            })
        }
          , c = n(66275)
          , s = function() {
            var e, t = i, n = {
                abort: function() {
                    e.abort && e.abort()
                },
                signal: (e = "undefined" != typeof window && window.AbortController ? new window.AbortController : {}).signal
            }, r = n.abort, o = n.signal;
            return t.abort(),
            t.abort = r,
            (0,
            c.Z)(a.$k, {
                signal: o,
                method: "GET"
            })
        }
          , u = n(57894)
          , m = function() {
            var e = s();
            return e["catch"](l),
            {
                types: [a.uG, a.tX, a.Wn],
                fetching: e
            }
        }
          , d = function() {
            var e = u.j;
            return {
                type: a.yJ,
                payload: e
            }
        }
          , p = n(72596)
          , f = function() {
            return {
                type: a.u3
            }
        }
          , v = function() {
            return {
                type: a.Fq
            }
        }
          , g = function(e) {
            e === a.Ci[a.RG.HOW_TO_CALCULATE_VIEW] && (0,
            p.cx)(),
            (0,
            r.dM)(e)
        }
          , b = function() {
            return function(e) {
                (0,
                p.rR)(),
                e({
                    type: a.r1
                })
            }
        }
          , E = function() {
            return function(e) {
                (0,
                p.Pz)(),
                e({
                    type: a.SB
                })
            }
        }
          , h = function() {
            return {
                type: a.Uh
            }
        }
    },
    65262: function(e, t, n) {
        n.d(t, {
            t: function() {
                return a
            }
        });
        var a = function(e) {
            return e["PRIMARY"] = "primary",
            e["SECONDARY"] = "secondary",
            e
        }({})
    },
    48589: function(e, t, n) {
        n.d(t, {
            TJ: function() {
                return E
            },
            op: function() {
                return z
            },
            au: function() {
                return J
            }
        });
        var a = n(87462)
          , i = n(28416)
          , r = n.n(i)
          , o = n(99737)
          , l = n(98152)
          , c = {
            micro: {
                lineHeight: "14px",
                fontSize: "11px"
            },
            bodySmall: {
                lineHeight: "18px",
                fontSize: "13px"
            },
            bodySmallDense: {
                lineHeight: "16px",
                fontSize: "13px"
            },
            body: {
                lineHeight: "22px",
                fontSize: "16px"
            },
            bodyDense: {
                lineHeight: "20px",
                fontSize: "16px"
            },
            bodyLarge: {
                lineHeight: "24px",
                fontSize: "18px"
            },
            headingSmall: {
                lineHeight: "22px",
                fontSize: "16px",
                fontWeight: "bold"
            },
            heading: {
                lineHeight: "28px",
                fontSize: "22px"
            },
            headingLarge: {
                lineHeight: "28px",
                fontSize: "22px",
                fontWeight: "bold"
            },
            headingXLarge: {
                lineHeight: "29px",
                fontSize: "26px",
                fontWeight: "bold"
            },
            subheading: {
                lineHeight: "18px",
                fontSize: "13px",
                fontWeight: "bold"
            },
            titleSmall: {
                lineHeight: "29px",
                fontSize: "26px",
                fontWeight: "bold"
            },
            title: {
                lineHeight: "48px",
                fontSize: "36px"
            }
        }
          , s = {
            textTitle: "title",
            textTitleSmall: "titleSmall",
            textHeadingLarge: "headingLarge",
            textHeading: "heading",
            textHeadingSmall: "headingSmall",
            textBody: "body",
            textBodyDense: "bodyDense",
            textBodySmall: "bodySmall",
            textBodySmallDense: "bodySmallDense",
            textMicro: "micro",
            bodyLargeStyle: "bodyLarge",
            subheadingStyle: "subheading",
            headingFontXLargeStyle: "headingXLarge"
        }
          , u = function(e) {
            return function(e) {
                return e in s
            }(e) ? s[e] : e
        }
          , m = n(57977)
          , d = n(40511)
          , p = n(80728)
          , f = {
            left: "left",
            center: "center",
            right: "right",
            justified: "justify"
        }
          , v = function(e) {
            var t = e.list
              , n = e.title
              , i = e.onClick
              , l = e.marker
              , s = e.className
              , m = (null != t ? t : []).reduce((function(e, t) {
                switch (t.type) {
                case "fontColor":
                    e.color = t.value;
                    break;
                case "fontStyle":
                    "bold" === t.value && (e.fontWeight = t.value);
                    break;
                case "strikeThrough":
                    e.textDecoration = "line-through";
                    break;
                case "paragraphSpacing":
                    t.value && (e.marginBottom = t.value,
                    e.display = "block");
                    break;
                case "textAlignment":
                    var n = f[t.value];
                    n && (e.textAlign = n);
                    break;
                case "textStyle":
                    Object.assign(e, c[u(t.value)])
                }
                return e
            }
            ), {});
            return r().createElement("span", (0,
            a.Z)({
                style: m
            }, (0,
            o.rH)({
                marker: l
            }), {
                className: s,
                onClick: i
            }), n)
        }
          , g = function(e) {
            var t = e.attribute
              , n = e.options
              , a = e.onClick
              , i = e.marker
              , o = e.className;
            switch (t.type) {
            case "attributes":
                var l = t.value
                  , c = l.list
                  , s = l.title;
                return r().createElement(v, {
                    list: c,
                    title: s,
                    marker: i,
                    className: o,
                    onClick: a
                });
            case "link":
                var u = t.value
                  , f = u.url
                  , g = u.title;
                return r().createElement(m.r, {
                    href: f,
                    target: "_blank",
                    marker: i,
                    noVisited: null == n ? void 0 : n.noVisited,
                    onClick: a
                }, g);
            case "bullet":
                var b = t.value
                  , E = b.bullet
                  , h = b.offset;
                return r().createElement(p.x, {
                    width: "".concat(h, "px")
                }, E);
            case "badge":
                var w = t.value
                  , k = w.title
                  , y = w.titleColor
                  , O = w.backgroundColor
                  , N = (null == y ? void 0 : y.valueName) || "black"
                  , z = (null == O ? void 0 : O.valueName) || "gray12";
                return r().createElement(d.x, {
                    bg: z,
                    borderRadius: 4,
                    py: 2,
                    px: 6
                }, r().createElement(p.x, {
                    color: N,
                    size: "xs"
                }, k));
            default:
                return null
            }
        }
          , b = "AttributedText-module-text-Tq31o"
          , E = function(e) {
            var t = e.value
              , n = e.options
              , i = e.onClick
              , c = e.marker
              , s = void 0 === c ? "attributed-text" : c;
            if (!t)
                return null;
            var u = t.attributes
              , m = function(e) {
                var t;
                return (null !== (t = e.match(/\{*[^{}]+\}*/g)) && void 0 !== t ? t : []).map((function(e) {
                    var t = e.match(/{{\s*([\w.]+)\s*}}/);
                    return t ? {
                        type: "attribute",
                        value: (0,
                        l.Z)(t, 2)[1]
                    } : {
                        type: "text",
                        value: e
                    }
                }
                ))
            }(t.text)
              , d = m.map((function(e) {
                switch (e.type) {
                case "text":
                    return r().createElement("span", (0,
                    a.Z)({
                        key: e.value,
                        className: b
                    }, (0,
                    o.rH)({
                        marker: s
                    }), {
                        onClick: i
                    }), e.value);
                case "attribute":
                    var t = null == u ? void 0 : u[e.value];
                    return t ? r().createElement(g, {
                        key: e.value,
                        attribute: t,
                        options: n,
                        marker: s,
                        className: b,
                        onClick: i
                    }) : null;
                default:
                    return null
                }
            }
            ));
            return r().createElement(r().Fragment, null, d)
        }
          , h = n(65262)
          , w = n(40753)
          , k = n(24860)
          , y = {
            showCalculationExample: k.sM,
            showHowToDetails: k.zI,
            scrollToBlock: k.uH
        }
          , O = n(39704)
          , N = n(46095)
          , z = function(e) {
            var t = e.url
              , n = e.size
              , a = void 0 === n ? "m" : n
              , i = e.title
              , o = e.action
              , l = e.fullWidth
              , c = void 0 !== l && l
              , s = e.onClick
              , u = e.target
              , m = void 0 === u ? "_blank" : u
              , d = e.value
              , p = void 0 === d ? null : d
              , f = e.variant
              , v = void 0 === f ? h.t.PRIMARY : f
              , g = (0,
            O.I0)()
              , b = v === h.t.PRIMARY ? "primary" : "secondary";
            return i ? r().createElement(w.z, {
                fullWidth: c,
                size: a,
                preset: b,
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    setTimeout((function() {
                        s && s(),
                        o && g(p ? y[o](p) : y[o]()),
                        t && window.open(t, m)
                    }
                    ), N.fk)
                }
            }, i) : null
        }
          , I = n(4942)
          , _ = "styles-wrapper-Sh_WH"
          , T = "styles-dialog-wrapper-SwjU4"
          , C = "styles-desktop-er57v"
          , X = "styles-open-P7ARt"
          , x = "styles-relative-wrapper-mGnyG"
          , S = "styles-overlay-wrapper-NASR7"
          , A = "styles-dispose-DlrEt"
          , L = "styles-bottom-sheet-wrapper-fIJdr"
          , D = "styles-eyebrow-Hf6WC"
          , W = "styles-active-Jo15v"
          , R = "styles-dialog-content-wrapper-Brt2a"
          , P = "styles-content-wrapper-sGlL3"
          , Z = n(46758)
          , H = n(17340)
          , M = n(45338)
          , V = function() {
            var e = (0,
            i.useState)(!1)
              , t = (0,
            l.Z)(e, 2)
              , n = t[0]
              , a = t[1]
              , r = (0,
            i.useState)(!1)
              , o = (0,
            l.Z)(r, 2)
              , c = o[0]
              , s = o[1]
              , u = (0,
            i.useState)(0)
              , m = (0,
            l.Z)(u, 2)
              , d = m[0]
              , p = m[1];
            return {
                handlers: (0,
                M.QS)({
                    onSwiped: function(e) {
                        var t = e.dir;
                        t === N.YM.UP && (a(!0),
                        setTimeout((function() {
                            p(0)
                        }
                        ), 100)),
                        t === N.YM.DOWN && s(!0)
                    },
                    onSwiping: function(e) {
                        var t = e.dir
                          , n = e.deltaY;
                        t !== N.YM.UP && t !== N.YM.DOWN || p(n)
                    }
                }),
                swipeClose: c,
                verticalOffset: d,
                swipeFullScreen: n,
                onRefresh: function() {
                    s(!1),
                    s(!1),
                    p(0),
                    a(!1)
                }
            }
        }
          , U = n(94184)
          , j = n.n(U)
          , G = n(31051)
          , F = function(e) {
            var t = e.isOpen
              , n = e.usePortal
              , r = void 0 !== n && n
              , o = e.isFullscreen
              , c = void 0 !== o && o
              , s = e.isIncreasable
              , u = void 0 !== s && s
              , m = e.height
              , d = void 0 === m ? N.OP : m
              , p = e.increaseHeight
              , f = void 0 === p ? N.m5 : p
              , v = e.onClose
              , g = e.children
              , b = (0,
            i.useState)(!1)
              , E = (0,
            l.Z)(b, 2)
              , h = E[0]
              , w = E[1]
              , k = (0,
            i.useRef)(null)
              , y = (0,
            i.useRef)(null)
              , O = (0,
            i.useRef)(null)
              , z = V()
              , T = z.handlers
              , C = z.onRefresh
              , R = z.swipeClose
              , Z = z.verticalOffset
              , H = z.swipeFullScreen
              , M = (0,
            i.useCallback)((function() {
                w(!1),
                setTimeout((function() {
                    v(),
                    C()
                }
                ), 220)
            }
            ), [v, C])
              , U = (0,
            i.useCallback)((function() {
                return u && (c || H) ? f : d
            }
            ), [d, u, c, H, f])
              , F = (0,
            i.useState)(U())
              , B = (0,
            l.Z)(F, 2)
              , q = B[0]
              , Y = B[1];
            if ((0,
            i.useEffect)((function() {
                setTimeout((function() {
                    document.body.style.overflowY = h ? "hidden" : "scroll"
                }
                ), N.fk)
            }
            ), [h]),
            (0,
            i.useEffect)((function() {
                setTimeout((function() {
                    w(t)
                }
                ), N.fk)
            }
            ), [t]),
            (0,
            i.useEffect)((function() {
                var e = O.current;
                e && (e.style.transform = Z >= 0 ? "translateY(".concat(Z, "px)") : "translateY(0)")
            }
            ), [Z]),
            (0,
            i.useEffect)((function() {
                Y(U())
            }
            ), [C, U]),
            (0,
            i.useEffect)((function() {
                R && M()
            }
            ), [M, R]),
            !t && !h)
                return null;
            var Q = j()(L, (0,
            I.Z)({}, X, h && t))
              , J = j()(S, (0,
            I.Z)({}, A, h && !t))
              , K = {
                maxHeight: "".concat(q)
            }
              , $ = j()(D, (0,
            I.Z)({}, W, Math.abs(Z) > 20))
              , ee = i.createElement("div", {
                className: _
            }, i.createElement("div", {
                ref: O,
                className: x
            }, i.createElement("div", {
                ref: k,
                style: K,
                className: Q
            }, i.createElement("div", (0,
            a.Z)({}, T, {
                className: $
            })), i.createElement("div", {
                ref: y,
                className: P
            }, g))), i.createElement("div", {
                "aria-hidden": !0,
                className: J,
                onClick: M
            }))
              , te = window.document.body;
            return r ? (0,
            G.createPortal)(ee, te) : ee
        }
          , B = n(79388)
          , q = n(49985)
          , Y = n(48916)
          , Q = function(e) {
            var t = e.children;
            return i.createElement(B.f, null, i.createElement(Z.D, {
                design: "2023"
            }, i.createElement("div", {
                className: R
            }, t)))
        }
          , J = function(e) {
            var t = e.mode
              , n = void 0 === t ? N.RD.BOTTOM_SHEET : t
              , r = e.isOpen
              , o = e.onClose
              , c = e.size
              , s = e.dialogOptions
              , u = e.bottomSheetOptions
              , m = e.children
              , d = (0,
            i.useState)(!1)
              , p = (0,
            l.Z)(d, 2)
              , f = p[0]
              , v = p[1]
              , g = (0,
            O.v9)(Y.g0);
            (0,
            i.useEffect)((function() {
                setTimeout((function() {
                    v(r && n === N.RD.DIALOG)
                }
                ))
            }
            ), [r, n]);
            var b = j()(T, (0,
            I.Z)({}, X, f), (0,
            I.Z)({}, C, !g));
            switch (n !== N.RD.DIALOG || g ? n : N.RD.POPUP) {
            case N.RD.POPUP:
                return i.createElement("div", {
                    className: b
                }, i.createElement(q.G, {
                    usePortal: !0,
                    size: c || "m",
                    zIndex: 25,
                    open: r,
                    onClose: o
                }, i.createElement(Q, null, m)));
            case N.RD.DIALOG:
                return r ? i.createElement("div", {
                    className: b
                }, i.createElement(H.V, (0,
                a.Z)({
                    usePortal: !0
                }, s, {
                    onClose: o
                }), i.createElement(Q, null, m))) : null;
            default:
            case N.RD.BOTTOM_SHEET:
                return i.createElement(F, (0,
                a.Z)({
                    height: "40vh",
                    usePortal: !0,
                    isOpen: r,
                    onClose: o
                }, u), i.createElement(Q, null, m))
            }
        }
    },
    12570: function(e, t, n) {
        n.r(t),
        n.d(t, {
            FaqView: function() {
                return _
            }
        });
        var a = n(28416)
          , i = n.n(a)
          , r = n(39704)
          , o = function(e) {
            return e.faq
        }
          , l = n(48916)
          , c = {
            wrapper: "mobile-wrapper-UEZfe",
            fadeIn: "mobile-fadeIn-a2Ww_",
            title: "mobile-title-px4cv",
            description: "mobile-description-nBeXl"
        }
          , s = {
            wrapper: "desktop-wrapper-jWOWh",
            fadeIn: "desktop-fadeIn-NAZwz",
            title: "desktop-title-_kET0",
            content: "desktop-content-hqMiC",
            description: "desktop-description-snwxa"
        }
          , u = n(87462)
          , m = n(4942)
          , d = n(98152)
          , p = n(94184)
          , f = n.n(p)
          , v = "styles-wrapper-eNHmO"
          , g = "styles-item-block-lxoFx"
          , b = "styles-question-d62My"
          , E = "styles-answer-mi7FA"
          , h = "styles-icon-P0ACe"
          , w = "styles-open-Jk1Hm"
          , k = "styles-mobile-GhIEr"
          , y = n(70209)
          , O = n(48589)
          , N = n(72596)
          , z = function(e) {
            var t = e.question
              , n = e.answer
              , r = (0,
            a.useState)(!1)
              , o = (0,
            d.Z)(r, 2)
              , l = o[0]
              , c = o[1]
              , s = (0,
            a.useCallback)((function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                l || (0,
                N.uS)({
                    title: t
                }),
                c(!l)
            }
            ), [l])
              , u = f()(g, (0,
            m.Z)({}, w, l));
            return i().createElement("div", {
                className: u
            }, i().createElement("div", {
                "data-marker": "faq-item",
                className: b,
                onClick: s
            }, t, i().createElement("div", {
                className: h
            }, i().createElement(y.D, null))), i().createElement("div", {
                className: E
            }, i().createElement(O.TJ, {
                value: n
            })))
        }
          , I = function(e) {
            var t = e.items
              , n = (0,
            r.v9)(l.g0)
              , a = f()(v, (0,
            m.Z)({}, k, n));
            return i().createElement("div", {
                className: a
            }, null == t ? void 0 : t.map((function(e) {
                return i().createElement(z, (0,
                u.Z)({
                    key: e.question
                }, e))
            }
            )))
        }
          , _ = (n(30560),
        function() {
            var e = (0,
            r.v9)(o)
              , t = (0,
            r.v9)(l.g0) ? c : s;
            if (!e)
                return null;
            var n = e.title
              , a = e.items
              , u = e.description;
            return i().createElement("div", {
                className: t.wrapper
            }, i().createElement("div", {
                className: t.content
            }, i().createElement("h1", {
                className: t.title
            }, n), i().createElement("div", {
                className: t.description
            }, u)), i().createElement(I, {
                items: a
            }))
        }
        )
    },
    64311: function(e, t, n) {
        n.d(t, {
            P: function() {
                return r
            },
            g: function() {
                return i
            }
        });
        var a = n(46095)
          , i = "".concat(a.Xz, "Эковклад")
          , r = 9e3
    },
    13167: function(e, t, n) {
        n.r(t),
        n.d(t, {
            HeaderView: function() {
                return G
            }
        });
        var a = n(87462)
          , i = n(4942)
          , r = n(28416)
          , o = n.n(r)
          , l = n(39704)
          , c = function(e) {
            return e.header
        }
          , s = n(48916)
          , u = {
            wrapper: "mobile-wrapper-t_b1d",
            content: "mobile-content-jLx1g",
            image: "mobile-image-njCNA",
            fadeIn: "mobile-fadeIn-KTtyG",
            "video-wrapper": "mobile-video-wrapper-iwUo4",
            "video-item": "mobile-video-item-lGTIa",
            sliding: "mobile-sliding-yYLjR",
            slideLeft: "mobile-slideLeft-Nahay",
            "video-item-placeholder": "mobile-video-item-placeholder-aHNII",
            video: "mobile-video-O2im3",
            "video-value": "mobile-video-value-BcbBz",
            "video-unit": "mobile-video-unit-hQiE4",
            "video-label": "mobile-video-label-JoOmj",
            title: "mobile-title-jDFWz",
            plyambaText: "mobile-plyambaText-Y33sf",
            description: "mobile-description-T_BA9",
            "button-wrapper": "mobile-button-wrapper-pcYLX",
            pulseBg: "mobile-pulseBg-MWQAX",
            pulseOpacity: "mobile-pulseOpacity-_MZMu"
        }
          , m = {
            wrapper: "desktop-wrapper-saQEa",
            fadeIn: "desktop-fadeIn-HYnvF",
            content: "desktop-content-D2LcU",
            image: "desktop-image-nyJcq",
            "video-wrapper": "desktop-video-wrapper-S5oYl",
            "video-item": "desktop-video-item-FNbTF",
            "video-item-placeholder": "desktop-video-item-placeholder-l0meF",
            sliding: "desktop-sliding-exIhE",
            slideLeft: "desktop-slideLeft-nyVlU",
            clickable: "desktop-clickable-ovBPb",
            "video-next-arrow": "desktop-video-next-arrow-OO039",
            video: "desktop-video-WJLUH",
            "video-value": "desktop-video-value-hsJQq",
            "video-unit": "desktop-video-unit-NDBEY",
            "video-label": "desktop-video-label-oQP2i",
            title: "desktop-title-aBuSX",
            plyambaText: "desktop-plyambaText-xh9LT",
            description: "desktop-description-iinhZ",
            info: "desktop-info-uWrLw",
            "button-wrapper": "desktop-button-wrapper-UMUX3",
            pulseBg: "desktop-pulseBg-A1O8h",
            pulseOpacity: "desktop-pulseOpacity-Ec7E5"
        }
          , d = n(98152)
          , p = n(94184)
          , f = n.n(p)
          , v = n(3688)
          , g = function(e) {
            var t = e.unit
              , n = e.label
              , a = e.value
              , c = e.imageUrl
              , p = e.videoUrl
              , g = e.onNextClick
              , b = (0,
            r.useState)(null)
              , E = (0,
            d.Z)(b, 2)
              , h = E[0]
              , w = E[1]
              , k = (0,
            l.v9)(s.g0)
              , y = k ? u : m
              , O = Boolean(g)
              , N = f()(y["video-item"], (0,
            i.Z)({}, y.clickable, O))
              , z = (0,
            r.useCallback)((function() {
                p && (0,
                v.jj)(p).then((function(e) {
                    w(e)
                }
                ))
            }
            ), [p, w]);
            return (0,
            r.useEffect)((function() {
                z()
            }
            ), [z]),
            o().createElement("div", {
                className: N,
                onClick: g
            }, o().createElement("img", {
                src: c,
                className: y["video-item-placeholder"]
            }), h && o().createElement("video", {
                className: y.video,
                loop: !0,
                muted: !0,
                playsInline: !0,
                autoPlay: !0
            }, o().createElement("source", {
                src: h,
                type: "video/mp4"
            })), !k && o().createElement(o().Fragment, null, o().createElement("div", {
                className: y["video-value"]
            }, a, o().createElement("div", {
                className: y["video-unit"]
            }, t)), o().createElement("div", {
                className: y["video-label"]
            }, n)))
        }
          , b = n(99537)
          , E = n(64311)
          , h = function(e) {
            var t = e.blocks
              , n = (0,
            r.useRef)(null)
              , c = (0,
            l.v9)(s.g0)
              , p = (0,
            r.useState)(!1)
              , v = (0,
            d.Z)(p, 2)
              , h = v[0]
              , w = v[1]
              , k = (0,
            r.useState)(t)
              , y = (0,
            d.Z)(k, 2)
              , O = y[0]
              , N = y[1]
              , z = c ? u : m;
            (0,
            r.useEffect)((function() {
                N(t)
            }
            ), [t]);
            var I = (0,
            r.useCallback)((function() {
                h || (w(!0),
                setTimeout((function() {
                    var e = O.shift();
                    O.push(e),
                    w(!1),
                    N(O)
                }
                ), 1100))
            }
            ), [O, h]);
            (0,
            r.useEffect)((function() {
                c && setInterval((function() {
                    I()
                }
                ), E.P)
            }
            ), [c]);
            var _ = f()(z["video-wrapper"], (0,
            i.Z)({}, z.sliding, h));
            return o().createElement("div", {
                ref: n,
                className: _
            }, O.map((function(e, t) {
                return o().createElement(g, (0,
                a.Z)({
                    key: e.label,
                    onNextClick: 1 !== t || h ? void 0 : I
                }, e))
            }
            )), !c && o().createElement("div", {
                className: z["video-next-arrow"],
                onClick: I
            }, o().createElement(b.e, {
                size: "xl"
            })))
        }
          , w = {
            wrapper: "styles-wrapper-GvF0k",
            "links-wrapper": "styles-links-wrapper-L_KLi",
            open: "styles-open-qy26Z",
            links: "styles-links-Q7YcX",
            link: "styles-link-gAhs5",
            active: "styles-active-iGMtS",
            cross: "styles-cross-zg2UL",
            fadeScaleIn: "styles-fadeScaleIn-bZkds",
            hamburger: "styles-hamburger-H3Nb0",
            "logo-white": "styles-logo-white-Slkn1",
            "logo-black": "styles-logo-black-DTZtW",
            "logo-open": "styles-logo-open-x8tb_",
            fadeIn: "styles-fadeIn-TShEQ",
            fadeDelayedIn: "styles-fadeDelayedIn-zBLja"
        }
          , k = n(30560)
          , y = "Главная страница Авито"
          , O = n(46095)
          , N = function(e) {
            var t = e.isOpen;
            return o().createElement("div", {
                className: t ? w["logo-open"] : void 0
            }, o().createElement("a", {
                href: O.a0,
                target: "_blank",
                rel: "noreferrer"
            }, o().createElement("img", {
                alt: y,
                className: w["logo-white"],
                src: k.WY
            }), o().createElement("img", {
                alt: y,
                src: k.IM,
                className: w["logo-black"]
            })))
        }
          , z = n(43906)
          , I = n(57977)
          , _ = function(e) {
            var t = e.url
              , n = e.title
              , a = e.target
              , i = void 0 === a ? "_self" : a
              , r = t === O._n ? "red" : "black";
            return o().createElement("div", {
                className: w.link
            }, o().createElement(I.r, {
                size: "m",
                noVisited: !0,
                target: i,
                href: "".concat(t).concat(O.tJ),
                preset: r
            }, n))
        }
          , T = function(e) {
            var t = e.items
              , n = e.isOpen
              , i = e.setOpen
              , l = (0,
            r.useState)(!1)
              , c = (0,
            d.Z)(l, 2)
              , s = c[0]
              , u = c[1];
            return o().createElement("div", {
                className: n ? w.open : void 0
            }, o().createElement("div", {
                className: w["links-wrapper"]
            }, o().createElement("div", {
                className: w.links
            }, s && o().createElement(z.a, {
                size: "l",
                className: w.cross,
                onClick: function() {
                    setTimeout((function() {
                        i(!1),
                        u(!1)
                    }
                    ), O.fk)
                }
            }), t.map((function(e) {
                return o().createElement(_, (0,
                a.Z)({
                    key: e.title
                }, e))
            }
            )))), o().createElement("img", {
                src: k.pr,
                className: w.hamburger,
                onClick: function() {
                    setTimeout((function() {
                        i(!0),
                        u(!0)
                    }
                    ), O.fk)
                }
            }))
        }
          , C = function(e) {
            var t = e.items
              , n = (0,
            l.v9)(s.g0)
              , a = (0,
            r.useState)(!1)
              , c = (0,
            d.Z)(a, 2)
              , u = c[0]
              , m = c[1]
              , p = f()(w.wrapper, (0,
            i.Z)({}, w.mobile, n));
            return o().createElement("div", {
                className: p
            }, o().createElement(N, {
                isOpen: u
            }), o().createElement(T, {
                isOpen: u,
                setOpen: m,
                items: t
            }))
        }
          , X = "styles-wrapper-_wEik"
          , x = "styles-links-McDje"
          , S = "styles-logo-MyGeW"
          , A = "styles-mobile-fAgp7"
          , L = "Главная страница Авито"
          , D = function() {
            return o().createElement(I.r, {
                noVisited: !0,
                href: O.a0,
                target: "_blank",
                rel: "noreferrer"
            }, o().createElement("img", {
                className: S,
                alt: L,
                src: k.IM
            }))
        }
          , W = n(31465)
          , R = n(13031)
          , P = function(e) {
            var t = e.url
              , n = e.title
              , a = e.target
              , i = void 0 === a ? "_self" : a;
            return t === O._n ? o().createElement(W.D, {
                size: "ms",
                color: "red500"
            }, n) : o().createElement(I.r, {
                noVisited: !0,
                size: "ms",
                target: i,
                preset: "black",
                href: "".concat(t).concat(O.tJ)
            }, n)
        }
          , Z = function(e) {
            var t = e.items;
            return o().createElement("div", {
                className: x
            }, o().createElement(R.L, {
                gap: "20"
            }, t.map((function(e) {
                return o().createElement(P, (0,
                a.Z)({
                    key: e.title
                }, e))
            }
            ))))
        }
          , H = function(e) {
            var t = e.items
              , n = (0,
            l.v9)(s.g0)
              , a = f()(X, (0,
            i.Z)({}, A, n));
            return o().createElement("div", {
                className: a
            }, o().createElement(D, null), o().createElement(Z, {
                items: t
            }))
        }
          , M = n(48589)
          , V = n(96360)
          , U = n(65262)
          , j = n(30894)
          , G = function() {
            var e = (0,
            j.D)()
              , t = (0,
            l.v9)(c)
              , n = (0,
            l.v9)(s.g0)
              , r = n ? u : m;
            if (!t)
                return null;
            var d = n ? C : H
              , p = t.menu
              , v = t.title
              , g = t.button
              , b = t.blocks
              , w = t.description
              , k = n ? U.t.SECONDARY : U.t.PRIMARY
              , y = f()(r.wrapper, (0,
            i.Z)({}, r.safari, e));
            return o().createElement("div", {
                className: y
            }, o().createElement(d, {
                items: p
            }), o().createElement("div", {
                className: r.content
            }, o().createElement("div", {
                className: r.description
            }, o().createElement("h1", {
                className: r.title
            }, v, o().createElement("div", {
                className: r.plyambaText
            }, o().createElement(V.p, null), E.g)), o().createElement("div", {
                className: r.info
            }, w), o().createElement("div", {
                className: r["button-wrapper"]
            }, o().createElement(M.op, (0,
            a.Z)({}, g, {
                variant: k
            })))), o().createElement(h, {
                blocks: b
            })))
        }
    },
    35324: function(e, t, n) {
        n.r(t),
        n.d(t, {
            HowToCalculateView: function() {
                return S
            }
        });
        var a = n(4942)
          , i = n(98152)
          , r = n(28416)
          , o = n.n(r)
          , l = n(39704)
          , c = function(e) {
            return e.howToCalculate
        }
          , s = n(48916)
          , u = {
            wrapper: "mobile-wrapper-VIpcV",
            fadeIn: "mobile-fadeIn-PYUSg",
            title: "mobile-title-BuGjo",
            description: "mobile-description-ym9D9",
            items: "mobile-items-Sv85I",
            item: "mobile-item-v0Xdu",
            calc: "mobile-calc-O_GLI",
            "button-wrapper": "mobile-button-wrapper-HAKRG",
            "item-images": "mobile-item-images-EaXU5",
            "item-title": "mobile-item-title-yBY_P",
            "item-description": "mobile-item-description-lz4R3",
            "has-button": "mobile-has-button-lSLfv",
            "item-image": "mobile-item-image-SRZvp",
            "item-list": "mobile-item-list-c0ka1",
            "list-item": "mobile-list-item-sPlQn",
            "details-title": "mobile-details-title-o1luq",
            "details-list": "mobile-details-list-yb51H",
            "details-text": "mobile-details-text-CAipU"
        }
          , m = {
            wrapper: "desktop-wrapper-y5YwA",
            fadeIn: "desktop-fadeIn-fkOVj",
            title: "desktop-title-yyqDL",
            content: "desktop-content-XfqFC",
            items: "desktop-items-Xe5QU",
            item: "desktop-item-WrEcu",
            sliding: "desktop-sliding-fO4mi",
            slideLeft: "desktop-slideLeft-XQqhj",
            odd: "desktop-odd-_tJnq",
            "next-arrow": "desktop-next-arrow-NKMec",
            calc: "desktop-calc-rQAMk",
            "button-wrapper": "desktop-button-wrapper-SK7Gu",
            "item-images": "desktop-item-images-zeXf5",
            "item-title": "desktop-item-title-EHAWm",
            "item-description": "desktop-item-description-lf8Pc",
            "item-image": "desktop-item-image-uKkFl",
            "item-list": "desktop-item-list-_yFXD",
            "list-item": "desktop-list-item-SkqvU",
            "details-list": "desktop-details-list-t2XAq",
            "details-title": "desktop-details-title-bdtiq",
            "details-text": "desktop-details-text-WeqLC"
        }
          , d = n(94184)
          , p = n.n(d)
          , f = n(99537)
          , v = function(e) {
            var t = e.title
              , n = e.description
              , a = (0,
            l.v9)(s.g0) ? u : m;
            return o().createElement("div", {
                className: a.content
            }, o().createElement("h1", {
                className: a.title
            }, t), n && o().createElement("div", {
                className: a.description
            }, n))
        }
          , g = n(24860)
          , b = n(48589)
          , E = n(46095)
          , h = "Коэффициент переиспользования"
          , w = "Коэффициент переиспользования выражает, насколько перепродажа продлевает срок службы товара. Разберём на".concat(E.Xz, "примере: \n\nПетя купил в").concat(E.Xz, "магазине куртку и").concat(E.Xz, "проходил в").concat(E.Xz, "ней").concat(E.Xz, "пару лет").concat(E.Xz, "— обычный срок для").concat(E.Xz, "подобных вещей. Но").concat(E.Xz, "вместо того, чтобы").concat(E.Xz, "захламлять гардероб, Петя продал куртку Коле, который будет носить её").concat(E.Xz, "ещё").concat(E.Xz, "полтора года. \nТаким образом, срок службы увеличился на").concat(E.Xz, "75%, а").concat(E.Xz, "коэффицент будет равен 0,75.\n\nКоэффициент переиспользования = срок вторичной службы / срок первичной службы.\n\nПонятно, что").concat(E.Xz, "люди пользуются вещами по‑разному, и").concat(E.Xz, "у").concat(E.Xz, "нас недостаточно данных, чтобы").concat(E.Xz, "оценить каждый уникальный случай. Поэтому в").concat(E.Xz, "своих расчётах мы").concat(E.Xz, "используем усреднённые коэффициенты по").concat(E.Xz, "категориям:")
          , k = ["телефоны, планшеты, ноутбуки, телевизоры, книги".concat(E.Xz, "— 1,0"), "одежда и".concat(E.Xz, "обувь").concat(E.Xz, "— 0,74"), "легковые автомобили".concat(E.Xz, "— 0,33"), "мототехника".concat(E.Xz, "— 0,45")]
          , y = "Производство, логистика и".concat(E.Xz, "утилизация")
          , O = "Для оценки выбросов CO₂, а".concat(E.Xz, "также воды и").concat(E.Xz, "энергии используется международная база данных Ecoinvent. Она создана для проектов, подобных нашему, и").concat(E.Xz, "позволяет, например, узнать, сколько ресурсов уходит на").concat(E.Xz, "производство хлопкового волокна или транспортировки легковушки автопоездом.").concat(E.BR, "\nДля расчёта затраченных материалов мы").concat(E.Xz, "использовали данные от").concat(E.Xz, "производителей и").concat(E.Xz, "научные публикации, а").concat(E.Xz, "затем усреднили их").concat(E.Xz, "по").concat(E.Xz, "категориям.").concat(E.BR, "\nЛогистические расходы считаем в").concat(E.Xz, "два этапа. Если товар везут из").concat(E.Xz, "страны-производителя морем или по").concat(E.Xz, "воздуху, то").concat(E.Xz, "для начала оцениваем средний путь до").concat(E.Xz, "портов или аэропортов России. Далее мы").concat(E.Xz, "рассчитываем оставшийся участок наземного пути до").concat(E.Xz, "конкретного региона:")
          , N = ["телефоны, планшеты — 6 056 км самолётом из Китая", "ноутбуки — 21 792 км кораблём из Китая", "одежда и обувь — 14 156 км кораблём из Китая, Германии, Бангладеша, Вьетнама, Индии, Турции, Гонконга, Индонезии, Камбоджи", "автомобили — 14 290 км грузовиком из Китая", "мототехника — 7 775 км кораблём из Китая", "телевизоры — 23 600 км кораблём из Южной Кореи", "книги — 1 563 км грузовиком по России"]
          , z = "Для расчёта расходов на утилизацию мы учли, какие из её методов преобладают в каждой из категорий. Для электроники мы воспользовались данными организации GESP. В итоге мы посчитали экологический вклад для каждого типа товара, проданного или купленного на Авито."
          , I = function() {
            var e = (0,
            l.I0)()
              , t = (0,
            l.v9)(s.g0)
              , n = t ? u : m
              , a = (0,
            l.v9)(s.Fu)
              , i = t ? E.RD.BOTTOM_SHEET : E.RD.DIALOG;
            return o().createElement(b.au, {
                isOpen: a,
                mode: i,
                bottomSheetOptions: {
                    height: "80%"
                },
                onClose: function() {
                    e((0,
                    g.R9)())
                }
            }, o().createElement("div", {
                className: n["details-wrapper"]
            }, o().createElement("h1", {
                className: n["details-title"]
            }, y), o().createElement("div", {
                className: n["details-text"]
            }, O), o().createElement("ul", {
                className: n["details-list"]
            }, N.map((function(e, t) {
                return o().createElement("li", {
                    key: e
                }, e, t < N.length - 1 ? ";" : ".")
            }
            ))), o().createElement("div", {
                className: n["details-text"]
            }, z)))
        }
          , _ = function() {
            var e = (0,
            l.I0)()
              , t = (0,
            l.v9)(s.g0)
              , n = t ? u : m
              , a = (0,
            l.v9)(s.Ij)
              , i = t ? E.RD.BOTTOM_SHEET : E.RD.DIALOG;
            return o().createElement(b.au, {
                isOpen: a,
                mode: i,
                bottomSheetOptions: {
                    height: "80%"
                },
                onClose: function() {
                    e((0,
                    g.R9)())
                }
            }, o().createElement("div", {
                className: n["details-wrapper"]
            }, o().createElement("h1", {
                className: n["details-title"]
            }, h), o().createElement("div", {
                className: n["details-text"]
            }, w), o().createElement("ul", {
                className: n["details-list"]
            }, k.map((function(e, t) {
                return o().createElement("li", {
                    key: e
                }, e, t < k.length - 1 ? ";" : ".")
            }
            )))))
        }
          , T = n(87462)
          , C = n(30894)
          , X = function(e) {
            var t = e.title
              , n = e.mobileTitle
              , c = e.image
              , d = e.items
              , f = e.button
              , v = e.onClick
              , g = e.description
              , E = (0,
            C.D)()
              , h = (0,
            l.v9)(s.g0)
              , w = (0,
            r.useRef)(null)
              , k = (0,
            r.useState)(null)
              , y = (0,
            i.Z)(k, 2)
              , O = y[0]
              , N = y[1];
            (0,
            r.useEffect)((function() {
                var e, t = null === (e = w.current) || void 0 === e ? void 0 : e.offsetWidth;
                E && t && N(1.33 * t - 48)
            }
            ), [E, w.current]);
            var z = O ? {
                minHeight: O
            } : void 0
              , I = h ? u : m
              , _ = Boolean(c)
              , X = Boolean(null == d ? void 0 : d.length)
              , x = Boolean(null == g ? void 0 : g.length)
              , S = h && n ? n : t
              , A = p()(I.item, (0,
            a.Z)({}, I.calc, _), (0,
            a.Z)({}, I["has-button"], f));
            return o().createElement("div", {
                ref: w,
                style: z,
                className: A,
                onClick: v
            }, o().createElement("h2", {
                className: I["item-title"]
            }, S), x && o().createElement("div", {
                className: I["item-description"]
            }, X ? X && o().createElement("ul", {
                className: I["item-list"]
            }, null == d ? void 0 : d.map((function(e) {
                return o().createElement("li", {
                    key: e,
                    className: I["list-item"]
                }, e)
            }
            ))) : null, g), c && o().createElement("img", {
                className: I["item-image"],
                src: c
            }), f && o().createElement("div", {
                className: I["button-wrapper"]
            }, o().createElement(b.op, (0,
            T.Z)({
                fullWidth: !0
            }, f))))
        }
          , x = function(e) {
            var t = e.items
              , n = e.handleNextClick
              , a = (0,
            l.v9)(s.g0)
              , i = a ? u : m
              , r = function(e) {
                if (e && !a)
                    return n
            };
            return o().createElement("div", {
                className: i.items
            }, t.map((function(e, t) {
                return o().createElement(X, (0,
                T.Z)({
                    key: e.title,
                    isFirst: !t,
                    onClick: r(t)
                }, e))
            }
            )))
        }
          , S = function() {
            var e, t = (0,
            l.v9)(c), n = (0,
            l.v9)(s.g0), d = (0,
            r.useState)(!1), g = (0,
            i.Z)(d, 2), b = g[0], E = g[1], h = n ? u : m, w = t || {}, k = w.title, y = w.description, O = w.items, N = void 0 === O ? [] : O, z = (0,
            r.useState)(!1), T = (0,
            i.Z)(z, 2), C = T[0], X = T[1], S = (0,
            r.useState)(N), A = (0,
            i.Z)(S, 2), L = A[0], D = A[1];
            (0,
            r.useEffect)((function() {
                D(L)
            }
            ), [N]);
            var W = (0,
            r.useCallback)((function() {
                C || (X(!0),
                setTimeout((function() {
                    var e = L.shift();
                    e && (L.push(e),
                    X(!1),
                    E(!b),
                    D(L))
                }
                ), 1100))
            }
            ), [b, L, C]);
            if (!t)
                return null;
            var R = p()(h.wrapper, (e = {},
            (0,
            a.Z)(e, h.sliding, C),
            (0,
            a.Z)(e, h.odd, b),
            e));
            return o().createElement("div", {
                className: R
            }, !n && o().createElement("div", {
                className: h["next-arrow"],
                onClick: W
            }, o().createElement(f.e, {
                size: "xl"
            })), o().createElement(v, {
                title: k,
                description: y
            }), o().createElement(x, {
                items: L,
                handleNextClick: W
            }), o().createElement(I, null), o().createElement(_, null))
        }
    },
    60079: function(e, t, n) {
        n.r(t),
        n.d(t, {
            HowToGetView: function() {
                return z
            }
        });
        var a = n(28416)
          , i = n.n(a)
          , r = n(39704)
          , o = function(e) {
            return e.howToGet
        }
          , l = n(48916)
          , c = {
            wrapper: "mobile-wrapper-c5CdD",
            fadeIn: "mobile-fadeIn-JGE4p",
            title: "mobile-title-F4TQk",
            description: "mobile-description-PRiUY",
            items: "mobile-items-LN3sJ",
            item: "mobile-item-I5iqZ",
            wide: "mobile-wide-h06xF",
            "item-content": "mobile-item-content-IfWqQ",
            "dialog-button-wrapper": "mobile-dialog-button-wrapper-fTEba",
            "item-images": "mobile-item-images-afXEu",
            "item-title": "mobile-item-title-SjKHp",
            "item-description": "mobile-item-description-eQjA7",
            "item-image": "mobile-item-image-cXozB",
            "category-item": "mobile-category-item-MwjPO",
            "dialog-content": "mobile-dialog-content-YWmVP",
            "dialog-title": "mobile-dialog-title-Srlf_"
        }
          , s = {
            wrapper: "desktop-wrapper-MjDQF",
            fadeIn: "desktop-fadeIn-BjgG9",
            title: "desktop-title-BGSgf",
            content: "desktop-content-quPZH",
            items: "desktop-items-ywgyw",
            item: "desktop-item-eo_nu",
            wide: "desktop-wide-ZpwUI",
            "item-content": "desktop-item-content-hj3UP",
            "tooltip-title": "desktop-tooltip-title-UZkz5",
            "item-images": "desktop-item-images-BumYl",
            "item-title": "desktop-item-title-LkZqW",
            "item-description": "desktop-item-description-NeieY",
            "item-image": "desktop-item-image-hYw4O",
            "category-item": "desktop-category-item-OIVXm"
        }
          , u = n(87462)
          , m = n(4942)
          , d = n(94184)
          , p = n.n(d)
          , f = function(e) {
            var t = e.title
              , n = e.description
              , a = e.items
              , o = (0,
            r.v9)(l.g0)
              , d = o ? c : s
              , f = Boolean(null == a ? void 0 : a.length)
              , v = p()(d.item, (0,
            m.Z)({}, d.wide, f))
              , g = o ? N : w;
            return i().createElement("div", {
                className: v
            }, i().createElement("div", {
                className: d["item-content"]
            }, i().createElement("h2", {
                className: d["item-title"]
            }, t), i().createElement("div", {
                className: d["item-description"]
            }, n)), f && i().createElement("div", {
                className: d["item-images"]
            }, null == a ? void 0 : a.map((function(e) {
                return i().createElement(g, (0,
                u.Z)({
                    key: e.title
                }, e))
            }
            ))))
        }
          , v = function(e) {
            var t = e.items
              , n = (0,
            r.v9)(l.g0) ? c : s;
            return i().createElement("div", {
                className: n.items
            }, t.map((function(e) {
                return i().createElement(f, (0,
                u.Z)({
                    key: e.title
                }, e))
            }
            )))
        }
          , g = function(e) {
            var t = e.title
              , n = e.description
              , a = (0,
            r.v9)(l.g0) ? c : s;
            return i().createElement("div", {
                className: a.content
            }, i().createElement("h1", {
                className: a.title
            }, t), n && i().createElement("div", {
                className: a.description
            }, n))
        }
          , b = n(83735)
          , E = n(46095)
          , h = n(24860)
          , w = function(e) {
            var t = e.image
              , n = e.title
              , a = e.ecoParams
              , o = (0,
            r.I0)()
              , u = (0,
            r.v9)(l.g0) ? c : s
              , m = i().createElement("div", {
                className: u["tooltip-content"]
            }, i().createElement("h4", {
                className: u["tooltip-title"]
            }, n), i().createElement("ul", null, a.map((function(e) {
                return i().createElement("li", {
                    key: e
                }, e)
            }
            ))));
            return i().createElement(b.u, {
                trigger: "hover",
                preset: "light",
                fontFamily: "Manrope",
                content: m,
                placement: "bottom"
            }, i().createElement("div", {
                className: u["category-item"],
                onClick: function() {
                    o((0,
                    h.uH)(E.Ci[E.RG.ITEM_COMPILATIONS_VIEW]))
                }
            }, i().createElement("img", {
                className: u["item-image"],
                src: t
            })))
        }
          , k = n(98152)
          , y = n(48589)
          , O = n(40753)
          , N = function(e) {
            var t = e.image
              , n = e.title
              , o = e.ecoParams
              , u = (0,
            r.I0)()
              , m = (0,
            r.v9)(l.g0) ? c : s
              , d = (0,
            a.useState)(!1)
              , p = (0,
            k.Z)(d, 2)
              , f = p[0]
              , v = p[1];
            return i().createElement(i().Fragment, null, i().createElement("div", {
                className: m["category-item"],
                onClick: function() {
                    v(!0)
                }
            }, i().createElement("img", {
                className: m["item-image"],
                src: t
            })), i().createElement(y.au, {
                isOpen: f,
                bottomSheetOptions: {
                    height: "450px"
                },
                onClose: function() {
                    v(!1)
                }
            }, i().createElement("div", {
                className: m["dialog-content"]
            }, i().createElement("h4", {
                className: m["dialog-title"]
            }, n), i().createElement("img", {
                className: m["item-image"],
                src: t
            }), i().createElement("ul", null, o.map((function(e) {
                return i().createElement("li", {
                    key: e
                }, e)
            }
            )))), i().createElement("div", {
                className: m["dialog-button-wrapper"]
            }, i().createElement(O.z, {
                fullWidth: !0,
                onClick: function() {
                    v(!1),
                    setTimeout((function() {
                        u((0,
                        h.uH)(E.Ci[E.RG.ITEM_COMPILATIONS_VIEW]))
                    }
                    ), 300)
                }
            }, "Перейти"))))
        }
          , z = function() {
            var e = (0,
            r.v9)(o)
              , t = (0,
            r.v9)(l.g0) ? c : s;
            if (!e)
                return null;
            var n = e.title
              , a = e.description
              , u = e.items;
            return i().createElement("div", {
                className: t.wrapper
            }, i().createElement(g, {
                title: n,
                description: a
            }), i().createElement(v, {
                items: u
            }))
        }
    },
    998: function(e, t, n) {
        n.r(t),
        n.d(t, {
            ItemCompilationsView: function() {
                return N
            }
        });
        var a = n(4942)
          , i = n(98152)
          , r = n(28416)
          , o = n.n(r)
          , l = n(39704)
          , c = function(e) {
            return e.itemCompilations
        }
          , s = n(48916)
          , u = {
            wrapper: "mobile-wrapper-Lza7d",
            fadeIn: "mobile-fadeIn-i8h1q",
            title: "mobile-title-vE0pZ",
            description: "mobile-description-GkyP_",
            items: "mobile-items-I0hRy",
            item: "mobile-item-ChpAx",
            calc: "mobile-calc-gy6fD",
            "button-wrapper": "mobile-button-wrapper-u2wWo",
            "item-images": "mobile-item-images-WOnyB",
            "item-title": "mobile-item-title-jUQwj",
            "item-description": "mobile-item-description-XhHmE",
            "has-button": "mobile-has-button-i7vtQ",
            "item-image": "mobile-item-image-MR6XX",
            "item-image-wrapper": "mobile-item-image-wrapper-qwZIa",
            "item-list": "mobile-item-list-_rKZE",
            "list-item": "mobile-list-item-CfNjs",
            plyamba: "mobile-plyamba-FGdHO",
            "plyamba-text": "mobile-plyamba-text-iaQjC"
        }
          , m = {
            wrapper: "desktop-wrapper-w3nD7",
            fadeIn: "desktop-fadeIn-nE_Yj",
            title: "desktop-title-u543B",
            content: "desktop-content-xgVKR",
            items: "desktop-items-DAjZu",
            item: "desktop-item-w_262",
            sliding: "desktop-sliding-CLnlo",
            slideLeft: "desktop-slideLeft-HWDF2",
            "next-arrow": "desktop-next-arrow-n8jA9",
            calc: "desktop-calc-cFNWO",
            "button-wrapper": "desktop-button-wrapper-XFDuA",
            "item-images": "desktop-item-images-tf12C",
            "item-title": "desktop-item-title-dEaQy",
            "item-description": "desktop-item-description-FtMY3",
            "item-image-wrapper": "desktop-item-image-wrapper-OECv7",
            "item-image": "desktop-item-image-sZ5Qr",
            "item-list": "desktop-item-list-F3a8G",
            "list-item": "desktop-list-item-Vgq9l",
            plyamba: "desktop-plyamba-KsjgR",
            "plyamba-text": "desktop-plyamba-text-ByjIe"
        }
          , d = n(94184)
          , p = n.n(d)
          , f = n(99537)
          , v = n(40753)
          , g = "Посмотреть"
          , b = n(30894)
          , E = n(72596)
          , h = n(46095)
          , w = function(e) {
            var t = e.description
              , n = e.onClick
              , a = e.title
              , c = e.label
              , d = e.image
              , p = e.url
              , f = (0,
            b.D)()
              , w = (0,
            l.v9)(s.g0)
              , k = (0,
            r.useRef)(null)
              , y = (0,
            r.useState)(null)
              , O = (0,
            i.Z)(y, 2)
              , N = O[0]
              , z = O[1];
            (0,
            r.useEffect)((function() {
                var e, t = null === (e = k.current) || void 0 === e ? void 0 : e.offsetWidth;
                f && t && z(1.33 * t - 48)
            }
            ), [f, k.current]);
            var I = w ? u : m
              , _ = N ? {
                minHeight: N
            } : void 0;
            return o().createElement("div", {
                ref: k,
                style: _,
                className: I.item,
                onClick: n
            }, o().createElement("h2", {
                className: I["item-title"]
            }, a), o().createElement("div", {
                className: I["item-description"]
            }, t), o().createElement("div", {
                className: I.plyamba
            }, o().createElement("span", {
                className: I["plyamba-text"]
            }, c)), d && o().createElement("div", {
                className: I["item-image-wrapper"]
            }, o().createElement("img", {
                className: I["item-image"],
                src: d
            })), o().createElement("div", {
                className: I["button-wrapper"]
            }, o().createElement(v.z, {
                size: "l",
                preset: "secondary",
                fullWidth: !0,
                onClick: function() {
                    (0,
                    E.Wd)({
                        title: a
                    }),
                    setTimeout((function() {
                        window.open(p, "_blank")
                    }
                    ), h.fk)
                }
            }, g)))
        }
          , k = n(87462)
          , y = function(e) {
            var t = e.items
              , n = e.handleNextClick
              , a = (0,
            l.v9)(s.g0) ? u : m;
            return o().createElement("div", {
                className: a.items
            }, t.map((function(e, t) {
                return o().createElement(w, (0,
                k.Z)({
                    key: e.title
                }, e, {
                    onClick: t ? n : void 0
                }))
            }
            )))
        }
          , O = function(e) {
            var t = e.title
              , n = e.description
              , a = (0,
            l.v9)(s.g0) ? u : m;
            return o().createElement("div", {
                className: a.content
            }, o().createElement("h1", {
                className: a.title
            }, t), n && o().createElement("div", {
                className: a.description
            }, n))
        }
          , N = function() {
            var e = (0,
            l.v9)(c)
              , t = (0,
            l.v9)(s.g0)
              , n = t ? u : m
              , d = e || {}
              , v = d.title
              , g = d.description
              , b = d.items
              , E = (0,
            r.useState)(!1)
              , h = (0,
            i.Z)(E, 2)
              , w = h[0]
              , k = h[1]
              , N = (0,
            r.useState)(b)
              , z = (0,
            i.Z)(N, 2)
              , I = z[0]
              , _ = z[1];
            (0,
            r.useEffect)((function() {
                _(I)
            }
            ), [b]);
            var T = (0,
            r.useCallback)((function() {
                w || t || (k(!0),
                setTimeout((function() {
                    var e = null == I ? void 0 : I.shift();
                    e && (null == I || I.push(e),
                    k(!1),
                    _(I))
                }
                ), 1100))
            }
            ), [I, w, t]);
            if (!e)
                return null;
            var C = p()(n.wrapper, (0,
            a.Z)({}, n.sliding, w));
            return o().createElement("div", {
                className: C
            }, o().createElement(O, {
                title: v,
                description: g
            }), o().createElement(y, {
                handleNextClick: T,
                items: I
            }), !t && o().createElement("div", {
                className: n["next-arrow"],
                onClick: T
            }, o().createElement(f.e, {
                size: "xl"
            })))
        }
    },
    71452: function(e, t, n) {
        n.r(t),
        n.d(t, {
            LoaderView: function() {
                return r
            }
        });
        var a = n(28416)
          , i = n.n(a)
          , r = function() {
            return i().createElement(i().Fragment, null)
        }
    },
    4134: function(e, t, n) {
        n.r(t),
        n.d(t, {
            PersonalImpactView: function() {
                return K
            }
        });
        var a = n(4942)
          , i = n(98152)
          , r = n(28416)
          , o = n.n(r)
          , l = n(39704)
          , c = function(e) {
            return e.personalImpact
        }
          , s = n(48916)
          , u = {
            wrapper: "mobile-wrapper-ax7zY",
            fadeIn: "mobile-fadeIn-KhfFI",
            content: "mobile-content-SAf5W",
            title: "mobile-title-pJXOX",
            description: "mobile-description-RfySO",
            "impact-items": "mobile-impact-items-eVIkR",
            "impact-item": "mobile-impact-item-k2hNC",
            disabled: "mobile-disabled-dyoYA",
            bird: "mobile-bird-N9SRR",
            water1: "mobile-water1-rxHjZ",
            water2: "mobile-water2-NKrP1",
            sun: "mobile-sun-SIEbU",
            value: "mobile-value-cTpxE",
            unit: "mobile-unit-RT9Pg",
            label: "mobile-label-RElTr",
            "avatar-wrapper": "mobile-avatar-wrapper-riZ_b",
            leaf: "mobile-leaf-ruZ4c",
            avatar: "mobile-avatar-faFNj",
            plyamba: "mobile-plyamba-gspnp",
            plyambaText: "mobile-plyambaText-STmHK",
            "button-wrapper": "mobile-button-wrapper-NyYz5",
            "export-wrapper": "mobile-export-wrapper-R8Lgr",
            prepare: "mobile-prepare-zOgGz",
            ready: "mobile-ready-gg8AP",
            finished: "mobile-finished-vTm1A",
            fadeOut: "mobile-fadeOut-ymvxD",
            delayedFadeOut: "mobile-delayedFadeOut-t73TJ",
            delayedFadeIn: "mobile-delayedFadeIn-qQDhD",
            "export-green-polygon": "mobile-export-green-polygon-reYF6",
            "export-logo": "mobile-export-logo-xTiwu",
            "share-tools": "mobile-share-tools-Q3GFQ",
            "social-button-icon": "mobile-social-button-icon-q9KMl",
            "tooltip-content": "mobile-tooltip-content-AzfiW",
            "loader-indicator": "mobile-loader-indicator-qeiBA",
            pulseOpacity: "mobile-pulseOpacity-OOFQ0"
        }
          , m = {
            wrapper: "desktop-wrapper-OutiE",
            fadeIn: "desktop-fadeIn-RRiiF",
            "export-wrapper": "desktop-export-wrapper-VGqge",
            prepare: "desktop-prepare-jQLG2",
            ready: "desktop-ready-wholj",
            delayedFadeIn: "desktop-delayedFadeIn-AD6Q_",
            finished: "desktop-finished-k_Hwv",
            fadeOut: "desktop-fadeOut-W8SSH",
            delayedFadeOut: "desktop-delayedFadeOut-LDbst",
            "export-green-polygon": "desktop-export-green-polygon-oZax4",
            disabled: "desktop-disabled-kdOve",
            title: "desktop-title-vTYAX",
            description: "desktop-description-lPXN_",
            content: "desktop-content-HDB3N",
            "export-logo": "desktop-export-logo-XJxc9",
            "social-button-icon": "desktop-social-button-icon-b6kdK",
            "share-tools": "desktop-share-tools-WR63Q",
            "tooltip-content": "desktop-tooltip-content-nJR7c",
            "loader-indicator": "desktop-loader-indicator-x0duZ",
            pulseOpacity: "desktop-pulseOpacity-Pzeeg",
            "import-items-wrapper": "desktop-import-items-wrapper-pvCAT",
            "impact-items": "desktop-impact-items-F7T6E",
            "impact-item": "desktop-impact-item-eeQO3",
            frog: "desktop-frog-TwIs_",
            bird: "desktop-bird-xXtiX",
            water1: "desktop-water1-LWlZZ",
            water2: "desktop-water2-Fta24",
            sun: "desktop-sun-JCEQH",
            batterfly: "desktop-batterfly-S09pI",
            flowers: "desktop-flowers-pbnEZ",
            leaf: "desktop-leaf-KFxu3",
            plyamba: "desktop-plyamba-oyIFF",
            value: "desktop-value-Nd1tR",
            unit: "desktop-unit-puWVS",
            label: "desktop-label-EIkG9",
            "avatar-wrapper": "desktop-avatar-wrapper-cMoFH",
            avatar: "desktop-avatar-cJSQ4",
            plyambaText: "desktop-plyambaText-kXbhS",
            "button-wrapper": "desktop-button-wrapper-K8ki0"
        }
          , d = n(94184)
          , p = n.n(d)
          , f = n(46095)
          , v = ("Мой".concat(f.BR, "Эко Вклад"),
        "Экологический вклад")
          , g = ("Мы".concat(f.Xz, "автоматически посчитали, сколько ресурсов вы").concat(f.Xz, "помогли сберечь, и").concat(f.Xz, "выдали специальный значок."),
        1280)
          , b = "prepare"
          , E = "ready"
          , h = "finished"
          , w = "Закрыть"
          , k = "Авторизуйтесь для просмотра информации о".concat(f.Xz, "вашем личном вкладе")
          , y = {
            title: "Авторизоваться",
            url: "#login?next=authCallbackEcoImpact"
        }
          , O = ["кг", "тонн", "млн кг", "млн тонн", "млрд тонн"]
          , N = ["л", "м³", "тыс м³", "млн м³", "млрд м³"]
          , z = ["кВт⋅ч", "МВт⋅ч", "млн кВт⋅ч", "млн МВт⋅ч", "млрд МВт⋅ч"]
          , I = "CO₂"
          , _ = "воды"
          , T = "энергии"
          , C = "не попало в атмосферу"
          , X = "было сохранено"
          , x = "было сэкономлено"
          , S = n(42231)
          , A = n(11387)
          , L = n(96360)
          , D = n(31080)
          , W = n(64311)
          , R = n(30894)
          , P = function(e) {
            var t = e.co2
              , n = e.water
              , a = e.energy
              , c = e.avatarUrl
              , d = (0,
            R.D)()
              , p = (0,
            r.useRef)(null)
              , v = (0,
            r.useState)(null)
              , g = (0,
            i.Z)(v, 2)
              , b = g[0]
              , E = g[1];
            (0,
            r.useEffect)((function() {
                var e, t = null === (e = p.current) || void 0 === e ? void 0 : e.offsetWidth;
                d && t && E(t)
            }
            ), [d, p.current]);
            var h = (0,
            l.v9)(s.g0)
              , w = !h
              , k = h ? u : m
              , y = t.value ? void 0 : k.disabled
              , O = n.value ? void 0 : k.disabled
              , N = a.value ? void 0 : k.disabled
              , z = b ? {
                minHeight: b
            } : void 0;
            return o().createElement("div", {
                className: k["impact-items"]
            }, w && o().createElement("div", {
                ref: p,
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.frog,
                src: "https://www.avito.st/s/charity/eco-impact/frog.svg"
            })), o().createElement("div", {
                ref: p,
                style: z,
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.bird,
                src: "https://www.avito.st/s/charity/eco-impact/bird.svg"
            }), o().createElement("div", {
                className: y
            }, o().createElement("div", {
                className: k.value
            }, (0,
            D.WU)(t.value, 1)), o().createElement("div", {
                className: k.unit
            }, t.unit, f.Xz, I), o().createElement("div", {
                className: k.label
            }, C))), w && o().createElement("div", {
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.batterfly,
                src: "https://www.avito.st/s/charity/eco-impact/batterfly.svg"
            }), o().createElement("img", {
                className: k.flowers,
                src: "https://www.avito.st/s/charity/eco-impact/flowers.svg"
            })), o().createElement("div", {
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.water1,
                src: "https://www.avito.st/s/charity/eco-impact/drop.svg"
            }), o().createElement("img", {
                className: k.water2,
                src: "https://www.avito.st/s/charity/eco-impact/drop.svg"
            }), o().createElement("div", {
                className: O
            }, o().createElement("div", {
                className: k.value
            }, (0,
            D.WU)(n.value, 1)), o().createElement("div", {
                className: k.unit
            }, n.unit, f.Xz, _), o().createElement("div", {
                className: k.label
            }, X))), o().createElement("div", {
                style: z,
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.leaf,
                src: "https://www.avito.st/s/charity/eco-impact/lives.svg"
            }), o().createElement("img", {
                className: k.plyamba,
                src: "https://www.avito.st/s/charity/eco-impact/plyamba-small.svg"
            }), o().createElement("div", {
                className: k["avatar-wrapper"]
            }, c && o().createElement("img", {
                src: c,
                className: k.avatar
            })), o().createElement("div", {
                className: k.plyambaText
            }, o().createElement(L.p, null), W.g)), o().createElement("div", {
                style: z,
                className: k["impact-item"]
            }, o().createElement("img", {
                className: k.sun,
                src: "https://www.avito.st/s/charity/eco-impact/sun.svg"
            }), o().createElement("div", {
                className: N
            }, o().createElement("div", {
                className: k.value
            }, (0,
            D.WU)(a.value, 1)), o().createElement("div", {
                className: k.unit
            }, a.unit, f.Xz, T), o().createElement("div", {
                className: k.label
            }, x))))
        }
          , Z = n(87462)
          , H = n(48589)
          , M = n(72596)
          , V = function(e) {
            var t = e.description
              , n = e.title
              , a = (0,
            l.v9)(s.fN)
              , i = (0,
            l.v9)(s.g0)
              , r = i ? v : n
              , c = i ? u : m;
            return o().createElement("div", {
                className: c.content
            }, o().createElement("h1", {
                className: c.title
            }, r), a ? o().createElement(o().Fragment, null, o().createElement("div", {
                className: c.description
            }, t)) : o().createElement(o().Fragment, null, o().createElement("div", {
                className: c.description
            }, k), o().createElement("div", {
                className: c["button-wrapper"],
                onClick: function() {
                    (0,
                    M._D)()
                }
            }, o().createElement(H.op, (0,
            Z.Z)({
                fullWidth: !0,
                size: "l"
            }, y)))))
        }
          , U = n(40753)
          , j = n(83735)
          , G = n(60223)
          , F = n(89777)
          , B = function(e) {
            var t = e.imageUrl
              , n = e.onClose
              , a = (0,
            l.v9)(s.g0) ? u : m
              , i = function(e) {
                return o().createElement("div", {
                    className: a["tooltip-content"]
                }, "close" === e ? w : F.Lu[e])
            };
            return o().createElement("div", {
                className: a["share-tools"]
            }, F.k.map((function(e) {
                return o().createElement(j.u, {
                    key: e,
                    trigger: "hover",
                    fontFamily: "Manrope",
                    content: i(e)
                }, o().createElement("div", null, o().createElement(Q, {
                    type: e,
                    imageUrl: t,
                    onClose: n
                })))
            }
            )), o().createElement(j.u, {
                trigger: "hover",
                fontFamily: "Manrope",
                content: i("close")
            }, o().createElement(U.z, {
                size: "l",
                shape: "square",
                preset: "inverseSecondary",
                iconBefore: o().createElement(G.T, null),
                onClick: n
            })))
        }
          , q = n(3688)
          , Y = n(84078)
          , Q = function(e) {
            var t = e.type
              , n = e.imageUrl
              , a = e.onClose
              , i = (0,
            l.v9)(s.g0) ? u : m
              , r = F.Rl[t];
            return o().createElement(U.z, {
                shape: "square",
                preset: "overlaySecondary",
                iconBefore: o().createElement("img", {
                    className: i["social-button-icon"],
                    alt: t,
                    src: Y.S[t]
                }),
                size: "l",
                onClick: function() {
                    if (r !== F.LI.COPY) {
                        if (r === F.LI.DOWNLOAD) {
                            var e = document.createElement("a");
                            return e.href = n,
                            e.download = "my-avito-impact.png",
                            e.click(),
                            void a()
                        }
                        setTimeout((function() {
                            var e = document.createElement("a");
                            e.href = (0,
                            q.J9)(r, n),
                            e.target = "_blank",
                            e.click(),
                            a(),
                            e.remove()
                        }
                        ), 300),
                        a(),
                        setTimeout((function() {
                            (0,
                            M.TA)({
                                snname: t
                            }),
                            a()
                        }
                        ), 2 * f.fk),
                        (0,
                        q.k3)(r)
                    } else
                        (0,
                        q.WY)(n).then((function() {
                            a()
                        }
                        ))
                }
            })
        }
          , J = function(e, t) {
            var n = Math.round(e).toString().length
              , a = Math.ceil(n / 3) - 1
              , i = a && 3 - (n - 3 * a);
            return {
                value: Math.round(Math.pow(10, i) * e / Math.pow(1e3, a)) / Math.pow(10, i),
                unit: t[a]
            }
        }
          , K = function() {
            var e = (0,
            l.v9)(c)
              , t = (0,
            l.v9)(s.g0)
              , n = (0,
            A.kq)()
              , d = t ? u : m
              , f = (0,
            r.useState)(null)
              , v = (0,
            i.Z)(f, 2)
              , w = v[0]
              , k = v[1]
              , y = (0,
            r.useState)(null)
              , I = (0,
            i.Z)(y, 2)
              , _ = I[0]
              , T = I[1]
              , C = e || {}
              , X = C.data
              , x = C.avatarUrl
              , L = C.title
              , D = C.description
              , W = function() {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return {
                    co2: J(1000000000000, O),
                    water: J(1000000000000, N),
                    energy: J(1000000000000, z)
                }
            }(null == X ? void 0 : X.co2, null == X ? void 0 : X.water, null == X ? void 0 : X.energy)
              , R = W.co2
              , Z = W.water
              , H = W.energy;
            if (!X)
                return null;
            var M = {
                transform: "scale(".concat(n ? n / g : 1, ")")
            }
              , U = p()(d.wrapper, (0,
            a.Z)({}, d.prepare, w === b), (0,
            a.Z)({}, d.finished, w === h), (0,
            a.Z)({}, d.ready, w === E))
              , j = null !== w && null !== _;
            return o().createElement("div", {
                className: U
            }, o().createElement(V, {
                title: L,
                description: D
            }), o().createElement(P, {
                co2: R,
                water: Z,
                energy: H,
                avatarUrl: x
            }), o().createElement("div", {
                style: M,
                className: d["export-wrapper"]
            }, _ && o().createElement("img", {
                className: d["export-image"],
                src: _
            }), j && o().createElement(B, {
                imageUrl: _,
                onClose: function() {
                    setTimeout((function() {
                        T(null),
                        k(h)
                    }
                    ), 20),
                    setTimeout((function() {
                        k(null)
                    }
                    ), 600)
                }
            })), w === b && o().createElement("div", {
                className: d["loader-indicator"]
            }, o().createElement(S.$, {
                size: 36
            })))
        }
    },
    84078: function(e, t, n) {
        n.d(t, {
            S: function() {
                return i
            }
        });
        var a = n(30560)
          , i = {
            vk: a.Oo,
            copy: a.TI,
            telegram: a.YG,
            download: a._8
        }
    },
    57913: function(e, t, n) {
        n.r(t),
        n.d(t, {
            ShareView: function() {
                return N
            }
        });
        var a = n(28416)
          , i = n.n(a)
          , r = n(39704)
          , o = function(e) {
            return e.share
        }
          , l = n(48916)
          , c = {
            wrapper: "mobile-wrapper-_tcwu",
            fadeIn: "mobile-fadeIn-iiac2",
            title: "mobile-title-eYq6i"
        }
          , s = {
            wrapper: "desktop-wrapper-W9dlr",
            fadeIn: "desktop-fadeIn-lng60",
            title: "desktop-title-iUC3O",
            content: "desktop-content-tA6Es",
            description: "desktop-description-rk82z"
        }
          , u = n(4942)
          , m = n(94184)
          , d = n.n(m)
          , p = "styles-wrapper-troyY"
          , f = "styles-item-hsxqs"
          , v = "styles-share-icon-s_6MR"
          , g = "styles-mobile-tbKXN"
          , b = n(84078)
          , E = n(3688)
          , h = n(89777)
          , w = n(72596)
          , k = n(46095)
          , y = function(e) {
            var t = e.type
              , n = h.Rl[t]
              , a = (0,
            E.J9)(n)
              , r = (0,
            E.k3)(n);
            return i().createElement("div", {
                className: f,
                onClick: function() {
                    (0,
                    w.TA)({
                        snname: t
                    }),
                    setTimeout((function() {
                        r && r(),
                        a && window.open(a)
                    }
                    ), 2 * k.fk)
                }
            }, i().createElement("img", {
                className: v,
                alt: t,
                src: b.S[t]
            }))
        }
          , O = function(e) {
            var t = e.items
              , n = (0,
            r.v9)(l.g0)
              , a = d()(p, (0,
            u.Z)({}, g, n));
            return i().createElement("div", {
                className: a
            }, null == t ? void 0 : t.map((function(e) {
                return i().createElement(y, {
                    key: e,
                    type: e
                })
            }
            )))
        }
          , N = function() {
            var e = (0,
            r.v9)(o)
              , t = (0,
            r.v9)(l.g0) ? c : s;
            if (!e)
                return null;
            var n = e.items
              , a = e.title
              , u = e.description;
            return i().createElement("div", {
                className: t.wrapper
            }, i().createElement("h1", {
                className: t.title
            }, a), i().createElement("div", {
                className: t.description
            }, u), i().createElement(O, {
                items: n
            }))
        }
    },
    26271: function(e, t, n) {
        n.d(t, {
            YM: function() {
                return c
            },
            _n: function() {
                return l
            },
            a0: function() {
                return i
            },
            ek: function() {
                return o
            },
            fk: function() {
                return a
            },
            tJ: function() {
                return s
            },
            tv: function() {
                return r
            }
        });
        var a = 220
          , i = "https://avito.ru"
          , r = "https://avito.st/s/charity/avito-care/"
          , o = "https://avito.st/s/charity/eco-impact/"
          , l = "/avito-care/eco-impact"
          , c = {
            UP: "Up",
            RIGHT: "Right",
            DOWN: "Down",
            LEFT: "Left"
        }
          , s = "?from=eco-impact-navigation"
    },
    46095: function(e, t, n) {
        n.d(t, {
            a0: function() {
                return r.a0
            },
            _n: function() {
                return r._n
            },
            RG: function() {
                return s
            },
            Ci: function() {
                return m
            },
            Xv: function() {
                return u
            },
            b8: function() {
                return d
            },
            OP: function() {
                return N
            },
            m5: function() {
                return z
            },
            BR: function() {
                return f.BR
            },
            Bu: function() {
                return L
            },
            I3: function() {
                return D
            },
            zV: function() {
                return H
            },
            gH: function() {
                return M
            },
            a2: function() {
                return T
            },
            i8: function() {
                return _
            },
            c9: function() {
                return V
            },
            _T: function() {
                return U
            },
            HU: function() {
                return S
            },
            ny: function() {
                return A
            },
            D3: function() {
                return P
            },
            o_: function() {
                return Z
            },
            Js: function() {
                return X
            },
            dX: function() {
                return x
            },
            y8: function() {
                return W
            },
            _j: function() {
                return R
            },
            U1: function() {
                return j
            },
            l_: function() {
                return G
            },
            vz: function() {
                return C
            },
            fk: function() {
                return r.fk
            },
            RD: function() {
                return I
            },
            Wn: function() {
                return E
            },
            uG: function() {
                return g
            },
            tX: function() {
                return b
            },
            yJ: function() {
                return v
            },
            Uh: function() {
                return O
            },
            tv: function() {
                return r.tv
            },
            Fc: function() {
                return f.Fc
            },
            tJ: function() {
                return r.tJ
            },
            Xz: function() {
                return f.Xz
            },
            u3: function() {
                return h
            },
            Fq: function() {
                return w
            },
            r1: function() {
                return k
            },
            SB: function() {
                return y
            },
            ek: function() {
                return r.ek
            },
            YM: function() {
                return r.YM
            },
            $k: function() {
                return p
            }
        });
        var a, i, r = n(26271), o = n(4942), l = n(28416), c = n.n(l), s = {
            LOADER_VIEW: "loader-view",
            HEADER_VIEW: "header-view",
            PERSONAL_IMPACT_VIEW: "personal-impact-view",
            HOW_TO_GET_VIEW: "how-to-get-view",
            HOW_TO_CALCULATE_VIEW: "how-to-calculate-view",
            ITEM_COMPILATIONS_VIEW: "item-compilations-view",
            FAQ_VIEW: "faq-view",
            SHARE_VIEW: "share-view"
        }, u = {
            LOADER_VIEW: "loader",
            HEADER_VIEW: "header",
            PERSONAL_IMPACT_VIEW: "personalImpact",
            HOW_TO_GET_VIEW: "howToGet",
            HOW_TO_CALCULATE_VIEW: "howToCalculate",
            ITEM_COMPILATIONS_VIEW: "itemCompilations",
            FAQ_VIEW: "faq",
            SHARE_VIEW: "share"
        }, m = (a = {},
        (0,
        o.Z)(a, s.LOADER_VIEW, "loader-view"),
        (0,
        o.Z)(a, s.HEADER_VIEW, "header-view"),
        (0,
        o.Z)(a, s.PERSONAL_IMPACT_VIEW, "personal-impact-view"),
        (0,
        o.Z)(a, s.HOW_TO_GET_VIEW, "how-to-get-view"),
        (0,
        o.Z)(a, s.HOW_TO_CALCULATE_VIEW, "how-to-calculate-view"),
        (0,
        o.Z)(a, s.ITEM_COMPILATIONS_VIEW, "item-compilations-view"),
        (0,
        o.Z)(a, s.FAQ_VIEW, "faq-view"),
        (0,
        o.Z)(a, s.SHARE_VIEW, "share-view"),
        a), d = (i = {},
        (0,
        o.Z)(i, s.LOADER_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 71452)).then((function(e) {
                return {
                    default: e.LoaderView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.HEADER_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 13167)).then((function(e) {
                return {
                    default: e.HeaderView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.PERSONAL_IMPACT_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 4134)).then((function(e) {
                return {
                    default: e.PersonalImpactView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.HOW_TO_GET_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 60079)).then((function(e) {
                return {
                    default: e.HowToGetView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.HOW_TO_CALCULATE_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 35324)).then((function(e) {
                return {
                    default: e.HowToCalculateView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.ITEM_COMPILATIONS_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 998)).then((function(e) {
                return {
                    default: e.ItemCompilationsView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.FAQ_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 12570)).then((function(e) {
                return {
                    default: e.FaqView
                }
            }
            ))
        }
        ))),
        (0,
        o.Z)(i, s.SHARE_VIEW, c().lazy((function() {
            return Promise.resolve().then(n.bind(n, 57913)).then((function(e) {
                return {
                    default: e.ShareView
                }
            }
            ))
        }
        ))),
        i), p = "/web/1/charity/ecoImpact/init", f = n(58121), v = "GET_MOCK_DATA", g = "GET_DATA_REQUEST", b = "GET_DATA_SUCCESS", E = "GET_DATA_FAIL", h = "SET_MOBILE_MODE", w = "SET_UNDER_CONSTRUCTION_OFF", k = "SHOW_CALCULATION_EXAMPLE", y = "SHOW_HOW_TO_DETAILS", O = "HIDE_DETAILS", N = "80vh", z = "97vh", I = {
            POPUP: "popup",
            DIALOG: "dialog",
            BOTTOM_SHEET: "bottomSheet"
        }, _ = (0,
        n(3688).tq)() ? 96 : 95, T = "local", C = "Monolith", X = 9405, x = 1, S = 9723, A = 0, L = 9724, D = 0, W = 9725, R = 0, P = 9726, Z = 0, H = 9727, M = 1, V = 9728, U = 1, j = 9409, G = 1
    },
    89777: function(e, t, n) {
        n.d(t, {
            AR: function() {
                return f
            },
            LI: function() {
                return s
            },
            Lu: function() {
                return u
            },
            R9: function() {
                return b
            },
            Rl: function() {
                return d
            },
            bi: function() {
                return p
            },
            ds: function() {
                return E
            },
            k: function() {
                return m
            },
            m6: function() {
                return g
            },
            pr: function() {
                return v
            }
        });
        var a, i, r, o = n(4942), l = n(26271), c = n(58121), s = function(e) {
            return e["COPY"] = "COPY",
            e["VK"] = "VK",
            e["TELEGRAM"] = "TELEGRAM",
            e["DOWNLOAD"] = "DOWNLOAD",
            e
        }({}), u = {
            copy: "Скоппировать",
            download: "Скачать",
            vk: "Поделиться в ВК",
            telegram: "Поделиться в Telegram"
        }, m = ["vk", "copy", "download"], d = ("кг".concat(c.Xz, "CO₂"),
        "кг".concat(c.Xz, "воды"),
        "не".concat(c.Xz, "попало в").concat(c.Xz, "атмосферу"),
        {
            vk: s.VK,
            telegram: s.TELEGRAM,
            copy: s.COPY,
            download: "DOWNLOAD"
        }), p = encodeURIComponent("Авито: Сохраняйте природу вместе с нами"), f = l.a0 + l._n, v = "https://avito.st/s/charity/avito-care/header-background.png", g = "Ссылка скопирована в буфер", b = (a = {},
        (0,
        o.Z)(a, s.VK, "vk-share-link"),
        (0,
        o.Z)(a, s.TELEGRAM, "vg-share-link"),
        a), E = (i = {},
        (0,
        o.Z)(i, s.VK, "https://vk.com/share.php"),
        (0,
        o.Z)(i, s.TELEGRAM, "https://t.me/share/url"),
        i);
        r = {},
        (0,
        o.Z)(r, s.VK, "https://vk.com/share.php"),
        (0,
        o.Z)(r, s.TELEGRAM, "tg://msg")
    },
    58121: function(e, t, n) {
        n.d(t, {
            BR: function() {
                return a
            },
            Fc: function() {
                return r
            },
            Xz: function() {
                return i
            }
        });
        var a = "\n\r"
          , i = " "
          , r = "—"
    },
    72596: function(e, t, n) {
        n.d(t, {
            Pz: function() {
                return d
            },
            TA: function() {
                return v
            },
            Wd: function() {
                return p
            },
            _D: function() {
                return u
            },
            cx: function() {
                return s
            },
            lN: function() {
                return c
            },
            rR: function() {
                return m
            },
            uS: function() {
                return f
            }
        });
        var a, i, r = n(65145), o = n(46095), l = new r.Z({
            common: {
                ua: window.navigator.userAgent
            },
            build: (null === (a = window) || void 0 === a || null === (a = a.avito) || void 0 === a || null === (a = a.clickstream) || void 0 === a ? void 0 : a.buildId) || o.a2,
            buildUid: (null === (i = window) || void 0 === i || null === (i = i.avito) || void 0 === i || null === (i = i.clickstream) || void 0 === i ? void 0 : i.buildUid) || o.a2,
            softwareVersion: o.vz,
            srcId: o.i8
        }), c = function(e) {
            l.sendEvent(o.Js, o.dX, e)
        }, s = function() {
            l.sendEvent(o.HU, o.ny)
        }, u = function() {
            l.sendEvent(o.Bu, o.I3)
        }, m = function() {
            l.sendEvent(o.y8, o._j)
        }, d = function() {
            l.sendEvent(o.D3, o.o_)
        }, p = function(e) {
            l.sendEvent(o.zV, o.gH, e)
        }, f = function(e) {
            l.sendEvent(o.c9, o._T, e)
        }, v = function(e) {
            l.sendEvent(o.U1, o.l_, e)
        }
    },
    3688: function(e, t, n) {
        n.d(t, {
            WY: function() {
                return g
            },
            k3: function() {
                return w
            },
            J9: function() {
                return h
            },
            jU: function() {
                return a
            },
            tq: function() {
                return i
            },
            iB: function() {
                return l
            },
            jj: function() {
                return m
            },
            dM: function() {
                return r
            }
        });
        var a = "undefined" != typeof window && void 0 !== window.document
          , i = function() {
            var e, t = !1;
            return "undefined" != typeof window && (e = navigator.userAgent || navigator.vendor,
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
            t)
        }
          , r = function(e) {
            if (document && window) {
                var t = document.getElementById(e);
                if (t) {
                    var n = t.getBoundingClientRect().top;
                    if (0 !== n) {
                        var a = document
                          , i = a.body
                          , r = a.documentElement.scrollTop || i.scrollTop
                          , o = Math.ceil(n + r);
                        try {
                            window.scrollTo({
                                top: o,
                                behavior: "smooth"
                            })
                        } catch (l) {
                            window.scrollTo(0, o)
                        }
                    }
                }
            }
        }
          , o = n(38463)
          , l = function(e) {
            var t = e.error
              , n = e.timeout
              , a = void 0 === n ? 6e3 : n;
            o.F.show("", {
                title: t,
                variant: "error",
                timeout: a,
                size: "l"
            })
        }
          , c = n(15861)
          , s = n(64687)
          , u = n.n(s)
          , m = function() {
            var e = (0,
            c.Z)(u().mark((function e(t) {
                var n, a;
                return u().wrap((function(e) {
                    for (; 1; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch(t);
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            n.blob();
                        case 5:
                            return a = e.sent,
                            e.abrupt("return", URL.createObjectURL(a));
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , d = n(4942)
          , p = "Скопировано в буфер"
          , f = "Изображение скопировано в буфер"
          , v = function() {
            var e = (0,
            c.Z)(u().mark((function e(t) {
                var n, a = arguments;
                return u().wrap((function(e) {
                    for (; 1; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = a.length > 1 && void 0 !== a[1] ? a[1] : p,
                            !navigator.clipboard) {
                                e.next = 12;
                                break
                            }
                            return e.prev = 2,
                            e.next = 5,
                            navigator.clipboard.writeText(t);
                        case 5:
                            return o.F.show(n, {
                                place: "bottom",
                                others: "close",
                                notificationId: "share_to_clipboard"
                            }),
                            e.abrupt("return", !0);
                        case 9:
                            return e.prev = 9,
                            e.t0 = e["catch"](2),
                            e.abrupt("return", !1);
                        case 12:
                            return e.abrupt("return", !1);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 9]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , g = function() {
            var e = (0,
            c.Z)(u().mark((function e(t) {
                var n, a, i, r = arguments;
                return u().wrap((function(e) {
                    for (; 1; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = r.length > 1 && void 0 !== r[1] ? r[1] : f,
                            !navigator.clipboard) {
                                e.next = 18;
                                break
                            }
                            return e.prev = 2,
                            e.next = 5,
                            fetch(t);
                        case 5:
                            return a = e.sent,
                            e.next = 8,
                            a.blob();
                        case 8:
                            return i = e.sent,
                            e.next = 11,
                            navigator.clipboard.write([new ClipboardItem((0,
                            d.Z)({}, i.type, i))]);
                        case 11:
                            return o.F.show(n, {
                                place: "bottom",
                                others: "close",
                                notificationId: "share_to_clipboard"
                            }),
                            e.abrupt("return", !0);
                        case 15:
                            return e.prev = 15,
                            e.t0 = e["catch"](2),
                            e.abrupt("return", !1);
                        case 18:
                            return e.abrupt("return", !1);
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 15]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , b = n(89777)
          , E = n(46095)
          , h = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.pr;
            switch (e) {
            case b.LI.VK:
                t = "url=".concat(b.AR, "&title=").concat(b.bi, "&image=").concat(n);
                break;
            case b.LI.TELEGRAM:
                t = "url=".concat(b.AR, "&text=").concat(b.bi, "\n").concat(n);
                break;
            case b.LI.COPY:
                return
            }
            return "".concat(b.ds[e], "?").concat(t, "&from=").concat(b.R9[e])
        }
          , w = function(e) {
            if (e === b.LI.COPY)
                return function() {
                    setTimeout((function() {
                        v(b.AR, b.m6).then((function() {
                            return !0
                        }
                        ))
                    }
                    ), E.fk)
                }
        }
    },
    11387: function(e, t, n) {
        n.d(t, {
            ND: function() {
                return u
            },
            MD: function() {
                return d
            },
            dW: function() {
                return c
            },
            kq: function() {
                return o
            }
        });
        var a = n(28416)
          , i = n(98152)
          , r = n(71002)
          , o = function() {
            var e = "object" === ("undefined" == typeof window ? "undefined" : (0,
            r.Z)(window))
              , t = (0,
            a.useCallback)((function() {
                if (e)
                    return window.innerWidth
            }
            ), [e])
              , n = (0,
            a.useState)(t())
              , o = (0,
            i.Z)(n, 2)
              , l = o[0]
              , c = o[1]
              , s = (0,
            a.useCallback)((function() {
                c(t())
            }
            ), [c, t]);
            return (0,
            a.useEffect)((function() {
                s()
            }
            ), [s, window.innerWidth]),
            (0,
            a.useEffect)((function() {
                if (e)
                    return window.addEventListener("resize", s),
                    function() {
                        return window.removeEventListener("resize", s)
                    }
            }
            ), [e, s]),
            l
        }
          , l = "mode"
          , c = function() {
            var e, t = (null === (e = window) || void 0 === e ? void 0 : e.location).search, n = new URLSearchParams(t).get(l);
            return n || null
        }
          , s = "debug"
          , u = function() {
            var e, t = (null === (e = window) || void 0 === e ? void 0 : e.location).search, n = new URLSearchParams(t).get(s);
            return Boolean(n)
        }
          , m = "useMock"
          , d = function() {
            var e, t = (null === (e = window) || void 0 === e ? void 0 : e.location).search, n = new URLSearchParams(t).get(m);
            return Boolean(n)
        }
    },
    30894: function(e, t, n) {
        n.d(t, {
            D: function() {
                return r
            }
        });
        var a = n(98152)
          , i = n(28416);
        function r() {
            var e = (0,
            i.useState)(!1)
              , t = (0,
            a.Z)(e, 2)
              , n = t[0]
              , r = t[1];
            return (0,
            i.useEffect)((function() {
                r("undefined" != typeof window && "navigator"in window && navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
            }
            ), []),
            n
        }
    },
    80681: function(e, t, n) {
        n.d(t, {
            S: function() {
                return T
            },
            n: function() {
                return y
            }
        });
        var a = n(28416)
          , i = n.n(a)
          , r = n(39704)
          , o = n(48916)
          , l = n(24860)
          , c = function(e) {
            return e["DEBUG_PAGE"] = "debug",
            e["DEFAULT"] = "default",
            e
        }({})
          , s = n(46095)
          , u = function(e) {
            var t, n = function(e) {
                var t = {};
                return Object.keys(s.Xv).forEach((function(n) {
                    var a, i = s.Xv[n];
                    t[n] = null === (a = e[i]) || void 0 === a ? void 0 : a.order
                }
                )),
                t
            }(e);
            return [{
                block: s.RG.LOADER_VIEW,
                order: n.AVITO_HELP
            }, {
                block: s.RG.HEADER_VIEW,
                order: n.SECTION_NAME
            }, {
                block: s.RG.PERSONAL_IMPACT_VIEW,
                order: n.ENVIRONMENT_HELP
            }, {
                block: s.RG.HOW_TO_GET_VIEW,
                order: n.FAQ
            }, {
                block: s.RG.HOW_TO_CALCULATE_VIEW,
                order: n.FUNDS
            }, {
                block: s.RG.ITEM_COMPILATIONS_VIEW,
                order: n.HEADER
            }, {
                block: s.RG.FAQ_VIEW,
                order: n.NEWS
            }, {
                block: s.RG.SHARE_VIEW,
                order: n.PEOPLE_HELP
            }].sort((t = "order",
            function(e, n) {
                return e[t] - n[t]
            }
            )).map((function(e) {
                var t = e.block;
                return {
                    key: t,
                    anchor: s.Ci[t],
                    Component: s.b8[t]
                }
            }
            ))
        }
          , m = n(71452)
          , d = (n(13167),
        n(4134),
        n(60079),
        n(35324),
        n(998),
        n(12570),
        n(57913),
        {
            wrapper: "mobile-wrapper-g7ADn",
            fadeIn: "mobile-fadeIn-SvNup",
            logo: "mobile-logo-gxW73",
            content: "mobile-content-Mferq"
        })
          , p = {
            wrapper: "desktop-wrapper-HRnLi",
            fadeIn: "desktop-fadeIn-Ts2Dg",
            logo: "desktop-logo-yP5QY",
            content: "desktop-content-Shyf9"
        }
          , f = function() {
            var e = (0,
            r.v9)(o.g0) ? d : p;
            return i().createElement("div", {
                className: e.wrapper
            }, i().createElement("a", {
                href: "/",
                title: "Авито — сайт объявлений",
                className: e.logo
            }), i().createElement("div", {
                className: e.content
            }, i().createElement("img", {
                src: "".concat(s.a0, "/s/cc/resources/345069b57142.svg")
            }), i().createElement("h1", null, "Ой! Данная страница находится на этапе разработки"), i().createElement("span", null, "Скоро она будет доступна для всех пользователей"), i().createElement("br", null), i().createElement("br", null), i().createElement("span", null, "Не расстраивайтесь, выход есть! Перейдите на", " ", i().createElement("a", {
                href: "".concat(s.a0, "/")
            }, "главную страницу"))))
        }
          , v = n(11387)
          , g = n(72596)
          , b = "from"
          , E = function() {
            var e, t = (null === (e = window) || void 0 === e ? void 0 : e.location).search, n = new URLSearchParams(t).get(b);
            return n && sessionStorage.setItem(b, String(n)),
            sessionStorage.getItem(b)
        }
          , h = {
            MobileDebugLayout: i().lazy((function() {
                return n.e(666).then(n.bind(n, 49666)).then((function(e) {
                    return {
                        default: e.MobileDebugLayout
                    }
                }
                ))
            }
            )),
            MobileDefaultLayout: i().lazy((function() {
                return n.e(379).then(n.bind(n, 5379)).then((function(e) {
                    return {
                        default: e.MobileDefaultLayout
                    }
                }
                ))
            }
            ))
        }
          , w = h.MobileDefaultLayout
          , k = h.MobileDebugLayout
          , y = function() {
            var e, t = (0,
            r.I0)(), n = (0,
            v.dW)(), s = (0,
            v.ND)(), d = (0,
            v.MD)(), p = E(), b = (0,
            r.v9)(o.Gj), h = (0,
            r.v9)(o.xU), y = (0,
            r.v9)(u), O = (0,
            r.v9)(o.EI);
            switch ((0,
            a.useEffect)((function() {
                t((0,
                l.kQ)()),
                d ? t((0,
                l.pd)()) : (t((0,
                l.pd)()),
                t((0,
                l.$0)()),
                (0,
                g.lN)({
                    from: p
                }))
            }
            ), [p, t, d]),
            (0,
            a.useEffect)((function() {
                s && t((0,
                l.f6)())
            }
            ), [s]),
            n) {
            case c.DEBUG_PAGE:
                e = k;
                break;
            case c.DEFAULT:
            default:
                e = w
            }
            return O ? i().createElement(f, null) : h || !b ? i().createElement(m.LoaderView, null) : i().createElement(i().Suspense, {
                fallback: i().createElement(m.LoaderView, null)
            }, i().createElement(e, {
                views: y
            }))
        }
          , O = n(14100)
          , N = function() {
            return i().createElement("div", {
                className: O.Z.wrapper
            }, i().createElement(m.LoaderView, null))
        }
          , z = {
            DesktopDefaultLayout: i().lazy((function() {
                return n.e(40).then(n.bind(n, 11040)).then((function(e) {
                    return {
                        default: e.DesktopDefaultLayout
                    }
                }
                ))
            }
            )),
            DesktopDebugLayout: i().lazy((function() {
                return n.e(396).then(n.bind(n, 86396)).then((function(e) {
                    return {
                        default: e.DesktopDebugLayout
                    }
                }
                ))
            }
            ))
        }
          , I = z.DesktopDefaultLayout
          , _ = z.DesktopDebugLayout
          , T = function() {
            var e, t = (0,
            r.I0)(), n = (0,
            v.dW)(), s = (0,
            v.ND)(), m = E(), d = (0,
            r.v9)(o.Gj), p = (0,
            r.v9)(o.xU), b = (0,
            r.v9)(u), h = (0,
            r.v9)(o.EI);
            switch ((0,
            a.useEffect)((function() {
                t((0,
                l.pd)()),
                (0,
                g.lN)({
                    from: m
                }),
                t((0,
                l.$0)())
            }
            ), [m, t]),
            (0,
            a.useEffect)((function() {
                s && t((0,
                l.f6)())
            }
            ), [s]),
            n) {
            case c.DEBUG_PAGE:
                e = _;
                break;
            case c.DEFAULT:
            default:
                e = I
            }
            return h ? i().createElement(f, null) : p || !d ? i().createElement(N, null) : i().createElement(i().Suspense, {
                fallback: i().createElement(N, null)
            }, i().createElement(e, {
                views: b
            }))
        }
    },
    57894: function(e, t, n) {
        n.d(t, {
            j: function() {
                return r
            }
        });
        var a = n(46095)
          , i = n(30560)
          , r = {
            blocks: {
                header: {
                    order: 1,
                    menu: [{
                        url: "/avito-care",
                        title: "Авито Польза"
                    }, {
                        url: "/avito-care/kindness-badge",
                        title: "Знак добра"
                    }, {
                        url: "/avito-care/lizaalert",
                        title: "ЛизаАлерт"
                    }, {
                        url: "/avito-care/donate-things",
                        title: "Передача вещей"
                    }, {
                        url: "/avito-care/eco-impact",
                        title: "Экосчётчик"
                    }, {
                        url: "/avito-care/recyclemap",
                        title: "Карта раздельного сбора"
                    }],
                    title: "Покупайте на".concat(a.Xz, "Авито,чтобы помочь планете"),
                    description: "Каждая книга, планшет или".concat(a.Xz, "кроссовки, которым подарили вторую жизнь, — это").concat(a.Xz, "маленький вклад в").concat(a.Xz, "здоровье окружающей среды."),
                    button: {
                        size: "l",
                        action: "scrollToBlock",
                        value: a.Ci[a.RG.HOW_TO_CALCULATE_VIEW],
                        title: "Как это работает"
                    },
                    blocks: [{
                        videoUrl: "https://avito.st/s/charity/eco-impact/video/water.mp4",
                        imageUrl: i.H$,
                        value: "472",
                        unit: "млн".concat(a.Xz, "м³ воды"),
                        label: "воды было сохранено"
                    }, {
                        videoUrl: "https://avito.st/s/charity/eco-impact/video/co2.mp4",
                        imageUrl: i.Wu,
                        value: "56",
                        unit: "млн тонн".concat(a.Xz, "CO₂"),
                        label: "не".concat(a.Xz, "попало в").concat(a.Xz, "атмосферу")
                    }, {
                        videoUrl: "https://avito.st/s/charity/eco-impact/video/energy3.mp4",
                        imageUrl: i.Np,
                        value: "259",
                        unit: "млрд кВт·ч энергии",
                        label: "было сэкономлено"
                    }],
                    imageUrl: a.tv + "header-background.png"
                },
                personalImpact: {
                    order: 2,
                    title: "Ваш экологический вклад",
                    button: {
                        title: "Поделиться",
                        value: "share",
                        action: "scrollToBlock"
                    },
                    values: {
                        energy: null,
                        water: null,
                        co2: null,
                        hasBadge: null
                    }
                },
                howToGet: {
                    order: 3,
                    title: "Как получить экологический значок",
                    items: [{
                        title: "Покупайте с".concat(a.Xz, "Авито").concat(a.Xz, "Доставкой"),
                        description: "Так мы".concat(a.Xz, "точно понимаем, что сделка состоялась.")
                    }, {
                        title: "Продавайте на".concat(a.Xz, "Авито"),
                        description: "Засчитаем ваш".concat(a.Xz, "вклад, когда закроете объявление.")
                    }, {
                        title: "Выбирайте товары в".concat(a.Xz, "этих категориях"),
                        description: "Пока вклад считается только для товаров, жизненный цикл которых  мы".concat(a.Xz, "хорошо изучили."),
                        items: [{
                            title: "Автомобиль",
                            url: "".concat(a.a0, "/all/audio_i_video/naushniki"),
                            image: "https://sp-api.ru/imags/icons/1.png",
                            ecoParams: ["4 800 — 9 100 кг CO₂", "350 — 670 кг материалов", "19 200 — 36 400 кВт⋅ч энергии", "30 000 — 58 000 литров воды"]
                        }, {
                            title: "Мотоцикл, мопед",
                            url: "".concat(a.a0, "/all/knigi_i_zhurnaly/knigi"),
                            image: "https://sp-api.ru/imags/icons/2.png",
                            ecoParams: ["330 — 1 300 кг CO₂", "44 — 171 кг материалов", "1 300 — 5 000 кВт⋅ч энергии", "3 500 — 13 500 литров воды"]
                        }, {
                            title: "Телевизор",
                            url: "".concat(a.a0, "/all/detskaya_odezhda_i_obuv"),
                            image: "https://sp-api.ru/imags/icons/3.png",
                            ecoParams: ["330 — 450 кг CO₂", "27 кг материалов", "1 200 — 1 600 кВт⋅ч энергии", "4 500 — 6 200 литров воды"]
                        }, {
                            title: "Ноутбук",
                            url: "".concat(a.a0, "/all/telefony"),
                            image: "https://sp-api.ru/imags/icons/4.png",
                            ecoParams: ["84 — 115 кг CO₂", "1,3 — 1,8 кг материалов", "360 — 500 кВт⋅ч энергии", "2 900 — 3 300 литров воды"]
                        }, {
                            title: "Планшет",
                            url: "".concat(a.a0, "/all/audio_i_video/naushniki"),
                            image: "https://sp-api.ru/imags/icons/5.png",
                            ecoParams: ["17 — 45 кг CO₂", "0,7 — 0,8 кг материалов", "66 — 173 кВт⋅ч энергии", "250 — 640 литров воды"]
                        }, {
                            title: "Костюм, свадебное платье",
                            url: "".concat(a.a0, "/all/knigi_i_zhurnaly/knigi"),
                            image: "https://sp-api.ru/imags/icons/6.png",
                            ecoParams: ["24 — 27 кг CO₂", "1,0 — 1,1 кг материалов", "52 — 146 кВт⋅ч энергии", "650 — 11 300 литров воды"]
                        }, {
                            title: "Телефон",
                            url: "".concat(a.a0, "/all/detskaya_odezhda_i_obuv"),
                            image: "https://sp-api.ru/imags/icons/7.png",
                            ecoParams: ["8,0 — 9,9 кг CO₂", "0,2 кг материалов", "31 — 38 кВт⋅ч энергии", "120 — 150 литров воды"]
                        }, {
                            title: "Свитер, куртка",
                            url: "".concat(a.a0, "/all/telefony"),
                            image: "https://sp-api.ru/imags/icons/8.png",
                            ecoParams: ["5,7 — 7,8 кг CO₂", "0,3 — 0,5 кг материалов", "14 — 21 кВт⋅ч энергии", "1 200 — 2 700 литров воды"]
                        }, {
                            title: "Обувь",
                            url: "".concat(a.a0, "/all/audio_i_video/naushniki"),
                            image: "https://sp-api.ru/imags/icons/9.png",
                            ecoParams: ["4,9 кг CO₂", "0,6 кг материалов", "22 кВт⋅ч энергии", "3 000 литров воды"]
                        }, {
                            title: "Книга",
                            url: "".concat(a.a0, "/all/knigi_i_zhurnaly/knigi"),
                            image: "https://sp-api.ru/imags/icons/10.png",
                            ecoParams: ["2,1 кг CO₂", "0,8 кг материалов", "14 кВт⋅ч энергии", "50 литров воды"]
                        }, {
                            title: "Платье, футболка",
                            url: "".concat(a.a0, "/all/detskaya_odezhda_i_obuv"),
                            image: "https://sp-api.ru/imags/icons/11.png",
                            ecoParams: ["0,8 — 2,1 кг CO₂", "0,1 — 0,2 кг материалов", "3 — 8 кВт⋅ч энергии", "180 — 330 литров воды"]
                        }]
                    }]
                },
                howToCalculate: {
                    order: 4,
                    title: "Как мы".concat(a.Xz, "считаем"),
                    description: "Формула, которая учитывает коэффициент переиспользования и".concat(a.Xz, "затраты на").concat(a.Xz, "производство, логистику и").concat(a.Xz, "утилизацию."),
                    items: [{
                        title: "Методология",
                        description: "В".concat(a.Xz, "её").concat(a.Xz, "основе предположение, что, покупая использованные вещи, человек воздерживается от").concat(a.Xz, "покупки новых. Таким образом вещи получают вторую жизнь, и").concat(a.Xz, "чем дольше она длится, тем больше ресурсов удаётся сэкономить.")
                    }, {
                        title: "Формула",
                        description: "Экологический вклад = Коэффициент переиспользования × (производство + логистика + утилизация)",
                        image: "".concat(a.ek, "/calc.png")
                    }, {
                        title: "Коэффициент переиспользова-".concat(a.BR, "ния"),
                        mobileTitle: "Коэффициент переиспользования",
                        description: "Выражает, насколько перепродажа продлевает срок службы товара.",
                        button: {
                            size: "l",
                            action: "showCalculationExample",
                            title: "Подробнее"
                        }
                    }, {
                        title: "Производство, логистика и".concat(a.Xz, "утилизация"),
                        description: "Здесь мы".concat(a.Xz, "суммируем затраты, с").concat(a.Xz, "которыми связаны разные этапы жизни товара. Они выражаются в").concat(a.Xz, "выбросах CO₂ и").concat(a.Xz, "в").concat(a.Xz, "виде потреблённых ресурсов."),
                        button: {
                            size: "l",
                            action: "showHowToDetails",
                            title: "Подробнее"
                        }
                    }]
                },
                itemCompilations: {
                    order: 5,
                    title: "Присмотритесь к".concat(a.Xz, "товарам из").concat(a.Xz, "этих подборок"),
                    items: [{
                        title: "Смартфоны",
                        image: "https://sp-api.ru/imags/categories/3.png",
                        label: "−9 кг CO₂",
                        url: "/all/telefony"
                    }, {
                        title: "Пальто",
                        image: "https://sp-api.ru/imags/categories/1.png",
                        label: "−8 кг CO₂",
                        url: "/all/odezhda_obuv_aksessuary/zhenskaya_odezhda/verhnyaya_odezhda/palto-ASgBAgICA0SmAeID3gLWC8D3DbLtbg"
                    }, {
                        title: "Книги",
                        image: "https://sp-api.ru/imags/categories/2.png",
                        label: "−2 кг CO₂",
                        url: "/all/knigi_i_zhurnaly/knigi"
                    }, {
                        title: "Детская одежда",
                        image: "https://sp-api.ru/imags/categories/4.png",
                        label: "−1 кг CO₂",
                        url: "/all/detskaya_odezhda_i_obuv"
                    }]
                },
                faq: {
                    order: 6,
                    title: "Вопрос".concat(a.Xz).concat(a.Fc).concat(a.Xz, "ответ"),
                    items: [{
                        answer: {
                            text: "Чем дольше служат вещи, тем реже люди покупают новые. Это сокращает затраты на".concat(a.Xz, "производство, логистику и").concat(a.Xz, "утилизацию.")
                        },
                        question: "Как перепродажа вещей помогает природе?"
                    }, {
                        answer: {
                            text: "Да, в".concat(a.Xz, "этом и").concat(a.Xz, "заключается ответственное потребление. Но").concat(a.Xz, "совсем не").concat(a.Xz, "покупать вещи невозможно, и").concat(a.Xz, "в").concat(a.Xz, "этой связи разумнее продлить жизнь уже").concat(a.Xz, "существующим товарам.")
                        },
                        question: "Разве не".concat(a.Xz, "лучше просто покупать меньше вещей?")
                    }, {
                        answer: {
                            text: "Нет, совсем новые не".concat(a.Xz, "учитываем. А").concat(a.Xz, "вот если вещью хотя").concat(a.Xz, "бы немного попользовались, то").concat(a.Xz, "да.")
                        },
                        question: "Учитывается".concat(a.Xz, "ли покупка новых вещей?")
                    }, {
                        answer: {
                            text: "Оксид углерода (CO₂) ".concat(a.Fc, " это парниковый газ. Его выбросы во").concat(a.Xz, "многом определяют эффект, который люди оказывает на").concat(a.Xz, "экологию планеты.").concat(a.BR).concat(a.BR, "Выбросы CO₂ обычно измеряют в").concat(a.Xz, "килограммах, потому что масса, в").concat(a.Xz, "отличие, например, от").concat(a.Xz, "объёма, не").concat(a.Xz, "зависит от").concat(a.Xz, "давления или температуры.")
                        },
                        question: "Почему экологический вклад измеряется в".concat(a.Xz, "килограммах CO₂?")
                    }, {
                        answer: {
                            text: "Мы".concat(a.Xz, "используем модель, разработанную голландскими исследователями из").concat(a.Xz, "{{bloomAmsterdam}} и").concat(a.Xz, "{{rebelGroup}}. Подробности можно почитать {{article}}."),
                            attributes: {
                                bloomAmsterdam: {
                                    type: "link",
                                    value: {
                                        title: "Bloom Amsterdam",
                                        url: "https://www.bloomamsterdam.com/"
                                    }
                                },
                                rebelGroup: {
                                    type: "link",
                                    value: {
                                        title: "Rebel Group",
                                        url: "https://rebelgroup.com/"
                                    }
                                },
                                article: {
                                    type: "link",
                                    value: {
                                        title: "в этой статье",
                                        url: "https://www.avito.ru/esg/eco-impact"
                                    }
                                }
                            }
                        },
                        question: "Какова методика расчёта?"
                    }, {
                        answer: {
                            text: "За".concat(a.Xz, "3").concat(a.Xz, "года: с").concat(a.Xz, "2020-го по").concat(a.Xz, "2022-й.")
                        },
                        question: "За".concat(a.Xz, "какой период посчитан общий вклад Авито?")
                    }],
                    contacts: {
                        title: "Остались вопросы?",
                        description: "Напишите нам, если".concat(a.Xz, "что-то непонятно или").concat(a.Xz, "у").concat(a.Xz, "вас есть").concat(a.Xz, "предложения."),
                        imageUrl: a.tv + "faq-contacts-image.png",
                        mailLink: {
                            label: "Написать на".concat(a.Xz, "почту"),
                            url: "partners@avito.ru"
                        }
                    }
                },
                share: {
                    order: 11,
                    title: "Расскажите друзьям",
                    items: ["copy", "telegram", "vk"]
                }
            }
        }
    },
    30560: function(e, t, n) {
        n.d(t, {
            Wu: function() {
                return u
            },
            TI: function() {
                return o
            },
            _8: function() {
                return s
            },
            Np: function() {
                return d
            },
            pr: function() {
                return c
            },
            IM: function() {
                return a
            },
            WY: function() {
                return i
            },
            YG: function() {
                return l
            },
            Oo: function() {
                return r
            },
            H$: function() {
                return m
            }
        });
        var a = n.p + "8acbf657b264fd8d296f.svg"
          , i = n.p + "413635c5c9cbc92ac46c.svg"
          , r = (n.p,
        n.p + "8aa59e0ded063fe41c20.svg")
          , o = n.p + "47a0711aa1e1e5e0731a.svg"
          , l = n.p + "933e8d985ac0bdfab291.svg"
          , c = (n.p,
        n.p + "fe06d6f702d2ac7ce0ab.svg")
          , s = (n.p,
        n.p,
        n.p,
        n.p + "a30e1de71b0ebccd2c83.svg")
          , u = (n.p,
        n.p + "a5ff72c5e96c07d5173c.svg")
          , m = n.p + "f97aca3c02e46c1a68c8.svg"
          , d = n.p + "9d3eff206eee35a74a65.svg"
    },
    48916: function(e, t, n) {
        n.d(t, {
            EI: function() {
                return c
            },
            Fu: function() {
                return s
            },
            Gj: function() {
                return i
            },
            Ij: function() {
                return u
            },
            fN: function() {
                return l
            },
            g0: function() {
                return o
            },
            xU: function() {
                return r
            }
        });
        var a = function(e) {
            return e.main
        }
          , i = function(e) {
            return a(e).isLoaded
        }
          , r = function(e) {
            return a(e).isLoading
        }
          , o = function(e) {
            return a(e).isMobileMode
        }
          , l = function(e) {
            return a(e).isAuthorized
        }
          , c = function(e) {
            return a(e).isUnderConstructionMode
        }
          , s = function(e) {
            return a(e).isHowToDetailsOpen
        }
          , u = function(e) {
            return a(e).isCalculationDetailsOpen
        }
    },
    52849: function(e, t, n) {
        n.d(t, {
            x: function() {
                return N
            }
        });
        var a = n(97779)
          , i = n(53894)
          , r = n(85300)
          , o = n(3688)
          , l = n(46095)
          , c = null
          , s = n(4942);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    s.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = {
            isLoaded: !1,
            isAuthorized: !1,
            isLoading: !1,
            isMobileMode: !1,
            isHowToDetailsOpen: !1,
            isUnderConstructionMode: !1,
            isCalculationDetailsOpen: !1
        };
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        var f = null
          , v = null
          , g = null
          , b = n(57894);
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    (0,
                    s.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var w = null
          , k = null
          , y = null
          , O = (0,
        a.UY)({
            faq: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? t.payload.blocks[l.Xv.FAQ_VIEW] : e
            },
            main: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case l.uG:
                    return m(m({}, e), {}, {
                        isLoading: !0
                    });
                case l.tX:
                    var n = t.response.result.isAuthorized
                      , a = void 0 !== n && n;
                    return m(m({}, e), {}, {
                        isAuthorized: a,
                        isLoaded: !0,
                        isLoading: !1
                    });
                case l.Wn:
                    return m(m({}, e), {}, {
                        isLoaded: !1,
                        isLoading: !1
                    });
                case l.u3:
                    return m(m({}, e), {}, {
                        isMobileMode: !0
                    });
                case l.Fq:
                    return m(m({}, e), {}, {
                        isUnderConstructionMode: !1
                    });
                case l.r1:
                    return m(m({}, e), {}, {
                        isCalculationDetailsOpen: !0
                    });
                case l.SB:
                    return m(m({}, e), {}, {
                        isHowToDetailsOpen: !0
                    });
                case l.Uh:
                    return m(m({}, e), {}, {
                        isHowToDetailsOpen: !1,
                        isCalculationDetailsOpen: !1
                    });
                default:
                    return e
                }
            },
            share: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            (0,
                            s.Z)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, t.payload.blocks[l.Xv.SHARE_VIEW]) : e
            },
            header: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? t.payload.blocks[l.Xv.HEADER_VIEW] : e
            },
            howToGet: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? t.payload.blocks[l.Xv.HOW_TO_GET_VIEW] : e
            },
            howToCalculate: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? t.payload.blocks[l.Xv.HOW_TO_CALCULATE_VIEW] : e
            },
            personalImpact: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === l.tX) {
                    var n = t.response.result.blocks.personalImpact
                      , a = b.j.blocks.personalImpact
                      , i = a.order
                      , r = a.title;
                    return h(h({}, n), {}, {
                        order: i,
                        title: r
                    })
                }
                return e
            },
            itemCompilations: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return t.type === l.yJ ? t.payload.blocks[l.Xv.ITEM_COMPILATIONS_VIEW] : e
            }
        })
          , N = function() {
            var e = o.jU && "production" != "production" && 0 ? 0 : a.qC;
            return (0,
            a.MT)(O, e((0,
            a.md)(r.Z, i.Z)))
        }
    },
    14100: function(e, t) {
        t.Z = {
            page: "styles-page-Hca29",
            wrapper: "styles-wrapper-VjqCM",
            view: "styles-view-aemvN",
            anchor: "styles-anchor-N8scf",
            success: "styles-success-pQ3uL"
        }
    }
}]);
