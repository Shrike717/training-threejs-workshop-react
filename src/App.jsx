/* eslint-disable react/no-unknown-property */
// Importiert die notwendigen Komponenten von react-three-fiber
import { Canvas } from '@react-three/fiber';
import './App.css';

// Definiert eine React-Komponente
const App = () => {
	return (
		<Canvas>
			{/* Erstellt eine 3D-Szene */}
			<mesh>
				{/* Fügt ein 3D-Objekt hinzu, in diesem Fall eine Box */}
				{/* Hier wird eine Box mit den Dimensionen 2, 2, 4 erstellt */}
				{/* <boxGeometry args={[2, 2, 4]} /> */}
				<boxGeometry />
				{/* Fügt ein Material hinzu. Standard Material braucht aber eine Beleuchtung. */}
				<meshStandardMaterial />
				{/* Im Gegensatz dazu braucht Basic Material keine Beleuchtung. */}
				{/* <meshBasicMaterial /> */}
			</mesh>
		</Canvas>
	);
};

export default App;
