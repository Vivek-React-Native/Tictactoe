import * as Actions from './HomeActions';
import {createAction} from 'redux-actions';

export const All_Actions = createAction({}, ...Object.values(Actions));
