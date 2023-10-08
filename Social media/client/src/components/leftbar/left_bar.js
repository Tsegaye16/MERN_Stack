import "./left_bar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src=""
              src="https://lh3.googleusercontent.com/pw/AIL4fc81ggyQhibHPX_z29R1q9Yp18f7T5x2KBDquwJpOjOtqiTma3U2-d0RSmL1IxGeUR3rcnCTw68AR1oA-ApOeDtkD0gRVT9YKerdTZIU3vkZF1Uhdtolk5AaLr7BJ4udd2fUKeOvux0-addokG2wHOUz4pY0eV6W_QnNbrDP2a5F5vUSvtRfNawfzhBd_ZOHp-H7klRdrNCnGGh2FCZNLximGO-6coGCWkvTvuz0MysKpcu-tkG1devBjO-Rhs5HybbT64iwHzP3BM_Vtu_CrQ-cj0GA-v52VxtmdcILIWXCu2RpouhdxVFubSQwYt9USk713v35AWrn5nhFNYK10NquujhedYusF-yZu32Am2Tzt44iJj92R7ZNmankCa3pYwx3oHEY78HN-QIXspKdv57dWUIWv4OebIYh0TAWzuqTvFAuz-H4CTr1rDO_lHyJamY4kkF--Fm2cInj28C6H4Mm3e7xi0ZN9yrxNX03hzbYPMjC-9zrUktd9972ncha7pSPYkcI7BCdBVYPgOSM8Pd022KXz6pn7pANiMi1QVYqAAMUHFRvTK0ChkQW_I_5DWlcAyM8EeeqrfySBZiFn97RXo3YD8CKC1mVAQ0sJBQUYRQG8BrHv9nmW1lEBy0xE4RyKQhmDOPxrgcEYGt6LQk5-1D07U0IWdALTTjqEbtZr7G-yVcbRwUlnP1lg_LyFHaerh74r31ncJcD4sEHjvujxTQcIbGDqHvG_suUIL1x9uQbpMNjVy_wrL3WGqS9f-tWKfN4nu3zkv16Gu2GD0EXluWIF_WOxZMYv2X2v7nzXgij-ETl-TZY-_6ouhVtKtFnS-fnO5tJ-F6Fb0j_B8kRYoAjIYyez6IKbdclwLg-HISjdLDsmJvgrho-3A1ZTUL4UAVL-9EtlCudNI8etuj55w=w640-h640-s-no?authuser=0"
              alt=""
            ></img>
            <span>Tsegaye</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt=""></img>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt=""></img>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""></img>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""></img>
            <span>Memories</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt=""></img>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt=""></img>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt=""></img>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt=""></img>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt=""></img>
            <span>Messages</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt=""></img>
            <span>Fundraise</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt=""></img>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt=""></img>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
