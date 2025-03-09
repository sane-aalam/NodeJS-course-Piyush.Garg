const data = [
  {
    id: 1,
    first_name: "Quentin",
    last_name: "Scanlan",
    email: "qscanlan0@cargocollective.com",
    gender: "Female",
    Job_tittle: "Tax Accountant",
  },
  {
    id: 2,
    first_name: "Christian",
    last_name: "D'Arrigo",
    email: "cdarrigo1@wufoo.com",
    gender: "Male",
    Job_tittle: "Structural Analysis Engineer",
  },
];

const userId = 1;
const userIndex = data.findIndex((user) => user.id === userId);
console.log(userIndex);
data.slice(userIndex, 1);
