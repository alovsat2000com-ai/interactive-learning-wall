import { useState } from "react";

export default function MiniDecision() {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "Log analizi yapmak",
    "Firewall’u kapatmak",
    "IP bloklamak",
  ];

  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-300 rounded-xl">
      <p className="text-lg font-medium">İlk adımda hangi kararı alırsınız?</p>

      <div className="mt-4 space-y-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full p-3 border rounded-xl text-left transition ${
              selected === null
                ? "bg-white"
                : i === 0
                ? "bg-green-200 border-green-600"
                : i === selected
                ? "bg-red-200 border-red-600"
                : "bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <p className="mt-4 text-sm italic text-gray-700">
          {selected === 0
            ? "Doğru yaklaşım: önce log analizi."
            : "Bu tercih doğru değil. İlk adım analiz olmalı."}
        </p>
      )}
    </div>
  );
}
