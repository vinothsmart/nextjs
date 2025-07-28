import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <p className="mt-2">
        <Link href="/" className="text-blue-500 no-underline hover:underline">
          Go back to Home
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
