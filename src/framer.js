import { motion } from "framer-motion"

export default function Framer () {
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 5 }}
  /> 
  return ( <div>
    <h1 className="bg-gray-800 text-2xl text-white">The beginning sha </h1>
  </div>)
}