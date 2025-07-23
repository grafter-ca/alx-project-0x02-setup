"use client";

import React from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

type PostsPageProps = {
  posts: PostProps[];
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  console.log("Posts data:", posts);
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              body={post.body} // Fallback to content if body is not available
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  // Only use the first 8 posts for demo
  const posts = data.slice(0, 9);

  return {
    props: {
      posts,
    },
  };
}
