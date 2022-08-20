let hy = document.querySelector("#hy");
let hm = document.querySelector("#hm");
let hd = document.querySelector("#hd");
let gy = document.querySelector("#gy");
let gm = document.querySelector("#gm");
let gd = document.querySelector("#gd");

gy.textContent = new Date().getFullYear()
gm.textContent = new Date().getMonth() +1
gd.textContent = new Date().getDate()
console.log(new Date().getMonth())
let _date = new Date()
_date = GetHijriDate(_date)
hy.textContent = _date[0]
hm.textContent = _date[1]
hd.textContent = _date[2]>3?_date[2]-2:_date[2]


function GetHijriDate(dateTime) {
    var dayOfYear = Math.floor((dateTime - new Date(dateTime.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    var hijriDate = ((dateTime.getFullYear() - 621.5643) * 365.24225 + dayOfYear) / 354.36707
    var hijriYear = Math.floor(hijriDate)
    var hijriMonth = Math.ceil((hijriDate - Math.floor(hijriDate)) * 354.36707 / 29.530589)
    var hijriDay = Math.floor((hijriDate - Math.floor(hijriDate)) * 354.36707 % 29.530589)
    return [hijriYear, hijriMonth , hijriDay]
}
let eaqule = true;
let flag=false;


let tomorrow  = new Date();
const addOneDayH= ()=>{
    _date = GetHijriDate(tomorrow)
    hy.textContent = _date[0]
    hm.textContent = _date[1]
    hd.textContent = _date[2] -2
    return _date[0];
}
const addOneDayG=()=>{
    tomorrow.setDate(tomorrow.getDate()+360);
    gy.textContent = tomorrow.getFullYear()
    gm.textContent = tomorrow.getMonth()
    gd.textContent = tomorrow.getDay()
    return tomorrow.getFullYear();
}
document.querySelector("#button").addEventListener("click",()=>{
    document.querySelector("#text").style.display="block";
    let start = setInterval(()=>{
        let yearOfG = addOneDayG();
        let yearOfH = addOneDayH();
        if (yearOfG == yearOfH){
            clearInterval(start);
            document.querySelector("#meetYear").textContent = yearOfG;
            document.querySelector("#meetYear").style.display="inline-block";
        }
    },1)
})
