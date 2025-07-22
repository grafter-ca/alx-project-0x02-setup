import { type CardProps } from "@/interfaces";

const Card : React.FC<CardProps> = ({title, content} ) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
}

export default Card;