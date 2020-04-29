






window.onload = function () {
    var newName = changeString('Vered'); // David
    document.getElementById('mySection').innerHTML = '<h1>' + newName + '</h1>';
}


function changeString(sName) {
    if (sName.indexOf('a') != -1) {
        // NOTE: string.substring(start, end)
        sName = 'hello ' + sName.substring(0, 1);
    } else {
        sName = 'goodbye ' + sName.substring(sName.length - 1, sName.length);
    }
    // console.log(sName)
    return sName
}
