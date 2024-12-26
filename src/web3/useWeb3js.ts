import { useClient, useConnectorClient, type Config } from "@wagmi/vue"
import type { Chain, Client, Transport } from "viem"
import { ref, computed, type Ref } from 'vue'
import {Web3} from "web3"


export function clientToWeb3js(client?:Ref<Client<Transport, Chain>>) {
    if (!client) {
        return new Web3()
    }

    const {transport} = client

    if (transport.type === 'fallback') {
        return new Web3(transport.transports[0].value.url)
    }
    return new Web3(transport)
}


export function useWeb3js({ chainId }: { chainId?: number } = {}) {
    const client = useClient<Config>({ chainId })
    const web3jsInstance = computed(() => clientToWeb3js(client.value))
    return web3jsInstance
}

/** Action to convert a viem ConnectorClient to a web3.js Instance. */
export function useWeb3jsSigner({ chainId }: { chainId?: number } = {}) {
    const client = useConnectorClient<Config>({ chainId })
    const web3jsInstance = computed(() => clientToWeb3js(client.data))
    return web3jsInstance
}