import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Khushi_G_Resume.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: "inline; filename=Khushi_G_Resume.pdf" },
        ],
      },
    ];
  },
};

export default nextConfig;