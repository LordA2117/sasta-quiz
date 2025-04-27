const particlesConfig = {
  "fps_limit": 120,
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 4
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  },
  "particles": {
    "color": {
      "value": "#888888" // grey color
    },
    "links": {
      "color": "#888888", // match links to particles
      "distance": 150,
      "enable": true,
      "opacity": 0.5, // make the links more transparent
      "width": 1
    },
    "move": {
      "bounce": false,
      "direction": "none",
      "enable": true,
      "outMode": "out",
      "random": true,
      "speed": 2,
      "straight": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800
      },
      "value": 200
    },
    "opacity": {
      "value": 0.5 // make the particles semi-transparent
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "random": true,
      "value": 3
    }
  },
  "detectRetina": true
};

export default particlesConfig;

