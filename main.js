const workouts = [
  "squats",
  "walking lunges",
  "squat jumps",
  "high knees",
  "burpees",
  "half burpee",
  "pushups",
  "skaters",
  "basketball",
  "jumping jacks",
  "abdominal",
  "cross jacks",
  "weights",
  "box jumps",
  "cardio",
  "kicks",
  "wall sit",
  "bosu ball",
  "stability ball",
  "crab walk",
  "bear crawl",
  "inchworm",
  "lateral shuffle",
  "side lunges",
  "box toe-taps",
  "Knee lifts with med ball",
  "Squat kicks",
  "Line Taps",
  "butt kicks",
  "lunge kicks",
  "lunge punch"
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
  "sprints",
  "rowing"
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
  "shoulder taps",
  "warrior crunch",
  "dead bug",
  "jack knife",
  "half kneeling wood chop",
  "bird dog"
];

const weights = [
  "cable row",
  "bicep curl",
  "bench press",
  "shoulder press",
  "lat pull downs",
  "leg press",
  "triceps push down",
  "leg curls",
  "knee extension",
  "calf raise",
  "reverse fly",
  "renegade row",
  "kettle bell swings",
  "bent over rows",
  "resistance band",
  "butterfly",
  "tricep extension",
  "deadlift",
  "step ups",
  "dumbell thrusters",
  "dumbell lateral raise",
  "incline bench press",
  "dumbell lunge",
  "thruster",
  "tricep dip"
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
  workout.innerHTML = workouts[i] + '<span class="controls"><span class="fas fa-check"></span></span>';
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
    item.innerHTML = abdominal[i] + '<span class="controls"><span class="fas fa-plus-circle"></span></span>';
    abList.appendChild(item);
  }
  abContain.style.display = 'block';
}

if(dataWeights.offsetWidth !== 0 || dataWeights.offsetHeight !== 0) {
  const weightList = document.getElementById('weight-workouts');
  for (let i = 0; i < weights.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = weights[i] + '<span class="controls"><span class="fas fa-plus-circle"></span></span>';
    weightList.appendChild(item);
  }
  weightContain.style.display = 'block';
}

if(dataCardio.offsetWidth !== 0 || dataCardio.offsetHeight !== 0) {
  const cardioList = document.getElementById('cardio-workouts');
  for (let i = 0; i < cardio.length; i++) {
    const item = document.createElement("li");
    item.innerHTML = cardio[i] + '<span class="controls"><span class="fas fa-plus-circle"></span></span>';
    cardioList.appendChild(item);
  }
  cardioContain.style.display = 'block';
}

ulList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
});

const addedAbsList = document.getElementById('chosen-abs');
addedAbsList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
  let itemsComplete = addedAbsList.querySelectorAll(".complete");
  if (itemsComplete.length === 5) {
    dataAbs.classList.add('complete');
  }
});

const addedWeightList = document.getElementById('chosen-weights');
addedWeightList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
  let itemsComplete = addedWeightList.querySelectorAll(".complete");
  if (itemsComplete.length === 5) {
    dataWeights.classList.add('complete');
  }
});

const addedCardioList = document.getElementById('chosen-cardio');
addedCardioList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.add('complete');
  }
  let itemsComplete = addedCardioList.querySelectorAll(".complete");
  if (itemsComplete.length === 2) {
    dataCardio.classList.add('complete');
  }
});

ulListAbs.addEventListener('click', function (ev) {
  if (ev.target.closest('li')) {
    ev.target.closest('li').classList.add('added');
    ev.target.closest('li').children[0].innerHTML = '<span class="fas fa-check"></span>';
    let added = ev.target.closest('li').innerText;
    addedAbsList.classList.add('added');
    const addedItems = document.createElement("li");
    addedItems.innerHTML = added + '<span class="controls"><span class="fas fa-check"></span></span>';
    document.querySelector('#chosen-abs ul').appendChild(addedItems);
  }

  let itemsAdded = ulListAbs.querySelectorAll(".added");
  if (itemsAdded.length === 5) {
    document.getElementById('ab-container').style.display = 'none';
  }
});

ulListWeights.addEventListener('click', function (ev) {
  if (ev.target.closest('li')) {
    ev.target.closest('li').classList.add('added');
    ev.target.closest('li').children[0].innerHTML = '<span class="fas fa-check"></span>';
    let added = ev.target.closest('li').innerText;
    addedWeightList.classList.add('added');
    const addedItems = document.createElement("li");
    addedItems.innerHTML = added + '<span class="controls"><span class="fas fa-check"></span></span>';
    document.querySelector('#chosen-weights ul').appendChild(addedItems);
  }

  let itemsAdded = ulListWeights.querySelectorAll(".added");
  if (itemsAdded.length === 5) {
    document.getElementById('weight-container').style.display = 'none';
  }
});

ulListCardio.addEventListener('click', function (ev) {
  if (ev.target.closest('li')) {
    ev.target.closest('li').classList.add('added');
    ev.target.closest('li').children[0].innerHTML = '<span class="fas fa-check"></span>';
    let added = ev.target.closest('li').innerText;
    addedCardioList.classList.add('added');
    const addedItems = document.createElement("li");
    addedItems.innerHTML = added + '<span class="controls"><span class="fas fa-check"></span></span>';
    document.querySelector('#chosen-cardio ul').appendChild(addedItems);
  }

  let itemsAdded = ulListCardio.querySelectorAll(".added");
  if (itemsAdded.length === 2) {
    document.getElementById('cardio-container').style.display = 'none';
  }
});

// Refresh

refresh.addEventListener('click', refreshPage);
document.getElementById('close').addEventListener('click', refreshPage);

function refreshPage() {
  window.location.reload();
}

// Complete Workout

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
    console.log('you are not done');
  }
});
