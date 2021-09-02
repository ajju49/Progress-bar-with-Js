const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }

    update()
})
 
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    } )

    const actives = document.querySelectorAll('.active')

    // console.log(actives.length, circles.length) shows active
    //  length and circles ,,,,
    // but wewant percentage(like 25%,50%,75% ,100% etc)

    // console.log((actives.length/ circles.length)*100 + '%')
    // here we got percentages 

    progress.style.width = ((actives.length-1)/ (circles.length-1)*100 + '%')
    // here we increasing progress bar by 33% 66% 99% etc

    if(currentActive===1){
        prev.disabled = true
    }
    else if(currentActive === circles.length) {
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false 
    }

}