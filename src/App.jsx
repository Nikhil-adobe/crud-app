import React, { useState, useEffect, Component } from "react";
import './App.css';
import axios from 'axios';
import CreateItem from "./components/CreateItem";
import UpdateItem from "./components/UpdateItem";
import DeleteItem from "./components/DeleteItem";
import ViewItem from "./components/ViewItem";
import HomeItem from "./components/HomeItem";

const App = ()=> {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://10.43.25.96:5000/users')
        setData(response.data)
    }
    fetchData();
  }, [])

  return (
    <>
      <ul>
      
        {data.map((item) => { return(
          <div>
            <li key={item.id}>{item.id}</li>
            <li key={item.id}>{item.name}</li>
            <li key={item.id}>{item.subject}</li>
            <li key={item.id}>{item.phone_no}</li>
          </div>
        )})}
      </ul>
    </>
  )

}

// class App extends Component{
//   render(){
//     <div>
//       <HomeItem />
//       <CreateItem />
//       <ViewItem />
//       <UpdateItem />
//       <DeleteItem />

//       <h1>Welcome !</h1>
//     </div>
//   }
// }

export default App;















// const CrudApp = () => {
//   const [items, setItems] = useState([]); 
//   const [currentItem, setCurrentItem] = useState({ id: "", name: "" }); 
//   const [isEditing, setIsEditing] = useState(false); 

//   // input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentItem({ ...currentItem, [name]: value });
//   };

//   // Create or Update
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (isEditing) {
//     //   // Update
//     //   setItems(
//     //     items.map((item) =>
//     //       item.id === currentItem.id ? currentItem : item
//     //     )
//     //   );
//     //   setIsEditing(false);
//     // } else {
//     //   // Create
//     //   setItems([
//     //     ...items,
//     //     { id: Date.now().toString(), name: currentItem.name },
//     //     { id: Date.now().toString(), subject: currentItem.subject },
//     //     { id: Date.now().toString(), phoneNo: currentItem.phoneNo },
//     //   ]);
//     // }
//     // setCurrentItem({ id: "", name: "" }); // Reset
//     // setCurrentItem({ id: "", subject: "" }); // Reset
//     // setCurrentItem({ id: "", phoneNo: "" }); // Reset
//     setItems([
//       {}
//     ])
//   };

//   // deletion
//   const handleDelete = (id) => {
//     setItems(items.filter((item) => item.id !== id));
    
//   };

//   // edit
//   const handleEdit = (item) => {
//     setIsEditing(true);
//     setCurrentItem(item);
//   };

  // Rendering
//   return (
//     <div className="container">
//       <h1>CRUD Application</h1>

//       {/* Form to create or update item */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={currentItem.name}
//           onChange={handleInputChange}
//           placeholder="Enter Name"
//           required
//         />

//         <input
//           type="text"
//           name="subject"
//           value={currentItem.subject}
//           onChange={handleInputChange}
//           placeholder="Enter Subject"
//           required
//         />

//         <input
//           type="phone"
//           name="phoneNo"
//           value={currentItem.phoneNo}
//           onChange={handleInputChange}
//           placeholder="Enter Phone No."
//           required
//         />
//         <button type="submit">{isEditing ? "Update" : "Add"}</button>
//       </form>

//       {/* List items */}
//       <div>
//         <h2>Input List</h2>
//         <ul>
//           {items.length === 0 ? (
//             <p>No items to display</p>
//           ) : (
//             items.map((item) => (
//               <li key={item.id}>
//                 {item.name}{" "}
//                 {item.subject}{" "}
//                 {item.phoneNo}{" "}
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CrudApp;








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
