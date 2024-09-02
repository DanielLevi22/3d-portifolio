import { styles } from "../styles";
import { ComputerCanvas } from "./computer-canvas";
import { motion } from "framer-motion";

export function Hero() {  
  return (
    <section className="relative w-full h-screen mx-auto">
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>	
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="size-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>

      <div>
        <h1 className={styles.heroHeadText}>Ola, meu nome é <span className="text-[#915eff]">Daniel</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>Desenvolvedor Full Stack</p>
      </div>
     </div>

      <ComputerCanvas />

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
      <a href="#about">
        <div className="w-8 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [ 0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"            
            }}
            className="size-3 rounded-full bg-secondary mb-1"
          >

          </motion.div>
        </div>
      </a>
    </div>

    </section>
  );
}