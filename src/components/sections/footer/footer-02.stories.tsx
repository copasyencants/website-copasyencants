import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer02 } from "./footer-02";

const meta = {
  title: "Sections/Footer/Footer 02",
  component: Footer02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
