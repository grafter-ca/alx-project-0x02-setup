import Header from "@/components/layout/Header";

const posts:React.FC = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <p className="text-gray-600">This is the posts page.</p>
    </div>
    </>
  );
}

export default posts;