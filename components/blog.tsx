//@ts-ignore
"use client";
import React, { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  link: string;
  published: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mwendavictorm"
    )
      .then((res) => res.json())
      .then((data) => {
        const parsedPosts = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          published: item.pubDate,
        }));
        setPosts(parsedPosts);
      })
      .catch((err) => console.error("Error fetching Medium posts:", err));
  }, []);

  return (
    <div className="mt-2 py-2">
      <div className="relative flex flex-col h-full w-full">
        <h2 className="text-2xl flex justify-start items-start pl-4 decoration underline">
          Blog
        </h2>
        <div className="mt-4">
          <ul className="space-y-4">
            {posts.map((post, index) => (
              <li key={index} className="flex flex-col">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-lg"
                >
                  {post.title}
                </a>
                <span className="text-sm text-gray-500">
                  {new Date(post.published).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
