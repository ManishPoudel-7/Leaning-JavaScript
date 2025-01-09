const course = {
    coursename : "JavaScript",
    credits : 3,
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course                   //  both are correct
const {courseInstructor : instructor} = course

console.log(instructor);
