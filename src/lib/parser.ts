const { parse } = require('@babel/parser');

const babelConfig = {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
};

export default (opts: Opts) => {
  if (opts.ast) {
    return opts.ast;
  }
  if (opts.code) {
    return parse(opts.code, babelConfig);
  }

  throw Error('Neither code or ast options provided');
};
