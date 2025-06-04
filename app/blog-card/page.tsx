import Image from "next/image";
import React from "react";

const description =
  "These languages are the backbone of every website, defining structure, content, and presentation.";

export default function page() {
  return (
    <section className="bg-primary max-w-desktop h-[960px] min-h-[960px] w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="border-secondary-200 w-[327px] desktop:w-[384px] rounded-[20px] border bg-white p-[24px] drop-shadow-[8px_8px_0px_black]">
          <div className="flex w-full flex-col gap-[24px]">
            <Image
              src="/blog-card/illustration-article.svg"
              width={336}
              height={200}
              alt="blog-card"
              className="rounded-[10px]"
            />
            <div className="flex flex-col gap-[12px]">
              <div className="bg-primary w-fit rounded-[4px] px-[12px] py-[4px] text-[14px] font-extrabold">
                Learning
              </div>
              <p className="text-[14px] font-medium">Published 21 Dec 2023</p>
              <h2 className="text-[20px] desktop:text-[24px] font-extrabold hover:text-primary hover:cursor-pointer">
                HTML & CSS foundations
              </h2>
              <p className="text-secondary-100 text-[14px] desktop:text-[16px] font-medium">
                {description}
              </p>
            </div>
            <div className="text-secondary-200 flex flex-row gap-[12px]">
              <Image
                src="/blog-card/image-avatar.webp"
                height={32}
                width={32}
                alt="author"
              />
              <p className="text-[14px] font-extrabold">Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
