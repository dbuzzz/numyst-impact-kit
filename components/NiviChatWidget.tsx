'use client';

import { useEffect } from 'react';

export default function NiviChatWidget() {
  useEffect(() => {
    const CHATBOT_ID = '21d3e02c-b9c4-4214-ac31-77197d7b8a3a';
    const COLOR = '#919191';
    const POSITION = 'bottom-right';
    const SRC = 'https://nivichat.in/widget/chat-widget.js';

    // Avoid double-injecting (can happen with HMR / route transitions).
    if (document.getElementById('nivichat-widget-script')) return;

    // If an earlier injection exists (from the old `next/script` attempt),
    // remove the old script/widget so position/color are re-read correctly.
    document.getElementById('nivichat-widget')?.remove(); // old script tag id
    document.getElementById('nivi-chat-widget')?.remove(); // widget root div
    document.getElementById('nw-frame')?.remove(); // iframe (defensive)
    document.getElementById('nw-bubble')?.remove(); // bubble (defensive)

    const script = document.createElement('script');
    script.id = 'nivichat-widget-script';
    script.src = SRC;
    script.async = true;
    script.setAttribute('data-chatbot-id', CHATBOT_ID);
    script.setAttribute('data-color', COLOR);
    script.setAttribute('data-position', POSITION);

    document.body.appendChild(script);
  }, []);

  return null;
}

