import { IBaseNetworkRaw, ICorporateNetworkRaw, IVPNNetworkRaw, IWANNetworkRaw } from './INetwork';
import { BaseNetwork } from './BaseNetwork';
import { WANNetwork } from './WANNetwork';
import { CorporateNetwork } from './CorporateNetwork';
import { VPNNetwork } from './VPNNetwork';
import { ENetworkPurpose } from './ENetworkPurpose';
import { IUnifiResponseEnveloppe } from '../interfaces';
import { _ObjectSubSite } from '../commons';
import { createDebugger } from '../util';
import { tNetwork } from '../commons/types';

const devicesFactory = [WANNetwork, CorporateNetwork, VPNNetwork];
const debug = createDebugger('Networks');

export class Networks extends _ObjectSubSite {
    public async list(): Promise<Array<tNetwork>> {
        debug('list');
        return (
            (
                await this.instance.get<IUnifiResponseEnveloppe<Array<IVPNNetworkRaw | IWANNetworkRaw | ICorporateNetworkRaw>>>(
                    '/rest/networkconf'
                )
            ).data.data?.map((d) => this.mapNetwork(d)) || []
        );
    }

    private mapNetwork(network: IBaseNetworkRaw): tNetwork {
        debug('"%s" seems to be a "%s" network', network.name, network.purpose ?? ENetworkPurpose.UNKNOWN);
        const constructor = devicesFactory.find((f) => f.purpose === network.purpose) ?? BaseNetwork;
        return this.mapObject<tNetwork>(constructor, network);
    }
}
