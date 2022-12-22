let users = document.querySelector('.users');

async function get_users() {
    let response = await fetch("/api/users")
    if(response.ok) {
        let json = await response.json();
        json.forEach(function (item) {
            let user = document.createElement('form');
            user.className = "user"

            let id_number = document.createElement('p')
            id_number.innerHTML = `id ${item.id}`

            let control = document.createElement('input')
            control.name = "role"
            control.type = "radio"
            control.value = "control"
            control.id = `control_${item.id}`
            let control_label = document.createElement('label')
            control_label.for = `control_${item.id}`
            control_label.innerHTML = "сотрудник отдела качества"

            let sklad = document.createElement('input')
            sklad.name = "role"
            sklad.type = "radio"
            sklad.value = "sklad"
            sklad.id = `sklad_${item.id}`
            let sklad_label = document.createElement('label')
            sklad_label.for = `sklad_${item.id}`
            sklad_label.innerHTML = "работник склада"

            let div_btn = document.createElement('div')
            div_btn.className = "input-group role_btn"
            let btn = document.createElement('button')
            btn.name="submit"
            btn.className="btn"
            btn.innerHTML = "сохранить"

            users.append(user)
            user.onsubmit = "return false"
            user.append(id_number)
            user.append(control)
            user.append(control_label)
            user.append(sklad)
            user.append(sklad_label)
            user.append(div_btn)
            div_btn.append(btn)
        })
    }
}

get_users()

window.onload = function() {
    let form = document.querySelectorAll('form');
    form.onsubmit = "return false"
}