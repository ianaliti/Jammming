import { React, useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchButton from './buttons/SearchButton';
import NavBar from './UI/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Track from './components/Track';
import Tracklist from './components/Tracklist';


const auth_endpoint = 'https://accounts.spotify.com/authorize';
const spotify_client_id = '20902d6883cf474a9d9eac6475aad534';
const localhost_endpoint = 'http://localhost:3000';
const response_type = 'code';
const spotify_client_secret = '31fcd3efe0864552b85db24f22352a57';


function App() {

  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    var authOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body:'grant_type=client_credentials&client_id=' + spotify_client_id + '&client_secret=' + spotify_client_secret
    }  
    fetch('https://accounts.spotify.com/api/token', authOptions)
    .then(response => response.json())
    .then(date => setAccessToken(date.access_token))
  }, [])


  //Search 

  async function search() {
    console.log('Searching for ' + searchInput)

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ accessToken
      }
    }
    var artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(date => {return date.artists.items[0].id})

    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&limit=50', searchParameters)
    .then(response => response.json())
    .then(date =>{ 
      console.log(date)
      setAlbums(date.items)
    })

    console.log(albums)
    
  }


  return (
    <div>
      <NavBar />
      <SearchBar onChange={(e) => setSearchInput(e.target.value)} className="search-input"/>
      <SearchButton onClick={search}>
      Search
      </SearchButton>
      <Tracklist className='tracklist'>
        {albums.map((album, i) => {
        return (
          <Track key={i} >
            <img src={album.images[1].url} />
            {album.name}
          </Track>
        )})
      }
      </Tracklist>
    </div>
  );
}

export default App;
