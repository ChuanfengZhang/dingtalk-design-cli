import * as cac from 'cac';

let cliArgsAndOptions: {
  options: {
    [k: string]: any
  }
  args: readonly string[]
};

export default function getCliArgsAndOptions(): typeof cliArgsAndOptions {
  if (cliArgsAndOptions) return cliArgsAndOptions;
  
  const cli = cac.default();
  const parsed = cli.parse();

  cliArgsAndOptions = {
    options: parsed.options,
    args: parsed.args,
  };
  return cliArgsAndOptions;
}