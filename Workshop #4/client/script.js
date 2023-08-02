function getTeachers() {
    fetch('http//localhost:3001/graphql', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    getAllTaachers
      `,
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result));
}