form.addEventListener("submit", () => {
    const register = {
        email: email.value,
        password: password.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert("данные введены неверно")
            }
            else if ((data.status === "success")){
                window.location.href = '/login'
            }
        })
})