// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
const withPlugins = require('next-compose-plugins')
const nextEnv = require('next-env')
const dotEnvLoad = require('dotenv-load')
const withMDX = require('@next/mdx')({ extension: /\.mdx$/ })
dotEnvLoad()

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    domains: ['images.unsplash.com']
  },
  webpack: config => {
    config.experiments = { topLevelAwait: true }
    return config
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

module.exports = withPlugins([nextEnv, withMDX], withNx(nextConfig))
