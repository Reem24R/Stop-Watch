
let displaytimer=document.getElementById('displaytimer');
let [sec,hours,mins]=[0,0,0];
let timer=null;
function st()
{
    sec++;
    if(sec==60)
    {
        mins++;
        sec=0;
    }
    if(mins==60)
    {
        hours++;
        mins=0;
    }
    let h=hours<10? "0"+hours : hours;
    let m=mins<10? "0"+mins : mins;
    let s=sec<10? "0"+sec : sec;
    displaytimer.innerHTML=h + " : "+ m+" : "+s;
}
function watchstart()
{
    if(timer!=null)
    {
        clearInterval(timer);
    }
    timer=setInterval(st,1000);
}
function watchstop()
{
    clearInterval(timer);
}
function reset()
{

  clearInterval(timer);
  [sec,hours,mins]=[0,0,0];
  displaytimer.innerHTML="00:00:00";
}