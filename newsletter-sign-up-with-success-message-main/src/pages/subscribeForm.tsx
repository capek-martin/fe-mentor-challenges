import { useState } from "react";
import signUpImg from "../assets/images/illustration-sign-up-desktop.svg";

interface Props {
  onSubmit: (email: string) => void;
}

export const SubscribeForm = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setIsError(true);
      return;
    }
    // api call here
    onSubmit(email);
  };

  return (
    <form
      className="flex flex-col-reverse lg:flex-row"
      onSubmit={handleSubscribe}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-left justify-center gap-8 p-5">
        <h1 className="text-6xl font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="custom-list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-sm">
            <label htmlFor="email" className="font-bold mb-2">
              Email address
            </label>
            {isError && (
              <span className="text-red-500 font-bold">
                Valid email required
              </span>
            )}
          </div>
          <input
            className={isError ? `error` : ``}
            type="text"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn">Subscribe to monthly newsletter</button>
      </div>
      <div className="w-full lg:w-1/2">
        <img className="mx-auto lg:m-0 lg:ml-auto" src={signUpImg} alt="desc" />
      </div>
    </form>
  );
};
