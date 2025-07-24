const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-bold">Users List</h1>
      <ul className="mt-4">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
