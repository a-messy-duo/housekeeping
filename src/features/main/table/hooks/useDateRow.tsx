import { useLayoutEffect, useState } from 'react';

import { formatDate } from '~/features/shared/utils/date';

const dateHitMap: Set<string> = new Set();

const useDateRow = (date: Date) => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useLayoutEffect(() => {
    const stringDate = formatDate(date);

    if (dateHitMap.has(stringDate)) {
      setFormattedDate('');
    } else {
      setFormattedDate(stringDate);
      dateHitMap.add(stringDate);
    }
  }, []);

  return { formattedDate };
};

export default useDateRow;
