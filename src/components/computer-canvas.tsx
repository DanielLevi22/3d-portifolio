import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { CanvasLoader } from "./canvas-loader";
import  { Computers } from "./computers";


export function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaquery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaquery.matches);
    const handleMediaQueryChange = (event:MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaquery.addEventListener("change" ,handleMediaQueryChange);
    
    return () => {
      mediaquery.removeEventListener("change", handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
         />
         <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
}