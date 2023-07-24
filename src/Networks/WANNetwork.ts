import { Validate } from '../commons/Validate';
import { BaseNetwork } from './BaseNetwork';
import { IWANNetworkRaw } from './INetwork';
import { ENetworkPurpose } from './ENetworkPurpose';

export class WANNetwork extends BaseNetwork {
    public static purpose = ENetworkPurpose.WAN;

    protected override import(props: Partial<IWANNetworkRaw>): this {
        super.import(props);

        if (!Validate.isUndefined(props.wan_type)) {
            this.wan_type = props.wan_type;
        }
        if (!Validate.isUndefined(props.wan_networkgroup)) {
            this.wan_networkgroup = props.wan_networkgroup;
        }
        if (!Validate.isUndefined(props.wan_load_balance_type)) {
            this.wan_load_balance_type = props.wan_load_balance_type;
        }
        if (!Validate.isUndefined(props.wan_dns_preference)) {
            this.wan_dns_preference = props.wan_dns_preference;
        }
        if (!Validate.isUndefined(props.wan_dns1)) {
            this.wan_dns1 = props.wan_dns1;
        }
        if (!Validate.isUndefined(props.wan_dns2)) {
            this.wan_dns2 = props.wan_dns2;
        }
        if (!Validate.isUndefined(props.wan_type_v6)) {
            this.wan_type_v6 = props.wan_type_v6;
        }
        if (!Validate.isUndefined(props.wan_smartq_enabled)) {
            this.wan_smartq_enabled = props.wan_smartq_enabled;
        }
        if (!Validate.isUndefined(props.wan_vlan_enabled)) {
            this.wan_vlan_enabled = props.wan_vlan_enabled;
        }
        if (!Validate.isUndefined(props.wan_vlan)) {
            this.wan_vlan = props.wan_vlan;
        }
        if (!Validate.isUndefined(props.wan_load_balance_weight)) {
            this.wan_load_balance_weight = props.wan_load_balance_weight;
        }
        if (!Validate.isUndefined(props.report_wan_event)) {
            this.report_wan_event = props.report_wan_event;
        }
        if (!Validate.isUndefined(props.mac_override_enabled)) {
            this.mac_override_enabled = props.mac_override_enabled;
        }
        if (!Validate.isUndefined(props.mac_override)) {
            this.mac_override = props.mac_override;
        }
        if (!Validate.isUndefined(props.igmp_proxy_upstream)) {
            this.igmp_proxy_upstream = props.igmp_proxy_upstream;
        }
        if (!Validate.isUndefined(props.wan_provider_capabilities)) {
            this.wan_provider_capabilities = props.wan_provider_capabilities;
        }
        if (!Validate.isUndefined(props.wan_ip_aliases)) {
            this.wan_ip_aliases = props.wan_ip_aliases;
        }
        if (!Validate.isUndefined(props.wan_dhcp_options)) {
            this.wan_dhcp_options = props.wan_dhcp_options;
        }
        if (!Validate.isUndefined(props.wan_dhcp_cos)) {
            this.wan_dhcp_cos = props.wan_dhcp_cos;
        }
        if (!Validate.isUndefined(props.wan_egress_qos)) {
            this.wan_egress_qos = props.wan_egress_qos;
        }
        if (!Validate.isUndefined(props.wan_dhcpv6_pd_size)) {
            this.wan_dhcpv6_pd_size = props.wan_dhcpv6_pd_size;
        }
        if (!Validate.isUndefined(props.wan_netmask)) {
            this.wan_netmask = props.wan_netmask;
        }
        if (!Validate.isUndefined(props.wan_smartq_up_rate)) {
            this.wan_smartq_up_rate = props.wan_smartq_up_rate;
        }
        if (!Validate.isUndefined(props.wan_smartq_down_rate)) {
            this.wan_smartq_down_rate = props.wan_smartq_down_rate;
        }
        if (!Validate.isUndefined(props.wan_ip)) {
            this.wan_ip = props.wan_ip;
        }
        if (!Validate.isUndefined(props.wan_gateway)) {
            this.wan_gateway = props.wan_gateway;
        }

        return this;
    }

    public async update(network: Partial<IWANNetworkRaw>): Promise<void> {
        await this._update(network);
        this.import(network);
    }

    public async save(): Promise<this> {
        const network: IWANNetworkRaw = { ...this } as IWANNetworkRaw;
        return this._update(network);
    }

    public wan_type: string; // 'dhcp
    public wan_networkgroup: string; // 'WAN' | 'WAN2'
    public wan_load_balance_type: string; // 'failover-only'
    public wan_dns_preference: string; // 'auto' | 'manual';
    public wan_dns1: string;
    public wan_dns2: string;
    public wan_type_v6: string; // 'disabled';
    public wan_load_balance_weight: number;
    public wan_dhcp_cos: number;
    public wan_egress_qos: number;
    public wan_vlan: number;
    public mac_override: string;
    public wan_dhcp_options: [];
    public wan_dhcpv6_pd_size: number;
    public wan_netmask: string;
    public igmp_proxy_upstream: boolean;
    public mac_override_enabled: boolean;
    public wan_smartq_up_rate: number;
    public wan_ip_aliases: [];
    public wan_smartq_enabled: boolean;
    public wan_smartq_down_rate: number;
    public wan_vlan_enabled: boolean;
    public report_wan_event: boolean;
    public wan_ip: string;
    public wan_gateway: string;
    public wan_provider_capabilities: {
        upload_kilo_bits_per_second: number;
        download_kilo_bits_per_second: number;
    };
}
