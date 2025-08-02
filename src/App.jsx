//import React, { useMemo, useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { networkAtom, jobsAtom, notificationAtom, messagingAtom  , totalnotificationselector} from './atom';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
  const notificationcount = useRecoilValue(networkAtom);
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
}

export default App;


