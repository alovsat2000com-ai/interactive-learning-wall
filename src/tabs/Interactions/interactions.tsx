import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Hangi durumda simülasyon kullanmak daha uygundur?",
    options: [
      "Öğrencilere sadece tanım ve kavramları ezberletmek istediğinizde",
      "Riskli veya pahalı gerçek sistemleri denemek gerektiğinde",
      "Öğrencilerden sadece çoktan seçmeli test çözmelerini istediğinizde"
    ],
    correctIndex: 1,
    explanation:
      "Simülasyonlar, gerçek hayatta pahalı, riskli veya erişimi zor süreçleri güvenli ve kontrollü bir ortamda deneyimlemek için idealdir."
  },
  {
    id: 2,
    question: "Dallanmış senaryoların en önemli avantajı nedir?",
    options: [
      "Tüm öğrencilerin aynı yolu izlemesini sağlaması",
      "Öğrencilerin hatalı kararlardan geri bildirim alarak öğrenmesini sağlaması",
      "Sadece öğretmenin anlatımını daha uzun hale getirmesi"
    ],
    correctIndex: 1,
    explanation:
      "Dallanmış senaryolar, öğrencilerin farklı kararlar vererek sonuçlarını görmesini ve güvenli bir ortamda hata yaparak öğrenmesini sağlar."
  },
  {
    id: 3,
    question: "BT eğitiminde mini etkileşimler (buton, açılır kutu, quiz) ne işe yarar?",
    options: [
      "Sadece sayfayı görsel olarak doldurur",
      "Öğrencinin derse aktif katılımını ve dikkatini artırır",
      "Dersi daha karmaşık ve zor anlaşılır hale getirir"
    ],
    correctIndex: 1,
    explanation:
      "Mini etkileşimler, öğrencinin pasif dinleyici olmaktan çıkıp içeriğe dokunmasını, düşünmesini ve karar vermesini sağlar."
  }
];

export default function Interactions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = QUESTIONS[currentIndex];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
  };

  const isLastQuestion = currentIndex === QUESTIONS.length - 1;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">
        Mini Etkileşimler: Hızlı BT Quizi
      </h1>

      <p className="text-lg leading-relaxed">
        Bu bölümde, bilişim teknolojilerinde simülasyon, senaryo ve etkileşimli
        tasarım kavramlarını pekiştirmek için kısa bir quiz yer almaktadır.
        Öğrenciler bu tür mini quizlerle kendi seviyelerini hızlıca
        kontrol edebilir.
      </p>

      <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold text-secondary">
            Soru {currentIndex + 1} / {QUESTIONS.length}
          </h2>
          <span className="text-sm text-gray-500">
            Skor: {score} / {QUESTIONS.length}
          </span>
        </div>

        <p className="text-lg font-medium">{currentQuestion.question}</p>

        <div className="space-y-3">
          {currentQuestion.options.map((opt, index) => {
            const isCorrect = index === currentQuestion.correctIndex;
            const isSelected = index === selectedOption;

            let optionClasses =
              "w-full text-left px-4 py-3 rounded-lg border transition-colors";

            if (!isAnswered) {
              optionClasses +=
                " bg-white hover:bg-neutral-50 border-gray-200 cursor-pointer";
            } else if (isCorrect) {
              optionClasses +=
                " bg-green-50 border-green-500 text-green-800 font-semibold";
            } else if (isSelected && !isCorrect) {
              optionClasses +=
                " bg-red-50 border-red-500 text-red-800 font-semibold";
            } else {
              optionClasses += " bg-white border-gray-200 text-gray-700";
            }

            return (
              <button
                key={index}
                className={optionClasses}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/30">
            <p className="font-semibold">
              {selectedOption === currentQuestion.correctIndex
                ? "Doğru cevap!"
                : "Bu cevap tam olarak doğru değil."}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button
            onClick={handleRestart}
            className="px-4 py-2 rounded-lg text-sm border border-gray-300 hover:bg-gray-100"
          >
            Baştan başlat
          </button>

          {!isLastQuestion ? (
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-5 py-2 rounded-lg text-sm font-medium ${
                isAnswered
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Sonraki soru
            </button>
          ) : (
            <span className="text-sm text-gray-600">
              Quiz tamamlandı. Toplam skorun: {score} / {QUESTIONS.length}
            </span>
          )}
        </div>
      </section>

      <section className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
        <h3 className="text-xl font-semibold">
          Neden bu tür mini etkileşimler kullanılır?
        </h3>
        <p className="mt-2 text-sm text-gray-800">
          Bu quiz, etkileşimli duvarın sadece bilgi gösteren bir pano
          olmadığını, aynı zamanda öğrencinin düşünmesini, seçim yapmasını ve
          geri bildirim almasını sağlayan bir öğrenme aracı olduğunu gösterir.
        </p>
      </section>
    </div>
  );
}
