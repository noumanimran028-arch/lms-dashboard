import "./App.css";

const partners = ["HubSpot", "loom", "GitLab", "LiveChat", "monday.com"];
const tabs = ["Design", "Development", "Business", "Data Science", "Marketing"];

// 6 cards ka data — yahan se title/author badal sakte hain
const courses = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  lesson: "10x Lesson",
  category: "Design",
  title: "Python for Financial Analysis Next and Algorithmic Trading",
  author: "Adam Smith",
  role: "Python Developer",
  students: "50+ Student",
  stars: "⭐ ⭐ ⭐ ⭐ ⭐",
}));

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#">Edujar</a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Course</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>

        <button>Login</button>
        <button>Get Started</button>
      </nav>

      {/* Hero */}
      <h1>Best courses are waiting to enrich your skill</h1>
      <p>
        Provides you with the latest online learning system and material that
        help your knowledge growing.
      </p>

      <div className="input-Group">
        <input type="text" placeholder="Want to learn?" />
        <button>Explore</button>
      </div>

      {/* Partners */}
      <h2>Our Course Partners</h2>
      <div className="Group1">
        {partners.map((name) => (
          <div className="box1" key={name}>
            {name}
          </div>
        ))}
      </div>

      {/* Popular Courses */}
      <div className="Popular" style={{ display: "flex" }}>
        <h2>Popular Courses</h2>
        {tabs.map((tab) => (
          <button key={tab}>{tab}</button>
        ))}
      </div>

      {/* Cards */}
      <div className="Group2">
        {courses.map((c) => (
          <div className="box2" key={c.id}>
            <p>{c.lesson}</p>
            <button>{c.category}</button>

            <h2>{c.title}</h2>

            <p>
              {c.author} · {c.role}
            </p>
            <p>{c.students}</p>

            <div>{c.stars}</div>
            <a href="#">Enroll Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;