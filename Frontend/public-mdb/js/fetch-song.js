function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('song');
const url = 'http://localhost:3006/api/songs';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
      console.log(data);
      let song = data;
      return song.map(function(data) {
          let li = createNode('li');
          li.innerHTML = `${data.title} ${data.artist} ${data.genre}`;

          append(ul, li);
      });
  })
  .catch(function(error) {
      console.log(error);
  });
