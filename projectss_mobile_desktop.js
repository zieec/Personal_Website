/** ****** Projects techs ********* */
const technologiesUsed = {
  htmlCss: 'Web Development',
  ruby: 'Networking',
};

function techStyle(tech, techType) {
  tech.classList.add('tech', techType);
  return tech;
}

/** *** Technologies list *** */
const tech1 = document.createElement('li');
tech1.innerHTML = technologiesUsed.htmlCss;
techStyle(tech1, 'web-development');

const tech2 = document.createElement('li');
tech2.innerHTML = technologiesUsed.ruby;
techStyle(tech2, 'networking');

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

document.body.appendChild(techs);

/** ****** Images library: Found all modal's images here ********* */
const images = {
  image1: document.createElement('img'),
  image2: document.createElement('img'),
  image3: document.createElement('img'),
  image4: document.createElement('img'),
  image5: document.createElement('img'),
  image6: document.createElement('img'),
  image7: document.createElement('img'),
  image8: document.createElement('img'),
};

function imagesStyle(img, isActive = false) {
  img.setAttribute('style', isActive ? '\
  width: 100%;\
  height: 100%;\
  object-fit: contain;\
  transition: opacity 0.5s ease-in-out;\
  opacity: 1;' : '\
  width: 100%;\
  height: 100%;\
  object-fit: contain;\
  transition: opacity 0.5s ease-in-out;\
  opacity: 0;');
  img.classList.remove('ripple-out', 'ripple-in');
  img.classList.add(isActive ? 'ripple-in' : 'ripple-out');
  img.setAttribute('class', 'img-to-slide');
  return img;
}

const img1 = images.image1;
img1.setAttribute('src', './Sertifikat/mikrotik1.jpg');
imagesStyle(img1, true);

const img2 = images.image2;
img2.setAttribute('src', './Sertifikat/data1.png');
imagesStyle(img2);

const img3 = images.image3;
img3.setAttribute('src', './Sertifikat/html1.jpg');
imagesStyle(img3);

const img4 = images.image4;
img4.setAttribute('src', './images/satrioterminasi.jpg');
imagesStyle(img4);

const img5 = images.image5;
img5.setAttribute('src', './images/satrioplc2.jpg');
imagesStyle(img1, true);

const img6 = images.image6;
img6.setAttribute('src', './images/projek1.jpg');
imagesStyle(img2);

const img7 = images.image7;
img7.setAttribute('src', './images/projek.jpg');
imagesStyle(img3);

const img8 = images.image8;
img8.setAttribute('src', './images/satriopgri.jpg');
imagesStyle(img4);

const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8];
let currentImgIndex = 0;

/** ********** Image container ********** */
const imageContainer = document.createElement('div');
imageContainer.setAttribute('id', 'image-container');
imageContainer.setAttribute('style', '\
width: 100%;\
height: 400px;\
position: relative;\
overflow: hidden;\
display: flex;\
align-items: center;\
justify-content: center;');
imgArray.forEach(img => imageContainer.appendChild(img));

function showCurrentImage() {
  imgArray.forEach((img, index) => {
    imagesStyle(img, index === currentImgIndex);
  });
}

setInterval(() => {
  currentImgIndex = (currentImgIndex + 1) % imgArray.length;
  showCurrentImage();
}, 3000);

showCurrentImage();

/** ****** Texts library ********* */
const texts = {
  title: 'My Portfolio',

  text1: ' In order to continue to improve, hone and prove the skills that I have, I have taken part in training and certification several times. ',

  text2: ' Mikrotik training by IDN.ID, Data Analysis Training by MySkill x Delloite, Web Development training by Edspert.Id, Fiber Optic Academy by Telkom Indonesia, Create a program to run the Program Logic Controller (PLC) ,Create a pest repellent device using Hz frequency based on IoT connected to Telegram, and display and promote it at a school exhibition attended by many visiting companies, and present it to all PGRI guest teachers from all over Indonesia.',
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
txt2.innerHTML = texts.text2;
textsStyle(txt2);

/** ***************** Project buttons ********************* */
const projectButtons = {
  button1: 'Home',
};

function buttonLinksStyle(txt) {
  txt.setAttribute('style', `
    width: 170px;
    height: 50px;
    color: white;
    font-size: 18px;
    background: #1A2236;
    font-weight: 500;
    border: 2px solid #1A2236;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: auto;
    transition: all 0.3s ease;
    padding: 0 15px;
    text-align: center;
  `);

  txt.addEventListener('mouseover', () => {
    txt.setAttribute('style', `
      width: 170px;
      height: 50px;
      color: #1A2236;
      font-size: 18px;
      background: white;
      font-weight: 500;
      border: 2px solid #1A2236;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: auto;
      transition: all 0.3s ease;
      padding: 0 20px;
      text-align: center;
    `);
  });

  txt.addEventListener('mouseout', () => {
    txt.setAttribute('style', `
      width: 170px;
      height: 50px;
      color: white;
      font-size: 18px;
      background: #1A2236;
      font-weight: 500;
      border: 2px solid #1A2236;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: auto;
      transition: all 0.3s ease;
      padding: 0 15px;
      text-align: center;
    `);
  });

  return txt;
}

const seeLive = document.createElement('a');
seeLive.innerHTML = projectButtons.button1;
seeLive.href = 'https://zieec.github.io/Personal_Website/';
buttonLinksStyle(seeLive);

const Buttons = document.createElement('div');
Buttons.setAttribute('style', `
  max-width: 555px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 29px auto;
  position: relative;
  bottom: 10px;
`);

Buttons.appendChild(seeLive);
document.body.appendChild(Buttons);

/** ***************** Open modal button: see this project **************** */
const openModal = document.querySelector('.see-btn');

/** ***************** Close modal button ****************** */
const closeModal = document.createElement('button');
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
card.appendChild(imageContainer);
card.appendChild(txt1);
card.appendChild(txt2);
card.appendChild(Buttons);

/** ********* The modal element ******** */
const modal = document.createElement('aside');
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
function openProject() {
  document.body.appendChild(modal);
}
openModal.addEventListener('click', openProject);

function closeProject() {
  document.body.removeChild(modal);
}
closeModal.addEventListener('click', closeProject);

