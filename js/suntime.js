let url = "http://api.openweathermap.org/data/2.5/weather?q=Nevada,us&APPID=<app_id>&units=metric"
let req = new Request(url)
let json = await req.loadJSON()

function convertTime(unixTime, offset){
    let dt = new Date((unixTime + offset) * 1000)
    let h = dt.getHours()
    let m = "0" + dt.getMinutes()
    let t = h + ":" + m.substr(-2)
    return t
}

let sRise = convertTime(json.sys.sunrise, json.timezone)
let sSet = convertTime(json.sys.sunset, json.timezone)

alert(convertTime(sRise));
// Shows: 05:24

alert(convertTime(sSet));
// Shows: 19:55
