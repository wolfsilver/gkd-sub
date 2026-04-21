import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.magichome',
  name: '荣耀智慧空间',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      activityIds: '.activity.WelcomeActivity',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: 'id="com.hihonor.magichome:id/ads_splash_countdown"'
        },
      ],
    },
  ],
});
