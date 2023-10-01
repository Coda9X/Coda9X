let toggleNAV = !1;
var time = new Date;

function equalizer(status, callback) {
    if (status === "on") {
        return anime({
            targets: ".songLines .lineSONG",
            height: function () {
                return anime.random(15, 80) + "%";
            },
            easing: "linear",
            duration: 200,
            complete: function () {
                equalizer("on", callback);
            }
        });
    } else if (status === "off") {
        return anime.remove(".songLines .lineSONG"), anime({
            targets: ".songLines .lineSONG",
            height: "15%",
            delay: anime.stagger(100, {
                from: "center"
            })
        });
    } else {
        throw new Error("Error: can't play song");
    }
}

$(document).ready(function () {
    $(".my-menu-text-dropper").codaAnimated({
        animationType: "AC-r2"
    }), $("[page]").click(function () {
        let e = $(this).attr("page");
        window.location.href = e
    }), $("[link]").click(function () {
        let n = $(this).attr("link"),
            e = $(this).attr("secLink"),
            t = $(this).attr("title"),
            s = `You will redirect to ${t === void 0 ? "this link" : t} soon`;
        AlertCoda(s), setTimeout(() => {
            window.location.href = n, e != null && (window.location.href = e)
        }, 2e3)
    }), $(".bg-home_bg").after('<svg width="0" height="0"><lineargradient id="blue-g" x1="1" x2="0" y1="1" y2="0"><stop stop-color="#3b82f6"offset="20%"></stop><stop stop-color="#2563eb"offset="50%"></stop><stop stop-color="#1d4ed8"offset="100%"></stop></lineargradient></svg>'), $(".AC-r2 > span").append('<b style="opacity:1;"><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>P</em></i><i class="out"><em>H</em></i><i class="out"><em>P</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>d</em></i><i class="out"><em>e</em></i><i class="out"><em>v</em></i><i class="out"><em>e</em></i><i class="out"><em>l</em></i><i class="out"><em>o</em></i><i class="out"><em>p</em></i><i class="out"><em>e</em></i><i class="out"><em>r</em></i></b>'), $(".AC-r2 > span").append('<b style="opacity:1;"><i class="out"><em>&nbsp;</em></i><i class="out"><em>C</em></i><i class="out"><em>+</em></i><i class="out"><em>+</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>d</em></i><i class="out"><em>e</em></i><i class="out"><em>v</em></i><i class="out"><em>e</em></i><i class="out"><em>l</em></i><i class="out"><em>o</em></i><i class="out"><em>p</em></i><i class="out"><em>e</em></i><i class="out"><em>r</em></i></b>'), $(".AC-r2 > span").append('<b style="opacity:1;"><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>&nbsp;</em></i><i class="out"><em>F</em></i><i class="out"><em>r</em></i><i class="out"><em>e</em></i><i class="out"><em>e</em></i><i class="out"><em>l</em></i><i class="out"><em>a</em></i><i class="out"><em>n</em></i><i class="out"><em>c</em></i><i class="out"><em>e</em></i><i class="out"><em>r</em></i></b>'),
    $(".tpb").click(function () {
            var swps = document.querySelector(".switch-page");
            swps.play();
            $(".tpb").removeClass("target-page"), $(this).toggleClass("target-page")
    }), $("[coda=nav]").click(function () {
            let e = ".lNAV1",
                t = ".lNAV2",
                n = ".lNAV3";
            $(this).toggleClass("openNAV"), $("nav").toggleClass("activeNAV"), anime({
                targets: e,
                translateY: [{
                    value: toggleNAV ? "-10px" : ["-10px", 0],
                    delay: toggleNAV ? 100 : 0,
                    duration: 100
                }],
                rotateZ: [{
                    value: toggleNAV ? 0 : -45,
                    delay: toggleNAV ? 0 : 80,
                    duration: 100
                }],
                easing: "linear"
            }), anime({
                targets: n,
                translateY: [{
                    value: toggleNAV ? "10px" : ["10px", 0],
                    delay: toggleNAV ? 100 : 0,
                    duration: 100
                }],
                rotateZ: [{
                    value: toggleNAV ? 0 : 45,
                    delay: toggleNAV ? 0 : 80,
                    duration: 100
                }],
                easing: "linear"
            }), anime({
                targets: t,
                opacity: toggleNAV ? 1 : 0,
                delay: toggleNAV ? 100 : 100,
                duration: 100
            }), toggleNAV ? toggleNAV = !1 : toggleNAV = !0
    }), $("img").attr("draggable", "false").on("contextmenu", function (e) {
            e.preventDefault();
    }), $(".songBTN").append('<audio loop volume="0.3"class="main-music invisible"><source src="assets/audio/music.mp3"type="audio/mpeg"></audio>');
    $(".songBTN").click(function () {
        var e = document.querySelector(".main-music");
        if (e.volume = .2, $(this).hasClass("songOFF")) {
            $(this).toggleClass("songON").toggleClass("songOFF"), equalizer("on"), e.play();
            var t = [{
                volume: e.volume,
                status: "playing",
                time: e.currentTime,
                duration: e.duration
            }]
        } else $(this).toggleClass("songOFF").toggleClass("songON"), equalizer("off"), e.pause(), t = [{
            volume: .2,
            status: "paused",
            time: e.currentTime,
            duration: e.duration
        }];
        console.table(t)
    }), $("body").append('<audio volume="1"class="switch-page invisible"><source src="assets/audio/switch-page.mp3"type="audio/mpeg"></audio>');
    $("body").append('<div class="alert-coda"></div>'), $("[t-p=l]").tooltip({
        placement: "left",
        animation: !0
    }), $("[t-p=r]").tooltip({
        placement: "right",
        animation: !0
    }), $("[t-p=t]").tooltip({
        placement: "top",
        animation: !0
    }), $("[t-p=b]").tooltip({
        placement: "bottom",
        animation: !0
    }), $("[form=contact]").validate({
        rules: {
            Name: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            Sobject: {
                required: !0,
                minlength: 3,
                maxlength: 20
            },
            Email: {
                required: !0,
                email: !0,
                maxlength: 60
            },
            Message: {
                required: !0,
                minlength: 10,
                maxlength: 240
            }
        },
        messages: {
            Name: "Please specify your name",
            Email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            }
        },
        invalidHandler: function (e, t) {
            var s, n = t.numberOfInvalids();
            if (n) s = n == 1 ? "You missed 1 field. It has been highlighted" : "You missed " + n + " fields. They have been highlighted", AlertCoda(s, "error");
            else return !0
        }
    }), $("[form=login]").validate({
        rules: {
            email: {
                required: !0,
                email: !0,
                maxlength: 60
            },
            password: {
                required: !0,
                minlength: 8,
                maxlength: 240
            }
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            password: {
                required: "Please enter your password"
            }
        },
        invalidHandler: function (e, t) {
            var s, n = t.numberOfInvalids();
            if (n) s = n == 1 ? "You missed 1 field. It has been highlighted" : "You missed " + n + " fields. They have been highlighted", AlertCoda(s, "error");
            else return !0
        }
    }), $("[form=register]").validate({
        rules: {
            name: {
                required: !0,
                minlength: 2,
                maxlength: 20
            },
            email: {
                required: !0,
                email: !0,
                maxlength: 60
            },
            password: {
                required: !0,
                minlength: 8,
                maxlength: 240
            },
            password_confirmation: {
                minlength: 8,
                equalTo: "#password"
            },
            role: {
                required: !0,
                minlength: 1,
                maxlength: 2
            }
        },
        messages: {
            name: "Please specify your name",
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            password: {
                required: "Please enter your password"
            },
            password_confirmation: {
                required: "Please provide password confirmation. Stay secure!",
                password_confirmation: "Oops! Password confirmation doesn't match. Double-check, please!"
            }
        },
        invalidHandler: function (e, t) {
            var s, n = t.numberOfInvalids();
            if (n) s = n == 1 ? "You missed 1 field. It has been highlighted" : "You missed " + n + " fields. They have been highlighted", AlertCoda(s, "error");
            else return !0
        }
    }), $('#signout').click(function () {
        $('#signout-form').submit();
    });
    validator.resetForm();
});
