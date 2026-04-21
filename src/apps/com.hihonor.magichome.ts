import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.magichome',
  name: '荣耀智慧空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      activityIds: '.activity.WelcomeActivity',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: '[vid="ads_splash_countdown"]',
        },
      ],
    },
  ],
});
