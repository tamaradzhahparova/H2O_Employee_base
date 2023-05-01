import s from './Profile.module.scss'
import {FC} from "react";
import {ArrowDown} from "../../Icons/Arrows";

interface IProfileProps {
  avatar: string
  name: string
  position: string
}

const Profile: FC<IProfileProps> = ({avatar, name, position}) => {
  return <div className={s.profile}>
    <img src={avatar} className={s.avatar} alt='avatar' />
    <div className={s.profileData}>
      <div className={s.name}>{name}</div>
      <div className={s.position}>{position}</div>
    </div>
    <button>
      <ArrowDown />
    </button>
  </div>
}

export default Profile