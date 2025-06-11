
//     // задача 1 
//     // Пошук продуктів, в описі яких є підстрока "good"

//   console.log('Task 1');

// const products = [
//     { name: "Laptop", description: "A high-performance laptop" },
//     { name: "Phone", description: "A smartphone with a good camera" },
//     { name: "Tablet", description: "A tablet for everyday use" }
// ];

// const searchString = "good";
// let filteredProducts = products.filter(el => el.description.includes(searchString));

// console.log(filteredProducts); 
// const sample_1 = [
//   {
//       "name": "Phone",
//       "description": "A smartphone with a good camera"
//   }
// ]
/* -------------------------------------*/

//   // задача 2
// // Об'єднати дані про користувачів з їх замовленнями та фільтрувати за загальною сумою замовлень

// console.log('Task 2');

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];
// const orders = [
//     { userId: 1, amount: 500 },
//     { userId: 2, amount: 300 },
//     { userId: 2, amount: 700 },
//     { userId: 3, amount: 200 }
// ];

// const userOrders = users.map(el => {
//   let totalAmount = orders.reduce((a,v) => {
//     if (v.userId === el.id) a += v.amount;
//     return a
//   }, 0);
//   return {...el, totalAmount};
// })

// console.log(userOrders); 
// const sample_2 = [
//   {
//       "id": 2,
//       "name": "Bob",
//       "totalAmount": 1000
//   }
// ]
/* -------------------------------------*/

//     // задача 3
//     //  Групувати людей за професією з пошуком підстрок

//   console.log('Task 3');

// const people = [
//     { name: "John", profession: "Doctor" },
//     { name: "Jane", profession: "Engineer" },
//     { name: "Mike", profession: "Doctor" },
//     { name: "Alice", profession: "Engineer" }
// ];
// const searchString = "Doc";

// const title = people.find(el => el.profession.includes(searchString)).profession;
// const searchArr = people.filter(el => el.profession.includes(searchString));

// const groupedByProfession = {
//   [title] : searchArr
// }

// console.log(groupedByProfession); 
// const sample_3 =  {
//   "Doctor": [
//       {
//           "name": "John",
//           "profession": "Doctor"
//       },
//       {
//           "name": "Mike",
//           "profession": "Doctor"
//       }
//   ]
// }

/* -------------------------------------*/

//  // задача 4
// // Перетворити масив об'єктів в об'єкт з категоріями та пошуком підстрок

//  console.log('Task 4');

// const items = [
//     { id: 1, category: "Electronics", name: "Laptop" },
//     { id: 2, category: "Furniture", name: "Chair" },
//     { id: 3, category: "Electronics", name: "Phone" },
//     { id: 4, category: "Furniture", name: "Table" }
// ];
// const searchString = "Phone";
// const searchArr = items.find(el => el.name.includes(searchString));
// const categorizedItems = {
//   [searchArr.category]: searchArr
// }
// console.log(categorizedItems);

// const sample_4 = {
//   "Electronics": [
//       {
//           "id": 3,
//           "category": "Electronics",
//           "name": "Phone"
//       }
//   ]
// }

/* -------------------------------------*/

//     // задача 5
//    // Фільтрувати продукти замовлень за заданою умовою

//  console.log('Task 5');
// const orders = [
//     {
//         orderId: 1,
//         products: [
//             { name: "Laptop", price: 1000 },
//             { name: "Mouse", price: 20 }
//         ]
//     },
//     {
//         orderId: 2,
//         products: [
//             { name: "Phone", price: 500 },
//             { name: "Charger", price: 30 }
//         ]
//     }
// ];

// const minPrice = 100;
// const filteredOrders = orders.map(el => {
//   let products = el.products.filter(n => n.price >= minPrice);
//   // console.log(products);
//   return {...el, products};
// });
// console.log(filteredOrders);
//   // не хочет вторе вложение показывать
// showNestedArray(filteredOrders, 'products');

// const sample_5 = [
//   {
//       "orderId": 1,
//       "products": [
//           {
//               "name": "Laptop",
//               "price": 1000
//           }
//       ]
//   },
//   {
//       "orderId": 2,
//       "products": [
//           {
//               "name": "Phone",
//               "price": 500
//           }
//       ]
//   }
// ]
/* -------------------------------------*/

//  // задача 6
// // Підрахувати кількість співробітників у кожному відділі

// console.log('Task 6');
// const departments = [
//     {
//         name: "HR",
//         employees: [
//             { name: "Alice", position: "Manager" },
//             { name: "Bob", position: "Recruiter" }
//         ]
//     },
//     {
//         name: "Engineering",
//         employees: [
//             { name: "Charlie", position: "Developer" },
//             { name: "Dave", position: "Designer" }
//         ]
//     }
// ];

// const departmentEmployeeCounts = departments.map(el => {
//   return {
//     department: el.name,
//     employeeCount: el.employees.length
//   }
// })
// console.log(departmentEmployeeCounts); 
// const sample_6 = [
//     {
//         "department": "HR",
//         "employeeCount": 2
//     },
//     {
//         "department": "Engineering",
//         "employeeCount": 2
//     }
// ]

/* -------------------------------------*/

   //  // задача 7
   // Фільтрувати задачі проектів за заданою умово
  console.log('Task 7');
const projects = [
    {
        name: "Project A",
        tasks: [
            { title: "Task 1", description: "Design database schema" },
            { title: "Task 2", description: "Implement authentication" }
        ]
    },
    {
        name: "Project B",
        tasks: [
            { title: "Task 1", description: "Create wireframes" },
            { title: "Task 2", description: "Develop frontend" }
        ]
    }
];

const condition = "Task 1";
const filteredProjects = projects.map(el => {
  let tasks = el.tasks.filter(n => n.title === condition);
  return {...el, tasks};
})

console.log(filteredProjects);
showNestedArray(filteredProjects, 'tasks');

const sample_7 = [
    {
        "name": "Project A",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Design database schema"
            }
        ]
    },
    {
        "name": "Project B",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Create wireframes"
            }
        ]
    }
]

/* -------------------------------------*/
function showNestedArray(arr, key) {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i][key]);
  }
}