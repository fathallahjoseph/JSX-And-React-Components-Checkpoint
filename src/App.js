import './App.css'; /* import my css */
import React from "react"; /* import react */
import Address from './component/profile/Address'; /* import my function Adresse */
import ProfilePhoto from "./component/profile/ProfilePhoto"; /* IMPORT my function ProfilePhoto */
import FullName from "./component/profile/FullName"; /* Import my function FullName */
/* function to return my Adresse , ProfilePhoto and FullName */
function App() {
  return (
<div className='div'>
  <Address/>
  <ProfilePhoto/>
  <FullName/>
  </div>
  );
}

export default App;
