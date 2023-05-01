import s from "./SearchPanel.module.scss";
import { FC } from "react";

interface ISearchPanelProps {
  contactsCount: number;
}

const SearchPanel: FC<ISearchPanelProps> = ({ contactsCount }) => {
  return (
    <div className={s.searchPanel}>
      <div className={s.left}>
        <div className={s.contacts}>
          {contactsCount}
          <span>Контактов</span>
        </div>
        <input type="text" placeholder="Поиск" className={s.input} />
      </div>

      <button className={s.button}>Режим редактирования</button>
    </div>
  );
};

export default SearchPanel;
