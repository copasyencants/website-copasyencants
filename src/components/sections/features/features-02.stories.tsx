import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Features02 } from "./features-02";

const meta = {
  title: "Sections/Features/Features 02",
  component: Features02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Features02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
