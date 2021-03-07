import { Action } from "@ngrx/store";

let initialValue={
      color:"#1ec0e9",
}

// reducer
export function changColor(state=initialValue,action:Action){
  if(action.type==='change'){
      return {
        // color:color,
      }
  }

}
