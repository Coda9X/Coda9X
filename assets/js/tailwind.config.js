tailwind.config = {
    theme: {
        extend: {
            backgroundImage: {
                gradient_bg: "url('/assets/images/svg/bg-1.svg')",
                home_bg: "url('/assets/images/home-bg.jpg')",
                pattern_bg2: "url('/assets/images/svg/bg-2.svg')",
                btn_1: "url('/assets/images/svg/btn-1.svg')"
            },
            screens: {
                "tall-m": {
                    raw: "(min-height:465px)"
                },
                Xmd: {
                    max: "525px"
                },
                Xsm2: {
                    max: "480px"
                },
                Xsm1: {
                    max: "425px"
                },
                Xsm: {
                    max: "375px"
                },
                Xcus1: {
                    max: "355px"
                },
                Xmicro: {
                    max: "320px"
                },
                SXmicro: {
                    min: "320px",
                    max: "355px"
                },
                Nsm: "375px"
            },
            boxShadow: {
                pager: "0 10px 50px 10px rgba(24,24,27,0.7)"
            },
            fontSize: {
                forH1: "calc(2.375em + 2.5vw)",
                forH2: "calc(1.375em + 2.5vw)",
                forH3: "calc(1.325em + 0.9vw)",
                forH4: "calc(1.275em + 0.3vw)"
            },
            flex: { 0: "0 0 auto" },
            margin: {
                row: "calc(-0.5*1.5rem)"
            },
            padding: {
                row: "calc(1.5rem*0.5)"
            },
            zIndex: {
                1: "1",
                5: "5"
            }
        },
        fontFamily: {
            body: "Vazirmatn,sans-serif",
            body2: "Loretto,sans-serif",
            title: "Viga,sans-serif"
        }
    },
    plugins: [
        function ({ addVariant: e }) {
            e("child", "&>*"),
                e("child-hover", "&>*:hover"),
                e("child-after", "&>*:after"),
                e("Gchild", "&>*>*")
        }
    ]
}
