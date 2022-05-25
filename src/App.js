import './App.css';
import {useState} from 'react';
import Upload from './components/Upload'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = (e) => {
    let formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:8080/uploadFile', formData, {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }).then((res) => {console.log('success')})
    .catch((err) => {console.log(err)});
  }


  return (
    <div className="App">

      <form>
        <div>
          <input type="file" name="file" 
          onChange = {handleFile}/>

        </div>
        <button onClick={handleUpload}> Upload </button>
      </form>

    </div>
  );
}

export default App;
