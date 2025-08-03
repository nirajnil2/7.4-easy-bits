import React, {  useEffect} from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import {  totalnotificationselector , notifications} from './atom';
import axios from 'axios';


function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
 /*  const notificationcount = useRecoilValue(networkAtom);
  const jobvalue = useRecoilValue(jobsAtom);
  const notificationAtomvalue = useRecoilValue(notificationAtom);
  const [messagingcount, setMessagingCount] = useRecoilState(messagingAtom); // ✅ Correct location

  const totalcount = useRecoilValue(totalnotificationselector);
  return (
    <>
      <button>Home</button>
      <button>MyNetwork ({notificationcount >= 100 ? '99+' : notificationcount})</button>
      <button>Job {jobvalue}</button>
      <button onClick={ ()=> setMessagingCount(0)} >
        Messaging ({messagingcount})
      </button>
      <button>Notification {notificationAtomvalue}</button>
      <button onClick={() => setMessagingCount(messagingcount + 1)}>Me({totalcount})</button>
    </>
  );
} */
 const [networkcount , setnetworkcount] = useRecoilState(notifications) ;
 const totalcountvalue  = useRecoilValue(totalnotificationselector);

/*  useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/notifications")
  .then( res => {
    setnetworkcount(res.data);
  })
 } , []) */
 return (
  <>
    <button>Home</button>

    <button>My network({networkcount.network >= 100 ? "99" : networkcount.network})</button>
    <button>Job({networkcount.jobs})</button>
    <button>Messaging({networkcount.messaging})</button>
    <button>Notification({networkcount.notification})</button>
    <button>Me ({totalcountvalue})</button>
    
  </>
 )

}

export default App;


