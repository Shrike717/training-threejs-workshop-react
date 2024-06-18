/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// Importiert die notwendigen Komponenten von react-three-fiber
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { useRef } from 'react';

// Cube Komponente:
const Cube = ({ position, size, color }) => {
	// Das ist der Hook useRef, den wir brauchen, um unser Element im DOM targetieren zu können:
	const ref = useRef();

	// Das ist der Hook useFrame, den wir zum animieren brauchen:
	useFrame((state, delta) => {
		// Hier wird die Animation definiert
		// Wir rotieren den Cube
		ref.current.rotation.x += delta;
		ref.current.rotation.y += delta * 2;
		// Hier bewegen wir den Cube:
		// ref.current.position.z += delta; // Bewegt den Cube in Richtung der Z-Achse und eer veschwindet aus dem Sichtfeld
		ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2; // Bewegt den Cube in Richtung der Z-Achse und wieder zurück
		// console.log(state);
	});

	return (
		// Erstellt eine 3D-Szene
		<mesh position={position} ref={ref}>
			{/* Erstellt ein 3D-Objekt */}
			{/* Hier wird ein Würfel erstellt */}
			<boxGeometry args={[size, size, size]} />
			{/* Hier wird dem Würfel ein Material hinzugefügt */}
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

// Definiert eine React-Komponente
const App = () => {
	return (
		// Erstellt ein 3D-Canvas. Hier wird die 3D-Szene gerendert.
		<Canvas>
			{/* Hier fügen werde Szene eine direkte Beleuchtung hinzu */}
			<directionalLight position={[0, 0, 2]} intensity={1} />

			{/* Hier fügen werde Szene eine indirekte Beleuchtung hinzu */}
			<ambientLight intensity={0.7} />

			{/* Hier werden die Würfel hinzugefügt */}
			{/* <group position={[0, 0, 0]}>
				<Cube position={[-1, 1, 0]} size={[1, 1, 1]} color={'green'} />
				<Cube position={[1, 1, 0]} size={[1, 1, 1]} color={'hotpink'} />
				<Cube
					position={[-1, -1, 0]}
					size={[1, 1, 1]}
					color={'orange'}
				/>
				<Cube position={[1, -1, 0]} size={[1, 1, 1]} color={'blue'} />
			</group> */}

			{/* Hier wird ein animierter Würfel erstellt */}
			<Cube position={[0, 0, 0]} size={(1, 1, 1)} color={'orange'} />
		</Canvas>
	);
};

export default App;
