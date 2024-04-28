import { useRef , useState ,useEffect} from 'react'
// useState data ko store kara ne ke liye use hota h..

// useEffect basically api ke liye use hota h...
import './App.css';
import { uploadFile } from './services/api';
function App() {
  // iss liye store kara ne ke liye ye likhe h
  const [file,setFile] =useState('');

  const [result , setResult] = useState('');

  const fileInputRef = useRef();

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'

  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }

  console.log(file)
  // api use kar ne ke liye...
  useEffect(()=>{

    const getImage = async() =>{
      if(file){
        const data = new FormData();
        // yeh sirf name and details 
        data.append('name',file.name);
        // pura file hiii 👌
        data.append('file',file)
        
       let response =  await uploadFile(data);
       setResult(response.path);
      }
    }
   getImage()
  },[file])


  return (
    <div className='container'>
      <img src={logo} alt="banner" />

      <div className='wrapper'>
        <h1>Simple File Sharing!</h1>
        <p>Upload and Share the download link.</p>
        <button onClick={()=> onUploadClick() }>Upload</button>

        <input type='file'
         ref={fileInputRef} 
         style={{display:'none'}}


        //  iss se file aa jayegi .... store ho jayegi
          onChange={(e) => setFile(e.target.files[0])} />
        <a href={result} >{result}</a>
      </div>
    </div>

  );
}

export default App;
