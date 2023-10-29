import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    lambert2SG: THREE.MeshBasicMaterial;
  };
};

export function BlueberryMilk(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/blueberrymilk.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.lambert2SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.055}
      />
    </group>
  );
}

useGLTF.preload("/blueberrymilk.glb");
