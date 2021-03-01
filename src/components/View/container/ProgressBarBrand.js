import React,{useEffect} from "react";
 
import { motion } from 'framer-motion'
import useStorage from "../../../hooks/useStorageBrand";

const ProgressBarBrand = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
   
  useEffect(() => {
    if (url) {
      setFile(null);
      }
    } , [url, setFile])

  return <motion.div className='progress-bar'
    initial={{ width: 0 }}
    animate={{ width: progress +'%' }}
  ></motion.div>;
};

export default ProgressBarBrand;


// <div className='progress-bar' style={{width: progress + '%'}} >progress</div>;