document.querySelectorAll("a").forEach(a => a.addEventListener("mouseover", () => a.classList.add("border-bottom")))

document.querySelectorAll("a").forEach(a => a.addEventListener("mouseout", () => a.classList.remove("border-bottom")))

