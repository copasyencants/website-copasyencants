import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Navbar02 } from "./navbar-02";

const meta = {
  title: "Sections/Navbar/Navbar 02",
  component: Navbar02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
