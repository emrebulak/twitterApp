import Tweet from "./Tweet";
import Send from "./Send";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Feed = ({setCount}) => {

  const [tweets, setTweets] = useState();

  useEffect(() => {
    const tweetsCol = collection(db, 'tweets');
    const q = query(tweetsCol, orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(q, (snapshot) => {
      const temp = [];
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setCount(temp.length);
      setTweets(temp);
    });
    return () => unsub();
  }, []);


  return (
    <div className="h-full overflow-y-scroll">
      <div className="p-4 font-bold border-b border-zinc-400">
        <h2>Anasayfa</h2>
      </div>

      <Send />

      <div>
        {
          tweets?.map((tweet)=> <Tweet key={tweet?.id} tweet={tweet}/>)
        }        
      </div>
    </div>
  )
}

export default Feed