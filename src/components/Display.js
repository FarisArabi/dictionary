import React from 'react';

const Display = (props) => (
    <div className="second">
          <div>
            <span className="partsch">
            Part of speach : {props.part}
            </span>
          </div> 

          <div>
            <span className="defini">
            Definition : {props.defin}
            </span>
          </div>
        </div>
)
export default Display;