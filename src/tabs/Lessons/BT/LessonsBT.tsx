import { useState } from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { SectionTitle } from "../../../components/SectionTitle";

export default function LessonsBT() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Ders Senaryosu: Ağ Temelleri",
      text:
        "Bir sınıfta öğrencilere temel ağ yapılandırması öğretiliyor. Öğrencilerin aynı ağ içerisinde birbirlerini pingleyebilmesi gerekiyor. Ancak iki bilgisayar birbiriyle iletişim kuramıyor.",
      question: "Bu durumun en olası nedeni nedir?",
      options: [
        "Aynı IP aralığında değiller",
        "Ağ kablosu takılı değil",
        "Router bozuk"
      ],
      correct: 0,
      explanation:
        "En yaygın problem yanlış IP adres aralığıdır. Aynı ağ maskesi ve IP bloğu içinde olmalıdırlar."
    },
    {
      title: "2. Adım: Sorunu Çözme",
      text:
        "IP aralığı kontrol edildi ve doğru olduğu görüldü. Öğrenciler hâlâ birbirine ping atamıyor.",
      question: "Sıradaki adımınız ne olurdu?",
      options: [
        "Firewall'un ICMP'yi engelleyip engellemediğini kontrol etmek",
        "Switch'i kapatıp açmak",
        "Modemi resetlemek"
      ],
      correct: 0,
      explanation:
        "Okul senaryolarında ping engeli sık görülür. ICMP kapalıysa ping çalışmaz."
    },
    {
      title: "3. Adım: Öğrenme Çıktısı",
      text:
        "Sorun firewall ayarıyla ilgiliydi. ICMP trafiği açıldıktan sonra öğrenciler birbirlerine başarılı şekilde ping attı.",
      question: "Bu dersten hedeflenen öğrenme çıktısı nedir?",
      options: [
        "Switch konfigürasyonu",
        "ICMP ve ağ iletişimi ilişkisini anlama",
        "Router güvenlik ayarları"
      ],
      correct: 1,
      explanation:
        "Öğrencilerin ağ iletişim protokollerini anlaması dersin ana amacıdır."
    }
  ];

  const current = steps[step];

  return (
    <div className="space-y-10">
      <SectionTitle title="BT Ders Senaryoları" />

      <Card className="p-6 space-y-6">

        <h2 className="text-2xl font-bold text-primary">{current.title}</h2>
        <p className="text-lg">{current.text}</p>

        <h3 className="text-xl font-semibold mt-4">{current.question}</h3>

        <div className="space-y-3 mt-4">
          {current.options.map((opt, index) => (
            <button
              key={index}
              onClick={() => setStep(Math.min(step + 1, steps.length - 1))}
              className="w-full text-left p-3 rounded-lg border hover:bg-gray-100 transition"
            >
              {opt}
            </button>
          ))}
        </div>

        <p className="italic text-gray-600 mt-4">{current.explanation}</p>
      </Card>
    </div>
  );
}
