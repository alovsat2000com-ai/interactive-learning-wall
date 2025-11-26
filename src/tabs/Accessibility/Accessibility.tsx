import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/ui/Card";

export default function Accessibility() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="space-y-10">
      <SectionTitle title="Farklılaştırma & Erişilebilirlik" />

      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-primary">
          BT Eğitiminde Erişilebilirlik İlkeleri
        </h2>

        <p className="text-lg">
          Dijital içeriklerin tüm öğrenciler tarafından erişilebilir olması, 
          öğrenmenin temel şartıdır. Görsel, işitsel veya bilişsel farklılıklar 
          dikkate alınarak tasarlanan içerikler, öğrenme verimliliğini artırır.
        </p>

        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Kontrast ayarlarının doğru yapılması</li>
          <li>Alternatif metin (ALT text) kullanımı</li>
          <li>Klavye ile gezinme desteği</li>
          <li>Basitleştirilmiş dil ve net yapılar</li>
        </ul>
      </Card>

      {/* MINI INTERAKTIF BLOK */}
      <Card className="p-6 border-l-4 border-primary bg-primary/10">
        <h3 className="text-xl font-semibold">Mini Etkileşim</h3>

        <button
          onClick={() => setOpened(!opened)}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
        >
          Kontrast Kontrolü Örneği
        </button>

        {opened && (
          <div className="mt-4 space-y-3">
            <p className="text-lg">
              Bu kutu, yüksek kontrast örneğini göstermektedir.
            </p>

            <div className="p-4 bg-black text-white rounded-lg">
              Yüksek kontrast: Siyah zemin, beyaz yazı.
            </div>

            <div className="p-4 bg-gray-200 text-gray-700 rounded-lg">
              Düşük kontrast: Açık gri zemin, gri yazı.
            </div>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <p className="text-lg">
          Erişilebilir içerik her öğrencinin öğrenme hakkını destekler. 
          Özellikle BT alanında hızlı ve yoğun bilgi akışı olduğu için 
          sade, anlaşılır, kapsayıcı tasarım büyük önem taşır.
        </p>
      </Card>
    </div>
  );
}
