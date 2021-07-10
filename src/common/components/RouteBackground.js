import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ipcRenderer } from 'electron';

const RouteBackground = () => { 
	
	const curseChannelBackground = useSelector(
    state => state.settings.curseChannelBackground
  );
  
  // background
  const userData = useSelector(state => state.userData);

	const custom = `${userData}/background/default/${curseChannelBackground}.jpg`;
	const newString = custom.replaceAll('\\', '/');
  return (
    <div
      css={`
        position: absolute;
	  background: url(${newString}) no-repeat center center fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
		/*filter: blur(5px);*/
		background-size: cover;
      `}
    />
  );
};

export default RouteBackground;
