//import {useState} from 'react';
/*
function App(){
  const [isPending, setPending]  = useState(false);

    const Pending = () =>{
    setPending(true);
      setTimeout(() =>{
        console.log("Hello");
        setPending(false);
      }, 2000);
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={Pending} disabled = {isPending}>{isPending? "Submitting":"Submit"}</button>
        </div>
    )
}

function App(){
    const [isLike, setLike]  = useState(false);
  
      const Like = () =>{
        setLike(!isLike);
      }
      return(
          <div>
              <h1>Love</h1>
              <button onClick={Like}>{isLike? "Liked 💖": "Like 🤍"}</button>
          </div>
      )
  }

*/


/*function App(){
    const [count, setCount]  = useState(0);

  
    const Inc = () =>{
        setCount(count+1);
      }
      const Dec = () =>{
        if(count>0){
        setCount(count-1);
        }
      }
      return(
          <div>
              <h1>{count}</h1>
              <button onClick={Inc}>Increment</button>
              <button onClick={Dec} disabled={count===0}>Decrement</button>
          </div>
      )
  }
*/



/*function App(){
    const [Text, setText]  = useState("");

    const Upper = () =>{
        setText(Text.toUpperCase());
    }
    const Lower = () =>{
        setText(Text.toLowerCase());
    }
      return(
          <div>
              <input type = "text" value = {Text} onChange={(e) => setText(e.target.value)} />
              <br></br>
              <button onClick = {Upper}>UpperCase</button>
              <button onClick = {Lower}>LowerCase</button>
             <h1>{Text}</h1>
          </div>
      )
  }
*/

//import { useState, useRef } from 'react';

/*
function App() {
    const [Task, setTask] = useState([]);
    const ref1 = useRef(null);

    const List = () => {

        const task = {
            id: Date.now(),
            name: ref1.current.value
        }
        const update = [...Task, task];
        setTask(update);
        ref1.current.value="";
    }
    return (
        <div>
            <input type="text" ref={ref1} />
            <button onClick={List}>Add +</button>
            <ul>
                {Task.map((tsk) => (
                    <li key={tsk.id}>{tsk.name}</li>
                ))}
            </ul>
        </div>
    )
}
*/
/*
import React, { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState([]);

  const FAQ = () => {
    const faqs = [
      {
        id: 1,
        question: "React kya hai?",
        answer: "React aik JavaScript library hai UI banane ke liye."
      },
      {
        id: 2,
        question: "useState kya karta hai?",
        answer: "Yeh component mein state (data) ko manage karta hai."
      },
      {
        id: 3,
        question: "Tailwind CSS kya hai?",
        answer: "Yeh aik utility-first CSS framework hai."
      }
    ];
    if(activeId.length === 0){
        setActiveId(faqs);
    }else{
        setActiveId([]);
    }
  };

  return (
    <div>
      <h1>Hello World!</h1>

      <button onClick={FAQ}>FAQ</button>

      {activeId.map((fq) => (
        <p key={fq.id}>
          <strong>{fq.question}</strong>
          <br />
          {fq.answer}
        </p>
      ))}
    </div>
  );
}

export default App;


function App() {
  // 1. FAQs ka data array yahan rakhein
  const faqs = [
    {
      id: 1,
      question: "React kya hai?",
      answer: "React aik JavaScript library hai UI banane ke liye."
    },
    {
      id: 2,
      question: "useState kya karta hai?",
      answer: "Yeh component mein state (data) ko manage karta hai."
    },
    {
      id: 3,
      question: "Tailwind CSS kya hai?",
      answer: "Yeh aik utility-first CSS framework hai."
    }
  ];

  // 2. State jo yaad rakhegi ke kaunsa question khula hai (shuru mein koi open nahi toh null)
  const [activeId, setActiveId] = useState(null);

  // 3. Toggle function jo click par ID check karega
  const handleToggle = (id) => {
    if (activeId === id) {
      setActiveId(null); // Agar wahi dobara click hua toh band kar do
    } else {
      setActiveId(id); // Naya ID set kar do aur baaki band ho jayenge
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h1>FAQ Accordion</h1>

      {faqs.map((fq) => {
        const isOpen = activeId === fq.id; // Check karo ke kya yeh specific question khula hai

        return (
          <div 
            key={fq.id} 
            style={{ border: "1px solid #ccc", margin: "10px 0", padding: "12px", borderRadius: "6px" }}
          >
            <div 
              onClick={() => handleToggle(fq.id)} 
              style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", fontWeight: "bold" }}
            >
              <span>{fq.question}</span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>

       
            {isOpen && (
              <p style={{ marginTop: "10px", color: "#555", borderTop: "1px solid #eee", paddingTop: "8px" }}>
                {fq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
*/
//import { useState } from "react";

/*function App() {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "React kya hai?",
      answer: "React aik JavaScript library hai UI banane ke liye."
    },
    {
      id: 2,
      question: "useState kya hai?",
      answer: "State ko manage karne ka React Hook hai."
    },
    {
      id: 3,
      question: "JSX kya hai?",
      answer: "JavaScript ke andar HTML likhne ka syntax hai."
    }
  ];

  const FAQ = (id) => {
    setActiveId(id);
  };

  return (
    <div>
      <h1>FAQ</h1>

      {faqs.map((faq) => (
        <div key={faq.id}>
          <button onClick={() => FAQ(faq.id)}>
            {faq.question}
          </button>

          {activeId === faq.id && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
*/




/*
import { useState } from 'react';
function App() {

    const [activeId, setActiveId] = useState(null);

    const skills = [
        {
            id: 1,
            name: "HTML",
            description: "HTML web page ka structure banata hai."
        },
        {
            id: 2,
            name: "CSS",
            description: "CSS web page ko style karta hai."
        },
        {
            id: 3,
            name: "JavaScript",
            description: "JavaScript web page mein functionality add karta hai."
        },
        {
            id: 4,
            name: "React",
            description: "React reusable UI components banane ke liye use hota hai."
        }
    ];

    const Show = (index) => {
        setActiveId(skills[index]);
        //console.log(skills[index]);
    };

    //console.log(skills[0].name);
    return (
        <div>
            <h1>HTML</h1>
            {skills.map((skill, index) => (
                <div key={skill.id}>
                    <button onClick={() => Show(index)}>
                        {skill.name}{activeId?.id === skill.id ? (
                            <p>{skill.description}</p>
                        ) : null}
                    </button>


                </div>
            ))}
        </div>
    )
}*/


/*
import { useState } from 'react';
function App() {

    const [activeId, setActiveId] = useState([]);

    const skills = [
        {
            id: 1,
            name: "HTML",
            description: "HTML web page ka structure banata hai."
        },
        {
            id: 2,
            name: "CSS",
            description: "CSS web page ko style karta hai."
        },
        {
            id: 3,
            name: "JavaScript",
            description: "JavaScript web page mein functionality add karta hai."
        },
        {
            id: 4,
            name: "React",
            description: "React reusable UI components banane ke liye use hota hai."
        }
    ];

    const Show = (index) => {
        //setActiveId(skills[index]);
        const SK = skills[index].description;
        setActiveId(SK);
        console.log(SK);
    };

    //console.log(skills[0].name);
    return (
        <div>
            <h1>HTML</h1>
            {skills.map((skill, index) => (
                <div key={skill.id}>
                    <button onClick={() => Show(index)}>
                        {skill.name} {activeId === skill.description && (
                            <p>{activeId}</p>
                        )}
                    </button>
                </div>
            ))}


        </div>
    )
}
export default App;

*/






import React, { useState } from "react";
import "./Attendance.css";

function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mouse", price: 2000 },
  ]);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!productName.trim() || !price.trim()) {
      alert("Please fill both fields");
      return;
    }

    if (editId !== null) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === editId
            ? { ...p, name: productName, price: Number(price) }
            : p
        )
      );
      setEditId(null);
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: Number(price),
      };
      setProducts([...products, newProduct]);
    }

    setProductName("");
    setPrice("");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setProductName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Product List Manager</h2>

        <div className="form-section">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />

          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />

          <button className="add-btn" onClick={handleAddOrUpdate}>
            {editId !== null ? "Update Product" : "Add Product"}
          </button>
        </div>

        <hr />

        <h3 className="subtitle">Products List</h3>

        <div className="product-list">
          {products.length === 0 ? (
            <p className="empty">No products added yet.</p>
          ) : (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>Rs. {product.price.toLocaleString()}</p>
                </div>
                <div className="actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;