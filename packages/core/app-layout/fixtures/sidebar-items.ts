export const topItems = [
  {
    name: 'Overview',
    key: 'overview',
    to: { name: 'overview' },
    icon: 'sharedConfig',
  },
  {
    name: 'Gateway Manager',
    key: 'runtime-manager',
    to: { name: 'runtime-manager' },
    icon: 'runtimes',
    label: 'runtime-group-name',
    items: [
      {
        name: 'Runtime Instances',
        to: { name: 'runtime-instances' },
      },
    ],
  },
]

export const bottomItems = [
  {
    name: 'Organization',
    key: 'organization',
    to: { name: 'organization' },
    icon: 'organizations',
    items: [
      {
        name: 'Teams',
        to: { name: 'teams' },
      },
      {
        name: 'Users',
        to: { name: 'users' },
      },
    ],
  },
  {
    name: 'Settings',
    key: 'settings',
    to: { name: 'settings' },
    icon: 'cogwheel',
    items: [
      {
        name: 'Billing and Usage',
        to: { name: 'billing-settings' },
      },
      {
        name: 'Auth Settings',
        to: { name: 'auth-settings' },
      },
    ],
  },
]
