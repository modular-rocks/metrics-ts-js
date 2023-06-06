// https://github.com/DestinyItemManager/DIM/blob/master/src/app/inventory-page/HeaderShadowDiv.tsx
export default `import { useSetCSSVarToHeight } from 'app/utils/hooks';
import React from 'react';
import styles from './HeaderShadowDiv.m.scss';

export default React.memo(({ children, ...divProps }: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  useSetCSSVarToHeight(ref, '--store-header-height');
  return (
    <>
      <div {...divProps} ref={ref}>
        {children}
      </div>
      <div className={styles.shadow} />
      <div className={styles.cover} />
    </>
  );
});`