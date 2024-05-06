
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

// According to an object inside an interface, need
// an other interface only to discribe this object

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Jhay Cortez",
        year: 2002
    }
}


// Destructuracion to objects, modules, arrays, etc

// const { song:anotherSong, songDuration:duration } = audioPlayer;

// // Details 
// const { author:anotherAuthor, year:yearSong } = audioPlayer.details;

// console.log('Song: ', anotherSong);
// console.log('Author: ', audioPlayer.details.author);
// console.log('Song Duration: ', duration);
// console.log('Autor: ', anotherAuthor + ' and the year of the song is ', yearSong );


const [ , , trunks = 'Not found' ]: string[] = [ 'Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', trunks);

export {};