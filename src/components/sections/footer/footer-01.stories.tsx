import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer01 } from "./footer-01";

const meta = {
  title: "Sections/Footer/Footer 01",
  component: Footer01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
