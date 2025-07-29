"use client";

import { useState } from "react";

async function fetchFriends() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "Vinoth API Local" }),
  });
  const data = await response.json();
  return { data };
}

export default function FriendsPage() {
  const [message, setMessage] = useState("");
  const handleClick = async () => {
    const { data } = await fetchFriends();
    setMessage(data.message);
  };

  return (
    <div>
      <h1 onClick={handleClick}>Hey friends {message}</h1>
    </div>
  );
}
