import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpinningSphere = () => {
  const globeRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, globe;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      globeRef.current.appendChild(renderer.domElement);

      const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
      const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.1 });
      globe = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globe);

      camera.position.z = 5;

      const wireframeGeometry = new THREE.WireframeGeometry(globeGeometry);
      const wireframe = new THREE.LineSegments(wireframeGeometry);
      wireframe.material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });

      const positions = wireframeGeometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3 * 1) {
        // Reduce the density by stepping over vertices
        positions[i] = positions[i + 1] = positions[i + 2] = 0;
      }

      wireframeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      globe.add(wireframe);
      scene.rotation.x = 0.5;
      scene.rotation.y = 0.5;
      scene.rotation.z = -0.5;
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(10, 10, 10);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.003;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    init();
  }, []);

  return (
    <div
      ref={globeRef} className='globe'
    />
  );
};

export default SpinningSphere;
