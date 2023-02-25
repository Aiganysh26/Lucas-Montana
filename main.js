const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
]

const gallery = document.querySelector('.images')
const overlayImg = document.querySelector('.overlay-img')
const modalImg = document.querySelector('.modal-img')
const closeBtn = document.querySelector('.close-btn-img')


const createImg = (src) => {
  const img = document.createElement('img')
  img.setAttribute('src', src)
  return img
}

pics.forEach((imgSrc) => {
  const imgForGallery = createImg(imgSrc)
  const imgForModal = createImg(imgSrc)

  imgForGallery.addEventListener('click', () => {
    overlayImg.classList.add('open-img')
    modalImg.append(imgForModal)
  })
  
    gallery.append(imgForGallery)
})
closeBtn.addEventListener('click', () => {
  overlayImg.classList.remove('open-img')
  modalImg.querySelector('img').remove()
})


const openBtn = document.querySelector('#openModal')
const closeModal = document.querySelector('#closeBtn')
const overlayForm = document.querySelector('.overlay-modal')

openBtn.addEventListener('click', () => {
  overlayForm.classList.add('open-modal-form')
})

closeModal.addEventListener('click', () => {
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