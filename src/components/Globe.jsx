import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const Globe = ({ mode = 'chaos', className = '' }) => {
  const canvasRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (containerRef.current) {
        width = containerRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.5,
      mapSamples: 20000,
      mapBrightness: 8,
      baseColor: [0.05, 0.05, 0.1],
      markerColor: mode === 'chaos' ? [1, 0.15, 0.15] : [0, 1, 0.64],
      glowColor: mode === 'chaos' ? [0.8, 0, 0] : [0, 0.8, 0.5],
      markers: [
        // North America
        { location: [37.7595, -122.4367], size: 0.05 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.05 }, // New York
        { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles
        { location: [41.8781, -87.6298], size: 0.04 }, // Chicago
        { location: [29.7604, -95.3698], size: 0.04 }, // Houston
        { location: [33.4484, -112.0740], size: 0.04 }, // Phoenix
        { location: [39.7392, -104.9903], size: 0.04 }, // Denver
        { location: [47.6062, -122.3321], size: 0.04 }, // Seattle
        { location: [25.7617, -80.1918], size: 0.04 }, // Miami
        { location: [43.6532, -79.3832], size: 0.04 }, // Toronto
        { location: [19.4326, -99.1332], size: 0.04 }, // Mexico City
        
        // South America
        { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
        { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
        { location: [-22.9068, -43.1729], size: 0.04 }, // Rio de Janeiro
        { location: [4.7110, -74.0721], size: 0.04 }, // Bogotá
        { location: [-12.0464, -77.0428], size: 0.04 }, // Lima
        { location: [-33.4489, -70.6693], size: 0.04 }, // Santiago
        
        // Europe
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
        { location: [41.9028, 12.4964], size: 0.04 }, // Rome
        { location: [40.4168, -3.7038], size: 0.04 }, // Madrid
        { location: [52.3676, 4.9041], size: 0.04 }, // Amsterdam
        { location: [59.9139, 10.7522], size: 0.04 }, // Oslo
        { location: [59.3293, 18.0686], size: 0.04 }, // Stockholm
        { location: [55.7558, 37.6173], size: 0.05 }, // Moscow
        { location: [50.0755, 14.4378], size: 0.04 }, // Prague
        { location: [47.4979, 19.0402], size: 0.04 }, // Budapest
        { location: [38.7223, -9.1393], size: 0.04 }, // Lisbon
        
        // Asia
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
        { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
        { location: [31.2304, 121.4737], size: 0.05 }, // Shanghai
        { location: [39.9042, 116.4074], size: 0.05 }, // Beijing
        { location: [22.3193, 114.1694], size: 0.04 }, // Hong Kong
        { location: [37.5665, 126.9780], size: 0.04 }, // Seoul
        { location: [13.7563, 100.5018], size: 0.04 }, // Bangkok
        { location: [28.6139, 77.2090], size: 0.04 }, // New Delhi
        { location: [25.2048, 55.2708], size: 0.04 }, // Dubai
        { location: [41.0082, 28.9784], size: 0.04 }, // Istanbul
        { location: [33.8688, 151.2093], size: 0.04 }, // Sydney (moved to Oceania)
        { location: [-6.2088, 106.8456], size: 0.04 }, // Jakarta
        { location: [14.5995, 120.9842], size: 0.04 }, // Manila
        
        // Africa
        { location: [-26.2041, 28.0473], size: 0.04 }, // Johannesburg
        { location: [30.0444, 31.2357], size: 0.04 }, // Cairo
        { location: [-1.2921, 36.8219], size: 0.04 }, // Nairobi
        { location: [33.5731, -7.5898], size: 0.04 }, // Casablanca
        { location: [6.5244, 3.3792], size: 0.04 }, // Lagos
        
        // Oceania
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [-37.8136, 144.9631], size: 0.04 }, // Melbourne
        { location: [-41.2865, 174.7762], size: 0.04 }, // Wellington
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [mode]);

  return (
    <div ref={containerRef} className={`w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ 
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};
