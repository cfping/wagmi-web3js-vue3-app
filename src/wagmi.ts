import { createConfig, http } from "@wagmi/vue"
import { mainnet } from "viem/chains"

export const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(),
    },
    ssr: true,
})

declare module '@wagmi/vue' {
    interface Register {
        config: typeof config
    }
}
