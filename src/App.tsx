import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thofurtado.png",
      name: "Thomas Furtado",
      role: "UX Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-15 17:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/PetersonMunuera.png",
      name: "Peterson Munuera",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-10 12:42:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
