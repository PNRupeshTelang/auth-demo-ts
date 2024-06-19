import React, { useEffect, useState, useTransition } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { useSession } from '../providers/SessionProvider';
import { useLocalStorage, useLocalStorageSecured } from '../hooks/useLocalStorage';
import { useQueryString } from '../hooks/useQueryString';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { couldStartTrivia } from 'typescript';
import useExecuteAsync from '../hooks/useExecuteAsync';
import TransitionDemo from '../controls/TransitionDemo';
import UseTransitionDemo from '../controls/UseTransitionDemo';
import { useApi } from '../hooks/useApi';
import { encryptData, decryptData } from '../utils/Encryption';

import encrypted from "../encrypted.json"
import BreadCrumb from '../controls/fluentui/BreadCrumb';

export class ISessionData {
  UserID: number;
  SessionID: number;
  OnBehalfOfUserID: number;
  CompanyID: number;
  SubscriberID: number;
  AppID: string;
  AppVersion: number;
  AppPlatform: string;
  IsDeveloper: boolean;
  ServiceAccessToken: string;
}

var cpjson = {}
var hpjson = { "heading": "Hello" }


var finalJson = { ...cpjson, ...hpjson }



const Home = () => {
  const [queryParam, setQueryParam] = useSearchParams();

  const { user, logout } = useAuth();
  const { theme, language } = useSession();


  const data = useApi("Core.GMst_SelectFewFromMultipleTablesForMobileSplashScreen",
    JSON.stringify({
      ConfigurationNetwork: "Public"
    }),
    { Language: language, Theme: theme }
  );

  const components = data[0].items;

  var session = {
    "CompanyID": "217",
    "SubscriberID": "1140",
    "AppID": "com.panthernails",
    "AppPlatform": "web",
    "AppVersion": "1.0.0",
    "endpoint": "https://oneapp.panthernails.com/DPWA/api/device/Execute"
  }


  var encryptedUrl = encryptData(session, "MpcwMr@Super#ero3");
  console.log("encryptedUrl", encryptedUrl);

  var decryptedUrl = decryptData(encryptedUrl, "MpcwMr@Super#ero3");
  console.log("decryptedUrl", decryptedUrl);



  // var decryptedUrl2 = decryptData(encrypted.session, "abcd12345");
  // console.log("decryptedUrl2", decryptedUrl2);




  // var sessionData = {
  //   UserID: 100,
  //   SessionID: 10001,
  //   OnBehalfOfUserID: 0,
  //   CompanyID: 107,
  //   SubscriberID: 100,
  //   AppID: 'com.panthernails.rasikapp',
  //   AppVersion: 1.0,
  //   AppPlatform: 'Web',
  //   IsDeveloper: 0,
  //   ServiceAccessToken: 'BBADCACCBCCJDC - BBADCACCBCCJDC'
  // }
  // console.log(sessionData);
  // console.log(JSON.stringify(sessionData));

  return <div>Home Page

    <h1>Welcome {user.username}</h1>
    <h1>Session {theme} {language}</h1>

    <BreadCrumb />

    <UseTransitionDemo />
    <TransitionDemo />

    <button onClick={() => { queryParam.set('color', 'red'); setQueryParam(queryParam); }}>Red</button>
    <button onClick={() => { queryParam.set('color', 'green'); setQueryParam(queryParam); }}>Green</button>
    <button onClick={() => { queryParam.set('color', 'blue'); setQueryParam(queryParam); }}>Blue</button>

    <button onClick={() => { queryParam.set('size', 'l'); setQueryParam(queryParam); }}>Large</button>
    <button onClick={() => { queryParam.set('size', 'xl'); setQueryParam(queryParam); localStorage.setItem('data', 'xl') }}>Extra Large</button>

    {/* 
    <p>
      {JSON.stringify(components)}
    </p>
    <p>
      {
        components.map((component, index) => {
          return (
            <p>
              {component.ConfigurationName} : {component.ConfigurationValue}
            </p>
          )
        })
      }
    </p> */}

    <p>{queryParam.get('color')}</p>
    <p>{queryParam.get('size')}</p>

  </div>;
};

export default Home;
