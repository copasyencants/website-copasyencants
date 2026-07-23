import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonials01 } from "./testimonials-01";

const meta = {
  title: "Sections/Testimonials/Testimonials 01",
  component: Testimonials01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonials01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
