const submit = document.querySelector("#submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    await fetch("/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
  } catch (error) {
    console.log(error);
  }
});
