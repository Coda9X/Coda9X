$("[bot-preview]").click(function () {
    let jsonString = $(this).attr("bot-preview");
    let jsonObject = JSON.parse(jsonString);
    let formattedData = `<p>name: ${jsonObject.name}, language: ${jsonObject.language}</p>`;
    let newParagraph = $(".bot-popup").append(formattedData);
    $(".pb").append(newParagraph);
    popupBotCard("show");
    // animation.play;
    // animation.reverse
}), $("[coda=popup-btn]").click(function () {
    popupBotCard("close");
});

function popupBotCard(status) {
    if (status === "show") {
        $(document).ready(function () {
            const botPopup = $(".bot-popup");
            const botChildren = botPopup.children();
            anime({
                targets: botPopup[0],
                easing: 'easeInExpo',
                keyframes: [
                    { width: '500px', delay: 10, duration: 200 },
                    { height: '600px', delay: -10, duration: 400 },
                    { padding: "10px 16px 10px 16px", delay: 0, duration: 0 },
                    { boxShadow: "0 10px 50px 10px rgba(24,24,27,0.7)", delay: -400, duration: 800, easing: 'easeInCubic' }
                ]
            }), anime({
                targets: botChildren.toArray(),
                opacity: 1,
                easing: 'easeInCubic',
                delay: 800,
                duration: 400,
            });
        });
    } else if (status === "close") {
        $(document).ready(function () {
            const botPopup = $(".bot-popup");
            const botChildren = botPopup.children();
            anime({
                targets: botChildren.toArray(),
                opacity: 0,
                easing: 'easeInCubic',
                delay: 10,
                duration: 300,
            }), anime({
                targets: botPopup[0],
                easing: 'easeInExpo',
                keyframes: [
                    { boxShadow: "0 0 50px 0 rgba(0,0,0,0)", delay: 0, duration: 300, easing: 'easeInCubic' },
                    { padding: 0, delay: 0, duration: 0 },
                    { height: '2px', delay: -300, duration: 400 },
                    { width: 0, delay: 10, duration: 200 },
                ]
            });
        });
    } else {
        throw new Error("Error: can't play song");
    }
}