document.addEventListener("DOMContentLoaded", () => {
    function navMenu() {
        const header = document.querySelector(".section-header"),
            subItem = header.querySelectorAll(".sub-menu__item"),
            navLink = header.querySelectorAll(".nav-menu__link"),
            body = document.querySelector("body");

        function createMask() {
            const div = document.createElement("div");
            div.classList.add("nav-mask");
            body.append(div);

            div.addEventListener("mouseover", (e) => {
                navLink.forEach(elem => elem.classList.remove("active"));
                subItem.forEach(elem => elem.classList.remove("active"));
                div.remove();
            })
        }

        subItem.forEach(el => {
            el.childNodes.forEach(item => {
                if (item.nodeName !== "#text" && item.classList.contains("sub-menu")) {
                        el.classList.add("arr")
                }
            })
        })

        header.addEventListener("mouseover", (event) => {
            const target = event.target;

            if (target.matches(".nav-menu__link") && !target.classList.contains("active")) {
                navLink.forEach(elem => elem.classList.remove("active"));
                target.classList.add("active");
                if (!document.querySelector(".nav-mask")) {
                    createMask();
                }
            }

            navLink.forEach(elem => {
                if (!target.closest(".nav-menu") && elem.classList.contains("active")) {
                    subItem.forEach(elem => elem.classList.remove("active"));
                    elem.classList.remove("active");
                    document.querySelector(".nav-mask").remove();
                }
            })

            if (target.matches("a.sub-menu__link")) {
                target.closest(".sub-menu").querySelectorAll(".sub-menu__item").forEach(elem => {
                    elem.classList.remove("active");
                });
                target.parentElement.classList.add("active");
            }
        })
    }

    navMenu();
});