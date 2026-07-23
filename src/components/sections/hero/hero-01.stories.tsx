import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero01 } from "./hero-01";

const meta = {
  title: "Sections/Hero/Hero 01",
  component: Hero01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
