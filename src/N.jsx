import { useState, useRef } from 'react';
import './N.css'
function App() {
    const [Gpa, setGpa] = useState(
        JSON.parse(localStorage.getItem("Save")) || [
            {
                sgpa: 3.76,
                name: "Muhammad Nouman",
                roll: "SU92-BSSEM-F25-243",
                cgpa: 3.80,
                term: "3rd Semester",
                batch: "2025"
            }
        ]
    );
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const update = () => {
        //const value = Number(ref1.current.value);
        const data = {
            sgpa: Number(ref1.current.value),
            name: ref2.current.value,
            roll: ref3.current.value,
            cgpa: Number(ref4.current.value),
            term: ref5.current.value,
            batch: ref6.current.value
        };

        const SavedData =
            JSON.parse(localStorage.getItem("Save")) || [];

        console.log(data.value);
        const New = [...SavedData, data];
        setGpa(New);
        localStorage.setItem("Save", JSON.stringify(New));
    }


    //Courses

    const defaultCourses = [
        {
            id: 1,
            name: "Data Structures and Algorithms",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
            link: "https://www.google.com/search?tbm=isch&q=data+structures+and+algorithms"
        },
        {
            id: 2,
            name: "Database Management Systems",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
            link: "https://www.google.com/search?tbm=isch&q=database+management+systems"
        },
        {
            id: 3,
            name: "Digital Logic Design",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
            link: "https://www.google.com/search?tbm=isch&q=digital+logic+design+circuits"
        },
        {
            id: 4,
            name: "Probability and Statistics",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600",
            link: "https://www.google.com/search?tbm=isch&q=probability+and+statistics+mathematics"
        },
        {
            id: 5,
            name: "Communication Skills",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
            link: "https://www.google.com/search?tbm=isch&q=communication+skills+education"
        },
        {
            id: 6,
            name: "Software Engineering",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
            link: "https://www.google.com/search?tbm=isch&q=software+engineering+architecture"
        },
        {
            id: 7,
            name: "Computer Programming Lab",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
            link: "https://www.google.com/search?tbm=isch&q=computer+programming+lab"
        }
    ];


    const [Courses, setCourses] = useState(() => {
        return JSON.parse(localStorage.getItem("Courses"))
            ?? defaultCourses;
    });

    const DeleteCourse = (id) => {
        const NewCourses = Courses.filter(
            (item) => item.id !== id
        );

        setCourses(NewCourses);
        localStorage.setItem("Courses", JSON.stringify(NewCourses));
    };


    //Search filter

    const [search, setSearch] = useState("");

    const FilterCourses = Courses.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <Navbar search={search} setSearch={setSearch} />
            <input type="number" ref={ref1} placeholder="Enter SGPA" />
            <input type="number" ref={ref4} placeholder="Enter CGPA" />
            <input type="text" ref={ref2} placeholder="Enter name" />
            <input type="text" ref={ref3} placeholder="Complete roll number" />
            <input type="text" ref={ref5} placeholder="Current Term" />
            <input type="text" ref={ref6} placeholder="Enter Batch" />

            <button onClick={update}>Save</button>
            <div className="name">
                <div className="nameCard">
                    <h3>{Gpa.length > 0 ? Gpa[Gpa.length - 1].name : 0}</h3>
                    <p>{Gpa.length > 0 ? Gpa[Gpa.length - 1].roll : "Su92-BSSEM-F25-243"}
                        BS Software Engineering | Faculty of Computer Science and Information Technology-GCL</p>
                </div>

                <div className="nameCard">
                    <h3>SGPA</h3>

                    <p>{Gpa.length > 0 ? Gpa[Gpa.length - 1].sgpa : 0}</p>
                </div>

                <div className="nameCard">
                    <h3>CGPA</h3>

                    <p>{Gpa.length > 0 ? Gpa[Gpa.length - 1].cgpa : 0}</p>
                </div>
            </div>

            <div className="parent">
                <div className="child">
                    <h3>Roll Number</h3>
                    <h6>{Gpa.length > 0 ? Gpa[Gpa.length - 1].roll : "SU92-BSSEM-F25-243"}</h6>
                </div>

                <div className="child">
                    <h3>Current Term</h3>
                    <h6>{Gpa.length > 0 ? Gpa[Gpa.length - 1].term : 0}</h6>
                </div>

                <div className="child">
                    <h3>Batch</h3>
                    <h6>{Gpa.length > 0 ? Gpa[Gpa.length - 1].batch : 0}</h6>
                </div>
            </div>

            <div className="courses">
                <h3>Welcome to 21 century courses</h3>
            </div>


            <div className="courseCards">
         {FilterCourses.map((item) => (
        <div className="Cards" key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.name} />
            </a>

            <p>{item.name}</p>

            <button onClick={() => DeleteCourse(item.id)}>
                Delete
            </button>
        </div>
    ))}
</div>

            <Footer />
        </>
    )
}


function Footer() {
    return (
        <div className="FOOT">
            <div className="footerContent">

                <div className="footerAbout">
                    <h2>Student LMS</h2>
                    <p>
                        Learning, Growing and Building a Better Future.
                    </p>
                </div>

                <div className="footerLinks">
                    <h3>Quick Links</h3>

                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        GitHub
                    </a>

                    <a href="https://wa.me/" target="_blank" rel="noreferrer">
                        WhatsApp
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        Instagram
                    </a>

                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        YouTube
                    </a>
                </div>

                <div className="footerContact">
                    <h3>Contact Us</h3>

                    <p>
                        Phone: <a href="tel:+923001234567">+92 300 1234567</a>
                    </p>

                    <p>
                        WhatsApp: <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
                            Chat with us
                        </a>
                    </p>

                    <p>
                        Email: <a href="mailto:info@example.com">
                            info@example.com
                        </a>
                    </p>
                </div>

            </div>

            <div className="footerBottom">
                <p>© 2026 Student LMS. All Rights Reserved.</p>
            </div>
        </div>
    );
}

function Navbar({ search, setSearch }) {
    return (
        <nav className="navbar">
            <div className="navTitle">
                <h2>My LMS</h2>
            </div>

            <div className="navSearch">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="navRight">
                <button className="notification">🔔</button>

                <div className="navProfile">
                    <div className="navAvatar">N</div>
                    <div>
                        <h4>Nouman</h4>
                        <p>Administrator</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default App;