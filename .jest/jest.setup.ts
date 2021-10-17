// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// -----------------------------------------------------------------------------

function Providers({
  children,
}: {
  children: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<unknown>
  >;
}) {
  return children;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

function customRender(
  ui: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<unknown>
  >,
  options: RenderOptions = {},
): RenderResult {
  return render(ui, { wrapper: Providers, ...options });
}

// -----------------------------------------------------------------------------

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
