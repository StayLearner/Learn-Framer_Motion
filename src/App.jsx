import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const gridContainerVariants = {
    hidden:{opacity: 0},
    show:{
      opacity:1,
      transition:{
        staggerChildren: 0.25,
      },
    },
  }

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }



const App = () => {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 p-10 gap-10">

        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
         <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
        
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
          <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
        
      </motion.section>
    </div>
  )
}

export default App