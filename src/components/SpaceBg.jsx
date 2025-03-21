import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const SpaceBg = () => {
  const modelRef = useRef();
  const { scene, error } = useGLTF("/need_some_space/scene.gltf");

  if (error) {
    console.error("Failed to load GLTF model:", error);
    return null;
  }

  // Rotate model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Adjust the speed as needed
    }
  });

  return (
    <>
      {/* Environment lighting */}
     

      {/* Render 3D Model */}
      <primitive
        ref={modelRef}
        object={scene}
        position={[0, 0, -10]} // Adjust position as needed
        scale={[10, 10, 10]} // Adjust scale as needed
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
};

export default SpaceBg;