import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-gray-400">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-black shadow-[0px_0px_100px_rgba(34,197,94,1)] rounded-xl overflow-hidden w-96 p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-[0px_0px_60px_rgba(34,197,94,1)]">
        <div className="relative">
          <img
            src={user.picture.large}
            alt={user.name.first + " " + user.name.last}
            className="w-28 h-28 rounded-full mx-auto shadow-[0px_0px_50px_rgba(34,197,94,1)] hover:shadow-[0px_0px_70px_rgba(34,197,94,1)]"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-black"></div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-400 text-sm mt-1">{user.email}</p>
        <p className="mt-2 text-gray-300 font-medium">
          {user.location.city}, {user.location.country}
        </p>
        <p className="text-gray-500">📞 {user.phone}</p>
        <button className="mt-5 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-lg transition duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return <UserProfile />;
}
