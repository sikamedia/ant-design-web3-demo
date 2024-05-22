import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { Address, NFTCard } from "@ant-design/web3";

const ZAN_API_KEY = process.env.NEXT_PUBLIC_ZAN_API_KEY;
const ZAN_API_ETH_URL = process.env.NEXT_PUBLIC_ZAN_API_ETH_URL;

const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(`${ZAN_API_ETH_URL}/${ZAN_API_KEY}`),
    },
});

const Web3 = () =>  {
    return (
        <WagmiWeb3ConfigProvider config={config}>
            <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
            <NFTCard address ="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" tokenId={641} />
        </WagmiWeb3ConfigProvider>
    );
}

export default Web3;