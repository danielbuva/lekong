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
import { r3f } from "@/global";

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
  className?: string;
  // [key: string]: any;
}

const View = forwardRef<HTMLDivElement, ViewProps>(
  (
    { children, orbit, className, ...props },
    ref: Ref<HTMLDivElement | null>
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} className={className} {...props} />
        <r3f.In>
          <ViewImpl track={localRef as MutableRefObject<HTMLElement>}>
            {children}
            {orbit && <OrbitControls />}
          </ViewImpl>
        </r3f.In>
      </>
    );
  }
);

View.displayName = "View";

export { View };
