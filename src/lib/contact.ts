// Edita estos valores con la información real del negocio.
export const PHONE_NUMBER_INTL = "52XXXXXXXXXX"; // Ej: 528112345678
export const PHONE_DISPLAY = "+52 (XXX) XXX-XXXX";
export const EMAIL = "contacto@remolquesallende.mx";
export const LOCATION = "Allende, Nuevo León, México";

export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER_INTL}?text=${encodeURIComponent(
  "Hola, quiero cotizar un remolque"
)}`;

export const whatsappWith = (msg: string) =>
  `https://wa.me/${PHONE_NUMBER_INTL}?text=${encodeURIComponent(msg)}`;
