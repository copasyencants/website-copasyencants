import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Features01 } from "./features-01";

const meta = {
  title: "Sections/Features/Features 01",
  component: Features01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Features01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
