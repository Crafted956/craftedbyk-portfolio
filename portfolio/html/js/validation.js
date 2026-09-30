
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const project = document.querySelector("#project");

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === "" ||
    project.value.trim() === ""
  ) {
    e.preventDefault();
    alert("Please fill in all fields.");
    return;
  }

  if (!email.value.includes("@")) {
    e.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }

  if (phone.value.length < 10) {
    e.preventDefault();
    alert("Please enter a valid phone number.");
  }
});