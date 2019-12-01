const workouts = [
  "squats",
  "walking lunges",
  "squat jumps",
  "high knees",
  "burpees",
  "pushups",
  "skaters",
  "basketball",
  "jumping jacks",
  "abdominal",
  "weights",
  "box jumps",
  "cardio",
  "kicks",
  "wall sit",
  "bosu ball",
  "stability ball",
  "crab walk",
  "bear crawl",
  "inchworm"
];

const cardio = [
  "walking",
  "jogging",
  "bicycle",
  "elliptical",
  "skaters",
  "jump rope",
  "shadow boxing",
  "stairs/hills",
  "sprints"
];

const abdominal = [
  "knee to elbow crunches",
  "flutter kicks",
  "scissors",
  "reverse crunches",
  "sitting twists",
  "mountain climbers",
  "planks",
  "plank jacks",
  "side planks",
  "situps",
  "leg raises",
  "back extensions",
  "v ups",
  "situp twists",
  "medicine ball toe touch",
  "bosu ball",
  "stability ball",
  "medicine ball roll push up",
  "shoulder taps"
];

const weights = [
  "rows",
  "bicep curl",
  "bench press",
  "shoulder press",
  "lat pull downs",
  "leg press",
  "triceps push down",
  "leg curls",
  "knee extension",
  "calf raise",
  "dumbbell row",
  "kettle bell swings",
  "bent over rows",
  "resistance band"

];

const list = document.getElementById('workouts');
const abContain = document.getElementById('ab-container');
const weightContain = document.getElementById('weight-container');
const cardioContain = document.getElementById('cardio-container');
const refresh = document.querySelector('#refresh');
const ulList = document.getElementById('workouts');
const ulListAbs = document.getElementById('ab-workouts');
const ulListWeights = document.getElementById('weight-workouts');
const ulListCardio = document.getElementById('cardio-workouts');



for (let i = 0; i < workouts.length; i++) {
  const workout = document.createElement("li");
  workout.innerHTML = workouts[i] + '<span class="fas fa-check"></span>';
  workout.setAttribute('data-workouts', workouts[i]);
  list.appendChild(workout);
}

for (let i = list.children.length; i >= 0; i--) {
  list.appendChild(list.children[Math.random() * i | 0]);
}

const dataAbs = document.querySelector('li[data-workouts="abdominal"]');
const dataWeights = document.querySelector('li[data-workouts="weights"]');
const dataCardio = document.querySelector('li[data-workouts="cardio"]');

if(dataAbs.offsetWidth !== 0 || dataAbs.offsetHeight !== 0) {
  const abList = document.getElementById('ab-workouts');
  for (let i = 0; i < abdominal.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = abdominal[i] + '<span class="fas fa-check"></span>';
    abList.appendChild(item);
  }
  abContain.style.display = 'block';
}

if(dataWeights.offsetWidth !== 0 || dataWeights.offsetHeight !== 0) {
  const weightList = document.getElementById('weight-workouts');
  for (let i = 0; i < weights.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = weights[i] + '<span class="fas fa-check"></span>';
    weightList.appendChild(item);
  }
  weightContain.style.display = 'block';
}

if(dataCardio.offsetWidth !== 0 || dataCardio.offsetHeight !== 0) {
  const cardioList = document.getElementById('cardio-workouts');
  for (let i = 0; i < cardio.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = cardio[i] + '<span class="fas fa-check"></span>';
    cardioList.appendChild(item);
  }
  cardioContain.style.display = 'block';
}

ulList.addEventListener('click', addComplete, false);
ulListAbs.addEventListener('click', toggleHighlightAbs, false);
ulListWeights.addEventListener('click', toggleHighlightWeights, false);
ulListCardio.addEventListener('click', toggleHighlightCardio, false);

function addComplete(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
}

function toggleHighlightAbs(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('highlight');
  }
}

function toggleHighlightWeights(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('highlight');
  }
}

function toggleHighlightCardio(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('highlight');
  }
}

refresh.addEventListener('click', refreshPage);
document.getElementById('close').addEventListener('click', refreshPage);

function refreshPage() {
  window.location.reload();
}

ulList.addEventListener('click', function (workoutsComplete) {
  var workoutsComplete = document.getElementById("workouts").querySelectorAll(".complete");
  const completeItems = document.getElementById('completed');
  let completeArr = [];
  for (let i = 0; i < workoutsComplete.length; i++) {
    completeArr.push(workoutsComplete[i].innerText);
  }
  if(workoutsComplete.length === 5) {
    document.getElementById('completed-modal').classList.add('show');
    completeItems.innerHTML = '<p class="items-complete">' + completeArr.join(', ') + '</p>';
    document.getElementById('email').addEventListener('click', function () {
      window.open('mailto:rebeccaeilering@gmail.com?subject=completed workouts&body='+ completeArr);
    });
  } else {
    console.log('false');
  }
});
