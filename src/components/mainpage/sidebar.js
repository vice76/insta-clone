import React from "react";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side1"></div>
      <div className="side2">
        <div className="profile">
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <span>arpit8307</span>
          <h6>Arpit Yadav</h6>
          <a href="#">Switch</a>
        </div>
        <div className="suggest">
            <p>Suggestions for you</p>
            <span>See all</span>
        </div>
        <div className='profiles'>
            <div class="common">
            <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <span>arpit8307</span>
          <h6>Arpit Yadav</h6>
          <a href="#">Switch</a>
            </div>
            <div class="common">
            <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <span>arpit8307</span>
          <h6>Arpit Yadav</h6>
          <a href="#">Switch</a>
            </div>
            <div class="common">
            <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <span>arpit8307</span>
          <h6>Arpit Yadav</h6>
          <a href="#">Switch</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
