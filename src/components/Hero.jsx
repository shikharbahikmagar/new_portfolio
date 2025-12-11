import p1 from '../assets/p1.png';
import { TypeAnimation } from 'react-type-animation';
import overlay from '../assets/overlay.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section className="md:m-20 lg:m-16 h-auto md:mt-4 flex flex-col sm:flex-row justify-around text-white p-10"
      style={{
        backgroundImage: `url(${overlay})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '10%',
        backgroundPositionY: '80%',
        backgroundSize: 'cover',

      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: .4, type: 'spring', stiffness: 100 }}>
    </motion.section>
  );
};

export default Hero;
