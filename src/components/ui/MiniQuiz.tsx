import { useState } from "react";

export default function MiniQuiz() {
  const [selected, setSelected] = useState<number | null>(null);

  const question = {
    text: "Ping komutu hangi amaçla kullanılır?",
    options: [
      "Ağ trafiğini şifrelemek için",
      "Bir cihazın ulaşılabilir olup olmadığını test etmek için",
      "IP adreslerini otomatik dağıtmak için",
    ],
    correct: 1,
  };

  return (
    <div className="mt-4">
      <p className="text-lg font-medium">{question.text}</p>

      <div className="mt-4 space-y-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full p-3 border rounded-xl text-left transition
              ${
                selected === null
                  ? "bg-white"
                  : i === question.correct
                  ? "bg-green-200 border-green-600"
                  : i === selected
                  ? "bg-red-200 border-red-600"
                  : "bg-white"
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <p className="mt-4 font-medium">
          {selected === question.correct
            ? "Doğru! Ping cihaz erişilebilirliğini test eder."
            : "Yanlış. Ping cihazın ulaşılabilir olup olmadığını kontrol eder."}
        </p>
      )}
    </div>
  );
}
