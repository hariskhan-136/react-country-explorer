interface Props {
  message: string;
}

function ErrorMessage({ message }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-xl bg-red-100 p-10 text-center shadow-lg">
        <h2 className="mb-3 text-3xl font-bold text-red-600">Error</h2>

        <p className="text-lg text-red-500">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
