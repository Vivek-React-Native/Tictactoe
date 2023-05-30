// import {MovieData} from '../Apis/MovieData';

// export const MOVIE = 'MOVIE';

// export const SuccessMovie = () => async dispatch => {
//   try {
//     const data = await MovieData();

//     return dispatch({
//       type: MOVIE,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// redux Saga
export const Data_Process = 'Data_Process';
export const Data_Success = 'Data_Success';
export const Data_Fail = 'Data_Fail';

export const Proccess_Data = () => ({
  type: Data_Process,
});

export const Success_Data = data => ({
  type: Data_Success,
  payload: data,
});
