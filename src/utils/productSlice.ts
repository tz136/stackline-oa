import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../utils/utils';

import jsonData from '../assets/stackline_frontend_assessment_data_2021.json';

interface ProductState {
  data: Product[];
}

const initialState: ProductState = {
  data: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    });
  }
});

export const fetchDataAsync = createAsyncThunk('product/fetchDataAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return jsonData;
});

export default productSlice.reducer;
