import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Cta01 } from "./cta-01";

const meta = {
  title: "Sections/CTA/Cta 01",
  component: Cta01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Cta01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
