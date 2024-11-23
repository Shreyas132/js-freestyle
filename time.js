const time = (i) =>{
    if ( i< 10) {
        i = '0' + i
    }
    return i
}
const starttime = () =>{
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()

    m = time(m)
    s = time(s)
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s
    t = setTimeout(()=>{
        starttime()
    },500)
}
starttime()