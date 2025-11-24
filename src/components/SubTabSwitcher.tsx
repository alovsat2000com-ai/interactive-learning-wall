interface Props {
  active: "BT" | "FEN";
  onChange: (val: "BT" | "FEN") => void;
}

export function SubTabSwitcher({ active, onChange }: Props) {
  return (
    <div className="flex gap-4 items-center mb-6">
      <button
        onClick={() => onChange("BT")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            active === "BT"
              ? "bg-[var(--secondary)] text-white shadow-md"
              : "bg-white text-gray-700 border hover:bg-gray-100"
          }
        `}
      >
        BT
      </button>

      <button
        onClick={() => onChange("FEN")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${
            active === "FEN"
              ? "bg-[var(--secondary)] text-white shadow-md"
              : "bg-white text-gray-700 border hover:bg-gray-100"
          }
        `}
      >
        Fen Bilimleri
      </button>
    </div>
  );
}
