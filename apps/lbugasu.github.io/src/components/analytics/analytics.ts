import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
  app: 'laudebugs.me',
  plugins: [
    googleTagManager({
      containerId: 'GTM-PGD2BMN'
    })
  ]
})

export function trackPage() {
  analytics.page()
}
