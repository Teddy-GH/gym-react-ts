import AnchorLink from "react-anchor-link-smooth-scroll";
import { SELECTEDPAGE } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SELECTEDPAGE) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
     onClick={() =>setSelectedPage(SELECTEDPAGE.CONTACTUS)}
     href={`#${SELECTEDPAGE.CONTACTUS}`}
    
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
