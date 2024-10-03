import { ImageResponse } from "next/og";

import { myInfo } from "app/constants";
import { baseUrl } from "app/sitemap";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") || myInfo.name;

    const backgroundImageUrl = new URL("/unfurl-blog-post.png", baseUrl);

    const font = await fetch(new URL("/Inter-Bold.ttf", baseUrl));
    if (!font.ok) throw new Error("Failed to fetch the font file");
    const fontData = await font.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url('${backgroundImageUrl.toString()}')`,
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
          <div tw="flex flex-col w-full p-10">
            <h2
              style={{
                fontFamily: '"Inter"',
                fontSize: "72px",
                color: "#fff",
                textShadow:
                  "-1px -1px 0 #526f80, 1px -1px 0 #526f80, -1px 1px 0 #526f80, 1px 1px 0 #526f80",
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
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
