'use client';

import { useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (videoNumber: number) => {
    setActiveVideo(videoNumber);
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 100);
  };

  const closeVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setActiveVideo(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            The Internet’s Favorite Fragrance Kit? Watch This.
          </h2>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14">

          {/* Video 1 */}
          <div
            onClick={() => openVideo(1)}
            className="relative 
                       w-full 
                       h-[340px] 
                       sm:h-[420px] 
                       lg:h-[480px] 
                       rounded-3xl 
                       overflow-hidden 
                       
                       cursor-pointer 
                       group"
          >
            <video
              className="w-full h-full object-contain"
              src="/impactkit/assets/video1.mp4"
              poster="/impactkit/assets/2.png"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-black text-black ml-1" />
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div
            onClick={() => openVideo(2)}
            className="relative 
                       w-full 
                       h-[340px] 
                       sm:h-[420px] 
                       lg:h-[480px] 
                       rounded-3xl 
                       overflow-hidden 
                       
                       cursor-pointer 
                       group"
          >
            <video
              className="w-full h-full object-contain"
              src="/impactkit/assets/numyst.mp4"
              poster="/impactkit/assets/1.png"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-black text-black ml-1" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 px-4">

          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 text-black"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-md lg:max-w-lg h-[65vh] rounded-3xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src={
                activeVideo === 1
                  ? '/impactkit/assets/video1.mp4'
                  : '/impactkit/assets/numyst.mp4'
              }
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}