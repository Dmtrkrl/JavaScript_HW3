const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
// **Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

function company() {
  for (let i = 0; i < enterprises.length; i++) {
    let summ = 0;
    for (let j = 0; j < enterprises[i].departments.length; j++) {
      summ += enterprises[i].departments[j].employees_count;
    }
    console.log(`${enterprises[i].name} (${summ} сотрудников)`);
    for (let j = 0; j < enterprises[i].departments.length; j++) {
      console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count} сотрудников)`);
    };
  }
}
company();

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

  function getEnterpriseName(enName) {
    for (let i = 0; i < enterprises.length; i++) {
      for (let j = 0; j < enterprises[i].departments.length; j++) {
        if (enName === enterprises[i].departments[j].id || enName === enterprises[i].departments[j].name) {
          console.log(enterprises[i].name);
          break;
        } else if (enName === enterprises[i].id || enName === enterprises[i].name) {
          console.log('this is not a department');
          break;
        }
      }
  
    }
  
  }
  
  getEnterpriseName('Отдел тестирования');
  getEnterpriseName('Администрация');
  getEnterpriseName('Отдел разработки');
  getEnterpriseName('Предприятие 1');
  getEnterpriseName(6);
  getEnterpriseName(3);
  getEnterpriseName(10);
  getEnterpriseName(1);



// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise(newEnterprise) {
  length = enterprises.length;
  let lastAdd = enterprises[length - 1].departments.find(element => element.id);
  let lastId = lastAdd.id;

  enterprises.push({ id: lastId + 1, name: newEnterprise, departments: [{ id: Number, name: String, departments: [] }] });
  console.log(enterprises);
}

addEnterprise("Предприятие 4");

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartment(addId, addName) {
  length = enterprises.length;
  let lastAdd = enterprises[length - 1].departments.find(element => element.id);
  let lastId = lastAdd.id;

  let findEnterprise = enterprises.filter(element => element.id === addId)
  departamentId = (findEnterprise.find(element => element.departments));

  let newDepartment = { id: lastId + 1, name: addName, employees_count: 0 };

  departamentId.departments.push(newDepartment);
  console.log(departamentId);
};

addDepartment(1, 'Название нового отдела');

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprises(addId, enterpriseNewName) {
  let result = enterprises.find(element => element.id === addId)
  result.name = enterpriseNewName;
  console.log(result);
}

editEnterprises(1, 'Новое название предприятия');

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(addID, newName) {
  for (i = 0; i < enterprises.length; i++) {
    let findDepartment = enterprises[i].departments;
    result = findDepartment.find(element => element.id === addID);
    if (result) {
      result.name = newName;
      console.log(enterprises[i])
    }
  }
}

editDepartment(7, 'Новое название отдела');

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterpeises(addID) {
  let enterprisesIndex = enterprises.findIndex(element => element.id === addID);
  enterprises.splice(enterprisesIndex, 1);
  console.log(enterprises);
}

deleteEnterpeises(1);

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function  deleteDepartment (addID)  {  
  for  (key in enterprises)  {
      let  department  =  enterprises[key].departments;  
      let  departmentID  =  department.find(element  =>  element.id  ===  addID)
      departmentIndex   =  department.findIndex(element  =>  element.id  ===  addID);              
      if  (departmentIndex  != -1)  {       
          if  (departmentID.employees_count  ===  0)  {     
           department.splice(departmentIndex,  1);    
              console.log(enterprises)    
          } else  {
              console.log("Error: this department has employees")
          }      
      }
  }    
}
deleteDepartment(10);

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function  moveEployees (idFrom,  idTo)  {    
    for  (key in enterprises)  {  
        let  department  =  enterprises[key].departments;    
        let  findFrom  =  department.find(element  =>  element.id  ===  idFrom);  
        let  findTo  =  department.find(element  =>  element.id  ===  idTo);          
        if  (findFrom  &&  findTo)  {    
                findTo.employees_count  +=  findFrom.employees_count;    
                findFrom.employees_count  =  0;    
                console.log(department)  
        }
    }      
 }  
 moveEployees(2, 3)
