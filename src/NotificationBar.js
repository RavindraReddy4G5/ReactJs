import React from 'react';
import Msg from './components/Msg';
import Badge from './components/Menu';

function NotificationBar () {
  return (
    <div>
        <h1>notification bar</h1>
      <Badge />
      <Msg />
    </div>
  );
}

export default NotificationBar;