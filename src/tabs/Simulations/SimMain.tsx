export default function SimMain() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">
        BT Simülasyonları
      </h1>

      <p className="text-lg leading-relaxed">
        Bilgi teknolojileri eğitiminde simülasyonlar, öğrencilerin karmaşık ağ 
        yapıları, protokoller ve güvenlik tehditlerini risksiz ve maliyetsiz bir 
        ortamda deneyimlemesini sağlar. Gerçek donanım olmadan öğrenme sürecini 
        hızlandırır ve hata yapma korkusunu azaltır.
      </p>

      {/* Packet Tracer */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-secondary">Cisco Packet Tracer</h2>
        <p className="mt-2">
          Ağ topolojisi kurma, yönlendirici ve anahtar yapılandırma, IP planlama 
          gibi temel ağ kavramlarını öğretmek için kullanılan en yaygın BT 
          simülasyon aracıdır.
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>Gerçekçi ağ simülasyonları</li>
          <li>Deneme–yanılma sürecini hızlandırır</li>
          <li>Hata yapma riskini sıfıra indirir</li>
        </ul>
      </section>

      {/* GNS3 */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-secondary">GNS3</h2>
        <p className="mt-2">
          Cisco IOS, firewall, router ve gelişmiş yönlendirme protokollerinin 
          gerçekçi emülasyonunu sunan profesyonel bir platformdur.
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>Gerçek Cisco IOS ile çalışma imkanı</li>
          <li>Gelişmiş güvenlik ve routing senaryoları</li>
          <li>Network uzmanlığı için ideal</li>
        </ul>
      </section>

      {/* PhET / Luma */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-secondary">PhET & Luma AI</h2>
        <p className="mt-2">
          PhET bazı bilgisayar bilimi modelleri sunarken, Luma AI ise ağ süreçleri 
          ve sistem işleyişlerinin 3D görselleştirilmesinde kullanılabilir.
        </p>
      </section>

      {/* Mini uygulama */}
      <section className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
        <h3 className="text-xl font-semibold">Mini Uygulama</h3>
        <p className="mt-2">
          Packet Tracer içinde küçük bir ağ kurun:
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>2 PC</li>
          <li>1 Switch</li>
          <li>1 Router</li>
          <li>IP ataması + Ping testi</li>
        </ul>
        <p className="mt-3 font-medium">
          Beklenen Çıktı: <span className="text-primary">Temel ağ iletişimini kavrama.</span>
        </p>
      </section>
    </div>
  );
}
