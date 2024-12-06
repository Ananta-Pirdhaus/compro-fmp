import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <h2 className="text-3xl font-semibold text-center">New Tech Posts</h2>
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100"
        >
          <img
            src="https://th.bing.com/th/id/OIP._YmQQSVtIhRaZm9X3FAFuQHaEL?w=885&h=500&rs=1&pid=ImgDetMain"
            alt="Tech Post"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-200"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Emerging Technologies in 2024
            </h3>
            <span className="text-xs text-gray-500">December 6, 2024</span>
            <p>
              Stay ahead of the curve with insights into the latest advancements
              in AI, blockchain, and quantum computing.
            </p>
          </div>
        </a>
        <h2 className="text-3xl font-semibold text-center">
          Latest Tech Posts
        </h2>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-100"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-200"
                src={`https://th.bing.com/th/id/OIP._YmQQSVtIhRaZm9X3FAFuQHaEL?w=885&h=500&rs=1&pid=ImgDetMain`}
                alt={`Tech Post ${index}`}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Future of Smart Cities
                </h3>
                <span className="text-xs text-gray-500">
                  December {5 + index}, 2024
                </span>
                <p>
                  Discover how technology is transforming urban spaces with IoT
                  and AI to make cities smarter and more efficient.
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-100 text-gray-800"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
