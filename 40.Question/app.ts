//Question 40: Album: Create objects for music albums.
//Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;

}

let album = makeAlbum("atif","musafir")
console.log(album)

let album = makeAlbum("ali zafar","dil jhoom jhoom")
console.log(album)

let album = makeAlbum("arjit singh","pal")
console.log(album)