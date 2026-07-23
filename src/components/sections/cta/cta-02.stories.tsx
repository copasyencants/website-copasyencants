import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cta02 } from "./cta-02";

const meta = {
  title: "Sections/CTA/Cta 02",
  component: Cta02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Cta02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
