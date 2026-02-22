import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export function VideoBackground({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play blocked", e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native fallback
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((e) => console.log("Auto-play blocked", e));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
