export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="vinoth">
      <nav className="p-4 bg-gray-200">Dashboard Navigation Bar</nav>
      <main>{children}</main>
    </section>
  );
}
