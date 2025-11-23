// ---------- ANIMATE SKILL BARS ----------
window.addEventListener("load", () => {
    document.querySelectorAll(".bar").forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
});

// ---------- PROJECT CARD CLICK ----------
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;
        if (link) window.open(link, "_blank"); // opens in new tab
    });
});

// ---------- CONTACT FORM VALIDATION ----------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        let inputName = document.getElementById("name").value.trim();
        let inputEmail = document.getElementById("email").value.trim();
        let inputMessage = document.getElementById("message").value.trim();
        let box = document.getElementById("formMessage");

        if (!inputName || !inputEmail || !inputMessage) {
            box.textContent = "❌ All fields are required!";
            box.style.color = "red";
            return;
        }

        localStorage.setItem("formName", inputName);
        localStorage.setItem("formEmail", inputEmail);
        localStorage.setItem("formMessage", inputMessage);

        box.textContent = "✔ Message saved! Redirecting...";
        box.style.color = "lightgreen";

        setTimeout(() => {
            window.location.href = "form-details.html";
        }, 800);
    });
}

// ---------- THEME TOGGLE ----------
const themeBtn = document.getElementById("themeToggle");
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

// ---------- IMAGE SLIDER ----------
let index = 0;
let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
}

// Show first slide on load
showSlide(index);

// ---------- BACK TO TOP BUTTON ----------
(function () {
    const backBtn = document.getElementById('backTop');
    if (!backBtn) return;

    const showAfter = 300;

    window.addEventListener('scroll', () => {
        if (window.scrollY > showAfter) backBtn.classList.add('visible');
        else backBtn.classList.remove('visible');
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (window.scrollY > showAfter) backBtn.classList.add('visible');
})();
