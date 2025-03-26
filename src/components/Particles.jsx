import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground({ theme = 'default' }) {
  const themes = {
    default: {
      color: '#3B82F6',
      speed: 0.5,
      size: { min: 1, max: 2 },
      number: 80
    },
    services: {
      color: '#8B5CF6',
      speed: 0.7,
      size: { min: 1, max: 3 },
      number: 100
    },
    about: {
      color: '#6366F1',
      speed: 0.6,
      size: { min: 1.5, max: 2.5 },
      number: 90
    }
  };

  const currentTheme = themes[theme] || themes.default;
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#060B14',
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -10
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: currentTheme.color
          },
          links: {
            color: currentTheme.color,
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: currentTheme.speed,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: currentTheme.number
          },
          opacity: {
            value: 0.15
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: currentTheme.size
          }
        },
        detectRetina: true
      }}
    />
  );
}
