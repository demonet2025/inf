"use strict";
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
        return typeof e;
      }
      : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      })(e);
}
var nowActivePageParameter,
  APIURL = location.protocol + "//" + location.hostname + "/api",
  website = location.protocol + "//" + location.hostname,
  appsite = "https://www.multcloud.com",
  backstageAddress = "https://app.multcloud.com/mc_project/home_page",
  aesEncryptKey = "KXrDPHUkQSMKhklkKHHP+Q==",
  aesDecryptKey = "LIa4CTfB3SwKnfJhu2iJkQ==";
function _defineProperty(e, i, t) {
  return (
    i in e
      ? Object.defineProperty(e, i, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (e[i] = t),
    e
  );
}
function AjaxPost(e, i) {
  this.type = "post";
  var t = APIURL;
  (this.url = t + e),
    (this.dataType = "json"),
    (this.xhrFields = { withCredentials: !0 }),
    (this.crossDomain = !0),
    (this.success = function (e) {
      i(converToOldModel(__api.decrypt(e)));
    }),
    (this.error = function (e) {
      i(converToOldModel(__api.decrypt(e)));
    }),
    (this.complete = function (e) {
      i(converToOldModel(__api.decrypt(e)));
    });
}
function converToOldModel(e) {
  var i = e;
  return (
    200 <= e.code &&
    e.code < 300 &&
    ((i = e.data)
      ? (i.message || (i.message = e.message),
        i.status || (i.status = e.code))
      : (i = { message: e.message, status: e.code }),
      "success" == i.message && (i.message = "Success")),
    400 <= e.code &&
    e.code < 500 &&
    (i = { status: e.code, msg: e.message, reason: e.reason }),
    500 <= e.code && (i = { status: e.code, msg: e.message }),
    i
  );
}
function addSignupBtn() {
  if ("mobile" == $.identifyDevices()) {
    if (-1 != window.location.pathname.indexOf("sign"))
      return void $(".btn-sign").css("cssText", "display:none !important;");
    var e = {
      en: '<a class="btn-sign" href="/sign" onclick="ga("send","event","/sign.html","click","/top-navi")">Sign up</a>',
      de: '<a class="btn-sign" href="/de/sign" onclick="ga("send","event","/de/sign.html","click","/de/top-navi")">Registrieren</a>',
      jp: '<a class="btn-sign" href="/jp/sign" onclick="ga("send","event","/jp/sign.html","click","/jp/top-navi")">登録</a>',
      fr: '<a class="btn-sign" href="/fr/sign" onclick="ga("send","event","/fr/sign.html","click","/fr/top-navi">Inscription</a>',
      es: '<a class="btn-sign" href="/es/sign" onclick="ga("send","event","/es/sign.html","click","/es/top-navi")">Registrarse</a>',
      it: '<a class="btn-sign" href="/it/sign" onclick="ga("send","event","/it/sign.html","click","/it/top-navi")">Registrati</a>',
      tw: '<a class="btn-sign" href="/tw/sign" onclick="ga("send","event","/tw/sign.html","click","/tw/top-navi")">註冊</a>',
      pt: '<a class="btn-sign" href="/pt/sign" onclick="ga("send","event","/pt/sign.html","click","/pt/top-navi")">Inscrever-se</a>',
      cn: '<a class="btn-sign" href="/cn/sign" onclick="ga("send","event","/cn/sign.html","click","/cn/top-navi")">注册</a>',
      nl: '<a class="btn-sign" href="/nl/sign" onclick="ga("send","event","/nl/sign.html","click","/cn/top-navi")">Registreren</a>',
    }[$.theLang()];
    $("header .nav-logo").after(e);
  }
}
$(function () {
  navigator.userAgent.match(/mobile/i) &&
    $('header [data-list="lang"]')
      .find("a")
      .click(function (e) {
        var i = e.target.href;
        window.location.href = i;
      });
}),
  layui.use(["layer", "util"], function () {
    var s = layui.layer,
      e = layui.util,
      i = document.documentElement.clientHeight / 2;
    function t(n) {
      var e,
        i =
          "en" == $.theLang()
            ? "/nigol.html"
            : "/" + $.theLang() + "/nigol.html";
      i = $.theDomainName("ppc", 1) + i;
      var t = "100px",
        a = "540px",
        o = navigator.userAgent.match(/mobile/i);
      o && ((t = "50px !important"), (a = "90vw !important")),
        !$('header .btn-login,.log,[data-login="login"]').hasClass("mymc") &&
        s.open(
          (_defineProperty(
            (e = {
              title: !1,
              closeBtn: 0,
              type: 2,
              anim: 0,
              area: [a, "570px"],
              shadeClose: !0,
              id: "layerDemo1",
              scrollbar: !1,
              resize: !1,
              offset: t,
            }),
            "anim",
            5
          ),
            _defineProperty(e, "content", i),
            _defineProperty(e, "offset", "100px"),
            _defineProperty(e, "success", function (e, i) {
              var t = s.getChildFrame("body", i);
              o &&
                (t.find(".btn-brd-gry").find('[name="thirdName"]').hide(),
                  t.find("#signInFrom").find('[name="webBtn"]').hide(),
                  t.find("#signInFrom").find('[name="mobBtn"]').show(),
                  n &&
                  "signUp" == n &&
                  (t.find('[data-elem="signIn"]').hide(),
                    t.find('[data-elem="signUp"]').show())),
                $('[data-elem="signIn"]').keyup(function (e) {
                  13 == e.keyCode && $("#signInBtn").trigger("click");
                }),
                t.find('[data-elem="nigol-close"]').click(function (e) {
                  s.close(i);
                }),
                t.show(),
                s.iframeAuto(i);
              var a = $(t).find('[data-elem="changeModelWrap"]').height() + 2;
              $(e).height(a, a), $(e).find("iframe").height(a);
            }),
            e)
        );
    }
    e.fixbar({
      bgcolor: "#282CB1",
      showHeight: i,
      css: { borderRadius: "50%", right: 10, bottom: 90 },
    }),
      $('.btn-login,.log,[data-login="login"]').on("click", t),
      $('[data-login="signUp"]').on("click", function () {
        t("signUp");
      });
  }),
  (window.noticeErrorShow = function (s, r) {
    var e,
      i =
        "en" == $.theLang()
          ? "./noticeError.html"
          : "/" + $.theLang() + "/noticeError.html";
    layer.open(
      (_defineProperty(
        (e = {
          title: !1,
          closeBtn: 0,
          type: 2,
          anim: 0,
          area: ["540px", "480px"],
          shadeClose: !0,
          id: "noticeErrorShow1",
          scrollbar: !1,
          resize: !1,
        }),
        "anim",
        5
      ),
        _defineProperty(e, "content", i),
        _defineProperty(e, "offset", "100px"),
        _defineProperty(e, "success", function (e, i) {
          layer.iframeAuto(i);
          var t = layer.getChildFrame("body", i),
            a = $(t).find('[data-elem="notice-btn1"]'),
            n = $(t).find('[data-elem="notice-btn2"]');
          r
            ? (a.css({ "background-color": r, display: "inline-block" }),
              n.css({
                color: r,
                border: "1px solid " + r,
                display: "inline-block",
              }),
              n.hover(
                function () {
                  n.css({ "background-color": r, color: "#fff" });
                },
                function () {
                  n.css({ "background-color": "#fff", color: r });
                }
              ))
            : (a.css("display", "inline-block"),
              n.css("display", "inline-block")),
            $(t).find(".active-notice").find("p").text(s),
            t.find('[data-elem="nigol-close"]').click(function (e) {
              layer.close(i);
            }),
            t.show();
          var o = $(t).find('[data-elem="changeModelWrap"]').height();
          $(e).height(o, o), $(e).find("iframe").height(o);
        }),
        e)
    );
  }),
  (window.messageShow = function (n, o, e, s) {
    var i,
      t = e + 120;
    top.layer.open(
      (_defineProperty(
        (i = {
          title: !1,
          type: 2,
          closeBtn: 0,
          anim: 1,
          shadeClose: !0,
          area: [t + "px", "36px"],
          id: "messageShow1",
          move: !1,
          resize: !1,
        }),
        "anim",
        1
      ),
        _defineProperty(i, "content", "/message.html"),
        _defineProperty(i, "offset", "5px"),
        _defineProperty(i, "success", function (e, i) {
          var t = top.layer.getChildFrame("body", i);
          "notice" == o &&
            (t.find(".infonotebox-closer").addClass("infonotebox-closer-green"),
              t.addClass("yellow")),
            "noticeNew" == o &&
            (t.find(".infonotebox-closer").addClass("infonotebox-notice"),
              t.addClass("yellow")),
            "prompt" == o &&
            t.find(".infonotebox-closer").addClass("infonotebox-prompt"),
            t.find('[data-elem="message"]').text(n);
          var a = t.find(".info-close");
          a.text($.noticeTxt("message").close),
            a.click(function () {
              top.layer.close(i);
            }),
            s &&
            setTimeout(function () {
              top.layer.close(i);
            }, s);
        }),
        i)
    );
  }),
  (window.tempUserVerifyShow = function () {
    var e,
      i = ($(top).height() - 560) / 2;
    top.layer.open(
      (_defineProperty(
        (e = {
          title: !1,
          type: 2,
          closeBtn: 1,
          anim: 1,
          shadeClose: !1,
          area: ["550px", "200px"],
          id: "tempUserVerifyShow",
          move: !1,
          resize: !1,
        }),
        "anim",
        1
      ),
        _defineProperty(e, "content", "/tempuser-verify.html"),
        _defineProperty(e, "offset", i),
        _defineProperty(e, "success", function (e, i) {
          $.refreshAndClearCode();
        }),
        e)
    );
  });
var __api = {
  signJson: function (e, i, t) {
    return (e[i] = t), (e.s = this.signMd5(e)), delete e[i], e;
  },
  decrypt: function (i) {
    try {
      i = i.replace(/(^\"*)|(\"*$)/g, "");
      var e = CryptoJS.enc.Base64.parse(aesDecryptKey),
        t = CryptoJS.format.Hex.parse(i),
        a = CryptoJS.AES.decrypt(t, e, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }),
        n = CryptoJS.enc.Utf8.stringify(a);
      return JSON.parse(n);
    } catch (e) {
      return i;
    }
  },
  signMd5: function (e) {
    var i = [];
    for (var t in e) i.push(t);
    for (var a = "", n = (i = i.sort()).length, o = 0; o < n; o++)
      a += i[o] + this.inspectObj(e[i[n - o - 1]]);
    var s = CryptoJS.MD5(a).toString();
    return (s = s.substring(1, s.length - 2));
  },
  inspectObj: function (e) {
    if (e instanceof Object && "object" == _typeof(e)) {
      var i = JSON.stringify(e);
      if (i) {
        var t = i.split("");
        t.sort();
        var a = t.join("");
        return CryptoJS.MD5(a).toString();
      }
      return "";
    }
    return e;
  },
  doPost: function (e, i, t) {
    var a = new AjaxPost(e, t);
    (a.data = JSON.stringify(i)),
      (a.contentType = "application/json"),
      $.ajax(a);
  },
  signSaltJson: function (e) {
    return this.signJson(e, "salt", e.salt);
  },
  signAesKeyJson: function (e) {
    return this.signJson(e, "aesKey", aesEncryptKey);
  },
  doUserRequest: function (e, i, t, a) {
    var n = a ? this.signSaltJson(i) : this.signAesKeyJson(i);
    this.doPost("/user/" + e, n, t);
  },
  doEmailRequest: function (e, i, t, a) {
    var n = a ? this.signSaltJson(i) : this.signAesKeyJson(i);
    this.doPost("/email/" + e, n, t);
  },
  doDualVerifyRequest: function (e, i, t) {
    this.doPost("/dual_verify/" + e, this.signAesKeyJson(i), t);
  },
  doSubscriptionRequest: function (e, i, t) {
    this.doPost("/subscription/" + e, this.signSaltJson(i), t);
  },
  sendActivateCode: function (e) {
    var i = {
      ud: e,
      workUrl:
        website +
        ("en" == $.theLang() ? "" : "/" + $.theLang()) +
        "/account.html?code=",
    };
    this.doEmailRequest("send_activate_code", i, function (e) { });
  },
  sendActivateCodeByEmail: function (t) {
    var e = {
      ud: t.id,
      workUrl:
        website +
        ("en" == $.theLang() ? "" : "/" + $.theLang()) +
        "/account.html?code=",
    };
    this.doEmailRequest("send_activate_code", e, function (e) {
      if (e && "userNotFound" == e.reason)
        $.showTip(
          $('[data-elem="from-item"]').find('[name="email"]').parent(),
          $.noticeTxt("sendActivationEmail").emailExist,
          "error"
        );
      else if (e && 200 == e.status && "Success" == e.message) {
        var i = { email: t.email, id: t.id };
        localStorage.setItem("activeUser", JSON.stringify(i)),
          (window.location.href =
            ("en" == $.theLang() ? "" : "/" + $.theLang()) + "/sign#active");
      }
    });
  },
};
function init() {
  if (
    (addSignupBtn(),
      $.fbLike(),
      $.refreshAndClearCode(),
      $.signedInStatus(),
      $.inputFouces(),
      $.signReference(),
      $.changeSignModule(),
      $.forgetPassword(),
      $.resetPassword(),
      $.quickAccessHandle(),
      $.signPageModulChange(),
      $.checkShowPassword(),
      $(".verificationCode")
        .unbind("click")
        .bind("click", function () {
          var e = $.generateVerifyKey(),
            i = { vkey: e },
            t = __api.signMd5(i);
          $(this).src &&
            ($(this).src = $(this).src.split("?")[0] + "?vkey=" + e + "&s=" + t),
            $('[name="verificationCode"]').val(""),
            $.showTip(
              $(this)
                .parents('[data-elem="from-item"]')
                .find('[name="verificationCode"]'),
              "",
              "true"
            );
        }),
      $(".btn-login,.log").on("click", function () {
        $(this).hasClass("mymc") && $.autoLogin();
      }),
      $('[data-elem="checkIsOrNo"]').on("click", function () {
        $(this).hasClass("icon-check-none")
          ? $(this).removeClass("icon-check-none")
          : $(this).addClass("icon-check-none");
      }),
      -1 != window.location.pathname.indexOf("inviteFriendsSign"))
  )
    0 == (!!$.searchParse().inviteId && $.searchParse().inviteId) &&
      $.enterMyMultCloud();
  else if (
    -1 !=
    window.location.pathname.indexOf(
      nowActivePageParameter.salePage + "-subscribe"
    )
  ) {
    var e = $.searchParse().price,
      i = $.searchParse().from;
    /^Monthly|Yearly-Unlimited|Lifetime-Unlimited$/.test(e) &&
      ($(".loading-bx").hide(), $("." + e).show()),
      "tutorials" == i
        ? $.openSubscribe(e, nowActivePageParameter.salePricePage2)
        : $.openSubscribe(e, nowActivePageParameter.salePricePage);
  } else if (-1 != window.location.pathname.indexOf("subscribe") || -1 != window.location.pathname.indexOf("/plan-product")) {
    e = $.searchParse().price;
    /^Monthly|Quarterly|Yearly|Yearly-Unlimited|Lifetime-Unlimited$/.test(e) &&
      ($(".loading-bx").hide(), $("." + e).show());
  } else if (-1 != window.location.pathname.indexOf("upgrade-2023")) {
    var t = $.searchParse().upgrade;
    "vn" == $.searchParse().lan &&
      "lifetime" == t &&
      ($(".loading-bx").hide(),
        $(".Lifetime-Unlimited").show(),
        $.openSubscribe(t, "upgrade-2023"));
  } else if (-1 != window.location.pathname.indexOf("upgrade")) {
    t = $.searchParse().upgrade;
    -1 != window.location.pathname.indexOf("jp/upgrade")
      ? (/^Annual1-dgg|Annual2-dgg|Yearly-Unlimited-dgg|Lifetime-Unlimited-dgg$/.test(
        t
      ) && ($(".loading-bx").hide(), $("." + t).show()),
        $.openSubscribe(t, "upgrade-dgg"))
      : (/^Monthly|Annual|Yearly-Unlimited|Lifetime-Unlimited$/.test(t) &&
        ($(".loading-bx").hide(), $("." + t).show()),
        $.openSubscribe(t, "upgrade"));
  }
  (-1 != window.location.pathname.indexOf("price") || -1 != window.location.pathname.indexOf("home.html")) &&
    ($('[data-item="price-m-1"]').on("click", function () {
      $.openSubscribe("Monthly1", "price-monthly1-original", "price");
    }),
      $('[data-item="price-m-2"]').on("click", function () {
        $.openSubscribe("Monthly2", "price-monthly2-original", "price");
      }),
      $('[data-item="price-y-1"]').on("click", function () {
        $.openSubscribe("Yearly1", "price-annual1-original", "price");
      }),
      $('[data-item="price-y-2"]').on("click", function () {
        $.openSubscribe("Yearly2", "price-annual2-original", "price");
      }),
      $('[data-item="price-y-un"]').on("click", function () {
        $.openSubscribe("Yearly-Unlimited", "price-annualun-original", "price");
      }),
      $('[data-item="price-lift-un"]').on("click", function () {
        $.openSubscribe(
          "Lifetime-Unlimited",
          "price-lifetimeun-original",
          "price"
        );
      }));
}
!(function (b) {
  b.extend({
    getDomainName: function (e) {
      var t = "";
      if (0 < e) {
        var i = location.pathname.split("/");
        i && i.length > e && (t = i[e])
      }
      return t
    },
    theDomainName: function (e, t) {
      var i;
      return (i = b.getDomainName(t)) == e ? "/" + i : ""
    },
    theLang: function () {
      var e = self.location.pathname.substring(1).split("/")[0];
      return -1 < ["de", "fr", "it", "es", "pt", "tw", "cn", "jp", "nl"].indexOf(e)
        ? e
        : "en";
    },
    flang: function () {
      var e = "en-US";
      switch (b.theLang()) {
        case "de":
          e = "de-DE";
          break;
        case "fr":
          e = "fr-FR";
          break;
        case "jp":
          e = "ja-JP";
          break;
        case "tw":
          e = "zh-TW";
          break;
        case "de":
          e = "de-DE";
          break;
        case "pt":
          e = "pt-PT";
          break;
        case "cn":
          e = "zh-CN";
          break;
        case "es":
          e = "es-ES";
          break;
        case "it":
          e = "it-IT";
          break;
        case "nl":
          e = "nl-NL";
          break;
        default:
          e = "en-US";
      }
      return e;
    },
    newLang: function () {
      var e = "english";
      switch (b.theLang()) {
        case "en":
          e = "english";
          break;
        case "de":
          e = "deutsch";
          break;
        case "fr":
          e = "france";
          break;
        case "pt":
          e = "portuguese";
          break;
        case "es":
          e = "spanish";
          break;
        case "it":
          e = "italian";
          break;
        case "jp":
          e = "japanese";
          break;
        case "tw":
          e = "traditionalChinese";
          break;
        case "nl":
          e = "nederlands";
          break;
        case "cn":
          e = "chinese";
      }
      return e;
    },
    fbLike: function () {
      var e,
        i,
        t,
        a,
        n = b.theLang();
      (e = document),
        (i = "facebook-jssdk"),
        (a = e.getElementsByTagName("script")[0]),
        e.getElementById(i) ||
        (((t = e.createElement("script")).id = i),
          (t.src =
            "https://connect.facebook.net/" +
            n +
            "/sdk.js#xfbml=1&version=v9.0"),
          a.parentNode.insertBefore(t, a));
    },
    changeSignModule: function () {
      b("[data-to]").click(function () {
        b(this)
          .parents('[data-elem="changeModelWrap"]')
          .find("[data-to]")
          .each(function () {
            b("[data-elem=" + b(this).data("to") + "]").hide();
          }),
          b("[data-elem=" + b(this).data("to") + "]").show();
        var e = b("[data-elem=" + b(this).data("to") + "]").find(
          ".verificationCode"
        );
        e &&
          b.each(e, function (e, i) {
            var t = b.generateVerifyKey(),
              a = { vkey: t },
              n = __api.signMd5(a);
            i.src = APIURL + "/verify_code/generate?vkey=" + t + "&s=" + n;
          }),
          b("#forgetEmail")[0].value &&
          -1 ==
          window.location.pathname.indexOf(nowActivePageParameter.aType) &&
          (b("#forgetEmail")[0].value = "");
      });
    },
    getPath: function () {
      var e = "/";
      return (
        -1 != window.location.pathname.indexOf("/MultCloud") &&
        (e = "/MultCloud/"),
        e
      );
    },
    identifyDevices: function () {
      var e = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ),
        i = navigator.userAgent.match(/iPad/i);
      return e ? "mobile" : i ? "table" : "pc";
    },
    searchParse: function () {
      var e = {};
      if ((i = window.location.search) && 1 < i.length)
        for (
          var i, t = (i = i.substring(1)).split("&"), a = 0;
          a < t.length;
          a++
        )
          if (t[a]) {
            var n = t[a].split("=");
            e[n[0]] = void 0 === n[1] ? "" : n[1];
          }
      return e;
    },
    createTouristLogin: function () {
      var e = {};
      -1 != window.location.pathname.indexOf("tempuser-verify") &&
        ((e.vkey = b(".verificationCode")
          .attr("src")
          .split("&s=")[0]
          .split("?vkey=")[1]),
          (e.vcode = b.codeTest(b('[name="verificationCode"]'))),
          b('[data-a="quickAccess"]').text("Verifying")),
        __api.doUserRequest("create_tourist", e, function (e) {
          if (
            (-1 != window.location.pathname.indexOf("tempuser-verify") &&
              b('[data-a="quickAccess"]').text("Verify"),
              "Success" == e.message)
          ) {
            var i = "Free/" + b.flang(),
              t =
                "Register/" +
                e.user.id +
                "/" +
                b.identifyDevices() +
                "/web/web/AOMEI",
              a = "registertour";
            b.sendGoogleAnaytics(t, i, a),
              (i = "Free/" + b.flang()),
              (t =
                "Login/" +
                e.user.id +
                "/" +
                b.identifyDevices() +
                "/web/AOMEI"),
              (a = "newtour"),
              b.sendGoogleAnaytics(t, i, a);
            var n = e.user; n.email = CryptoJS.AES.encrypt(n.email, aesEncryptKey).toString(),
              localStorage.setItem("user", JSON.stringify(n)),
              sessionStorage.setItem("user", JSON.stringify(n)),
              b.enterMyMultCloud(n.password);
          } else if ("403" == e.status)
            if ("verifyCodeInvalid" == e.reason)
              -1 != window.location.pathname.indexOf("tempuser-verify")
                ? (b.showTip(
                  b('[name="verificationCode"]'),
                  signupTxt.codeError,
                  "error"
                ),
                  b.refreshAndClearCode())
                : tempUserVerifyShow();
            else {
              var o = b.noticeTxt("message").visitorAccountsMoreError;
              b.openMessageShow(o, "fail");
            }
        });
    },
    signedInStatus: function () {
      var i = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";
      if (i) {
        var e = { ud: i.id, salt: i.salt };
        __api.doUserRequest(
          "get",
          e,
          function (e) {
            "Success" == e.message
              ? (i.vip &&
                "Lifetime" == i.payType &&
                b("#" + nowActivePageParameter.salePageName)
                  .parent()
                  .hide(),
                b("header .btn-login,.log")
                  .addClass("mymc")
                  .text(b.noticeTxt("account")),
                b("header .quick-access,.started").hide(),
                b("body").addClass("mc-logged"),
                -1 != window.location.pathname.indexOf("inviteFriendsSign") &&
                b.openNoticeError(b.noticeTxt("message").logged))
              : "saltInvalid" == e.reason && localStorage.removeItem("user");
          },
          1
        );
      }
    },
    quickAccessHandle: function () {
      b('[data-a="quickAccess"]').click(function () {
        b.quickAccess();
      });
    },
    quickAccess: function () {
      (null != b.cookie("quickExpId") && null != b.cookie("quickExpPwd")) ||
        this.createTouristLogin();
    },
    thirdLogin: function (e) {
      var i = !!b.searchParse().inviteId && b.searchParse().inviteId,
        t = "";
      i && (t = '<input type="hidden" name="inviteId" value="' + i + '" />'),
        "google" == e && (e = "google_drive");
      var a =
        '<html><meta name="Content-Type" content="application/json"><form method="POST" enctype="application/json" action="' +
        (APIURL + "/user/third_login") +
        '"><input type="hidden" name="loginType" value="' +
        e +
        '" /><input type="hidden" name="redirectUrl" value="' +
        (appsite + "/login_callback_turn.html") +
        '" /><input type="hidden" name="language" value="' +
        b.flang() +
        '" /><input type="hidden" name="device" value="' +
        b.identifyDevices() +
        '" />' +
        t +
        "</form></html>",
        n = window.open("", "_parent");
      (n.document.body.innerHTML = a), n.document.forms[0].submit();
    },
    showTip: function (e, i, t) {
      switch (t) {
        case "error":
          e.addClass("error")
            .parents(".mc-row")
            .find(".tips-info")
            .addClass("err")
            .removeClass("suc");
          break;
        case "true":
          e.removeClass("error")
            .parents(".mc-row")
            .find(".tips-info")
            .addClass("suc")
            .removeClass("err");
      }
      e.parents(".mc-row").find(".tips-info").html(i), b.layuiLayerChangeSize();
    },
    inputFouces: function () {
      b("input").focus(function () {
        b(this)
          .removeClass("error")
          .parents(".mc-row")
          .find(".tips-info")
          .html("");
      });
    },
    enterMyMultCloud: function (e) {
      var i = b.newLang();
      i && localStorage.setItem("locale", i);
      var t = JSON.parse(localStorage.getItem("user"));
      if (t) {
        var a = {
          ud: t.id,
          salt: t.salt,
          language: this.flang(),
          xcd: b.cookie("x-cd"),
        },
          n = localStorage.getItem("trustedDevice");
        if (n) {
          var o = b.getTrustedDeviceByEmail(t.email);
          o && (a.tdcode = o);
        }
        var s = b.searchParse().open;
        s && (a.open = s);
        var r = window.btoa(JSON.stringify(a));
        top.location.href = backstageAddress + "?callBack=" + r;
      } else top.location.href = website;
    },
    autoLogin: function () {
      var e = JSON.parse(localStorage.getItem("user"));
      if (e) {
        var i = { ud: e.id, salt: e.salt, language: b.flang() },
          t = localStorage.getItem("trustedDevice");
        if (t) {
          var a = b.getTrustedDeviceByEmail(e.email);
          a && (i.tdcode = a);
        }
        __api.doUserRequest(
          "direct_sign_in",
          i,
          function (e) {
            if ("Success" == e.message && e.user) {
              var t = e.user; t.email = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString(), localStorage.setItem("user", JSON.stringify(t)), sessionStorage.setItem("user", JSON.stringify(t)), b.enterMyMultCloud()
            } else 403 == e.status && "notSupportedRegion" == e.reason ? top.location.href = ("en" == b.theLang() ? "" : "/" + b.theLang()) + "/region-not-supported.html"
              : 400 == e.status &&
              e.exception &&
              b.openNoticeError(b.noticeTxt("message").autoLoginFail);
          },
          1
        );
      }
    },
    nameTest: function (e) {
      var i = b.trim(e.val());
      if ("" == i) b.showTip(e, signupTxt.userEmpty, "error");
      else {
        if (!(20 < i.length)) return b.showTip(e, "", "true"), i;
        b.showTip(e, signupTxt.userFormat, "error");
      }
    },
    emailTest: function (e, i) {
      var t = b.trim(e.val());
      if (("active" == i && (e = e.parent()), "" == t))
        b.showTip(e, signupTxt.emailEmpty, "error");
      else {
        if (
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            t
          ) &&
          !(128 < t.length)
        )
          return b.showTip(e, "", "true"), t;
        b.showTip(e, signupTxt.emailFormat, "error");
      }
    },
    passwordTest: function (e) {
      var i = b.trim(e.val());
      if ("" == i) b.showTip(e, signupTxt.psdEmpty, "error");
      else {
        if (!(i.length < 8 || 16 < i.length))
          return b.showTip(e, "", "true"), i;
        b.showTip(e, signupTxt.psdFormat, "error");
      }
    },
    resetPasswordTest: function (e, i) {
      var t = b.trim(e.val());
      if ("" == t) b.showTip(e, signupTxt.rePsdEmpty, "error");
      else {
        if (t == i) return b.showTip(e, "", "true"), t;
        b.showTip(e, signupTxt.rePsdFormat, "error");
      }
    },
    codeTest: function (e) {
      var i = b.trim(e.val());
      if ("" == i) b.showTip(e, signupTxt.codeEmpty, "error");
      else {
        if (4 == i.length) return b.showTip(e, "", "true"), i;
        b.showTip(e, signupTxt.codeFormat, "error");
      }
    },
    signUpEvent: function () {
      var a = "",
        n = "",
        o = "",
        s = b('[data-elem="signUp"]');
      s.find('[name="email"]').blur(function () {
        (a = b.emailTest(b(this), "signUp")) &&
          __api.doUserRequest("check_email", { email: a }, function (e) {
            e &&
              "emailExist" == e.reason &&
              (b.showTip(b("#signUpEmail"), signupTxt.emailError, "error"),
                (a = ""));
          });
      }),
        s.find('[name="password"]').blur(function () {
          n = b.passwordTest(b(this));
        }),
        s.find('[name="verificationCode"]').blur(function () {
          o = b.codeTest(b(this));
        }),
        s.keyup(function (e) {
          13 == e.keyCode && b("#signUpBtn").trigger("click");
        }),
        b(document).on("click", "#signUpBtn", function () {
          (a = b.emailTest(s.find('[name="email"]'), "signUp")),
            (n = b.passwordTest(s.find('[name="password"]')));
          var e = "none" == b('[name="vcode"]').css("display");
          o = e ? "" : b.codeTest(s.find('[name="verificationCode"]'));
          var i = a && n && (e || o),
            t = s.find('[data-elem="checkIsOrNo"]').hasClass("icon-check-none")
              ? 0
              : 1;
          i &&
            b.signUpSubmit(b('[data-elem="signUp"]'), {
              email: a,
              password: n,
              code: o,
              isPush: t,
            });
        });
    },
    signUpSubmit: function (e, n) {
      var o = e.find("button"),
        i = "none" != b('[name="vcode"]').css("display");
      if (i)
        var t = e
          .find(".verificationCode")
          .attr("src")
          .split("&s=")[0]
          .split("?vkey=")[1];
      var s = o.text();
      o.text(signupTxt.signingUpBtnText).attr("disabled", !0);
      var r = window.location.pathname,
        a = {
          email: n.email,
          password: n.password,
          username: n.email.substring(0, n.email.indexOf("@")),
          language: b.flang(),
          isPush: n.isPush,
        };
      i && ((a.vcode = n.code), (a.vkey = t));
      var l = !!b.searchParse().inviteId && b.searchParse().inviteId,
        c = !1;
      if (
        (-1 != r.indexOf("inviteFriendsSign") &&
          0 != l &&
          ((a.inviteId = l), (c = !0)),
          -1 != r.indexOf("multcloud-giveaway-2023dgg"))
      )
        a.loginType = "a202301";
      else if (-1 != r.indexOf("multcloud-giveaway-2023cb"))
        a.loginType = "a202302";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-winningpc-2023"))
        a.loginType = "xd-win";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-giveawaytickcoupon-2023"))
        a.loginType = "xd-gtc";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-colormango-2023"))
        a.loginType = "xd-cmg";
      else if (-1 != r.indexOf("multcloud-giveaway-zyp-sharewareonsale-2023"))
        a.loginType = "zyp-swo";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-giveawayoftheday-2023"))
        a.loginType = "xd-god";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-theipfire-2023"))
        a.loginType = "xd-tip";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-promo2day-2023"))
        a.loginType = "xd-pro";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-gearupwindows-2023"))
        a.loginType = "xd-gea";
      else if (-1 != r.indexOf("multcloud-giveaway-qd-wys-chip-2023"))
        a.loginType = "qd-wys-chip";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-dontpayfull-2023"))
        a.loginType = "xd-dpf";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-routerunlock-2023"))
        a.loginType = "xd-rrl";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-wongcw-2023"))
        a.loginType = "xd-wcw";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-adersaytech-2023"))
        a.loginType = "xd-ade";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-dealspotr-2023"))
        a.loginType = "xd-dst";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-scroll-2023"))
        a.loginType = "xd-sll";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-selmateacher-2023"))
        a.loginType = "xd-sel";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-teknobird-2023"))
        a.loginType = "xd-tek";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-karanpc-2023"))
        a.loginType = "xd-kpc";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-getproductkey-2023"))
        a.loginType = "xd-get";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-mooseek-2023"))
        a.loginType = "xd-moo";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-shopdd-2023"))
        a.loginType = "xd-sho";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-pcguidelk-2023"))
        a.loginType = "xd-pcg";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-vnzvn-2023"))
        a.loginType = "xd-vnz";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-ykcginfo-2023"))
        a.loginType = "xd-ykc";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-downloadbytes-2023"))
        a.loginType = "xd-dow";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-tickcoupon-2023"))
        a.loginType = "xd-tic";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-sofuntw-2023"))
        a.loginType = "xd-stw";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-fahad-2023"))
        a.loginType = "xd-fah";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-usecookies-2023"))
        a.loginType = "xd-use";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-rotsz-2023"))
        a.loginType = "xd-rot";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-softocoupon-2023"))
        a.loginType = "xd-pon";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-elitemacx86-2023"))
        a.loginType = "xd-eli";
      else if (-1 != r.indexOf("multcloud-giveaway-xd-softlay-2023"))
        a.loginType = "xd-sof";
      else {
        if (-1 != r.indexOf("multcloud-giveaway-")) {
          var d = b("#giveAwayHtml").attr("login-type");
          d && (a.loginType = d);
        }
      }
      var p = window.location.hash.substr(1);
      p && "free-xd-levelupId-2024" == p && (a.loginType = p);
      var g = localStorage.getItem("loginType"); g && (a.loginType = "YouTube:" + g),
        -1 == window.location.pathname.indexOf("inviteFriendsSign") && (a.autoLogin = !0);
      var u = b.cookie("x-cd");
      u && (a.xcd = u),
        __api.doUserRequest("sign_up", a, function (e) {
          if (
            (0 == e.status && b.showTip(o, b.noticeTxt("internet"), "error"),
              "Success" == e.message)
          ) {
            e.inviteStatus &&
              "alreadyGained" == e.inviteStatus &&
              b.openMessageShow(b.noticeTxt("message").alreadyGained, "notice"),
              e.a202301 &&
              "error" == e.a202301 &&
              b.openMessageShow(b.noticeTxt("message").error, "notice");
            var i = c ? "share" : "web",
              t = "Free/" + b.flang(),
              a =
                "Register/" +
                e.user.id +
                "/" +
                b.identifyDevices() +
                "/web/" +
                i +
                "/AOMEI";
            b.sendGoogleAnaytics(a, t, "registermail"),
              b.signUpSuccessEvent(n.email, e.user.id, e.user);
          } else 403 == e.status && "notSupportedRegion" == e.reason ? top.location.href = ("en" == b.theLang() ? "" : "/" + b.theLang()) + "/region-not-supported.html" : "verifyCodeInvalid" == e.reason ? (b('[name="vcode"]').show(), b.showTip(b("#signUpCode"), signupTxt.codeError, "error")) : "emailExist" == e.reason && b.showTip(b("#signUpEmail"), signupTxt.emailError, "error"), "none" != b('[name="vcode"]').css("display") && b.refreshAndClearCode();
          -1 != r.indexOf("multcloud-giveaway") ||
            -1 != window.location.pathname.indexOf("upgrade-2023")
            ? o.text(s).attr("disabled", !1)
            : o.text(signupTxt.signUpBtnText).attr("disabled", !1);
        });
    },
    signReference: function () {
      b.signInEvent(), b.signUpEvent();
    },
    getQueryVariable: function (e) {
      for (
        var i = window.location.search.substring(1).split("&"), t = 0;
        t < i.length;
        t++
      ) {
        var a = i[t].split("=");
        if (a[0] == e) return a[1];
      }
      return null;
    },
    generateVerifyKey: function () {
      for (
        var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        i = e.length,
        t = "",
        a = 0;
        a < 14;
        a++
      )
        t += e.charAt(Math.floor(Math.random() * i));
      var n = Math.round(9 * Math.random());
      return (t = n + t + (9 - n));
    },
    refreshAndClearCode: function () {
      var e = b(".verificationCode:visible");
      b('[name="verificationCode"]').val(""),
        b.each(e, function (e, i) {
          var t = b.generateVerifyKey(),
            a = { vkey: t },
            n = __api.signMd5(a);
          i.src = APIURL + "/verify_code/generate?vkey=" + t + "&s=" + n;
        });
    },
    activateAccount: function (e, i, t) {
      e.find(".usereMail").text(i),
        e.find('[data-a="activation"]').click(function () {
          b(this).attr("disabled", !0),
            __api.sendActivateCode(t),
            b.sendTimer(b(this));
        });
    },
    signUpSuccessEvent: function (e, i, t) {
      window.location.pathname.slice(1).replace(".html", "");
      if (
        -1 !=
        window.location.pathname.indexOf(
          nowActivePageParameter.salePage + "-sale"
        )
      ) {
        if (t.salt) {
          localStorage.setItem("expirationTime", (new Date).getTime() + 6048e5);
          var a = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString();
          a && (t.email = a), localStorage.setItem("user", JSON.stringify(t)), sessionStorage.setItem("user", JSON.stringify(t));
          var n = b(".sale-bx-btn-check").attr("data-type");
          turnSalePricePageLink(
            1 == n ? "Lifetime-Unlimited" : "Yearly-Unlimited",
            i
          );
        }
      } else if (
        -1 != window.location.pathname.indexOf("subscribe") ||
        -1 != window.location.pathname.indexOf("upgrade") || -1 != window.location.pathname.indexOf("/plan-product")
      ) {
        if (t.salt) {
          localStorage.setItem("expirationTime", (new Date).getTime() + 6048e5);
          var a = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString();
          a && (t.email = a), localStorage.setItem("user", JSON.stringify(t)), sessionStorage.setItem("user", JSON.stringify(t)),
            b('[data-elem="signUp"]').hide(),
            b("#signSuc").show(),
            b("#signSuc").find(".usereMail").text(e);
          var n = b("#signSuc .btn"),
            o = n.text(),
            s = 0,
            r = 5;
          (-1 != window.location.pathname.indexOf("subscribe") || -1 != window.location.pathname.indexOf("/plan-product")) && (r = 5),
            (s = setInterval(function () {
              n.text(o + "(" + --r + "s)"),
                r < 1 && (clearInterval(s), n.text(o), b.gotoPricePageLink(i));
            }, 1e3)),
            b("#signSuc .btn").click(function () {
              clearInterval(s), n.text(o), b.gotoPricePageLink(i);
            });
        }
      } else if (-1 != window.location.pathname.indexOf("inviteFriendsSign"))
        b('[data-elem="signUp"]').hide(),
          b("#signSuc").show().addClass("active"),
          b.activateAccount(b("#signSuc"), e, i),
          b("#signSuc").find('[data-a="activation"]').click(),
          b("#signSuc .btn").click(function () {
            b("#signSuc").hide();
          });
      else if (-1 != window.location.pathname.indexOf("multcloud-giveaway"))
        partnersActiveShow(e, i);
      else if (t.salt) {
        var l;
        b.activateAccount(b("#signSuc"), e, i),
          b("#signSuc").find('[data-a="activation"]').click(),
          (l =
            -1 == t.email.indexOf("@")
              ? null == t.ip
                ? "newtour"
                : "oldtour"
              : null == t.ip
                ? "newmail"
                : "oldmail");
        var c = b.getEdition(t) + "/" + b.flang(),
          d = "Login/" + t.id + "/" + b.identifyDevices() + "/web/AOMEI";
        b.sendGoogleAnaytics(d, c, l);
        var p = new Date().getTime();
        var u = p + 6048e5;
        localStorage.setItem("expirationTime", u); var n = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString(); n && (t.email = n), t.email = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString(),
          localStorage.setItem("user", JSON.stringify(t)),
          sessionStorage.setItem("user", JSON.stringify(t)),
          b.enterMyMultCloud();
      } else
        b('[data-elem="signUp"]').hide(),
          b("#signSuc").show().addClass("active"),
          b.activateAccount(b("#signSuc"), e, i),
          b("#signSuc").find('[data-a="activation"]').click(),
          b("#signSuc .btn").click(function () {
            b("#signSuc").hide();
          });
    },
    signIn: function (f, e) {
      b.showTip(f.find('[name="submit"]'), "", "true");
      var m = f.find("button"),
        h = !f.find('[data-elem="checkIsOrNo"]').hasClass("icon-check-none"),
        v = { email: e.email, password: e.password, language: b.flang() };
      e.vcode && e.vkey && ((v.vcode = e.vcode), (v.vkey = e.vkey)),
        (v.rememberMe = !!h);
      var y = window.location.pathname.slice(1).replace(".html", "");
      "undefined" != typeof dualOtp &&
        (dualRember || (v.rememberMe = !1), (v.otp = dualOtp), (dualOtp = ""));
      var i = localStorage.getItem("trustedDevice");
      if (i) {
        var t = b.getTrustedDeviceByEmail(v.email);
        t && (v.tdcode = t);
      }
      __api.doUserRequest("sign_in_", v, function (e) {
        if (
          (-1 !=
            window.location.pathname.indexOf(
              nowActivePageParameter.salePage + "-sale"
            )
            ? (m = b("#signInBtn"))
              .text(activeTxt.summer.login)
              .removeClass("disabled")
              .attr("disabled", !1)
            : -1 != window.location.pathname.indexOf("2024-xmas-email")
              ? (m = b("#signInBtn"))
                .text(activeTxt.summer.login)
                .removeClass("disabled")
                .attr("disabled", !1)
              : -1 != window.location.pathname.indexOf("upgrade-2023")
                ? (m = b("#signInBtn"))
                  .text("Kế tiếp")
                  .removeClass("disabled")
                  .attr("disabled", !1)
                : m
                  .text(signTxt.loginBtnText)
                  .removeClass("disabled")
                  .attr("disabled", !1),
            0 == e.status && b.showTip(m, b.noticeTxt("internet"), "error"),
            200 == e.status && "Success" == e.message)
        ) {
          var i,
            t = e.user,
            em = t.email;
          i =
            -1 == t.email.indexOf("@")
              ? null == t.ip
                ? "newtour"
                : "oldtour"
              : null == t.ip
                ? "newmail"
                : "oldmail";
          var a = b.getEdition(t) + "/" + b.flang(),
            n = "Login/" + e.user.id + "/" + b.identifyDevices() + "/web/AOMEI";
          b.sendGoogleAnaytics(n, a, i),
            b.showTip(f.find('[name="submit"]'), "", "true");
          var o,
            s = new Date().getTime();
          o = h
            ? r + 6048e5 : r + 72e5,
            localStorage.setItem("expirationTime", o), t.email = CryptoJS.AES.encrypt(t.email, aesEncryptKey).toString(),
            localStorage.setItem("user", JSON.stringify(t)),
            sessionStorage.setItem("user", JSON.stringify(t));
          if (
            ([
              "a202302",
              "xd-wpc",
              "xd-gtc",
              "xd-cmg",
              "zyp-swo",
              "xd-god",
              "xd-tip",
            ].includes(t.payType) && (t.payType = "Yearly"),
              "account" == y)
          )
            switch (t.isuseful) {
              case 2:
              case 0:
                f.hide(),
                  b('[data-elem="active-notice"]').show(),
                  f.find(".usereMail").text(em),
                  __api.sendActivateCode(t.id);
                break;
              case 1:
                b('[data-elem="accout"]').hide(), b(".already").show();
            }
          else if (-1 != window.location.pathname.indexOf("2024-xmas-email")) {
            var r =
              1 == b(".sale-bx-btn-check").attr("data-type")
                ? "Lifetime-Unlimited"
                : "Yearly-Unlimited";
            turnSalePricePageLink(r, t.id);
          } else if (
            -1 !=
            window.location.pathname.indexOf(
              nowActivePageParameter.salePage + "-sale"
            )
          ) {
            r =
              1 == b(".sale-bx-btn-check").attr("data-type")
                ? "Lifetime-Unlimited"
                : "Yearly-Unlimited";
            t.vip
              ? "Yearly-Unlimited" == r || "Lifetime-Unlimited" == r
                ? t.payLevel < 2 &&
                  (("Lifetime" == t.payType && "Lifetime-Unlimited" == r) ||
                    (("Yearly" == t.payType || "Lifetime" == t.payType) &&
                      "Yearly-Unlimited" == r))
                  ? b.showTip(
                    f.find('[name="submit"]'),
                    signTxt.emailVipLifetime,
                    "error"
                  )
                  : turnSalePricePageLink(r, t.id)
                : b.showTip(
                  f.find('[name="submit"]'),
                  signTxt.emailVip,
                  "error"
                )
              : t && 2 == t.isuseful
                ? b.showTip(f.find('[name="submit"]'), signTxt.emailTemp, "error")
                : turnSalePricePageLink(r, t.id),
              m.text(m.text()).attr("disabled", !1);
          } else if (
            -1 !=
            window.location.pathname.indexOf(nowActivePageParameter.salePage)
          ) {
            if (t.vip)
              "Yearly-Unlimited" == (r = b.searchParse().price) ||
                "Lifetime-Unlimited" == r
                ? t.payLevel < 2 &&
                  (("Lifetime" == t.payType && "Lifetime-Unlimited" == r) ||
                    (("Yearly" == t.payType || "Lifetime" == t.payType) &&
                      "Yearly-Unlimited" == r))
                  ? b.showTip(
                    f.find('[name="submit"]'),
                    signTxt.emailVipLifetime,
                    "error"
                  )
                  : b.gotoPricePageLink(t.id)
                : b.showTip(
                  f.find('[name="submit"]'),
                  signTxt.emailVip,
                  "error"
                );
            else
              t && 2 == t.isuseful
                ? b.showTip(
                  f.find('[name="submit"]'),
                  signTxt.emailTemp,
                  "error"
                )
                : b.gotoPricePageLink(t.id);
            m.text(m.text()).attr("disabled", !1);
          } else if (-1 != window.location.pathname.indexOf("upgrade-2023"))
            t.vip && "Lifetime" == t.payType
              ? b.showTip(
                f.find('[name="submit"]'),
                signTxt.emailVipLifetime,
                "error"
              )
              : b.gotoPricePageLink(t.id);
          else if (
            -1 != window.location.pathname.indexOf("subscribe") ||
            -1 != window.location.pathname.indexOf("upgrade") || -1 != window.location.pathname.indexOf("/plan-product")
          ) {
            if (t.vip) {
              var l = "price";
              (r = b.searchParse().price) ||
                ((l = "upgrade"), (r = b.searchParse().upgrade)),
                "upgrade" != l ||
                  ("Lifetime-Unlimited" != r &&
                    "Lifetime-Unlimited-dgg" != r &&
                    "a202301" != t.payType)
                  ? "price" == l
                    ? "Monthly1" == r ||
                      "Monthly2" == r ||
                      "Lifetime" == t.payType
                      ? b.showTip(
                        f.find('[name="submit"]'),
                        signTxt.emailVipLifetime,
                        "error"
                      )
                      : !(
                        t.payLevel < 2 ||
                        (2 == t.payLevel && "Yearly" == t.payType)
                      ) ||
                        ("Yearly1" != r && "Yearly2" != r)
                        ? t.payLevel < 2 &&
                          "Yearly" == t.payType &&
                          "Yearly-Unlimited" == r
                          ? b.showTip(
                            f.find('[name="submit"]'),
                            signTxt.emailVipLifetime,
                            "error"
                          )
                          : b.gotoPricePageLink(t.id)
                        : b.showTip(
                          f.find('[name="submit"]'),
                          signTxt.emailVipLifetime,
                          "error"
                        )
                    : b.showTip(
                      f.find('[name="submit"]'),
                      signTxt.emailVip,
                      "error"
                    )
                  : t.payLevel < 2 && "Lifetime" == t.payType
                    ? b.showTip(
                      f.find('[name="submit"]'),
                      signTxt.emailVipLifetime,
                      "error"
                    )
                    : b.gotoPricePageLink(t.id);
            } else
              t && 2 == t.isuseful
                ? b.showTip(
                  f.find('[name="submit"]'),
                  signTxt.emailTemp,
                  "error"
                )
                : b.gotoPricePageLink(t.id);
            m.text(m.text()).attr("disabled", !1);
          } else if (
            -1 != window.location.pathname.indexOf(nowActivePageParameter.aType)
          )
            t.vip && "Lifetime" == t.payType && 1 == t.payLevel
              ? b.enterMyMultCloud()
              : b.gotoPricePageLink(t.id);
          else
            switch (t.isuseful) {
              case 0:
                f.hide(),
                  b('[data-elem="active-notice"]').show(function () { b.layuiLayerChangeSize() }),

                  setTimeout(function () {
                    b.layuiLayerChangeSize();
                  }, 1000),
                  b('[data-a="account-activation"]').click(function () {
                    b('[data-elem="active-notice"]').hide(),
                      b('[data-elem="account-activation"]')
                        .addClass("active")
                        .show(function () { b.layuiLayerChangeSize() }),
                      b.layuiLayerChangeSize(),
                      b.activateAccount(
                        b('[data-elem="account-activation"]'),
                        em,
                        t.id
                      ),
                      b('[data-elem="account-activation"]')
                        .find('[data-a="activation"]')
                        .click();
                  });
                break;
              case 1:
                b.enterMyMultCloud();
                break;
              case 2:
                -1 == em.indexOf("@") ||
                  ("sub" == t.loginType && em == t.username)
                  ? b.enterMyMultCloud()
                  : (f.hide(),
                    b('[data-elem="active-notice"]').show(function () { b.layuiLayerChangeSize() }),
                    b('[data-a="account-activation"]').click(function () {
                      b('[data-elem="active-notice"]').hide(),
                        b('[data-elem="account-activation"]')
                          .addClass("active")
                          .show(),
                        b.layuiLayerChangeSize(),
                        b.activateAccount(
                          b('[data-elem="account-activation"]'),
                          em,
                          t.id
                        ),
                        b('[data-elem="account-activation"]')
                          .find('[data-a="activation"]')
                          .click();
                    }));
            }
        } else if ((b.refreshAndClearCode(), 401 == e.status))
          b.showTip(f.find('[name="submit"]'), signTxt.emailPsdError, "error");
        else if ("userNotFound" == e.reason)
          b.showTip(f.find('[name="submit"]'), signTxt.emailPsdError, "error");
        else if ("verifyCodeInvalid" == e.reason)
          if (f.find('[data-elem="from-item"]').hasClass("f-hide")) {
            f.find(".mc-row").removeClass("f-hide"),
              b.layuiLayerChangeSize(),
              f.find(".mc-row").find('[name="verificationCode"]').select();
            var c = f.find(".verificationCode");
            b.each(c, function (e, i) {
              var t = b.generateVerifyKey(),
                a = { vkey: t },
                n = __api.signMd5(a);
              i.src = APIURL + "/verify_code/generate?vkey=" + t + "&s=" + n;
            });
          } else
            b.showTip(
              b("#signInBtn")
                .parents('[data-elem="signIn"]')
                .find("#signInCode"),
              signupTxt.codeError,
              "error"
            );
        else if ("exceedMaxLimit" == e.reason)
          b.showTip(f.find('[name="submit"]'), signTxt.accountFreeze, "error");
        else if ("unauthorizedEquipment" == e.exception) {
          isVerifyPending = !1;
          var d = e.dual,
            p = e.otp;
          goToDualVerify(f, "login", "verify", d, p, v.email);
        } else if ("pendingActivated" == e.exception) {
          isVerifyPending = !0;
          var u = e.dual,
            g = e.otp;
          goToDualVerify(f, "login", "verify-recovery-pending", u, g, v.email);
        } else
          403 == e.status && "notSupportedRegion" == e.reason ? (b.showTip(f.find('[name="submit"]'), e.message, "error"), top.location.href = ("en" == b.theLang() ? "" : "/" + b.theLang()) + "/region-not-supported.html") :
            (e.reason || e.exception) &&
            b.showTip(f.find('[name="submit"]'), signTxt.signError, "error");
      });
    },
    getEdition: function (e) {
      return null == e.payType
        ? "Free"
        : "Monthly" == e.payType && 1 == e.payLevel
          ? "Monthly-un"
          : "Yearly" == e.payType && 1 == e.payLevel
            ? "Yearly-un"
            : e.payType;
    },
    signInEvent: function () {
      b("#signInBtn").click(function () {
        var e,
          i = b(this),
          t = i.parents('[data-elem="signIn"]'),
          a = t.find("#signInEmail"),
          n = t.find("#signInPsd"),
          o = t.find("#signInCode"),
          s = a.val(),
          r = n.val(),
          l = o.val(),
          c = !o.parents('[data-elem="from-item"]').hasClass("f-hide");
        dualOtp && (c = !1);
        var d = c
          ? t
            .find(".verificationCode")
            .attr("src")
            .split("&s=")[0]
            .split("?vkey=")[1]
          : "";
        if (
          ("" == s
            ? b.showTip(a, signupTxt.emailEmpty, "error")
            : 128 < s.length && b.showTip(a, signupTxt.emailFormat, "error"),
            (r = b.passwordTest(n)),
            (l = c ? b.codeTest(o) : ""),
            (e = c ? l && s && r : s && r) &&
            -1 !=
            window.location.pathname.indexOf(nowActivePageParameter.aType))
        )
          getPayMsg(s, nowActivePageParameter.aType, function () {
            var e = { email: s, password: r, vcode: l, vkey: d };
            b.signIn(t, e),
              i
                .text(signTxt.loginingBtnText)
                .addClass("disabled")
                .attr("disabled", !0);
          });
        else if (e) {
          var p = { email: s, password: r, vcode: l, vkey: d };
          b.signIn(t, p),
            i
              .text(signTxt.loginingBtnText)
              .addClass("disabled")
              .attr("disabled", !0);
        }
      }),
        b('[data-elem="signIn"]').keyup(function (e) {
          13 == e.keyCode && b("#signInBtn").trigger("click");
        }),
        b("body").click(function () {
          b("#signInCookie").hide();
        });
    },
    sendTimer: function (e) {
      b("#signSuc");
      var i = e,
        t = i.text(),
        a = 0,
        n = 60;
      a = setInterval(function () {
        i.attr("disabled", !0),
          i.text(t + "(" + --n + "s)").css("cursor", "not-allowed"),
          n < 1 &&
          (clearInterval(a),
            i.text(t).attr("disabled", !1).css("cursor", "pointer"));
      }, 1e3);
    },
    forgetPassword: function () {
      b('[data-elem="forgetPassword"]').on("click", function () {
        var e,
          i = b(this).parents('[data-elem="forget"]'),
          o = i,
          t = i.find('[name="email"]'),
          s = i.find("#forgetCode"),
          r = i.find('[data-elem="forgetPassword"]'),
          a = b.emailTest(t),
          n = s.val(),
          l = i
            .find(".verificationCode")
            .attr("src")
            .split("&s=")[0]
            .split("?vkey=")[1],
          c = {
            email: a,
            workUrl:
              website +
              ("en" == b.theLang() ? "" : "/" + b.theLang()) +
              "/reset?code=",
          };
        if (
          (dualOtp
            ? ((n = ""), (e = a))
            : ((e = (n = b.codeTest(s)) && a), (c.vkey = l), (c.vcode = n)),
            b.showTip(r, "", "true"),
            e)
        ) {
          b.refreshAndClearCode(),
            i.find('[name="verificationCode"]').val(""),
            r.attr("disabled", !0);
          var d = r.text();
          if (
            (r.text(b.noticeTxt("resetPassword").SendingBtnText),
              "undefined" != typeof dualOtp)
          )
            (c.otp = dualOtp), (dualOtp = "");
          else {
            var p = localStorage.getItem("trustedDevice");
            if (p) {
              var u = b.getTrustedDeviceByEmail(c.email);
              u && (c.deviceUniqueCode = u);
            }
          }
          __api.doEmailRequest("send_forgot_code", c, function (e) {
            if (
              (r.text(d),
                r.attr("disabled", !1),
                e.status && 200 == e.status && "Success" == e.message)
            )
              -1 !=
                window.location.pathname.indexOf(
                  nowActivePageParameter.salePage + "-sale"
                ) || -1 != window.location.pathname.indexOf("2024-xmas-email")
                ? b('[data-elem="forgetSuccess"]').show()
                : openVerify(o, "verify-reset-success");
            else if ("emailExist" == e.reason || "userNotFound" == e.reason)
              b.showTip(r, b.noticeTxt("sendResetEmail").invalidEmail, "error");
            else if ("verifyCodeInvalid" == e.reason)
              b.showTip(s, signTxt.codeError, "error");
            else if ("unauthorizedEquipment" == e.exception) {
              isVerifyPending = !1;
              var i = e.dual,
                t = e.otp;
              goToDualVerify(o, "forgetPassword", "verify", i, t, c.email);
            } else if ("pendingActivated" == e.exception) {
              isVerifyPending = !0;
              var a = e.dual,
                n = e.otp;
              goToDualVerify(
                o,
                "forgetPassword",
                "verify-recovery-pending",
                a,
                n,
                c.email
              );
            } else e.reason;
          });
        }
      });
    },
    resetPassword: function () {
      var s = !!b.searchParse().code && b.searchParse().code,
        e = window.location.pathname;
      -1 == e.indexOf("tutorials/") && (-1 != e.indexOf("reset") && 0 == s
        ? (window.location.href =
          ("en" == b.theLang() ? "" : "/" + b.theLang()) +
          "/sign.html?type=reset")
        : -1 != e.indexOf("reset") &&
        s &&
        __api.doUserRequest("sel_user", { rcode: s }, function (e) {
          e.user && 200 == e.status
            ? (b('[data-elem="restPassword"]')
              .find('[data-elem="reset"]')
              .find('[name="email"]')
              .val(e.user.email),
              b('[data-elem="restPassword"]')
                .find('[data-elem="reset"]')
                .show(),
              b('[data-elem="restPassword"]')
                .find('[data-elem="forget"]')
                .hide(),
              b("#resetBtn").on("click", function () {
                var i = b(this).parents('[data-elem="restPassword"]'),
                  e = i.find('[name="password"]'),
                  t = i.find('[name="rePassword"]'),
                  a = b.passwordTest(e),
                  n = b.resetPasswordTest(t, a),
                  o = { password: a, rcode: s };
                a &&
                  n &&
                  s &&
                  __api.doUserRequest("reset_pwd", o, function (e) {
                    "Success" == e.message
                      ? (b.showTip(
                        i.find("button"),
                        b.noticeTxt("resetPassword").resetSuccess,
                        "true"
                      ),
                        setTimeout(function () {
                          window.location.href =
                            ("en" == b.theLang() ? "" : "/" + b.theLang()) +
                            "/sign#login";
                        }, 3e3))
                      : "codeInvalid" == e.reason &&
                      (window.location.href =
                        ("en" == b.theLang() ? "" : "/" + b.theLang()) +
                        "/sign.html?type=reset");
                  });
              }))
            : e.status &&
            200 != e.status &&
            (window.location.href =
              ("en" == b.theLang() ? "" : "/" + b.theLang()) +
              "/sign.html?type=reset");
        }));
    },
    noticeTxt: (function (i) {
      function e(e) {
        return i.apply(this, arguments);
      }
      return (
        (e.toString = function () {
          return i.toString();
        }),
        e
      );
    })(function (e) {
      return noticeTxt[b.theLang()][e];
    }),
    layuiLayerChangeSize: function () {
      if (window.name) {
        var e = parent.layer.getFrameIndex(window.name);
        parent.layer.iframeAuto(e);
        var i = parent.layer.getChildFrame('[data-elem="changeModelWrap"]', e),
          t = b(i).height() + 1,
          a = b(window.parent.document).find("#layui-layer" + e);
        a.height(t), a.find("iframe").height(t);
      }
    },
    sendGoogleAnaytics: function (e, i, t) {
      var a = { action: e, category: i, label: t };
      __api.doUserRequest("ga_send", a, function (e) { });
    },
    getPage: function (e) {
      var i;
      return (
        e && (i = e.substring(e.lastIndexOf("=") + 1, e.length)),
        (i = i ? i.replace("home.html", "") : "/")
      );
    },
    getDevId: function () {
      var e,
        t = b.fileredCookies("dev_id_");
      if (t && 0 < t.length && (e = t[0].substring(7)), !e) {
        var i = decodeURIComponent(b.cookie("_ll_lp"));
        e = i ? i.split("_?")[1] : ""
      }
      return e || (e = "null"), e
    },
    getAuthor: function (e) {
      for (var i = {}, t = e.split("&"), a = 0; a < t.length; a++)
        if (t[a]) {
          var n = t[a].split("=");
          i[n[0]] = void 0 === n[1] ? "" : n[1];
        }
      return i.cd1 && "GG" != i.cd1 ? i.cd1 : "Common";
    },
    fileredCookies: function (t) {
      var e = document.cookie,
        a = [];
      return (
        b.each(e.split("; "), function (e, i) {
          if (0 === i.indexOf(t)) { var n = i.split("="); a.push(n[0]) }
        }),
        a
      );
    },
    createXLink: function (e, i) {
      var t = "MC_" + b.theLang() + "-null_" + i + ":" + e,
        a = b.cookie("x-referrer");
      return a && (t += "_" + a), t;
    },
    addShoppingCartRecords: function (e, t, i) {
      var a = JSON.parse(localStorage.getItem("user"));
      __api.doSubscriptionRequest("add_cart_records", { ud: t, productId: e.cart, coupon: e.coupon, source: 1, salt: a.salt }, function (e) {
        "Success" == e.message && e.cartRecoedsId && i(e.cartRecoedsId)
      })
    },
    gotoPricePageLinkForm: function (e, i, t) {
      e.coupon || t != nowActivePageParameter.aType || b.enterMyMultCloud();
      b.addShoppingCartRecords(e, i, function (y) {
        var a = JSON.parse(localStorage.getItem("user"));
        a &&
          "free-xd-levelupId-2024" == a.loginType &&
          (t = "free-xd-levelupId-2024");
        var n = e.cart,
          o = e.mb,
          s = e.coupon,
          r = e.gurantee,
          l = e.level,
          c = b.flang(),
          d = b.cookie("x-cd"),
          p = b.getAuthor(d),
          u = b.getPage(d),
          g = b.createXLink(p, u),
          f = b.getDevId(),
          m = b.cookie("_ll_xid");
        d = "cd1=" + p + "&cd2=" + u;
        var h = b('<form method="post"></form>'),
          v = {
            cart: n,
            coupon: s,
            "x-lang": c,
            "x-mb": o,
            "x-userid": i,
            "x-level": l,
            "x-page": t,
            "x-link": g,
            "x-cd": d,
            "x-guarantee": r,
            "x-version": "new",
            "x-crid": y
          };
        m && (v["x-xid"] = m), f && (v["x-devId"] = f);
        var y = b.fileredCookies("___amga_");
        for (var w in (0 < y.length &&
          y.forEach(function (e) {
            var i = e.split("___amga_")[1];
            i && (v["x-extset_" + i] = b.cookie(e));
          }),
          h.attr({ action: "https://www.cleverbridge.com/1533/purl-mc-cart" }),
          v)) {
          var x = b('<input type="hidden">');
          x.attr({ name: w }), x.val(v[w]), h.append(x);
        }
        b("html").append(h), h.submit(), b.send_ll_lp();
      });
    },
    gotoPricePageLink: function (e) {
      if (
        -1 !=
        window.location.pathname.indexOf(
          nowActivePageParameter.salePage + "-subscribe"
        )
      ) {
        if (0 < (t = b("." + b.searchParse().price)).length) {
          var i = t.data();
          return void ("tutorials" == b.searchParse().from
            ? b.gotoPricePageLinkForm(
              i,
              e,
              nowActivePageParameter.salePricePage2
            )
            : b.gotoPricePageLinkForm(
              i,
              e,
              nowActivePageParameter.salePricePage
            ));
        }
      } else if (-1 != window.location.pathname.indexOf("subscribe")) {
        var t;
        if (0 < (t = b("." + b.searchParse().price)).length) {
          i = t.data();
          var g = b.determineUserType();
          return void (g ? b.gotoPricePageLinkForm(i, e, g) : b.gotoPricePageLinkForm(i, e, i.page));
        }
      } else if (-1 != window.location.pathname.indexOf("/plan-product")) {
        var t;
        if (0 < (t = b("." + b.searchParse().price)).length) {
          i = t.data();
          return void b.gotoPricePageLinkForm(i, e, i.page);
        }
      } else if (-1 != window.location.pathname.indexOf("upgrade-2023")) {
        if (0 < (a = b("." + b.searchParse().upgrade)).length) {
          i = a.data();
          return void b.gotoPricePageLinkForm(i, e, i.page);
        }
      } else if (-1 != window.location.pathname.indexOf("upgrade")) {
        if (0 < (a = b("." + b.searchParse().upgrade)).length) {
          i = a.data();
          return void (-1 != window.location.pathname.indexOf("jp/upgrade")
            ? b.gotoPricePageLinkForm(i, e, "upgrade-DGG")
            : b.gotoPricePageLinkForm(i, e, "upgrade"));
        }
      } else if (
        -1 != window.location.pathname.indexOf(nowActivePageParameter.aType)
      ) {
        var a;
        if (0 < (a = b(".Upgrade-Lifetime-Unlimited")).length)
          return void (
            null != (i = a.data()).coupon &&
            "" != i.coupon &&
            b.gotoPricePageLinkForm(i, e, nowActivePageParameter.aType)
          );
      }
    },
    turnPricePageLink: function (e, i) {
      if (-1 != window.location.pathname.indexOf("upgrade"))
        b.gotoPricePageLink(i);
      else {
        var t = {
          Monthly1: {
            cart: "240888",
            coupon: "",
            mb: "14",
            level: "2",
            gurantee: "14",
            page: "price-monthly1-original",
          },
          Monthly2: {
            cart: "240889",
            coupon: "DW8-6SC-HZE",
            mb: "14",
            level: "2",
            gurantee: "14",
            page: "price-monthly2-original",
          },
          Yearly1: {
            cart: "240886",
            coupon: "E2A-UZ1-6G7",
            mb: "30",
            level: "2",
            gurantee: "30",
            page: "price-annual1-original",
          },
          Yearly2: {
            cart: "240887",
            coupon: "E6Y-EBP-ZZC",
            mb: "30",
            level: "2",
            gurantee: "30",
            page: "price-annual2-original",
          },
          "Yearly-Unlimited": {
            cart: "240891",
            coupon: "REP-6VP-A2S",
            mb: "30",
            level: "1",
            gurantee: "30",
            page: "price-annualun-original",
          },
          "Lifetime-Unlimited": {
            cart: "240892",
            coupon: "1QL-BSD-SGN",
            mb: "30",
            level: "1",
            gurantee: "30",
            page: "price-lifetimeun-original",
          },
        },
          a = b.determineUserType();
        a ? b.gotoPricePageLinkForm(t[e], i, a) : t[e] && i && b.gotoPricePageLinkForm(t[e], i, t[e].page);
      }
    },
    determineUserType: function () {
      var e = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
      if (e && e.loginType && "YouTube:" == e.loginType.substring(0, 8)) return e.loginType.slice(8);
      return !1
    },
    openNoticeError: function (e, i) {
      noticeErrorShow(e, i);
    },
    closeAllLayer: function () {
      var e = parent.layer.getFrameIndex(window.name);
      e || 0 == e
        ? parent.layer.close(e)
        : (b("[data-elem='verify-reset-success']").hide(), clickVerifyPortal());
    },
    closeSubscribe: function () {
      var e = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";
      e
        ? __api.doUserRequest(
          "exit",
          { ud: e.id, salt: e.salt },
          function (e) {
            "Success" == e.message &&
              (window.localStorage.clear(), window.parent.location.reload());
          },
          1
        )
        : (b('[data-elem="subscribe-notice"]').hide(),
          b('[data-elem="signIn"]').show());
    },
    signPageModulChange: function () {
      var e = window.location.hash,
        i = b.searchParse().type;
      switch (e) {
        case "#login":
          b('[data-elem="signIn"]').show().siblings().hide();
          break;
        case "#forget":
          b('[data-elem="forget"]').show().siblings().hide(),
            b.refreshAndClearCode();
          break;
        case "#active":
          var t = JSON.parse(localStorage.getItem("activeUser"));
          if (t) {
            localStorage.removeItem("activeUser"),
              b('[data-elem="account-activation"]')
                .addClass("active")
                .show()
                .siblings()
                .hide(),
              b.activateAccount(
                b('[data-elem="account-activation"]'),
                t.email,
                t.id
              );
            var a = b('[data-elem="account-activation"]').find(
              '[data-a="activation"]'
            );
            a.attr("disabled", !0), b.sendTimer(a);
          } else
            window.location.href =
              ("en" == b.theLang() ? "" : "/" + b.theLang()) + "/sign";
          break;
        case "#2FA":
          b('[data-elem="signIn"]').show().siblings().hide();
          var n = b.cookie("2FaSignTemp");
          if (n) {
            (n = JSON.parse(b.cookie("2FaSignTemp"))),
              b.cookie("2FaSignTemp", "", {
                expires: -1,
                domain: ".multcloud.com",
              }),
              (isVerifyPending = !1);
            var o = n.dual,
              s = n.otp,
              r = b("#signInBtn").parents('[data-elem="signIn"]');
            goToDualVerify(r, "login", "verify", o, s, o.email);
          }
      }
      if ("reset" == i) {
        var l = noticeTxt[b.theLang()].sendResetEmail.emailInvalid;
        b('[data-elem="forget"]').show().siblings().hide(),
          b(".forget-tips").show().addClass("err").find(".txt").text(l);
      }
    },
    openSubscribe: function (t, a, n) {
      var e = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "",
        i = b('header .btn-login,.log,[data-login="login"]').hasClass("mymc");
      if (("upgrade-dgg" == a && (i = !0), e && i)) {
        var o = { ud: e.id, salt: e.salt };
        "upgrade-dgg" == a && b("[data-elem='loadingMask']").show(),
          __api.doUserRequest(
            "get",
            o,
            function (e) {
              if ("Success" == e.message) {
                var i = e.user;
                if (i && i.vip)
                  if ("price" == n) {
                    if (
                      "Monthly1" == t ||
                      "Monthly2" == t ||
                      "Lifetime" == i.payType
                    )
                      return void b.openNoticeError(
                        b.noticeTxt("message").vipError2
                      );
                    if (
                      (i.payLevel < 2 ||
                        (2 == i.payLevel && "Yearly" == i.payType)) &&
                      ("Yearly1" == t || "Yearly2" == t)
                    )
                      return void b.openNoticeError(
                        b.noticeTxt("message").vipError2
                      );
                    if (
                      i.payLevel < 2 &&
                      "Yearly" == i.payType &&
                      "Yearly-Unlimited" == t
                    )
                      return void b.openNoticeError(
                        b.noticeTxt("message").vipError2
                      );
                    b.turnPricePageLink(t, i.id);
                  } else
                    "upgrade" != a ||
                      ("Yearly-Unlimited" != t && "Lifetime-Unlimited" != t)
                      ? "upgrade-dgg" == a
                        ? "a202301" == i.payType
                          ? b.turnPricePageLink(t, i.id)
                          : b("[data-elem='loadingMask']").hide()
                        : "upgrade-2023" == a
                          ? "Lifetime" == i.payType
                            ? b.openNoticeError(b.noticeTxt("message").vipError)
                            : b.turnPricePageLink(t, i.id)
                          : b.openNoticeError(b.noticeTxt("message").vipError)
                      : i.payLevel < 2 &&
                        ("Lifetime" == i.payType || "Yearly" == i.payType)
                        ? b.openNoticeError(b.noticeTxt("message").vipError)
                        : b.turnPricePageLink(t, i.id);
                else
                  i && 2 == i.isuseful
                    ? b.openNoticeError(b.noticeTxt("message").tempError)
                    : i
                      ? b.turnPricePageLink(t, i.id)
                      : (localStorage.removeItem("user"),
                        window.location.reload());
              } else
                "saltInvalid" == e.reason &&
                  (localStorage.removeItem("user"), window.location.reload());
            },
            1
          );
      } else
        "price" == n &&
          (window.location.href =
            ("en" == b.theLang() ? "" : "/" + b.theLang()) +
            "/subscribe.html?price=" +
            t);
    },
    removeShowTipBySignIn: function () {
      var e = b('[data-elem="signIn"]');
      e.find("#signInEmail").val(""),
        e.find("#signInPsd").val(""),
        b.refreshAndClearCode(),
        b.showTip(e.find('[name="submit"]'), "", "true");
    },
    openMessageShow: function (e, i, t) {
      var a = top.document.createElement("span");
      (a.style.display = "inline-block"),
        (a.textContent = e),
        top.document.body.appendChild(a);
      var n = a.clientWidth;
      top.document.body.removeChild(a), messageShow(e, i, n, t);
    },
    checkShowPassword: function () {
      b('[data-item="showPassword"]')
        .unbind()
        .click(function () {
          var e = b(this).parent().find("input");
          b(this).hasClass("icon-password-eye-hide")
            ? (b(this).removeClass("icon-password-eye-hide"),
              b(this).addClass("icon-password-eye"),
              e.attr("type", "text"))
            : (b(this).removeClass("icon-password-eye"),
              b(this).addClass("icon-password-eye-hide"),
              e.attr("type", "password"));
        });
    },
    send_ll_lp: function () {
      var e = decodeURIComponent(b.cookie("_ll_lp"));
      b.post(
        "https://www.multcloud.com/ss/qgv1.png",
        {
          lp: e,
          ga: b.cookie("_ga") ? b.cookie("_ga") : "",
          xid: b.cookie("_ll_xid") ? b.cookie("_ll_xid") : "",
        },
        function (e) { }
      );
    },
    getTrustedDeviceByEmail: function (e) {
      var t = localStorage.getItem("trustedDevice");
      if (t && e) {
        for (var i, a = JSON.parse(t), n = Object.keys(a), o = aesEncryptKey, r = 0; r < n.length; r++) {
          if (CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(n[r], o)) == e) return i = a[n[r]]
        }
        if (i) return i
      } return !1
    },
  });
})(jQuery);
var __gc = {
  host: window.location.hostname,
  langs: ["fr", "jp", "de", "en", "pt", "tw", "cn"],
  thePrefixer: "/",
  calculateBodyTopLength: function () {
    return (
      (this.bodyTopLength =
        ($("header").height() || 0) +
        (0 < $(".am-promotion-entry").length
          ? $(".am-promotion-entry").height()
          : 0)),
      $(".header-nav").hasClass("open") &&
      (this.bodyTopLength = this.bodyTopLength - $(".nav-rt").height()),
      this.bodyTopLength
    );
  },
  entered: function () {
    return (
      !!$.cookie("entered") || ($.cookie("entered", !0, { expires: 1 }), !1)
    );
  },
  apperVisualArea: function (e) {
    var i = $(window).height();
    return (
      0 < e.getBoundingClientRect().top && e.getBoundingClientRect().top < i
    );
  },
  apperVisualAreaAddAnimation: function (e, t) {
    e.removeClass("animated " + t),
      $.each(e, function (e, i) {
        __gc.apperVisualArea(i) && $(i).addClass("animated " + t),
          $(window).scroll(function () {
            __gc.apperVisualArea(i) && $(i).addClass("animated " + t);
          });
      });
  },
  inputFoucesInLabel: function () {
    $("input").focus(function () {
      $(this).parents("label").addClass("focus");
    }),
      $("input").blur(function () {
        $(this).parents("label").removeClass("focus");
      });
  },
  scrollingHeader: function () {
    var e = $(window).scrollTop();
    0 < e
      ? $("body").addClass("scrolling")
      : $("body").removeClass("scrolling"),
      $(window).scroll(function () {
        0 < (e = $(window).scrollTop())
          ? $("body").addClass("scrolling")
          : $("body").removeClass("scrolling");
      });
  },
  closeEvent: function () {
    $('[data-close="btn"]').on("click", function () {
      $(this).parents(".forget-tips").hide();
    });
  },
  carouselSlick: function () {
    var e = $('[data-carousel="slick"]');
    if (e.length <= 0) return !1;
    $.getScript("/resource/slick.min.js", function () {
      e.slick(
        e.data("options") ? new Function("return " + e.data("options"))() : {}
      );
    });
  },

  isArticleEntry: function () {
    var e = 0 < $('[data-category="post"]').length,
      i =
        0 < $(".js-toc-box").length ||
        0 < $(".article-banner+.article-content-box").length ||
        (0 < $("#post-main-column").length &&
          $("#post-main-column").hasClass("main-content")),
      t = 0 < $(".article-banner").length,
      a = 0 < $("#post-contents-area").length;
    return e || i || t || a;
  },
  loadFeedbackModule: function () {
    var t = $.theLang(),
      i =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname,
      a = window.location.protocol + "//" + window.location.host,
      n = $("meta[name='author']").attr("content"),
      o = "https://www.multcloud.com/ss/post/feedback";
    __gc.langs.includes(t) || (t = "en");
    var e = $("#post-contents-area");
    __gc.isArticleEntry() &&
      -1 == i.indexOf("--tmp") &&
      $.get("/resource/feedback-content.js", function () {
        e.after(__feedbackHtml[t].title),
          $("#feedback-title").after(__feedbackHtml[t].btnList),
          $("#useful-btn").on("click", function () {
            $(".helpful-btn-list").remove(),
              $("#feedback-title").html(""),
              $.post(
                o,
                { full_path: i, is_helpful: 1, site: a, author: n, lang: t },
                function (e) {
                  429 == e.code
                    ? $("#feedback-title").html(__feedbackHtml[t].rateLimit)
                    : 201 == e.code
                      ? $("#feedback-title").html(__feedbackHtml[t].rated)
                      : $("#feedback-title").html(__feedbackHtml[t].thankNotice);
                }
              );
          }),
          $(document).on("click", "#unuseful-btn", function () {
            $(".feedback .box").css("flex-direction", "column"),
              $(".feedback .container").addClass("clickNo"),
              $(".helpful-btn-list").remove();
            var e = __feedbackHtml[t].form;
            -1 != window.location.pathname.indexOf("phone-backup") && (e = e.replaceAll("support@aomeitech.com", "support@fonetool.com")),
              -1 != window.location.pathname.indexOf("enterprise-backup") && (e = e.replaceAll("support@aomeitech.com", "cyberbackup@aomeitech.com")),
              $("#feedback-title").html(__feedbackHtml[t].formTitle).after(e),
              $(".feedback").css("padding-top", "45px").css("padding-bottom", "55px");
            $("#feedback-txt").on("input propertychange", function () {
              var e, i = $(this);
              200 < i.val().length ? ($("#character-counter").css("color", "#ff5454"),
                $("#feedback-txt").css("border-color", "#ff5454"),
                $("#feedback-notice").css("display", "block").html(__feedbackHtml[t].maxLimit),
                $("#feedback-submit").css("cursor", "not-allowed").css("background-color", "#B1B2FF").attr("disabled", !0)) : ($("#character-counter").css("color", "#7d7d7d"),
                  $("#feedback-txt").css("border-color", "#cacfd3"),
                  $("#feedback-notice").css("display", "none"),
                  $("#feedback-submit").css("cursor", "pointer").css("background-color", "#161a99").removeAttr("disabled")),
                e = 200 - i.val().length,
                $("#left-character").text(e)
            }),
              $("#feedback-submit").on("click", function () {
                $("#feedback-title").html(""),
                  $.post(s, {
                    full_path: a,
                    is_helpful: 0,
                    feedback_no: $("#feedback-txt").val(),
                    site: n,
                    author: o,
                    lang: t
                  }, function (e) {
                    429 == e.code ? $("#feedback-title").html(__feedbackHtml[t].rateLimit) : 201 == e.code ? $("#feedback-title").html(__feedbackHtml[t].rated) : $("#feedback-title").html(__feedbackHtml[t].thankNotice)
                  }),
                  $("#feedback-form").remove()
              }),
              $(document).on("click", "#feedback-cancel", function () {
                $(".feedback .box").css("flex-direction", "row"),
                  i.html(__feedbackHtml[t].titleWithoutTag),
                  $(".feedback .container").removeClass("clickNo"),
                  $("#feedback-form").remove(),
                  $(".helpful-btn-list").length < 1 && i.after(__feedbackHtml[t].btnList)
              })
          })
      });
  },
  changeTwitterHref: function () {
    $(".footer .followInfo").find("a").eq(0).attr("href", "https://x.com/multcloud")
  },
  setClickRef: function () {
    function theQueryString() {
      var key = false,
        res = {},
        itm = null;
      var qs = location.search.substring(1);

      if (arguments.length > 0 && arguments[0].length > 1) {
        key = arguments[0];
      }

      var pattern = /([^&=]+)=([^&]*)/g;
      while ((itm = pattern.exec(qs))) {
        if (key !== false && decodeURIComponent(itm[1]) === key) {
          return decodeURIComponent(itm[2]);
        } else {
          if (key === false) {
            res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
          }
        }
      }

      return key === false ? res : null;
    }
    if (window.location.href.indexOf("x-clickref") > -1) {
      var domain = window.location.host.replace("www", "");
      var daysToRemember = 90;
      var cookieName = "cb_prf_1533";
      var clickref = theQueryString("x-clickref");
      var d = new Date();
      d.setTime(d.getTime() + daysToRemember * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      var nameValue = cookieName + "=" + clickref;
      var domain = "domain=" + domain;
      document.cookie = nameValue + ";" + domain + ";" + expires + ";path=/;";
    }
  },
};
$(function () {
  init(),
    __gc.inputFoucesInLabel(),
    __gc.scrollingHeader(),
    __gc.closeEvent(),
    __gc.carouselSlick(),
    __gc.loadFeedbackModule(),
    __gc.changeTwitterHref()
  __gc.setClickRef()
  $("[data-animated]").each(function () {
    var e = $(this).attr("data-animated");
    __gc.apperVisualAreaAddAnimation($(this), e);
  });
});
var $navCollapse = $(".mc-header,.mc-footer");
window.matchMedia("(min-width: 1024px)").matches
  ? $(".mc-header")
    .find('[data-toggle="dropdown-btn"]')
    .hover(
      function () {
        $(this)
          .addClass("active")
          .find('[data-toggle="dropdown-cnt"]')
          .stop()
          .slideDown();
      },
      function () {
        $(this)
          .removeClass("active")
          .find('[data-toggle="dropdown-cnt"]')
          .stop()
          .slideUp();
      }
    )
  : ($navCollapse.find('[data-toggle="dropdown-btn"]').click(function (e) {
    var i = $(this);
    i.hasClass("active")
      ? i.removeClass("active").find('[data-toggle="dropdown-cnt"]').slideUp()
      : (i
        .addClass("active")
        .find('[data-toggle="dropdown-cnt"]')
        .slideDown(),
        $('[data-toggle="dropdown-btn"]')
          .not(i)
          .removeClass("active")
          .find('[data-toggle="dropdown-cnt"]')
          .slideUp());
  }),
    $(".mc-nav .nav-tg").on("click", function () {
      $(this).toggleClass("open"),
        $(this).parents("header").toggleClass("open"),
        $(this)
          .parents(".mc-nav")
          .find(".nav-rt")
          .toggleClass("open")
          .slideToggle();
    })),
  $navCollapse
    .find('[name="sitesearch"]')
    .val("https://" + __gc.host + __gc.thePrefixer);
var $navbarForm = $navCollapse.find(".nav-form");
function initActiveEntrance() {
  var e = getTimeDifference();
  if (
    !(
      e <= 0 ||
      /\/tutorials\/|\/articles\/|\/help\//.test(window.location.pathname)
    )
  ) {
    if ("en" != $.theLang()) return;
    if (navigator.userAgent.match(/mobile/i)) {
      $(".nav-lf .nav-tg").before(
        '<div class="christmas-mobile-top" onclick="jumpLandingPage()"></div>'
      );
    } else {
      if ($.cookie(nowActivePageParameter.activeName)) return;
      $(".footer-column")
        .parents(".mc-container")
        .after(
          '<div class="bottom-inlet" id="bottomInlet"><div class="container"><div class="img-x"><img src="/resource/WorldBackupDay.png"                    width="710" height="41"></div><div class="bottom-inlet-btn" onclick="jumpLandingPage()">Get it Now<del style="font-size:12px;margin: 0 5px 0 20px;font-weight:100;">$49.95</del><strong>$0</strong></div><div class="bottom-inlet-close bottom-inlet-close-normal" onclick="closeBottomInlet()"></div></div></div>'
        ),
        timeCountDown("saleTime", e);
    }
  }
}
function closeBottomInlet() {
  var e = $("#bottomInlet");
  $.cookie(nowActivePageParameter.activeName, !0, { path: "/" }), e.hide();
}
function jumpLandingPage() {
  if (!(getTimeDifference() <= 0)) {
    var e = $.theLang(),
      i =
        ("en" == e ? "" : "/" + e) +
        "/partners/2022/world-backup-day-giveaway.html";
    -1 != window.location.pathname.indexOf("/tutorials/") &&
      (i += "?from=tutorials"),
      window.open(i);
  }
}
function getTimeDifference() {
  var e = new Date(
    nowActivePageParameter.salePageTime.replace(new RegExp("-", "gm"), "/")
  ).getTime(),
    i = new Date().getTime();
  return 100 * Math.ceil((e - i) / 100);
}
function setTimer(e) {
  var i = parseInt(e / 864e5),
    t = parseInt((e % 864e5) / 36e5),
    a = parseInt((e % 36e5) / 6e4),
    n = parseInt((e % 6e4) / 1e3);
  $('[data-item="day1"]').text(Math.floor(i / 10)),
    $('[data-item="day2"]').text(i % 10),
    $('[data-item="hour1"]').text(Math.floor(t / 10)),
    $('[data-item="hour2"]').text(t % 10),
    $('[data-item="min1"]').text(Math.floor(a / 10)),
    $('[data-item="min2"]').text(a % 10),
    $('[data-item="sec1"]').text(Math.floor(n / 10)),
    $('[data-item="sec2"]').text(n % 10);
}
function timeCountDown(e, i) {
  0 <= i
    ? (setTimer(i),
      setTimeout(function () {
        timeCountDown(e, getTimeDifference());
      }, 1e3))
    : (-1 !=
      window.location.pathname.indexOf(
        "/" + nowActivePageParameter.salePage
      ) && hasSummerEnded(),
      $("#bottomInlet").hide(),
      setTimer(0));
}
function handleTickInit(o) {
  Tick.helper.interval(function () {
    var e = getTimeDifference();
    e < 0 && ((e = 0), has24HFalshEnded());
    var i = parseInt(e / 864e5),
      t = parseInt((e % 864e5) / 36e5),
      a = parseInt((e % 36e5) / 6e4),
      n = parseInt((e % 6e4) / 1e3);
    o.value = {
      sep: ":",
      day1: Math.floor(i / 10),
      day2: i % 10,
      hour1: Math.floor(t / 10),
      hour2: t % 10,
      min1: Math.floor(a / 10),
      min2: a % 10,
      sec1: Math.floor(n / 10),
      sec2: n % 10,
    };
  });
}
1024 <= $(window).width() &&
  $(document).on("click", function (e) {
    var i = $(e.target);
    if (i.is('[data-elem="search-switch"]')) {
      (t = i.parents(".nav-rt")).hasClass("add-search"),
        $(".form-control").val();
      t
        .addClass("add-search")
        .find("#header-search")
        .stop()
        .animate({ top: "23px" }, 600),
        t.find(".nav-mn .nav-ul").stop().animate({ top: "-60px" });
    } else {
      var t = $(".nav-rt");
      0 < i.parents(".header-search").length ||
        (t.hasClass("add-search") &&
          (t
            .removeClass("add-search")
            .find("#header-search")
            .stop()
            .animate({ top: "100px" }, 0),
            t.find(".nav-mn>ul").stop().animate({ top: "0" }, 500)));
    }
  }),
  $(function () {
    $.theLang(), $(".footer-nav li");
    var e = new Date().getFullYear(),
      i = $("footer .mc-container>p"),
      t = i.text().replace("2021", e).replace("2022", e);
    i.text(t);
  }),
  (window.onload = function () {
    if (-1 != window.location.pathname.indexOf("sign")) {
      var e = $.searchParse().reason;
      if (e) {
        $.openMessageShow($.noticeTxt("message")[e], "fail", 3e3);
        var i = window.location.href;
        -1 != i.indexOf("?") &&
          ((i = i.replace(/(\?|#)[^'"]*/, "")),
            window.history.pushState({}, 0, i));
      }
    }
  });
var __public = {
  scrollCarousel: function () {
    0 < $("[data-roll='scroll-carousel']").length &&
      $.getScript("/resource/js/seamscroll.min.js", function () {
        seamscroll.init({
          dom: $('[data-roll="scroll-carousel"]')[0],
          direction: 2,
          step: 0.9,
          loop: !0,
        });
      });
  },
  slick: function () {
    0 < $('[data-slick="content"]').length &&
      $.getScript("/resource/js/slick.min.js", function () {
        $('[data-slick="content"]').each(function (e) {
          var i, t, a;
          (i = $(this)),
            (t = i.parents('[data-slick="parent"]')),
            (a = t.find('[data-slick="closest"]').children()),
            i.slick(
              i.data("options")
                ? new Function("return " + i.data("options"))()
                : {}
            ),
            $('[data-slick="content"]').on(
              "beforeChange",
              function (e, i, t, a) {
                $(e.target)
                  .parents('[data-slick="parent"]')
                  .find('[data-slick="closest"] .item')
                  .eq(a)
                  .addClass("active")
                  .siblings("")
                  .removeClass("active");
              }
            ),
            0 < a.length &&
            (a.click(function () {
              var e = $(this);
              e
                .addClass("show fade in active")
                .siblings()
                .removeClass("show fade in active"),
                t
                  .find('[data-slick="content"]')
                  .slick("slickGoTo", e.index());
            }),
              $('[role="presentation"]').on("click", function () {
                var e = $(this).index();
                a.removeClass("active").eq(e).addClass("active");
              }));
        });
      });
  },
  apperVisualArea: function (e) {
    var i = $(window).height();
    return (
      0 < e.getBoundingClientRect().top && e.getBoundingClientRect().top < i
    );
  },
  addAnimate: function () {
    $("[data-animated]").each(function () {
      var e,
        t,
        i = $(this).attr("data-animated");
      (e = $(this)),
        (t = i),
        e.removeClass("animate " + t),
        $.each(e, function (e, i) {
          __public.apperVisualArea(i) && $(i).addClass("animate " + t),
            $(window).scroll(function () {
              __public.apperVisualArea(i) && $(i).addClass("animate " + t);
            });
        });
    });
  },
  languageChoose: function () {
    __public.isMObile()
      ? $(".drap-navItem").click(function () {
        $(".drap-navItem .currentLang").toggleClass("open"),
          $("[data-drop='langList']").stop().slideToggle();
      })
      : $(".drap-navItem").hover(
        function () {
          $(".drap-navItem .currentLang").addClass("open"),
            $("[data-drop='langList']").stop().slideDown();
        },
        function () {
          $(".drap-navItem .currentLang").removeClass("open"),
            $("[data-drop='langList']").stop().slideUp();
        }
      );
  },
  isMObile: function () {
    return window.innerWidth <= 991;
  },
  navOpen: function () {
    this.isMObile() &&
      ($(".nav-tg").click(function () {
        $(this).hasClass("open")
          ? ($(this).removeClass("open"),
            $(".nav-r").slideUp(),
            $(".logo-x .pc-btn").show(),
            $(".logo-x .phone-btn").hide())
          : ($(this).addClass("open"),
            $(".nav-r").slideDown(),
            $(".logo-x .pc-btn").hide(),
            $(".logo-x .phone-btn").show());
      }),
        $(".nav-ft-tit").click(function () {
          $(this).siblings(".nav-ft-list").stop().slideToggle();
        }));
  },
  initFooterLogoHref: function () {
    var $ele = $(".footer-nav-r .footer-logo")
    if ($ele.attr("href") == "") {
      var langStr = $.theLang() == "en" ? "/" : "/" + $.theLang()
      $ele.attr("href", langStr)
    }
    if ($.theLang() == "cn") {
      $(".langMenu").find("li").eq(1).find("a").attr("href", "/de")
    }
  }
};
$(function () {
  __public.scrollCarousel(),
    __public.slick(),
    __public.addAnimate(),
    __public.languageChoose(),
    __public.navOpen();
  __public.initFooterLogoHref()
}),
  document.write(
    "<script language='javascript' src='/resource/crypto-js.js'></script>"
  ),
  document.write(
    "<script language='javascript' src='/resource/noticeTxt.js?rev=@@hash'></script>"
  ),
  0 < $("#post_function").length &&
  ($.getScript("/resource/jquery.cookie.js", function () {
    2 == $.cookie("firstVisit") ||
      ($.cookie("firstVisit", "2", { expires: 30, path: "/" }),
        $(".side-icloud-photos").css("display", "block"));
  }),
    $(".icloud-photos-close").click(function () {
      $(".side-icloud-photos").css("display", "none");
    })),
  0 < $('[data-device="true"]').length &&
  (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    ? $(".ios-device").addClass("active")
    : /(Android)/i.test(navigator.userAgent)
      ? $(".and-device").addClass("active")
      : $(".pc-device").addClass("active"));
