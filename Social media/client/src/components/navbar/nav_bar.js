import "./nav_bar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>MyApp</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <NightlightOutlinedIcon onClick={toggle} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} />
        )}
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search"></input>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src=""
            src="https://lh3.googleusercontent.com/pw/AIL4fc81ggyQhibHPX_z29R1q9Yp18f7T5x2KBDquwJpOjOtqiTma3U2-d0RSmL1IxGeUR3rcnCTw68AR1oA-ApOeDtkD0gRVT9YKerdTZIU3vkZF1Uhdtolk5AaLr7BJ4udd2fUKeOvux0-addokG2wHOUz4pY0eV6W_QnNbrDP2a5F5vUSvtRfNawfzhBd_ZOHp-H7klRdrNCnGGh2FCZNLximGO-6coGCWkvTvuz0MysKpcu-tkG1devBjO-Rhs5HybbT64iwHzP3BM_Vtu_CrQ-cj0GA-v52VxtmdcILIWXCu2RpouhdxVFubSQwYt9USk713v35AWrn5nhFNYK10NquujhedYusF-yZu32Am2Tzt44iJj92R7ZNmankCa3pYwx3oHEY78HN-QIXspKdv57dWUIWv4OebIYh0TAWzuqTvFAuz-H4CTr1rDO_lHyJamY4kkF--Fm2cInj28C6H4Mm3e7xi0ZN9yrxNX03hzbYPMjC-9zrUktd9972ncha7pSPYkcI7BCdBVYPgOSM8Pd022KXz6pn7pANiMi1QVYqAAMUHFRvTK0ChkQW_I_5DWlcAyM8EeeqrfySBZiFn97RXo3YD8CKC1mVAQ0sJBQUYRQG8BrHv9nmW1lEBy0xE4RyKQhmDOPxrgcEYGt6LQk5-1D07U0IWdALTTjqEbtZr7G-yVcbRwUlnP1lg_LyFHaerh74r31ncJcD4sEHjvujxTQcIbGDqHvG_suUIL1x9uQbpMNjVy_wrL3WGqS9f-tWKfN4nu3zkv16Gu2GD0EXluWIF_WOxZMYv2X2v7nzXgij-ETl-TZY-_6ouhVtKtFnS-fnO5tJ-F6Fb0j_B8kRYoAjIYyez6IKbdclwLg-HISjdLDsmJvgrho-3A1ZTUL4UAVL-9EtlCudNI8etuj55w=w640-h640-s-no?authuser=0"
            alt=""
          ></img>
          <span>Tsegaye</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
