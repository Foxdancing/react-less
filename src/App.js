
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import someImgSrc1 from './img/stethoscope.svg';
import someImgSrc2 from './img/knife.svg';
import someImgSrc3 from './img/collar.svg';
import someImgSrc4 from './img/bone.svg';
import someImgSrc5 from './img/paw.svg';
import someImgSrc6 from './img/cat.svg';
import someImgSrc7 from './img/heart.svg';
import someImgSrc8 from './img/teeth.svg';
import someImgSrc9 from './img/dog maxi.svg';
import someImgSrc10 from './img/doctor.svg';
import someImgSrc11 from './img/testTubes.svg';
import someImgSrc12 from './img/syringe.svg';
import someImgSrc13 from './img/lungs.svg';
import someImgSrc14 from './img/lizard.svg';
import someImgSrc15 from './img/pills.svg';
import someImgSrc16 from './img/grooming.svg';


function App() {

  // let boneUp = someImgSrc4;
  // let boneDown = someImgSrc17;

  // const bone = boneUp + boneDown;

  let servCards = [
      {
        id: 1,
        title: "Терапия",
        services: 26,
        img: someImgSrc1, 
      },
      {
        id: 2,
        title: "Хирургия",
        services: 24,
        img: someImgSrc2,
      },
      {
        id: 3,
        title: "Неврология",
        services: 34,
        img: someImgSrc3,
      },
      {
        id: 4,
        title: "Ортопедия",
        services: 4,
        img: someImgSrc4,
      },
      {
        id: 5,
        title: "Дерматология",
        services: 7,
        img: someImgSrc5,
      },
      {
        id: 6,
        title: "Офтальмология",
        services: 20,
        img: someImgSrc6,
      },
      {
        id: 7,
        title: "Кардиология",
        services: 6,
        img: someImgSrc7,
      },

      {
        id: 8,
        title: "Стоматология",
        services: 25,
        img: someImgSrc8,
      },
      {
        id: 9,
        title: "Репродуктология",
        services: 30,
        img: someImgSrc9,
      },
      {
        id: 10,
        title: "Визуальная диагностика",
        services: 16,
        img: someImgSrc10,
      },
      {
        id: 11,
        title: "Лаборатория",
        services: 57,
        img: someImgSrc11,
      },
      {
        id: 12,
        title: "Онкология",
        services: 15,
        img: someImgSrc12,
      },
      {
        id: 13,
        title: "Эндокринология",
        services: 23,
        img: someImgSrc13,
      },
      {
        id: 14,
        title: "Экзотические животные",
        services: 50,
        img: someImgSrc14,
      },
      {
        id: 15,
        title: "Аптека",
        services: 15,
        img: someImgSrc15,
      },
      {
        id: 16,
        title: "Груминг",
        services: 20,
        img: someImgSrc16,
      },

  ];

  return (
    <div className="App">
     <Header></Header>

     <div className="block">

    {servCards.map(elem => (
      <Cards elem={elem} key={elem.id}></Cards>
    ))}</div>


    </div>
  );
}

export default App;
