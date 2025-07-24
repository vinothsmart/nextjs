const UserPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  return <div>User ID: {userId}</div>;
};

export default UserPage;
