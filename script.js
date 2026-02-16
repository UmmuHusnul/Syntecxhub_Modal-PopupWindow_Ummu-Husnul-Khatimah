const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("modalOverlay");
const form = document.querySelector("form");
const successAlert = document.getElementById("successAlert");

// OPEN
openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// CLOSE OUTSIDE
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});

// CLOSE ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.classList.remove("active");
    }
});

// FORM SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Close Modal
    overlay.classList.remove("active");

    // Form Reset
    form.reset();

    // Success Alert
    successAlert.classList.add("show");
    setTimeout(() => {
        successAlert.classList.remove("show");
    }, 3000);
});
