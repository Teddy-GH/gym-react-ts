export enum SELECTEDPAGE {
    HOME = "home",
    BENEFITS =" benefits",
    OURCLASSES = "ourclasses",
    CONTACTUS = "contactus",
  }
  

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }