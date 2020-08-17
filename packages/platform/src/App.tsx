import React, { ReactElement } from 'react';
import { Button, Input } from '@aui/components';
import { Button as WidgetButton } from '@aui/widget1'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Button />
      <WidgetButton />
      <Input />
    </div>
  );
};

export default App;
