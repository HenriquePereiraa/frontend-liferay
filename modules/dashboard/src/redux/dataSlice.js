import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


export const getChartDatas = createAsyncThunk('cases/getChartRecentCases', async () => {
    const barData = [
        {
            "In Process": 28,
            "Closed": 50,
            "name": "Sep 12"
        },
        {
            "In Process": 22,
            "Closed": 81,
            "name": "Sep 19"
        },
        {
            "In Process": 59,
            "Closed": 55,
            "name": "Sep 26"
        },
        {
            "In Process": 9,
            "Closed": 13,
            "name": "Oct 03"
        }
    ]

	return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(barData);
        },1000);
    })
});

export const DataSlice = createSlice({
	name: 'cases',
	initialState: {
		chart: {},
		error: null,
		status: 'idle',
	},
	reducers: {},
	extraReducers: {
		[getChartDatas.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getChartDatas.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.chart = action.payload;
		},
		[getChartDatas.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.payload;
		},
	},
})

export default DataSlice.reducer;