form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert("данные введены неверно")
            }
            else if ((data.status === "success")){
                window.location.href = '/';
            }
        })
})