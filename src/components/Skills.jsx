
import { useSpring, animated } from 'react-spring';
import SectionTitle from './SectionTitle';

const skills = {
  knowWell : [
    { name: "HTML", logo: "/public/logos/html-1.svg" },
    { name: "CSS", logo: "/public/logos/css.svg" },
    { name: "Tailwind CSS", logo: "/public/logos/tailwindcss.svg" },
    { name: "JavaScript", logo: "/public/logos/javascript.svg" },
    { name: "React", logo: "/public/logos/react.svg" },
    
  ],
  someKnowledge: [
    { name: "Node.js", logo: "/public/logos/nodejs-2.svg" },
    { name: "MongoDb", logo: "/public/logos/mongodb-icon-2.svg" },
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
      <div className="w-11/12 mx-auto my-20">
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
      <hr className='my-12' />
    </section>
  );
};

export default Skills;
