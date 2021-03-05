import { Button } from '@chakra-ui/react';
import React from 'react';
import { State } from 'zustand';
import { store } from '../../zustand';
import ResponsiveGrid from '../ResponsiveGrid';

const Bears = () => {

  const bears = (store as any).bears((state: State) => state.bears);

  function BearCounter() {
    return <h1>{bears} around here ...</h1>
  }

  function Controls({ number }: any) {
    const increase = (store as any).bears((state: State) => state.increase);
    return <Button onClick={() => increase(number)}>Click to add one up</Button>
  }

  return (
    <>
      <BearCounter />
      <Controls number={1} />

      <ResponsiveGrid size={[...new Array(bears)]} label={'Bears'} color={{ background: 'blue' }} />
    </>
  )
}

export default Bears;