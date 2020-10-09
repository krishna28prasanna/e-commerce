import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const selectData = (state) => state.shopData;

export const selectShopData = createSelector(
  [selectData],
  (shopData) => shopData.data
);

export const selectCollection = memoize((routeName) =>
  createSelector([selectShopData], (data) =>
    data.find((item) => item.routeName == routeName)
  )
);
