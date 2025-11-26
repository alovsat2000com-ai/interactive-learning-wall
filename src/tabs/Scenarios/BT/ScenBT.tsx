import SectionTitle from "../../../components/SectionTitle";
import { Card } from "../../../components/ui/Card";

export default function ScenBT() {
  return (
    <div className="space-y-10">
      
      <SectionTitle title="BT Senaryoları" />

      <p className="text-lg leading-relaxed">
        Bu bölümde öğrenciler, gerçek BT operasyon ortamlarında yaşanabilecek
        olayları adım adım analiz eder. Amaç teknik bilginin yanında analitik
        düşünme, olay yönetimi ve karar verme becerilerini geliştirmektir.
      </p>

      {/* ───────────────────────────────────────────── */}
      {/*   S E N A R Y O   1  –  S U N U C U  C Ö K M E S I */}
      {/* ───────────────────────────────────────────── */}

      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary">
          Senaryo 1: Sunucu Çökmesi – BT Operasyon Senaryosu
        </h3>

        <p>
          Bir şirketin üretim sunucusu ani bir şekilde erişilemez hale geliyor.
          Kullanıcılar sisteme giriş yapamıyor ve tüm operasyon durma noktasında.
          Siz nöbetçi BT uzmanısınız.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Web hizmetleri yanıt vermiyor</li>
          <li>Ping cevabı zaman zaman gidip geliyor</li>
          <li>CPU grafiği önce yükselmiş, sonra sabitlenmiş</li>
        </ul>
      </Card>

      {/* ───────────────────────────────────────────── */}
      {/*   M I N I - K A R A R   N O K T A S I           */}
      {/* ───────────────────────────────────────────── */}

      <div className="bg-green-50 p-6 rounded-xl border border-green-200 space-y-4">
        <h3 className="text-xl font-semibold text-green-700">
          Mini Karar Noktası
        </h3>

        <p>Aşağıdaki durumda ilk adımınız ne olurdu?</p>

        <div className="space-y-3">
          <button className="w-full bg-white p-3 rounded-lg shadow hover:bg-gray-100 text-left">
            1) Logları inceleyerek anomalileri doğrulamak
          </button>

          <button className="w-full bg-white p-3 rounded-lg shadow hover:bg-gray-100 text-left">
            2) Bütün ağı kapatarak saldırıyı durdurmak
          </button>

          <button className="w-full bg-white p-3 rounded-lg shadow hover:bg-gray-100 text-left">
            3) Firewall'da IP bloklamaya başlamak
          </button>
        </div>

        <p className="text-sm mt-3 text-gray-600">
          <strong>Doğru yaklaşım:</strong> önce analiz, sonra aksiyon. Yanlış
          hareket tüm sistemi devre dışı bırakabilir.
        </p>
      </div>

      {/* ───────────────────────────────────────────── */}
      {/*   Ö Ğ R E N M E   K A Z A N I M L A R I         */}
      {/* ───────────────────────────────────────────── */}

      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary">
          Öğrenme Kazanımları
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          <li>Sistem çökme nedenlerini analiz edebilme</li>
          <li>Önceliklendirilmiş aksiyon planı oluşturma</li>
          <li>Acil BT durumlarında doğru karar verme</li>
          <li>Olay yönetimi süreçlerinde tecrübe kazanma</li>
        </ul>
      </Card>
    </div>
  );
}
