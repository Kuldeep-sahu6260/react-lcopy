
// import './App.css';

// function App() {
//   return (
  

//     <div className='container' > 
//     <div className='header'>
//       <h1 >code help</h1>
//       <p> THis is best site I ever visit in my life what about our experiness ain this site make me ahhpy 
//       </p>

//     </div>
//     <div className='gird-container'>
//      <div className='item'>
//           <img src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
//      <div className='item'>
//           <img src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
//      <div className='item'>
//           <img src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
//      <div className='item'>
//           <img src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
//      <div className='item'>
//           <img src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
//      <div className='item'>
//           <img className='img' src="https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.webp?b=1&s=170667a&w=0&k=20&c=uDPSWC3gH0B6VXRh01ujRdnckC-qM1Nin3ChYoD-sFQ="/>
//           <div className='gird-title'>
//             <h1>kuldere sahu</h1>
//             <p> This is my first project</p>

//           </div>
//           <div className='gird-footer'>
//                <div className='left'>
//                <img src=""/>
//                <div className='subpart'>
//                 <h2>kuldeerp sahu</h2>
//                 <h4>like as you</h4>

//                </div>
//                </div>
             
//              <div className='right'>
//                <button className='button'>submit</button>
//              </div>
//           </div>
//      </div>
    
//     </div>

//     </div>
//   );
// }

// export default App;

import React,{useState,useEffect} from 'react'
import { Auth } from './components/auth';
import {db,auth,storage} from "./config/firebase";
import {getDocs,collection, addDoc,deleteDoc,doc,updateDoc} from "firebase/firestore"
import { ref,uploadBytes } from 'firebase/storage';


const App = () => {
  const [movielist, setMovielist] = useState([]);
  const moviesCollectionRef = collection(db,"movies");

  // New movie states
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState(0);
  const [isMovieOscar, setIsMovieOscar] = useState(false);

  // file upload
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = async()=>{
    if(!fileUpload) return;

    const filesFolderRef = ref(storage,`project1/${fileUpload.name}`);

     try {
      await uploadBytes(filesFolderRef,fileUpload);
     } catch (error) {
       console.log(error);
     }

  }




  // update title
  const [updatedTitle, setUpdatedTitle] = useState("");

  const updateMovieTitle = async (id)=>{
   try {

    const movieDoc = doc(db,"movies",id);
    await updateDoc(movieDoc,{title:updatedTitle});

    getMovieList();
    
   } catch (error) {
      console.log(error)
   }
    
  }


//   const  onSubmitMovie = async()=>{
//     try {

//       await addDoc(moviesCollectionRef,{title:title, releaseDate : releaseDate, receivedAnOscar:isMovieOscar});

//       getMovieList();
      
//     } catch (error) {
//        console.log(error);
//     }
// }


const  onSubmitMovie = async()=>{
  try {

    await addDoc(moviesCollectionRef,{title:title, releaseDate : releaseDate, receivedAnOscar:isMovieOscar,userId:auth?.currentUser.uid});

    getMovieList();
    
  } catch (error) {
     console.log(error);
  }
}



const getMovieList = async()=>{
       
  try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc)=>({...doc.data(),id: doc.id}));

    console.log(filteredData);

    setMovielist(filteredData)

    
  } catch (error) {
     console.log(error)
  }
}



  // get all movie
   useEffect(()=>{
  

    getMovieList();

  },[]);


  // delete movie
  const deleteMovie = async (id)=>{
    try {

      const movieDoc = doc(db,"movies",id);
      await deleteDoc(movieDoc);

      getMovieList();
      
    } catch (error) {
        console.log(error);
    }

  }

 

  
  return (
    <div>
      
      <Auth/>

      <div>
        <input placeholder='Movie title........' onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder='Release date....' type='number' onChange={(e)=> setReleaseDate(e.target.value)} />
        <input type='checkbox' checked={isMovieOscar} onChange={(e)=> setIsMovieOscar(e.target.checked)} />
        <label>Recived an Oscar</label>

        <button onClick={onSubmitMovie} >submit Movie</button>
      </div>





{/* display movie  */}
      <div>
        {movielist.map((movie)=>(
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p> Date: {movie.releaseDate} </p>
            <button onClick={()=>deleteMovie(movie.id)} >Delete Movie</button>

            {/* update title */}

            <input placeholder='new Title...' onChange={(e)=> setUpdatedTitle(e.target.value)} />
            <button onClick={()=> updateMovieTitle(movie.id)}>update title</button>
          </div>
        ))}
      </div>




{/* sending image */}

      <div>

        <input type='file' onChange={(e)=>setFileUpload(e.target.files[0])} />

        <button onClick={uploadFile}>upload file</button>

      </div>


      
    </div>
  )
}

export default App
