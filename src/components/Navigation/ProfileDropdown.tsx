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
  const [accountsSectionOpen, toggleAccountsSection] = React.useState(false);

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
    <Menu as="div" className="ui-relative ui-w-7 ui-h-7 ">
      <div>
        <Menu.Button
          className={cls(
            "ui-relative ui-flex ui-rounded ui-text-sm focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-white focus:ui-ring-offset-2 focus:ui-ring-offset-gray-800",
            { "ui-bg-gray-800": !avatar }
          )}
        >
          <span className="ui-absolute -ui-inset-1.5" />
          <span className="ui-sr-only">Open user menu</span>
          <Avatar avatar={avatar} />
        </Menu.Button>
      </div>
      {!accountsSectionOpen ? (
        <Transition
          as={React.Fragment}
          enter="ui-transition ui-ease-out ui-duration-100"
          enterFrom="ui-transform ui-opacity-0 scale-95"
          enterTo="ui-transform ui-opacity-100 scale-100"
          leave="ui-transition ease-in ui-duration-75"
          leaveFrom="ui-transform ui-opacity-100 scale-100"
          leaveTo="ui-transform ui-opacity-0 scale-95"
        >
          <Menu.Items className="ui-fixed ui-bottom-0 ui-w-full ui-pt-2 sm:ui-pt-0 ui-pb-6 sm:ui-pb-0 ui-left-0 sm:ui-left-auto sm:ui-bottom-auto sm:ui-absolute ui-right-0 ui-rounded-t-lg ui-rounded-tr-lg ui-z-10 ui-mt-2 sm:ui-w-72 origin-top-right ui-rounded-md ui-bg-white focus:ui-outline-none ui-shadow-[0_35px_0px_2650px_rgba(0,0,0,0.2)] sm:ui-shadow-lg">
            <div className="ui-flex ui-flex-col">
              <div className="ui-flex ui-justify-between ui-items-center ui-gap-4 ui-p-4">
                <div className="ui-flex ui-items-center ui-gap-4">
                  <Avatar avatar={avatar} />
                  <div className="ui-text-lg ui-font-medium sm:ui-text-base">
                    {name}
                  </div>
                </div>
                <Checkmark />
              </div>
              <div className="ui-pl-12 ui-pb-4">
                {dropdownItems.map(({ label, link, callback }) => (
                  <Menu.Button
                    key={label}
                    as="a"
                    href={link}
                    onClick={callback}
                    className={cls(
                      {
                        "ui-bg-gray-100": false,
                      },
                      "ui-block ui-px-4 ui-py-2 ui-my-1 sm:ui-my-0 ui-text-base sm:ui-text-sm ui-text-black ui-cursor-pointer ui-font-medium hover:underline"
                    )}
                  >
                    {label}
                  </Menu.Button>
                ))}
              </div>
              {Boolean(canSwitch) &&
                (!multipleSwitch ? (
                  <Menu.Button
                    onClick={() => {
                      multipleSwitch
                        ? toggleAccountsSection(true)
                        : handleSwitchAccount(inactiveAccounts[0].id);
                    }}
                  >
                    <SwitchAccount
                      multipleSwitch={multipleSwitch}
                      inactiveAccounts={inactiveAccounts}
                    />
                  </Menu.Button>
                ) : (
                  <SwitchAccount
                    multipleSwitch={multipleSwitch}
                    inactiveAccounts={inactiveAccounts}
                    onClick={() => {
                      multipleSwitch
                        ? toggleAccountsSection(true)
                        : handleSwitchAccount(inactiveAccounts[0].id);
                    }}
                  />
                ))}

              <Menu.Button
                onClick={onLogOut}
                className="ui-flex ui-border-t ui-items-center ui-gap-4 ui-transition-all hover:ui-bg-neutral-50 ui-w-full"
              >
                <div className="ui-flex ui-justify-center ui-items-center ui-px-4 ui-py-3 ui-gap-4 ui-w-full">
                  <div className="ui-flex ui-items-center ui-text-lg sm:ui-text-base ui-font-medium ui-cursor-pointer">
                    Log Out
                  </div>
                </div>
              </Menu.Button>
            </div>
            {loading && (
              <div className="ui-absolute ui-bg-white ui-inset-0 ui-flex ui-items-center ui-justify-center">
                <Spinner />
              </div>
            )}
          </Menu.Items>
        </Transition>
      ) : (
        <Transition
          as={React.Fragment}
          enter="ui-transition ui-ease-out ui-duration-100"
          enterFrom="ui-transform ui-opacity-0 scale-95"
          enterTo="ui-transform ui-opacity-100 scale-100"
          leave="ui-transition ease-in ui-duration-75"
          leaveFrom="ui-transform ui-opacity-100 scale-100"
          leaveTo="ui-transform ui-opacity-0 scale-95"
        >
          <Menu.Items className="ui-fixed ui-bottom-0 ui-w-full ui-pb-6 sm:ui-pb-0 ui-pt-2 sm:ui-pt-0 ui-left-0 sm:ui-left-auto sm:ui-bottom-auto sm:ui-absolute ui-right-0 ui-rounded-tl-lg ui-rounded-tr-lg ui-z-10 ui-mt-2 sm:ui-w-72 origin-top-right sm:ui-rounded-md ui-bg-white ui-ring-1 ui-ring-black ui-ring-opacity-5 focus:ui-outline-none ui-shadow-[0_35px_0px_2650px_rgba(0,0,0,0.2)] sm:ui-shadow-lg">
            <div className="ui-flex ui-items-center ui-gap-4 ui-p-4">
              <div
                onClick={() => toggleAccountsSection(false)}
                role="button"
                tabIndex={0}
                className="ui-h-7 ui-w-7 ui-bg-neutral-200 hover:ui-bg-neutral-300 ui-rounded ui-flex ui-items-center ui-justify-center"
              >
                <ArrowBackIcon />
              </div>
              <div className="ui-font-medium ui-cursor-pointer">
                Switch Accounts
              </div>
            </div>
            <div className="ui-border-t">
              {inactiveAccounts.map((account) => (
                <div
                  role="button"
                  tabIndex={0}
                  className="ui-w-full hover:ui-bg-neutral-50"
                  onClick={() => handleSwitchAccount(account.id)}
                >
                  <div className="ui-flex ui-justify-between ui-items-center ui-w-full ui-gap-4 ui-p-4">
                    <div className="ui-flex ui-items-center ui-gap-4">
                      <Avatar avatar={account.avatar} />
                      <div>{account.name}</div>
                    </div>
                    <div className="ui-w-4 ui-h-4 ui-rounded-full ui-border ui-border-neutral-500" />
                  </div>
                </div>
              ))}
            </div>
            {loading && (
              <div className="ui-absolute ui-bg-white ui-inset-0 ui-flex ui-items-center ui-justify-center">
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
