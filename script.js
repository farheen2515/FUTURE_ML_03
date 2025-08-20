let currentStep = 0;
const steps = document.querySelectorAll("#stepsList li");

function toggleContent(sectionId, btn) {
    let section = document.getElementById(sectionId);

    if (section.classList.contains("open")) {
        section.classList.remove("open");
        btn.textContent = btn.textContent.replace("Hide", "Show");
    } else {
        document.querySelectorAll('.content').forEach(el => el.classList.remove("open"));
        document.querySelectorAll('.btn').forEach(b => {
            if (b.textContent.includes("Hide")) {
                b.textContent = b.textContent.replace("Hide", "Show");
            }
        });

        section.classList.add("open");
        btn.textContent = btn.textContent.replace("Show", "Hide");
    }
}

function startCooking() {
    currentStep = 0;
    steps.forEach(s => s.style.opacity = "0.5");
    steps[0].style.opacity = "1";

    document.getElementById("progressContainer").style.display = "block";
    document.getElementById("progressBar").style.width = "0";
    document.getElementById("nextStepBtn").style.display = "inline-block";
    document.getElementById("steps").classList.add("open");
}

function nextStep() {
    if (currentStep < steps.length) {
        steps[currentStep].style.opacity = "1";
        const progress = ((currentStep + 1) / steps.length) * 100;
        document.getElementById("progressBar").style.width = progress + "%";
        currentStep++;
    }

    if (currentStep === steps.length) {
        alert("✅ Done! Your cake is ready 🎂✨");
        document.getElementById("nextStepBtn").style.display = "none";
    }
}

function toggleDark() {
    document.body.classList.toggle("dark");
    const btn = document.querySelector(".toggle-dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}
