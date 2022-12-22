let users = document.querySelector('.users');



async function get_users() {
    let response = await fetch("/api/users")
    if(response.ok) {
        let json = await response.json();
        json.forEach(function (item) {
            if(item.role !== 1) {

                let user = document.createElement('form');
                user.className = "user"
                let id_number = document.createElement('p')
                id_number.innerHTML = `id ${item.id}`

                let control = document.createElement('input')
                control.name = "role"
                control.type = "radio"
                control.value = "control"
                control.id = `control_${item.id}`
                if(item.role == 2) {
                    control.checked = true;
                }
                let control_label = document.createElement('label')
                control_label.for = `control_${item.id}`
                control_label.innerHTML = "сотрудник отдела качества"

                let sklad = document.createElement('input')
                sklad.name = "role"
                sklad.type = "radio"
                sklad.value = "sklad"
                sklad.id = `sklad_${item.id}`
                if(item.role == 3) {
                    sklad.checked = true;
                }
                let sklad_label = document.createElement('label')
                sklad_label.for = `sklad_${item.id}`
                sklad_label.innerHTML = "работник склада"

                let div_btn = document.createElement('div')
                div_btn.className = "input-group role_btn"
                let btn = document.createElement('button')
                btn.name = "submit"
                btn.className = "btn"
                btn.innerHTML = "сохранить"

                users.append(user)
                user.addEventListener('submit', () => {
                    event.preventDefault()
                    if(user.elements['role'].value === 'sklad'){
                        const new_role = {
                            role: 2,
                            id: item.id
                        }
                        fetch("/api/change_role", {
                            method: "POST",
                            body: JSON.stringify(new_role),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }
                    else {
                        const new_role = {
                            role: 3,
                            id: item.id
                        }
                        fetch("/api/change_role", {
                            method: "POST",
                            body: JSON.stringify(new_role),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }
                })
                user.append(id_number)
                user.append(control)
                user.append(control_label)
                user.append(sklad)
                user.append(sklad_label)
                user.append(div_btn)
                div_btn.append(btn)
            }
        })
    }
}

get_users()

