import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>Desarrollador Web Jr. con experiencia en proyectos prácticos de backend y frontend. He desarrollado una aplicación totalmente funcional que consume una API, permitiendo crear, actualizar y eliminar contenido mediante fetch. Cuento con bases sólidas en HTML, CSS, JavaScript y Node.js, así como experiencia trabajando en entornos Linux. Busco mi primer rol en desarrollo donde aportar mis conocimientos, aprender nuevas tecnologías y crecer junto al equipo.</p>
                <p>mas lorem</p>
                <p>blahblahblah</p>
            </div>

            <div className='stage-cube-container'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#e34c26' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#215732' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;