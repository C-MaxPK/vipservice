export const currentDateFormat = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

export const dateFormat = (date: string): string => {
	if (date) {
		const year = new Date(date).getFullYear();
		const month = new Date(date).getMonth() + 1;
		const day = new Date(date).getDate();
		return `${day.toString().length === 1 ? '0' + day : day}.${month.toString().length === 1 ? '0' + month : month}.${year}`;
	} else {
		return 'не выбрана';
	}
};
