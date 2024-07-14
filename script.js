
let  clock =()=>{

    let date = new Date()
    
    let month_mims = date.getMonth()
    let day= date.getDay()
    let hours = date.getHours()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    
    if(hours<9)hours="0"+hours
    if(minutes<9)minutes="0"+hours
    if(seconds<10)seconds="0"+seconds
    
    
    let month =["ян","феб","март","апр","май","июнь","июль"]
    console.log()
    // let date_time = 'сегоднешнее  ' +  day  +month[month_mims]+ "- " + 'час' +hours+ ":"+minutes+":"+seconds
    
    let date_time =      +hours+ ":"+minutes+":"+seconds
    // 
    let elemrnt = document.getElementById('time').innerHTML=date_time
    console.log(elemrnt)
    
    
    setTimeout(()=>{
        clock()
    
    },1000);
    
    }
    clock()
    