import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { ServiceCard } from "./service-card";
import { SectionWrapper } from "./hoc";
 function About() {   
  return (
      <>
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>Introdução</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="mt-4 text-secondary text-lg max-w-3xl leading-normal"
        >
          Desenvolvedor web com experiência em React, Angular e Next.js,Html5, css, Seo,
          otimização e liderança técnica. Altamente dedicado, estou atualmente aprofundando
          meus conhecimentos em Design Patterns, Clean Architecture e Domain-Driven Design
          (DDD) em Node e Nest.js.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
      </>
    )
}

export default SectionWrapper(About, "about");