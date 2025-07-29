async function fetchFriends() {
  const response = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "getFriends" }),
  });
  const data = await response.json();
  return { data };
}

export default async function FriendsPage() {
  const { data } = await fetchFriends();
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Friends List</h1>
      <div>{data.message}</div>
      <div>{data.data.timestamp}</div>
    </div>
  );
}
