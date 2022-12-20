let reports_array

async function get_reports() {
    fetch("/api/reports")
        .then(res => res.json())
        .then(res => (reports_array = res))
        .then(res =>alert('ивввввввввв'))
}

get_reports();


reports_array.forEach(function (item) {
    get_reports();
    let reports = document.querySelector('.reports');
    let report = reports.createElement('div');
    report.className = 'report';
    reports.append(report)
    report.innerText = `Отчет №${item.id}`
});



