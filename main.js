document.getElementById("card").addEventListener("click", () => {
    let card = document.getElementById("card")
    card.classList.toggle("close")
    card.classList.toggle("open")

    if (card.classList[1] === 'open') {
        setTimeout(() => {
            let elems = document.querySelectorAll(".card__envelop");            
            elems.forEach(el => {
                el.classList.remove("up")
                if (!el.classList.contains("down")) {
                    el.classList.toggle("down")
                }
            })
        }, 400);
    }
    if (card.classList[1] === 'close') {

        setTimeout(() => {
            let elems = document.querySelectorAll(".card__envelop");
            elems.forEach(el => {
                el.classList.remove("down")
                if (!el.classList.contains("up")) {
                    el.classList.add("up")
                }
            })
        }, 200);
    }
})