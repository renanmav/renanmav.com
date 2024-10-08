import React from "react";

interface Props {
  videoId: string;
  title?: string;
  aspectRatio?: `${number}:${number}`;
  scale?: number;
}

export default function YoutubeVideo({
  videoId,
  title,
  aspectRatio = "16:9",
  scale = 3,
}: Props) {
  const [width, height] = aspectRatio.split(":").map(Number);

  return (
    <div className="my-2 flex justify-center">
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&loop=1`}
        allow="autoplay; web-share"
        allowFullScreen
        width={width * 10 * scale}
        height={height * 10 * scale}
      />
    </div>
  );
}
