import {useEffect} from 'react';
function App() {

  useEffect(() => {
     async function fetchNews(){
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=in",{
          method : 'GET',
          headers : {
            'Authorization' : 'de091cc109fd404e8dc8a6620e954060'
          }
        });
        let data = await res.json();
        console.log(data.articles);

     }

     fetchNews();
  },[])
  return (
    <div className="App">
     

    
    </div>
  );
}

// Api Key = de091cc109fd404e8dc8a6620e954060



export default App;
