const dummy = (blogs) => {
    return 1
}
//Reduce takes in a callback function and initial values. 
// we coudl do in palce liek with arrwo fucntion but also we 
// can write definitaion of a function and pass it in
const totalLikes = (blogs) => {
    //In reduce, the second parameter of the callback is always the current item of the array
    return blogs.reduce((sum, curValue) =>
        sum + curValue.likes, 0)
}
// reduce take arrya to single value
// first paramter get saved every 
const favoriteBlog = (blogs) => {
    return blogs.reduce((curBig, b) =>
        b.like > curBig.like ? b : curBig
    )
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}