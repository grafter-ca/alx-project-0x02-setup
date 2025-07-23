"use client";

import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <img src="/assets/preloader.webp" alt="preloader" />
        </div>
    );
  }

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
            content={post.content}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Posts;
