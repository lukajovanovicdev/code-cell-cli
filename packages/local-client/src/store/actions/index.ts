import { ActionType } from '../action-types';
import { Cell, CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      error: string;
    };
  };
}

export interface FetchCellsStartAction {
  type: ActionType.FETCH_CELLS_START;
}

export interface FetchCellsSuccessAction {
  type: ActionType.FETCH_CELLS_SUCCESS;
  payload: Cell[];
}

export interface FetchCellsFailedAction {
  type: ActionType.FETCH_CELLS_FAILED;
  payload: string;
}

export interface SaveCellsFailedAction {
  type: ActionType.SAVE_CELLS_FAILED;
  payload: string;
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction
  | FetchCellsStartAction
  | FetchCellsSuccessAction
  | FetchCellsFailedAction
  | SaveCellsFailedAction;
