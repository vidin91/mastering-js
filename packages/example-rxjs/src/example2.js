const {
  from
} = require('rxjs');

const {
  pluck
} = require('rxjs/operators');

const getUsers = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      metadata: {
        count: 3,
        pageSize: 10
      },
      results: [
        {id: 1, name: 'Milos', age: 28, city: 'Belgrade', hobbies: ['skiing', 'joking']},
        {id: 2, name: 'Marko', age: 25, city: 'Nis', hobbies: ['skiing', 'basketball']},
        {id: 3, name: 'Petar', age: 30, city: 'Belgrade', hobbies: ['gaming']}
      ]
    });
  }, 2000);
});

from(getUsers())
  .pipe(
    pluck('results')
  )
  .subscribe(x => console.log(x));