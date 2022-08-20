import FooterSocialItem from "./FooterSocialItem";

const footerSocials = [
  { src: "/facebook-img.png", kind: true },
  { src: "/googleplus-img.png", kind: false },
  { src: "/twiiter-img.png", kind: true },
  { src: "/dribble-img.png", kind: true },
];

const FooterSocial = () => {
  return (
    <div className="flex items-start gap-4">
      {footerSocials?.map((item) => (
        <FooterSocialItem key={item.src} item={item} />
      ))}
    </div>
  );
};

export default FooterSocial;
