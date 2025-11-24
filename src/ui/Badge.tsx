export function Badge({ type, text }: { type: "info" | "success" | "warning" | "error"; text: string }) {
  const styles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[type]}`}>
      {text}
    </span>
  );
}
