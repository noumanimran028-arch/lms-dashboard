
      import {useState, useRef} from 'react';
      function App(){
      const [admin, setadmin] = useState("");
      const [student, setstudent] = useState("");

      const [text1, settext1] = useState("No role found");
      const [text2, settext2] = useState("No role found");
      class Admin{

          constructor(role = "" ){
          this.role = role;
        }

        AdminData(){
          setadmin(this.role);
          console.log(this.role);
        }
      }
      
        class Student extends Admin{

          constructor(role = "", section = ""){
          super(role);
          this.section = section;
        }

        StudentData(){
          setstudent(this.section);
          console.log(this.section);
        }
      }
      const ref1 = useRef(null);
      const ref2 = useRef(null);
      const Show = () =>{
      const obj1 = new Student(ref1.current.value, ref2.current.value);
      obj1.AdminData();
      obj1.StudentData();
      settext1("Admin pannel");
      settext2("Student pannel");
      }

      return(
        <div>
            <input type = "text" ref = {ref1} placeholder =  "Enter your role"/>
            <input type = "text" ref = {ref2} placeholder =  "Enter your section"/>
            <button onClick = {Show}>SHOW</button>
            <h1>{text1}</h1>
            <p>{admin}</p>
            <h1>{text2}</h1>
            <p>{student}</p>
        </div>
      )
    }

export default App;
