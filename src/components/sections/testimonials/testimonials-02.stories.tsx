import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonials02 } from "./testimonials-02";

const meta = {
  title: "Sections/Testimonials/Testimonials 02",
  component: Testimonials02,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonials02>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
