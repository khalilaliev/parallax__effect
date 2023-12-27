const arr = ['moon', 'trees', 'santa', 'background', 'xmas__container', 'santa__box', 'card__box', 'card']
const elements = {}
arr.forEach(key => Object.assign(elements, {
    [key]: document.querySelector(`.${key}`)
}));

const secondSection = elements.card.offsetHeight
window.addEventListener('scroll', function (){
    let scroll = window.scrollY
    elements.moon.style.transform = `translateX(-50%) translateY(${scroll * 0.45}px)`
    elements.trees.style.transform = `translateY(${-scroll * 0.25}px)`
    elements.background.style.height = `${scroll * 0.25 + 3}px`
    elements['xmas__container'].style.transform = `translateY(${scroll * 0.45}px)`
    elements['santa__box'].style.transform = `translateX(-50%) translateY(${scroll * 0.15}px)`
    elements['card__box'].style.transform = `translateY(${(secondSection - scroll) * 0.55}px)`
})
