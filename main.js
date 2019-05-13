const workouts = [
  "squats",
  "walking lunges",
  "squat jumps",
  "high knees",
  "up downs",
  "pushups",
  "skaters",
  "basketball",
  "jumping jacks",
  "abdominal",
  "weights",
  "box jumps",
  "cardio",
  "kicks"
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
  "situp twists"
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
  "bent over rows"
];

const list = document.getElementById('workouts');
const abContain = document.getElementById('ab-container');
const weightContain = document.getElementById('weight-container');
const cardioContain = document.getElementById('cardio-container');
const button = document.querySelector('button');
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
ulListAbs.addEventListener('click', addHighlightAbs, false);
ulListWeights.addEventListener('click', addHighlightWeights, false);
ulListCardio.addEventListener('click', addHighlightCardio, false);

function addHighlightCardio(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('highlight');
  }
  var cardioSelectected = document.getElementById("cardio-workouts").querySelectorAll(".highlight");
  if(cardioSelectected.length > 2) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.remove('highlight');
    }
  }
};

function addHighlightAbs(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('highlight');
  }
  var absSelectected = document.getElementById("ab-workouts").querySelectorAll(".highlight");
  if(absSelectected.length > 5) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.remove('highlight');
    }
  }
};

function addHighlightWeights(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('highlight');
  }
  var weightsSelectected = document.getElementById("weight-workouts").querySelectorAll(".highlight");
  if(weightsSelectected.length > 5) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.remove('highlight');
    }
  }
};

function addComplete(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
  var workoutsComplete = document.getElementById("workouts").querySelectorAll(".complete");
  if(workoutsComplete.length === 5) {
    alert("Congrats! You're Done!");
    window.location.reload();
  } else {
    console.log('false');
  }
};

button.addEventListener('click', refreshPage);
function refreshPage() {
  window.location.reload();
}