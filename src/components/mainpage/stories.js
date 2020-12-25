import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    display: "flex",
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: " 4px solid #E1306C",
  },
}));

const Stories = () => {
  const classes = useStyles();

  return (
    <div className="ava">
      <div className="avatar">
        <Avatar
          alt="Remy Sharp"
          src="https://www.fivesquid.com/pics/t2/1552234583-109021-1-1_236px.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Travis Howard"
          src="https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
          className={classes.large}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://images.megapixl.com/6244/62449823.jpg"
          className={classes.large}
        />
      </div>
    </div>
  );
};

export default Stories;
