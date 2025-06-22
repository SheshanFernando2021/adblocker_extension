import React, {useEffect, useState} from 'react';
function HomeComponent(){

	return(
		<>
		<br/>
		<br/>
		<label style={{ fontFamily: "Monospace"}} >
  <input type="radio" name="activationKey" class="cursor-pointer p-2 rounded"/>&nbsp;turn on
  &nbsp;
  &nbsp;
  <input type="radio" name="activationKey" class="cursor-pointer p-2 rounded"/>&nbsp;turn off
</label>

		</>
		);
}
export default HomeComponent;