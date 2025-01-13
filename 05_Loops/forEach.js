coding =["r" , "java" , "cpp" , "Python", "javascript"]

// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item) => {
//     console.log("Arrow" , item .);
    
// })

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)

// coding.forEach((item , index ,arr) =>{
//     console.log(item , index , coding)
// })

const myCoding = [
    {
        language : "JavaScript",
        fileName : "js"
    },{
        
        language : "Java",
        fileName : "java"
    },{
        
        language : "Python",
        fileName : "py"
    }
]

myCoding.forEach(function(item){
    // console.log(item.language)
})

myCoding.forEach((i) => {
    // console.log(i.fileName)
})

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []

myNums.forEach((nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
})

// console.log(newNums);                                   // This can be done using filter also as below


const a =  myNums.filter( (num) =>{ 
   return num > 4
    
})
// console.log(a);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const user = books.filter( (i) => 
    i.genre === "Fiction"
   
)

const publish =  books.filter(  (i) => {
   return i.publish>2000 & i.genre ==="Science"

})
  console.log(publish);
  