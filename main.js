const workouts = [
  "walking",
  "jogging",
  "squats",
  "walking lunges",
  "squat jumps",
  "high knees",
  "bicycle",
  "elliptical",
  "up downs",
  "pushups",
  "skaters",
  "basketball",
  "jumping jacks",
  "abdominal",
  "weights",
  "sprints",
  "jump rope",
  "shadow boxing",
  "stair climber"
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
  "situps",
  "leg raises",
  "high crunches",
  "knee crunches",
  "back extensions",
  "v ups"
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
  "push up",
  "squat",
  "calf raise",
  "dumbbell row",
  "kettle bell swings",
  "bent over rows"
];

const list = document.getElementById('workouts');
const abContain = document.getElementById('ab-container');
const weightContain = document.getElementById('weight-container');

for (let i = 0; i < workouts.length; i++) {
  const workout = document.createElement("li");
  workout.innerHTML = workouts[i];
  workout.setAttribute('data-workouts', workouts[i]);
  list.appendChild(workout);
}

for (let i = list.children.length; i >= 0; i--) {
  list.appendChild(list.children[Math.random() * i | 0]);
}

const dataAbs = document.querySelector('li[data-workouts="abdominal"]');
const dataWeights = document.querySelector('li[data-workouts="weights"]');

if(dataAbs.offsetWidth !== 0 || dataAbs.offsetHeight !== 0) {
  const abList = document.getElementById('ab-workouts');
  for (let i = 0; i < abdominal.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = abdominal[i];
    abList.appendChild(item);
  }
  abContain.style.display = 'block';
}

if(dataWeights.offsetWidth !== 0 || dataWeights.offsetHeight !== 0) {
  const weightList = document.getElementById('weight-workouts');
  for (let i = 0; i < weights.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = weights[i];
    weightList.appendChild(item);
  }
  weightContain.style.display = 'block';

}

const ulList = document.getElementById('workouts');
const ulListAbs = document.getElementById('ab-workouts');
const ulListWeights = document.getElementById('weight-workouts');

ulList.addEventListener('click', toggleComplete, false);
ulListAbs.addEventListener('click', toggleHighlightAbs, false);
ulListWeights.addEventListener('click', toggleHighlightWeights, false);


function toggleComplete(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('complete');
  }
}

function toggleHighlightAbs(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('highlight-green');
  }
}

function toggleHighlightWeights(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('highlight-blue');
  }
}