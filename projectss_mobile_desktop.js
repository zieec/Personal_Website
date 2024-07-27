/* eslint-disable no-multi-str */
/** ****** Projects techs ********* */
const technologiesUsed = {
  htmlCss: 'Web Development',
  ruby: 'IoT',
  JavaScript: 'Networking',
};

function techStyle(tech) {
  tech.setAttribute('style', '\
  display: flex;\
  align-items: center;\
  justify-content: center;\
  padding: 4px 10px;\
  font-size: 9px;\
  font-weight: 300;\
  margin-right: 10px;\
  border: solid 0.5px #1A2236;\
  color: #1A2236;');
  return tech;
}

/** *** Technologies list *** */
const tech1 = document.createElement('li');
tech1.innerHTML = technologiesUsed.htmlCss;
techStyle(tech1);

const tech2 = document.createElement('li');
tech2.innerHTML = technologiesUsed.ruby;
techStyle(tech2);

const tech3 = document.createElement('li');
tech3.innerHTML = technologiesUsed.JavaScript;
techStyle(tech3);

const techs = document.createElement('ul');
techs.setAttribute('style', '\
list-style-type: none;\
display: flex;\
width: 93%;\
margin-bottom: 18px;\
border: none;\
height: auto;');

techs.appendChild(tech1);
techs.appendChild(tech2);
techs.appendChild(tech3);

/** ****** Images library: Found all modal's images here ********* */
const images = {
  image1: document.createElement('img'),
  image2: document.createElement('img'),
  image3: document.createElement('img'),
  image4: document.createElement('img'),
};

function imagesStyle(img, isActive = false) { // the default display of each big image is set to none
  img.setAttribute('style', isActive ? '\
  width: 70%;\
  height: auto;\
  margin: auto;\
  transition: all 0.5s ease;' : '\
  width: 15%;\
  height: auto;\
  margin: auto;\
  transition: all 0.5s ease;');
  img.setAttribute('class', 'img-to-slide'); // This class will be used to create the slider in the opening function
  return img;
}

const img1 = images.image1; // The first big image
img1.setAttribute('src', './Sertifikat/mikrotik1.jpg');
imagesStyle(img1, true); // set first image as active initially

const img2 = images.image2; // The second big image
img2.setAttribute('src', './Sertifikat/data1.png');
imagesStyle(img2);

const img3 = images.image3; // The third big image
img3.setAttribute('src', './Sertifikat/html1.jpg');
imagesStyle(img3);

const img4 = images.image4; // The fourth big image
img4.setAttribute('src', './images/satrioterminasi.jpg');
imagesStyle(img4);

const imgArray = [img1, img2, img3, img4];
let currentImgIndex = 0;

/** ************ The button allowing to slide images ************* */
function slideButtonStyle(elem, position) {
  elem.setAttribute('style', '\
  width: 35px;\
  height: 50px;\
  cursor: pointer;\
  font-size: 30px;\
  font-weight: bold;\
  color: navy;\
  display: flex;\
  align-items: center;\
  justify-content: center;\
  text-align: center;\
  position: absolute;\
  z-index: 2;\
  ' + position);
  return elem;
}

const slideLeft = document.createElement('span');
slideLeft.innerHTML = '<'; // Karakter untuk panah kiri
slideButtonStyle(slideLeft, 'left: 10px;'); // Posisi kiri

const slideRight = document.createElement('span');
slideRight.innerHTML = '>'; // Karakter untuk panah kanan
slideButtonStyle(slideRight, 'right: 10px;'); // Posisi kanan

const slideButtonContainer = document.createElement('div');
// eslint-disable-next-line no-multi-str
slideButtonContainer.setAttribute('style', '\
width: 100%;\
height: auto;\
position: relative;\
z-index: 1;\
top: 100px;\
display: flex;\
flex-direction: row;\
justify-content: space-between;\
align-items: center;');
slideButtonContainer.appendChild(slideLeft);
slideButtonContainer.appendChild(slideRight);

function showCurrentImage() {
  imgArray.forEach((img, index) => {
    imagesStyle(img, index === currentImgIndex);
  });

  // Maintain size but hide slideLeft on the first image and slideRight on the last image
  slideLeft.style.display = currentImgIndex === 0 ? 'none' : 'flex'; // Hide slideLeft on the first image
  slideRight.style.display = currentImgIndex === imgArray.length - 1 ? 'none' : 'flex'; // Hide slideRight on the last image
}


// ...

slideLeft.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
  showCurrentImage();
});

slideRight.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % imgArray.length;
  showCurrentImage();
});

showCurrentImage(); // Show the initial image


/** ****** Texts library ********* */
const texts = {
  title: 'My Portofolio',

  text1: ' In order to continue to improve, hone and prove the skills that I have, I have taken part in training and certification several times. ',

  text2: ' Mikrotik training by IDN.ID, Data Analysis Training by MySkill x Delloite,  Web Development training by Edspert.Id, Fiber Optic Academy by Telkom Indonesia. ',
};

const projectName = document.createElement('h2');
projectName.innerHTML = texts.title;
projectName.setAttribute('style', '\
width: 93%;\
height: auto;\
font-size: 20px;\
font-weight: 700;\
color: #1A2236;\
margin-bottom: 23px;');

function textsStyle(txt) {
  txt.setAttribute('style', '\
  font-family: "Poppins", sans-serif;\
  color: #1A2236;\
  font-size: 12px;\
  line-height: 21px;\
  font-weight: 400;\
  max-width: 600px;\
  height: auto;\
  margin: auto;\
  margin-block-start: 10px;\
  margin-block-end: 0;');
  return txt;
}

const txt1 = document.createElement('p');
txt1.innerHTML = texts.text1;
textsStyle(txt1);

const txt2 = document.createElement('p');
txt2.innerHTML = texts.text2; // Fixed bug where the text2 was being set to txt1
textsStyle(txt2);

/** ***************** Project buttons ********************* */
const projectButtons = {
  button1: 'Home',
  // Hapus ikon dari objek projectButtons
};

function buttonLinksStyle(txt) {
  txt.setAttribute('style', `
    width: 170px; /* Lebar tombol */
    height: 50px; /* Tinggi tombol */
    color: white; /* Warna teks */
    font-size: 18px; /* Ukuran font */
    background: #1A2236; /* Warna latar belakang navy blue */
    font-weight: 500; /* Ketebalan font */
    border: 2px solid #1A2236; /* Border navy blue */
    border-radius: 25px; /* Sudut membulat */
    display: flex;
    align-items: center; /* Pusatkan teks secara vertikal */
    justify-content: center; /* Pusatkan teks secara horizontal */
    cursor: pointer;
    margin: auto; /* Pusatkan tombol secara horizontal dalam kontainer */
    transition: all 0.3s ease; /* Transisi halus untuk efek hover */
    padding: 0 15px; /* Ruang di dalam tombol */
    text-align: center; /* Pusatkan teks dalam kontainer */
  `);

  // Tambahkan efek hover
  txt.addEventListener('mouseover', () => {
    txt.setAttribute('style', `
      width: 170px;
      height: 50px;
      color: #1A2236; /* Teks navy blue */
      font-size: 18px;
      background: white; /* Latar belakang putih */
      font-weight: 500;
      border: 2px solid #1A2236; /* Border navy blue */
      border-radius: 25px; /* Sudut membulat */
      display: flex;
      align-items: center; /* Pusatkan teks secara vertikal */
      justify-content: center; /* Pusatkan teks secara horizontal */
      cursor: pointer;
      margin: auto;
      transition: all 0.3s ease;
      padding: 0 20px; /* Tambahkan padding pada hover */
      text-align: center; /* Pusatkan teks dalam kontainer */
    `);
  });

  txt.addEventListener('mouseout', () => {
    txt.setAttribute('style', `
      width: 170px;
      height: 50px;
      color: white; /* Warna teks */
      font-size: 18px;
      background: #1A2236; /* Warna latar belakang navy blue */
      font-weight: 500;
      border: 2px solid #1A2236; /* Border navy blue */
      border-radius: 25px; /* Sudut membulat */
      display: flex;
      align-items: center; /* Pusatkan teks secara vertikal */
      justify-content: center; /* Pusatkan teks secara horizontal */
      cursor: pointer;
      margin: auto;
      transition: all 0.3s ease;
      padding: 0 15px; /* Reset padding */
      text-align: center; /* Pusatkan teks dalam kontainer */
    `);
  });

  return txt;
}

// Buat tombol dan terapkan gaya
// Buat tombol dan terapkan gaya
const seeLive = document.createElement('a');
seeLive.innerHTML = projectButtons.button1; // Hanya teks "Home"
seeLive.href = '/Personal_Website'; // Href untuk navigasi
buttonLinksStyle(seeLive);

// Kontainer tombol
const Buttons = document.createElement('div');
Buttons.setAttribute('style', `
  max-width: 555px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 29px auto; /* Pusatkan tombol secara horizontal dengan jarak atas dan bawah */
  position: relative; /* Tambahkan posisi relatif untuk kontrol posisi tombol */
  bottom: 10px; /* Jarak dari bagian bawah halaman */
`);

// Tambahkan tombol ke kontainer
Buttons.appendChild(seeLive);

// Tambahkan tombol dan kontainer ke halaman
document.body.appendChild(Buttons);



/** ***************** Open modal button: see this project **************** */
const openModal = document.querySelector('.see-btn');

/** ***************** Close modal button ****************** */
const closeModal = document.createElement('button'); // create closeBtn button
closeModal.setAttribute('style', '\
width: max-content;\
background: none;\
font-weight: 500;\
font-size: 20px;\
border: none;\
cursor: pointer;\
align-self: flex-end;\
margin: 19px 0;\
color: rgba(226, 80, 92, 1);');
closeModal.innerHTML = '&times;';

/** ********* The card element ******** */
const card = document.createElement('div');
card.setAttribute('style', '\
height: auto;\
width: 100%;\
background: white;\
display: flex;\
margin: 0 auto;\
padding: 0 10px;\
align-items: center;\
flex-direction: column;');

card.appendChild(closeModal);
card.appendChild(projectName);
card.appendChild(techs);
card.appendChild(slideButtonContainer);
imgArray.forEach(img => card.appendChild(img));
card.appendChild(txt1);
card.appendChild(txt2);
card.appendChild(Buttons);

/** ********* The modal element ******** */
const modal = document.createElement('aside'); // Consider modal as an aside element
modal.setAttribute('style', '\
height: 100%;\
width: 100vw;\
background: rgba(26, 34, 54, 1);\
position: fixed;\
top: 0;\
left: 0;\
display: flex;\
flex-direction: column;\
overflow: scroll;');
modal.appendChild(card);

/** ***** Opening and closing functions part ******** */
function openProject() { // open the modal
  document.body.appendChild(modal);
}
openModal.addEventListener('click', openProject);

function closeProject() { // close the modal
  document.body.removeChild(modal);
}
closeModal.addEventListener('click', closeProject);
