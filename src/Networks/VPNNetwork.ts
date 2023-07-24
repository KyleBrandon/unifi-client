import { BaseNetwork } from './BaseNetwork';
import { IVPNNetworkRaw } from './INetwork';
import { Validate } from '../commons/Validate';
import { ENetworkPurpose } from './ENetworkPurpose';

export class VPNNetwork extends BaseNetwork {
    public static purpose = ENetworkPurpose.VPN;

    protected override import(props: Partial<IVPNNetworkRaw>): this {
        super.import(props);

        if (!Validate.isUndefined(props.enabled)) {
            this.enabled = props.enabled;
        }
        if (!Validate.isUndefined(props.ip_subnet)) {
            this.ip_subnet = props.ip_subnet;
        }
        if (!Validate.isUndefined(props.vpn_type)) {
            this.vpn_type = props.vpn_type;
        }
        if (!Validate.isUndefined(props.dhcpd_dns_enabled)) {
            this.dhcpd_dns_enabled = props.dhcpd_dns_enabled;
        }
        if (!Validate.isUndefined(props.l2tp_allow_weak_ciphers)) {
            this.l2tp_allow_weak_ciphers = props.l2tp_allow_weak_ciphers;
        }
        if (!Validate.isUndefined(props.l2tp_local_wan_ip)) {
            this.l2tp_local_wan_ip = props.l2tp_local_wan_ip;
        }
        if (!Validate.isUndefined(props.l2tp_interface)) {
            this.l2tp_interface = props.l2tp_interface;
        }
        if (!Validate.isUndefined(props.radiusprofile_id)) {
            this.radiusprofile_id = props.radiusprofile_id;
        }
        if (!Validate.isUndefined(props.dhcpd_wins_enabled)) {
            this.dhcpd_wins_enabled = props.dhcpd_wins_enabled;
        }
        if (!Validate.isUndefined(props.require_mschapv2)) {
            this.require_mschapv2 = props.require_mschapv2;
        }
        if (!Validate.isUndefined(props.exposed_to_site_vpn)) {
            this.exposed_to_site_vpn = props.exposed_to_site_vpn;
        }
        if (!Validate.isUndefined(props.x_ipsec_pre_shared_key)) {
            this.x_ipsec_pre_shared_key = props.x_ipsec_pre_shared_key;
        }

        return this;
    }

    public enabled: boolean;
    public ip_subnet: string;
    public vpn_type: string; //'l2tp-server';
    public dhcpd_dns_enabled: boolean;
    public l2tp_allow_weak_ciphers: boolean;
    public l2tp_local_wan_ip: string; // 'any';
    public l2tp_interface: string; // 'wan';
    public radiusprofile_id: string;
    public dhcpd_wins_enabled: boolean;
    public require_mschapv2: boolean;
    public exposed_to_site_vpn: boolean;
    public x_ipsec_pre_shared_key: string;
}
