function validateForm() {
  const out = document.getElementById("output");
  out.className = "";
  out.style.display = "none";

  const user = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const p1 = document.getElementById("pass1").value;
  const p2 = document.getElementById("pass2").value;
  const date = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const terms = document.getElementById("terms").checked;
  const plan = document.querySelector('input[name="plan"]:checked').value;

  try {
    if (!user || !email || !p1 || !p2 || !date || !gender || !terms) {
      throw new Error(
        "Błąd: Wszystkie pola muszą być wypełnione i regulamin zaakceptowany!",
      );
    }

    if (!/^[a-zA-Z0-9]+$/.test(user)) {
      throw new Error(
        "Błąd: Nazwa użytkownika może zawierać tylko litery i cyfry!",
      );
    }

    if (p1.length < 8 || !/\d/.test(p1)) {
      throw new Error(
        "Błąd: Hasło musi mieć min. 8 znaków i min. jedną cyfrę!",
      );
    }

    if (p1 !== p2) {
      throw new Error("Błąd: Hasła nie są identyczne!");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Błąd: Niepoprawny format adresu e-mail!");
    }

    const bDay = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - bDay.getFullYear();
    const m = today.getMonth() - bDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bDay.getDate())) {
      age--;
    }

    if (age < 18) {
      throw new Error("Błąd: Musisz mieć ukończone 18 lat!");
    }

    const formattedDate = date.split("-").reverse().join(".");
    const stars = "*".repeat(p1.length);

    out.innerHTML = `<b>Nazwa użytkownika:</b> ${user}
            <b>Hasło:</b> ${stars}
            <b>Adres e-mail:</b> ${email}
            <b>Data urodzenia:</b> ${formattedDate}
            <b>Płeć:</b> ${gender}
            <b>Wybrana wersja:</b> ${plan}`;

    out.classList.add("success");
    out.style.display = "block";
  } catch (e) {
    out.innerHTML = e.message;
    out.classList.add("error");
    out.style.display = "block";
  }
}
