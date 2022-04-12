const smallCup = document.querySelectorAll('.cup-small');

const liter = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')


UpdateBigCup()
smallCup.forEach((cup, idx)=> {
    console.log(idx)
    cup.addEventListener('click', ()=> highLightCups(idx))
})
function highLightCups(idx){
    if(smallCup[idx].classList.contains('full') && !smallCup[idx].nextElementSibling.classList.contains('full')){
        idx--
    }{}
    smallCup.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full') 
        } 
    })
    UpdateBigCup()
}
function UpdateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCup.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
       
    }else{
        percentage.style.visibility='visible'
        percentage.style.height =` ${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
}
