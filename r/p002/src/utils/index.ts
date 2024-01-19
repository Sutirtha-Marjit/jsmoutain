import Three, { OrbitControls } from "@datatype";
import * as grass from "../assets/grass.jpg";

const { Scene,
    WebGLRenderer,
    Camera,
    PlaneGeometry,
    BoxGeometry,
    MeshBasicMaterial,
    CameraHelper,
    GridHelper,
    SphereGeometry,
    DoubleSide,
    TwoPassDoubleSide,
    RepeatWrapping,
    TextureLoader,
    Mesh
} = Three;

export const defaultProps = {
    masterWrapDOMId: 'earthWrap3DInitiative',
    earthWidth: window.screen.width,
    earthHeight: window.screen.height,
    helperRequired: true
};

export const loadImage = (path: 'grass' | 'sand') => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = grass.default;
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            throw 'Image not found';
        }
    })

};

export const getMasterWrapper = (container: Element | HTMLElement | HTMLBodyElement | null): HTMLDivElement => {
    let mw: HTMLDivElement = document.getElementById(defaultProps.masterWrapDOMId) as HTMLDivElement;
    if (!mw) {
        mw = document.createElement('div');
        mw.id = defaultProps.masterWrapDOMId;
        mw.style.position = 'absolute';
        mw.style.top = '0rem';
        mw.style.left = '0rem';
        mw.style.width = `${defaultProps.earthWidth}px`;
        mw.style.height = `${defaultProps.earthHeight}px`;
        mw.style.overflow = 'hidden';
    }
    container && container.appendChild(mw);
    return mw;
};

export const getScene = () => new Scene();

export const getRenderer = () => new WebGLRenderer();

export const getOrbitControl = (camera: Three.Camera, element: HTMLElement) => new OrbitControls(camera, element);

export const getCameraHelper = (camera: Three.Camera) => new CameraHelper(camera);

export const getGridHelper = () => {
    const gh = new GridHelper(40, 40);
    return gh;
}

export const getBox = (width: number, height: number, depth: number) => {
    const boxGeo = new BoxGeometry(width, height, depth);
    const material = new MeshBasicMaterial({ color: 0xF90F00 });
    const box = new Mesh(boxGeo, material);
    return box;
}



export const getPlane = (width: number = 10, height: number = 10, doubleSided: boolean = true) => {
    const planeGeo = new PlaneGeometry(width, height);
    const planeMaterial = new MeshBasicMaterial({ color: 0xFFFFFF, side: doubleSided ? DoubleSide : TwoPassDoubleSide });
    const plane = new Mesh(planeGeo, planeMaterial);

    return plane;
};

export const getBase = (width: number = 10, height: number = 10) => {
    //loadImage("grass");
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('../assets/grass.jpg');

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(12, 12); // Adjust the repeat values as needed
    const planeGeo = new PlaneGeometry(width, height);
    const planeMaterial = new MeshBasicMaterial({ color: 0xFFFFFF, map: texture });
    const plane = new Mesh(planeGeo, planeMaterial);

    return plane;
}