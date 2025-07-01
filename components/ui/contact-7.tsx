import { Mail, MapPin, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

export const Contact7 = ({
  title = "Contacto",
  description = "Si tienes alguna duda o consulta, no dudes en contactarnos. Estamos para ayudarte a mejorar tu calidad de vida a través del cannabis medicinal.",
  emailLabel = "Correo Electrónico",
  emailDescription = "Respondemos a todos los correos en 24 horas.",
  email = "fundacioncoyuyo@gmail.com",
  officeLabel = "Oficina",
  officeDescription = "Visítanos para una consulta personalizada.",
  officeAddress = "San Luis, Argentina",
  phoneLabel = "Teléfono",
  phoneDescription = "Disponible de Lunes a Viernes, de 9am a 5pm.",
  phone = "+54 266 455-5555",
}: Contact7Props) => {
  return (
    <section className="bg-[#dedee3] pt-52 pb-20 px-[10%]">
      <div className="">
        <div className="mb-14">
          <h1 className="mt-2 font-title pb-6 mb-5 font-serif text-center text-4xl text-balance md:text-[3.5em] text-black">
            {title}
          </h1>
          <p className="px-[10%] text-lg text-center">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 pt-5">
          <div>
<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full">
  <Mail className="h-6 w-auto" />
</span>
            <p className="mb-2 font-serif text-lg font-semibold text-black">{emailLabel}</p>
<p className="mb-3 text-black">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline text-black"
            >
              {email}
            </a>
          </div>
          <div>
<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full">
  <MapPin className="h-6 w-auto" />
</span>
            <p className="mb-2 font-serif text-lg font-semibold text-black">{officeLabel}</p>
<p className="mb-3 text-black">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline text-black">
              {officeAddress}
            </a>
          </div>
          <div>
<span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full">
  <Phone className="h-6 w-auto" />
</span>
            <p className="mb-2 font-serif text-lg font-semibold text-black">{phoneLabel}</p>
<p className="mb-3 text-black">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline text-black">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
