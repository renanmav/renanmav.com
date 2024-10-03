import { myInfo } from "app/constants";
import { baseUrl } from "app/sitemap";
import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || myInfo.name;
  const backgroundImageUrl = baseUrl + "/unfurl-blog-post.png";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8 flex-wrap">
          <h2
            style={{
              fontSize: "48px",
              color: "#fff",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
