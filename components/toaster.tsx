import { addToast, closeToast, Button, cn, Input } from "@heroui/react";

let toastShown = false;
let emailValue = "";
let toastKey: string | null = null; // store the key

export function showEmailModalToast() {
  if (toastShown) return; // exit if toast already exists
  toastShown = true;

  const key  = addToast({
    title: "Stay Updated Join Our Mailing List!",
    hideIcon: true,
    variant: "bordered",
    radius: "lg",
    timeout: Infinity,
    closeIcon: false,
    description: "Get notified about new tramps, tips, and outdoor adventures in Marlborough. Join our mailing list to stay updated.",
    onClose: () => { toastShown = false; },
    classNames: {
      base: cn([
        "shadow-sm flex flex-col gap-6 text-center mb-[20vh] sm:py-20 sm:px-25 w-[90vw] sm:w-[70vw]",
      ]),
      title: "text-5xl mb-3",
      description: "text-lg",
      closeButton: "opacity-100 absolute right-[10px] top-[10px] ",
    },
    endContent: (
      <div className="flex flex-col gap-6">
        <Input type="email" placeholder="you@example.com" fullWidth onChange={(e) => emailValue = e.target.value} />
        <Button className="underline-offset-2 text-2xl" size="lg" color="primary"
          onPress={() => {
            console.log("Email submitted:", emailValue);
            toastShown = false; // allow another toast if needed
            if (key) closeToast(key);
          }}
          >
          Join
        </Button>
      </div>
    ),
  });
}