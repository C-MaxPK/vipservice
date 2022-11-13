import { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../app/hooks';
import { addData } from './searchSlice';
import styles from './Search.module.scss';
import { currentDateFormat } from '../../helper/dateFormat';

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [cityFromInput, setCityFromInput] = useState<string>('');
  const [cityToInput, setCityToInput] = useState<string>('');
  const [dateThereInput, setDateThereInput] = useState<string>(currentDateFormat);
  const [dateBackInput, setDateBackInput] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addData({
      from: cityFromInput,
      to: cityToInput,
      there: dateThereInput,
      back: dateBackInput === '' ? null : dateBackInput
    }));
    navigate('/avia/info');
  };

  return (
    <form className={styles.form} onSubmit={e => submitHandler(e)}>
      <div className={styles.form__inputs}>

        <div className={styles.form__inputWrapper}>
          <label htmlFor="city-from" className={styles.form__label}>Откуда</label>
          <input
            id='city-from'
            placeholder='Город вылета'
            className={styles.form__input}
            required
            value={cityFromInput}
            onChange={e => setCityFromInput(e.target.value)}
          />
        </div>

        <div className={styles.form__inputWrapper}>
          <label htmlFor="city-to" className={styles.form__label}>Куда</label>
          <input
            id='city-to'
            placeholder='Город прилёта'
            className={styles.form__input}
            required
            value={cityToInput}
            onChange={e => setCityToInput(e.target.value)}
          />
        </div>

        <div className={styles.form__inputWrapper}>
          <label htmlFor="date-there" className={styles.form__label}>Туда</label>
          <input
            id='date-there'
            type="date"
            className={styles.form__input}
            required
            value={dateThereInput}
            onChange={e => setDateThereInput(e.target.value)}
            min={currentDateFormat}
          />
        </div>

        <div className={styles.form__inputWrapper}>
          <label htmlFor="date-back" className={styles.form__label}>Обратно</label>
          <input
            id="date-back"
            type="date"
            className={styles.form__input}
            value={dateBackInput}
            onChange={e => setDateBackInput(e.target.value)}
            min={currentDateFormat}
          />
        </div>

      </div>

      <div className={styles.form__btnField}>
        <button
          className={styles.form__btn}
          disabled={cityFromInput && cityToInput ? false : true}
        >
          Найти билеты
        </button>
      </div>
    </form>
  );
}
export default Search;
