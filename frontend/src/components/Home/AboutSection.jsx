import React from "react";
import AmesBina from '../../assets/ames-bina.jpg';

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h6 className="text-red-600 font-bold uppercase tracking-wide">Saç Ekimi ve Estetik Cerrahi Tıp Merkezi</h6>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold leading-tight">
            Ames Health
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Merkezi İstanbul-Şişli’de bulunan ve New York’ta şubesi bulunan Ames,
            değişime sizin gözünüzden bakan ve mutluluğunuzu önemseyen bir kurumdur.
            <br />
            Plastik Cerrahi, Medikal Estetik ve Saç Ekimi gibi alanlarda size değişim
            ve memnuniyetin garantisini vererek mutluluğunuza ortak olmayı isteyen bir sağlık kuruluşudur.
            <br />
            
            <strong>Unutmayın! Güzel ve estetik görünmenin yolu Ames'ten geçer!</strong>
          </p>
        </div>
        <div className="flex-1">
          <img 
            src={AmesBina} 
            alt="Ames Sağlık Merkezi Binası" 
            className="w-full h-auto md:h-100 rounded-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
