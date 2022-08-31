import * as Yup from 'yup';

require('./lib/yup-ethereum.cjs');

describe('Yup Ethereum Extension', () => {
  test('Detects known, valid addresses', () => {
    const schema = Yup.string().ethereum().required();

    expect(schema.isValidSync('0xc1912fee45d61c87cc5ea59dae31190fffff232d')).toBe(true);
    expect(schema.isValidSync('0x43387b19ebad1e99e35bcd5beb5f2d4d84dbedfe')).toBe(true);
    expect(schema.isValidSync('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')).toBe(true);
    expect(schema.isValidSync('0xda9dfa130df4de4673b89022ee50ff26f6ea73cf')).toBe(true);
    expect(schema.isValidSync('0x0716a17fbaee714f1e6ab0f9d59edbc5f09815c0')).toBe(true);
    expect(schema.isValidSync('0xbe0eb53f46cd790cd13851d5eff43d12404d33e8')).toBe(true);
    expect(schema.isValidSync('0xf977814e90da44bfa03b6295a0616a897441acec')).toBe(true);
    expect(schema.isValidSync('0x5a52e96bacdabb82fd05763e25335261b270efcb')).toBe(true);
    expect(schema.isValidSync('0x742d35cc6634c0532925a3b844bc454e4438f44e')).toBe(true);
    expect(schema.isValidSync('0x011b6e24ffb0b5f5fcc564cf4183c5bbbc96d515')).toBe(true);
    expect(schema.isValidSync('0x07ee55aa48bb72dcc6e9d78256648910de513eca')).toBe(true);
    expect(schema.isValidSync('0xa7efae728d2936e78bda97dc267687568dd593f3')).toBe(true);
    expect(schema.isValidSync('0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5')).toBe(true);
    expect(schema.isValidSync('0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea')).toBe(true);
    expect(schema.isValidSync('0x0548f59fee79f8832c299e01dca5c76f034f558e')).toBe(true);
    expect(schema.isValidSync('0xe92d1a43df510f82c66382592a047d288f85226f')).toBe(true);
    expect(schema.isValidSync('0x1b3cb81e51011b549d78bf720b0d924ac763a7c2')).toBe(true);
    expect(schema.isValidSync('0x8484ef722627bf18ca5ae6bcf031c23e6e922b30')).toBe(true);
    expect(schema.isValidSync('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae')).toBe(true);
    expect(schema.isValidSync('0xdf9eb223bafbe5c5271415c75aecd68c21fe3d7f')).toBe(true);
    expect(schema.isValidSync('0xca8fa8f0b631ecdb18cda619c4fc9d197c8affca')).toBe(true);
    expect(schema.isValidSync('0x3bfc20f0b9afcace800d73d2191166ff16540258')).toBe(true);
    expect(schema.isValidSync('0x220866b1a2219f40e72f5c628b65d54268ca3a9d')).toBe(true);
    expect(schema.isValidSync('0x6a2c3c4c7169d69a67ae2251c7d765ac79a4967e')).toBe(true);
    expect(schema.isValidSync('0xb29380ffc20696729b7ab8d093fa1e2ec14dfe2b')).toBe(true);
    expect(schema.isValidSync('0x8103683202aa8da10536036edef04cdd865c225e')).toBe(true);
    expect(schema.isValidSync('0x6a2c3c4c7169d69a67ae2251c7d765ac79a4967E')).toBe(true);
    expect(schema.isValidSync('0xb29380ffc20696729b7ab8d093fa1e2ec14dfe2B')).toBe(true);
    expect(schema.isValidSync('0x8103683202aa8da10536036edef04cdd865c225E')).toBe(true);
  });

  test('Detects invalid addresses', () => {
    const schema = Yup.string().ethereum().required();

    expect(schema.isValidSync('0xc1912fee45d61c87cc5ea59dae31190ggg232d')).toBe(false);
    expect(schema.isValidSync('0x8103683202aa8da10536036edef04cdd865c225g')).toBe(false);
    expect(schema.isValidSync('0x6a2c3c4c7169d69a67ae2251c7d765ac79a4967y')).toBe(false);
    expect(schema.isValidSync('0xb29380ffc20696729b7ab8d093fa1e2ec14dfe2z')).toBe(false);
    expect(schema.isValidSync('1xb29380ffc20696729b7ab8d093fa1e2ec14dfe2B')).toBe(false);
  });

  test('Specifies an error message on failed validation', () => {
    const schema = Yup.string().ethereum().required();

    try {
      schema.validateSync('0xc1912fee45d61c87cc5ea59dae31190ggg232d');
    } catch (err) {
      expect(err).toBeInstanceOf(Yup.ValidationError);
      expect(err.errors[0]).toEqual(
        '0xc1912fee45d61c87cc5ea59dae31190ggg232d is not a valid Ethereum address'
      );
    }
  });
});
