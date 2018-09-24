/* eslint-disable import/prefer-default-export, no-param-reassign, consistent-return */
import {
  isEmpty,
  take,
  drop,
  concat,
} from 'ramda';

export const mapEvents = (takeLimit, mappedEvents = []) => {
  const getAndDropEvents = (eventsToMap) => {
    if (isEmpty(eventsToMap)) {
      return;
    }

    mappedEvents = concat(mappedEvents)([take(takeLimit, eventsToMap)]);
    eventsToMap = drop(takeLimit, eventsToMap);

    getAndDropEvents(eventsToMap);
    return mappedEvents;
  };

  return getAndDropEvents;
};
