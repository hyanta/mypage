import { useState, useEffect } from "react";
import {
   
  projectFirestore,
    projectStorage,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("pop");

    storageRef.put(file).on(
      "state_changed",
      // Get an object representing the document
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
