import PlastikCerrahiImg from './assets/plastik-cerrahi.jpg';
import SacEkimiImg from './assets/sac-ekimi.webp';
import MedikalEstetikImg from './assets/medikal-estetik.jpg';
import DisEstetigiImg from './assets/dis-estetigi.jpg';
import PenisEstetigiImg from './assets/penis-estetigi.jpg';

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
        link: "/plastik-cerrahi",
        description: "Plastik cerrahi ile doğal ve estetik görünüm elde edin. Yüz, burun, meme ve vücut estetiğinde güvenilir çözümler.",
        image: PlastikCerrahiImg
    },
    {
        id: 3,
        name: "Saç Ekimi",
        homeİsView: true,
        link: "/sac-ekimi",
        description: "Kalıcı ve doğal saç ekimi yöntemleri ile saç dökülmesine son verin. Modern tekniklerle sağlıklı saç görünümü.",
        image: SacEkimiImg
    },
    {
        id: 4,
        name: "Medikal Estetik",
        homeİsView: true,
        link: "/medikal-estetik",
        description: "Cerrahi gerektirmeyen medikal estetik uygulamaları ile gençleşin. Dolgu, botoks, cilt bakımı ve lazer tedavileri.",
        image: MedikalEstetikImg
    },
    {
        id: 5,
        name: "Diş Estetiği",
        homeİsView: true,
        link: "/dis-estetigi",
        description: "Gülüşünüzü yeniden tasarlayın. Zirkonyum kaplama, diş beyazlatma ve dolgu ile sağlıklı ve estetik dişler.",
        image: DisEstetigiImg
    },
    {
        id: 6,
        name: "Penis Estetiği",
        homeİsView: true,
        link: "/penis-estetigi",
        description: "Erkek sağlığı için güvenli ve modern estetik çözümler. Penis büyütme, şekillendirme ve yenileme işlemleri.",
        image: PenisEstetigiImg
    },
    {
        id: 7,
        name: "Kurumsal",
        link: "/kurumsal",
    },
    {
        id: 8,
        name: "Bize Ulaşın",
        link: "/iletisim",
    },
];

export const subCategories = [{
        id: 1,
        main_category: 2,
        name: "Vücut Estetiği",
        slug: "vucut-estetigi",
        link: "/plastik-cerrahi/vucut-estetigi",
    },
    {
        id: 2,
        main_category: 2,
        name: "Yüz Estetiği",
        slug: "yuz-estetigi",
        link: "/plastik-cerrahi/yuz-estetigi",
    },
    {
        id: 3,
        main_category: 2,
        name: "Liposuction Estetiği",
        slug: "liposuction-estetigi",
        link: "/plastik-cerrahi/liposuction-estetigi",
    },
    {
        id: 4,
        main_category: 2,
        name: "Göğüs Estetiği",
        slug: "gogus-estetigi",
        link: "/plastik-cerrahi/gogus-estetigi",
    },
    {
        id: 5,
        main_category: 3,
        name: "Saç Ekimi",
        slug: "sac-ekimi",
        link: "/sac-ekimi/sac-ekimi",
    },
    {
        id: 6,
        main_category: 3,
        name: "Sakal Ekimi",
        slug: "sakal-ekimi",
        link: "/sac-ekimi/sakal-ekimi",
    },
    {
        id: 7,
        main_category: 3,
        name: "Bıyık Ekimi",
        slug: "biyik-ekimi",
        link: "/sac-ekimi/biyik-ekimi",
    },
    {
        id: 8,
        main_category: 3,
        name: "Kaş Ekimi",
        slug: "kas-ekimi",
        link: "/sac-ekimi/kas-ekimi",
    },
    {
        id: 9,
        main_category: 4,
        name: "Ameliyatsız Yüz Gerdirme",
        slug: "ameliyatsiz-yuz-gerdirme",
        link: "/medikal-estetik/ameliyatsiz-yuz-gerdirme",
    },
    {
        id: 10,
        main_category: 4,
        name: "Bölgesel İncelme ve Selülit",
        slug: "bolgesel-incelme-ve-selulit",
        link: "/medikal-estetik/bolgesel-incelme-ve-selulit",
    },
    {
        id: 11,
        main_category: 4,
        name: "İp Askılama",
        slug: "ip-askilama",
        link: "/medikal-estetik/ip-askilama",
    },
    {
        id: 12,
        main_category: 4,
        name: "Cilt Bakımı",
        slug: "cilt-bakimi",
        link: "/medikal-estetik/cilt-bakimi",
    },
    {
        id: 13,
        main_category: 4,
        name: "Antiaging",
        slug: "antiaging",
        link: "/medikal-estetik/antiaging",
    },
    {
        id: 14,
        main_category: 4,
        name: "Terleme Tedavisi",
        slug: "terleme-tedavisi",
        link: "/medikal-estetik/terleme-tedavisi",
    },

    {
        id: 14,
        main_category: 5,
        name: "Diş Tedavisi",
        slug: "dis-tedavisi",
        link: "/dis-estetigi/dis-tedavisi",
    },
    {
        id: 15,
        main_category: 5,
        name: "Protez Tedavisi",
        slug: "lamina-dis",
        link: "/dis-estetigi/protez-tedavisi",
    },
    {
        id: 16,
        main_category: 5,
        name: "Endodonti",
        slug: "endodonti",
        link: "/dis-estetigi/endodonti",
    },
    {
        id: 17,
        main_category: 5,
        name: "Hollywood Gülüşü",
        slug: "hollywood-gulusu",
        link: "/dis-estetigi/hollywood-gulusu",
    },

    {
        id: 18,
        main_category: 5,
        name: "Hollywood Gülüşü",
        slug: "hollywood-gulusu",
        link: "/dis-estetigi/hollywood-gulusu",
    },
    {
        id: 19,
        main_category: 5,
        name: "Hollywood Gülüşü",
        slug: "hollywood-gulusu",
        link: "/dis-estetigi/hollywood-gulusu",
    },
    {
        id: 20,
        main_category: 5,
        name: "İmpilant Tedavisi",
        slug: "impilant-tedavisi",
        link: "/dis-estetigi/impilant-tedavisi",
    },
    {
        id: 21,
        main_category: 5,
        name: "Zirkonyum Kaplama",
        slug: "zirkonyum-kaplama",
        link: "/dis-estetigi/zirkonyum-kaplama",
    },
    {
        id: 22,
        main_category: 5,
        name: "İmpilant Tedavisi",
        slug: "impilant-tedavisi",
        link: "/dis-estetigi/impilant-tedavisi",
    },
    {
        id: 23,
        main_category: 6,
        name: "Penis Kalınlaştırma",
        slug: "penis-kalınlastirma",
        link: "/dis-estetigi/penis-kalinlastirma",
    },
    {
        id: 17,
        main_category: 6,
        name: "Penis Ereksiyon",
        slug: "penis-ereksiyon",
        link: "/penis-estetigi/penis-ereksiyon",
    },
    {
        id: 18,
        main_category: 6,
        name: "Penis Protez",
        slug: "penis-protez",
        link: "/penis-estetigi/penis-protez",
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