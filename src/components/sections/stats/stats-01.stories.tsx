import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Stats01 } from "./stats-01";

const meta = {
  title: "Sections/Stats/Stats 01",
  component: Stats01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Stats01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
