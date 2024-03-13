import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '克拉拉',
  subtitle: '前端 / 遊記 / 手工藝',
  lang: 'zh_TW',
  themeHue: 300,
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',
  name: '克拉拉',
  bio: '前端 / 遊記 / 手工藝',
  links: [
    {
      name: 'Facebook',
      icon: 'fa6-brands:square-facebook',
      url: 'https://www.facebook.com/profile.php?id=61557376918103',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Bearkern',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant',
}
