import { SceneStructure } from "./datatype";
import { getScene, getRenderer, getMasterWrapper, defaultProps, getOrbitControl, getPlaneWithWall, getBuildings, getWatchTower, getBox, getCameraHelper, getGridHelper } from "@utils";
import Three from "@datatype";

const { PerspectiveCamera, AxesHelper } = Three;

const SceneGround: SceneStructure = {
    start: async function () {
        const container = getMasterWrapper(document.body);
        const renderer = getRenderer();
        const scene = getScene();
        const axisHelper = new AxesHelper(defaultProps.earthWidth);
        const camera = new PerspectiveCamera(75, defaultProps.earthWidth / defaultProps.earthHeight, 0.1, 1000);
        const planeBase = getPlaneWithWall();
        const box = getBox(0.5, 2, 0.5);
        box.translateY(1);
        planeBase.rotation.x = -0.5 * Math.PI;
        const orbitCtrl = getOrbitControl(camera, renderer.domElement);
        orbitCtrl.autoRotate = true;
        axisHelper.setColors(0xFF0000, 0x00FF00, 0x0000FF);
        camera.position.z = 0;
        camera.position.x = 10;
        defaultProps.helperRequired && defaultProps.axisRequired && scene.add(axisHelper);
        defaultProps.helperRequired && defaultProps.gridRequired && scene.add(getGridHelper());
        scene.add(planeBase);
        scene.add(box);


        try {
            const watchTower = await getWatchTower();
            
            scene.add(watchTower);
        } catch (e) {
            console.log(e);
            alert('Unable to load the watchTower file');
        }

        /*try{
            const obj = await getBuildings();
            scene.add(obj);
            }catch(e){
                console.log(e);
                alert('Unable to load the 3D file');
            }   */

        renderer.setSize(defaultProps.earthWidth, defaultProps.earthHeight);
        container.appendChild(renderer.domElement);

        const animate = () => {
            //camera.position.z +=0.025;
            renderer.render(scene, camera);
        };

        //renderer.render(scene, camera);
        renderer.setAnimationLoop(animate);
    }
}

export default SceneGround;