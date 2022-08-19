import { Button } from "components/button";
import CTAIconAppleStore from "./CTAIconAppleStore";
import CTAIconPlayStore from "./CTAIconPlayStore";

const CTAGroupButton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full">
    <Button
      type="button"
      kind="secondary"
      className="px-6 py-4 w-full md:max-w-max flex items-center justify-center gap-5"
    >
      <CTAIconAppleStore />
      App Store
    </Button>
    <Button
      type="button"
      className="px-6 py-4 w-full md:max-w-max flex items-center justify-center gap-5"
    >
      <CTAIconPlayStore />
      Play Store
    </Button>
  </div>
  );
};

export default CTAGroupButton;