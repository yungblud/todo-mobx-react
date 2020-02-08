import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootState } from '../store/types';

const useStores = () => {
  return React.useContext(MobXProviderContext) as RootState;
};

export default useStores;
