/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// Importiert die notwendigen Komponenten von react-three-fiber
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { useRef, useState } from 'react';
import {
	MeshWobbleMaterial,
	OrbitControls,
	useHelper,
} from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

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

// Sphere Komponente:
const Sphere = ({ position, args, color }) => {
	// Das ist der Hook useRef, den wir brauchen, um unser Element im DOM targetieren zu können:
	const ref = useRef();

	// Das ist ein State, den wir für die Hover Interaktion brauchen:
	const [isHovered, setIsHovered] = useState(false);

	// Ist ein Staat, den wir für eine Klick Interaktion brauchen:
	const [isClicked, setIsClicked] = useState(false);

	// Das ist der Hook useFrame, den wir zum animieren brauchen:
	useFrame((state, delta) => {
		// Hier wird die Animation definiert

		// Hier wird die Hover Interaktion definiert. Wenn der Sphere gehovert wird, dann wird die Geschwindigkeit auf 1 gesetzt, ansonsten auf 0.4
		const speed = isHovered ? 1 : 0.4;

		// Wir rotieren den Sphere
		// ref.current.rotation.x += delta;
		ref.current.rotation.y -= delta * speed;
		// Hier bewegen wir den Sphere:
		// ref.current.position.z += delta; // Bewegt den Sphere in Richtung der Z-Achse und eer veschwindet aus dem Sichtfeld
		// ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2; // Bewegt den Sphere in Richtung der Z-Achse und wieder zurück

		// console.log(state);
	});

	return (
		// Erstellt eine 3D-Szene
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (
				event.stopPropagation(), setIsHovered(true)
			)} // Wenn der Sphere gehovert wird, dann wird der State isHovered auf true gesetzt. stopPropagation() verhindert, dass das Event an die Elternkomponente weitergegeben wird.
			onPointerLeave={() => setIsHovered(false)} // Wenn der Sphere nicht mehr gehovert wird, dann wird der State isHovered auf false gesetzt
			onClick={() => setIsClicked(!isClicked)} // Wenn der Sphere geklickt wird, dann wird der State isClicked auf true gesetzt
			scale={isClicked ? 1.5 : 1} // Wenn der Sphere geklickt wird, dann wird der Sphere skaliert
		>
			{/* Erstellt ein 3D-Objekt */}
			{/* Hier wird ein Sphere erstellt */}
			<sphereGeometry args={args} />
			{/* Hier wird dem Sphere ein Material hinzugefügt */}
			<meshStandardMaterial
				color={isHovered ? 'lightblue' : 'orange'}
				wireframe
			/>
		</mesh>
	);
};

// Torus Komponente:
const Torus = ({ position, args, color }) => {
	// Das ist der Hook useRef, den wir brauchen, um unser Element im DOM targetieren zu können:
	const ref = useRef();

	// Das ist der Hook useFrame, den wir zum animieren brauchen:
	// useFrame((state, delta) => {
	// 	// Hier wird die Animation definiert
	// 	// Wir rotieren den Sphere
	// 	ref.current.rotation.x += delta;
	// 	ref.current.rotation.y += delta * 2;
	// 	// Hier bewegen wir den Sphere:
	// 	// ref.current.position.z += delta; // Bewegt den Sphere in Richtung der Z-Achse und eer veschwindet aus dem Sichtfeld
	// 	ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2; // Bewegt den Sphere in Richtung der Z-Achse und wieder zurück
	// 	// console.log(state);
	// });

	return (
		// Erstellt eine 3D-Szene
		<mesh position={position} ref={ref}>
			{/* Erstellt ein 3D-Objekt */}
			{/* Hier wird ein Sphere erstellt */}
			<torusGeometry args={args} />
			{/* Hier wird dem Sphere ein Material hinzugefügt */}
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

// Torus Komponente:
const TorusKnot = ({ position, args, color }) => {
	// Das ist der Hook useRef, den wir brauchen, um unser Element im DOM targetieren zu können:
	const ref = useRef();

	// Das ist der Hook useFrame, den wir zum animieren brauchen:
	// useFrame((state, delta) => {
	// 	// Hier wird die Animation definiert
	// 	// Wir rotieren den Sphere
	// 	ref.current.rotation.x += delta;
	// 	ref.current.rotation.y += delta * 2;
	// 	// Hier bewegen wir den Sphere:
	// 	// ref.current.position.z += delta; // Bewegt den Sphere in Richtung der Z-Achse und eer veschwindet aus dem Sichtfeld
	// 	ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2; // Bewegt den Sphere in Richtung der Z-Achse und wieder zurück
	// });
	return (
		// Erstellt eine 3D-Szene
		<mesh position={position} ref={ref}>
			{/* Erstellt ein 3D-Objekt */}
			{/* Hier wird ein Sphere erstellt */}
			<torusKnotGeometry args={args} />
			{/* Hier wird dem Sphere ein Material hinzugefügt */}
			{/* <meshStandardMaterial color={color} /> */}
			<MeshWobbleMaterial factor={1} speed={2} color={color} />
		</mesh>
	);
};

// Scene Komponente:
// Wir mussten die Szene in eine eigene Komponente auslagern, weil wir sonst den useHelper Hook nicht benutzen können.
const Scene = () => {
	// Das ist die Referenz, die wir für unser Helper für das directionalLight brauchen:
	const directionalLightRef = useRef();

	// Das ist der Hawk Use Helpers, den wir brauchen, um die Helper für das directionalLight zu erstellen:
	useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white');

	return (
		<>
			{/* Hier fügen werde Szene eine direkte Beleuchtung hinzu */}
			<directionalLight
				position={[0, 1, 2]}
				intensity={1}
				ref={directionalLightRef}
			/>

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
			{/* <Cube position={[0, 0, 0]} size={(1, 1, 1)} color={'orange'} /> */}

			{/* Hier wird die Sphere hinzugefügt */}
			{/* <Sphere position={[0, 0, 0]} args={[2, 30, 30]} color={'orange'} /> */}

			{/* Hier wird der Torus hinzugefügt */}
			{/* <Torus
				position={[2.2, 0, 0]} // Position des Torus
				args={[0.8, 0.2, 30, 30]} // Argumente für den Torus: [Radius, Rohrdurchmesser, radiale Segmente, tubulare Segmente]
				color={'blue'} // Farbe des Torus
			/> */}

			{/* Hier wird der TorusKnot hinzugefügt */}
			<TorusKnot
				position={[0, 0, 0]} // Position des TorusKnot
				args={[0.6, 0.1, 1000, 50]} // Argumente für den TorusKnot: [Radius, Rohrdurchmesser, radiale Segmente, tubulare Segmente]
				color={'hotpink'} // Farbe des TorusKnot
			/>

			{/* Dieses Element kommt von Drei und bewirkt, dass wir das Objekt quasi anfassen und bewegen können. */}
			<OrbitControls enableZoom={true} />
		</>
	);
};

// Definiert eine React-Komponente
const App = () => {
	return (
		// Erstellt ein 3D-Canvas. Hier wird die 3D-Szene gerendert.
		<Canvas>
			{/* Hier wird die Szene gerendert */}
			<Scene />
		</Canvas>
	);
};

export default App;
