import Three, { OrbitControls, FBXLoader, OBJLoader } from "@datatype";

import * as grass from "../assets/grass.jpg";
import * as wall from "../assets/wall.jpg";
import * as woodenWatchTowerWrap from "../assets/models/watchtower/fbx/Wood_Tower_Col.jpg";

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
    Group,
    LoadingManager,
    Mesh
} = Three;

export const defaultProps = {
    masterWrapDOMId: 'earthWrap3DInitiative',
    earthWidth: window.screen.width,
    earthHeight: window.screen.height,
    occupiedWidth: 300,
    occupiedHeight: 300,
    helperRequired: true,
    gridRequired: false,
    axisRequired: true,
};

export const loadImage = (path: 'grass' | 'sand' | 'wall') => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        switch(path){
            case 'grass':
                img.src = grass.default;
                break;

               case 'wall':
                img.src = wall.default;
                break; 
        }
        
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
    const gh = new GridHelper(defaultProps.occupiedWidth, defaultProps.occupiedHeight);
    return gh;
}

export const getBox = (width: number, height: number, depth: number) => {
    const boxGeo = new BoxGeometry(width, height, depth);
    const material = new MeshBasicMaterial({ color: 0xF90F00 });
    const box = new Mesh(boxGeo, material);
    return box;
}


export const getPlane = (width: number = defaultProps.occupiedWidth, height: number = defaultProps.occupiedHeight, doubleSided: boolean = true) => {
    const planeGeo = new PlaneGeometry(width, height);
    const planeMaterial = new MeshBasicMaterial({ color: 0xFFFFFF, side: doubleSided ? DoubleSide : TwoPassDoubleSide });
    const plane = new Mesh(planeGeo, planeMaterial);
    return plane;
};

export const getBase = (width: number = defaultProps.occupiedWidth, height: number = defaultProps.occupiedHeight) => {
    //loadImage("grass");
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('../assets/grass.jpg');
    // texture.wrapS = RepeatWrapping;
    // texture.wrapT = RepeatWrapping;
    // texture.repeat.set(12, 12); // Adjust the repeat values as needed
    const planeGeo = new PlaneGeometry(width, height);
    const planeMaterial = new MeshBasicMaterial({ color: 0xFFFFFF, map: texture });
    const plane = new Mesh(planeGeo, planeMaterial);

    return plane;
}

export const getPlaneWithWall = (width: number = defaultProps.occupiedWidth, height: number = defaultProps.occupiedHeight, doubleSided: boolean = true) => {
    const environmentGroup = new Group();
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('../assets/wall.jpg');
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(150, 4); // Adjust the repeat values as needed
    const planeGeo = new PlaneGeometry(width, height);
    const planeMaterial = new MeshBasicMaterial({ color: 0xFFFFFF, side: doubleSided ? DoubleSide : TwoPassDoubleSide });
    const plane = new Mesh(planeGeo, planeMaterial);

    for (let i = 0; i < 4; i++) {
        const boxGeo = new BoxGeometry(width, 2.7, 5);
        const material0 = new MeshBasicMaterial({ map:texture });
        const material = new MeshBasicMaterial({ color: 0x0000FC });
        const box = new Mesh(boxGeo, material0);

        box.position.z = 2.5;
        (i===0) && (box.position.y = (-1) * (height / 2));
        (i===1) && (box.position.y = (height / 2));
        (i===2) && (box.position.x = (-1) * (height / 2)) && (box.rotation.z = 0.5*Math.PI);
        (i===3) && (box.position.x = (height / 2)) && (box.rotation.z = 0.5*Math.PI);
        environmentGroup.add(box);
    }


    environmentGroup.add(plane);

    return environmentGroup;
};

export const getWatchTower = ()=>{
    return new Promise<Three.Group<Three.Object3DEventMap>>((resolve,reject)=>{
        const fbxLoader = new FBXLoader();
        fbxLoader.load('../assets/models/watchtower/fbx/wooden_watch_tower2.fbx',
        (fbx)=>{
            const textureLoader = new TextureLoader();
            textureLoader.loadAsync('../assets/models/watchtower/fbx/Wood_Tower_Col.jpg').then((woodenWrap)=>{
                fbx.traverse((child)=>{
                    const material0 = new MeshBasicMaterial({ color: 0x0959FF ,map:woodenWrap });
                    child.customDepthMaterial = material0;
                })
            })
            fbx.scale.set(0.005,0.005,0.005);
            resolve(fbx);
        },
        (event)=>{
            console.clear();
            console.log(`${(event.loaded/event.total)*100}%`);
        },
        (e)=>{
            reject(e);
        
    });

    });
}

export const getBuildings = ()=>{
    return new Promise<Three.Group<Three.Object3DEventMap>>((resolve,reject)=>{
        const objLoader = new OBJLoader();
        objLoader.load('../assets/models/buildings/Residential Buildings 001.obj',(obj)=>{
            console.log('Load successful!');
            resolve(obj);
        },(event)=>{
            console.clear();
            console.log(`${(event.loaded/event.total)*100}%`);
        },
        (e)=>{
            reject(e);
        });
        
    });
}

