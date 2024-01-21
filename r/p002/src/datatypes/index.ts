import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as FBXLoaderModule from 'three/examples/jsm/loaders/FBXLoader';
import * as OBJLoaderModule from 'three/examples/jsm/loaders/OBJLoader';

const FBXLoader = FBXLoaderModule.FBXLoader;
const OBJLoader = OBJLoaderModule.OBJLoader;


export default Three;
export {
    OrbitControls,
    FBXLoader,
    OBJLoader
}