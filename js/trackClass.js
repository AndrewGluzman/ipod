class Track {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.artist = _item.artist.name;
    this.album = _item.album.title;
    this.songName = _item.title;
    this.songMp3 = _item.preview;
    this.image = _item.album.cover_medium;
  }

  render() {
    let newsong = $(`<p>${this.songName}</p>`);
    $(this.parent).append(newsong);

    $(newsong).on("click", () => {
      backWindowOn(
        this.artist,
        this.album,
        this.songName,
        this.songMp3,
        this.image
      );
    });
  }
}
