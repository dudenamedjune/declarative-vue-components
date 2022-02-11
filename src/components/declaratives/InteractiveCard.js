import { BUTTON_COMPONENT_NAME } from "../Button";
import { PARAGRAPH_COMPONENT_NAME } from "../Paragraph";
import { TITLE_COMPONENT_NAME } from "../Title";

export const InteractiveCard = {
  className: "interactive-card",
  children: [
    {
      component: TITLE_COMPONENT_NAME,
      className: "interactive-card__title",
      props: {
        text: "Composed Card"
      }
    },
    {
      component: PARAGRAPH_COMPONENT_NAME,
      className: "interactive-card__paragraph",
      props: {
        text: "Hello this is an example."
      }
    },
    {
      component: BUTTON_COMPONENT_NAME,
      className: "interactive-card__button",
      props: {
        text: "Click me"
      }
    }
  ]
};
