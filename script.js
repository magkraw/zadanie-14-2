// var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Harry Potter'),
//         React.createElement('p', {}, 'Film o czarodzieju')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Król Lew'),
//         React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//       )
//     )
//   );

var movies = [
{
  id: 1,
  title: 'Harry Potter',
  desc: 'film o czarodzieju',
  poster: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
},
{
  id: 2,
  title: 'Król Lew',
  desc: 'Film o królu sawanny',
  poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxd_qfvTAddMe94G79wwB3MkEetNipLmC_C2dAXNBiLthNiNxkLQ'
},
{
  id: 3,
  title: 'Sex w wielkim mieście',
  desc: 'Film o dziennikarce i jej przyjaciółkach',
  poster: 'http://cdn.collider.com/wp-content/uploads/sex-and-the-city-2-movie-poster-sarah-jessica-parker-kim-cattrall-kristin-davis-and-cynthia-nixon.jpg'
}
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster, style: {width: '100px'}})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));
