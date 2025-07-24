export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">Access Denied</h1>
      <p className="mt-4 text-lg text-gray-600">
        You do not have permission to view this page.
      </p>
    </div>
  );
}
