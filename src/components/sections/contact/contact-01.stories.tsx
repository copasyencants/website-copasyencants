import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Contact01 } from "./contact-01";

const meta = {
  title: "Sections/Contact/Contact 01",
  component: Contact01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
