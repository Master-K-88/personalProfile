// local reviews data
const reviews = [
  {
    id: 1,
    name: "Oko-osi Korede",
    job: "web developer",
    // img:
    //   "https://www.facebook.com/photo.php?fbid=10206636537017850&set=pb.1405402780.-2207520000..&type=3",
    img:
      "./myPix1.jpeg",
    text:
      ` I adapt to the
      newest technological advancements and integrate them in building 
      applications to solve real-life problems.`,
  },
  {
    id: 2,
    name: "Oko-osi Korede (Decagon)",
    job: "Mobile developer",
    img:
      "./myPix1.jpeg",
    text:
      "I am an iOS software engineer trained at Decagon with a computer science background. I am a problem solver and loves coding.",
  },
  {
    id: 3,
    name: "Oko-osi Korede (Service)",
    job: "Youth Service",
    img:
      "./nysc.jpeg",
    text:
      "I am a Mathematics, Physics and Further-Mathematics teacher during my national service year",
  },
  {
    id: 4,
    name: "Oko-osi Korede",
    job: "Teaching",
    img:
      "./physicsTeacher.jpeg",
    text:
      "This was the era of teaching in Christfield College in Agege, where I taught students Basic Technology, and Physics.",
  },
  {
    id: 5,
    name: "Oko-osi Korede",
    job: "Teaching",
    img:
      "./ITTeaching.jpeg",
    text:
      "This was the era of teaching in Total Standard College in Oshodi, where I taught students Mathematics, Physics, and FurtherMathematics",
  },
];

// selecting items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// prevBtn.addEventListener('click',prevBtnClick);

//Set starting Item

let currentItem = 0;


// Load initial item

window.addEventListener('DOMContentLoaded', function() {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
} 
// function prevBtnClick() {

// }

nextBtn.addEventListener('click', ()=>{
  if (currentItem < reviews.length-1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', ()=>{
  if (currentItem >= 1) {
    currentItem--;
  } else {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', ()=>{
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
