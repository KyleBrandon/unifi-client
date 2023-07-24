import { _ObjectSubSite, IObjectSubSiteConfig } from '../commons/_ObjectSubSite';
import { createDebugger } from '../util';
import { ClientError, EErrorsCodes } from '../Errors';
import { IBaseNetworkRaw } from './INetwork';
import { Validate } from '../commons/Validate';
import { ENetworkPurpose } from './ENetworkPurpose';

const debug = createDebugger('Network');

export class BaseNetwork extends _ObjectSubSite {
    #_id: string;
    get _id(): string {
        return this.#_id;
    }

    public name: string;
    public site_id: string;
    public purpose: string; // 'wan' | 'corporate' | 'remote-user-vpn'
    public setting_preference: string; // 'manual' | 'auto'
    public attr_no_delete: boolean;
    public attr_hidden_id: string; // 'LAN' | 'WAN'

    static debug = createDebugger('Network');

    constructor(config: IObjectSubSiteConfig, props: Partial<IBaseNetworkRaw>) {
        super(config);

        if (!props._id) {
            throw new ClientError('_id is mandatory for a network.', EErrorsCodes.UNKNOWN_ERROR);
        }

        this.#_id = props._id;

        this.debug = debug.extend(this.#_id);

        this.import(props);
    }

    protected import(props: Partial<IBaseNetworkRaw>): this {
        if (!Validate.isUndefined(props.name)) {
            this.name = props.name;
        }
        if (!Validate.isUndefined(props.site_id)) {
            this.site_id = props.site_id;
        }
        if (!Validate.isUndefined(props.purpose)) {
            this.purpose = props.purpose as ENetworkPurpose;
        }
        if (!Validate.isUndefined(props.setting_preference)) {
            this.setting_preference = props.setting_preference;
        }
        if (!Validate.isUndefined(props.attr_no_delete)) {
            this.attr_no_delete = props.attr_no_delete;
        }
        if (!Validate.isUndefined(props.attr_hidden_id)) {
            this.attr_hidden_id = props.attr_hidden_id;
        }

        return this;
    }

    public async update(props: Partial<Omit<IBaseNetworkRaw, '_id'>>): Promise<void> {
        await this._update(props);

        this.import(props);
    }

    public async save(): Promise<this> {
        const network: IBaseNetworkRaw = { ...this } as IBaseNetworkRaw;
        return this._update(network);
    }

    protected async _update(network: Partial<IBaseNetworkRaw>): Promise<this> {
        if (!this.#_id) {
            throw new Error('Cannot save network without _id');
        }

        await this.instance.put('/rest/networkconf/:id', network, {
            urlParams: {
                id: this.#_id
            }
        });

        return this;
    }
}
