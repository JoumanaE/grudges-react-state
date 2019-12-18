import React, { useContext } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  const { undo, isPast } = useContext(GrudgeContext);

  console.log({ undo, isPast });


  return (
    <div className="Application">
      <NewGrudge />
      <section>
        <button disable={!isPast} onClick={undo}>
          Undo
        </button>
        <button>Redo</button>
      </section>
      <Grudges />
    </div>
  );
};

export default Application;
