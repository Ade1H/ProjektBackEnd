const elForm = document.querySelector('#formSong');
const elSongTitle = document.querySelector('#songTitle');
const elArtist = document.querySelector('#songArtist');
const elSongId = document.querySelector('#songId');
const elSongGenre = document.querySelector('#songGenre');

function newSong(event) {
    event.preventDefault();
    const songTitle = elSongTitle.value;
    const artistName = elArtist.value;
    // const id = elSongId.value;
    const songGenre = elSongGenre.value;

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ songTitle: songTitle, artistName: artistName, songGenre: songGenre })
        });
        return response.json();
    }

    postData('http://localhost:3006/api/songs')
    .then((data) => {
      console.log(data);
  });

}


elForm.addEventListener('submit', newSong, false);
