import * as React from "react";

import {
  ProfileDropdown,
  ACTIVE_ACCOUNT_ID,
  DROPDOWN_ITEMS,
  ACCOUNTS,
} from "../components/Navigation";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "ProfileDropdown",
  component: ProfileDropdown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof ProfileDropdown>;

const Template: StoryFn<typeof ProfileDropdown> = (args) => {
  const [activeAccountID, setActiveAccountId] =
    React.useState(ACTIVE_ACCOUNT_ID);
  const [loading, toggleLoading] = React.useState(false);

  const handleAccountSwitch = (id: string | null) => {
    toggleLoading(true);
    setTimeout(() => {
      toggleLoading(false);
      setActiveAccountId(id);
    }, 1000);
  };

  return (
    <ProfileDropdown
      {...args}
      loading={loading}
      onAccountSwitch={(id: string) => handleAccountSwitch(id)}
      onLogOut={() => handleAccountSwitch(null)}
      // activeAccountID={activeAccountID}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  activeAccountID: "fae36661-e77e-45a9-8dca-d23dc66af1d3",
  dropdownItems: DROPDOWN_ITEMS,
  accounts: [
    {
      id: "fae36661-e77e-45a9-8dca-d23dc66af1d3",
      type: "creative",
      name: "My Brand",
      href: "/vovatdev",
      avatar:
        "https://media.dev.creatively.life/__sized__/__placeholder__/default_profileimage-thumbnail-600x600.png",
    },
    {
      id: "64bd075d-44d6-4cdd-9c13-90905685b959",
      type: "brand",
      name: "Sistina",
      href: "/companies/sistina",
      avatar: "/6c8bc116fc3300585b2510f17a9d3273.svg",
    },
  ],
  loading: false,
};
