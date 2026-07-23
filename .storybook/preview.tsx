import type { Preview, Decorator } from "@storybook/nextjs-vite";

import "../src/app/globals.css";

/** Bascule clair/sombre via la barre d'outils, en togglant la classe `dark`. */
const withTheme: Decorator = (Story, context) => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle(
      "dark",
      context.globals.theme === "dark",
    );
  }
  return <Story />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    layout: "fullscreen",
  },
  initialGlobals: { theme: "light" },
  globalTypes: {
    theme: {
      description: "Thème du design system",
      toolbar: {
        title: "Thème",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Clair" },
          { value: "dark", title: "Sombre" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
