import React from "react";

interface Props {
  videoId: string;
  title?: string;
  aspectRatio?: `${number}:${number}`;
  scale?: number;
  autoplay?: boolean;
  loop?: boolean;
}

export default function YoutubeVideo({
  videoId,
  title,
  aspectRatio = "16:9",
  scale = 3,
  autoplay = true,
  loop = true,
}: Props) {
  const [width, height] = aspectRatio.split(":").map(Number);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${String(autoplay)}&rel=0&loop=${String(loop)}`;

  console.log(src);

  return (
    <div className="my-2 flex justify-center">
      <iframe
        title={title}
        src={src}
        allow="autoplay; web-share"
        allowFullScreen
        width={width * 10 * scale}
        height={height * 10 * scale}
      />
    </div>
  );
}
