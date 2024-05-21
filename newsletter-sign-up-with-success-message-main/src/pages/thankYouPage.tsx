import subscribeSuccImg from "../assets/images/icon-success.svg";

interface Props {
  validEmail: string;
  onDismiss: () => void;
}

export const ThankYouPage = ({ validEmail, onDismiss }: Props) => {
  return (
    <div className="flex flex-col items-left p-6 gap-10 w-96">
      <img className="mr-auto" src={subscribeSuccImg} />
      <h1 className="text-6xl font-bold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{validEmail}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  );
};
