import { notFound } from "next/navigation";

const fetchUser = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    return null; // Return null if the user is not found
  }
  return response.json();
};

const UserPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    console.error("User not found");
    return notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">User Details</h1>
      <div className="mt-4">
        <p className="text-lg">Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </div>
  );
};

export default UserPage;
