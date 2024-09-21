import { ChapterContentType, ChapterType } from "@/types/types";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChapterContentProps = {
  chapter: ChapterType | null;
  content: ChapterContentType | null;
};

const videoOpts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter, content }: ChapterContentProps) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className='p-4 md:p-10 max-w-7xl mx-auto'>
      <h2 className='font-semibold text-3xl md:text-4xl mb-2'>
        {chapter?.chapter_name}
      </h2>
      <p className='text-gray-600 mb-6'>{chapter?.description}</p>

      {/* Video */}
      <div className='aspect-w-16 aspect-h-9 mb-6 bg-gray-100 rounded-lg shadow-md'>
        <YouTube
          videoId={content?.videoId}
          opts={videoOpts}
          onReady={onPlayerReady}
        />
      </div>

      <div>
        {content &&
          content.content.map((item, index) => (
            <div
              key={index}
              className='mb-6 bg-white rounded-lg shadow-md p-4 md:p-6'>
              <h3 className='font-semibold text-xl md:text-2xl mb-3'>
                {item.title}
              </h3>
              <ReactMarkdown
                className='prose max-w-none'
                remarkPlugins={[remarkGfm]}>
                {item.explanation}
              </ReactMarkdown>
              {item.code_examples && item.code_examples.length > 0 && (
                <div className='bg-gray-800 text-white p-4 md:p-6 mt-3 rounded-md'>
                  {item.code_examples.map((example, idx) => (
                    <pre
                      key={idx}
                      className='overflow-x-auto rounded-md bg-gray-900 p-4'>
                      <code className='text-sm'>
                        {Array.isArray(example.code)
                          ? example.code
                              .join("")
                              .replace("<precode>", "")
                              .replace("</precode>", "")
                          : (example.code as string)
                              .replace("<precode>", "")
                              .replace("</precode>", "")}
                      </code>
                    </pre>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChapterContent;
