import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Home() {
  return (
    <div>
      <LanguageSwitcher />
      <h1>Welcome to our app</h1>
      <p>This text will be translated automatically</p>
    </div>
  );
}
