import React, { Component } from 'react';
import data from './data';
import GroceryArr from './GroceryArr';
import DisplayPerson from './DisplayPerson';

//Question 1
// const App = () => {

//   const handleHover = (data) => {
//     alert(`
//         Name: ${data.name}
//         Age: ${data.age}
//         Date of Birth: ${data.dob}
//         Salary: ${data.salary}
//         Designation: ${data.designation}
//         Department: ${data.department}
//         `)
//   }
  

//   const dataList = data.employees.map(e => {

    
//   return (
//   <div key={e.name} style={{ textAlign: "center" }}>
//     <h3 onMouseOver={() => handleHover(e)}>{e.name}</h3>
//     <h3>{e.designation}</h3>
//     <img src={e.image} alt="image" />
//     <hr></hr>
//   </div>
//   )
//   });

//   return (
//   <div style={{ textAlign: "center" }}>
//     <h2><u>Employees Data</u></h2>
//     <hr></hr>
//     {dataList}
//   </div>

//   )
// }

//Question 2
// class App extends Component {

//   state = {
    
//     groceries: [{
//       id: 'J29102', 
//       name: 'Tomatoes', 
//       price: '$3.00', 
//       brand: 'ABC'
//     },
//     {
//       id: 'K21991', 
//       name: 'Potatoes', 
//       price: '$5.00', 
//       brand: 'Holland'
//     }, {
//       id: 'L02334', 
//       name: 'Broccoli', 
//       price: '$2.20', 
//       brand: 'ZXC'
//     }, {
//       id: 'P22110', 
//       name: 'Carrots', 
//       price: '$1.50', 
//       brand: 'QQL'
//     }, {
//       id: 'A04555', 
//       name: 'Onions', 
//       price: '$0.90', 
//       brand: 'EEE'
//     }]
  
// }

//     render() {
//         return (
//             <React.Fragment>
//                 <GroceryArr groceries={this.state.groceries} />
//             </React.Fragment>
//         )
//     }
// }
    
// export default App;

//Question 3
// class App extends Component {
  

//   state = {
//       name: "Sean",
//       age: 20,
//       job: "Developer",
//       salary: "$2000"
//   }


//   render() {
//       return (
//           <>
//               <DisplayPerson name={this.state.name} age={this.state.age} job={this.state.job} salary={this.state.salary} />
             
//           </>
//       )
//   }
// }


// export default App;