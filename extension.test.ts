import * as Yup from 'yup';

require('./lib/yup-ethereum.cjs');

describe('Yup Ethereum Extension', () => {
  test('Detects known, valid addresses', () => {
    const schema = Yup.string().ethereum().required();

    expect(schema.isValidSync('0xc1912fee45d61c87cc5ea59dae31190fffff232d')).toBe(true);
  });

  test('Detects invalid addresses', () => {
    const schema = Yup.string().ethereum().required();

    expect(schema.isValidSync('0xc1912fee45d61c87cc5ea59dae31190ggg232d')).toBe(false);
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
