import { ClientError, EErrorsCodes } from '../../src';
import { IWANNetworkRaw, WANNetwork, ICorporateNetworkRaw, CorporateNetwork, IVPNNetworkRaw, VPNNetwork, BaseNetwork } from '../../src';
import { controller, site } from '../mocks';
import axios from 'axios';

const rawWANNetwork: Partial<IWANNetworkRaw> = {
    _id: '4cb50a8c8333ec0510963c29',
    name: 'Primary (WAN)',
    site_id: '4cb82a5f8279ad3590753bf2',
    purpose: 'wan', // 'wan' | 'corporate' | 'remote-user-vpn'
    setting_preference: 'manual', // 'manual' | 'auto'
    attr_no_delete: true,
    wan_type: 'dhcp', // 'dhcp
    wan_networkgroup: 'WAN', // 'WAN' | 'WAN2'
    wan_load_balance_type: 'failover-only', // 'failover-only'
    wan_dns_preference: 'manual', // 'auto' | 'manual';
    wan_dns1: '8.8.8.8',
    wan_dns2: '8.8.4.4',
    wan_type_v6: 'disabled', // 'disabled';
    wan_load_balance_weight: 50,
    wan_dhcp_cos: 3,
    wan_egress_qos: 1,
    wan_vlan: 200,
    mac_override: 'e8:9f:80:cd:3f:ce',
    wan_dhcp_options: [],
    wan_dhcpv6_pd_size: 48,
    wan_netmask: '255.255.255.0',
    igmp_proxy_upstream: false,
    mac_override_enabled: true,
    wan_smartq_up_rate: 100000,
    wan_ip_aliases: [],
    wan_smartq_enabled: true,
    wan_smartq_down_rate: 100000,
    wan_vlan_enabled: true,
    report_wan_event: false,
    wan_ip: '10.0.100.1',
    wan_gateway: '10.0.15.1',
    wan_provider_capabilities: {
        upload_kilo_bits_per_second: 100000,
        download_kilo_bits_per_second: 100000
    }
};

const expectWANNetworkEqual = jest.fn((network: WANNetwork, rawNetwork: Partial<IWANNetworkRaw>) => {
    expect(network._id).toBe(rawNetwork['_id']);
    expect(network.site_id).toBe(rawNetwork['site_id']);
    expect(network.name).toBe(rawNetwork['name']);
    expect(network.purpose).toBe(rawNetwork['purpose']);
    expect(network.setting_preference).toBe(rawNetwork['setting_preference']);
    expect(network.attr_no_delete).toBe(rawNetwork['attr_no_delete']);
    expect(network.wan_type).toBe(rawNetwork['wan_type']);
    expect(network.wan_networkgroup).toBe(rawNetwork['wan_networkgroup']);
    expect(network.wan_load_balance_type).toBe(rawNetwork['wan_load_balance_type']);
    expect(network.wan_dns_preference).toBe(rawNetwork['wan_dns_preference']);
    expect(network.wan_dns1).toBe(rawNetwork['wan_dns1']);
    expect(network.wan_dns2).toBe(rawNetwork['wan_dns2']);
    expect(network.wan_type_v6).toBe(rawNetwork['wan_type_v6']);
    expect(network.wan_load_balance_weight).toBe(rawNetwork['wan_load_balance_weight']);
    expect(network.wan_dhcp_cos).toBe(rawNetwork['wan_dhcp_cos']);
    expect(network.wan_egress_qos).toBe(rawNetwork['wan_egress_qos']);
    expect(network.wan_vlan).toBe(rawNetwork['wan_vlan']);
    expect(network.mac_override).toBe(rawNetwork['mac_override']);
    expect(network.wan_dhcp_options).toBe(rawNetwork['wan_dhcp_options']);
    expect(network.wan_dhcpv6_pd_size).toBe(rawNetwork['wan_dhcpv6_pd_size']);
    expect(network.wan_netmask).toBe(rawNetwork['wan_netmask']);
    expect(network.igmp_proxy_upstream).toBe(rawNetwork['igmp_proxy_upstream']);
    expect(network.mac_override_enabled).toBe(rawNetwork['mac_override_enabled']);
    expect(network.wan_smartq_up_rate).toBe(rawNetwork['wan_smartq_up_rate']);
    expect(network.wan_ip_aliases).toBe(rawNetwork['wan_ip_aliases']);
    expect(network.wan_smartq_enabled).toBe(rawNetwork['wan_smartq_enabled']);
    expect(network.wan_smartq_down_rate).toBe(rawNetwork['wan_smartq_down_rate']);
    expect(network.wan_vlan_enabled).toBe(rawNetwork['wan_vlan_enabled']);
    expect(network.report_wan_event).toBe(rawNetwork['report_wan_event']);
    expect(network.wan_ip).toBe(rawNetwork['wan_ip']);
    expect(network.wan_gateway).toBe(rawNetwork['wan_gateway']);
    expect(network.wan_provider_capabilities).toBe(rawNetwork['wan_provider_capabilities']);
});

const rawCorporateNetwork: Partial<ICorporateNetworkRaw> = {
    _id: '5cb90a6c8353ec0510953c09',
    name: 'Home',
    site_id: '5cb90a5e8353ec0510953bf2',
    purpose: 'corporate',
    setting_preference: 'manual',
    attr_no_delete: true,
    attr_hidden_id: 'LAN',
    dhcpd_leasetime: 86400,
    igmp_snooping: true,
    dhcpguard_enabled: false,
    dhcpd_gateway_enabled: false,
    dhcpd_time_offset_enabled: false,
    dhcpd_dns_1: '10.0.4.44',
    dhcpd_start: '10.0.4.100',
    dhcpd_unifi_controller: '',
    ipv6_ra_enabled: false,
    dhcpd_stop: '10.0.4.254',
    enabled: true,
    domain_name: '',
    dhcpd_enabled: true,
    ip_subnet: '10.0.4.1/24',
    dhcpd_wpad_url: '',
    ipv6_interface_type: 'none',
    dhcpd_dns_2: '8.8.8.8',
    networkgroup: 'LAN',
    dhcpd_dns_3: '',
    vlan_enabled: false,
    is_nat: true,
    dhcpdv6_enabled: false,
    dhcpd_dns_enabled: true,
    gateway_type: 'default',
    nat_outbound_ip_addresses: [],
    dhcp_relay_enabled: false,
    dhcpd_boot_enabled: false,
    igmp_proxy_downstream: false,
    upnp_lan_enabled: false,
    dhcpd_ntp_enabled: false,
    mdns_enabled: true,
    lte_lan_enabled: false,
    dhcpd_tftp_server: '',
    auto_scale_enabled: false
};

const expectCorporateNetworkEqual = jest.fn((network: CorporateNetwork, rawNetwork: Partial<ICorporateNetworkRaw>) => {
    expect(network._id).toBe(rawCorporateNetwork['_id']);
    expect(network.name).toBe(rawCorporateNetwork['name']);
    expect(network.site_id).toBe(rawCorporateNetwork['site_id']);
    expect(network.purpose).toBe(rawCorporateNetwork['purpose']);
    expect(network.setting_preference).toBe(rawCorporateNetwork['setting_preference']);
    expect(network.attr_no_delete).toBe(rawCorporateNetwork['attr_no_delete']);
    expect(network.attr_hidden_id).toBe(rawCorporateNetwork['attr_hidden_id']);
    expect(network.dhcpd_leasetime).toBe(rawCorporateNetwork['dhcpd_leasetime']);
    expect(network.igmp_snooping).toBe(rawCorporateNetwork['igmp_snooping']);
    expect(network.dhcpguard_enabled).toBe(rawCorporateNetwork['dhcpguard_enabled']);
    expect(network.dhcpd_gateway_enabled).toBe(rawCorporateNetwork['dhcpd_gateway_enabled']);
    expect(network.dhcpd_time_offset_enabled).toBe(rawCorporateNetwork['dhcpd_time_offset_enabled']);
    expect(network.dhcpd_dns_1).toBe(rawCorporateNetwork['dhcpd_dns_1']);
    expect(network.dhcpd_start).toBe(rawCorporateNetwork['dhcpd_start']);
    expect(network.dhcpd_unifi_controller).toBe(rawCorporateNetwork['dhcpd_unifi_controller']);
    expect(network.ipv6_ra_enabled).toBe(rawCorporateNetwork['ipv6_ra_enabled']);
    expect(network.dhcpd_stop).toBe(rawCorporateNetwork['dhcpd_stop']);
    expect(network.enabled).toBe(rawCorporateNetwork['enabled']);
    expect(network.domain_name).toBe(rawCorporateNetwork['domain_name']);
    expect(network.dhcpd_enabled).toBe(rawCorporateNetwork['dhcpd_enabled']);
    expect(network.ip_subnet).toBe(rawCorporateNetwork['ip_subnet']);
    expect(network.dhcpd_wpad_url).toBe(rawCorporateNetwork['dhcpd_wpad_url']);
    expect(network.ipv6_interface_type).toBe(rawCorporateNetwork['ipv6_interface_type']);
    expect(network.dhcpd_dns_2).toBe(rawCorporateNetwork['dhcpd_dns_2']);
    expect(network.networkgroup).toBe(rawCorporateNetwork['networkgroup']);
    expect(network.dhcpd_dns_3).toBe(rawCorporateNetwork['dhcpd_dns_3']);
    expect(network.vlan_enabled).toBe(rawCorporateNetwork['vlan_enabled']);
    expect(network.is_nat).toBe(rawCorporateNetwork['is_nat']);
    expect(network.dhcpdv6_enabled).toBe(rawCorporateNetwork['dhcpdv6_enabled']);
    expect(network.dhcpd_dns_enabled).toBe(rawCorporateNetwork['dhcpd_dns_enabled']);
    expect(network.gateway_type).toBe(rawCorporateNetwork['gateway_type']);
    expect(network.nat_outbound_ip_addresses).toBe(rawCorporateNetwork['nat_outbound_ip_addresses']);
    expect(network.dhcp_relay_enabled).toBe(rawCorporateNetwork['dhcp_relay_enabled']);
    expect(network.dhcpd_boot_enabled).toBe(rawCorporateNetwork['dhcpd_boot_enabled']);
    expect(network.igmp_proxy_downstream).toBe(rawCorporateNetwork['igmp_proxy_downstream']);
    expect(network.upnp_lan_enabled).toBe(rawCorporateNetwork['upnp_lan_enabled']);
    expect(network.dhcpd_ntp_enabled).toBe(rawCorporateNetwork['dhcpd_ntp_enabled']);
    expect(network.mdns_enabled).toBe(rawCorporateNetwork['mdns_enabled']);
    expect(network.lte_lan_enabled).toBe(rawCorporateNetwork['lte_lan_enabled']);
    expect(network.dhcpd_tftp_server).toBe(rawCorporateNetwork['dhcpd_tftp_server']);
    expect(network.auto_scale_enabled).toBe(rawCorporateNetwork['auto_scale_enabled']);
});

const expectVPNNetworkEqual = jest.fn((network: VPNNetwork, rawNetwork: Partial<IVPNNetworkRaw>) => {
    expect(network._id).toBe(rawVPNNetwork['_id']);
    expect(network.name).toBe(rawVPNNetwork['name']);
    expect(network.site_id).toBe(rawVPNNetwork['site_id']);
    expect(network.purpose).toBe(rawVPNNetwork['purpose']);
    expect(network.setting_preference).toBe(rawVPNNetwork['setting_preference']);
    expect(network.l2tp_allow_weak_ciphers).toBe(rawVPNNetwork['l2tp_allow_weak_ciphers']);
    expect(network.dhcpd_dns_enabled).toBe(rawVPNNetwork['dhcpd_dns_enabled']);
    expect(network.l2tp_local_wan_ip).toBe(rawVPNNetwork['l2tp_local_wan_ip']);
    expect(network.enabled).toBe(rawVPNNetwork['enabled']);
    expect(network.vpn_type).toBe(rawVPNNetwork['vpn_type']);
    expect(network.radiusprofile_id).toBe(rawVPNNetwork['radiusprofile_id']);
    expect(network.dhcpd_wins_enabled).toBe(rawVPNNetwork['dhcpd_wins_enabled']);
    expect(network.ip_subnet).toBe(rawVPNNetwork['ip_subnet']);
    expect(network.require_mschapv2).toBe(rawVPNNetwork['require_mschapv2']);
    expect(network.l2tp_interface).toBe(rawVPNNetwork['l2tp_interface']);
    expect(network.exposed_to_site_vpn).toBe(rawVPNNetwork['exposed_to_site_vpn']);
    expect(network.x_ipsec_pre_shared_key).toBe(rawVPNNetwork['x_ipsec_pre_shared_key']);
});

const rawVPNNetwork: Partial<IVPNNetworkRaw> = {
    _id: '643de14f960a4b0d339b3163',
    name: 'Client VPN',
    site_id: '5cb90a5e8353ec0510953bf2',
    purpose: 'remote-user-vpn',
    setting_preference: 'manual',
    l2tp_allow_weak_ciphers: false,
    dhcpd_dns_enabled: false,
    l2tp_local_wan_ip: 'any',
    enabled: true,
    vpn_type: 'l2tp-server',
    radiusprofile_id: '5cb90a6c8353ec0510953c04',
    dhcpd_wins_enabled: false,
    ip_subnet: '10.0.5.1/24',
    require_mschapv2: false,
    l2tp_interface: 'wan',
    exposed_to_site_vpn: false,
    x_ipsec_pre_shared_key: 'BnXLbQKsBjPOajlCwmIHTD/FondXEuxQ'
};

describe('Network', () => {
    describe('construct', () => {
        describe('WANNetwork', () => {
            it('should refuse a Network without _id', () => {
                expect.assertions(3);
                try {
                    new WANNetwork({ controller, site }, { name: 'aaaaa' });
                } catch (e) {
                    expect(e).toBeInstanceOf(ClientError);
                    expect(e.message).toBe('_id is mandatory for a network.');
                    expect(e.code).toBe(EErrorsCodes.UNKNOWN_ERROR);
                }
            });
            it('should construct WANNetwork with just _id', () => {
                const network = new WANNetwork({ controller, site }, { _id: '12345' });
                expect(network).toBeInstanceOf(WANNetwork);
            });
            it('should construct WANNetwork with all properties', () => {
                const network = new WANNetwork({ controller, site }, rawWANNetwork);
                console.log(network);
                expectWANNetworkEqual(network, rawWANNetwork);
            });
        });
        describe('CorporateNetwork', () => {
            it('should refuse a Network without _id', () => {
                expect.assertions(3);
                try {
                    new CorporateNetwork({ controller, site }, { name: 'aaaaa' });
                } catch (e) {
                    expect(e).toBeInstanceOf(ClientError);
                    expect(e.message).toBe('_id is mandatory for a network.');
                    expect(e.code).toBe(EErrorsCodes.UNKNOWN_ERROR);
                }
            });
            it('should construct CorporateNetwork with just _id', () => {
                const network = new CorporateNetwork({ controller, site }, { _id: '12345' });
                expect(network).toBeInstanceOf(CorporateNetwork);
            });
            it('should construct CorporateNetwork with all properties', () => {
                const network = new CorporateNetwork({ controller, site }, rawCorporateNetwork);
                console.log(network);
                expectCorporateNetworkEqual(network, rawCorporateNetwork);
            });
        });
        describe('VPNNetwork', () => {
            it('should refuse a Network without _id', () => {
                expect.assertions(3);
                try {
                    new VPNNetwork({ controller, site }, { name: 'aaaaa' });
                } catch (e) {
                    expect(e).toBeInstanceOf(ClientError);
                    expect(e.message).toBe('_id is mandatory for a network.');
                    expect(e.code).toBe(EErrorsCodes.UNKNOWN_ERROR);
                }
            });
            it('should construct VPNNetwork with just _id', () => {
                const network = new VPNNetwork({ controller, site }, { _id: '12345' });
                expect(network).toBeInstanceOf(VPNNetwork);
            });
            it('should construct VPNNetwork with all properties', () => {
                const network = new VPNNetwork({ controller, site }, rawVPNNetwork);
                console.log(network);
                expectVPNNetworkEqual(network, rawVPNNetwork);
            });
        });
    });
    describe('functions', () => {
        let network: BaseNetwork;
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        (mockedAxios as unknown as jest.Mock).mockClear();
        network = new BaseNetwork(
            { controller, site },
            {
                _id: 'aaaaaaa',
                name: 'UDMPRO2'
            }
        );

        describe('save', () => {
            beforeEach(() => {
                mockedAxios.put.mockReset();
            });
            it('should save the network', async () => {
                mockedAxios.put.mockImplementationOnce(() => Promise.resolve({ data: {} }));

                await network.save();

                expect(mockedAxios.put).toHaveBeenCalledWith(
                    '/rest/networkconf/:id',
                    { ...network },
                    {
                        urlParams: expect.objectContaining({
                            id: network._id
                        })
                    }
                );
            });
        });

        describe('update network', () => {
            beforeEach(() => {
                mockedAxios.put.mockReset();
            });
            it('should update network with original _id', async () => {
                mockedAxios.put.mockImplementationOnce(() => Promise.resolve({ data: {} }));

                network = new BaseNetwork(
                    { controller, site },
                    {
                        _id: '12345',
                        name: 'UDMPRO2'
                    }
                );
                const props = { _id: '54321', name: 'UDMPRO4' };
                await network.update(props);

                expect(mockedAxios.put).toHaveBeenCalledWith(
                    '/rest/networkconf/:id',
                    { ...props },
                    {
                        urlParams: expect.objectContaining({
                            id: network._id
                        })
                    }
                );
            });

            it('should update network', async () => {
                mockedAxios.put.mockImplementationOnce(() => Promise.resolve({ data: {} }));

                network = new BaseNetwork(
                    { controller, site },
                    {
                        _id: '12345',
                        name: 'UDMPRO2'
                    }
                );
                const props = { _id: '12345', name: 'UDMPRO4' };
                await network.update(props);

                expect(mockedAxios.put).toHaveBeenCalledWith(
                    '/rest/networkconf/:id',
                    { ...props },
                    {
                        urlParams: expect.objectContaining({
                            id: props._id
                        })
                    }
                );
            });
        });
    });
});
