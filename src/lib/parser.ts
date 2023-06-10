import { ParserOptions, parse } from '@babel/parser';

const babelConfig: ParserOptions = {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
};

export default (opts: Opts): babel.types.Node => {
  if (opts.ast) {
    return opts.ast as babel.types.Node;
  }
  if (opts.code) {
    return parse(opts.code, babelConfig);
  }

  throw Error('Neither code or ast options provided');
};
