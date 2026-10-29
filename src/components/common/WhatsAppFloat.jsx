import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';

export default function WhatsAppFloat() {
  const href = createWhatsAppLink(whatsappMessages.general);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with ISDM on WhatsApp"
      title="Chat with ISDM on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
