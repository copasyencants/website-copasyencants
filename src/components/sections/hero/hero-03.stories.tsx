import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero03 } from "./hero-03";

const meta = {
  title: "Sections/Hero/Hero 03",
  component: Hero03,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero03>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
