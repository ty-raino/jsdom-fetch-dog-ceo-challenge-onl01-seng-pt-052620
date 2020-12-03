console.log('%c HI', 'color: firebrick')

function fetchImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(img)
    .then(resp => resp.json())
    .then(json => renderImg(json))
}