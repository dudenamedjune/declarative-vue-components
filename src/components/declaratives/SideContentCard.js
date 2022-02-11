import { InteractiveCard } from "./InteractiveCard";
import { TITLE_COMPONENT_NAME } from "../Title";

export const SideContentCard = {
  className: "side-content-card__wrapper",
  children: [
    {
      component: TITLE_COMPONENT_NAME,
      className: "side-content-card__title",
      props: {
        text: "Side content "
      }
    },
    {
      className: "side-content-card__interactive-card",
      children: [InteractiveCard]
    }
  ]
};
