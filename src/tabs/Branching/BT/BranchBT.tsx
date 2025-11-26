import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";

export default function BranchBT() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const steps = [
    {
      title: "Senaryo: Ofis Ağı Güvenlik Problemi",
      text:
        "Ofiste şüpheli ağ trafiği tespit edildi. Loglarda bilinmeyen bir IP adresine sürekli bağlantı girişimleri görünüyor. Sistem yöneticisi olarak ilk adımda ne yaparsınız?",
      options: [
        "Logları analiz ederek anomaliyi doğrulamak",
        "Tüm ağı kapatarak saldırıyı durdurmak",
        "Firewall’da IP bloklamaya başlamak",
      ],
      correct: 0,
      feedback:
        "Doğru yaklaşım: Önce analiz, sonra aksiyon. Yanlış hareket tüm sistemi devre dışı bırakabilir.",
    },
    {
      title: "2. Adım: Kaynak Doğrulama",
      text:
        "Analiz sonucunda trafiğin şirket dışından gelen bir brute-force girişimi olduğu ortaya çıktı. Şimdi nasıl devam edersiniz?",
      options: [
        "Firewall’da ilgili IP’yi engellemek",
        "Sunucu şifresini sıfırlamak",
        "Olayı görmezden gelip beklemek",
      ],
      correct: 0,
      feedback:
        "Güvenlikte ilk savunma hattı firewall’dur. Gereksiz aksiyon risk yaratır.",
    },
    {
      title: "3. Adım: Güvenlik Güçlendirme",
      text:
        "IP engellendi, fakat saldırı farklı IP’lerden gelmeye başladı. Bu durumda hangi adımı atarsınız?",
      options: [
        "Sunucuya MFA eklemek",
        "Makineyi kapatmak",
        "Daha fazla firewall rule ekleyip ummak ki durur",
      ],
      correct: 0,
      feedback:
        "Kalıcı çözüm MFA’dır. Sistem durdurma son çaredir, rastgele firewall rule eklemek çözüm değildir.",
    },
  ];

  const current = steps[step];

  function handleSelect(index: number) {
    setSelected(index);
    setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        setStep("done" as any)
      }
      setSelected(null);
    }, 1000);
  }

  if (step === "done") {
    return (
      <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-600">
        <h2 className="text-2xl font-semibold text-green-700">Senaryo Tamamlandı!</h2>
        <p className="mt-4 text-lg">
          Tüm adımları başarıyla geçtiniz. Olay müdahale sürecindeki kritik düşünme becerileri gelişti.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SectionTitle title="Dallanan BT Senaryosu" />

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-green-700">{current.title}</h2>
        <p className="mt-4 text-lg">{current.text}</p>

        <div className="mt-6 space-y-4">
          {current.options.map((opt, i) => (
            <label
              key={i}
              className={`
                flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition
                ${selected === i ? "bg-green-200" : "bg-white"}
              `}
              onClick={() => handleSelect(i)}
            >
              <input
                type="checkbox"
                readOnly
                checked={selected === i}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-lg">{opt}</span>
            </label>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600 italic">
          {selected !== null && current.feedback}
        </p>
      </div>
    </div>
  );
}
