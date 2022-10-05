import { ConnectButton } from "@rainbow-me/rainbowkit";
export const ConnectButtonCustom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="p-2 border border-gray-700 hover:bg-gray-900 hover:text-gray-100"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain && chain.name === "Polygon") {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="p-2 border border-gray-700 hover:bg-gray-900 hover:text-gray-100"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div className="inline-flex items-stretch ">
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="p-2 border border-gray-700 hover:bg-gray-900 hover:text-gray-100"
                  >
                    {account.displayName}
                  </button>

                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className="p-2 border border-l-0 border-gray-700 hover:bg-gray-900 hover:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
