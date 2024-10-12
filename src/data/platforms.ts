import slackLogo from '@/images/logos/Slack-Logo-PNG-File.webp'
import discordLogo from '@/images/logos/discord.webp'

export const platforms = [
  {
    name: 'Calgary Game Developers',
    meetup: `https://www.meetup.com/calgary-game-developers`,
    description:
      "For people of all skill levels interested in creating video games. It doesn't matter whether you're a programmer, artist or other, so long as you simply enjoy making games.",
    link: {
      href: 'https://discord.com/channels/712803957965193278',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/gdc.webp',
    badge: 'Featured',
  },
  {
    name: 'YYC Design & Development',
    meetup: 'https://www.meetup.com/yyc-dev',
    description:
      'Welcome to YYC Dev! - Formally known as YYC Ruby. We are a technical meetup group that meets monthly to connect, learn, and grow as a technical community.',
    link: { href: 'http://yycdesign.slack.com', label: 'yycdesign.slack.com' },
    logo: slackLogo,
    type: 'slack',
    image: '/assets/images/yycdev.jpg',
    badge: 'Popular',
  },
  {
    name: 'Calgary Software Crafters',
    meetup: `https://www.meetup.com/calgary-software-crafters/`,
    description:
      'We find that writing code together makes it more fun and better quality than going it alone. Our meetings include guest speakers and opportunities to practice new skills.',
    link: {
      href: 'https://discord.com/channels/785857798881542144/785857798881542148',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/softwareCrafters.jpg',
    badge: 'Recommended',
  },
  {
    name: 'Pixels & Pints',
    meetup: 'https://www.meetup.com/pxandpints',
    description:
      'Venue for developers and creatives to sit down, relax and talk shop. There are no presentations or pre-defined discussion topics; just a few pints and good conversation',
    link: {
      href: 'https://discord.com/channels/707420581955371038/707634908373319760',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/pixels.jpg',
    badge: '',
  },
  {
    name: 'Software Developers of Calgary',
    meetup: 'https://www.meetup.com/pxandpints',
    description:
      'Where people can come and work on their own projects, or band together with others. Or just come and learn a new language or framework.',
    link: {
      href: 'https://discord.com/channels/515951809752465408/867167830222962708',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/yycLibrary.jpg',
    badge: 'New',
  },
]
