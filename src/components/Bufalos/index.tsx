import { Button } from '@chakra-ui/react';
import React from 'react';
import { State } from 'zustand';
import { store } from '../../zustand';
import ResponsiveGrid from '../ResponsiveGrid';

const Bufalos = () => {

  const bufalos = (store as any).bufalos((state: State) => state.bufalos);
  function BufaloCounter() {
    return <h1>{bufalos} around here ...</h1>
  }

  function Controls({ number }: any) {
    const increase = (store as any).bufalos((state: State) => state.increase);
    return <Button onClick={() => increase(number)}>Click to add one up</Button>
  }

  return (
    <>
      <BufaloCounter />
      <Controls number={1} />

      <ResponsiveGrid size={[...new Array(bufalos)]} label={'Bufalos'} color={{ background: 'red' }} />
    </>
  )
}

export default Bufalos;