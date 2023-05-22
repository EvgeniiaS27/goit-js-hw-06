const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

galleryRef.style.display = 'flex';
galleryRef.style.gap = '16px';
galleryRef.style.justifyContent = 'pace-around';
galleryRef.style.listStyle = 'none';

console.log(galleryRef);

const makeImages = ({ url, alt }) => {
  return `<li> <img src="${url}" alt="${alt}" width="250" height="150"> </li>`;
};

const makeGalleryImages = images.map(makeImages).join('');

console.log(makeGalleryImages);

galleryRef.insertAdjacentHTML('afterbegin', makeGalleryImages);
