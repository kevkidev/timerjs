function $(elementId) {
    return document.getElementById(elementId);
}

function $int(elementId) {
    return parseInt($(elementId).value);
}

function calculateWorkTime() {

    const base = getMinutes($int("base_hour"), $int("base_min"));
    const start = getMinutes($int("start_hour"), $int("start_min"))
    const breakk = getMinutes($int("break_hour"), $int("break_min"))
    const stop = getMinutes($int("stop_hour"), $int("stop_min"))

    const tot = stop - start - breakk;
    const sup = getHours(tot - base);

    $("result_sup").innerText = "";
    $("result_tot").innerText = getHours(tot).toStringDuration;
    if (sup.hour < 0 || sup.min < 0) {
        $("result_sup").innerText = "-"
    }

    $("result_sup").innerText += Math.abs(sup.hour) + "h" + Math.abs(sup.min);

}


function calculateEndTime() {

    const base = getMinutes($int("base_hour"), $int("base_min"));
    const start = getMinutes($int("start_hour"), $int("start_min"))
    const breakk = getMinutes($int("break_hour"), $int("break_min"))

    const stop = start + breakk + base;
    const stopHours = getHours(stop);
    $("simu_end_hours").innerText = "Fin prévue à " + stopHours.toStringTime;
}


function calculateSleepTime() {

    const sleep = parseInt($("sleep_hour").value) * 60 + parseInt($("sleep_min").value);
    const wake = parseInt($("wake_hour").value) * 60 + parseInt($("wake_min").value);
    let tot = wake - sleep;
    if (tot <= 0) tot += 12;

    const toHour = Math.trunc(tot / 60);
    const toMin = Math.round((tot / 60 - toHour) * 60);

    $("bed_time").innerText = toHour + "h" + toMin;
}

function getHours(minutes) {
    const hour = Math.trunc(minutes / 60);
    const min = Math.round((minutes / 60 - hour) * 60);
    const minString = min < 10 ? "0" + min : min
    return {
        hour,
        min,
        toStringTime: hour + ":" + minString,
        toStringDuration: hour + "h" + minString,
    }
}

function getMinutes(hour, minutes) {
    return hour * 60 + minutes;
}

calculateWorkTime()