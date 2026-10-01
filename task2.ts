// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

function delay(time: number) {
  return new Promise((res) => {
    setTimeout(() => res(null), time);
  });
}

async function request() {
  console.log("Start request");

  await delay(2000);

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (response.ok) {
    console.log("Filter data");

    const fetchData: Data = await response.json();

    const filteredData = fetchData.filter((v) => v.completed);

    return filteredData;
  }

  return null;
}

async function main() {
  const data = await request();
  console.log(data);
}

main();
