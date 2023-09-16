import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "form/button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary",
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Secondary",
    variant: "contained",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success",
    variant: "contained",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "Error",
    variant: "contained",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info",
    variant: "contained",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning",
    variant: "contained",
  },
};
