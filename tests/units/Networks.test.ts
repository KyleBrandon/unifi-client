import { ENetworkPurpose, BaseNetwork, CorporateNetwork, Networks, VPNNetwork, WANNetwork } from '../../src';
import { controller, site } from '../mocks';
import axios from 'axios';

describe('Networks', () => {
    let networks: Networks;
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    beforeEach(() => {
        networks = new Networks({ controller, site });
    });
    describe('list', () => {
        const mapNetworkMock = jest.fn();
        beforeEach(() => {
            // @ts-ignore
            networks.mapNetwork = mapNetworkMock.mockImplementation((n) => n);
        });

        it('should list networks', async () => {
            mockedAxios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: {
                        data: [{ _id: 'aaaaa' }, { _id: 'aaaa1' }]
                    }
                })
            );
            const res = await networks.list();

            expect(mockedAxios.get).toHaveBeenCalledWith('/rest/networkconf');
            // expect(res).toStrictEqual([{ _id: 'aaaaa' }]);
            expect(mapNetworkMock).toHaveBeenCalledTimes(2);
            expect(mapNetworkMock).toHaveBeenCalledWith({ _id: 'aaaaa' });
            expect(mapNetworkMock).toHaveBeenCalledWith({ _id: 'aaaa1' });
        });
        it('should handle no results', async () => {
            mockedAxios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: {}
                })
            );
            const res = await networks.list();
            expect(mockedAxios.get).toHaveBeenCalledWith('/rest/networkconf');
            expect(res).toStrictEqual([]);
            expect(mapNetworkMock).not.toHaveBeenCalled();
        });
    });
    describe('mapNetwork', () => {
        const data: Array<[ENetworkPurpose | string | null, typeof BaseNetwork]> = [
            [null, BaseNetwork],
            ['any unknown device', BaseNetwork],
            [ENetworkPurpose.CORPORATE, CorporateNetwork],
            [ENetworkPurpose.VPN, VPNNetwork]
        ];
        it.each(data)('should construct correct object with type %s', (purpose, instance) => {
            // @ts-ignore
            const res = networks.mapNetwork({
                // @ts-ignore
                purpose: purpose,
                _id: '12345',
                name: 'test network'
            });

            expect(res).toBeInstanceOf(instance);
            expect(res.purpose).toBe(purpose);
            expect(res._id).toBe('12345');
            expect(res.name).toBe('test network');
        });
    });
});
