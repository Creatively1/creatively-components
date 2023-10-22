import * as React from "react";
import cls from "classnames";
import { Menu, Transition } from "@headlessui/react";
import type { TNavigationProps, Account } from "./Navigation";
import { Spinner } from "../Spinner";
import { Avatar, ArrowBackIcon, SwitchAccount, Checkmark } from "./Navigation";
type TProfileDropdownProps = Omit<TNavigationProps, "onLogIn">;

const ProfileDropdown = ({
  accounts,
  dropdownItems,
  activeAccountID,
  loading,
  onAccountSwitch,
  onLogOut,
}: TProfileDropdownProps) => {
  const [accountsSectionOpen, toggleAccountsSection] = [
    false,
    (x: boolean) => {},
  ];

  const activeAccount = accounts.find(
    (account) => account.id === activeAccountID
  );
  if (!activeAccount) return <div></div>;

  const inactiveAccounts = accounts.filter(
    (account) => account.id !== activeAccountID
  );

  const canSwitch = inactiveAccounts?.length;
  const multipleSwitch = inactiveAccounts?.length > 1;
  const { id, avatar, name } = activeAccount;

  const handleSwitchAccount = (id: Account["id"]) => {
    toggleAccountsSection(false);
    onAccountSwitch(id);
  };

  return (
    <Menu as="div" className="relative ml-3 w-7 h-7">
      <div>
        <Menu.Button className="relative  flex rounded bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <Avatar avatar={avatar} />
        </Menu.Button>
      </div>
      {!accountsSectionOpen ? (
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="fixed bottom-0 w-full pt-2 sm:pt-0 pb-6 sm:pb-0 left-0 sm:left-auto sm:bottom-auto sm:absolute right-0 rounded-t-lg rounded-tr-lg z-10 mt-2 sm:w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-[0_35px_0px_2650px_rgba(0,0,0,0.2)] sm:shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-4 p-4">
                <div className="flex items-center gap-4">
                  <Avatar avatar={avatar} />
                  <div className="text-lg sm:text-base">{name}</div>
                </div>
                <Checkmark />
              </div>
              <div className="pl-12 pb-4">
                {dropdownItems.map(({ label, link, callback }) => (
                  <a
                    href={link}
                    onClick={callback}
                    className={cls(
                      {
                        "bg-gray-100": false,
                      },
                      "block px-4 py-2 my-1 sm:my-0 text-base sm:text-sm text-black hover:underline"
                    )}
                  >
                    {label}
                  </a>
                ))}
              </div>
              {Boolean(canSwitch) && (
                <SwitchAccount
                  multipleSwitch={multipleSwitch}
                  inactiveAccounts={inactiveAccounts}
                  onClick={() => {
                    multipleSwitch
                      ? toggleAccountsSection(true)
                      : handleSwitchAccount(inactiveAccounts[0].id);
                  }}
                />
              )}

              <Menu.Button
                onClick={onLogOut}
                className="flex border-t items-center gap-4 transition-all hover:bg-neutral-50 w-full"
              >
                <div className="flex justify-center items-center px-4 py-3 gap-4 w-full">
                  <div className="flex items-center text-lg sm:text-base">
                    Log Out
                  </div>
                </div>
              </Menu.Button>
            </div>
            {loading && (
              <div className="absolute bg-white inset-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
          </Menu.Items>
        </Transition>
      ) : (
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="fixed bottom-0 w-full pb-6 sm:pb-0 pt-2 sm:pt-0 left-0 sm:left-auto sm:bottom-auto sm:absolute right-0 rounded-tl-lg rounded-tr-lg z-10 mt-2 sm:w-72 origin-top-right sm:rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-[0_35px_0px_2650px_rgba(0,0,0,0.2)] sm:shadow-lg">
            <div className="flex items-center gap-4 p-4">
              <div
                onClick={() => toggleAccountsSection(false)}
                role="button"
                tabIndex={0}
                className="h-7 w-7 bg-neutral-200 hover:bg-neutral-300 rounded flex items-center justify-center"
              >
                <ArrowBackIcon />
              </div>
              <div>Switch Accounts</div>
            </div>
            <div className="border-t">
              {inactiveAccounts.map((account) => (
                <div
                  role="button"
                  tabIndex={0}
                  className="w-full hover:bg-neutral-50"
                  onClick={() => handleSwitchAccount(account.id)}
                >
                  <div className="flex justify-between items-center w-full gap-4 p-4">
                    <div className="flex items-center gap-4">
                      <Avatar avatar={account.avatar} />
                      <div>{account.name}</div>
                    </div>
                    <div className="w-4 h-4 rounded-full border border-neutral-500" />
                  </div>
                </div>
              ))}
            </div>
            {loading && (
              <div className="absolute bg-white inset-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
          </Menu.Items>
        </Transition>
      )}
    </Menu>
  );
};

export { ProfileDropdown };
