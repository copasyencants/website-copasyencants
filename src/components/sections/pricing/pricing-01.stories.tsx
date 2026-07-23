import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Pricing01 } from "./pricing-01";

const meta = {
  title: "Sections/Pricing/Pricing 01",
  component: Pricing01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Pricing01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
