function $(elementId) {
    return document.getElementById(elementId);
}

$("btn").onclick = function () {

    const start = parseInt($("start_hour").value) * 60 + parseInt($("start_min").value);
    const stop = parseInt($("stop_hour").value) * 60 + parseInt($("stop_min").value);
    const tot = stop - start - parseInt($("break").value);

    const sup = tot - 7 * 60;
    const supHour = Math.trunc(sup / 60);
    const supMin = Math.round((sup / 60 - supHour) * 60);

    const toHour = Math.trunc(tot / 60);
    const toMin = Math.round((tot / 60 - toHour) * 60);

    $("result_tot").innerText = toHour + "H" + toMin;
    $("result_sup").innerText = supHour + "H" + supMin;
}