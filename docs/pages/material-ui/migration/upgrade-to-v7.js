import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/material/migration/upgrade-to-v7/upgrade-to-v7.md?muiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
