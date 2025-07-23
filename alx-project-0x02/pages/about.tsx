
import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <p className="mb-8 text-gray-700">
        This page demonstrates reusable button components with different sizes and shapes.
      </p>

      <div className="flex justify-center gap-4">
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </div>
    </div>
    </>
  );
};

export default About;
