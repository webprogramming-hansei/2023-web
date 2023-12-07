// Clipboard

var btnPaste = document.querySelector("#btnPaste");
btnPaste.addEventListener("click", () => {
  navigator.clipboard.readText().then((value) => console.log(value));
});

// Fullscreen
var btnFullscreen = document.querySelector("#btnFullscreen");
btnFullscreen.addEventListener("click", () => {
  toggleFullScreen();
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Geolocation
var btnGeoLocation = document.querySelector("#btnGeoLocation");
btnGeoLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Web Storage API
function saveData() {
    // localStorage.setItem("chapter7", "Web API");
    sessionStorage.setItem("chapter7", "Web API");
}

function loadData() {
    // const data = localStorage.getItem("chapter7");
    const data = sessionStorage.getItem("chapter7");
    console.log(data);
}