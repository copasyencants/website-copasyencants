import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Timeline01 } from "./timeline-01";

const meta = {
  title: "Sections/Timeline/Timeline 01",
  component: Timeline01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
