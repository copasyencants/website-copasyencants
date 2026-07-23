import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Faq01 } from "./faq-01";

const meta = {
  title: "Sections/FAQ/Faq 01",
  component: Faq01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Faq01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
