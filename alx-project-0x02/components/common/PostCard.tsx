
import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600 mb-3">{content}</p>
      <p className="text-sm text-gray-400">Posted by User #{userId}</p>
    </div>
  );
};

export default PostCard;
