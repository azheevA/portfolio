import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export function SceneReady({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return null;
}
