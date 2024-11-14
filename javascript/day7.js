 let date = new Date ()

 console.log(date);

 console.log(
    date.getFullYear()
 );
 
 console.log(
    date.getMonth()
 );
 
 console.log(
    date.getDate()
 );
 
 console.log(
    date.getDay()
 );

 console.log(
    date.getMilliseconds()
 );

//  timestamp, jan 1 1970
 let timestamp = date.getTime()
console.log(timestamp);

let date2 = new Date(1730297514104)
console.log(date2);

// Timeout, interval 

setTimeout(()=>{
    console.log('This is what i want delayed before showing');
    }, 3000)


    const interval1 = setInterval(()=>{
        console.log('interval one');        
    }, 4000)

    setTimeout(()=>{
        clearInterval(interval1)
        console.log('Interval one has been cleared');        
    }, 10000);

    // classwork
    let myDate = new Date ()

    setTimeout(()=>{
        console.log(myDate);
        }, 3000)