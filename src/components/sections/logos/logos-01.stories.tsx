import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logos01 } from "./logos-01";

const meta = {
  title: "Sections/Logos/Logos 01",
  component: Logos01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Logos01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
