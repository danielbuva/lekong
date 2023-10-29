"use client";

import {
  forwardRef,
  MutableRefObject,
  ReactNode,
  Ref,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import tunnel from "tunnel-rat";

const In = tunnel().In;

export const Common = ({ color }: { color: string }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

interface ViewProps {
  children?: ReactNode;
  orbit?: boolean;
  // [key: string]: any;
}

const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, orbit, ...props }, ref: Ref<HTMLDivElement | null>) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <In>
          <ViewImpl track={localRef as MutableRefObject<HTMLElement>}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </In>
      </>
    );
  }
);

View.displayName = "View";

export { View };
