import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  return data;
});
export const fetchDataByID = createAsyncThunk(
  "data/fetchDataByID",
  async (id) => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data;
  }
);
export const fetchComplectDataByIDs = createAsyncThunk(
  "data/fetchComplectDataByIDs",
  async (ids) => {
    const requests = ids.map((id) =>
      fetch(`/api/products/${id}`).then((res) => res.json())
    );
    const data = await Promise.all(requests);
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    product: null,
    complectItems: [],
    status: "idle",
    productStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка запроса всех данных
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Обработка запроса данных по ID
      .addCase(fetchDataByID.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchDataByID.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchDataByID.rejected, (state, action) => {
        state.productStatus = "failed";
        state.error = action.error.message;
      })
      // Обработка запроса данных по Комплекту
      .addCase(fetchComplectDataByIDs.pending, (state) => {
        state.complectStatus = "loading";
      })
      .addCase(fetchComplectDataByIDs.fulfilled, (state, action) => {
        state.complectStatus = "succeeded";
        state.complectItems = action.payload; // Add this line
      })
      .addCase(fetchComplectDataByIDs.rejected, (state, action) => {
        state.complectStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
