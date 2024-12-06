import React from 'react'

const HomeItem = function(){
    return (
        <div className="container">
          <h1>CRUD Application</h1>
    
          {/* Form to create or update item */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={currentItem.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              required
            />
    
            <input
              type="text"
              name="subject"
              value={currentItem.subject}
              onChange={handleInputChange}
              placeholder="Enter Subject"
              required
            />
    
            <input
              type="phone"
              name="phoneNo"
              value={currentItem.phoneNo}
              onChange={handleInputChange}
              placeholder="Enter Phone No."
              required
            />
            <button type="submit">{isEditing ? "Update" : "Add"}</button>
          </form>
    
          {/* List items */}
          <div>
            <h2>Input List</h2>
            <ul>
              {items.length === 0 ? (
                <p>No items to display</p>
              ) : (
                items.map((item) => (
                  <li key={item.id}>
                    {item.name}{" "}
                    {item.subject}{" "}
                    {item.phoneNo}{" "}
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
    );
}

export default HomeItem;