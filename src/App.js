import './App.css';
import {useState} from "react";

function App() {
    const [name, setName] = useState("Hüseyin"); // state için,use State ayrdımı ile [] için state adı ve state değiştirecek fonksiyon adı ile tanımlanır. Defaultta verilebilir
    const [age, setAge] = useState(26);
    const [friends, setFriends] = useState(['fatos', 'tayfun']);
    const [address, setAddress] = useState({title: 'İstanbul', zip: 34567});

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>yaş {age}</h1>
        <button onClick={() => setName("Ahmet")}>change name</button>
        <button onClick={() => setAge(30)}>change age</button>

        <hr></hr>
        <h2>Arkadaslar</h2>
        {
            friends.map((row, index) => (
                <div key={index}>{row}</div>
            ))
        }
        {/*<button onClick={() => setFriends(friends.concat('ali'))}>add new friends</button>*/}
        <button onClick={() => setFriends([...friends, 'ali'])}>add new friends</button>
        <hr></hr>
        <h2>Adres</h2>
        <p>{address.title} {address.zip}</p>
        <button onClick={() => setAddress({...address, zip: 11111})}>address change</button>

    </div>
  );
}

export default App;
