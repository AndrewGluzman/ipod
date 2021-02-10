let musicArr;

const doApi = async (_url) => {
  let resp = await fetch(_url);
  let data = await resp.json();
  console.log(data.data[0].album.title);
  $("#player").attr("src", `${data.data[0].preview}`);
  createTracks(data.data);
};

const createTracks = (_arr) => {
  $(".song-sec").empty();
  _arr.map((item) => {
    let track = new Track(".song-sec", item);
    track.render();
  });
};
