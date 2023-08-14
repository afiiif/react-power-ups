import React from 'react';

export default function SocialCard() {
  return (
    <section className="py-20 md:py-32 xl:py-40 max-w-[48rem]">
      <h1 className="text-4xl md:text-5xl lg:text-6xl">React Power-Ups 🌟</h1>
      <p className="text-2xl md:text-3xl lg:text-4xl lg:leading-[3.4rem] pt-4 opacity-70">
        Collection of simple React hooks to speed-up your React app development.
      </p>
      <div className="flex flex-col md:flex-row pt-5 md:pt-12 gap-5 md:gap-8 text-xl lg:text-2xl font-medium">
        <div>⚖️ 1.6 kB</div>
        <div>🟦 TypeScript</div>
        <div>🌳 Tree-shakeable</div>
        <div>🌐 SSR-friendly</div>
      </div>
    </section>
  );
}
