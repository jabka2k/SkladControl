let report_id = window.location.search;
const id = report_id[1];

const form = document.querySelector('#form')

const product = document.querySelector('#product');
const partiya = document.querySelector('#partiya');
const sklad = document.querySelector('#sklad');
const description = document.querySelector('#description');
const btn = document.querySelector('.btn')

async function get_report() {
    let response = await fetch("/api/report")
    if (response.ok) {
        let json = await response.json();
        let report = json.find(item => item.id == id);
        product.value = report.product;
        partiya.value = report.partiya;
        sklad.value = report.sklad;
        description.value = report.description;

        if (report.status === "inProgress") {
            btn.innerHTML = "Проблема устранена"
        }
        else if (report.status === "done") {
            btn.innerHTML = "Проблема устранена"
            btn.disabled = true
        }

        form.addEventListener("submit", () => {
            if(report.status === "new") {
                const new_status = {
                    new_status: 'inProgress',
                    id: id
                }
                fetch("/api/change_status", {
                    method: "POST",
                    body: JSON.stringify(new_status),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                location.reload()
            }
            else if(report.status === "inProgress") {
                const new_status = {
                    new_status: 'done',
                    id: id
                }
                fetch("/api/change_status", {
                    method: "POST",
                    body: JSON.stringify(new_status),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                location.reload()
            }
        })
        }
    }

get_report()
