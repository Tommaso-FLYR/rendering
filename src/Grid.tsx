import React from 'react';
import { ReactElement, useState } from "react";

type Props = {
  renderers: ((props: any) => ReactElement)[];
};
export function Grid({ renderers }: Props) {
  const [state, setState] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });
  return (
    <div>
      {renderers.map((renderer, index) =>
        renderer({
          collapsed: state[index],
          setCollapsed: () => setState({ ...state, [index]: true }),
          setExpanded: () => setState({ ...state, [index]: false }),
        })
      )}
    </div>
  );
}
