import { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { SectionTitle } from "../../components/SectionTitle";

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      q: "1) Packet Tracer’ın temel kullanım amacı nedir?",
      options: [
        "Router donanımı test etmek",
        "Ağ topolojisi simülasyonu yapmak",
        "Saldırı tespit sistemi çalıştırmak",
      ],
      correct: 1,
    },
    {
      q: "2) GNS3 hangi özellik sayesinde Packet Tracer’dan daha profesyoneldir?",
      options: [
        "Gerçek Cisco IOS imajları ile çalışması",
        "Arayüzünün daha renkli olması",
        "Sadece switch simüle etmesi",
      ],
      correct: 0,
    },
    {
      q: "3) Senaryo tabanlı öğrenmede temel amaç nedir?",
      options: [
        "Öğrenciyi pasif dinleyici yapmak",
        "Gerçek problemlere karar vererek çözüm üretmek",
        "Sadece teorik bilgi ezberletmek",
      ],
      correct: 1,
    },
    {
      q: "4) Bir ağda 'ping' hangi temel bilgiyi verir?",
      options: [
        "Cihazın işlemci sıcaklığı",
        "Cihazlar arasındaki iletişim durumu",
        "Wi-Fi sinyal gücü",
      ],
      correct: 1,
    },
    {
      q: "5) Dallanmış senaryo (Branching Scenario) hangi beceriyi geliştirir?",
      options: [
        "Klavye hızını",
        "Karar verme ve problem çözmeyi",
        "Sadece IP ezberleme becerisini",
      ],
      correct: 1,
    },
  ];

  function handleSelect(index: number) {
    setSelected(index);
    if (index === questions[step].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setFinished(true);
      }
      setSelected(null);
    }, 900);
  }

  if (finished) {
    return (
      <div className="space-y-8">
        <SectionTitle title="Ölçme – Değerlendirme Sonucu" />

        <Card className="p-6 text-center space-y-6 bg-green-50 border-green-300">
          <h2 className="text-3xl font-bold text-green-700">Test Tamamlandı</h2>
          <p className="text-xl">
            Toplam Puan:{" "}
            <span className="font-bold text-primary">{score} / {questions.length}</span>
          </p>

          <p className="text-lg text-gray-700">
            Harika! BT simülasyonları, senaryolar ve temel ağ kavramları hakkında
            güçlü bir altyapıya sahipsiniz.
          </p>

          <Button
            className="mt-4"
            onClick={() => {
              setStep(0);
              setScore(0);
              setFinished(false);
            }}
          >
            Tekrar Çöz
          </Button>
        </Card>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="space-y-10">
      <SectionTitle title="Ölçme – Değerlendirme" />

      <Card className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-primary">Soru {step + 1}</h2>

        <p className="text-lg">{current.q}</p>

        <div className="space-y-3">
          {current.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`
                p-3 rounded-lg border cursor-pointer transition text-lg
                ${
                  selected === i
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {opt}
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-2 italic">
          Doğru cevap otomatik olarak değerlendirilecektir.
        </p>
      </Card>
    </div>
  );
}
