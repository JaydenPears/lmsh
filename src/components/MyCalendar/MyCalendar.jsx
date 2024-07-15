// import libs:
import { useMemo } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ru from 'date-fns/locale/ru';
import moment from 'moment';

// include static:
import './MyCalendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './react-big-calendar.scss';

const locales = {
	'ru': ru,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const days = {
	0: 'ВС',
	1: 'ПН',
	2: 'ВТ',
	3: 'СР',
	4: 'ЧТ',
	5: 'ПТ',
	6: 'СБ',
};

const months = {
	0: 'Январь',
	1: 'Февраль',
	2: 'Март',
	3: 'Апрель',
	4: 'Май',
	5: 'Июнь',
	6: 'Июль',
	7: 'Август',
	8: 'Сентябрь',
	9: 'Октябрь',
	10: 'Ноябрь',
	11: 'Декабрь',
};

const formats = {
	weekdayFormat: (date, culture, localizer) => {
		return days[date.getDay()];
	},
	monthHeaderFormat: (date, culture, localizer) => {
		return `${months[date.getMonth()]} ${localizer.format(date, 'yyyy')} года`;
	}
};

const MyCalendar = ({myEventsList}) => {
	const { defaultDate, views } = useMemo(
		() => ({
		  defaultDate: moment().toDate(),
		  views: [Views.MONTH],
		}),
		[]
	)

	return (
		<Calendar
			selectable={false}
			localizer={localizer}
			events={myEventsList}
			startAccessor="start"
			endAccessor="end"
			views={views}
			defaultDate={defaultDate}
			style={{ height: "31rem" }}
			culture='ru'
			messages={{
				next: 'Следущий',
				previous: 'Предыдущий',
				today: 'Сегодня',
				month: "Месяц"
			}}
			formats={formats}
    	/>
	)
};

export default MyCalendar;