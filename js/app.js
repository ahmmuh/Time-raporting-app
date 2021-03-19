const getData = () => {
  fetch("../data/project.json")
    .then((response) => response.json())
    .then((data) => showData(data));
};

getData();
const showData = (data) => {
  let selectElements = document.querySelector("#project");
  data.forEach((project) => {
    let option = document.createElement("option");
    option.innerHTML = project.title;
    if (option) {
      // selectElements.appendChild(option);
    }
    selectedProject(option);
  });
};

const selectedProject = (option) => {
  //   console.log(option);
};

const getActivity = () => {
  fetch("../data/activity.json")
    .then((res) => res.json())
    .then((data) => showActivity(data));
};

getActivity();
const showActivity = (data) => {
  const activities = document.getElementById("activity");
  data.forEach((act) => {
    const activity = document.createElement("option");
    activity.innerHTML = act.title;
    if (activity) {
      // activities.appendChild(activity);
    }
  });
};

// save hours
// and date
// save selected project
// save selected activity
let hours = [{}];
// let hourInput = document.querySelector("#time").value;
// let datepicker = document.querySelector("#datepicker").value;

// let date = new Date();
// time = date.toLocaleString();
// raport btn
const raport = document.querySelector("#raport-btn");
if (raport) {
  raport.addEventListener("click", function () {
    hours.push(hourInput.value, time);
    // if (hourInput.value >= 0.1 && hourInput.value <= 1) {
    //   localStorage.setItem("key", hours);
    //   console.log(time);
    // } else {
    //   alert("Ditt värde måste vara mellan 0 och 1");
    // }
  });
}

const raports = () => {
  let allProjects = localStorage.getItem("key");
};

raports();
