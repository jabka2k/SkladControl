form.addEventListener("submit", (e) => {
    const report = {
        product: product.value,
        partiya: partiya.value,
        sklad: sklad.value,
        description: description.value
    }
    fetch("/api/report", {
        method: "POST",
        body: JSON.stringify(report),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert("данные введены неверно");
            }
            else if (data.status === "success") {
                alert("Отчет создан");
                e.target.reset();
            }
        })
})