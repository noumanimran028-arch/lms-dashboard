/*import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Attendance() {
  async function my(formData) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Hello World");
  }

  return (
    <form action={my}>
      <input type="text" name="name" placeholder="Enter your name" />
      <br />

      <input type="email" name="email" placeholder="Enter your email" />
      <br />

      <input type="tel" name="phone" placeholder="Enter your phone" />
      <br />

      <SubmitButton />
    </form>
  );
}

export default Attendance;
*/







/*
import {useFormStatus} from "react-dom";

function SubmitBtn(){
  const {pending}  = useFormStatus();
  return(
    <>
    <button type = "submit" 
    disabled = {pending}>
    {pending ? "Submitting...":"Submit"}
    </button>
    </>
  )
}

function Attendance(){

  async function my(formData) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Hello World");
  }

return (
    <div>
      <form action={my}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
        />

        <SubmitBtn />
      </form>
    </div>
  );
}

export default Attendance;
*/


/*import {useFormStatus} from "react-dom";

function Submit(){
  const {pending} = useFormStatus();

  return(
    <div>
    <button type = "Submit"
    disabled = {pending}>
    {pending ? "Submitting..." :"Submit"}
    </button>
    </div>
  )
}
*/

/*function Attendance(){
  async function my(formData){
    await new Promise((resolve) =>{
      setTimeout(()=>{
        console.log("Hello form fill hoa");
        resolve();
      }, 3000);
    });
  }

  return(
    <div>
    <form action = {my}>
    <input type = "text" />
    <Submit />
    </form>
    
    </div>
  )
}

export default Attendance;
*/

/*
Without useTransition
import { useState } from "react";

function Attendance() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

    for (let i = 0; i < 1000000000; i++) {
      // Heavy work
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}
*/

/*import { useState, useTransition } from "react";

function Attendance() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1);
    });
  };

  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleClick}>
        Increase
      </button>

      {isPending && <p>Updating...</p>}
    </>
  );
}
  */







/*
import { useFormStatus } from "react-dom";
import { useState, useRef } from "react";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}</button>
  );
}

function Attendance() {
  const ref1 = useRef();
  const [show, showState] = useState([]);
  async function my(formData) {
    await new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          name: ref1.current.value
        }
        const update = [...show, data];
        showState(update);
        console.log(update);
        resolve();
      }, 3000);
    });
  }

  const Delete = (index) =>{
  const update = show.filter((_, i) => i!=index);
  showState(update);
  console.log(update);
  }
  return (
    <div>
      <form action={my}>
        <h1>Hello Students</h1>
        <input type="text" ref={ref1} />
        <Submit />
        {show.map((shw, index) => {
        return <h2 key={index}>{shw.name}{" "}<button type="button" onClick = {()=>{Delete(index)}}>Delete</button></h2>;
        })}
      </form>
    </div>
  )
}
  */

/*import { useState, useRef } from "react";
import "./Attendance.css";

function Attendance() {
  const [list, setList] = useState([]);
  const ref1 = useRef();
  const ref2 = useRef();

  const Add = () => {
    const name = ref1.current.value.trim();
    const roll = ref2.current.value.trim();

    if (!name || !roll) return; // prevent empty entries

    setList([
      ...list,
      { name, roll, status: "" }
    ]);

    ref1.current.value = "";
    ref2.current.value = "";
    ref1.current.focus();
  };

  const markStatus = (index, status) => {
    const updated = list.map((student, i) =>
      i === index ? { ...student, status } : student
    );
    setList(updated);
  };

  return (
    <div className="attendance-app">
      <header className="app-header">
        <h1>Attendance Tracker</h1>
        <p className="subtitle">Mark students present or absent</p>
      </header>

      <div className="form-card">
        <input
          type="text"
          ref={ref1}
          placeholder="Student name"
          className="input-field"
        />
        <input
          type="number"
          ref={ref2}
          placeholder="Roll number"
          className="input-field"
        />
        <button onClick={Add} className="add-btn">
          Add Student
        </button>
      </div>

      <div className="student-list">
        {list.length === 0 && (
          <p className="empty-state">No students added yet.</p>
        )}

        {list.map((student, index) => (
          <div
            key={index}
            className={`student-card ${
              student.status ? `status-${student.status}` : ""
            }`}
          >
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="student-roll">Roll #{student.roll}</span>
              {student.status && (
                <span className={`status-badge ${student.status}`}>
                  {student.status === "present" ? "Present" : "Absent"}
                </span>
              )}
            </div>

            <div className="attendance-buttons">
              <button
                type="button"
                className="present-btn"
                onClick={() => markStatus(index, "present")}
              >
                Present
              </button>
              <button
                type="button"
                className="absent-btn"
                onClick={() => markStatus(index, "absent")}
              >
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
import { useState, useRef } from "react";
import "./Attendance.css";

function Attendance() {
  const [Update, setUpdate] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const ref1 = useRef(null); // Name
  const ref2 = useRef(null); // Roll No
  const ref3 = useRef(null); // Email
  const ref4 = useRef(null); // Semester

  const adStudents = () => {
    if (
      !ref1.current.value ||
      !ref2.current.value ||
      !ref3.current.value ||
      !ref4.current.value
    ) {
      return;
    }
    const data = {
      id: Date.now(),
      name: ref1.current.value,
      rollNo: ref2.current.value,
      email: ref3.current.value,
      semester: ref4.current.value,
    };

    const update = [...Update, data];
    setUpdate(update);
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    ref4.current.value = "";
  };

  // DELETE
  const studentDelete = (id) => {
    const updatedStudents = Update.filter((student) => student.id !== id);
    setUpdate(updatedStudents);
  };

  // EDIT
  const editStudent = (id) => {
    const student = Update.find((student) => student.id === id);
    setEditId(id);
    ref1.current.value = student.name;
    ref2.current.value = student.rollNo;
    ref3.current.value = student.email;
    ref4.current.value = student.semester;
  };

  // UPDATE
  const UpdateStudent = () => {
    const updatedStudents = Update.map((student) => {
      if (student.id === editId) {
        return {
          ...student,
          name: ref1.current.value,
          rollNo: ref2.current.value,
          email: ref3.current.value,
          semester: ref4.current.value,
        };
      }
      return student;
    });

    setUpdate(updatedStudents);
    setEditId(null);
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    ref4.current.value = "";
  };

  return (
    <div className="attendance-wrapper">
      <div className="admin-container">
        <header className="admin-header">
          <div className="header-glow"></div>
          <h1>
            <span className="gradient-text">Admin Dashboard</span>
          </h1>
          <p className="subtitle">Manage student attendance records</p>
          <div className="stats-badge">
            <span className="stat-dot"></span>
            Total Students: <strong>{Update.length}</strong>
          </div>
        </header>

        <div className="student-form">
          <div className="search-wrapper">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search student by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Student Name</label>
              <input type="text" ref={ref1} placeholder="e.g. Ali Khan" />
            </div>

            <div className="input-group">
              <label>Roll No</label>
              <input type="text" ref={ref2} placeholder="e.g. 2024-CS-01" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" ref={ref3} placeholder="student@email.com" />
            </div>

            <div className="input-group">
              <label>Semester</label>
              <input type="text" ref={ref4} placeholder="e.g. 5th" />
            </div>
          </div>

          <button
            type="button"
            className={`action-btn ${editId === null ? "add-btn" : "update-btn"}`}
            onClick={editId === null ? adStudents : UpdateStudent}
          >
            {editId === null ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Student
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Update Student
              </>
            )}
          </button>
        </div>

        <div className="students-list">
          {Update.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>No Students Yet</h3>
              <p>Add your first student using the form above</p>
            </div>
          ) : (
            Update.filter((up) =>
              up.name.toLowerCase().includes(search.toLowerCase())
            ).map((up) => (
              <div
                className={`student-card ${editId === up.id ? "editing" : ""}`}
                key={up.id}
              >
                <div className="card-avatar">
                  {up.name.charAt(0).toUpperCase()}
                </div>

                <div className="card-info">
                  <h3>{up.name}</h3>
                  <div className="card-details">
                    <span className="detail-item">
                      <span className="label">Roll:</span> {up.rollNo}
                    </span>
                    <span className="detail-item">
                      <span className="label">Email:</span> {up.email}
                    </span>
                    <span className="detail-item">
                      <span className="label">Semester:</span> {up.semester}
                    </span>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    type="button"
                    className="icon-btn edit-icon"
                    onClick={() => editStudent(up.id)}
                    title="Edit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="icon-btn delete-icon"
                    onClick={() => studentDelete(up.id)}
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
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

export default Attendance;