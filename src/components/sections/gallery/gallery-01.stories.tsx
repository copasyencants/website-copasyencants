import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Gallery01 } from "./gallery-01";

const meta = {
  title: "Sections/Gallery/Gallery 01",
  component: Gallery01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Gallery01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
