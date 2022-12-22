let reports = document.querySelector('.reports');

async function get_reports() {
    let response = await fetch("/api/reports")
    if(response.ok) {
        let json = await response.json();
        json.forEach(function (item) {
            let report = document.createElement('div');
            let link = document.createElement('a')
            report.className = 'report';
            link.innerHTML = `Отчет №${item.id}`;
            link.href = `/report?${item.id}`;
            reports.append(report)
            report.append(link)
        })
    }
}

get_reports()


