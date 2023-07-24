import { IObjectSubSiteConfig } from '../commons/_ObjectSubSite';
import { BaseNetwork } from './BaseNetwork';
import { ICorporateNetworkRaw } from './INetwork';
import { Validate } from '../commons/Validate';
import { ENetworkPurpose } from './ENetworkPurpose';

export class CorporateNetwork extends BaseNetwork {
    public static purpose = ENetworkPurpose.CORPORATE;

    constructor(config: IObjectSubSiteConfig, props: Partial<ICorporateNetworkRaw>) {
        super(config, props);
    }

    protected override import(props: Partial<ICorporateNetworkRaw>): this {
        super.import(props);

        if (!Validate.isUndefined(props.enabled)) {
            this.enabled = props.enabled;
        }
        if (!Validate.isUndefined(props.networkgroup)) {
            this.networkgroup = props.networkgroup;
        }
        if (!Validate.isUndefined(props.igmp_snooping)) {
            this.igmp_snooping = props.igmp_snooping;
        }
        if (!Validate.isUndefined(props.igmp_proxy_downstream)) {
            this.igmp_proxy_downstream = props.igmp_proxy_downstream;
        }
        if (!Validate.isUndefined(props.mdns_enabled)) {
            this.mdns_enabled = props.mdns_enabled;
        }
        if (!Validate.isUndefined(props.upnp_lan_enabled)) {
            this.upnp_lan_enabled = props.upnp_lan_enabled;
        }
        if (!Validate.isUndefined(props.nat_outbound_ip_addresses)) {
            this.nat_outbound_ip_addresses = props.nat_outbound_ip_addresses;
        }
        if (!Validate.isUndefined(props.lte_lan_enabled)) {
            this.lte_lan_enabled = props.lte_lan_enabled;
        }
        if (!Validate.isUndefined(props.domain_name)) {
            this.domain_name = props.domain_name;
        }
        if (!Validate.isUndefined(props.ip_subnet)) {
            this.ip_subnet = props.ip_subnet;
        }
        if (!Validate.isUndefined(props.is_nat)) {
            this.is_nat = props.is_nat;
        }
        if (!Validate.isUndefined(props.gateway_type)) {
            this.gateway_type = props.gateway_type;
        }
        if (!Validate.isUndefined(props.vlan_enabled)) {
            this.vlan_enabled = props.vlan_enabled;
        }
        if (!Validate.isUndefined(props.vlan)) {
            this.vlan = props.vlan;
        }
        if (!Validate.isUndefined(props.dhcpguard_enabled)) {
            this.dhcpguard_enabled = props.dhcpguard_enabled;
        }
        if (!Validate.isUndefined(props.auto_scale_enabled)) {
            this.auto_scale_enabled = props.auto_scale_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_enabled)) {
            this.dhcpd_enabled = props.dhcpd_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_start)) {
            this.dhcpd_start = props.dhcpd_start;
        }
        if (!Validate.isUndefined(props.dhcpd_stop)) {
            this.dhcpd_stop = props.dhcpd_stop;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_enabled)) {
            this.dhcpd_dns_enabled = props.dhcpd_dns_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_1)) {
            this.dhcpd_dns_1 = props.dhcpd_dns_1;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_2)) {
            this.dhcpd_dns_2 = props.dhcpd_dns_2;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_3)) {
            this.dhcpd_dns_3 = props.dhcpd_dns_3;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_4)) {
            this.dhcpd_dns_4 = props.dhcpd_dns_4;
        }
        if (!Validate.isUndefined(props.dhcpd_boot_enabled)) {
            this.dhcpd_boot_enabled = props.dhcpd_boot_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_gateway_enabled)) {
            this.dhcpd_gateway_enabled = props.dhcpd_gateway_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_leasetime)) {
            this.dhcpd_leasetime = props.dhcpd_leasetime;
        }
        if (!Validate.isUndefined(props.dhcpd_ntp_enabled)) {
            this.dhcpd_ntp_enabled = props.dhcpd_ntp_enabled;
        }
        if (!Validate.isUndefined(props.dhcp_relay_enabled)) {
            this.dhcp_relay_enabled = props.dhcp_relay_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_time_offset_enabled)) {
            this.dhcpd_time_offset_enabled = props.dhcpd_time_offset_enabled;
        }
        if (!Validate.isUndefined(props.dhcpd_unifi_controller)) {
            this.dhcpd_unifi_controller = props.dhcpd_unifi_controller;
        }
        if (!Validate.isUndefined(props.dhcpd_wpad_url)) {
            this.dhcpd_wpad_url = props.dhcpd_wpad_url;
        }
        if (!Validate.isUndefined(props.dhcpd_tftp_server)) {
            this.dhcpd_tftp_server = props.dhcpd_tftp_server;
        }
        if (!Validate.isUndefined(props.dhcpdv6_enabled)) {
            this.dhcpdv6_enabled = props.dhcpdv6_enabled;
        }
        if (!Validate.isUndefined(props.ipv6_ra_enabled)) {
            this.ipv6_ra_enabled = props.ipv6_ra_enabled;
        }
        if (!Validate.isUndefined(props.ipv6_interface_type)) {
            this.ipv6_interface_type = props.ipv6_interface_type;
        }

        return this;
    }

    public async update(network: Partial<ICorporateNetworkRaw>): Promise<void> {
        await this._update(network);
        this.import(network);
    }

    public async save(): Promise<this> {
        const network: ICorporateNetworkRaw = { ...this } as ICorporateNetworkRaw;
        return this._update(network);
    }

    public enabled: boolean;
    public networkgroup: string;
    public igmp_snooping: boolean;
    public igmp_proxy_downstream: boolean;
    public mdns_enabled: boolean;
    public upnp_lan_enabled: boolean;
    public nat_outbound_ip_addresses: [];
    public lte_lan_enabled: boolean;
    public domain_name: string;
    public ip_subnet: string;
    public is_nat: boolean;
    public gateway_type: string;
    public vlan_enabled: boolean;
    public vlan: number;
    public dhcpguard_enabled: boolean;
    public auto_scale_enabled: boolean;
    public dhcpd_enabled: boolean;
    public dhcpd_start: string;
    public dhcpd_stop: string;
    public dhcpd_dns_enabled: boolean;
    public dhcpd_dns_1: string;
    public dhcpd_dns_2: string;
    public dhcpd_dns_3: string;
    public dhcpd_dns_4: string;
    public dhcpd_boot_enabled: boolean;
    public dhcpd_gateway_enabled: boolean;
    public dhcpd_leasetime: number;
    public dhcpd_ntp_enabled: boolean;
    public dhcp_relay_enabled: boolean;
    public dhcpd_time_offset_enabled: boolean;
    public dhcpd_unifi_controller: string;
    public dhcpd_wpad_url: string;
    public dhcpd_tftp_server: string;
    public dhcpdv6_enabled: boolean;
    public ipv6_ra_enabled: boolean;
    public ipv6_interface_type: string;
}
