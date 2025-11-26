import { SectionTitle } from "../../../components/SectionTitle";

export default function LitBT() {
  return (
    <div className="space-y-8">

      <SectionTitle title="BT Literatür Analizi" />

      <p className="text-lg leading-relaxed">
        Bilgi Teknolojileri eğitiminde öğrenciler genellikle ağ yapıları,
        protokoller, güvenlik tehditleri ve algoritmalar gibi soyut kavramları
        anlamakta zorlanır. Literatür, etkileşimli ve uygulamaya dayalı
        öğrenme ortamlarının bu zorlukları önemli ölçüde azalttığını
        göstermektedir.
      </p>

      {/* ────────────────────────────── */}
      {/*  L I T E R A T U R   O Z E T I */}
      {/* ────────────────────────────── */}

      <div className="bg-white shadow p-6 rounded-xl border border-gray-200 space-y-4">

        <h3 className="text-xl font-semibold text-primary">
          Literatürdeki Başlıca Bulgular
        </h3>

        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>
            <strong>Ebrahimzadeh &amp; Alavi (2017):</strong> Dijital oyun ve
            etkileşimli uygulamalarının motivasyonu artırdığı ve kavram
            öğrenimini güçlendirdiği vurgulanmaktadır.
          </li>

          <li>
            <strong>Clark &amp; Mayer (2021):</strong> Etkili multimedya
            tasarımında gereksiz içerik yükünün azaltılması ve görsel-metinsel
            uyumun sağlanması performansı yükseltir.
          </li>

          <li>
            <strong>Almalki (2020):</strong> Simülasyon tabanlı BT eğitimi,
            problem çözme becerilerini ve teknik uygulama doğruluğunu artırır.
          </li>

          <li>
            <strong>Cisco Networking Academy (2022):</strong> Packet Tracer ve
            GNS3 gibi araçlarla yapılan gerçekçi laboratuvar çalışmalarının
            öğrenmeyi %40 oranında hızlandırdığı gösterilmiştir.
          </li>

          <li>
            <strong>Kim &amp; Reeves (2007):</strong> Dallanmış senaryolar,
            karar verme becerilerini ve üst düzey bilişsel süreçleri
            güçlendirir.
          </li>
        </ul>
      </div>

      {/* ────────────────────────────── */}
      {/*  T E O R I K   C E R C E V E  */}
      {/* ────────────────────────────── */}

      <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary space-y-4">
        <h3 className="text-xl font-semibold">Teorik Çerçeve</h3>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Yapılandırmacılık:</strong> Öğrencinin bilgiyi aktif olarak
            inşa etmesini destekleyen ortamlar daha kalıcı öğrenme sağlar.
          </li>

          <li>
            <strong>Bilişsel Yük Kuramı:</strong> Karmaşık BT kavramları modüler
            ve sade sunulduğunda öğrenme süreci hızlanır.
          </li>

          <li>
            <strong>Davranışçı Kuram:</strong> Quiz, dönüt ve anında pekiştirme,
            teknik kavramların öğrenilmesini kolaylaştırır.
          </li>

          <li>
            <strong>Akış Teorisi (Flow):</strong> Uygulama düzeyi ile zorluk
            dengesinin sağlanması öğreneni derin odaklanma durumuna taşır.
          </li>
        </ul>
      </div>
    </div>
  );
}
