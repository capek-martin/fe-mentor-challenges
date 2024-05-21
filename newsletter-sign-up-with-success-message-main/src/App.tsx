import { useState } from "react";
import { SubscribeForm } from "./pages/subscribeForm";
import { ThankYouPage } from "./pages/thankYouPage";
import "./App.scss";

function App() {
  const [validEmail, setValidEmail] = useState<string>("");

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white rounded-3xl m-auto p-6">
        {!validEmail && <SubscribeForm onSubmit={(e) => setValidEmail(e)} />}
        {validEmail && (
          <ThankYouPage
            validEmail={validEmail}
            onDismiss={() => setValidEmail("")}
          />
        )}
      </div>
      <div className="text-white text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Martin Čapek</a>.
      </div>
    </div>
  );
}

export default App;
