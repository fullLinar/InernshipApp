import { createSelector } from 'reselect';

export const getAuth = (state) => {
  return state.authData.isAuth;
};

export const getColumnsList = (state) => {
  return state.columnsData.columns;
};

export const getIsFetching = (state) => {
  return state.columnsData.isFetching;
};

export const getIsAddInput = (state) => {
  return state.columnsData.isAddInput;
};

export const getNewColumnTitle = (state) => {
  return state.columnsData.columnTitle;
};

export const getColumnId = (state, props) => {
  return props.route.params.colId;
};

export const getNewColumnDescription = (state) => {
  return state.columnsData.columnDescription;
};

export const getIsShowChecked = (state) => {
  return state.prayersData.isShowCheckedPrayers;
};

export const getColumnData = createSelector(
  [getNewColumnTitle, getNewColumnDescription],
  (title, description) => {
    return {
      title,
      description,
    };
  },
);

export const getPrayers = (state) => {
  return state.prayersData.prayers;
};

export const getColumnPrayers = createSelector(
  [getPrayers, getColumnId],
  (prayers, colId) => {
    return prayers.filter((prayer) => {
      if (prayer.columnId === colId) return prayer;
    });
  },
);

export const prayerColumn = createSelector(
  [getColumnId, getColumnsList],
  (colId, columnList) => {
    let column = {};
    columnList.forEach((col) => (col.id === colId ? (column = col) : col));
    return column;
  },
);

const newPrayerTile = (state) => {
  return state.prayersData.title;
};

const newPrayerDescr = (state) => {
  return state.prayersData.description;
};

export const getNewPrayerData = createSelector(
  [prayerColumn, newPrayerTile, newPrayerDescr],
  (column, title, description) => {
    return {
      title,
      description,
      checked: false,
      column,
    };
  },
);

export const getThisPrayerId = (state, props) => {
  return props.route.params.prayerId;
};

export const getComments = (state) => {
  return state.commentsData.comments;
};

export const getPrayerCommetsId = createSelector(
  [getThisPrayerId, getPrayers],
  (prayerId, prayers) => {
    let prayerCommentsId = [];
    prayers.forEach((prayer) =>
      prayer.id === prayerId ? (prayerCommentsId = prayer.commentsIds) : prayer,
    );
    return prayerCommentsId;
  },
);
