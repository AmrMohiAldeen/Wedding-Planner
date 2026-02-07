"use client";
import { useLingoContext } from "@lingo.dev/compiler/react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLingoContext();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.currentTarget.value as typeof locale)}
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
