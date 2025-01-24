import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const images = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEi5wIMVCtb0Ru_q8xEEFK86CqJ6kwHXZolL2P4AxQ0n9qBDiyjAmQ4ZHMWtk08pNGfsNOeIYcZF77PBNThNSWJsRCuwvVL0DF1e_4GZ1nb_9bk93mBZ0I2fpOX55ADxXTObDGZs_VVe44jFBFsbif6FjOmuv3YGWxkQ1PAWSJUqNVz9xXpsvgx3YYMaQ28',
  'https://blogger.googleusercontent.com/img/a/AVvXsEjKAarzplczs_2FuwA3QCheso5VTH_RTQFpNjUfy8HmJ_6urOkuml5IRfhtjCyGEmATsCvnioy5k8WOtASSI_FGz14bt96H8zy2KAJyHQ45W5kzLDUCHZXmzC6w3QmkpMoJw59YMfk8OTkMeTT3Hz0dM79SVBq9xWVpNlYx_h_XXTjjH5YXhaAdHFKX2Dg',
  'https://blogger.googleusercontent.com/img/a/AVvXsEg8G5qFAy8Pg_stmND59JEG0cG0J-K_MX4ZjA84h0E8LkPKCOt6JYeBcrye9xzJMkv_EGP6JgYc-EbNA6Pcrkgvmn8tlL5XNf5Z7h7nuP_q-Yv7V7t1Ejga0E9KcuadYfroOPdR4eaEptnOmGVir9An86LQRLlQAnAQtpaR6eNJLxOD7m2kcLGHlGcPWnw',
  'https://blogger.googleusercontent.com/img/a/AVvXsEilVfDh6LsHqUknygBs97_iYhPXuXlEj2bd60Yn9FUtNY1NipJFkar6_bMdXezKlJEvhhnFHf33ECJ_smXcB95_JGGwEtMKXZuAWGcrlii_wzJk-4Zu9pYJDn7TdjnhJKQLfeXHYNYySl2FL2y79JXMPOASPPPbun7QyEGsn1vtPbDRceeY0q3GG1_8DfI',
  'https://blogger.googleusercontent.com/img/a/AVvXsEjbJCyjXQoo5R6HKhYOS7Ch4Lz8MugqmH9Lip6n2Q41H3b7q72fKBrhAFO8b-GsqrZys3m-qsI1lD80rgorBc4ShISASwLwodH49SwbA3NfU6KFtb8VtdFHNsyJ38fgpPJDuk2jWQm6YRN0lRRH7sUxiyI7ijTOoD1_lXZFUlRMXBuZRcFSAVBses3HAeY',
];

export function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = (direction: 'up' | 'down') => {
    setCurrentIndex((prev) => {
      if (direction === 'up') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return (prev + 1) % images.length;
    });
  };

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="relative max-w-5xl mx-auto flex justify-center gap-8">
          {[-1, 0, 1].map((offset) => (
            <div
              key={offset}
              className="relative w-[300px]"
              style={{
                transform: offset === 0 ? 'scale(1.1)' : 'scale(0.9)',
                zIndex: offset === 0 ? 10 : 0,
              }}
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl h-[600px] bg-gray-900 transition-all duration-500">
                <div className="relative h-full">
                  <img
                    src={images[getSlideIndex(offset)]}
                    alt={`Screenshot ${getSlideIndex(offset) + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{
                      opacity: offset === 0 ? 1 : 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={() => slide('up')}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronUp className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={() => slide('down')}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
