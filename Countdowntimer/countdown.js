const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway=document.querySelector(".giveaway")
  const deadline=document.querySelector(".deadline")
  const items=document.querySelectorAll(".deadline-format h4")
  // new Date(year, month, day, hours, minutes, seconds, milliseconds)

  const date=new Date(2022,8,9,8,30,0);
  const year=date.getFullYear();
  const hours=date.getHours();
  const minutes=date.getMinutes();
  const edate=date.getDate();
  let month=date.getMonth();
  let weekday=date.getDay();
  month=months[month]
  weekday=weekdays[weekday]
  giveaway.textContent=`Giveaway Ends on ${weekday}, ${edate} ${month} ${year}, ${hours}:${minutes}am`

  // future

  const futuretime=date.getTime();
   function getremainingtime(){
    const today = new Date().getTime();
    const t=futuretime-today;
    console.log(t)

    const oneday=24*60*60*1000;
    const onehour=60*60*1000;
    const onemin=60*1000;
    let days=t/oneday
   days=Math.floor(days)
   console.log(days)
   let hours=t/onehour;
   hours=Math.floor(hours)
   console.log(hours)
   }
    getremainingtime();