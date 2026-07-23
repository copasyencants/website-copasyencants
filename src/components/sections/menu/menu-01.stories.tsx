import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Menu01 } from "./menu-01";

const meta = {
  title: "Sections/Menu/Menu 01",
  component: Menu01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
