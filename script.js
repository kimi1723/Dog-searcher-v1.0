const button = document.querySelectorAll('button');
const image = document.querySelectorAll('img');
const URL = 'https://dog.ceo/api/breeds/image/random';
let i;

const getImg = () => {
  axios
    .get(URL)
    .then((res) => image[i].setAttribute('src', res.data.message))
    .catch((err) => console.error(err));
};



button.forEach((btnClicked) =>
  btnClicked.addEventListener('click', (e) => {
    if (e.target.classList[0] === '1') {
      i = 0;
    } else if (e.target.classList[0] === '2') {
      i = 1;
    } else if (e.target.textContent === '3') {
      i = 2;
    }
    getImg()
  })

);
