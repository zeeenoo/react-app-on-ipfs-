import logo from './logo.svg';
import './App.css';
import 'aframe'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './stars.jpg'

function App() {
  const loader = new GLTFLoader();
  return (
    <a-scene>
      <a-assets>

        </a-assets>
        <a-sky 
        color="#ffff"
         >

        </a-sky>

    </a-scene>
    
  );
}

export default App;
