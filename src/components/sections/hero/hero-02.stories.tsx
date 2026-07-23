import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero02 } from "./hero-02";

const meta = {
  title: "Sections/Hero/Hero 02",
  component: Hero02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
