import './App.css';
import {useState} from 'react';
import Upload from './components/Upload'

function App() {

  const [files, setFiles] = useState([{
    name: "myFile.pdf"
  }])


  

  return (
    <div className="App">
      <nav>
        <ul>
          <li>menu</li>
          <li>settings</li>
        </ul>
      </nav>
      <Upload files={files} setFiles={setFiles} />
    </div>
  );
}

export default App;
