import cn from 'classnames';
import logoIcon from '../../assets/logo.png';
import handLuggageIcon from '../../assets/hand-luggage-icon.svg';
import baggageIcon from '../../assets/baggage-icon.svg';
import { dateFormat } from '../../helper/dateFormat';
import styles from './Info.module.scss';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/search/searchSlice';
import { airports, tableTimes } from '../../constant/constants';

interface ITableTimes {
	from: string;
	to: string;
}

interface IInfoProps {
	ticketBack?: boolean;
}

const Info = ({ ticketBack = false }: IInfoProps): JSX.Element => {
	const data = useAppSelector(selectData);
	const [tableTime, setTableTime] = useState<ITableTimes>(tableTimes[0]);

	return (
		<div className={styles.info}>
			<div className={styles.info__top}>
				<div className={styles.info__tag}>Невозвратный</div>
				{ticketBack && <div className={styles.borderTicket}></div>}
			</div>
			<div className={styles.info__wrapper}>

				<div className={styles.info__logo}>
					<img src={logoIcon} alt="Логотип" />
					<span className={styles.info__logoName}>S7 Airlines</span>
				</div>

				<div className={styles.info__flight}>
					<div className={styles.info__flightWay}>
						<div className={styles.info__flightPlace}>
							<span className={styles.info__flightPlaceTime}>{tableTime.from}</span>
							<span className={styles.info__flightPlaceCity}>{ticketBack ? data.to : data.from}</span>
							<span className={styles.info__flightPlaceDate}>{ticketBack && data.back ? dateFormat(data.back) : dateFormat(data.there)}</span>
						</div>
						<div className={styles.info__flightDuration}>
							<div className={styles.info__flightDurationAirport}>
								<span>{ticketBack ? airports.back : airports.from}</span>
								<span>{ticketBack ? airports.from : airports.back}</span>
							</div>
							<div className={styles.info__flightDurationLine}>
								В пути 1 ч 55 мин
							</div>
						</div>
						<div className={styles.info__flightPlace}>
							<span className={styles.info__flightPlaceTime}>{tableTime.to}</span>
							<span className={styles.info__flightPlaceCity}>{ticketBack ? data.from : data.to}</span>
							<span className={styles.info__flightPlaceDate}>{ticketBack && data.back ? dateFormat(data.back) : dateFormat(data.there)}</span>
						</div>
					</div>
					<div className={styles.info__flightTime}>
						{tableTimes.map(time => (
							<button
								className={cn(styles.info__flightTimeBtn, {
									[styles.info__flightTimeBtnActive]: time === tableTime
								})}
								onClick={() => setTableTime(time)}
								key={time.from}
							>
								<span>{time.from}</span> - <span>{time.to}</span>
							</button>
						))}
					</div>
				</div>

				<div className={styles.info__baggage}>
					<img src={handLuggageIcon} alt="Ручная кладь" />
					<img src={baggageIcon} alt="Багаж" />
				</div>

			</div>
		</div>
	);
};

export default Info;