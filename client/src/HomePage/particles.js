import Particles from 'react-tsparticles'; 
import '../../node_modules/tsparticles/'

function PartcileBackground(){
    const particlesInit = (main) =>{
        console.log(main); 
    }; 
    
    const particlesLoaded=(container)=>{
        console.log(container); 
    }; 
    
    return( 
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    background: {
                        color: {
                        value: 'black',
                        },
                    },
                    fpsLimit: 20,
                    interactivity: {
                        events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: false,
                        },
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 1,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 2,
                            straight: false,
                            // "enable": true,
                            // "speed": 3,
                            // "direction": "right",
                            // "random": true,
                            // "straight": false,
                            // "out_mode": "bounce",
                            // "decay": 1
                        },
                        number: {
                            density: {
                                enable: false,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: false,
                }
            }
        />
    ); 
}; 

export default PartcileBackground; 