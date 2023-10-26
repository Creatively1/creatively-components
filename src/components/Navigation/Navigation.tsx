import * as React from "react";
import { Disclosure } from "@headlessui/react";
import cls from "classnames";
import { ProfileDropdown } from "./ProfileDropdown";

type Navigation = {
  name: string;
  href?: string;
  label?: string;
  icon?: "search" | "email";
  current?: boolean;
  isLoggedIn?: boolean;
};

const navigation: Navigation[] = [
  {
    name: "Create a Portfolio",
    href: "#",
    label: "Create a Portfolio",
    current: false,
    isLoggedIn: false,
  },
  { name: "Jobs", href: "#", label: "Jobs", current: false, isLoggedIn: false },
  {
    name: "Hire Creatives",
    href: "#",
    label: "Hire Creatives",
    current: false,
    isLoggedIn: false,
  },
  {
    name: "Explore",
    href: "#",
    label: "Explore",
    current: false,
    isLoggedIn: false,
  },
  {
    name: "Dashboard",
    href: "#",
    label: "Dashboard",
    current: true,
    isLoggedIn: true,
  },
  {
    name: "Companies",
    href: "#",
    label: "Companies",
    current: false,
    isLoggedIn: true,
  },
  { name: "Jobs", href: "#", label: "Jobs", current: false, isLoggedIn: true },
  {
    name: "Explore",
    href: "#",
    label: "Explore",
    current: false,
    isLoggedIn: true,
  },
  // { name: "Search", href: "#", icon: "search", current: false },
];

export const ACTIVE_ACCOUNT_ID = "first-account";

export type Account = {
  id: string;
  name: string;
  avatar?: string;
  isCompany?: boolean;
};

export const ACCOUNTS: Account[] = [
  {
    id: "first-account",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Old Navy",
    isCompany: true,
  },
  {
    id: "second-account",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    name: "New Navy",
    isCompany: false,
  },
  {
    id: "third-account",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    name: "Another Navy",
    isCompany: false,
  },
];

type DropdownItem = {
  label: string;
  link?: string;
  callback?: () => void;
};

export const DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: "Post a Job",
    link: "#",
  },
  {
    label: "Create a Project",
    link: "#",
  },
  {
    label: "View Profile",
    link: "#",
  },
  {
    label: "View Settings",
    link: "#",
  },
];

const SearchIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.9664 3.98984L4.96646 3.98977C8.28495 0.67011 13.6669 0.67002 16.9867 3.98984C20.3065 7.30962 20.3065 12.6904 16.9867 16.0102C13.6669 19.33 8.28495 19.3299 4.96646 16.0102L4.9664 16.0102C1.64662 12.6904 1.64662 7.30962 4.9664 3.98984Z"
      stroke="#151515"
    />
    <path d="M16.9766 16L23.9766 23" stroke="#151515" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 5C0.5 4.17157 1.17157 3.5 2 3.5H22C22.8284 3.5 23.5 4.17157 23.5 5V19C23.5 19.8284 22.8284 20.5 22 20.5H2C1.17157 20.5 0.5 19.8284 0.5 19V5Z"
      stroke="#151515"
    />
    <path
      d="M0.5 6L11.3088 16.3388C11.6954 16.7086 12.3046 16.7086 12.6912 16.3388L23.5 6"
      stroke="#151515"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 5.5V4C13.5 3.17157 12.8284 2.5 12 2.5V2.5C11.1716 2.5 10.5 3.17157 10.5 4V5.5"
      stroke="#151515"
    />
    <path
      d="M14.5 22.5V23C14.5 24.3807 13.3807 25.5 12 25.5V25.5C10.6193 25.5 9.5 24.3807 9.5 23V22.5"
      stroke="#151515"
    />
    <path
      d="M12 5C15.7424 5 18.8956 7.79412 19.346 11.5093L20.2683 19.119C20.4144 20.3241 21.3381 21.2643 22.5 21.4617V22.5H1.5V21.4617C2.66194 21.2643 3.58558 20.3241 3.73166 19.119L4.65405 11.5093C5.10437 7.79412 8.25762 5 12 5Z"
      stroke="#151515"
    />
    <circle cx="22.5" cy="3.5" r="3.5" fill="#151515" />
  </svg>
);

const ICONS_MAP = {
  search: <SearchIcon />,
  email: <EmailIcon />,
} as const;

export const ArrowBackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66659 11.333L3.33325 7.99967L6.66659 4.66634"
      stroke="#151515"
      stroke-linejoin="round"
    />
    <path
      d="M3.5 7.99967L12.6667 7.99968"
      stroke="#151515"
      stroke-linejoin="round"
    />
  </svg>
);

export const Checkmark = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="7.99999"
      cy="8.50001"
      rx="7.99999"
      ry="7.99999"
      transform="rotate(-90 7.99999 8.50001)"
      fill="#151515"
    />
    <path d="M4 8.50033L6.66667 11.167L12 5.83496" stroke="white" />
  </svg>
);

const CreativelyLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35">
    <defs>
      <path id="a" d="M.02.094h3.97v3.802H.02z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M17.368 35C7.792 35 0 28.552 0 17.449 0 6.652 8.148 0 17.546 0 23.02 0 27.48 1.944 29.74 3.684h.18l.772-1.791h.535v10.746h-.416c-.832-2.968-1.666-4.861-2.855-6.601C25.576 2.609 22.305.717 17.487.717c-2.855 0-6.245.818-8.922 4.093-2.2 2.66-3.985 6.856-3.985 12.639 0 7.828 3.45 12.025 6.424 14.071 2.498 1.69 5.293 1.996 7.553 1.996 4.58 0 10.35-1.637 12.848-10.49l.595.153C30.334 30.446 24.683 35 17.368 35"
        fill="#303030"
      />
      <g transform="translate(30 30)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M1.981.094C3.13.094 3.99.918 3.99 2.018c0 1.054-.86 1.878-2.008 1.878-1.1 0-1.96-.824-1.96-1.878C.02.918.88.094 1.98.094"
          fill="#303030"
          mask="url(#b)"
        />
      </g>
    </g>
  </svg>
);

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
  </svg>
);

export const Avatar = ({
  avatar,
  extraDarkBg,
}: {
  avatar?: string;
  extraDarkBg?: boolean;
}) => {
  return avatar ? (
    <img className="object-cover h-7 w-7 rounded" src={avatar} alt="" />
  ) : (
    <div
      className={cls("h-7 w-7 rounded flex items-center justify-center", {
        "bg-neutral-200": extraDarkBg,
        "bg-neutral-100": !extraDarkBg,
      })}
    >
      <ProfileIcon />
    </div>
  );
};

const Avatars = ({ avatars }: { avatars: (string | undefined)[] }) => (
  <div>
    {avatars.length > 1 ? (
      <div className="relative">
        <div className="transform -translate-y-0.5 -translate-x-0.5">
          <Avatar avatar={avatars[0]} />
        </div>
        <div className="absolute top-0 left-0 transform translate-y-0.5 translate-x-0.5">
          <Avatar avatar={avatars[1]} />
        </div>
      </div>
    ) : (
      <Avatar avatar={avatars[0]} />
    )}
  </div>
);

type TDesktopNavigationPanelProps = {
  navigation: Navigation[];
  loggedIn?: boolean;
};

const DesktopNavigationPanel = ({
  navigation,
  loggedIn,
}: TDesktopNavigationPanelProps) => {
  const currentNav = loggedIn
    ? navigation.filter((item) => item.isLoggedIn)
    : navigation.filter((item) => !item.isLoggedIn);

  return (
    <div className="hidden sm:ml-8 sm:block ">
      <div className="flex gap-6">
        {currentNav.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cls(
              {
                "shadow-[inset_0_-2px_0px_0px_rgba(0,0,0,1)]": item.current,
                "text-gray-900 hover:text-black": !item.current,
              },
              "h-16 flex items-center text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.icon && ICONS_MAP?.[item.icon]}
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

type TSwitchAccountProps = {
  multipleSwitch: boolean;
  inactiveAccounts: Account[];
  onClick?: () => void;
};

export const SwitchAccount = ({
  multipleSwitch,
  inactiveAccounts,
  onClick,
}: TSwitchAccountProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex border-t justify-between items-center px-4 py-3 gap-4 cursor-pointer transition-all	 hover:bg-neutral-50"
    >
      <div className="flex items-center gap-4  " onClick={onClick}>
        <Avatars avatars={inactiveAccounts.map(({ avatar }) => avatar)} />
        <div className="text-lg sm:text-base font-medium cursor-pointer">
          Switch Account
        </div>
      </div>
    </div>
  );
};

export type TNavigationProps = {
  dropdownItems: DropdownItem[];
  accounts: Account[];
  activeAccountID: Account["id"];
  onAccountSwitch: (id: string) => void;
  onLogOut: () => void;
  onLogIn: () => void;
  loading?: boolean;
};

type TRightNavigationProps = Omit<TNavigationProps, "onLogIn">;

export const Navigation = ({
  dropdownItems,
  accounts,
  activeAccountID,
  loading,
  onAccountSwitch,
  onLogOut,
  onLogIn,
}: TNavigationProps) => {
  const loggedIn =
    Boolean(accounts?.length) &&
    accounts.some(({ id }) => id === activeAccountID);

  return (
    <div className="h-[400px] max-w-[100%]">
      <Disclosure
        as="nav"
        className="bg-white border-b h-16 mx-2 flex items-center justify-between"
      >
        <div className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-1 ">
              <div className="flex flex-shrink-0 items-center">
                <CreativelyLogo />
              </div>
              <DesktopNavigationPanel
                navigation={navigation}
                loggedIn={loggedIn}
              />
            </div>
            {loggedIn ? (
              <RightNavigationPanel
                dropdownItems={dropdownItems}
                accounts={accounts}
                activeAccountID={activeAccountID}
                loading={loading}
                onAccountSwitch={onAccountSwitch}
                onLogOut={onLogOut}
              />
            ) : (
              <a
                href={"#"}
                onClick={onLogIn}
                className={cls(
                  "text-gray-900 hover:text-black h-16 flex items-center text-base font-medium"
                )}
              >
                Log In
              </a>
            )}
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

const RightNavigationPanel = ({
  accounts,
  dropdownItems,
  activeAccountID,
  loading,
  onAccountSwitch,
  onLogOut,
}: TRightNavigationProps) => (
  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    <button
      type="button"
      className="relative rounded-full p-1 mx-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <SearchIcon />
    </button>
    <button
      type="button"
      className="relative rounded-full p-1 mx-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <EmailIcon />
    </button>

    <button
      type="button"
      className="relative rounded-full p-1 mx-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <BellIcon />
    </button>

    <ProfileDropdown
      dropdownItems={dropdownItems}
      accounts={accounts}
      activeAccountID={activeAccountID}
      loading={loading}
      onAccountSwitch={onAccountSwitch}
      onLogOut={onLogOut}
    />
  </div>
);
