import { Badge, Desc, Heading, LinkMore } from "components/common";

const AboutContent = () => {
  return (
    <div className="text-left">
      <Badge>about us</Badge>
      <Heading>Wanna know About MidBank Mobile Banking</Heading>
      <Desc>
        We operate our banking services in many countries around the world.
      </Desc>
      <Desc>
        Mobile banking is the act of making financial Money transactions on a
        mobile device (cell phone, tablet, etc.).{" "}
      </Desc>
      <Desc>
        This activity can be as simple as a bank sending fraud or usage activity
        to a client's cell phone or as complex as a clientpaying bills or
        sending money abroad.
      </Desc>
      <LinkMore className="uppercase">Lean More</LinkMore>
    </div>
  );
};

export default AboutContent;
