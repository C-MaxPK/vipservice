import { useAppSelector } from '../../app/hooks';
import { selectDateBack } from '../../features/search/searchSlice';
import { priceFormat } from '../../helper/priceFormat';
import Info from '../Info/Info';
import styles from './Card.module.scss';

const price = 4150;

const Card = (): JSX.Element => {
	const dateBack = useAppSelector(selectDateBack);

	return (
		<div className={styles.card}>
			<div>
				<Info />
				{dateBack && <Info ticketBack={true} />}
			</div>
			<div className={styles.price}>{!dateBack ? priceFormat(price) : priceFormat(price * 2)}</div>
		</div>
	);
};

export default Card;
