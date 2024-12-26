// So here we are given milliseconds from 1 Jan 1970 so we convert date from modifying that


let myDate = new Date()
// console.log(myDate)

// console.log(typeof myDate)
// console.log("Normal Date  : " , myDate)
// console.log(`To String : ${myDate.toString()}`)
// console.log(`To Date String : ${myDate.toDateString()}`)
// console.log(`To Time String : ${myDate.toTimeString()}`)
// console.log(`To Iso String : ${myDate.toISOString()}`)
console.log(`To Locale String : ${myDate.toLocaleString()}`)
console.log(myDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'GMT'
}))     // this is used to make the date more customised according to our own will
// console.log(`TO Locale Time String : ${myDate.toLocaleTimeString()}`)
// console.log(`To UTC String : ${myDate.toUTCString()}`)

// let newDate = new Date(2024 , 0 , 19)       // Months start from 0
// console.log(newDate);
// console.log(newDate.toDateString());

// let createdDate = new Date(2025 , 10 , 19 , 5 , 10 , 2)
// console.log(createdDate.toLocaleString())

// let specificDate = new Date("2024-01-01")
// console.log(specificDate.toDateString());

// let timestamp = Date.now()
// console.log(timestamp)
// console.log(specificDate.getTime())

// console.log(Date.now()/1000)        // to convert it into Seconds instead of milliseconds   
// console.log(Math.round(Date.now()/1000))

let newDate= new Date()
console.log(newDate.getTime())

console.log(newDate.getMonth()+ 1 )
/*

Output 
2024-12-26T14:20:39.173Z
object
Normal Date  :  2024-12-26T14:20:39.173Z
To String : Thu Dec 26 2024 19:50:39 GMT+0530 (India Standard Time)
To Date String : Thu Dec 26 2024
To Time String : 19:50:39 GMT+0530 (India Standard Time)
To Iso String : 2024-12-26T14:20:39.173Z
To Locale String : 12/26/2024, 7:50:39 PM
TO Locale Time String : 7:50:39 PM
To UTC String : Thu, 26 Dec 2024 14:20:39 GMT
*/