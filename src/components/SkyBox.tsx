import { Canvas } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Gibli from "../assets/hdri/gibli.jpg";

let SkyBox = () => {
  let { skybox } = useControls({
    skybox: {
      options: {
        Gibli: Gibli,
      },
    },
  });

  return (
    <Canvas>
      <OrbitControls maxDistance={2000} minDistance={500} />

      <ambientLight intensity={1} />

      <Environment files={skybox} background />

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[100, 100, 100]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
};

export default SkyBox;
