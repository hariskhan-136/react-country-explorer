function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-5 h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        <h2 className="text-2xl font-bold">Loading Countries...</h2>
      </div>
    </div>
  );
}

export default Loading;
