import { useState } from "react";
import Posts from "./Main/Posts";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]); // Estado para armazenar os links
  const [newLink, setNewLink] = useState({
    title: "",
    url: "",
  });

  const handleAddLink = () => {
    // Adiciona um novo link ao estado
    if (newLink.title && newLink.url) {
      setLinks([...links, { title: newLink.title, url: newLink.url }]);
      setNewLink({ title: "", url: "" }); // Limpa os inputs
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLink((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="divPosts">
      <div className="containnerTitlePosts">
        <hr />
        <p>Itens salvos</p>
        <hr />
      </div>

      {/* Formulário para adicionar links */}
      <div className="addLinkForm">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newLink.title}
          onChange={handleInputChange}
        />
        <input
          type="url"
          name="url"
          placeholder="URL"
          value={newLink.url}
          onChange={handleInputChange}
        />
        <button onClick={handleAddLink}>Adicionar Link</button>
      </div>

      {/* Renderiza os links dinamicamente */}
      {links.map((link, index) => (
        <Posts
          key={index}
          titlePost={link.title}
          contentLink={link.url}
          iconLink="https://via.placeholder.com/50" // Ícone de exemplo
        />
      ))}
    </div>
  );
}

export default App;
