import s from "./Table.module.scss";
import { EmployeeType } from "../../shared/constants/Employee";
import { FC } from "react";

interface ITableProps {
  employees: EmployeeType[];
  firstEmployeeNubmer: number;
}

const Table: FC<ITableProps> = ({ employees, firstEmployeeNubmer }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.tableWrapper}>
        <table className={s.table}>
          <thead>
            <tr>
              <th rowSpan={2}>№</th>
              <th rowSpan={2}>Имя сотрудника</th>
              <th colSpan={6}>Основная информация</th>
              <th colSpan={2}>Банковская информация</th>
              <th colSpan={11}>Документы сотрудника</th>
              <th colSpan={6}>Информация от HR</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Номер телефона</th>
              <th>Пол</th>
              <th>Дата рождения</th>
              <th>Метро</th>
              <th>Адрес проживания</th>
              <th>Банк</th>
              <th>Номер карты</th>
              <th>Гражданство</th>
              <th>Паспорт</th>
              <th>Кем выдан</th>
              <th>Срок действия</th>
              <th>Место рождения</th>
              <th>Адрес прописки</th>
              <th>Патент</th>
              <th>Срок действия</th>
              <th>Снилс</th>
              <th>ИНН</th>
              <th>Мед книжка</th>
              <th>Должность</th>
              <th>Подразделение</th>
              <th>Решение</th>
              <th>Источник</th>
              <th>Дата</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user, index) => (
              <tr key={user.id}>
                <td>{firstEmployeeNubmer + index + 1}</td>
                <td className={s.nameCell}>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.tel}</td>
                <td>{user.gender}</td>
                <td>{user.birthday}</td>
                <td>{user.metro}</td>
                <td>{user.address}</td>
                <td>{user.bank}</td>
                <td>{user.card}</td>
                <td>{user.citizen}</td>
                <td>{user.passport}</td>
                <td>{user.granted}</td>
                <td>{user.validFor}</td>
                <td>{user.birthPlace}</td>
                <td>{user.registration}</td>
                <td>{user.patent}</td>
                <td>{user.patentValidFor}</td>
                <td>{user.snils}</td>
                <td>{user.inn}</td>
                <td>{user.medicalBook}</td>
                <td>{user.position}</td>
                <td>{user.division}</td>
                <td>{user.decision}</td>
                <td>{user.source}</td>
                <td>{user.date}</td>
                <td>{user.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
