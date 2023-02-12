const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
]

for (let i = 0; i < pics.length; i++) {
    const img = document.createElement('img')
    img.setAttribute('src', `${pics[i]}`)

    img.addEventListener('click', (e) => {
      overlay.classList.add('open-img')
    const modalImg = document.createElement('img')
    modalImg.setAttribute('src', e.target.getAttribute('src'))
    modalImg.className = 'modal-img'
    document.querySelector('.overlay-img').append(modalImg)

  closeBtnImg.addEventListener('click', () => {
    overlay.classList.remove('open-img')
    modalImg.remove()
 })
    })
    document.querySelector('.images').append(img) 
}

const wrapper = document.createElement('div')
div.className = 'image-container'
const img = document.createElement('img')
wrapper.append(img)

const images = document.querySelector('.images')
const overlay = document.querySelector('.overlay-img')
const closeBtnImg = document.querySelector('.close-btn-img')
const modal = document.querySelector('.modal')





const openBtn = document.querySelector('#openModal')
const closeBtn = document.querySelector('#closeBtn')
const overlayForm = document.querySelector('.overlay-modal')

openBtn.addEventListener('click', () => {
  overlayForm.classList.add('open-modal-form')
})

closeBtn.addEventListener('click', () => {
  overlayForm.classList.remove('open-modal-form')
})


const sendBtn = document.querySelector('.send')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const textarea = document.querySelector('.modal-textarea')

sendBtn.addEventListener('click', () => {
  let getMessage = {
    name: name.value,
    email: email.value,
    message: textarea.value
  }
  console.log(getMessage)
})










// overlay.addEventListener('click', () => {
//   overlay.classList.remove('open')
// })

// modal.addEventListener('click', (e) => {
//   e.stopPropagation()
// })

// const images = document.querySelector('.images')
// const overlay = document.querySelector('.overlay')
// const modal = document.querySelector('.modal')
// const closeBtn = document.querySelector('button')

// const createImg = (src) => {
//   const img = document.createElement('img')
//   img.setAttribute('src', src)
//   return img
// }


// pics.forEach((imgSrc) => {
//   const imgForGallery = createImg(imgSrc)
//   const imgForModal = createImg(imgSrc)

//   imgForGallery.addEventListener('click', () => {
//     overlay.classList.add('open')
//     modal.append(imgForModal)
//   })

//   imgForGallery.append(imgForGallery)
// })

// closeBtn.addEventListener('click', () => {
//   overlay.classList.remove('open')
//   modal.querySelector('img').remove()
// })




