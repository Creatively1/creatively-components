import * as React from "react";

import {
  Navigation,
  ACTIVE_ACCOUNT_ID,
  DROPDOWN_ITEMS,
  ACCOUNTS,
} from "../components/Navigation";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Navigation",
  component: Navigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Navigation>;

const Template: StoryFn<typeof Navigation> = (args) => {
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
    <Navigation
      {...args}
      loading={loading}
      onAccountSwitch={(id: string) => handleAccountSwitch(id)}
      onLogOut={() => handleAccountSwitch(null)}
      onLogIn={() => handleAccountSwitch(ACTIVE_ACCOUNT_ID)}
      activeAccountID={activeAccountID}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  activeAccountID: ACTIVE_ACCOUNT_ID,
  dropdownItems: DROPDOWN_ITEMS,
  accounts: ACCOUNTS,
  loading: false,
};
