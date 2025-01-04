
import { useSpring, animated } from 'react-spring';
import SectionTitle from './SectionTitle';

const skills = [
  { name: "HTML", logo: "/public/logos/html-1.svg" },
  { name: "CSS", logo: "/public/logos/css.svg" },
  { name: "Tailwind CSS", logo: "/public/logos/tailwindcss.svg" },
  { name: "JavaScript", logo: "/public/logos/javascript.svg" },
  { name: "React", logo: "/public/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
];

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
          <animated.div style={springProps} className="flex space-x-12">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.logo} alt={skill.name} className="w-16 h-16"/>
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
