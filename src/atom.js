import { atom, selector } from 'recoil';
import axios from 'axios';

/* export const networkAtom = atom({
  key: 'networkAtom',
  default: 104,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const notificationAtom = atom({
  key: 'notificationAtom',
  default: 12,
});

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 0,
});
export const totalnotificationselector= selector({
  key: "totalnotificationselector",
  get: ({ get }) =>{
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
  }
}) */

  export  const notifications = atom({
    key : "notifications",
    default : 
      /* network: 0,
      jobs: 0,
      messaging : 0,
      notification :0 */ 
      selector({
        key : "networkAtomselector", 
        get : async () => {
          //await new Promise(r => setTimeout(r , 500))
          const res = await axios.get("https://sum-server.100xdevs.com/notifications");
        return res.data ;
      }})
    })

  export const totalnotificationselector = selector({
    key : "totalnotificationselector",
    get: ({get}) => {
      const allsumdata = get(notifications);
      return allsumdata.network +
      allsumdata.jobs+
      allsumdata.messaging +
      allsumdata.notification
    }
  })
