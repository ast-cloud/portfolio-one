import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import {random} from 'maath';

const Stars = () => {

  const ref = useRef(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    console.log(state);
    if(ref.current!=null){
      (ref.current as any).rotation.x -= delta / 10;
      (ref.current as any).rotation.y -= delta / 15;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled>
        <PointMaterial transparent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false}/>
      </Points>
    </group>
  )
}

const StarCanvas = ()=>{
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
}

export default StarCanvas;