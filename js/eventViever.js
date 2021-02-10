let turned; //global state for display toggle

const viewevents = () => {
  darkWindowOff();
  toglle();
  midlleButt();
  doApi(
    "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=queen&fbclid=IwAR2KeK1RZMB_G8KopeeMcAhxIgByugm6dcfLLvzZqRaeNUU2VeMVITnCvSY"
  );

  search();

  keyPressSearch();

  //global state of display init need for toglle func
  turned = $(".song-list").css("display");

  //func that watches for state change on dispay property
  $(document).on("click", () => {
    turned = $(".song-list").css("display");
  });
};

//function that return user to main window
const darkWindowOff = () => {
  $(".window").on("click", ".back-window", () => {
    $(".song-list").css("display", "block");
    $(".back-window").css("display", "none");
  });
};

//func that turnes in class section and fill the nesasery fields
const backWindowOn = (_artist, _album, _songName, _songMp3, _image) => {
  $("#id-blad").css("background-image", 'url("' + _image + '")');
  $("#id-artist").html(_artist);
  $("#id-album").html(_album);
  $("#id-song").html(_songName);
  $(".back-window").css("display", "block");
  $(".song-list").css("display", "none");
  $("#player").attr("src", `${_songMp3}`);
  document.getElementById("player").play();
};

//togles play/pause for player play button;
const toglle = () => {
  $("#id-pause").on("click", () => {
    var audioElement = document.getElementById("player");

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
};
// turns the search option when find button clicked
const search = () => {
  $("#id-search").on("click", () => {
    $(".song-list").css("display", "block");
    $(".back-window").css("display", "none");

    let searchQ = $("#id-input").val();
    if (searchQ) {
      let myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchQ}&fbclid=IwAR2KeK1RZMB_G8KopeeMcAhxIgByugm6dcfLLvzZqRaeNUU2VeMVITnCvSY`;
      doApi(myUrl);
    }
  });
};
// turns the search option on enter press
const keyPressSearch = () => {
  $("#id-input").keypress(function (event) {
    let keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      let searchQ = $("#id-input").val();
      if (searchQ) {
        let myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchQ}&fbclid=IwAR2KeK1RZMB_G8KopeeMcAhxIgByugm6dcfLLvzZqRaeNUU2VeMVITnCvSY`;
        doApi(myUrl);
      }
    }
  });
};
//function tat trigers the middle button toglle disolays depends on "turned global state"
const midlleButt = () => {
  $("#id-midlle").on("click", () => {
    let songlistdisp = $(".song-list").css("display");
    let backwin = $(".back-window").css("display");

    if (turned == "block") {
      $(".song-list").css("display", "none");
      $(".back-window").css("display", "block");
      turned = "none";
    } else {
      $(".song-list").css("display", "block");
      $(".back-window").css("display", "none");
      turned = "block";
    }
  });
};
