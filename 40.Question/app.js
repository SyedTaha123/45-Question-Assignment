function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
var album = makeAlbum("atif", "musafir");
console.log(album);
var album = makeAlbum("ali zafar", "dil jhoom jhoom");
console.log(album);
var album = makeAlbum("arjit singh", "pal");
console.log(album);
