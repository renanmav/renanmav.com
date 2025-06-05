"use client";

import { useEffect, useState, useRef } from "react";

interface Language {
  greeting: string;
  emoji: string;
  code: string;
}

const languages: Language[] = [
  { greeting: "Hi", emoji: "🇺🇸", code: "en-US" },
  { greeting: "Hello", emoji: "🇬🇧", code: "en-GB" },
  { greeting: "Oi", emoji: "🇧🇷", code: "pt-BR" },
  { greeting: "Olá", emoji: "🇵🇹", code: "pt-PT" },
  { greeting: "Hola", emoji: "🇪🇸", code: "es" },
  { greeting: "Bonjour", emoji: "🇫🇷", code: "fr" },
  { greeting: "Ciao", emoji: "🇮🇹", code: "it" },
  { greeting: "Hallo", emoji: "🇩🇪", code: "de" },
  { greeting: "こんにちは", emoji: "🇯🇵", code: "ja" },
];

// Animation phases
const PHASES = {
  FAST: { speed: 100, duration: 500 },
  MEDIUM: { speed: 300, duration: 1000 },
  SLOW: { speed: 800, duration: 1500 },
};

export default function GreetingLanguageSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [userLanguage, setUserLanguage] = useState("en");
  const phaseRef = useRef<keyof typeof PHASES>("FAST");
  const intervalRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    // Get user's preferred language
    const browserLang = navigator.language.split("-")[0];
    const matchingLang = languages.find((lang) => lang.code === browserLang);
    setUserLanguage(matchingLang?.code || "en");
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      const currentPhase = PHASES[phaseRef.current];
      const elapsedTime = Date.now() - startTimeRef.current;

      // Update phase based on elapsed time
      if (elapsedTime > 5500) {
        // Total animation time
        setIsAnimating(false);
        const targetIndex = languages.findIndex(
          (lang) => lang.code === userLanguage,
        );
        setCurrentIndex(targetIndex >= 0 ? targetIndex : 0);
        return;
      } else if (elapsedTime > 2500) {
        phaseRef.current = "SLOW";
      } else if (elapsedTime > 1000) {
        phaseRef.current = "MEDIUM";
      }

      // Update current language
      setCurrentIndex((prev) => (prev + 1) % languages.length);

      // Schedule next update based on current phase
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(
        animate,
        PHASES[phaseRef.current].speed,
      );
    };

    // Start animation
    animate();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating, userLanguage]);

  const currentLanguage = languages[currentIndex];

  return (
    <div className="relative h-8 overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out${
          isAnimating ? "animate-slide-up" : ""
        }`}
      >
        <p className="mb-4 text-xl font-semibold">
          {currentLanguage.greeting} {currentLanguage.emoji}👋😄
        </p>
      </div>
    </div>
  );
}
