import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Services01 } from "./services-01";

const meta = {
  title: "Sections/Services/Services 01",
  component: Services01,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Services01>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
