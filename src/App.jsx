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
				<boxGeometry />
			</mesh>
		</Canvas>
	);
};

export default App;
