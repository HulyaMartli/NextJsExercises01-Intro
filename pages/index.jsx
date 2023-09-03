import { useState } from "react";
function Header({ title }) {
    return <h2>{title ? title : 'Default title'}</h2>;
  }
  
  export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  
    const [likes, setLikes] = useState(0);
  
    function handleClick() {
      setLikes(likes + 1);
    }
  
    return (
      <div>
        <div className="logo">
          <h1>Next.js 👾</h1>
        </div>
        <Header title="Develop. Preview. Ship. 🚀" />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
  
        <button onClick={handleClick}>Like ({likes})</button>
      </div>
    );
  }