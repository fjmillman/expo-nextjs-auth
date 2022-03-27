module.exports = (api) => {
  const isWeb = api.caller(
    (caller) =>
      caller &&
      (caller.name === 'babel-loader' ||
        caller.name === 'next-babel-turbo-loader')
  );

  return {
    presets: [
      isWeb && [
        'next/babel',
        { 'preset-env': { loose: true, shippedProposals: true } },
      ],
      [
        'babel-preset-expo',
        { web: { useTransformReactJSXExperimental: true } },
      ],
    ].filter(Boolean),
  };
};
