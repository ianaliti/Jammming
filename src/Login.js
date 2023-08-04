import React from 'react';

const auth_endpoint = 'https://accounts.spotify.com/authorize';
const spotify_client_id = '20902d6883cf474a9d9eac6475aad534';
const localhost_endpoint = 'http://localhost:3000';
const response_type = 'token';
const scope = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';



export default function Login() {

  return (
    <div>
        <a 
          className='btn btn-success btn-lg' 
          href={`${auth_endpoint}?client_id=${spotify_client_id}&redirect_uri=${localhost_endpoint}&response_type=${response_type}&scope=${scope}`}
        >Login with Spotify</a>
    </div>
  )
}
