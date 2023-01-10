import { ReactElement } from 'react';

import AntdProvider from './AntdProvider';
import ThemeSwitcher from './ThemeSwitcher';
import TokenContainer from './TokenContainer';
import { ThemeProviderProps } from './type';

export const ThemeProvider: <T = any, S = any>(
  props: ThemeProviderProps<T, S>,
) => ReactElement | null = ({
  children,

  customToken,
  customStylish,

  theme,
  getStaticInstance,
  prefixCls,

  appearance,
  defaultAppearance,
  onAppearanceChange,
  themeMode,
}) => {
  return (
    <ThemeSwitcher
      themeMode={themeMode}
      defaultAppearance={defaultAppearance}
      appearance={appearance}
      onAppearanceChange={onAppearanceChange}
    >
      <AntdProvider prefixCls={prefixCls} theme={theme} getStaticInstance={getStaticInstance}>
        <TokenContainer customToken={customToken} customStylish={customStylish}>
          {children}
        </TokenContainer>
      </AntdProvider>
    </ThemeSwitcher>
  );
};