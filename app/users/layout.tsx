"use client";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Section</h1>
      {children}
    </div>
  );
};
export default UserLayout;
