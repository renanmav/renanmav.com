"use client";

import { BASE_URL } from "app/constants";
import { useState, useEffect } from "react";
import { IoVolumeHigh, IoVolumeMedium, IoVolumeLow } from "react-icons/io5";

const volumeIcons = [
  <IoVolumeLow key="low" className="mx-[-2px] size-4" />,
  <IoVolumeMedium key="medium" className="-mx-px size-4" />,
  <IoVolumeHigh key="high" className="size-4" />,
];

export default function NamePronunciation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(volumeIcons.length - 1);

  useEffect(
    function animateVolumeIcon() {
      let intervalId: NodeJS.Timeout;

      if (isPlaying) {
        intervalId = setInterval(() => {
          setCurrentIcon((prev) => (prev + 1) % volumeIcons.length);
        }, 200); // Change icon every 200ms
      } else {
        setCurrentIcon(volumeIcons.length - 1); // Reset to VolumeHigh when not playing
      }

      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    },
    [isPlaying],
  );

  const playAudio = () => {
    const audioUrl = new URL("audio/renan-pronunciation.mp4", BASE_URL);
    const audio = new Audio(audioUrl.toString());

    audio.preload = "auto";

    audio.addEventListener(
      "canplaythrough",
      () => {
        setIsPlaying(true);
        audio.play().catch((error) => {
          setIsPlaying(false);
          console.error("Error playing audio:", error);
        });
      },
      { once: true },
    );

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    audio.addEventListener("error", (e) => {
      setIsPlaying(false);
      console.error("Error loading audio:", e);
    });

    audio.load();
  };

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      aria-label="Listen to name pronunciation"
      className="inline-flex w-6 flex-col items-start justify-start px-1 text-sm text-zinc-600 transition-colors dark:text-zinc-400"
    >
      {volumeIcons[currentIcon]}
    </button>
  );
}
