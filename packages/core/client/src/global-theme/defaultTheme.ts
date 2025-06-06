/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { ThemeConfig } from './type';

const defaultTheme: ThemeConfig = {
  name: '',
  token: {
    // 顶部导航栏
    colorPrimaryHeader: '#053160',
    colorBgHeader: '#053160',
    colorBgHeaderMenuHover: '#ffffff1a',
    colorBgHeaderMenuActive: '#ffffff1a',
    colorTextHeaderMenu: '#ffffffa6',
    colorTextHeaderMenuHover: '#ffffff',
    colorTextHeaderMenuActive: '#ffffff',

    // UI 配置组件
    colorSettings: '#F18B62',
    colorBgSettingsHover: 'rgba(241, 139, 98, 0.06)',
    colorBorderSettingsHover: 'rgba(241, 139, 98, 0.3)',

    // 动画相关
    motionUnit: 0.03,
    motion: !process.env.__E2E__,
  },
};

export default defaultTheme;
