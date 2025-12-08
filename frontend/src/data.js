import award1 from "./assets/ödül-1.jpg";
import award2 from "./assets/ödül-2.webp";
import award3 from "./assets/ödül-3.webp";
import award4 from "./assets/ödül-4.jpg";
import award5 from "./assets/ödül-5.webp";
import award6 from "./assets/ödül-6.webp";
import SaglikliGuluslerIcinDisBakimi from "./assets/saglikli-ve-estetik-gulusler-icin-dis-bakimi.jpg";
import HairTransplantDogalSacGorunumu from "./assets/hair-transplant-ile-dogal-sac-gorunumu.jpg";
import BurunCerrrahisiHakkindaBilmenizGerekenler from "./assets/burun-cerrahisi-hakkinda-bilmeniz-gerekenler.jpg";
import HollywoodGulusuKusursuzDisler from "./assets/hollywoord-gulusu-kusursuz-disler.webp";
import LiposuctionIleVucutEstetigi from "./assets/liposuction-ile-vucut-estetigi-kazanma.webp";

export const customer_reviews = [
  {
    id: "1",
    platform: "Google",
    customer_name: "Melisa A.",
    customer_message:
      "Ameliyatsız yüz gerdirme işlemi için geldim, işlem hem acısızdı hem de sonuç hemen fark edildi. Doktor ve ekip gerçekten çok profesyoneldi.",
    service_name: "Ameliyatsız Yüz Gerdirme",
    date: "12/02/2025",
  },
  {
    id: "2",
    platform: "Google",
    customer_name: "Burak T.",
    customer_message:
      "Bölgesel incelme uygulamasından çok memnun kaldım. 3 seansta gözle görülür fark oluştu. Klinik çok temiz ve çalışanlar çok ilgili.",
    service_name: "Bölgesel İncelme ve Selülit",
    date: "08/01/2025",
  },
  {
    id: "3",
    platform: "Google",
    customer_name: "Gökçe K.",
    customer_message:
      "İp askılama işlemi için tereddütlüydüm ama sonuç harika! Yüzüm çok daha toplu ve genç görünüyor, kesinlikle tavsiye ederim.",
    service_name: "İp Askılama",
    date: "05/03/2025",
  },
  {
    id: "4",
    platform: "Google",
    customer_name: "Sibel D.",
    customer_message:
      "Cilt bakımı hizmetleri muhteşem. Cildim ilk seans sonrası bile canlandı. Kullanılan ürünler çok kaliteli.",
    service_name: "Cilt Bakımı",
    date: "22/02/2025",
  },
  {
    id: "5",
    platform: "Google",
    customer_name: "Hakan Y.",
    customer_message:
      "Antiaging uygulamaları sayesinde cildimdeki matlık ve ince çizgiler büyük ölçüde azaldı. Klinik çok profesyonel.",
    service_name: "Antiaging",
    date: "17/01/2025",
  },
  {
    id: "6",
    platform: "Google",
    customer_name: "Selin R.",
    customer_message:
      "Aşırı terleme şikayetim için yıllardır çözüm bulamıyordum. Burada yapılan terleme tedavisi sayesinde günlük hayatım çok rahatladı.",
    service_name: "Terleme Tedavisi",
    date: "03/03/2025",
  },
  {
    id: "7",
    platform: "Google",
    customer_name: "Eda E.",
    customer_message:
      "Dolgu işlemi için geldim, yüzüm çok daha doğal ve canlı görünüyor. Doktorun eline gerçekten güvenebilirsiniz.",
    service_name: "Dolgu",
    date: "14/02/2025",
  },
  {
    id: "8",
    platform: "Google",
    customer_name: "Mert K.",
    customer_message:
      "Lazer cilt gençleştirme işlemi sonrası cildim resmen yenilendi. Kızarıklık bile neredeyse olmadı. Harika ekip!",
    service_name: "Cilt Gençleştirme",
    date: "28/02/2025",
  },
  {
    id: "9",
    platform: "Google",
    customer_name: "Ayşegül S.",
    customer_message:
      "Gülüş tasarımı için geldim, sonuç beklentimin çok üzerinde oldu. Hem estetik hem de doğal bir gülüş tasarladılar.",
    service_name: "Diş Estetiği / Gülüş Tasarımı",
    date: "10/01/2025",
  },
  {
    id: "10",
    platform: "Google",
    customer_name: "Serhat C.",
    customer_message:
      "Klinik çok modern, personel çok güler yüzlü. Ameliyatsız işlemlerde bile sonuçları hissediyorsunuz. Kesinlikle tavsiye ederim.",
    service_name: "Medikal Estetik",
    date: "01/03/2025",
  },
];

export const awards = [
  {
    id: "1",
    title: "En İyi Estetik ve Plastik Cerrahi Kliniği",
    organization: "Türkiye Sağlık Ödülleri",
    year: 2023,
    image: award1,
  },
  {
    id: "2",
    title: " Hasta Memnuniyeti Mükemmellik Ödülü",
    organization: "Global Uluslararası Health Excellence Awards",
    year: 2024,
    image: award2,
  },
  {
    id: "3",
    title: "Yılın Sağlık Turizmi Merkezi",
    organization: "Medical Tourism Star Awards",
    year: 2022,
    image: award3,
  },
  {
    id: "4",
    title: "En İyi Burun Estetiği (Rinoplasti) Merkezi",
    organization: "Aesthetic & Beauty Awards",
    year: 2023,
    image: award4,
  },
  {
    id: "5",
    title: "Hasta Güvenliği ve Kalite Sertifikası",
    organization: "International Health Quality Association",
    year: 2021,
    image: award5,
  },
  {
    id: "6",
    title: "Yılın Yenilikçi Estetik Uygulaması Ödülü",
    organization: "European Cosmetic Innovations Forum",
    year: 2024,
    image: award6,
  },
];

export const blogs = [
  {
    id: "1",
    title: "Sağlıklı ve Estetik Gülüşler için Diş Bakımı",
    slug: "saglikli-estetik-gulusler-diş-bakimi",
    link: "/blog/saglikli-estetik-gulusler-dis-bakimi",
    summary:
      "Diş sağlığı ve estetiği hakkında bilinmesi gereken temel ipuçları ve modern tedavi yöntemleri.",
    content: `
Diş sağlığı, genel sağlığımızın ve estetik görünümümüzün en önemli parçalarından biridir. Düzenli diş kontrolleri, profesyonel temizlikler ve doğru ağız hijyeni alışkanlıkları ile sağlıklı bir gülüş elde etmek mümkündür. 
Modern diş estetiği uygulamaları, dişlerin rengini düzeltmek, hizalamak ve eksik dişleri tamamlamak için farklı çözümler sunar. Bunlar arasında lamineler, zirkonyum kaplamalar ve implant tedavileri yer alır. Ayrıca, estetik ve fonksiyonel tedavi planları, kişinin ihtiyaçlarına özel olarak hazırlanır.
    `,
    author: "Dr. Ahmet Yılmaz",
    date: "2025-05-01",
    image: SaglikliGuluslerIcinDisBakimi,
  },
  {
    id: "2",
    title: "Hair Transplant ile Doğal Saç Görünümü",
    slug: "hair-transplant-dogal-sac-gorunumu",
    link: "/blog/hair-transplant-dogal-sac-gorunumu",
    summary:
      "Saç dökülmesine karşı modern hair transplant yöntemleri ve doğal sonuç elde etmenin yolları.",
    content: `
Saç dökülmesi, hem estetik hem de psikolojik açıdan etkili bir durumdur. Modern hair transplant teknikleri, doğal saç çizgisi ve yoğunluk sağlamak amacıyla geliştirilmiştir. 
FUE ve DHI gibi yöntemler minimal invazivdir ve kısa iyileşme süreleri sunar. Doğru planlama ve uzman ekip ile saç ekimi sonrası doğal görünüm ve kalıcı sonuçlar elde edilir.
    `,
    author: "Dr. Ayşe Demir",
    date: "2025-04-20",
    image: HairTransplantDogalSacGorunumu,
  },
  {
    id: "3",
    title: "Burun Cerrahisi Hakkında Bilmeniz Gerekenler",
    slug: "estetik-burun-cerrahisi-rinoplasti",
    link: "/blog/estetik-burun-cerrahisi-rinoplasti",
    summary:
      "Rinoplasti süreci, ameliyat öncesi ve sonrası dikkat edilmesi gerekenler hakkında detaylı bilgiler.",
    content: `
Burun estetiği, hem yüzün simetrisini hem de nefes fonksiyonunu iyileştirebilir. Rinoplasti ameliyatları öncesinde detaylı muayene ve 3D simülasyonlar ile planlama yapılır.
Ameliyat sonrası iyileşme süreci, ödem kontrolü ve doğru bakım ile desteklenmelidir. Modern teknikler ile doğal ve estetik sonuçlar sağlanmaktadır.
    `,
    author: "Dr. Mehmet Kara",
    date: "2025-03-15",
    image: BurunCerrrahisiHakkindaBilmenizGerekenler,
  },
  {
    id: "4",
    title: "Hollywood Gülüşü Tasarımı ile Kusursuz Dişler",
    slug: "hollywood-gulusu-tasarimi-kusursuz-disler",
    link: "/blog/hollywood-gulusu-tasarimi-kusursuz-disler",
    summary:
      "Hollywood gülüşü tasarımı ile dişlerinizi estetik ve simetrik bir hale getirmek için uygulanan yöntemler.",
    content: `
Hollywood gülüşü tasarımı, dişlerin formunu, rengini ve hizalanmasını iyileştiren kapsamlı bir estetik uygulamadır. Lamineler, zirkonyum kaplamalar ve diş beyazlatma yöntemleri birlikte kullanılarak kusursuz bir gülüş sağlanır.
Planlama aşamasında dijital smile design teknikleri ile hastanın yüz hatlarına en uygun tasarım oluşturulur. Sonuç, doğal, sağlıklı ve estetik bir gülüştür.
    `,
    author: "Dr. Elif Şahin",
    date: "2025-02-28",
    image: HollywoodGulusuKusursuzDisler,
  },
  {
    id: "5",
    title: "Liposuction ile Vücut Estetiği ve Form Kazanma",
    slug: "liposuction-vucut-estetigi-form-kazanma",
    link: "/blog/liposuction-vucut-estetigi-form-kazanma",
    summary:
      "Liposuction yöntemi ile bölgesel yağlardan kurtulma ve estetik vücut hatları elde etme süreci.",
    content: `
Liposuction, vücudun belirli bölgelerindeki inatçı yağlardan kurtulmak için kullanılan cerrahi bir yöntemdir. Minimal invaziv teknikler ile ameliyat sonrası hızlı iyileşme sağlanır.
Planlama, kişinin vücut yapısına göre özelleştirilir ve doğal hatlar korunur. Liposuction sonrası doğru beslenme ve egzersiz ile kalıcı ve estetik sonuçlar elde edilir.
    `,
    author: "Dr. Canan Yıldız",
    date: "2025-01-18",
    image: LiposuctionIleVucutEstetigi,
  },
];
