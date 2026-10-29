// ============================================================
// ISDM — WHATSAPP UTILITY
// ============================================================

const WHATSAPP_NUMBER = '918080152238';
const WHATSAPP_BASE = 'https://wa.me/';

export const whatsappMessages = {
  general:
    'Hello ISDM team, I would like to know more about your digital marketing programs.',
  course:
    'Hello ISDM team, I am interested in learning more about your digital marketing courses and curriculum.',
  location:
    'Hello ISDM team, I would like to know more about your learning options and locations.',
  workshop:
    'Hello ISDM team, I would like to know about upcoming workshops and masterclasses.',
  program: (name) =>
    `Hello ISDM team, I would like to know more about the ${name} program.`,
};

/**
 * Creates a properly encoded WhatsApp link.
 * @param {string} message - The pre-written message
 * @returns {string} Valid WhatsApp URL
 */
export function createWhatsAppLink(message = whatsappMessages.general) {
  const encoded = encodeURIComponent(message);
  return `${WHATSAPP_BASE}${WHATSAPP_NUMBER}?text=${encoded}`;
}

export default createWhatsAppLink;
