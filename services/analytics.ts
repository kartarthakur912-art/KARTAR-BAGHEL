
import { META_PIXEL_ID } from '../constants';

// Extend the window object to include fbq
declare global {
  interface Window {
    fbq: any;
  }
}

export const initPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
    console.debug(`Meta Pixel Initialized: ${META_PIXEL_ID}`);
  }
};

export const trackLead = (label: string = 'WhatsApp Join') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', { content_name: label });
    console.debug(`Meta Pixel Tracked: Lead (${label})`);
  }
};

export const trackContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
    console.debug('Meta Pixel Tracked: Contact');
  }
};

export const trackButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ButtonClick', { button_name: buttonName });
  }
};
