import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow p-4 hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-500 mb-2">@{username}</p>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-700 mb-1">📞 {phone}</p>
      <p className="text-blue-600 mb-2 hover:underline">
        🌐 <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
      </p>
      <div className="text-sm text-gray-600">
        <p>
          🏢 <strong>{company.name}</strong> - "{company.catchPhrase}"
        </p>
        <p>
          📍 {address.suite}, {address.street}, {address.city} ({address.zipcode})
        </p>
      </div>
    </div>
  );
};

export default UserCard;
