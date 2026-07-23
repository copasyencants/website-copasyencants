import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Navbar01 } from "./navbar-01";

const meta = {
  title: "Sections/Navbar/Navbar 01",
  component: Navbar01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
