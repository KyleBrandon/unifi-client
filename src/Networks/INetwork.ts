import { ENetworkPurpose } from './ENetworkPurpose';

export interface IBaseNetworkRaw {
    _id: string;
    name: string;
    site_id: string;
    purpose: ENetworkPurpose | string; // 'wan' | 'corporate' | 'remote-user-vpn'
    setting_preference: string; // 'manual' | 'auto'
    attr_no_delete?: boolean;
    attr_hidden_id?: string; // 'LAN' | 'WAN'
}

export interface IWANNetworkRaw extends IBaseNetworkRaw {
    wan_type: string; // 'dhcp
    wan_networkgroup: string; // 'WAN' | 'WAN2'
    wan_load_balance_type: string; // 'failover-only'
    wan_dns_preference: string; // 'auto' | 'manual';
    wan_dns1: string;
    wan_dns2: string;
    wan_type_v6: string; // 'disabled';
    wan_load_balance_weight: number;
    wan_dhcp_cos: number;
    wan_egress_qos: number;
    wan_vlan: number;
    mac_override: string;
    wan_dhcp_options: [];
    wan_dhcpv6_pd_size: number;
    wan_netmask: string;
    igmp_proxy_upstream: boolean;
    mac_override_enabled: boolean;
    wan_smartq_up_rate: number;
    wan_ip_aliases: [];
    wan_smartq_enabled: boolean;
    wan_smartq_down_rate: number;
    wan_vlan_enabled: boolean;
    report_wan_event: boolean;
    wan_ip: string;
    wan_gateway: string;
    wan_provider_capabilities: {
        upload_kilo_bits_per_second: number;
        download_kilo_bits_per_second: number;
    };
}

export interface ICorporateNetworkRaw extends IBaseNetworkRaw {
    enabled: boolean;
    networkgroup: string;
    igmp_snooping: boolean;
    igmp_proxy_downstream: boolean;
    mdns_enabled: boolean;
    upnp_lan_enabled: boolean;
    nat_outbound_ip_addresses: [];
    lte_lan_enabled: boolean;
    domain_name: string;
    ip_subnet: string;
    is_nat: boolean;
    gateway_type: string;
    vlan_enabled: boolean;
    vlan: number;
    dhcpguard_enabled: boolean;
    auto_scale_enabled: boolean;
    dhcpd_enabled: boolean;
    dhcpd_start: string;
    dhcpd_stop: string;
    dhcpd_dns_enabled: boolean;
    dhcpd_dns_1: string;
    dhcpd_dns_2: string;
    dhcpd_dns_3: string;
    dhcpd_dns_4: string;
    dhcpd_boot_enabled: boolean;
    dhcpd_gateway_enabled: boolean;
    dhcpd_leasetime: number;
    dhcpd_ntp_enabled: boolean;
    dhcp_relay_enabled: boolean;
    dhcpd_time_offset_enabled: boolean;
    dhcpd_unifi_controller: string;
    dhcpd_wpad_url: string;
    dhcpd_tftp_server: string;
    dhcpdv6_enabled: boolean;
    ipv6_ra_enabled: boolean;
    ipv6_interface_type: string;
}

export interface IVPNNetworkRaw extends IBaseNetworkRaw {
    enabled: boolean;
    ip_subnet: string;
    vpn_type: string; //'l2tp-server';
    dhcpd_dns_enabled: boolean;
    l2tp_allow_weak_ciphers: boolean;
    l2tp_local_wan_ip: string; // 'any';
    l2tp_interface: string; // 'wan';
    radiusprofile_id: string;
    dhcpd_wins_enabled: boolean;
    require_mschapv2: boolean;
    exposed_to_site_vpn: boolean;
    x_ipsec_pre_shared_key: string;
}
