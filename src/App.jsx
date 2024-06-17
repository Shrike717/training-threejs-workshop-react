/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// Importiert die notwendigen Komponenten von react-three-fiber
import { Canvas } from '@react-three/fiber';
import './App.css';

// Cube Komponente:
const Cube = ({ position, size, color }) => {
	return (
		// Erstellt eine 3D-Szene
		<mesh position={position}>
			{/* Erstellt ein 3D-Objekt */}
			{/* Hier wird ein Würfel erstellt */}
			<boxGeometry args={size} />
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
			<ambientLight intensity={1} />

			{/* Hier werden die Würfel hinzugefügt */}
			<Cube position={[-1, 1, 0]} size={[1, 1, 1]} color={'green'} />
			<Cube position={[1, 1, 0]} size={[1, 1, 1]} color={'hotpink'} />
			<Cube position={[-1, -1, 0]} size={[1, 1, 1]} color={'orange'} />
			<Cube position={[1, -1, 0]} size={[1, 1, 1]} color={'blue'} />
		</Canvas>
	);
};

export default App;
