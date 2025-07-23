import React from "react";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

type UsersPageProps = {
  users: UserProps[];
};

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await res.json();

  // Only use the first 9 users for demo
  const users = data.slice(0, 9);

  return {
    props: {
      users,
    },
  };
}