import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import SectionTitle from './SectionTitle';
import htmlLogo from '../assets/logos/html-1.svg';
import cssLogo from '../assets/logos/css.svg';
import tailwindCSS from '../assets/logos/tailwindcss.svg';
import jsLogo from '../assets/logos/javascript.svg';
import reactLogo from '../assets/logos/react.svg';
import nodeJSLogo from '../assets/logos/nodejs-2.svg';
import mongoDbLogo from '../assets/logos/mongodb-icon-2.svg';
import expressJSLogo from '../assets/logos/icons8-express-js.svg'


const skills = {
  knowWell: [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Tailwind CSS", logo: tailwindCSS },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },

  ],
  someKnowledge: [
    { name: "Node.js", logo: nodeJSLogo },
    { name: "MongoDb", logo: mongoDbLogo },
    { name: 'Express.js', logo: expressJSLogo }
  ]
};

const Skills = () => {
  const springProps = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(-100%)' },
    config: { duration: 20000 },
    reset: true,
    loop: true,
  });

  return (
    <section id="skills">
      <div className="w-11/12 mx-auto my-14">
        <SectionTitle
          heading={'My skills'}
        ></SectionTitle>

        <div className="relative overflow-hidden mt-8">
          <h3 className='text-2xl font-medium text-center text-fuchsia-400 mb-5'>Technologies I know well ----</h3>
          <animated.div style={springProps} className="flex space-x-12">

            {skills.knowWell.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                <p className="mt-2 text-lg">{skill.name}</p>
              </div>
            ))}
          </animated.div>
        </div>
        <div className="relative overflow-hidden mt-8">
          <h3 className='text-2xl font-medium text-center text-fuchsia-400 mb-5'>Technologies I have knowledge on ----</h3>
          <animated.div style={springProps} className="flex space-x-12">

            {skills.someKnowledge.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                <p className="mt-2 text-lg">{skill.name}</p>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
      <hr className='my-6' />
    </section>
  );
};

export default Skills;
