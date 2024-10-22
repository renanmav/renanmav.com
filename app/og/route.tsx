import { ImageResponse } from "next/og";

import { BASE_URL, myInfo } from "app/constants";

const TEXT_COLOR = "#fff";
const TEXT_SHADOW_COLOR = "#24323B";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") || myInfo.name;

    const backgroundImageUrl = new URL("/unfurl-blog-post.png", BASE_URL);

    const font = await fetch(new URL("/Inter-Bold.ttf", BASE_URL));
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
                color: TEXT_COLOR,
                textShadow: `-1px -1px 0 ${TEXT_SHADOW_COLOR}, 1px -1px 0 ${TEXT_SHADOW_COLOR}, -1px 1px 0 ${TEXT_SHADOW_COLOR}, 1px 1px 0 ${TEXT_SHADOW_COLOR}`,
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
  } catch (error) {
    console.error("Failed to generate the image", error);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
