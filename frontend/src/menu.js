import PlastikCerrahiImg from "./assets/plastik-cerrahi.jpg";
import SacEkimiImg from "./assets/sac-ekimi.webp";
import MedikalEstetikImg from "./assets/medikal-estetik.jpg";
import DisEstetigiImg from "./assets/dis-estetigi.jpg";
import PenisEstetigiImg from "./assets/penis-estetigi.jpg";
import SakalEkimiImg from "./assets/sakal-ekimi.jpg";
import BiyikEkimiImg from "./assets/biyik-ekimi-11.jpg";
import KasEkimiImg from "./assets/kas-ekimi.jpg";
import CiltBakimiImg from "./assets/cilt-bakimi.jpg";
import YuzGerdirmeImg from "./assets/ameliyatsiz-yuz-gerdirme.webp";
import BolgeselIncelmeImg from "./assets/bolgesel-incelme-selulit.jpg";
import IpAskilamaImg from "./assets/ip-askilama.webp";
import AntiagingImg from "./assets/antiaging.jpg";
import TerlemeTedavisiImg from "./assets/asiri-terleme-tedavisi.png";
import VucutEstetigiImg from "./assets/vucut-estetigi.jpg";
import YuzEstetigiImg from "./assets/yuz-estetigi.jpg";
import LiposuctionImg from "./assets/liposuction.jpg";
import GogusEstetigi from "./assets/gogus-estetigi.jpg";
import DisTedavisiImg from "./assets/dis-tedavisi.jpg";
import ProtezTedavisiImg from "./assets/protez-tedavisi.webp";
import EndotondiImg from "./assets/endotondi.webp";
import HollywoodSmileImg from "./assets/hollywood-gulusu.webp";
import ZirkonyumKaplamaImg from "./assets/zirkonyum-kaplama.jpg";
import PorselenLamineImg from "./assets/porselen-lamine.webp";
import ImpilantTedavisiImg from "./assets/impilant-tedavisi.jpg";

export const mainMenus = [
  {
    id: 1,
    name: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    name: "Plastik Cerrahi",
    homeİsView: true,
    link: "#",
    description:
      "Plastik cerrahi ile doğal ve estetik görünüm elde edin. Yüz, burun, meme ve vücut estetiğinde güvenilir çözümler.",
    image: PlastikCerrahiImg,
  },
  {
    id: 3,
    name: "Saç Ekimi",
    homeİsView: true,
    link: "#",
    description:
      "Kalıcı ve doğal saç ekimi yöntemleri ile saç dökülmesine son verin. Modern tekniklerle sağlıklı saç görünümü.",
    image: SacEkimiImg,
  },
  {
    id: 4,
    name: "Medikal Estetik",
    homeİsView: true,
    link: "#",
    description:
      "Cerrahi gerektirmeyen medikal estetik uygulamaları ile gençleşin. Dolgu, botoks, cilt bakımı ve lazer tedavileri.",
    image: MedikalEstetikImg,
  },
  {
    id: 5,
    name: "Diş Estetiği",
    homeİsView: true,
    link: "#",
    description:
      "Gülüşünüzü yeniden tasarlayın. Zirkonyum kaplama, diş beyazlatma ve dolgu ile sağlıklı ve estetik dişler.",
    image: DisEstetigiImg,
  },
  {
    id: 6,
    name: "Penis Estetiği",
    homeİsView: true,
    link: "#",
    description:
      "Erkek sağlığı için güvenli ve modern estetik çözümler. Penis büyütme, şekillendirme ve yenileme işlemleri.",
    image: PenisEstetigiImg,
  },
  {
    id: 7,
    name: "Kurumsal",
    link: "#",
  },
  {
    id: 8,
    name: "Bize Ulaşın",
    link: "/iletisim",
  },
];

export const subCategories = [
  {
    id: 1,
    main_category: 2,
    name: "Vücut Estetiği",
    slug: "vucut-estetigi",
    link: "/plastik-cerrahi/vucut-estetigi",
    description:
      "Vücut estetiği operasyonları ile vücut hatlarınızı şekillendirin, özgüveninizi artırın. Kilo kaybı sonrası sarkmalar veya bölgesel yağlanmalar için kişiye özel çözümler sunuyoruz.",
    image: VucutEstetigiImg,
  },
  {
    id: 2,
    main_category: 2,
    name: "Yüz Estetiği",
    slug: "yuz-estetigi",
    link: "/plastik-cerrahi/yuz-estetigi",
    description:
      "Yüz estetiği ile doğal ve genç bir görünüm elde edin. Burun, çene, göz kapağı ve yüz hatlarınızdaki estetik dokunuşlar ile yüzünüzün harmonisini yeniden keşfedin.",
    image: YuzEstetigiImg,
  },
  {
    id: 3,
    main_category: 2,
    name: "Liposuction Estetiği",
    slug: "liposuction-estetigi",
    link: "/plastik-cerrahi/liposuction-estetigi",
    description:
      "Liposuction estetiği ile inatçı bölgesel yağlardan kurtulun. Vücudunuzun hatlarını yeniden şekillendirin ve daha fit bir görünüme kavuşun.",
    image: LiposuctionImg,
  },
  {
    id: 4,
    main_category: 2,
    name: "Göğüs Estetiği",
    slug: "gogus-estetigi",
    link: "/plastik-cerrahi/gogus-estetigi",
    description:
      "Göğüs estetiği ile istediğiniz göğüs formuna kavuşun. Büyütme, küçültme veya dikleştirme işlemleri ile hem estetik hem de fonksiyonel çözümler sunuyoruz.",
    image: GogusEstetigi,
  },
  {
    id: 5,
    main_category: 3,
    name: "Saç Ekimi",
    slug: "sac-ekimi",
    link: "/sac-ekimi/sac-ekimi",
    description:
      "Doğal görünümlü ve yoğun saç ekimi yöntemleri ile saç çizginizi yeniden oluşturuyor, kalıcı ve estetik sonuçlar sunuyoruz.",
    image: SacEkimiImg,
  },
  {
    id: 6,
    main_category: 3,
    name: "Sakal Ekimi",
    slug: "sakal-ekimi",
    link: "/sac-ekimi/sakal-ekimi",
    description:
      "Bölgesel boşlukları dolduran, doğal sakal yoğunluğu sağlayan modern sakal ekimi teknikleri ile yeni görünümünüzü şekillendiriyoruz.",
    image: SakalEkimiImg,
  },
  {
    id: 7,
    main_category: 3,
    name: "Bıyık Ekimi",
    slug: "biyik-ekimi",
    link: "/sac-ekimi/biyik-ekimi",
    description:
      "Daha dolgun, simetrik ve estetik bir bıyık görünümü için doğal kök yönlerine uygun bıyık ekimi ile hayallerinizi gerçekleştiriyoruz.",
    image: BiyikEkimiImg,
  },
  {
    id: 8,
    main_category: 3,
    name: "Kaş Ekimi",
    slug: "kas-ekimi",
    link: "/sac-ekimi/kas-ekimi",
    description:
      "Yüz estetiğini belirleyen kaş formunu, doğal açı ve yoğunlukta yeniden oluşturarak kalıcı ve zarif sonuçlar sağlıyoruz.",
    image: KasEkimiImg,
  },
  {
    id: 9,
    main_category: 4,
    name: "Ameliyatsız Yüz Gerdirme",
    slug: "ameliyatsiz-yuz-gerdirme",
    link: "/medikal-estetik/ameliyatsiz-yuz-gerdirme",
    description:
      "Cilt sarkmalarını, elastikiyet kaybını ve yaşlanma belirtilerini cerrahi işlem olmadan azaltan güvenli ve etkili yüz gençleştirme yöntemleri.",
    image: YuzGerdirmeImg,
  },
  {
    id: 10,
    main_category: 4,
    name: "Bölgesel İncelme ve Selülit",
    slug: "bolgesel-incelme-ve-selulit",
    link: "/medikal-estetik/bolgesel-incelme-ve-selulit",
    description:
      "Vücut hatlarını şekillendiren, inatçı yağ dokusunu azaltan ve cilt görünümünü pürüzsüzleştiren modern bölgesel incelme ve selülit tedavileri.",
    image: BolgeselIncelmeImg,
  },
  {
    id: 11,
    main_category: 4,
    name: "İp Askılama",
    slug: "ip-askilama",
    link: "/medikal-estetik/ip-askilama",
    description:
      "Yüz ve boyun bölgesindeki sarkmaları ameliyatsız bir şekilde toparlayan, anında gençleşme etkisi sunan ip askılama uygulaması.",
    image: IpAskilamaImg,
  },
  {
    id: 12,
    main_category: 4,
    name: "Cilt Bakımı",
    slug: "cilt-bakimi",
    link: "/medikal-estetik/cilt-bakimi",
    description:
      "Cildi derinlemesine temizleyen, yenileyen ve nem dengesini düzenleyen profesyonel cilt bakım uygulamalarını sizlere sunuyoruz.",
    image: CiltBakimiImg,
  },
  {
    id: 13,
    main_category: 4,
    name: "Antiaging",
    slug: "antiaging",
    link: "/medikal-estetik/antiaging",
    description:
      "Cilt yaşlanmasını geciktiren, kırışıklıkları azaltan ve cilde canlı bir görünüm kazandıran ileri seviye antiaging çözümleri.",
    image: AntiagingImg,
  },
  {
    id: 14,
    main_category: 4,
    name: "Terleme Tedavisi",
    slug: "terleme-tedavisi",
    link: "/medikal-estetik/terleme-tedavisi",
    description:
      "Aşırı terleme problemine yönelik hızlı, etkili ve uzun süreli çözüm sağlayan modern terleme tedavi yöntemlerini sizlere sunuyoruz.",
    image: TerlemeTedavisiImg,
  },

  {
    id: 14,
    main_category: 5,
    name: "Diş Tedavisi",
    slug: "dis-tedavisi",
    link: "/dis-estetigi/dis-tedavisi",
    description:
      "Diş tedavisi hizmetlerimizle ağız ve diş sağlığınızı koruyun. Dolgu, temizlik, hijyen ve genel diş kontrolleri ile sağlıklı bir gülüşe kavuşun.",
    image: DisTedavisiImg,
  },
  {
    id: 15,
    main_category: 5,
    name: "Protez Tedavisi",
    slug: "protez-tedavisi",
    link: "/dis-estetigi/protez-tedavisi",
    description:
      "Eksik dişlerinizi protez tedavisi ile tamamlayın. Estetik ve fonksiyonel çözümlerle doğal görünümlü ve konforlu dişlere sahip olun.",
    image: ProtezTedavisiImg,
  },
  {
    id: 16,
    main_category: 5,
    name: "Endodonti",
    slug: "endodonti",
    link: "/dis-estetigi/endodonti",
    description:
      "Endodonti (kanal tedavisi) hizmetimiz ile diş köklerindeki enfeksiyonları giderin ve dişlerinizi kaybetmeden sağlığını koruyun.",
    image: EndotondiImg,
  },
  {
    id: 17,
    main_category: 5,
    name: "Hollywood Gülüşü",
    slug: "hollywood-gulusu",
    link: "/dis-estetigi/hollywood-gulusu",
    description:
      "Hollywood gülüşü estetiği ile dişlerinizin rengini, hizalanmasını ve formunu mükemmelleştirin. Parlak ve simetrik bir gülüş elde edin.",
    image: HollywoodSmileImg,
  },
  {
    id: 18,
    main_category: 5,
    name: "Zirkonyum Kaplama",
    slug: "zirkonyum-kaplama",
    link: "/dis-estetigi/zirkonyum-kaplama",
    description:
      "Zirkonyum kaplama ile estetik ve dayanıklı dişler. Doğal görünüm, uzun ömür ve yüksek direnç ile kusursuz gülüşler.",
    image: ZirkonyumKaplamaImg,
  },
  {
    id: 19,
    main_category: 5,
    name: "Lamina Porselen",
    slug: "lamina-porselen",
    link: "/dis-estetigi/lamina-porselen",
    description:
      "Lamina porselen uygulamaları ile dişlerinizin görünümünü düzeltin. İnce, estetik ve dayanıklı kaplamalar ile gülüşünüzü yenileyin.",
    image: PorselenLamineImg,
  },
  {
    id: 20,
    main_category: 5,
    name: "İmplant Tedavisi",
    slug: "implant-tedavisi",
    link: "/dis-estetigi/implant-tedavisi",
    description:
      "İmplant tedavisi ile eksik dişlerinizi kalıcı olarak tamamlayın. Sağlam, doğal görünümlü ve konforlu dişlere kavuşun.",
    image: ImpilantTedavisiImg,
  },
  {
    id: 23,
    main_category: 6,
    name: "Penis Kalınlaştırma",
    slug: "penis-kalınlastirma",
    link: "/penis-estetigi/penis-kalinlastirma",
    description:
      "Penis kalınlaştırma uygulamaları ile doğal ve estetik bir görünüm elde edin. Güvenli ve modern teknikler ile özgüveninizi artırın.",
    image: "/images/categories/penis-kalinlastirma.jpg",
  },
  {
    id: 17,
    main_category: 6,
    name: "Penis Ereksiyon",
    slug: "penis-ereksiyon",
    link: "/penis-estetigi/penis-ereksiyon",
    description:
      "Penis ereksiyon problemleri için medikal ve cerrahi çözümler sunuyoruz. Fonksiyonel iyileşme ve yaşam kalitenizi artırmayı hedefliyoruz.",
    image: "/images/categories/penis-erektion.jpg",
  },
  {
    id: 18,
    main_category: 6,
    name: "Penis Protez",
    slug: "penis-protez",
    link: "/penis-estetigi/penis-protez",
    description:
      "Penis protez uygulamaları ile ereksiyon problemlerine kalıcı çözüm. Konforlu, güvenli ve doğal görünümlü protez seçenekleri sunuyoruz.",
    image: "/images/categories/penis-protez.jpg",
  },
  {
    id: 19,
    main_category: 7,
    name: "Hakkımızda",
    slug: "hakkimizda",
    link: "/kurumsal/hakkimizda",
  },
  {
    id: 20,
    main_category: 7,
    name: "Doktorlarımız",
    slug: "doktorlarimiz",
    link: "/kurumsal/doktorlarimiz",
  },
  {
    id: 21,
    main_category: 7,
    name: "İnsan Kaynakları",
    slug: "insan-kaynaklari",
    link: "/kurumsal/insan-kaynaklari",
  },
];
