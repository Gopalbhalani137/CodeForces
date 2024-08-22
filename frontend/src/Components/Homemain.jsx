import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import axios from 'axios';
import animationData from '../Animation/animation1.json';
import animationData2 from '../Animation/animation2.json';
import Repo from './Repo';

const Homemain = () => {
  const [rerender, setRerender] = useState(false);
  const [handle, setHandle] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const clientId = 'Ov23liZ0Gy07QeODHBbY';

  useEffect(() => {
    const querystring = window.location.search;
    const urlparams = new URLSearchParams(querystring);
    const code = urlparams.get('code');
    console.log(code);

    if (code && localStorage.getItem('accessToken') === null) {
      async function getAccessToken() {
        await fetch(`http://localhost:3000/getAccessToken?code=${code}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.access_token) {
            window.location.reload();
            localStorage.setItem('accessToken', data.access_token);
            setRerender(!rerender);
          }
        });
      }
      getAccessToken();
    }
  }, [rerender]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const anima2 = {
    loop: false,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const SignIn = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
  };

  const Verify = async () => {
    try {
      const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
      if (response.data.status === 'OK') {
        setVerificationResult(true);
      } else {
        setVerificationResult(false);
      }
    } catch (error) {
      setVerificationResult(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center sm:min-h-screen min-h-72">
        <p className="md:text-7xl text-3xl text-center space-y-7 px-4 md:w-4/5">
          Welcome to Your Automated Coding Portfolio
        </p>
        <p className='md:text-2xl text-3xl text-center space-y-1 px-4 md:w-4/5 text-gray-700 mt-4 md:flex hidden'>
          Tired of manually uploading your coding solutions? Our platform automates the process for you! 
          With just a few clicks, you can push your Codeforces solutions directly to your GitHub repository.
        </p>
        {
          localStorage.getItem('accessToken') ? (
            <div className='mt-4 flex flex-row gap-5 items-center'>
              <input 
                type="text" 
                id="first_name" 
                data-theme="coffee" 
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800 text-white text-center" 
                placeholder="CF handle" 
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                disabled={verificationResult === true} // Disable input if verification is successful
                required 
              />
              {
                verificationResult === null || verificationResult === false ? (
                  <button className='bg-black p-2 rounded-lg text-white' onClick={Verify}>
                    Verify
                  </button>
                ) : verificationResult ? (
                  <Lottie options={anima2} height={50} width={50} />
                ) : null
              }
              {
                verificationResult === false && (
                  <p className="text-red-500">Handle not found! Please try again.</p>
                )
              }
            </div>
          ) : (
            <button 
              className="rounded-3xl bg-black text-white p-1 pl-3 mt-6 flex flex-row justify-center items-center min-h-10"
              onClick={SignIn}
            >
              Get started
              <div className="h-9 w-9 ml-2 mr-3 rounded-full">
                <Lottie options={defaultOptions} />
              </div>
            </button>
          )
        }
      </div>
      <div>
        {verificationResult ? (
          <Repo/>
        ) : null}
      </div>
    </>
  );
}

export default Homemain;
